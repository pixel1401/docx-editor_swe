import { describe, expect, test } from 'bun:test';
import { docx, handlesAt, open, roots, savedMainXml } from './support/protocol.ts';

describe('content-control table replacement', () => {
  test('authors a full-width styled repeating header row', () => {
    const host = open(
      docx(
        `<w:sdt><w:sdtPr><w:tag w:val="table"/></w:sdtPr><w:sdtContent>` +
          `<w:p><w:r><w:t>placeholder</w:t></w:r></w:p>` +
          `</w:sdtContent></w:sdt>`
      )
    );
    const control = handlesAt(
      host.execute({
        operations: [
          { op: 'getContentControlsByTag', scope: { body: roots(host).body }, tag: 'table' },
        ],
      }),
      0
    )[0]!;

    const result = host.execute({
      operations: [
        {
          op: 'replaceContentControlWithTable',
          contentControl: control,
          table: {
            columns: ['Name'],
            rows: [['Ada']],
            fullWidth: true,
            header: { bold: true, fillColor: '#F2F2F2' },
          },
        },
      ],
    });

    expect(result.ok).toBe(true);
    const xml = savedMainXml(host);
    expect(xml).toMatch(/<w:tblW\b(?=[^>]*w:type="pct")(?=[^>]*w:w="5000")/);
    expect(xml).toContain('<w:tblHeader/>');
    expect(xml).toContain('<w:b/>');
    expect(xml).toMatch(
      /<w:shd\b(?=[^>]*w:val="clear")(?=[^>]*w:color="auto")(?=[^>]*w:fill="F2F2F2")/
    );
    expect(xml).toContain('w:val="single"');
  });
});
