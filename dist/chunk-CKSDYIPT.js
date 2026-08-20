import {
  pd,
  S,
  U as U$1,
  Da,
  gb,
  hb,
  gc,
  qb,
  bb,
  jb,
  pb,
} from "./chunk-S5I6ENWU.js";
var L = 8,
  je = ["color", "background", "spanClassName", "avatarUrl"],
  We = ["color", "background", "spanClassName"],
  Ve = new Set(["http", "https", "data", "blob"]),
  Xe = /^([a-zA-Z][a-zA-Z0-9+.-]*):/;
function Ye(t) {
  let e = t.replace(/[\u0000-\u0020\u007f]/g, "");
  if (e.length === 0) return;
  let n = Xe.exec(e);
  if (n)
    return !Ve.has(n[1].toLowerCase()) ||
      (/^data:/i.test(e) && !/^data:image\/(?!svg)/i.test(e))
      ? void 0
      : e;
  let o = (r) => e[r] === "/" || e[r] === "\\";
  return o(0) && o(1) ? void 0 : e;
}
function Ze(t) {
  if (typeof t == "string") return t.length > 0 ? { color: t } : null;
  if (t === null || typeof t != "object") return null;
  let e = {},
    n = Object.prototype.hasOwnProperty;
  for (let o of je) {
    if (!n.call(t, o)) continue;
    let r = t[o];
    if (!(typeof r != "string" || r.length === 0)) {
      if (o === "avatarUrl") {
        let a = Ye(r);
        a !== void 0 && (e.avatarUrl = a);
        continue;
      }
      e[o] = r;
    }
  }
  return Object.keys(e).length > 0 ? e : null;
}
function U(t) {
  return `var(--doc-review-author-${t % L})`;
}
function de(t) {
  let e = new Map();
  if (t === void 0 || t === "kind" || t === "author") return e;
  for (let [n, o] of Object.entries(t.authors)) {
    let r = Ze(o);
    r && e.set(n, r);
  }
  return e;
}
function en(t, e) {
  let n = de(e);
  return [...t].map(([o, r]) => {
    let a = n.get(o);
    return {
      author: o,
      slot: r,
      color: a?.color ?? U(r),
      ...(a ? { style: a } : {}),
    };
  });
}
var qe = 128;
function O(t, e, n = qe) {
  let o = e.length < n ? e.length : n,
    r = t;
  for (let a = 0; a < o; a += 1) r = Math.imul(r ^ e.charCodeAt(a), 16777619);
  return Math.imul(r ^ e.length, 16777619);
}
function Je(t, e, n) {
  let o = O(2166136261, n);
  for (let r of t.keys()) o = O(o, r);
  for (let [r, a] of e) {
    o = O(o, r);
    for (let i of We) o = O(o, a[i] ?? "", 1 / 0);
  }
  return `${t.size}.${e.size}.${(o >>> 0).toString(36)}`;
}
function ce(t) {
  return t === null ? "kind" : t.key;
}
var G = new WeakMap();
function ye(t, e) {
  if (t === "kind") return null;
  let n = G.get(e);
  if (n && n.option === t) return n.context;
  let o = de(t),
    r = t === void 0 || t === "author" ? "author" : (t.others ?? "author");
  if (o.size === 0 && r === "kind")
    return (G.set(e, { option: t, context: null }), null);
  let a = et(e),
    i = new Map();
  for (let [d, l] of o) {
    if (!l.spanClassName) continue;
    let c = l.spanClassName.split(/\s+/).filter((u) => u.length > 0);
    c.length > 0 && i.set(d, c);
  }
  let s = {
    authorSlots: a,
    styles: o,
    classTokens: i,
    others: r,
    key: Je(a, o, r),
  };
  return (G.set(e, { option: t, context: s }), s);
}
var se = new WeakMap();
function Qe(t) {
  let e = se.get(t);
  if (e) return e;
  let n = [],
    o = new Set(),
    r = (a) => {
      a === "" || o.has(a) || (o.add(a), n.push(a));
    };
  for (let a of S(t)) {
    for (let s of a.lines)
      for (let d of s.spans) {
        let l = d.revisions;
        if (l !== void 0) for (let c = 0; c < l.length; c += 1) r(l[c].author);
        for (let c of d.props) {
          if (c.localName !== "rPrChange" && c.localName !== "pPrChange")
            continue;
          let u = c.attributes?.author;
          r(u ?? "");
          break;
        }
      }
    let i = a.markRevisions;
    if (i) for (let s = 0; s < i.length; s += 1) r(i[s].author);
  }
  return (se.set(t, n), n);
}
var le = new WeakMap();
function et(t) {
  let e = le.get(t);
  if (e) return e;
  let n = new Map(),
    o = (r) => {
      for (let a of Qe(r)) n.has(a) || n.set(a, n.size);
    };
  for (let r of t.pages) {
    (o(r.fragments),
      r.header && o(r.header.fragments),
      r.footer && o(r.footer.fragments));
    for (let a of [r.footnotes, r.endnotes])
      if (a) {
        a.separator && o(a.separator.fragments);
        for (let i of a.notes) o(i.fragments);
      }
    for (let a of [
      r.anchoredDrawings,
      r.header?.anchoredDrawings,
      r.footer?.anchoredDrawings,
    ])
      if (a) for (let i of a) i.textboxStory && o(i.textboxStory.fragments);
  }
  return (le.set(t, n), n);
}
function tn(t, e) {
  let n = null;
  for (let o of e)
    o === "" ||
      t.has(o) ||
      (n === null && (n = new Map(t)), n.has(o) || n.set(o, n.size));
  return n ?? t;
}
function ue(t, e, n) {
  if (t === void 0 || t.length === 0) return null;
  let o = t[t.length - 1],
    r = t.some((s) => s.kind === "delete" || s.kind === "moveFrom"),
    a = o.kind,
    i =
      a === "delete" || a === "moveFrom"
        ? "line-through"
        : a === "insert" || a === "moveTo"
          ? "underline"
          : null;
  return {
    attribution: o,
    line: r && i === "underline" ? "line-through" : i,
    decorationStyle:
      a === "moveFrom" || a === "moveTo"
        ? "double"
        : a === "insert"
          ? "dashed"
          : "solid",
    color: r ? "var(--doc-revision-deletion)" : "var(--doc-revision-insertion)",
    authorColor: n?.get(o.author)?.color ?? U(e?.get(o.author) ?? 0),
    deleted: r,
  };
}
function he(t, e, n, o, r, a) {
  for (let i of [n.footnotes, n.endnotes]) i && e.append(tt(t, n, i, o, r, a));
}
function tt(t, e, n, o, r, a) {
  let i = t.createElement("div");
  if (
    ((i.className = "docx-notes"),
    (i.dataset.docxNotes = n.kind),
    (i.dataset.docxNotesPlacement = n.placement),
    (i.style.position = "absolute"),
    (i.style.left = `${(n.box.x - e.box.x) * o.scale}px`),
    (i.style.top = `${(n.box.y - e.box.y) * o.scale}px`),
    (i.style.width = `${n.box.width * o.scale}px`),
    (i.style.height = `${n.box.height * o.scale}px`),
    n.separator)
  ) {
    let s = t.createElement("div");
    ((s.className = "docx-note-separator"),
      (s.dataset.docxNoteSeparator = n.separator.kind),
      s.setAttribute("contenteditable", "false"),
      s.setAttribute("aria-hidden", "true"),
      (s.style.position = "absolute"),
      (s.style.left = `${(n.separator.box.x - n.box.x) * o.scale}px`),
      (s.style.top = `${(n.separator.box.y - n.box.y) * o.scale}px`),
      (s.style.width = `${n.separator.box.width * o.scale}px`),
      (s.style.height = `${Math.max(n.separator.box.height, 0.75) * o.scale}px`));
    let d = n.separator.ruleStyle;
    if (d || n.separator.synthetic || n.separator.fragments.length === 0)
      nt(s, t, d ?? "single", o.scale);
    else
      for (let l of n.separator.fragments)
        s.append(l.kind === "table" ? a(t, l, o) : r(t, l, o));
    i.append(s);
  }
  for (let s of n.notes) {
    let d = t.createElement("div");
    ((d.className = "docx-note"),
      (d.dataset.docxNote = s.noteKind),
      (d.dataset.docxNoteId = String(s.noteId)),
      (d.dataset.docxNoteScope = s.scopeId),
      s.mark !== null && (d.dataset.docxNoteMark = s.mark),
      s.continuation && (d.dataset.docxNoteContinuation = ""),
      d.setAttribute("role", "doc-footnote"),
      (d.style.position = "absolute"),
      (d.style.left = `${(s.box.x - n.box.x) * o.scale}px`),
      (d.style.top = `${(s.box.y - n.box.y) * o.scale}px`),
      (d.style.width = `${s.box.width * o.scale}px`),
      (d.style.height = `${s.box.height * o.scale}px`));
    for (let l of s.fragments)
      d.append(l.kind === "table" ? a(t, l, o) : r(t, l, o));
    i.append(d);
  }
  return i;
}
function nt(t, e, n, o) {
  t.dataset.docxNoteRule = n;
  let r = Math.max(1, o * 0.75);
  if (n === "single") {
    ((t.style.borderTop = `${r}px solid currentColor`),
      (t.style.opacity = "0.85"));
    return;
  }
  t.style.opacity = "0.85";
  let a = Math.max(1, o * 1.25);
  for (let i of [0, r + a]) {
    let s = e.createElement("div");
    (s.setAttribute("aria-hidden", "true"),
      (s.style.position = "absolute"),
      (s.style.left = "0"),
      (s.style.right = "0"),
      (s.style.top = `${i}px`),
      (s.style.height = "0"),
      (s.style.borderTop = `${r}px solid currentColor`),
      t.append(s));
  }
}
var pe = Object.freeze({
    "image/svg+xml": "SVG",
    "image/tiff": "TIFF",
    "image/x-emf": "EMF",
    "image/x-wmf": "WMF",
    unknown: "Unknown",
  }),
  z = new WeakMap(),
  j = new WeakMap(),
  ot = 256;
