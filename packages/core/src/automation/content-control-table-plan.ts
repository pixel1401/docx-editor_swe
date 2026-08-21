import type { TreeDocOp } from '../store/store/tree-ops.ts';
import type { AutomationContentControlRead } from './content-controls.ts';
import type { AutomationOperation } from './operations.ts';
import type { PlannedOperation } from './plan.ts';
import type { AutomationErrorCode, AutomationValue } from './protocol.ts';
import type { AutomationStoryReads } from './reads.ts';

type ReplaceContentControlWithTable = Extract<
  AutomationOperation,
  { readonly op: 'replaceContentControlWithTable' }
>;

type ContentControlTarget = {
  readonly reads: AutomationStoryReads;
  readonly control: AutomationContentControlRead;
};

type Refuse = (code: AutomationErrorCode, message: string, detail?: string) => PlannedOperation;

/** Validate and plan one block content-control replacement as a table. */
export function planContentControlTableReplacement<Plan>(
  operation: ReplaceContentControlWithTable,
  controlOf: (handle: unknown) => ContentControlTarget | PlannedOperation,
  planFor: (reads: AutomationStoryReads) => Plan,
  pinWrite: (plan: Plan) => PlannedOperation | null,
  reserveTableParagraphs: (
    plan: Plan,
    beforeParagraphId: string,
    count: number
  ) => PlannedOperation | null,
  refuse: Refuse,
  applied: AutomationValue
): PlannedOperation {
  const found = controlOf(operation.contentControl);
  if (!('control' in found)) return found;
  const columns = operation.table?.columns;
  const rows = operation.table?.rows;
  const widthTwips = operation.table?.widthTwips ?? 9360;
  const header = operation.table?.header;
  const fullWidth = operation.table?.fullWidth;
  if (
    !Array.isArray(columns) ||
    columns.length === 0 ||
    columns.some((column) => typeof column !== 'string') ||
    !Array.isArray(rows) ||
    rows.some(
      (row) =>
        !Array.isArray(row) ||
        row.length !== columns.length ||
        row.some((cell) => typeof cell !== 'string')
    )
  ) {
    return refuse(
      'unsupported-content',
      'table must contain columns and rectangular string rows',
      'table'
    );
  }
  if (found.control.paragraphIds.length !== 1) {
    return refuse(
      'unsupported-content',
      'table replacement requires one block control paragraph',
      'block-control'
    );
  }
  if (!Number.isInteger(widthTwips) || widthTwips < columns.length || widthTwips > 9360) {
    return refuse('unsupported-content', 'table width is invalid', 'widthTwips');
  }
  if (
    header !== undefined &&
    (typeof header !== 'object' ||
      header === null ||
      (header.bold !== undefined && typeof header.bold !== 'boolean') ||
      (header.fillColor !== undefined && !/^#[0-9A-Fa-f]{6}$/.test(header.fillColor)))
  ) {
    return refuse('unsupported-content', 'table header style is invalid', 'header');
  }
  if (fullWidth !== undefined && typeof fullWidth !== 'boolean') {
    return refuse('unsupported-content', 'table fullWidth must be a boolean', 'fullWidth');
  }
  const pin = pinWrite(planFor(found.reads));
  if (pin) return pin;
  const paragraphId = found.control.paragraphIds[0]!;
  const reservation = reserveTableParagraphs(
    planFor(found.reads),
    paragraphId,
    (rows.length + 1) * columns.length
  );
  if (reservation) return reservation;
  const ops: readonly TreeDocOp[] = [
    {
      op: 'insertTable',
      beforeParagraphId: paragraphId,
      rows: rows.length + 1,
      cols: columns.length,
      columnWidthTwips: Math.floor(widthTwips / columns.length),
      cellText: [columns, ...rows],
      header,
      fullWidth,
    },
    { op: 'removeContentControl', controlId: found.control.nodeId, keepContent: true },
    { op: 'deleteBlock', blockId: paragraphId },
  ];
  return {
    ok: true,
    kind: 'command',
    story: found.reads.story,
    ops,
    answer: () => applied,
  };
}
