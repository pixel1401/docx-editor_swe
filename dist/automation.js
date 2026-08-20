import { g } from "./chunk-PQM6DMNN.js";
export {
  c as AUTOMATION_COMMAND_OPERATIONS,
  b as AUTOMATION_QUERY_OPERATIONS,
  d as AUTOMATION_SOLITARY_OPERATIONS,
  a as HEADER_FOOTER_VARIANTS,
  f as isAutomationCommand,
  e as isSolitaryAutomationCommand,
} from "./chunk-PQM6DMNN.js";
import { yb, Lf, Uc, zb, Xf, Pe, Qe, Qf, Rf, Wc } from "./chunk-HLS3DWRK.js";
var I = Object.freeze({
    document: true,
    save: true,
    events: true,
    selection: false,
    scrolling: false,
    layout: false,
  }),
  D = Object.freeze({ kind: "body" });
function L(a, r = {}) {
  let o = yb(a, r.limits ?? {});
  if (!o.ok)
    return {
      ok: false,
      reason: o.reason,
      ...(o.detail ? { detail: o.detail } : {}),
    };
  let n = o.package.parts.get(o.package.mainDocumentPart);
  if (!n)
    return {
      ok: false,
      reason: "no-main-document-part",
      detail: o.package.mainDocumentPart,
    };
  let e = new Lf(o.package, Uc(n));
  return { ok: true, host: g({ port: M(e), capabilities: I }) };
}
function j(a, r, o) {
  let n = a.partFor(o);
  if (!n) return null;
  let e = Wc(a.currentPackage(), r, n.name);
  return e ? (a.replacePackageShell(e.pkg), e.relationshipId) : null;
}
function M(a) {
  let r = true;
  return {
    revision: () => a.packageRevision,
    currentPackage: () => (r ? a.currentPackage() : null),
    apply(o, n = D) {
      if (!r) return { ok: false, reason: "disposed" };
      let e = o((i) => j(a, i, n));
      if (e === null) return { ok: false, reason: "unsupported-target" };
      let t = a.transact(n, (i) => {
        for (let u of e) i.apply(u);
      });
      return t.ok
        ? { ok: true, changed: t.change !== null }
        : {
            ok: false,
            reason: t.detail ? `${t.reason}: ${t.detail}` : t.reason,
          };
    },
    applyLifecycle(o) {
      if (!r) return { ok: false, reason: "disposed" };
      let n = a.applyLifecycleOp(o);
      return n.ok
        ? { ok: true, changed: n.change !== null }
        : {
            ok: false,
            reason: n.detail ? `${n.reason}: ${n.detail}` : n.reason,
          };
    },
    applyCommentWrites(o, n) {
      if (!r) return { ok: false, reason: "disposed" };
      if (o.length === 0) return { ok: true, changed: false };
      let e = a.resolveStory(n);
      if (!e.ok) return { ok: false, reason: e.reason };
      if (
        (e.store.graftPackage(() => a.currentPackage()),
        o.every((u) => u.kind === "delete"))
      ) {
        let u = false,
          l = false,
          x = e.store.transact((T) => {
            T.applyPackage((d) => {
              let m = d;
              for (let s of o) {
                if (s.kind !== "delete") continue;
                let A = {
                    storyPartName: e.store.part.name,
                    ...(s.noteId === void 0 ? {} : { noteId: s.noteId }),
                  },
                  p =
                    s.parentCommentId === void 0
                      ? Pe(m, s.commentId, A)
                      : Qe(m, s.commentId, s.parentCommentId, A);
                if (p === null) return ((u = true), d);
                ((l ||= p !== m), (m = p));
              }
              return m;
            });
          });
        return u || !x.ok
          ? { ok: false, reason: "comment-delete-refused" }
          : (l && a.installPackageSnapshot(e.store.package),
            { ok: true, changed: l });
      }
      if (o.length !== 1) return { ok: false, reason: "mixed-comment-writes" };
      let t = o[0],
        i =
          t.kind === "create"
            ? Qf(e.store, {
                anchor: t.anchor,
                author: t.author,
                text: t.text,
                ...(t.date === void 0 ? {} : { date: t.date }),
              })
            : t.kind === "reply"
              ? Qf(e.store, {
                  anchor: t.anchor,
                  author: t.author,
                  text: t.text,
                  ...(t.date === void 0 ? {} : { date: t.date }),
                  replyToCommentId: t.parentCommentId,
                })
              : t.kind === "resolve"
                ? Rf(e.store, t.commentId, t.resolved)
                : null;
      return i === null
        ? { ok: false, reason: "unsupported-comment-write" }
        : i.ok
          ? (a.replacePackageShell(e.store.package),
            {
              ok: true,
              changed: true,
              ...("commentId" in i ? { commentId: i.commentId } : {}),
            })
          : { ok: false, reason: i.reason };
    },
    applyCustomNodeWrite(o, n) {
      if (!r) return { ok: false, reason: "disposed" };
      let e = a.resolveStory(n);
      if (!e.ok) return { ok: false, reason: e.reason };
      e.store.graftPackage(() => a.currentPackage());
      let t = Xf(e.store, o);
      return t.ok
        ? (a.replacePackageShell(e.store.package),
          { ok: true, changed: t.change !== null })
        : {
            ok: false,
            reason: t.detail ? `${t.reason}: ${t.detail}` : t.reason,
          };
    },
    save: () => (r ? zb(a.currentPackage()) : null),
    subscribe: (o) => a.subscribe(() => o()),
    dispose() {
      r = false;
    },
  };
}
export { I as SERVER_AUTOMATION_CAPABILITIES, L as createServerAutomationHost };