function fe(t, e) {
  let n = z.get(t);
  if (n) return n;
  let o = new Map(),
    r = new Map();
  return (
    (n = Object.freeze({
      urlForReady(a, i) {
        let s = o.get(a.resourceKey);
        if (s) return s;
        let d = e.create(a, i);
        return (o.set(a.resourceKey, d), d);
      },
      imageFor(a, i, s) {
        let d = r.get(a);
        if (d && d.resourceKey === i) return d.element;
        let l = s.createElement("img");
        return (
          r.size < ot &&
            r.set(a, {
              element: l,
              resourceKey: i,
              ...(d?.readyElement ? { readyElement: d.readyElement } : {}),
            }),
          l
        );
      },
      imageForPending(a) {
        return r.get(a)?.element ?? null;
      },
      readyElementFor(a) {
        return r.get(a)?.readyElement ?? null;
      },
      rememberReadyElement(a, i) {
        let s = r.get(a);
        s && r.set(a, { ...s, readyElement: i });
      },
      reconcile(a, i) {
        for (let [s, d] of o) a.has(s) || (e.revoke(d), o.delete(s));
        for (let [s, d] of r)
          i.has(s) || (d.element.removeAttribute("src"), r.delete(s));
      },
      revokeAll() {
        for (let a of o.values()) e.revoke(a);
        o.clear();
        for (let a of r.values()) a.element.removeAttribute("src");
        r.clear();
      },
    })),
    z.set(t, n),
    n
  );
}
function W(t, e) {
  return `${e.paintInstance ?? ""}|${t.drawingNodeId}`;
}
function sn(t) {
  (z.get(t)?.revokeAll(), z.delete(t));
}
function w(t) {
  return Number.isFinite(t) ? String(t) : "0";
}
function xe(t, e) {
  if (t.length < 3 || e.width <= 0 || e.height <= 0) return null;
  let n = [];
  for (let o of t) {
    if (!Number.isFinite(o.x) || !Number.isFinite(o.y)) return null;
    let r = ((o.x - e.x) / e.width) * 100,
      a = ((o.y - e.y) / e.height) * 100;
    n.push(`${w(r)}% ${w(a)}%`);
  }
  return `polygon(${n.join(", ")})`;
}
function me(t) {
  let e = t.geometry.contentBounds;
  return pb({
    transform: t.transform,
    contentWidth: e.width,
    contentHeight: e.height,
  });
}
function be(t) {
  let { effects: e } = t,
    n = [];
  if (
    (e.grayscale && n.push("grayscale(1)"),
    e.brightness !== 0 && Number.isFinite(e.brightness))
  ) {
    let o = 1 + e.brightness / 100;
    Number.isFinite(o) && n.push(`brightness(${w(Math.max(0, o))})`);
  }
  if (e.contrast !== 0 && Number.isFinite(e.contrast)) {
    let o = 1 + e.contrast / 100;
    Number.isFinite(o) && n.push(`contrast(${w(Math.max(0, o))})`);
  }
  return n.length > 0 ? n.join(" ") : void 0;
}
function ve(t, e) {
  let { crop: n } = t,
    o = Math.max(0, Math.min(1, n.left)),
    r = Math.max(0, Math.min(1, n.top)),
    a = Math.max(0, Math.min(1, n.right)),
    i = Math.max(0, Math.min(1, n.bottom)),
    s = Math.max(1e-4, 1 - o - a),
    d = Math.max(1e-4, 1 - r - i);
  return Object.freeze({
    width: `${w((1 / s) * 100)}%`,
    height: `${w((1 / d) * 100)}%`,
    left: `${w((-o / s) * 100)}%`,
    top: `${w((-r / d) * 100)}%`,
  });
}
function rt(t, e) {
  let { resource: n } = t;
  switch (n.kind) {
    case "external":
      return e.externalResource;
    case "missing":
      return e.missingResource;
    case "pending":
      return e.pendingResource;
    case "unrenderable":
      switch (n.reason) {
        case "unsupported-format":
          return e.unsupportedFormat(pe[n.mime] ?? pe.unknown);
        case "non-picture-graphic":
          return e.nonPictureGraphic(t.placeholderGraphicKind ?? "graphic");
        case "signature-mismatch":
          return e.contentMismatch;
        case "decode-failed":
          return e.decodeFailed;
        case "resource-limit":
          return e.resourceLimit;
        default:
          return e.invalidResource;
      }
    default:
      return e.invalidResource;
  }
}
function I(t, e, n) {
  let { accessibility: o } = e;
  o.hidden ||
    (t.setAttribute("role", n ? "link" : "img"),
    o.label
      ? t.setAttribute("aria-label", o.label)
      : n || t.setAttribute("aria-hidden", "true"));
}
function C(t, e, n, o) {
  let r = o?.x ?? 0,
    a = o?.y ?? 0;
  ((t.style.position = "absolute"),
    (t.style.left = `${(e.x - r) * n}px`),
    (t.style.top = `${(e.y - a) * n}px`),
    (t.style.width = `${e.width * n}px`),
    (t.style.height = `${e.height * n}px`),
    (t.style.boxSizing = "border-box"),
    (t.style.overflow = "hidden"),
    (t.style.pointerEvents = "auto"));
}
function at(t, e, n, o, r) {
  let a = t.paintBounds,
    i = t.geometry.contentBounds,
    s = ve(t);
  return [
    o,
    n.scale,
    r?.x ?? 0,
    r?.y ?? 0,
    a.x,
    a.y,
    a.width,
    a.height,
    i.x,
    i.y,
    i.width,
    i.height,
    xe(t.geometry.clipPolygon ?? [], a) ?? "",
    be(t) ?? "",
    me(t) ?? "",
    s.width,
    s.height,
    s.left,
    s.top,
    n.inertLinks ? "" : (t.hyperlinkHref ?? ""),
    t.accessibility.label ?? "",
  ].join("|");
}
function M(t, e, n, o) {
  let r = t.createElement("div");
  ((r.className = "docx-drawing docx-drawing-placeholder"),
    (r.dataset.drawingNodeId = e.drawingNodeId),
    C(r, e.paintBounds, n.scale, o));
  let a = t.createElement("div");
  a.className = "docx-drawing-placeholder-card";
  let i = t.createElement("span");
  return (
    (i.className = "docx-drawing-placeholder-label"),
    (i.textContent = rt(e, n.strings)),
    a.append(i),
    r.append(a),
    e.hyperlinkHref && !n.inertLinks
      ? ((r.dataset.docxDrawingLink = e.drawingNodeId),
        (r.dataset.docxDrawingLinkKind = "external"),
        (r.dataset.docxDrawingLinkHref = e.hyperlinkHref),
        r.setAttribute("tabindex", "-1"),
        I(r, e, true))
      : I(r, e, false),
    r
  );
}
function it(t, e, n, o, r, a) {
  let i = e.resource;
  if (i.kind !== "ready") return M(t, e, n, a);
  let s = W(e, n),
    d = r?.readyElementFor?.(s) ?? t.createElement("div"),
    l = at(e, i, n, o, a);
  if (j.get(d) === l) return d;
  ((d.className = "docx-drawing docx-drawing-ready"),
    (d.style.cssText = ""),
    (d.dataset.drawingNodeId = e.drawingNodeId),
    delete d.dataset.docxDrawingLink,
    delete d.dataset.docxDrawingLinkKind,
    delete d.dataset.docxDrawingLinkHref,
    d.removeAttribute("aria-hidden"),
    d.removeAttribute("aria-label"),
    d.removeAttribute("role"),
    d.removeAttribute("tabindex"),
    C(d, e.paintBounds, n.scale, a));
  let c = xe(e.geometry.clipPolygon ?? [], e.paintBounds);
  c && (d.style.clipPath = c);
  let u = t.createElement("div");
  ((u.className = "docx-drawing-image-frame"), (u.style.position = "absolute"));
  let y = e.geometry.contentBounds,
    h = e.paintBounds;
  ((u.style.left = `${(y.x - h.x) * n.scale}px`),
    (u.style.top = `${(y.y - h.y) * n.scale}px`),
    (u.style.width = `${y.width * n.scale}px`),
    (u.style.height = `${y.height * n.scale}px`));
  let f = be(e);
  f && (u.style.filter = f);
  let m = t.createElement("div");
  ((m.className = "docx-drawing-transform-stage"),
    (m.style.position = "relative"),
    (m.style.width = "100%"),
    (m.style.height = "100%"));
  let k = me(e);
  k && ((m.style.transform = k), (m.style.transformOrigin = "0 0"));
  let S = t.createElement("div");
  ((S.className = "docx-drawing-crop-viewport"),
    (S.style.position = "relative"),
    (S.style.width = "100%"),
    (S.style.height = "100%"),
    (S.style.overflow = "hidden"));
  let b = r?.imageFor?.(s, i.resourceKey, t) ?? t.createElement("img");
  ((b.className = "docx-drawing-image"),
    b.setAttribute("draggable", "false"),
    b.getAttribute("src") !== o && b.setAttribute("src", o),
    b.setAttribute("alt", ""));
  let A = ve(e);
  return (
    (b.style.position = "absolute"),
    (b.style.width = A.width),
    (b.style.height = A.height),
    (b.style.left = A.left),
    (b.style.top = A.top),
    (b.style.maxWidth = "none"),
    (b.style.maxHeight = "none"),
    S.append(b),
    m.append(S),
    u.append(m),
    d.replaceChildren(u),
    e.hyperlinkHref && !n.inertLinks
      ? ((d.dataset.docxDrawingLink = e.drawingNodeId),
        (d.dataset.docxDrawingLinkKind = "external"),
        (d.dataset.docxDrawingLinkHref = e.hyperlinkHref),
        d.setAttribute("tabindex", "-1"),
        I(d, e, true))
      : I(d, e, false),
    r?.rememberReadyElement?.(s, d),
    j.set(d, l),
    d
  );
}
var ge = "http://www.w3.org/2000/svg";
function st(t, e, n, o) {
  let r = e.vectorShape,
    a = t.createElement("div");
  ((a.className = "docx-drawing docx-drawing-shape"),
    (a.dataset.drawingNodeId = e.drawingNodeId),
    C(a, e.paintBounds, n.scale, o));
  let i = e.geometry.contentBounds,
    s = e.paintBounds,
    d = t.createElement("div");
  ((d.className = "docx-drawing-image-frame"),
    (d.style.position = "absolute"),
    (d.style.left = `${(i.x - s.x) * n.scale}px`),
    (d.style.top = `${(i.y - s.y) * n.scale}px`),
    (d.style.width = `${i.width * n.scale}px`),
    (d.style.height = `${i.height * n.scale}px`));
  let l = t.createElementNS(ge, "svg");
  (l.setAttribute(
    "viewBox",
    `0 0 ${w(Math.max(1, r.extentEmu.cx))} ${w(Math.max(1, r.extentEmu.cy))}`,
  ),
    l.setAttribute("preserveAspectRatio", "none"),
    l.setAttribute("width", "100%"),
    l.setAttribute("height", "100%"),
    (l.style.display = "block"));
  let c = t.createElementNS(ge, "path"),
    u = r.subpathsEmu
      .map((y) => `M${y.map((h) => `${w(h.x)} ${w(h.y)}`).join("L")}Z`)
      .join("");
  return (
    c.setAttribute("d", u),
    c.setAttribute("fill", r.fillHex !== null ? `#${r.fillHex}` : "none"),
    c.setAttribute("fill-rule", "evenodd"),
    r.strokeHex !== null &&
      (c.setAttribute("stroke", `#${r.strokeHex}`),
      c.setAttribute("stroke-width", w(Math.max(1, r.strokeWidthEmu)))),
    l.append(c),
    d.append(l),
    a.append(d),
    e.hyperlinkHref && !n.inertLinks
      ? ((a.dataset.docxDrawingLink = e.drawingNodeId),
        (a.dataset.docxDrawingLinkKind = "external"),
        (a.dataset.docxDrawingLinkHref = e.hyperlinkHref),
        a.setAttribute("tabindex", "-1"),
        I(a, e, true))
      : I(a, e, false),
    a
  );
}
function lt(t, e, n, o, r) {
  let a = o.scale,
    i = t.createElement("div");
  ((i.className = "docx-drawing docx-drawing-textbox"),
    (i.dataset.drawingNodeId = e.drawingNodeId),
    i.setAttribute("contenteditable", "false"),
    C(i, e.paintBounds, o.scale, r),
    (i.style.overflow = "hidden"));
  let s = (e.x - e.paintBounds.x) * a,
    d = (e.y - e.paintBounds.y) * a;
  if (n.fillHex !== null || n.strokeHex !== null) {
    let c = t.createElement("div");
    ((c.className = "docx-drawing-textbox-box"),
      (c.style.position = "absolute"),
      (c.style.left = `${s}px`),
      (c.style.top = `${d}px`),
      (c.style.width = `${e.width * a}px`),
      (c.style.height = `${e.height * a}px`),
      (c.style.boxSizing = "border-box"),
      n.fillHex !== null && (c.style.backgroundColor = `#${n.fillHex}`),
      n.strokeHex !== null &&
        (c.style.border = `${Math.max(n.strokeWidthPt * a, 0.5)}px solid #${n.strokeHex}`),
      i.append(c));
  }
  let l = t.createElement("div");
  ((l.className = "docx-drawing-textbox-content"),
    (l.style.position = "absolute"),
    (l.style.left = `${s + n.contentOffset.x * a}px`),
    (l.style.top = `${d + n.contentOffset.y * a}px`),
    (l.style.width = `${n.contentWidth * a}px`),
    (l.style.height = `${Math.max(0, n.contentHeight) * a}px`),
    (l.style.overflow = "hidden"));
  for (let c of n.fragments) l.append(o.paintStoryFragment(t, c));
  for (let c of l.querySelectorAll("[data-paragraph-id]"))
    delete c.dataset.paragraphId;
  return (i.append(l), I(i, e, false), i);
}
function Re(t, e, n, o, r) {
  if (
    e.accessibility.hidden ||
    e.paintBounds.width <= 0 ||
    e.paintBounds.height <= 0
  )
    return null;
  if (
    e.kind === "anchoredDrawing" &&
    e.textboxStory !== void 0 &&
    n.paintStoryFragment !== void 0
  )
    return lt(t, e, e.textboxStory, n, r);
  if (e.vectorShape && e.vectorShape.subpathsEmu.length > 0)
    return st(t, e, n, r);
  let { resource: a } = e;
  if (a.kind === "ready") {
    if (!n.imageUrlPort || !o) return M(t, e, n, r);
    let i = o.urlForReady(a.validatedHandle, a.mime);
    return i ? it(t, e, n, i, o, r) : M(t, e, n, r);
  }
  if (a.kind === "pending") {
    let i =
      o?.readyElementFor?.(W(e, n)) ??
      o?.imageForPending?.(W(e, n))?.closest(".docx-drawing-ready");
    return i
      ? (j.delete(i),
        (i.dataset.drawingNodeId = e.drawingNodeId),
        C(i, e.paintBounds, n.scale, r),
        i)
      : M(t, e, n, r);
  }
  return M(t, e, n, r);
}
function Se(t, e, n, o, r) {
  let a = [];
  for (let i of e.drawings ?? []) {
    let s = Re(t, i, n, o, r);
    s && a.push(s);
  }
  return Object.freeze(a);
}
function we(t, e, n, o, r, a) {
  let i = [];
  for (let s of e) {
    if (qb(s) !== n) continue;
    let d = Re(t, s, o, r, a);
    d && ((d.dataset.drawingLayer = n), i.push(d));
  }
  return Object.freeze(i);
}
function Ae(t) {
  let e = new Set(),
    n = (i) => {
      i.resource.kind === "ready" && e.add(i.resource.resourceKey);
    },
    o = (i) => {
      for (let s of i.drawings ?? []) n(s);
    },
    r = (i) => {
      for (let s of i.lines) o(s);
    },
    a = (i) => {
      if (i.kind === "table") {
        for (let s of i.rows)
          for (let d of s.cells) for (let l of d.blocks) a(l);
        return;
      }
      r(i);
    };
  for (let i of t.pages) {
    for (let s of i.anchoredDrawings ?? []) n(s);
    for (let s of i.fragments) a(s);
    for (let s of [i.header, i.footer])
      if (s) {
        for (let d of s.anchoredDrawings ?? []) n(d);
        for (let d of s.fragments) a(d);
      }
  }
  return e;
}
function ke(t) {
  let e = new Set(),
    n = (r, a) => {
      e.add(`p${r}|${a.drawingNodeId}`);
    },
    o = (r, a) => {
      if (a.kind === "table") {
        for (let i of a.rows)
          for (let s of i.cells) for (let d of s.blocks) o(r, d);
        return;
      }
      for (let i of a.lines) for (let s of i.drawings ?? []) n(r, s);
    };
  for (let r of t.pages) {
    for (let a of r.anchoredDrawings ?? []) n(r.index, a);
    for (let a of r.fragments) o(r.index, a);
    for (let a of [r.header, r.footer])
      if (a) {
        for (let i of a.anchoredDrawings ?? []) n(r.index, i);
        for (let i of a.fragments) o(r.index, i);
      }
  }
  return e;
}
function $e(t) {
  return [
    t.missingResource,
    t.externalResource,
    t.invalidResource,
    t.contentMismatch,
    t.decodeFailed,
    t.resourceLimit,
    t.pendingResource,
    t.unsupportedFormat("probe"),
    t.nonPictureGraphic("probe"),
  ].join("\0");
}
var V = Object.freeze({
  unsupportedFormat: (t) => `Unsupported image format (${t})`,
  nonPictureGraphic: (t) => `Unsupported graphic (${t})`,
  missingResource: "Image missing",
  externalResource: "External image not loaded",
  invalidResource: "Invalid image",
  contentMismatch: "Image content does not match its type",
  decodeFailed: "Image could not be decoded",
  resourceLimit: "Image exceeds size limits",
  pendingResource: "Loading image",
});
function ln(t) {
  return Object.freeze({
    unsupportedFormat: (e) => t("image.unsupportedFormat", { format: e }),
    nonPictureGraphic: (e) => t("image.nonPictureGraphic", { kind: e }),
    missingResource: t("image.missingResource"),
    externalResource: t("image.externalResource"),
    invalidResource: t("image.invalidResource"),
    contentMismatch: t("image.contentMismatch"),
    decodeFailed: t("image.decodeFailed"),
    resourceLimit: t("image.resourceLimit"),
    pendingResource: t("image.pendingResource"),
  });
}
var dt = /^[0-9A-Fa-f]{6}$/;
function ct(t) {
  switch (t) {
    case "dashed":
      return "dashed";
    case "dotted":
      return "dotted";
    case "double":
    case "triple":
      return "solid";
    default:
      return "solid";
  }
}
function Ee(t) {
  return t && dt.test(t) ? t : "000000";
}
function X(t, e) {
  let n = t.createElement("div");
  return (
    (n.className = e),
    n.setAttribute("aria-hidden", "true"),
    n.setAttribute("contenteditable", "false"),
    (n.style.position = "absolute"),
    (n.style.left = "0"),
    (n.style.top = "0"),
    (n.style.right = "0"),
    (n.style.bottom = "0"),
    (n.style.overflow = "visible"),
    (n.style.pointerEvents = "none"),
    (n.style.boxSizing = "border-box"),
    n
  );
}
function _(t, e, n, o) {
  if (!n) return;
  let r = `#${Ee(n.color)}`,
    a = `${Math.max(0, n.widthPt * o)}px`;
  if (
    ((t.style[`border${e}Width`] = a),
    (t.style[`border${e}Color`] = r),
    n.style === "double" || n.style === "triple")
  ) {
    t.style[`border${e}Style`] = "none";
    return;
  }
  t.style[`border${e}Style`] = ct(n.style);
}
function Y(t, e, n, o, r) {
  let a = t.createElement("div");
  ((a.className = r),
    (a.dataset.edge = n.side),
    (a.dataset.stroke = n.role),
    (a.style.position = "absolute"),
    (a.style.left = `${n.x * o}px`),
    (a.style.top = `${n.y * o}px`),
    (a.style.width = `${n.width * o}px`),
    (a.style.height = `${n.height * o}px`),
    (a.style.pointerEvents = "none"),
    (a.style.backgroundColor = `#${Ee(n.color)}`),
    n.cssStyle !== "solid" && (a.dataset.cssStyle = n.cssStyle),
    e.append(a));
}
function yt(t) {
  let e = new Set();
  for (let n of t) e.add(`${n.side}\0${n.role}`);
  return e;
}
function ut(t, e, n, o) {
  let r = yt(n),
    a = (y) => r.has(`${y}\0middle`),
    i = X(t, "docx-table-border-double"),
    s = X(t, "docx-table-border-triple"),
    d = X(t, "docx-table-border-edge"),
    l = false,
    c = false,
    u = false;
  for (let y of n) {
    if (y.role === "edge") {
      ((u = true), Y(t, d, y, o, "docx-table-border-edge-stroke"));
      continue;
    }
    if (a(y.side)) {
      ((c = true), Y(t, s, y, o, "docx-table-border-triple-stroke"));
      continue;
    }
    (y.role === "outer" || y.role === "inner") &&
      ((l = true), Y(t, i, y, o, "docx-table-border-double-stroke"));
  }
  (l && e.append(i), c && e.append(s), u && e.append(d));
}
function Pe(t, e, n, o) {
  (_(e, "Top", n?.top, o),
    _(e, "Right", n?.right, o),
    _(e, "Bottom", n?.bottom, o),
    _(e, "Left", n?.left, o),
    n?.strokes && n.strokes.length > 0 && ut(t, e, n.strokes, o));
}
var Z = "when-selected",
  De = new WeakMap(),
  Le = 0;
