import { T as TextMeasurer, S as SemanticLayout, B as BlockFragmentRecord, C as ContentControlBoundaryRecord, a as StyleSpanRecord } from './semantic-records-Dq8SlCY8.cjs';

/** A caret position in the model. */
interface SemanticPosition {
    readonly paragraphId: string;
    readonly offset: number;
}
/** A caret position with the geometry that renders it. */
interface CaretGeometry {
    readonly position: SemanticPosition;
    /** Page-relative, in the same coordinate space as the line boxes. */
    readonly x: number;
    readonly y: number;
    readonly height: number;
    readonly lineId: string;
    readonly pageIndex: number;
}
/**
 * A selection as two semantic positions — never as DOM nodes.
 *
 * `anchor` is where the selection started and `head` is where it currently ends, so `head` before
 * `anchor` is an ordinary backwards selection rather than an error. Collapsed when the two are
 * equal, which is what a caret is.
 */
interface SemanticSelection {
    readonly anchor: SemanticPosition;
    readonly head: SemanticPosition;
}
/** One painted selection rectangle, in page-relative layout points. */
interface SelectionRect {
    readonly pageIndex: number;
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}
declare function caretStops(layout: SemanticLayout, measurer?: TextMeasurer): CaretGeometry[];
/**
 * Caret stops for one story's block fragments (header/footer), in reading order.
 *
 * Coordinates stay story-relative — the same space `hitTestFragments` and furniture paint
 * use — so arrow motion follows tab-stop geometry and projected field atoms without mixing
 * body sheet offsets.
 */
declare function caretStopsForBlocks(layout: SemanticLayout, pageIndex: number, fragments: readonly BlockFragmentRecord[], measurer?: TextMeasurer): CaretGeometry[];
/**
 * How caret geometry is resolved.
 *
 * `preferPage` disambiguates a paragraph that paints on SEVERAL pages — a shared header appears
 * once per page, and without a preference the caret could be placed on any of its copies.
 */
interface CaretAtOptions {
    readonly measurer?: TextMeasurer;
    /**
     * Prefer geometry from this sheet when the same paragraph paints on multiple pages
     * (shared header/footer copies).
     */
    readonly preferredPageIndex?: number;
}
/** Geometry for one model position, or null when it is not laid out. */
declare function caretAt(layout: SemanticLayout, position: SemanticPosition, measurerOrOptions?: TextMeasurer | CaretAtOptions): CaretGeometry | null;
/**
 * The caret position nearest a point, in PAGE-CONTENT coordinates.
 *
 * Never returns null for a point inside the document: a click in the margin, past the end of
 * a line, or below the last line still has an obvious intended caret, and refusing to answer
 * would make those clicks do nothing.
 *
 * The rules live in `semantic-hit-test.ts`, which answers with the cell address and the
 * on-glyphs flag a pointer controller needs too; this keeps the geometry-only shape for
 * callers that want nothing else.
 */
declare function hitTestSemantic(layout: SemanticLayout, point: {
    readonly x: number;
    readonly y: number;
    readonly pageIndex?: number;
}): CaretGeometry | null;
/**
 * Innermost content-control boundary at a page-content point, or null outside every control.
 *
 * Prefers the deepest nesting depth when nested boundaries share geometry.
 */
declare function contentControlAtSemantic(layout: SemanticLayout, point: {
    readonly x: number;
    readonly y: number;
    readonly pageIndex?: number;
}): ContentControlBoundaryRecord | null;
/** Layout-published content-control boundaries in document order. */
declare function contentControlsInLayout(layout: SemanticLayout): readonly ContentControlBoundaryRecord[];
/**
 * One caret movement, in Word's own vocabulary.
 *
 * Visual rather than logical where the two differ: `left` means left on screen, which in
 * right-to-left text is forward through the string.
 */
type NavigationCommand = 'left' | 'right' | 'up' | 'down' | 'wordLeft' | 'wordRight' | 'lineStart' | 'lineEnd' | 'documentStart' | 'documentEnd' | 'pageUp' | 'pageDown';
/**
 * The text of one paragraph, read back from the layout records.
 *
 * Word boundaries need characters, and the records carry them: every span holds the text it
 * was laid out from, keyed by the source range it covers. Reading them back keeps word
 * motion in the interaction lane instead of making it a second consumer of the model.
 */
declare function paragraphTextFromLayout(layout: SemanticLayout, paragraphId: string): string;
/** Story-scoped stops are required when navigating inside an open header or footer. */
interface MoveCaretOptions {
    /** Precomputed active-story stops; body navigation keeps the indexed default. */
    readonly stops?: readonly CaretGeometry[];
    readonly measurer?: TextMeasurer;
}
/** Move a caret; vertical movement carries a desired X through shorter lines. */
declare function moveCaret(layout: SemanticLayout, position: SemanticPosition, command: NavigationCommand, desiredX?: number | null, options?: MoveCaretOptions): {
    position: SemanticPosition;
    desiredX: number | null;
} | null;
/**
 * The anchor an IME composition is attached to.
 *
 * Composition needs a position that survives the intermediate transactions it produces, so
 * it is expressed in model coordinates and re-resolved against each new layout rather than
 * cached as geometry.
 */
declare function compositionAnchor(layout: SemanticLayout, position: SemanticPosition): CaretGeometry | null;
/** The style spans a selection touches, for reporting active formatting. */
declare function spansInSelection(layout: SemanticLayout, selection: SemanticSelection): StyleSpanRecord[];

export { type CaretGeometry as C, type MoveCaretOptions as M, type NavigationCommand as N, type SemanticPosition as S, type SemanticSelection as a, type SelectionRect as b, type CaretAtOptions as c, caretAt as d, caretStops as e, caretStopsForBlocks as f, compositionAnchor as g, contentControlAtSemantic as h, contentControlsInLayout as i, hitTestSemantic as j, moveCaret as m, paragraphTextFromLayout as p, spansInSelection as s };
