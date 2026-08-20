import { GlobalRegistrator } from '@happy-dom/global-registrator';
if (!GlobalRegistrator.isRegistered) GlobalRegistrator.register();

import { describe, expect, test } from 'bun:test';
import { strFromU8, strToU8, unzipSync, zipSync } from 'fflate';
import { createDocxEditor } from '../docx-editor.ts';

const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
const CT = 'http://schemas.openxmlformats.org/package/2006/content-types';
const REL = 'http://schemas.openxmlformats.org/package/2006/relationships';
const OD = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument';

function docx(text: string): Uint8Array {
  return zipSync({
    '[Content_Types].xml': strToU8(
      `<Types xmlns="${CT}"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>` +
        `<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`
    ),
    '_rels/.rels': strToU8(
      `<Relationships xmlns="${REL}"><Relationship Id="rId1" Type="${OD}" Target="word/document.xml"/></Relationships>`
    ),
    'word/document.xml': strToU8(
      `<w:document xmlns:w="${W}"><w:body><w:p><w:r><w:t>${text}</w:t></w:r></w:p></w:body></w:document>`
    ),
  });
}

function mount(text = 'before after') {
  const container = document.createElement('div');
  const editor = createDocxEditor({ container, document: docx(text) });
  if (!editor.surface) throw new Error('surface failed to mount');
  return editor;
}

describe('insertFieldSdt command', () => {
  test('saves exact field tag, alias, text, and content lock', async () => {
    const editor = mount();
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 7 },
    });

    expect(
      editor.exec({ type: 'insertFieldSdt', fieldId: 'customer-name', text: '[Customer]' })
    ).toEqual({ ok: true, changed: true });

    const saved = new Uint8Array(await editor.save());
    const xml = strFromU8(unzipSync(saved)['word/document.xml']!);
    expect(xml).toContain('<w:tag w:val="docx-field:customer-name"/>');
    expect(xml).toContain('<w:alias w:val="[Customer]"/>');
    expect(xml).toContain('<w:lock w:val="contentLocked"/>');
    expect(xml).toContain('<w:sdtContent><w:r><w:t>[Customer]</w:t></w:r></w:sdtContent>');
    expect(editor.surface!.state().selection).toEqual({
      anchor: { paragraphId, offset: 17 },
      head: { paragraphId, offset: 17 },
    });
  });

  test('replaces one selected range with one field control', async () => {
    const editor = mount('before selected after');
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 15 },
    });

    expect(editor.exec({ type: 'insertFieldSdt', fieldId: 42, text: '[Field]' })).toEqual({
      ok: true,
      changed: true,
    });
    expect(editor.query({ type: 'paragraphs' })[0]?.text).toBe('before [Field] after');

    const saved = new Uint8Array(await editor.save());
    const xml = strFromU8(unzipSync(saved)['word/document.xml']!);
    expect(xml.match(/<w:sdt>/g)).toHaveLength(1);
    expect(xml).toContain('<w:tag w:val="docx-field:42"/>');
  });

  test('Backspace removes the whole field control from its outer edge', async () => {
    const editor = mount();
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 7 },
    });
    editor.exec({ type: 'insertFieldSdt', fieldId: 'name', text: '[Name]' });

    editor.surface!.deleteBackward();

    expect(editor.query({ type: 'paragraphs' })[0]?.text).toBe('before after');
    const xml = strFromU8(unzipSync(new Uint8Array(await editor.save()))['word/document.xml']!);
    expect(xml).not.toContain('docx-field:name');
  });

  test('Backspace joins a new paragraph after a field control', () => {
    const editor = mount('before ');
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 7 },
    });
    editor.exec({ type: 'insertFieldSdt', fieldId: 'name', text: '[Name]' });

    editor.surface!.splitParagraph();
    expect(editor.surface!.session.paragraphIds()).toHaveLength(2);

    editor.surface!.deleteBackward();

    expect(editor.surface!.session.paragraphIds()).toHaveLength(1);
    expect(editor.query({ type: 'paragraphs' })[0]?.text).toBe('before [Name]');
    expect(editor.surface!.state().lastRejection).toBeNull();
  });

  test('select-all deletion removes a content-locked field control', async () => {
    const editor = mount();
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 7 },
    });
    editor.exec({ type: 'insertFieldSdt', fieldId: 'name', text: '[Name]' });
    const length = editor.query({ type: 'paragraphs' })[0]!.text.length;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 0 },
      head: { paragraphId, offset: length },
    });

    expect(editor.surface!.deleteSelection()).toBe(true);

    expect(editor.query({ type: 'paragraphs' })[0]?.text).toBe('');
    const xml = strFromU8(unzipSync(new Uint8Array(await editor.save()))['word/document.xml']!);
    expect(xml).not.toContain('docx-field:name');
  });

  test('deleting the exact field selection removes it as one atomic node', async () => {
    const editor = mount();
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 7 },
    });
    editor.exec({ type: 'insertFieldSdt', fieldId: 'name', text: '[Name]' });
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 13 },
    });

    expect(editor.surface!.deleteSelection()).toBe(true);
    expect(editor.query({ type: 'paragraphs' })[0]?.text).toBe('before after');
    const xml = strFromU8(unzipSync(new Uint8Array(await editor.save()))['word/document.xml']!);
    expect(xml).not.toContain('docx-field:name');
  });

  test('partial field selection remains content-locked', async () => {
    const editor = mount();
    const paragraphId = editor.surface!.session.paragraphIds()[0]!;
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 7 },
      head: { paragraphId, offset: 7 },
    });
    editor.exec({ type: 'insertFieldSdt', fieldId: 'name', text: '[Name]' });
    editor.surface!.setSelection({
      anchor: { paragraphId, offset: 8 },
      head: { paragraphId, offset: 12 },
    });

    editor.surface!.deleteSelection();

    expect(editor.query({ type: 'paragraphs' })[0]?.text).toBe('before [Name]after');
    const xml = strFromU8(unzipSync(new Uint8Array(await editor.save()))['word/document.xml']!);
    expect(xml).toContain('<w:tag w:val="docx-field:name"/>');
  });

  test('refuses invalid ids before writing', () => {
    const editor = mount();
    const before = editor.surface!.session.packageRevision();
    expect(editor.exec({ type: 'insertFieldSdt', fieldId: '', text: '[Field]' })).toEqual({
      ok: false,
      code: 'invalidArgs',
      reason: 'insertFieldSdt requires a fieldId of 1-53 characters',
    });
    expect(editor.surface!.session.packageRevision()).toBe(before);
  });
});
