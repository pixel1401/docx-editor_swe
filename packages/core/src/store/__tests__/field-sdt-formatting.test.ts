import {
  applyTreeOp,
  paragraphTextOf,
  readOoxmlPart,
  serializeOoxmlPart,
  validateTreeOp,
} from '../index.ts';
import type { OoxmlPart, TreeDocOp } from '../index.ts';
import { describe, expect, it } from 'bun:test';

const fixture = (tag = 'docx-field:123', outerLock = false, bound = false) => {
  const control = `<w:sdt><w:sdtPr><w:tag w:val="${tag}"/><w:lock w:val="contentLocked"/>${bound ? '<w:dataBinding w:xpath="/value" w:storeItemID="{123}"/>' : ''}</w:sdtPr><w:sdtContent><w:r><w:t>[Field]</w:t></w:r></w:sdtContent></w:sdt>`;
  const paragraph = `<w:p><w:r><w:t>Before </w:t></w:r>${control}<w:r><w:t> after</w:t></w:r></w:p>`;
  const result = readOoxmlPart(
    `<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${outerLock ? `<w:sdt><w:sdtPr><w:lock w:val="contentLocked"/></w:sdtPr><w:sdtContent>${paragraph}</w:sdtContent></w:sdt>` : paragraph}</w:body></w:document>`,
    {
      name: '/word/document.xml',
      contentType:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml',
    }
  );
  if (!result.ok) throw new Error(result.reason);
  const findParagraph = (node: OoxmlPart['root']): string | undefined => {
    if (node.kind === 'paragraph') return node.id;
    for (const child of node.children) {
      if (child.kind === 'textValue') continue;
      const id = findParagraph(child);
      if (id) return id;
    }
  };
  return { part: result.part, paragraphId: findParagraph(result.part.root)! };
};

describe('document field tag formatting', () => {
  it.each<{ localName: string; attributes: Record<string, string> }>([
    { localName: 'b', attributes: {} },
    { localName: 'i', attributes: {} },
    { localName: 'color', attributes: { val: 'FF0000' } },
    { localName: 'sz', attributes: { val: '32' } },
    { localName: 'highlight', attributes: { val: 'yellow' } },
  ])('formats mixed text and tags: $localName', (property) => {
    const { part, paragraphId } = fixture();
    const result = applyTreeOp(part, {
      op: 'setRunProperties',
      paragraphId,
      start: 0,
      end: 20,
      properties: [property],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const xml = serializeOoxmlPart(result.part);
    expect(xml.match(new RegExp(`<w:${property.localName}(?:[ />])`, 'g'))).toHaveLength(3);
    expect(xml).toContain('<w:tag w:val="docx-field:123"/>');
    expect(xml).toContain('<w:lock w:val="contentLocked"/>');
    expect(paragraphTextOf(result.part, paragraphId)).toBe('Before [Field] after');
    const reloaded = readOoxmlPart(xml, part);
    expect(reloaded.ok).toBe(true);
    expect(serializeOoxmlPart(part)).not.toContain('<w:rPr>');
    expect(
      validateTreeOp(result.part, {
        op: 'deleteText',
        paragraphId,
        start: 8,
        end: 9,
      })
    ).toBe('locked');
  });

  it('allows paragraph styles and clearing run formatting', () => {
    const { part, paragraphId } = fixture();
    for (const op of [
      {
        op: 'setParagraphProperties',
        paragraphId,
        properties: [{ localName: 'jc', attributes: { val: 'center' } }],
      },
      { op: 'setParagraphMarkProperties', paragraphId, properties: [] },
      {
        op: 'setRunProperties',
        paragraphId,
        start: 7,
        end: 14,
        properties: [],
      },
    ] satisfies TreeDocOp[])
      expect(validateTreeOp(part, op)).toBeNull();
  });

  it('keeps tag text protected against edits and mixed deletion', () => {
    const { part, paragraphId } = fixture();
    for (const op of [
      { op: 'insertText', paragraphId, offset: 9, text: 'x' },
      { op: 'deleteText', paragraphId, start: 0, end: 20 },
    ] satisfies TreeDocOp[])
      expect(validateTreeOp(part, op)).toBe('locked');
  });

  it.each([
    ['ordinary locked control', 'other-tag', false, false],
    ['locked parent control', 'docx-field:123', true, false],
    ['bound field control', 'docx-field:123', false, true],
  ] as const)('preserves protection: %s', (_name, tag, outerLock, bound) => {
    const { part, paragraphId } = fixture(tag, outerLock, bound);
    expect(
      validateTreeOp(part, {
        op: 'setRunProperties',
        paragraphId,
        start: 0,
        end: 20,
        properties: [{ localName: 'b', attributes: {} }],
      })
    ).toBe(bound ? 'bound' : 'locked');
  });
});
