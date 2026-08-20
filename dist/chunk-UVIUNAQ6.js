var x = "http://schemas.microsoft.com/office/word/2012/wordml";
function b(e) {
  return `${e.kind}-${e.id}`;
}
function P(e) {
  let i = [],
    o = (n) => {
      if (n.kind === "textValue") {
        i.push(n.value);
        return;
      }
      for (let r of n.children) o(r);
    };
  for (let n of e.blocks) o(n);
  return i.join("");
}
function k(e) {
  if (e.initials && e.initials.trim().length > 0) return e.initials.trim();
  let i = e.author.trim().split(/\s+/).filter(Boolean);
  return i.length === 0
    ? "?"
    : i
        .slice(0, 2)
        .map((o) => o[0].toUpperCase())
        .join("");
}
function l(e) {
  return e.kind === "revision" ? e.ranges : e.range ? [e.range] : [];
}
function m(e) {
  return l(e)[0] ?? null;
}
function A(e, i) {
  let o = m(e);
  if (!o) return Number.MAX_SAFE_INTEGER;
  let n = i.get(o.start.paragraphId);
  return n === void 0
    ? Number.MAX_SAFE_INTEGER
    : n * 1e6 + Math.min(o.start.offset, 999999);
}
function u(e, i) {
  let o = i.get(e.start.paragraphId),
    n = i.get(e.end.paragraphId);
  return o === void 0 || n === void 0
    ? Number.MAX_SAFE_INTEGER
    : (n - o) * 1e6 + (e.end.offset - e.start.offset);
}
var y = 0,
  p = 1,
  f = 2;
function c(e, i, o) {
  let n = o.get(i.paragraphId),
    r = o.get(e.start.paragraphId),
    t = o.get(e.end.paragraphId);
  return n === void 0 ||
    r === void 0 ||
    t === void 0 ||
    n < r ||
    n > t ||
    (n === r && i.offset < e.start.offset) ||
    (n === t && i.offset > e.end.offset)
    ? null
    : r === t && e.start.offset === e.end.offset
      ? y
      : n === t && i.offset === e.end.offset
        ? f
        : p;
}
function R(e, i, o) {
  let n = null;
  for (let r of l(e)) {
    let t = c(r, i, o);
    if (t === null) continue;
    let a = u(r, o);
    (n === null || t < n.grip || (t === n.grip && a < n.width)) &&
      (n = { grip: t, width: a });
  }
  return n;
}
var s = { comment: 0, custom: 1, revision: 2 };
function v(e, i, o) {
  let n = [];
  for (let r of e) {
    let t = R(r, i, o);
    t !== null && n.push({ item: r, grip: t.grip, width: t.width });
  }
  return n
    .sort((r, t) =>
      r.grip !== t.grip
        ? r.grip - t.grip
        : r.width !== t.width
          ? r.width - t.width
          : r.item.kind !== t.item.kind
            ? s[r.item.kind] - s[t.item.kind]
            : r.item.kind === "revision" && t.item.kind === "revision"
              ? t.item.nesting - r.item.nesting
              : 0,
    )
    .map((r) => r.item);
}
function C(e, i, o) {
  let r = v(e, i, o).filter((t) => !(t.kind === "comment" && t.resolved))[0];
  return r ? (r.kind === "comment" ? g(e, r) : r) : null;
}
function T(e, i) {
  return g(e, i);
}
function g(e, i) {
  let o = new Map(),
    n = new Map();
  for (let a of e)
    a.kind === "comment"
      ? o.set(a.id, a)
      : a.kind === "revision" && n.set(a.id, a);
  let r = new Set([i.id]),
    t = i;
  for (; t.parentId !== void 0;) {
    let a = o.get(t.parentId);
    if (!a || r.has(a.id)) break;
    (r.add(a.id), (t = a));
  }
  if (t.parentRevisionId !== void 0) {
    let a = n.get(t.parentRevisionId);
    if (a) return a;
  }
  return t;
}
function I(e, i, o) {
  let n = e.lines?.find((r) => {
    let t = r.spans;
    if (!t) return o < r.range.end;
    let a = t.filter((d) => d.range.paragraphId === i);
    return a.length === t.length
      ? o < r.range.end
      : a.length > 0 && o < a[a.length - 1].range.end;
  });
  return n ? n.box.y : e.fragmentY;
}
function M(e, i) {
  let o = new Map();
  for (let n of e.pages)
    for (let r of i(n)) {
      let t = new Set([r.paragraphId]);
      for (let a of r.lines ?? [])
        for (let d of a.spans ?? []) t.add(d.range.paragraphId);
      for (let a of t)
        o.has(a) ||
          o.set(a, {
            pageIndex: n.index,
            contentY: n.contentBox.y,
            fragmentY: r.box.y,
            ...(r.lines ? { lines: r.lines } : {}),
          });
    }
  return o;
}
function N(e, i) {
  let o = m(e);
  if (!o) return null;
  let n = i.get(o.start.paragraphId);
  return n
    ? {
        pageIndex: n.pageIndex,
        y: n.contentY + I(n, o.start.paragraphId, o.start.offset),
      }
    : null;
}
export {
  x as a,
  b,
  P as c,
  k as d,
  l as e,
  m as f,
  A as g,
  v as h,
  C as i,
  T as j,
  I as k,
  M as l,
  N as m,
};
