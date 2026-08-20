import { O as OoxmlNode } from './ooxml-tree-CG0odFyi.cjs';

/**
 * What a revision wrapper asserts about the content inside it.
 *
 * `moveFrom` / `moveTo` are deliberately distinct from `delete` / `insert`: a move is one
 * decision with two halves, and presenting it as an unrelated deletion and insertion invites
 * resolving one without the other, which duplicates or loses the content.
 */
type RevisionKind = 'insert' | 'delete' | 'moveFrom' | 'moveTo' | 'format';
/**
 * One revision wrapper's provenance, as authored.
 *
 * `id` is the verbatim `@w:id` string rather than a number: `ST_DecimalNumber` restricts
 * `xsd:integer` with no bounds, so a file may carry a value outside the safe integer range, and
 * parsing it to a number would silently merge two distinct revisions.
 *
 * `date` is absent when the file omits it. `@w:date` is optional on `CT_TrackChange`, and
 * inventing one is a silent content change.
 */
interface RevisionAttribution {
    readonly kind: RevisionKind;
    readonly id: string;
    readonly author: string;
    readonly date?: string;
    /** The wrapper's node id, so a surface can address this exact site. */
    readonly nodeId: string;
}
/**
 * Which revisions layout resolves before producing pages.
 *
 * - `all-markup` shows both halves of every change.
 * - `proposed` shows what the document becomes if every change is accepted.
 * - `original` shows what it was before any of them.
 *
 * The last two are specified as equal to accept-all and reject-all OUTPUT, which is what makes
 * them testable, without either applying an op.
 */
type RevisionDisplayMode = 'all-markup' | 'proposed' | 'original';
/**
 * How a document renders tracked changes when nothing says otherwise.
 *
 * `all-markup` matches Word's own default: a reader who opens a document with pending changes
 * sees them, rather than a clean-looking document hiding edits nobody has accepted.
 */
declare const DEFAULT_REVISION_DISPLAY_MODE: RevisionDisplayMode;
/**
 * Whether content under this stack of revisions is laid out in the given mode.
 *
 * Containment governs, so a single enclosing wrapper the mode resolves away suppresses
 * everything inside it regardless of what the inner wrappers say. An insertion inside a
 * deletion does not survive the proposed result: the deletion it sits in was accepted.
 */
declare function revisionsVisible(revisions: readonly RevisionAttribution[], mode: RevisionDisplayMode): boolean;
/**
 * Every revision on a paragraph's own MARK, from `w:pPr/w:rPr/w:ins|w:del|w:moveFrom|w:moveTo`.
 *
 * All four members of `EG_ParaRPrTrackChanges`. A moved paragraph carries `w:moveFrom` on the
 * mark of the copy it left and `w:moveTo` on the mark of the copy it arrived at, so a move
 * that spans whole paragraphs is recorded here and nowhere else.
 *
 * `EG_ParaRPrTrackChanges` records that the pilcrow itself was inserted or deleted, which is how
 * Word writes a paragraph split or merge. It is not content — there is no text to decorate — so
 * a surface shows it as a mark of its own beside the paragraph, the way Word draws a struck-
 * through ¶.
 *
 * A LIST, because the group is `ins? del? moveFrom? moveTo?` and the first two can both be
 * there: that pair is what Word writes when a second author proposes removing a mark the first
 * proposed adding, and it is what this engine's own writer emits (`tree-op-tracked.ts`).
 * Answering with the first one hid the second author's decision from the PAGE. The review pane
 * walks the tree itself and always listed both, which is the worse shape of the two: a card
 * offering a decision the reader could see no sign of.
 *
 * Ordered as the file orders them, which is the order the group declares.
 *
 * Property-position `w:ins`/`w:del` stay `generic` in the tree deliberately, so this reads them
 * by name rather than by kind.
 */
declare function paragraphMarkRevisionsOf(paragraph: OoxmlNode): readonly RevisionAttribution[];
/**
 * The tracked FORMAT change on a paragraph's own mark, from `w:pPr/w:rPr/w:rPrChange`.
 *
 * `CT_ParaRPr` ends with it (§17.13.5.32), and Word writes it when a user changes the mark's
 * own run properties with tracking on. It reaches the fragment rather than a span because it
 * decorates no characters, and it is not in `props`: a fragment's `props` carry the mark's
 * `w:rPr` by NAME only, with none of its children.
 *
 * Note that `w:rPrChange/w:rPr` is `CT_ParaRPrOriginal`, which may carry its own revision
 * marks. Those describe the mark as it WAS and must not be read as live ones, which is why
 * this reads the change element's own attributes and never descends into it.
 */
declare function paragraphMarkFormatRevisionOf(paragraph: OoxmlNode): RevisionAttribution | null;
/**
 * The single decision a one-field reader sees.
 *
 * A DELETION wins when a mark carries both, for the reason paint draws it that way: a break
 * proposed and then unproposed ends up removed, so that is the decision a reader who can only
 * see one must see. One function decides it, so the deprecated field, the deprecated function
 * and the painted glyph cannot answer differently.
 */
declare function shownMarkRevision(revisions: readonly RevisionAttribution[]): RevisionAttribution | undefined;
/**
 * Does this decision, taken, remove the paragraph mark?
 *
 * A deletion does, and so does a `moveFrom`: the copy the paragraph moved OUT of goes away
 * when the move is accepted. `insert` and `moveTo` are the other half of each pair, and they
 * keep the break. Paint, the change bar and the resolved views all ask this one question, so
 * a `moveFrom` cannot end up struck through in the margin and blue on the glyph.
 */
declare function markRevisionRemovesMark(revision: RevisionAttribution): boolean;
/**
 * The one decision on a paragraph's mark that a single-field reader sees.
 *
 * @deprecated Reads one of the revisions a mark can carry. Use {@link paragraphMarkRevisionsOf},
 * which answers with all of them.
 */
declare function paragraphMarkRevisionOf(paragraph: OoxmlNode): RevisionAttribution | null;
/**
 * The tracked FORMAT change on a property list, from `w:rPrChange` or `w:pPrChange`.
 *
 * A property change alters no characters, so it has no span of its own to strike or underline.
 * Word marks the affected text and says what changed; the minimum a reader needs is to see that
 * this text's formatting is itself a pending decision.
 *
 * Read from the flattened property list because that is what layout already carries — the
 * change wrapper is a `w:rPr`/`w:pPr` child like any other.
 */
declare function formatRevisionOf(properties: readonly {
    readonly localName: string;
    readonly attributes?: Readonly<Record<string, string>>;
}[]): RevisionAttribution | null;
/** True when this stack of revisions marks its content as deleted from the live document. */
declare function revisionsAreDeletion(revisions: readonly RevisionAttribution[]): boolean;

export { DEFAULT_REVISION_DISPLAY_MODE as D, type RevisionDisplayMode as R, type RevisionAttribution as a, type RevisionKind as b, paragraphMarkRevisionOf as c, paragraphMarkRevisionsOf as d, revisionsVisible as e, formatRevisionOf as f, markRevisionRemovesMark as m, paragraphMarkFormatRevisionOf as p, revisionsAreDeletion as r, shownMarkRevision as s };