function ht(t) {
  let e = De.get(t);
  return (e || ((Le += 1), (e = `alias${Le}`), De.set(t, e)), e);
}
function Be(t) {
  return {
    ...t,
    drawingStrings: t.drawingStrings ?? V,
    urlRegistry: t.urlRegistry ?? null,
  };
}
function pt(t) {
  let e = { ...t, inertLinks: true };
  return Object.freeze({
    scale: t.scale,
    strings: t.drawingStrings,
    ...(t.imageUrlPort ? { imageUrlPort: t.imageUrlPort } : {}),
    ...(t.inertLinks ? { inertLinks: true } : {}),
    ...(t.paintInstance ? { paintInstance: t.paintInstance } : {}),
    paintStoryFragment: (n, o) =>
      o.kind === "table" ? H(n, o, e) : F(n, o, e),
  });
}
function Oe(t) {
  return Object.freeze({ ctx: pt(t), urlRegistry: t.urlRegistry });
}
function Ie(t, e, n, o, r, a) {
  K(t, e, U$1(n), o, r, a);
}
function K(t, e, n, o, r, a, i = true) {
  if (n.length === 0) return;
  let s = Oe(o),
    d = t.createElement("div");
  ((d.className =
    a === "behind"
      ? "docx-drawing-layer docx-drawing-layer-behind"
      : "docx-drawing-layer docx-drawing-layer-front"),
    (d.style.position = "absolute"),
    (d.style.inset = "0"),
    (d.style.pointerEvents = "none"));
  for (let l of we(t, n, a, s.ctx, s.urlRegistry, r)) {
    if (((l.style.pointerEvents = i ? "auto" : "none"), !i))
      for (let c of l.querySelectorAll(".docx-drawing"))
        c.style.pointerEvents = "none";
    d.append(l);
  }
  d.childElementCount > 0 && e.append(d);
}
function Ue(t) {
  return t.horizontalFrame === "page" || t.verticalFrame === "page";
}
function ze(t, e, n) {
  let o = e.paintBounds,
    r =
      e.horizontalFrame === "page"
        ? n.x + (o.x - e.horizontalFrameOrigin)
        : t.box.x + o.x,
    a =
      e.verticalFrame === "page"
        ? n.y + (o.y - e.verticalFrameOrigin)
        : t.box.y + o.y,
    i = r - o.x,
    s = a - o.y,
    d = (l) =>
      Object.freeze({
        x: l.x + i,
        y: l.y + s,
        width: l.width,
        height: l.height,
      });
  return Object.freeze({
    ...e,
    x: e.x + i,
    y: e.y + s,
    paintBounds: d(o),
    hitBounds: d(e.hitBounds),
    geometry: Object.freeze({
      ...e.geometry,
      contentBounds: d(e.geometry.contentBounds),
      paintBounds: d(e.geometry.paintBounds),
      ...(e.geometry.clipPolygon
        ? {
            clipPolygon: Object.freeze(
              e.geometry.clipPolygon.map((l) =>
                Object.freeze({ x: l.x + i, y: l.y + s }),
              ),
            ),
          }
        : {}),
    }),
  });
}
function gt(t, e, n, o, r, a) {
  let i = o.map((d) => ze(n, d, a)),
    s = t.createElement("div");
  ((s.className = "docx-hf-behind-layer"),
    (s.dataset.docxHfBehind = n.kind),
    s.setAttribute("contenteditable", "false"),
    (s.style.position = "absolute"),
    (s.style.inset = "0"),
    (s.style.overflow = "hidden"),
    (s.style.pointerEvents = "none"),
    K(t, s, i, r, a, "behind", false),
    s.childElementCount > 0 && e.append(s));
}
function ft(t, e, n, o, r, a, i, s = false) {
  let d = o.filter(Ue).map((l) => ze(n, l, a));
  K(t, e, d, r, a, i, s);
}
var T = /^[0-9A-Fa-f]{6}$/,
  Te = /^[\p{L}\p{N}\p{M} \-.+_]{1,64}$/u,
  xt = new Map(
    Object.entries({
      single: "solid",
      words: "solid",
      thick: "solid",
      double: "double",
      dotted: "dotted",
      dottedHeavy: "dotted",
      dash: "dashed",
      dashedHeavy: "dashed",
      dashLong: "dashed",
      dashLongHeavy: "dashed",
      dotDash: "dashed",
      dashDotHeavy: "dashed",
      dotDotDash: "dashed",
      dashDotDotHeavy: "dashed",
      wave: "wavy",
      wavyHeavy: "wavy",
      wavyDouble: "wavy",
    }),
  ),
  mt = new Map(
    Object.entries({
      black: "#000000",
      blue: "#0000ff",
      cyan: "#00ffff",
      darkBlue: "#000080",
      darkCyan: "#008080",
      darkGray: "#808080",
      darkGreen: "#008000",
      darkMagenta: "#800080",
      darkRed: "#800000",
      darkYellow: "#808000",
      green: "#00ff00",
      lightGray: "#c0c0c0",
      magenta: "#ff00ff",
      red: "#ff0000",
      yellow: "#ffff00",
      white: "#ffffff",
    }),
  );
