import { contentControlPropertiesOf } from '../package/content-control-nodes.ts';
import type { OoxmlPart } from '../package/ooxml-tree.ts';
import {
  contentControlAncestorsOf,
  declaredLockOf,
  effectiveContentLockAt,
  findContentControl,
} from './tree-op-nodes.ts';
import type { TreeDocOp } from './tree-op-types.ts';

export function isFieldSdtFormatting(op: TreeDocOp): boolean {
  return (
    op.op === 'setRunProperties' ||
    op.op === 'setParagraphProperties' ||
    op.op === 'setParagraphMarkProperties'
  );
}

/** Formatting exempts field label locks, while other edits retain every lock. */
export function contentEditLockedAt(part: OoxmlPart, nodeId: string, formatting: boolean): boolean {
  if (!formatting) return effectiveContentLockAt(part, nodeId).content;
  const controls = contentControlAncestorsOf(part, nodeId);
  const self = findContentControl(part, nodeId);
  if (self) controls.push(self);
  return controls.some((control) => {
    const tag = contentControlPropertiesOf(control).tag;
    return declaredLockOf(control).content && !tag?.startsWith('docx-field:');
  });
}
