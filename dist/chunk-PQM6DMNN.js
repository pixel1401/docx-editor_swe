import {
  se as se$1,
  Fa,
  Zd,
  nd,
  qd,
  od,
  xd,
  Ub,
  Tb,
  Wf,
  Vf,
  Sd,
  we,
  qe,
  ue,
  Mf,
  Nf,
  Pf,
  Of,
  Vc,
  Ua,
  Xc,
  Sa,
  Od,
  Qd,
  hg,
  fg,
  kg,
  gg,
  lg,
  Pd,
  Cg,
  Dg,
  Lc,
  Kc,
  Fe,
  Ad,
  pf,
  He,
  Hf,
  qg,
  ma,
  Ga,
  Tf,
  Uf,
  Le,
  Me,
  Ke,
  rg,
  og,
  X,
  Ge,
  Oc,
  Ra,
  Gf,
} from "./chunk-HLS3DWRK.js";
var Ht = Object.freeze(["default", "first", "even"]),
  ct = Object.freeze({ kind: "body" });
function B(n) {
  switch (n.kind) {
    case "body":
      return "body";
    case "note":
      return `note:${n.noteKind}:${String(n.noteId)}`;
    default:
      return `${n.kind}:${String(n.sectionIndex)}:${n.variant}`;
  }
}
function tn(n) {
  if (typeof n != "object" || n === null) return false;
  let e = n;
  return e.kind === "body"
    ? true
    : e.kind === "note"
      ? (e.noteKind === "footnote" || e.noteKind === "endnote") &&
        Number.isInteger(e.noteId)
      : e.kind !== "header" && e.kind !== "footer"
        ? false
        : Number.isInteger(e.sectionIndex) &&
          e.sectionIndex >= 0 &&
          Ht.includes(e.variant);
}
var rr = [
    "getDocument",
    "getBody",
    "getParagraphs",
    "getSpanParagraphs",
    "getText",
    "getSpanText",
    "getParagraphId",
    "search",
    "getFont",
    "getParagraphFormat",
    "getStyle",
    "getSections",
    "getPageSetup",
    "getFurniture",
    "getNotes",
    "getNoteBody",
    "getNoteText",
    "getNoteKind",
    "getLists",
    "getListId",
    "getListById",
    "getListParagraphs",
    "getParagraphList",
    "getListLevel",
    "getHyperlink",
    "getBookmarks",
    "getBookmarkName",
    "getBookmarkRange",
    "getComments",
    "getCommentReplies",
    "getCommentId",
    "getCommentAuthor",
    "getCommentDate",
    "getCommentText",
    "getCommentRange",
    "getCommentResolved",
    "getRevisions",
    "getRevisionType",
    "getRevisionAuthor",
    "getRevisionDate",
    "getRevisionRange",
    "getContentControls",
    "getContentControlById",
    "getContentControlsByTag",
    "getContentControlsByTitle",
    "getContentControlTag",
    "getContentControlTitle",
    "getContentControlFileId",
    "getContentControlSubtype",
    "getContentControlLock",
    "getContentControlIsBound",
    "getContentControlPlaceholderShown",
    "getContentControlTemporary",
    "getContentControlText",
    "getContentControlParagraphs",
    "getContentControlRange",
  ],
  qn = [
    "insertText",
    "replaceSpan",
    "insertParagraph",
    "splitParagraph",
    "deleteParagraph",
    "selectSpan",
    "selectBookmark",
    "setFont",
    "setParagraphFormat",
    "setStyle",
    "setPageSetup",
    "deleteNote",
    "setListLevel",
    "insertListParagraph",
    "setHyperlink",
    "insertComment",
    "setCommentResolved",
    "replyToComment",
    "deleteComment",
    "acceptRevision",
    "rejectRevision",
    "acceptAllRevisions",
    "rejectAllRevisions",
    "setContentControlValue",
    "setContentControlProperties",
    "deleteContentControl",
    "insertContentControlText",
    "insertContentControl",
    "insertCustomNode",
  ],
  to = [
    "deleteNote",
    "insertComment",
    "setCommentResolved",
    "replyToComment",
    "insertCustomNode",
  ],
  eo = new Set(to);
function Yt(n) {
  return eo.has(n.op);
}
var no = new Set(qn);
function Gt(n) {
  return no.has(n.op);
}
function oo() {
  let n = globalThis.crypto,
    e = n?.getRandomValues;
  if (typeof e != "function")
    throw new Error(
      "automation: no secure random source. globalThis.crypto.getRandomValues is required to scope document handles to one host.",
    );
  let s = e.call(n, new Uint8Array(16)),
    a = "";
  for (let l of s) a += l.toString(16).padStart(2, "0");
  return a;
}
function ro(n) {
  return typeof n == "object" && n !== null && "kind" in n && "ref" in n;
}
function en() {
  let n = new Map(),
    e = new Map(),
    s = new Map(),
    a = new Map(),
    l = oo(),
    u = null,
    f = (m, y) => {
      let v = (a.get(m) ?? 0) + 1;
      a.set(m, v);
      let g = `${m}:${l}:${String(v)}`;
      return (n.set(g, y), Object.freeze({ kind: m, ref: g }));
    },
    k = (m, y, v) => {
      let g = `${m}\0${y}`,
        I = s.get(g);
      if (I) return Object.freeze({ kind: m, ref: I });
      let C = f(m, v);
      return (s.set(g, C.ref), C);
    };
  return {
    document() {
      return ((u ??= f("document", { kind: "document" })), u);
    },
    body(m) {
      return k("body", B(m), { kind: "body", story: m });
    },
    paragraph(m, y) {
      let v = e.get(m);
      if (v) return Object.freeze({ kind: "paragraph", ref: v });
      let g = f("paragraph", { kind: "paragraph", paragraphId: m, story: y });
      return (e.set(m, g.ref), g);
    },
    section(m) {
      return k("section", String(m), { kind: "section", index: m });
    },
    note(m, y) {
      return k("note", `${m}:${String(y)}`, {
        kind: "note",
        noteKind: m,
        noteId: y,
      });
    },
    comment(m, y) {
      return k("comment", `${B(y)}\0${m}`, {
        kind: "comment",
        commentId: m,
        story: y,
      });
    },
    revision(m, y) {
      return k("revision", `${B(y)}\0${m}`, {
        kind: "revision",
        revisionId: m,
        story: y,
      });
    },
    bookmark(m, y) {
      return k("bookmark", `${B(y)}\0${m}`, {
        kind: "bookmark",
        name: m,
        story: y,
      });
    },
    list(m, y) {
      return k("list", `${B(y)}\0${m}`, { kind: "list", numId: m, story: y });
    },
    contentControl(m, y) {
      return k("contentControl", `${B(y)}\0${m}`, {
        kind: "contentControl",
        nodeId: m,
        story: y,
      });
    },
    retarget(m, y) {
      let v = e.get(m);
      if (!v || m === y) return;
      let g = n.get(v);
      !g ||
        g.kind !== "paragraph" ||
        (e.delete(m),
        n.set(v, { kind: "paragraph", paragraphId: y, story: g.story }),
        e.has(y) || e.set(y, v));
    },
    resolve(m, y) {
      if (!ro(m) || m.kind !== y || typeof m.ref != "string") return null;
      let v = n.get(m.ref);
      return !v || v.kind !== y ? null : v;
    },
  };
}
var ao = 255,
  so = Object.freeze({
    nameOf: () => null,
    idOf: () => null,
    defaultId: null,
    present: false,
  });
function nn(n) {
  let e = Lc(n);
  if (!e) return so;
  let s = new Map(),
    a = new Map(),
    l = null;
  for (let u of Kc(e).values())
    if (u.type === "paragraph") {
      if ((s.set(u.styleId, u.name), u.name !== null)) {
        let f = u.name.trim().toLowerCase();
        a.has(f) || a.set(f, u.styleId);
      }
      u.isDefault && l === null && (l = u.styleId);
    }
  return Object.freeze({
    nameOf: (u) => s.get(u) ?? null,
    idOf: (u) => a.get(u.trim().toLowerCase()) ?? null,
    defaultId: l,
    present: true,
  });
}
function Lt(n, e, s) {
  let a = Fa(n, e);
  if (!a || a.kind !== "paragraph") return null;
  let l = io(Qd(Od(a), "pStyle"));
  return l !== null
    ? s.nameOf(l)
    : s.defaultId === null
      ? null
      : s.nameOf(s.defaultId);
}
function io(n) {
  if (!n) return null;
  for (let e of n.attributes) if (e.localName === "val") return e.value;
  return null;
}
function Et(n, e) {
  if (typeof n != "string" || n.trim().length === 0)
    return { ok: false, detail: "style: not a name" };
  if (n.length > ao) return { ok: false, detail: "style: name too long" };
  if (!X(n)) return { ok: false, detail: "style: not valid XML text" };
  if (!e.present)
    return { ok: false, detail: "style: this document defines no styles" };
  let s = e.idOf(n);
  return s === null
    ? {
        ok: false,
        detail:
          "style: this document defines no paragraph style with that name",
      }
    : { ok: true, styleId: s };
}
var rn = 20,
  lo = 31680,
  uo = 1999,
  co = Object.freeze({
    bold: null,
    italic: null,
    name: null,
    size: null,
    color: null,
  });
function G(n, e) {
  if (!n) return null;
  for (let s of n.attributes) if (s.localName === e) return s.value;
  return null;
}
function Jt(n) {
  if (!n) return null;
  let e = G(n, "val");
  if (e === null) return true;
  let s = e.trim().toLowerCase();
  return !(s === "0" || s === "false" || s === "off" || s === "none");
}
function po(n) {
  if (n === null) return null;
  let e = n.trim();
  return /^[0-9a-fA-F]{6}$/.test(e) ? `#${e.toUpperCase()}` : null;
}
function mo(n) {
  if (n === null) return null;
  let e = Number(n.trim());
  return !Number.isFinite(e) || e <= 0 ? null : e / 2;
}
function mt(n) {
  if (n === null) return null;
  let e = Number(n.trim());
  return Number.isFinite(e) ? e / rn : null;
}
function Rt(n) {
  if (n.length === 0) return null;
  let e = n[0];
  if (e === null) return null;
  for (let s of n) if (s !== e) return null;
  return e;
}
function an(n, e) {
  let s = [];
  for (let a of e)
    for (let l of lg(n, a.paragraphId, a.start, a.end)) s.push(Pd(l));
  return s.length === 0
    ? co
    : {
        bold: Rt(s.map((a) => Jt(Qd(a, "b")))),
        italic: Rt(s.map((a) => Jt(Qd(a, "i")))),
        name: Rt(
          s.map((a) => {
            let l = Qd(a, "rFonts"),
              u = G(l, "ascii");
            return u === null || u.length === 0 ? null : u;
          }),
        ),
        size: Rt(s.map((a) => mo(G(Qd(a, "sz"), "val")))),
        color: Rt(s.map((a) => po(G(Qd(a, "color"), "val")))),
      };
}
var fo = Object.freeze({
    left: "Left",
    start: "Left",
    center: "Centered",
    right: "Right",
    end: "Right",
    both: "Justified",
    distribute: "Justified",
  }),
  yo = Object.freeze({
    Left: "left",
    Centered: "center",
    Right: "right",
    Justified: "both",
  });