function bt(t) {
  return t.doubleStrike ? "double" : t.strike ? "single" : "none";
}
function vt(t) {
  return t === "thick" || t.endsWith("Heavy");
}
function _e(t) {
  if (!t.underline) return null;
  let e =
    t.underline.color && T.test(t.underline.color) ? t.underline.color : null;
  return {
    cssStyle: xt.get(t.underline.variant) ?? "solid",
    color: e,
    heavy: vt(t.underline.variant),
  };
}
function Ke(t, e, n, o) {
  ((t.textDecorationLine = e),
    (t.textDecorationStyle = n),
    o.color && (t.textDecorationColor = `#${o.color}`),
    o.heavy && (t.textDecorationThickness = `max(${2 * o.scale}px, 0.12em)`));
}
function Me(t, e, n) {
  e !== "none" &&
    Ke(t, "line-through", e === "double" ? "double" : "solid", { scale: n });
}
function Ce(t, e, n) {
  Ke(t, "underline", e.cssStyle, { color: e.color, heavy: e.heavy, scale: n });
}
function Rt(t, e, n) {
  let o = e.color ? `#${e.color}` : "currentColor";
  ((t.borderBottomWidth = `${(e.heavy ? 2 : 1) * n}px`),
    (t.borderBottomStyle = e.cssStyle === "wavy" ? "solid" : e.cssStyle),
    (t.borderBottomColor = o));
}
function q(t, e, n) {
  let o = t.style,
    r = n.scale,
    a = e.verticalAlign === "baseline" ? 1 : 0.75;
  ((o.fontSize = `${e.fontSizePt * a * r}px`),
    e.bold && (o.fontWeight = "bold"),
    e.italic && (o.fontStyle = "italic"));
  let i =
    e.fontFamily && Te.test(e.fontFamily)
      ? e.fontFamily
      : n.defaultFontFamily && Te.test(n.defaultFontFamily)
        ? n.defaultFontFamily
        : null;
  if (i) {
    let l = n.fontAlias?.(i);
    o.fontFamily = l ? `"${l}", "${i}", ${pd}` : `"${i}", ${pd}`;
  }
  e.color && T.test(e.color) && (o.color = `#${e.color}`);
  let s = e.highlight ? mt.get(e.highlight) : void 0;
  (s
    ? ((o.backgroundColor = s), (t.dataset.highlight = e.highlight ?? ""))
    : e.shading && T.test(e.shading) && (o.backgroundColor = `#${e.shading}`),
    e.caps && (o.textTransform = "uppercase"),
    e.smallCaps && (o.fontVariant = "small-caps"));
  let d = bb(e);
  (d !== 0 && ((o.position = "relative"), (o.top = `${-d * r}px`)),
    e.characterSpacingPt !== 0 &&
      (o.letterSpacing = `${e.characterSpacingPt * r}px`),
    e.horizontalScalePercent !== 100 &&
      ((o.transformOrigin = "left"),
      (o.transform = `scaleX(${e.horizontalScalePercent / 100})`)));
}
function Ge(t, e, n, o, r) {
  let a = n === "	" ? null : _e(o),
    i = bt(o),
    s = e;
  if (a && i !== "none") {
    let d = t.createElement("span");
    ((d.dataset.docxDeco = "underline"), Ce(d.style, a, r));
    let l = t.createElement("span");
    ((l.dataset.docxDeco = "strike"),
      Me(l.style, i, r),
      d.append(l),
      e.append(d),
      (s = l));
  } else a ? Ce(e.style, a, r) : i !== "none" && Me(e.style, i, r);
  s.textContent = n;
}
function $(t, e, n, o) {
  let r = t.createElement(e);
  return (
    (r.style.position = "absolute"),
    (r.style.left = `${n.x * o}px`),
    (r.style.top = `${n.y * o}px`),
    (r.style.width = `${n.width * o}px`),
    (r.style.height = `${n.height * o}px`),
    r
  );
}
function St(t, e, n) {
  let o = e.fieldAtom;
  !o ||
    ((t.dataset.fieldAtom = o.formField ? "form" : "field"),
    !(o.formField
      ? n.shadeFormFields !== false
      : (n.fieldShading ?? Z) !== "never")) ||
    (t.classList.add("docx-field-atom"),
    (o.formField || (n.fieldShading ?? Z) === "always") &&
      t.classList.add("docx-field-atom--shaded"));
}
function wt(t, e, n) {
  let o = jb(e.props),
    r = n.revisionStyles,
    a = ue(e.revisions, r?.authorSlots, r?.styles);
  if (!(!a && !o)) {
    if (a) {
      let { attribution: i } = a;
      (t.classList.add("docx-revision", `docx-revision-${i.kind}`),
        (t.dataset.revisionKind = i.kind),
        (t.dataset.revisionId = i.id),
        i.author !== "" && (t.dataset.reviewAuthor = i.author),
        i.date !== void 0 && (t.dataset.revisionDate = i.date));
      let s = r?.styles.get(i.author);
      if (r) {
        t.dataset.reviewAuthorSlot = String(
          (r.authorSlots.get(i.author) ?? 0) % L,
        );
        let c = r.classTokens.get(i.author);
        if (c) for (let u = 0; u < c.length; u += 1) t.classList.add(c[u]);
      }
      let l =
        r !== void 0 && (s?.color !== void 0 || r.others === "author")
          ? a.authorColor
          : a.color;
      ((t.style.color = l),
        (t.style.backgroundColor =
          s?.background ??
          (a.deleted
            ? "var(--doc-revision-deletion-wash)"
            : "var(--doc-revision-insertion-wash)")),
        a.line &&
          ((t.style.textDecorationLine = a.line),
          (t.style.textDecorationStyle = a.decorationStyle),
          (t.style.textDecorationColor = l)));
      return;
    }
    if (
      (t.classList.add("docx-revision", "docx-revision-format"),
      (t.dataset.revisionKind = "format"),
      (t.dataset.revisionId = o.id),
      o.author !== "" && (t.dataset.reviewAuthor = o.author),
      o.date !== void 0 && (t.dataset.revisionDate = o.date),
      r)
    ) {
      let i = r.styles.get(o.author);
      t.dataset.reviewAuthorSlot = String(
        (r.authorSlots.get(o.author) ?? 0) % L,
      );
      let s = r.classTokens.get(o.author);
      if (s) for (let d = 0; d < s.length; d += 1) t.classList.add(s[d]);
      (i?.color !== void 0 && (t.style.color = i.color),
        i?.background !== void 0 && (t.style.backgroundColor = i.background));
    }
  }
}
function At(t, e, n, o) {
  let r = gb(e),
    a = t.createElement("span");
  ((a.className = `docx-revision-pmark docx-revision-pmark-${r.kind}`),
    a.setAttribute("aria-hidden", "true"),
    (a.contentEditable = "false"),
    (a.dataset.revisionKind = r.kind),
    (a.dataset.revisionId = r.id),
    r.author !== "" && (a.dataset.reviewAuthor = r.author),
    (a.dataset.revisionIds = e.map((l) => l.id).join(" ")),
    (a.dataset.revisionKinds = e.map((l) => l.kind).join(" ")),
    (a.textContent = "\xB6"),
    (a.style.position = "absolute"),
    (a.style.pointerEvents = "none"),
    (a.style.marginLeft = `${2 * n}px`));
  let i = hb(r),
    s = o?.styles.get(r.author),
    d = o ? (o.authorSlots.get(r.author) ?? 0) % L : 0;
  if (o) {
    a.dataset.reviewAuthorSlot = String(d);
    let l = o.classTokens.get(r.author);
    if (l) for (let c = 0; c < l.length; c += 1) a.classList.add(l[c]);
  }
  return (
    (a.style.color =
      s?.color ??
      (o?.others === "author"
        ? U(d)
        : i
          ? "var(--doc-revision-deletion)"
          : "var(--doc-revision-insertion)")),
    i && (a.style.textDecorationLine = "line-through"),
    a
  );
}
function kt(t, e, n) {
  let o = [],
    r = e.lines[e.lines.length - 1];
  for (let i of e.lines) {
    let s = [
      ...i.spans.flatMap((y) => y.revisions ?? []),
      ...(i === r ? (e.markRevisions ?? []) : []),
    ];
    if (s.length === 0) continue;
    let d = s.some((y) => y.kind === "delete" || y.kind === "moveFrom"),
      l = i.box.y - e.box.y,
      c = l + i.box.height,
      u = o[o.length - 1];
    if (u && u.deleted === d && l <= u.bottom + 0.5) {
      u.bottom = Math.max(u.bottom, c);
      continue;
    }
    o.push({ top: l, bottom: c, deleted: d });
  }
  if (o.length === 0) return null;
  let a = t.createElement("div");
  ((a.className = "docx-change-bars"),
    a.setAttribute("aria-hidden", "true"),
    (a.style.position = "absolute"),
    (a.style.inset = "0"),
    (a.style.pointerEvents = "none"));
  for (let i of o) {
    let s = t.createElement("div");
    ((s.className = `docx-change-bar docx-change-bar-${i.deleted ? "deletion" : "insertion"}`),
      (s.style.position = "absolute"),
      (s.style.top = `${i.top * n}px`),
      (s.style.height = `${(i.bottom - i.top) * n}px`),
      (s.style.left = `${(-e.box.x - $t) * n}px`),
      (s.style.width = `${Et * n}px`),
      (s.style.pointerEvents = "none"),
      (s.style.backgroundColor = i.deleted
        ? "var(--doc-revision-deletion)"
        : "var(--doc-revision-insertion)"),
      a.append(s));
  }
  return a;
}
var $t = 7.5,
  Et = 1.5;
