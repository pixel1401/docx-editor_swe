import { expect, test } from 'bun:test';
import { docx, handlesAt, open, roots, savedMainXml } from './support/protocol.ts';

for (const operation of ['setContentControlValue', 'replaceContentControlWithTable'] as const) {
  test(operation + ' refuses tracked edits without changing the template', () => {
    const host = open(
      docx(
        '<w:sdt><w:sdtPr><w:tag w:val="template"/></w:sdtPr><w:sdtContent><w:p><w:r><w:t>placeholder</w:t></w:r></w:p></w:sdtContent></w:sdt>'
      )
    );
    const control = handlesAt(
      host.execute({
        operations: [
          { op: 'getContentControlsByTag', scope: { body: roots(host).body }, tag: 'template' },
        ],
      }),
      0
    )[0]!;
    expect(
      host.execute({
        operations: [{ op: 'setChangeTrackingMode', mode: 'TrackMineOnly', author: 'Reviewer' }],
      }).ok
    ).toBe(true);
    const before = savedMainXml(host);
    const result = host.execute({
      operations: [
        operation === 'setContentControlValue'
          ? {
              op: operation,
              contentControl: control,
              value: { kind: 'text', text: 'replacement' },
              force: true,
            }
          : {
              op: operation,
              contentControl: control,
              table: { columns: ['Name'], rows: [['Ada']] },
            },
      ],
    });
    expect(result.ok).toBe(false);
    expect(result.results[0]?.status).toBe('error');
    expect(savedMainXml(host)).toBe(before);
  });
}
