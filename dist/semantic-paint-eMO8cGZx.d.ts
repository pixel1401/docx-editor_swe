import {
  C as ContentControlBoundaryRecord,
  S as SemanticLayout,
} from "./semantic-records-B-qbrnp2.js";
import {
  V as ValidatedImageBytesHandle,
  R as RenderableImageMime,
} from "./image-resources-e13t-pgy.js";

/**
 * Everything a host can say about ONE author's presentation. Every field is optional and
 * every field is presentation-only — nothing here is ever serialised into the document.
 *
 * Deliberately about the PAINTED DOCUMENT (which only the painter can style) plus the
 * author's identity data. Review-card DESIGN is not configured here: the review chrome
 * follows `color` as its accent automatically, and everything further is composition —
 * a custom card reading this style through the review surface's `useReviewAuthor`, or
 * CSS on the cards' `data-review-author`/`data-review-author-slot` hooks.
 *
 * @public
 */
interface RevisionAuthorStyle {
  /**
   * Ink and decoration colour of this author's changes in the document — and the accent
   * the review chrome keys on (avatar disc, card variable, marker).
   */
  color?: string;
  /** Background wash behind this author's changes in the document. */
  background?: string;
  /**
   * Class names added to every painted span of this author's changes, for styling the
   * typed fields do not cover. Keep the rules metric-safe (outlines, shadows, accents):
   * the engine measures the text it paints, and a class that resizes glyphs drifts the
   * page from its layout.
   */
  spanClassName?: string;
  /** Avatar image for this author; the packaged card renders it in place of initials. */
  avatarUrl?: string;
}
/**
 * Per-author style assignments.
 *
 * Keys match `w:author` exactly; a value is a CSS colour or a full
 * {@link RevisionAuthorStyle}. `others` says what authors WITHOUT an entry take: the
 * `--doc-review-author-N` ramp by default, or `'kind'` to leave them on the kind colours —
 * which is how "highlight these reviewers, leave everyone else green and red" is said.
 *
 * @public
 */
interface RevisionAuthorAssignments {
  /** Authors without an entry: the ramp (default), or the `'kind'` colours. */
  readonly others?: "kind" | "author";
  readonly authors: Readonly<Record<string, string | RevisionAuthorStyle>>;
}
/**
 * How painted tracked changes are coloured.
 *
 * - `'author'` (the DEFAULT) — every change takes its author's colour from the
 *   `--doc-review-author-N` ramp, assigned by order of first appearance in the document.
 *   Word's own default, and the reason it is this engine's: a paragraph three people
 *   edited has to read as three people. Restyle a slot under `.docx-editor` to change the
 *   ramp.
 * - `'kind'` — insertions and deletions take the two kind colours
 *   (`--doc-revision-insertion` / `--doc-revision-deletion`), so "added" and "removed" are
 *   what a reader tells apart at a glance, whoever proposed them.
 * - {@link RevisionAuthorAssignments} — style the named authors; `others` decides whether
 *   the rest take the ramp (the default) or the kind colours.
 *
 * Presentation only: nothing here is ever serialised into the document.
 *
 * @public
 */
type RevisionStyles = "kind" | "author" | RevisionAuthorAssignments;
/**
 * One document author, resolved: who, which ramp slot, and what they draw in.
 *
 * @public
 */
interface ReviewAuthorInfo {
  /** The `w:author` string, exactly as the file carries it. */
  readonly author: string;
  /**
   * Rank by order of first appearance — an UNBOUNDED index, not a ramp slot.
   *
   * The ramp defines {@link REVIEW_AUTHOR_SLOTS} colours and every DOM hook wraps into it,
   * so the ninth author ranks 8 here and carries `data-review-author-slot="0"`. Building a
   * selector from this value needs the same wrap: `slot % 8`.
   */
  readonly slot: number;
  /**
   * The colour this author is DRAWN IN by the review chrome — their declared colour, or
   * their ramp slot's token.
   *
   * Not necessarily what the document paints. `'kind'`, and `others: 'kind'` for an author
   * with no declaration, colour the painted text by insertion/deletion instead, while the
   * cards keep the per-author accent this reports.
   */
  readonly color: string;
  /** The host-supplied style, normalised; absent when the author rides the ramp. */
  readonly style?: RevisionAuthorStyle;
}

/** Host port for safe blob URLs — only called for {@link ImageResourceState.kind} `ready`. */
interface PaintImageUrlPort {
  create(handle: ValidatedImageBytesHandle, mime: RenderableImageMime): string;
  revoke(url: string): void;
}
/** Localized refusal labels; adapters supply i18n-backed implementations. */
interface DrawingPaintStrings {
  readonly unsupportedFormat: (format: string) => string;
  readonly nonPictureGraphic: (kind: string) => string;
  readonly missingResource: string;
  readonly externalResource: string;
  readonly invalidResource: string;
  readonly contentMismatch: string;
  readonly decodeFailed: string;
  readonly resourceLimit: string;
  readonly pendingResource: string;
}

/**
 * When a field's result is drawn on its grey block, following Word's own View option.
 *
 * `when-selected` is Word's default and the reason the option exists at all: a document dense
 * with cross-references turns largely grey under `always`, and under `never` a reader cannot
 * tell computed text from typed text at all.
 */