function Pt(t, e, n, o, r) {
  let a = t.createElement("span");
  if (
    ((a.className = "layout-run layout-run-text"),
    (a.style.display = "inline-block"),
    (a.style.verticalAlign = "baseline"),
    (a.style.boxSizing = "border-box"),
    (a.style.height = `${o * n.scale}px`),
    (a.style.paddingTop = `${r * n.scale}px`),
    (a.style.lineHeight = `${(o - r) * n.scale}px`),
    e.range.end > e.range.start
      ? ((a.dataset.paragraphId = e.range.paragraphId),
        (a.dataset.start = String(e.range.start)),
        (a.dataset.end = String(e.range.end)))
      : (a.setAttribute("aria-hidden", "true"), (a.contentEditable = "false")),
    q(a, e.style, n),
    St(a, e, n),
    wt(a, e, n),
    (e.style.horizontalScalePercent !== 100 || e.text === "	") &&
      (a.style.width = `${e.box.width * n.scale}px`),
    e.text === "	")
  ) {
    ((a.style.overflow = "hidden"), (a.style.verticalAlign = "top"));
    let i = _e(e.style);
    i && ((a.dataset.docxTabUnderline = ""), Rt(a.style, i, n.scale));
  }
  return (
    Ge(t, a, e.text, e.style, n.scale),
    e.projected &&
      ((a.dataset.docxField = ""),
      a.setAttribute("contenteditable", "false"),
      e.noteNav
        ? ((a.style.userSelect = "none"),
          e.noteNav.direction === "to-note"
            ? ((a.dataset.docxNoteRef = ""),
              (a.dataset.docxNoteScope = e.noteNav.scopeId),
              e.text.length > 0 && a.setAttribute("aria-description", e.text))
            : ((a.dataset.docxNoteMarkBack = ""),
              (a.dataset.docxNoteScope = e.noteNav.scopeId)))
        : ((a.style.pointerEvents = "none"), (a.style.userSelect = "none"))),
    a
  );
}
function Fe(t, e, n) {
  let o = t.createElement("a");
  return (
    (o.className = "docx-hyperlink"),
    (o.dataset.docxLink = e.id),
    (o.dataset.docxLinkKind = e.kind),
    o.setAttribute("tabindex", "-1"),
    !n.inertLinks &&
      e.href &&
      (o.setAttribute("href", e.href),
      e.kind === "external" && o.setAttribute("rel", "noopener noreferrer")),
    e.tooltip && o.setAttribute("title", e.tooltip),
    (o.style.display = "inline-block"),
    (o.style.verticalAlign = "baseline"),
    (o.style.textDecoration = "none"),
    (o.style.color = "inherit"),
    o
  );
}
function Dt(t, e, n) {
  let o = n.scale,
    r = t.createElement("div");
  ((r.className = "docx-line layout-line"),
    (r.dataset.lineId = e.id),
    (r.dataset.paragraphId = e.range.paragraphId),
    (r.style.position = "absolute"),
    (r.style.top = `${e.box.y * o}px`),
    (r.style.left = `${e.contentX * o}px`),
    (r.style.height = `${e.box.height * o}px`),
    (r.style.fontSize = "0"),
    (r.style.whiteSpace = "pre"),
    (r.style.overflow = "visible"));
  let a = e.leading ?? 0,
    i = Math.min(
      Math.max(
        a,
        ...e.spans.map((g) => g.box.height + a),
        e.spans.length === 0 ? e.box.height - (e.trailingSpacing ?? 0) : 0,
      ),
      e.box.height,
    ),
    s = Math.max(0, e.box.height - i);
  ((r.style.boxSizing = "border-box"),
    (r.style.paddingBottom = `${s * o}px`),
    (r.style.lineHeight = `${(e.box.height - s) * o}px`));
  let d = null,
    l = null,
    c = null,
    u = new Map();
  for (let [g, x] of gc(e).entries()) u.set(x.paragraphId, g);
  let y = (g) => u.get(g) ?? 0,
    h = [...(e.drawings ?? [])].sort(
      (g, x) => y(g.paragraphId) - y(x.paragraphId) || g.start - x.start,
    ),
    f = 0,
    m = (g, x) => {
      for (
        ;
        f < h.length &&
        (y(h[f].paragraphId) < y(g) ||
          (y(h[f].paragraphId) === y(g) && h[f].start < x));
      ) {
        let p = h[f],
          v = Math.max(0, p.advanceEnd - p.advanceStart),
          R = t.createElement("span");
        ((R.className = "docx-inline-drawing-advance"),
          (R.dataset.docxMarker = ""),
          R.setAttribute("contenteditable", "false"),
          R.setAttribute("aria-hidden", "true"),
          (R.style.display = "inline-block"),
          (R.style.width = `${v * o}px`),
          (R.style.height = `${p.baselineOffset * o}px`),
          (R.style.lineHeight = "0"),
          (R.style.pointerEvents = "none"),
          (R.style.verticalAlign = "baseline"),
          r.append(R),
          (f += 1),
          (d = null),
          (l = null));
      }
    },
    k = (g) => {
      let x = g.wrapAdvanceBefore ?? 0;
      if (x <= 0.001) return;
      let p = t.createElement("span");
      ((p.className = "docx-wrap-advance"),
        (p.dataset.docxMarker = ""),
        p.setAttribute("contenteditable", "false"),
        p.setAttribute("aria-hidden", "true"),
        (p.style.display = "inline-block"),
        (p.style.width = `${x * o}px`),
        (p.style.height = "0"),
        (p.style.lineHeight = "0"),
        (p.style.pointerEvents = "none"),
        (p.style.verticalAlign = "baseline"),
        r.append(p),
        (d = null),
        (l = null));
    },
    S = 0,
    b = false;
  for (let [g, x] of e.spans.entries()) {
    (m(x.range.paragraphId, x.range.start), k(x));
    let p = Math.min(x.box.height + a, e.box.height),
      v = Pt(t, x, n, p, a);
    S > 0 && !b && (v.style.marginLeft = `${S * o}px`);
    let R = e.spans[g + 1],
      P = Lt(e, g + 1, y);
    ((b = P > 0 && R !== void 0 && Tt(x, R)),
      b && (v.style.wordSpacing = `${P * o}px`),
      (S = P));
    let D = x.link;
    if (!D) {
      ((d = null), (l = null), (c = null), r.append(v));
      continue;
    }
    if (x.fieldAtom) {
      ((d !== null && l === D.id && c === x.range.start) ||
        ((d = Fe(t, D, n)), (l = D.id), (c = x.range.start), r.append(d)),
        d.append(v));
      continue;
    }
    ((!d || l !== D.id || c !== null) &&
      ((d = Fe(t, D, n)), (l = D.id), (c = null), r.append(d)),
      d.append(v));
  }
  if (
    (m(
      gc(e)[gc(e).length - 1]?.paragraphId ?? e.range.paragraphId,
      Number.POSITIVE_INFINITY,
    ),
    e.spans.length === 0)
  ) {
    let g = t.createElement("br");
    ((g.style.lineHeight = `${e.box.height * o}px`), r.append(g));
  }
  let A = Object.freeze({
      x: e.contentX,
      y: e.box.y,
      width: e.box.width,
      height: e.box.height,
    }),
    E = Oe(Be(n));
  if (e.drawings && e.drawings.length > 0)
    for (let g of Se(t, e, E.ctx, E.urlRegistry, A)) r.append(g);
  return r;
}
function Lt(t, e, n) {
  if (e <= 0 || e >= t.spans.length) return 0;
  let o = t.spans[e - 1],
    r = t.spans[e],
    a = n(o.range.paragraphId),
    i = n(r.range.paragraphId);
  if (
    t.drawings?.some((l) => {
      let c = n(l.paragraphId),
        u = c > a || (c === a && l.start >= o.range.start),
        y = c < i || (c === i && l.start < r.range.start);
      return u && y;
    })
  )
    return 0;
  let d = r.box.x - (o.box.x + o.box.width) - (r.wrapAdvanceBefore ?? 0);
  return d > 0.25 ? d : 0;
}
var It = /[\t\n\r \u00A0\u1361\u{10100}-\u{10102}\u{1039F}\u{1091F}]/u;
function Tt(t, e) {
  return !t.text.endsWith(" ") ||
    t.style.horizontalScalePercent !== 100 ||
    !Mt(t, e) ||
    (e.wrapAdvanceBefore ?? 0) > 0.001
    ? false
    : !It.test(t.text.slice(0, -1));
}
function Mt(t, e) {
  return !t.link && !e.link
    ? true
    : !t.link ||
        !e.link ||
        t.link.id !== e.link.id ||
        !!t.fieldAtom != !!e.fieldAtom
      ? false
      : !t.fieldAtom || t.range.start === e.range.start;
}
function F(t, e, n) {
  let o = n.scale,
    r = $(t, "div", e.box, o);
  ((r.className = "docx-paragraph-fragment layout-paragraph"),
    (r.dataset.paragraphId = e.paragraphId),
    (r.dataset.fragmentIndex = String(e.fragmentIndex)),
    n.readOnlyParagraphIds?.has(e.paragraphId) &&
      (r.classList.add("docx-generated-region"),
      (r.dataset.docxReadOnly = ""),
      r.setAttribute("contenteditable", "false"),
      r.setAttribute("aria-readonly", "true")),
    n.emptyTocPlaceholderIds?.has(e.paragraphId) &&
      (r.classList.add("docx-toc-empty-placeholder"),
      (r.dataset.docxTocEmpty = "")),
    e.shading && T.test(e.shading) && e.shadingBox && r.append(Nt(t, e, o)),
    e.marker && r.append(Ct(t, e, n)));
  for (let i of e.lines)
    for (let s of i.spans) {
      if (!s.tabLeader) continue;
      let d = Ht(t, e, i, s, n);
      d && r.append(d);
    }
  let a = kt(t, e, o);
  if ((a && r.append(a), e.markRevisions && e.markRevisions.length > 0)) {
    let i = At(t, e.markRevisions, o, n.revisionStyles),
      s = e.lines[e.lines.length - 1];
    if (s) {
      let d = s.spans[s.spans.length - 1];
      ((i.style.top = `${(s.box.y - e.box.y) * o}px`),
        (i.style.left = `${((d ? d.box.x + d.box.width : s.contentX) - e.box.x) * o}px`),
        r.append(i));
    }
  }
  for (let i of e.lines) {
    let s = Dt(t, i, n);
    ((s.style.top = `${(i.box.y - e.box.y) * o}px`),
      (s.style.left = `${(i.contentX - e.box.x) * o}px`),
      r.append(s));
  }
  if (e.borders) for (let i of e.borders) r.append(He(t, e, i, o));
  else
    e.bottomBorder &&
      r.append(
        He(
          t,
          e,
          {
            side: "bottom",
            edge: e.bottomBorder.edge,
            box: e.bottomBorder.box,
          },
          o,
        ),
      );
  return r;
}
function Ct(t, e, n) {
  let o = e.marker,
    r = n.scale,
    a = e.lines[0]?.leading ?? 0,
    i = $(t, "span", o.box, r);
  ((i.className = "docx-list-marker"),
    (i.dataset.docxMarker = ""),
    i.setAttribute("contenteditable", "false"),
    i.setAttribute("aria-hidden", "true"),
    (i.style.left = `${(o.box.x - e.box.x) * r}px`),
    (i.style.top = `${(o.box.y - e.box.y) * r}px`),
    (i.style.display = "block"),
    (i.style.overflow = "visible"),
    (i.style.whiteSpace = "pre"));
  let s = e.lines[0],
    d = s
      ? Math.max(
          a,
          ...s.spans.map((y) => y.box.height + a),
          s.spans.length === 0 ? s.box.height - (s.trailingSpacing ?? 0) : 0,
        )
      : o.box.height,
    l = Math.min(d, o.box.height),
    c = Math.max(0, o.box.height - l);
  ((i.style.fontSize = "0"),
    (i.style.boxSizing = "border-box"),
    (i.style.paddingBottom = `${c * r}px`),
    (i.style.lineHeight = `${l * r}px`));
  let u = t.createElement("span");
  return (
    (u.style.display = "inline-block"),
    (u.style.verticalAlign = "baseline"),
    (u.style.boxSizing = "border-box"),
    (u.style.height = `${l * r}px`),
    (u.style.paddingTop = `${a * r}px`),
    (u.style.lineHeight = `${(l - a) * r}px`),
    q(u, o.style, n),
    Ge(t, u, o.text, o.style, r),
    i.append(u),
    i
  );
}
var Ft = 512;
function Ht(t, e, n, o, r) {
  let a = o.tabLeader ? Da.get(o.tabLeader) : void 0;
  if (!a || o.box.width <= 0) return null;
  let i = r.scale,
    s = t.createElement("div");
  ((s.className = "docx-tab-leader"),
    (s.dataset.docxTabLeader = ""),
    s.setAttribute("contenteditable", "false"),
    s.setAttribute("aria-hidden", "true"),
    (s.style.position = "absolute"),
    (s.style.left = `${(o.box.x - e.box.x) * i}px`),
    (s.style.top = `${(n.box.y - e.box.y) * i}px`),
    (s.style.width = `${o.box.width * i}px`),
    (s.style.height = `${n.box.height * i}px`),
    (s.style.overflow = "hidden"),
    (s.style.whiteSpace = "pre"),
    (s.style.pointerEvents = "none"),
    (s.style.userSelect = "none"));
  let d = n.leading ?? 0,
    l = Math.min(o.box.height + d, n.box.height),
    c = Math.max(0, n.box.height - l);
  ((s.style.fontSize = "0"),
    (s.style.boxSizing = "border-box"),
    (s.style.paddingBottom = `${c * i}px`),
    (s.style.lineHeight = `${(n.box.height - c) * i}px`));
  let u = t.createElement("span");
  ((u.style.display = "inline-block"),
    (u.style.verticalAlign = "baseline"),
    q(u, o.style, r),
    (u.style.boxSizing = "border-box"),
    (u.style.height = `${l * i}px`),
    (u.style.paddingTop = `${d * i}px`),
    (u.style.lineHeight = `${(l - d) * i}px`),
    o.tabLeader === "heavy" && (u.style.fontWeight = "bold"));
  let y =
      o.tabLeaderAdvancePt && o.tabLeaderAdvancePt > 0
        ? o.tabLeaderAdvancePt
        : Math.max(0.5, o.style.fontSizePt * 0.2),
    h = Math.min(Ft, Math.max(1, Math.floor(o.box.width / y) + 2));
  return (
    (u.textContent = a.repeat(h)),
    (u.style.letterSpacing = "0"),
    s.append(u),
    s
  );
}
function Nt(t, e, n) {
  let o = e.shadingBox,
    r = $(t, "div", o, n);
  return (
    (r.className = "docx-paragraph-shading"),
    r.setAttribute("aria-hidden", "true"),
    (r.style.left = `${(o.x - e.box.x) * n}px`),
    (r.style.top = `${(o.y - e.box.y) * n}px`),
    (r.style.backgroundColor = `#${e.shading}`),
    r
  );
}
function He(t, e, n, o) {
  let r = $(t, "div", n.box, o);
  ((r.className = `docx-paragraph-border docx-paragraph-border-${n.side}`),
    r.setAttribute("aria-hidden", "true"));
  let a = (n.box.x - e.box.x) * o,
    i = (n.box.y - e.box.y) * o,
    s = n.side === "left" || n.side === "right" || n.side === "bar",
    d = (s ? n.box.width : n.box.height) * o,
    c = Bt(n.edge.val) ? d : Math.max(1, d);
  ((r.style.left = `${n.side === "right" ? a - (c - d) : a}px`),
    (r.style.top = `${n.side === "bottom" ? i - (c - d) : i}px`),
    s ? (r.style.width = `${c}px`) : (r.style.height = `${c}px`));
  let u = n.edge.color && T.test(n.edge.color) ? n.edge.color : "000000";
  return (
    (r.style.backgroundColor = `#${u}`),
    Ot(r, n.edge.val, u, s, c, o),
    r
  );
}
function Bt(t) {
  return (
    t === "double" ||
    t === "triple" ||
    t === "doubleWave" ||
    t.startsWith("thinThick") ||
    t.startsWith("thickThin")
  );
}
function Ot(t, e, n, o, r, a) {
  switch (e) {
    case "dashed":
    case "dashSmallGap":
    case "dotDash":
    case "dotDotDash":
    case "dashDotStroked": {
      let i = Math.max(4, 4 * a);
      ((t.style.backgroundImage = `linear-gradient(to ${o ? "bottom" : "right"}, #${n} 60%, transparent 60%)`),
        (t.style.backgroundSize = o ? `100% ${i}px` : `${i}px 100%`));
      return;
    }
    case "dotted": {
      let i = Math.max(3, 3 * a);
      ((t.style.backgroundImage = `linear-gradient(to ${o ? "bottom" : "right"}, #${n} 35%, transparent 35%)`),
        (t.style.backgroundSize = o ? `100% ${i}px` : `${i}px 100%`));
      return;
    }
    case "double":
    case "doubleWave":
    case "triple":
    case "thinThickSmallGap":
    case "thickThinSmallGap":
    case "thinThickThinSmallGap":
    case "thinThickMediumGap":
    case "thickThinMediumGap":
    case "thinThickThinMediumGap":
    case "thinThickLargeGap":
    case "thickThinLargeGap":
    case "thinThickThinLargeGap": {
      let i = Math.max(1, r / 3);
      ((t.style.backgroundColor = "transparent"),
        o
          ? ((t.style.borderLeft = `${i}px solid #${n}`),
            (t.style.borderRight = `${i}px solid #${n}`))
          : ((t.style.borderTop = `${i}px solid #${n}`),
            (t.style.borderBottom = `${i}px solid #${n}`)),
        (t.style.boxSizing = "border-box"));
      return;
    }
    case "threeDEmboss":
    case "ridge": {
      t.style.backgroundColor = "transparent";
      let i = o ? "borderLeft" : "borderTop";
      ((t.style[i] = `${Math.max(1, r)}px ridge #${n}`),
        o ? (t.style.width = "0px") : (t.style.height = "0px"));
      return;
    }
    case "threeDEngrave":
    case "groove": {
      t.style.backgroundColor = "transparent";
      let i = o ? "borderLeft" : "borderTop";
      ((t.style[i] = `${Math.max(1, r)}px groove #${n}`),
        o ? (t.style.width = "0px") : (t.style.height = "0px"));
      return;
    }
    case "inset": {
      t.style.backgroundColor = "transparent";
      let i = o ? "borderLeft" : "borderTop";
      ((t.style[i] = `${Math.max(1, r)}px inset #${n}`),
        o ? (t.style.width = "0px") : (t.style.height = "0px"));
      return;
    }
    case "outset": {
      t.style.backgroundColor = "transparent";
      let i = o ? "borderLeft" : "borderTop";
      ((t.style[i] = `${Math.max(1, r)}px outset #${n}`),
        o ? (t.style.width = "0px") : (t.style.height = "0px"));
      return;
    }
    default:
      return;
  }
}
function Ut(t, e, n, o) {
  let r = o.scale,
    a = $(t, "div", e.box, r);
  if (
    ((a.className = "docx-table-cell"),
    (a.style.left = `${(e.box.x - n.x) * r}px`),
    (a.style.top = `${(e.box.y - n.y) * r}px`),
    (a.style.boxSizing = "border-box"),
    (a.style.overflow = "visible"),
    (a.dataset.cellId = e.id),
    (a.dataset.gridColumn = String(e.gridColumn)),
    (a.dataset.gridSpan = String(e.gridSpan)),
    e.rowSpan && e.rowSpan > 1 && (a.dataset.rowSpan = String(e.rowSpan)),
    e.paintInert || e.vMergeContinue)
  )
    return (
      (a.dataset.vMergeContinue = "true"),
      (a.style.border = "none"),
      (a.style.backgroundColor = "transparent"),
      a
    );
  ((a.style.border = "none"),
    Pe(t, a, e.borders, r),
    e.shading &&
      T.test(e.shading) &&
      (a.style.backgroundColor = `#${e.shading}`));
  for (let i of e.blocks) {
    let s = i.kind === "table" ? H(t, i, o) : F(t, i, o);
    ((s.style.left = `${(i.box.x - e.box.x) * r}px`),
      (s.style.top = `${(i.box.y - e.box.y) * r}px`),
      a.append(s));
  }
  return a;
}
function H(t, e, n) {
  let o = n.scale,
    r = $(t, "div", e.box, o);
  ((r.className = "docx-table-fragment layout-table"),
    (r.dataset.tableId = e.tableId),
    (r.dataset.fragmentIndex = String(e.fragmentIndex)),
    (r.style.overflow = "visible"));
  for (let a of e.rows) {
    let i = $(t, "div", a.box, o);
    ((i.className = "docx-table-row"),
      a.revisionKind &&
        (i.classList.add(
          "docx-table-row--revision",
          a.revisionKind === "insert"
            ? "layout-revision-ins"
            : "layout-revision-del",
        ),
        (i.dataset.revisionKind = a.revisionKind),
        a.revisionId !== void 0 && (i.dataset.revisionId = a.revisionId),
        a.revisionAuthor !== void 0 &&
          (i.dataset.reviewAuthor = a.revisionAuthor),
        a.revisionDate !== void 0 && (i.dataset.revisionDate = a.revisionDate)),
      (i.dataset.rowId = a.id),
      a.isHeaderRepeat && (i.dataset.headerRepeat = "true"),
      (i.style.left = `${(a.box.x - e.box.x) * o}px`),
      (i.style.top = `${(a.box.y - e.box.y) * o}px`),
      (i.style.overflow = "visible"));
    for (let s of a.cells) i.append(Ut(t, s, a.box, n));
    r.append(i);
  }
  return r;
}
function zt(t, e, n, o) {
  let r = { ...n, paintInstance: `p${e.index}` },
    a = $(t, "div", e.box, r.scale);
  if (
    ((a.className = "docx-page"),
    (a.style.fontFamily = pd),
    (a.dataset.pageIndex = String(e.index)),
    r.ariaHidden &&
      (a.setAttribute("aria-hidden", "true"),
      a.setAttribute("role", "presentation")),
    (a.dataset.materialized = String(o)),
    !o)
  )
    return a;
  let i = Object.freeze({
      x: e.box.x,
      y: e.box.y,
      width: e.box.width,
      height: e.box.height,
    }),
    s = Object.freeze({
      x: -(e.contentBox.x - e.box.x),
      y: -(e.contentBox.y - e.box.y),
      width: e.box.width,
      height: e.box.height,
    });
  Ie(t, a, e, r, s, "behind");
  for (let l of [e.header, e.footer])
    l?.anchoredDrawings?.length &&
      gt(t, a, l, l.anchoredDrawings, r, {
        x: e.box.x,
        y: e.box.y,
        width: e.box.width,
        height: e.box.height,
      });
  let d = t.createElement("div");
  ((d.className = "docx-page-content"),
    (d.style.position = "absolute"),
    (d.style.left = `${(e.contentBox.x - e.box.x) * r.scale}px`),
    (d.style.top = `${(e.contentBox.y - e.box.y) * r.scale}px`),
    (d.style.width = `${e.contentBox.width * r.scale}px`),
    (d.style.height = `${e.contentBox.height * r.scale}px`),
    r.activeHeaderFooterRId && d.setAttribute("contenteditable", "false"));
  for (let l of e.columnSeparators ?? []) {
    let c = t.createElement("div");
    ((c.className = "docx-column-separator"),
      c.setAttribute("contenteditable", "false"),
      (c.style.position = "absolute"),
      (c.style.left = `${l.x * r.scale}px`),
      (c.style.top = `${l.y * r.scale}px`),
      (c.style.width = `${l.width * r.scale}px`),
      (c.style.height = `${l.height * r.scale}px`),
      (c.style.backgroundColor = "currentColor"),
      (c.style.pointerEvents = "none"),
      d.append(c));
  }
  for (let l of e.fragments)
    d.append(l.kind === "table" ? H(t, l, r) : F(t, l, r));
  (a.append(d), Ie(t, a, e, r, s, "inFront"), he(t, a, e, r, F, H));
  for (let l of ["header", "footer"]) {
    if (e[l]) continue;
    let c = t.createElement("div");
    ((c.className = "docx-hf docx-hf--placeholder"),
      (c.dataset.docxHf = l),
      c.setAttribute("contenteditable", "false"));
    let u =
        l === "header"
          ? e.contentBox.y - e.box.y
          : e.box.y + e.box.height - (e.contentBox.y + e.contentBox.height),
      y = Math.min(u, _t);
    if (y <= 0) continue;
    let h = Math.max(0, Math.min(Kt, u - y)),
      f = l === "header" ? h : e.box.height - h - y;
    ((c.style.position = "absolute"),
      (c.style.left = `${(e.contentBox.x - e.box.x) * r.scale}px`),
      (c.style.top = `${f * r.scale}px`),
      (c.style.width = `${e.contentBox.width * r.scale}px`),
      (c.style.height = `${y * r.scale}px`),
      a.append(c));
  }
  for (let l of [e.header, e.footer]) {
    if (!l) continue;
    let c = l.anchoredDrawings ?? [],
      u =
        !!r.activeHeaderFooterRId &&
        !!l.rId &&
        r.activeHeaderFooterRId === l.rId &&
        (r.activeHeaderFooterPageIndex === void 0 ||
          r.activeHeaderFooterPageIndex === e.index),
      y = t.createElement("div");
    ((y.className = "docx-hf"),
      (y.dataset.docxHf = l.kind),
      l.rId && (y.dataset.docxRId = l.rId),
      u
        ? ((y.dataset.docxHfActive = ""),
          y.setAttribute("contenteditable", "true"))
        : y.setAttribute("contenteditable", "false"),
      (y.style.position = "absolute"),
      (y.style.left = `${(l.box.x - e.box.x) * r.scale}px`),
      (y.style.top = `${(l.box.y - e.box.y) * r.scale}px`),
      (y.style.width = `${l.box.width * r.scale}px`));
    let h = u
      ? l.kind === "footer"
        ? Math.max(l.box.height, e.box.y + e.box.height - l.box.y)
        : Math.max(l.box.height, e.contentBox.y - l.box.y)
      : l.box.height;
    ((y.style.height = `${h * r.scale}px`), (y.style.overflow = "visible"));
    let f = (e.box.x - l.box.x) * r.scale,
      m = (e.box.y - l.box.y) * r.scale,
      k = f + e.box.width * r.scale,
      S = m + e.box.height * r.scale;
    y.style.clipPath = `polygon(${f}px ${m}px, ${k}px ${m}px, ${k}px ${S}px, ${f}px ${S}px)`;
    let b = Object.freeze({
        x: 0,
        y: 0,
        width: l.box.width,
        height: l.box.height,
      }),
      A = c.filter((x) => !Ue(x)),
      E = { ...r, inertLinks: true };
    for (let x of l.fragments)
      y.append(x.kind === "table" ? H(t, x, E) : F(t, x, E));
    (K(t, y, A, Be(r), b, "inFront", u), a.append(y));
    let g = t.createElement("div");
    ((g.className = "docx-hf-edit-hint"),
      (g.dataset.docxHfHint = l.kind),
      g.setAttribute("contenteditable", "false"),
      (g.style.position = "absolute"),
      (g.style.left = y.style.left),
      (g.style.width = y.style.width),
      (g.style.top =
        l.kind === "header"
          ? `${(l.box.y + l.box.height - e.box.y) * r.scale}px`
          : `${(l.box.y - e.box.y) * r.scale}px`),
      l.kind === "footer" && (g.style.transform = "translateY(-100%)"),
      a.append(g),
      ft(t, a, l, c, r, i, "inFront", u));
  }
  return (Wt(t, a, e, r), a);
}
var _t = 30,
  Kt = 36,
  Gt = 16,
  jt = new Set(["dropdown", "comboBox", "date", "checkbox"]);
