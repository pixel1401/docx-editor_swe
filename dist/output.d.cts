import { R as ReviewAuthorInfo } from './semantic-paint-DnEfhO_W.cjs';
export { D as DEFAULT_FIELD_SHADING, F as FieldShadingMode, P as PaintOptions, a as RevisionAuthorAssignments, b as RevisionAuthorStyle, c as RevisionStyles, p as paintSemanticLayout } from './semantic-paint-DnEfhO_W.cjs';
import { S as SemanticLayout } from './semantic-records-Dq8SlCY8.cjs';
import './image-resources-CSlQmPIm.cjs';
import './tree-op-types-DOYNkKqD.cjs';
import './ooxml-tree-CG0odFyi.cjs';
import './ooxml-package-Cmbe_M04.cjs';
import './revision-projection-DRZMzoLD.cjs';

/** A rectangle in page-content coordinates, on a named page. */
interface OverlayRect {
    readonly pageIndex: number;
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    /**
     * Class for THIS rectangle, overriding the layer's default.
     *
     * One layer draws bands that mean different things — every commented range, and the one the
     * caret is in — and splitting them into two layers would stack two absolutely positioned
     * sheets over the pages just to vary a colour.
     */
    readonly className?: string;
    /**
     * WHOSE band this is, as CSS hooks on the rectangle: `data-review-author`, `data-review-author-slot`, and
     * `--doc-review-author-current` set to the colour that author resolves to.
     *
     * The same three the review card carries, and deliberately so — a host restyling one
     * reviewer writes one selector that reaches both the card and the text it annotates. The
     * band's DEFAULT colour does not change with the author (Word keeps every comment yellow);
     * this only makes the author reachable from CSS.
     *
     * The SAME resolved author `getReviewAuthors` hands back, rather than a shape of this
     * layer's own: one person is one object everywhere the review surface describes them.
     */
    readonly reviewAuthor?: ReviewAuthorInfo;
}
/**
 * How the selection overlay draws its rectangles over the painted pages.
 *
 * `scale` and `pageOffsetX` must match what the page painter used, or the highlight lands beside
 * the content it describes rather than on it.
 */
interface SelectionOverlayOptions {
    /** Points to CSS pixels. */
    readonly scale: number;
    /**
     * Per-page horizontal offset the page painter applied, by page index.
     *
     * A document whose pages differ in width centres each one individually, so a page is drawn
     * at an x its record does not carry. Without the same offset here a highlight would sit
     * beside the cells it describes.
     */
    readonly pageOffsetX?: ReadonlyMap<number, number>;
    /**
     * Class for each painted rectangle. Defaults to the cell-selection class, because a cell
     * rectangle was the only thing this layer drew when it was written.
     *
     * A retained TEXT range is drawn here too and must not look like selected cells — one is
     * "these cells are chosen", the other is "your selection is still here while you type in
     * this panel". Same geometry, different meaning, so the caller names the class.
     */
    readonly className?: string;
}
/**
 * Draw a set of rectangles over the pages.
 *
 * The layer is a SIBLING of the pages, never a child: the page painter sweeps anything it did
 * not paint out of its own subtree, and a stray child of a contenteditable is editable content
 * a keystroke could land in.
 */
declare function paintSelectionOverlay(layer: HTMLElement, layout: SemanticLayout, rects: readonly OverlayRect[], options: SelectionOverlayOptions): void;

export { type OverlayRect, ReviewAuthorInfo, type SelectionOverlayOptions, paintSelectionOverlay };