function go(n) {
  let e = G(Qd(n, "jc"), "val");
  return e === null ? "Unknown" : (fo[e.trim().toLowerCase()] ?? "Unknown");
}
function sn(n, e, s) {
  let a = Fa(n, e);
  if (!a || a.kind !== "paragraph") return null;
  let l = Od(a),
    u = Qd(l, "spacing"),
    f = Qd(l, "ind");
  return {
    alignment: go(l),
    style: Lt(n, e, s),
    firstLineIndent: ho(f),
    leftIndent: mt(G(f, "left") ?? G(f, "start")),
    rightIndent: mt(G(f, "right") ?? G(f, "end")),
    lineSpacing: mt(G(u, "line")),
    spaceBefore: mt(G(u, "before")),
    spaceAfter: mt(G(u, "after")),
    widowControl: Jt(Qd(l, "widowControl")),
  };
}
function ho(n) {
  let e = mt(G(n, "firstLine"));
  if (e !== null) return e;
  let s = mt(G(n, "hanging"));
  return s === null ? null : -s;
}
function Mt(n, e) {
  if (typeof n != "number" || !Number.isFinite(n))
    return { ok: false, detail: `${e}: not a measurement` };
  let s = Math.round(n * rn);
  return Math.abs(s) > lo
    ? { ok: false, detail: `${e}: out of range` }
    : { ok: true, value: s };
}
function dn(n) {
  let e = [];
  if (n.bold !== void 0) {
    if (typeof n.bold != "boolean")
      return { ok: false, detail: "bold: not a boolean" };
    e.push({ localName: "b", ...(n.bold ? {} : { attributes: { val: "0" } }) });
  }
  if (n.italic !== void 0) {
    if (typeof n.italic != "boolean")
      return { ok: false, detail: "italic: not a boolean" };
    e.push({
      localName: "i",
      ...(n.italic ? {} : { attributes: { val: "0" } }),
    });
  }
  if (n.name !== void 0) {
    let s = n.name;
    if (typeof s != "string" || s.length === 0 || s.length > 128)
      return { ok: false, detail: "name: not a font name" };
    if (!X(s)) return { ok: false, detail: "name: not valid XML text" };
    e.push({ localName: "rFonts", attributes: { ascii: s, hAnsi: s, cs: s } });
  }
  if (n.size !== void 0) {
    let s = n.size;
    if (typeof s != "number" || !Number.isFinite(s) || s <= 0)
      return { ok: false, detail: "size: not a positive number of points" };
    let a = Math.round(s * 2);
    if (a < 1 || a > uo) return { ok: false, detail: "size: out of range" };
    (e.push({ localName: "sz", attributes: { val: String(a) } }),
      e.push({ localName: "szCs", attributes: { val: String(a) } }));
  }
  if (n.color !== void 0) {
    let s = n.color;
    if (typeof s != "string" || !/^#[0-9a-fA-F]{6}$/.test(s.trim()))
      return { ok: false, detail: "color: not a #RRGGBB triplet" };
    e.push({
      localName: "color",
      attributes: { val: s.trim().slice(1).toUpperCase() },
    });
  }
  return e.length === 0
    ? { ok: false, detail: "no formatting was asked for" }
    : { ok: true, value: e };
}
function ln(n, e, s, a) {
  let l = Fa(n, e);
  if (!l || l.kind !== "paragraph")
    return { ok: false, detail: "not a paragraph" };
  let u = Od(l),
    f = [];
  if (s.style !== void 0) {
    let C = Et(s.style, a);
    if (!C.ok) return { ok: false, detail: C.detail };
    f.push({ localName: "pStyle", attributes: { val: C.styleId } });
  }
  if (s.alignment !== void 0) {
    let C = yo[s.alignment];
    if (C === void 0)
      return { ok: false, detail: `alignment: ${String(s.alignment)}` };
    f.push({ localName: "jc", attributes: { val: C } });
  }
  let k = Qd(u, "ind"),
    m = on(k),
    y = false;
  if (s.firstLineIndent !== void 0) {
    let C = Mt(s.firstLineIndent, "firstLineIndent");
    if (!C.ok) return C;
    (delete m.firstLine,
      delete m.hanging,
      C.value < 0
        ? (m.hanging = String(-C.value))
        : (m.firstLine = String(C.value)),
      (y = true));
  }
  for (let [C, R, N] of [
    ["leftIndent", "left", "start"],
    ["rightIndent", "right", "end"],
  ]) {
    let P = s[C];
    if (P === void 0) continue;
    let L = Mt(P, C);
    if (!L.ok) return L;
    (delete m[N], (m[R] = String(L.value)), (y = true));
  }
  y && f.push({ localName: "ind", attributes: m });
  let v = Qd(u, "spacing"),
    g = on(v),
    I = false;
  for (let [C, R] of [
    ["spaceBefore", "before"],
    ["spaceAfter", "after"],
  ]) {
    let N = s[C];
    if (N === void 0) continue;
    let P = Mt(N, C);
    if (!P.ok) return P;
    if (P.value < 0) return { ok: false, detail: `${C}: out of range` };
    ((g[R] = String(P.value)), (I = true));
  }
  if (s.lineSpacing !== void 0) {
    let C = Mt(s.lineSpacing, "lineSpacing");
    if (!C.ok) return C;
    if (C.value <= 0) return { ok: false, detail: "lineSpacing: out of range" };
    ((g.line = String(C.value)), (g.lineRule ??= "auto"), (I = true));
  }
  if (
    (I && f.push({ localName: "spacing", attributes: g }),
    s.widowControl !== void 0)
  ) {
    if (typeof s.widowControl != "boolean")
      return { ok: false, detail: "widowControl: not a boolean" };
    f.push({
      localName: "widowControl",
      ...(s.widowControl ? {} : { attributes: { val: "0" } }),
    });
  }
  return f.length === 0
    ? { ok: false, detail: "no formatting was asked for" }
    : { ok: true, value: hg(fg(n, e), f) };
}
function on(n) {
  let e = Object.create(null);
  if (!n) return e;
  for (let s of n.attributes) e[s.localName] = s.value;
  return e;
}
function un() {
  let n = false,
    e = false,
    s = false;
  return {
    conflict(a) {
      let l = Gt(a),
        u = Yt(a),
        f = a.op === "deleteComment";
      return (u && n) || (e && l)
        ? {
            message: "that command commits on its own and cannot share a batch",
            detail: a.op,
          }
        : (f && n && !s) || (s && l && !f)
          ? {
              message:
                "comment deletions may share a batch only with other comment deletions",
              detail: a.op,
            }
          : null;
    },
    note(a) {
      Gt(a) &&
        ((n = true),
        Yt(a) && (e = true),
        a.op === "deleteComment" && (s = true));
    },
    get hasCommands() {
      return n;
    },
  };
}
var cn = 20,
  ko = 63360;
function lt(n) {
  return Math.round((n / cn) * 100) / 100;
}
function Ao(n, e) {
  if (typeof n != "number" || !Number.isFinite(n)) return null;
  let s = Math.round(n * cn);
  return s > ko || s < 0 || (s === 0 && !e) ? null : s;
}
var vo = [
  ["pageWidth", "pageWidthTwips", false],
  ["pageHeight", "pageHeightTwips", false],
  ["topMargin", "marginTopTwips", true],
  ["rightMargin", "marginRightTwips", true],
  ["bottomMargin", "marginBottomTwips", true],
  ["leftMargin", "marginLeftTwips", true],
];
function pn(n) {
  if (typeof n != "object" || n === null)
    return {
      ok: false,
      reason: "that is not a page setup",
      detail: "not-an-object",
    };
  let e = n,
    s = {},
    a = 0;
  for (let [u, f, k] of vo) {
    let m = e[u];
    if (m === void 0) continue;
    let y = Ao(m, k);
    if (y === null)
      return {
        ok: false,
        reason: `that is not a value for ${u}`,
        detail: String(m),
      };
    ((s[f] = y), (a += 1));
  }
  let l = e.orientation;
  if (l !== void 0) {
    if (l !== "portrait" && l !== "landscape")
      return {
        ok: false,
        reason: "that is not an orientation",
        detail: String(l),
      };
    ((s.orientation = l), (a += 1));
  }
  return a === 0
    ? {
        ok: false,
        reason: "that page setup names nothing to write",
        detail: "empty",
      }
    : { ok: true, value: s };
}
function bo(n) {
  let e = pf(n),
    s = e.widthTwips > e.heightTwips ? "landscape" : "portrait";
  return Object.freeze({
    pageWidth: lt(e.widthTwips),
    pageHeight: lt(e.heightTwips),
    orientation: s,
    topMargin: lt(e.topTwips),
    rightMargin: lt(e.rightTwips),
    bottomMargin: lt(e.bottomTwips),
    leftMargin: lt(e.leftTwips),
    headerDistance: lt(e.headerTwips),
    footerDistance: lt(e.footerTwips),
    gutter: lt(e.gutterTwips),
  });
}
function Io(n, e) {
  if (!e) return null;
  let s = null,
    a = (l, u, f) => {
      if (s !== null || l.kind === "textValue" || f > 64) return;
      let k = l.kind === "paragraph" ? l.id : u;
      if (l.id === e.id) {
        s = k;
        return;
      }
      for (let m of l.children) a(m, k, f + 1);
    };
  return (a(n.root, null, 0), s);
}
function mn(n, e, s) {
  let a = Tb(e.root);
  return Object.freeze(
    a.map((l, u) => {
      let f = s[u];
      return Object.freeze({
        index: u,
        markParagraphId: Io(e, l),
        pageSetup: bo(l),
        titlePage: f?.titlePage ?? false,
        evenAndOddHeaders: f?.evenAndOddHeaders ?? false,
      });
    }),
  );
}
var Zt = "\r",
  xo = Object.freeze({
    nameOf: () => null,
    idOf: () => null,
    defaultId: null,
    present: false,
  }),
  So = Object.freeze([]),
  Ro = Object.freeze([]),
  fn = Object.freeze([]),
  Co = Object.freeze({
    package: null,
    body: null,
    story: () => null,
    storyOf: () => null,
    sections: () => Ro,
    furniture: () => fn,
    noteIds: () => ({ ok: true, ids: gn }),
    styles: () => xo,
  });
function Oo(n) {
  return n.kind === "textValue"
    ? So
    : Object.freeze(
        n.children
          .filter((e) => e.kind !== "textValue")
          .map((e) => {
            let s = [];
            He([e], s, 0);
            let a =
                e.kind === "paragraph"
                  ? "paragraph"
                  : e.kind === "table"
                    ? "table"
                    : "other",
              l = e.kind === "paragraph" && Qd(Od(e), "sectPr") !== void 0;
            return Object.freeze({
              id: e.id,
              kind: a,
              paragraphIds: Object.freeze(s.map((u) => u.id)),
              removable: a !== "other" && !l,
            });
          }),
      );
}
function Qt(n, e, s, a, l) {
  let u = Ge(a),
    f = Object.freeze(u.map((g) => g.id)),
    k = new Map(),
    m = new Map();
  u.forEach((g, I) => {
    (k.set(g.id, I), m.set(g.id, g));
  });
  let y = new Map(),
    v = (g) => {
      if (!k.has(g)) return null;
      let I = y.get(g);
      if (I !== void 0) return I;
      let C = Gf(e, g) ?? "";
      return (y.set(g, C), C);
    };
  return {
    story: n,
    part: e,
    root: a,
    scope: s,
    paragraphIds: f,
    blocks: Oo(a),
    has: (g) => k.has(g),
    indexOf: (g) => k.get(g) ?? -1,
    paragraph(g) {
      let I = m.get(g);
      return I ? { nodeId: g, paraId: Oc(I), text: v(g) ?? "" } : null;
    },
    node: (g) => m.get(g) ?? null,
    paragraphText: v,
    text: () => f.map((g) => v(g) ?? "").join(Zt),
    styles: l,
  };
}
function yn(n) {
  let e = n.parts.get(n.mainDocumentPart);
  if (!e) return Co;
  let s,
    a = () => (s ??= nn(n)),
    l,
    u = () => (l ??= Ub(n)),
    f,
    k = new Map(),
    m = new Map(),
    y = (R) => {
      let N = m.get(R);
      if (N) return N;
      let P = Zd(n, R);
      if (!P) {
        let X = { ok: true, ids: gn };
        return (m.set(R, X), X);
      }
      let L = [],
        M = new Set(),
        j = new Set(),
        Z = 0,
        U = false;
      for (let X of P.root.children) {
        if (nd(X) !== R) continue;
        if (((Z += 1), X.kind !== "note")) {
          U = true;
          continue;
        }
        if (!qd(X)) continue;
        let et = od(X);
        if (et === null) {
          U = true;
          continue;
        }
        M.has(et) ? j.add(et) : (M.add(et), L.push(et));
      }
      let E =
        Z > xd
          ? { ok: false, reason: "truncated" }
          : U
            ? { ok: false, reason: "malformed" }
            : j.size > 0
              ? {
                  ok: false,
                  reason: "duplicates",
                  duplicateIds: Object.freeze([...j]),
                }
              : { ok: true, ids: Object.freeze(L) };
      return (m.set(R, E), E);
    },
    v = (R) => {
      let N = u()[R.sectionIndex];
      return N
        ? ((R.kind === "header" ? N.headers : N.footers).get(R.variant) ?? null)
        : null;
    },
    g = (R) => {
      if (R.kind === "body") {
        let P = Fe(e);
        return P ? Qt(R, e, { kind: "body" }, P, a) : null;
      }
      if (R.kind === "note") {
        let P = y(R.noteKind);
        if (!P.ok || !P.ids.includes(R.noteId)) return null;
        let L = Zd(n, R.noteKind);
        if (!L) return null;
        let M = Ad(L.root, R.noteId);
        return !M || !qd(M)
          ? null
          : Qt(R, L, { kind: "notesPart", noteKind: R.noteKind }, M, a);
      }
      let N = v(R);
      return N
        ? Qt(R, N.part, { kind: "headerFooter", rId: N.rId }, N.part.root, a)
        : null;
    },
    I = (R) => {
      let N = B(R);
      if (k.has(N)) return k.get(N) ?? null;
      let P = g(R);
      return (k.set(N, P), P);
    };
  return {
    package: n,
    get body() {
      return I(ct);
    },
    story: I,
    storyOf: (R) => {
      if (I(ct)?.has(R)) return ct;
      for (let [P] of u().entries())
        for (let L of ["header", "footer"])
          for (let M of Ht) {
            let j = { kind: L, sectionIndex: P, variant: M };
            if (I(j)?.has(R)) return j;
          }
      for (let P of ["footnote", "endnote"]) {
        let L = y(P);
        if (L.ok)
          for (let M of L.ids) {
            let j = { kind: "note", noteKind: P, noteId: M };
            if (I(j)?.has(R)) return j;
          }
      }
      return null;
    },
    sections: () => (f ??= mn(n, e, u())),
    furniture(R) {
      let N = u()[R];
      if (!N) return fn;
      let P = [];
      for (let L of ["header", "footer"]) {
        let M = L === "header" ? N.headers : N.footers;
        for (let j of Ht) {
          let Z = M.get(j);
          Z &&
            P.push(
              Object.freeze({ kind: L, variant: j, declared: !Z.inherited }),
            );
        }
      }
      return Object.freeze(P);
    },
    noteIds: y,
    styles: a,
  };
}
var gn = Object.freeze([]);
function ot(n, e) {
  return { ok: false, code: n, detail: e };
}
function rt(n) {
  return { ok: true, value: n };
}
function K(n, e, s, a) {
  let l = s.resolve(n, e);
  if (!l || (l.kind !== "body" && l.kind !== "paragraph"))
    return ot("invalid-handle", `not-a-${e}-handle`);
  let u = a.story(l.story);
  return u ? rt(u) : ot("invalid-handle", `no-such-story:${B(l.story)}`);
}
function Q(n, e, s) {
  let a = e.resolve(n, "paragraph");
  if (!a || a.kind !== "paragraph")
    return ot("invalid-handle", "not-a-paragraph-handle");
  let l = s.story(a.story);
  if (!l) return ot("invalid-handle", `no-such-story:${B(a.story)}`);
  let u = l.indexOf(a.paragraphId);
  return u < 0
    ? ot("invalid-handle", "paragraph-not-in-body")
    : rt({ story: a.story, paragraphId: a.paragraphId, index: u, offset: 0 });
}
function Po(n, e, s) {
  let a = Q(n.paragraph, e, s);
  if (!a.ok) return a;
  let u = (s.story(a.value.story)?.paragraphText(a.value.paragraphId) ?? "")
      .length,
    { offset: f } = n;
  return !Number.isInteger(f) || f < 0 || f > u
    ? ot("invalid-offset", `offset ${String(f)} outside 0..${String(u)}`)
    : rt({ ...a.value, offset: f });
}
function gt(n, e, s) {
  if ("paragraph" in n) {
    if (!("at" in n)) return Po(n, e, s);
    let k = Q(n.paragraph, e, s);
    if (!k.ok || n.at === "start") return k;
    let y = (s.story(k.value.story)?.paragraphText(k.value.paragraphId) ?? "")
      .length;
    return rt({ ...k.value, offset: y });
  }
  let a = K(n.body, "body", e, s);
  if (!a.ok) return a;
  let l = a.value.paragraphIds;
  if (l.length === 0) return ot("invalid-offset", "empty-story");
  if (n.at === "start")
    return rt({ story: a.value.story, paragraphId: l[0], index: 0, offset: 0 });
  let u = l.length - 1,
    f = l[u];
  return rt({
    story: a.value.story,
    paragraphId: f,
    index: u,
    offset: (a.value.paragraphText(f) ?? "").length,
  });
}
function wo(n, e) {
  return n.index < e.index || (n.index === e.index && n.offset <= e.offset);
}
function To(n) {
  let e = n.paragraphIds;
  if (e.length === 0) return null;
  let s = e.length - 1,
    a = e[s];
  return {
    start: { story: n.story, paragraphId: e[0], index: 0, offset: 0 },
    end: {
      story: n.story,
      paragraphId: a,
      index: s,
      offset: (n.paragraphText(a) ?? "").length,
    },
  };
}
function W(n, e, s) {
  if ("body" in n) {
    let u = K(n.body, "body", e, s);
    return u.ok ? rt(To(u.value)) : u;
  }
  if ("paragraph" in n) {
    let u = Q(n.paragraph, e, s);
    if (!u.ok) return u;
    let k = (s.story(u.value.story)?.paragraphText(u.value.paragraphId) ?? "")
      .length;
    return rt({ start: u.value, end: { ...u.value, offset: k } });
  }
  let a = gt(n.start, e, s);
  if (!a.ok) return a;
  let l = gt(n.end, e, s);
  return l.ok
    ? B(a.value.story) !== B(l.value.story)
      ? ot("invalid-handle", "span-crosses-stories")
      : wo(a.value, l.value)
        ? rt({ start: a.value, end: l.value })
        : ot("invalid-offset", "span-start-after-end")
    : l;
}
function q(n, e, s) {
  if ("body" in n) return K(n.body, "body", e, s);
  if ("paragraph" in n) return K(n.paragraph, "paragraph", e, s);
  let a = n.start;
  return "paragraph" in a
    ? K(a.paragraph, "paragraph", e, s)
    : K(a.body, "body", e, s);
}
function _t(n, e, s) {
  if ("paragraph" in n) return Q(n.paragraph, e, s);
  let a = K(n.body, "body", e, s);
  if (!a.ok) return a;
  let l = a.value.paragraphIds;
  if (l.length === 0) return ot("invalid-offset", "empty-story");
  let u = n.at === "first" ? 0 : l.length - 1;
  return rt({ story: a.value.story, paragraphId: l[u], index: u, offset: 0 });
}
function at(n, e) {
  return n ? e.paragraphIds.slice(n.start.index, n.end.index + 1) : [];
}
function qt(n, e) {
  if (!n) return [];
  let s = at(n, e),
    a = s.length - 1;
  return s.map((l, u) => {
    let f = (e.paragraphText(l) ?? "").length,
      k = u === 0 ? n.start.offset : 0,
      m = u === a ? n.end.offset : f;
    return { paragraphId: l, start: k, end: m, whole: k === 0 && m === f };
  });
}
function hn(n, e, s) {
  if (!n) return "";
  let a = at(n, e);
  return a.length === 1
    ? (e.paragraphText(n.start.paragraphId) ?? "").slice(
        n.start.offset,
        n.end.offset,
      )
    : a
        .map((l, u) => {
          let f = e.paragraphText(l) ?? "";
          return u === 0
            ? f.slice(n.start.offset)
            : u === a.length - 1
              ? f.slice(0, n.end.offset)
              : f;
        })
        .join(s);
}
function te(n, e) {
  return {
    start: {
      paragraph: e.paragraph(n.start.paragraphId, n.start.story),
      offset: n.start.offset,
    },
    end: {
      paragraph: e.paragraph(n.end.paragraphId, n.end.story),
      offset: n.end.offset,
    },
  };
}
var No = 256,
  kn = 1e4;
function ee(n, e) {
  if (n.kind !== "textValue") {
    for (let s of n.attributes)
      if (s.namespaceUri === ma && s.localName === e) return s.value;
  }
}
function Ho(n) {
  return n.startsWith("_");
}
function ne(n) {
  let e = new Map(),
    s = [],
    a = new Set();
  for (let l of n.paragraphIds) {
    let u = n.node(l);
    if (u?.kind !== "paragraph") continue;
    let f = Sd(u),
      k = (m) => {
        if (m.kind !== "textValue") {
          if (m.kind === "bookmarkStart") {
            if (s.length >= kn || e.size >= kn) return;
            let y = ee(m, "id"),
              v = ee(m, "name");
            if (
              y === void 0 ||
              v === void 0 ||
              v.length === 0 ||
              v.length > No ||
              Ho(v) ||
              a.has(v) ||
              e.has(y)
            )
              return;
            let g = f.spanOf(m)?.start ?? 0;
            e.set(y, { name: v, start: { paragraphId: l, offset: g } });
            return;
          }
          if (m.kind === "bookmarkEnd") {
            let y = ee(m, "id");
            if (y === void 0) return;
            let v = e.get(y);
            if (!v) return;
            (e.delete(y), a.add(v.name));
            let g = f.spanOf(m)?.start ?? 0;
            s.push(
              Object.freeze({
                name: v.name,
                start: v.start,
                end: { paragraphId: l, offset: g },
              }),
            );
            return;
          }
          for (let y of m.children) k(y);
        }
      };
    for (let m of u.children) k(m);
  }
  return Object.freeze(s);
}
function oe(n, e) {
  return ne(n).find((s) => s.name === e) ?? null;
}
function An(n, e) {
  let s = n.node(e);
  if (s?.kind !== "paragraph") return Object.freeze([]);
  let a = Sd(s),
    l = [],
    u = (f, k) => {
      if (!(f.kind === "textValue" || k > 32)) {
        if (Ra(f)) {
          let m = a.spanOf(f);
          m &&
            l.push(
              Object.freeze({
                id: f.id,
                paragraphId: e,
                start: m.start,
                end: m.end,
              }),
            );
          return;
        }
        for (let m of f.children) u(m, k + 1);
      }
    };
  for (let f of s.children) u(f, 0);
  return Object.freeze(l);
}
function vn(n, e, s) {
  let a = Ua(s, (l) => Xc(n, e, l));
  if (a.kind === "external") return a.href;
  if (a.kind === "internal") {
    let l = Sa(s);
    return l === void 0 || l.length === 0 ? null : `#${l}`;
  }
  return null;
}
var ht = 8;
function bn(n) {
  if (!n || n.kind === "textValue") return null;
  for (let e of n.attributes)
    if (e.namespaceUri === ma && e.localName === "val") return e.value;
  return null;
}
function In(n) {
  let e = Qd(Od(n), "numPr");
  if (!e) return null;
  let s = bn(Qd(e, "numId"));
  if (s === null || !/^\d{1,10}$/.test(s) || s === "0") return null;
  let a = bn(Qd(e, "ilvl")),
    l = a === null ? 0 : Number(a);
  return !Number.isInteger(l) || l < 0 || l > ht
    ? null
    : { numId: s, level: l };
}
function Bt(n) {
  let e = new Map();
  for (let s of n.paragraphIds) {
    let a = n.node(s);
    if (!a) continue;
    let l = In(a);
    if (!l) continue;
    let u = e.get(l.numId);
    u ? u.push(s) : e.set(l.numId, [s]);
  }
  return Object.freeze(
    [...e].map(([s, a]) =>
      Object.freeze({ numId: s, paragraphIds: Object.freeze(a) }),
    ),
  );
}
function Ct(n, e) {
  let s = n.node(e);
  return s ? In(s) : null;
}
var Lo = {
  insert: "Insert",
  delete: "Delete",
  replace: "Replace",
  moveFrom: "MovedFrom",
  moveTo: "MovedTo",
  format: "Property",
  paragraphMark: "ParagraphProperty",
};
function Eo(n) {
  return n.kind === "note";
}
function Mo(n, e) {
  return e.length === 0
    ? !Eo(n.story)
    : e.every((s) => n.has(s.start.paragraphId));
}
function _o(n) {
  return Object.freeze(qg(n.part).filter((e) => Mo(n, e.ranges)));
}
function re(n) {
  let e = [];
  for (let s of _o(n)) {
    if (s.readOnly || s.revisionKind === "structural") continue;
    let a = Lo[s.revisionKind];
    a !== void 0 &&
      e.push(
        Object.freeze({
          id: s.id,
          type: a,
          author: s.author,
          date: s.date ?? "",
          item: s,
        }),
      );
  }
  return Object.freeze(e);
}
function Bo(n, e) {
  let s = n;
  for (let a = 0; s !== void 0 && a <= 64; a += 1) {
    if (s.parentId === void 0) return s.range !== null;
    s = e.get(s.parentId);
  }
  return false;
}
var Fo = Object.freeze({
  items: Object.freeze([]),
  roots: Object.freeze([]),
  byId: () => null,
  textOf: () => "",
});
function xn(n, e) {
  let s = n.parts.get(Tf(n, e.part.name));
  if (!s) return Fo;
  let a = n.parts.get(Uf(n, e.part.name)),
    l = Le(s),
    u = a ? Me(a) : new Map(),
    f = Ke(e.part).filter((g) => e.has(g.start.paragraphId)),
    k = rg(l, f, u),
    m = new Map(k.map((g) => [g.id, g])),
    y = k.filter((g) => Bo(g, m)),
    v = new Map(y.map((g) => [g.id, g]));
  return Object.freeze({
    items: Object.freeze(y),
    roots: Object.freeze(y.filter((g) => g.parentId === void 0)),
    byId: (g) => v.get(g) ?? null,
    textOf: (g) => {
      let I = v.get(g);
      return I ? og(I.comment) : "";
    },
  });
}
function Sn(n, e, s) {
  if ("body" in n) {
    let a = K(n.body, "body", e, s);
    return a.ok
      ? { ok: true, reads: a.value }
      : {
          ok: false,
          code: a.code,
          message: "that handle does not name a body",
          detail: a.detail,
        };
  }
  return e.resolve(n.document, "document")
    ? s.body
      ? { ok: true, reads: s.body }
      : {
          ok: false,
          code: "document-unavailable",
          message: "this host holds no document",
        }
    : {
        ok: false,
        code: "invalid-handle",
        message: "that handle does not name a document",
        detail: "document",
      };
}
function Rn(n, e) {
  let s = n.op === "acceptAllRevisions",
    a = e.story.kind === "note" ? { scopeRootId: e.root.id } : {};
  return [
    s ? { op: "acceptAllRevisions", ...a } : { op: "rejectAllRevisions", ...a },
  ];
}
var jo = /[\r\n\u2028\u2029]/u,
  On = Object.freeze({ kind: "applied" });
function kt(n, e, s) {
  return {
    ok: false,
    error: Object.freeze(
      s === void 0
        ? { code: n, message: e }
        : { code: n, message: e, detail: s },
    ),
  };
}
function ae(n, e) {
  return kt(
    "unsupported-content",
    n === "author"
      ? "a comment records who wrote it"
      : n === "date"
        ? "a comment date must be a valid ISO-8601 instant"
        : e === "reply"
          ? "a reply says something"
          : "a comment says something",
    n,
  );
}
function se(n) {
  return Mf(n.author)
    ? ae("author", n.kind)
    : Nf(n.text)
      ? ae("text", n.kind)
      : typeof n.text == "string" && jo.test(n.text)
        ? kt(
            "unsupported-content",
            n.kind === "reply"
              ? "a reply is one paragraph in this slice"
              : "a comment is one paragraph in this slice",
            "text",
          )
        : Pf(n.date)
          ? ae("date", n.kind)
          : null;
}
function ie(n) {
  if (n === void 0) return;
  let e = Of(n);
  return e.ok ? e.value : void 0;
}
function Cn(n, e) {
  let s = Fa(n.part, e);
  for (; s;) {
    if (
      s.kind === "tableCell" ||
      (s.kind !== "textValue" && s.namespaceUri === ma && s.localName === "tc")
    )
      return s.id;
    s = Ga(n.part, s.id);
  }
  return null;
}
function Pn(n, e, s, a) {
  let l = se({ author: n.author, text: n.text, date: n.date, kind: "comment" });
  if (l) return l;
  let u = W(n.span, e, s);
  if (!u.ok) return kt(u.code, "that span is not a place", u.detail);
  if (u.value === null)
    return kt("invalid-handle", "an empty story has no comment anchor");
  let f = q(n.span, e, s);
  if (!f.ok) return kt(f.code, "that span is not a place", f.detail);
  let k = u.value;
  if (Cn(f.value, k.start.paragraphId) !== Cn(f.value, k.end.paragraphId))
    return kt(
      "unsupported-content",
      "a comment range cannot cross a table-cell boundary",
    );
  let m = a(f.value);
  if (m) return m;
  let y = ie(n.date);
  return {
    ok: true,
    kind: "commentWrite",
    write: {
      kind: "create",
      anchor: {
        paragraphId: k.start.paragraphId,
        start: k.start.offset,
        end: k.end.offset,
        ...(k.end.paragraphId === k.start.paragraphId
          ? {}
          : { endParagraphId: k.end.paragraphId }),
      },
      text: n.text,
      author: n.author,
      ...(y === void 0 ? {} : { date: y }),
    },
    story: f.value.story,
    answer: (g, I) =>
      I === void 0
        ? On
        : { kind: "handle", handle: e.comment(I, f.value.story) },
  };
}
function wn(n, e, s) {
  let a = s(e);
  if (a) return a;
  let l = e.story;
  return {
    ok: true,
    kind: "commentWrite",
    write: {
      kind: "delete",
      commentId: n.id,
      ...(n.parentId === void 0 ? {} : { parentCommentId: n.parentId }),
      ...(l.kind === "note" ? { noteId: l.noteId } : {}),
    },
    story: l,
    answer: () => On,
  };
}
var Do = 1e4;
function Tn(n, e) {
  let s = [],
    a = e.kind === "contentControl" ? qe(e) : e;
  if (!a) return s;
  for (let l of ue(a))
    if (!(l.ancestors.length > 0)) {
      if (s.length >= Do) break;
      s.push(En(n, l.node));
    }
  return s;
}
function Nn(n, e) {
  for (let s of ue(n.root)) if (s.node.id === e) return En(n, s.node);
  return null;
}
function Hn(n, e) {
  for (let s of ue(n.root)) if (s.node.id === e) return s.node;
  return null;
}
function de(n, e) {
  let s = Mn(e);
  if (s.length > 0) {
    let a = s[0],
      l = s[s.length - 1],
      u = n.paragraphText(l);
    return u === null || !n.has(a)
      ? null
      : {
          start: { paragraphId: a, offset: 0 },
          end: { paragraphId: l, offset: u.length },
        };
  }
  for (let a of n.paragraphIds) {
    let l = n.node(a);
    if (!l || l.kind !== "paragraph" || !l.children.some((f) => f.id === e.id))
      continue;
    let u = Sd(l).spanOf(e);
    return u
      ? {
          start: { paragraphId: a, offset: u.start },
          end: { paragraphId: a, offset: u.end },
        }
      : null;
  }
  return null;
}
function Ln(n) {
  return we(n);
}
function En(n, e) {
  return {
    nodeId: e.id,
    properties: se$1(e),
    lock: Hf(n.part, e.id),
    paragraphIds: Mn(e),
  };
}
function Mn(n) {
  let e = qe(n);
  if (!e) return [];
  let s = [];
  return (He(e.children, s, 0), s.map((a) => a.id));
}
var Wo = new Set([
    "unlocked",
    "sdtLocked",
    "contentLocked",
    "sdtContentLocked",
  ]),
  zo = 4096,
  _n = 64;
function Bn(n) {
  if (n === void 0) return { ok: true, value: null };
  if (typeof n != "object" || n === null)
    return { ok: false, field: "payload" };
  let e = n;
  for (let s of ["namespaceUri", "rootLocalName", "nodeId"]) {
    let a = e[s];
    if (typeof a != "string" || a.length === 0 || a.length > zo)
      return { ok: false, field: s };
  }
  return typeof e.label != "string" || e.label.length > Wf
    ? { ok: false, field: "label" }
    : typeof e.data != "string" || e.data.length === 0 || e.data.length > Vf
      ? { ok: false, field: "data" }
      : {
          ok: true,
          value: {
            namespaceUri: e.namespaceUri,
            rootLocalName: e.rootLocalName,
            nodeId: e.nodeId,
            label: e.label,
            data: e.data,
          },
        };
}
function Fn(n) {
  let e = n.at !== void 0,
    s = n.span !== void 0;
  return e === s
    ? {
        message: "a custom node goes at a position or over a span, not both",
        detail: e ? "at+span" : "no-place",
      }
    : typeof n.tag != "string" || n.tag.length === 0
      ? {
          message: "a custom node carries its identity in its tag",
          detail: "tag",
        }
      : n.tag.length > _n
        ? {
            message: `w:tag caps at ${String(_n)} characters; a longer payload belongs in the store`,
            detail: "tag",
          }
        : typeof n.text != "string" || n.text.length === 0
          ? { message: "a custom node shows some text", detail: "text" }
          : n.lock !== void 0 && !Wo.has(n.lock)
            ? { message: "that is not a lock", detail: String(n.lock) }
            : null;
}
function jn(n, e, s, a) {
  return {
    paragraphId: e.paragraphId,
    offset: e.offset,
    ...(s.offset > e.offset ? { replaceUntil: s.offset } : {}),
    tag: n.tag,
    text: n.text,
    ...(n.title === void 0 ? {} : { alias: n.title }),
    ...(n.lock === void 0 || n.lock === "unlocked" ? {} : { lock: n.lock }),
    ...(a === null ? {} : { payload: a }),
  };
}
function Dn(n, e, s) {
  if (n.span) {
    let l = W(n.span, e, s);
    return l.ok
      ? l.value
        ? l.value.start.paragraphId !== l.value.end.paragraphId
          ? {
              code: "unsupported-content",
              message: "a custom node wraps text inside one paragraph",
              detail: "multi-paragraph",
            }
          : { range: l.value }
        : {
            code: "invalid-offset",
            message: "that story holds nothing to wrap",
            detail: "empty-story",
          }
      : { code: l.code, message: "that span is not a place", detail: l.detail };
  }
  let a = gt(n.at, e, s);
  return a.ok
    ? { range: { start: a.value, end: a.value } }
    : { code: a.code, message: "that is not a place", detail: a.detail };
}
var Ft = /[\r\n\v\f\u2028\u2029]/,
  Ko = 16,
  Vo = 64,
  Wn = /\s/;
function $o(n, e, s) {
  return Object.freeze(
    s === void 0 ? { code: n, message: e } : { code: n, message: e, detail: s },
  );
}
function d(n, e, s) {
  return { ok: false, error: $o(n, e, s) };
}
var F = Object.freeze({ kind: "applied" });
function b(n) {
  return { ok: true, kind: "query", value: n };
}
function zn(n) {
  let e = n.kind === "contentControl" ? qe(n) : n;
  return e ? ue(e).map((s) => s.node) : [];
}
var Uo = new Set([
    "unlocked",
    "sdtLocked",
    "contentLocked",
    "sdtContentLocked",
  ]),
  Xo = new Set(["whole", "content", "start", "end", "before", "after"]),
  Yo = new Set(["richText", "plainText", "dropDownList", "comboBox", "date"]),
  Go = 4096;
function Jo(n) {
  let e = (l, u) => ({
    ok: false,
    code: "unsupported-content",
    message: l,
    detail: u,
  });
  if (typeof n != "object" || n === null || !("kind" in n))
    return e("a control value states its kind", "value");
  let s = n,
    a = s.kind;
  if (a === "text" || a === "listItem") {
    let l = a === "text" ? s.text : s.value;
    return typeof l != "string"
      ? e("that value is not a string", String(a))
      : l.length > Go
        ? e("that value is too long", String(l.length))
        : {
            ok: true,
            value:
              a === "text"
                ? { kind: "text", text: l }
                : { kind: "listItem", value: l },
          };
  }
  if (a === "checkbox") {
    let l = s.checked;
    return typeof l != "boolean"
      ? e("a checkbox is checked or not", "checked")
      : { ok: true, value: { kind: "checkbox", checked: l } };
  }
  if (a === "date") {
    let l = s.iso;
    return typeof l != "string"
      ? e("a date is an ISO-8601 string", "iso")
      : l.length > 64
        ? e("that is not a date", String(l.length))
        : { ok: true, value: { kind: "date", iso: l } };
  }
  return e("that is not a value any control accepts", String(a));
}
function Qo(n, e) {
  let s = [],
    a = 0;
  for (; a < n.length;) {
    let l = null;
    for (let u of e) {
      let f = n.indexOf(u, a);
      f < 0 ||
        ((!l || f < l.start || (f === l.start && u.length > l.length)) &&
          (l = { start: f, length: u.length }));
    }
    if (!l) break;
    (s.push(l), (a = l.start + l.length));
  }
  return s;
}
function Zo(n, e, s) {
  let a = e[s]?.markParagraphId ?? null;
  if (a !== null) return a;
  let l = n.paragraphIds,
    u = l[l.length - 1];
  return u === void 0 ||
    new Set(e.map((k) => k.markParagraphId).filter((k) => k !== null)).has(u)
    ? null
    : u;
}
function qo(n, e) {
  for (let s of [n.start, n.end]) {
    let a = e.paragraphText(s.paragraphId);
    if (a === null || s.offset > a.length) return false;
  }
  return true;
}
function tr(n, e, s) {
  let a = e,
    l = s;
  for (; a < l && Wn.test(n[a]);) a += 1;
  for (; l > a && Wn.test(n[l - 1]);) l -= 1;
  return [a, l];
}
function Kn(n) {
  let { handles: e, capabilities: s } = n,
    a = n.reads,
    l = new Map(),
    u = (r) => {
      let t = B(r.story),
        o = l.get(t);
      if (o) return o;
      let i = new Map(),
        c = r.paragraphIds.map((h) => {
          let A = { id: h };
          return (i.set(h, A), A);
        }),
        p = {
          reads: r,
          order: c,
          slotById: i,
          created: [],
          restructured: new Set(),
          touched: new Set(),
          formatted: new Set(),
          selected: new Set(),
          retargets: [],
        };
      return (l.set(t, p), p);
    },
    f = [],
    k = un(),
    m = null,
    y = (r) =>
      m === null
        ? ((m = r), null)
        : m === r
          ? null
          : d(
              "conflicting-operations",
              "one batch writes into one story",
              `${B(m.reads.story)} then ${B(r.reads.story)}`,
            ),
    v = (r) => y(u(r)),
    g = (r) => {
      let t = a.package;
      return t === null ? null : xn(t, r);
    },
    I = (r) => {
      let t = e.resolve(r, "comment");
      if (!t || t.kind !== "comment")
        return {
          ok: false,
          planned: d(
            "invalid-handle",
            "that handle does not name a comment",
            "comment",
          ),
        };
      let o = a.story(t.story);
      if (!o)
        return {
          ok: false,
          planned: d("invalid-handle", "that story is not in this document"),
        };
      let c = g(o)?.byId(t.commentId) ?? null;
      return c
        ? { ok: true, reads: o, item: c }
        : {
            ok: false,
            planned: d(
              "invalid-handle",
              "this document no longer holds that comment",
              t.commentId,
            ),
          };
    },
    C = (r) => {
      let t = e.resolve(r, "revision");
      if (!t || t.kind !== "revision")
        return {
          ok: false,
          planned: d(
            "invalid-handle",
            "that handle does not name a tracked change",
            "revision",
          ),
        };
      let o = a.story(t.story);
      if (!o)
        return {
          ok: false,
          planned: d("invalid-handle", "that story is not in this document"),
        };
      let i = re(o).find((c) => c.id === t.revisionId) ?? null;
      return i
        ? { ok: true, reads: o, item: i }
        : {
            ok: false,
            planned: d(
              "invalid-handle",
              "this document no longer holds that tracked change",
              t.revisionId,
            ),
          };
    },
    R = (r, t) => {
      let o = r.paragraphText(t.start.paragraphId),
        i = r.paragraphText(t.end.paragraphId);
      if (o === null || i === null) return null;
      let c = {
          story: r.story,
          paragraphId: t.start.paragraphId,
          index: r.indexOf(t.start.paragraphId),
          offset: Math.min(t.start.offset, o.length),
        },
        p = {
          story: r.story,
          paragraphId: t.end.paragraphId,
          index: r.indexOf(t.end.paragraphId),
          offset: Math.min(t.end.offset, i.length),
        };
      return U({ start: c, end: p });
    },
    N = (r, t) => r.order.indexOf(t),
    P = (r, t) =>
      r.selected.has(t)
        ? d(
            "conflicting-operations",
            "this batch selects a paragraph it also edits",
            t,
          )
        : null,
    L = (r, t) => {
      let o = P(r, t);
      return (
        o ||
        (r.restructured.has(t) || r.touched.has(t)
          ? d(
              "conflicting-operations",
              "another operation in this batch already changes that paragraph",
              t,
            )
          : (r.restructured.add(t), r.touched.add(t), null))
      );
    },
    M = (r, t) => {
      let o = P(r, t);
      return (
        o ||
        (r.restructured.has(t)
          ? d(
              "conflicting-operations",
              "another operation in this batch restructures that paragraph",
              t,
            )
          : (r.touched.add(t), null))
      );
    },
    j = (r, t, o) => {
      let i = `${o}:${t}`;
      if (r.formatted.has(i))
        return d(
          "conflicting-operations",
          "another operation in this batch already writes that formatting",
          t,
        );
      let c = M(r, t);
      return c || (r.formatted.add(i), null);
    },
    Z = (r, t) => {
      let o = { id: null };
      return (r.order.splice(t, 0, o), r.created.push(o), o);
    },
    U = (r) => te(r, e),
    E = (r) => (r === null ? null : a.story(r.start.story)),
    X = (r, t, o, i) => {
      if (i?.matchWildcards === true)
        return d(
          "unsupported-capability",
          "wildcard search is not implemented",
          "matchWildcards",
        );
      if (i?.ignorePunct === true)
        return d(
          "unsupported-capability",
          "ignoring punctuation is not implemented",
          "ignorePunct",
        );
      if (i?.ignoreSpace === true)
        return d(
          "unsupported-capability",
          "ignoring whitespace is not implemented",
          "ignoreSpace",
        );
      if (!Cg(o))
        return d(
          "unsupported-content",
          "that is not a query this host will scan for",
          "text",
        );
      let c = i?.limit;
      if (c !== void 0 && (!Number.isInteger(c) || c < 0))
        return d(
          "invalid-offset",
          "limit must be a non-negative integer",
          String(c),
        );
      let p = Math.min(c ?? 2e3, 2e3),
        h = [],
        A = at(t, r),
        x = A.length - 1;
      for (let [w, T] of A.entries()) {
        if (p <= 0) break;
        let _ = r.paragraphText(T) ?? "",
          O = Dg(_, o, p, {
            matchCase: i?.matchCase === true,
            wholeWord: i?.matchWholeWord === true,
            ...(w === 0 && t ? { from: t.start.offset } : {}),
            ...(w === x && t ? { to: t.end.offset } : {}),
          });
        for (let S of O.matches) {
          let Y = e.paragraph(T, r.story);
          h.push({
            start: { paragraph: Y, offset: S.start },
            end: { paragraph: Y, offset: S.start + S.length },
          });
        }
        p -= O.matches.length;
      }
      return b({ kind: "spans", spans: h });
    },
    et = (r, t, o) => {
      if (typeof o != "string")
        return d("unsupported-content", "insertText needs text", "text");
      if (Ft.test(o))
        return d(
          "unsupported-content",
          "text carrying a paragraph mark is not written by this host",
          "paragraph-mark-in-text",
        );
      let i = y(r);
      if (i) return i;
      let c = M(r, t.paragraphId);
      if (c) return c;
      let p =
          o.length === 0
            ? []
            : [
                {
                  op: "insertText",
                  paragraphId: t.paragraphId,
                  offset: t.offset,
                  text: o,
                },
              ],
        h = () => ({
          kind: "span",
          span: U({ start: t, end: { ...t, offset: t.offset + o.length } }),
        });
      return {
        ok: true,
        kind: "command",
        ops: p,
        story: r.reads.story,
        answer: h,
      };
    },
    At = (r, t, o) => {
      let i = r.reads;
      if (typeof o != "string")
        return d("unsupported-content", "replaceSpan needs text", "text");
      if (Ft.test(o))
        return d(
          "unsupported-content",
          "text carrying a paragraph mark is not written by this host",
          "paragraph-mark-in-text",
        );
      let c = at(t, i),
        p = t.start.paragraphId,
        h = [],
        A = y(r);
      if (A) return A;
      if (c.length === 1) {
        let T = M(r, p);
        if (T) return T;
        t.end.offset > t.start.offset &&
          h.push({
            op: "deleteText",
            paragraphId: p,
            start: t.start.offset,
            end: t.end.offset,
          });
      } else {
        for (let O of c) {
          let S = L(r, O);
          if (S) return S;
        }
        let T = t.end.paragraphId,
          _ = (i.paragraphText(p) ?? "").length;
        (t.start.offset < _ &&
          h.push({
            op: "deleteText",
            paragraphId: p,
            start: t.start.offset,
            end: _,
          }),
          t.end.offset > 0 &&
            h.push({
              op: "deleteText",
              paragraphId: T,
              start: 0,
              end: t.end.offset,
            }));
        for (let O of c.slice(1, -1)) h.push({ op: "deleteBlock", blockId: O });
        h.push({ op: "joinParagraphs", firstId: p, secondId: T });
        for (let O of c.slice(1)) {
          let S = r.slotById.get(O);
          S && r.order.splice(N(r, S), 1);
        }
      }
      o.length > 0 &&
        h.push({
          op: "insertText",
          paragraphId: p,
          offset: t.start.offset,
          text: o,
        });
      let x = { ...t.start, paragraphId: p },
        w = () => ({
          kind: "span",
          span: U({ start: x, end: { ...x, offset: x.offset + o.length } }),
        });
      return {
        ok: true,
        kind: "command",
        ops: h,
        story: r.reads.story,
        answer: w,
      };
    },
    Ot = (r, t) => {
      let o = r.reads;
      if (typeof t != "string")
        return d("unsupported-content", "replaceSpan needs text", "text");
      if (Ft.test(t))
        return d(
          "unsupported-content",
          "text carrying a paragraph mark is not written by this host",
          "paragraph-mark-in-text",
        );
      let i = o.blocks,
        c = i.filter((S) => S.removable),
        p = i.filter((S) => !S.removable).flatMap((S) => S.paragraphIds),
        h = p.length === 0 ? c.find((S) => S.kind === "paragraph") : void 0;
      if (!h && p.length === 0)
        return d(
          "invalid-offset",
          "that story holds no paragraph this host can write into",
          "no-top-level-paragraph",
        );
      let A = y(r);
      if (A) return A;
      for (let S of o.paragraphIds) {
        let Y = L(r, S);
        if (Y) return Y;
      }
      let x = [],
        w = (h ? [h.id] : [...p]).sort((S, Y) => o.indexOf(S) - o.indexOf(Y)),
        T = w[0];
      for (let S of w) {
        let Y = (o.paragraphText(S) ?? "").length;
        Y > 0 && x.push({ op: "deleteText", paragraphId: S, start: 0, end: Y });
      }
      for (let S of c)
        S.id !== h?.id && x.push({ op: "deleteBlock", blockId: S.id });
      t.length > 0 &&
        x.push({ op: "insertText", paragraphId: T, offset: 0, text: t });
      for (let S of c)
        if (S.id !== h?.id)
          for (let Y of S.paragraphIds) {
            let Pt = r.slotById.get(Y);
            Pt && r.order.splice(N(r, Pt), 1);
          }
      let _ = {
          story: o.story,
          paragraphId: T,
          index: o.indexOf(T),
          offset: 0,
        },
        O = () => ({
          kind: "span",
          span: U({ start: _, end: { ..._, offset: t.length } }),
        });
      return { ok: true, kind: "command", ops: x, story: o.story, answer: O };
    },
    jt = (r, t, o, i) => {
      let c = r.reads;
      if (typeof i != "string")
        return d("unsupported-content", "insertParagraph needs text", "text");
      if (Ft.test(i))
        return d(
          "unsupported-content",
          "a paragraph mark inside a paragraph\u2019s text is not written by this host",
          "paragraph-mark-in-text",
        );
      let p = y(r);
      if (p) return p;
      let h = L(r, t.paragraphId);
      if (h) return h;
      let A = r.slotById.get(t.paragraphId);
      if (!A) return d("invalid-handle", "that paragraph is not in the body");
      let x = (c.paragraphText(t.paragraphId) ?? "").length,
        w = [];
      o === "after"
        ? (i.length > 0 &&
            w.push({
              op: "insertText",
              paragraphId: t.paragraphId,
              offset: x,
              text: i,
            }),
          w.push({
            op: "splitParagraph",
            paragraphId: t.paragraphId,
            offset: x,
          }))
        : (i.length > 0 &&
            w.push({
              op: "insertText",
              paragraphId: t.paragraphId,
              offset: 0,
              text: i,
            }),
          w.push({
            op: "splitParagraph",
            paragraphId: t.paragraphId,
            offset: i.length,
          }));
      let T = Z(r, N(r, A) + 1);
      o === "before" && r.retargets.push({ from: t.paragraphId, slot: T });
      let _ = () => {
        let O = o === "after" ? T.id : t.paragraphId;
        return O === null
          ? F
          : { kind: "handle", handle: e.paragraph(O, c.story) };
      };
      return { ok: true, kind: "command", ops: w, story: c.story, answer: _ };
    },
    H = (r, t, o, i, c) => {
      let p = r.reads;
      if (!Array.isArray(o) || o.length === 0)
        return d(
          "unsupported-content",
          "split needs at least one delimiter",
          "delimiters",
        );
      if (o.length > Ko)
        return d(
          "unsupported-content",
          "too many delimiters",
          String(o.length),
        );
      for (let V of o) {
        if (typeof V != "string" || V.length === 0)
          return d(
            "unsupported-content",
            "a delimiter must be a non-empty string",
            "delimiters",
          );
        if (V.length > Vo)
          return d(
            "unsupported-content",
            "that delimiter is too long",
            "delimiters",
          );
      }
      let h = y(r);
      if (h) return h;
      let A = L(r, t.paragraphId);
      if (A) return A;
      let x = r.slotById.get(t.paragraphId);
      if (!x) return d("invalid-handle", "that paragraph is not in the body");
      let w = p.paragraphText(t.paragraphId) ?? "",
        T = Qo(w, o),
        _ = [],
        O = [],
        S = [];
      if (T.length === 0) S.push(w);
      else if (i) {
        for (let $ of [...T].reverse())
          _.push({
            op: "deleteText",
            paragraphId: t.paragraphId,
            start: $.start,
            end: $.start + $.length,
          });
        let V = 0,
          ut = 0;
        for (let $ of T) {
          let zt = $.start - V;
          (O.push(zt),
            S.push(w.slice(ut, $.start)),
            (ut = $.start + $.length),
            (V += $.length));
        }
        S.push(w.slice(ut));
      } else {
        let V = 0;
        for (let ut of T) {
          let $ = ut.start + ut.length;
          (O.push($), S.push(w.slice(V, $)), (V = $));
        }
        S.push(w.slice(V));
      }
      O.length > 0 &&
        _.push({
          op: "splitParagraphMany",
          paragraphId: t.paragraphId,
          offsets: O,
        });
      let Y = [x];
      for (let V = 0; V < O.length; V += 1) Y.push(Z(r, N(r, x) + 1 + V));
      let Pt = (V) => {
        let ut = V.story(p.story),
          $ = [];
        return (
          Y.forEach((zt, Jn) => {
            let Kt = zt.id;
            if (Kt === null) return;
            let Vt = ut?.paragraphText(Kt) ?? S[Jn] ?? "",
              [Qn, Zn] = c ? tr(Vt, 0, Vt.length) : [0, Vt.length],
              pe = e.paragraph(Kt, p.story);
            $.push({
              start: { paragraph: pe, offset: Qn },
              end: { paragraph: pe, offset: Zn },
            });
          }),
          { kind: "spans", spans: $ }
        );
      };
      return { ok: true, kind: "command", ops: _, story: p.story, answer: Pt };
    },
    z = (r, t) => {
      let o = y(r);
      if (o) return o;
      let i = L(r, t.paragraphId);
      if (i) return i;
      let c = r.slotById.get(t.paragraphId);
      return (
        c && r.order.splice(N(r, c), 1),
        {
          ok: true,
          kind: "command",
          ops: [{ op: "deleteBlock", blockId: t.paragraphId }],
          story: r.reads.story,
          answer: () => F,
        }
      );
    },
    st = (r, t, o) => {
      let i = r.reads,
        c = i.part,
        p = y(r);
      if (p) return p;
      let h = dn(o ?? {});
      if (!h.ok)
        return d(
          "unsupported-content",
          "that is not formatting this host writes",
          h.detail,
        );
      let A = [];
      for (let x of qt(t, i)) {
        if (x.end <= x.start && !x.whole) continue;
        let w = j(r, x.paragraphId, "runs");
        if (w) return w;
        for (let T of kg(c, x.paragraphId, x.start, x.end, h.value))
          A.push({
            op: "setRunProperties",
            paragraphId: x.paragraphId,
            start: T.start,
            end: T.end,
            properties: T.properties,
            ...(T.targetRunIds ? { targetRunIds: T.targetRunIds } : {}),
          });
        x.whole &&
          A.push({
            op: "setParagraphMarkProperties",
            paragraphId: x.paragraphId,
            properties: hg(gg(c, x.paragraphId), h.value),
          });
      }
      return A.length === 0
        ? d(
            "invalid-offset",
            "that range covers no characters to format",
            "collapsed-range",
          )
        : {
            ok: true,
            kind: "command",
            ops: A,
            story: i.story,
            answer: () => F,
          };
    },
    vt = (r, t, o) => {
      let i = r.reads,
        c = i.part,
        p = y(r);
      if (p) return p;
      let h = Et(o, i.styles());
      if (!h.ok)
        return d(
          "unsupported-content",
          "that is not a style this document has",
          h.detail,
        );
      let A = { localName: "pStyle", attributes: { val: h.styleId } },
        x = [];
      for (let w of at(t, i)) {
        let T = j(r, w, "paragraph");
        if (T) return T;
        x.push({
          op: "setParagraphProperties",
          paragraphId: w,
          properties: hg(fg(c, w), A),
        });
      }
      return x.length === 0
        ? d(
            "invalid-offset",
            "that story holds no paragraph to style",
            "empty-story",
          )
        : {
            ok: true,
            kind: "command",
            ops: x,
            story: i.story,
            answer: () => F,
          };
    },
    pt = (r, t, o) => {
      let i = r.reads,
        c = i.part,
        p = y(r);
      if (p) return p;
      let h = ln(c, t.paragraphId, o ?? {}, i.styles());
      if (!h.ok)
        return d(
          "unsupported-content",
          "that is not paragraph formatting this host writes",
          h.detail,
        );
      let A = j(r, t.paragraphId, "paragraph");
      return (
        A || {
          ok: true,
          kind: "command",
          ops: [
            {
              op: "setParagraphProperties",
              paragraphId: t.paragraphId,
              properties: h.value,
            },
          ],
          story: i.story,
          answer: () => F,
        }
      );
    },
    Vn = (r, t) => {
      let o = a.body;
      if (!o)
        return d(
          "document-unavailable",
          "this host holds no document right now",
        );
      let i = a.sections();
      if (!i[r])
        return d("invalid-handle", "that section is not in this document");
      let p = pn(t);
      if (!p.ok) return d("unsupported-content", p.reason, p.detail);
      let h = Zo(o, i, r);
      if (h === null)
        return d(
          "unsupported-content",
          "that section holds no paragraph to address it by",
          "no-anchor",
        );
      let A = u(o),
        x = y(A);
      return (
        x || {
          ok: true,
          kind: "command",
          ops: [
            { op: "setSectionProperties", ...p.value, anchorParagraphId: h },
          ],
          story: ct,
          answer: () => F,
        }
      );
    },
    $n = (r, t) => ({
      ok: true,
      kind: "command",
      ops: [{ op: "deleteNote", noteKind: r, noteId: t }],
      story: ct,
      lifecycle: true,
      answer: () => F,
    }),
    Dt = (r) => {
      let t = e.resolve(r, "list");
      if (!t || t.kind !== "list")
        return d("invalid-handle", "that handle does not name a list", "list");
      let o = a.story(t.story);
      if (!o) return d("invalid-handle", "that story is not in this document");
      let i = Bt(o).find((c) => c.numId === t.numId);
      return i
        ? { ok: true, plan: u(o), list: i }
        : d(
            "invalid-handle",
            "this story numbers nothing with that list",
            t.numId,
          );
    },
    Wt = (r) => {
      if (typeof r != "object" || r === null)
        return d(
          "invalid-handle",
          "that is not a scope a control lives in",
          "scope",
        );
      let t = r;
      if ("body" in r) {
        let o = K(t.body, "body", e, a);
        return o.ok
          ? { reads: o.value, node: o.value.root }
          : d(o.code, "that handle does not name a body", o.detail);
      }
      if ("contentControl" in r) {
        let o = nt(t.contentControl);
        return "control" in o ? { reads: o.reads, node: o.node } : o;
      }
      return d(
        "invalid-handle",
        "that is not a scope a control lives in",
        "scope",
      );
    },
    nt = (r) => {
      let t = e.resolve(r, "contentControl");
      if (!t || t.kind !== "contentControl")
        return d(
          "invalid-handle",
          "that handle does not name a content control",
          "contentControl",
        );
      let o = a.story(t.story);
      if (!o) return d("invalid-handle", "that story is not in this document");
      let i = Nn(o, t.nodeId),
        c = Hn(o, t.nodeId);
      return !i || !c
        ? d(
            "invalid-handle",
            "this document no longer holds that content control",
          )
        : { reads: o, control: i, node: c };
    },
    Un = (r, t, o) => {
      if (!Number.isInteger(o) || o < 0 || o > ht)
        return d(
          "invalid-offset",
          `a list level is 0 to ${String(ht)}`,
          String(o),
        );
      if (!Ct(r.reads, t))
        return d("unsupported-content", "that paragraph is not in a list", t);
      let i = y(r);
      if (i) return i;
      let c = j(r, t, "paragraph");
      return (
        c || {
          ok: true,
          kind: "command",
          ops: [{ op: "setListLevel", paragraphId: t, level: o }],
          story: r.reads.story,
          answer: () => F,
        }
      );
    },
    Xn = (r, t, o, i) => {
      if (o !== "start" && o !== "end")
        return d(
          "unknown-operation",
          "a list takes an item at its start or its end",
          String(o),
        );
      let c = r.reads,
        p =
          o === "start"
            ? t.paragraphIds[0]
            : t.paragraphIds[t.paragraphIds.length - 1];
      if (p === void 0)
        return d("invalid-handle", "that list holds no paragraph");
      let h = { story: c.story, paragraphId: p, index: c.indexOf(p) };
      return jt(r, h, o === "start" ? "before" : "after", i);
    },
    le = (r, t) => {
      if (t.start.paragraphId !== t.end.paragraphId) return null;
      for (let o of An(r, t.start.paragraphId))
        if (o.start <= t.start.offset && o.end >= t.end.offset) return o;
      return null;
    },
    Yn = (r, t, o) => {
      if (typeof o != "string")
        return d(
          "unsupported-content",
          "a hyperlink target is a string",
          "target",
        );
      let i = r.reads,
        c = le(i, t),
        p =
          t.start.paragraphId === t.end.paragraphId &&
          t.start.offset === t.end.offset;
      if (o.length === 0) {
        if (!c)
          return d("unsupported-content", "that text is not a link", "no-link");
        let O = y(r);
        if (O) return O;
        let S = M(r, c.paragraphId);
        return (
          S || {
            ok: true,
            kind: "command",
            ops: [{ op: "removeHyperlink", linkId: c.id }],
            story: i.story,
            answer: () => F,
          }
        );
      }
      let h = {},
        A = null;
      if (o.startsWith("#")) {
        let O = o.slice(1);
        if (O.length === 0 || !oe(i, O))
          return d(
            "unsupported-content",
            "this document declares no such bookmark",
            o,
          );
        h = { anchor: O };
      } else {
        if (Vc(o) === null)
          return d(
            "unsupported-content",
            "this engine will not author that target",
            "target",
          );
        A = o;
      }
      let x = y(r);
      if (x) return x;
      let w = (O) =>
        A === null
          ? {
              ok: true,
              kind: "command",
              ops: [O(h)],
              story: i.story,
              answer: () => F,
            }
          : {
              ok: true,
              kind: "command",
              ops: [],
              relate: { url: A, ops: (S) => [O({ relationshipId: S })] },
              story: i.story,
              answer: () => F,
            };
      if (c) {
        let O = M(r, c.paragraphId);
        return (
          O || w((S) => ({ op: "setHyperlinkTarget", linkId: c.id, ...S }))
        );
      }
      if (p)
        return d(
          "unsupported-content",
          "a link with no text has nothing to click",
          "collapsed",
        );
      if (t.start.paragraphId !== t.end.paragraphId)
        return d(
          "unsupported-content",
          "a link lives inside one paragraph",
          "crosses-paragraph-mark",
        );
      let T = M(r, t.start.paragraphId);
      if (T) return T;
      let _ = i.styles().idOf("hyperlink");
      return w((O) => ({
        op: "insertHyperlink",
        paragraphId: t.start.paragraphId,
        start: t.start.offset,
        end: t.end.offset,
        ...O,
        ...(_ === null ? {} : { styleId: _ }),
      }));
    },
    ue = (r, t, o) => {
      let i = r.reads;
      if (!s.selection || !n.select)
        return d(
          "unsupported-capability",
          "this host has no reader to move",
          "selection",
        );
      if (o !== "select" && o !== "start" && o !== "end")
        return d(
          "unknown-operation",
          "that is not a selection mode",
          String(o),
        );
      let c = at(t, i);
      for (let p of c)
        if (r.touched.has(p))
          return d(
            "conflicting-operations",
            "this batch edits a paragraph the selection covers",
            p,
          );
      for (let p of c) r.selected.add(p);
      return (
        f.push({ range: t, mode: o }),
        { ok: true, kind: "command", ops: [], story: i.story, answer: () => F }
      );
    },
    ce = (r) => {
      let t = e.resolve(r, "bookmark");
      if (!t || t.kind !== "bookmark")
        return d(
          "invalid-handle",
          "that handle does not name a bookmark",
          "bookmark",
        );
      let o = a.story(t.story);
      if (!o) return d("invalid-handle", "that story is not in this document");
      let i = oe(o, t.name);
      if (!i)
        return d(
          "invalid-handle",
          "this document no longer declares that bookmark",
          t.name,
        );
      let c = (p) => ({
        story: o.story,
        paragraphId: p.paragraphId,
        index: o.indexOf(p.paragraphId),
        offset: p.offset,
      });
      return { reads: o, range: { start: c(i.start), end: c(i.end) } };
    },
    Gn = (r) => {
      switch (r.op) {
        case "getDocument":
          return b({ kind: "handle", handle: e.document() });
        case "getBody":
          return e.resolve(r.document, "document")
            ? a.body
              ? b({ kind: "handle", handle: e.body(ct) })
              : d(
                  "document-unavailable",
                  "this host holds no document right now",
                )
            : d(
                "invalid-handle",
                "that handle does not name a document",
                "document",
              );
        case "getParagraphs": {
          let t = K(r.body, "body", e, a);
          return t.ok
            ? b({
                kind: "handles",
                handles: t.value.paragraphIds.map((o) =>
                  e.paragraph(o, t.value.story),
                ),
              })
            : d(t.code, "that handle does not name a body", t.detail);
        }
        case "getSpanParagraphs": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          let o = q(r.span, e, a);
          return o.ok
            ? b({
                kind: "handles",
                handles: at(t.value, o.value).map((i) =>
                  e.paragraph(i, o.value.story),
                ),
              })
            : d(o.code, "that span is not a place", o.detail);
        }
        case "getText": {
          if (e.resolve(r.target, "body")) {
            let c = K(r.target, "body", e, a);
            return c.ok
              ? b({ kind: "text", text: c.value.text() })
              : d(c.code, "that handle does not name a body", c.detail);
          }
          let o = Q(r.target, e, a);
          if (!o.ok)
            return d(
              o.code,
              "that handle does not name a body or a paragraph",
              o.detail,
            );
          let i = a.story(o.value.story);
          return b({
            kind: "text",
            text: i?.paragraphText(o.value.paragraphId) ?? "",
          });
        }
        case "getSpanText": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          let o = q(r.span, e, a);
          return o.ok
            ? b({ kind: "text", text: hn(t.value, o.value, Zt) })
            : d(o.code, "that span is not a place", o.detail);
        }
        case "getParagraphId": {
          let t = Q(r.paragraph, e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a paragraph", t.detail);
          let i = a.story(t.value.story)?.paragraph(t.value.paragraphId);
          return b({ kind: "text", text: i?.paraId ?? "" });
        }
        case "search": {
          let t = W(r.scope, e, a);
          if (!t.ok)
            return d(t.code, "that is not a scope to search", t.detail);
          let o = q(r.scope, e, a);
          return o.ok
            ? X(o.value, t.value, r.text, r.options)
            : d(o.code, "that is not a scope to search", o.detail);
        }
        case "insertText": {
          let t = gt(r.at, e, a);
          if (!t.ok)
            return d(t.code, "that is not a place to insert at", t.detail);
          let o = a.story(t.value.story);
          return o
            ? et(u(o), t.value, r.text)
            : d("invalid-handle", "that story is not in this document");
        }
        case "replaceSpan": {
          if ("body" in r.span) {
            let i = K(r.span.body, "body", e, a);
            return i.ok
              ? Ot(u(i.value), r.text)
              : d(i.code, "that handle does not name a body", i.detail);
          }
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          if (!t.value)
            return d(
              "invalid-offset",
              "that story holds no paragraph to write into",
              "empty-story",
            );
          let o = E(t.value);
          return o
            ? At(u(o), t.value, r.text)
            : d("invalid-handle", "that story is not in this document");
        }
        case "insertParagraph": {
          let t = _t(r.anchor, e, a);
          if (!t.ok)
            return d(
              t.code,
              "that is not a paragraph to insert beside",
              t.detail,
            );
          if (r.where !== "before" && r.where !== "after")
            return d(
              "unknown-operation",
              "that is not a place to insert",
              String(r.where),
            );
          let o = a.story(t.value.story);
          return o
            ? jt(u(o), t.value, r.where, r.text)
            : d("invalid-handle", "that story is not in this document");
        }
        case "splitParagraph": {
          let t = Q(r.paragraph, e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a paragraph", t.detail);
          let o = a.story(t.value.story);
          return o
            ? H(
                u(o),
                t.value,
                r.delimiters,
                r.trimDelimiters === true,
                r.trimSpacing === true,
              )
            : d("invalid-handle", "that story is not in this document");
        }
        case "getFont": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          let o = q(r.span, e, a);
          return o.ok
            ? b({ kind: "font", font: an(o.value.part, qt(t.value, o.value)) })
            : d(o.code, "that span is not a place", o.detail);
        }
        case "setFont": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          if (!t.value)
            return d(
              "invalid-offset",
              "that story holds no paragraph to format",
              "empty-story",
            );
          let o = E(t.value);
          return o
            ? st(u(o), t.value, r.font)
            : d("invalid-handle", "that story is not in this document");
        }
        case "getStyle": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          let o = q(r.span, e, a);
          if (!o.ok) return d(o.code, "that span is not a place", o.detail);
          let i = o.value.part,
            c = o.value.styles(),
            p = at(t.value, o.value).map((A) => Lt(i, A, c)),
            h =
              p.length > 0 && p.every((A) => A !== null && A === p[0])
                ? p[0]
                : null;
          return b({ kind: "style", name: h });
        }
        case "setStyle": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          if (!t.value)
            return d(
              "invalid-offset",
              "that story holds no paragraph to style",
              "empty-story",
            );
          let o = E(t.value);
          return o
            ? vt(u(o), t.value, r.name)
            : d("invalid-handle", "that story is not in this document");
        }
        case "getParagraphFormat": {
          let t = _t(r.paragraph, e, a);
          if (!t.ok) return d(t.code, "that is not a paragraph", t.detail);
          let o = a.story(t.value.story);
          if (!o)
            return d(
              "document-unavailable",
              "this host holds no document right now",
            );
          let i = sn(o.part, t.value.paragraphId, o.styles());
          return i
            ? b({ kind: "paragraphFormat", format: i })
            : d("invalid-handle", "that handle does not name a paragraph");
        }
        case "setParagraphFormat": {
          let t = _t(r.paragraph, e, a);
          if (!t.ok) return d(t.code, "that is not a paragraph", t.detail);
          let o = a.story(t.value.story);
          return o
            ? pt(u(o), t.value, r.format)
            : d("invalid-handle", "that story is not in this document");
        }
        case "deleteParagraph": {
          let t = Q(r.paragraph, e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a paragraph", t.detail);
          let o = a.story(t.value.story);
          return o
            ? z(u(o), t.value)
            : d("invalid-handle", "that story is not in this document");
        }
        case "getSections":
          return e.resolve(r.document, "document")
            ? b({
                kind: "handles",
                handles: a.sections().map((t) => e.section(t.index)),
              })
            : d(
                "invalid-handle",
                "that handle does not name a document",
                "document",
              );
        case "getPageSetup": {
          let t = e.resolve(r.section, "section");
          if (!t || t.kind !== "section")
            return d(
              "invalid-handle",
              "that handle does not name a section",
              "section",
            );
          let o = a.sections()[t.index];
          return o
            ? b({ kind: "pageSetup", setup: o.pageSetup })
            : d("invalid-handle", "that section is not in this document");
        }
        case "setPageSetup": {
          let t = e.resolve(r.section, "section");
          return !t || t.kind !== "section"
            ? d(
                "invalid-handle",
                "that handle does not name a section",
                "section",
              )
            : Vn(t.index, r.setup);
        }
        case "getFurniture": {
          let t = e.resolve(r.section, "section");
          if (!t || t.kind !== "section")
            return d(
              "invalid-handle",
              "that handle does not name a section",
              "section",
            );
          if (r.kind !== "header" && r.kind !== "footer")
            return d(
              "unknown-operation",
              "that is not furniture",
              String(r.kind),
            );
          let o = { kind: r.kind, sectionIndex: t.index, variant: r.variant };
          return tn(o)
            ? a.story(o)
              ? b({ kind: "handle", handle: e.body(o) })
              : d(
                  "invalid-handle",
                  "this document declares no such header or footer",
                  B(o),
                )
            : d(
                "unknown-operation",
                "that is not a furniture variant",
                String(r.variant),
              );
        }
        case "getNotes": {
          if (!e.resolve(r.document, "document"))
            return d(
              "invalid-handle",
              "that handle does not name a document",
              "document",
            );
          if (r.noteKind !== "footnote" && r.noteKind !== "endnote")
            return d(
              "unknown-operation",
              "that is not a kind of note",
              String(r.noteKind),
            );
          let t = r.noteKind,
            o = a.noteIds(t);
          return o.ok
            ? b({ kind: "handles", handles: o.ids.map((i) => e.note(t, i)) })
            : d(
                "ambiguous-document",
                `${t} identities are not completely and unambiguously enumerable`,
                o.reason === "duplicates" ? o.duplicateIds.join(",") : o.reason,
              );
        }
        case "getNoteBody":
        case "getNoteText": {
          let t = e.resolve(r.note, "note");
          if (!t || t.kind !== "note")
            return d(
              "invalid-handle",
              "that handle does not name a note",
              "note",
            );
          let o = t,
            i = a.story(o);
          return i
            ? r.op === "getNoteText"
              ? b({ kind: "text", text: i.text() })
              : b({ kind: "handle", handle: e.body(o) })
            : d("invalid-handle", "that note is not in this document", B(o));
        }
        case "getNoteKind": {
          let t = e.resolve(r.note, "note");
          return !t || t.kind !== "note"
            ? d("invalid-handle", "that handle does not name a note", "note")
            : b({ kind: "text", text: t.noteKind });
        }
        case "deleteNote": {
          let t = e.resolve(r.note, "note");
          if (!t || t.kind !== "note")
            return d(
              "invalid-handle",
              "that handle does not name a note",
              "note",
            );
          let o = a.noteIds(t.noteKind);
          return o.ok
            ? o.ids.includes(t.noteId)
              ? $n(t.noteKind, t.noteId)
              : d("invalid-handle", "that note is not in this document")
            : d(
                "ambiguous-document",
                `${t.noteKind} identities are not completely and unambiguously enumerable`,
                o.reason === "duplicates" ? o.duplicateIds.join(",") : o.reason,
              );
        }
        case "getLists": {
          let t = K(r.body, "body", e, a);
          return t.ok
            ? b({
                kind: "handles",
                handles: Bt(t.value).map((o) => e.list(o.numId, t.value.story)),
              })
            : d(t.code, "that handle does not name a body", t.detail);
        }
        case "getListId": {
          let t = Dt(r.list);
          return "list" in t
            ? b({ kind: "number", value: Number(t.list.numId) })
            : t;
        }
        case "getListById": {
          let t = K(r.body, "body", e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a body", t.detail);
          if (!Number.isInteger(r.id) || r.id <= 0)
            return d(
              "unsupported-content",
              "a list is numbered from one",
              String(r.id),
            );
          let o = String(r.id),
            i = Bt(t.value).find((c) => c.numId === o);
          return i
            ? b({ kind: "handle", handle: e.list(i.numId, t.value.story) })
            : d(
                "invalid-handle",
                "no list in that story carries that number",
                o,
              );
        }
        case "getListParagraphs": {
          let t = Dt(r.list);
          if (!("list" in t)) return t;
          let o = r.level;
          if (o !== void 0 && (!Number.isInteger(o) || o < 0 || o > ht))
            return d(
              "invalid-offset",
              `a list level is 0 to ${String(ht)}`,
              String(o),
            );
          let i = t.plan.reads,
            c =
              o === void 0
                ? t.list.paragraphIds
                : t.list.paragraphIds.filter((p) => Ct(i, p)?.level === o);
          return b({
            kind: "handles",
            handles: c.map((p) => e.paragraph(p, i.story)),
          });
        }
        case "getParagraphList": {
          let t = Q(r.paragraph, e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a paragraph", t.detail);
          let o = a.story(t.value.story);
          if (!o)
            return d("invalid-handle", "that story is not in this document");
          let i = Ct(o, t.value.paragraphId);
          return i
            ? b({ kind: "handle", handle: e.list(i.numId, o.story) })
            : d(
                "unsupported-content",
                "that paragraph is not in a list",
                t.value.paragraphId,
              );
        }
        case "getListLevel": {
          let t = Q(r.paragraph, e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a paragraph", t.detail);
          let o = a.story(t.value.story);
          if (!o)
            return d("invalid-handle", "that story is not in this document");
          let i = Ct(o, t.value.paragraphId);
          return i
            ? b({ kind: "number", value: i.level })
            : d(
                "unsupported-content",
                "that paragraph is not in a list",
                t.value.paragraphId,
              );
        }
        case "setListLevel": {
          let t = Q(r.paragraph, e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a paragraph", t.detail);
          let o = a.story(t.value.story);
          return o
            ? Un(u(o), t.value.paragraphId, r.level)
            : d("invalid-handle", "that story is not in this document");
        }
        case "insertListParagraph": {
          let t = Dt(r.list);
          return "list" in t ? Xn(t.plan, t.list, r.where, r.text) : t;
        }
        case "getHyperlink": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          let o = q(r.span, e, a);
          if (!o.ok) return d(o.code, "that span is not a place", o.detail);
          let i = a.package;
          if (!i || !t.value) return b({ kind: "text", text: "" });
          let c = le(o.value, t.value);
          if (!c) return b({ kind: "text", text: "" });
          let p = Fa(o.value.part, c.id),
            h = p ? vn(i, o.value.part.name, p) : null;
          return b({ kind: "text", text: h ?? "" });
        }
        case "setHyperlink": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          if (!t.value)
            return d(
              "invalid-offset",
              "that story holds no text to link",
              "empty-story",
            );
          let o = E(t.value);
          return o
            ? Yn(u(o), t.value, r.target)
            : d("invalid-handle", "that story is not in this document");
        }
        case "getBookmarks": {
          let t = W(r.scope, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          let o = q(r.scope, e, a);
          if (!o.ok) return d(o.code, "that span is not a place", o.detail);
          let i = o.value,
            c = t.value,
            p = c === null ? null : new Set(at(c, i)),
            h = ne(i).filter((A) => {
              if (
                !p ||
                (!p.has(A.start.paragraphId) && !p.has(A.end.paragraphId)) ||
                c === null
              )
                return false;
              let x =
                  A.start.paragraphId === c.end.paragraphId &&
                  A.start.offset > c.end.offset,
                w =
                  A.end.paragraphId === c.start.paragraphId &&
                  A.end.offset < c.start.offset;
              return !x && !w;
            });
          return b({
            kind: "handles",
            handles: h.map((A) => e.bookmark(A.name, i.story)),
          });
        }
        case "getBookmarkName": {
          let t = e.resolve(r.bookmark, "bookmark");
          return !t || t.kind !== "bookmark"
            ? d(
                "invalid-handle",
                "that handle does not name a bookmark",
                "bookmark",
              )
            : b({ kind: "text", text: t.name });
        }
        case "getBookmarkRange": {
          let t = ce(r.bookmark);
          return "reads" in t ? b({ kind: "span", span: U(t.range) }) : t;
        }
        case "getComments": {
          let t = W(r.scope, e, a);
          if (!t.ok) return d(t.code, "that scope is not a place", t.detail);
          let o = q(r.scope, e, a);
          if (!o.ok) return d(o.code, "that scope names no story", o.detail);
          let i = o.value,
            c = g(i);
          if (!c)
            return d("document-unavailable", "this host holds no document");
          let p = t.value,
            h = c.roots.filter((A) => {
              if (!p) return true;
              let x = A.range;
              if (!x) return false;
              let w = i.indexOf(x.start.paragraphId),
                T = i.indexOf(x.end.paragraphId),
                _ = i.indexOf(p.start.paragraphId),
                O = i.indexOf(p.end.paragraphId);
              return T < _ || w > O
                ? false
                : T === _ && w === _ && O === _
                  ? x.end.offset > p.start.offset &&
                    x.start.offset < p.end.offset
                  : true;
            });
          return b({
            kind: "handles",
            handles: h.map((A) => e.comment(A.id, i.story)),
          });
        }
        case "getCommentReplies": {
          let t = I(r.comment);
          return t.ok
            ? b({
                kind: "handles",
                handles: t.item.replyIds.map((o) =>
                  e.comment(o, t.reads.story),
                ),
              })
            : t.planned;
        }
        case "getCommentId": {
          let t = I(r.comment);
          return t.ok ? b({ kind: "text", text: t.item.id }) : t.planned;
        }
        case "getCommentAuthor": {
          let t = I(r.comment);
          return t.ok
            ? b({ kind: "text", text: t.item.comment.author })
            : t.planned;
        }
        case "getCommentDate": {
          let t = I(r.comment);
          return t.ok
            ? b({ kind: "text", text: t.item.comment.date ?? "" })
            : t.planned;
        }
        case "getCommentText": {
          let t = I(r.comment);
          if (!t.ok) return t.planned;
          let o = g(t.reads);
          return b({ kind: "text", text: o?.textOf(t.item.id) ?? "" });
        }
        case "getCommentRange": {
          let t = I(r.comment);
          if (!t.ok) return t.planned;
          let o = t.item.range;
          if (!o || t.item.orphaned)
            return d(
              "invalid-handle",
              "that comment has no range in this document",
            );
          let i = R(t.reads, o);
          return i
            ? b({ kind: "span", span: i })
            : d(
                "invalid-handle",
                "that comment\u2019s range is no longer in the story",
              );
        }
        case "getCommentResolved": {
          let t = I(r.comment);
          return t.ok ? b({ kind: "flag", value: t.item.resolved }) : t.planned;
        }
        case "insertComment":
          return Pn(r, e, a, v);
        case "setCommentResolved": {
          let t = I(r.comment);
          if (!t.ok) return t.planned;
          if (typeof r.resolved != "boolean")
            return d(
              "unsupported-content",
              "resolved is a yes or a no",
              String(r.resolved),
            );
          let o = y(u(t.reads));
          return (
            o || {
              ok: true,
              kind: "commentWrite",
              write: {
                kind: "resolve",
                commentId: t.item.id,
                resolved: r.resolved,
              },
              story: t.reads.story,
              answer: () => F,
            }
          );
        }
        case "replyToComment": {
          let t = I(r.comment);
          if (!t.ok) return t.planned;
          let o = se({
            author: r.author,
            text: r.text,
            date: r.date,
            kind: "reply",
          });
          if (o) return o;
          let i = t.item.range;
          if (!i || t.item.orphaned)
            return d(
              "invalid-handle",
              "that comment has no range to reply over",
            );
          let c = y(u(t.reads));
          if (c) return c;
          let p = t.reads.story,
            h = ie(r.date);
          return {
            ok: true,
            kind: "commentWrite",
            write: {
              kind: "reply",
              parentCommentId: t.item.id,
              anchor: {
                paragraphId: i.start.paragraphId,
                start: i.start.offset,
                end: i.end.offset,
                ...(i.end.paragraphId === i.start.paragraphId
                  ? {}
                  : { endParagraphId: i.end.paragraphId }),
              },
              text: r.text,
              author: r.author,
              ...(h === void 0 ? {} : { date: h }),
            },
            story: t.reads.story,
            answer: (A, x) =>
              x === void 0 ? F : { kind: "handle", handle: e.comment(x, p) },
          };
        }
        case "deleteComment": {
          let t = I(r.comment);
          return t.ok ? wn(t.item, t.reads, (o) => y(u(o))) : t.planned;
        }
        case "getRevisions": {
          let t = K(r.body, "body", e, a);
          if (!t.ok)
            return d(t.code, "that handle does not name a body", t.detail);
          let o = t.value;
          return b({
            kind: "handles",
            handles: re(o).map((i) => e.revision(i.id, o.story)),
          });
        }
        case "getRevisionType": {
          let t = C(r.revision);
          return t.ok ? b({ kind: "text", text: t.item.type }) : t.planned;
        }
        case "getRevisionAuthor": {
          let t = C(r.revision);
          return t.ok ? b({ kind: "text", text: t.item.author }) : t.planned;
        }
        case "getRevisionDate": {
          let t = C(r.revision);
          return t.ok ? b({ kind: "text", text: t.item.date }) : t.planned;
        }
        case "getRevisionRange": {
          let t = C(r.revision);
          if (!t.ok) return t.planned;
          let [o] = t.item.item.ranges;
          if (!o)
            return d("invalid-handle", "that change covers no characters");
          let i = R(t.reads, o);
          return i
            ? b({ kind: "span", span: i })
            : d(
                "invalid-handle",
                "that change\u2019s range is no longer in the story",
              );
        }
        case "acceptRevision":
        case "rejectRevision": {
          let t = C(r.revision);
          if (!t.ok) return t.planned;
          let o = u(t.reads),
            i = y(o);
          if (i) return i;
          let c = r.op === "acceptRevision";
          return {
            ok: true,
            kind: "command",
            story: t.reads.story,
            ops: t.item.item.addresses.map((p) =>
              c
                ? { op: "acceptRevision", revision: p }
                : { op: "rejectRevision", revision: p },
            ),
            answer: () => F,
          };
        }
        case "acceptAllRevisions":
        case "rejectAllRevisions": {
          let t = Sn(r, e, a);
          if (!t.ok) return d(t.code, t.message, t.detail);
          let o = u(t.reads),
            i = y(o);
          if (i) return i;
          let c = Rn(r, t.reads);
          return {
            ok: true,
            kind: "command",
            story: t.reads.story,
            ops: c,
            answer: () => F,
          };
        }
        case "selectSpan": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          if (!t.value)
            return d(
              "invalid-offset",
              "that story holds no paragraph to select",
              "empty-story",
            );
          let o = E(t.value);
          return o
            ? ue(u(o), t.value, r.mode)
            : d("invalid-handle", "that story is not in this document");
        }
        case "selectBookmark": {
          let t = ce(r.bookmark);
          return "reads" in t ? ue(u(t.reads), t.range, r.mode) : t;
        }
        case "getContentControls": {
          let t = Wt(r.scope);
          return "reads" in t
            ? b({
                kind: "handles",
                handles: Tn(t.reads, t.node).map((o) =>
                  e.contentControl(o.nodeId, t.reads.story),
                ),
              })
            : t;
        }
        case "getContentControlById": {
          let t = Wt(r.scope);
          if (!("reads" in t)) return t;
          if (!Number.isInteger(r.id))
            return d(
              "unsupported-content",
              "a control id is a whole number",
              String(r.id),
            );
          let o = zn(t.node).find((i) => se$1(i).id === r.id);
          return o
            ? b({
                kind: "handle",
                handle: e.contentControl(o.id, t.reads.story),
              })
            : d(
                "invalid-handle",
                "no control in that scope carries that id",
                String(r.id),
              );
        }
        case "getContentControlsByTag":
        case "getContentControlsByTitle": {
          let t = Wt(r.scope);
          if (!("reads" in t)) return t;
          let o = r.op === "getContentControlsByTag" ? r.tag : r.title;
          if (typeof o != "string" || o.length === 0)
            return d(
              "unsupported-content",
              "a tag or title to match is required",
              r.op,
            );
          let i = zn(t.node).filter((c) => {
            let p = se$1(c);
            return r.op === "getContentControlsByTag"
              ? p.tag === o
              : p.alias === o;
          });
          return b({
            kind: "handles",
            handles: i.map((c) => e.contentControl(c.id, t.reads.story)),
          });
        }
        case "getContentControlTag":
        case "getContentControlTitle":
        case "getContentControlFileId":
        case "getContentControlSubtype":
        case "getContentControlLock": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          let o = t.control.properties;
          if (r.op === "getContentControlLock")
            return b({ kind: "text", text: t.control.lock });
          if (r.op === "getContentControlSubtype")
            return b({ kind: "text", text: o.type });
          if (r.op === "getContentControlFileId")
            return b({
              kind: "text",
              text: o.id === void 0 ? "" : String(o.id),
            });
          let i = r.op === "getContentControlTag" ? o.tag : o.alias;
          return b({ kind: "text", text: i ?? "" });
        }
        case "getContentControlIsBound":
        case "getContentControlPlaceholderShown":
        case "getContentControlTemporary": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          let o =
            r.op === "getContentControlIsBound"
              ? t.control.properties.dataBinding !== void 0
              : r.op === "getContentControlPlaceholderShown"
                ? t.control.properties.showingPlaceholder
                : t.control.properties.temporary;
          return b({ kind: "flag", value: o });
        }
        case "getContentControlText": {
          let t = nt(r.contentControl);
          return "control" in t ? b({ kind: "text", text: Ln(t.node) }) : t;
        }
        case "getContentControlParagraphs": {
          let t = nt(r.contentControl);
          return "control" in t
            ? b({
                kind: "handles",
                handles: t.control.paragraphIds.map((o) =>
                  e.paragraph(o, t.reads.story),
                ),
              })
            : t;
        }
        case "getContentControlRange": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          let o = r.location ?? "whole";
          if (!Xo.has(o))
            return d(
              "unsupported-content",
              "that is not a place in a control",
              o,
            );
          let i = de(t.reads, t.node);
          if (!i)
            return d(
              "unsupported-content",
              "that control holds nothing addressable",
              "empty",
            );
          let c = o === "start" || o === "before" ? i.start : i.end,
            p = o !== "whole" && o !== "content",
            h = (A) => ({
              story: t.reads.story,
              paragraphId: A.paragraphId,
              index: t.reads.indexOf(A.paragraphId),
              offset: A.offset,
            });
          return b({
            kind: "span",
            span: te(
              p
                ? { start: h(c), end: h(c) }
                : { start: h(i.start), end: h(i.end) },
              e,
            ),
          });
        }
        case "setContentControlValue": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          let o = Jo(r.value);
          if (!o.ok) return d(o.code, o.message, o.detail);
          let i = u(t.reads),
            c = y(i);
          return (
            c || {
              ok: true,
              kind: "command",
              story: t.reads.story,
              ops: [
                {
                  op: "setContentControlValue",
                  controlId: t.control.nodeId,
                  value: o.value,
                },
              ],
              answer: () => F,
            }
          );
        }
        case "setContentControlProperties": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          if (r.tag === void 0 && r.title === void 0 && r.lock === void 0)
            return d(
              "unsupported-content",
              "nothing to write",
              "no-properties",
            );
          if (r.lock !== void 0 && !Uo.has(r.lock))
            return d(
              "unsupported-content",
              "that is not a lock this schema declares",
              r.lock,
            );
          let o = u(t.reads),
            i = y(o);
          return (
            i || {
              ok: true,
              kind: "command",
              story: t.reads.story,
              ops: [
                {
                  op: "setContentControlProperties",
                  controlId: t.control.nodeId,
                  ...(r.tag === void 0 ? {} : { tag: r.tag }),
                  ...(r.title === void 0 ? {} : { alias: r.title }),
                  ...(r.lock === void 0 ? {} : { lock: r.lock }),
                },
              ],
              answer: () => F,
            }
          );
        }
        case "insertContentControlText": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          if (typeof r.text != "string")
            return d("unsupported-content", "text is required", "text");
          if (r.at !== "replace" && r.at !== "start" && r.at !== "end")
            return d(
              "unsupported-content",
              "that is not a place to insert at",
              String(r.at),
            );
          let o = u(t.reads),
            i = y(o);
          if (i) return i;
          let c = de(t.reads, t.node);
          if (!c)
            return d(
              "unsupported-content",
              "that control holds nothing addressable",
              "empty",
            );
          let p = r.at === "end" ? c.end : c.start,
            h = () => ({
              kind: "span",
              span: U({
                start: {
                  story: t.reads.story,
                  paragraphId: p.paragraphId,
                  index: t.reads.indexOf(p.paragraphId),
                  offset: p.offset,
                },
                end: {
                  story: t.reads.story,
                  paragraphId: p.paragraphId,
                  index: t.reads.indexOf(p.paragraphId),
                  offset: p.offset + r.text.length,
                },
              }),
            });
          return r.at === "replace"
            ? {
                ok: true,
                kind: "command",
                story: t.reads.story,
                ops: [
                  {
                    op: "setContentControlValue",
                    controlId: t.control.nodeId,
                    value: { kind: "text", text: r.text },
                  },
                ],
                answer: h,
              }
            : {
                ok: true,
                kind: "command",
                story: t.reads.story,
                ops:
                  r.text.length === 0
                    ? []
                    : [
                        {
                          op: "insertText",
                          paragraphId: p.paragraphId,
                          offset: p.offset,
                          text: r.text,
                          inside: t.node.id,
                        },
                      ],
                answer: h,
              };
        }
        case "deleteContentControl": {
          let t = nt(r.contentControl);
          if (!("control" in t)) return t;
          if (typeof r.keepContent != "boolean")
            return d(
              "unsupported-content",
              "keepContent is required",
              "keepContent",
            );
          let o = u(t.reads),
            i = y(o);
          return (
            i || {
              ok: true,
              kind: "command",
              story: t.reads.story,
              ops: [
                {
                  op: "removeContentControl",
                  controlId: t.control.nodeId,
                  keepContent: r.keepContent,
                },
              ],
              answer: () => F,
            }
          );
        }
        case "insertContentControl": {
          let t = W(r.span, e, a);
          if (!t.ok) return d(t.code, "that span is not a place", t.detail);
          if (!t.value)
            return d(
              "invalid-offset",
              "that story holds nothing to wrap",
              "empty-story",
            );
          let o = E(t.value);
          if (!o)
            return d("invalid-handle", "that story is not in this document");
          let i = t.value;
          if (i.start.paragraphId !== i.end.paragraphId)
            return d(
              "unsupported-content",
              "wrapping several paragraphs in one control is not supported here",
              "multi-paragraph",
            );
          if (!Yo.has(r.subtype))
            return d(
              "unsupported-content",
              "that control type cannot be inserted",
              r.subtype,
            );
          let c = u(o),
            p = y(c);
          return (
            p || {
              ok: true,
              kind: "command",
              story: o.story,
              ops: [
                {
                  op: "insertContentControl",
                  paragraphId: i.start.paragraphId,
                  start: i.start.offset,
                  end: i.end.offset,
                  type: r.subtype,
                  ...(r.tag === void 0 ? {} : { tag: r.tag }),
                  ...(r.title === void 0 ? {} : { alias: r.title }),
                },
              ],
              answer: () => F,
            }
          );
        }
        case "insertCustomNode": {
          let t = Fn(r);
          if (t) return d("unsupported-content", t.message, t.detail);
          let o = Bn(r.payload);
          if (!o.ok)
            return d(
              "unsupported-content",
              "that payload cannot be written",
              o.field,
            );
          let i = Dn(r, e, a);
          if ("code" in i) return d(i.code, i.message, i.detail);
          let { start: c, end: p } = i.range,
            h = E(i.range);
          if (!h)
            return d("invalid-handle", "that story is not in this document");
          let A = y(u(h));
          return (
            A || {
              ok: true,
              kind: "customNodeWrite",
              story: h.story,
              write: jn(r, c, p, o.value),
              answer: () => F,
            }
          );
        }
        default:
          return d(
            "unknown-operation",
            "this host does not implement that operation",
            String(r.op),
          );
      }
    };
  return {
    plan(r) {
      let t = k.conflict(r);
      if (t) return d("conflicting-operations", t.message, t.detail);
      let o = Gn(r);
      return (o.ok && k.note(r), o);
    },
    get hasCommands() {
      return k.hasCommands;
    },
    get writeScope() {
      return m?.reads.scope ?? null;
    },
    settle(r) {
      let t = m;
      if (t) {
        let o = r.story(t.reads.story);
        if (!o)
          return {
            ok: false,
            detail: `the story this batch wrote is gone: ${B(t.reads.story)}`,
          };
        let i = new Set(t.reads.paragraphIds),
          c = o.paragraphIds.filter((h) => !i.has(h));
        if (c.length !== t.created.length)
          return {
            ok: false,
            detail: `planned ${String(t.created.length)} new paragraphs, the transaction made ${String(c.length)}`,
          };
        t.order
          .filter((h) => h.id === null)
          .forEach((h, A) => {
            h.id = c[A] ?? null;
          });
        for (let h of t.retargets) h.slot.id && e.retarget(h.from, h.slot.id);
      }
      for (let o of f) {
        let i = r.story(o.range.start.story);
        !i || !qo(o.range, i) || n.select?.(o.range, o.mode);
      }
      return { ok: true };
    },
  };
}
var er = Object.freeze({ status: "skipped" });
function J(n, e, s) {
  return Object.freeze(
    s === void 0 ? { code: n, message: e } : { code: n, message: e, detail: s },
  );
}
function nr(n) {
  let e = n === "unsupported-revision" || n.startsWith("unsupported-revision:");
  return J(
    e ? "unsupported-revision" : "transaction-refused",
    e
      ? "that story contains a tracked change this engine cannot resolve"
      : "the document store refused the transaction",
    n,
  );
}
function tt(n, e, s, a) {
  return {
    ok: false,
    results: n.map((l, u) => (u === e ? { status: "error", error: s } : er)),
    revision: a,
    changed: false,
  };
}
function Ma(n) {
  let { port: e } = n,
    s = Object.freeze({ ...n.capabilities }),
    a = en(),
    l = new Set(),
    u = false,
    f = null,
    k = s.events
      ? e.subscribe(() => {
          if (u) return;
          let v = Object.freeze({ revision: e.revision() });
          for (let g of [...l]) g(v);
        })
      : () => {},
    m = (v) => {
      if (f && f.pkg === v) return f.value;
      let g = yn(v);
      return ((f = { pkg: v, value: g }), g);
    };
  return {
    capabilities: s,
    revision: () => e.revision(),
    execute: (v) => {
      let g = Array.isArray(v?.operations) ? v.operations : [],
        I = e.revision();
      if (u) return tt(g, 0, J("disposed", "this host was disposed"), I);
      if (!s.document)
        return tt(
          g,
          0,
          J("unsupported-capability", "this host has no document", "document"),
          I,
        );
      let C = e.currentPackage();
      if (!C)
        return tt(
          g,
          0,
          J("document-unavailable", "this host holds no document right now"),
          I,
        );
      if (v.expectedRevision !== void 0 && v.expectedRevision !== I)
        return tt(
          g,
          0,
          J(
            "stale-revision",
            "the document moved since that revision",
            `expected ${String(v.expectedRevision)}, at ${I}`,
          ),
          I,
        );
      let R = Kn({
          handles: a,
          reads: m(C),
          capabilities: s,
          ...(e.select ? { select: e.select.bind(e) } : {}),
        }),
        N = [],
        P = [],
        L = null,
        M = [],
        j = null,
        Z,
        U = null,
        E = -1;
      for (let H = 0; H < g.length; H += 1) {
        let z = R.plan(g[H]);
        if (!z.ok) return tt(g, H, z.error, I);
        if ((N.push(z), z.kind === "command"))
          if ((E < 0 && (E = H), z.lifecycle)) L = z.ops[0] ?? null;
          else if (z.relate) {
            let st = z.relate;
            P.push((vt) => {
              let pt = vt(st.url);
              return pt === null ? null : st.ops(pt);
            });
          } else {
            let { ops: st } = z;
            P.push(() => st);
          }
        else
          z.kind === "commentWrite"
            ? (E < 0 && (E = H),
              M.push(z.write),
              (j = R.writeScope ?? { kind: "body" }))
            : z.kind === "customNodeWrite" &&
              (E < 0 && (E = H),
              (U = {
                write: z.write,
                scope: R.writeScope ?? { kind: "body" },
              }));
      }
      let X = false;
      if (M.length > 0) {
        let H = e.applyCommentWrites(M, j ?? { kind: "body" });
        if (!H.ok)
          return tt(
            g,
            E < 0 ? 0 : E,
            J(
              "transaction-refused",
              "the document store refused the comment write",
              H.reason,
            ),
            I,
          );
        ((X = H.changed), (Z = H.commentId));
      }
      if (U) {
        let H = e.applyCustomNodeWrite(U.write, U.scope);
        if (!H.ok)
          return tt(
            g,
            E < 0 ? 0 : E,
            J(
              "transaction-refused",
              "the document store refused the custom-node write",
              H.reason,
            ),
            I,
          );
        X = H.changed;
      }
      if (L) {
        let H = e.applyLifecycle(L);
        if (!H.ok)
          return tt(
            g,
            E < 0 ? 0 : E,
            J(
              "transaction-refused",
              "the document store refused the transaction",
              H.reason,
            ),
            I,
          );
        X = H.changed;
      }
      if (P.length > 0) {
        let H = e.apply(
          (z) => {
            let st = [];
            for (let vt of P) {
              let pt = vt(z);
              if (pt === null) return null;
              st.push(...pt);
            }
            return st;
          },
          R.writeScope ?? { kind: "body" },
        );
        if (!H.ok) return tt(g, E < 0 ? 0 : E, nr(H.reason), I);
        X = H.changed;
      }
      let et = e.currentPackage();
      if (!et)
        return tt(
          g,
          0,
          J("document-unavailable", "this host holds no document right now"),
          I,
        );
      let At = m(et),
        Ot = R.settle(At);
      return Ot.ok
        ? {
            ok: true,
            results: N.map((H) => ({
              status: "ok",
              value:
                H.kind === "query"
                  ? H.value
                  : H.kind === "customNodeWrite"
                    ? H.answer(At)
                    : H.answer(At, Z),
            })),
            revision: e.revision(),
            changed: X,
          }
        : tt(
            g,
            E < 0 ? 0 : E,
            J(
              "transaction-refused",
              "the transaction did not produce the document the batch planned",
              Ot.detail,
            ),
            e.revision(),
          );
    },
    save() {
      if (u)
        return { ok: false, error: J("disposed", "this host was disposed") };
      if (!s.save)
        return {
          ok: false,
          error: J("unsupported-capability", "this host cannot save", "save"),
        };
      let v = e.save();
      return v
        ? { ok: true, bytes: v }
        : {
            ok: false,
            error: J(
              "document-unavailable",
              "this host holds no document right now",
            ),
          };
    },
    subscribe(v) {
      return u || !s.events
        ? () => {}
        : (l.add(v),
          () => {
            l.delete(v);
          });
    },
    dispose() {
      u || ((u = true), l.clear(), k(), e.dispose(), (f = null));
    },
  };
}
export { Ht as a, rr as b, qn as c, to as d, Yt as e, Gt as f, Ma as g };