function Wt(t, e, n, o) {
  let r = o.contentControlChrome,
    a = r?.suppressedIds,
    i = (n.contentControls ?? []).filter((y) => a?.has(y.id) !== true),
    s = [
      ...i,
      ...(r?.additionalBoundaries ?? []).filter(
        (y) => a?.has(y.id) !== true && !i.some((h) => h.id === y.id),
      ),
    ];
  if (s.length === 0) return;
  let d = r?.showAll === true,
    l = r?.activeIds,
    c = r?.hoverIds,
    u = r?.tocControlIds;
  for (let y of s) {
    let h = u?.has(y.id) === true,
      f = !h && l?.has(y.id) === true,
      m = c?.has(y.id) === true;
    e.append(
      Vt(
        t,
        n,
        y,
        o.scale,
        f,
        m,
        d || f || (h && m),
        r?.checkedIds?.has(y.id),
        h,
      ),
    );
  }
}
function Vt(t, e, n, o, r, a, i, s, d) {
  let l = t.createElement("div");
  ((l.className = "docx-content-control-chrome"),
    (l.dataset.docxContentControl = n.id),
    (l.dataset.docxMarker = ""),
    (l.dataset.controlType = n.controlType),
    (l.dataset.lock = n.effectiveLock),
    n.bound && (l.dataset.bound = ""),
    n.placeholder && (l.dataset.placeholder = ""),
    d && (l.dataset.docxToc = ""),
    r && (l.dataset.active = ""),
    a && (l.dataset.hover = ""),
    i && (l.dataset.boundaryVisible = ""),
    l.setAttribute("contenteditable", "false"),
    l.setAttribute("role", "group"),
    n.alias && (l.dataset.alias = n.alias),
    n.tag && (l.dataset.tag = n.tag),
    n.alias && l.setAttribute("aria-label", n.alias),
    (l.style.position = "absolute"),
    (l.style.inset = "0"),
    (l.style.pointerEvents = "none"),
    (l.style.zIndex = "2"));
  let c = e.contentBox.x - e.box.x,
    u = e.contentBox.y - e.box.y;
  for (let h of n.fragments) {
    if (h.pageIndex !== e.index) continue;
    let f = t.createElement("div");
    ((f.className = "docx-content-control-boundary"),
      (f.dataset.docxMarker = ""),
      f.setAttribute("contenteditable", "false"),
      f.setAttribute("aria-hidden", "true"),
      (f.style.position = "absolute"),
      (f.style.left = `${(c + h.box.x) * o}px`),
      (f.style.top = `${(u + h.box.y) * o}px`),
      (f.style.width = `${Math.max(h.box.width, 1) * o}px`),
      (f.style.height = `${Math.max(h.box.height, 1) * o}px`),
      (f.style.pointerEvents = "none"),
      l.append(f));
  }
  let y = n.fragments.find((h) => h.pageIndex === e.index);
  if (y && n.alias) {
    let h = t.createElement("div");
    ((h.className = "docx-content-control-label"),
      (h.dataset.docxMarker = ""),
      h.setAttribute("contenteditable", "false"),
      h.setAttribute("aria-hidden", "true"),
      (h.textContent = n.alias),
      (h.style.position = "absolute"),
      (h.style.left = `${(c + y.box.x) * o}px`),
      (h.style.top = `${Math.max(0, (u + y.box.y) * o - Gt)}px`),
      (h.style.pointerEvents = "none"),
      l.append(h));
  }
  if (y && jt.has(n.controlType)) {
    let h = t.createElement("button");
    ((h.type = "button"),
      (h.className = "docx-content-control-widget"),
      (h.dataset.docxMarker = ""),
      (h.dataset.docxCcWidget = n.controlType),
      (h.dataset.docxCcId = n.id),
      h.setAttribute("contenteditable", "false"),
      h.setAttribute("tabindex", "-1"),
      n.controlType === "checkbox"
        ? h.setAttribute("role", "checkbox")
        : n.controlType === "dropdown" || n.controlType === "comboBox"
          ? h.setAttribute("role", "listbox")
          : n.controlType === "date" && h.setAttribute("role", "button"),
      n.alias && (h.dataset.name = n.alias),
      n.alias && h.setAttribute("aria-label", n.alias),
      n.controlType === "checkbox" &&
        (h.setAttribute("data-checked", s ? "true" : "false"),
        h.setAttribute("aria-checked", s ? "true" : "false")),
      (n.effectiveLock === "contentLocked" ||
        n.effectiveLock === "sdtContentLocked" ||
        n.bound) &&
        ((h.disabled = true),
        (h.dataset.disabledReason = n.bound ? "bound" : "locked"),
        h.setAttribute("aria-disabled", "true")),
      (h.style.position = "absolute"),
      (h.style.left = `${(c + y.box.x + y.box.width) * o - 18}px`),
      (h.style.top = `${(u + y.box.y) * o}px`),
      (h.style.width = "16px"),
      (h.style.height = "16px"),
      (h.style.pointerEvents = "auto"),
      (h.style.padding = "0"),
      (h.style.margin = "0"),
      (h.style.cursor = h.disabled ? "not-allowed" : "pointer"),
      l.append(h));
  }
  return l;
}
var Ne = new WeakMap();
function Xt(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function Yt(t, e, n, o) {
  let r = t.element;
  return (
    !t.materialized &&
    Xt(t.record.box, e.box) &&
    r.style.left === `${e.box.x * n}px` &&
    r.style.top === `${e.box.y * n}px` &&
    r.style.width === `${e.box.width * n}px` &&
    r.style.height === `${e.box.height * n}px` &&
    r.getAttribute("aria-hidden") === (o ? "true" : null)
  );
}
function Zt(t, e, n = {}) {
  let o = n.contentControlChrome,
    r = o
      ? `${o.showAll === true ? "1" : "0"}:${o.activeIds ? [...o.activeIds].sort().join(",") : ""}:${o.checkedIds ? [...o.checkedIds].sort().join(",") : ""}:${o.tocControlIds ? [...o.tocControlIds].sort().join(",") : ""}:${o.suppressedIds ? [...o.suppressedIds].sort().join(",") : ""}`
      : "",
    a = n.drawingStrings ?? V,
    i = n.imageUrlPort !== void 0 ? fe(t, n.imageUrlPort) : null,
    s = o?.additionalBoundaries
      ? o.additionalBoundaries
          .flatMap((p) =>
            p.fragments.map(
              (v) =>
                `${p.id}:${v.pageIndex}:${v.box.x}:${v.box.y}:${v.box.width}:${v.box.height}`,
            ),
          )
          .sort()
          .join(",")
      : "",
    d = n.readOnlyParagraphIds
      ? [...n.readOnlyParagraphIds].sort().join(",")
      : "",
    l = n.emptyTocPlaceholderIds
      ? [...n.emptyTocPlaceholderIds].sort().join(",")
      : "",
    c = o?.tocControlIds ? [...o.tocControlIds].sort().join(",") : "",
    u = ye(n.revisionStyles, e),
    y = {
      scale: n.scale ?? 96 / 72,
      ariaHidden: n.ariaHidden ?? true,
      drawingStrings: a,
      urlRegistry: i,
      ...(n.fontAlias ? { fontAlias: n.fontAlias } : {}),
      ...(n.readOnlyParagraphIds
        ? { readOnlyParagraphIds: n.readOnlyParagraphIds }
        : {}),
      ...(n.emptyTocPlaceholderIds
        ? { emptyTocPlaceholderIds: n.emptyTocPlaceholderIds }
        : {}),
      ...(n.defaultFontFamily
        ? { defaultFontFamily: n.defaultFontFamily }
        : {}),
      ...(n.fieldShading ? { fieldShading: n.fieldShading } : {}),
      ...(n.shadeFormFields !== void 0
        ? { shadeFormFields: n.shadeFormFields }
        : {}),
      ...(u ? { revisionStyles: u } : {}),
      ...(n.imageUrlPort ? { imageUrlPort: n.imageUrlPort } : {}),
      ...(n.activeHeaderFooterRId
        ? { activeHeaderFooterRId: n.activeHeaderFooterRId }
        : {}),
      ...(n.activeHeaderFooterPageIndex !== void 0
        ? { activeHeaderFooterPageIndex: n.activeHeaderFooterPageIndex }
        : {}),
      ...(o ? { contentControlChrome: o } : {}),
    },
    h = t.ownerDocument,
    f = `${y.scale}|${y.ariaHidden}|${y.fontAlias ? ht(y.fontAlias) : ""}|${y.defaultFontFamily ?? ""}|${y.activeHeaderFooterRId ?? ""}|${y.activeHeaderFooterPageIndex ?? ""}|cc:${r}:${s}|toc:${c}|ro:${d}|tocEmpty:${l}|${n.imageUrlPort ? "url" : ""}|${$e(a)}|rev:${ce(u)}`,
    m = Ne.get(t),
    S = m?.parameters === f ? new Map(m.pages.map((p) => [p.record, p])) : null,
    b = m ? new Map(m.pages.map((p) => [p.record.index, p])) : null,
    A = e.pages.map((p) => {
      let v = n.materialize?.has(p.index) ?? true,
        R = S?.get(p);
      if (R && R.materialized === v) return R;
      let P = v ? null : b?.get(p.index);
      return P && Yt(P, p, y.scale, y.ariaHidden)
        ? { record: p, materialized: false, element: P.element }
        : { record: p, materialized: v, element: zt(h, p, y, v) };
    });
  (Ne.set(t, { parameters: f, pages: A }),
    (t.dataset.revision = String(e.revision)),
    i && i.reconcile(Ae(e), ke(e)));
  let E = new Set(A.map((p) => p.element)),
    g = t.firstChild;
  for (; g;) {
    let p = g.nextSibling;
    (E.has(g) || g.remove(), (g = p));
  }
  let x = t.firstChild;
  for (let p of A) {
    if (p.element === x) {
      x = x.nextSibling;
      continue;
    }
    t.insertBefore(p.element, x);
  }
}
function qt(t, e, n, o) {
  let r = t.ownerDocument,
    a = o.scale,
    i = [];
  for (let s of n) {
    let d = e.pages[s.pageIndex];
    if (!d) continue;
    let l = r.createElement("div");
    ((l.className = s.className ?? o.className ?? "docx-cell-selection-rect"),
      (l.style.position = "absolute"));
    let c = o.pageOffsetX?.get(s.pageIndex) ?? 0;
    ((l.style.left = `${(d.contentBox.x + s.x + c) * a}px`),
      (l.style.top = `${(d.contentBox.y + s.y) * a}px`),
      (l.style.width = `${s.width * a}px`),
      (l.style.height = `${s.height * a}px`),
      s.reviewAuthor &&
        ((l.dataset.reviewAuthor = s.reviewAuthor.author),
        (l.dataset.reviewAuthorSlot = String(s.reviewAuthor.slot % L)),
        l.style.setProperty(
          "--doc-review-author-current",
          s.reviewAuthor.color,
        )),
      i.push(l));
  }
  t.replaceChildren(...i);
}
export {
  de as a,
  en as b,
  et as c,
  tn as d,
  sn as e,
  V as f,
  ln as g,
  Z as h,
  Zt as i,
  qt as j,
};
