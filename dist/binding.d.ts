import { Node, Schema } from "prosemirror-model";
import { O as OoxmlProperty } from "./tree-op-types-CZw9QhWX.js";
import { T as TreeDocxSession } from "./tree-session-DUBhL9NT.js";
export {
  D as DocumentStyleEntry,
  M as MapResult,
  O as OpenTreeSessionResult,
  P as PROJECTION_ORIGIN,
  a as TreeApplyResult,
  b as TreeBindingRejection,
  c as TreeSessionRejection,
  d as bodyParagraphs,
  e as docToTreeOps,
  o as openTreeSession,
  p as partHasNode,
  r as reconcileDoc,
  t as treeToDoc,
} from "./tree-session-DUBhL9NT.js";
export {
  S as StoryScope,
  a as StoryTargetRejection,
} from "./custom-node-writes-2clI36T9.js";
import { EditorView } from "prosemirror-view";
import "./ooxml-tree-CG0odFyi.js";
import "./image-resources-e13t-pgy.js";
import "./ooxml-package-BrxTmTsZ.js";
import "./review-support-Bl9sN8cv.js";
import "./contracts/modules.js";
import "./revision-projection-u4nT52xT.js";
import "./hf-references-CAp1xTv6.js";
import "./tree-store-9TaX-L0V.js";
import "./note-nodes-CZQXU6Fg.js";

/** Attributes carried by a projected paragraph. */
interface ParagraphAttrs {
  /** The canonical tree node id this paragraph projects. */
  readonly nodeId: string | null;
  /** Accepted `w:pPr` children, as authored. */
  readonly props: readonly OoxmlProperty[];
}
/**
 * The ProseMirror schema the canonical tree projects into.
 *
 * Deliberately minimal. It models only what an editing surface must manipulate directly —
 * paragraphs, text, tabs, breaks, and run properties as marks — because everything it does NOT
 * model stays on the tree and is preserved losslessly there. Widening this schema moves content
 * out of the tree's custody, which is the opposite of what it is for.
 *
 * The node and mark unions are written out rather than inferred from the spec below. Inferred,
 * tsup's dts worker emits their members in an order that varies run to run, so the generated
 * `binding.api.md` differed between builds of identical source and `api:check` failed at random.
 * An explicit annotation pins the emitted order. Adding a node or mark to the spec means adding
 * it here too — the compiler rejects the assignment otherwise.
 */
declare const treeSchema: Schema<
  | "doc"
  | "paragraph"
  | "text"
  | "tab"
  | "hardBreak"
  | "pageBreak"
  | "unknownInline",
  "runProps"
>;
/** The accepted run properties carried by a text node, or an empty list. */
declare function runPropsOf(node: Node): readonly OoxmlProperty[];

/** How a tree surface is mounted. */
interface TreeSurfaceOptions {
  /** Called after every commit or refusal, so a host can show revision and rejection state. */
  readonly onChange?: (state: TreeSurfaceState) => void;
}
/**
 * Everything observable about a mounted tree surface.
 *
 * `lastRejection` is part of the state rather than a thrown error because a refused edit is an
 * ordinary outcome here — the binding refuses anything it cannot explain, and the host shows why
 * instead of the edit vanishing.
 */
interface TreeSurfaceState {
  readonly revision: number;
  readonly canUndo: boolean;
  readonly canRedo: boolean;
  /** The reason the last transaction was refused, or null when the last one committed. */
  readonly lastRejection: string | null;
}
/**
 * A mounted ProseMirror view bound to a {@link TreeDocxSession}.
 *
 * Every committed transaction becomes tree ops through the binding; a transaction the binding
 * cannot explain is refused and reported through {@link TreeSurfaceState.lastRejection}, leaving
 * the tree untouched.
 */
interface TreeSurface {
  readonly view: EditorView;
  state(): TreeSurfaceState;
  undo(): void;
  redo(): void;
  /** Toggle one accepted run property across the current selection. */
  toggleRunProperty(
    localName: string,
    attributes?: Record<string, string>,
  ): void;
  destroy(): void;
}
/**
 * Mount an editable ProseMirror view over a session's body story.
 *
 * The reference binding, not the production surface — `mountPaginatedSurface` is what the shipped
 * editor uses. This one exists to exercise the tree↔ProseMirror contract directly, without
 * pagination or painting in the way.
 *
 * Call {@link TreeSurface.destroy} to release the view.
 */
declare function mountTreeSurface(
  mount: HTMLElement,
  session: TreeDocxSession,
  options?: TreeSurfaceOptions,
): TreeSurface;

export {
  type ParagraphAttrs,
  TreeDocxSession,
  type TreeSurface,
  type TreeSurfaceOptions,
  type TreeSurfaceState,
  mountTreeSurface,
  runPropsOf,
  treeSchema,
};