type FieldShadingMode = "never" | "when-selected" | "always";
/** Word's default: shaded only while the caret is inside the field. */
declare const DEFAULT_FIELD_SHADING: FieldShadingMode;
/**
 * How a layout is painted into DOM. Every field is optional.
 *
 * The painted pages ARE the editable surface, so everything here is presentation-only — nothing
 * set through these options is ever serialised back into the document.
 */
interface PaintOptions {
  /** Points to CSS pixels. 96/72 renders a point as a CSS point at 100% zoom. */
  readonly scale?: number;
  /** Generated paragraphs that paint as non-editable navigation surfaces. */
  readonly readOnlyParagraphIds?: ReadonlySet<string>;
  /**
   * Empty-TOC begin paragraphs that paint subtle identifiable furniture. Paint-only — never
   * serialised into the document.
   */
  readonly emptyTocPlaceholderIds?: ReadonlySet<string>;
  /** Marks painted pages as presentational, so assistive tech reads the editable projection. */
  readonly ariaHidden?: boolean;
  /**
   * Page indices to build in detail (task 9.4).
   *
   * Omitted means all of them. A page left out keeps its size and position but no content,
   * so the document's height and page count are unchanged and scrolling to it reveals it
   * instead of reflowing everything underneath.
   */
  readonly materialize?: ReadonlySet<number>;
  /**
   * Family-alias lookup for fonts the host registered on behalf of THIS document (see
   * {@link PaintContext.fontAlias}). Painted runs emit the alias ahead of the declared
   * family, so a file can never shadow a family name the host page uses.
   */
  readonly fontAlias?: (family: string) => string | undefined;
  /** See {@link PaintContext.defaultFontFamily}. */
  readonly defaultFontFamily?: string;
  /** See {@link PaintContext.fieldShading}. */
  readonly fieldShading?: FieldShadingMode;
  /** See {@link PaintContext.shadeFormFields}. */
  readonly shadeFormFields?: boolean;
  /**
   * How tracked changes are coloured: by AUTHOR through the `--doc-review-author-N`
   * ramp (the default, as in Word), by kind, or by author with host-pinned colours.
   * See {@link RevisionStyles}.
   */
  readonly revisionStyles?: RevisionStyles;
  /**
   * Relationship id of the header/footer story currently open for editing.
   *
   * When set, the matching `[data-docx-hf]` container is editable and every body
   * `.docx-page-content` box is inert; all other furniture stays read-only.
   */
  readonly activeHeaderFooterRId?: string;
  /**
   * Sheet that hosts the active visual occurrence of a shared furniture part.
   *
   * Required with {@link activeHeaderFooterRId} so only one painted copy receives
   * `data-docx-hf-active` / the engine caret when the same rId appears on many pages.
   */
  readonly activeHeaderFooterPageIndex?: number;
  /**
   * On-demand content-control boundary chrome (show-all and/or caret-entry).
   *
   * Furniture only — never contributes layout records or changes page geometry. Omitted or
   * empty means no control chrome is painted. Folded into the paint-reuse key so a toggle
   * rebuilds furniture without a layout pass.
   */
  readonly contentControlChrome?: {
    readonly showAll?: boolean;
    /** Control ids whose boundaries are visible because the caret is inside them. */
    readonly activeIds?: ReadonlySet<string>;
    /**
     * Control ids whose boundaries are visible because the pointer is over them.
     * Used for TOC hover chrome without projecting a persistent caret-active state.
     *
     * Deliberately OUTSIDE the paint-reuse key: hover must never rebuild a page. The
     * surface toggles `data-hover` / `data-boundary-visible` on the painted chrome it
     * already has, and this set only tells a page that rebuilds for some OTHER reason
     * which of its controls is currently under the pointer.
     */
    readonly hoverIds?: ReadonlySet<string>;
    /**
     * Control ids whose boundary furniture is painted by something else.
     *
     * An empty TOC paints its own placeholder box on the begin paragraph, so drawing the
     * control boundary as well left two rounded rectangles (of different heights) plus a
     * label chip stacked over one empty region.
     */
    readonly suppressedIds?: ReadonlySet<string>;
    /** Checkbox control ids whose canonical `w14:checked` state is on. */
    readonly checkedIds?: ReadonlySet<string>;
    /** Non-SDT structured regions that intentionally reuse content-control chrome. */
    readonly additionalBoundaries?: readonly ContentControlBoundaryRecord[];
    /** Control ids that represent TOC regions (hover-only chrome; never caret-sticky). */
    readonly tocControlIds?: ReadonlySet<string>;
  };
  readonly drawingStrings?: DrawingPaintStrings;
  readonly imageUrlPort?: PaintImageUrlPort;
}

/**
 * Paint a whole layout into a container, reusing the pages that did not change.
 *
 * The DOM is built with `createElement` and `textContent` only — no file-derived string is
 * ever parsed as markup — and stray children (nothing this module painted) are removed, so
 * the container's content is always exactly the painted pages.
 */
declare function paintSemanticLayout(
  container: HTMLElement,
  layout: SemanticLayout,
  options?: PaintOptions,
): void;

export {
  DEFAULT_FIELD_SHADING as D,
  type FieldShadingMode as F,
  type PaintOptions as P,
  type ReviewAuthorInfo as R,
  type RevisionAuthorAssignments as a,
  type RevisionAuthorStyle as b,
  type RevisionStyles as c,
  type DrawingPaintStrings as d,
  paintSemanticLayout as p,
};
