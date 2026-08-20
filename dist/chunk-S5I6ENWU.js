import { f, c, d, e } from "./chunk-WU7PUTVA.js";
import { y } from "./chunk-ADPYKZES.js";
import {
  E,
  Ie,
  xd as xd$1,
  j,
  g,
  h,
  f as f$1,
  ma as ma$1,
  ed as ed$1,
  vd as vd$1,
  ld as ld$1,
  md as md$1,
  jd as jd$1,
  rd as rd$1,
  sd as sd$1,
  od as od$1,
  td as td$1,
  S,
  ne,
  Xb as Xb$1,
  rb as rb$1,
  hb as hb$1,
  fb as fb$1,
  Ac as Ac$1,
  ta as ta$1,
  zd as zd$1,
  qd as qd$1,
  pd as pd$1,
  nd as nd$1,
  Ad as Ad$1,
  kd as kd$1,
  db as db$1,
  ue as ue$1,
  se,
  xe,
  te as te$1,
  Pb as Pb$1,
  Fa as Fa$1,
  xa as xa$1,
  Lb as Lb$1,
  Kb as Kb$1,
  Ob as Ob$1,
  $a as $a$1,
  eb as eb$1,
  Nb as Nb$1,
  ic as ic$1,
  kc as kc$1,
  _d as _d$1,
  ge as ge$1,
  qe,
  _a,
  Ya as Ya$1,
  ab as ab$1,
  dc as dc$1,
  bc as bc$1,
  n,
  Sd as Sd$1,
  gc as gc$1,
  qc,
  rc as rc$1,
  Wa,
  fc as fc$1,
  hc as hc$1,
  bb as bb$1,
  Va as Va$1,
  oc as oc$1,
  pc as pc$1,
  ra as ra$1,
  Yb as Yb$1,
  _b as _b$1,
  nc as nc$1,
  gb as gb$1,
} from "./chunk-HLS3DWRK.js";
var Yt = (e) => {
    if (!Number.isSafeInteger(e))
      throw new RangeError("Fixed-point value must be a safe integer");
    return e;
  },
  Xa = (e, t) => {
    if (e.trim().length === 0 || /[\u0000-\u001f\u007f]/.test(e))
      throw new TypeError(
        `${t} must be non-blank and contain no control characters`,
      );
  },
  hy = (e, t) => {
    if (!/^[\x20-\x7e]{4}$/.test(e))
      throw new TypeError(`${t} must be a four-byte ASCII tag`);
  },
  Uu = (e, t, n) => {
    let r = Object.entries(e).sort(([a], [i]) => (a < i ? -1 : a > i ? 1 : 0)),
      o = Object.create(null);
    for (let [a, i] of r) {
      if (
        (hy(a, `${t} key`),
        !Number.isFinite(i) || (n && (!Number.isSafeInteger(i) || i < 0)))
      )
        throw new RangeError(
          `${t} value must be ${n ? "a non-negative safe integer" : "finite"}`,
        );
      if (n && i > 4294967295)
        throw new RangeError(`${t} value must fit an unsigned 32-bit integer`);
      o[a] = i;
    }
    return Object.freeze(o);
  },
  us = (e) =>
    Object.freeze({ family: e.family, weight: e.weight, style: e.style }),
  yy = (e) =>
    e
      ? Object.freeze({ requested: us(e.requested), resolved: us(e.resolved) })
      : void 0,
  Zu = new WeakSet(),
  ps = (e) => {
    if ((h(e), !Zu.has(e))) {
      if (e.identity !== `${e.hash}#${e.faceIndex}`)
        throw new TypeError(
          "Resolved font identity does not match hash and face index",
        );
      if (!Number.isSafeInteger(e.byteLength) || e.byteLength < 0)
        throw new TypeError("Resolved font byte length is invalid");
      Zu.add(e);
    }
  },
  fs = (e) => (ps(e), e),
  Va = (e) => (
    ps(e),
    Object.freeze({
      identity: e.identity,
      id: e.id,
      family: e.family,
      request: us(e.request),
      hash: e.hash,
      faceIndex: e.faceIndex,
      byteLength: e.byteLength,
      substitution: yy(e.substitution) ?? null,
    })
  ),
  nr = (e) => {
    if (
      (Xa(e.shapingLibrary.name, "shaping library name"),
      Xa(e.shapingLibrary.version, "shaping library version"),
      Xa(e.unicodeDataVersion, "Unicode data version"),
      !/^\d+(?:\.\d+){0,3}(?:[-+][0-9A-Za-z.-]+)?$/.test(
        e.shapingLibrary.version,
      ))
    )
      throw new TypeError("shaping library version must be a numeric version");
    if (!/^\d+(?:\.\d+){1,2}$/.test(e.unicodeDataVersion))
      throw new TypeError(
        "Unicode data version must be a dotted numeric version",
      );
    if (!/^[A-Z][a-z]{3}$/.test(e.script))
      throw new TypeError("script must be a four-letter ISO 15924 code");
    if (
      (Xa(e.language, "language"),
      !/^(?:und|[A-Za-z]{2,8})(?:-[A-Za-z0-9]{1,8})*$/.test(e.language))
    )
      throw new TypeError("language must be a BCP 47 language tag");
    if (e.direction !== "ltr" && e.direction !== "rtl")
      throw new TypeError("direction must be ltr or rtl");
    if (!["none", "NFC", "NFD", "NFKC", "NFKD"].includes(e.normalization))
      throw new TypeError("invalid normalization policy");
    if (
      !["halfAwayFromZero", "halfToEven", "towardZero"].includes(e.roundingMode)
    )
      throw new TypeError("invalid fixed-point rounding mode");
    if (!Number.isSafeInteger(e.fixedPointScale) || e.fixedPointScale <= 0)
      throw new RangeError("fixed-point scale must be a positive safe integer");
    let t = fs(e.font),
      n = e.fallbackOrder.map(fs),
      r = new Set();
    for (let o of n) {
      let a = JSON.stringify(Va(o));
      if (r.has(a))
        throw new TypeError("fallback order contains a duplicate font");
      r.add(a);
    }
    return Object.freeze({
      font: t,
      variationAxes: Uu(e.variationAxes, "variation axis", false),
      shapingLibrary: Object.freeze({
        name: e.shapingLibrary.name,
        version: e.shapingLibrary.version,
      }),
      unicodeDataVersion: e.unicodeDataVersion,
      normalization: e.normalization,
      script: e.script,
      language: e.language,
      direction: e.direction,
      features: Uu(e.features, "OpenType feature", true),
      fallbackOrder: Object.freeze([...n]),
      fixedPointScale: e.fixedPointScale,
      roundingMode: e.roundingMode,
    });
  },
  Ju = (e) => {
    let t = nr(e);
    return Object.freeze({
      font: Va(t.font),
      variationAxes: Object.freeze(
        Object.entries(t.variationAxes).map((n) => Object.freeze(n)),
      ),
      shapingLibrary: Object.freeze({
        name: t.shapingLibrary.name,
        version: t.shapingLibrary.version,
      }),
      unicodeDataVersion: t.unicodeDataVersion,
      normalization: t.normalization,
      script: t.script,
      language: t.language,
      direction: t.direction,
      features: Object.freeze(
        Object.entries(t.features).map((n) => Object.freeze(n)),
      ),
      fallbackOrder: Object.freeze(t.fallbackOrder.map(Va)),
      fixedPointScale: t.fixedPointScale,
      roundingMode: t.roundingMode,
    });
  },
  ms = (e) => JSON.stringify(Ju(e)),
  tr = (e, t) => {
    if (!Number.isSafeInteger(e) || e < 0)
      throw new RangeError(`${t} must be a non-negative safe integer`);
  },
  Nt = (e) => {
    try {
      return Yt(e);
    } catch {
      throw new RangeError(
        "Shaped run contains a non-integer fixed-point value",
      );
    }
  },
  qu = new WeakMap(),
  $a = (e) => {
    let t = qu.get(e);
    if (t) return t;
    ps(e);
    let n = JSON.stringify({
      identity: e.identity,
      id: e.id,
      family: e.family,
      request: e.request,
      hash: e.hash,
      faceIndex: e.faceIndex,
      byteLength: e.byteLength,
      substitution: e.substitution ?? null,
    });
    return (qu.set(e, n), n);
  },
  Ya = (e, t) => {
    let n = nr(t);
    if (e.direction !== "ltr" && e.direction !== "rtl")
      throw new TypeError("Shaped run direction must be ltr or rtl");
    if (e.direction !== n.direction)
      throw new TypeError(
        "Shaped run direction does not match shaping environment",
      );
    if (
      (tr(e.bidiLevel, "bidi level"),
      ((e.bidiLevel & 1) === 1) != (e.direction === "rtl"))
    )
      throw new TypeError(
        "Shaped run direction does not match bidi level parity",
      );
    let r = new Map(),
      o = e.glyphs.map((s) => {
        (tr(s.id, "glyph id"), tr(s.cluster, "glyph cluster"));
        let c = r.get(s.outline);
        if (!c) {
          if (
            !Number.isSafeInteger(s.outline.unitsPerEm) ||
            s.outline.unitsPerEm <= 0
          )
            throw new RangeError(
              "Glyph outline units per em must be a positive safe integer",
            );
          ((c = Object.isFrozen(s.outline)
            ? s.outline
            : Object.freeze({
                path: s.outline.path,
                unitsPerEm: s.outline.unitsPerEm,
              })),
            r.set(s.outline, c));
        }
        return Object.freeze({
          id: s.id,
          cluster: s.cluster,
          originX: Nt(s.originX),
          originY: Nt(s.originY),
          advanceX: Nt(s.advanceX),
          advanceY: Nt(s.advanceY),
          offsetX: Nt(s.offsetX),
          offsetY: Nt(s.offsetY),
          outline: c,
        });
      }),
      a = e.fontSpans.map((s) => {
        if (
          (tr(s.glyphStart, "font span start"),
          tr(s.glyphEnd, "font span end"),
          s.glyphEnd <= s.glyphStart || s.glyphEnd > o.length)
        )
          throw new RangeError("Font span glyph range is invalid");
        s.fallbackIndex !== null && tr(s.fallbackIndex, "fallback index");
        let c = fs(s.font);
        if (s.fallbackIndex === null) {
          if ($a(c) !== $a(n.font))
            throw new TypeError(
              "Shaped primary font does not match shaping environment",
            );
        } else {
          let d = n.fallbackOrder[s.fallbackIndex];
          if (!d)
            throw new RangeError(
              "Shaped fallback index is outside fallback order",
            );
          if ($a(c) !== $a(d))
            throw new TypeError(
              "Shaped fallback font does not match shaping environment provenance",
            );
        }
        return Object.freeze({ ...s, font: c });
      });
    for (let s = 0; s < a.length; s += 1) {
      let c = s === 0 ? 0 : a[s - 1].glyphEnd;
      if (a[s].glyphStart !== c)
        throw new RangeError("Font spans must cover glyphs contiguously");
    }
    if (
      (o.length === 0 && a.length !== 0) ||
      (o.length > 0 && a.at(-1)?.glyphEnd !== o.length)
    )
      throw new RangeError("Font spans must cover every glyph exactly once");
    let i = e.clusters.map((s) => {
        for (let [d, u] of [
          ["cluster text start", s.textStart],
          ["cluster text end", s.textEnd],
          ["cluster glyph start", s.glyphStart],
          ["cluster glyph end", s.glyphEnd],
          ["cluster font span", s.fontSpan],
        ])
          tr(u, d);
        if (
          s.textEnd <= s.textStart ||
          s.textEnd > e.text.length ||
          s.glyphEnd <= s.glyphStart ||
          s.glyphEnd > o.length
        )
          throw new RangeError("Shaped cluster range is invalid");
        let c = a[s.fontSpan];
        if (!c || s.glyphStart < c.glyphStart || s.glyphEnd > c.glyphEnd)
          throw new RangeError(
            "Shaped cluster does not belong to its declared font span",
          );
        return Object.freeze({
          ...s,
          advance: Nt(s.advance),
          caretEdges: Object.freeze(s.caretEdges.map(Nt)),
        });
      }),
      l = Object.freeze({
        ascent: Nt(e.metrics.ascent),
        descent: Nt(e.metrics.descent),
        lineGap: Nt(e.metrics.lineGap),
      });
    return Object.freeze({
      text: e.text,
      direction: e.direction,
      bidiLevel: e.bidiLevel,
      glyphs: Object.freeze(o),
      clusters: Object.freeze(i),
      fontSpans: Object.freeze(a),
      metrics: l,
    });
  },
  by = (e, t) => {
    let n = Ya(e, t);
    return Object.freeze({
      text: n.text,
      direction: n.direction,
      script: t.script,
      language: t.language,
      bidiLevel: n.bidiLevel,
      glyphs: n.glyphs,
      clusters: n.clusters,
      fontSpans: Object.freeze(
        n.fontSpans.map((r) =>
          Object.freeze({
            glyphStart: r.glyphStart,
            glyphEnd: r.glyphEnd,
            fallbackIndex: r.fallbackIndex,
            font: Va(r.font),
          }),
        ),
      ),
      metrics: n.metrics,
    });
  };
var Mo = Object.freeze({ name: "HarfBuzz", version: "14.3.0" }),
  Eo = null,
  Lo = null;
function xy() {
  return Eo
    ? Promise.resolve()
    : Lo ||
        ((Lo = import("./dist-YFULGVS3.js")
          .then((e) => {
            let t = e.versionString();
            if (t !== Mo.version)
              throw new Ne("shapingLibraryMismatch", {
                diagnostic: f(Mo.version, t),
              });
            Eo = e;
          })
          .catch((e$1) => {
            throw (
              (Lo = null),
              e$1 instanceof Ne
                ? e$1
                : c(e$1)
                  ? new Ne("unsupportedRuntime", {
                      diagnostic: d(e$1),
                      cause: e$1,
                    })
                  : new Ne("wasmUnavailable", {
                      diagnostic: e(e$1),
                      cause: e$1,
                    })
            );
          })),
        Lo);
}
function Sy() {
  return Eo !== null;
}
function wy() {
  if (!Eo)
    throw new Ne("notInitialized", {
      diagnostic: "Call initializeHarfBuzz() before creating a text shaper",
    });
  return Eo;
}
var Ne = class extends Error {
    name = "HarfBuzzShapingError";
    code;
    limit;
    actual;
    diagnostic;
    constructor(t, n = {}) {
      (super(`HarfBuzz shaping failed (${t})`, { cause: n.cause }),
        (this.code = t),
        (this.limit = n.limit),
        (this.actual = n.actual),
        (this.diagnostic = n.diagnostic));
    }
  },
  Py = 16 * 1024 * 1024,
  Ry = 1e6,
  Iy = 1e6,
  vy = 1e6,
  Ty = 4,
  Oy = 512,
  ky = 1024 * 1024,
  Cy = 16 * 1024 * 1024,
  By = 32 * 1024 * 1024,
  Ly = 64 * 1024 * 1024,
  Fy = 64 * 1024 * 1024,
  My = 1e6,
  Ey = 1e6,
  Ny = 1e6,
  Ay = 64,
  Dy = 4096,
  _y = 4 * 1024 * 1024,
  Hy = 64 * 1024 * 1024,
  zy = 64 * 1024 * 1024,
  jy = 256 * 1024 * 1024,
  Gy = new Set(["COLR", "CPAL", "CBDT", "CBLC", "sbix", "SVG "]),
  Qu = ["cmap", "head", "hhea", "hmtx", "maxp"],
  Wy = (e, t) => (e[t] << 8) | e[t + 1],
  Xy = (e, t) =>
    (e[t] * 16777216 + (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3]) >>> 0,
  $y = (e, t) =>
    String.fromCharCode(e[0], e[1], e[2], e[3]) === "ttcf"
      ? Xy(e, 12 + t * 4)
      : 0,
  Vy = (e, t) => {
    let n = $y(e, t),
      r = Wy(e, n + 4),
      o = new Set();
    for (let a = 0; a < r; a += 1) {
      let i = n + 12 + a * 16;
      o.add(String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3]));
    }
    return o;
  },
  Yy = (e) => e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength),
  Ky = (e, t) => {
    let n = j(e, t);
    if (!n.valid) return n;
    let r = Vy(e, t);
    for (let o of Qu)
      if (!r.has(o))
        return { valid: false, diagnostic: `missing required ${o} table` };
    return { valid: true };
  },
  Uy = Ky,
  Kt = (e, t, n) => {
    if (!Number.isSafeInteger(e) || e <= 0 || e > n)
      throw new RangeError(
        `${t} must be a positive safe integer no greater than ${n}`,
      );
    return e;
  },
  Zy = (e, t, n) => {
    let r = e < 0n,
      o = r ? -e : e,
      a = o / t,
      i = o % t;
    if (n !== "towardZero") {
      let c = i * 2n;
      (c > t ||
        (c === t &&
          (n === "halfAwayFromZero" ||
            (n === "halfToEven" && a % 2n !== 0n)))) &&
        (a += 1n);
    }
    let l = r ? -a : a,
      s = Number(l);
    if (!Number.isSafeInteger(s))
      throw new RangeError(
        "Shaped fixed-point value exceeds the safe integer range",
      );
    return s;
  },
  ef = (e, t, n, r) => {
    if (!Number.isSafeInteger(e))
      throw new RangeError("font units must be a safe integer");
    if (!Number.isSafeInteger(t) || t <= 0)
      throw new RangeError(
        "fixed-point denominator must be a positive safe integer",
      );
    if (!Number.isSafeInteger(n) || n < 0)
      throw new RangeError(
        "fixed-point numerator must be a non-negative safe integer",
      );
    return Yt(Zy(BigInt(e) * BigInt(n), BigInt(t), r));
  },
  qy = (e, t, n, r) => {
    if (!Number.isSafeInteger(t) || t <= 0)
      throw new RangeError(
        "font size must be a positive integer number of half points",
      );
    if (t > Math.floor(Number.MAX_SAFE_INTEGER / n))
      throw new RangeError(
        "font size and fixed-point scale product exceeds the safe integer range",
      );
    let o = t * n,
      a = e * 2;
    return (i) => ef(i, a, o, r);
  },
  Jy = (e, t) => {
    if (t.length === 0) return [];
    let n = [...new Set(t.map((i) => i.cluster))].sort((i, l) => i - l),
      r = new Map();
    for (let i = 0; i < n.length; i += 1) r.set(n[i], n[i + 1] ?? e.length);
    let o = [],
      a = 0;
    for (; a < t.length;) {
      let i = t[a].cluster,
        l = a + 1;
      for (; l < t.length && t[l].cluster === i;) l += 1;
      let s = t.slice(a, l).reduce((d, u) => d + u.advanceX, 0),
        c = Yt(s);
      (o.push({
        textStart: i,
        textEnd: r.get(i),
        glyphStart: a,
        glyphEnd: l,
        advance: c,
        caretEdges: Object.freeze([Yt(0), c]),
        fontSpan: 0,
      }),
        (a = l));
    }
    return o;
  },
  Ut = 64,
  cn = 8,
  rr = 8,
  Qy = 32,
  tf = Ut + 2 * cn,
  eb = Ut + cn + rr,
  tb = Ut + cn + rr,
  nb = Ut + cn + rr,
  nf = Ut + 8 * cn,
  rf = Ut + 8 * rr + cn,
  rb = Ut + 6 * rr + cn,
  ob = Ut + 3 * rr + 2 * cn,
  ab = Ut + 3 * rr,
  No = (e) => Ut + e.length * Uint16Array.BYTES_PER_ELEMENT,
  hs = (e) => nb + No(e),
  Fo = (e) => Qy + e * cn,
  ib = (e, t) => tf + No(e) + eb + hs(t),
  lb = (e) => nf + No(e) + Fo(e.length) + e.length * rf,
  sb = (e) => {
    let t = new Set(e.glyphs.map((n) => n.outline));
    return (
      nf +
      No(e.text) +
      Fo(e.glyphs.length) +
      e.glyphs.length * rf +
      Fo(e.clusters.length) +
      e.clusters.length * rb +
      e.clusters.reduce((n, r) => n + Fo(r.caretEdges.length), 0) +
      Fo(e.fontSpans.length) +
      e.fontSpans.length * ob +
      ab +
      [...t].reduce((n, r) => n + hs(r.path), 0)
    );
  },
  db = (e, t) => tf + No(e) + tb + t,
  gs = class {
    #t;
    #l;
    #u;
    #f;
    #p;
    #y;
    #b;
    #m;
    #g;
    #s;
    #h;
    #d;
    #e;
    #o = new Map();
    #a = new Map();
    #n = new Map();
    #i = 0;
    #r = 0;
    #c;
    constructor(t, n) {
      ((this.#t = t),
        (this.#l = Kt(n.maxFontBytes ?? Py, "maximum font bytes", Fy)),
        (this.#u = Kt(
          n.maxInputUtf16 ?? Ry,
          "maximum input UTF-16 code units",
          My,
        )),
        (this.#f = Kt(n.maxCodepoints ?? Iy, "maximum input code points", Ey)),
        (this.#p = Kt(n.maxGlyphs ?? vy, "maximum shaped glyphs", Ny)),
        (this.#y = Kt(n.maxCachedFaces ?? Ty, "maximum cached faces", Ay)),
        (this.#b = Kt(
          n.maxCachedShapes ?? Oy,
          "maximum cached shape results",
          Dy,
        )),
        (this.#m = Kt(n.maxOutlineBytes ?? ky, "maximum outline bytes", _y)),
        (this.#g = Kt(
          n.maxCachedOutlineBytes ?? Cy,
          "maximum cached outline bytes",
          Hy,
        )),
        (this.#s = Kt(
          n.maxShapedRunBytes ?? By,
          "maximum shaped run bytes",
          zy,
        )),
        (this.#h = Kt(
          n.maxCachedShapeBytes ?? Ly,
          "maximum cached shape bytes",
          jy,
        )),
        (this.#d = n.instrumentation?.onFaceCacheEvent),
        (this.#e = n.instrumentation),
        (this.#c = new this.#t.Buffer()));
    }
    dispose() {
      (this.#o.clear(),
        this.#a.clear(),
        this.#n.clear(),
        (this.#i = 0),
        (this.#r = 0),
        this.#e?.onOutlineCacheEvent?.(
          Object.freeze({ kind: "cleared", retainedBytes: 0 }),
        ),
        this.#e?.onShapeCacheEvent?.(
          Object.freeze({ kind: "cleared", retainedBytes: 0 }),
        ),
        (this.#c = void 0));
    }
    #S(t, n) {
      let r = this.#o.get(t.identity);
      if (r)
        return (
          this.#o.delete(t.identity),
          this.#o.set(t.identity, r),
          this.#d?.(Object.freeze({ kind: "hit", identity: t.identity })),
          r
        );
      let o = g(t);
      for (let d of Qu)
        if (!o.has(d))
          throw new Ne("malformedFont", {
            diagnostic: `missing required ${d} table`,
          });
      this.#e?.onByteCopy?.();
      let a = new this.#t.Blob(Yy(n)),
        i = new this.#t.Face(a, t.faceIndex),
        l = new this.#t.Font(i),
        s = l.hExtents();
      if (
        !Number.isSafeInteger(i.upem) ||
        i.upem <= 0 ||
        !Number.isSafeInteger(s.ascender) ||
        !Number.isSafeInteger(s.descender) ||
        !Number.isSafeInteger(s.lineGap)
      )
        throw new Ne("malformedFont", {
          diagnostic: "invalid font units or horizontal metrics",
        });
      if ((l.setScale(i.upem, i.upem), this.#o.size >= this.#y)) {
        let d = this.#o.keys().next().value;
        d !== void 0 &&
          (this.#o.delete(d),
          this.#d?.(Object.freeze({ kind: "evicted", identity: d })));
      }
      let c = {
        identity: t.identity,
        blob: a,
        face: i,
        font: l,
        unitsPerEm: i.upem,
      };
      return (
        this.#o.set(t.identity, c),
        this.#d?.(Object.freeze({ kind: "created", identity: t.identity })),
        c
      );
    }
    #w(t, n, r) {
      let o = JSON.stringify([t.identity, t.unitsPerEm, r, n]),
        a = this.#a.get(o);
      if (a)
        return (
          this.#a.delete(o),
          this.#a.set(o, a),
          this.#e?.onOutlineCacheEvent?.(
            Object.freeze({ kind: "hit", retainedBytes: this.#i }),
          ),
          a.outline
        );
      this.#e?.onOutlinePathCall?.();
      let i = t.font.glyphToPath(n),
        l = hs(i);
      if (l > this.#m)
        throw new Ne("outlineOverLimit", { limit: this.#m, actual: l });
      let s = Object.freeze({ path: i, unitsPerEm: t.unitsPerEm }),
        c = ib(o, i);
      if (c > this.#g)
        return (
          this.#e?.onOutlineCacheEvent?.(
            Object.freeze({ kind: "skipped", retainedBytes: this.#i }),
          ),
          s
        );
      for (; this.#i + c > this.#g;) {
        let d = this.#a.keys().next().value;
        if (d === void 0) break;
        let u = this.#a.get(d);
        (this.#a.delete(d),
          (this.#i -= u.bytes),
          this.#e?.onOutlineCacheEvent?.(
            Object.freeze({ kind: "evicted", retainedBytes: this.#i }),
          ));
      }
      return (
        this.#a.set(o, { outline: s, bytes: c }),
        (this.#i += c),
        this.#e?.onOutlineCacheEvent?.(
          Object.freeze({ kind: "created", retainedBytes: this.#i }),
        ),
        s
      );
    }
    #x(t) {
      if (t.length > this.#u)
        throw new Ne("textOverLimit", { limit: this.#u, actual: t.length });
      let n = 0;
      for (let r = 0; r < t.length;) {
        let o = t.codePointAt(r);
        if (((r += o > 65535 ? 2 : 1), (n += 1), n > this.#f))
          throw new Ne("codepointsOverLimit", { limit: this.#f, actual: n });
      }
    }
    shape(t) {
      if (!this.#c) throw new Ne("disposed");
      if ((h(t.environment.font), t.environment.font.byteLength > this.#l))
        throw new Ne("fontOverLimit", {
          limit: this.#l,
          actual: t.environment.font.byteLength,
        });
      this.#x(t.text);
      let n = lb(t.text);
      if (n > this.#s)
        throw new Ne("shapedRunOverLimit", { limit: this.#s, actual: n });
      let r = nr(t.environment),
        o = JSON.stringify([t.text, t.fontSizeHalfPoints, t.bidiLevel, ms(r)]),
        a = this.#n.get(o);
      if (a)
        return (
          this.#n.delete(o),
          this.#n.set(o, a),
          this.#e?.onShapeCacheEvent?.(
            Object.freeze({ kind: "hit", retainedBytes: this.#r }),
          ),
          a.run
        );
      if (
        (this.#e?.onShapeCacheEvent?.(
          Object.freeze({ kind: "miss", retainedBytes: this.#r }),
        ),
        r.shapingLibrary.name !== Mo.name ||
          r.shapingLibrary.version !== Mo.version)
      )
        throw new Ne("shapingLibraryMismatch");
      if (r.normalization !== "none") throw new Ne("unsupportedNormalization");
      if (
        !Number.isSafeInteger(t.bidiLevel) ||
        t.bidiLevel < 0 ||
        ((t.bidiLevel & 1) === 1) != (r.direction === "rtl")
      )
        throw new Ne("invalidBidiLevel");
      if (Object.keys(r.variationAxes).length > 0)
        throw new Ne("unsupportedVariationAxes");
      if (r.fallbackOrder.length > 0) throw new Ne("unsupportedFallback");
      let i = f$1(r.font),
        l = g(r.font);
      if ([...Gy].some((c) => l.has(c))) throw new Ne("unsupportedColorFont");
      let s = t.text;
      this.#x(s);
      try {
        let c = this.#S(r.font, i),
          { face: d, font: u } = c,
          p = this.#c;
        (p.reset(),
          p.addText(s),
          p.setDirection(
            r.direction === "rtl"
              ? this.#t.Direction.RTL
              : this.#t.Direction.LTR,
          ),
          p.setScript(r.script),
          p.setLanguage(r.language),
          p.setClusterLevel(this.#t.ClusterLevel.MONOTONE_CHARACTERS));
        let f = Object.entries(r.features).map(
          ([O, R]) => new this.#t.Feature(O, R),
        );
        (this.#e?.onShapeCall?.(), this.#t.shape(u, p, f));
        let m = p.getGlyphInfosAndPositions();
        if (m.length > this.#p)
          throw new Ne("glyphOverLimit", { limit: this.#p, actual: m.length });
        let g = qy(
            d.upem,
            t.fontSizeHalfPoints,
            r.fixedPointScale,
            r.roundingMode,
          ),
          y = Yt(0),
          b = Yt(0),
          x = new Map(),
          T = JSON.stringify(
            Object.entries(r.variationAxes).sort(([O], [R]) =>
              O.localeCompare(R),
            ),
          ),
          k = m.map((O) => {
            let R = g(O.xAdvance ?? 0),
              h = g(O.yAdvance ?? 0),
              D = {
                id: O.codepoint,
                cluster: O.cluster,
                originX: y,
                originY: b,
                advanceX: R,
                advanceY: h,
                offsetX: g(O.xOffset ?? 0),
                offsetY: g(O.yOffset ?? 0),
                outline:
                  x.get(O.codepoint) ??
                  (() => {
                    let G = this.#w(c, O.codepoint, T);
                    return (x.set(O.codepoint, G), G);
                  })(),
              };
            return ((y = Yt(y + R)), (b = Yt(b + h)), D);
          }),
          M = u.hExtents(),
          E = Ya(
            {
              text: s,
              direction: r.direction,
              bidiLevel: t.bidiLevel,
              glyphs: k,
              clusters: Jy(s, k),
              fontSpans:
                k.length === 0
                  ? []
                  : [
                      {
                        glyphStart: 0,
                        glyphEnd: k.length,
                        font: r.font,
                        fallbackIndex: null,
                      },
                    ],
              metrics: {
                ascent: g(M.ascender),
                descent: g(-M.descender),
                lineGap: g(M.lineGap),
              },
            },
            r,
          ),
          P = sb(E);
        if (P > this.#s)
          throw new Ne("shapedRunOverLimit", { limit: this.#s, actual: P });
        let L = db(o, P);
        if (L > this.#h)
          return (
            this.#e?.onShapeCacheEvent?.(
              Object.freeze({ kind: "skipped", retainedBytes: this.#r }),
            ),
            E
          );
        for (; this.#n.size >= this.#b || this.#r + L > this.#h;) {
          let O = this.#n.keys().next().value;
          if (O === void 0) break;
          let R = this.#n.get(O);
          (this.#n.delete(O),
            (this.#r -= R.bytes),
            this.#e?.onShapeCacheEvent?.(
              Object.freeze({ kind: "evicted", retainedBytes: this.#r }),
            ));
        }
        return (
          this.#n.set(o, { run: E, bytes: L }),
          (this.#r += L),
          this.#e?.onShapeCacheEvent?.(
            Object.freeze({ kind: "stored", retainedBytes: this.#r }),
          ),
          E
        );
      } catch (c) {
        throw c instanceof Ne
          ? c
          : new Ne("malformedFont", {
              diagnostic:
                c instanceof Error ? c.message : "HarfBuzz shaping failed",
            });
      }
    }
  },
  cb = (e = {}) => new gs(wy(), e);
var te = (e, t, n) => e >= t && e <= n,
  Ka = class extends Error {
    name = "UnsupportedScriptError";
    code = "unsupportedScript";
    codePoint;
    constructor(t) {
      (super(`Unsupported Unicode script at U+${t.toString(16).toUpperCase()}`),
        (this.codePoint = t));
    }
  },
  ub = (e) => {
    if (te(e, 65313, 65338) || te(e, 65345, 65370))
      return { slot: "hAnsi", script: "Latn" };
    if (te(e, 1424, 1535) || te(e, 64285, 64335))
      return { slot: "cs", script: "Hebr" };
    if (
      te(e, 1536, 1791) ||
      te(e, 1872, 1919) ||
      te(e, 2160, 2207) ||
      te(e, 2208, 2303) ||
      te(e, 64336, 65023) ||
      te(e, 65136, 65279) ||
      te(e, 126464, 126719)
    )
      return { slot: "cs", script: "Arab" };
    if (
      te(e, 4352, 4607) ||
      te(e, 11904, 12351) ||
      te(e, 12352, 12543) ||
      te(e, 12544, 12687) ||
      te(e, 12784, 12799) ||
      te(e, 13312, 19903) ||
      te(e, 19968, 40959) ||
      te(e, 44032, 55215) ||
      te(e, 63744, 64255) ||
      te(e, 65382, 65437) ||
      te(e, 65440, 65500) ||
      te(e, 131072, 201551)
    )
      return { slot: "eastAsia", script: "Hani" };
    if (te(e, 2304, 2431) || te(e, 43232, 43263))
      return { slot: "cs", script: "Deva" };
    if (te(e, 2432, 2559)) return { slot: "cs", script: "Beng" };
    if (te(e, 880, 1023) || te(e, 7936, 8191))
      return { slot: "hAnsi", script: "Grek" };
    if (
      te(e, 1024, 1327) ||
      te(e, 7296, 7311) ||
      te(e, 11744, 11775) ||
      te(e, 42560, 42655)
    )
      return { slot: "hAnsi", script: "Cyrl" };
    if (te(e, 3584, 3711)) return { slot: "cs", script: "Thai" };
    if (te(e, 6016, 6143) || te(e, 6624, 6655))
      return { slot: "cs", script: "Khmr" };
    if (
      te(e, 768, 879) ||
      te(e, 6832, 6911) ||
      te(e, 7616, 7679) ||
      te(e, 8400, 8447) ||
      te(e, 8192, 8303) ||
      te(e, 65056, 65071) ||
      e <= 47 ||
      te(e, 58, 64) ||
      te(e, 91, 96) ||
      te(e, 123, 191) ||
      e === 5760 ||
      te(e, 8192, 11263) ||
      te(e, 65024, 65039) ||
      te(e, 65280, 65381) ||
      te(e, 65438, 65439) ||
      te(e, 65501, 65535) ||
      te(e, 126976, 129791) ||
      te(e, 917760, 917999)
    )
      return null;
    if (e <= 127) return { slot: "ascii", script: "Latn" };
    if (
      te(e, 192, 687) ||
      te(e, 7424, 7551) ||
      te(e, 7552, 7615) ||
      te(e, 7680, 7935) ||
      te(e, 11360, 11391) ||
      te(e, 42784, 43007) ||
      te(e, 43824, 43887)
    )
      return { slot: "hAnsi", script: "Latn" };
    throw new Ka(e);
  };
function fb(e, t, n) {
  let r = [];
  for (let l = 0; l < e.length;) {
    let s = e.codePointAt(l),
      c = l + (s > 65535 ? 2 : 1);
    (r.push({ from: l, to: c, classified: ub(s) }), (l = c));
  }
  let o = null;
  for (let l of r) l.classified ? (o = l.classified) : o && (l.classified = o);
  o = null;
  for (let l = r.length - 1; l >= 0; l -= 1) {
    let s = r[l];
    s.classified ? (o = s.classified) : o && (s.classified = o);
  }
  let a = [],
    i = r.every(({ from: l }) => e.codePointAt(l) <= 127) ? "ascii" : "hAnsi";
  for (let l of r) {
    let s = n.levels[t + l.from] ?? 0,
      c = (s & 1) === 1 ? "rtl" : "ltr",
      d = l.classified ?? { slot: i, script: "Zyyy" },
      u = a.at(-1);
    u &&
    u.to === l.from &&
    u.bidiLevel === s &&
    u.slot === d.slot &&
    u.script === d.script
      ? (a[a.length - 1] = { ...u, to: l.to })
      : a.push({
          from: l.from,
          to: l.to,
          direction: c,
          bidiLevel: s,
          script: d.script,
          slot: d.slot,
        });
  }
  return a;
}
var pb = "und";
function mb() {
  return typeof Intl.Segmenter == "function";
}
function gb() {
  let e = Intl.Segmenter;
  if (typeof e != "function")
    throw new Error(
      "Intl.Segmenter is required for deterministic grapheme segmentation (locale: und)",
    );
  return e;
}
function hb() {
  let e = new (gb())("und", { granularity: "grapheme" });
  return {
    segment(t) {
      let n = [],
        r = 0;
      for (let o of e.segment(t)) {
        let a = o.index,
          i = a + o.segment.length;
        (n.push({ index: r, text: o.segment, utf16From: a, utf16To: i }),
          (r += 1));
      }
      return n;
    },
  };
}
var xs = hb(),
  Ss = xs,
  of = 0;
function ws() {
  return of;
}
var Nr = null,
  or = null,
  Ua = null,
  Ao = null;
function At(e) {
  if (Nr === e && or) return or;
  if (Ua === e && Ao) {
    let n = Ao;
    return ((Ua = Nr), (Ao = or), (Nr = e), (or = n), n);
  }
  let t = Ss.segment(e);
  return ((Ua = Nr), (Ao = or), (Nr = e), (or = t), t);
}
function yb(e) {
  ((Ss = e), af());
}
function bb() {
  ((Ss = xs), af());
}
function af() {
  ((of += 1),
    (Nr = null),
    (or = null),
    (Ua = null),
    (Ao = null),
    (ys = null),
    (Za = null),
    (bs = 0));
}
function xb(e) {
  return At(e).length;
}
var ys = null,
  Za = null,
  bs = 0;
function Sb(e) {
  if (ys === e && Za) return { offsets: Za, count: bs };
  let t = At(e),
    n = new Int32Array(e.length + 1);
  for (let r of t)
    for (let o = r.utf16From; o < r.utf16To && o < e.length; o += 1)
      n[o] = r.index;
  return (
    (n[e.length] = t.length),
    (ys = e),
    (Za = n),
    (bs = t.length),
    { offsets: n, count: t.length }
  );
}
function qa(e, t) {
  let n = Math.max(0, Math.min(t, e.length)),
    { offsets: r } = Sb(e);
  return r[n];
}
function wb(e, t) {
  let n = At(e);
  if (n.length === 0) return 0;
  let r = Math.max(0, Math.min(t, n.length));
  return r >= n.length ? e.length : n[r].utf16From;
}
function Ps(e) {
  let t = new Set([0, e.text.length]);
  for (let r of At(e.text)) (t.add(r.utf16From), t.add(r.utf16To));
  let n = new Set([0, e.text.length]);
  for (let r of e.clusters) (n.add(r.textStart), n.add(r.textEnd));
  return [...t].filter((r) => n.has(r)).sort((r, o) => r - o);
}
function Ja(e, t) {
  return Ps(e).includes(t);
}
function Pb(e, t) {
  return Ja(e, t);
}
function Rb(e, t, n) {
  return n >= t && Ja(e, t) && Ja(e, n);
}
function Ib(e) {
  let t = At(e.text);
  return Ps(e).map((n) =>
    n === e.text.length ? t.length : t.findIndex((r) => r.utf16From === n),
  );
}
var Is = "und";
function cf() {
  return typeof Intl.Segmenter == "function";
}
function vb() {
  let e = Intl.Segmenter;
  if (typeof e != "function")
    throw new Error(
      `Intl.Segmenter is required for word segmentation (locale: ${Is})`,
    );
  return e;
}
function uf() {
  let e = new (vb())(Is, { granularity: "word" });
  return {
    segment(t) {
      let n = [];
      for (let r of e.segment(t)) {
        let o = r.index,
          a = o + r.segment.length;
        n.push({ utf16From: o, utf16To: a, wordLike: r.isWordLike === true });
      }
      return n;
    },
  };
}
var Tb = /^[\p{L}\p{N}']$/u,
  Ob = /^\s$/u;
function lf(e) {
  return Tb.test(e);
}
function sf(e) {
  return Ob.test(e);
}
function Rs(e, t, n, r) {
  let o = e[t],
    a = e[n - 1];
  return { utf16From: o.utf16From, utf16To: a.utf16To, wordLike: r };
}
function ff(e) {
  let t = At(e);
  if (t.length === 0) return [];
  let n = [],
    r = 0;
  for (; r < t.length;) {
    let o = t[r];
    if (sf(o.text)) {
      let a = r + 1;
      for (; a < t.length && sf(t[a].text);) a += 1;
      (n.push(Rs(t, r, a, false)), (r = a));
      continue;
    }
    if (lf(o.text)) {
      let a = r + 1;
      for (; a < t.length && lf(t[a].text);) a += 1;
      (n.push(Rs(t, r, a, true)), (r = a));
      continue;
    }
    (n.push(Rs(t, r, r + 1, false)), (r += 1));
  }
  return n;
}
function pf() {
  return { segment: ff };
}
function mf(e = {}) {
  let t = e.isIntlAvailable ?? cf,
    n = e.createIntlBoundary ?? uf,
    r = e.createFallbackBoundary ?? pf;
  if (!t()) return r();
  try {
    return n();
  } catch {
    return r();
  }
}
var df;
function gf() {
  return ((df ??= mf()), df);
}
function kb(e, t = gf()) {
  return t.segment(e);
}
function Cb(e, t) {
  return t.map((n) => ({
    graphemeFrom: qa(e, n.utf16From),
    graphemeTo: qa(e, n.utf16To),
    wordLike: n.wordLike,
  }));
}
var Qa = (e, t) => {
    if (!Number.isSafeInteger(e) || e < 0)
      throw new RangeError(`${t} must be a non-negative safe integer`);
  },
  Ar = (e, t) => {
    if (e.trim().length === 0) throw new TypeError(`${t} must not be blank`);
  },
  Dr = (e) => (
    Qa(e.resourceEpoch, "resourceEpoch"),
    Qa(e.configEpoch, "configEpoch"),
    Qa(e.producerVersion, "producerVersion"),
    Ar(e.extensionFingerprint, "extensionFingerprint"),
    Ar(e.shapingHash, "shapingHash"),
    Object.freeze({
      resourceEpoch: e.resourceEpoch,
      configEpoch: e.configEpoch,
      extensionFingerprint: e.extensionFingerprint,
      shapingHash: e.shapingHash,
      producerVersion: e.producerVersion,
    })
  ),
  Bb = (e, t) => {
    let n = Dr(e),
      r = Dr(t),
      a = [
        "resourceEpoch",
        "configEpoch",
        "extensionFingerprint",
        "shapingHash",
        "producerVersion",
      ].filter((i) => n[i] !== r[i]);
    return a.length === 0
      ? Object.freeze({ status: "current" })
      : Object.freeze({ status: "restart", changed: Object.freeze(a) });
  },
  vs = (e) => {
    let t = e
      .map(
        ({ key: n, fingerprint: r }) => (
          Ar(n, "resource dependency key"),
          Ar(r, "resource dependency fingerprint"),
          Object.freeze({ key: n, fingerprint: r })
        ),
      )
      .sort((n, r) => (n.key < r.key ? -1 : n.key > r.key ? 1 : 0));
    for (let n = 1; n < t.length; n += 1)
      if (t[n - 1].key === t[n].key)
        throw new TypeError(`Duplicate resource dependency: ${t[n].key}`);
    return Object.freeze(t);
  },
  Lb = (e) => (
    Qa(e.revision, "revision"),
    Ar(e.dependencyFingerprint, "dependencyFingerprint"),
    Ar(e.inputFingerprint, "inputFingerprint"),
    Object.freeze({
      revision: e.revision,
      dependencyFingerprint: e.dependencyFingerprint,
      inputFingerprint: e.inputFingerprint,
      resourceDependencies: vs(e.resourceDependencies),
      ...Dr(e),
    })
  ),
  Fb = (e, t) => {
    let n = vs(e),
      r = vs(t),
      o = Math.max(n.length, r.length);
    for (let a = 0; a < o; a += 1) {
      let i = n[a],
        l = r[a];
      if (i?.key !== l?.key || i?.fingerprint !== l?.fingerprint)
        return {
          hit: false,
          reason: "resource-changed",
          resourceKey: i?.key ?? l.key,
        };
    }
    return null;
  };
function Mb(e, t) {
  if (e.dependencyFingerprint !== t.dependencyFingerprint)
    return { hit: false, reason: "dependency-changed" };
  if (e.inputFingerprint !== t.inputFingerprint)
    return { hit: false, reason: "input-changed" };
  let n = Fb(e.resourceDependencies, t.resourceDependencies);
  if (n) return n;
  let r = [
    "configEpoch",
    "extensionFingerprint",
    "shapingHash",
    "producerVersion",
  ];
  for (let o of r)
    if (e[o] !== t[o]) return { hit: false, reason: "epoch-changed", epoch: o };
  return null;
}
var Ts = class {
  entries = new Map();
  get(t, n) {
    let r = this.entries.get(t);
    if (!r) return { hit: false, reason: "absent" };
    let o = Mb(r.provenance, n);
    return o || { hit: true, value: r.value, provenance: r.provenance };
  }
  set(t, n, r) {
    this.entries.set(t, { value: n, provenance: Lb(r) });
  }
  evictEpoch(t) {
    let n = Dr(t),
      r = 0;
    for (let [o, a] of this.entries) {
      let i = a.provenance;
      (i.configEpoch !== n.configEpoch ||
        i.extensionFingerprint !== n.extensionFingerprint ||
        i.shapingHash !== n.shapingHash ||
        i.producerVersion !== n.producerVersion) &&
        (this.entries.delete(o), (r += 1));
    }
    return r;
  }
  evictResources(t, n) {
    let r = Dr(t),
      o = this.evictEpoch(r);
    for (let [a, i] of this.entries)
      i.provenance.resourceDependencies.some(
        (s) => n.get(s.key) !== s.fingerprint,
      ) && (this.entries.delete(a), (o += 1));
    return o;
  }
  get size() {
    return this.entries.size;
  }
};
var Do = Object.freeze({
  width: 612,
  height: 792,
  margin: Object.freeze({ top: 72, right: 72, bottom: 72, left: 72 }),
});
function Je(e, t = false) {
  return hf(e.fragments, t);
}
function hf(e, t = false) {
  let n = [],
    r = (o) => {
      for (let a of o) {
        if (a.kind === "paragraph") {
          n.push(a);
          continue;
        }
        for (let i of a.rows)
          if (!(i.isHeaderRepeat && !t)) for (let l of i.cells) r(l.blocks);
      }
    };
  return (r(e), n);
}
function yf(e) {
  let t = [];
  for (let n of e.pages) for (let r of Je(n)) t.push(...r.lines);
  return t;
}
function iI(e) {
  return e.anchoredDrawings ?? [];
}
function Eb(e, t) {
  let n = [];
  for (let r of e.pages) for (let o of Je(r)) o.paragraphId === t && n.push(o);
  return n.sort((r, o) => r.fragmentIndex - o.fragmentIndex);
}
function Nb(e, t, n) {
  for (let r of yf(e)) {
    let o = r.range.paragraphId === t ? r.range.start : Number.NaN,
      a = r.range.paragraphId === t ? r.range.end : Number.NaN;
    for (let i of r.spans)
      i.range.paragraphId === t &&
        ((o = Number.isNaN(o) ? i.range.start : Math.min(o, i.range.start)),
        (a = Number.isNaN(a) ? i.range.end : Math.max(a, i.range.end)));
    for (let i of r.drawings ?? [])
      i.paragraphId === t &&
        ((o = Number.isNaN(o) ? i.start : Math.min(o, i.start)),
        (a = Number.isNaN(a) ? i.start + 1 : Math.max(a, i.start + 1)));
    if (!Number.isNaN(o) && n >= o && n <= a) return r;
  }
  return null;
}
function Os(e) {
  return e.contentControls ?? [];
}
function ei(e) {
  if (e.length === 0) return null;
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    o = -1 / 0;
  for (let a of e)
    ((t = Math.min(t, a.x)),
      (n = Math.min(n, a.y)),
      (r = Math.max(r, a.x + a.width)),
      (o = Math.max(o, a.y + a.height)));
  return { x: t, y: n, width: r - t, height: o - n };
}
function ks(e) {
  let t = false,
    n = false;
  for (let r of e)
    ((r === "contentLocked" || r === "sdtContentLocked") && (t = true),
      (r === "sdtLocked" || r === "sdtContentLocked") && (n = true));
  return t && n
    ? "sdtContentLocked"
    : t
      ? "contentLocked"
      : n
        ? "sdtLocked"
        : "unlocked";
}
var bf = 1,
  ti = 1;
function _r(e) {
  let t = Math.max(e, 1),
    n = 3;
  if (t >= n) {
    let i = t / 3;
    if (i >= 1) return { strokePt: i, gapPt: i, extentPt: t, insetPt: 0 };
  }
  let r = 1,
    o = 1,
    a = Math.max(t, n);
  return { strokePt: r, gapPt: o, extentPt: a, insetPt: (t - a) / 2 };
}
var Ab = new Set([
  "double",
  "triple",
  "thinThickSmallGap",
  "thickThinSmallGap",
  "thinThickThinSmallGap",
  "thinThickMediumGap",
  "thickThinMediumGap",
  "thinThickThinMediumGap",
  "thinThickLargeGap",
  "thickThinLargeGap",
  "thinThickThinLargeGap",
  "doubleWave",
]);
function Db(e) {
  return Ab.has(e);
}
function xf(e, t) {
  return Db(e) ? _r(t).extentPt : t;
}
function Ls(e) {
  return e.some(
    (t) =>
      t.localName === "pageBreakBefore" &&
      t.attributes?.val !== "0" &&
      t.attributes?.val !== "false",
  );
}
var wf = 31680 / 20,
  Ho = 12,
  Pf = 3168,
  Rf = 14,
  zr = Object.freeze({ rule: "auto", value: 240 }),
  _b = 132,
  Hb = 1584,
  If = ["top", "left", "bottom", "right", "between", "bar"],
  zb = Object.freeze({}),
  jb = /^[0-9A-Fa-f]{6}$/,
  Gb = new Set(["nil", "none"]);
function ni(e, t = false) {
  return e === void 0 || !(t ? /^-?\d{1,9}$/ : /^\d{1,9}$/).test(e)
    ? null
    : Number(e);
}
function Cs(e, t) {
  return !Number.isFinite(e) || e <= 0 ? 0 : e > t ? t : e;
}
function Sf(e) {
  let t = ni(e, true);
  return t === null ? 0 : Cs(t / 20, wf);
}
function Bs(e) {
  return e !== "0" && e !== "false" && e !== "off";
}
function Wb(e) {
  return e === void 0 || e === "auto"
    ? null
    : jb.test(e)
      ? e.toUpperCase()
      : null;
}
function _o(e, t) {
  return e.attributes.find((n) => n.localName === t)?.value;
}
function Zt(e, t) {
  for (let n of e.children)
    if (n.kind !== "textValue" && n.localName === t) return n;
}
function Fs(e, t) {
  let n = 0,
    r = 0,
    o = false,
    a = false;
  for (let i of e) {
    if (i.localName !== "spacing") continue;
    let l = i.attributes?.before,
      s = i.attributes?.after;
    (l !== void 0 && (n = Sf(l)), s !== void 0 && (r = Sf(s)));
    let c = i.attributes?.beforeAutospacing,
      d = i.attributes?.afterAutospacing;
    (c !== void 0 && (o = Bs(c)), d !== void 0 && (a = Bs(d)));
  }
  if (o || a) {
    let i = t?.inList || t?.inTableCell ? 0 : Rf;
    (o && (n = i), a && (r = i));
  }
  return { before: n, after: r };
}
function Ms(e) {
  let t, n;
  for (let a of e) {
    if (a.localName !== "spacing") continue;
    let i = a.attributes?.lineRule;
    (i === "auto" || i === "exact" || i === "atLeast") && (t = i);
    let l = a.attributes?.line;
    if (l !== void 0) {
      let s = ni(l, true);
      s !== null && (n = s);
    }
  }
  if (n === void 0) return zr;
  let r = t ?? "auto";
  if (r === "auto") {
    let a = n / 240;
    return a > 0 ? { rule: "auto", value: Math.min(a, _b) * 240 } : zr;
  }
  let o = n / 20;
  return o > 0 ? { rule: r, value: Math.min(o, Hb) } : zr;
}
function Es(e, t, n) {
  let r =
      e.rule === "auto"
        ? t * (e.value / 240)
        : e.rule === "exact"
          ? e.value
          : Math.max(t, e.value),
    o = r - t;
  return o < 0
    ? { height: r, baseline: Math.max(0, Math.min(n, r)) }
    : e.rule === "exact"
      ? { height: r, baseline: n + o / 2 }
      : { height: r, baseline: n };
}
function Ns(e) {
  let t = false;
  for (let n of e) {
    if (n.localName !== "contextualSpacing") continue;
    let r = n.attributes?.val;
    t = r === void 0 || Bs(r);
  }
  return t;
}
function Hr(e) {
  if (!e) return;
  let t = _o(e, "val");
  if (!t || Gb.has(t)) return;
  let n = ni(_o(e, "sz")),
    r = n === null ? 0.5 : Cs(n / 8, Ho) || 0.5,
    o = ni(_o(e, "space")),
    a = o === null ? 0 : Cs(o, Pf),
    i = _o(e, "shadow"),
    l = i !== void 0 && i !== "0" && i !== "false" && i !== "off";
  return {
    val: t,
    color: Wb(_o(e, "color")),
    widthPt: r,
    spacePt: a,
    ...(l ? { shadow: true } : {}),
  };
}
function vf(e) {
  let t = Hr(Zt(e, "top")),
    n = Hr(Zt(e, "left") ?? Zt(e, "start")),
    r = Hr(Zt(e, "bottom")),
    o = Hr(Zt(e, "right") ?? Zt(e, "end")),
    a = Hr(Zt(e, "between")),
    i = Hr(Zt(e, "bar"));
  return {
    ...(t ? { top: t } : {}),
    ...(n ? { left: n } : {}),
    ...(r ? { bottom: r } : {}),
    ...(o ? { right: o } : {}),
    ...(a ? { between: a } : {}),
    ...(i ? { bar: i } : {}),
  };
}
function un(e) {
  if (!e || e.kind === "textValue") return {};
  let t = Zt(e, "pBdr");
  return t ? vf(t) : {};
}
function zo(e) {
  let t = zb;
  for (let n of e) {
    if (!n || n.kind === "textValue") continue;
    let r = Zt(n, "pBdr");
    r && (t = vf(r));
  }
  return t;
}
function Pt(e) {
  return xf(e.val, e.widthPt);
}
function Mn(e) {
  return e ? e.spacePt + Pt(e) : 0;
}
function Xb(e) {
  return Mn(e);
}
function As(e) {
  let t = [];
  for (let n of If) {
    let r = e[n];
    r &&
      t.push(
        `${n}:${r.val},${r.color ?? "auto"},${r.widthPt},${r.spacePt},${r.shadow ? 1 : 0}`,
      );
  }
  return t.join("|");
}
function jr(e, t) {
  return Math.max(e, t) - t;
}
function Ds(e, t, n, r) {
  return n && !r ? 0 : jr(e, t);
}
var $b = /^[0-9A-Fa-f]{6}$/;
function ri(e) {
  if (!(e === void 0 || e === "auto" || e === "nil") && $b.test(e))
    return e.toUpperCase();
}
function jo(e) {
  if (e && e.val !== "nil") return ri(e.fill);
}
function _s(e) {
  if (!e || e.localName !== "shd") return;
  let t = {};
  for (let n of e.attributes) t[n.localName] = n.value;
  return jo(t);
}
function Hs(e) {
  let t;
  for (let n of e) n.localName === "shd" && (t = jo(n.attributes));
  return t;
}
function Go(e, t, n) {
  if (e.length === 0) return;
  let r = e[0].box.y,
    o = e[e.length - 1].box;
  return { x: t, y: r, width: n, height: Math.max(o.y + o.height - r, 0) };
}
var Vb = 64,
  Yb = 31680,
  Kb = 720,
  Ub = 36,
  zs = new Map([
    ["dot", "."],
    ["hyphen", "-"],
    ["underscore", "_"],
    ["heavy", "_"],
    ["middleDot", "\xB7"],
  ]),
  Gr = Object.freeze({ stops: Object.freeze([]), defaultIntervalPt: 36 }),
  Zb = new Map([
    ["left", "left"],
    ["start", "left"],
    ["center", "center"],
    ["right", "right"],
    ["end", "right"],
    ["decimal", "decimal"],
  ]),
  qb = new Set(["dot", "hyphen", "underscore", "heavy", "middleDot"]);
function Wo(e) {
  return e.kind !== "textValue";
}
function oi(e, t) {
  return e.attributes.find((n) => n.localName === t)?.value;
}
function js(e, t) {
  for (let n of e.children) if (Wo(n) && n.localName === t) return n;
}
function Tf(e) {
  return e === void 0 || !/^-?\d{1,9}$/.test(e) ? null : Number(e);
}
function Jb(e) {
  return !Number.isFinite(e) || e < 0 ? null : e > 31680 ? 31680 : e;
}
function Of(e, t) {
  if (!t) return;
  let n = 0;
  for (let r of t.children) {
    if (n >= 128) break;
    if (((n += 1), !Wo(r) || r.localName !== "tab")) continue;
    let o = Jb(Tf(oi(r, "pos")) ?? NaN);
    if (o === null) continue;
    let a = oi(r, "val") ?? "left";
    if (a === "clear") {
      e.delete(o);
      continue;
    }
    let i = Zb.get(a);
    if (i === void 0 || (e.size >= 64 && !e.has(o))) continue;
    let l = oi(r, "leader");
    e.set(o, {
      alignment: i,
      ...(l !== void 0 && qb.has(l) ? { leader: l } : {}),
    });
  }
}
function kf(e, t = 36) {
  let n = [...e.entries()].sort((o, a) => o[0] - a[0]),
    r = [];
  for (let o = 0; o < n.length && o < 64; o += 1) {
    let [a, i] = n[o];
    r.push({ positionPt: a / 20, alignment: i.alignment, ...Qb(i) });
  }
  return { stops: Object.freeze(r), defaultIntervalPt: t };
}
function Qb(e) {
  return e.leader ? { leader: e.leader } : {};
}
function Gs(e) {
  let t = new Map();
  for (let n of e) !n || !Wo(n) || Of(t, js(n, "tabs"));
  return kf(t);
}
function Ws(e) {
  if (!e || !Wo(e)) return Gr;
  let t = new Map();
  return (Of(t, js(e, "tabs")), kf(t));
}
function Xo(e, t) {
  return t === void 0 ||
    !Number.isFinite(t) ||
    t <= 0 ||
    t === e.defaultIntervalPt
    ? e
    : { stops: e.stops, defaultIntervalPt: t };
}
function ex(e) {
  if (!e || !Wo(e)) return 36;
  let t = js(e, "defaultTabStop");
  if (!t) return 36;
  let n = Tf(oi(t, "val"));
  return n === null || n <= 0 || n > 31680 ? 36 : n / 20;
}
function Wr(e, t, n) {
  let r = Math.max(t, n);
  for (let i of e.stops)
    if (i.positionPt > t)
      return {
        positionPt: Math.min(i.positionPt, r),
        alignment: i.alignment,
        ...(i.leader ? { leader: i.leader } : {}),
      };
  let o = e.defaultIntervalPt > 0 ? e.defaultIntervalPt : 36,
    a = Math.ceil((t + 1e-9) / o) * o;
  return (
    a <= t && (a += o),
    { positionPt: Math.min(a, r), alignment: "left" }
  );
}
function Xs(e, t, n, r, o) {
  let a = n;
  switch (e) {
    case "center":
      a = n - r / 2;
      break;
    case "right":
      a = n - r;
      break;
    case "decimal":
      a = n - o;
      break;
    default:
      a = n;
  }
  let i = a - t;
  return i > 0 ? i : 0;
}
function ar(e) {
  return `tabs(${e.stops.map((n) => `${n.alignment}@${Math.round(n.positionPt * 1e3)}${n.leader ? `/${n.leader}` : ""}`).join(",")}|d${Math.round(e.defaultIntervalPt * 1e3)})`;
}
var ai = 4,
  Cf = 4096,
  En = 64,
  Ks = Object.freeze({
    hasPage: false,
    hasNumPages: false,
    hasSectionPages: false,
  }),
  tx = /\s*\\\*\s*MERGEFORMAT\s*$/i;
function Xr(e) {
  if (e.length > qc) return null;
  let t = e.replace(/\s+/g, " ").trim().toUpperCase();
  return t.length > qc ? null : t.replace(tx, "").trim();
}
function ir(e) {
  let t = Xr(e);
  return t === "PAGE" || t === "NUMPAGES" || t === "SECTIONPAGES" ? t : null;
}
function Rt(e, t) {
  return fc$1(e, t);
}
function lr(e) {
  return gc$1(e);
}
function Us() {
  return { nodes: 0, exhausted: false };
}
function fn(e) {
  return e.exhausted
    ? false
    : ((e.nodes += 1), e.nodes > Cf ? ((e.exhausted = true), false) : true);
}
function Vo() {
  return {
    nesting: 0,
    instruction: "",
    instructionOverflow: false,
    deletedInstruction: "",
    deletedInstructionOverflow: false,
    sawLiveInstruction: false,
    nestingOverflow: false,
    phase: "idle",
    inner: [],
  };
}
function $o(e) {
  ((e.nesting = 0),
    (e.instruction = ""),
    (e.instructionOverflow = false),
    (e.deletedInstruction = ""),
    (e.deletedInstructionOverflow = false),
    (e.sawLiveInstruction = false),
    (e.nestingOverflow = false),
    (e.phase = "idle"),
    (e.inner.length = 0));
}
function ii(e) {
  return e.sawLiveInstruction
    ? { instruction: e.instruction, overflow: e.instructionOverflow }
    : {
        instruction: e.deletedInstruction,
        overflow: e.deletedInstructionOverflow,
      };
}
function nx(e) {
  return e.sawLive
    ? { instruction: e.instruction, overflow: e.overflow }
    : { instruction: e.deletedInstruction, overflow: e.deletedOverflow };
}
function Yo(e) {
  (e.nesting === 0 &&
    ((e.instruction = ""),
    (e.instructionOverflow = false),
    (e.deletedInstruction = ""),
    (e.deletedInstructionOverflow = false),
    (e.sawLiveInstruction = false),
    (e.nestingOverflow = false),
    (e.phase = "instruction"),
    (e.inner.length = 0)),
    (e.nesting += 1),
    e.nesting > ai
      ? (e.nestingOverflow = true)
      : e.nesting >= 2 &&
        (e.inner[e.nesting - 2] = {
          instruction: "",
          overflow: false,
          deletedInstruction: "",
          deletedOverflow: false,
          sawLive: false,
          separated: false,
        }));
}
function $r(e) {
  return e.nesting < 2 || e.nesting > ai
    ? null
    : (e.inner[e.nesting - 2] ?? null);
}
function Bf(e) {
  if (e.nesting === 1) return e.phase === "instruction";
  let t = $r(e);
  return t !== null && !t.separated;
}
function Vs(e, t) {
  if (!Bf(e)) return false;
  if (e.nesting === 1)
    return t ? !e.deletedInstructionOverflow : !e.instructionOverflow;
  let n = $r(e);
  return t ? !n.deletedOverflow : !n.overflow;
}
function Lf(e) {
  if (e.nesting === 1) {
    e.sawLiveInstruction = true;
    return;
  }
  let t = $r(e);
  t && (t.sawLive = true);
}
function Ys(e, t) {
  if (e.nesting === 1) {
    t
      ? ((e.deletedInstructionOverflow = true), (e.deletedInstruction = ""))
      : ((e.instructionOverflow = true), (e.instruction = ""));
    return;
  }
  let n = $r(e);
  n &&
    (t
      ? ((n.deletedOverflow = true), (n.deletedInstruction = ""))
      : ((n.overflow = true), (n.instruction = "")));
}
function $s(e) {
  (Ys(e, false), Ys(e, true));
}
function rx(e, t, n = false) {
  if (!Vs(e, n)) return;
  let r = $r(e);
  n || Lf(e);
  let o = r
    ? n
      ? r.deletedInstruction
      : r.instruction
    : n
      ? e.deletedInstruction
      : e.instruction;
  if (o.length + t.length > qc) {
    Ys(e, n);
    return;
  }
  r
    ? n
      ? (r.deletedInstruction = o + t)
      : (r.instruction = o + t)
    : n
      ? (e.deletedInstruction = o + t)
      : (e.instruction = o + t);
}
function Ko(e, t, n, r) {
  if (!Bf(e)) return;
  let o = hc$1(t);
  if ((o || Lf(e), !Vs(e, o))) return;
  if (r > En) {
    $s(e);
    return;
  }
  let a = [],
    i = t.kind === "textValue" ? [] : (t.children ?? []);
  for (let l = i.length - 1; l >= 0; l -= 1)
    a.push({ node: i[l], depth: r + 1 });
  for (; a.length > 0;) {
    let l = a.pop();
    if (!fn(n)) {
      $s(e);
      return;
    }
    if (l.depth > En) {
      $s(e);
      return;
    }
    if (l.node.kind === "textValue") {
      if ((rx(e, l.node.value, o), !Vs(e, o))) return;
      continue;
    }
    let s = l.node.children ?? [];
    for (let c = s.length - 1; c >= 0; c -= 1)
      a.push({ node: s[c], depth: l.depth + 1 });
  }
}
function Uo(e) {
  if (e.nesting === 1) {
    if (e.phase !== "instruction" || ((e.phase = "result"), e.nestingOverflow))
      return null;
    let r = ii(e);
    return r.overflow ? null : ir(r.instruction);
  }
  let t = $r(e);
  if (!t || t.separated) return null;
  t.separated = true;
  let n = nx(t);
  return n.overflow ? null : ir(n.instruction);
}
function Zo(e) {
  (e.nesting > 0 && (e.nesting -= 1), e.nesting === 0 && $o(e));
}
function Ff(e) {
  return e.phase === "instruction" && e.nesting >= 1;
}
function Mf(e) {
  return e.phase === "result" && e.nesting >= 1;
}
function Zs(e) {
  let t = false,
    n = false,
    r = false,
    o = Us(),
    a = Vo(),
    i = () => t && n && r,
    l = (f) => {
      f === "PAGE" ? (t = true) : f === "NUMPAGES" ? (n = true) : (r = true);
    },
    s = false,
    c = [],
    d = (f, m) => {
      if (f.kind !== "runProperties") {
        if (Rt(f, "begin")) {
          (Yo(a), a.nestingOverflow && (s = true));
          return;
        }
        if (lr(f)) {
          Ko(a, f, o, m);
          return;
        }
        if (Rt(f, "separate")) {
          let g = a.nesting,
            y = a.phase,
            b = Uo(a);
          if (s) return;
          b && (g <= 1 || y === "result") && c.push(b);
          return;
        }
        if (Rt(f, "end") && (Zo(a), a.nesting === 0)) {
          if (!s) for (let g of c) l(g);
          c.length = 0;
        }
      }
    },
    u = (f, m) => {
      if (f.kind === "run")
        for (let g of f.children) {
          if (!fn(o)) return;
          if (
            (d(g, m + 1),
            (g.kind === "drawing" || g.kind === "generic") &&
              !lr(g) &&
              "children" in g &&
              g.children.length > 0)
          ) {
            let y = { ...a, inner: a.inner.map((T) => ({ ...T })) },
              b = s,
              x = c;
            ((c = []), p(g, m + 1), Object.assign(a, y), (s = b), (c = x));
          }
          if (i() || o.exhausted) return;
        }
    },
    p = (f, m) => {
      if (!i() && fn(o) && !(m > En) && f.kind !== "textValue") {
        if (f.kind === "paragraph") {
          ($o(a), (s = false), (c.length = 0));
          for (let g of f.children)
            if ((p(g, m + 1), i() || o.exhausted)) return;
          ($o(a), (s = false), (c.length = 0));
          return;
        }
        if (f.kind === "run") {
          u(f, m);
          return;
        }
        if (ic$1(f)) {
          let g = ir(kc$1(f) ?? "");
          if (g) {
            l(g);
            return;
          }
        }
        for (let g of f.children) if ((p(g, m + 1), i() || o.exhausted)) return;
      }
    };
  return (
    p(e, 0),
    !t && !n && !r ? Ks : { hasPage: t, hasNumPages: n, hasSectionPages: r }
  );
}
var ox = 64,
  ax = 64,
  ix = [
    { value: 1e3, glyph: "M" },
    { value: 900, glyph: "CM" },
    { value: 500, glyph: "D" },
    { value: 400, glyph: "CD" },
    { value: 100, glyph: "C" },
    { value: 90, glyph: "XC" },
    { value: 50, glyph: "L" },
    { value: 40, glyph: "XL" },
    { value: 10, glyph: "X" },
    { value: 9, glyph: "IX" },
    { value: 5, glyph: "V" },
    { value: 4, glyph: "IV" },
    { value: 1, glyph: "I" },
  ];
function pn(e) {
  if (!Number.isFinite(e)) return 1;
  let t = Math.trunc(e);
  return t < 0 ? 1 : t > 9999 ? 9999 : t;
}
function Nn(e) {
  return String(pn(e));
}
function Ef(e) {
  let t = pn(e);
  return t < 10 ? `0${t}` : String(t);
}
function qs(e) {
  let t = pn(e);
  t > 3999 && (t = 3999);
  let n = "";
  for (let { value: r, glyph: o } of ix)
    for (; t >= r;)
      if (((n += o), (t -= r), n.length >= 64)) return n.slice(0, 64);
  return n || "I";
}
function Nf(e) {
  return qs(e).toLowerCase();
}
function Js(e) {
  let t = pn(e),
    n = "";
  for (; t > 0 && n.length < 8;)
    ((t -= 1),
      (n = String.fromCharCode(65 + (t % 26)) + n),
      (t = Math.floor(t / 26)));
  return n || "A";
}
function Af(e) {
  return Js(e).toLowerCase();
}
function lx(e) {
  let t = pn(e),
    n = t % 100,
    r = t % 10,
    o =
      n >= 11 && n <= 13
        ? "th"
        : r === 1
          ? "st"
          : r === 2
            ? "nd"
            : r === 3
              ? "rd"
              : "th";
  return `${t}${o}`;
}
function sx(e) {
  return pn(e).toString(16).toUpperCase();
}
function dx(e) {
  let t = ["*", "\u2020", "\u2021", "\xA7"],
    n = pn(e);
  if (n <= 0) return t[0];
  let r = (n - 1) % t.length,
    o = Math.min(Math.floor((n - 1) / t.length) + 1, cx);
  return t[r].repeat(o);
}
var cx = 8,
  li = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  ux = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
function si(e) {
  let t = pn(e);
  if (t < 20) return li[t];
  if (t < 100) {
    let r = t % 10;
    return ux[Math.floor(t / 10)] + (r === 0 ? "" : `-${li[r]}`);
  }
  if (t < 1e3) {
    let r = t % 100;
    return `${li[Math.floor(t / 100)]} hundred${r === 0 ? "" : ` ${si(r)}`}`;
  }
  let n = t % 1e3;
  return `${li[Math.floor(t / 1e3)]} thousand${n === 0 ? "" : ` ${si(n)}`}`;
}
function Df(e) {
  return e.length === 0 ? e : e[0].toUpperCase() + e.slice(1);
}
function fx(e) {
  return Df(si(e));
}
var px = new Map([
  ["zero", "zeroth"],
  ["one", "first"],
  ["two", "second"],
  ["three", "third"],
  ["five", "fifth"],
  ["eight", "eighth"],
  ["nine", "ninth"],
  ["twelve", "twelfth"],
]);
function mx(e) {
  let t = px.get(e);
  return t !== void 0
    ? t
    : e.endsWith("y")
      ? `${e.slice(0, -1)}ieth`
      : `${e}th`;
}
function gx(e) {
  let t = si(e),
    n = Math.max(t.lastIndexOf(" "), t.lastIndexOf("-")),
    r = n < 0 ? "" : t.slice(0, n + 1);
  return Df(r + mx(t.slice(n + 1)));
}
function mn(e, t) {
  switch (e) {
    case "decimal":
      return Nn(t);
    case "decimalZero":
      return Ef(t);
    case "upperRoman":
      return qs(t);
    case "lowerRoman":
      return Nf(t);
    case "upperLetter":
      return Js(t);
    case "lowerLetter":
      return Af(t);
    case "ordinal":
      return lx(t);
    case "cardinalText":
      return fx(t);
    case "ordinalText":
      return gx(t);
    case "hex":
      return sx(t);
    case "chicago":
      return dx(t);
    case "numberInDash":
      return `- ${Nn(t)} -`;
    case "none":
    case "bullet":
      return "";
    default:
      return Nn(t);
  }
}
function Qs(e, t, n) {
  let r = e.length > 64 ? e.slice(0, 64) : e,
    o = "";
  for (let a = 0; a < r.length && !(o.length >= 64); a += 1) {
    let i = r[a];
    if (i === "%" && a + 1 < r.length) {
      let l = r[a + 1];
      if (l >= "1" && l <= "9") {
        let s = Number(l) - 1,
          c = n[s] ?? "decimal",
          d = t[s] ?? 1,
          u = c === "bullet" ? "" : mn(c, d);
        for (let p of u) {
          if (o.length >= 64) break;
          o += p;
        }
        a += 1;
        continue;
      }
    }
    o += i;
  }
  return o;
}
var di = "0";
function ed(e, t) {
  if (!Number.isFinite(e) || e < 0) return "";
  let n = Math.floor(e),
    r = t && t.length > 0 ? t : "decimal";
  if (r === "none" || r === "bullet") return Nn(n);
  let o = mn(r, n);
  return o.length > 0 ? o : Nn(n);
}
function gn(e, t) {
  if (e === "PAGE") return ed(t.pageNumber, t.format);
  let n = e === "NUMPAGES" ? t.pageCount : (t.sectionPageCount ?? t.pageCount);
  return !Number.isFinite(n) || n < 0 ? "" : Nn(Math.floor(n));
}
function An(e) {
  return e.hasPage || e.hasNumPages || e.hasSectionPages;
}
function td(e, t = Ks) {
  if (!e || !An(t)) return "";
  let n = [];
  return (
    t.hasPage &&
      (n.push(`p${e.pageNumber}`), e.format && n.push(`f${e.format}`)),
    t.hasNumPages && n.push(`n${e.pageCount}`),
    t.hasSectionPages && n.push(`s${e.sectionPageCount ?? e.pageCount}`),
    `|fld:${n.join("/")}`
  );
}
function Vr(e, t, n, r) {
  let o = false,
    a = e.map((i, l) => {
      let s = t + l,
        c = i.pageFieldSource;
      return c &&
        c.pageNumber === s &&
        c.sectionPageCount === n &&
        c.format === r
        ? i
        : ((o = true),
          {
            ...i,
            pageFieldSource: {
              pageNumber: s,
              sectionPageCount: n,
              ...(r ? { format: r } : {}),
            },
          });
    });
  return o ? a : e;
}
function hx(e) {
  for (let t of e.spans) if (t.fieldAtom?.pageField) return true;
  return false;
}
function _f(e) {
  if (e.kind === "paragraph") {
    for (let t of e.lines) if (hx(t)) return true;
    return false;
  }
  for (let t of e.rows)
    for (let n of t.cells) for (let r of n.blocks) if (_f(r)) return true;
  return false;
}
function nd(e, t) {
  let n = t,
    r = false;
  for (let o of e)
    ((n = Math.max(n, o.box.y + o.box.height)), !r && _f(o) && (r = true));
  return { usedBottom: n, hasBodyPageFields: r };
}
function yx(e, t) {
  let n = null;
  for (let r = 0; r < e.spans.length; r += 1) {
    let o = e.spans[r],
      a = o.fieldAtom?.pageField?.kind;
    if (!a) continue;
    let i = gn(a, t);
    i !== o.text && (n || (n = e.spans.slice()), (n[r] = { ...o, text: i }));
  }
  return n ? { ...e, spans: n } : e;
}
function Hf(e, t) {
  let n = null;
  for (let r = 0; r < e.length; r += 1) {
    let o = e[r],
      a = o;
    if (o.kind === "paragraph") {
      let i = null;
      for (let l = 0; l < o.lines.length; l += 1) {
        let s = o.lines[l],
          c = yx(s, t);
        c !== s && (i || (i = o.lines.slice()), (i[l] = c));
      }
      i && (a = { ...o, lines: i });
    } else {
      let i = null;
      for (let l = 0; l < o.rows.length; l += 1) {
        let s = o.rows[l],
          c = null;
        for (let d = 0; d < s.cells.length; d += 1) {
          let u = s.cells[d],
            p = Hf(u.blocks, t);
          p !== u.blocks &&
            (c || (c = s.cells.slice()), (c[d] = { ...u, blocks: p }));
        }
        c && (i || (i = o.rows.slice()), (i[l] = { ...s, cells: c }));
      }
      i && (a = { ...o, rows: i });
    }
    a !== o && (n || (n = e.slice()), (n[r] = a));
  }
  return n ?? e;
}
function Dn(e) {
  let t = e.pages.length;
  if (t === 0) return e;
  let n = false,
    r = e.pages.map((o) => {
      let a = o.pageFieldSource,
        i = {
          pageNumber: a?.pageNumber ?? o.index + 1,
          pageCount: t,
          sectionPageCount: a?.sectionPageCount ?? t,
          ...(a?.format ? { format: a.format } : {}),
        },
        l = (u) => {
          if (!u?.pageFieldProjector) return u;
          n = true;
          let p = u.pageFieldProjector(i),
            { pageFieldProjector: f, ...m } = p;
          return m;
        },
        s = l(o.header),
        c = l(o.footer),
        d = o.hasBodyPageFields === false ? o.fragments : Hf(o.fragments, i);
      return s === o.header && c === o.footer && d === o.fragments
        ? o
        : (d !== o.fragments && (n = true),
          {
            ...o,
            ...(s !== void 0 ? { header: s } : {}),
            ...(c !== void 0 ? { footer: c } : {}),
            ...(d !== o.fragments ? { fragments: d } : {}),
          });
    });
  return n ? { revision: e.revision, pages: r } : e;
}
var bx = ` 	
\r`,
  xx = /[ \t\n\r]*\\\*[ \t\n\r]*(?:"[^"]*"|[^ \t\n\r"\\]+)?[ \t\n\r]*$/;
function zf(e, t) {
  let n = t;
  for (; n < e.length && bx.includes(e[n]);) n += 1;
  return n;
}
function jf(e, t) {
  if (e[t] === '"') {
    let r = t + 1;
    for (; r < e.length && e[r] !== '"';) r += 1;
    return r < e.length ? r + 1 : r;
  }
  let n = t;
  for (
    ;
    n < e.length &&
    !` 	
\r"`.includes(e[n]);
  )
    n += 1;
  return n;
}
function ci(e) {
  if (e.length === 0 || e.length > 256) return null;
  let t = zf(e, 0);
  if (e[t] === '"') return null;
  let n = jf(e, t),
    r = e.slice(t, n).toUpperCase();
  if (r !== "MACROBUTTON" && r !== "GOTOBUTTON") return null;
  let o = zf(e, n);
  if (o >= e.length) return null;
  let a = jf(e, o),
    i = e.slice(a).trim();
  for (;;) {
    let l = i.replace(xx, "").trimEnd();
    if (l === i) break;
    i = l;
  }
  if (i[0] === '"') {
    let l = i.indexOf('"', 1);
    l === -1 ? (i = i.slice(1)) : l === i.length - 1 && (i = i.slice(1, -1));
  }
  return i.length === 0 ? null : { display: i };
}
var Gf = Object.freeze({
    TITLE: "title",
    AUTHOR: "creator",
    SUBJECT: "subject",
    KEYWORDS: "keywords",
    LASTSAVEDBY: "lastModifiedBy",
    COMMENTS: "description",
  }),
  Sx = /\s*\\[A-Z*@#!]\s*(?:"[^"]*"|[^\s"\\]+)?\s*$/;
function wx(e) {
  let t = e;
  for (;;) {
    let n = t.replace(Sx, "").trimEnd();
    if (n === t) return t;
    t = n;
  }
}
function Px(e) {
  let t = e.trimStart();
  if (t.length === 0) return null;
  if (t[0] === '"') {
    let o = t.indexOf('"', 1),
      a = o === -1 ? t.slice(1) : t.slice(1, o);
    return a.length > 0 ? a : null;
  }
  let n = t.search(/\s/),
    r = n === -1 ? t : t.slice(0, n);
  return r.length > 0 ? r : null;
}
function ui(e) {
  let t = Xr(e);
  if (t === null || t.length === 0) return null;
  let n = wx(t),
    r = Gf[n];
  if (r) return { property: r };
  if (!n.startsWith("DOCPROPERTY")) return null;
  let o = n.slice(11);
  if (o.length === 0 || !/^\s/.test(o)) return null;
  let a = Px(o);
  if (a === null) return null;
  let i = Gf[a];
  return i ? { property: i } : null;
}
function fi(e, t) {
  if (!t) return null;
  let n = t[e.property];
  return n !== void 0 && n.length > 0 ? n : null;
}
var Rx = qc,
  Ix = 2048,
  vx = 256;
function Tx(e) {
  let t = [],
    n = 0;
  for (; n < e.length;) {
    let r = e[n];
    if (
      r === " " ||
      r === "	" ||
      r ===
        `
` ||
      r === "\r"
    ) {
      n += 1;
      continue;
    }
    if (r === '"') {
      let a = n + 1;
      for (; a < e.length && e[a] !== '"';) a += 1;
      (t.push({ value: e.slice(n + 1, a), quoted: true }),
        (n = a < e.length ? a + 1 : a));
      continue;
    }
    let o = n;
    for (
      ;
      o < e.length &&
      !` 	
\r"`.includes(e[o]);
    )
      o += 1;
    (t.push({ value: e.slice(n, o), quoted: false }), (n = o));
  }
  return t;
}
var Ox = new Set(["\\l", "\\o", "\\t", "\\m", "\\n", "\\*", "\\#", "\\@"]);
function pi(e) {
  if (e.length === 0 || e.length > Rx) return null;
  let t = Tx(e);
  if (t.length < 2) return null;
  let n = t[0];
  if (n.quoted || n.value.toUpperCase() !== "HYPERLINK") return null;
  let r = null,
    o = false,
    a = null,
    i = false,
    l = null,
    s = false;
  for (let c = 1; c < t.length; c += 1) {
    let d = t[c];
    if (!d.quoted && d.value.startsWith("\\")) {
      let u = d.value.toLowerCase();
      if (!Ox.has(u)) continue;
      let p = t[c + 1];
      if (!p || (!p.quoted && p.value.startsWith("\\"))) continue;
      c += 1;
      let f = p.value.length > 0 && p.value.length <= vx;
      u === "\\l"
        ? i || ((i = true), f && (a = p.value))
        : u === "\\o" && (s || ((s = true), f && (l = p.value)));
      continue;
    }
    o ||
      ((o = true), d.value.length > 0 && d.value.length <= Ix && (r = d.value));
  }
  return r === null && a === null ? null : { target: r, anchor: a, tooltip: l };
}
function qo(e) {
  if (e.kind === "text" || e.kind === "deletedText") {
    let t = "";
    for (let n of e.children) n.kind === "textValue" && (t += n.value);
    return t;
  }
  return e.kind === "tab" ? "	" : e.kind === "hardBreak" ? _b$1(e) : "";
}
function Yr(e) {
  if (!e || e.kind === "textValue") return [];
  let t = [];
  for (let n of e.children) {
    if (n.kind === "textValue") continue;
    let r = {};
    for (let o of n.attributes) r[o.localName] = o.value;
    t.push(
      Object.keys(r).length > 0
        ? { localName: n.localName, attributes: r }
        : { localName: n.localName },
    );
  }
  return t;
}
function mi(e, t, n) {
  let r = Yr(
    e.kind === "run"
      ? e.children.find((o) => o.kind === "runProperties")
      : void 0,
  );
  return n ? [...n(t, r)] : t.length === 0 ? r : [...t, ...r];
}
var qt = Object.freeze({
    fontFamily: null,
    fontSizePt: 10,
    color: null,
    bold: false,
    italic: false,
    underline: null,
    strike: false,
    doubleStrike: false,
    highlight: null,
    shading: null,
    verticalAlign: "baseline",
    baselineShiftPt: 0,
    caps: false,
    smallCaps: false,
    characterSpacingPt: 0,
    horizontalScalePercent: 100,
    kerningMinPt: 0,
    hidden: false,
  }),
  kx = /^[0-9A-Fa-f]{6}$/;
function _n(e) {
  let t = e.attributes?.val;
  return t === void 0 || !(t === "0" || t === "false" || t === "off");
}
function Jo(e, t = false) {
  return e === void 0 || !(t ? /^-?\d{1,7}$/ : /^\d{1,7}$/).test(e)
    ? null
    : Number(e);
}
function Wf(e) {
  return e === void 0 || e === "auto"
    ? null
    : kx.test(e)
      ? e.toUpperCase()
      : null;
}
function Xf(e, t) {
  return e === "minorAscii" || e === "minorHAnsi"
    ? t.minor
    : e === "majorAscii" || e === "majorHAnsi"
      ? t.major
      : null;
}
function De(e, t) {
  let n = { ...qt };
  for (let r of e)
    switch (r.localName) {
      case "rFonts": {
        let o = r.attributes,
          i =
            (t ? (Xf(o?.asciiTheme, t) ?? Xf(o?.hAnsiTheme, t)) : null) ??
            o?.ascii ??
            o?.hAnsi;
        i && i.length <= 128 && (n.fontFamily = i);
        break;
      }
      case "sz": {
        let o = Jo(r.attributes?.val);
        o !== null && o > 0 && (n.fontSizePt = o / 2);
        break;
      }
      case "color": {
        n.color = Wf(r.attributes?.val);
        break;
      }
      case "b":
        n.bold = _n(r);
        break;
      case "i":
        n.italic = _n(r);
        break;
      case "u": {
        let o = r.attributes?.val ?? "single";
        n.underline =
          o === "none" || !_n(r)
            ? null
            : { variant: o, color: Wf(r.attributes?.color) };
        break;
      }
      case "strike":
        n.strike = _n(r);
        break;
      case "dstrike":
        n.doubleStrike = _n(r);
        break;
      case "highlight": {
        let o = r.attributes?.val;
        n.highlight = o && o !== "none" ? o : null;
        break;
      }
      case "shd": {
        n.shading = jo(r.attributes) ?? null;
        break;
      }
      case "vertAlign": {
        let o = r.attributes?.val;
        o === "superscript" || o === "subscript"
          ? (n.verticalAlign = o)
          : o === "baseline" && (n.verticalAlign = "baseline");
        break;
      }
      case "position": {
        let o = Jo(r.attributes?.val, true);
        o !== null && (n.baselineShiftPt = o / 2);
        break;
      }
      case "caps":
        n.caps = _n(r);
        break;
      case "smallCaps":
        n.smallCaps = _n(r);
        break;
      case "spacing": {
        let o = Jo(r.attributes?.val, true);
        o !== null && (n.characterSpacingPt = o / 20);
        break;
      }
      case "w": {
        let o = Jo(r.attributes?.val);
        o !== null && o > 0 && (n.horizontalScalePercent = o);
        break;
      }
      case "kern": {
        let o = Jo(r.attributes?.val);
        o !== null && (n.kerningMinPt = o / 2);
        break;
      }
      case "vanish":
        n.hidden = _n(r);
        break;
    }
  return n;
}
function Hn(e, t) {
  return t.caps ? e.toUpperCase() : e;
}
function Jt(e, t, n) {
  return n.measure(Hn(e, t), t);
}
function Cx(e, t) {
  return (
    e.fontFamily === t.fontFamily &&
    e.fontSizePt === t.fontSizePt &&
    e.color === t.color &&
    e.bold === t.bold &&
    e.italic === t.italic &&
    e.strike === t.strike &&
    e.doubleStrike === t.doubleStrike &&
    e.highlight === t.highlight &&
    e.shading === t.shading &&
    e.verticalAlign === t.verticalAlign &&
    e.baselineShiftPt === t.baselineShiftPt &&
    e.caps === t.caps &&
    e.smallCaps === t.smallCaps &&
    e.characterSpacingPt === t.characterSpacingPt &&
    e.horizontalScalePercent === t.horizontalScalePercent &&
    e.kerningMinPt === t.kerningMinPt &&
    e.hidden === t.hidden &&
    e.underline?.variant === t.underline?.variant &&
    e.underline?.color === t.underline?.color
  );
}
function rd(e) {
  return e.verticalAlign === "superscript"
    ? e.baselineShiftPt + e.fontSizePt * 0.33
    : e.verticalAlign === "subscript"
      ? e.baselineShiftPt - e.fontSizePt * 0.16
      : e.baselineShiftPt;
}
var Bx = new Map([
    [167, "\u2663"],
    [168, "\u2666"],
    [169, "\u2665"],
    [170, "\u2660"],
    [174, "\u2192"],
    [176, "\xB0"],
    [180, "\xD7"],
    [183, "\u2022"],
    [222, "\u21D2"],
  ]),
  $f = new Map([
    [108, "\u25CF"],
    [110, "\u25A0"],
    [111, "\u25A1"],
    [167, "\u25AA"],
    [216, "\u27A2"],
    [252, "\u2714"],
    [253, "\u2718"],
  ]),
  Vf = new Map([
    [167, "\u25AA"],
    [183, "\u2022"],
  ]),
  Yf = new Map([
    ["symbol", Bx],
    ["wingdings", $f],
    ["wingdings 2", Vf],
    ["wingdings 3", Vf],
    ["webdings", $f],
  ]),
  Lx = 64;
function Qo(e) {
  return !e || e.length > Lx ? false : Yf.has(e.toLowerCase());
}
function Kr(e, t, n) {
  if (e.length === 0 || !Qo(t)) return e;
  let r = Yf.get(t.toLowerCase());
  if (n?.(t) === true) return e;
  let o = "",
    a = false;
  for (let i of e) {
    let l = i.codePointAt(0);
    if (l >= 61440 && l <= 61695) {
      let s = r.get(l - 61440);
      if (s !== void 0) {
        ((o += s), (a = true));
        continue;
      }
    }
    o += i;
  }
  return a ? o : e;
}
var zn = 61440,
  ea = 61695,
  od = 128;
function Ur(e) {
  return (
    e.kind === "generic" && e.namespaceUri === ma$1 && e.localName === "sym"
  );
}
function Kf(e, t) {
  if (!(e.kind === "textValue" || !("attributes" in e))) {
    for (let n of e.attributes)
      if (
        n.localName === t &&
        (n.namespaceUri === ma$1 || n.namespaceUri === "")
      )
        return n.value;
  }
}
function Fx(e) {
  return !e || e.length > 4 || !/^[0-9A-Fa-f]{1,4}$/.test(e)
    ? null
    : Number.parseInt(e, 16);
}
function gi(e) {
  return !(
    !Number.isInteger(e) ||
    e < 32 ||
    e > 1114111 ||
    (e >= 127 && e <= 159) ||
    (e >= 55296 && e <= 57343) ||
    (e >= 64976 && e <= 65007) ||
    (e & 65534) === 65534 ||
    e === 65532
  );
}
function Zr(e) {
  if (!Ur(e)) return null;
  let t = Fx(Kf(e, "char"));
  if (t === null) return null;
  let n = Kf(e, "font"),
    r = n && n.length <= od ? n : null,
    o = Qo(r),
    a = o && t <= 255 && t + zn <= ea ? t + zn : t;
  if (o && a >= zn && a <= ea) {
    let i = Kr(String.fromCodePoint(a), r),
      l = i.codePointAt(0) < zn;
    return { text: i, font: r, unicode: l };
  }
  return gi(t)
    ? {
        text: String.fromCodePoint(t),
        font: r,
        unicode: t < 57344 || t > 63743,
      }
    : null;
}
function ad(e, t, n) {
  if (!t.font) return { props: e, style: De(e, n) };
  let r = [
    ...e,
    { localName: "rFonts", attributes: { ascii: t.font, hAnsi: t.font } },
  ];
  return { props: r, style: De(r, n) };
}
var Mx = 256,
  Ex = 9;
function Nx(e) {
  let t = [],
    n = 0;
  for (; n < e.length;) {
    let r = e[n];
    if (
      r === " " ||
      r === "	" ||
      r ===
        `
` ||
      r === "\r"
    ) {
      n += 1;
      continue;
    }
    if (r === '"') {
      let a = n + 1;
      for (; a < e.length && e[a] !== '"';) a += 1;
      (t.push({ value: e.slice(n + 1, a), quoted: true }),
        (n = a < e.length ? a + 1 : a));
      continue;
    }
    let o = n;
    for (
      ;
      o < e.length &&
      !` 	
\r"`.includes(e[o]);
    )
      o += 1;
    (t.push({ value: e.slice(n, o), quoted: false }), (n = o));
  }
  return t;
}
function Ax(e) {
  if (e.quoted) return null;
  let t = e.value;
  if (t.length === 0 || t.length > Ex) return null;
  let n;
  if (t.startsWith("0x") || t.startsWith("0X")) {
    let r = t.slice(2);
    if (!/^[0-9A-Fa-f]{1,6}$/.test(r)) return null;
    n = Number.parseInt(r, 16);
  } else {
    if (!/^\d{1,7}$/.test(t)) return null;
    n = Number.parseInt(t, 10);
  }
  return n > 1114111 || (n >= 55296 && n <= 57343) ? null : n;
}
function hi(e) {
  if (e.length === 0 || e.length > Mx) return null;
  let t = Nx(e);
  if (t.length < 2) return null;
  let n = t[0];
  if (n.quoted || n.value.toUpperCase() !== "SYMBOL") return null;
  let r = Ax(t[1]);
  if (r === null) return null;
  let o = null,
    a = null,
    i = false;
  for (let l = 2; l < t.length; l += 1) {
    let s = t[l];
    if (s.quoted || !s.value.startsWith("\\")) continue;
    let c = s.value.toLowerCase();
    if (c === "\\f") {
      let d = t[l + 1];
      d &&
        d.value.length > 0 &&
        d.value.length <= od &&
        (d.quoted || !d.value.startsWith("\\")) &&
        ((o = d.value), (l += 1));
      continue;
    }
    if (c === "\\s") {
      let d = t[l + 1];
      if (
        d &&
        (d.quoted || !d.value.startsWith("\\")) &&
        ((l += 1), /^\d{1,3}$/.test(d.value))
      ) {
        let u = Number(d.value);
        u >= 1 && u <= 999 && (a = u);
      }
      continue;
    }
    c === "\\u" && (i = true);
  }
  return { code: r, font: o, sizePt: a, unicode: i };
}
function yi(e, t, n) {
  let r = [];
  (e.font &&
    r.push({
      localName: "rFonts",
      attributes: { ascii: e.font, hAnsi: e.font },
    }),
    e.sizePt !== null &&
      r.push({ localName: "sz", attributes: { val: String(e.sizePt * 2) } }));
  let o = r.length > 0 ? [...t, ...r] : t,
    a = De(o, n);
  if (e.unicode)
    return gi(e.code)
      ? { text: String.fromCodePoint(e.code), props: o, style: a }
      : null;
  let i = e.font ?? a.fontFamily;
  if (Qo(i)) {
    let l = e.code <= 255 && e.code + zn <= ea ? e.code + zn : e.code;
    if (l >= zn && l <= ea)
      return { text: Kr(String.fromCodePoint(l), i), props: o, style: a };
  }
  return gi(e.code)
    ? { text: String.fromCodePoint(e.code), props: o, style: a }
    : null;
}
function bi() {
  let e = null,
    t = 0,
    n = false,
    r = false,
    o = () => {
      ((e = null), (t = 0), (n = false), (r = false));
    };
  return {
    get active() {
      return e !== null;
    },
    onSeparate(a, i) {
      e === null && a !== null && ((e = a), (t = i), (n = false), (r = false));
    },
    onEnd(a, i) {
      if (e === null || a > t) return null;
      let l = a === t,
        c = l && i && !(n && !r) ? gn(e, i) : "";
      return (o(), l ? c : null);
    },
    reset: o,
    noteResult(a) {
      ((n = true), a && (r = true));
    },
  };
}
var ft = "all-markup",
  Uf = Object.freeze([]),
  Dx = 32,
  _x = {
    revisionInsert: "insert",
    revisionDelete: "delete",
    revisionMoveFrom: "moveFrom",
    revisionMoveTo: "moveTo",
  };
function hn(e, t) {
  for (let n of e.attributes)
    if (
      n.localName === t &&
      n.namespaceUri === e.namespaceUri &&
      (n.kind === "wmlVal" ||
        n.kind === "genericExtension" ||
        n.kind === "xmlSpace")
    )
      return n.value;
}
function Si(e) {
  if (e.kind === "textValue") return null;
  let t = _x[e.kind];
  if (t === void 0) return null;
  let n = hn(e, "date");
  return {
    kind: t,
    id: hn(e, "id") ?? "",
    author: hn(e, "author") ?? "",
    ...(n === void 0 ? {} : { date: n }),
    nodeId: e.id,
  };
}
function wi(e, t) {
  return e.length === 0 ? [t] : [...e, t];
}
function Pi(e) {
  return e.kind !== "textValue" && ra$1(e.kind);
}
var qr = Dx;
function et(e, t) {
  if (t === "all-markup" || e.length === 0) return true;
  for (let n of e)
    if (
      t === "proposed"
        ? n.kind === "delete" || n.kind === "moveFrom"
        : n.kind === "insert" || n.kind === "moveTo"
    )
      return false;
  return true;
}
function Jr(e) {
  if (e.kind === "textValue") return xi;
  let t = e.children.find((o) => o.kind === "paragraphProperties");
  if (!t || t.kind === "textValue") return xi;
  let n = t.children.find((o) => o.kind === "runProperties");
  if (!n || n.kind === "textValue") return xi;
  let r = [];
  for (let o of n.children) {
    if (o.kind === "textValue" || o.namespaceUri !== ma$1) continue;
    let a = Hx[o.localName];
    if (a === void 0) continue;
    let i = hn(o, "date");
    r.push({
      kind: a,
      id: hn(o, "id") ?? "",
      author: hn(o, "author") ?? "",
      ...(i === void 0 ? {} : { date: i }),
      nodeId: o.id,
    });
  }
  return r.length > 0 ? r : xi;
}
var Hx = {
  ins: "insert",
  del: "delete",
  moveFrom: "moveFrom",
  moveTo: "moveTo",
};
function ta(e) {
  if (e.kind === "textValue") return null;
  let t = e.children.find((r) => r.kind === "paragraphProperties");
  if (!t || t.kind === "textValue") return null;
  let n = t.children.find((r) => r.kind === "runProperties");
  if (!n || n.kind === "textValue") return null;
  for (let r of n.children) {
    if (
      r.kind === "textValue" ||
      r.namespaceUri !== ma$1 ||
      r.localName !== "rPrChange"
    )
      continue;
    let o = hn(r, "date");
    return {
      kind: "format",
      id: hn(r, "id") ?? "",
      author: hn(r, "author") ?? "",
      ...(o === void 0 ? {} : { date: o }),
      nodeId: r.id,
    };
  }
  return null;
}
var xi = Object.freeze([]);
function id(e) {
  return e.find((t) => Zf(t)) ?? e[0];
}
function Zf(e) {
  return e.kind === "delete" || e.kind === "moveFrom";
}
function Ri(e, t) {
  let n = id(e);
  return {
    ...(n ? { markRevisions: e, markRevision: n } : {}),
    ...(t ? { markFormatRevision: t } : {}),
  };
}
function zx(e) {
  return id(Jr(e)) ?? null;
}
function jx(e) {
  for (let t of e) {
    if (t.localName !== "rPrChange" && t.localName !== "pPrChange") continue;
    let n = t.attributes ?? {},
      r = n.date;
    return {
      kind: "format",
      id: n.id ?? "",
      author: n.author ?? "",
      ...(r === void 0 ? {} : { date: r }),
      nodeId: "",
    };
  }
  return null;
}
function yn(e) {
  return e.some((t) => t.kind === "delete" || t.kind === "moveFrom");
}
function Gx(e) {
  let {
      simple: t,
      depth: n,
      pageContext: r,
      budget: o,
      revisions: a,
      displayMode: i,
      inheritedRunProperties: l,
      cascadeRuns: s,
      themeFonts: c,
    } = e,
    d = "",
    u,
    p,
    f = false,
    m = Vo(),
    g = bi(),
    y = (x, T) => {
      u || ((u = x), (p = T));
    },
    b = (x, T, k) => {
      if (!(x.kind === "textValue" || T > En)) {
        for (let M of x.children)
          if (M.kind !== "textValue") {
            if (!fn(o)) return;
            if (M.kind === "run") {
              let E = mi(M, l, s),
                P = De(E, c);
              for (let L of M.children) {
                if (L.kind === "runProperties") continue;
                if (Rt(L, "begin")) {
                  (Yo(m), m.nesting === 1 && g.reset());
                  continue;
                }
                if (lr(L)) {
                  Ko(m, L, o, T + 1);
                  continue;
                }
                if (Rt(L, "separate")) {
                  let G = m.nesting,
                    ee = m.phase,
                    C = Uo(m);
                  (G === 1 || (ee === "result" && !m.nestingOverflow)) &&
                    g.onSeparate(r ? C : null, G);
                  continue;
                }
                if (Rt(L, "end")) {
                  let G = g.onEnd(m.nesting, r);
                  (G !== null && (d += G), Zo(m));
                  continue;
                }
                if (nc$1(L)) continue;
                if (Ur(L)) {
                  if ((et(k, i) && (f = true), g.active)) {
                    g.noteResult(!P.hidden && et(k, i));
                    continue;
                  }
                  let G = Zr(L);
                  if (!G?.unicode || P.hidden || !et(k, i)) continue;
                  (y(E, P), (d += G.text));
                  continue;
                }
                let O = qo(L);
                if (O.length === 0) continue;
                let R = yn(k),
                  h = !et(k, i) || (L.kind === "deletedText" && !R);
                h || (f = true);
                let D = P.hidden || h;
                if (g.active) {
                  (g.noteResult(!D), D || y(E, P));
                  continue;
                }
                D || (y(E, P), (d += O));
              }
              continue;
            }
            if (ic$1(M)) {
              let E = g.active ? null : ir(kc$1(M) ?? "");
              if (E && r) {
                if (!et(k, i)) continue;
                let P = d.length;
                (b(M, T + 1, k), (d = d.slice(0, P)), (d += gn(E, r)));
                continue;
              }
              b(M, T + 1, k);
              continue;
            }
            if (M.kind === "hyperlink") {
              b(M, T + 1, k);
              continue;
            }
            if (Pi(M) && k.length < qr) {
              let E = Si(M);
              b(M, T + 1, E ? wi(k, E) : k);
              continue;
            }
            b(M, T + 1, k);
          }
      }
    };
  return (
    b(t, n, a),
    { text: d, resultProps: u, resultStyle: p, sawResultContent: f }
  );
}
function qf(e) {
  let {
      simple: t,
      pageContext: n,
      inheritedRunProperties: r,
      themeFonts: o,
    } = e,
    a = Gx(e),
    i = kc$1(t) ?? "",
    l = a.resultProps ?? r,
    s = ir(i);
  if (s && n) {
    let g = a.resultStyle ?? De(r, o);
    return g.hidden ? null : { text: gn(s, n), props: l, style: g };
  }
  if (
    s &&
    e.bodyPageFields &&
    !n &&
    a.text.length === 0 &&
    !a.sawResultContent
  ) {
    let g = a.resultStyle ?? De(r, o);
    return g.hidden
      ? null
      : { text: di, props: l, style: g, pageField: { kind: s } };
  }
  let c = hi(i);
  if (c) {
    let g = yi(c, l, o);
    if (g)
      return g.style.hidden
        ? null
        : { text: g.text, props: g.props, style: g.style };
  }
  let d = a.text.length === 0 && !a.sawResultContent;
  if (d) {
    let g = ui(i);
    if (g) {
      let y = fi(g, e.documentProperties);
      if (y !== null) {
        let b = a.resultStyle ?? De(r, o);
        return b.hidden ? null : { text: y, props: l, style: b };
      }
    }
  }
  let u = d ? ci(i) : null;
  if (u) {
    let g = a.resultStyle ?? De(r, o);
    return g.hidden ? null : { text: u.display, props: l, style: g };
  }
  if (a.text.length === 0) return null;
  let p = a.resultStyle ?? De(r, o);
  if (p.hidden) return null;
  let f = e.currentLink ? null : pi(i),
    m = f ? (e.projectFieldLink?.(f) ?? null) : null;
  return { text: a.text, props: l, style: p, ...(m ? { link: m } : {}) };
}
var Wx = "\u2612",
  Xx = "\u2610";
function $x(e) {
  let t = Xr(e);
  return t === "FORMCHECKBOX"
    ? "checkbox"
    : t === "FORMDROPDOWN"
      ? "dropdown"
      : null;
}
function ld(e, t) {
  ((e.symbolSpec = hi(t)),
    !e.symbolSpec &&
      ((e.linkSpec = pi(t)),
      !e.linkSpec &&
        ((e.formSpec = $x(t)),
        !e.formSpec &&
          ((e.buttonSpec = ci(t)),
          !e.buttonSpec && (e.docPropertySpec = ui(t))))));
}
function Jf(e, t) {
  if (e.formSpec === "checkbox") {
    if (e.formData?.kind !== "checkbox") return null;
    let n = e.formData.checked ? Wx : Xx;
    if (e.formData.sizeHalfPoints === null)
      return { text: n, props: e.props, style: e.style };
    let r = [
      ...e.props,
      {
        localName: "sz",
        attributes: { val: String(e.formData.sizeHalfPoints) },
      },
    ];
    return { text: n, props: r, style: De(r, t) };
  }
  if (e.formSpec === "dropdown") {
    if (
      e.cachedText.length > 0 ||
      e.sawResultContent ||
      e.formData?.kind !== "dropdown"
    )
      return null;
    let n = e.formData.entries[e.formData.selectedIndex] ?? "";
    return n.length === 0 ? null : { text: n, props: e.props, style: e.style };
  }
  return null;
}
function Qf(e, t) {
  if (e.symbolSpec) {
    let r = yi(e.symbolSpec, e.props, t.themeFonts);
    if (r) return { text: r.text, props: r.props, style: r.style };
  }
  let n = Jf(e, t.themeFonts);
  if (n) return { text: n.text, props: n.props, style: n.style };
  if (e.kind && t.pageContext)
    return { text: gn(e.kind, t.pageContext), props: e.props, style: e.style };
  if (e.cachedText.length > 0)
    return { text: e.cachedText, props: e.props, style: e.style };
  if (!e.sawResultContent) {
    if (e.kind && t.bodyPageFields)
      return {
        text: di,
        props: e.props,
        style: e.style,
        pageField: { kind: e.kind },
      };
    if (e.docPropertySpec) {
      let r = fi(e.docPropertySpec, t.documentProperties);
      if (r !== null) return { text: r, props: e.props, style: e.style };
    }
    if (e.buttonSpec)
      return { text: e.buttonSpec.display, props: e.props, style: e.style };
  }
  return null;
}
function sr(e, t, n) {
  if (n <= t) return;
  let r = e[e.length - 1];
  if (r && r.end >= t) {
    r.end = Math.max(r.end, n);
    return;
  }
  e.push({ start: t, end: n });
}
var Vx = new Set(["left", "center", "right"]),
  Yx = new Set(["margin", "indent", "leftMargin"]),
  Kx = new Set(["dot", "hyphen", "underscore", "middleDot"]);
function ep(e) {
  if (
    e.kind === "textValue" ||
    e.localName !== "ptab" ||
    e.namespaceUri !== ma$1
  )
    return null;
  let t = "left",
    n = "margin",
    r;
  for (let o of e.attributes)
    o.namespaceUri === ma$1 &&
      (o.localName === "alignment"
        ? (t = o.value)
        : o.localName === "relativeTo"
          ? (n = o.value)
          : o.localName === "leader" && (r = o.value));
  return {
    alignment: Vx.has(t) ? t : "left",
    relativeTo: Yx.has(n) ? n : "margin",
    ...(r !== void 0 && Kx.has(r) ? { leader: r } : {}),
  };
}
Object.freeze({ marks: Object.freeze(new Map()) });
function dr(e, t) {
  return ed$1(e, t);
}
function sd(e, t) {
  if (!vd$1(e)) return null;
  if (ld$1(e) || md$1(e))
    return { text: "", projected: true, kind: null, noteId: null };
  let n = jd$1(e),
    r = rd$1(e) ?? sd$1(e);
  if (!r) return null;
  let o = od$1(e),
    a = o !== null ? dr(r, o) : n ? void 0 : t?.activeNoteKey,
    i = o !== null ? o : a ? (Ux(a, r) ?? null) : null,
    l = a,
    s = l !== void 0 ? (n ? "to-note" : "to-body") : void 0,
    c = {
      projected: true,
      kind: r,
      noteId: i,
      ...(s ? { nav: s } : {}),
      ...(l ? { scopeId: l } : {}),
    };
  if (n && o !== null && td$1(e)) return { text: "", ...c };
  if (!t || !a) return { text: "", ...c };
  let d = t.marks.get(a);
  return d == null
    ? { text: "", ...c }
    : t.reservedMarkText && t.reservedMarkText.length > 0
      ? { text: d, measureText: t.reservedMarkText, ...c }
      : { text: d, ...c };
}
function Ux(e, t) {
  let n = `${t}:`;
  if (!e.startsWith(n)) return null;
  let r = e.slice(n.length);
  if (!/^-?\d+$/.test(r)) return null;
  let o = Number(r);
  return Number.isSafeInteger(o) ? o : null;
}
function np(e) {
  return jd$1(e) || kd$1(e) || ld$1(e) || md$1(e);
}
function Zx(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return (t >>> 0).toString(16).padStart(8, "0");
}
var tp = new WeakMap();
function rp(e) {
  if (!e) return "";
  let t = tp.get(e);
  if (t !== void 0) return t;
  let n = JSON.stringify([
      [...e.marks],
      e.reservedMarkText ?? null,
      e.activeNoteKey ?? null,
    ]),
    r = `${e.marks.size}:${Zx(n)}`;
  return (tp.set(e, r), r);
}
function Ii(e, t = [], n, r, o, a, i = ft, l, s, c, d, u, p = false) {
  if (e.kind === "textValue") return [];
  if (e.kind !== "paragraph") return [];
  let f = [],
    m = 0,
    g,
    y = rc$1(e, { maxNesting: ai, maxInstructionChars: qc }),
    b = y.filter((I) => I.addressing === "atomic"),
    x = new Set(b.filter((I) => I.kind === "complex").map((I) => I.node.id)),
    T = new Set(
      y
        .filter(
          (I) => I.kind === "complex" && I.addressing === "editable-result",
        )
        .map((I) => I.node.id),
    ),
    k = new Set();
  for (let I of b) for (let _ of I.removeNodeIds) k.add(_);
  let M = Vo(),
    E = Us(),
    P = null,
    L = null,
    O = bi(),
    R = Uf,
    h = (I, _, v, j, J, N, W) => {
      if (I.length === 0 && !j && !W?.inlineDrawing) return;
      let Y = W?.linkOverride ?? g,
        $ = W?.revisionsOverride ?? R,
        Q = Y ? { link: Y } : {},
        q = $.length === 0 ? {} : { revisions: $ };
      if (j) {
        f.push({
          text: I,
          props: _,
          style: v,
          start: J,
          end: N,
          projected: true,
          ...(W?.measureText !== void 0 ? { measureText: W.measureText } : {}),
          ...(W?.noteNav ? { noteNav: W.noteNav } : {}),
          ...(W?.inlineDrawing ? { inlineDrawing: W.inlineDrawing } : {}),
          ...(W?.fieldAtom ? { fieldAtom: W.fieldAtom } : {}),
          ...Q,
          ...q,
        });
        return;
      }
      I.length !== 0 &&
        f.push({
          text: I,
          props: _,
          style: v,
          start: J,
          end: N,
          ...(W?.positionalTab ? { positionalTab: W.positionalTab } : {}),
          ...(W?.breakKind ? { breakKind: W.breakKind } : {}),
          ...Q,
          ...q,
        });
    },
    D = () => {
      if (!P || !P.atomic) {
        ((P = null), (L = null));
        return;
      }
      let I = P.atomStart,
        _ = I + 1;
      if (P.style.hidden) {
        ((P = null), (L = null));
        return;
      }
      if (!et(P.resultRevisions, i)) {
        (l && yn(P.resultRevisions) && sr(l, I, _), (P = null), (L = null));
        return;
      }
      let { resultLink: v, linkSpec: j, resultRevisions: J, formField: N } = P,
        W,
        Y = () => {
          if (W) return W;
          let Q = !v && j ? (d?.(j) ?? null) : null,
            q = v ?? Q;
          return (
            (W = {
              ...(J.length > 0 ? { revisionsOverride: J } : {}),
              ...(q ? { linkOverride: q } : {}),
              fieldAtom: { formField: N },
            }),
            W
          );
        },
        $ = Qf(P, {
          pageContext: n,
          themeFonts: c,
          documentProperties: u,
          bodyPageFields: p,
        });
      if ($) {
        let Q = Y(),
          q = $.pageField
            ? {
                ...Q,
                fieldAtom: { formField: P.formField, pageField: $.pageField },
              }
            : Q;
        h($.text, $.props, $.style, true, I, _, q);
      }
      ((P = null), (L = null));
    },
    G = () => {
      if (!P) return;
      let I = !P.resultLink && P.linkSpec ? (d?.(P.linkSpec) ?? null) : null,
        _ = (v) => (I && !v.link ? { ...v, link: I } : v);
      if (P.atomic) {
        m = P.atomStart;
        for (let v of P.buffered)
          (f.push({ ..._(v), start: m, end: m + (v.end - v.start) }),
            (m += v.end - v.start));
        P.cachedText.length > 0 &&
          P.buffered.length === 0 &&
          (h(
            P.cachedText,
            P.props,
            P.style,
            false,
            m,
            m + P.cachedText.length,
            I ? { linkOverride: I } : void 0,
          ),
          (m += P.cachedText.length));
      } else {
        for (let v of P.buffered) f.push(_(v));
        m = P.bufferOffset;
      }
      ((P = null), (L = null));
    },
    ee = (I, _, v) => {
      let j = ($, Q, q, se) => {
        let Pe = yn(R),
          he = v.hidden || !et(R, i) || Pe;
        if (Q.hidden || he) {
          if ((Pe && l && sr(l, q, se), !Q.hidden)) return;
          h("\uFFFC", _, v, true, q, se);
          return;
        }
        h("\uFFFC", _, v, true, q, se, {
          inlineDrawing: Object.freeze({
            drawingNodeId: $,
            ownerPartName: s.ownerPartName,
            projection: Q,
            resource: s.resourceOf(Q),
          }),
        });
      };
      if (I.kind === "drawing") {
        let $ = m;
        m += 1;
        let Q = m;
        if (!s) return;
        let q =
          s.projectionForAtom?.(I.id) ??
          (I.kind === "drawing" ? s.project(I) : null);
        if (!q || q.kind !== "inline") {
          h("\uFFFC", _, v, true, $, Q);
          return;
        }
        j(I.id, q, $, Q);
        return;
      }
      if (ab$1(I)) {
        let $ = m;
        m += 1;
        let Q = m;
        if (!s) return;
        let q = s.projectionForAtom?.(I.id) ?? null;
        if (!q || q.kind !== "inline") {
          h("\uFFFC", _, v, true, $, Q);
          return;
        }
        j(I.id, q, $, Q);
        return;
      }
      if (np(I)) {
        let $ = sd(I, a),
          Q = m,
          q = Q + 1;
        if (
          ((m = q), v.hidden || !$ || ($.text.length === 0 && !$.measureText))
        )
          return;
        let se =
          $.scopeId && $.nav
            ? { scopeId: $.scopeId, direction: $.nav }
            : void 0;
        h(
          $.text.length > 0 ? $.text : ($.measureText ?? ""),
          _,
          v,
          true,
          Q,
          q,
          {
            ...($.measureText !== void 0 ? { measureText: $.measureText } : {}),
            ...(se ? { noteNav: se } : {}),
          },
        );
        return;
      }
      let J = ep(I);
      if (J) {
        v.hidden || h("	", _, v, false, m, m, { positionalTab: J });
        return;
      }
      if (Ur(I)) {
        let $ = Zr(I);
        if (!$ || v.hidden || !et(R, i)) return;
        let Q = ad(_, $, c);
        h($.text, Q.props, Q.style, true, m, m);
        return;
      }
      let N = qo(I);
      if (N.length === 0) return;
      let W = yn(R);
      (v.hidden ||
        !et(R, i) ||
        (I.kind === "deletedText" && !W) ||
        h(N, _, v, false, m, m + N.length, {
          ...(I.kind === "hardBreak" ? { breakKind: Yb$1(I) } : {}),
        }),
        W && l && sr(l, m, m + N.length),
        (m += N.length));
    },
    C = (I, _) => {
      if (I.kind !== "run") return;
      let v = mi(I, t, r),
        j = De(v, c),
        J = () => {
          P &&
            (P.capturedResultStyle ||
              ((P.props = v), (P.style = j), (P.capturedResultStyle = true)),
            P.capturedResultRevisions ||
              ((P.resultRevisions = R),
              (P.capturedResultRevisions = true),
              !P.resultLink && g && (P.resultLink = g)));
        };
      for (let N of I.children) {
        if (!fn(E)) {
          if (
            (G(),
            $o(M),
            O.reset(),
            N.kind === "runProperties" ||
              Rt(N, "begin") ||
              Rt(N, "separate") ||
              Rt(N, "end") ||
              lr(N) ||
              (k.has(N.id) && L === null))
          )
            continue;
          ee(N, v, j);
          continue;
        }
        if (N.kind !== "runProperties") {
          if (Rt(N, "begin")) {
            let W = x.has(N.id);
            (Yo(M),
              M.nesting === 1 &&
                (G(),
                O.reset(),
                (L = W ? N.id : null),
                (P = {
                  kind: null,
                  symbolSpec: null,
                  linkSpec: null,
                  formSpec: null,
                  buttonSpec: null,
                  docPropertySpec: null,
                  formData: pc$1(N),
                  atomic: W,
                  editableResult: T.has(N.id),
                  atomStart: m,
                  props: v,
                  style: j,
                  capturedResultStyle: false,
                  cachedText: "",
                  sawResultContent: false,
                  buffered: [],
                  bufferOffset: m,
                  resultRevisions: R,
                  capturedResultRevisions: R.length > 0,
                  formField: oc$1(N),
                  ...(g ? { resultLink: g } : {}),
                }),
                W && (m += 1)));
            continue;
          }
          if (lr(N)) {
            Ko(M, N, E, _ + 1);
            continue;
          }
          if (Rt(N, "separate")) {
            let W = M.nesting === 1 && M.phase === "instruction",
              Y = M.nesting,
              $ = Uo(M);
            if (W && P) {
              P.kind = $;
              let Q = ii(M);
              (!P.kind &&
                !Q.overflow &&
                !M.nestingOverflow &&
                ld(P, Q.instruction),
                (P.props = v),
                (P.style = j));
            } else
              P?.atomic &&
                M.phase === "result" &&
                !M.nestingOverflow &&
                O.onSeparate(n ? $ : null, Y);
            continue;
          }
          if (Rt(N, "end")) {
            let W = M.nesting === 1;
            if (W && P?.atomic && M.phase === "instruction") {
              let $ = ii(M);
              !$.overflow && !M.nestingOverflow && ld(P, $.instruction);
            }
            let Y = O.onEnd(M.nesting, n);
            (Y !== null && P?.atomic && (P.cachedText += Y),
              Zo(M),
              W && (P?.atomic ? D() : G()));
            continue;
          }
          if (!(Ff(M) && P?.atomic)) {
            if (P && Mf(M)) {
              if (Ur(N)) {
                if (P.atomic) {
                  if ((et(R, i) && (P.sawResultContent = true), O.active)) {
                    O.noteResult(!j.hidden && et(R, i));
                    continue;
                  }
                  if (!j.hidden && et(R, i)) {
                    let se = Zr(N);
                    se?.unicode && (J(), (P.cachedText += se.text));
                  }
                  continue;
                }
                let Q = Zr(N);
                if (!Q || j.hidden || !et(R, i)) continue;
                let q = ad(v, Q, c);
                P.buffered.push({
                  text: Q.text,
                  props: q.props,
                  style: q.style,
                  start: m,
                  end: m,
                  projected: true,
                  ...(R.length > 0 ? { revisions: R } : {}),
                  ...(g ? { link: g } : {}),
                  fieldAtom: { formField: P.formField },
                });
                continue;
              }
              let W = qo(N);
              if (W.length === 0) continue;
              let Y = yn(R),
                $ = !et(R, i) || (N.kind === "deletedText" && !Y);
              if (
                (P.atomic && !$ && (P.sawResultContent = true),
                Y &&
                  l &&
                  (P.atomic
                    ? sr(l, P.atomStart, P.atomStart + 1)
                    : sr(l, m, m + W.length)),
                $)
              ) {
                (P.atomic && O.active && O.noteResult(false),
                  P.atomic || ((m += W.length), (P.bufferOffset = m)));
                continue;
              }
              if (P.atomic) {
                if (O.active) {
                  if ((O.noteResult(!j.hidden), j.hidden)) continue;
                  J();
                  continue;
                }
                if (j.hidden) continue;
                (J(), (P.cachedText += W));
                continue;
              }
              if (j.hidden) {
                ((m += W.length), (P.bufferOffset = m));
                continue;
              }
              (P.capturedResultStyle ||
                ((P.props = v), (P.style = j), (P.capturedResultStyle = true)),
                P.buffered.push({
                  text: W,
                  props: v,
                  style: j,
                  start: m,
                  end: m + W.length,
                  ...(R.length > 0 ? { revisions: R } : {}),
                  ...(g ? { link: g } : {}),
                  fieldAtom: { formField: P.formField },
                }),
                (m += W.length),
                (P.bufferOffset = m));
              continue;
            }
            (k.has(N.id) && L === null && x.size > 0, ee(N, v, j));
          }
        }
      }
    };
  if (!fn(E)) return f;
  let F = Wa(),
    z = (I, _) => {
      let v = m;
      if (
        ((m += 1),
        I.kind === "textValue" || (yn(R) && l && sr(l, v, v + 1), !et(R, i)))
      )
        return;
      let j = qf({
        simple: I,
        depth: _,
        pageContext: n,
        budget: E,
        revisions: R,
        displayMode: i,
        inheritedRunProperties: t,
        cascadeRuns: r,
        themeFonts: c,
        currentLink: g,
        projectFieldLink: d,
        documentProperties: u,
        bodyPageFields: p,
      });
      j &&
        h(j.text, j.props, j.style, true, v, v + 1, {
          fieldAtom: {
            formField: false,
            ...(j.pageField ? { pageField: j.pageField } : {}),
          },
          ...(j.link ? { linkOverride: j.link } : {}),
        });
    },
    H = (I, _, v, j) => {
      if (ic$1(I)) {
        z(I, _);
        return;
      }
      if (I.kind === "run") {
        C(I, _);
        return;
      }
      if (Lb$1(I)) {
        if (j >= Kb$1 || _ > En) return;
        for (let Y of Ob$1(I)) H(Y, _ + 1, v, j + 1);
        return;
      }
      if (_ > En || _ >= qr) return;
      let J = I.kind !== "textValue" && "localName" in I ? Va$1(v, I) : v;
      if (I.kind === "hyperlink") {
        let Y = g;
        g = o?.(I) ?? void 0;
        for (let $ of I.children) H($, _ + 1, J, j);
        g = Y;
        return;
      }
      if (!Pi(I)) return;
      let N = Si(I);
      if (!N || !fn(E)) return;
      let W = R;
      R = wi(W, N);
      for (let Y of I.children) H(Y, _ + 1, J, j);
      R = W;
    };
  for (let I of e.children) H(I, 1, F, 0);
  return (G(), f);
}
function qx(e) {
  let t = Object.entries(e.attributes ?? {})
    .sort(([n], [r]) => (n < r ? -1 : n > r ? 1 : 0))
    .map(([n, r]) => `${n}=${r}`)
    .join(",");
  return `${e.localName}(${t})`;
}
function Jx(e) {
  return e.map(qx).join(";");
}
var op = new WeakMap(),
  ip = 1 << 18;
function lp(e) {
  if (e.kind === "textValue") return `t:${e.value}`;
  let t = e.kind === "paragraph" || e.kind === "table";
  if (t) {
    let r = op.get(e);
    if (r !== void 0) return r;
  }
  let n = Qx(e);
  return (t && n.length <= ip && op.set(e, n), n);
}
function Qx(e) {
  if (e.kind === "textValue") return `t:${e.value}`;
  let t = [
    `${e.kind}:${"localName" in e ? e.localName : ""}#${"id" in e ? e.id : ""}`,
  ];
  if ("attributes" in e && Array.isArray(e.attributes)) {
    let n = [...e.attributes]
      .map((r) => `${r.namespaceUri ?? ""}:${r.localName}=${r.value}`)
      .sort();
    for (let r of n) t.push(r);
  }
  for (let n of e.children ?? []) t.push(lp(n));
  return `(${t.join("|")})`;
}
var ap = new WeakMap();
function cr(e) {
  let t = Math.round(e.width * 1e3),
    n = e.drawingToken ?? "",
    r = e.exclusionToken ?? "",
    o = Jx(e.properties),
    a = ap.get(e.paragraph);
  if (
    a &&
    a.producer === e.producer &&
    a.width === t &&
    a.drawingToken === n &&
    a.exclusionToken === r &&
    a.propertiesToken === o
  )
    return a.key;
  let i = [e.producer, t, n, r, o, lp(e.paragraph)].join("\0");
  return (
    i.length <= ip &&
      ap.set(e.paragraph, {
        producer: e.producer,
        width: t,
        drawingToken: n,
        exclusionToken: r,
        propertiesToken: o,
        key: i,
      }),
    i
  );
}
function eS(e = {}) {
  let t = Math.max(1, e.maxEntries ?? 4096),
    n = new Map(),
    r = 0,
    o = 0,
    a = 0;
  return {
    get(i) {
      let l = n.get(i);
      if (l === void 0) {
        o += 1;
        return;
      }
      return ((r += 1), n.delete(i), n.set(i, l), l);
    },
    set(i, l) {
      for (n.has(i) && n.delete(i), n.set(i, l); n.size > t;) {
        let s = n.keys().next();
        if (s.done) break;
        (n.delete(s.value), (a += 1));
      }
    },
    retain(i) {
      for (let l of [...n.keys()]) i.has(l) || (n.delete(l), (a += 1));
    },
    clear() {
      n.clear();
    },
    get stats() {
      return { hits: r, misses: o, evictions: a, size: n.size };
    },
  };
}
var sp = 21600;
function je(e) {
  return Number.isFinite(e) ? e : 0;
}
function na(e) {
  if (e.length === 0) return Object.freeze([]);
  let t = [...e].sort((o, a) => o.start - a.start || o.end - a.end),
    n = [],
    r = t[0];
  for (let o = 1; o < t.length; o += 1) {
    let a = t[o];
    a.start <= r.end + 1e-4
      ? (r = Object.freeze({ start: r.start, end: Math.max(r.end, a.end) }))
      : (n.push(r), (r = a));
  }
  return (n.push(r), Object.freeze(n));
}
function tS(e, t) {
  let n = [];
  for (let r of e)
    for (let o of t) {
      let a = Math.max(r.start, o.start),
        i = Math.min(r.end, o.end);
      i > a + 1e-6 && n.push(Object.freeze({ start: a, end: i }));
    }
  return na(n);
}
function dd(e, t, n) {
  let r = [];
  for (let o of e) {
    let a = Math.max(o.start, t),
      i = Math.min(o.end, n);
    i > a + 1e-6 && r.push(Object.freeze({ start: a, end: i }));
  }
  return na(r);
}
function nS(e, t, n) {
  let r = [],
    o = t;
  for (let a of e)
    (a.start > o && r.push(Object.freeze({ start: o, end: a.start })),
      (o = Math.max(o, a.end)));
  return (
    o < n && r.push(Object.freeze({ start: o, end: n })),
    Object.freeze(r)
  );
}
function cp(e, t) {
  return Qr(e, t);
}
function cd(e, t, n) {
  return cp(Qr(e, t), n);
}
function rS(e, t) {
  let n = [],
    r = Math.min(e.length, it);
  if (r < 2) return Object.freeze([]);
  for (let o = 0; o < r; o += 1) {
    let a = e[o],
      i = e[(o + 1) % r],
      l = a.y,
      s = i.y;
    if (l === s) continue;
    let c = Math.min(l, s),
      d = Math.max(l, s);
    if (t < c || t > d || (t === d && s > l) || (t === c && s < l)) continue;
    let u = (t - l) / (s - l),
      p = a.x + u * (i.x - a.x);
    Number.isFinite(p) && n.push({ x: p, delta: s > l ? 1 : -1 });
  }
  return (n.sort((o, a) => o.x - a.x || o.delta - a.delta), Object.freeze(n));
}
function oS(e, t) {
  let n = [],
    r = Math.min(e.length, it);
  for (let o = 0; o < r; o += 1) {
    let a = e[o],
      i = e[(o + 1) % r];
    if (a.y !== i.y || Math.abs(t - a.y) > 1e-6) continue;
    let l = Math.min(a.x, i.x),
      s = Math.max(a.x, i.x);
    s > l && n.push(Object.freeze({ start: l, end: s }));
  }
  return na(n);
}
function dp(e, t, n) {
  let r = aS(rS(e, t), n),
    o = oS(e, t);
  return na([...r, ...o]);
}
function aS(e, t) {
  if (e.length === 0) return Object.freeze([]);
  let n = [];
  if (t === "evenodd") {
    for (let a = 0; a + 1 < e.length; a += 2) {
      let i = e[a].x,
        l = e[a + 1].x;
      l > i && n.push(Object.freeze({ start: i, end: l }));
    }
    return Object.freeze(n);
  }
  let r = 0,
    o = null;
  for (let a of e) {
    let i = r;
    ((r += a.delta),
      i === 0 && r !== 0
        ? (o = a.x)
        : i !== 0 &&
          r === 0 &&
          o !== null &&
          (a.x > o && n.push(Object.freeze({ start: o, end: a.x })),
          (o = null)));
  }
  return Object.freeze(n);
}
function iS(e, t) {
  return Object.freeze({
    top: je(e.top) + je(t.top),
    right: je(e.right) + je(t.right),
    bottom: je(e.bottom) + je(t.bottom),
    left: je(e.left) + je(t.left),
  });
}
function lS(e, t, n, r, o, a) {
  let i = t.x - e.x,
    l = t.y - e.y,
    s = r.x - n.x,
    c = r.y - n.y,
    d = i * c - l * s;
  if (Math.abs(d) < 1e-12) return null;
  let p = ((n.x - e.x) * l - (n.y - e.y) * i) / d,
    f = ((n.x - e.x) * c - (n.y - e.y) * s) / d;
  if (p < -1e-9 || p > 1 + 1e-9 || f < -1e-9 || f > 1 + 1e-9) return null;
  let m = e.y + p * l;
  return !Number.isFinite(m) || m < o - 1e-6 || m > a + 1e-6 ? null : m;
}
function sS(e, t, n, r) {
  let o = [],
    a = Math.min(e.length, it),
    i = Math.min(t.length, it);
  if (a < 2 || i < 2) return Object.freeze([]);
  let l = it * it,
    s = 0;
  for (let c = 0; c < a; c += 1) {
    let d = e[c],
      u = e[(c + 1) % a];
    for (let p = 0; p < i; p += 1) {
      if (s >= l) return Object.freeze(o);
      s += 1;
      let f = t[p],
        m = t[(p + 1) % i],
        g = lS(d, u, f, m, n, r);
      g !== null && o.push(g);
    }
  }
  return Object.freeze(o);
}
function dS(e, t, n) {
  let r = new Set();
  (r.add(t), r.add(n));
  for (let o of e) {
    let a = Math.min(o.length, it);
    for (let i = 0; i < a; i += 1) {
      let l = o[i].y;
      Number.isFinite(l) && l >= t - 1e-6 && l <= n + 1e-6 && r.add(l);
    }
    for (let i = 0; i < a; i += 1) {
      let l = o[i],
        s = o[(i + 1) % a],
        c = l.y,
        d = s.y;
      if (c !== d)
        for (let u of [t, n]) {
          let p = Math.min(c, d),
            f = Math.max(c, d);
          u >= p && u <= f && r.add(u);
        }
    }
  }
  if (e.length >= 2) for (let o of sS(e[0], e[1], t, n)) r.add(o);
  return Object.freeze([...r].sort((o, a) => o - a));
}
function cS(e, t, n, r) {
  let o = dp(e, n, r);
  return (t && t.length >= 3 && (o = tS(o, dp(t, n, "nonzero"))), o);
}
function up(e, t, n, r, o = null) {
  let a = je(n.top),
    i = je(n.bottom),
    l = je(n.left),
    s = je(n.right),
    c = t - i,
    d = t + a,
    u = dS(o && o.length >= 3 ? [e, o] : [e], c, d),
    p = [],
    f =
      u.length >= 2
        ? u.flatMap((m, g) => {
            if (g + 1 >= u.length) return [];
            let y = u[g + 1];
            return y <= m + 1e-6 ? [m] : [m, y, (m + y) / 2];
          })
        : [c];
  for (let m of f) {
    let g = cS(e, o, m, r);
    for (let y of g)
      p.push(Object.freeze({ start: y.start - l, end: y.end + s }));
  }
  return na(p);
}
function fp(e) {
  let { x: t, y: n, width: r, height: o } = e;
  return Object.freeze([
    Object.freeze({ x: t, y: n }),
    Object.freeze({ x: t + r, y: n }),
    Object.freeze({ x: t + r, y: n + o }),
    Object.freeze({ x: t, y: n + o }),
  ]);
}
function uS(e) {
  let t = Math.max(0, je(e.extentWidthPt)),
    n = Math.max(0, je(e.extentHeightPt)),
    r = Ti(e.transform, t, n),
    o = Math.min(e.polygonEmu.length, it);
  if (o < 3) return fp({ x: e.anchorX, y: e.anchorY, width: t, height: n });
  let a = r.width / sp,
    i = r.height / sp,
    l = [];
  for (let s = 0; s < o; s += 1) {
    let c = e.polygonEmu[s];
    l.push(Object.freeze({ x: je(c.x) * a, y: je(c.y) * i }));
  }
  return Oi({
    points: Object.freeze(l),
    sourceWidth: r.width,
    sourceHeight: r.height,
    offsetX: r.offsetX,
    offsetY: r.offsetY,
    crop: { left: 0, top: 0, right: 0, bottom: 0 },
    transform: e.transform,
    layoutWidth: t,
    layoutHeight: n,
    anchorX: e.anchorX,
    anchorY: e.anchorY,
  });
}
function fS(e, t) {
  let n = t.effectInsets ?? vi,
    r = t.wrapDistances ?? vi,
    o = je(t.contentLeft),
    a = je(t.contentRight);
  if (t.mode === "topAndBottom") {
    let d = cp(Qr(t.contentBounds, n), r);
    return e < d.y || e >= d.y + d.height
      ? Object.freeze([])
      : dd([{ start: o, end: a }], o, a);
  }
  if (t.mode === "square") {
    let d = cd(t.contentBounds, n, r);
    return e < d.y || e >= d.y + d.height
      ? Object.freeze([])
      : dd([{ start: d.x, end: d.x + d.width }], o, a);
  }
  let i = t.polygon && t.polygon.length >= 3 ? t.polygon : fp(t.contentBounds),
    l = t.mode === "through" ? "evenodd" : "nonzero",
    s = iS(r, n),
    c = up(i, e, s, l, t.clipPolygon);
  return dd(c, o, a);
}
function pS(e) {
  return e.length === 0
    ? null
    : Object.freeze({
        start: Math.min(...e.map((t) => t.start)),
        end: Math.max(...e.map((t) => t.end)),
      });
}
function mS(e, t, n, r, o) {
  if (n === "bothSides" || t.length === 0) return e;
  let a = pS(t);
  if (!a) return e;
  if (n === "left")
    return Object.freeze(e.filter((s) => s.end <= a.start + 1e-4));
  if (n === "right")
    return Object.freeze(e.filter((s) => s.start >= a.end - 1e-4));
  let i = Math.max(0, a.start - r),
    l = Math.max(0, o - a.end);
  return i === l
    ? Object.freeze(e.filter((s) => s.start >= a.end - 1e-4))
    : i > l
      ? Object.freeze(e.filter((s) => s.end <= a.start + 1e-4))
      : Object.freeze(e.filter((s) => s.start >= a.end - 1e-4));
}
function pp(e, t) {
  let n = fS(e, t),
    r = nS(n, t.contentLeft, t.contentRight);
  return mS(r, n, t.textSide, t.contentLeft, t.contentRight);
}
function gS(e, t, n, r) {
  return n.length < 3
    ? false
    : up(n, t, r, "nonzero").some(
        (a) => e >= a.start - 1e-6 && e <= a.end + 1e-6,
      );
}
function ud(e, t, n) {
  let r = n.effectInsets ?? vi,
    o = n.hitBounds;
  if (e < o.x || e > o.x + o.width || t < o.y || t > o.y + o.height)
    return false;
  if (n.clipPolygon && n.clipPolygon.length >= 3)
    return gS(e, t, n.clipPolygon, r);
  let a = Qr(n.contentBounds, r);
  return e >= a.x && e <= a.x + a.width && t >= a.y && t <= a.y + a.height;
}
function mp(e) {
  let t = Object.freeze({
      top: je(e.wrapDistancesEmu.top / Qt),
      right: je(e.wrapDistancesEmu.right / Qt),
      bottom: je(e.wrapDistancesEmu.bottom / Qt),
      left: je(e.wrapDistancesEmu.left / Qt),
    }),
    n =
      e.mode === "tight" || e.mode === "through"
        ? uS({
            polygonEmu: e.polygonEmu,
            extentWidthPt: e.extentWidthPt,
            extentHeightPt: e.extentHeightPt,
            anchorX: e.contentBounds.x,
            anchorY: e.contentBounds.y,
            transform: e.transform,
          })
        : null;
  return Object.freeze({
    mode: e.mode,
    contentBounds: e.contentBounds,
    polygon: n,
    clipPolygon: e.geometry.clipPolygon,
    wrapDistances: t,
    effectInsets: e.geometry.effectInsets,
    textSide: e.textSide,
    contentLeft: e.contentLeft,
    contentRight: e.contentRight,
  });
}
var It = 1e5,
  it = E.maxPolygonPoints,
  vi = Object.freeze({ top: 0, right: 0, bottom: 0, left: 0 }),
  hS = 32,
  yS = 0.1,
  bS = new Set(["rect", "ellipse", "roundRect"]);
function ue(e) {
  return Number.isFinite(e) ? e : 0;
}
function Bt(e, t, n) {
  return Number.isFinite(e) ? Math.min(n, Math.max(t, e)) : t;
}
function gp(e, t) {
  let n = e + t;
  return Number.isFinite(n) ? n : 0;
}
function hp(e, t, n) {
  let r = Bt(e, 0, n),
    o = Bt(t, 0, n);
  if (r <= 0 || o <= 0) return { left: r, right: o };
  let a = r + o;
  if (a >= n) {
    let i = (n - 1) / a;
    ((r *= i), (o *= i));
  }
  return { left: r, right: o };
}
function xS(e) {
  let t = hp(Bt(e.left, 0, It), Bt(e.right, 0, It), It),
    n = hp(Bt(e.top, 0, It), Bt(e.bottom, 0, It), It);
  return Object.freeze({
    left: t.left,
    top: n.left,
    right: t.right,
    bottom: n.right,
  });
}
function SS(e) {
  let t = xS({
    left: e.left * It,
    top: e.top * It,
    right: e.right * It,
    bottom: e.bottom * It,
  });
  return Object.freeze({
    left: t.left / It,
    top: t.top / It,
    right: t.right / It,
    bottom: t.bottom / It,
  });
}
function wS(e) {
  let t = (n) => {
    if (!Number.isFinite(n)) return 0;
    let r = n / Qt;
    return !Number.isFinite(r) || Math.abs(r) > 72e4 ? 0 : r;
  };
  return Object.freeze({
    top: t(e.top),
    right: t(e.right),
    bottom: t(e.bottom),
    left: t(e.left),
  });
}
function Qr(e, t) {
  let n = ue(t.left),
    r = ue(t.right),
    o = ue(t.top),
    a = ue(t.bottom);
  return Object.freeze({
    x: e.x - n,
    y: e.y - o,
    width: Math.max(0, gp(e.width, n + r)),
    height: Math.max(0, gp(e.height, o + a)),
  });
}
function PS(e, t, n) {
  let r = e * Bt(n.left, 0, 1),
    o = t * Bt(n.top, 0, 1),
    a = e * (1 - Bt(n.right, 0, 1)),
    i = t * (1 - Bt(n.bottom, 0, 1));
  if (a <= r || i <= o) {
    let l = e / 2,
      s = t / 2;
    return Object.freeze({ left: l, top: s, right: l, bottom: s });
  }
  return Object.freeze({ left: r, top: o, right: a, bottom: i });
}
function Ti(e, t, n) {
  let r = e.extentEmu?.cx ?? 0,
    o = e.extentEmu?.cy ?? 0,
    a = e.offsetEmu ?? { x: 0, y: 0 },
    i = r > 0 ? ue(jn(r) ?? t) : Math.max(0, ue(t)),
    l = o > 0 ? ue(jn(o) ?? n) : Math.max(0, ue(n));
  return Object.freeze({
    offsetX: ue(jn(a.x) ?? 0),
    offsetY: ue(jn(a.y) ?? 0),
    width: i,
    height: l,
  });
}
function RS(e, t, n, r) {
  let o = PS(t, n, r),
    a = o.right - o.left,
    i = o.bottom - o.top,
    l = t > 0 ? t : 1,
    s = n > 0 ? n : 1,
    c = [],
    d = Math.min(e.length, it);
  for (let u = 0; u < d; u += 1) {
    let p = e[u],
      f = a <= 0 ? o.left : o.left + Bt(p.x / l, 0, 1) * a,
      m = i <= 0 ? o.top : o.top + Bt(p.y / s, 0, 1) * i;
    c.push(Object.freeze({ x: ue(f), y: ue(m) }));
  }
  return Object.freeze(c);
}
function yp(e, t, n) {
  let r = e.x - t.x,
    o = e.y - t.y;
  (n.flipHorizontal && (r = -r), n.flipVertical && (o = -o));
  let a = (ue(n.rotationDegrees) * Math.PI) / 180,
    i = Math.cos(a),
    l = Math.sin(a),
    s = r * i - o * l,
    c = r * l + o * i;
  return Object.freeze({ x: ue(s + t.x), y: ue(c + t.y) });
}
function bp(e) {
  if (e.length === 0) return Object.freeze({ x: 0, y: 0, width: 0, height: 0 });
  let t = e[0].x,
    n = e[0].x,
    r = e[0].y,
    o = e[0].y,
    a = Math.min(e.length, it);
  for (let i = 1; i < a; i += 1) {
    let l = e[i];
    !Number.isFinite(l.x) ||
      !Number.isFinite(l.y) ||
      ((t = Math.min(t, l.x)),
      (n = Math.max(n, l.x)),
      (r = Math.min(r, l.y)),
      (o = Math.max(o, l.y)));
  }
  return Object.freeze({
    x: t,
    y: r,
    width: Math.max(0, n - t),
    height: Math.max(0, o - r),
  });
}
function fd(e) {
  let t = Object.freeze({
      x: e.offsetX + e.sourceWidth / 2,
      y: e.offsetY + e.sourceHeight / 2,
    }),
    n = ra(0, 0, e.sourceWidth, e.sourceHeight),
    r = [];
  for (let l of n)
    r.push(
      yp(
        Object.freeze({ x: l.x + e.offsetX, y: l.y + e.offsetY }),
        t,
        e.transform,
      ),
    );
  let o = bp(r),
    a = Math.max(o.width, 1e-6),
    i = Math.max(o.height, 1e-6);
  return Object.freeze({
    bboxX: o.x,
    bboxY: o.y,
    scaleX: Math.max(0, ue(e.layoutWidth)) / a,
    scaleY: Math.max(0, ue(e.layoutHeight)) / i,
    anchorX: ue(e.anchorX),
    anchorY: ue(e.anchorY),
  });
}
function IS(e, t) {
  return Object.freeze({
    x: ue(t.anchorX + (e.x - t.bboxX) * t.scaleX),
    y: ue(t.anchorY + (e.y - t.bboxY) * t.scaleY),
  });
}
function Oi(e) {
  let t =
      e.mapping ??
      fd({
        sourceWidth: e.sourceWidth,
        sourceHeight: e.sourceHeight,
        offsetX: e.offsetX,
        offsetY: e.offsetY,
        transform: e.transform,
        layoutWidth: e.layoutWidth,
        layoutHeight: e.layoutHeight,
        anchorX: e.anchorX,
        anchorY: e.anchorY,
      }),
    n = RS(e.points, e.sourceWidth, e.sourceHeight, e.crop),
    r = Math.min(n.length > 0 ? n.length : e.points.length, it),
    o = n.length > 0 ? n : e.points.slice(0, r),
    a = Object.freeze({
      x: e.offsetX + e.sourceWidth / 2,
      y: e.offsetY + e.sourceHeight / 2,
    }),
    i = [];
  for (let l = 0; l < r; l += 1) {
    let s = o[l],
      c = Object.freeze({ x: ue(s.x + e.offsetX), y: ue(s.y + e.offsetY) });
    i.push(IS(yp(c, a, e.transform), t));
  }
  return Object.freeze(i);
}
function ra(e, t, n, r) {
  if (n <= 0 || r <= 0) {
    let o = Object.freeze({ x: e, y: t });
    return Object.freeze([o, o, o, o]);
  }
  return Object.freeze([
    Object.freeze({ x: e, y: t }),
    Object.freeze({ x: e + n, y: t }),
    Object.freeze({ x: e + n, y: t + r }),
    Object.freeze({ x: e, y: t + r }),
  ]);
}
function vS(e, t, n) {
  if (!e || !bS.has(e)) return null;
  if (t <= 0 || n <= 0) return ra(0, 0, Math.max(0, t), Math.max(0, n));
  if (e === "rect") return ra(0, 0, t, n);
  if (e === "ellipse") {
    let l = [],
      s = t / 2,
      c = n / 2,
      d = t / 2,
      u = n / 2,
      p = Math.min(hS, it);
    for (let f = 0; f < p; f += 1) {
      let m = (f / p) * Math.PI * 2;
      l.push(Object.freeze({ x: s + d * Math.cos(m), y: c + u * Math.sin(m) }));
    }
    return Object.freeze(l);
  }
  let r = Math.min(t, n) * yS,
    o = Math.max(0, r),
    a = t,
    i = n;
  return Object.freeze([
    Object.freeze({ x: o, y: 0 }),
    Object.freeze({ x: a - o, y: 0 }),
    Object.freeze({ x: a, y: o }),
    Object.freeze({ x: a, y: i - o }),
    Object.freeze({ x: a - o, y: i }),
    Object.freeze({ x: o, y: i }),
    Object.freeze({ x: 0, y: i - o }),
    Object.freeze({ x: 0, y: o }),
  ]);
}
function to(e) {
  return Object.freeze({ x: ue(e.x), y: ue(e.y) });
}
function TS(e, t) {
  if (e.length === 0) return Object.freeze([]);
  let n = t.x + t.width,
    r = t.y + t.height,
    o = (i, l, s) => {
      if (i.length === 0) return Object.freeze([]);
      let c = [],
        d = Math.min(i.length, it);
      for (let u = 0; u < d; u += 1) {
        let p = to(i[u]),
          f = to(i[(u + 1) % d]),
          m = l(p),
          g = l(f);
        if (
          (m && g
            ? c.push(f)
            : m && !g
              ? c.push(to(s(p, f)))
              : !m && g && (c.push(to(s(p, f))), c.push(f)),
          c.length >= it)
        )
          break;
      }
      return Object.freeze(c.slice(0, it));
    },
    a = e.slice(0, it).map(to);
  return (
    (a = [
      ...o(
        a,
        (i) => i.x >= t.x,
        (i, l) => {
          let s = l.x - i.x,
            c = Math.abs(s) > 1e-6 ? (t.x - i.x) / s : 0;
          return Object.freeze({ x: t.x, y: ue(i.y + c * (l.y - i.y)) });
        },
      ),
    ]),
    (a = [
      ...o(
        a,
        (i) => i.x <= n,
        (i, l) => {
          let s = l.x - i.x,
            c = Math.abs(s) > 1e-6 ? (n - i.x) / s : 0;
          return Object.freeze({ x: n, y: ue(i.y + c * (l.y - i.y)) });
        },
      ),
    ]),
    (a = [
      ...o(
        a,
        (i) => i.y >= t.y,
        (i, l) => {
          let s = l.y - i.y,
            c = Math.abs(s) > 1e-6 ? (t.y - i.y) / s : 0;
          return Object.freeze({ x: ue(i.x + c * (l.x - i.x)), y: t.y });
        },
      ),
    ]),
    (a = [
      ...o(
        a,
        (i) => i.y <= r,
        (i, l) => {
          let s = l.y - i.y,
            c = Math.abs(s) > 1e-6 ? (r - i.y) / s : 0;
          return Object.freeze({ x: ue(i.x + c * (l.x - i.x)), y: r });
        },
      ),
    ]),
    Object.freeze(a)
  );
}
function OS(e) {
  let t = bp(e);
  return Object.freeze({ x: t.x, y: t.y, width: t.width, height: t.height });
}
function ki(e, t) {
  let n = kS(e.paintBounds, t),
    r = n.width > 0 && n.height > 0 ? n : Object.freeze({ ...n }),
    o = (a) => {
      if (!a || a.length === 0) return a;
      let i = TS(a, t);
      return i.length >= 3 ? Object.freeze(i.map(to)) : Object.freeze([]);
    };
  return Object.freeze({
    ...e,
    paintBounds: n,
    hitBounds: r,
    transformedCorners: Object.freeze(
      o(e.transformedCorners) ?? e.transformedCorners,
    ),
    clipPolygon: o(e.clipPolygon),
  });
}
function kS(e, t) {
  let n = Math.max(e.x, t.x),
    r = Math.max(e.y, t.y),
    o = Math.min(e.x + e.width, t.x + t.width),
    a = Math.min(e.y + e.height, t.y + t.height);
  return o <= n || a <= r
    ? Object.freeze({ x: n, y: r, width: 0, height: 0 })
    : Object.freeze({ x: n, y: r, width: o - n, height: a - r });
}
function CS(e) {
  let t = Math.max(0, ue(e.extentWidth)),
    n = Math.max(0, ue(e.extentHeight)),
    r = ue(e.anchorX),
    o = ue(e.anchorY),
    a = SS(e.crop),
    i = wS(e.effectExtentEmu),
    l = Ti(e.transform, t, n),
    s = Object.freeze({ x: r, y: o, width: t, height: n }),
    c = {
      sourceWidth: l.width,
      sourceHeight: l.height,
      offsetX: l.offsetX,
      offsetY: l.offsetY,
      crop: a,
      transform: e.transform,
      layoutWidth: t,
      layoutHeight: n,
      anchorX: r,
      anchorY: o,
    },
    d = fd(c),
    u = Object.freeze({ left: 0, top: 0, right: 0, bottom: 0 }),
    p = Oi({ points: ra(0, 0, l.width, l.height), ...c, crop: u, mapping: d }),
    f = vS(e.presetGeometry, l.width, l.height),
    m = "none",
    g = f;
  g ||
    ((m = e.presetGeometry ? "unsupported-preset" : "none"),
    (g = ra(0, 0, l.width, l.height)));
  let y = Oi({ points: g, ...c, crop: u, mapping: d }),
    b = OS(y.length >= 3 ? y : p),
    x = Qr(b, i);
  return Object.freeze({
    contentBounds: s,
    paintBounds: x,
    hitBounds: x,
    transformedCorners: p,
    clipPolygon: y.length >= 3 ? y : p,
    clipFallback: m,
    effectInsets: i,
  });
}
function no(e) {
  let t = e.projection.picture,
    n = Object.freeze({
      rotationDegrees: 0,
      flipHorizontal: false,
      flipVertical: false,
      offsetEmu: Object.freeze({ x: 0, y: 0 }),
      extentEmu: Object.freeze({ cx: 0, cy: 0 }),
    });
  return CS({
    extentWidth: e.extentWidth,
    extentHeight: e.extentHeight,
    anchorX: e.anchorX,
    anchorY: e.anchorY,
    effectExtentEmu: e.projection.effectExtentEmu,
    crop: t?.crop ?? { left: 0, top: 0, right: 0, bottom: 0 },
    transform: t?.transform ?? n,
    presetGeometry: t?.presetGeometry ?? null,
  });
}
function BS(e) {
  let { transform: t, contentWidth: n, contentHeight: r } = e;
  if (n <= 0 || r <= 0) return null;
  let o = Ti(t, n, r),
    a = o.width,
    i = o.height,
    l = fd({
      sourceWidth: a,
      sourceHeight: i,
      offsetX: o.offsetX,
      offsetY: o.offsetY,
      transform: t,
      layoutWidth: n,
      layoutHeight: r,
      anchorX: 0,
      anchorY: 0,
    }),
    s = ue(t.rotationDegrees),
    c = Math.abs(s % 360) > 1e-4,
    d = t.flipHorizontal ? -1 : 1,
    u = t.flipVertical ? -1 : 1,
    p = l.scaleX,
    f = l.scaleY,
    m = a > 0 ? a / n : 1,
    g = i > 0 ? i / r : 1;
  if (
    !c &&
    d === 1 &&
    u === 1 &&
    Math.abs(p - 1) < 1e-4 &&
    Math.abs(f - 1) < 1e-4 &&
    Math.abs(o.offsetX) < 1e-4 &&
    Math.abs(o.offsetY) < 1e-4 &&
    Math.abs(m - 1) < 1e-4 &&
    Math.abs(g - 1) < 1e-4
  )
    return null;
  let b = (s * Math.PI) / 180,
    x = Math.cos(b),
    T = Math.sin(b),
    k = o.offsetX + a / 2,
    M = o.offsetY + i / 2,
    E = p * x * d,
    P = -p * T * u,
    L = f * T * d,
    O = f * x * u,
    R = p * (k - x * d * (a / 2) + T * u * (i / 2) - l.bboxX),
    h = f * (M - T * d * (a / 2) - x * u * (i / 2) - l.bboxY);
  return Object.freeze({
    a: ue(E * m),
    b: ue(L * m),
    c: ue(P * g),
    d: ue(O * g),
    e: ue(R),
    f: ue(h),
  });
}
function Xv(e) {
  let t = BS(e);
  if (t)
    return `matrix(${eo(t.a)}, ${eo(t.b)}, ${eo(t.c)}, ${eo(t.d)}, ${eo(t.e)}, ${eo(t.f)})`;
}
function eo(e) {
  return Number.isFinite(e) ? String(e) : "0";
}
var LS = Object.freeze({
    "http://schemas.openxmlformats.org/drawingml/2006/chart": "chart",
    "http://schemas.openxmlformats.org/drawingml/2006/diagram": "diagram",
    "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup":
      "group",
    "http://schemas.microsoft.com/office/word/2010/wordprocessingShape":
      "textbox",
    "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas":
      "canvas",
  }),
  FS = Object.freeze({
    rotationDegrees: 0,
    flipHorizontal: false,
    flipVertical: false,
    offsetEmu: Object.freeze({ x: 0, y: 0 }),
    extentEmu: Object.freeze({ cx: 0, cy: 0 }),
  }),
  MS = Object.freeze({ left: 0, top: 0, right: 0, bottom: 0 });
function wp(e) {
  let t = e.picture,
    n = null;
  if (!t) {
    for (let r of e.diagnostics) {
      if (r.code !== "unsupported-graphic") continue;
      let o = r.detail ?? "";
      n = LS[o] ?? "graphic";
      break;
    }
    n === null && (n = "graphic");
  }
  return Object.freeze({
    hyperlinkHref: e.hyperlinkHref,
    effects: e.effects,
    crop: t?.crop ?? MS,
    transform: t?.transform ?? FS,
    placeholderGraphicKind: t ? null : n,
    vectorShape: e.vectorShape,
  });
}
var Qt = 12700;
function tt(e) {
  return e / Qt;
}
function jn(e) {
  if (!Number.isFinite(e) || Math.abs(e) > 1e4 * Qt * 72) return null;
  let t = e / Qt;
  return Number.isFinite(t) ? t : null;
}
function bn(e) {
  let t = tt(e.inlineDistancesEmu.left),
    n = tt(e.inlineDistancesEmu.right),
    r = tt(e.inlineDistancesEmu.top),
    o = tt(e.inlineDistancesEmu.bottom),
    a = tt(e.effectExtentEmu.left),
    i = tt(e.effectExtentEmu.right),
    l = tt(e.effectExtentEmu.top),
    s = tt(e.effectExtentEmu.bottom),
    c = tt(e.extentEmu.cx),
    d = tt(e.extentEmu.cy);
  return Object.freeze({
    distL: t,
    distR: n,
    distT: r,
    distB: o,
    effectL: a,
    effectR: i,
    effectT: l,
    effectB: s,
    width: c,
    height: d,
    totalWidth: t + a + c + i + n,
    lineContribution: r + l + d + s + o,
  });
}
function Pp(e, t, n) {
  let r = Math.max(n.distT + n.effectT, e - n.height),
    o = Math.max(t, r - n.effectT + n.height + n.effectB + n.distB),
    a = r + n.height + n.effectB;
  return Object.freeze({
    extentTopY: r,
    lineHeight: o,
    baseline: Math.max(e, a),
  });
}
function Ci(e, t, n) {
  if (Math.abs(t) < 1e-4 && Math.abs(n) < 1e-4) return e;
  let r = (a) => Object.freeze({ ...a, x: a.x + t, y: a.y + n }),
    o = (a) => Object.freeze({ x: a.x + t, y: a.y + n });
  return Object.freeze({
    ...e,
    contentBounds: r(e.contentBounds),
    paintBounds: r(e.paintBounds),
    hitBounds: r(e.hitBounds),
    transformedCorners: Object.freeze(e.transformedCorners.map(o)),
    clipPolygon: e.clipPolygon ? Object.freeze(e.clipPolygon.map(o)) : null,
  });
}
function Bi(e, t, n) {
  return Math.abs(t) < 1e-4 && Math.abs(n) < 1e-4
    ? e
    : Object.freeze({
        ...e,
        x: e.x + t,
        y: e.y + n,
        advanceStart: e.advanceStart + t,
        advanceEnd: e.advanceEnd + t,
        paintBounds: Object.freeze({
          ...e.paintBounds,
          x: e.paintBounds.x + t,
          y: e.paintBounds.y + n,
        }),
        hitBounds: Object.freeze({
          ...e.hitBounds,
          x: e.hitBounds.x + t,
          y: e.hitBounds.y + n,
        }),
        geometry: Ci(e.geometry, t, n),
      });
}
function pd(e, t) {
  return e.length === 0
    ? e
    : e.map((n) => {
        let r = n.geometry.effectInsets.bottom,
          o = t - n.height - r,
          a = o - n.y;
        return Math.abs(a) < 1e-4 && n.baselineOffset === t
          ? n
          : Object.freeze({
              ...n,
              y: o,
              baselineOffset: t,
              geometry: Ci(n.geometry, 0, a),
              paintBounds: Object.freeze({
                ...n.paintBounds,
                y: n.paintBounds.y + a,
              }),
              hitBounds: Object.freeze({
                ...n.hitBounds,
                y: n.hitBounds.y + a,
              }),
            });
      });
}
function md(e, t) {
  let n = Math.max(e.x, t.x),
    r = Math.max(e.y, t.y),
    o = Math.min(e.x + e.width, t.x + t.width),
    a = Math.min(e.y + e.height, t.y + t.height);
  return o <= n || a <= r
    ? Object.freeze({ x: n, y: r, width: 0, height: 0 })
    : Object.freeze({ x: n, y: r, width: o - n, height: a - r });
}
function Li(e, t) {
  let n = md(e.paintBounds, t),
    r = n.width > 0 && n.height > 0 ? n : Object.freeze({ ...n }),
    o = e.x - e.geometry.contentBounds.x,
    a = e.y - e.geometry.contentBounds.y,
    i = Ci(e.geometry, o, a);
  return Object.freeze({
    ...e,
    paintBounds: n,
    hitBounds: r,
    geometry: ki(i, t),
  });
}
var xp = new Set([
    "character",
    "column",
    "insideMargin",
    "leftMargin",
    "margin",
    "outsideMargin",
    "page",
    "rightMargin",
  ]),
  Sp = new Set([
    "bottomMargin",
    "insideMargin",
    "line",
    "margin",
    "outsideMargin",
    "page",
    "paragraph",
    "topMargin",
  ]);
function en(e) {
  return e % 2 === 1;
}
function Rp(e, t) {
  return !(
    !t.layoutInCell ||
    t.cellBox === null ||
    !Number.isFinite(t.cellBox.height) ||
    t.cellBox.height <= 0 ||
    !Number.isFinite(t.cellBox.width) ||
    t.cellBox.width <= 0
  );
}
function Ip(e, t) {
  if (Rp(e, t)) {
    let s = t.cellBox;
    if (!s) return null;
    let { x: c, width: d } = s;
    switch (e) {
      case "page":
      case "column":
      case "margin":
      case "leftMargin":
        return { left: c, right: c + d, center: c + d / 2 };
      case "rightMargin":
        return { left: c, right: c + d, center: c + d / 2 };
      case "character":
        return {
          left: t.anchorCharacterX,
          right: t.anchorCharacterX,
          center: t.anchorCharacterX,
        };
      case "insideMargin":
        return en(t.pageNumber)
          ? { left: c, right: c + d, center: c + d / 2 }
          : { left: c + d, right: c + d, center: c + d };
      case "outsideMargin":
        return en(t.pageNumber)
          ? { left: c + d, right: c + d, center: c + d }
          : { left: c, right: c + d, center: c + d / 2 };
      default:
        return null;
    }
  }
  let n = -t.marginLeft,
    r = t.contentWidth + t.marginRight,
    o = 0,
    a = t.contentWidth,
    i = t.columnBox.x,
    l = t.columnBox.x + t.columnBox.width;
  switch (e) {
    case "page":
      return { left: n, right: r, center: (n + r) / 2 };
    case "margin":
      return { left: o, right: a, center: o + t.contentWidth / 2 };
    case "column":
      return { left: i, right: l, center: i + t.columnBox.width / 2 };
    case "character":
      return {
        left: t.anchorCharacterX,
        right: t.anchorCharacterX,
        center: t.anchorCharacterX,
      };
    case "leftMargin":
      return { left: n, right: n, center: n };
    case "rightMargin":
      return { left: r, right: r, center: r };
    case "insideMargin":
      return en(t.pageNumber)
        ? { left: o, right: o, center: o }
        : { left: a, right: a, center: a };
    case "outsideMargin":
      return en(t.pageNumber)
        ? { left: r, right: r, center: r }
        : { left: n, right: n, center: n };
    default:
      return null;
  }
}
function vp(e, t) {
  if (Rp(e, t)) {
    let s = t.cellBox;
    if (!s) return null;
    let { y: c, height: d } = s;
    switch (e) {
      case "page":
      case "margin":
      case "topMargin":
      case "bottomMargin":
        return { top: c, bottom: c + d, center: c + d / 2 };
      case "paragraph":
        return {
          top: t.paragraphBox.y,
          bottom: t.paragraphBox.y + t.paragraphBox.height,
          center: t.paragraphBox.y + t.paragraphBox.height / 2,
        };
      case "line":
        return {
          top: t.anchorLineBox.y,
          bottom: t.anchorLineBox.y + t.anchorLineBox.height,
          center: t.anchorLineBox.y + t.anchorLineBox.height / 2,
        };
      case "insideMargin":
        return en(t.pageNumber)
          ? { top: c, bottom: c + d, center: c + d / 2 }
          : { top: c + d, bottom: c + d, center: c + d };
      case "outsideMargin":
        return en(t.pageNumber)
          ? { top: c + d, bottom: c + d, center: c + d }
          : { top: c, bottom: c + d, center: c + d / 2 };
      default:
        return null;
    }
  }
  let n = -t.contentInsetTop,
    r = t.contentBandHeight,
    o = n + t.pageHeight - t.marginBottom,
    a = r + t.contentInsetBottom,
    i = 0,
    l = t.contentHeight;
  switch (e) {
    case "page":
      return { top: n, bottom: a, center: (n + a) / 2 };
    case "margin":
      return { top: i, bottom: l, center: i + t.contentHeight / 2 };
    case "paragraph":
      return {
        top: t.paragraphBox.y,
        bottom: t.paragraphBox.y + t.paragraphBox.height,
        center: t.paragraphBox.y + t.paragraphBox.height / 2,
      };
    case "line":
      return {
        top: t.anchorLineBox.y,
        bottom: t.anchorLineBox.y + t.anchorLineBox.height,
        center: t.anchorLineBox.y + t.anchorLineBox.height / 2,
      };
    case "topMargin":
      return { top: n, bottom: n, center: n };
    case "bottomMargin":
      return { top: o, bottom: o, center: o };
    case "insideMargin":
      return en(t.pageNumber)
        ? { top: i, bottom: i, center: i }
        : { top: l, bottom: l, center: l };
    case "outsideMargin":
      return en(t.pageNumber)
        ? { top: a, bottom: a, center: a }
        : { top: n, bottom: n, center: n };
    default:
      return null;
  }
}
function Tp(e) {
  return e === null ? 0 : jn(e);
}
function ES(e, t, n) {
  let r = en(n.pageNumber);
  if (
    n.layoutInCell &&
    n.cellBox &&
    Number.isFinite(n.cellBox.width) &&
    n.cellBox.width > 0
  ) {
    let { x: o, width: a } = n.cellBox;
    return e === "inside"
      ? r
        ? o
        : o + a - t
      : e === "outside"
        ? r
          ? o + a - t
          : o
        : null;
  }
  return e === "inside"
    ? r
      ? 0
      : n.contentWidth - t
    : e === "outside"
      ? r
        ? n.contentWidth - t
        : 0
      : null;
}
function NS(e, t, n) {
  let r = en(n.pageNumber),
    o = n.contentBandHeight;
  if (
    n.layoutInCell &&
    n.cellBox &&
    Number.isFinite(n.cellBox.height) &&
    n.cellBox.height > 0
  ) {
    let { y: a, height: i } = n.cellBox;
    return e === "inside"
      ? r
        ? a
        : a + i - t
      : e === "outside"
        ? r
          ? a + i - t
          : a
        : null;
  }
  return e === "inside"
    ? r
      ? 0
      : o - t
    : e === "outside"
      ? r
        ? o - t
        : 0
      : null;
}
function AS(e, t, n, r, o) {
  let a = Ip(e, o);
  if (!a) return null;
  let i = Tp(n);
  if (i === null) return null;
  if (t === "left") return a.left + i;
  if (t === "center") return a.center - r / 2 + i;
  if (t === "right") return a.right - r + i;
  if (t === "inside" || t === "outside") {
    let l = ES(t, r, o);
    if (l !== null) return l + i;
  }
  return a.left + i;
}
function DS(e, t, n, r, o) {
  let a = vp(e, o);
  if (!a) return null;
  let i = Tp(n);
  if (i === null) return null;
  if (t === "top") return a.top + i;
  if (t === "center") return a.center - r / 2 + i;
  if (t === "bottom") return a.bottom - r + i;
  if (t === "inside" || t === "outside") {
    let l = NS(t, r, o);
    if (l !== null) return l + i;
  }
  return a.top + i;
}
function oa(e) {
  let t = e.contentBandHeight;
  return Object.freeze({
    x: -e.marginLeft,
    y: -e.contentInsetTop,
    width: e.pageWidth,
    height: t + e.contentInsetTop + e.contentInsetBottom,
  });
}
function gd(e, t) {
  let n = bn(e),
    r = e.position,
    o = e.anchor,
    a = "page",
    i = "page";
  if (!r || !o)
    return Object.freeze({
      x: 0,
      y: 0,
      horizontalFrame: a,
      verticalFrame: i,
      horizontalFrameOrigin: 0,
      verticalFrameOrigin: 0,
      layoutFallback: "unresolvable-frame",
    });
  if (o.simplePos) {
    let g = jn(r.simplePosition.xEmu),
      y = jn(r.simplePosition.yEmu);
    return Object.freeze(
      g === null || y === null
        ? {
            x: 0,
            y: 0,
            horizontalFrame: r.horizontal.relativeFrom,
            verticalFrame: r.vertical.relativeFrom,
            horizontalFrameOrigin: 0,
            verticalFrameOrigin: 0,
            layoutFallback: "unresolvable-frame",
          }
        : {
            x: g - t.marginLeft,
            y: y - t.contentInsetTop,
            horizontalFrame: r.horizontal.relativeFrom,
            verticalFrame: r.vertical.relativeFrom,
            horizontalFrameOrigin: 0,
            verticalFrameOrigin: 0,
          },
    );
  }
  let l = r.horizontal.relativeFrom,
    s = r.vertical.relativeFrom,
    c = Ip(l, t),
    d = vp(s, t),
    u = c?.left ?? 0,
    p = d?.top ?? 0;
  if (!xp.has(l) || !Sp.has(s))
    return Object.freeze({
      x: 0,
      y: 0,
      horizontalFrame: xp.has(l) ? l : a,
      verticalFrame: Sp.has(s) ? s : i,
      horizontalFrameOrigin: u,
      verticalFrameOrigin: p,
      layoutFallback: "unresolvable-frame",
    });
  let f = AS(l, r.horizontal.align, r.horizontal.offsetEmu, n.width, t),
    m = DS(s, r.vertical.align, r.vertical.offsetEmu, n.height, t);
  return Object.freeze(
    f === null || m === null
      ? {
          x: 0,
          y: 0,
          horizontalFrame: l,
          verticalFrame: s,
          horizontalFrameOrigin: u,
          verticalFrameOrigin: p,
          layoutFallback: "unresolvable-frame",
        }
      : {
          x: f,
          y: m,
          horizontalFrame: l,
          verticalFrame: s,
          horizontalFrameOrigin: u,
          verticalFrameOrigin: p,
        },
  );
}
function _S(e) {
  let t = e.input.projection,
    n = t.anchor,
    r = bn(t),
    o = no({
      projection: t,
      anchorX: e.resolved.x,
      anchorY: e.resolved.y,
      extentWidth: r.width,
      extentHeight: r.height,
    }),
    a = e.clipRegion ? md(o.paintBounds, e.clipRegion) : o.paintBounds,
    i = a.width > 0 && a.height > 0 ? a : Object.freeze({ ...a });
  return Object.freeze({
    kind: "anchoredDrawing",
    drawingNodeId: e.input.drawingNodeId,
    paragraphId: e.anchorParagraphId,
    anchorParagraphId: e.anchorParagraphId,
    ownerPartName: e.input.ownerPartName,
    start: e.start,
    x: e.resolved.x,
    y: e.resolved.y,
    width: r.width,
    height: r.height,
    horizontalFrame: e.resolved.horizontalFrame,
    verticalFrame: e.resolved.verticalFrame,
    horizontalFrameOrigin: e.resolved.horizontalFrameOrigin,
    verticalFrameOrigin: e.resolved.verticalFrameOrigin,
    behindDocument: n?.behindDocument ?? false,
    allowOverlap: n?.allowOverlap ?? true,
    layoutInCell: n?.layoutInCell ?? true,
    relativeHeight: n?.relativeHeight ?? 0,
    wrap: t.wrap === "inline" ? "inFront" : t.wrap,
    ...(e.sourceOrder !== void 0 ? { sourceOrder: e.sourceOrder } : {}),
    ...(e.resolved.layoutFallback
      ? { layoutFallback: e.resolved.layoutFallback }
      : {}),
    ...(e.textboxStory ? { textboxStory: e.textboxStory } : {}),
    paintBounds: a,
    hitBounds: i,
    geometry: e.clipRegion ? ki(o, e.clipRegion) : o,
    resource: e.input.resource,
    accessibility: bb$1(t),
    ...wp(t),
  });
}
function Lt(e, t) {
  if (e.kind !== "paragraph") return [];
  let n = [],
    r = (o) => {
      if (o.kind === "drawing") {
        let a = t.projectionForAtom?.(o.id) ?? t.project(o);
        a?.kind === "anchored" && n.push({ atomId: o.id, projection: a });
        return;
      }
      if (ab$1(o)) {
        let a = t.projectionForAtom?.(o.id) ?? null;
        a?.kind === "anchored" && n.push({ atomId: o.id, projection: a });
        return;
      }
      if ("children" in o) for (let a of o.children) r(a);
    };
  for (let o of e.children) r(o);
  return Object.freeze(n);
}
function Dt(e) {
  let t = new Map();
  if (e.kind !== "paragraph") return t;
  let n = 0,
    r = (o) => {
      if (o.kind === "drawing" || ab$1(o)) {
        (t.set(o.id, n), (n += 1));
        return;
      }
      if (o.kind === "textValue") {
        n += o.value.length;
        return;
      }
      if ("children" in o) for (let a of o.children) r(a);
    };
  for (let o of e.children) {
    if (o.kind === "run") {
      for (let a of o.children) r(a);
      continue;
    }
    if (o.kind === "hyperlink") {
      for (let a of o.children)
        if (a.kind === "run") for (let i of a.children) r(i);
    }
  }
  return t;
}
function HS(e, t, n) {
  for (let o of e.spans) {
    if (t < o.range.start) break;
    if (t < o.range.end) {
      if (n && o.text !== void 0 && o.style !== void 0) {
        let l = t - o.range.start;
        return o.box.x + Jt(o.text.slice(0, l), o.style, n);
      }
      let a = o.range.end - o.range.start;
      if (a <= 0) return o.box.x;
      let i = t - o.range.start;
      return o.box.x + (o.box.width * i) / a;
    }
    if (t === o.range.end)
      return n && o.text !== void 0 && o.style !== void 0
        ? o.box.x + Jt(o.text, o.style, n)
        : o.box.x + o.box.width;
  }
  let r;
  for (let o of e.spans) o.range.end <= t && (r = o);
  return r
    ? n && r.text !== void 0 && r.style !== void 0
      ? r.box.x + Jt(r.text, r.style, n)
      : r.box.x + r.box.width
    : e.box.x;
}
function zS(e, t) {
  let n = e.range.start;
  for (let r of e.spans) r.range.end <= t && (n = r.range.end);
  return n;
}
function hd(e, t, n) {
  if (!(Math.abs(n) <= 0.001))
    for (let r = 0; r < e.length; r += 1) {
      let o = e[r];
      o.anchorParagraphId === t &&
        (e[r] = Object.freeze({
          ...o,
          y: o.y + n,
          geometry: Ci(o.geometry, 0, n),
          paintBounds: Object.freeze({
            ...o.paintBounds,
            y: o.paintBounds.y + n,
          }),
          hitBounds: Object.freeze({ ...o.hitBounds, y: o.hitBounds.y + n }),
        }));
    }
}
function ro(e) {
  let t = Lt(e.paragraph, e.drawingLayout);
  if (t.length === 0) return [];
  let n = Dt(e.paragraph),
    r = [];
  for (let o of t) {
    let a = o.projection;
    if (a.hidden) continue;
    let i = n.get(o.atomId);
    if (
      i === void 0 ||
      (e.fragmentRange &&
        (i < e.fragmentRange.start || i >= e.fragmentRange.end))
    )
      continue;
    let l = e.lines.find((y) => i >= y.range.start && i < y.range.end);
    if (!l) continue;
    let s = a.anchor?.layoutInCell ?? true,
      d = a.position?.horizontal.relativeFrom === "character" ? zS(l, i) : i,
      u = Object.freeze({
        ...e.frameBase,
        paragraphBox: e.paragraphBox,
        anchorLineBox: l.box,
        anchorCharacterX: HS(l, d, e.measurer),
        columnBox: e.columnBox,
        cellBox: e.cellBox,
        layoutInCell: s,
      }),
      p = gd(a, u),
      m =
        s &&
        e.cellBox !== null &&
        Number.isFinite(e.cellBox.height) &&
        e.cellBox.height > 0 &&
        Number.isFinite(e.cellBox.width) &&
        e.cellBox.width > 0
          ? e.cellBox
          : oa(e.frameBase),
      g = _S({
        input: Object.freeze({
          drawingNodeId: o.atomId,
          ownerPartName: e.drawingLayout.ownerPartName,
          projection: a,
          resource: e.drawingLayout.resourceOf(a),
        }),
        anchorParagraphId: e.paragraphId,
        start: d,
        resolved: p,
        clipRegion: m,
        ...(e.sourceOrderOf ? { sourceOrder: e.sourceOrderOf(o.atomId) } : {}),
        ...(a.textboxStory && e.layoutTextboxStory
          ? { textboxStory: e.layoutTextboxStory(a) }
          : {}),
      });
    r.push(g);
  }
  return Object.freeze(r);
}
function Op(e) {
  let t = bn(e.input.projection),
    n = e.slotX + t.distL + t.effectL,
    r = no({
      projection: e.input.projection,
      anchorX: n,
      anchorY: e.y,
      extentWidth: t.width,
      extentHeight: t.height,
    }),
    o =
      e.contentTop !== void 0 && e.contentBottom !== void 0
        ? Object.freeze({
            x: e.contentLeft,
            y: e.contentTop,
            width: Math.max(0, e.contentRight - e.contentLeft),
            height: Math.max(0, e.contentBottom - e.contentTop),
          })
        : Object.freeze({
            x: e.contentLeft,
            y: r.paintBounds.y,
            width: Math.max(0, e.contentRight - e.contentLeft),
            height: r.paintBounds.height,
          }),
    a = md(r.paintBounds, o),
    i = a.width > 0 && a.height > 0 ? a : Object.freeze({ ...a });
  return Object.freeze({
    kind: "inlineDrawing",
    drawingNodeId: e.input.drawingNodeId,
    paragraphId: e.paragraphId,
    ownerPartName: e.input.ownerPartName,
    start: e.start,
    x: n,
    y: e.y,
    width: t.width,
    height: t.height,
    distL: t.distL,
    distR: t.distR,
    distT: t.distT,
    distB: t.distB,
    advanceStart: e.slotX,
    advanceEnd: e.slotX + t.totalWidth,
    baselineOffset: e.baseline,
    paintBounds: a,
    hitBounds: i,
    geometry: ki(r, o),
    resource: e.input.resource,
    accessibility: bb$1(e.input.projection),
    ...wp(e.input.projection),
  });
}
var jS = 256,
  xd = 8,
  ur = 8,
  oo = class extends Error {
    name = "DrawingExclusionConvergenceError";
    constructor(t = "drawing exclusion reflow did not converge") {
      super(t);
    }
  };
function GS(e, t) {
  let n = Math.max(1, t.columnCount);
  if (n <= 1) return 0;
  let r = e.x + e.width / 2;
  if (t.columnLefts && t.columnWidths && t.columnLefts.length === n) {
    for (let i = 0; i < n; i += 1) {
      let l = t.columnLefts[i],
        s = l + t.columnWidths[i];
      if (r >= l - 0.001 && r < s + 0.001) return i;
    }
    return n - 1;
  }
  let o = t.columnGapPt,
    a = (t.contentWidth - o * (n - 1)) / n;
  for (let i = 0; i < n; i += 1) {
    let l = i * (a + o),
      s = l + a;
    if (r >= l - 0.001 && r < s + 0.001) return i;
  }
  return n - 1;
}
function bd(e) {
  return e.behindDocument ? "behind" : "inFront";
}
function kp(e) {
  return e !== "inline" && e !== "behind" && e !== "inFront";
}
function WS(e) {
  switch (e) {
    case "inline":
    case "behind":
    case "inFront":
      return null;
    case "square":
    case "squareLeft":
    case "squareRight":
      return "square";
    case "tight":
      return "tight";
    case "through":
      return "through";
    case "topAndBottom":
      return "topAndBottom";
    default:
      return null;
  }
}
function XS(e) {
  return e === "squareLeft"
    ? "left"
    : e === "squareRight"
      ? "right"
      : "bothSides";
}
function Sd(e) {
  let t = WS(e.projection.wrap);
  if (!t || !e.projection.wrapGeometry) return null;
  let n = e.projection.wrapGeometry,
    r = Object.freeze({
      x: e.anchorX,
      y: e.anchorY,
      width: e.geometry.contentBounds.width,
      height: e.geometry.contentBounds.height,
    });
  return mp({
    mode: t,
    contentBounds: r,
    geometry: e.geometry,
    wrapDistancesEmu: n.distancesEmu,
    polygonEmu: n.polygon,
    crop: e.projection.picture?.crop ?? {},
    transform: e.projection.picture?.transform ?? {
      rotationDegrees: 0,
      flipHorizontal: false,
      flipVertical: false,
      offsetEmu: { x: 0, y: 0 },
      extentEmu: { cx: 0, cy: 0 },
    },
    extentWidthPt: e.geometry.contentBounds.width,
    extentHeightPt: e.geometry.contentBounds.height,
    textSide: t === "square" ? XS(e.projection.wrap) : n.textSide,
    contentLeft: e.contentLeft,
    contentRight: e.contentRight,
  });
}
function wd(e) {
  if (e.mode === "topAndBottom" || e.mode === "square")
    return cd(e.contentBounds, e.effectInsets, e.wrapDistances);
  let t = [e.contentBounds.y, e.contentBounds.y + e.contentBounds.height];
  if (e.polygon) for (let o of e.polygon) t.push(o.y);
  let n = Math.min(...t) - e.effectInsets.top - e.wrapDistances.top,
    r = Math.max(...t) + e.effectInsets.bottom + e.wrapDistances.bottom;
  return Object.freeze({
    x: e.contentLeft,
    y: n,
    width: Math.max(0, e.contentRight - e.contentLeft),
    height: Math.max(0, r - n),
  });
}
function $S(e) {
  if (e.drawing.behindDocument || !kp(e.drawing.wrap)) return null;
  let t = e.yOverride ?? e.drawing.y,
    n = Sd({
      projection: e.projection,
      geometry: e.drawing.geometry,
      contentLeft: e.contentLeft,
      contentRight: e.contentRight,
      anchorX: e.drawing.x,
      anchorY: t,
    });
  return n
    ? Object.freeze({
        drawingNodeId: e.drawing.drawingNodeId,
        anchorParagraphId: e.drawing.anchorParagraphId,
        anchorModelStart: e.drawing.start,
        sourceOrder: e.sourceOrder,
        paintLayer: bd(e.drawing),
        relativeHeight: e.drawing.relativeHeight,
        allowOverlap: e.drawing.allowOverlap,
        columnIndex: e.columnIndex ?? 0,
        y: t,
        verticalBand: wd(n),
        input: n,
      })
    : null;
}
function Cp(e, t) {
  let n = e.sourceOrder ?? Number.MAX_SAFE_INTEGER,
    r = t.sourceOrder ?? Number.MAX_SAFE_INTEGER;
  return n !== r ? n - r : e.drawingNodeId.localeCompare(t.drawingNodeId);
}
function VS(e, t) {
  let n = bd(e),
    r = bd(t);
  return n !== r
    ? n === "behind"
      ? -1
      : 1
    : e.relativeHeight !== t.relativeHeight
      ? e.relativeHeight - t.relativeHeight
      : Cp(e, t);
}
function Bp(e) {
  return Object.freeze([...e].sort(VS));
}
function yd(e, t) {
  return (
    e.x < t.x + t.width &&
    e.x + e.width > t.x &&
    e.y < t.y + t.height &&
    e.y + e.height > t.y
  );
}
function Pd(e, t) {
  if (Math.abs(t) <= 1e-4) return e;
  let n = e.geometry;
  return Object.freeze({
    ...e,
    y: e.y + t,
    paintBounds: Object.freeze({ ...e.paintBounds, y: e.paintBounds.y + t }),
    hitBounds: Object.freeze({ ...e.hitBounds, y: e.hitBounds.y + t }),
    geometry: Object.freeze({
      ...n,
      contentBounds: Object.freeze({
        ...n.contentBounds,
        y: n.contentBounds.y + t,
      }),
      paintBounds: Object.freeze({ ...n.paintBounds, y: n.paintBounds.y + t }),
      hitBounds: Object.freeze({ ...n.hitBounds, y: n.hitBounds.y + t }),
      transformedCorners: n.transformedCorners.map((r) =>
        Object.freeze({ x: r.x, y: r.y + t }),
      ),
      clipPolygon: n.clipPolygon
        ? n.clipPolygon.map((r) => Object.freeze({ x: r.x, y: r.y + t }))
        : null,
    }),
  });
}
function Lp(e, t) {
  let n = t.maxAttempts ?? jS,
    r = [...e].sort(Cp),
    o = [],
    a = [],
    i = [];
  for (let l of r) {
    if (l.allowOverlap) {
      o.push(l);
      continue;
    }
    let s = l,
      c = 0;
    for (; c < n && o.some((g) => yd(g.paintBounds, s.paintBounds));) {
      let f = o.find((g) => yd(g.paintBounds, s.paintBounds)),
        m = f.paintBounds.y + f.paintBounds.height - s.paintBounds.y + 0.001;
      ((s = Pd(s, m)), (c += 1));
    }
    let d = o.some((p) => yd(p.paintBounds, s.paintBounds)),
      u = s.paintBounds.y + s.paintBounds.height > t.pageBottom + 0.001;
    if (d || u) {
      (a.push(s), i.push(s.drawingNodeId));
      continue;
    }
    o.push(s);
  }
  return Object.freeze({
    drawings: Object.freeze(o),
    deferred: Object.freeze(a),
    deferredNodeIds: Object.freeze(i),
  });
}
function ao(e, t, n, r) {
  let o = [{ start: n, end: r }];
  for (let a of t) {
    let i = a.verticalBand;
    if (e < i.y || e >= i.y + i.height) continue;
    let l = pp(e, a.input),
      s = [];
    for (let c of o)
      for (let d of l) {
        let u = Math.max(c.start, d.start),
          p = Math.min(c.end, d.end);
        p > u + 1e-6 && s.push(Object.freeze({ start: u, end: p }));
      }
    if (((o = s), o.length === 0)) break;
  }
  return Object.freeze(o);
}
function Fp(e, t) {
  for (let n of t)
    if (e >= n.start - 1e-6 && e < n.end - 1e-6) return Math.max(0, n.end - e);
  return 0;
}
function YS(e, t) {
  for (let n of t) if (n.end > e + 1e-6) return n;
  return null;
}
function Rd(e, t) {
  let n = YS(e, t);
  if (!n) return null;
  let r = Math.max(e, n.start),
    o = n.end - r;
  return o <= 0.001 ? null : Object.freeze({ x: r, available: o });
}
function KS(e, t, n) {
  let r = e.contentBounds;
  return Object.freeze({
    ...e,
    contentBounds: Object.freeze({ ...r, x: r.x + t, y: r.y + n }),
    contentLeft: e.contentLeft + t,
    contentRight: e.contentRight + t,
    ...(e.polygon
      ? {
          polygon: e.polygon.map((o) =>
            Object.freeze({ x: o.x + t, y: o.y + n }),
          ),
        }
      : {}),
    ...(e.clipPolygon
      ? {
          clipPolygon: e.clipPolygon.map((o) =>
            Object.freeze({ x: o.x + t, y: o.y + n }),
          ),
        }
      : {}),
  });
}
function Id(e, t) {
  return Object.freeze({ ...e, layoutFallback: t });
}
function Mp(e, t, n, r) {
  return e.length === 0
    ? e
    : Object.freeze(
        e.map((o) => {
          let a = o.verticalBand,
            i = o.input;
          return Object.freeze({
            ...o,
            y: o.y - n,
            verticalBand: Object.freeze({ ...a, x: a.x - t, y: a.y - n }),
            input: Object.freeze({
              ...KS(i, -t, -n),
              contentLeft: r?.left,
              contentRight: r?.right ?? i.contentRight - t,
            }),
          });
        }),
      );
}
function Ep(e, t, n) {
  return Object.freeze(
    e.filter((r) => {
      let o = n(r.anchorParagraphId);
      return o === void 0 ? r.sourceOrder <= t : o <= t;
    }),
  );
}
function Np(e) {
  let t = Lt(e.paragraph, e.drawingLayout);
  if (t.length === 0) return Object.freeze([]);
  let n = Dt(e.paragraph),
    r = Math.max(1, e.contentRight - e.contentLeft),
    o = [];
  for (let a of t) {
    if (
      a.projection.anchor?.behindDocument ||
      !kp(a.projection.wrap) ||
      a.projection.wrap === "topAndBottom"
    )
      continue;
    let i = n.get(a.atomId);
    if (i === void 0) continue;
    let l = e.anchorLineTopByModelStart.get(i);
    if (l === void 0) continue;
    let s = Object.freeze({ x: e.contentLeft, y: l, width: r, height: 14 }),
      c = e.anchorCellBox != null,
      d = gd(a.projection, {
        pageNumber: 1,
        pageWidth: e.contentRight + e.contentLeft + r,
        pageHeight: 792,
        marginLeft: e.contentLeft,
        marginRight: 0,
        marginBottom: 0,
        contentInsetTop: 0,
        contentInsetBottom: 0,
        contentWidth: r,
        contentHeight: 648,
        contentBandHeight: 648,
        paragraphBox: s,
        anchorLineBox: s,
        anchorCharacterX: e.contentLeft,
        columnBox: s,
        cellBox: c ? e.anchorCellBox : null,
        layoutInCell: c,
        ownerPartName: e.drawingLayout.ownerPartName,
      }),
      u = e.paragraphStartY + l,
      p = bn(a.projection),
      f = no({
        projection: a.projection,
        anchorX: d.x,
        anchorY: u,
        extentWidth: p.width,
        extentHeight: p.height,
      }),
      m = Sd({
        projection: a.projection,
        geometry: f,
        contentLeft: e.contentLeft,
        contentRight: e.contentRight,
        anchorX: d.x,
        anchorY: u,
      });
    m &&
      o.push(
        Object.freeze({
          drawingNodeId: a.atomId,
          anchorParagraphId: e.paragraphId,
          anchorModelStart: i,
          sourceOrder: e.sourceOrderOf?.(a.atomId) ?? Number.MAX_SAFE_INTEGER,
          paintLayer: a.projection.anchor?.behindDocument
            ? "behind"
            : "inFront",
          relativeHeight: a.projection.anchor?.relativeHeight ?? 0,
          allowOverlap: a.projection.anchor?.allowOverlap ?? true,
          columnIndex: 0,
          y: u,
          verticalBand: wd(m),
          input: m,
        }),
      );
  }
  return (o.sort((a, i) => a.sourceOrder - i.sourceOrder), Object.freeze(o));
}
function Fi(e) {
  let t = Lt(e.paragraph, e.drawingLayout);
  if (t.length === 0) return Object.freeze([]);
  let n = Dt(e.paragraph),
    r = [];
  for (let o of t) {
    if (
      o.projection.anchor?.behindDocument ||
      o.projection.wrap !== "topAndBottom"
    )
      continue;
    let a = n.get(o.atomId);
    if (a === void 0) continue;
    let i = e.anchorLineTopByModelStart.get(a);
    if (i === void 0) continue;
    let l = e.paragraphStartY + i,
      s = bn(o.projection),
      c = no({
        projection: o.projection,
        anchorX: e.contentLeft,
        anchorY: l,
        extentWidth: s.width,
        extentHeight: s.height,
      }),
      d = Sd({
        projection: o.projection,
        geometry: c,
        contentLeft: e.contentLeft,
        contentRight: e.contentRight,
        anchorX: e.contentLeft,
        anchorY: l,
      });
    d &&
      r.push(
        Object.freeze({
          drawingNodeId: o.atomId,
          anchorParagraphId: e.paragraphId,
          anchorModelStart: a,
          sourceOrder: e.sourceOrderOf?.(o.atomId) ?? Number.MAX_SAFE_INTEGER,
          paintLayer: o.projection.anchor?.behindDocument
            ? "behind"
            : "inFront",
          relativeHeight: o.projection.anchor?.relativeHeight ?? 0,
          allowOverlap: o.projection.anchor?.allowOverlap ?? true,
          columnIndex: e.columnIndex ?? 0,
          y: l,
          verticalBand: wd(d),
          input: d,
        }),
      );
  }
  return (r.sort((o, a) => o.sourceOrder - a.sourceOrder), Object.freeze(r));
}
var US = 8;
function ZS(e, t, n, r) {
  return e < r && t > n;
}
function xn(e, t, n) {
  if (t <= 0 || n.length === 0) return 0;
  let r = 0;
  for (let o = 0; o < US; o += 1) {
    let a = e + r,
      i = a + t,
      l = a,
      s = false;
    for (let d of n) {
      if (d.input.mode !== "topAndBottom") continue;
      let u = d.verticalBand.y,
        p = u + d.verticalBand.height;
      ZS(a, i, u, p) && ((s = true), (l = Math.max(l, p)));
    }
    if (!s) break;
    let c = l - e;
    if (c <= r + 0.001) break;
    r = c;
  }
  return r;
}
function qS(e) {
  return e.map((t) => `${t.start.toFixed(3)}-${t.end.toFixed(3)}`).join(",");
}
function JS(e) {
  let t = e.contentBounds,
    n = e.wrapDistances,
    r = e.effectInsets,
    o =
      e.polygon?.map((i) => `${i.x.toFixed(3)},${i.y.toFixed(3)}`).join(";") ??
      "",
    a =
      e.clipPolygon
        ?.map((i) => `${i.x.toFixed(3)},${i.y.toFixed(3)}`)
        .join(";") ?? "";
  return [
    e.mode,
    e.textSide,
    t.x.toFixed(3),
    t.y.toFixed(3),
    t.width.toFixed(3),
    t.height.toFixed(3),
    n.top.toFixed(3),
    n.right.toFixed(3),
    n.bottom.toFixed(3),
    n.left.toFixed(3),
    r.top.toFixed(3),
    r.right.toFixed(3),
    r.bottom.toFixed(3),
    r.left.toFixed(3),
    o,
    a,
  ].join(":");
}
function tn(e) {
  return e.length === 0
    ? ""
    : e.map((t) => {
        let n = t.verticalBand,
          r = t.y + t.input.contentBounds.height / 2,
          o = ao(r, [t], t.input.contentLeft, t.input.contentRight);
        return [
          t.drawingNodeId,
          String(t.sourceOrder),
          String(t.columnIndex),
          t.y.toFixed(3),
          n.x.toFixed(3),
          n.y.toFixed(3),
          n.width.toFixed(3),
          n.height.toFixed(3),
          JS(t.input),
          qS(o),
        ].join("|");
      }).join(`
`);
}
function vd(e, t, n, r, o, a) {
  let i = [];
  for (let l of e) {
    let s = t.projectionForAtom?.(l.drawingNodeId);
    if (!s) continue;
    let c = l.sourceOrder ?? o?.(l.drawingNodeId) ?? Number.MAX_SAFE_INTEGER,
      d = a !== void 0 ? GS(l, a) : 0,
      u = $S({
        drawing: l,
        projection: s,
        sourceOrder: c,
        contentLeft: n,
        contentRight: r,
        columnIndex: d,
      });
    u && i.push(u);
  }
  return (i.sort((l, s) => l.sourceOrder - s.sourceOrder), Object.freeze(i));
}
function aa(e, t, n, r, o) {
  let a =
      o ?? Object.freeze({ columnCount: 1, columnGapPt: 0, contentWidth: n }),
    i = new Map();
  for (let l of e) {
    let s = l.anchoredDrawings ?? [],
      c = vd(s, t, 0, n, r, a);
    c.length > 0 && i.set(l.index, c);
  }
  return i;
}
function Mi(e, t) {
  if (e.size !== t.size) return false;
  for (let [n, r] of e) {
    let o = t.get(n);
    if (!o || tn(r) !== tn(o)) return false;
  }
  return true;
}
function Ei(e) {
  return e.size === 0
    ? ""
    : [...e.entries()]
        .sort(([t], [n]) => t - n)
        .map(([t, n]) => `${t}:${tn(n)}`).join(`
`);
}
var QS = 0.001;
function vt(e) {
  return Yr(e);
}
var Ai = new Set(["-", "\u2010", "\u2013", "\u2014"]);
function Ap(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n];
    r === "	"
      ? (n > 0 && t[t.length - 1] !== n && t.push(n), t.push(n + 1))
      : (r === " " ||
          (Ai.has(r) &&
            n > 0 &&
            e[n - 1] !== " " &&
            n + 1 < e.length &&
            e[n + 1] !== " " &&
            !Ai.has(e[n + 1]))) &&
        t.push(n + 1);
  }
  return (t[t.length - 1] !== e.length && t.push(e.length), t);
}
function e0(e, t, n) {
  for (let r = t; r < e.length; r += 1) {
    let o = e[r];
    if (o.inlineDrawing) return true;
    let a = r === t ? n : 0;
    for (let i = a; i < o.text.length; i += 1) {
      let l = o.text[i];
      if (
        l ===
          `
` ||
        l === Xb$1
      )
        return false;
      if (l !== "	" && l !== " ") return true;
    }
  }
  return false;
}
function t0(e, t, n, r) {
  let o = 0,
    a = 0,
    i = false;
  for (let l = t; l < e.length; l += 1) {
    let s = e[l],
      c = l === t ? n : 0;
    for (let d = c; d < s.text.length;) {
      let u = s.text[d];
      if (
        u === "	" ||
        u ===
          `
` ||
        u === Xb$1
      )
        return { width: o, decimalOffset: i ? a : o };
      let p = d + 1,
        f = s.text.slice(d, p),
        m = r.measure(Hn(f, s.style), s.style);
      (!i && u === "." ? (i = true) : i || (a += m), (o += m), (d = p));
    }
  }
  return { width: o, decimalOffset: i ? a : o };
}
function n0(e, t, n, r) {
  let o = e.relativeTo === "indent" || !r ? { left: t, right: n } : r;
  return {
    positionPt:
      e.alignment === "right"
        ? o.right
        : e.alignment === "center"
          ? (o.left + o.right) / 2
          : o.left,
    alignment: e.alignment,
    ...(e.leader ? { leader: e.leader } : {}),
  };
}
function Dp(e, t, n, r = 0) {
  return (
    (n.length > 0 ? xn(e, t.height, n) : (t.exclusionSkipBefore ?? 0)) +
    Math.max(0, t.height - t.trailingSpacing) +
    r
  );
}
function r0(e) {
  return Object.freeze({
    spans: e.spans.map((t) =>
      Object.freeze({ ...t, box: Object.freeze({ ...t.box }) }),
    ),
    drawings: e.drawings.map((t) =>
      Object.freeze({
        ...t,
        paintBounds: Object.freeze({ ...t.paintBounds }),
        hitBounds: Object.freeze({ ...t.hitBounds }),
      }),
    ),
    start: e.start,
    end: e.end,
    width: e.width,
    height: e.height,
    baseline: e.baseline,
    leading: e.leading,
    trailingSpacing: e.trailingSpacing,
    ...(e.pageBreakAfter ? { pageBreakAfter: true } : {}),
    ...(e.columnBreakAfter ? { columnBreakAfter: true } : {}),
    ...(e.deletedRanges
      ? { deletedRanges: Object.freeze(e.deletedRanges) }
      : {}),
    ...(e.exclusionSkipBefore
      ? { exclusionSkipBefore: e.exclusionSkipBefore }
      : {}),
  });
}
var Ni = 31680;
function ia(e) {
  if (e === void 0 || !/^-?\d{1,9}$/.test(e)) return null;
  let t = Number(e);
  return Number.isFinite(t) ? (t > Ni ? Ni : t < -Ni ? -Ni : t) : null;
}
function la(e) {
  let t = 0,
    n = 0;
  for (let r of e) {
    if (r.localName !== "ind") continue;
    let o = r.attributes?.left ?? r.attributes?.start,
      a = r.attributes?.right ?? r.attributes?.end,
      i = ia(o),
      l = ia(a);
    (i !== null && (t = i / 20), l !== null && (n = l / 20));
  }
  return { left: t, right: n };
}
function _p(e) {
  let t = "left";
  for (let n of e)
    if (n.localName === "jc")
      switch (n.attributes?.val) {
        case "center":
          t = "center";
          break;
        case "right":
        case "end":
          t = "right";
          break;
        case "both":
        case "distribute":
          t = "both";
          break;
        default:
          t = "left";
      }
  return t;
}
function o0(e) {
  return e.endsWith(" ");
}
function a0(e, t) {
  let n = e.range.end - e.range.start;
  if (n <= 0 || e.text === "	" || e.projected || e.text.length !== n)
    return Object.freeze([0, e.box.width]);
  let r = [0];
  for (let o = 1; o <= e.text.length; o += 1)
    r.push(Jt(e.text.slice(0, o), e.style, t));
  return Object.freeze(r);
}
function io(e, t) {
  return e.map((n) => (n.caretEdges ? n : { ...n, caretEdges: a0(n, t) }));
}
function Di(e, t, n, r, o, a, i) {
  if (e.length === 0) return e;
  if (o === "left") return io(e, t);
  let l = e[e.length - 1],
    s = l.text.replace(/\s+$/, ""),
    c = s === l.text ? 0 : l.box.width - Jt(s, l.style, t),
    d = i ?? l.box.x - n + l.box.width - c,
    u = r - d;
  if (u <= 0) return io(e, t);
  if (o === "both") {
    if (a) return io(e, t);
    let f = [];
    for (let b = 1; b < e.length; b += 1) o0(e[b - 1].text) && f.push(b);
    if (f.length === 0) return io(e, t);
    let m = u / f.length,
      g = new Set(f),
      y = 0;
    return io(
      e.map(
        (b, x) => (
          g.has(x) && (y += m),
          y === 0 ? b : { ...b, box: { ...b.box, x: b.box.x + y } }
        ),
      ),
      t,
    );
  }
  let p = o === "center" ? u / 2 : u;
  return io(
    e.map((f) => ({ ...f, box: { ...f.box, x: f.box.x + p } })),
    t,
  );
}
function _i(e, t) {
  return t === 0 || e.length === 0 ? e : e.map((n) => Bi(n, t, 0));
}
function Hi(e, t, n, r, o, a, i, l = [], s = Gr, c, d, u) {
  let p = i !== null && a ? a.get(i) : void 0;
  if (p) return p;
  let f = u?.lineSpacing ?? zr,
    m = u?.firstLineOffset ?? 0,
    g = [],
    y = Ii(
      e,
      l,
      c,
      d,
      u?.projectLink,
      u?.noteMarks,
      u?.displayMode ?? ft,
      g,
      u?.inlineDrawingLayout,
      u?.themeFonts,
      u?.projectFieldLink,
      u?.documentProperties,
      u?.bodyPageFields ?? false,
    ),
    b = Math.max(0, u?.startOffset ?? 0),
    x = y.flatMap((B) => {
      if (B.end <= b) return [];
      if (B.start >= b) return [B];
      let S = b - B.start;
      return [{ ...B, text: B.projected ? B.text : B.text.slice(S), start: b }];
    });
  if (x.length === 0 && u?.suppressEmptyPlaceholderLine) return [];
  let T = (B) => ({
      ...(B.revisions === void 0 ? {} : { revisions: B.revisions }),
      ...(B.fieldAtom === void 0 ? {} : { fieldAtom: B.fieldAtom }),
    }),
    k = u?.markRunProperties ?? l,
    M = k.length === 0 ? qt : De(k, u?.themeFonts),
    E = n + r,
    P = u?.contentLeft ?? n,
    L = u?.contentRight ?? E,
    O = u?.contentOriginX ?? 0,
    R = [],
    h = {
      spans: [],
      start: b,
      end: b,
      drawings: [],
      width: 0,
      height: 0,
      baseline: 0,
      leading: 0,
      trailingSpacing: 0,
    },
    D = false,
    G = new Map(),
    ee = (() => {
      let B = new Set();
      if (!u?.inlineDrawingLayout) return B;
      let S = Dt(e);
      for (let U of Lt(e, u.inlineDrawingLayout)) {
        if (U.projection.wrap !== "topAndBottom") continue;
        let V = S.get(U.atomId);
        V !== void 0 && B.add(V);
      }
      return B;
    })(),
    C = (() => {
      let B = new Set();
      if (!u?.inlineDrawingLayout) return B;
      let S = Dt(e);
      for (let U of Lt(e, u.inlineDrawingLayout)) {
        if (
          U.projection.anchor?.behindDocument ||
          U.projection.wrap === "topAndBottom" ||
          U.projection.wrap === "inline" ||
          U.projection.wrap === "behind" ||
          U.projection.wrap === "inFront"
        )
          continue;
        let V = S.get(U.atomId);
        V !== void 0 && B.add(V);
      }
      return B;
    })(),
    F = [
      ...(u?.pageExclusionZones ?? [])
        .filter((B) => B.anchorParagraphId === t)
        .map((B) => B.anchorModelStart),
      ...ee,
      ...C,
    ],
    z = (() => {
      let B = new Map();
      if (F.length === 0) return B;
      let S = 0,
        U = 0,
        V = 0,
        K = () => (V === 0 ? m : 0),
        le = () => Math.max(1, r - K()),
        Re = (we) => {
          ((S = we), (U = 0), (V += 1));
        };
      for (let we of x) {
        if (we.inlineDrawing) {
          let Ue = bn(we.inlineDrawing.projection).totalWidth;
          (U > 0 && U + Ue > le() && Re(we.start),
            F.includes(we.start) && B.set(we.start, S),
            (U += Ue));
          continue;
        }
        if (
          we.text ===
            `
` ||
          we.text === Xb$1
        ) {
          Re(we.end);
          continue;
        }
        let gt = 0;
        for (let Ue of Ap(we.text)) {
          let dt = we.text.slice(gt, Ue);
          if (dt.length === 0) continue;
          let Xe = we.style,
            ct = o.measure(dt, Xe),
            rt = we.start + gt;
          (U > 0 && U + ct > le() && Re(rt),
            F.includes(rt) && B.set(rt, S),
            F.includes(we.start) && B.set(we.start, S),
            (U += ct),
            (gt = Ue));
        }
      }
      for (let we of F) B.has(we) || B.set(we, S);
      return B;
    })();
  for (let B of C) {
    let S = z.get(B);
    S !== void 0 && G.set(B, S);
  }
  let H = (B) => {
      if (B.anchorParagraphId !== t) return true;
      let S = z.get(B.anchorModelStart);
      return (S !== void 0 && h.start >= S) || h.end >= B.anchorModelStart;
    },
    I = () => {
      let B =
          u?.pageExclusionZones?.filter(
            (V) =>
              !(
                !H(V) ||
                (V.anchorParagraphId === t &&
                  (V.input.mode === "topAndBottom" || u?.anchorCellBox != null))
              ),
          ) ?? [],
        S =
          u?.inlineDrawingLayout && u.anchorCellBox != null && G.size > 0
            ? Np({
                paragraph: e,
                paragraphId: t,
                drawingLayout: u.inlineDrawingLayout,
                contentLeft: P,
                contentRight: L,
                paragraphStartY: u.paragraphStartY ?? 0,
                anchorLineTopByModelStart: G,
                anchorCellBox: u.anchorCellBox,
              })
            : Object.freeze([]),
        U =
          u?.inlineDrawingLayout && G.size > 0
            ? Fi({
                paragraph: e,
                paragraphId: t,
                drawingLayout: u.inlineDrawingLayout,
                contentLeft: P,
                contentRight: L,
                paragraphStartY: u?.paragraphStartY ?? 0,
                anchorLineTopByModelStart: G,
              })
            : Object.freeze([]);
      return Object.freeze([...B, ...S, ...U]);
    },
    _ = () => (R.length === 0 ? m : 0),
    v = () => O + n + _(),
    j = () => Math.max(1, r - _()),
    J = () =>
      R.reduce((B, S) => B + S.height + (S.exclusionSkipBefore ?? 0), 0),
    N = () => (u?.paragraphStartY ?? 0) + J(),
    W = (B) => {
      ee.has(B) && G.set(B, J());
    },
    Y = () => {
      if (D) return;
      let B = I();
      if (B.length === 0 || h.spans.length > 0 || h.drawings.length > 0) return;
      let S = o.lineMetrics(M),
        U = xn(N(), h.height > 0 ? h.height : S.height, B);
      U > 0.001 && ((D = true), (h.exclusionSkipBefore = U));
    },
    $ = () => N() + (h.exclusionSkipBefore ?? 0) + 0.001,
    Q = () => {
      let B = I();
      if (B.length === 0) return true;
      Y();
      let S = ao($(), B, P, L),
        U = v() + h.width,
        V = Rd(U, S);
      return V ? (V.x > U + 0.001 && (h.width = V.x - v()), true) : false;
    },
    q = () => {
      let B = j(),
        S = I();
      if (S.length === 0) return B;
      if ((Y(), !Q())) return 0;
      let U = ao($(), S, P, L),
        V = v() + h.width,
        K = Fp(V, U);
      return K <= 0.001 ? 0 : Math.min(B, h.width + K);
    },
    se = () => Math.max(0, q() - h.width),
    Pe = () => {
      let B = I();
      if (
        B.length === 0 ||
        !B.some(
          (le) => le.anchorParagraphId !== t || h.end > le.anchorModelStart,
        )
      )
        return false;
      let U = ao($(), B, P, L),
        V = v() + h.width,
        K = false;
      for (let le of U) {
        if (!K) {
          V >= le.start - 1e-6 && V < le.end - 1e-6 && (K = true);
          continue;
        }
        if (le.end - le.start > 0.001)
          return ((h.width = le.start - v()), true);
      }
      return false;
    },
    he = (B) => {
      if (F.length === 0 || B < Math.min(...F)) return;
      let S = I().filter(
        (Re) => Re.anchorParagraphId === t && B >= Re.anchorModelStart,
      );
      if (S.length === 0) return;
      Y();
      let U = ao($(), S, P, L),
        V = v() + h.width,
        K = -1;
      for (let Re = 0; Re < U.length; Re += 1) {
        let we = U[Re];
        if (V >= we.start - 0.001 && V < we.end - 0.001) {
          K = Re;
          break;
        }
      }
      if (K >= 0) return;
      let le = Rd(V, U);
      le && le.x > V + 0.001 && (h.width = le.x - v());
    },
    fe = (B) => {
      I().filter(
        (U) =>
          U.input.mode === "topAndBottom" &&
          U.anchorParagraphId === t &&
          B >= U.anchorModelStart,
      ).length !== 0 &&
        ((h.spans.length > 0 || h.drawings.length > 0) && Fe(), Y());
    },
    ye = (B, S = 0) =>
      S > 64
        ? se() >= B
        : (Y(),
          Q()
            ? B <= se() + 0.001
              ? true
              : h.spans.length > 0 || h.drawings.length > 0
                ? Pe() && B <= se() + 0.001
                  ? true
                  : (Fe(), ye(B, S + 1))
                : Pe()
                  ? ye(B, S + 1)
                  : true
            : h.spans.length > 0 || h.drawings.length > 0
              ? (Fe(), ye(B, S + 1))
              : true),
    Ae = (B, S) =>
      g
        .filter((U) => U.start < S && U.end > B)
        .map((U) => ({ start: Math.max(U.start, B), end: Math.min(U.end, S) })),
    Ie = -1,
    mt = 0,
    lt = 0,
    Le = "",
    nn = (B, S) => {
      let U = o.lineMetrics(B),
        V = Pp(U.baseline, h.height || U.height, S);
      return (
        h.height === 0
          ? ((h.height = V.lineHeight), (h.baseline = V.baseline))
          : (V.lineHeight > h.height && (h.height = V.lineHeight),
            (h.baseline = Math.max(h.baseline, V.baseline))),
        { extentTopY: V.extentTopY }
      );
    },
    rn = () => {
      if (h.drawings.length === 0) return;
      h.spans.length === 0 &&
        (h.baseline = Math.max(
          h.baseline,
          ...h.drawings.map((S) => S.y + S.height),
        ));
      let B = pd(h.drawings, h.baseline);
      (h.drawings.splice(0, h.drawings.length, ...B),
        (h.baseline = Math.max(
          h.baseline,
          ...h.drawings.map((S) => S.y + S.height),
        )));
    },
    ve = () => {
      if (h.drawings.length === 0) return;
      let B = pd(h.drawings, h.baseline);
      h.drawings.splice(0, h.drawings.length, ...B);
    },
    We = (B) => {
      let S = 0;
      for (let U of h.spans) S = Math.max(S, o.lineMetrics(U.style).height);
      return S > 0 ? S : B;
    },
    st = () => {
      if (h.drawings.length === 0) return;
      let B = Math.max(0, ...h.drawings.map((S) => S.y + S.height + S.distB));
      h.height = Math.max(h.height, B);
    },
    ne = () => {
      (rn(), st());
    },
    on = () => {
      if (!(h.spans.length < 2))
        for (let B = 1; B < h.spans.length; B += 1) {
          let S = h.spans[B - 1],
            U = h.spans[B],
            V = U.box.x - (S.box.x + S.box.width);
          V <= 0.001 ||
            h.drawings.some(
              (le) => le.start >= S.range.end && le.start < U.range.start,
            ) ||
            (h.spans[B] = { ...U, wrapAdvanceBefore: V });
        }
    },
    Fe = (B) => {
      let S = o.lineMetrics(M),
        U = h.baseline;
      (h.height === 0
        ? ((h.height = S.height), (h.baseline = S.baseline), (U = S.baseline))
        : B?.includeParagraphMark && (h.height = Math.max(h.height, S.height)),
        ne());
      let V = h.height,
        K = f.rule === "auto" && h.drawings.length > 0,
        le = K ? We(S.height) : V,
        Re = Es(f, le, h.baseline);
      (K || (h.baseline = Re.baseline),
        (h.leading = Math.max(0, h.baseline - U)),
        (h.height = Re.height),
        ve(),
        f.rule !== "exact" && st(),
        (h.trailingSpacing =
          h.drawings.length === 0 && f.rule !== "exact"
            ? Math.max(0, Re.height - V)
            : 0),
        (() => {
          let Ue = I();
          if (Ue.length === 0) return;
          let dt = xn(N(), h.height, Ue);
          dt > 0.001
            ? (h.exclusionSkipBefore = dt)
            : delete h.exclusionSkipBefore;
        })(),
        on());
      let gt = Ae(h.start, h.end);
      (gt.length > 0 && (h.deletedRanges = gt),
        R.push(h),
        (Ie = -1),
        (mt = 0),
        (D = false),
        (h = {
          spans: [],
          drawings: [],
          start: h.end,
          end: h.end,
          width: 0,
          height: 0,
          baseline: 0,
          leading: 0,
          trailingSpacing: 0,
        }),
        Y());
    },
    nt = false;
  for (let B = 0; B < x.length; B += 1) {
    let S = x[B];
    if (S.breakKind === "column") {
      let K = o.lineMetrics(S.style);
      (h.spans.push({
        range: { paragraphId: t, start: S.start, end: S.end },
        text: S.text,
        props: S.props,
        style: S.style,
        box: { x: v() + h.width, y: 0, width: 0, height: K.height },
        ...(S.link ? { link: S.link } : {}),
        ...T(S),
      }),
        (h.height = Math.max(h.height, K.height)),
        (h.baseline = Math.max(h.baseline, K.baseline)),
        (h.end = S.end),
        Fe(),
        (R[R.length - 1].columnBreakAfter = true),
        (nt = true));
      continue;
    }
    if (S.projected && !S.inlineDrawing && S.text === "\uFFFC") {
      (W(S.start), (h.end = S.end));
      continue;
    }
    if (S.inlineDrawing) {
      W(S.start);
      let K = bn(S.inlineDrawing.projection),
        le = K.totalWidth;
      if (
        ((h.spans.length > 0 || h.drawings.length > 0) &&
          h.width + le > q() &&
          Fe(),
        !ye(le))
      )
        continue;
      let { extentTopY: we } = nn(S.style, K),
        gt = v() + h.width;
      (h.drawings.push(
        Op({
          input: S.inlineDrawing,
          paragraphId: t,
          start: S.start,
          slotX: gt,
          y: we,
          baseline: h.baseline,
          contentLeft: P,
          contentRight: L,
        }),
      ),
        (h.width += le),
        (h.end = S.end),
        (Ie = -1),
        (Le = ""));
      continue;
    }
    if (S.text === Xb$1) {
      let K = o.lineMetrics(S.style);
      (h.spans.push({
        range: { paragraphId: t, start: S.start, end: S.end },
        text: Xb$1,
        props: S.props,
        style: S.style,
        box: { x: v() + h.width, y: 0, width: 0, height: K.height },
        ...(S.link ? { link: S.link } : {}),
        ...T(S),
      }),
        (h.height = Math.max(h.height, K.height)),
        (h.baseline = Math.max(h.baseline, K.baseline)),
        (h.end = S.end),
        Fe(),
        (R[R.length - 1].pageBreakAfter = true),
        (nt = false));
      continue;
    }
    if (
      S.text ===
      `
`
    ) {
      let K = o.lineMetrics(S.style);
      (h.spans.push({
        range: { paragraphId: t, start: S.start, end: S.end },
        text: `
`,
        props: S.props,
        style: S.style,
        box: { x: v() + h.width, y: 0, width: 0, height: K.height },
        ...(S.link ? { link: S.link } : {}),
        ...T(S),
      }),
        (h.height = Math.max(h.height, K.height)),
        (h.baseline = Math.max(h.baseline, K.baseline)),
        (h.end = S.end),
        Fe(),
        (nt = true));
      continue;
    }
    ((nt = false),
      fe(S.start),
      F.length > 0 && S.start >= Math.min(...F) && he(S.start));
    let U = o.lineMetrics(S.style),
      V = 0;
    for (let K of Ap(S.text)) {
      let le = S.text.slice(V, K);
      if (le.length === 0) continue;
      let Re =
          !!S.projected ||
          !!S.positionalTab ||
          S.end - S.start !== S.text.length,
        we = Re
          ? { paragraphId: t, start: S.start, end: S.end }
          : { paragraphId: t, start: S.start + V, end: S.start + K };
      if (le === "	") {
        (h.spans.length > 0 || h.drawings.length > 0) &&
          h.width >= q() &&
          e0(x, B, K) &&
          Fe();
        let ot = v() + h.width,
          $e = t0(x, B, K, o),
          Me = S.positionalTab
            ? n0(S.positionalTab, n, E, u?.marginExtent)
            : null,
          be =
            Me === null
              ? Wr(s, ot, E)
              : Me.positionPt > ot
                ? Me
                : {
                    ...Wr(s, ot, E),
                    ...(Me.leader ? { leader: Me.leader } : {}),
                  },
          Ct = Xs(be.alignment, ot, be.positionPt, $e.width, $e.decimalOffset);
        (h.spans.push({
          range: we,
          text: "	",
          props: S.props,
          style: S.style,
          box: { x: ot, y: 0, width: Ct, height: U.height },
          ...(be.leader
            ? {
                tabLeader: be.leader,
                tabLeaderAdvancePt: o.measure(
                  zs.get(be.leader) ?? ".",
                  S.style,
                ),
              }
            : {}),
          ...(S.link ? { link: S.link } : {}),
          ...(be.leader ? { tabLeader: be.leader } : {}),
          ...(Re && !S.positionalTab ? { projected: true } : {}),
          ...(S.noteNav ? { noteNav: S.noteNav } : {}),
          ...T(S),
        }),
          (h.width += Ct),
          (h.height = Math.max(h.height, U.height)),
          (h.baseline = Math.max(h.baseline, U.baseline)),
          (h.end = Re ? S.end : S.start + K),
          (Le = "	"),
          (V = K));
        continue;
      }
      let gt = S.measureText ?? le,
        Ue = o.measure(Hn(gt, S.style), S.style),
        dt =
          V > 0 ||
          Le === "" ||
          /[\s\u00a0]$/.test(Le) ||
          /^[\s\u00a0]/.test(le) ||
          (Ai.has(Le[Le.length - 1]) && !Ai.has(le[0]));
      if (
        (dt && ((Ie = h.spans.length), (mt = h.width), (lt = h.end)),
        he(S.start + V),
        h.width + Ue > q() + QS &&
          (h.spans.length > 0 || h.drawings.length > 0))
      )
        if (dt || Ie <= 0) {
          if (!(Pe() && h.width + Ue <= q() + 0.001)) {
            if ((Fe(), !ye(Ue))) continue;
          }
        } else {
          let ot = h.spans.splice(Ie);
          ((h.width = mt), (h.end = lt), (h.height = 0), (h.baseline = 0));
          for (let $e of h.spans) {
            let Me = o.lineMetrics($e.style);
            ((h.height = Math.max(h.height, Me.height)),
              (h.baseline = Math.max(h.baseline, Me.baseline)));
          }
          Fe();
          for (let $e of ot) {
            let Me = o.lineMetrics($e.style);
            (h.spans.push({ ...$e, box: { ...$e.box, x: v() + h.width } }),
              (h.width += $e.box.width),
              (h.height = Math.max(h.height, Me.height)),
              (h.baseline = Math.max(h.baseline, Me.baseline)),
              (h.end = $e.range.end));
          }
          ((Ie = 0), (mt = 0));
        }
      else if (
        h.spans.length === 0 &&
        h.drawings.length === 0 &&
        Ue > q() + 0.001 &&
        !ye(Ue)
      )
        continue;
      let Xe = le,
        ct = S.start + V,
        rt = Ue;
      if (!Re && S.measureText === void 0)
        for (; h.spans.length === 0 && Xe.length > 1 && rt > q();) {
          let ot = 1,
            $e = Xe.length - 1,
            Me = 1;
          for (; ot <= $e;) {
            let Pr = (ot + $e) >> 1;
            o.measure(Hn(Xe.slice(0, Pr), S.style), S.style) <= q()
              ? ((Me = Pr), (ot = Pr + 1))
              : ($e = Pr - 1);
          }
          let be = Xe.slice(0, Me),
            Ct = o.measure(Hn(be, S.style), S.style);
          (h.spans.push({
            range: { paragraphId: t, start: ct, end: ct + Me },
            text: be,
            props: S.props,
            style: S.style,
            box: { x: v() + h.width, y: 0, width: Ct, height: U.height },
            ...(S.link ? { link: S.link } : {}),
            ...(S.noteNav ? { noteNav: S.noteNav } : {}),
            ...T(S),
          }),
            (h.width += Ct),
            (h.height = Math.max(h.height, U.height)),
            (h.baseline = Math.max(h.baseline, U.baseline)),
            (h.end = ct + Me),
            Fe(),
            (Xe = Xe.slice(Me)),
            (ct += Me),
            (rt = o.measure(Hn(Xe, S.style), S.style)));
        }
      (h.spans.push({
        range: Re ? we : { paragraphId: t, start: ct, end: S.start + K },
        text: Xe,
        props: S.props,
        style: S.style,
        box: { x: v() + h.width, y: 0, width: rt, height: U.height },
        ...(S.link ? { link: S.link } : {}),
        ...(Re && !S.positionalTab ? { projected: true } : {}),
        ...(S.noteNav ? { noteNav: S.noteNav } : {}),
        ...T(S),
      }),
        (h.width += rt),
        (h.height = Math.max(h.height, U.height)),
        (h.baseline = Math.max(h.baseline, U.baseline)),
        (h.end = Re ? S.end : S.start + K),
        (Le = le),
        (V = K));
    }
  }
  return (
    (h.spans.length > 0 || h.drawings.length > 0 || R.length === 0 || nt) &&
      Fe({ includeParagraphMark: true }),
    i !== null && a && a.set(i, R.map(r0)),
    R
  );
}
var ji = 32,
  zp = 4096,
  i0 = 128,
  l0 = /[\u0000-\u001F\u007F-\u009F]/,
  s0 = { major: null, minor: null };
function fr(e) {
  return e.kind !== "textValue";
}
function sa(e, t) {
  return e.attributes.find((n) => n.localName === t)?.value;
}
function da(e, t) {
  for (let n of e.children) if (fr(n) && n.localName === t) return n;
}
function lo(e) {
  return !(
    e === void 0 ||
    e.length === 0 ||
    e.length > i0 ||
    l0.test(e) ||
    S(e)
  );
}
function d0(e) {
  return e === "1" || e === "true";
}
function zi(e) {
  return e.map((t) =>
    t.attributes ? { n: t.localName, a: t.attributes } : { n: t.localName },
  );
}
function ua(e) {
  if (e) {
    for (let t of e.children)
      if (fr(t) && (t.kind === "runProperties" || t.localName === "rPr"))
        return t;
  }
}
function Gi(e) {
  if (e) {
    for (let t of e.children)
      if (fr(t) && (t.kind === "paragraphProperties" || t.localName === "pPr"))
        return t;
  }
}
var Hp = new Set([
  "rPrChange",
  "pPrChange",
  "ins",
  "del",
  "moveFrom",
  "moveTo",
]);
function so(e) {
  return e.some((t) => Hp.has(t.localName))
    ? e.filter((t) => !Hp.has(t.localName))
    : e;
}
function c0(e) {
  let t = da(e, "docDefaults");
  if (!t) return { run: [], paragraph: [], paragraphNode: void 0 };
  let n = da(t, "rPrDefault"),
    r = da(t, "pPrDefault"),
    o = ua(n),
    a = Gi(r);
  return { run: so(vt(o)), paragraph: so(vt(a)), paragraphNode: a };
}
function u0(e) {
  let t = sa(e, "styleId");
  if (!lo(t)) return null;
  let n = sa(e, "type") ?? "",
    r = (() => {
      let c = da(e, "basedOn");
      return c ? sa(c, "val") : void 0;
    })(),
    o = lo(r) ? r : null,
    a = Gi(e),
    i = ua(e),
    l = new Map(),
    s = 0;
  for (let c of e.children) {
    if (c.kind === "textValue" || c.localName !== "tblStylePr") continue;
    if (s >= f0) break;
    s += 1;
    let d = sa(c, "type");
    d && !l.has(d) && l.set(d, c);
  }
  return {
    styleId: t,
    type: n,
    basedOn: o,
    isDefault: d0(sa(e, "default")),
    paragraphProperties: so(vt(a)),
    runProperties: so(vt(i)),
    paragraphPropertiesNode: a,
    tablePropertiesNode: da(e, "tblPr"),
    conditionalTableFormats: l,
  };
}
var f0 = 32,
  ca = Object.freeze({
    tablePropertyNodes: Object.freeze([]),
    paragraphPropertyNodes: Object.freeze([]),
    paragraphProperties: Object.freeze([]),
    runProperties: Object.freeze([]),
    conditional: new Map(),
  });
function jp(e, t) {
  if (!t || !lo(t)) return ca;
  let n = kd(e, t, "table");
  if (n.length === 0) return ca;
  let r = [],
    o = [],
    a = [],
    i = [],
    l = new Map();
  for (let s of n) {
    (s.tablePropertiesNode && r.push(s.tablePropertiesNode),
      s.paragraphPropertiesNode && o.push(s.paragraphPropertiesNode),
      a.push(...s.paragraphProperties),
      i.push(...s.runProperties));
    for (let [c, d] of s.conditionalTableFormats) l.set(c, d);
  }
  return {
    tablePropertyNodes: r,
    paragraphPropertyNodes: o,
    paragraphProperties: a,
    runProperties: i,
    conditional: l,
  };
}
var Td = Object.freeze({
  paragraphProperties: Object.freeze([]),
  paragraphPropertyNodes: Object.freeze([]),
  runProperties: Object.freeze([]),
});
function Gp(e, t) {
  let n = [...e.paragraphPropertyNodes],
    r = [...e.paragraphProperties],
    o = [...e.runProperties];
  for (let a of t) {
    let i = e.conditional.get(a);
    if (!i) continue;
    let l = Gi(i);
    l && (n.push(l), r.push(...so(vt(l))));
    let s = ua(i);
    s && o.push(...so(vt(s)));
  }
  return n.length === 0 && r.length === 0 && o.length === 0
    ? Td
    : { paragraphProperties: r, paragraphPropertyNodes: n, runProperties: o };
}
function p0(e, t = s0) {
  let n = new Map();
  if (!e)
    return {
      cacheToken: y({ empty: true, theme: t }),
      docDefaultsRun: [],
      docDefaultsParagraph: [],
      docDefaultsParagraphNode: void 0,
      defaultParagraphStyleId: null,
      defaultCharacterStyleId: null,
      themeFonts: t,
      styles: n,
    };
  let r = c0(e),
    o = null,
    a = null,
    i = 0;
  for (let s of e.children) {
    if (!fr(s) || s.localName !== "style") continue;
    if (i >= zp) break;
    i += 1;
    let c = u0(s);
    if (!c) continue;
    let { isDefault: d, ...u } = c;
    (n.set(u.styleId, u),
      u.type === "paragraph"
        ? d
          ? (o = u.styleId)
          : o === u.styleId && (o = null)
        : u.type === "character" &&
          (d ? (a = u.styleId) : a === u.styleId && (a = null)));
  }
  return {
    cacheToken: y({
      dR: zi(r.run),
      dP: zi(r.paragraph),
      defP: o,
      defC: a,
      theme: t,
      styles: [...n.values()].map((s) => ({
        id: s.styleId,
        type: s.type,
        basedOn: s.basedOn,
        p: zi(s.paragraphProperties),
        r: zi(s.runProperties),
      })),
    }),
    docDefaultsRun: r.run,
    docDefaultsParagraph: r.paragraph,
    docDefaultsParagraphNode: r.paragraphNode,
    defaultParagraphStyleId: o,
    defaultCharacterStyleId: a,
    themeFonts: t,
    styles: n,
  };
}
function Od(e, t) {
  let n = null;
  for (let r of e) {
    if (r.localName !== t) continue;
    let o = r.attributes?.val;
    n = lo(o) ? o : null;
  }
  return n;
}
function kd(e, t, n) {
  let r = e.styles.get(t);
  if (!r || r.type !== n) return [];
  let o = [],
    a = new Set(),
    i = t,
    l = 0;
  for (; i !== null && l < ji && !(a.has(i) || !lo(i));) {
    a.add(i);
    let s = e.styles.get(i);
    if (!s) break;
    (o.push(s), (i = s.basedOn), (l += 1));
  }
  return o.reverse();
}
function co(e, t, n) {
  let r = vt(t),
    o = Od(r, "pStyle") ?? e.defaultParagraphStyleId,
    a = o ? kd(e, o, "paragraph") : [],
    i = [
      ...e.docDefaultsParagraph,
      ...(n?.paragraphProperties ?? []),
      ...a.flatMap((f) => f.paragraphProperties),
    ],
    l = [...i, ...r],
    s = [];
  (e.docDefaultsParagraphNode && s.push(e.docDefaultsParagraphNode),
    n && s.push(...n.paragraphPropertyNodes));
  for (let f of a)
    f.paragraphPropertiesNode && s.push(f.paragraphPropertiesNode);
  t && s.push(t);
  let c = ua(t && fr(t) ? t : void 0),
    d = vt(c),
    u = [
      ...e.docDefaultsRun,
      ...(n?.runProperties ?? []),
      ...a.flatMap((f) => f.runProperties),
    ],
    p = d.length === 0 ? u : [...u, ...d];
  return {
    paragraphProperties: l,
    inheritedParagraphProperties: i,
    paragraphPropertyNodes: s,
    runProperties: u,
    markRunProperties: p,
    styleId: o ?? null,
  };
}
function Wp(e) {
  let t;
  for (let n of e) {
    if (!n || n.kind === "textValue") continue;
    let r = false;
    for (let o of n.children)
      if (fr(o) && o.localName === "pBdr") {
        r = true;
        break;
      }
    r && (t = un(n).bottom);
  }
  return t;
}
function Sn(e, t, n) {
  let r = [];
  if (n) {
    let a = Od(t, "rStyle") ?? n.defaultCharacterStyleId;
    a && (r = kd(n, a, "character").flatMap((i) => i.runProperties));
  }
  return e.length === 0 && r.length === 0
    ? t
    : t.length === 0 && r.length === 0
      ? e
      : [...e, ...r, ...t];
}
function fa(e, t, n, r, o, a = false) {
  let i = Gi(e),
    l = n ? co(n, i, o) : null,
    s = l ? [...l.paragraphProperties] : vt(i),
    c = vt(ua(i && fr(i) ? i : void 0)),
    d = l ? l.runProperties : [],
    u = l ? l.markRunProperties : c,
    p = la(s),
    f = 0,
    m = 0;
  if (r) ((f = r.indent.hanging), (m = r.indent.firstLine));
  else
    for (let b of s) {
      if (b.localName !== "ind") continue;
      let x = ia(b.attributes?.hanging),
        T = ia(b.attributes?.firstLine);
      (b.attributes?.hanging !== void 0 ||
        b.attributes?.firstLine !== void 0) &&
        ((f = x !== null ? Math.max(0, x) / 20 : 0),
        (m = T !== null ? T / 20 : 0));
    }
  let g = r
      ? { left: r.indent.left, right: r.indent.right, hanging: f, firstLine: m }
      : { left: p.left, right: p.right, hanging: f, firstLine: m },
    y = l ? Gs(l.paragraphPropertyNodes) : Ws(i);
  return {
    props: s,
    indent: g,
    available: Math.max(1, t - g.left - g.right),
    alignment: _p(s),
    spacing: Fs(s, { inList: r !== void 0, inTableCell: a }),
    lineSpacing: Ms(s),
    contextualSpacing: Ns(s),
    styleId: l ? l.styleId : (Od(s, "pStyle") ?? null),
    bottomBorder: l ? Wp(l.paragraphPropertyNodes) : un(i).bottom,
    borders: l ? zo(l.paragraphPropertyNodes) : un(i),
    shading: Hs(s),
    inheritedRunProperties: d,
    markRunProperties: u,
    tabStops: y,
    tabStopsCacheToken: ar(y),
    ...(r ? { listItem: r } : {}),
  };
}
var Xp = new WeakMap();
function m0(e) {
  let t = Xp.get(e);
  if (t !== void 0) return t;
  let n = (o) => o.some((a) => a.localName === "pBdr"),
    r = n(e.docDefaultsParagraph);
  if (!r) {
    for (let o of e.styles.values())
      if (n(o.paragraphProperties)) {
        r = true;
        break;
      }
  }
  return (Xp.set(e, r), r);
}
function $p(e, t) {
  return !t || !m0(t) ? un(e) : zo(co(t, e).paragraphPropertyNodes);
}
var g0 = Object.freeze({
  keepNext: false,
  keepLines: false,
  widowControl: true,
});
function Cd(e) {
  let t = e?.val;
  return t !== "0" && t !== "false" && t !== "off";
}
function Vp(e) {
  let t = false,
    n = false,
    r = true;
  for (let o of e)
    switch (o.localName) {
      case "keepNext":
        t = Cd(o.attributes);
        break;
      case "keepLines":
        n = Cd(o.attributes);
        break;
      case "widowControl":
        r = Cd(o.attributes);
        break;
    }
  return !t && !n && r ? g0 : { keepNext: t, keepLines: n, widowControl: r };
}
function Yp(e, t, n, r, o) {
  if (e <= t) return e;
  if (r.keepLines && !o) return t;
  if (!r.widowControl || n < 2) return e;
  let a = e;
  return (
    n - a < 2 && (a -= 1),
    a - t === 1 && (a -= 1),
    a < t && (a = t),
    a === t && o ? e : a
  );
}
function Kp(e, t, n, r) {
  let o = 0,
    a = n;
  for (let i = t; i - t < 8; i += 1) {
    let l = e[i];
    if (!l || l.kind !== "paragraph" || !l.spacing || !l.keeps) return null;
    o += Math.max(l.spacing.before, a) - a;
    let s = r(i);
    if (!l.keeps.keepNext || i + 1 >= e.length)
      return (
        (o += s[0] ?? 0),
        l.keeps.widowControl && s.length > 1 && (o += s[1]),
        o
      );
    for (let c of s) o += c;
    ((o += l.spacing.after), (a = l.spacing.after));
  }
  return null;
}
function Up(e, t) {
  let n = e;
  for (let r = 0; r < e.length; r += 1) {
    let o = t(r);
    o !== void 0 && (n === e && (n = [...e]), (n[r] = `${n[r]}~mk~${o}`));
  }
  return n;
}
function Zp(e, t) {
  let n = e,
    r = 0;
  for (let o = e.length - 2; o >= 0; o -= 1)
    t(o) && r < 8
      ? (n === e && (n = [...e]), (n[o] = `${e[o]}~kn~${n[o + 1]}`), (r += 1))
      : (r = 0);
  return n;
}
var h0 = qr;
function _t(e, t) {
  if (e.kind !== "textValue") {
    for (let n of e.children)
      if (
        n.kind !== "textValue" &&
        n.namespaceUri === ma$1 &&
        n.localName === t
      )
        return n;
  }
}
function qp(e) {
  if (e.kind === "textValue") return false;
  let t = _t(e, "paragraphProperties") ?? _t(e, "pPr");
  if (!t) return false;
  let n = _t(t, "runProperties") ?? _t(t, "rPr");
  return n === void 0
    ? false
    : _t(n, "del") !== void 0 || _t(n, "moveFrom") !== void 0;
}
function Jp(e, t) {
  if (e.kind === "textValue" || t > h0) return true;
  let n = (r, o) => {
    for (let a of r) {
      if (a.kind === "textValue") continue;
      if (a.kind === "run") {
        for (let l of a.children) {
          if (l.kind === "text") {
            for (let s of l.children)
              if (s.kind === "textValue" && s.value.length > 0) return false;
            continue;
          }
          if (l.kind !== "runProperties") return false;
        }
        continue;
      }
      if (Lb$1(a)) {
        if (o >= Kb$1) continue;
        let l = Nb$1(a);
        if (l && !n(l, o + 1)) return false;
        continue;
      }
      if (
        (a.kind === "hyperlink" ||
          a.kind === "revisionInsert" ||
          a.kind === "revisionMoveTo") &&
        !Jp(a, o + 1)
      )
        return false;
    }
    return true;
  };
  return n(e.children, t);
}
function Qp(e, t) {
  if (t === "all-markup" || e.kind === "textValue") return false;
  let n = _t(e, "paragraphProperties") ?? _t(e, "pPr");
  if (!n) return false;
  let r = _t(n, "runProperties") ?? _t(n, "rPr");
  return r === void 0
    ? false
    : (t === "proposed" ? ["del", "moveFrom"] : ["ins", "moveTo"]).some(
        (a) => _t(r, a) !== void 0,
      );
}
function Bd(e, t = "proposed") {
  return e.kind !== "paragraph" || t !== "proposed" || !qp(e)
    ? false
    : Jp(e, 0);
}
function y0(e) {
  let t = e.root;
  if (t.localName === "hdr" || t.localName === "ftr") return t;
  let n = (r) => {
    if (r.kind !== "textValue") {
      if (r.kind === "body") return r;
      for (let o of r.children) {
        let a = n(o);
        if (a) return a;
      }
    }
  };
  return n(t);
}
function b0(e, t) {
  return !(e.kind === "paragraph" && Bd(e, t));
}
var om = new WeakMap();
function Wi(e) {
  return om.get(e) ?? null;
}
function am(e, t) {
  let n = t.children.filter((a) => em(a)),
    r = e.flatMap((a) => a.children.filter((i) => !em(i))),
    o = { ...t, children: [...n, ...r] };
  return (om.set(o, { merged: o, members: e }), o);
}
function em(e) {
  return (
    e.kind !== "textValue" &&
    (e.kind === "paragraphProperties" || e.localName === "pPr")
  );
}
function x0(e, t) {
  if (t === "all-markup") return e.map((i) => i.block);
  let n = [],
    r = [],
    o = null,
    a = () => {
      (n.push(...tm(r)), (r = []), (o = null));
    };
  for (let { block: i, parentKey: l } of e) {
    if ((r.length > 0 && l !== o && a(), i.kind !== "paragraph")) {
      (a(), n.push(i));
      continue;
    }
    let s = Qp(i, t);
    if ((s || r.length > 0) && !w0(i, t)) {
      (a(), n.push(i));
      continue;
    }
    if (s) {
      (r.push(i), (o = l));
      continue;
    }
    if (r.length === 0) {
      n.push(i);
      continue;
    }
    let c = [...r, i];
    ((r = []), (o = null), n.push(am(c, i)));
  }
  return (n.push(...tm(r)), n);
}
function tm(e) {
  if (e.length < 2) return e;
  let t = e[e.length - 1];
  return [am(e, t)];
}
function pa(e, t) {
  return x0(S0(e), t).filter((r) => b0(r, t));
}
function S0(e) {
  let t = [],
    n = (r, o, a) => {
      for (let i of r)
        if (i.kind !== "textValue") {
          if (i.kind === "paragraph" || i.kind === "table") {
            t.push({ block: i, parentKey: a });
            continue;
          }
          Lb$1(i) && o < Kb$1 && n(Ob$1(i), o + 1, i.id);
        }
    };
  return (n(e, 0, ""), t);
}
var nm = new WeakMap();
function w0(e, t) {
  let n = nm.get(e),
    r = n?.get(t);
  if (r !== void 0) return r;
  let o = P0(e, t);
  return (n ? n.set(t, o) : nm.set(e, new Map([[t, o]])), o);
}
function P0(e, t) {
  if (!R0(e)) return false;
  let n = Ii(e, [], void 0, void 0, void 0, void 0, t),
    r = 0;
  for (let o of n) r = Math.max(r, o.end);
  return r <= Sd$1(e).length;
}
function R0(e) {
  let t = 0,
    n = false,
    r = (o) => {
      if (o.kind !== "textValue") {
        if (o.namespaceUri === ma$1 && o.localName === "fldChar") {
          let a = o.attributes.find(
            (i) => i.localName === "fldCharType",
          )?.value;
          a === "begin"
            ? (t += 1)
            : a === "end" && ((t -= 1), t < 0 && (n = true));
        }
        for (let a of o.children) r(a);
      }
    };
  return (r(e), t === 0 && !n);
}
var rm = Ie(16);
function wn(e, t = "all-markup") {
  let n = rm.get(e),
    r = n?.[t];
  if (r) return r;
  let o = y0(e),
    a = o ? pa(o.children, t) : [];
  return (n ? (n[t] = a) : rm.set(e, { [t]: a }), a);
}
function Xi(e, t = "all-markup") {
  return e.kind !== "note" ? [] : pa(e.children, t);
}
function im(e, t = "all-markup") {
  return e.kind === "textValue" ? [] : pa(e.children, t);
}
var I0 = { state: "none" },
  lm = (e, t) => (t.state === "omitted" ? e : t);
function $i(e, t, n = {}) {
  return e.state === "omitted" ? t : e.state === "none" ? I0 : e;
}
function Ld(e, t) {
  let n = lm;
  return {
    top: n(e.top, t.top),
    left: n(e.left, t.left),
    bottom: n(e.bottom, t.bottom),
    right: n(e.right, t.right),
    insideH: n(e.insideH, t.insideH),
    insideV: n(e.insideV, t.insideV),
  };
}
function Fd(e, t) {
  let n = lm;
  return {
    top: n(e.top, t.top),
    left: n(e.left, t.left),
    bottom: n(e.bottom, t.bottom),
    right: n(e.right, t.right),
  };
}
function Vi(e = 1048576) {
  let t = e | 0;
  return { intervalsRemaining: t > 0 ? t : 0 };
}
function sm(e, t, n, r) {
  let o = Math.max(0, Math.min(t | 0, 1024)),
    a = new Array(e.length);
  for (let i = 0; i < e.length; i += 1) {
    if (r && r.intervalsRemaining <= 0) {
      a[i] = [];
      continue;
    }
    a[i] = v0(e[i], o, n, r);
  }
  return a;
}
function v0(e, t, n, r) {
  let o = [];
  for (let d = 0; d < e.length; d += 1) {
    let u = e[d],
      p = Math.max(0, u.gridColumn | 0),
      f = Math.min(t, p + Math.max(0, u.gridSpan | 0));
    p >= f ||
      (o.push({ x: p, kind: 1, cellIndex: d, cell: u }),
      o.push({ x: f, kind: 0, cellIndex: d, cell: u }));
  }
  if (o.length === 0) return [];
  o.sort((d, u) =>
    d.x !== u.x
      ? d.x - u.x
      : d.kind !== u.kind
        ? d.kind - u.kind
        : d.cellIndex - u.cellIndex,
  );
  let a = new Map(),
    i,
    l = o[0].x,
    s = [],
    c = () => {
      i = void 0;
      for (let d of a.values()) (!i || d.cellIndex < i.cellIndex) && (i = d);
    };
  for (let d of o) {
    if (d.x > l && i && (!r || r.intervalsRemaining > 0)) {
      let u = s[s.length - 1];
      u && u.end === l && u.cellIndex === i.cellIndex && u.cell === i.cell
        ? (s[s.length - 1] = {
            start: u.start,
            end: d.x,
            cell: u.cell,
            cellIndex: u.cellIndex,
          })
        : (s.push({ start: l, end: d.x, cell: i.cell, cellIndex: i.cellIndex }),
          n && (n.ownershipSlotsWritten += 1),
          r && (r.intervalsRemaining -= 1));
    }
    (d.kind === 1
      ? a.set(d.cellIndex, { cell: d.cell, cellIndex: d.cellIndex })
      : a.delete(d.cellIndex),
      c(),
      (l = d.x));
  }
  return s;
}
function T0(e, t) {
  let n = 0,
    r = e.length;
  for (; n < r;) {
    let o = (n + r) >> 1;
    e[o].start <= t ? (n = o + 1) : (r = o);
  }
  return n;
}
function Md(e, t, n, r) {
  r && (r.columnLookups += 1);
  let o = e[t];
  if (!o || n < 0) return;
  let a = T0(o, n) - 1;
  if (a < 0) return;
  let i = o[a];
  if (!(n >= i.end)) return { cell: i.cell, cellIndex: i.cellIndex };
}
var fm = 256,
  Ve = { state: "omitted" },
  Ji = { state: "none" },
  pm = { top: Ve, left: Ve, bottom: Ve, right: Ve, insideH: Ve, insideV: Ve },
  mm = { top: Ve, left: Ve, bottom: Ve, right: Ve },
  dm = { single: 1, thick: 2, double: 3, dotted: 4, dashed: 5, triple: 10 },
  k0 = new Map([
    ["single", "single"],
    ["thick", "thick"],
    ["double", "double"],
    ["dotted", "dotted"],
    ["dashed", "dashed"],
    ["dashSmallGap", "dashed"],
    ["dotDash", "dashed"],
    ["dotDotDash", "dashed"],
    ["triple", "triple"],
    ["wave", "single"],
    ["hairline", "single"],
    ["inset", "single"],
    ["outset", "single"],
  ]);
function ma(e, t) {
  for (let n of e.children)
    if (n.kind !== "textValue" && n.localName === t) return n;
}
function Ed(e, t) {
  return e.attributes.find((n) => n.localName === t)?.value;
}
function C0(e) {
  return e === void 0 || !/^\d{1,9}$/.test(e) ? null : Number(e);
}
function B0(e) {
  if (e === null) return 0.5;
  let t = e / 8;
  return !Number.isFinite(t) || t <= 0 ? 0.5 : t > Ho ? Ho : t;
}
function Qi(e) {
  if (!e) return Ve;
  let t = Ed(e, "val");
  if (!t) return Ve;
  if (t === "nil" || t === "none") return Ji;
  let n = k0.get(t) ?? "single",
    r = Ed(e, "color"),
    o = r === void 0 || r === "auto" ? null : (ri(r) ?? null);
  return { state: "edge", style: n, color: o, widthPt: B0(C0(Ed(e, "sz"))) };
}
function gm(e, t) {
  if (!e) return mm;
  let n = { top: Ve, left: Ve, bottom: Ve, right: Ve };
  for (let r of t) n[r] = Qi(ma(e, r));
  return n;
}
function el(e) {
  let t = e && ma(e, "tblBorders");
  return t
    ? {
        ...gm(t, ["top", "left", "bottom", "right"]),
        insideH: Qi(ma(t, "insideH")),
        insideV: Qi(ma(t, "insideV")),
      }
    : pm;
}
function tl(e) {
  return gm(e && ma(e, "tcBorders"), ["top", "left", "bottom", "right"]);
}
function Nd(e) {
  return e.state !== "edge" ? 0 : Math.max(1, Math.round(e.widthPt * 8));
}
function cm(e) {
  if (!e) return 0;
  let t = Number.parseInt(e.slice(0, 2), 16),
    n = Number.parseInt(e.slice(2, 4), 16),
    r = Number.parseInt(e.slice(4, 6), 16);
  return t + n + r;
}
function hm(e, t, n = true) {
  if (e.state === "omitted") return t.state === "omitted" ? Ve : t;
  if (t.state === "omitted") return e;
  if (e.state === "none") return t.state === "none" ? Ji : t;
  if (t.state === "none") return e;
  let r = Nd(e),
    o = Nd(t);
  if (r > o) return e;
  if (o > r) return t;
  let a = dm[e.style],
    i = dm[t.style];
  if (a !== i) return a > i ? e : t;
  let l = cm(e.color),
    s = cm(t.color);
  return l < s ? e : s < l ? t : n ? e : t;
}
function Yi(e) {
  if (e.state === "edge")
    return { style: e.style, color: e.color, widthPt: e.widthPt };
}
function L0(e, t, n) {
  return n ? (t === "top" || t === "bottom" ? e.insideH : e.insideV) : e[t];
}
function F0(e, t) {
  return e === void 0 && t === void 0
    ? true
    : !e || !t
      ? false
      : e.style === t.style && e.color === t.color && e.widthPt === t.widthPt;
}
function Ki(e) {
  if (e.length === 0) return [];
  let t = [],
    n = { ...e[0] };
  for (let r = 1; r < e.length; r += 1) {
    let o = e[r];
    n.gridEnd === o.gridStart && F0(n.edge, o.edge)
      ? (n = { ...n, gridEnd: o.gridEnd })
      : (t.push(n), (n = { ...o }));
  }
  return (t.push(n), t);
}
function Ui(e, t, n) {
  let r = e.filter((a) => a.edge !== void 0);
  if (r.length !== 1) return;
  let o = r[0];
  if (!(o.gridStart !== t || o.gridEnd !== n)) return o.edge;
}
function um(e, t, n) {
  let r = 0,
    o = Math.min(n, e.length);
  for (let a = Math.max(0, t); a < o; a += 1) r += e[a];
  return r;
}
function M0(e) {
  if (!(!e || e.style !== "double")) return _r(e.widthPt);
}
function Zi(e) {
  return e === "dashed" ? "dashed" : e === "dotted" ? "dotted" : "solid";
}
function E0(e, t) {
  return t ? (e === "outer" ? t.insetPt : t.insetPt + t.strokePt + t.gapPt) : 0;
}
function N0(e, t, n) {
  return n
    ? e === "outer"
      ? t - n.insetPt
      : t - n.insetPt - n.strokePt - n.gapPt
    : t;
}
function A0(e, t) {
  return t
    ? e === "outer"
      ? t.insetPt + t.strokePt
      : t.insetPt + t.extentPt
    : 0;
}
function D0(e, t, n) {
  return n
    ? e === "outer"
      ? t - n.insetPt - n.strokePt
      : t - n.insetPt - n.extentPt
    : t;
}
function Gn(e, t) {
  e.length >= fm || !(t.width > 0) || !(t.height > 0) || e.push(t);
}
function _0(e, t, n, r, o, a, i, l, s, c, d) {
  let u = _r(n.widthPt),
    { strokePt: p, gapPt: f, extentPt: m, insetPt: g } = u,
    y = Math.abs(r) < 1e-6,
    b = Math.abs(o - a) < 1e-6,
    x = Math.abs(r) < 1e-6,
    T = Math.abs(o - i) < 1e-6;
  if (t === "top" || t === "bottom") {
    let E = t === "top" ? g : i - g - p,
      P = t === "top" ? g + p + f : i - g - m;
    for (let L of ["outer", "inner"]) {
      let O = r,
        R = o;
      (y && (O = E0(L, l)),
        b && (R = N0(L, a, s)),
        Gn(e, {
          side: t,
          role: L,
          color: n.color,
          cssStyle: "solid",
          x: O,
          y: L === "outer" ? E : P,
          width: R - O,
          height: p,
        }));
    }
    return;
  }
  let k = t === "left" ? g : a - g - p,
    M = t === "left" ? g + p + f : a - g - m;
  for (let E of ["outer", "inner"]) {
    let P = r,
      L = o;
    (x && (P = A0(E, c)),
      T && (L = D0(E, i, d)),
      Gn(e, {
        side: t,
        role: E,
        color: n.color,
        cssStyle: "solid",
        x: E === "outer" ? k : M,
        y: P,
        width: p,
        height: L - P,
      }));
  }
}
function H0(e, t, n, r, o, a, i) {
  let l = n.widthPt,
    s = Math.max(1, l),
    c = l * 3 + s * 2;
  if (t === "top" || t === "bottom") {
    let u = t === "top" ? 0 : i - c;
    for (let p = 0; p < 3; p += 1)
      Gn(e, {
        side: t,
        role: p === 0 ? "outer" : p === 1 ? "middle" : "inner",
        color: n.color,
        cssStyle: "solid",
        x: r,
        y: u + p * (l + s),
        width: o - r,
        height: l,
      });
    return;
  }
  let d = t === "left" ? 0 : a - c;
  for (let u = 0; u < 3; u += 1)
    Gn(e, {
      side: t,
      role: u === 0 ? "outer" : u === 1 ? "middle" : "inner",
      color: n.color,
      cssStyle: "solid",
      x: d + u * (l + s),
      y: r,
      width: l,
      height: o - r,
    });
}
function z0(e, t, n, r, o, a, i) {
  let l = n.widthPt;
  t === "top"
    ? Gn(e, {
        side: t,
        role: "edge",
        color: n.color,
        cssStyle: Zi(n.style),
        x: r,
        y: 0,
        width: o - r,
        height: l,
      })
    : t === "bottom"
      ? Gn(e, {
          side: t,
          role: "edge",
          color: n.color,
          cssStyle: Zi(n.style),
          x: r,
          y: i - l,
          width: o - r,
          height: l,
        })
      : t === "left"
        ? Gn(e, {
            side: t,
            role: "edge",
            color: n.color,
            cssStyle: Zi(n.style),
            x: 0,
            y: r,
            width: l,
            height: o - r,
          })
        : Gn(e, {
            side: t,
            role: "edge",
            color: n.color,
            cssStyle: Zi(n.style),
            x: a - l,
            y: r,
            width: l,
            height: o - r,
          });
}
function qi(e, t) {
  if (e.length === 0) return;
  let n = e[0];
  return M0(n.edge);
}
function j0(e, t, n, r, o, a, i, l, s, c) {
  let d = (D, G, ee) => {
      let C = [];
      for (let F of G) {
        if (!F.edge) continue;
        let z, H;
        (ee
          ? ((z = um(i, l, F.gridStart)), (H = um(i, l, F.gridEnd)))
          : ((z = s[F.gridStart - c] ?? 0), (H = s[F.gridEnd - c] ?? a)),
          C.push({
            side: D,
            gridStart: F.gridStart,
            gridEnd: F.gridEnd,
            startPt: z,
            endPt: H,
            edge: F.edge,
          }));
      }
      return C;
    },
    u = d("top", e, true),
    p = d("left", t, false),
    f = d("bottom", n, true),
    m = d("right", r, false),
    g = [...u, ...m, ...f, ...p],
    y = qi(t),
    b = qi(r),
    x = qi(e),
    T = qi(n),
    k = (D, G) =>
      D.length === 1 &&
      Math.abs(D[0].startPt) < 1e-6 &&
      Math.abs(D[0].endPt - G) < 1e-6,
    M = k(u, o),
    E = k(p, a),
    P = k(f, o),
    L = k(m, a),
    O = [],
    R = (D, G, ee) => {
      for (let C of G) {
        let { edge: F, startPt: z, endPt: H } = C;
        F.style === "double"
          ? _0(
              O,
              D,
              F,
              z,
              H,
              o,
              a,
              D === "top" || D === "bottom" ? y : void 0,
              D === "top" || D === "bottom" ? b : void 0,
              D === "left" || D === "right" ? x : void 0,
              D === "left" || D === "right" ? T : void 0,
            )
          : F.style === "triple"
            ? H0(O, D, F, z, H, o, a)
            : ee || z0(O, D, F, z, H, o, a);
      }
    };
  (R("top", u, M), R("left", p, E), R("bottom", f, P), R("right", m, L));
  let h = {};
  return (
    M && u[0] && (h.top = u[0].edge),
    E && p[0] && (h.left = p[0].edge),
    P && f[0] && (h.bottom = f[0].edge),
    L && m[0] && (h.right = m[0].edge),
    g.length > 0 && (h.edgeSegments = g),
    O.length > 0 && (h.strokes = O),
    h
  );
}
function Ad(e, t, n, r, o, a) {
  let i = e.length,
    l = e.map((u) => u.map(() => ({})));
  o && ((o.ownershipSlotsWritten = 0), (o.columnLookups = 0));
  let s = sm(e, n, o, a),
    c = (u, p, f) => $i(u.borders[p], L0(t, p, f), {}),
    d = (u, p, f, m) =>
      (u.state === "none" && p.state !== "edge") ||
      (p.state === "none" && u.state !== "edge")
        ? Ji
        : hm(f, m);
  for (let u = 0; u < i; u += 1) {
    let p = e[u];
    for (let f = 0; f < p.length; f += 1) {
      let m = p[f];
      if (m.vMergeContinue) {
        l[u][f] = {};
        continue;
      }
      let g = m.mergeRowSpan ?? 1,
        y = u + g - 1,
        b = u === 0,
        x = y === i - 1,
        T = m.gridColumn === 0,
        k = m.gridColumn + m.gridSpan - 1,
        M = k >= n - 1,
        E = [];
      if (b)
        for (let z = m.gridColumn; z <= k; z += 1)
          E.push({
            gridStart: z,
            gridEnd: z + 1,
            edge: Yi(c(m, "top", false)),
          });
      let P = [];
      if (T)
        for (let z = u; z <= y; z += 1)
          P.push({
            gridStart: z,
            gridEnd: z + 1,
            edge: Yi(c(m, "left", false)),
          });
      let L = [];
      for (let z = m.gridColumn; z <= k; z += 1) {
        let H;
        if (x) H = c(m, "bottom", false);
        else {
          let I = Md(s, y + 1, z, o);
          I?.cell.vMergeContinue
            ? (H = Ve)
            : (H = d(
                m.borders.bottom,
                I ? I.cell.borders.top : Ve,
                c(m, "bottom", true),
                I ? c(I.cell, "top", true) : t.insideH,
              ));
        }
        L.push({ gridStart: z, gridEnd: z + 1, edge: Yi(H) });
      }
      let O = [];
      for (let z = u; z <= y; z += 1) {
        let H;
        if (M) H = c(m, "right", false);
        else {
          let I = Md(s, z, k + 1, o);
          H = d(
            m.borders.right,
            I ? I.cell.borders.left : Ve,
            c(m, "right", true),
            I ? c(I.cell, "left", true) : t.insideV,
          );
        }
        O.push({ gridStart: z, gridEnd: z + 1, edge: Yi(H) });
      }
      let R = Ki(E),
        h = Ki(P),
        D = Ki(L),
        G = Ki(O);
      if (!r) {
        let z = {},
          H = Ui(R, m.gridColumn, k + 1),
          I = Ui(h, u, y + 1),
          _ = Ui(D, m.gridColumn, k + 1),
          v = Ui(G, u, y + 1);
        (H && (z.top = H),
          I && (z.left = I),
          _ && (z.bottom = _),
          v && (z.right = v));
        let j = [],
          J = (N, W) => {
            for (let Y of W)
              Y.edge &&
                j.push({
                  side: N,
                  gridStart: Y.gridStart,
                  gridEnd: Y.gridEnd,
                  startPt: Y.gridStart,
                  endPt: Y.gridEnd,
                  edge: Y.edge,
                });
          };
        (J("top", R),
          J("left", h),
          J("bottom", D),
          J("right", G),
          j.length > 0 && (z.edgeSegments = j),
          (l[u][f] = z));
        continue;
      }
      let ee = r.cellBoxes[u][f],
        C = [0],
        F = 0;
      for (let z = u; z <= y; z += 1) {
        let H = r.rowBands[z];
        ((F += H.height), C.push(F));
      }
      (C.length > 1 && (C[C.length - 1] = ee.height),
        (l[u][f] = j0(
          R,
          h,
          D,
          G,
          ee.width,
          ee.height,
          r.columnWidthsPt,
          m.gridColumn,
          C,
          u,
        )));
    }
  }
  return l;
}
function pr(e) {
  return e
    ? "state" in e
      ? e.state === "edge"
        ? e.widthPt
        : 0
      : e.widthPt
    : 0;
}
var Dd = pm,
  _d = mm;
var bm = 31680 / 20,
  Ht = Object.freeze({ type: "auto", value: 0 }),
  G0 = 100,
  W0 = Object.freeze({
    mm: 72 / 25.4,
    cm: 72 / 2.54,
    in: 72,
    pt: 1,
    pc: 12,
    pi: 12,
  });
function X0(e, t) {
  for (let n of e.children)
    if (n.kind !== "textValue" && n.localName === t) return n;
}
function zd(e, t) {
  return e.attributes.find((n) => n.localName === t)?.value;
}
function xm(e) {
  if (/^\d{1,9}$/.test(e)) {
    let r = Number(e) / 20;
    return Number.isFinite(r) ? { kind: "length", pt: r } : null;
  }
  let t = /^(\d{1,7}(?:\.\d{1,4})?)%$/.exec(e);
  if (t) {
    let r = Number(t[1]);
    return Number.isFinite(r) ? { kind: "percent", percent: r } : null;
  }
  let n = /^(\d{1,9}(?:\.\d{1,4})?)(mm|cm|in|pt|pc|pi)$/.exec(e);
  if (n) {
    let r = Number(n[1]) * W0[n[2]];
    return Number.isFinite(r) ? { kind: "length", pt: r } : null;
  }
  return null;
}
function mr(e) {
  if (!e) return Ht;
  let t = zd(e, "type");
  if (t !== void 0 && t !== "pct" && t !== "dxa")
    return t === "nil" ? { type: "nil", value: 0 } : Ht;
  let n = zd(e, "w");
  if (n === void 0) return Ht;
  let r = xm(n);
  if (!r) return Ht;
  let o = /^\d{1,9}$/.test(n);
  if (r.kind === "percent" || (o && t === "pct")) {
    let a = r.kind === "percent" ? r.percent : Number(n) / 50;
    return !Number.isFinite(a) || a <= 0
      ? Ht
      : { type: "pct", value: Math.min(a, G0) };
  }
  return !Number.isFinite(r.pt) || r.pt <= 0
    ? Ht
    : { type: "dxa", value: Math.min(r.pt, bm) };
}
function ga(e, t) {
  if (!e) return;
  let n = mr(e);
  if (n.type === "dxa") return Math.min(n.value, t);
}
function Sm(e) {
  let t = X0(e, "tblGrid");
  if (!t) return [];
  let n = [];
  for (let r of t.children)
    if (
      r.kind !== "textValue" &&
      r.localName === "gridCol" &&
      (n.push(r), n.length >= 1024)
    )
      break;
  return n;
}
function $0(e) {
  let t = [];
  for (let n of e) {
    let r = zd(n, "w"),
      o = r === void 0 ? null : xm(r);
    if (!o || o.kind !== "length" || !Number.isFinite(o.pt) || o.pt <= 0) {
      t.push(void 0);
      continue;
    }
    t.push(o.pt > bm ? void 0 : o.pt);
  }
  return t;
}
var Hd = 1,
  ym = 0.001;
function V0(e, t, n, r) {
  let o = [];
  for (let i = 0; i < n; i += 1) o.push(e[i]);
  let a = t
    .filter(
      (i) =>
        i.start < n &&
        (i.preferred.type === "dxa" || (i.preferred.type === "pct" && r > 0)),
    )
    .sort((i, l) => i.span - l.span);
  for (let i of a) {
    let l = Math.min(i.start + i.span, n);
    if (l <= i.start) continue;
    let s =
      i.preferred.type === "pct"
        ? (r * i.preferred.value) / 100
        : i.preferred.value;
    if (!Number.isFinite(s) || s <= 0) continue;
    if (l - i.start === 1) {
      let p = o[i.start];
      o[i.start] = p === void 0 ? s : Math.max(p, s);
      continue;
    }
    let c = [],
      d = s;
    for (let p = i.start; p < l; p += 1) {
      let f = o[p];
      f === void 0 ? c.push(p) : (d -= f);
    }
    if (c.length === 0 || d <= 0) continue;
    let u = d / c.length;
    for (let p of c) o[p] = u;
  }
  return o;
}
function wm(e) {
  let { columnCount: t, tableWidth: n } = e,
    r = Number.isFinite(e.contentWidthPt) && e.contentWidthPt > 0,
    o = r ? e.contentWidthPt : Hd,
    a = n.type === "dxa" ? n.value : n.type === "pct" ? (o * n.value) / 100 : 0,
    i = $0(e.gridCols),
    l = V0(i, e.claims, t, a),
    s = 0,
    c = 0;
  for (let b of l) b === void 0 ? (c += 1) : (s += b);
  let d = [];
  if (c > 0) {
    let b = s > 0 ? s / Math.max(t - c, 1) : o / t,
      x = Math.max(o - s, 0) / c,
      T = Math.max(Math.min(x, b), Hd);
    for (let k of l) d.push(k ?? T);
  } else for (let b of l) d.push(b);
  let u = d.reduce((b, x) => b + x, 0);
  if (!Number.isFinite(u) || u <= 0) return new Array(t).fill(o / t);
  let p = t * Hd,
    f = e.layoutFixed || !r ? Number.POSITIVE_INFINITY : o,
    m = Math.max(a > 0 ? Math.min(a, f) : Math.min(u, f), p),
    g = n.type === "pct" && a > 0;
  if ((u <= m + ym && !g) || Math.abs(u - m) <= ym) return d;
  let y = m / u;
  return d.map((b) => b * y);
}
var ol = 16,
  ya = 3,
  rl = 31680 / 20,
  Nm = 31680 / 20,
  Pm = 1023,
  Y0 = 256,
  Rm = 31680 / 20;
function Im(e) {
  let t = e && ge(e, "jc");
  if (!t) return;
  let n = ze(t, "val");
  if (n === "center") return "center";
  if (n === "right" || n === "end") return "right";
  if (n === "left" || n === "start") return "left";
}
var vm = 31680 / 20,
  Am = { top: ya, right: ya, bottom: ya, left: ya };
function ge(e, t) {
  for (let n of e.children)
    if (n.kind !== "textValue" && n.localName === t) return n;
}
function ze(e, t) {
  return e.attributes.find((n) => n.localName === t)?.value;
}
function K0(e) {
  let t = e && ge(e, "gridSpan"),
    n = t && ze(t, "val");
  if (!n || !/^\d{1,7}$/.test(n)) return 1;
  let r = Number(n);
  return Number.isInteger(r) && r > 1 ? Math.min(r, 1024) : 1;
}
function Tm(e, t) {
  let n = e && ge(e, t),
    r = n && ze(n, "val");
  if (!r || !/^\d{1,7}$/.test(r)) return 0;
  let o = Number(r);
  return Number.isInteger(o) && o > 0 ? Math.min(o, 1024) : 0;
}
function U0(e) {
  let t = e && ge(e, "vMerge");
  return t ? ze(t, "val") !== "restart" : false;
}
function Z0(e) {
  let t = e && ge(e, "vAlign"),
    n = t && ze(t, "val");
  return n === "center" ? "center" : n === "bottom" ? "bottom" : "top";
}
function Om(e) {
  return _s(e && ge(e, "shd"));
}
function km(e, t) {
  let n = e && ge(e, t);
  if (!n) return false;
  let r = ze(n, "val");
  return r !== "0" && r !== "false";
}
var ha = Object.freeze({ rule: "auto" });
function q0(e) {
  let t = e && ge(e, "trHeight");
  if (!t) return ha;
  let n = ze(t, "hRule"),
    r = n === "auto" || n === "exact" || n === "atLeast" ? n : void 0;
  if (r === "auto") return ha;
  let o = ze(t, "val");
  if (o === void 0 || !/^\d{1,9}$/.test(o)) return ha;
  let a = Number(o);
  if (!Number.isFinite(a) || a <= 0) return ha;
  let i = Math.min(a / 20, Nm);
  return i > 0 ? { rule: r === "exact" ? "exact" : "atLeast", valuePt: i } : ha;
}
function nl(e) {
  if (!e) return;
  let t = ze(e, "w");
  if (t === void 0 || !/^\d{1,9}$/.test(t)) return;
  let n = Number(t);
  if (!Number.isFinite(n) || n < 0) return;
  let r = n / 20;
  return r > rl ? rl : r;
}
function jd(e) {
  if (!e) return {};
  let t = nl(ge(e, "top")),
    n = nl(ge(e, "left")),
    r = nl(ge(e, "bottom")),
    o = nl(ge(e, "right"));
  return {
    ...(t === void 0 ? {} : { top: t }),
    ...(n === void 0 ? {} : { left: n }),
    ...(r === void 0 ? {} : { bottom: r }),
    ...(o === void 0 ? {} : { right: o }),
  };
}
function Gd(e, t) {
  return {
    top: t.top ?? e.top,
    right: t.right ?? e.right,
    bottom: t.bottom ?? e.bottom,
    left: t.left ?? e.left,
  };
}
function ba(e, t) {
  let n = e.columnWidthsPt.reduce((o, a) => o + a, 0),
    r = t - n;
  return !Number.isFinite(r) || r <= 0
    ? 0
    : e.alignment === "center"
      ? r / 2
      : e.alignment === "right"
        ? r
        : Math.min(e.indentPt, r);
}
function Cm(e) {
  if (e === "page") return "page";
  if (e === "margin") return "margin";
  if (e === "text") return "text";
}
function Bm(e) {
  if (e === void 0 || !/^-?\d{1,9}$/.test(e)) return;
  let t = Number(e);
  if (!Number.isFinite(t)) return;
  let n = t / 20;
  return Math.max(-vm, Math.min(vm, n));
}
function Lm(e) {
  let t = e && ge(e, "tblpPr");
  if (!t) return;
  let n = ze(t, "tblpXSpec"),
    r =
      n === "left" ||
      n === "center" ||
      n === "right" ||
      n === "inside" ||
      n === "outside"
        ? n
        : void 0,
    o = ze(t, "tblpYSpec"),
    a =
      o === "inline" ||
      o === "top" ||
      o === "center" ||
      o === "bottom" ||
      o === "inside" ||
      o === "outside"
        ? o
        : void 0;
  return {
    horzAnchor: Cm(ze(t, "horzAnchor")) ?? "text",
    vertAnchor: Cm(ze(t, "vertAnchor")) ?? "text",
    ...(r ? { xSpec: r } : {}),
    xPt: Bm(ze(t, "tblpX")) ?? 0,
    ...(a ? { ySpec: a } : {}),
    yPt: Bm(ze(t, "tblpY")) ?? 0,
  };
}
function Dm(e, t, n) {
  let r = n[e.horzAnchor],
    o = r.width - t,
    a;
  if (
    (e.xSpec === "center"
      ? (a = r.left + o / 2)
      : e.xSpec === "right" || e.xSpec === "outside"
        ? (a = r.left + o)
        : e.xSpec
          ? (a = r.left)
          : (a = r.left + e.xPt),
    !Number.isFinite(a))
  )
    return r.left;
  let i = n.page.left + n.page.width;
  return Math.max(n.page.left, Math.min(a, i));
}
var J0 = Object.freeze({
  firstRow: false,
  lastRow: false,
  firstColumn: false,
  lastColumn: false,
  rowBanding: true,
  columnBanding: true,
});
function Pn(e, t) {
  let n = ze(e, t);
  if (n !== void 0) return n !== "0" && n !== "false" && n !== "off";
}
function Q0(e) {
  let t = e && ge(e, "tblLook");
  if (!t) return J0;
  let n = ze(t, "val"),
    r = n && /^[0-9A-Fa-f]{1,4}$/.test(n) ? Number.parseInt(n, 16) : 0;
  return {
    firstRow: Pn(t, "firstRow") ?? (r & 32) !== 0,
    lastRow: Pn(t, "lastRow") ?? (r & 64) !== 0,
    firstColumn: Pn(t, "firstColumn") ?? (r & 128) !== 0,
    lastColumn: Pn(t, "lastColumn") ?? (r & 256) !== 0,
    rowBanding:
      Pn(t, "noHBand") === void 0 ? (r & 512) === 0 : !Pn(t, "noHBand"),
    columnBanding:
      Pn(t, "noVBand") === void 0 ? (r & 1024) === 0 : !Pn(t, "noVBand"),
  };
}
var Wd = [
    "firstRow",
    "lastRow",
    "firstCol",
    "lastCol",
    "band1Vert",
    "band2Vert",
    "band1Horz",
    "band2Horz",
    "nwCell",
    "neCell",
    "swCell",
    "seCell",
  ],
  Fm = [
    "firstRow",
    "lastRow",
    "firstColumn",
    "lastColumn",
    "oddVBand",
    "evenVBand",
    "oddHBand",
    "evenHBand",
    "firstRowFirstColumn",
    "firstRowLastColumn",
    "lastRowFirstColumn",
    "lastRowLastColumn",
  ];
function Mm(e, t) {
  let n = e && ge(e, "cnfStyle");
  if (!n) return;
  let r = ze(n, "val");
  if (r && /^[01]{1,12}$/.test(r))
    for (let o = 0; o < r.length && o < Wd.length; o += 1)
      r[o] === "1" && t.add(Wd[o]);
  for (let o = 0; o < Fm.length; o += 1) Pn(n, Fm[o]) === true && t.add(Wd[o]);
}
var ew = [
  "band1Vert",
  "band2Vert",
  "band1Horz",
  "band2Horz",
  "firstCol",
  "lastCol",
  "firstRow",
  "lastRow",
  "nwCell",
  "neCell",
  "swCell",
  "seCell",
];
function tw(e) {
  let t = new Set();
  (Mm(e.rowProperties, t), Mm(e.cellProperties, t));
  let {
      look: n,
      rowIndex: r,
      rowCount: o,
      gridColumn: a,
      gridSpan: i,
      columnCount: l,
    } = e,
    s = t.has("firstRow") || (n.firstRow && r === 0),
    c = t.has("lastRow") || (n.lastRow && r === o - 1),
    d = t.has("firstCol") || (n.firstColumn && a === 0),
    u = t.has("lastCol") || (n.lastColumn && a + i >= l);
  if (
    !(t.has("band1Vert") || t.has("band2Vert")) &&
    n.columnBanding &&
    !d &&
    !u
  ) {
    let g = a - (n.firstColumn ? 1 : 0);
    t.add(g % 2 === 0 ? "band1Vert" : "band2Vert");
  }
  if (!(t.has("band1Horz") || t.has("band2Horz")) && n.rowBanding && !s && !c) {
    let g = r - (n.firstRow ? 1 : 0);
    t.add(g % 2 === 0 ? "band1Horz" : "band2Horz");
  }
  (d && t.add("firstCol"),
    u && t.add("lastCol"),
    s && t.add("firstRow"),
    c && t.add("lastRow"),
    s && d && t.add("nwCell"),
    s && u && t.add("neCell"),
    c && d && t.add("swCell"),
    c && u && t.add("seCell"));
  let m = [];
  for (let g of ew) t.has(g) && m.push(g);
  return m;
}
var Em = new WeakMap();
function uo(e, t, n, r, o = "all-markup") {
  let a = Em.get(e);
  if (
    a &&
    a.contentWidthPt === t &&
    a.depth === n &&
    a.styleCascade === r &&
    a.displayMode === o
  )
    return a.structure;
  let i = nw(e, t, n, r, o);
  return (
    Em.set(e, {
      contentWidthPt: t,
      depth: n,
      styleCascade: r,
      displayMode: o,
      structure: i,
    }),
    i
  );
}
function nw(e, t, n, r, o) {
  if (n >= ol || e.kind !== "table") return null;
  let a = ge(e, "tblPr"),
    i = a && ge(a, "tblStyle") ? ze(ge(a, "tblStyle"), "val") : void 0,
    l = r ? jp(r, i) : ca,
    s = Q0(a),
    c = Am,
    d = Dd;
  for (let _ of l.tablePropertyNodes)
    ((c = Gd(c, jd(ge(_, "tblCellMar")))), (d = Ld(d, el(_))));
  let u = Gd(c, jd(a && ge(a, "tblCellMar"))),
    p = Ld(d, a ? el(a) : Dd),
    f = new Map(),
    m = (_) => {
      if (l === ca) return Td;
      let v = _.join("|"),
        j = f.get(v);
      if (j) return j;
      let J = Gp(l, _);
      return (f.size < Y0 && f.set(v, J), J);
    },
    g = [],
    y = [],
    b = 1;
  for (let _ of ne(e.children)) {
    if (_.kind !== "tableRow") continue;
    let v = ge(_, "trPr"),
      j = [],
      J = [],
      N = [],
      W = Math.min(Tm(v, "gridBefore"), Pm);
    W > 0 &&
      y.push({ start: 0, span: W, preferred: mr(v && ge(v, "wBefore")) });
    let Y = W,
      $ = ne(_.children);
    for (let se of $) {
      if (se.kind !== "tableCell") continue;
      let Pe = ge(se, "tcPr"),
        he = Math.min(Y, Pm),
        fe = Math.min(K0(Pe), 1024 - he),
        ye = mr(Pe && ge(Pe, "tcW"));
      (j.push(he),
        J.push(fe),
        N.push(ye),
        y.push({ start: he, span: fe, preferred: ye }),
        (Y = he + fe));
    }
    let Q = Tm(v, "gridAfter"),
      q = Math.min(Y + Q, 1024);
    (Q > 0 &&
      Y < 1024 &&
      y.push({
        start: Y,
        span: Math.min(Q, 1024 - Y),
        preferred: mr(v && ge(v, "wAfter")),
      }),
      q > b && (b = q),
      g.push({
        node: _,
        cells: $,
        properties: v,
        starts: j,
        spans: J,
        preferred: N,
        gridColumns: q,
      }));
  }
  let x = Sm(e),
    T = x.length > 0 ? x.length : b,
    k = g.length,
    M = [];
  for (let _ = 0; _ < g.length; _ += 1) {
    let v = g[_],
      j = v.node,
      J = v.properties,
      N = 0,
      W = [];
    for (let Pe of v.cells) {
      if (Pe.kind !== "tableCell") continue;
      let he = ge(Pe, "tcPr"),
        fe = v.starts[N],
        ye = v.spans[N],
        Ae = v.preferred[N] ?? Ht,
        Ie = tw({
          look: s,
          rowIndex: _,
          rowCount: k,
          gridColumn: fe,
          gridSpan: ye,
          columnCount: T,
          rowProperties: J,
          cellProperties: he,
        });
      N += 1;
      let mt,
        lt = _d;
      for (let ve of Ie) {
        let We = l.conditional.get(ve);
        if (!We) continue;
        let st = ge(We, "tcPr");
        ((mt = Om(st) ?? mt), (lt = Fd(lt, tl(st))));
      }
      let Le = Om(he) ?? mt,
        nn = Gd(u, jd(he && ge(he, "tcMar"))),
        rn = pa(Pe.children, o);
      W.push({
        id: Pe.id,
        gridSpan: ye,
        gridColumn: fe,
        ...(x[fe]?.id ? { gridColumnId: x[fe].id } : {}),
        vMergeContinue: U0(he),
        vAlign: Z0(he),
        margins: nn,
        borders: Fd(lt, he ? tl(he) : _d),
        ...(Le === void 0 ? {} : { shading: Le }),
        preferredWidth: Ae,
        styleFormatting: m(Ie),
        blocks: rn,
      });
    }
    let Y = J ? (ge(J, "ins") ?? ge(J, "del")) : void 0,
      $ = Y ? (Y.localName === "ins" ? "insert" : "delete") : void 0,
      Q = Y && ze(Y, "id"),
      q = Y && ze(Y, "author"),
      se = Y && ze(Y, "date");
    M.push({
      id: j.id,
      ...($ ? { revisionKind: $ } : {}),
      ...(Q !== void 0 ? { revisionId: Q } : {}),
      ...(q !== void 0 ? { revisionAuthor: q } : {}),
      ...(se !== void 0 ? { revisionDate: se } : {}),
      isHeader: km(J, "tblHeader"),
      cantSplit: km(J, "cantSplit"),
      height: q0(J),
      cells: W,
    });
  }
  let E = Ht,
    P,
    L,
    O,
    R,
    h;
  for (let _ of l.tablePropertyNodes) {
    let v = ge(_, "tblW");
    v && (E = mr(v));
    let j = ge(_, "tblLayout");
    (j && (P = ze(j, "type") === "fixed"),
      (L = ga(ge(_, "tblInd"), Rm) ?? L),
      (O = Im(_) ?? O),
      (R = ga(ge(_, "tblCellSpacing"), rl) ?? R),
      (h = Lm(_) ?? h));
  }
  let D = a && ge(a, "tblW"),
    G = D ? mr(D) : E,
    ee = a && ge(a, "tblLayout"),
    C = ee ? ze(ee, "type") === "fixed" : (P ?? false),
    F = ga(a && ge(a, "tblInd"), Rm) ?? L ?? 0,
    z = Im(a) ?? O ?? "left",
    H = n === 0 ? (Lm(a) ?? h) : void 0,
    I = ga(a && ge(a, "tblCellSpacing"), rl) ?? R ?? 0;
  return {
    columnWidthsPt: wm({
      gridCols: x,
      claims: y,
      columnCount: T,
      contentWidthPt: t,
      tableWidth: G,
      layoutFixed: C,
    }),
    rows: M,
    tableWidth: G,
    layoutFixed: C,
    indentPt: F,
    alignment: z,
    ...(H ? { float: H } : {}),
    cellSpacingPt: I,
    tableBorders: p,
    defaultMargins: u,
  };
}
function al(e) {
  let t = [],
    n = 0;
  for (let r of e.members) {
    let o = Sd$1(r).length;
    (t.push({ paragraphId: r.id, base: n, length: o }), (n += o));
  }
  return { members: t, total: n };
}
function Xd(e, t) {
  let n;
  for (let r of e.members) {
    if (r.base > t) break;
    (n === void 0 || r.length > 0 || r.base > n.base) && (n = r);
  }
  return n ?? e.members[e.members.length - 1];
}
function _m(e, t) {
  let n = Xd(t, e.start);
  if (!n) return e;
  let r = e.end - n.base;
  return {
    paragraphId: n.paragraphId,
    start: e.start - n.base,
    end: Math.min(r, n.length),
  };
}
function rw(e, t) {
  return { ...e, range: _m(e.range, t) };
}
function il(e, t) {
  return e.map((n) => {
    let r = n.spans.map((u) => rw(u, t)),
      o = r[0],
      a = n.drawings?.map((u) => {
        let p = Xd(t, u.start);
        return p
          ? { ...u, paragraphId: p.paragraphId, start: u.start - p.base }
          : u;
      }),
      i = o ? r.filter((u) => u.range.paragraphId === o.range.paragraphId) : [],
      l = o
        ? (a ?? []).filter((u) => u.paragraphId === o.range.paragraphId)
        : [],
      s = o
        ? {
            paragraphId: o.range.paragraphId,
            start: Math.min(o.range.start, ...l.map((u) => u.start)),
            end: Math.max(
              i[i.length - 1].range.end,
              ...l.map((u) => u.start + 1),
            ),
          }
        : _m(n.range, t),
      c = a,
      d = n.deletedRanges
        ?.map((u) => ({ deleted: u, member: Xd(t, u.start) }))
        .filter(({ member: u }) => u?.paragraphId === s.paragraphId)
        .map(({ deleted: u, member: p }) => ({
          start: u.start - (p?.base ?? 0),
          end: u.end - (p?.base ?? 0),
        }));
    return {
      ...n,
      range: s,
      spans: r,
      ...(c ? { drawings: c } : {}),
      ...(d ? { deletedRanges: d } : {}),
    };
  });
}
var Vd = 512,
  zm = 9,
  zt = 31680 / 20,
  ow = 8,
  aw = 128;
function xa(e, t) {
  return e.kind !== "textValue" && e.namespaceUri === ma$1 && e.localName === t;
}
function Ye(e, t) {
  for (let n of e.attributes) if (n.localName === t) return n.value;
}
function Tt(e, t) {
  for (let n of e.children) if (xa(n, t)) return n;
}
function Rn(e, t = false) {
  return e === void 0 || !(t ? /^-?\d{1,9}$/ : /^\d{1,9}$/).test(e)
    ? null
    : Number(e);
}
function iw(e) {
  let t = e / 20;
  return !Number.isFinite(t) || t <= 0 ? 0 : t > zt ? zt : t;
}
function $d(e) {
  let t = e / 20;
  return Number.isFinite(t) ? (t > zt ? zt : t < -zt ? -zt : t) : 0;
}
function lw(e) {
  let t = { left: 0, right: 0, hanging: 0, firstLine: 0 };
  if (!e) return t;
  let n = Tt(e, "ind");
  if (!n) return t;
  let r = Rn(Ye(n, "left") ?? Ye(n, "start"), true),
    o = Rn(Ye(n, "right") ?? Ye(n, "end"), true),
    a = Rn(Ye(n, "hanging")),
    i = Rn(Ye(n, "firstLine"), true);
  return {
    left: r === null ? 0 : $d(r),
    right: o === null ? 0 : $d(o),
    hanging: a === null ? 0 : iw(a),
    firstLine: i === null ? 0 : $d(i),
    stated: {
      left: r !== null,
      right: o !== null,
      firstLineOffset: a !== null || i !== null,
    },
  };
}
function sw(e) {
  return e === "space" ? "space" : e === "nothing" ? "nothing" : "tab";
}
function dw(e) {
  return e === "center"
    ? "center"
    : e === "right" || e === "end"
      ? "right"
      : "left";
}
function cw(e, t) {
  let n = Tt(e, t);
  if (!n) return false;
  let r = Ye(n, "val");
  return r !== "0" && r !== "false" && r !== "off";
}
function Hm(e, t) {
  let n = Tt(e, t);
  if (!n) return;
  let r = Ye(n, "val");
  if (!(r === void 0 || r.length === 0 || r.length > aw)) return r;
}
function uw(e, t) {
  for (let n of e) {
    if (n.localName !== t) continue;
    let r = n.attributes?.val;
    return !(r === "0" || r === "false");
  }
  return false;
}
function jm(e) {
  let t = Rn(Ye(e, "ilvl"));
  if (t === null || t < 0 || t > 8) return null;
  let n = Tt(e, "start"),
    r = 1;
  if (n) {
    let b = Rn(Ye(n, "val"));
    b !== null && b >= 0 && (r = Math.min(b, 9999));
  }
  let o = Tt(e, "numFmt"),
    a = (o ? Ye(o, "val") : void 0) ?? "decimal",
    i = Tt(e, "lvlText"),
    l = i ? (Ye(i, "val") ?? "") : "",
    s = Tt(e, "lvlJc"),
    c = dw(s ? Ye(s, "val") : void 0),
    d = Tt(e, "suff"),
    u = sw(d ? Ye(d, "val") : void 0),
    p = Tt(e, "lvlRestart"),
    f;
  if (p) {
    let b = Rn(Ye(p, "val"));
    b !== null && b >= 0 && b <= 9 && (f = b);
  }
  let m = Tt(e, "pPr"),
    g = Tt(e, "rPr"),
    y = g ? Yr(g) : [];
  return {
    ilvl: t,
    start: r,
    numFmt: a.length > 64 ? "decimal" : a,
    lvlText: l.length > 64 ? l.slice(0, 64) : l,
    lvlJc: c,
    suff: u,
    indent: lw(m),
    ...(f !== void 0 ? { lvlRestart: f } : {}),
    isLgl: cw(e, "isLgl"),
    runProperties: y,
    vanish: uw(y, "vanish"),
  };
}
function fw(e) {
  let t = Ye(e, "abstractNumId");
  if (t === void 0 || t.length === 0 || t.length > 64) return null;
  let n = new Map();
  for (let a of e.children) {
    if (!xa(a, "lvl")) continue;
    if (n.size >= 9) break;
    let i = jm(a);
    i && !n.has(i.ilvl) && n.set(i.ilvl, i);
  }
  let r = Hm(e, "numStyleLink"),
    o = Hm(e, "styleLink");
  return {
    abstractNumId: t,
    levels: n,
    ...(r !== void 0 ? { numStyleLink: r } : {}),
    ...(o !== void 0 ? { styleLink: o } : {}),
  };
}
function pw(e) {
  let t = Rn(Ye(e, "ilvl"));
  if (t === null || t < 0 || t > 8) return null;
  let n = Tt(e, "startOverride"),
    r;
  if (n) {
    let i = Rn(Ye(n, "val"));
    i !== null && i >= 0 && (r = Math.min(i, 9999));
  }
  let o = Tt(e, "lvl"),
    a = o ? (jm(o) ?? void 0) : void 0;
  return r === void 0 && a === void 0
    ? { ilvl: t, override: {} }
    : {
        ilvl: t,
        override: {
          ...(r !== void 0 ? { startOverride: r } : {}),
          ...(a ? { level: a } : {}),
        },
      };
}
function mw(e) {
  let t = Ye(e, "numId");
  if (t === void 0 || t.length === 0 || t.length > 64) return null;
  let n = Tt(e, "abstractNumId"),
    r = n ? Ye(n, "val") : void 0;
  if (!r || r.length > 64) return null;
  let o = new Map();
  for (let a of e.children) {
    if (!xa(a, "lvlOverride")) continue;
    if (o.size >= zm) break;
    let i = pw(a);
    i && !o.has(i.ilvl) && o.set(i.ilvl, i.override);
  }
  return { numId: t, abstractNumId: r, overrides: o };
}
function gw(e) {
  let t = new Map(),
    n = new Map();
  if (!e) return { abstractNums: t, nums: n };
  let r = 0,
    o = 0;
  for (let a of e.children) {
    if (xa(a, "abstractNum")) {
      if (r >= Vd) continue;
      r += 1;
      let i = fw(a);
      i && !t.has(i.abstractNumId) && t.set(i.abstractNumId, i);
      continue;
    }
    if (xa(a, "num")) {
      if (o >= Vd) continue;
      o += 1;
      let i = mw(a);
      i && !n.has(i.numId) && n.set(i.numId, i);
    }
  }
  return { abstractNums: t, nums: n };
}
function hw(e, t, n) {
  let r = new Set([t.abstractNumId]),
    o = t;
  for (let a = 0; a < ow; a += 1) {
    let i = o.numStyleLink;
    if (i === void 0) return o;
    let l = n(i);
    if (l === void 0) return null;
    let s = e.nums.get(l);
    if (!s) return null;
    let c = e.abstractNums.get(s.abstractNumId);
    if (!c || r.has(c.abstractNumId)) return null;
    (r.add(c.abstractNumId), (o = c));
  }
  return null;
}
function Gm(e, t) {
  let n = false,
    r = new Map(e.abstractNums);
  for (let [o, a] of e.abstractNums) {
    if (a.numStyleLink === void 0) continue;
    let i = hw(e, a, t);
    !i ||
      i.levels === a.levels ||
      i.levels.size === 0 ||
      (r.set(o, { ...a, levels: i.levels }), (n = true));
  }
  return n ? { abstractNums: r, nums: e.nums } : e;
}
function fo(e, t, n) {
  if (n < 0 || n > 8) return null;
  let r = e.nums.get(t);
  if (!r) return null;
  let o = e.abstractNums.get(r.abstractNumId);
  if (!o) return null;
  let a = r.overrides.get(n),
    i = a?.level ?? o.levels.get(n);
  return i
    ? {
        abstractNumId: r.abstractNumId,
        level: i,
        ...(a?.startOverride !== void 0
          ? { startOverride: a.startOverride }
          : {}),
      }
    : null;
}
var Yd = Object.freeze({ abstractNums: new Map(), nums: new Map() });
function yw(e, t) {
  let n = e.nums.get(t),
    r = [];
  for (let o = 0; o <= 8; o += 1) {
    let a = fo(e, t, o);
    if (!a) {
      r.push(1);
      continue;
    }
    let i = n?.overrides.get(o)?.startOverride;
    r.push(i ?? a.level.start);
  }
  return r;
}
function bw(e, t, n) {
  let r = [];
  for (let o = 0; o <= 8; o += 1) {
    let a = fo(e, t, o);
    r.push(a?.level.numFmt ?? "decimal");
  }
  return { formats: r, starts: [...n] };
}
function xw(e, t) {
  if (t === 0) return null;
  if (t === void 0) return e - 1;
  let n = t - 1;
  return n >= e ? null : n;
}
function Kd(e) {
  let t = new Map(),
    n = new Map(),
    r = new Map(),
    o = (a) => {
      let i = t.get(a);
      i || ((i = [0, 0, 0, 0, 0, 0, 0, 0, 0]), t.set(a, i));
      let l = n.get(a);
      l ||
        ((l = [false, false, false, false, false, false, false, false, false]),
        n.set(a, l));
      let s = r.get(a);
      return (
        s || ((s = yw(e, a)), r.set(a, s)),
        { counters: i, initialized: l, starts: s }
      );
    };
  return {
    advance(a, i) {
      if (i < 0 || i > 8 || a.length === 0 || a.length > 64) return null;
      let l = fo(e, a, i);
      if (!l) return null;
      let { abstractNumId: s, level: c } = l,
        { counters: d, initialized: u, starts: p } = o(a),
        { formats: f } = bw(e, a, p);
      for (let k = i + 1; k <= 8; k += 1) {
        let M = fo(e, a, k);
        if (!M) continue;
        let E = xw(k, M.level.lvlRestart);
        E !== null && i <= E && (u[k] = false);
      }
      let m = p[i] ?? c.start;
      u[i] ? (d[i] += 1) : ((d[i] = m), (u[i] = true));
      let g = d.slice(),
        y = u.slice(),
        b = g.map((k, M) => (y[M] ? k : (p[M] ?? 1))),
        x = c.isLgl
          ? f.map((k) => (k === "bullet" || k === "none" ? k : "decimal"))
          : f,
        T = c.vanish
          ? ""
          : c.numFmt === "bullet" && !/%[1-9]/.test(c.lvlText)
            ? c.lvlText
            : Qs(c.lvlText, b, x);
      return {
        abstractNumId: s,
        numId: a,
        ilvl: i,
        level: c,
        counters: g,
        markerText: T,
      };
    },
  };
}
function Zd(e) {
  return e.kind !== "textValue";
}
function Wm(e, t) {
  for (let n of e.attributes) if (n.localName === t) return n.value;
}
function ll(e, t) {
  for (let n of e.children) if (Zd(n) && n.localName === t) return n;
}
function qd(e) {
  let t = null;
  for (let n of e) {
    if (!Zd(n)) continue;
    let r = ll(n, "numPr");
    if (!r) continue;
    let o = ll(r, "ilvl"),
      a = ll(r, "numId"),
      i = a ? Wm(a, "val") : void 0,
      l = o ? Wm(o, "val") : "0";
    if (!i || i === "0") {
      t = null;
      continue;
    }
    if (i.length > 64) {
      t = null;
      continue;
    }
    let s = /^\d{1,2}$/.test(l ?? "") ? Number(l) : 0;
    if (s < 0 || s > 8) {
      t = null;
      continue;
    }
    t = { numId: i, ilvl: s };
  }
  return t;
}
function Sw(e, t) {
  let n = new Set(),
    r = e.styles.get(t);
  for (let o = 0; r !== void 0 && o < ji; o += 1) {
    if (n.has(r.styleId)) return;
    n.add(r.styleId);
    let a = r.paragraphPropertiesNode,
      i = a ? qd([a]) : null;
    if (i) return i.numId;
    r = r.basedOn === null ? void 0 : e.styles.get(r.basedOn);
  }
}
var Ud = new WeakMap();
function Jd(e, t) {
  if (!t) return e;
  let n = Ud.get(e);
  if (n && n.styleCascade === t) return n.linked;
  let r = Gm(e, (a) => Sw(t, a)),
    o = { styleCascade: t, linked: r };
  return (Ud.set(e, o), Ud.set(r, o), r);
}
function Xm(e) {
  return Number.isFinite(e) ? (e > zt ? zt : e < -zt ? -zt : e) : 0;
}
function $m(e) {
  let t = null;
  for (let n of e) {
    if (n.localName !== "ind") continue;
    let r = n.attributes?.hanging,
      o = n.attributes?.firstLine;
    (r === void 0 && o === void 0) ||
      (t = {
        hanging: r !== void 0 && /^\d{1,9}$/.test(r) ? Xm(Number(r) / 20) : 0,
        firstLine:
          o !== void 0 && /^-?\d{1,9}$/.test(o) ? Xm(Number(o) / 20) : 0,
      });
  }
  return t;
}
function Vm(e) {
  return e.some(
    (t) =>
      t.localName === "ind" &&
      (t.attributes?.left !== void 0 || t.attributes?.start !== void 0),
  );
}
function Ym(e) {
  return e.some(
    (t) =>
      t.localName === "ind" &&
      (t.attributes?.right !== void 0 || t.attributes?.end !== void 0),
  );
}
function Zm(e, t, n = []) {
  let r = e.stated ?? { left: false, right: false, firstLineOffset: false },
    o = la(t),
    a = la(n),
    i = { hanging: e.hanging, firstLine: e.firstLine },
    l = Vm(n) ? a.left : r.left ? e.left : Vm(t) ? o.left : e.left,
    s = Ym(n) ? a.right : r.right ? e.right : Ym(t) ? o.right : e.right,
    c = $m(n) ?? (r.firstLineOffset ? i : ($m(t) ?? i));
  return { left: l, right: s, ...c };
}
function qm(e, t = 8) {
  let n = [],
    r = (o, a) => {
      for (let i of o) {
        if (i.kind === "paragraph") {
          n.push(i);
          continue;
        }
        if (!(i.kind !== "table" || a >= t)) {
          for (let l of ne(i.children))
            if (l.kind === "tableRow")
              for (let s of ne(l.children)) {
                if (s.kind !== "tableCell") continue;
                let c = Pb$1(s.children);
                r(c, a + 1);
              }
        }
      }
    };
  return (r(e, 0), n);
}
var Km = new WeakMap();
function ww(e, t) {
  let n = Km.get(e);
  if (n && n.styleCascade === t) return n;
  let r = e.children.find((s) => s.kind === "paragraphProperties"),
    o = t ? co(t, r) : null,
    a = o ? o.paragraphPropertyNodes : r ? [r] : [],
    i = r && Zd(r) ? ll(r, "rPr") : void 0,
    l = {
      styleCascade: t,
      numPr: qd(a),
      inheritedParagraphProperties: o?.inheritedParagraphProperties ?? [],
      directProps: vt(r),
      inheritedMarkProps: o ? o.markRunProperties : vt(i),
      perLevel: new WeakMap(),
    };
  return (Km.set(e, l), l);
}
function Jm(e, t, n, r) {
  let o = new Map();
  if (t.nums.size === 0) return o;
  let a = Jd(t, n),
    i = Kd(a);
  for (let l of qm(e)) {
    let s = ww(l, n),
      c = s.numPr;
    if (!c) continue;
    let d = i.advance(c.numId, c.ilvl);
    if (!d) continue;
    let u = s.perLevel.get(d.level);
    if (!u) {
      let y = Zm(d.level.indent, s.inheritedParagraphProperties, s.directProps),
        b = Sn(s.inheritedMarkProps, d.level.runProperties, n);
      ((u = { indent: y, markerStyle: De(b, n?.themeFonts) }),
        s.perLevel.set(d.level, u));
    }
    let { indent: p, markerStyle: f } = u,
      m = Kr(d.markerText, f.fontFamily, r),
      g = [
        d.numId,
        d.ilvl,
        d.level.numFmt,
        d.level.lvlText,
        p.left,
        p.right,
        p.hanging,
        p.firstLine,
        d.level.lvlJc,
        d.level.suff,
        d.level.vanish ? 1 : 0,
        m.length,
      ].join("|");
    o.set(l.id, {
      numId: d.numId,
      ilvl: d.ilvl,
      abstractNumId: d.abstractNumId,
      numFmt: d.level.numFmt,
      markerText: m,
      markerAlign: d.level.lvlJc,
      suffix: d.level.suff,
      indent: p,
      markerStyle: f,
      cacheToken: g,
    });
  }
  return o;
}
var Um = new WeakMap();
function Qd(e, t) {
  if (e.listItems === void 0) {
    let o = Um.get(t);
    if (
      o &&
      o.rawIndex === e.numberingIndex &&
      o.styleCascade === e.styleCascade &&
      o.isFontAvailable === e.isFontAvailable
    )
      return {
        ...e,
        numberingIndex: o.linkedIndex,
        ...(o.listItems ? { listItems: o.listItems } : {}),
      };
  }
  let n = Jd(e.numberingIndex ?? Yd, e.styleCascade),
    r =
      e.listItems ??
      (n.nums.size > 0 ? Jm(t, n, e.styleCascade, e.isFontAvailable) : void 0);
  return (
    e.listItems === void 0 &&
      Um.set(t, {
        rawIndex: e.numberingIndex,
        styleCascade: e.styleCascade,
        isFontAvailable: e.isFontAvailable,
        linkedIndex: n,
        listItems: r,
      }),
    { ...e, numberingIndex: n, ...(r ? { listItems: r } : {}) }
  );
}
function sl(e, t, n, r) {
  if (
    ((!e.markerText || (e.indent.hanging <= 0 && t <= 0)) && !e.markerText) ||
    !e.markerText
  )
    return null;
  let o = e.indent.left,
    a = e.indent.hanging,
    i = Math.min(0, o),
    l = Math.max(i, o - a),
    s = Math.max(a, t),
    c = l;
  return (
    e.markerAlign === "right"
      ? (c = o - t)
      : e.markerAlign === "center" && (c = l + (s - t) / 2),
    c < i && (c = i),
    { x: c, y: n, width: Math.max(t, 0), height: r }
  );
}
function Pw(e, t, n = Gr, r = Number.POSITIVE_INFINITY) {
  if (!e.markerText) return 0;
  let o = t.measure(e.markerText, e.markerStyle),
    a = sl(e, o, 0, 0);
  if (!a) return 0;
  let i = e.indent.left,
    l = a.x + a.width;
  return e.suffix === "nothing"
    ? l - i
    : e.suffix === "space"
      ? l + t.measure(" ", e.markerStyle) - i
      : l <= i
        ? 0
        : Wr(n, l, r).positionPt - i;
}
function dl(e, t, n, r, o) {
  return e
    ? Pw(e, n, r, o === void 0 ? void 0 : t.left + o)
    : t.hanging > 0
      ? -t.hanging
      : t.firstLine;
}
function cl(e, t, n, r = 0) {
  if (!e || !e.markerText || !n) return;
  let o = t.measure(e.markerText, e.markerStyle),
    a = sl(e, o, n.y, n.height);
  if (a)
    return {
      text: e.markerText,
      style: e.markerStyle,
      box: { x: a.x + r, y: a.y, width: a.width, height: a.height },
      level: e.ilvl,
      numId: e.numId,
      numFmt: e.numFmt,
    };
}
var Qm = new WeakMap(),
  eg = new WeakMap();
function In(e) {
  let t = Qm.get(e);
  if (t) return t;
  let n = new Set(),
    r = [];
  for (let o of e.pages)
    for (let a of Je(o)) {
      for (let i of a.lines)
        for (let l of pt(i))
          n.has(l.paragraphId) || (n.add(l.paragraphId), r.push(l.paragraphId));
      a.lines.length === 0 &&
        !n.has(a.paragraphId) &&
        (n.add(a.paragraphId), r.push(a.paragraphId));
    }
  return (Qm.set(e, r), r);
}
function po(e) {
  let t = eg.get(e);
  if (t) return t;
  let n = new Map();
  for (let [r, o] of In(e).entries()) n.set(o, r);
  return (eg.set(e, n), n);
}
var tg = new WeakMap();
function pt(e) {
  let t = tg.get(e);
  if (t) return t;
  let n = {
      paragraphId: e.range.paragraphId,
      start: e.range.start,
      end: e.range.end,
      spans: e.spans,
      drawings: e.drawings ?? [],
    },
    o = e.spans.some((a) => a.range.paragraphId !== e.range.paragraphId)
      ? Rw(e)
      : [n];
  return (tg.set(e, o), o);
}
function Rw(e) {
  let t = [];
  for (let n of e.spans) {
    let r = t[t.length - 1];
    if (r && r.paragraphId === n.range.paragraphId) {
      t[t.length - 1] = {
        ...r,
        start: Math.min(r.start, n.range.start),
        end: Math.max(r.end, n.range.end),
        spans: [...r.spans, n],
      };
      continue;
    }
    t.push({
      paragraphId: n.range.paragraphId,
      start: n.range.start,
      end: n.range.end,
      spans: [n],
      drawings: [],
    });
  }
  return t.map((n) => ({
    ...n,
    drawings: (e.drawings ?? []).filter((r) => r.paragraphId === n.paragraphId),
  }));
}
function vn(e, t) {
  return pt(e).find((n) => n.paragraphId === t) ?? null;
}
function mo(e, t, n, r) {
  let o = po(e),
    a = o.get(t.paragraphId) ?? -1,
    i = o.get(n.paragraphId) ?? -1,
    l = o.get(r.paragraphId) ?? -1;
  if (a < i || a > l) return null;
  let s = a === i ? Math.max(t.start, n.offset) : t.start,
    c = a === l ? Math.min(t.end, r.offset) : t.end;
  return c > s ? { start: s, end: c } : null;
}
function TO(e, t) {
  for (let n of e.pages)
    for (let r of Je(n)) {
      let o = Wn(r).indexOf(t);
      if (o > 0) return Wn(r).slice(0, o).reverse();
    }
  return [];
}
var ng = new WeakMap();
function Wn(e) {
  let t = ng.get(e);
  if (t) return t;
  let n = [];
  for (let r of e.lines ?? [])
    for (let o of pt(r)) n.includes(o.paragraphId) || n.push(o.paragraphId);
  return (n.includes(e.paragraphId) || n.push(e.paragraphId), ng.set(e, n), n);
}
function Iw(e, t) {
  let n = Wn(e);
  if (n.length === 1)
    return n[0] === t ? { start: e.range.start, end: e.range.end } : null;
  let r = Number.POSITIVE_INFINITY,
    o = Number.NEGATIVE_INFINITY;
  for (let a of e.lines ?? []) {
    let i = vn(a, t);
    i && ((r = Math.min(r, i.start)), (o = Math.max(o, i.end)));
  }
  return o >= r ? { start: r, end: o } : null;
}
function ec(e, t, n) {
  let r = Iw(e, t);
  return r !== null && n >= r.start && n < r.end;
}
function OO(e, t) {
  for (let n of e.pages) for (let r of Je(n)) if (r.paragraphId === t) return r;
  for (let n of e.pages) for (let r of Je(n)) if (Wn(r).includes(t)) return r;
  return null;
}
var ac = 8,
  rg = new WeakMap();
function fl(e) {
  let t = rg.get(e);
  if (t) return t;
  let n = [],
    r = new Map(),
    o = new Map(),
    a = new Map(),
    i = new Map(),
    l = new Map(),
    s = (d, u) => {
      for (let p of d) {
        if (p.kind === "paragraph") {
          if (!u) for (let f of p.lines) o.set(f.range.paragraphId, f.id);
          continue;
        }
        for (let f of p.rows) {
          if (!f.isHeaderRepeat && !r.has(f.id)) {
            let m = a.get(p.tableId) ?? 0;
            (r.set(f.id, m), a.set(p.tableId, m + 1));
          }
          for (let m of f.cells) {
            if (!f.isHeaderRepeat && !u) {
              let g = `${p.tableId}|${m.gridColumn}`;
              if (m.blocks.length === 0) {
                let y = l.get(g);
                y && i.set(m, y);
              } else l.set(g, { row: f, cell: m });
            }
            s(m.blocks, u || f.isHeaderRepeat);
          }
        }
      }
    };
  for (let d of e.pages) (n.push(d.box.y), s(d.fragments, false));
  let c = {
    pageTops: n,
    rowIndexById: r,
    lastLineIdOfParagraph: o,
    mergeOriginOf: i,
  };
  return (rg.set(e, c), c);
}
function Pa(e, t) {
  let n = fl(e).pageTops;
  if (n.length === 0) return -1;
  let r = 0,
    o = n.length - 1,
    a = 0;
  for (; r <= o;) {
    let i = (r + o) >> 1;
    n[i] <= t ? ((a = i), (r = i + 1)) : (o = i - 1);
  }
  return a;
}
function vw(e, t) {
  let n = e.pages[Pa(e, t.y)];
  if (!n) return false;
  for (let r of [n.header, n.footer]) if (r && ml(r.box, t)) return true;
  return false;
}
function rc(e, t, n, r = false) {
  if (!e || e.length === 0) return null;
  let o = [...e].sort((a, i) =>
    a.behindDocument !== i.behindDocument
      ? a.behindDocument
        ? -1
        : 1
      : i.relativeHeight - a.relativeHeight,
  );
  for (let a of o) {
    if ((r && a.behindDocument) || !Sa(a, t)) continue;
    let i = { paragraphId: a.anchorParagraphId, offset: a.start };
    return {
      position: i,
      caret: {
        position: i,
        x: a.x,
        y: a.y,
        height: a.height,
        lineId: "",
        pageIndex: n,
      },
      pageIndex: n,
      lineId: "",
      cell: null,
      contentControlId: null,
      onGlyphs: true,
      drawing: Object.freeze({
        drawingNodeId: a.drawingNodeId,
        paragraphId: a.anchorParagraphId,
        start: a.start,
      }),
    };
  }
  return null;
}
function pl(e, t, n, r = {}) {
  let o = e.pages[t];
  if (!o) return null;
  let a = {
      layout: e,
      pageIndex: o.index,
      verticalWeight: r.verticalWeight ?? ac,
      measurer: r.measurer,
    },
    i = og(e, o.index, n),
    l = (o.anchoredDrawings ?? []).filter((p) => !p.behindDocument),
    s = (o.anchoredDrawings ?? []).filter((p) => p.behindDocument),
    c = rc(l, n, a.pageIndex);
  if (c) return { ...c, contentControlId: i };
  let d = ul(o.fragments, n, a, null);
  if (d?.onGlyphs) return { ...d, contentControlId: i };
  let u = rc(s, n, a.pageIndex);
  if (u) return { ...u, contentControlId: i };
  if (d) return { ...d, contentControlId: i };
  for (let p = 1; p < e.pages.length; p += 1)
    for (let f of [t - p, t + p]) {
      let m = e.pages[f];
      if (!m) continue;
      let g = ul(m.fragments, n, { ...a, pageIndex: m.index }, null);
      if (g) return { ...g, contentControlId: og(e, m.index, n) };
    }
  return null;
}
function EO(e, t, n, r, o = {}) {
  let a = e.pages[t];
  if (!a) return null;
  let i = {
    layout: e,
    pageIndex: a.index,
    verticalWeight: o.verticalWeight ?? ac,
    measurer: o.measurer,
  };
  return ul(n, r, i, null);
}
function Tw(e, t, n = {}) {
  let r = e.pages[Pa(e, t.y)];
  if (!r) return null;
  for (let o of [r.header, r.footer]) {
    if (!o?.anchoredDrawings || o.anchoredDrawings.length === 0) continue;
    let a = Object.freeze({ x: t.x - o.box.x, y: t.y - o.box.y }),
      i = rc(o.anchoredDrawings, a, r.index);
    if (i) return i;
  }
  return pl(
    e,
    r.index,
    { x: t.x - r.contentBox.x, y: t.y - r.contentBox.y },
    n,
  );
}
function ml(e, t) {
  return (
    t.x >= e.x && t.x < e.x + e.width && t.y >= e.y && t.y < e.y + e.height
  );
}
function gl(e, t, n) {
  let r = e.contentControls ?? [],
    o = null;
  for (let a of r)
    for (let i of a.fragments)
      i.pageIndex === t &&
        ml(i.box, n) &&
        (!o || a.nestingDepth > o.nestingDepth) &&
        (o = a);
  return o;
}
function og(e, t, n) {
  return gl(e, t, n)?.id ?? null;
}
function oc(e, t, n) {
  let r = Math.max(e.x - t.x, 0, t.x - (e.x + e.width)),
    o = Math.max(e.y - t.y, 0, t.y - (e.y + e.height));
  return r + o * n;
}
function Ow(e, t, n) {
  return e.kind !== "table" ||
    Math.max(e.box.y - t.y, 0, t.y - (e.box.y + e.box.height)) > 0
    ? oc(e.box, t, n)
    : 0;
}
function ul(e, t, n, r) {
  if (e.length === 0) return null;
  let o = null;
  for (let i of e) {
    if (!ml(i.box, t)) continue;
    o = i;
    let l = ag(i, t, n, r);
    if (l) return l;
    break;
  }
  let a = e
    .filter((i) => i !== o)
    .map((i) => ({ block: i, score: Ow(i, t, n.verticalWeight) }))
    .sort((i, l) => i.score - l.score);
  for (let { block: i } of a) {
    let l = ag(i, t, n, r);
    if (l) return l;
  }
  return null;
}
function ag(e, t, n, r) {
  return e.kind === "paragraph" ? kw(e, t, n, r, ml(e.box, t)) : Aw(e, t, n);
}
function kw(e, t, n, r, o) {
  let a = Cw(e.lines, t.y);
  if (!a) return null;
  let i = Mw(a, t.x, t.y, n),
    l = Lw(a, t.x),
    s = Math.min(Math.max(i.offset, l.start), l.end),
    c = { paragraphId: l.paragraphId, offset: s },
    d = Ra(a, s, n.measurer, l);
  return {
    position: c,
    caret: {
      position: c,
      x: i.x,
      y: d.y,
      height: d.height,
      lineId: a.id,
      pageIndex: n.pageIndex,
    },
    pageIndex: n.pageIndex,
    lineId: a.id,
    cell: r,
    onGlyphs:
      o && i.withinSpan && t.y >= a.box.y && t.y < a.box.y + a.box.height,
    contentControlId: null,
    drawing: i.drawing && i.withinSpan ? Bw(i.drawing) : null,
  };
}
function Cw(e, t) {
  if (e.length === 0) return null;
  for (let o of e) if (t >= o.box.y && t < o.box.y + o.box.height) return o;
  let n = e[0],
    r = Number.POSITIVE_INFINITY;
  for (let o of e) {
    let a = t < o.box.y ? o.box.y - t : t - (o.box.y + o.box.height);
    a < r && ((r = a), (n = o));
  }
  return n;
}
function Bw(e) {
  return Object.freeze({
    drawingNodeId: e.drawingNodeId,
    paragraphId: e.paragraphId,
    start: e.start,
  });
}
function Lw(e, t) {
  let n = pt(e),
    r = n[0];
  for (let o of n) {
    let a = o.spans[0];
    if (a === void 0) continue;
    let i = o.spans[o.spans.length - 1];
    if ((t >= a.box.x && (r = o), t < i.box.x + i.box.width)) break;
  }
  return r;
}
function Fw(e, t, n) {
  for (let r of n ?? e.drawings ?? [])
    if (r.start === t || r.start + 1 === t) return r;
  return null;
}
function Sa(e, t) {
  let n = e.hitBounds;
  return t.x < n.x || t.x >= n.x + n.width || t.y < n.y || t.y >= n.y + n.height
    ? false
    : ud(t.x, t.y, e.geometry);
}
function Mw(e, t, n, r) {
  let o = e.spans;
  for (let s of e.drawings ?? [])
    if (Sa(s, { x: t, y: n }))
      return {
        offset: s.start,
        x: s.hitBounds.x,
        withinSpan: true,
        drawing: s,
      };
  if (o.length === 0 && (e.drawings?.length ?? 0) > 0) {
    let s = e.drawings[0];
    if (t <= s.advanceStart)
      return {
        offset: e.range.start,
        x: s.advanceStart,
        withinSpan: false,
        drawing: s,
      };
    let c = e.drawings[e.drawings.length - 1];
    if (t >= c.advanceEnd) return tc(e, c.advanceEnd, r);
    for (let d of e.drawings ?? [])
      if (t >= d.advanceStart && t < d.advanceEnd) {
        let u = t >= d.x + d.width / 2;
        return {
          offset: u ? d.start + 1 : d.start,
          x: u ? d.advanceEnd : d.advanceStart,
          withinSpan: Sa(d, { x: t, y: n }),
          drawing: d,
        };
      }
  }
  if (o.length === 0)
    return { offset: e.range.start, x: e.contentX, withinSpan: false };
  let a = o[0];
  if (t <= a.box.x)
    return { offset: e.range.start, x: a.box.x, withinSpan: false };
  let i = o[o.length - 1],
    l = i.box.x + i.box.width;
  if (t >= l) return tc(e, l, r);
  for (let s of o)
    if (t >= s.box.x && t < s.box.x + s.box.width) return Ew(s, t, r);
  for (let s = 0; s < o.length; s += 1) {
    let c = o[s];
    for (let d of e.drawings ?? []) {
      if (t >= d.advanceStart && t < d.advanceEnd) {
        let u = Sa(d, { x: t, y: n }),
          p = t >= d.x + d.width / 2;
        return {
          offset: p ? d.start + 1 : d.start,
          x: p ? d.advanceEnd : d.advanceStart,
          withinSpan: u,
          drawing: d,
        };
      }
      if (!(
        d.start <= c.range.start && d.hitBounds.x + d.hitBounds.width <= c.box.x
      )) {
        if (Sa(d, { x: t, y: n }))
          return {
            offset: d.start,
            x: d.hitBounds.x,
            withinSpan: true,
            drawing: d,
          };
        if (t < c.box.x && t >= d.hitBounds.x + d.hitBounds.width)
          return {
            offset: d.start + 1,
            x: d.hitBounds.x + d.hitBounds.width,
            withinSpan: false,
            drawing: d,
          };
        if (t < d.hitBounds.x && t >= (o[s - 1]?.box.x ?? e.contentX))
          return {
            offset: d.start,
            x: d.hitBounds.x,
            withinSpan: false,
            drawing: d,
          };
      }
    }
    if (t < c.box.x) {
      let d = o[s - 1],
        u = d.box.x + d.box.width;
      return t - u <= c.box.x - t
        ? { offset: d.range.end, x: u, withinSpan: false }
        : { offset: c.range.start, x: c.box.x, withinSpan: false };
    }
  }
  return tc(e, l, r);
}
function tc(e, t, n) {
  let r = ug(n.layout, e);
  if (r === e.range.end) return { offset: r, x: t, withinSpan: false };
  for (let o = e.spans.length - 1; o >= 0; o -= 1) {
    let a = e.spans[o];
    if (r < a.range.start) continue;
    let i = r - a.range.start,
      l = n.measurer
        ? wa(a, i, n.measurer)
        : a.box.width *
          (a.range.end > a.range.start ? i / (a.range.end - a.range.start) : 0);
    return { offset: r, x: a.box.x + l, withinSpan: false };
  }
  return { offset: r, x: t, withinSpan: false };
}
function ug(e, t) {
  let n = t.range.end;
  if (n > t.range.start && nc(t, n - 1) === Xb$1) return n - 1;
  if (fl(e).lastLineIdOfParagraph.get(t.range.paragraphId) === t.id) return n;
  let r = n;
  for (
    r > t.range.start &&
    nc(t, r - 1) ===
      `
` &&
    (r -= 1);
    r > t.range.start && nc(t, r - 1) === " ";
  )
    r -= 1;
  return r;
}
function nc(e, t) {
  for (let n of e.spans)
    if (!(t < n.range.start || t >= n.range.end))
      return n.text.length !== n.range.end - n.range.start
        ? null
        : (n.text[t - n.range.start] ?? null);
  return null;
}
var ig = new WeakMap(),
  lg = new WeakMap();
function sg(e) {
  let t = ws(),
    n = ig.get(e);
  if (n && n.epoch === t) return n.boundaries;
  let r = [0];
  for (let o of At(e.text)) r.push(o.utf16To);
  return (
    r[r.length - 1] !== e.text.length && r.push(e.text.length),
    ig.set(e, { epoch: t, boundaries: r }),
    r
  );
}
function wa(e, t, n) {
  let r = e.caretEdges;
  if (r && t >= 0 && t < r.length) return r[t];
  let o = lg.get(n);
  o || ((o = new WeakMap()), lg.set(n, o));
  let a = o.get(e);
  a || ((a = new Map()), o.set(e, a));
  let i = a.get(t);
  if (i !== void 0) return i;
  let l = t <= 0 ? 0 : Jt(e.text.slice(0, t), e.style, n);
  return (a.set(t, l), l);
}
function ic(e) {
  return e.text === "	" || e.projected
    ? true
    : e.text.length !== e.range.end - e.range.start;
}
function hl(e, t, n) {
  let r = e.range.end - e.range.start;
  if (r <= 0) return e.box.x;
  let o = Math.max(0, Math.min(t - e.range.start, r)),
    a = e.caretEdges;
  return a && o < a.length
    ? e.box.x + a[o]
    : !n || ic(e)
      ? e.box.x + e.box.width * (o / r)
      : e.box.x + wa(e, o, n);
}
function Ra(e, t, n, r) {
  let o = Fw(e, t, r?.drawings);
  if (o)
    return {
      x: t > o.start ? o.advanceEnd : o.advanceStart,
      y: o.y,
      height: o.height,
    };
  let a = r ? r.spans : e.spans;
  if (a.length === 0) {
    let c = e.leading ?? 0;
    return {
      x: e.contentX,
      y: e.box.y + c,
      height: Math.max(0, e.box.height - c - (e.trailingSpacing ?? 0)),
    };
  }
  let i = a[0];
  for (let c = 0; c < a.length; c += 1) {
    let d = a[c];
    if (t > d.range.start && t < d.range.end) {
      i = d;
      break;
    }
    if (t === d.range.end) {
      let u = a[c + 1];
      if (u && u.range.start === t && ic(d)) {
        i = u;
        break;
      }
      if (
        u &&
        u.range.start === t &&
        d.text.endsWith(" ") &&
        u.box.x - (d.box.x + d.box.width) > 0.25
      ) {
        i = u;
        break;
      }
      i = d;
    } else t > d.range.end && (i = d);
  }
  let l = hl(i, t, n),
    s = n?.lineMetrics(i.style);
  return !s || s.height <= 0
    ? { x: l, y: e.box.y, height: e.box.height }
    : {
        x: l,
        y: e.box.y + e.baseline - s.baseline - rd(i.style),
        height: s.height,
      };
}
function Ew(e, t, n) {
  let r = t - e.box.x,
    o = e.range.end - e.range.start;
  if (o <= 0 || ic(e)) {
    let f = r > e.box.width / 2;
    return {
      offset: f ? e.range.end : e.range.start,
      x: f ? e.box.x + e.box.width : e.box.x,
      withinSpan: true,
    };
  }
  if (!n.measurer) {
    let f = Math.max(0, Math.min(1, r / Math.max(e.box.width, Number.EPSILON))),
      m = Math.round(f * o),
      g = sg(e),
      y = g[0],
      b = Number.POSITIVE_INFINITY;
    for (let x of g) {
      let T = Math.abs(x - m);
      T < b && ((b = T), (y = x));
    }
    return {
      offset: e.range.start + y,
      x: e.box.x + e.box.width * (y / o),
      withinSpan: true,
    };
  }
  let a = sg(e),
    i = 1,
    l = a.length - 1;
  for (; i < l;) {
    let f = (i + l) >> 1;
    wa(e, a[f], n.measurer) < r ? (i = f + 1) : (l = f);
  }
  let s = a[i],
    c = a[i - 1],
    d = wa(e, s, n.measurer),
    u = wa(e, c, n.measurer),
    p = r - u <= d - r;
  return {
    offset: e.range.start + (p ? c : s),
    x: e.box.x + (p ? u : d),
    withinSpan: true,
  };
}
function dg(e, t, n, r) {
  if (e.length === 0) return null;
  for (let i of e) {
    let l = n(i);
    if (t >= l && t < l + r(i)) return i;
  }
  let o = e[0],
    a = Number.POSITIVE_INFINITY;
  for (let i of e) {
    let l = n(i),
      s = t < l ? l - t : t - (l + r(i));
    s < a && ((a = s), (o = i));
  }
  return o;
}
function Nw(e, t, n, r) {
  return {
    tableId: t.tableId,
    rowId: n.id,
    cellId: r.id,
    rowIndex: fl(e).rowIndexById.get(n.id) ?? 0,
    gridColumn: r.gridColumn,
    gridSpan: r.gridSpan,
  };
}
function Aw(e, t, n, r) {
  let o = e.rows.filter((c) => !c.isHeaderRepeat),
    a = o.length > 0 ? o : e.rows,
    i = [],
    l = dg(
      a,
      t.y,
      (c) => c.box.y,
      (c) => c.box.height,
    );
  if (l) {
    let c = dg(
      l.cells,
      t.x,
      (d) => d.box.x,
      (d) => d.box.width,
    );
    c && i.push(Dw(n, l, c));
  }
  let s = [];
  for (let c of a)
    for (let d of c.cells)
      d.blocks.length !== 0 &&
        (i.some((u) => u.cell === d) ||
          s.push({
            entry: { row: c, cell: d },
            score: oc(d.box, t, n.verticalWeight),
          }));
  s.sort((c, d) => c.score - d.score);
  for (let { row: c, cell: d } of [...i, ...s.map((u) => u.entry)]) {
    let u = Nw(n.layout, e, c, d),
      p = ul(d.blocks, t, n, u);
    if (p) return p;
  }
  return null;
}
function Dw(e, t, n) {
  return n.blocks.length > 0
    ? { row: t, cell: n }
    : (fl(e.layout).mergeOriginOf.get(n) ?? { row: t, cell: n });
}
function fg(e, t) {
  let n = t.paintBounds;
  return n.width <= 0 || n.height <= 0
    ? null
    : Object.freeze({
        pageIndex: e,
        x: n.x,
        y: n.y,
        width: n.width,
        height: n.height,
        record: t,
      });
}
function _w(e, t, n) {
  for (let r of t.lines)
    for (let o of r.drawings ?? []) if (o.drawingNodeId === n) return fg(e, o);
  return null;
}
function pg(e, t, n) {
  if (t.kind === "paragraph") return _w(e, t, n);
  for (let r of t.rows)
    for (let o of r.cells)
      for (let a of o.blocks) {
        let i = pg(e, a, n);
        if (i) return i;
      }
  return null;
}
function cg(e, t, n) {
  for (let r of t) {
    let o = pg(e, r, n);
    if (o) return o;
  }
  return null;
}
function Hw(e, t) {
  for (let n of e.pages) {
    for (let o of n.anchoredDrawings ?? [])
      if (o.drawingNodeId === t) return fg(n.index, o);
    let r = cg(n.index, n.fragments, t);
    if (r) return r;
    for (let o of [n.header, n.footer]) {
      if (!o) continue;
      for (let i of o.anchoredDrawings ?? []) {
        if (i.drawingNodeId !== t) continue;
        let l = i.paintBounds;
        return l.width <= 0 || l.height <= 0
          ? null
          : Object.freeze({
              pageIndex: n.index,
              x: o.box.x + l.x - n.contentBox.x,
              y: o.box.y + l.y - n.contentBox.y,
              width: l.width,
              height: l.height,
              record: i,
            });
      }
      let a = cg(n.index, o.fragments, t);
      if (a) {
        let i = a.record.paintBounds;
        return Object.freeze({
          pageIndex: n.index,
          x:
            n.header?.box.x === o.box.x || n.footer?.box.x === o.box.x
              ? o.box.x + i.x - n.contentBox.x
              : a.x,
          y: o.box.y + i.y - n.contentBox.y,
          width: a.width,
          height: a.height,
          record: a.record,
        });
      }
    }
  }
  return null;
}
function zw(e) {
  let t = [0],
    n = 0;
  for (let r of e) ((n += r), t.push(n));
  return t;
}
function jw(e, t) {
  let n = t.get(e.id);
  return (
    n === void 0 &&
      (e.isHeaderRepeat ? (n = 0) : ((n = t.size), t.set(e.id, n))),
    { ...e, rowIndex: n }
  );
}
function yl(e, t, n, r) {
  return {
    ...e,
    nestingDepth: n,
    columnEdges: e.columnEdges ?? zw(t),
    rows: e.rows.map((o) => jw(o, r)),
  };
}
var mg = new WeakMap(),
  go = 4,
  lc = 6,
  gg = 14,
  Gw = {
    rowDivider: 4,
    columnDivider: 4,
    rightEdge: 4,
    insertRow: 3,
    insertColumn: 3,
    tableBody: 0,
  };
function hg(e, t, n, r, o) {
  for (let a of e) {
    if (a.kind !== "table") continue;
    let i = a.nestingDepth ?? r;
    for (let l of a.rows) {
      o({
        pageIndex: t,
        table: a,
        row: l,
        rowOrdinal: l.rowIndex,
        nestingDepth: i,
        editable: !l.isHeaderRepeat,
        pageContentBox: n,
      });
      for (let s of l.cells) hg(s.blocks, t, n, i + 1, o);
    }
  }
}
function DO(e) {
  let t = mg.get(e);
  if (t) return t;
  let n = [];
  for (let o = 0; o < e.pages.length; o += 1) {
    let a = e.pages[o];
    hg(a.fragments, o, a.contentBox, 0, (i) => {
      n.push(i);
    });
  }
  let r = Object.freeze({
    sourceRevision: e.revision,
    occurrences: Object.freeze(n),
  });
  return (mg.set(e, r), r);
}
function _O(e) {
  let t = e.sourceRevision;
  switch (e.kind) {
    case "rowDivider":
      return `${t}:${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}:${e.edgeY}`;
    case "columnDivider":
      return `${t}:${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}:${e.leftGridColumnId}:${e.rightGridColumnId}:${e.edgeX}`;
    case "rightEdge":
      return `${t}:${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}:${e.gridColumnId}:${e.edgeX}`;
    case "insertRow":
      return `${t}:${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}`;
    case "insertColumn":
      return `${t}:${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.gridColumnId}:${e.isHeaderRepeat}`;
    case "tableBody":
      return `${t}:${e.kind}:${e.pageIndex}:${e.tableId}:${e.nestingDepth}:${e.editable}`;
  }
}
function HO(e) {
  switch (e.kind) {
    case "rowDivider":
      return `${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}:${e.edgeY}`;
    case "columnDivider":
      return `${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}:${e.leftGridColumnId}:${e.rightGridColumnId}:${e.edgeX}`;
    case "rightEdge":
      return `${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}:${e.gridColumnId}:${e.edgeX}`;
    case "insertRow":
      return `${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.isHeaderRepeat}`;
    case "insertColumn":
      return `${e.kind}:${e.pageIndex}:${e.tableId}:${e.rowId}:${e.gridColumnId}:${e.isHeaderRepeat}`;
    case "tableBody":
      return `${e.kind}:${e.pageIndex}:${e.tableId}:${e.nestingDepth}:${e.editable}`;
  }
}
function zO(e, t) {
  if (t.kind === "insertRow") {
    for (let n of e.occurrences)
      if (
        n.pageIndex === t.pageIndex &&
        n.table.tableId === t.tableId &&
        n.row.id === t.rowId &&
        n.row.isHeaderRepeat === t.isHeaderRepeat
      )
        return n.editable
          ? {
              kind: "insertRow",
              pageIndex: n.pageIndex,
              sourceRevision: e.sourceRevision,
              tableId: n.table.tableId,
              rowId: n.row.id,
              isHeaderRepeat: n.row.isHeaderRepeat,
              nestingDepth: n.nestingDepth,
            }
          : null;
    return null;
  }
  for (let n of e.occurrences)
    if (
      n.pageIndex === t.pageIndex &&
      n.table.tableId === t.tableId &&
      n.row.id === t.rowId &&
      n.row.isHeaderRepeat === t.isHeaderRepeat &&
      n.editable
    )
      for (let r = 0; r < n.table.columnEdges.length - 1; r += 1) {
        let o = Ia(n.row, r);
        if (o === t.gridColumnId)
          return {
            kind: "insertColumn",
            pageIndex: n.pageIndex,
            sourceRevision: e.sourceRevision,
            tableId: n.table.tableId,
            rowId: n.row.id,
            gridColumnId: o,
            isHeaderRepeat: n.row.isHeaderRepeat,
            nestingDepth: n.nestingDepth,
          };
      }
  return null;
}
function Ia(e, t) {
  for (let n of e.cells) if (n.gridColumn === t) return n.gridColumnId ?? null;
  return null;
}
function Ww(e, t, n, r, o) {
  let a = e.pages[t.pageIndex];
  if (!a) return null;
  let i = n - a.contentBox.x - o,
    l = r - a.contentBox.y,
    s = t.table,
    c = i - s.box.x,
    d = l - s.box.y;
  return c < -go || d < -gg || c > s.box.width + go || d > s.box.height + lc
    ? null
    : { x: c, y: d };
}
function Xw(e, t, n, r, o) {
  if (t.row.isHeaderRepeat) return null;
  let a = t.table,
    i = t.row.box.y - a.box.y + t.row.box.height;
  if (
    !a.columnEdges.slice(1).some((c) => Math.abs(n - c) <= go) &&
    n >= 0 &&
    n <= a.box.width &&
    Math.abs(r - i) <= go
  )
    return {
      kind: "rowDivider",
      pageIndex: t.pageIndex,
      sourceRevision: e.sourceRevision,
      tableId: a.tableId,
      rowId: t.row.id,
      isHeaderRepeat: t.row.isHeaderRepeat,
      nestingDepth: t.nestingDepth,
      edgeY: i,
    };
  if (
    r < t.row.box.y - t.table.box.y ||
    r > t.row.box.y - t.table.box.y + t.row.box.height
  )
    return null;
  for (let c = 1; c < a.columnEdges.length - 1; c += 1) {
    let d = a.columnEdges[c];
    if (Math.abs(n - d) > go) continue;
    let u = Ia(t.row, c - 1),
      p = Ia(t.row, c);
    if (!u || !p) continue;
    let f = o.pages[t.pageIndex];
    return {
      kind: "columnDivider",
      pageIndex: t.pageIndex,
      sourceRevision: e.sourceRevision,
      tableId: a.tableId,
      rowId: t.row.id,
      leftGridColumnId: u,
      rightGridColumnId: p,
      isHeaderRepeat: t.row.isHeaderRepeat,
      nestingDepth: t.nestingDepth,
      edgeX: d,
      sheetY: f.contentBox.y + a.box.y + r,
    };
  }
  let s = a.columnEdges.at(-1);
  if (Math.abs(n - s) <= go) {
    let c = a.columnEdges.length - 2,
      d = Ia(t.row, c);
    if (!d) return null;
    let u = o.pages[t.pageIndex];
    return {
      kind: "rightEdge",
      pageIndex: t.pageIndex,
      sourceRevision: e.sourceRevision,
      tableId: a.tableId,
      rowId: t.row.id,
      gridColumnId: d,
      isHeaderRepeat: t.row.isHeaderRepeat,
      nestingDepth: t.nestingDepth,
      edgeX: s,
      sheetY: u.contentBox.y + a.box.y + r,
    };
  }
  return null;
}
function jO(e, t, n, r, o = 0, a) {
  let i = a ?? Pa(r, n),
    l = i >= 0 ? o : 0,
    s = null,
    c = -1,
    d = -1,
    u = (p) => {
      if (!p) return;
      let f = Gw[p.kind];
      p.nestingDepth < c ||
        (p.nestingDepth === c && f <= d) ||
        ((c = p.nestingDepth), (d = f), (s = p));
    };
  for (let p of e.occurrences) {
    if (i >= 0 && p.pageIndex !== i) continue;
    let f = Ww(r, p, t, n, l);
    if (
      !f ||
      (u(
        Xw(e, p, f.x, f.y, r) ?? {
          kind: "tableBody",
          pageIndex: p.pageIndex,
          sourceRevision: e.sourceRevision,
          tableId: p.table.tableId,
          nestingDepth: p.nestingDepth,
          editable: p.editable,
        },
      ),
      !p.editable)
    )
      continue;
    let m = p.row.box.y - p.table.box.y;
    f.x <= lc &&
      Math.abs(f.y - (m + p.row.box.height / 2)) <= p.row.box.height / 2 + lc &&
      u({
        kind: "insertRow",
        pageIndex: p.pageIndex,
        sourceRevision: e.sourceRevision,
        tableId: p.table.tableId,
        rowId: p.row.id,
        isHeaderRepeat: p.row.isHeaderRepeat,
        nestingDepth: p.nestingDepth,
      });
    for (let g = 0; g < p.table.columnEdges.length - 1; g += 1) {
      let y = p.table.columnEdges[g],
        b = p.table.columnEdges[g + 1],
        x = (y + b) / 2;
      if (Math.abs(f.x - x) > (b - y) / 2 + 2 || f.y > gg) continue;
      let T = Ia(p.row, g);
      if (T) {
        u({
          kind: "insertColumn",
          pageIndex: p.pageIndex,
          sourceRevision: e.sourceRevision,
          tableId: p.table.tableId,
          rowId: p.row.id,
          gridColumnId: T,
          isHeaderRepeat: p.row.isHeaderRepeat,
          nestingDepth: p.nestingDepth,
        });
        break;
      }
    }
  }
  return s;
}
var yg = 1048576;
function sc(e = yg) {
  let t = e | 0;
  return { cellsRemaining: t > 0 ? t : 0 };
}
function dc(e, t, n, r) {
  let o = new Map(),
    a = new Map(),
    i = r?.pageFragment === true,
    l = new Set(),
    s = i,
    d = (f) => {
      let m = a.get(f);
      m && (o.set(m.id, m.span), a.delete(f));
    },
    u = () => n !== void 0 && n.cellsRemaining <= 0,
    p = () => {
      for (let f of [...a.keys()]) d(f);
    };
  for (let f of e) {
    if (u()) {
      p();
      break;
    }
    s && f.isHeaderRepeat !== true && ((s = false), p(), l?.clear());
    let m = new Set(),
      g = false;
    for (let y of f.cells) {
      if (n) {
        if (n.cellsRemaining <= 0) {
          g = true;
          break;
        }
        n.cellsRemaining -= 1;
      }
      let b = Math.max(0, Math.min(y.gridColumn | 0, 1023));
      if ((m.add(b), y.vMergeContinue)) {
        let x = a.get(b);
        x ? (x.span += 1) : l && !l.has(b) && a.set(b, { id: y.id, span: 1 });
      } else (d(b), a.set(b, { id: y.id, span: 1 }));
      l?.add(b);
    }
    if (g) {
      p();
      break;
    }
    for (let y of [...a.keys()]) m.has(y) || d(y);
  }
  return (p(), o);
}
function xg(e, t, n, r) {
  let o = new Map(),
    a = 0,
    i = (l) => {
      let s = uo(l, t, 0, n, r);
      if (s)
        for (let c of s.rows)
          for (let d of c.cells)
            for (let u of d.blocks)
              u.localName === "p"
                ? o.set(u.id, a++)
                : u.localName === "tbl" && i(u);
    };
  for (let l of e)
    l.kind === "paragraph" && l.paragraph
      ? o.set(l.paragraph.id, a++)
      : l.kind === "table" && l.table && i(l.table);
  return o;
}
var xl = 4096,
  bg = 1,
  Ft = class extends Error {
    code;
    constructor(t, n) {
      (super(n), (this.name = "TablePaginationError"), (this.code = t));
    }
  };
function cc(e) {
  return e.cells.map(() => ({
    blockIndex: 0,
    lineIndex: 0,
    previousSpaceAfter: 0,
    paragraphFragmentIndex: 0,
  }));
}
function Sg(e) {
  return e.publishAnchoredDrawings ?? e.collectAnchoredDrawings;
}
function wg(e, t, n, r, o) {
  let a = Sg(o);
  if (!(
    e.length === 0 ||
    !a ||
    !o.inlineDrawingLayout ||
    !o.anchorFrameBase ||
    !o.pageContentClip
  ))
    for (let i of e) {
      let l = null,
        s = null,
        c = i.lines;
      for (let u of t) {
        for (let p of u.blocks)
          if (p.kind === "paragraph" && p.paragraphId === i.paragraphId) {
            ((l = p.box), (c = p.lines), (s = u.box));
            break;
          }
        if (l) break;
      }
      if (!l) continue;
      let d =
        s ??
        Object.freeze({
          x: i.cellOriginX,
          y: n,
          width: i.cellContentWidth,
          height: r,
        });
      a(
        ro({
          paragraph: i.paragraph,
          paragraphId: i.paragraphId,
          paragraphBox: l,
          lines: c,
          drawingLayout: o.inlineDrawingLayout,
          frameBase: o.anchorFrameBase(),
          columnBox: o.columnBoxForParagraph?.(l) ?? l,
          cellBox: d,
          pageClip: o.pageContentClip(),
          measurer: o.measurer,
          ...(o.layoutTextboxStoryFor
            ? { layoutTextboxStory: o.layoutTextboxStoryFor }
            : {}),
        }),
      );
    }
}
function $w(e, t, n, r) {
  if (!(
    !r.onAnchorRepublish ||
    !r.inlineDrawingLayout ||
    !r.anchorFrameBase ||
    !r.pageContentClip
  ))
    for (let o of e) {
      if (o.kind !== "paragraph") continue;
      let a = t.find((l) => l.kind === "paragraph" && l.id === o.paragraphId);
      !a ||
        a.kind !== "paragraph" ||
        Lt(a, r.inlineDrawingLayout).length === 0 ||
        r.onAnchorRepublish(
          o.paragraphId,
          ro({
            paragraph: a,
            paragraphId: o.paragraphId,
            paragraphBox: o.box,
            lines: o.lines,
            drawingLayout: r.inlineDrawingLayout,
            frameBase: r.anchorFrameBase(),
            columnBox: r.columnBoxForParagraph?.(o.box) ?? o.box,
            cellBox: n,
            pageClip: r.pageContentClip(),
            measurer: r.measurer,
            ...(r.layoutTextboxStoryFor
              ? { layoutTextboxStory: r.layoutTextboxStoryFor }
              : {}),
          }),
        );
    }
}
function Vw(e, t) {
  let n = Sg(e),
    r = e.deferAnchoredDrawings;
  return !n && !r
    ? { rowDeps: e, flushDeferred: () => {} }
    : {
        rowDeps: {
          ...e,
          publishAnchoredDrawings: n,
          collectAnchoredDrawings: void 0,
          deferAnchoredDrawings: (i) => {
            t.push(i);
          },
        },
        flushDeferred: (i, l, s) => {
          if (t.length !== 0) {
            if (n && !e.anchorDeferOnly) wg(t, i, l, s, e);
            else if (r) for (let c of t) r(c);
            t.length = 0;
          }
        },
      };
}
function bl(e, t, n) {
  let r = 0;
  for (let o = t; o < n && o < e.length; o += 1) r += e[o];
  return r;
}
function uc(e, t) {
  return t === 0
    ? [...e]
    : e.map((n) =>
        n.kind === "table"
          ? {
              ...n,
              box: { ...n.box, y: n.box.y + t },
              rows: n.rows.map((r) => ({
                ...r,
                box: { ...r.box, y: r.box.y + t },
                cells: r.cells.map((o) => ({
                  ...o,
                  box: { ...o.box, y: o.box.y + t },
                  blocks: uc(o.blocks, t),
                })),
              })),
            }
          : {
              ...n,
              box: { ...n.box, y: n.box.y + t },
              ...(n.shadingBox
                ? { shadingBox: { ...n.shadingBox, y: n.shadingBox.y + t } }
                : {}),
              ...(n.bottomBorder
                ? {
                    bottomBorder: {
                      ...n.bottomBorder,
                      box: {
                        ...n.bottomBorder.box,
                        y: n.bottomBorder.box.y + t,
                      },
                    },
                  }
                : {}),
              ...(n.borders
                ? {
                    borders: n.borders.map((r) => ({
                      ...r,
                      box: { ...r.box, y: r.box.y + t },
                    })),
                  }
                : {}),
              ...(n.marker
                ? {
                    marker: {
                      ...n.marker,
                      box: { ...n.marker.box, y: n.marker.box.y + t },
                    },
                  }
                : {}),
              lines: n.lines.map((r) => ({
                ...r,
                box: { ...r.box, y: r.box.y + t },
                spans: r.spans.map((o) => ({
                  ...o,
                  box: { ...o.box, y: o.box.y + t },
                })),
                ...(r.drawings
                  ? { drawings: r.drawings.map((o) => Bi(o, 0, t)) }
                  : {}),
              })),
            },
      );
}
function Yw(e, t, n, r, o, a, i) {
  let l = e.id,
    s = o.listItems?.get(l),
    {
      props: c,
      indent: d,
      available: u,
      alignment: p,
      spacing: f,
      lineSpacing: m,
      bottomBorder: g,
      borders: y,
      shading: b,
      inheritedRunProperties: x,
      markRunProperties: T,
      tabStops: k,
      tabStopsCacheToken: M,
    } = fa(e, n, o.styleCascade, s, i?.tableCellStyle, true),
    E = Xo(k, o.defaultTabStopPt),
    P = E === k ? M : ar(E),
    L = dl(s, d, o.measurer, E, u),
    O = o.pageExclusionZones?.() ?? Object.freeze([]),
    R = o.paragraphOrderIndex?.(l) ?? Number.MAX_SAFE_INTEGER,
    h = o.paragraphOrderIndex ? Ep(O, R, (V) => o.paragraphOrderIndex?.(V)) : O,
    D = Mp(h, t, 0, { left: 0, right: d.left + u + d.right }),
    G = tn(D),
    ee = G ? `${r.toFixed(3)}|${G}` : "",
    C = cr({
      paragraph: e,
      properties: [
        ...c,
        ...x,
        ...T,
        { localName: "tabStops", attributes: { token: P } },
        ...(s
          ? [{ localName: "list", attributes: { token: s.cacheToken } }]
          : []),
      ],
      width: u,
      producer: o.producer,
      ...(o.drawingTokenForParagraph?.(e)
        ? { drawingToken: o.drawingTokenForParagraph(e) }
        : o.drawingLayoutToken
          ? { drawingToken: o.drawingLayoutToken }
          : {}),
      ...(ee ? { exclusionToken: ee } : {}),
    }),
    F = Hi(
      e,
      l,
      d.left,
      u,
      o.measurer,
      o.cache,
      o.cache ? C : null,
      x,
      E,
      o.pageContext,
      o.styleCascade ? (V, K) => Sn(V, K, o.styleCascade) : void 0,
      {
        lineSpacing: m,
        firstLineOffset: L,
        marginExtent: { left: 0, right: d.left + u + d.right },
        ...(o.projectLink ? { projectLink: o.projectLink } : {}),
        ...(o.projectFieldLink ? { projectFieldLink: o.projectFieldLink } : {}),
        ...(o.documentProperties
          ? { documentProperties: o.documentProperties }
          : {}),
        ...(o.bodyPageFields ? { bodyPageFields: true } : {}),
        displayMode: o.displayMode,
        ...(o.noteMarks ? { noteMarks: o.noteMarks } : {}),
        ...(o.inlineDrawingLayout
          ? { inlineDrawingLayout: o.inlineDrawingLayout }
          : {}),
        contentLeft: 0,
        contentRight: d.left + u + d.right,
        paragraphStartY: r,
        anchorCellBox: Object.freeze({
          x: 0,
          y: 0,
          width: d.left + u + d.right,
          height: Math.max(1, u),
        }),
        ...(D.length > 0 ? { pageExclusionZones: D } : {}),
        ...(o.styleCascade ? { themeFonts: o.styleCascade.themeFonts } : {}),
        markRunProperties: T,
      },
    ),
    z = i?.lineStart ?? 0,
    H = i?.fragmentIndex ?? 0,
    I = i?.maxBottom ?? Number.POSITIVE_INFINITY,
    _ = i?.includeAfter ?? true,
    v = i?.includeBottomBorder ?? true,
    j = z === 0 ? jr(f.before, a) : 0,
    J = t + d.left,
    N = z === 0 ? Mn(y.top) : 0,
    W = [],
    Y = r + j + N,
    $ = z,
    Q = false;
  for (let V = z; V < F.length; V += 1) {
    let K = F[V],
      le = V === F.length - 1,
      Re = le && v && g ? Mn(g) : 0,
      we = le && _ ? f.after : 0,
      gt = D.length > 0 ? xn(Y, K.height, D) : (K.exclusionSkipBefore ?? 0);
    if (Y + gt + K.height + Re + we > I + 0.001) break;
    Y += gt;
    let dt = t + d.left + (V === 0 ? L : 0),
      Xe = Math.max(1, u - (V === 0 ? L : 0)),
      ct = K.spans.map((be) => ({
        ...be,
        range: { ...be.range, paragraphId: l },
        box: { ...be.box, x: be.box.x + t, y: Y },
      })),
      rt = Di(
        ct,
        o.measurer,
        dt,
        Xe,
        p,
        le,
        p === "center" || p === "right" ? K.width : void 0,
      ),
      ot =
        ct.length > 0 && rt.length > 0
          ? rt[0].box.x - ct[0].box.x
          : p !== "left" && p !== "both"
            ? (() => {
                let be = Xe - K.width;
                return be <= 0 ? 0 : p === "center" ? be / 2 : be;
              })()
            : 0,
      $e = Object.freeze({ x: t, y: r, width: n, height: Math.max(0, I - r) }),
      Me = _i(
        K.drawings.map((be) =>
          Li(
            Object.freeze({
              ...be,
              paragraphId: l,
              x: t + be.x,
              advanceStart: t + be.advanceStart,
              advanceEnd: t + be.advanceEnd,
              y: Y + be.y,
              paintBounds: Object.freeze({
                ...be.paintBounds,
                x: t + be.paintBounds.x,
                y: Y + be.paintBounds.y,
              }),
              hitBounds: Object.freeze({
                ...be.hitBounds,
                x: t + be.hitBounds.x,
                y: Y + be.hitBounds.y,
              }),
            }),
            $e,
          ),
        ),
        ot,
      );
    (W.push({
      id: o.nextLineId(l, K.start, V),
      range: { paragraphId: l, start: K.start, end: K.end },
      spans: rt,
      ...(Me.length > 0 ? { drawings: Me } : {}),
      box: { x: t + d.left, y: Y, width: u, height: K.height },
      contentX: rt[0]?.box.x ?? dt + ot,
      baseline: K.baseline,
      leading: K.leading,
      trailingSpacing: K.trailingSpacing,
      ...(K.deletedRanges ? { deletedRanges: K.deletedRanges } : {}),
    }),
      (Y += K.height),
      ($ = V + 1),
      (Q = true));
  }
  if (!Q)
    return {
      fragment: null,
      bottom: r,
      spaceAfter: a,
      nextLineIndex: z,
      complete: false,
      fitted: false,
    };
  let q = $ >= F.length,
    se = W[0].box.y,
    Pe = Y,
    he = [],
    fe,
    ye = se,
    Ae = Pe,
    Ie = y.left ? Pt(y.left) : 0,
    mt = y.right ? Pt(y.right) : 0,
    lt = y.left ? J - y.left.spacePt - Ie : J,
    Le = y.right ? J + u + y.right.spacePt + mt : J + u,
    nn = Math.max(Le - lt, 0);
  if (N > 0 && y.top) {
    let V = Pt(y.top),
      K = se - y.top.spacePt - V;
    (he.push({
      side: "top",
      edge: y.top,
      box: { x: lt, y: K, width: nn, height: V },
    }),
      (ye = K));
  }
  if (q && v && g) {
    let V = Pt(g),
      K = Pe + g.spacePt,
      le = { x: lt, y: K, width: nn, height: V };
    ((fe = { edge: g, box: le }),
      he.push({ side: "bottom", edge: g, box: le }),
      (Ae = K + V));
  }
  let rn = Math.max(Ae - ye, 0);
  if (
    (y.left &&
      he.push({
        side: "left",
        edge: y.left,
        box: { x: J - y.left.spacePt - Ie, y: ye, width: Ie, height: rn },
      }),
    y.right &&
      he.push({
        side: "right",
        edge: y.right,
        box: { x: J + u + y.right.spacePt, y: ye, width: mt, height: rn },
      }),
    y.bar)
  ) {
    let V = Pt(y.bar);
    he.push({
      side: "bar",
      edge: y.bar,
      box: {
        x: J - y.bar.spacePt - V,
        y: se,
        width: V,
        height: Math.max(Pe - se, 0),
      },
    });
  }
  let ve = q && _ ? f.after : 0,
    We = Ae + ve,
    st =
      b === void 0
        ? void 0
        : y.left || y.right
          ? { x: lt, y: ye, width: nn, height: Math.max(Ae - ye, 0) }
          : Go(W, J, u),
    ne = q && o.displayMode === "all-markup",
    on = ne ? Jr(e) : [],
    Fe = ne ? ta(e) : null,
    nt =
      z === 0
        ? cl(
            s,
            o.measurer,
            W[0] ? { y: W[0].box.y, height: W[0].box.height } : void 0,
            t,
          )
        : void 0,
    B = Wi(e),
    S = B ? il(W, al(B)) : W,
    U = {
      kind: "paragraph",
      id: `${l}#f${H}`,
      paragraphId: l,
      fragmentIndex: H,
      range: {
        paragraphId: l,
        start: S[0].range.start,
        end: S[S.length - 1].range.end,
      },
      props: c,
      spacing: { before: j, after: ve },
      indent: d,
      ...(fe ? { bottomBorder: fe } : {}),
      ...(he.length > 0 ? { borders: he } : {}),
      ...(b === void 0 ? {} : { shading: b }),
      ...(st === void 0 ? {} : { shadingBox: st }),
      ...(nt ? { marker: nt } : {}),
      ...Ri(on, Fe),
      lines: S,
      box: { x: J, y: r, width: u, height: We - r },
    };
  if (o.inlineDrawingLayout && o.anchorFrameBase && o.pageContentClip) {
    let V = Object.freeze({ x: t, y: r, width: n, height: Math.max(0, I - r) }),
      K = U.box,
      le = { paragraph: e, paragraphId: l, paragraphBox: K, lines: S };
    o.deferAnchoredDrawings
      ? o.deferAnchoredDrawings({ ...le, cellOriginX: t, cellContentWidth: n })
      : o.collectAnchoredDrawings &&
        o.collectAnchoredDrawings(
          ro({
            paragraph: e,
            paragraphId: l,
            paragraphBox: K,
            lines: S,
            drawingLayout: o.inlineDrawingLayout,
            frameBase: o.anchorFrameBase(),
            columnBox: o.columnBoxForParagraph?.(K) ?? K,
            cellBox: V,
            pageClip: o.pageContentClip(),
            measurer: o.measurer,
            ...(o.layoutTextboxStoryFor
              ? { layoutTextboxStory: o.layoutTextboxStoryFor }
              : {}),
          }),
        );
  }
  return {
    fragment: U,
    bottom: We,
    spaceAfter: ve,
    nextLineIndex: $,
    complete: q,
    fitted: true,
  };
}
function gr(e, t, n, r, o, a) {
  let i = Pg(e, t, n, r, Number.POSITIVE_INFINITY, o, a, {
    blockIndex: 0,
    lineIndex: 0,
    previousSpaceAfter: 0,
    paragraphFragmentIndex: 0,
  });
  return { blocks: i.blocks, bottom: i.bottom };
}
function Pg(e, t, n, r, o, a, i, l, s) {
  let c = [],
    d = r,
    u = l.previousSpaceAfter,
    p = l.blockIndex,
    f = l.lineIndex,
    m = l.paragraphFragmentIndex,
    g = false,
    y = false;
  for (; p < e.length;) {
    let b = e[p];
    if (b.kind === "table") {
      (f !== 0 && (f = 0), (u = 0));
      let T = Zw(b, t, n, d, a + 1, i);
      if (!T) {
        p += 1;
        continue;
      }
      if (T.bottom > o + 0.001) {
        y = !g;
        break;
      }
      (c.push(T.fragment), (d = T.bottom), (g = true), (p += 1), (f = 0));
      continue;
    }
    if (b.kind !== "paragraph") {
      ((p += 1), (f = 0));
      continue;
    }
    let x = Yw(b, t, Math.max(1, n - t), d, i, u, {
      lineStart: f,
      fragmentIndex: m,
      maxBottom: o,
      includeAfter: true,
      includeBottomBorder: true,
      ...(s ? { tableCellStyle: s } : {}),
    });
    if (!x.fitted || !x.fragment) break;
    if ((c.push(x.fragment), (d = x.bottom), (g = true), x.complete))
      ((u = x.spaceAfter), (p += 1), (f = 0), (m = 0));
    else
      return {
        blocks: c,
        bottom: d,
        cursor: {
          blockIndex: p,
          lineIndex: x.nextLineIndex,
          previousSpaceAfter: 0,
          paragraphFragmentIndex: m + 1,
        },
        complete: false,
        fitted: true,
        nestedSplitBlocked: false,
      };
  }
  return {
    blocks: c,
    bottom: d,
    cursor: {
      blockIndex: p,
      lineIndex: f,
      previousSpaceAfter: u,
      paragraphFragmentIndex: m,
    },
    complete: p >= e.length,
    fitted: g,
    nestedSplitBlocked: y,
  };
}
function Rg(e, t) {
  return {
    top: e.top + pr(t.top),
    right: e.right + pr(t.right),
    bottom: e.bottom + pr(t.bottom),
    left: e.left + pr(t.left),
  };
}
function Kw(e, t, n) {
  return {
    top: t ? { state: "none" } : e.top,
    left: e.left,
    bottom: n ? { state: "none" } : e.bottom,
    right: e.right,
  };
}
function Ig(e, t, n) {
  return !t && !n
    ? e
    : {
        ...e,
        cells: e.cells.map((r) => ({ ...r, borders: Kw(r.borders, t, n) })),
      };
}
function va(e, t, n, r, o, a, i, l = 0) {
  let s = fc(e, t, n, r, Number.POSITIVE_INFINITY, o, false, a, i, cc(e), l);
  return { record: s.record, bottom: s.bottom };
}
function fc(e, t, n, r, o, a, i, l, s, c, d = 0) {
  let u = bl(t, 0, t.length),
    p = Number.isFinite(d) && d > 0 ? d / 2 : 0,
    f = s.measurer.lineMetrics(qt).height,
    m = e.height,
    g = m.rule === "exact" ? m.valuePt : void 0,
    y = m.rule === "atLeast" ? m.valuePt : void 0,
    b = [],
    { rowDeps: x, flushDeferred: T } = Vw(s, b),
    k =
      a && s.pageOccurrenceKey
        ? {
            ...x,
            nextLineId: (C, F, z) =>
              x.nextLineId(C, F, z, s.pageOccurrenceKey()),
          }
        : x,
    M = g === void 0 ? o : Math.min(o, r + Math.max(0, g)),
    E = [],
    P = false,
    L = false,
    O = r;
  for (let C = 0; C < e.cells.length; C += 1) {
    let F = e.cells[C],
      z = c[C] ?? {
        blockIndex: 0,
        lineIndex: 0,
        previousSpaceAfter: 0,
        paragraphFragmentIndex: 0,
      },
      H = F.gridSpan,
      I = F.gridColumn,
      _ = n + bl(t, 0, I),
      v = bl(t, I, Math.min(I + H, t.length)) || u,
      j = Math.min(p, Math.max((v - bg) / 2, 0)),
      J = _ + j,
      N = Math.max(v - 2 * j, bg),
      W = Rg(F.margins, F.borders),
      Y = i ? pr(F.borders.top) : W.top,
      $ = r + Y,
      Q = M - W.bottom,
      q = [],
      se = $,
      Pe = z,
      he = true,
      fe = false,
      ye = false;
    if (!F.vMergeContinue)
      if (Q < $ + 0.001) he = z.blockIndex >= F.blocks.length;
      else {
        let Ie = Pg(
          F.blocks,
          J + W.left,
          J + N - W.right,
          $,
          Q,
          l,
          k,
          z,
          F.styleFormatting,
        );
        ((q = Ie.blocks),
          (se = Ie.bottom),
          (Pe = Ie.cursor),
          (he = Ie.complete),
          (fe = Ie.fitted),
          (ye = Ie.nestedSplitBlocked),
          fe && (P = true),
          ye && (L = true));
      }
    let Ae = Math.min(M, fe ? se + W.bottom : r + Y + f + W.bottom);
    (Ae > O && (O = Ae),
      E.push({
        cell: F,
        x: J,
        width: N,
        gridColumn: I,
        blocks: q,
        contentTop: $,
        contentBottom: se,
        insets: { ...W, top: Y },
        nextCursor: Pe,
        complete: F.vMergeContinue ? true : he,
        fitted: fe,
        nestedSplitBlocked: ye,
      }));
  }
  O = Math.min(M, Math.max(O, r));
  for (let C of E) {
    let F = C.fitted
      ? C.contentBottom + C.insets.bottom
      : r + C.insets.top + f + C.insets.bottom;
    F > O && F <= M + 0.001 && (O = F);
  }
  O = Math.min(M, O);
  let R = false;
  if (g !== void 0) {
    let C = r + g;
    C <= o + 0.001 ? ((O = C), (R = true)) : (O = Math.min(o, O));
  } else if (y !== void 0) {
    let C = r + y;
    E.every((z) => z.complete) && C <= o + 0.001 && C > O && (O = C);
  }
  O = Math.min(o, O);
  let h = Math.max(0, O - r),
    D = E.map((C) => {
      let F = C.blocks,
        z = R ? true : C.complete;
      if (
        !C.cell.vMergeContinue &&
        z &&
        C.cell.vAlign !== "top" &&
        F.length > 0
      ) {
        let H = C.contentBottom - C.contentTop,
          I = h - C.insets.top - C.insets.bottom - H;
        if (I > 0) {
          let _ = C.cell.vAlign === "center" ? I / 2 : I;
          F = uc(F, _);
        }
      }
      return {
        id: C.cell.id,
        gridColumn: C.gridColumn,
        ...(C.cell.gridColumnId ? { gridColumnId: C.cell.gridColumnId } : {}),
        gridSpan: C.cell.gridSpan,
        vMergeContinue: C.cell.vMergeContinue,
        ...(C.cell.vMergeContinue ? { paintInert: true } : {}),
        rowSpan: 1,
        ...(C.cell.shading === void 0 ? {} : { shading: C.cell.shading }),
        blocks: F,
        box: { x: C.x, y: r, width: C.width, height: h },
      };
    }),
    G = R || E.every((C) => C.complete) ? null : E.map((C) => C.nextCursor),
    ee = R || E.every((C) => C.complete);
  return (
    T(D, r, h),
    {
      record: {
        id: e.id,
        ...(e.revisionKind ? { revisionKind: e.revisionKind } : {}),
        ...(e.revisionId !== void 0 ? { revisionId: e.revisionId } : {}),
        ...(e.revisionAuthor !== void 0
          ? { revisionAuthor: e.revisionAuthor }
          : {}),
        ...(e.revisionDate !== void 0 ? { revisionDate: e.revisionDate } : {}),
        rowIndex: 0,
        isHeaderRepeat: a,
        ...(i ? { isContinuation: true } : {}),
        cells: D,
        box: { x: n, y: r, width: u, height: h },
      },
      bottom: O,
      remainder: ee ? null : G,
      fitted: P || e.cells.every((C) => C.vMergeContinue) || R,
      nestedSplitBlocked: L,
    }
  );
}
function Uw(e) {
  return {
    ...e,
    collectAnchoredDrawings: void 0,
    publishAnchoredDrawings: void 0,
    deferAnchoredDrawings: void 0,
    onAnchorRepublish: void 0,
    onAnchorShift: void 0,
    anchorDeferOnly: true,
  };
}
function pc(e, t, n, r, o, a = 0) {
  let i = 0,
    l = {
      ...Uw(o),
      pageExclusionZones: void 0,
      nextLineId: () => `probe-${i++}`,
    };
  return va(e, t, n, 0, false, r, l, a).record.box.height;
}
function mc(e, t, n, r, o, a, i, l) {
  if (e.length === 0) return [];
  let s = new Map();
  for (let y of n) for (let b of y.cells) s.set(b.id, b);
  let c = dc(e, a, o, { pageFragment: true }),
    d = e.map((y, b) => ({
      ...y,
      cells: y.cells.map((x) => {
        let T = c.get(x.id);
        if (x.vMergeContinue && T === void 0)
          return {
            ...x,
            paintInert: true,
            rowSpan: 1,
            borders: {},
            blocks: [],
          };
        let k = x.vMergeContinue,
          M = T ?? 1,
          E = x.box.height;
        if (M > 1) {
          let R = e[b + M - 1];
          E = R.box.y + R.box.height - x.box.y;
        }
        let P = s.get(x.id),
          L = x.blocks;
        if (P && P.vAlign !== "top" && L.length > 0) {
          let R = Rg(P.margins, P.borders),
            h = Number.POSITIVE_INFINITY,
            D = Number.NEGATIVE_INFINITY;
          for (let G of L)
            ((h = Math.min(h, G.box.y)),
              (D = Math.max(D, G.box.y + G.box.height)));
          if (Number.isFinite(h) && Number.isFinite(D)) {
            let G = E - R.top - R.bottom - (D - h),
              C =
                x.box.y +
                R.top +
                (G > 0 ? (P.vAlign === "center" ? G / 2 : G) : 0) -
                h;
            if (Math.abs(C) > 0.001) {
              L = uc(L, C);
              for (let F of L) F.kind === "paragraph" && i?.(F.paragraphId, C);
            }
          }
        }
        let O = Object.freeze({
          x: x.box.x,
          y: x.box.y,
          width: x.box.width,
          height: E,
        });
        return (
          P &&
            l &&
            (M > 1 || (P.vAlign !== "top" && L.length > 0)) &&
            $w(L, P.blocks, O, l),
          {
            ...x,
            ...(k ? { vMergeContinue: false, paintInert: false } : {}),
            rowSpan: M,
            blocks: L,
            box: { ...x.box, height: E },
          }
        );
      }),
    })),
    u = d.map((y) =>
      y.cells.map((b) => {
        let x = s.get(b.id);
        return {
          gridColumn: b.gridColumn,
          gridSpan: b.gridSpan,
          vMergeContinue: b.vMergeContinue,
          borders: x?.borders ?? {
            top: { state: "omitted" },
            left: { state: "omitted" },
            bottom: { state: "omitted" },
            right: { state: "omitted" },
          },
          mergeRowSpan: b.rowSpan ?? 1,
        };
      }),
    ),
    p = t.columnWidthsPt.length,
    f = t.tableBorders,
    m = {
      columnWidthsPt: t.columnWidthsPt,
      rowBands: d.map((y) => ({ y: y.box.y, height: y.box.height })),
      cellBoxes: d.map((y) =>
        y.cells.map((b) => ({ width: b.box.width, height: b.box.height })),
      ),
    },
    g = Ad(u, f, p, m, void 0, r);
  return d.map((y, b) => ({
    ...y,
    cells: y.cells.map((x, T) => {
      let k = g[b][T];
      return x.paintInert || x.vMergeContinue
        ? { ...x, borders: {}, paintInert: true }
        : { ...x, borders: k };
    }),
  }));
}
function Zw(e, t, n, r, o, a) {
  if (o >= ol) return null;
  let i = Math.max(1, n - t),
    l = uo(e, i, o, a.styleCascade, a.displayMode);
  if (!l || l.rows.length === 0) return null;
  let s = [],
    c = {
      ...a,
      publishAnchoredDrawings: void 0,
      collectAnchoredDrawings: void 0,
      anchorDeferOnly: true,
      deferAnchoredDrawings: (y) => {
        s.push(y);
      },
    },
    d = t + ba(l, i),
    u = [],
    p = r;
  for (let y of l.rows) {
    let b = va(y, l.columnWidthsPt, d, p, false, o, c, l.cellSpacingPt);
    (u.push(b.record), (p = b.bottom));
  }
  let f = mc(
    u,
    l,
    l.rows,
    a.borderOwnershipBudget,
    a.vMergeResolveBudget,
    void 0,
    void 0,
    void 0,
  );
  for (let y of s)
    for (let b of f)
      if (
        b.cells.some((T) =>
          T.blocks.some(
            (k) => k.kind === "paragraph" && k.paragraphId === y.paragraphId,
          ),
        )
      ) {
        wg([y], b.cells, b.box.y, b.box.height, a);
        break;
      }
  let m = bl(l.columnWidthsPt, 0, l.columnWidthsPt.length),
    g = new Map();
  return {
    fragment: yl(
      {
        kind: "table",
        id: `${e.id}#f0`,
        tableId: e.id,
        fragmentIndex: 0,
        rows: f,
        box: { x: d, y: r, width: m, height: p - r },
      },
      l.columnWidthsPt,
      o,
      g,
    ),
    bottom: p,
  };
}
function vg(e) {
  let t = e.picture;
  return t?.embeddedRelationshipId
    ? `embed:${e.ownerPartName}:${t.embeddedRelationshipId}`
    : t?.linkedRelationshipId
      ? `link:${e.ownerPartName}:${t.linkedRelationshipId}`
      : `nonpicture:${e.drawingNodeId}`;
}
function Tg(e) {
  let t = new Map(),
    n = [{ node: e.root, depth: 0 }],
    r = 0;
  for (; n.length > 0;) {
    let o = n.pop();
    if (((r += 1), r > _a || o.depth > Ya$1.maxDrawingDepth)) return null;
    let { node: a } = o;
    if (a.kind === "drawing" || ab$1(a)) {
      t.set(a.id, a);
      continue;
    }
    if ("children" in a)
      for (let i = a.children.length - 1; i >= 0; i -= 1)
        n.push({ node: a.children[i], depth: o.depth + 1 });
  }
  return t;
}
function gc(e) {
  let t = e.position,
    n = e.anchor,
    r = e.picture,
    o = e.wrapGeometry;
  return [
    e.drawingNodeId,
    e.ownerPartName,
    e.kind,
    e.hidden ? "1" : "0",
    String(e.extentEmu.cx),
    String(e.extentEmu.cy),
    String(e.effectExtentEmu.top),
    String(e.effectExtentEmu.right),
    String(e.effectExtentEmu.bottom),
    String(e.effectExtentEmu.left),
    e.compatibilityBranchNodeId ?? "",
    n?.simplePos ? "sp" : "pv",
    n ? String(n.relativeHeight) : "",
    n ? (n.layoutInCell ? "1" : "0") : "",
    r
      ? [
          String(r.crop.left),
          String(r.crop.top),
          String(r.crop.right),
          String(r.crop.bottom),
          String(r.transform.rotationDegrees),
          r.transform.flipHorizontal ? "1" : "0",
          r.transform.flipVertical ? "1" : "0",
          String(r.transform.offsetEmu.x),
          String(r.transform.offsetEmu.y),
          String(r.transform.extentEmu.cx),
          String(r.transform.extentEmu.cy),
          r.embeddedRelationshipId ?? "",
          r.linkedRelationshipId ?? "",
          r.presetGeometry ?? "",
        ].join(":")
      : "",
    o
      ? [
          o.element,
          o.textSide,
          String(o.distancesEmu.top),
          String(o.distancesEmu.right),
          String(o.distancesEmu.bottom),
          String(o.distancesEmu.left),
          String(o.polygon.length),
        ].join(":")
      : "",
    t
      ? [
          t.horizontal.relativeFrom,
          t.horizontal.align ?? "",
          String(t.horizontal.offsetEmu ?? ""),
          t.vertical.relativeFrom,
          t.vertical.align ?? "",
          String(t.vertical.offsetEmu ?? ""),
          String(t.simplePosition.xEmu),
          String(t.simplePosition.yEmu),
        ].join(":")
      : "",
  ].join("|");
}
function Sl(e) {
  switch (e.kind) {
    case "ready":
      return `ready:${e.resourceKey}:${e.contentId}:${e.pixelWidth}x${e.pixelHeight}`;
    case "pending":
      return `pending:${e.resourceKey}`;
    case "external":
      return `external:${e.relationshipId}:${e.sinkSafe ? "1" : "0"}`;
    case "missing":
      return "missing";
    case "unrenderable":
      return `unrenderable:${e.reason}`;
    default:
      return e.kind;
  }
}
var qw = 1;
function hc(e, t) {
  if (e.kind === "drawing" || ab$1(e)) {
    t.push(e.id);
    return;
  }
  if ("children" in e) for (let n of e.children) hc(n, t);
}
function Jw(e) {
  if (e.kind !== "paragraph") return [];
  let t = [];
  for (let n of e.children) hc(n, t);
  return Object.freeze(t);
}
function Qw(e) {
  let {
      ownerPartName: t,
      part: n,
      pkg: r,
      lookup: o,
      onResourceSettled: a,
      rememberReadyHandle: i,
      forgetReadyHandle: l,
    } = e,
    s = false,
    c = 0,
    d = new Map(),
    u = new Set(),
    p = new Map(),
    f = new WeakMap(),
    m = new WeakMap(),
    g = 0,
    y = $a$1(r, t),
    b = eb$1(n, { resolveRelationship: y }),
    x = Tg(n),
    T = (O, R) => {
      if (s || u.has(R)) return;
      u.add(R);
      let h = c;
      o.resolveForProjection(O)
        .then((D) => {
          s ||
            h !== c ||
            (d.set(R, D),
            D.kind === "ready" && i(D.validatedHandle),
            (g += 1),
            p.set(R, g),
            a(t));
        })
        .catch(() => {
          s ||
            h !== c ||
            (d.set(
              R,
              Object.freeze({
                kind: "unrenderable",
                partName: null,
                mime: "unknown",
                reason: "decode-failed",
              }),
            ),
            (g += 1),
            p.set(R, g),
            a(t));
        })
        .finally(() => {
          u.delete(R);
        });
    },
    k = (O) => {
      let R = vg(O),
        h = d.get(R);
      if (h) return h;
      let D = O.picture?.linkedRelationshipId;
      if (D) {
        let ee = o.resolveLinked(t, D);
        return (d.set(R, ee), (g += 1), p.set(R, g), ee);
      }
      let G = Object.freeze({ kind: "pending", resourceKey: R });
      return (d.set(R, G), (g += 1), p.set(R, g), T(O, R), G);
    },
    M = (O) => b.get(O) ?? null,
    E = Object.freeze({
      ownerPartName: t,
      projectionForAtom: M,
      project: (O) => M(O.id),
      resourceOf: k,
    }),
    P = (O) => {
      let R = m.get(O);
      if (R) return R;
      let h = Jw(O),
        D = null,
        G = (C, F) => {
          if (!(F >= qw))
            for (let z of C) {
              let H = b.get(z)?.textboxStory;
              if (!H) continue;
              let I = [];
              if ((hc(H.content, I), I.length !== 0)) {
                D || (D = [...h]);
                for (let _ of I) D.push(_);
                G(I, F + 1);
              }
            }
        };
      G(h, 0);
      let ee = D ?? h;
      return (m.set(O, ee), ee);
    };
  return {
    context: E,
    cacheTokenForPart: () => `${t}|${g}|${c}|${b.size}`,
    drawingTokenForParagraph: (O) => {
      let R = f.get(O);
      if (R?.resourceEpoch === g) return R.token;
      let h = P(O);
      if (h.length === 0)
        return (f.set(O, { resourceEpoch: g, token: "" }), "");
      let G = h
        .map((ee) => {
          let C = b.get(ee);
          if (!C) return `${ee}:refused`;
          let F = k(C);
          return [ee, gc(C), Sl(F), String(p.get(vg(C)) ?? 0)].join("|");
        })
        .sort()
        .join(";");
      return (f.set(O, { resourceEpoch: g, token: G }), G);
    },
    isCompatibleWith: (O, R) => {
      if (O === n) return true;
      let h = Tg(O);
      if (x && h && x.size === h.size) {
        let G = true;
        for (let [ee, C] of x)
          if (h.get(ee) !== C) {
            G = false;
            break;
          }
        if (G) return true;
      }
      let D = eb$1(O, { resolveRelationship: $a$1(R, t) });
      if (D.size !== b.size) return false;
      for (let [G, ee] of b) {
        let C = D.get(G);
        if (!C || gc(C) !== gc(ee)) return false;
      }
      return true;
    },
    dispose: () => {
      ((s = true), (c += 1));
      for (let O of d.values()) O.kind === "ready" && l(O.validatedHandle);
      (d.clear(), u.clear(), p.clear());
    },
  };
}
function gk(e) {
  let t = e.session.packageRevision(),
    n = e.session.currentPackage(),
    r = e.resourceLookup ?? rb$1(n, { decodePort: e.decodePort }),
    o = new Map(),
    a = new Map(),
    i = new Map(),
    l = new Map(),
    s = (f) => {
      i.set(f.resourceKey, f);
      let m = gb$1(f);
      m && l.set(f.resourceKey, m);
    },
    c = (f) => {
      i.delete(f.resourceKey);
      let m = l.get(f.resourceKey);
      m && (hb$1(m), l.delete(f.resourceKey));
    },
    d = (f, m) => {
      let y = m.currentPackage().parts.get(f) ?? a.get(f);
      if (y) return y;
      if (f === m.part().name) return m.part();
      throw new Error(`Missing inline drawing part ${f}`);
    },
    u = (f, m) => {
      let g = o.get(f);
      if (g) return g;
      let y = d(f, m);
      a.set(f, y);
      let b = Qw({
        ownerPartName: f,
        part: y,
        pkg: m.currentPackage(),
        lookup: r,
        onResourceSettled: () => e.onResourcesChanged(),
        rememberReadyHandle: s,
        forgetReadyHandle: c,
      });
      return (o.set(f, b), b);
    },
    p = (f) => {
      let m = f.currentPackage();
      if (
        m.partBytes === n.partBytes &&
        m.relationships === n.relationships &&
        m.contentTypes === n.contentTypes
      ) {
        for (let [y, b] of o) {
          let x = m.parts.get(y) ?? (y === f.part().name ? f.part() : void 0);
          if (x && b.isCompatibleWith(x, m)) {
            a.set(y, x);
            continue;
          }
          (b.dispose(), o.delete(y), a.delete(y));
        }
        ((t = f.packageRevision()), (n = m));
        return;
      }
      for (let y of o.values()) y.dispose();
      (o.clear(), a.clear());
      for (let y of l.values()) hb$1(y);
      (l.clear(),
        i.clear(),
        e.resourceLookup || r.dispose(),
        (t = f.packageRevision()),
        (n = m),
        (r = e.resourceLookup ?? rb$1(m, { decodePort: e.decodePort })));
    };
  return Object.freeze({
    get bodyContext() {
      return u(e.session.part().name, e.session).context;
    },
    contextForPart(f) {
      return u(f, e.session).context;
    },
    cacheTokenForPart(f) {
      return u(f, e.session).cacheTokenForPart();
    },
    drawingTokenForParagraph(f, m) {
      return u(m, e.session).drawingTokenForParagraph(f);
    },
    mintValidatedBytes(f, m) {
      let g = i.get(f.resourceKey);
      return !g || g.contentId !== f.contentId ? null : fb$1(f, m);
    },
    sync(f) {
      f.packageRevision() !== t && p(f);
    },
    dispose() {
      for (let f of o.values()) f.dispose();
      (o.clear(), a.clear());
      for (let f of l.values()) hb$1(f);
      (l.clear(), i.clear(), e.resourceLookup || r.dispose());
    },
  });
}
function Og(e, t) {
  let n = [],
    r = (o) => {
      if (o.kind === "paragraph") {
        let a = t(o);
        a && n.push(a);
        return;
      }
      if ("children" in o) for (let a of o.children) r(a);
    };
  return (r(e), n.sort().join(";"));
}
function eP(e) {
  let t = (n) => {
    if (n.kind === "textValue" || dc$1(n) || bc$1(n) !== null) return false;
    if (n.kind === "text" || n.localName === "t") {
      for (let r of n.children)
        if (r.kind === "textValue" && r.value.trim().length > 0) return true;
      return false;
    }
    for (let r of n.children) if (r.kind !== "textValue" && t(r)) return true;
    return false;
  };
  for (let n of e.children) if (n.kind !== "textValue" && t(n)) return true;
  return false;
}
function Lg(e, t) {
  for (let n of t.resultParagraphIds) {
    let r = Fa$1(e, n);
    if (!(!r || r.kind === "textValue" || r.kind !== "paragraph") && eP(r))
      return true;
  }
  return false;
}
var kg = new WeakMap(),
  Cg = new WeakMap(),
  Bg = new WeakMap();
function yc(e) {
  let t = kg.get(e);
  if (t) return t;
  let n = new Set();
  for (let r of Ac$1(e)) (n.add(r.beginParagraphId), n.add(r.endParagraphId));
  return (kg.set(e, n), n);
}
function bc(e) {
  let t = Cg.get(e);
  if (t) return t;
  let n = new Set();
  for (let r of Ac$1(e)) Lg(e, r) || n.add(r.beginParagraphId);
  return (Cg.set(e, n), n);
}
function xc(e) {
  let t = Bg.get(e);
  if (t) return t;
  let n = new Set();
  for (let r of Ac$1(e))
    if (!Lg(e, r)) for (let o of r.resultParagraphIds) n.add(o);
  return (Bg.set(e, n), n);
}
var tP = 4,
  Fg = 256;
function nP(e) {
  return `txbx-${e}`;
}
function wl(e, t) {
  let n = e.textboxStory;
  if (!n) return null;
  let r = tt(e.extentEmu.cx),
    o = tt(e.extentEmu.cy),
    a = tt(n.insetsEmu.left),
    i = tt(n.insetsEmu.right),
    l = tt(n.insetsEmu.top),
    s = tt(n.insetsEmu.bottom),
    c = Math.max(1, r - a - i),
    d = Math.max(0, o - l - s),
    u = tt(n.strokeWidthEmu),
    p = {
      fillHex: n.fillHex,
      strokeHex: n.strokeHex,
      strokeWidthPt: u,
      contentWidth: c,
      contentHeight: d,
    };
  if ((t.depth ?? 0) >= tP)
    return {
      fragments: [],
      flowHeight: 0,
      contentOffset: { x: a, y: l },
      ...p,
      fallbackReason: "textbox-nesting-limit",
    };
  let m = im(n.content, t.displayMode),
    g = nP(e.drawingNodeId),
    y = 0,
    b = gr(m, 0, c, 0, 0, {
      measurer: t.measurer,
      cache: t.cache,
      producer: `${t.producer}|txbx:${e.drawingNodeId}`,
      nextLineId: () => `${g}-line-${y++}`,
      styleCascade: t.styleCascade,
      ...(t.pageContext ? { pageContext: t.pageContext } : {}),
      ...(t.documentProperties
        ? { documentProperties: t.documentProperties }
        : {}),
      ...(t.defaultTabStopPt !== void 0
        ? { defaultTabStopPt: t.defaultTabStopPt }
        : {}),
      ...(t.displayMode ? { displayMode: t.displayMode } : {}),
      ...(t.inlineDrawingLayout
        ? { inlineDrawingLayout: t.inlineDrawingLayout }
        : {}),
      ...(t.drawingTokenForParagraph
        ? { drawingTokenForParagraph: t.drawingTokenForParagraph }
        : {}),
    }),
    x = b.blocks,
    T = b.bottom,
    k;
  if (x.length > Fg) {
    x = x.slice(0, Fg);
    let P = x[x.length - 1];
    ((T = P ? P.box.y + P.box.height : 0), (k = "textbox-fragment-limit"));
  }
  if (T > d + 0.001) {
    let P = x.filter((L) => L.box.y < d - 0.001);
    P.length < x.length && ((x = P), (k = k ?? "textbox-height-clip"));
  }
  let M = Math.max(0, d - T),
    E =
      n.verticalAnchor === "center"
        ? M / 2
        : n.verticalAnchor === "bottom"
          ? M
          : 0;
  return {
    fragments: x,
    flowHeight: T,
    contentOffset: { x: a, y: l + E },
    ...p,
    ...(k ? { fallbackReason: k } : {}),
  };
}
var rP = 128;
function oP(e) {
  return y(xa$1(e));
}
function aP(e) {
  let t = Math.max(1, Math.floor(e)),
    n = new Map();
  return {
    get(r) {
      let o = n.get(r);
      if (o !== void 0) return (n.delete(r), n.set(r, o), o);
    },
    set(r, o) {
      for (n.has(r) && n.delete(r), n.set(r, o); n.size > t;) {
        let a = n.keys().next();
        if (a.done) break;
        n.delete(a.value);
      }
    },
    get size() {
      return n.size;
    },
  };
}
function iP(e, t, n, r, o, a, i, l = rP, s, c = ft, d, u, p, f, m) {
  let g = Zs(e.root),
    y = aP(l),
    b = wn(e, c),
    x = oP(e),
    T,
    k = (M) => {
      let E = An(g) || d ? M : void 0,
        P = E?.pageNumber ?? f?.pageNumber ?? 1,
        L = td(E, g) + (d ? `|pn:${P}` : "");
      if (L === "") {
        if (T) return T;
      } else {
        let C = y.get(L);
        if (C) return C;
      }
      let O = 0,
        R = [],
        h = () => {
          let C = E?.pageNumber ?? f?.pageNumber ?? 1,
            F = f?.pageWidth ?? t,
            z = f?.pageHeight ?? Math.max(1, t),
            H = f?.marginLeft ?? 0,
            I = f?.marginRight ?? 0,
            _ = f?.marginTop ?? 0,
            v = f?.marginBottom ?? 0,
            j = Math.max(1, z - _ - v);
          return Object.freeze({
            pageNumber: C,
            pageWidth: F,
            pageHeight: z,
            marginLeft: H,
            marginRight: I,
            marginBottom: v,
            contentInsetTop: _,
            contentInsetBottom: v,
            contentWidth: t,
            contentHeight: j,
            contentBandHeight: j,
            ownerPartName: e.name,
            storyKind: e.name.includes("ftr") ? "footer" : "header",
          });
        },
        D = Object.freeze([]),
        G;
      if (d) {
        let C = false;
        for (let F = 0; F < ur; F += 1) {
          (R.splice(0, R.length),
            (O = 0),
            (G = gr(b, 0, Math.max(1, t), 0, 0, {
              measurer: n,
              cache: o,
              producer: r + L + (c === ft ? "" : `|rev:${c}`),
              nextLineId: () => `hf-${e.name}-line-${O++}`,
              styleCascade: a,
              pageContext: E,
              ...(s !== void 0 ? { defaultTabStopPt: s } : {}),
              displayMode: c,
              ...(m ? { documentProperties: m } : {}),
              inlineDrawingLayout: d,
              anchorFrameBase: h,
              pageContentClip: () => oa(h()),
              layoutTextboxStoryFor: (H) =>
                wl(H, {
                  measurer: n,
                  producer: r + L + (c === ft ? "" : `|rev:${c}`),
                  cache: o,
                  styleCascade: a,
                  ...(E ? { pageContext: E } : {}),
                  ...(s !== void 0 ? { defaultTabStopPt: s } : {}),
                  displayMode: c,
                  ...(m ? { documentProperties: m } : {}),
                  inlineDrawingLayout: d,
                  ...(u ? { drawingTokenForParagraph: u } : {}),
                }),
              collectAnchoredDrawings: (H) => {
                R.push(...H);
              },
              columnBoxForParagraph: (H) =>
                Object.freeze({ x: 0, y: H.y, width: t, height: H.height }),
              pageExclusionZones: () => D,
              ...(u
                ? { drawingTokenForParagraph: u }
                : p
                  ? { drawingLayoutToken: p }
                  : {}),
            })));
          let z = vd(R, d, 0, t);
          if (z.length === 0) {
            ((C = true), (D = z));
            break;
          }
          if (F > 0 && tn(D) === tn(z)) {
            ((C = true), (D = z));
            break;
          }
          D = z;
        }
        if (!C)
          throw new oo(
            `header/footer exclusion reflow did not converge within ${ur} passes`,
          );
      } else
        G = gr(b, 0, Math.max(1, t), 0, 0, {
          measurer: n,
          cache: o,
          producer: r + L + (c === ft ? "" : `|rev:${c}`),
          nextLineId: () => `hf-${e.name}-line-${O++}`,
          styleCascade: a,
          pageContext: E,
          ...(s !== void 0 ? { defaultTabStopPt: s } : {}),
          displayMode: c,
          ...(m ? { documentProperties: m } : {}),
        });
      let ee = {
        partName: e.name,
        contentKey: x,
        fragments: G.blocks,
        flowHeight: G.bottom,
        pageFieldNeeds: g,
        ...(R.length > 0 ? { anchoredDrawings: Object.freeze([...R]) } : {}),
        withPageContext: (C) =>
          !An(g) && !ee.anchoredDrawings?.length ? (T ?? ee) : k(C),
      };
      return (L === "" ? (T = ee) : y.set(L, ee), ee);
    };
  return k(i);
}
function Sc(e, t, n) {
  let r = n - e.box.y,
    o = (u) => ({ ...u, y: u.y + r }),
    a = (u) => {
      if (!u) return;
      let p = {
        ...u,
        box: o(u.box),
        ...(u.anchoredDrawings ? { anchoredDrawings: u.anchoredDrawings } : {}),
      };
      if (!u.pageFieldProjector) return p;
      let f = u.pageFieldProjector;
      return {
        ...p,
        pageFieldProjector: (m) => {
          let g = f(m);
          return { ...g, box: o(g.box) };
        },
      };
    },
    i = (u) => {
      if (u)
        return {
          ...u,
          box: o(u.box),
          ...(u.separator
            ? { separator: { ...u.separator, box: o(u.separator.box) } }
            : {}),
          notes: u.notes.map((p) => ({ ...p, box: o(p.box) })),
        };
    },
    l = a(e.header),
    s = a(e.footer),
    c = i(e.footnotes),
    d = i(e.endnotes);
  return {
    ...e,
    id: `page-${t}`,
    index: t,
    box: o(e.box),
    contentBox: o(e.contentBox),
    ...(l ? { header: l } : {}),
    ...(s ? { footer: s } : {}),
    ...(c ? { footnotes: c } : {}),
    ...(d ? { endnotes: d } : {}),
  };
}
function wc(e) {
  let t = [],
    n = (r) => {
      if (r.kind === "table") {
        for (let o of r.rows)
          for (let a of o.cells) for (let i of a.blocks) n(i);
        return;
      }
      for (let o of r.lines)
        for (let a of o.drawings ?? []) t.push(Sl(a.resource));
    };
  for (let r of e.anchoredDrawings ?? []) t.push(Sl(r.resource));
  for (let r of e.fragments) n(r);
  return t.length === 0 ? "" : `!${t.join("!")}`;
}
var Pl = 4096,
  Xn = 20,
  jt = Object.freeze({
    pageSize: Object.freeze({ widthTwips: 12240, heightTwips: 15840 }),
    margins: Object.freeze({
      topTwips: 1440,
      rightTwips: 1440,
      bottomTwips: 1440,
      leftTwips: 1440,
      headerTwips: 720,
      footerTwips: 720,
      gutterTwips: 0,
    }),
    columns: Object.freeze({
      count: 1,
      gapTwips: 720,
      equalWidth: true,
      separator: false,
      definitions: Object.freeze([]),
    }),
    landscape: false,
    titlePage: false,
    breakType: "nextPage",
  });
function Pc(e, t, n = 31680 * 2) {
  if (e === void 0 || !/^-?\d{1,7}$/.test(e)) return t;
  let r = Number(e);
  return !Number.isFinite(r) || r <= 0 || r > n ? t : r;
}
function hr(e, t) {
  if (e === void 0 || !/^-?\d{1,7}$/.test(e)) return t;
  let n = Number(e);
  return !Number.isFinite(n) || Math.abs(n) > 31680 ? t : n;
}
function Ng(e, t, n = 31680) {
  if (e === void 0 || !/^\d{1,7}$/.test(e)) return t;
  let r = Number(e);
  return !Number.isFinite(r) || r < 0 || r > n ? t : r;
}
var Ke = (e, t) => {
    if (!(e.kind === "textValue" || !("attributes" in e))) {
      for (let n of e.attributes ?? []) if (n.localName === t) return n.value;
    }
  },
  yr = (e, t) => {
    if (e.kind !== "textValue") {
      for (let n of e.children ?? [])
        if (n.kind !== "textValue" && "localName" in n && n.localName === t)
          return n;
    }
  };
function Mg(e, t, n) {
  let r = Ke(e, t);
  return r === void 0
    ? n
    : r === "0" || r === "false" || r === "off" || r === "no"
      ? false
      : r === "1" || r === "true" || r === "on" || r === "yes"
        ? true
        : n;
}
function lP(e) {
  if (!e) return 1;
  let t = Ke(e, "num");
  return !t || !/^\d{1,7}$/.test(t) ? 1 : Math.max(1, Math.min(12, Number(t)));
}
function sP(e, t, n) {
  if (!e || e.kind === "textValue") return [];
  let r = [];
  for (let o of e.children ?? []) {
    if (
      r.length >= t ||
      o.kind === "textValue" ||
      !("localName" in o) ||
      o.localName !== "col"
    )
      continue;
    let a = r.length;
    r.push({
      widthTwips: Pc(Ke(o, "w"), 1, 31680),
      gapTwips: a === t - 1 ? 0 : Ng(Ke(o, "space"), n),
    });
  }
  return r;
}
function dP(e) {
  let t = e ? yr(e, "type") : void 0,
    n = t ? Ke(t, "val") : void 0;
  return n === "continuous" ||
    n === "evenPage" ||
    n === "oddPage" ||
    n === "nextColumn"
    ? n
    : "nextPage";
}
var cP = new Set(["hyphen", "period", "colon", "emDash", "enDash"]);
function Ag(e) {
  let t = yr(e, "pgNumType");
  if (!t || t.kind === "textValue") return;
  let n = {},
    r = Ke(t, "start");
  if (r !== void 0 && /^-?\d{1,7}$/.test(r)) {
    let l = Number(r);
    Number.isFinite(l) && l >= 0 && l <= 9999 && (n.start = l);
  }
  let o = Ke(t, "fmt");
  o !== void 0 &&
    o.length > 0 &&
    o.length <= 64 &&
    !/[<>&"']/.test(o) &&
    (n.fmt = o);
  let a = Ke(t, "chapStyle");
  if (a !== void 0 && /^\d{1,2}$/.test(a)) {
    let l = Number(a);
    Number.isFinite(l) && l >= 0 && l <= 9 && (n.chapStyle = l);
  }
  let i = Ke(t, "chapSep");
  return (i !== void 0 && cP.has(i) && (n.chapSep = i), n);
}
function Rl(e) {
  if (!e) return jt;
  let t = yr(e, "pgSz"),
    n = yr(e, "pgMar"),
    r = yr(e, "cols"),
    o = jt,
    a = t ? Ke(t, "orient") : void 0,
    i = t ? Pc(Ke(t, "w"), o.pageSize.widthTwips) : o.pageSize.widthTwips,
    l = t ? Pc(Ke(t, "h"), o.pageSize.heightTwips) : o.pageSize.heightTwips,
    s = Ag(e),
    c = lP(r),
    d = r ? Ng(Ke(r, "space"), o.columns.gapTwips) : o.columns.gapTwips,
    u = r ? Mg(r, "equalWidth", true) : true;
  return {
    pageSize: { widthTwips: i, heightTwips: l },
    margins: {
      topTwips: n ? hr(Ke(n, "top"), 1440) : o.margins.topTwips,
      rightTwips: n ? hr(Ke(n, "right"), 1440) : o.margins.rightTwips,
      bottomTwips: n ? hr(Ke(n, "bottom"), 1440) : o.margins.bottomTwips,
      leftTwips: n ? hr(Ke(n, "left"), 1440) : o.margins.leftTwips,
      headerTwips: n ? hr(Ke(n, "header"), 720) : o.margins.headerTwips,
      footerTwips: n ? hr(Ke(n, "footer"), 720) : o.margins.footerTwips,
      gutterTwips: n ? hr(Ke(n, "gutter"), 0) : o.margins.gutterTwips,
    },
    columns: {
      count: c,
      gapTwips: d,
      equalWidth: u,
      separator: r ? Mg(r, "sep", false) : false,
      definitions: u ? [] : sP(r, c, d),
    },
    landscape: a === "landscape" || i > l,
    titlePage: ta$1(e, "titlePg"),
    breakType: dP(e),
    ...(s !== void 0 ? { pageNumbering: s } : {}),
  };
}
function uP(e) {
  let t = (n) => {
    if (n.kind !== "textValue") {
      if (n.kind === "body") return yr(n, "sectPr");
      for (let r of n.children ?? []) {
        let o = t(r);
        if (o) return o;
      }
    }
  };
  return t(e.root);
}
function Il(e) {
  let t = e.children.find((r) => r.kind === "paragraphProperties");
  if (!t) return;
  let n = yr(t, "sectPr");
  return n && n.kind !== "textValue" ? n : void 0;
}
function fP(e) {
  let t = Dg(e);
  return t[t.length - 1]?.properties ?? jt;
}
function Dg(e, t = "all-markup") {
  return _g(e, t).sections;
}
function _g(e, t = "all-markup") {
  return Rc(e, wn(e, t));
}
var Eg = Ie(16);
function Rc(e, t) {
  let n = Eg.get(t);
  if (n && n.part === e) return n.result;
  let r = pP(e, t);
  return (Eg.set(t, { part: e, result: r }), r);
}
function pP(e, t) {
  let n = [],
    r = 0,
    o = false;
  for (let i = 0; i < t.length; i += 1) {
    let l = t[i];
    if (l.kind !== "paragraph") continue;
    let s = Il(l);
    if (s) {
      if (n.length >= Pl) {
        o = true;
        continue;
      }
      (n.push({
        index: n.length,
        properties: Rl(s),
        blockStart: r,
        blockEndExclusive: i + 1,
      }),
        (r = i + 1));
    }
  }
  if (o) {
    if (n.length > 0) {
      let i = n[n.length - 1];
      n[n.length - 1] = { ...i, blockEndExclusive: t.length };
    }
    return { sections: n, truncated: true };
  }
  let a = uP(e);
  if (r < t.length || n.length === 0) {
    if (n.length >= Pl) {
      let i = n[n.length - 1];
      return (
        (n[n.length - 1] = { ...i, blockEndExclusive: t.length }),
        { sections: n, truncated: true }
      );
    }
    n.push({
      index: n.length,
      properties: Rl(a),
      blockStart: r,
      blockEndExclusive: t.length,
    });
  } else if (a) {
    if (n.length >= Pl) return { sections: n, truncated: true };
    n.push({
      index: n.length,
      properties: Rl(a),
      blockStart: r,
      blockEndExclusive: t.length,
    });
  }
  return { sections: n, truncated: o };
}
function br(e) {
  let t = e.pageSize.widthTwips / Xn,
    n = e.pageSize.heightTwips / Xn,
    r = (e.margins.leftTwips + e.margins.gutterTwips) / Xn,
    o = e.margins.rightTwips / Xn,
    a = e.margins.topTwips / Xn,
    i = e.margins.bottomTwips / Xn;
  return t - r - o <= 0 || n - a - i <= 0
    ? Do
    : {
        width: t,
        height: n,
        margin: { top: a, right: o, bottom: i, left: r },
        headerDistance: Math.max(0, e.margins.headerTwips) / Xn,
        footerDistance: Math.max(0, e.margins.footerTwips) / Xn,
      };
}
function Ic(e, t) {
  let n = Math.max(1, t),
    r = Math.max(1, Math.min(12, Math.floor(e.count))),
    o = e.definitions ?? [],
    a =
      e.equalWidth === false &&
      o.length === r &&
      o.every((d) => d.widthTwips > 0),
    i,
    l;
  if (a) {
    ((i = o.map((f) => Math.max(1, f.widthTwips / 20))),
      (l = o.slice(0, -1).map((f) => Math.max(0, f.gapTwips / 20))));
    let d = l.reduce((f, m) => f + m, 0),
      u = Math.max(r * 1, n - d),
      p = i.reduce((f, m) => f + m, 0);
    if (p > u) {
      let f = u / p;
      i = i.map((m) => Math.max(1, m * f));
    }
  } else {
    let d = Math.max(0, e.gapTwips / 20),
      u = Math.min(d, Math.max(0, (n - r * 1) / (r - 1 || 1)));
    l = Array.from({ length: Math.max(0, r - 1) }, () => u);
    let p = Math.max(1, (n - l.reduce((f, m) => f + m, 0)) / r);
    i = Array.from({ length: r }, () => p);
  }
  let s = [],
    c = 0;
  for (let d = 0; d < r; d += 1) (s.push(c), (c += i[d] + (l[d] ?? 0)));
  return {
    count: r,
    widths: i,
    gaps: l,
    lefts: s,
    separator: e.separator === true && r > 1,
  };
}
function mP(e, t, n) {
  return Ta(e, t, () => n);
}
function Ta(e, t, n) {
  let r = [],
    o = null,
    a = -1,
    i = -1;
  for (let l of t) {
    let s = n(l.sectionIndex);
    if (l.customMarkFollows) {
      r.push({ noteId: l.noteId, mark: null });
      continue;
    }
    o === null
      ? ((o = s.numStart), (a = l.sectionIndex), (i = l.pageIndex ?? -1))
      : s.numRestart === "eachSect" && l.sectionIndex !== a
        ? ((o = s.numStart), (a = l.sectionIndex))
        : s.numRestart === "eachPage" &&
            l.pageIndex !== void 0 &&
            l.pageIndex !== i
          ? ((o = s.numStart), (i = l.pageIndex))
          : s.numRestart === "eachSect"
            ? (a = l.sectionIndex)
            : s.numRestart === "eachPage" &&
              l.pageIndex !== void 0 &&
              (i = l.pageIndex);
    let c = o;
    ((o += 1),
      r.push({ noteId: l.noteId, mark: mn(s.numFmt, c), displayNumber: c }));
  }
  return r;
}
function Hg(e) {
  let t = new Map();
  for (let n of e) t.set(n.noteId, n.mark);
  return t;
}
var ho = xd$1,
  Oa = 512,
  vc = 6,
  gP = 1 / 3;
function zg(e, t) {
  return `note-${e}-${t}`;
}
function hP(e) {
  if (!e) return [];
  let t = [];
  for (let n of zd$1(e.root)) {
    if (t.length >= ho) break;
    qd$1(n) && t.push(n);
  }
  return t;
}
function jg(e, t) {
  if (e) {
    for (let n of zd$1(e.root)) if (pd$1(n) === t) return n;
  }
}
function Tc(e, t, n) {
  let r = nd$1(e),
    o = od$1(e);
  if (!r || o === null) return null;
  let a = ed$1(r, o),
    i = Xi(e),
    l = zg(r, o),
    s = 0,
    c = Math.max(1, t),
    d = n.maxFlowHeightPt ?? Number.POSITIVE_INFINITY,
    u = n.noteMarks
      ? { ...n.noteMarks, activeNoteKey: a }
      : { marks: new Map(), activeNoteKey: a },
    p = n.ownerPartName ? n.drawingsForPart?.(n.ownerPartName) : void 0,
    f = gr(i, 0, c, 0, 0, {
      measurer: n.measurer,
      cache: n.cache,
      producer: `${n.producer}|${a}`,
      nextLineId: () => `${l}-line-${s++}`,
      styleCascade: n.styleCascade,
      noteMarks: u,
      ...(n.projectLink ? { projectLink: n.projectLink } : {}),
      ...(n.projectFieldLink ? { projectFieldLink: n.projectFieldLink } : {}),
      ...(n.documentProperties
        ? { documentProperties: n.documentProperties }
        : {}),
      ...(n.defaultTabStopPt !== void 0
        ? { defaultTabStopPt: n.defaultTabStopPt }
        : {}),
      ...(p
        ? {
            inlineDrawingLayout: p.inlineDrawingLayout,
            ...(p.drawingTokenForParagraph
              ? { drawingTokenForParagraph: p.drawingTokenForParagraph }
              : {}),
          }
        : {}),
    }),
    m = f.blocks,
    g = f.bottom,
    y;
  if (m.length > Oa) {
    m = m.slice(0, Oa);
    let b = m[m.length - 1];
    ((g = b ? b.box.y + b.box.height : 0), (y = "note-fragment-limit"));
  }
  if (g > d) {
    let b = [],
      x = 0;
    for (let T of m) {
      let k = T.box.y + T.box.height;
      if (k > d + 0.001 && b.length > 0) break;
      (b.push(T), (x = k));
    }
    ((m = b), (g = x), (y = y ?? "note-height-cap"));
  }
  return {
    noteKind: r,
    noteId: o,
    scopeId: a,
    noteType: pd$1(e),
    fragments: m,
    flowHeight: g,
    ...(y ? { fallbackReason: y } : {}),
  };
}
function vl(e, t, n, r) {
  if (!e) return null;
  let o = Ad$1(e.root, t);
  return o ? Tc(o, n, { ...r, ownerPartName: e.name }) : null;
}
function Gg(e, t) {
  return "single";
}
function Wg(e) {
  let t = Xi(e);
  if (t.length === 0) return true;
  for (let n of t) {
    if (n.kind !== "paragraph") return false;
    let r = n.children.find((o) => o.kind === "paragraphProperties");
    if (Object.keys(un(r)).length > 0 || !yP(n)) return false;
  }
  return true;
}
function yP(e) {
  for (let t of e.children)
    if (t.kind !== "textValue" && t.kind !== "paragraphProperties") {
      if (t.kind === "run") {
        if (!bP(t)) return false;
        continue;
      }
      return false;
    }
  return true;
}
function bP(e) {
  for (let t of e.children)
    if (
      t.kind !== "textValue" &&
      t.kind !== "runProperties" &&
      !(ld$1(t) || md$1(t) || kd$1(t))
    ) {
      if (t.kind === "text") {
        if (
          t.children
            .map((r) => r.value)
            .join("")
            .trim().length > 0
        )
          return false;
        continue;
      }
      return false;
    }
  return true;
}
function ka(e, t, n, r, o, a) {
  let i = Gg(),
    l = jg(e, t);
  if (l) {
    if (Wg(l))
      return {
        kind: t,
        fragments: [],
        flowHeight: vc,
        synthetic: false,
        ruleStyle: i,
      };
    let s = Tc(l, n, { ...r, ...(e ? { ownerPartName: e.name } : {}) });
    if (s && s.flowHeight > 0) {
      let c = a ?? Number.POSITIVE_INFINITY;
      return s.flowHeight > c + 0.001
        ? {
            kind: t,
            fragments: [],
            flowHeight: vc,
            synthetic: true,
            ruleStyle: i,
            fallbackReason: "note-separator-height-cap",
          }
        : {
            kind: t,
            fragments: s.fragments,
            flowHeight: s.flowHeight,
            synthetic: false,
          };
    }
  }
  return {
    kind: t,
    fragments: [],
    flowHeight: vc,
    synthetic: true,
    ruleStyle: i,
  };
}
function Xg(e, t) {
  let n = Math.max(1, e * gP);
  return { x: 0, y: Math.max(0, (t - 0.75) / 2), width: n, height: 0.75 };
}
function Tl(e, t, n, r) {
  if (e.ruleStyle !== void 0 || e.synthetic) {
    let o = Xg(n, e.flowHeight);
    return {
      x: t + o.x,
      y: r + o.y,
      width: o.width,
      height: Math.max(o.height, e.ruleStyle === "double" ? 2.25 : 0.75),
    };
  }
  return { x: t, y: r, width: n, height: e.flowHeight };
}
var kc = 8,
  Ug = 4096,
  Zg = 256,
  qg = 14,
  Cc = 12;
function xP(e, t) {
  return t >= e.range.start && t < e.range.end;
}
function Jg(e) {
  let t = [],
    n = (r) => {
      for (let o of r) {
        if (o.kind === "paragraph") {
          t.push(o);
          continue;
        }
        for (let a of o.rows)
          if (!a.isHeaderRepeat) for (let i of a.cells) n(i.blocks);
      }
    };
  return (n(e), t);
}
function Lc(e) {
  let t = new Map();
  for (let n of e) {
    let r = t.get(n.paragraphId);
    r ? r.push(n) : t.set(n.paragraphId, [n]);
  }
  return t;
}
function kl(e, t, n) {
  let r = Jg(e.fragments);
  if (!n)
    return t.filter((i) => r.some((l) => ec(l, i.paragraphId, i.atomOffset)));
  let o = [],
    a = new Set();
  for (let i of r)
    for (let l of Wn(i)) {
      let s = n.get(l);
      if (s)
        for (let c of s)
          a.has(c) || (ec(i, l, c.atomOffset) && (a.add(c), o.push(c)));
    }
  return o;
}
function Qg() {
  let e = new Map();
  return {
    get(t, n, r, o, a, i, l) {
      let c = `${t?.name ?? "none"}\0${o}\0${n}\0${r}\0${a}`,
        d = e.get(c);
      if (d) return d;
      let u = ka(t, n, r, i, o, a);
      return (e.set(c, u), u.fallbackReason && l.push(u.fallbackReason), u);
    },
  };
}
function SP(e, t) {
  let n = [];
  for (let r of e) {
    if (n.length >= ho) break;
    n.push({ ...r, sectionIndex: t.get(r.paragraphId) ?? 0 });
  }
  return n;
}
function yo(e, t) {
  return (
    e.footnotePropsBySection[t] ??
    e.footnotePropsBySection[0] ??
    e.documentFootnoteProps
  );
}
function Fc(e, t) {
  return (
    e.endnotePropsBySection[t] ??
    e.endnotePropsBySection[0] ??
    e.documentEndnoteProps
  );
}
function eh(e, t) {
  return {
    measurer: e.measurer,
    producer: e.producer,
    cache: e.cache,
    styleCascade: e.styleCascade,
    defaultTabStopPt: e.defaultTabStopPt,
    projectLink: e.projectLink,
    projectFieldLink: e.projectFieldLink,
    documentProperties: e.documentProperties,
    noteMarks: t,
    drawingsForPart: e.drawingsForPart,
  };
}
function wP(e, t) {
  return t === 0
    ? e
    : {
        ...e,
        box: { ...e.box, y: e.box.y + t },
        ...(e.shadingBox
          ? { shadingBox: { ...e.shadingBox, y: e.shadingBox.y + t } }
          : {}),
        ...(e.bottomBorder
          ? {
              bottomBorder: {
                ...e.bottomBorder,
                box: { ...e.bottomBorder.box, y: e.bottomBorder.box.y + t },
              },
            }
          : {}),
        ...(e.borders
          ? {
              borders: e.borders.map((n) => ({
                ...n,
                box: { ...n.box, y: n.box.y + t },
              })),
            }
          : {}),
        ...(e.marker
          ? {
              marker: {
                ...e.marker,
                box: { ...e.marker.box, y: e.marker.box.y + t },
              },
            }
          : {}),
        lines: e.lines.map((n) => ({
          ...n,
          box: { ...n.box, y: n.box.y + t },
          spans: n.spans.map((r) => ({
            ...r,
            box: { ...r.box, y: r.box.y + t },
          })),
        })),
      };
}
function $g(e, t) {
  return t === 0
    ? [...e]
    : e.map((n) =>
        n.kind === "paragraph"
          ? wP(n, t)
          : { ...n, box: { ...n.box, y: n.box.y + t } },
      );
}
function PP(e, t) {
  if (e.lines.length === 0)
    return e.box.y + e.box.height <= t + 0.001
      ? { head: e, tail: null }
      : { head: null, tail: e };
  let n = 0;
  for (; n < e.lines.length; n += 1) {
    let g = e.lines[n];
    if (g.box.y + g.box.height > t + 0.001) break;
  }
  if (n === 0) return { head: null, tail: e };
  if (n >= e.lines.length) return { head: e, tail: null };
  let r = e.lines.slice(0, n),
    o = e.lines.slice(n),
    a = r[r.length - 1],
    i = e.box.y,
    l = a.box.y + a.box.height,
    s = e.borders?.filter((g) => g.side !== "bottom"),
    c = {
      ...e,
      range: {
        paragraphId: e.paragraphId,
        start: r[0].range.start,
        end: a.range.end,
      },
      spacing: { before: e.spacing.before, after: 0 },
      lines: r,
      box: { ...e.box, height: Math.max(0, l - i) },
      ...(s && s.length > 0 ? { borders: s } : { borders: void 0 }),
      bottomBorder: void 0,
      ...(e.shadingBox
        ? {
            shadingBox: {
              ...e.shadingBox,
              height: Math.max(0, l - e.shadingBox.y),
            },
          }
        : {}),
    },
    d = o[o.length - 1],
    u = o[0].box.y,
    p = d.box.y + d.box.height,
    f = e.borders?.filter((g) => g.side !== "top"),
    m = {
      ...e,
      id: `${e.paragraphId}#f${e.fragmentIndex + 1}`,
      fragmentIndex: e.fragmentIndex + 1,
      range: {
        paragraphId: e.paragraphId,
        start: o[0].range.start,
        end: o[o.length - 1].range.end,
      },
      spacing: { before: 0, after: e.spacing.after },
      lines: o,
      box: { x: e.box.x, y: u, width: e.box.width, height: Math.max(0, p - u) },
      marker: void 0,
      ...(f && f.length > 0 ? { borders: f } : { borders: void 0 }),
      ...(e.bottomBorder ? { bottomBorder: e.bottomBorder } : {}),
      ...(e.shadingBox
        ? {
            shadingBox: {
              x: e.shadingBox.x,
              y: u,
              width: e.shadingBox.width,
              height: Math.max(0, p - u),
            },
          }
        : {}),
    };
  return { head: c, tail: m };
}
function RP(e) {
  let t = 0;
  for (let n of e) t = Math.max(t, n.box.y + n.box.height);
  return t;
}
function Cl(e, t, n) {
  if (e.flowHeight <= t + 0.001)
    return {
      head: e.fragments,
      headHeight: e.flowHeight,
      tail: [],
      tailHeight: 0,
    };
  if (t <= 0.001)
    return {
      head: [],
      headHeight: 0,
      tail: e.fragments,
      tailHeight: e.flowHeight,
    };
  let r = [],
    o = 0,
    a = 0,
    i = null;
  for (let u = 0; u < e.fragments.length && u < Oa; u += 1) {
    let p = e.fragments[u],
      f = p.box.y + p.box.height;
    if (f <= t + 0.001) {
      (r.push(p), (o = f), (a = u + 1));
      continue;
    }
    if (p.kind === "paragraph") {
      let m = PP(p, t);
      if (m.head)
        (r.push(m.head),
          (o = m.head.box.y + m.head.box.height),
          (i = m.tail),
          (a = u + 1));
      else {
        let g = n?.fullContentHeight ?? t,
          b = p.lines[0]?.box.height ?? p.box.height;
        if (r.length === 0 && t >= g - 0.001 && b > g + 0.001) {
          (n?.reasons?.push("note-line-exceeds-page"), (a = u + 1), (i = null));
          let x = e.fragments.slice(a),
            T = x[0]?.box.y ?? 0;
          return {
            head: [],
            headHeight: 0,
            tail: $g(x, -T),
            tailHeight: Math.max(0, e.flowHeight - T),
          };
        }
        ((a = u), (i = null));
      }
      break;
    }
    a = u;
    break;
  }
  let l = [...(i ? [i] : []), ...e.fragments.slice(a)];
  if (l.length === 0)
    return { head: r, headHeight: o, tail: [], tailHeight: 0 };
  let s = l[0]?.box.y ?? 0,
    c = $g(l, -s),
    d = RP(c);
  return { head: r, headHeight: o, tail: c, tailHeight: d };
}
function IP(e, t) {
  let n = "FootnoteReference";
  if (!t) return { ...qt, verticalAlign: "superscript" };
  let r = Sn([], [{ localName: "rStyle", attributes: { val: n } }], t);
  return De(r, t.themeFonts);
}
function vP(e, t, n, r) {
  let o = new Set();
  for (let d of e.values()) d && d.length > 0 && o.add(d);
  let a = Math.max(
      t.footnotePropsBySection.length,
      t.endnotePropsBySection.length,
      1,
      ...n.map((d) => d.sectionIndex + 1),
      ...r.map((d) => d.sectionIndex + 1),
    ),
    i = false;
  for (let d = 0; d < a; d += 1) {
    let u = yo(t, d);
    if (u.numRestart === "eachPage") {
      i = true;
      for (let f = 0; f < Cc; f += 1) {
        let m = mn(u.numFmt, u.numStart + f);
        m.length > 0 && o.add(m);
      }
    }
    let p = Fc(t, d);
    if (p.numRestart === "eachPage") {
      i = true;
      for (let f = 0; f < Cc; f += 1) {
        let m = mn(p.numFmt, p.numStart + f);
        m.length > 0 && o.add(m);
      }
    }
  }
  if (!i || o.size === 0) return;
  let l = IP("footnote", t.styleCascade),
    s,
    c = -1;
  for (let d of o) {
    let u = t.measurer.measure(d, l);
    (u > c + 0.001 ||
      (Math.abs(u - c) <= 0.001 && d.length > (s?.length ?? 0))) &&
      ((s = d), (c = u));
  }
  return s;
}
function th(e, t, n) {
  let r = Ta("footnote", e, (l) => yo(n, l)),
    o = Ta("endnote", t, (l) => Fc(n, l)),
    a = new Map();
  for (let l of r) a.set(dr("footnote", l.noteId), l.mark);
  for (let l of o) a.set(dr("endnote", l.noteId), l.mark);
  let i = vP(a, n, e, t);
  return { marks: a, ...(i ? { reservedMarkText: i } : {}) };
}
function Bl(e) {
  let t = 0;
  for (let n of e.fragments) t = Math.max(t, n.box.y + n.box.height);
  return t;
}
function Bc(e) {
  let { footnotes: t, endnotes: n, noteStream: r, ...o } = e;
  return o;
}
function TP(e, t) {
  if (t.marks.size === 0) return e;
  let n = false,
    r = e.pages.map((o) => {
      let a = nh(o.fragments, t);
      return a === o.fragments ? o : ((n = true), { ...o, fragments: a });
    });
  return n ? { revision: e.revision, pages: r } : e;
}
function nh(e, t) {
  let n = false,
    r = e.map((o) => {
      if (o.kind === "paragraph") {
        let l = OP(o, t);
        return (l !== o && (n = true), l);
      }
      let a = false,
        i = o.rows.map((l) => {
          let s = false,
            c = l.cells.map((d) => {
              let u = nh(d.blocks, t);
              return u === d.blocks ? d : ((s = true), { ...d, blocks: u });
            });
          return s ? ((a = true), { ...l, cells: c }) : l;
        });
      return a ? ((n = true), { ...o, rows: i }) : o;
    });
  return n ? r : e;
}
function OP(e, t) {
  let n = false,
    r = e.lines.map((o) => {
      let a = kP(o, t);
      return (a !== o && (n = true), a);
    });
  return n ? { ...e, lines: r } : e;
}
function kP(e, t) {
  let n = false,
    r = e.spans.map((o) => {
      let a = CP(o, t);
      return (a !== o && (n = true), a);
    });
  return n ? { ...e, spans: r } : e;
}
function CP(e, t) {
  if (!e.projected || e.noteNav?.direction !== "to-note") return e;
  let n = t.marks.get(e.noteNav.scopeId);
  if (n === void 0) return e;
  let r = n ?? "";
  return e.text === r ? e : { ...e, text: r };
}
function BP(e) {
  return e.footnotes
    ? Math.max(
        0,
        Math.min(e.contentBox.height, e.footnotes.box.y - e.contentBox.y),
      )
    : e.contentBox.height;
}
function rh(e) {
  return !(
    e.noteStream === "footnote-drain" ||
    (e.fragments.length === 0 && (e.footnotes?.notes.length ?? 0) > 0)
  );
}
function LP(e) {
  for (let t = e.length - 1; t >= 0; t -= 1) if (rh(e[t])) return t;
  return Math.max(0, e.length - 1);
}
function Mc(e, t, n, r, o, a, i, l) {
  let s = new Map(a),
    c = t.filter((C) => C.noteKind === "footnote"),
    d = e.contentBox.width,
    u = eh(n, r),
    p = [],
    f = 0,
    m = Ug,
    g = a.size > 0 ? "continuationSeparator" : "separator",
    y = Math.max(0, e.contentBox.height),
    b = l?.separatorCache
      ? l.separatorCache.get(n.footnotesPart, g, d, "footnote", y, u, i)
      : (() => {
          let C = ka(n.footnotesPart, g, d, u, "footnote", y);
          return (C.fallbackReason && i.push(C.fallbackReason), C);
        })(),
    x = Math.max(0, e.contentBox.height - Bl(e) - b.flowHeight),
    T = Math.max(0, e.contentBox.height - qg - b.flowHeight),
    k = l?.reserveColumnBudget ? T : x,
    E = {
      fullContentHeight: Math.max(0, e.contentBox.height - b.flowHeight),
      reasons: i,
    };
  for (let [C, F] of a) {
    let z = C.match(/^(footnote|endnote):(-?\d+)$/);
    if (!z || z[1] !== "footnote") continue;
    let H = Number(z[2]),
      I = Math.max(0, k - f);
    if (F.height <= I + 0.001)
      (p.push({
        noteKind: "footnote",
        noteId: H,
        scopeId: C,
        mark: null,
        continuation: true,
        box: { x: e.contentBox.x, y: 0, width: d, height: F.height },
        fragments: F.fragments,
      }),
        (f += F.height),
        s.delete(C));
    else {
      let _ = Cl({ fragments: F.fragments, flowHeight: F.height }, I, E);
      (_.head.length > 0 &&
        (p.push({
          noteKind: "footnote",
          noteId: H,
          scopeId: C,
          mark: null,
          continuation: true,
          box: { x: e.contentBox.x, y: 0, width: d, height: _.headHeight },
          fragments: _.head,
        }),
        (f += _.headHeight)),
        _.tail.length > 0
          ? s.set(C, { fragments: _.tail, height: _.tailHeight, mark: null })
          : s.delete(C));
    }
  }
  for (let C of c) {
    if (p.length >= ho) {
      i.push("note-count-limit");
      break;
    }
    let F = vl(n.footnotesPart, C.noteId, d, u);
    if (!F) {
      i.push("missing-note-body");
      continue;
    }
    let z = r.marks.get(dr("footnote", C.noteId)) ?? null,
      H = Math.max(0, k - f);
    if (((m -= F.fragments.length), m < 0)) {
      i.push("note-area-fragment-limit");
      break;
    }
    if (F.flowHeight <= H + 0.001)
      (p.push({
        noteKind: "footnote",
        noteId: C.noteId,
        scopeId: F.scopeId,
        mark: C.customMarkFollows ? null : z,
        box: { x: e.contentBox.x, y: 0, width: d, height: F.flowHeight },
        fragments: F.fragments,
      }),
        (f += F.flowHeight));
    else {
      let I = Cl(F, H, E);
      (I.head.length > 0 &&
        (p.push({
          noteKind: "footnote",
          noteId: C.noteId,
          scopeId: F.scopeId,
          mark: C.customMarkFollows ? null : z,
          box: { x: e.contentBox.x, y: 0, width: d, height: I.headHeight },
          fragments: I.head,
        }),
        (f += I.headHeight)),
        I.tail.length > 0 &&
          s.set(F.scopeId, {
            fragments: I.tail,
            height: I.tailHeight,
            mark: null,
          }));
    }
  }
  if (p.length === 0 && a.size === 0) return { area: void 0, nextCarry: s };
  let P = b.flowHeight,
    L = P + f,
    O = Bl(e),
    R;
  o === "beneathText"
    ? (R = e.contentBox.y + O)
    : ((R = e.contentBox.y + e.contentBox.height - L),
      (R = Math.max(R, e.contentBox.y + O)));
  let h = R + P,
    D = p.map((C) => {
      let F = { ...C, box: { ...C.box, y: h } };
      return ((h += C.box.height), F);
    }),
    G = Tl(b, e.contentBox.x, d, R);
  return {
    area: {
      kind: "footnotes",
      placement: o === "beneathText" ? "beneathText" : "pageBottom",
      box: { x: e.contentBox.x, y: R, width: d, height: L },
      separator: {
        kind: g,
        box: G,
        fragments: b.fragments,
        synthetic: b.synthetic,
        ...(b.ruleStyle !== void 0 ? { ruleStyle: b.ruleStyle } : {}),
      },
      notes: D,
    },
    nextCarry: s,
  };
}
function oh(e, t, n) {
  return {
    id: `page-${t}`,
    index: t,
    box: e.box,
    contentBox: e.contentBox,
    fragments: [],
    ...(n ? { noteStream: n } : {}),
    ...(e.header ? { header: e.header } : {}),
    ...(e.footer ? { footer: e.footer } : {}),
    ...(e.pageFieldSource
      ? {
          pageFieldSource: {
            ...e.pageFieldSource,
            pageNumber: e.pageFieldSource.pageNumber + (t - e.index),
          },
        }
      : {}),
  };
}
function Ec(e, t) {
  let n = new Set();
  for (let r of Jg(e.fragments)) n.add(t.get(r.paragraphId) ?? 0);
  return [...n].sort((r, o) => r - o);
}
function ah(e, t, n) {
  for (let r = e.length - 1; r >= 0; r -= 1)
    if (Ec(e[r], n).includes(t)) return r;
  return Math.max(0, e.length - 1);
}
function FP(e, t, n) {
  let r = ah(e, t, n);
  for (let o = r + 1; o < e.length; o += 1) {
    let a = e[o];
    if (
      a.noteStream === "footnote-drain" ||
      a.noteStream === "endnote-overflow" ||
      (a.fragments.length === 0 && (a.footnotes?.notes.length ?? 0) > 0)
    )
      continue;
    let i = Ec(a, n);
    if (i.length !== 0 && !i.includes(t)) return o;
  }
  return e.length;
}
function MP(e) {
  return e.map((t, n) =>
    t.index === n && t.id === `page-${n}`
      ? t
      : { ...t, id: `page-${n}`, index: n },
  );
}
function EP(e) {
  let t = MP(e);
  return [...Dn({ revision: 0, pages: t }).pages];
}
function NP(e, t, n, r, o, a, i, l) {
  let s = new Map(a),
    c = [];
  if (t.length === 0 && a.size === 0)
    return { area: void 0, nextCarry: s, remainingRefs: c };
  let d = e.contentBox.width,
    u = eh(n, r),
    p = l?.separatorKind ?? "separator",
    f = (H) => (H === "footnote" ? n.footnotesPart : n.endnotesPart),
    m = n.endnotesPart ?? n.footnotesPart,
    g = Math.max(0, e.contentBox.height),
    y = l?.separatorCache
      ? l.separatorCache.get(m, p, d, "endnote", g, u, i)
      : (() => {
          let H = ka(m, p, d, u, "endnote", g);
          return (H.fallbackReason && i.push(H.fallbackReason), H);
        })(),
    b = y.flowHeight,
    x = Bl(e),
    T = e.endnotes
      ? Math.max(x, e.endnotes.box.y - e.contentBox.y + e.endnotes.box.height)
      : x,
    k = BP(e),
    M = Math.max(0, k - T - b),
    P = { fullContentHeight: Math.max(0, k - b), reasons: i },
    L = [],
    O = 0,
    R = Ug;
  for (let [H, I] of a) {
    let _ = H.match(/^(footnote|endnote):(-?\d+)$/);
    if (!_) continue;
    let v = _[1],
      j = Number(_[2]),
      J = Math.max(0, M - O);
    if (I.height <= J + 0.001)
      (L.push({
        noteKind: v,
        noteId: j,
        scopeId: H,
        mark: null,
        continuation: true,
        box: { x: e.contentBox.x, y: 0, width: d, height: I.height },
        fragments: I.fragments,
      }),
        (O += I.height),
        s.delete(H));
    else {
      let N = Cl({ fragments: I.fragments, flowHeight: I.height }, J, P);
      (N.head.length > 0 &&
        (L.push({
          noteKind: v,
          noteId: j,
          scopeId: H,
          mark: null,
          continuation: true,
          box: { x: e.contentBox.x, y: 0, width: d, height: N.headHeight },
          fragments: N.head,
        }),
        (O += N.headHeight)),
        N.tail.length > 0
          ? s.set(H, { fragments: N.tail, height: N.tailHeight, mark: null })
          : s.delete(H));
    }
  }
  for (let H = 0; H < t.length; H += 1) {
    let I = t[H];
    if (L.length >= ho) {
      (i.push("note-count-limit"), c.push(...t.slice(H)));
      break;
    }
    let _ = f(I.noteKind),
      v = vl(_, I.noteId, d, u);
    if (!v) {
      i.push("missing-note-body");
      continue;
    }
    let j = r.marks.get(dr(I.noteKind, I.noteId)) ?? null,
      J = Math.max(0, M - O);
    if (((R -= v.fragments.length), R < 0)) {
      (i.push("note-area-fragment-limit"), c.push(...t.slice(H)));
      break;
    }
    if (v.flowHeight <= J + 0.001)
      (L.push({
        noteKind: I.noteKind,
        noteId: I.noteId,
        scopeId: v.scopeId,
        mark: I.customMarkFollows ? null : j,
        box: { x: e.contentBox.x, y: 0, width: d, height: v.flowHeight },
        fragments: v.fragments,
      }),
        (O += v.flowHeight));
    else {
      let N = Cl(v, J, P);
      (N.head.length > 0 &&
        (L.push({
          noteKind: I.noteKind,
          noteId: I.noteId,
          scopeId: v.scopeId,
          mark: I.customMarkFollows ? null : j,
          box: { x: e.contentBox.x, y: 0, width: d, height: N.headHeight },
          fragments: N.head,
        }),
        (O += N.headHeight)),
        N.tail.length > 0 &&
          s.set(v.scopeId, {
            fragments: N.tail,
            height: N.tailHeight,
            mark: null,
          }),
        c.push(...t.slice(H + 1)));
      break;
    }
  }
  if (L.length === 0 && a.size === 0)
    return { area: void 0, nextCarry: s, remainingRefs: c };
  if (L.length === 0) return { area: void 0, nextCarry: s, remainingRefs: c };
  let h = e.contentBox.y + T,
    D = h + b,
    G = L.map((H) => {
      let I = { ...H, box: { ...H.box, y: D } };
      return ((D += H.box.height), I);
    }),
    ee = Tl(y, e.contentBox.x, d, h),
    C = b + O,
    F = Math.max(0, k - T),
    z = Math.min(C, F);
  return {
    area: {
      kind: "endnotes",
      placement: o,
      box: { x: e.contentBox.x, y: h, width: d, height: z },
      separator: {
        kind: p,
        box: ee,
        fragments: y.fragments,
        synthetic: y.synthetic,
        ...(y.ruleStyle !== void 0 ? { ruleStyle: y.ruleStyle } : {}),
      },
      notes: G,
    },
    nextCarry: s,
    remainingRefs: c,
  };
}
function AP(e, t, n, r, o, a, i) {
  let l = e,
    s = t;
  for (; s.size > 0 && a.remaining > 0;) {
    let c = l[l.length - 1],
      d = oh(c, c.index + 1, "footnote-drain"),
      u = Mc(d, [], n, r, "pageBottom", s, o, { separatorCache: i }),
      p = u.area?.notes.length ?? 0;
    if (((s = u.nextCarry), p === 0)) {
      (o.push("note-overflow-stalled"),
        u.area &&
          ((l = [...l, { ...d, footnotes: u.area }]), (a.remaining -= 1)));
      break;
    }
    ((l = [...l, { ...d, footnotes: u.area }]), (a.remaining -= 1));
  }
  return (
    s.size > 0 &&
      !o.includes("note-overflow-stalled") &&
      o.push("note-overflow-page-limit"),
    { pages: l, carry: s }
  );
}
function DP(e, t, n, r = "endnote-overflow") {
  let o = oh(n, t, r);
  return { pages: [...e.slice(0, t), o, ...e.slice(t)], pageIndex: t };
}
function Vg(e, t, n) {
  if (n <= t || t >= e.length) return e;
  let r = Math.min(n, e.length),
    o = e[t],
    a = o.pageFieldSource?.pageNumber ?? t + 1,
    i = o.pageFieldSource?.format,
    l = r - t,
    s = [...e];
  for (let c = t; c < r; c += 1) {
    let d = s[c];
    s[c] = {
      ...d,
      pageFieldSource: {
        pageNumber: a + (c - t),
        sectionPageCount: l,
        ...(i ? { format: i } : {}),
      },
    };
  }
  return s;
}
function Yg(e, t, n, r, o, a, i, l, s) {
  if (n.length === 0 || e.length === 0) return e;
  let c = [...e],
    d = [...n],
    u = new Map(),
    p = t,
    f = 0,
    m = "separator",
    g = s?.stopBeforeIndex ?? Number.POSITIVE_INFINITY,
    y = s?.sectionStartIndex ?? t,
    b = s?.stopBeforeIndex !== void 0,
    x = s?.separatorCache;
  for (; d.length > 0 || u.size > 0;) {
    if (p >= c.length || p >= g) {
      if (l.remaining <= 0) {
        i.push("note-overflow-page-limit");
        break;
      }
      let E = c[Math.min(Math.max(p, 1), c.length) - 1] ?? c[c.length - 1],
        P = Math.min(p, g, c.length),
        L = DP(c, P, E, "endnote-overflow");
      ((c = L.pages),
        (p = L.pageIndex),
        b && (g = P + 1),
        (f += 1),
        (l.remaining -= 1));
    }
    let T = c[p];
    if (!rh(T)) {
      p += 1;
      continue;
    }
    let k = NP(T, d, r, o, a, u, i, {
      separatorKind: m,
      ...(x ? { separatorCache: x } : {}),
    });
    ((u = k.nextCarry), (d = k.remainingRefs));
    let M = k.area?.notes.length ?? 0;
    if (k.area) {
      let E = c[p];
      c[p] = {
        ...E,
        endnotes: E.endnotes
          ? {
              ...k.area,
              notes: [...E.endnotes.notes, ...k.area.notes],
              box: {
                ...k.area.box,
                y: E.endnotes.box.y,
                height: E.endnotes.box.height + k.area.box.height,
              },
            }
          : k.area,
      };
    } else {
      if (u.size === 0 && d.length === 0) break;
      if (!k.area && u.size === 0 && d.length > 0) {
        ((p += 1), (m = "separator"));
        continue;
      }
    }
    if (
      M === 0 &&
      (u.size > 0 || d.length > 0) &&
      T.fragments.length === 0 &&
      T.noteStream === "endnote-overflow"
    ) {
      i.push("note-overflow-stalled");
      break;
    }
    if (u.size > 0 || d.length > 0) {
      ((m = "continuationSeparator"), (p += 1));
      continue;
    }
    break;
  }
  return (
    (d.length > 0 || u.size > 0) &&
      (i.includes("note-overflow-stalled") ||
        i.push("note-overflow-page-limit")),
    b
      ? (c = Vg(c, y, Math.min(g, c.length)))
      : f > 0 && (c = Vg(c, y, c.length)),
    c
  );
}
function ih(e, t, n, r) {
  let o = new Map(),
    a = [],
    i = new Map(),
    l = Lc(t),
    s = Qg();
  for (let d of e.pages) {
    let u = Bc(d),
      f = kl(u, t, l).filter((k) => k.noteKind === "footnote"),
      m = f[0]?.sectionIndex ?? 0,
      g = yo(n, m);
    if (g.pos === "sectEnd" || g.pos === "docEnd") continue;
    let y = Math.max(0, u.contentBox.height - qg),
      { area: b, nextCarry: x } = Mc(u, f, n, r, g.pos, i, a, {
        reserveColumnBudget: true,
        separatorCache: s,
      });
    i = x;
    let T = Math.min(b?.box.height ?? 0, y);
    if (T > 0) {
      let k = o.get(d.index) ?? 0;
      o.set(d.index, Math.max(k, T));
    }
  }
  let c = true;
  for (let d of e.pages) {
    let u = o.get(d.index) ?? 0;
    if (u <= 0) continue;
    if (Bl(Bc(d)) + u > d.contentBox.height + 0.5) {
      c = false;
      break;
    }
  }
  return { reserves: o, stable: c, reasons: a };
}
function lh(e, t, n, r) {
  let o = [...(r?.fallbackReasons ?? [])],
    a = r?.paragraphSectionIndex ?? new Map(),
    i = { remaining: Zg },
    l = Lc(t),
    s = Qg(),
    c = [],
    d = [];
  for (let x of e.pages)
    for (let T of kl(x, t, l)) {
      let k = {
        noteId: T.noteId,
        sectionIndex: T.sectionIndex,
        pageIndex: x.index,
        customMarkFollows: T.customMarkFollows,
      };
      T.noteKind === "footnote" ? c.push(k) : d.push(k);
    }
  let u = th(c, d, n),
    p = new Map(),
    f = new Map(),
    m = [],
    g = e.pages.map((x) => {
      let T = Bc(x),
        k = kl(x, t, l),
        M = k.filter((R) => R.noteKind === "footnote"),
        E = k.filter((R) => R.noteKind === "endnote");
      for (let R of E)
        if (Fc(n, R.sectionIndex).pos === "sectEnd") {
          let D = f.get(R.sectionIndex) ?? [];
          (D.push(R), f.set(R.sectionIndex, D));
        } else m.push(R);
      for (let R of M) {
        let h = yo(n, R.sectionIndex);
        if (h.pos === "sectEnd") {
          let D = f.get(R.sectionIndex) ?? [];
          (D.push(R), f.set(R.sectionIndex, D));
        } else h.pos === "docEnd" && m.push(R);
      }
      let P = M[0]?.sectionIndex ?? 0,
        L = yo(n, P),
        O;
      if (L.pos === "pageBottom" || L.pos === "beneathText") {
        let R = M.filter((D) => {
            let G = yo(n, D.sectionIndex).pos;
            return G === "pageBottom" || G === "beneathText";
          }),
          h = Mc(T, R, n, u, L.pos, p, o, { separatorCache: s });
        ((O = h.area), (p = h.nextCarry));
      }
      return { ...T, ...(O ? { footnotes: O } : {}) };
    }),
    y = g.length;
  if (p.size > 0) {
    let x = AP(g, p, n, u, o, i, s);
    ((g = x.pages), (p = x.carry));
  }
  if (f.size > 0 && g.length > 0) {
    let x = [...f.keys()].sort((T, k) => T - k);
    for (let T of x) {
      let k = f.get(T),
        M = ah(g, T, a),
        E = FP(g, T, a),
        P = M;
      for (let L = 0; L <= M; L += 1)
        if (Ec(g[L], a).includes(T)) {
          P = L;
          break;
        }
      g = Yg(g, M, k, n, u, "sectEnd", o, i, {
        stopBeforeIndex: E,
        sectionStartIndex: P,
        separatorCache: s,
      });
    }
  }
  return (
    m.length > 0 &&
      g.length > 0 &&
      (g = Yg(g, LP(g), m, n, u, "docEnd", o, i, { separatorCache: s })),
    g.length !== y && (g = EP(g)),
    {
      layout: TP({ revision: e.revision, pages: g }, u),
      fallbackReasons: o,
      noteMarks: u,
    }
  );
}
function _P(e) {
  return _d$1(e).map((t) => ({
    noteKind: t.noteKind,
    noteId: t.noteId,
    paragraphId: t.paragraphId,
    atomOffset: t.atomOffset,
    customMarkFollows: t.customMarkFollows,
  }));
}
function HP(e, t, n) {
  let r = new Map(),
    o = wn(e, n);
  for (let a = 0; a < t.length; a += 1) {
    let i = t[a];
    for (let l = i.blockStart; l < i.blockEndExclusive; l += 1) {
      let s = o[l];
      if (!s) continue;
      if (s.kind === "paragraph") {
        r.set(s.id, a);
        continue;
      }
      let c = (d, u) => {
        if (!(u > 32) && d.kind !== "textValue") {
          if (d.kind === "paragraph") {
            r.set(d.id, a);
            return;
          }
          for (let p of d.children) c(p, u + 1);
        }
      };
      c(s, 0);
    }
  }
  return r;
}
function xr(e) {
  let t = new Map();
  for (let [n, r] of e) r > 0 && t.set(n, r);
  return t;
}
function Oc(e, t) {
  let n = xr(e),
    r = xr(t);
  if (n.size !== r.size) return false;
  for (let [o, a] of n) if ((r.get(o) ?? 0) !== a) return false;
  return true;
}
function Kg(e, t) {
  let n = xr(e);
  for (let [r, o] of t) o <= 0 || n.set(r, Math.max(n.get(r) ?? 0, o));
  return n;
}
function Ol(e) {
  return [...xr(e)]
    .map(([t, n]) => `${t}=${n}`)
    .sort()
    .join(",");
}
function sh(e, t, n, r, o) {
  let a = _P(e),
    i = HP(e, t, n.displayMode ?? ft),
    l = SP(a, i),
    s = dh(l, r),
    c = n.session?.notePageBottomReserves,
    d = c ? xr(c) : new Map(),
    u = [],
    p = o({ ...n, noteMarks: s, pageBottomReserves: d }),
    f = new Set([Ol(d)]);
  for (let g = 0; g < kc; g += 1) {
    let y = ih(p, l, r, s);
    if (((u = [...y.reasons]), y.stable && Oc(y.reserves, d))) break;
    let b = y.stable ? xr(y.reserves) : Kg(d, y.reserves);
    if (Oc(b, d)) {
      u.push("note-reflow-exhausted");
      break;
    }
    let x = Ol(b);
    if (f.has(x)) {
      b = Kg(d, y.reserves);
      let T = Ol(b);
      if (Oc(b, d) || f.has(T)) {
        u.push("note-reflow-exhausted");
        break;
      }
    }
    ((d = b),
      f.add(Ol(d)),
      (p = o({ ...n, noteMarks: s, pageBottomReserves: d })),
      g === kc - 1 && u.push("note-reflow-exhausted"));
  }
  let m = lh(p, l, r, { fallbackReasons: u, paragraphSectionIndex: i });
  return (
    n.session &&
      ((n.session.previous = m.layout),
      (n.session.notePageBottomReserves = xr(d))),
    m.layout
  );
}
function dh(e, t) {
  let n = [],
    r = [];
  for (let o of e) {
    let a = {
      noteId: o.noteId,
      sectionIndex: o.sectionIndex,
      customMarkFollows: o.customMarkFollows,
    };
    o.noteKind === "footnote" ? n.push(a) : r.push(a);
  }
  return th(n, r, t);
}
function ch(e, t) {
  let n = e.projectLink ?? t.projectLink,
    r = e.projectFieldLink ?? t.projectFieldLink,
    o = e.documentProperties ?? t.documentProperties;
  return {
    ...e,
    ...(n ? { projectLink: n } : {}),
    ...(r ? { projectFieldLink: r } : {}),
    ...(o ? { documentProperties: o } : {}),
  };
}
var zP = "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
  jP = "http://schemas.microsoft.com/office/word/2010/wordml",
  GP = "http://schemas.microsoft.com/office/word/2012/wordml";
function WP(e) {
  if (e.kind !== "textValue") {
    for (let t of e.attributes)
      if (t.localName === "val" && t.namespaceUri === zP) return t.value;
  }
}
function Ca(e) {
  for (let t of e.children)
    if (
      t.kind !== "textValue" &&
      (t.kind === "contentControlProperties" || t.localName === "sdtPr")
    )
      return t;
}
function bo(e, t) {
  if (e) {
    for (let n of e.children)
      if (n.kind !== "textValue" && n.localName === t) return n;
  }
}
function $n(e, t) {
  let n = bo(e, t);
  return n ? WP(n) : void 0;
}
function Ll(e) {
  return e === "sdtLocked" || e === "contentLocked" || e === "sdtContentLocked"
    ? e
    : "unlocked";
}
function Nc(e) {
  if (!e) return "richText";
  for (let t of e.children) {
    if (t.kind === "textValue") continue;
    let n = t.kind,
      r = t.localName,
      o = t.namespaceUri;
    if (n === "contentControlDropDownList" || r === "dropDownList")
      return "dropdown";
    if (n === "contentControlComboBox" || r === "comboBox") return "comboBox";
    if (n === "contentControlDate" || r === "date") return "date";
    if (r === "picture") return "picture";
    if (n === "contentControlText" || r === "text") return "plainText";
    if (r === "richText") return "richText";
    if (n === "contentControlCheckbox" || (r === "checkbox" && o === jP))
      return "checkbox";
    if (r === "repeatingSection" && o === GP) return "repeatingSection";
  }
  return "richText";
}
function uh(e) {
  let t = (n, r) => {
    for (let o of n)
      if (o.kind !== "textValue") {
        if (o.kind === "tableRow") return "row";
        if (o.kind === "tableCell") return "cell";
        if (o.kind === "paragraph" || o.kind === "table") return "block";
        if (Lb$1(o) && r < Kb$1) {
          let a = t(Ob$1(o), r + 1);
          if (a) return a;
        }
      }
    return null;
  };
  return t(Ob$1(e), 0) ?? "inline";
}
var XP = {
    kind: "covered",
    id: "hashed",
    paragraphId: "covered",
    fragmentIndex: "covered",
    range: "hashed",
    props: "hashed",
    spacing: "hashed",
    indent: "hashed",
    bottomBorder: "hashed",
    borders: "hashed",
    shading: "hashed",
    shadingBox: "hashed",
    markRevisions: "hashed",
    markRevision: "covered",
    markFormatRevision: "hashed",
    marker: "hashed",
    lines: "hashed",
    box: "hashed",
  },
  $P = {
    kind: "covered",
    id: "hashed",
    tableId: "hashed",
    fragmentIndex: "hashed",
    nestingDepth: "hashed",
    columnEdges: "hashed",
    rows: "hashed",
    box: "hashed",
  };
function mh(e) {
  return Object.keys(e).filter((t) => e[t] === "hashed");
}
var VP = mh(XP),
  YP = mh($P),
  fh = new WeakMap();
function ph(e) {
  let t = fh.get(e);
  if (t !== void 0) return t;
  let n =
    e.kind === "table"
      ? JSON.stringify(YP.map((r) => e[r]))
      : JSON.stringify(VP.map((r) => e[r]));
  return (fh.set(e, n), n);
}
function gh(e, t) {
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      o = t[n];
    if (r !== o && ph(r) !== ph(o)) return false;
  }
  return true;
}
function Ac(e, t) {
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return false;
  return true;
}
var hh = Object.freeze([]),
  yh = new Map();
function bh(e, t) {
  if (e === t) return true;
  if (e.size !== t.size) return false;
  for (let [n, r] of e) if (t.get(n) !== r) return false;
  return true;
}
function Fl() {
  return {
    previous: null,
    checkpoints: [],
    keys: [],
    context: "",
    startLineCounter: 0,
    endLineCounter: 0,
    endCursorY: 0,
    endSpaceAfter: 0,
    endsOpenPage: true,
    stats: { placed: 0, total: 0, reusedPages: 0, fullPasses: 0 },
    balanceLimit: null,
    multi: null,
    notePageBottomReserves: null,
  };
}
function xh(e, t) {
  return [...e]
    .map(([n, r]) => `${n}=${r.flowHeight}`)
    .sort()
    .join(",");
}
function wh(e) {
  return e
    ? `hf:${e.titlePage ? 1 : 0}${e.evenAndOddHeaders ? 1 : 0};h:${xh(e.headers)};f:${xh(e.footers)}`
    : "";
}
function Ml(e, t, n) {
  if (e.sectionFurniture) return e.sectionFurniture[t];
  if (t === n - 1) return e.furniture;
}
function KP(e, t) {
  return e
    .map((n, r) => {
      let o = br(n.properties),
        a = Ml(t, r, e.length),
        i = n.properties.pageNumbering,
        l = i
          ? `pn:${i.start ?? ""},${i.fmt ?? ""},${i.chapStyle ?? ""},${i.chapSep ?? ""}`
          : "pn:",
        s = n.properties.columns,
        c = `cols:${s.count},${s.gapTwips},${s.equalWidth === false ? 0 : 1},${s.separator ? 1 : 0};${(s.definitions ?? []).map((d) => `${d.widthTwips}/${d.gapTwips}`).join(",")}`;
      return [
        n.blockStart,
        n.blockEndExclusive,
        n.properties.breakType,
        o.width,
        o.height,
        o.margin.top,
        o.margin.right,
        o.margin.bottom,
        o.margin.left,
        o.headerDistance ?? 36,
        o.footerDistance ?? 36,
        wh(a),
        l,
        c,
      ].join(":");
    })
    .join("|");
}
function UP(e, t, n) {
  if (!e) return null;
  let r = e.multi;
  if (r && r.structureKey === t && r.sections.length === n) return r;
  let o = {
    structureKey: t,
    sections: Array.from({ length: n }, () => Fl()),
    spans: [],
    previousRemapped: [],
    previousFinalized: null,
    previousPageCount: -1,
  };
  return ((e.multi = o), o);
}
function ZP(e) {
  return e !== "continuous";
}
function qP(e, t) {
  return e.width === t.width && e.height === t.height;
}
function JP(e, t) {
  if (
    t.fragments.length === 0 &&
    !t.columnSeparators?.length &&
    !t.anchoredDrawings?.length
  )
    return e;
  let n =
    e.anchoredDrawings || t.anchoredDrawings
      ? Object.freeze([
          ...(e.anchoredDrawings ?? []),
          ...(t.anchoredDrawings ?? []),
        ])
      : void 0;
  return {
    ...e,
    fragments:
      t.fragments.length > 0 ? [...e.fragments, ...t.fragments] : e.fragments,
    ...((e.columnSeparators?.length || t.columnSeparators?.length) && {
      columnSeparators: [
        ...(e.columnSeparators ?? []),
        ...(t.columnSeparators ?? []),
      ],
    }),
    ...(n ? { anchoredDrawings: n } : {}),
  };
}
function Sh(e, t, n) {
  ((e.previous = t),
    (e.startLineCounter = 0),
    (e.endLineCounter = n),
    (e.keys = []),
    (e.checkpoints = []),
    (e.context = ""));
}
function Ph(e, t, n, r, o) {
  let { session: a, ...i } = r,
    l = KP(t, r),
    s = UP(a, l, t.length),
    c = [],
    d = [],
    u = [],
    p = 0,
    f = 0,
    m = 0,
    g = 0,
    y = 0,
    b = 0,
    x = 0,
    T = true,
    k = null,
    M = "",
    E = 1;
  for (let O = 0; O < t.length; O += 1) {
    let R = t[O],
      h = e.slice(R.blockStart, R.blockEndExclusive),
      D = br(R.properties),
      G = Ml(r, O, t.length),
      ee = c.length,
      C = p,
      F = s?.spans[O],
      z = wh(G);
    if (h.length === 0 && !ZP(R.properties.breakType)) {
      u.push({ startIndex: ee, pageCount: 0, sheetY: C, remappedPages: [] });
      continue;
    }
    let H =
        O > 0 &&
        R.properties.breakType === "continuous" &&
        c.length > 0 &&
        T &&
        k !== null &&
        qP(k, D) &&
        M === z,
      I = s?.sections[O],
      _ =
        R.properties.columns.count > 1 &&
        t[O + 1]?.properties.breakType === "continuous",
      v = o(h, n, {
        ...i,
        geometry: D,
        furniture: G,
        sectionColumns: R.properties.columns,
        ...(_ ? { balanceColumns: _ } : {}),
        lineCounterStart: f,
        pageIndexStart: H ? ee - 1 : ee,
        ...(H ? { flowStartY: b, spaceBeforeCarry: x } : {}),
        ...(I ? { session: I } : {}),
      });
    ((f = v.lineCounter),
      (b = v.endCursorY),
      (x = v.endSpaceAfter),
      (T = v.endsOpenPage),
      (k = D),
      (M = z),
      I
        ? ((m += I.stats.placed), (g += I.stats.total))
        : ((m += h.length), (g += h.length)));
    let j =
        I !== void 0 &&
        I.stats.placed === 0 &&
        I.stats.reusedPages === v.pages.length &&
        F !== void 0 &&
        F.pageCount === v.pages.length,
      J =
        F !== void 0 &&
        F.startIndex === ee &&
        F.sheetY === C &&
        F.remappedPages.length === v.pages.length,
      N = R.properties.pageNumbering,
      W = N?.start !== void 0 ? N.start : E,
      Y = N?.fmt,
      $;
    if (H) {
      let Q = c.length - 1,
        q = c[Q],
        se = JP(q, v.pages[0]);
      if (se !== q) {
        c[Q] = se;
        let fe = d.lastIndexOf(q);
        fe !== -1 && (d[fe] = se);
      }
      let Pe = [];
      for (let fe of v.pages.slice(1)) {
        let ye = Sc(fe, c.length + Pe.length, p);
        (Pe.push(ye), (p = ye.box.y + ye.box.height + 24));
      }
      let he = Pe.length + 1;
      $ = Vr(Pe, W + 1, he, Y);
      for (let fe of $) (c.push(fe), d.push(fe));
      E = W + he;
    } else if (j && J) {
      (($ = F.remappedPages), (y += $.length));
      for (let Q of $)
        (c.push(Q), d.push(Q), (p = Q.box.y + Q.box.height + 24));
      E = W + $.length;
    } else {
      let Q = [];
      for (let q of v.pages) {
        let se = Sc(q, c.length + Q.length, p);
        (Q.push(se), (p = se.box.y + se.box.height + 24));
      }
      $ = Vr(Q, W, Q.length, Y);
      for (let q of $) (c.push(q), d.push(q));
      E = W + $.length;
    }
    u.push({
      startIndex: ee,
      pageCount: $.length,
      sheetY: C,
      remappedPages: $,
    });
  }
  if (c.length === 0) {
    let O = br(t[0]?.properties ?? jt),
      R = o([], n, {
        ...i,
        geometry: O,
        sectionColumns: t[0]?.properties.columns ?? jt.columns,
      }),
      h = Dn({ revision: n, pages: R.pages });
    return (
      s &&
        ((s.spans = []),
        (s.previousRemapped = R.pages),
        (s.previousFinalized = h),
        (s.previousPageCount = h.pages.length)),
      a &&
        (Sh(a, h, f),
        (a.stats = {
          placed: 0,
          total: 0,
          reusedPages: 0,
          fullPasses: a.stats.fullPasses + 1,
        })),
      h
    );
  }
  let P = Dn({ revision: n, pages: c }),
    L = P;
  if (
    s?.previousFinalized &&
    s.previousPageCount === P.pages.length &&
    s.previousRemapped.length === d.length
  ) {
    let O = s.previousFinalized.pages,
      R = s.previousRemapped,
      h = P.pages.map((D, G) => (d[G] === R[G] && O[G] ? O[G] : D));
    L = { revision: n, pages: h };
  }
  return (
    s &&
      ((s.spans = u),
      (s.previousRemapped = d),
      (s.previousFinalized = L),
      (s.previousPageCount = L.pages.length)),
    a &&
      (Sh(a, L, f),
      (a.stats = {
        placed: m,
        total: g || 1,
        reusedPages: y,
        fullPasses: a.stats.fullPasses + (m === g && y === 0 ? 1 : 0),
      })),
    L
  );
}
function El(e = 6, t = 14) {
  let n = (r) => r.fontSizePt / 11;
  return {
    measure: (r, o) =>
      r.length * e * n(o) * (o.horizontalScalePercent / 100) +
      r.length * o.characterSpacingPt,
    lineMetrics: (r) => {
      let o = r.verticalAlign === "baseline" ? 1 : 0.75,
        a = t * n(r) * o;
      return { height: a, baseline: a * 0.8 };
    },
  };
}
var QP = 2,
  Rh = new WeakMap(),
  Ih = new WeakMap();
function eR(e, t, n) {
  let r = n.displayMode ?? ft,
    o = wn(e, r),
    a = Rc(e, o).sections,
    i = Ch(e),
    l = {
      ...n,
      producer: `${n.producer ?? "unversioned-measurer"}|cc:${i}`,
      tocFieldChromeParagraphIds: n.tocFieldChromeParagraphIds ?? yc(e),
      emptyTocPlaceholderParagraphIds:
        n.emptyTocPlaceholderParagraphIds ?? bc(e),
      emptyTocSuppressedResultParagraphIds:
        n.emptyTocSuppressedResultParagraphIds ?? xc(e),
    },
    s = n.drawingSourceOrder;
  !s &&
    n.inlineDrawingLayout &&
    ((s = Ih.get(n.inlineDrawingLayout)),
    s ||
      ((s = (() => {
        let f = new Map();
        return (
          db$1(e).forEach((m, g) => {
            f.set(m.drawingNodeId, g);
          }),
          f
        );
      })()),
      Ih.set(n.inlineDrawingLayout, s)));
  let c = Qd(s ? { ...l, drawingSourceOrder: s } : l, o),
    d = (f) => {
      if (a.length > 1) return Ph(o, a, t, f, xo);
      let m = a[0],
        g = f.geometry ?? (m ? br(m.properties) : Do),
        y = Ml(f, 0, a.length) ?? f.furniture,
        b = xo(o, t, {
          ...f,
          geometry: g,
          furniture: y,
          sectionColumns: m?.properties.columns ?? jt.columns,
        }),
        x = m?.properties.pageNumbering,
        T = Bh(
          {
            revision: b.layout.revision,
            pages: Vr(b.pages, x?.start ?? 1, b.pages.length, x?.fmt),
          },
          b.layout,
        ),
        k = Dn(T);
      return (
        f.session && ((f.session.multi = null), (f.session.previous = k)),
        k
      );
    },
    u = (f) => {
      let m = uR(f, e, i);
      return (n.session && (n.session.previous = m), m);
    };
  if (!n.notes) return u(d(c));
  let p = ch(n.notes, n);
  return u(sh(e, a, c, p, d));
}
function vh(e, t, n, r) {
  let o = `line:${e}:${n}:${t}`;
  return r === void 0 ? o : `${o}:occ:${r}`;
}
function Sr(e, t, n$1) {
  let r = n$1.geometry,
    o = r.width - r.margin.left - r.margin.right,
    a = Ic(n$1.sectionColumns ?? jt.columns, o);
  if (
    n$1.inlineDrawingLayout &&
    n$1.drawingExclusionPass === void 0 &&
    !n$1.drawingExclusionConverged
  ) {
    let w = (Z) => n$1.drawingSourceOrder?.get(Z),
      X = Object.freeze({
        columnCount: a.count,
        columnGapPt: a.gaps[0] ?? 0,
        contentWidth: o,
        columnLefts: a.lefts,
        columnWidths: a.widths,
      }),
      A = new Map(),
      oe = null,
      ce = false,
      pe = new Set(),
      de = n$1.session?.previous?.pages;
    if (de) {
      ((A = aa(de, n$1.inlineDrawingLayout, o, w, X)),
        (oe = xo(e, t, {
          ...n$1,
          drawingExclusionPass: 0,
          drawingExclusionZonesByPage: A,
        })));
      let Z = aa(oe.pages, n$1.inlineDrawingLayout, o, w, X);
      if (Mi(A, Z)) return oe;
      ((A = new Map(Z)), pe.add(Ei(Z)));
    }
    for (let Z = 0; Z < ur; Z += 1) {
      oe = xo(e, t, {
        ...n$1,
        session: void 0,
        drawingExclusionPass: Z,
        drawingExclusionZonesByPage: A,
      });
      let me = aa(oe.pages, n$1.inlineDrawingLayout, o, w, X);
      if (me.size === 0) {
        ((ce = true), (A = me));
        break;
      }
      let xe = Ei(me);
      if (pe.has(xe)) {
        ((ce = true), (A = me));
        break;
      }
      if ((pe.add(xe), Z > 0 && Mi(A, me))) {
        ((ce = true), (A = me));
        break;
      }
      A = new Map(me);
    }
    if (!ce)
      for (let Z = 0; Z < QP && !ce; Z += 1) {
        oe = xo(e, t, {
          ...n$1,
          session: void 0,
          drawingExclusionPass: ur + Z,
          drawingExclusionZonesByPage: A,
        });
        let me = aa(oe.pages, n$1.inlineDrawingLayout, o, w, X),
          xe = Ei(me);
        if (Mi(A, me) || pe.has(xe)) {
          ((ce = true), (A = me));
          break;
        }
        (pe.add(xe), (A = new Map(me)));
      }
    if (!ce)
      throw new oo(
        `wrap exclusion reflow did not converge within ${ur} passes`,
      );
    return xo(e, t, {
      ...n$1,
      drawingExclusionConverged: true,
      drawingExclusionZonesByPage: A,
    });
  }
  let i = n$1.measurer,
    l = n$1.cache,
    s = n$1.styleCascade,
    c = n$1.listItems,
    d = n$1.defaultTabStopPt,
    u = n$1.displayMode ?? ft,
    p = u === "all-markup",
    f = n$1.tocFieldChromeParagraphIds,
    m = n$1.emptyTocPlaceholderParagraphIds,
    g = n$1.emptyTocSuppressedResultParagraphIds,
    y =
      (n$1.producer ?? "unversioned-measurer") +
      (s ? `|sc:${s.cacheToken}` : "") +
      (n$1.noteMarks ? `|nm:${rp(n$1.noteMarks)}` : "") +
      (c && c.size > 0 ? `|num:${c.size}` : "") +
      (d !== void 0 ? `|dts:${d}` : "") +
      (u === ft ? "" : `|rev:${u}`),
    b = a.widths[0],
    x = n$1.furniture,
    T = r.headerDistance ?? 36,
    k = r.footerDistance ?? 36,
    M = (w) => {
      let X = 0;
      for (let A of w?.values() ?? []) X = Math.max(X, A.flowHeight);
      return X;
    },
    E = r.height * 0.4,
    P = Math.min(E, Math.max(r.margin.top, x ? T + M(x.headers) : 0)),
    L = Math.min(E, Math.max(r.margin.bottom, x ? k + M(x.footers) : 0)),
    O = r.height - P - L,
    R = n$1.pageBottomReserves,
    h = n$1.session,
    D = n$1.lineCounterStart ?? 0,
    G = x
      ? `|hf:${T},${k},${x.titlePage ? 1 : 0}${x.evenAndOddHeaders ? 1 : 0};` +
        [...x.headers]
          .map(([w, X]) => `h${w}=${X.flowHeight}@${X.contentKey}${wc(X)}`)
          .sort()
          .join(",") +
        ";" +
        [...x.footers]
          .map(([w, X]) => `f${w}=${X.flowHeight}@${X.contentKey}${wc(X)}`)
          .sort()
          .join(",")
      : "",
    ee = n$1.flowStartY ?? 0,
    C = n$1.spaceBeforeCarry ?? 0,
    F = n$1.pageIndexStart ?? 0,
    z = R ? `|nr:${[...R].map(([w, X]) => `${w}=${X}`).join(",")}` : "",
    H = n$1.columnRegionBottom,
    I = `|cols:${a.widths.join(",")};${a.gaps.join(",")};${a.separator ? 1 : 0}${H !== void 0 ? `;bal:${H}` : ""}`,
    _ = `${y}|${r.width}x${r.height}|${r.margin.top},${r.margin.right},${r.margin.bottom},${r.margin.left}|fs:${ee},${C}|pi:${F}${G}${z}${I}`,
    v = [],
    j = () => {
      let w = Math.max(1, O - (R?.get(v.length) ?? 0));
      return H !== void 0 && v.length === 0 ? Math.max(1, Math.min(w, H)) : w;
    },
    J = (w, X) => {
      let A =
          w.kind === "paragraph"
            ? (n$1.drawingTokenForParagraph?.(w) ??
              n$1.drawingLayoutToken ??
              "")
            : w.kind === "table" && n$1.drawingTokenForParagraph
              ? Og(w, n$1.drawingTokenForParagraph)
              : "",
        oe = Rh.get(w);
      if (
        oe &&
        oe.contentWidth === X &&
        oe.producer === y &&
        oe.drawingToken === A
      )
        return oe.entry;
      let ce;
      if (w.kind === "table")
        ce = {
          kind: "table",
          table: w,
          key: cr({
            paragraph: w,
            properties: [],
            width: X,
            producer: y,
            ...(A ? { drawingToken: A } : {}),
          }),
        };
      else {
        let pe = c?.get(w.id),
          de = fa(w, X, s, pe),
          {
            props: Z,
            indent: me,
            available: xe,
            alignment: Se,
            spacing: Te,
            lineSpacing: Ce,
            contextualSpacing: Oe,
            styleId: Qe,
            shading: ae,
            inheritedRunProperties: _e,
            markRunProperties: Be,
          } = de,
          He = $p(
            w.children.find((bt) => bt.kind === "paragraphProperties"),
            s,
          ),
          an = As(He),
          Ge = Xo(de.tabStops, d),
          Un = Ge === de.tabStops ? de.tabStopsCacheToken : ar(Ge);
        ce = {
          kind: "paragraph",
          paragraph: w,
          props: Z,
          indent: me,
          available: xe,
          alignment: Se,
          spacing: Te,
          lineSpacing: Ce,
          contextualSpacing: Oe,
          styleId: Qe,
          borders: He,
          borderGroupKey: an === "" ? "" : `${an}@${me.left},${me.left + xe}`,
          shading: ae,
          inheritedRunProperties: _e,
          markRunProperties: Be,
          tabStops: Ge,
          keeps: Vp(Z),
          ...(pe ? { listItem: pe } : {}),
          key: cr({
            paragraph: w,
            properties: [
              ...Z,
              ..._e,
              ...Be,
              { localName: "tabStops", attributes: { token: Un } },
              ...(pe
                ? [{ localName: "list", attributes: { token: pe.cacheToken } }]
                : []),
            ],
            width: xe,
            producer: y,
            ...(A ? { drawingToken: A } : {}),
          }),
        };
      }
      return (
        Rh.set(w, { contentWidth: X, producer: y, drawingToken: A, entry: ce }),
        ce
      );
    },
    N = e.map((w) => J(w, b)),
    W = N.map((w) => w.key),
    Y = xg(N, b, s, u),
    $ = N.map((w) => w.kind === "paragraph" && w.keeps.keepNext),
    Q = N.map((w) =>
      w.kind === "paragraph" ? c?.get(w.paragraph.id)?.markerText : void 0,
    ),
    q = Up(
      Zp(W, (w) => $[w]),
      (w) => Q[w],
    ),
    se = h?.previous ?? null,
    Pe = se !== null && h !== void 0 && h.context === _,
    he = a.count === 1 && Pe,
    fe = 0;
  if (Pe) {
    let w = Math.min(q.length, h.keys.length);
    for (; fe < w && q[fe] === h.keys[fe];) fe += 1;
  }
  let ye = 0;
  if (he) {
    let w = Math.min(q.length, h.keys.length) - fe;
    for (; ye < w && q[q.length - 1 - ye] === h.keys[h.keys.length - 1 - ye];)
      ye += 1;
  }
  if (Pe && fe === N.length && N.length === h.keys.length) {
    let w = Bh({ revision: t, pages: se.pages }, se),
      X = D + (h.endLineCounter - h.startLineCounter);
    return (
      (h.previous = w),
      (h.startLineCounter = D),
      (h.endLineCounter = X),
      (h.stats = {
        placed: 0,
        total: N.length,
        reusedPages: se.pages.length,
        fullPasses: h.stats.fullPasses,
      }),
      l?.retain(new Set(W)),
      {
        layout: w,
        pages: w.pages,
        lineCounter: X,
        endCursorY: h.endCursorY,
        endSpaceAfter: h.endSpaceAfter,
        endsOpenPage: h.endsOpenPage,
      }
    );
  }
  let Ae = [],
    Ie = 0,
    mt = 0,
    lt = () => a.lefts[Ie],
    Le = () => a.widths[Ie],
    nn = () => ({
      text: { left: lt(), width: Le() },
      margin: { left: 0, width: o },
      page: { left: -r.margin.left, width: r.width },
    }),
    rn = () => Ae.length > mt,
    ve = [],
    We = [],
    st = new Map(),
    ne = ee,
    on = ee,
    Fe = 0,
    nt = D,
    B = C,
    S = [],
    U = () => ({
      pageCount: v.length,
      pageFragments: [...Ae],
      pendingAnchoredDrawings: [...ve],
      deferredAnchoredDrawings: We.length > 0 ? [...We] : hh,
      anchorPageDeferCounts: st.size > 0 ? new Map(st) : yh,
      cursorY: ne,
      lineCounter: nt,
      previousSpaceAfter: B,
      flowColumnIndex: Fe,
    }),
    V = 0,
    K = 0,
    le = 0,
    Re = ee === 0;
  if (he && fe > 0 && fe < h.checkpoints.length) {
    let w = h.checkpoints[fe];
    (v.push(...se.pages.slice(0, w.pageCount)),
      (Ae = [...w.pageFragments]),
      (ve = [...w.pendingAnchoredDrawings]),
      (We = [...w.deferredAnchoredDrawings]),
      st.clear());
    for (let [X, A] of w.anchorPageDeferCounts) st.set(X, A);
    ((ne = w.cursorY),
      (Fe = w.flowColumnIndex),
      (Ie = w.flowColumnIndex),
      (nt = w.lineCounter),
      (B = w.previousSpaceAfter),
      (V = fe),
      (Re = false),
      (le = v.length),
      S.push(...h.checkpoints.slice(0, fe)));
  }
  let we = (w) => ({
      x: 0,
      y: w * (r.height + 24),
      width: r.width,
      height: r.height,
    }),
    gt = (w) =>
      x?.titlePage && w === 0
        ? "first"
        : x?.evenAndOddHeaders && (F + w + 1) % 2 === 0
          ? "even"
          : "default",
    Ue = (w, X, A) => {
      if (!x) return;
      let oe = gt(X),
        ce = (w === "header" ? x.headers : x.footers).get(oe);
      if (!ce) return;
      let pe = (Ce) => {
          let Oe =
            w === "header" ? A.y + T : A.y + r.height - k - Ce.flowHeight;
          return {
            kind: w,
            variant: oe,
            partName: Ce.partName,
            ...(Ce.rId ? { rId: Ce.rId } : {}),
            box: {
              x: A.x + r.margin.left,
              y: Oe,
              width: o,
              height: Ce.flowHeight,
            },
            fragments: Ce.fragments,
            ...(Ce.anchoredDrawings
              ? { anchoredDrawings: Ce.anchoredDrawings }
              : {}),
          };
        },
        de = F + X + 1,
        Z = {
          pageNumber: de,
          pageCount: Math.max(de, v.length + 1),
          sectionPageCount: X + 1,
        },
        me = ce.pageFieldNeeds,
        Se =
          An(me) || (ce.anchoredDrawings?.length ?? 0) > 0
            ? ce.withPageContext(Z)
            : ce,
        Te = pe(Se);
      return An(me)
        ? { ...Te, pageFieldProjector: (Ce) => pe(ce.withPageContext(Ce)) }
        : Te;
    },
    dt = a.count,
    Xe = lt,
    ct = (w) =>
      Object.freeze({
        x: a.lefts[Fe] ?? 0,
        y: w.y,
        width: a.widths[Fe] ?? b,
        height: w.height,
      }),
    rt = () =>
      Object.freeze({
        pageNumber: F + v.length + 1,
        pageWidth: r.width,
        pageHeight: r.height,
        marginLeft: r.margin.left,
        marginRight: r.margin.right,
        marginBottom: r.margin.bottom,
        contentInsetTop: P,
        contentInsetBottom: L,
        contentWidth: b,
        contentHeight: j(),
        contentBandHeight: O,
        ownerPartName: n$1.inlineDrawingLayout?.ownerPartName ?? n,
        storyKind: "body",
      }),
    ot = () => oa(rt()),
    $e = (w) => n$1.drawingSourceOrder?.get(w),
    Me = (w) => {
      if (w.length === 0) return;
      for (let A of w)
        ve.some((oe) => oe.drawingNodeId === A.drawingNodeId) ||
          ve.push(
            A.sourceOrder === void 0 && $e(A.drawingNodeId) !== void 0
              ? Object.freeze({ ...A, sourceOrder: $e(A.drawingNodeId) })
              : A,
          );
      if (!n$1.inlineDrawingLayout) return;
      let X = Lp(ve, { pageBottom: j() });
      if ((ve.splice(0, ve.length, ...X.drawings), X.deferred.length > 0))
        for (let A of X.deferred) {
          let oe = (st.get(A.drawingNodeId) ?? 0) + 1;
          (st.set(A.drawingNodeId, oe),
            oe >= xd ? ve.push(Id(A, "page-defer-exhausted")) : We.push(A));
        }
    },
    be = () => {
      if (We.length === 0) return;
      let w = We.map((X) => Pd(X, ne - X.y));
      ((We = []), Me(w));
    },
    Ct = () => {
      let w = v.length,
        X = we(w),
        A = Ue("header", w, X),
        oe = Ue("footer", w, X),
        { usedBottom: ce, hasBodyPageFields: pe } = nd(Ae, on);
      (v.push({
        id: `page-${w}`,
        index: w,
        box: X,
        contentBox: { x: X.x + r.margin.left, y: X.y + P, width: o, height: O },
        fragments: Ae,
        hasBodyPageFields: pe,
        ...(a.separator
          ? {
              columnSeparators: a.gaps.map((de, Z) => ({
                x: a.lefts[Z] + a.widths[Z] + de / 2 - 0.375,
                y: on,
                width: 0.75,
                height: Math.max(0, ce - on),
              })),
            }
          : {}),
        ...(ve.length > 0 ? { anchoredDrawings: Bp(ve) } : {}),
        ...(A ? { header: A } : {}),
        ...(oe ? { footer: oe } : {}),
      }),
        (Ae = []),
        (ve = []),
        (ne = 0),
        (Ie = 0),
        (Fe = 0),
        (on = 0),
        (mt = 0));
    },
    Pr = (w, X) => {
      if (
        w.kind !== "paragraph" ||
        w.listItem !== void 0 ||
        w.shading !== void 0
      )
        return false;
      let { top: A, bottom: oe, left: ce, right: pe, between: de } = w.borders;
      if (A ?? oe ?? ce ?? pe ?? de) return false;
      let Z = n$1.inlineDrawingLayout;
      return Z && Lt(w.paragraph, Z).length > 0
        ? false
        : X.every(
            (me) =>
              me.drawings.length === 0 &&
              !me.pageBreakAfter &&
              !me.columnBreakAfter &&
              me.spans.every((xe) => xe.text.length === 0),
          );
    },
    Rr = () => {
      if (Ie + 1 < a.count) {
        ((Ie += 1), (Fe = Ie), (ne = on), (B = 0), (mt = Ae.length));
        return;
      }
      (Ct(), be());
    },
    Wc = (w) =>
      wl(w, {
        measurer: i,
        producer: y,
        cache: l,
        styleCascade: s,
        ...(d !== void 0 ? { defaultTabStopPt: d } : {}),
        ...(u ? { displayMode: u } : {}),
        ...(n$1.documentProperties
          ? { documentProperties: n$1.documentProperties }
          : {}),
        inlineDrawingLayout: n$1.inlineDrawingLayout,
        drawingTokenForParagraph: n$1.drawingTokenForParagraph,
      }),
    Tn = {
      measurer: i,
      cache: l,
      producer: y,
      nextLineId: (w, X, A, oe) => ((nt += 1), vh(w, X, A, oe)),
      pageOccurrenceKey: () => String(F + v.length),
      styleCascade: s,
      listItems: c,
      ...(d !== void 0 ? { defaultTabStopPt: d } : {}),
      ...(n$1.projectLink ? { projectLink: n$1.projectLink } : {}),
      ...(n$1.projectFieldLink
        ? { projectFieldLink: n$1.projectFieldLink }
        : {}),
      ...(n$1.documentProperties
        ? { documentProperties: n$1.documentProperties }
        : {}),
      bodyPageFields: true,
      ...(n$1.noteMarks ? { noteMarks: n$1.noteMarks } : {}),
      ...(n$1.inlineDrawingLayout
        ? { inlineDrawingLayout: n$1.inlineDrawingLayout }
        : {}),
      ...(n$1.drawingTokenForParagraph
        ? { drawingTokenForParagraph: n$1.drawingTokenForParagraph }
        : n$1.drawingLayoutToken
          ? { drawingLayoutToken: n$1.drawingLayoutToken }
          : {}),
      ...(n$1.inlineDrawingLayout
        ? {
            anchorFrameBase: rt,
            pageContentClip: ot,
            layoutTextboxStoryFor: Wc,
            publishAnchoredDrawings: Me,
            collectAnchoredDrawings: Me,
            columnBoxForParagraph: ct,
            pageExclusionZones: () =>
              n$1.drawingExclusionZonesByPage?.get(v.length) ??
              Object.freeze([]),
            paragraphOrderIndex: (w) => Y.get(w),
            onAnchorShift: (w, X) => hd(ve, w, X),
            onAnchorRepublish: (w, X) => {
              for (let A = ve.length - 1; A >= 0; A -= 1)
                ve[A].anchorParagraphId === w && ve.splice(A, 1);
              ve.push(...X);
            },
          }
        : {}),
      borderOwnershipBudget: Vi(),
      vMergeResolveBudget: sc(),
      displayMode: u,
    },
    zl = (w) =>
      dl(
        c?.get(w.paragraph.id) ?? w.listItem,
        w.indent,
        i,
        w.tabStops,
        w.available,
      ),
    jl = (w, X, A = 0) => {
      let oe = w.paragraph.id,
        pe =
          !(m?.has(oe) ?? false) &&
          ((f?.has(oe) ?? false) || (g?.has(oe) ?? false)),
        de = w.available,
        Z = Xe(),
        xe = (
          n$1.drawingExclusionZonesByPage?.get(v.length) ?? Object.freeze([])
        ).filter((Qe) => {
          let ae = Y.get(w.paragraph.id),
            _e = Y.get(Qe.anchorParagraphId);
          if (ae !== void 0 && _e !== void 0) {
            if (_e > ae) return false;
          } else {
            let Be = N.findIndex(
              (He) =>
                He.kind === "paragraph" &&
                He.paragraph.id === Qe.anchorParagraphId,
            );
            if (Be < 0 || Be > X) return false;
          }
          return !(dt > 1 && Qe.columnIndex !== Fe);
        }),
        Se = tn(xe),
        Te =
          n$1.drawingTokenForParagraph?.(w.paragraph) ??
          n$1.drawingLayoutToken ??
          (n$1.inlineDrawingLayout ? "drawing" : void 0),
        Ce =
          l && !pe
            ? Se || Te
              ? cr({
                  paragraph: w.paragraph,
                  properties: w.props,
                  width: de,
                  producer: y,
                  ...(Te ? { drawingToken: Te } : {}),
                  ...(Se
                    ? { exclusionToken: `${Fe}|${ne.toFixed(3)}|${Se}` }
                    : {}),
                  ...(A > 0 ? { startOffset: A } : {}),
                })
              : A === 0
                ? w.key
                : `${w.key}|from:${A}`
            : null,
        Oe = dt > 1;
      return Hi(
        w.paragraph,
        oe,
        w.indent.left,
        de,
        i,
        l,
        Ce,
        w.inheritedRunProperties,
        w.tabStops,
        void 0,
        s ? (Qe, ae) => Sn(Qe, ae, s) : void 0,
        {
          lineSpacing: w.lineSpacing,
          firstLineOffset: A === 0 ? zl(w) : 0,
          startOffset: A,
          marginExtent: { left: 0, right: w.indent.left + de + w.indent.right },
          ...(n$1.projectLink ? { projectLink: n$1.projectLink } : {}),
          ...(n$1.projectFieldLink
            ? { projectFieldLink: n$1.projectFieldLink }
            : {}),
          ...(n$1.documentProperties
            ? { documentProperties: n$1.documentProperties }
            : {}),
          bodyPageFields: true,
          displayMode: u,
          ...(n$1.noteMarks ? { noteMarks: n$1.noteMarks } : {}),
          ...(n$1.inlineDrawingLayout
            ? { inlineDrawingLayout: n$1.inlineDrawingLayout }
            : {}),
          contentLeft: Oe ? Z : 0,
          contentRight: Oe ? Z + Le() : w.indent.left + de + w.indent.right,
          paragraphStartY: ne,
          ...(xe.length > 0 ? { pageExclusionZones: xe } : {}),
          ...(pe ? { suppressEmptyPlaceholderLine: true } : {}),
          ...(s ? { themeFonts: s.themeFonts } : {}),
          markRunProperties: w.markRunProperties,
        },
      );
    },
    Xc = (w, X) =>
      (
        n$1.drawingExclusionZonesByPage?.get(v.length) ?? Object.freeze([])
      ).filter((oe) => {
        let ce = Y.get(w.paragraph.id),
          pe = Y.get(oe.anchorParagraphId);
        if (ce !== void 0 && pe !== void 0) {
          if (pe > ce) return false;
        } else {
          let de = N.findIndex(
            (Z) =>
              Z.kind === "paragraph" && Z.paragraph.id === oe.anchorParagraphId,
          );
          if (de < 0 || de > X) return false;
        }
        return !(
          (dt > 1 && oe.columnIndex !== Fe) ||
          (oe.anchorParagraphId === w.paragraph.id &&
            oe.input.mode === "topAndBottom")
        );
      }),
    $c = (w, X, A, oe, ce, pe, de) => {
      let Z = Xc(w, X);
      if (!n$1.inlineDrawingLayout || oe <= ce) return Z;
      let me = Dt(w.paragraph),
        xe = new Map(),
        Se = 0;
      for (let ae = ce; ae < oe; ae += 1) {
        let _e = A[ae];
        for (let He of me.values())
          He >= _e.start && He < _e.end && xe.set(He, Se);
        let Be = de.get(ae) ?? A[ae].exclusionSkipBefore ?? 0;
        Se += Be + A[ae].height;
      }
      if (xe.size === 0) return Z;
      let Te = dt > 1,
        Ce = w.available,
        Oe = Xe(),
        Qe = Fi({
          paragraph: w.paragraph,
          paragraphId: w.paragraph.id,
          drawingLayout: n$1.inlineDrawingLayout,
          contentLeft: Te ? Oe : 0,
          contentRight: Te ? Oe + Le() : w.indent.left + Ce + w.indent.right,
          paragraphStartY: pe,
          anchorLineTopByModelStart: xe,
          columnIndex: Fe,
        });
      return Object.freeze([...Z, ...Qe]);
    },
    ly = (w, X, A, oe, ce, pe, de, Z) => {
      if (n$1.inlineDrawingLayout) {
        let Te = [...Dt(w.paragraph).values()];
        if (Te.length > 0) {
          let Ce = Math.min(...Te);
          if (
            de.end <= Ce ||
            (Te.some((Oe) => Oe >= de.start && Oe < de.end) && de.end <= Ce + 1)
          )
            return 0;
        }
      }
      let me = $c(w, X, A, oe, ce, pe, Z),
        xe = me.length > 0 ? xn(ne, de.height, me) : 0,
        Se = de.exclusionSkipBefore ?? 0;
      return xe > 0.001 ? xe : Se;
    },
    sy = (w) => {
      let X = Le(),
        A = uo(w, X, 0, s, u);
      if (!A || A.rows.length === 0) return;
      let oe = A.columnWidthsPt.reduce((ae, _e) => ae + _e, 0),
        ce = () => (A.float ? Dm(A.float, oe, nn()) : lt() + ba(A, Le())),
        pe = ce();
      A.float &&
        A.float.vertAnchor === "text" &&
        !A.float.ySpec &&
        (ne = Math.max(0, Math.min(ne + A.float.yPt, j())));
      let de = [];
      for (let ae of A.rows)
        if (ae.isHeader) de.push(ae);
        else break;
      let Z = 0,
        me = ne,
        xe = [],
        Se = new Map(),
        Te = [],
        Ce = () => {
          if (xe.length === 0) return;
          let ae = mc(
              xe,
              A,
              Te,
              Tn.borderOwnershipBudget,
              Tn.vMergeResolveBudget,
              void 0,
              (Be, He) => {
                hd(ve, Be, He);
              },
              Tn,
            ),
            _e = ae[ae.length - 1];
          (Ae.push(
            yl(
              {
                kind: "table",
                id: `${w.id}#f${Z}`,
                tableId: w.id,
                fragmentIndex: Z,
                rows: ae,
                box: {
                  x: pe,
                  y: me,
                  width: A.columnWidthsPt.reduce((Be, He) => Be + He, 0),
                  height: _e.box.y + _e.box.height - me,
                },
              },
              A.columnWidthsPt,
              0,
              Se,
            ),
          ),
            (Z += 1),
            (xe = []),
            (Te = []));
        },
        Oe = (ae) => {
          if (de.length === 0) return;
          let _e = 0;
          for (let Be of de)
            _e += pc(Be, A.columnWidthsPt, pe, 0, Tn, A.cellSpacingPt);
          if (_e > j() + 0.001)
            throw new Ft(
              "table-row-overheight",
              `Table header group (${de.length} row(s)) is taller than the page content box`,
            );
          ne + _e > j() + 0.001 &&
            ne > 0 &&
            (Ce(), Rr(), (pe = ce()), (me = ne));
          for (let Be of de) {
            let He = va(
              Be,
              A.columnWidthsPt,
              pe,
              ne,
              ae,
              0,
              Tn,
              A.cellSpacingPt,
            );
            if (He.bottom > j() + 0.001)
              throw new Ft(
                "table-row-overheight",
                `Table header row ${Be.id} overflowed the page content box`,
              );
            (xe.push(He.record), Te.push(Be), (ne = He.bottom));
          }
        },
        Qe = (ae) => {
          (Ce(), Rr(), (pe = ce()), (me = ne), Oe(true));
        };
      Oe(false);
      for (let ae of A.rows.slice(de.length)) {
        let _e = pc(ae, A.columnWidthsPt, pe, 0, Tn, A.cellSpacingPt),
          Be = cc(ae),
          He = false,
          an = 0,
          Ge = false;
        for (
          _e <= j() + 0.001 &&
          ne + _e > j() + 0.001 &&
          ne > 0 &&
          (Qe(), (Ge = true));
          ;
        ) {
          if (((an += 1), an > xl))
            throw new Ft(
              "table-row-fragment-limit",
              `Table row ${ae.id} exceeded ${xl} page fragments`,
            );
          let Un = j() - ne;
          if (Un <= 0.001 && ne > 0) {
            if (Ge)
              throw new Ft(
                "table-row-overheight",
                `Table row ${ae.id} cannot fit after repeated header rows`,
              );
            (Qe(), (Ge = true));
            continue;
          }
          if (!He && _e <= Un + 0.001) {
            let ln = va(
              ae,
              A.columnWidthsPt,
              pe,
              ne,
              false,
              0,
              Tn,
              A.cellSpacingPt,
            );
            if (ln.bottom > j() + 0.001)
              throw new Ft(
                "table-row-overheight",
                `Table row ${ae.id} overflowed the page content box after placement`,
              );
            (xe.push(ln.record), Te.push(ae), (ne = ln.bottom));
            break;
          }
          if (ae.cantSplit || ae.height.rule === "exact") {
            if (ne > 0 && !Ge) {
              (Qe(), (Ge = true));
              continue;
            }
            throw new Ft(
              "table-row-overheight",
              ae.height.rule === "exact"
                ? `Table row ${ae.id} has w:trHeight hRule=exact taller than the available page content`
                : `Table row ${ae.id} has w:cantSplit and is taller than the available page content`,
            );
          }
          let bt = fc(
            ae,
            A.columnWidthsPt,
            pe,
            ne,
            j(),
            false,
            He,
            0,
            Tn,
            Be,
            A.cellSpacingPt,
          );
          if (!bt.fitted && ne > 0 && !Ge) {
            (Qe(), (Ge = true));
            continue;
          }
          if (!bt.fitted)
            throw new Ft(
              bt.nestedSplitBlocked
                ? "table-row-split-unsupported"
                : "table-row-overheight",
              bt.nestedSplitBlocked
                ? `Table row ${ae.id} contains a nested table taller than the page content box`
                : `Table row ${ae.id} has content that cannot fit a page content box`,
            );
          if (bt.bottom > j() + 0.001)
            throw new Ft(
              "table-row-overheight",
              `Table row ${ae.id} overflowed the page content box`,
            );
          let wo = bt.remainder !== null,
            Ir = Ig(ae, He, wo);
          if ((xe.push(bt.record), Te.push(Ir), (ne = bt.bottom), !wo)) break;
          ((Be = bt.remainder), (He = true), (Ge = false), Qe());
        }
      }
      Ce();
    },
    Kn = false,
    Gl = N.length;
  for (let w = V; w < N.length; w += 1) {
    let X = J(e[w], Le());
    if (((S[w] = U()), he && ye > 0 && w >= N.length - ye)) {
      let re = h.checkpoints[w + (h.keys.length - N.length)];
      if (
        re &&
        re.cursorY === ne &&
        re.previousSpaceAfter === B &&
        re.flowColumnIndex === Fe &&
        re.pageCount === v.length &&
        gh(re.pageFragments, Ae) &&
        Ac(re.pendingAnchoredDrawings, ve) &&
        Ac(re.deferredAnchoredDrawings, We) &&
        bh(re.anchorPageDeferCounts, st)
      ) {
        let ie = se.pages.slice(re.pageCount);
        (v.push(...ie),
          (le += ie.length),
          (Kn = true),
          (Gl = w),
          (nt += h.endLineCounter - re.lineCounter));
        break;
      }
    }
    if (((K += 1), X.kind === "table")) {
      ((B = 0), sy(X.table));
      continue;
    }
    let {
        paragraph: A,
        props: oe,
        spacing: ce,
        contextualSpacing: pe,
        styleId: de,
        borders: Z,
        shading: me,
        keeps: xe,
      } = X,
      { indent: Se, alignment: Te, markRunProperties: Ce } = X,
      Oe = X.available,
      Qe = w > 0 ? N[w - 1] : void 0,
      ae = N[w + 1],
      _e = (re) => re?.kind === "paragraph" && re.styleId === de && de !== null,
      Be = pe
        ? { before: _e(Qe) ? 0 : ce.before, after: _e(ae) ? 0 : ce.after }
        : ce,
      He = c?.get(A.id) ?? X.listItem,
      an = zl(X),
      Ge = A.id,
      Un = X.borderGroupKey,
      bt = (re) =>
        Un !== "" && re?.kind === "paragraph" && re.borderGroupKey === Un,
      wo = bt(Qe),
      Ir = bt(ae),
      ln = wo ? void 0 : Z.top,
      vr = Ir ? Z.between : Z.bottom,
      Zn = Mn(ln),
      Jc = Mn(vr);
    Ls(oe) && (Ae.length > 0 || v.length === 0) && (Ct(), (B = 0));
    let Ze = jl(X, w);
    if (Ze.length === 0) continue;
    let cy = Il(A) !== void 0 && Pr(X, Ze),
      Qc = () => cy && H === void 0 && Ie + 1 >= a.count,
      Wl = (re) => {
        let ie = J(A, Le());
        ie.kind === "paragraph" &&
          ((Se = ie.indent),
          (Te = ie.alignment),
          (Oe = ie.available),
          (Ce = ie.markRunProperties),
          (an = re === 0 ? zl(ie) : 0),
          (Ze = [...jl(ie, w, re)]));
      };
    {
      let re = jr(Be.before, B),
        ie = Ce.length === 0 ? qt : De(Ce, s?.themeFonts),
        ht = Ze.length <= 1 ? Jc + Be.after : 0,
        Wt = ne + re + Zn,
        Ot = $c(X, w, Ze, 0, 0, Wt, new Map()),
        Qn = Ze[0] ? Dp(Wt, Ze[0], Ot, ht) : i.lineMetrics(ie).height + ht,
        kn = re + Zn + Qn;
      if (xe.keepNext && !$[w - 1]) {
        let qe = Kp(N, w, B, (sn) => {
          let Xt = N[sn];
          return Xt?.kind === "paragraph"
            ? jl(Xt, sn).map((Mt) => Mt.height)
            : [];
        });
        qe !== null && qe + Zn <= j() && (kn = Math.max(kn, qe + Zn));
      }
      ne + kn > j() && ne > 0 && !Qc() && (Rr(), (B = 0), Wl(0));
    }
    let uy = ne === 0 && !rn(),
      Xl = Ds(Be.before, B, uy, Re);
    (Xl > 0 && (ne += Xl), Zn > 0 && (ne += Zn), (Re = false));
    let qn = 0,
      Ee = [],
      eu = Ze[0]?.start ?? 0,
      Tr = Xl,
      Jn = Zn,
      $l = false,
      Po = ne,
      tu = 0,
      Ea = new Map();
    B = 0;
    let nu =
        n$1.inlineDrawingLayout !== void 0 &&
        Lt(X.paragraph, n$1.inlineDrawingLayout).length > 0,
      ru = false,
      Vl = null,
      fy = Jr(X.paragraph),
      ou = Wi(X.paragraph),
      au = ou ? al(ou) : null,
      py = () => {
        let re = Ee[0];
        if (!re) return 0;
        let ie = tu;
        if (ie <= 0.001) return 0;
        let ht = xn(Po, re.box.height, Xc(X, w));
        return Math.max(0, ie - ht);
      },
      Na = (re) => {
        if (Ee.length === 0) return;
        let ie = lt(),
          ht = Xe(),
          Wt = Ee[0].box.y,
          Ot = Wt - Tr - Jn,
          Qn = Ee[Ee.length - 1].box.y + Ee[Ee.length - 1].box.height,
          kn = re ? Be.after : 0,
          qe = [],
          sn,
          Xt = Wt,
          Mt = Qn,
          Cn = Z.left ? Pt(Z.left) : 0,
          Io = Z.right ? Pt(Z.right) : 0,
          Or = Z.left ? ie + Se.left - Z.left.spacePt - Cn : ie + Se.left,
          Kl = Z.right
            ? ie + Se.left + Oe + Z.right.spacePt + Io
            : ie + Se.left + Oe,
          kr = Math.max(Kl - Or, 0);
        if (Jn > 0 && ln) {
          let at = Pt(ln),
            $t = Wt - ln.spacePt - at;
          (qe.push({
            side: "top",
            edge: ln,
            box: { x: Or, y: $t, width: kr, height: at },
          }),
            (Xt = $t));
        }
        if (re && vr) {
          let at = Pt(vr),
            $t = Qn + vr.spacePt,
            Bn = { x: Or, y: $t, width: kr, height: at };
          (qe.push({ side: Ir ? "between" : "bottom", edge: vr, box: Bn }),
            Ir || (sn = { edge: vr, box: Bn }),
            (Mt = $t + at));
        }
        re && (ne = Math.max(ne, Mt + kn));
        let Cr = Math.max(Mt + kn - Ot, 0),
          ke = wo && qn === 0 ? Ot : Xt,
          dn = Ir && re ? Ot + Cr : Mt,
          Br = Math.max(dn - ke, 0);
        if (
          (Z.left &&
            qe.push({
              side: "left",
              edge: Z.left,
              box: {
                x: ie + Se.left - Z.left.spacePt - Cn,
                y: ke,
                width: Cn,
                height: Br,
              },
            }),
          Z.right &&
            qe.push({
              side: "right",
              edge: Z.right,
              box: {
                x: ie + Se.left + Oe + Z.right.spacePt,
                y: ke,
                width: Io,
                height: Br,
              },
            }),
          Z.bar)
        ) {
          let at = Pt(Z.bar);
          qe.push({
            side: "bar",
            edge: Z.bar,
            box: {
              x: ie + Se.left - Z.bar.spacePt - at,
              y: Wt,
              width: at,
              height: Math.max(Qn - Wt, 0),
            },
          });
        }
        let Lr = au ? il(Ee, au) : null,
          Fr =
            qn === 0
              ? cl(
                  He,
                  i,
                  Ee[0] ? { y: Ee[0].box.y, height: Ee[0].box.height } : void 0,
                )
              : void 0,
          Aa = Fr ? { ...Fr, box: { ...Fr.box, x: Fr.box.x + ie } } : void 0;
        if (
          (Ae.push({
            kind: "paragraph",
            id: `${Ge}#f${qn}`,
            paragraphId: Ge,
            fragmentIndex: qn,
            range: Lr
              ? Lr[Lr.length - 1].range
              : {
                  paragraphId: Ge,
                  start: eu,
                  end: Ee[Ee.length - 1].range.end,
                },
            props: oe,
            spacing: { before: Tr, after: kn },
            indent: Se,
            ...(sn ? { bottomBorder: sn } : {}),
            ...(qe.length > 0 ? { borders: qe } : {}),
            ...(me === void 0
              ? {}
              : {
                  shading: me,
                  shadingBox:
                    Z.left || Z.right
                      ? {
                          x: Or,
                          y: Xt,
                          width: kr,
                          height: Math.max(Mt - Xt, 0),
                        }
                      : Go(Ee, ie + Se.left, Oe),
                }),
            ...(Aa ? { marker: Aa } : {}),
            ...(re && p ? Ri(fy, ta(X.paragraph)) : {}),
            lines: Lr ?? Ee,
            box: { x: ht + Se.left, y: Ot, width: Oe, height: Cr },
          }),
          n$1.inlineDrawingLayout && nu && !ru)
        ) {
          ru = true;
          let at = [...Dt(X.paragraph).values()],
            $t =
              at.length > 0 &&
              at.every((kt) =>
                Ee.some((er) => kt >= er.range.start && kt < er.range.end),
              ),
            Bn,
            Da,
            Ul;
          if ($t) {
            let kt = Ot - py();
            ((Bn = Ee),
              (Da = { x: ht + Se.left, y: kt, width: Oe, height: Cr }),
              (Ul = ct({ x: ht + Se.left, y: kt, height: Cr })));
          } else {
            let kt = Vl ?? { columnX: ht, columnWidth: Le(), startY: Ot },
              er = kt.startY;
            Bn = Ze.map((Et, my) => {
              let gy = {
                id: `anchor-line-${my}`,
                range: { paragraphId: Ge, start: Et.start, end: Et.end },
                box: {
                  x: kt.columnX + Se.left,
                  y: er,
                  width: Oe,
                  height: Et.height,
                },
                contentX:
                  Et.spans.length > 0
                    ? Et.spans[0].box.x + kt.columnX
                    : kt.columnX + Se.left,
                baseline: Et.baseline,
                leading: Et.leading,
                trailingSpacing: Et.trailingSpacing,
                spans: Et.spans.map((Zl) => ({
                  ...Zl,
                  box: { ...Zl.box, x: Zl.box.x + kt.columnX, y: er },
                })),
              };
              return ((er += Et.height + (Et.exclusionSkipBefore ?? 0)), gy);
            });
            let iu = kt.startY;
            ((Da = {
              x: kt.columnX + Se.left,
              y: iu,
              width: Oe,
              height: Math.max(er - iu, Ee[0]?.box.height ?? 0),
            }),
              (Ul = ct(Da)));
          }
          Me(
            ro({
              paragraph: X.paragraph,
              paragraphId: Ge,
              paragraphBox: Da,
              lines: Bn,
              drawingLayout: n$1.inlineDrawingLayout,
              frameBase: rt(),
              columnBox: Ul,
              cellBox: null,
              pageClip: ot(),
              measurer: i,
              sourceOrderOf: $e,
              layoutTextboxStory: Wc,
            }),
          );
        }
        ((qn += 1),
          (eu = Ee[Ee.length - 1].range.end),
          (Ee = []),
          (Tr = 0),
          (Jn = 0));
      },
      On = 0,
      Yl = 0,
      Ro = Ze.length + 8;
    for (let re = 0; re < Ze.length; re += 1) {
      let ie = Ze[re],
        ht = re === Ze.length - 1,
        Wt = ht ? Jc + Be.after : 0;
      re === On &&
        ((Po = ne),
        nu &&
          Vl === null &&
          qn === 0 &&
          (Vl = Object.freeze({
            columnX: Xe(),
            columnWidth: Le(),
            startY: Po,
          })));
      let Ot = ly(X, w, Ze, re, On, Po, ie, Ea),
        Qn = Ot + Math.max(0, ie.height - ie.trailingSpacing) + Wt;
      if (
        ne + Qn > j() &&
        !Qc() &&
        (Ee.length > 0 || Ae.length > 0 || v.length > 0)
      ) {
        let ke = !rn(),
          dn = Yl < Ro ? Yp(re, On, Ze.length, xe, ke) : re,
          Br = dn < re;
        for (let at = re; at > dn; at -= 1) {
          Ee.pop();
          let $t = Ze[at - 1],
            Bn = Ea.get(at - 1) ?? $t.exclusionSkipBefore ?? 0;
          (Ea.delete(at - 1), (ne -= $t.height + Bn), (nt -= 1));
        }
        let Lr = Br && Ee.length === 0 && qn === 0,
          Fr = Ze[dn].start,
          Aa = Le();
        if (
          (Na(false), Rr(), (Tr = 0), Lr ? (ne = Jn) : (Jn = 0), Le() !== Aa)
        ) {
          (Wl(Fr),
            (Ro = Math.max(Ro, Ze.length + 8)),
            (On = 0),
            Br && (Yl += 1),
            (re = -1));
          continue;
        }
        if (((On = dn), (Po = ne), Br)) {
          ((Yl += 1), (re = dn - 1));
          continue;
        }
      }
      let qe = Xe();
      (Ea.set(re, Ot), (ne += Ot));
      let sn = qe + Se.left + (re === 0 ? an : 0),
        Xt = Math.max(1, Oe - (re === 0 ? an : 0)),
        Mt = ie.spans.map((ke) => ({
          ...ke,
          range: { ...ke.range, paragraphId: Ge },
          box: { ...ke.box, x: ke.box.x + qe, y: ne },
        })),
        Cn = Di(
          Mt,
          i,
          sn,
          Xt,
          Te,
          ht,
          Te === "center" || Te === "right" ? ie.width : void 0,
        ),
        Io =
          Mt.length > 0 && Cn.length > 0
            ? Cn[0].box.x - Mt[0].box.x
            : Te !== "left" && Te !== "both"
              ? (() => {
                  let ke = Xt - ie.width;
                  return ke <= 0 ? 0 : Te === "center" ? ke / 2 : ke;
                })()
              : 0,
        Or = Object.freeze({ x: 0, y: 0, width: b, height: j() }),
        Kl = ie.drawings.map((ke) => {
          let dn = Object.freeze({
            ...ke,
            paragraphId: Ge,
            x: qe + ke.x,
            y: ne + ke.y,
            advanceStart: ke.advanceStart + qe,
            advanceEnd: ke.advanceEnd + qe,
            paintBounds: Object.freeze({
              ...ke.paintBounds,
              x: qe + ke.paintBounds.x,
              y: ne + ke.paintBounds.y,
            }),
            hitBounds: Object.freeze({
              ...ke.hitBounds,
              x: qe + ke.hitBounds.x,
              y: ne + ke.hitBounds.y,
            }),
          });
          return Li(dn, Or);
        }),
        kr = _i(Kl, Io),
        Cr = {
          id: vh(A.id, ie.start, re),
          range: { paragraphId: Ge, start: ie.start, end: ie.end },
          spans: Cn,
          box: { x: Xe() + Se.left, y: ne, width: Oe, height: ie.height },
          contentX: Cn[0]?.box.x ?? sn + Io,
          baseline: ie.baseline,
          leading: ie.leading,
          trailingSpacing: ie.trailingSpacing,
          ...(ie.deletedRanges ? { deletedRanges: ie.deletedRanges } : {}),
          ...(kr.length > 0 ? { drawings: kr } : {}),
        };
      if (
        ((nt += 1),
        Ee.length === 0 && (tu = Ot),
        Ee.push(Cr),
        (ne += ie.height),
        ie.columnBreakAfter)
      ) {
        let ke = Le();
        if (
          (Na(ht), Rr(), (Tr = 0), (Jn = 0), ($l = true), !ht && Le() !== ke)
        ) {
          (Wl(ie.end), (Ro = Math.max(Ro, Ze.length + 8)), (On = 0), (re = -1));
          continue;
        }
        On = re + 1;
      } else
        ie.pageBreakAfter &&
          (Na(ht), Ct(), (Tr = 0), (Jn = 0), ($l = true), (On = re + 1));
    }
    (Na(true), (B = $l ? 0 : Be.after));
  }
  Kn || (S[N.length] = U());
  let Vc = Kn && h ? h.endCursorY : ne,
    Yc = Kn && h ? h.endSpaceAfter : B,
    Kc = !Kn && (Ae.length > 0 || v.length === 0),
    Uc = Kn && h ? h.endsOpenPage : Kc;
  Kc && Ct();
  let Zc = 0,
    dy = xd * 4 + 8;
  for (; (ve.length > 0 || We.length > 0) && Zc < dy;)
    ((Zc += 1), ve.length === 0 && be(), Ct());
  (We.length > 0 &&
    (ve.push(...We.map((w) => Id(w, "page-defer-exhausted"))), (We = []), Ct()),
    l?.retain(new Set(W)));
  let qc = { revision: t, pages: v };
  return (
    h &&
      ((h.previous = qc),
      (h.checkpoints = Kn
        ? [
            ...S.slice(0, Gl),
            ...h.checkpoints.slice(Gl + (h.keys.length - N.length)),
          ]
        : S),
      (h.keys = q),
      (h.context = _),
      (h.startLineCounter = D),
      (h.endLineCounter = nt),
      (h.endCursorY = Vc),
      (h.endSpaceAfter = Yc),
      (h.endsOpenPage = Uc),
      (h.stats = {
        placed: K,
        total: N.length,
        reusedPages: le,
        fullPasses: h.stats.fullPasses + (V === 0 ? 1 : 0),
      })),
    {
      layout: qc,
      pages: v,
      lineCounter: nt,
      endCursorY: Vc,
      endSpaceAfter: Yc,
      endsOpenPage: Uc,
    }
  );
}
function Th(e, t, n) {
  let r = t.lefts.map(() => n);
  for (let o of e.fragments) {
    let a = 0;
    for (let i = t.count - 1; i >= 0; i -= 1)
      if (o.box.x + 0.5 >= t.lefts[i]) {
        a = i;
        break;
      }
    r[a] = Math.max(r[a], o.box.y + o.box.height);
  }
  return r;
}
var tR = 0.25,
  nR = 20;
function xo(e, t, n) {
  let r = Ic(
    n.sectionColumns ?? jt.columns,
    n.geometry.width - n.geometry.margin.left - n.geometry.margin.right,
  );
  if (!n.balanceColumns || r.count < 2 || n.columnRegionBottom !== void 0)
    return (n.session && (n.session.balanceLimit = null), Sr(e, t, n));
  let o = n.session,
    a = n.flowStartY ?? 0,
    { session: i, ...l } = n,
    s = (y) => {
      let b = y.pages[0],
        x = b ? Math.max(...Th(b, r, a)) : y.endCursorY;
      return (o && (o.endCursorY = x), { ...y, endCursorY: x });
    };
  if (o && o.balanceLimit !== null) {
    let y = o.balanceLimit,
      b = Sr(e, t, { ...n, columnRegionBottom: y });
    if (o.stats.placed === 0 && o.stats.reusedPages === b.pages.length)
      return ((o.balanceLimit = y), s(b));
  }
  let c = Sr(e, t, l);
  if (c.pages.length !== 1 || !c.endsOpenPage)
    return (o && (o.balanceLimit = null), Sr(e, t, n));
  let d = Th(c.pages[0], r, a),
    u = d.reduce((y, b) => y + Math.max(0, b - a), 0);
  if (u <= 0) return (o && (o.balanceLimit = null), Sr(e, t, n));
  let p = a + u / r.count,
    f = Math.max(...d) + 0.01,
    m = (y) => {
      try {
        let b = Sr(e, t, { ...l, columnRegionBottom: y });
        return b.pages.length === 1 && b.endsOpenPage;
      } catch {
        return false;
      }
    };
  for (let y = 0; y < nR && f - p > tR; y += 1) {
    let b = (p + f) / 2;
    m(b) ? (f = b) : (p = b);
  }
  let g = Sr(e, t, { ...n, columnRegionBottom: f });
  return (o && (o.balanceLimit = f), s(g));
}
function Ch(e) {
  let t = Oh.get(e);
  if (t !== void 0) return t;
  let n = rR(e);
  return (Oh.set(e, n), n);
}
var Oh = new WeakMap(),
  kh = new WeakMap();
function rR(e) {
  let t = (n, r) => {
    if (n.kind === "textValue") return "";
    if (r === 0 && (n.kind === "paragraph" || n.kind === "table")) {
      let a = kh.get(n);
      if (a !== void 0) return a;
    }
    let o;
    if (Lb$1(n)) {
      if (r >= Kb$1) return "";
      let a = Ca(n),
        i = [
          n.id,
          $n(a, "alias") ?? "",
          $n(a, "tag") ?? "",
          Ll($n(a, "lock")),
          Nc(a),
          bo(a, "showingPlcHdr") ? "1" : "0",
          bo(a, "dataBinding") ? "1" : "0",
        ].join(":"),
        l = Ob$1(n)
          .map((s) => t(s, r + 1))
          .filter((s) => s.length > 0);
      o = [i, ...l].join("|");
    } else
      o = n.children
        .map((a) => t(a, r))
        .filter((a) => a.length > 0)
        .join("|");
    return (
      r === 0 && (n.kind === "paragraph" || n.kind === "table") && kh.set(n, o),
      o
    );
  };
  return t(e.root, 0);
}
function Nl(e) {
  if (e.kind === "textValue") return e.value.length;
  if (e.kind === "tab" || e.kind === "hardBreak") return 1;
  if (
    e.kind === "runProperties" ||
    e.kind === "paragraphProperties" ||
    e.kind === "generic"
  )
    return 0;
  if (Lb$1(e)) {
    let n = 0;
    for (let r of Ob$1(e)) n += Nl(r);
    return n;
  }
  let t = 0;
  for (let n of e.children) t += Nl(n);
  return t;
}
function oR(e) {
  let t = [],
    n = (i, l) => {
      for (let s of i) {
        if (s.kind === "paragraph" || s.kind === "table") {
          l.push(s.id);
          continue;
        }
        if (Lb$1(s)) {
          n(Ob$1(s), l);
          continue;
        }
        (s.kind === "tableRow" || s.kind === "tableCell") && n(s.children, l);
      }
    },
    r = (i, l, s, c, d) => {
      let u = s;
      for (let p of i)
        if (!(p.kind === "textValue" || p.kind === "paragraphProperties")) {
          if (Lb$1(p)) {
            if (c >= Kb$1) {
              u += Nl(p);
              continue;
            }
            let f = Ca(p),
              m = Ll($n(f, "lock")),
              g = [...d, m],
              y = u,
              b = r(Ob$1(p), l, u, c + 1, g);
            (t.push({
              control: p,
              nestingDepth: c,
              lockStack: g,
              level: "inline",
              paragraphId: l,
              range: { start: y, end: b },
              blockIds: [],
            }),
              (u = b));
            continue;
          }
          if (p.kind === "hyperlink") {
            u = r(p.children, l, u, c, d);
            continue;
          }
          u += Nl(p);
        }
      return u;
    },
    o = (i, l, s) => {
      for (let c of i) {
        if (c.kind === "textValue") continue;
        if (c.kind === "paragraph") {
          r(c.children, c.id, 0, l, s);
          continue;
        }
        if (c.kind === "table") {
          for (let y of c.children) y.kind === "tableRow" && o([y], l, s);
          continue;
        }
        if (c.kind === "tableRow") {
          for (let y of c.children)
            y.kind === "tableCell"
              ? o(y.children, l, s)
              : Lb$1(y) && o([y], l, s);
          continue;
        }
        if (!Lb$1(c) || l >= Kb$1) continue;
        let d = Ca(c),
          u = Ll($n(d, "lock")),
          p = [...s, u],
          f = uh(c),
          m = Ob$1(c);
        if (f === "inline") {
          o(m, l + 1, p);
          continue;
        }
        let g = [];
        (n(m, g),
          t.push({
            control: c,
            nestingDepth: l,
            lockStack: p,
            level: f,
            blockIds: g,
          }),
          o(m, l + 1, p));
      }
    },
    a = e.root.children.find((i) => i.kind === "body");
  return (a && a.kind !== "textValue" && o(a.children, 0, []), t);
}
function aR(e, t) {
  let n = new Map(),
    r = new Map(),
    o = (s) => {
      let c = n.get(s.blockId);
      c ? c.push(s) : n.set(s.blockId, [s]);
    },
    a = (s) => {
      let c = r.get(s.paragraphId);
      c ? c.push(s) : r.set(s.paragraphId, [s]);
    },
    i = 0,
    l = (s, c) => {
      if (c.kind === "paragraph") {
        o({ pageIndex: s, blockId: c.paragraphId, box: c.box });
        for (let d of c.lines) {
          let u = i;
          i += 1;
          let p = Math.max(
            0,
            d.box.height - d.leading - (d.trailingSpacing ?? 0),
          );
          for (let f of d.spans)
            a({
              pageIndex: s,
              paragraphId: f.range.paragraphId,
              start: f.range.start,
              end: f.range.end,
              line: u,
              box: {
                x: f.box.x,
                y: f.box.y + d.leading,
                width: f.box.width,
                height: p,
              },
            });
        }
        return;
      }
      o({ pageIndex: s, blockId: c.tableId, box: c.box });
      for (let d of c.rows)
        if (!d.isHeaderRepeat)
          for (let u of d.cells) for (let p of u.blocks) l(s, p);
    };
  for (let s of e.pages) for (let c of s.fragments) l(s.index, c);
  return { blocksById: n, spansByParagraph: r };
}
function iR(e, t, n) {
  let r = new Map(),
    o = new Set();
  for (let a of e)
    if (!o.has(a)) {
      o.add(a);
      for (let i of t.blocksById.get(a) ?? []) {
        let l = r.get(i.pageIndex);
        l ? l.push(i.box) : r.set(i.pageIndex, [i.box]);
      }
    }
  return [...r.entries()]
    .sort(([a], [i]) => a - i)
    .flatMap(([a, i]) => {
      let l = ei(i);
      return l ? [{ pageIndex: a, box: l }] : [];
    });
}
function lR(e, t, n, r) {
  let o = n.spansByParagraph.get(e) ?? [],
    a = new Map(),
    i = 0,
    l = o.length;
  for (; i < l;) {
    let s = i + ((l - i) >> 1);
    (t.start === t.end ? o[s].end < t.start : o[s].end <= t.start)
      ? (i = s + 1)
      : (l = s);
  }
  for (let s = i; s < o.length; s += 1) {
    let c = o[s];
    if (c.end <= t.start) continue;
    if (c.start >= t.end) break;
    let d = a.get(c.line);
    d
      ? d.boxes.push(c.box)
      : a.set(c.line, { pageIndex: c.pageIndex, boxes: [c.box] });
  }
  if (a.size === 0 && t.start === t.end)
    for (let s = i; s < o.length; s += 1) {
      let c = o[s];
      if (c.start > t.start) break;
      if (t.start > c.end) continue;
      let d =
        c.start === c.end
          ? c.box.x
          : c.box.x +
            (c.box.width * (t.start - c.start)) / Math.max(1, c.end - c.start);
      return [
        {
          pageIndex: c.pageIndex,
          box: { x: d, y: c.box.y, width: 0, height: c.box.height },
        },
      ];
    }
  return [...a.entries()]
    .sort(([s], [c]) => s - c)
    .flatMap(([, s]) => {
      let c = ei(s.boxes);
      return c ? [{ pageIndex: s.pageIndex, box: c }] : [];
    });
}
function sR(e, t, n) {
  let r = Ca(e.control),
    o = $n(r, "alias"),
    a = $n(r, "tag"),
    i = e.lockStack[e.lockStack.length - 1] ?? "unlocked",
    l =
      e.level === "inline" && e.paragraphId && e.range
        ? lR(e.paragraphId, e.range, t)
        : iR(e.blockIds, t);
  return {
    id: e.control.id,
    ...(o !== void 0 ? { alias: o } : {}),
    ...(a !== void 0 ? { tag: a } : {}),
    controlType: Nc(r),
    lock: i,
    effectiveLock: ks(e.lockStack),
    placeholder: bo(r, "showingPlcHdr") !== void 0,
    bound: bo(r, "dataBinding") !== void 0,
    nestingDepth: e.nestingDepth,
    level: e.level,
    fragments: l,
  };
}
function dR(e, t) {
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      o = t[n];
    if (
      r !== o &&
      (r.pageIndex !== o.pageIndex ||
        r.box.x !== o.box.x ||
        r.box.y !== o.box.y ||
        r.box.width !== o.box.width ||
        r.box.height !== o.box.height)
    )
      return false;
  }
  return true;
}
function cR(e, t) {
  return (
    e.id === t.id &&
    e.alias === t.alias &&
    e.tag === t.tag &&
    e.controlType === t.controlType &&
    e.lock === t.lock &&
    e.effectiveLock === t.effectiveLock &&
    e.placeholder === t.placeholder &&
    e.bound === t.bound &&
    e.nestingDepth === t.nestingDepth &&
    e.level === t.level &&
    dR(e.fragments, t.fragments)
  );
}
function Ba(e, t) {
  if (!e) return t.length === 0;
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n += 1) if (!cR(e[n], t[n])) return false;
  return true;
}
function Bh(e, t) {
  return {
    revision: e.revision,
    pages: e.pages,
    ...(t.contentControls !== void 0
      ? { contentControls: t.contentControls }
      : {}),
    ...(t.controlContextToken !== void 0
      ? { controlContextToken: t.controlContextToken }
      : {}),
  };
}
function uR(e, t, n = Ch(t), r) {
  if (n === "") {
    let u = e.pages.some(
      (f) => f.contentControls !== void 0 && f.contentControls.length > 0,
    );
    if (!u && e.controlContextToken === n && Ba(e.contentControls, []))
      return e;
    let p = u
      ? e.pages.map((f) =>
          f.contentControls !== void 0 && f.contentControls.length > 0
            ? { ...f, contentControls: [] }
            : f,
        )
      : e.pages;
    return {
      revision: e.revision,
      pages: p,
      contentControls: [],
      controlContextToken: n,
    };
  }
  let o = oR(t),
    a = aR(e),
    i = o.map((u) => sR(u, a)),
    l = new Map();
  for (let u of i)
    for (let p of u.fragments) {
      let f = l.get(p.pageIndex),
        m = { ...u, fragments: [p] };
      f ? f.push(m) : l.set(p.pageIndex, [m]);
    }
  if (
    e.controlContextToken === n &&
    Ba(e.contentControls, i) &&
    e.pages.every((u) => Ba(u.contentControls, l.get(u.index) ?? []))
  )
    return e;
  let s = false,
    c = e.pages.map((u) => {
      let p = l.get(u.index) ?? [];
      return Ba(u.contentControls, p) || (p.length === 0 && !u.contentControls)
        ? u
        : ((s = true), { ...u, contentControls: p });
    }),
    d = s ? c : e.pages;
  return d === e.pages &&
    e.controlContextToken === n &&
    Ba(e.contentControls, i)
    ? e
    : {
        revision: e.revision,
        pages: d,
        contentControls: i,
        controlContextToken: n,
      };
}
var Eh = "Calibri, Carlito, Helvetica, Arial, sans-serif",
  lB = new Map([["calibri", "Carlito"]]),
  fR = 4096,
  pR = 256;
function Lh(e, t) {
  return e === void 0
    ? Math.max(1, Math.floor(t))
    : Number.isFinite(e) && e > 0
      ? Math.max(1, Math.floor(e))
      : 1;
}
function Fh(e) {
  let t = new Map(),
    n = 0;
  return {
    get(r) {
      let o = t.get(r);
      if (o !== void 0) return (t.delete(r), t.set(r, o), o);
    },
    set(r, o) {
      for (t.has(r) && t.delete(r), t.set(r, o); t.size > e;) {
        let a = t.keys().next();
        if (a.done) break;
        (t.delete(a.value), (n += 1));
      }
    },
    get size() {
      return t.size;
    },
    get evictions() {
      return n;
    },
  };
}
var Mh = /^[\p{L}\p{N}\p{M} \-.+_]{1,64}$/u;
function Nh(e = null) {
  return e != null && typeof e.measureText == "function";
}
function Ah(e = {}) {
  let t = e.scale ?? 1;
  if (!(t > 0) || !Number.isFinite(t)) return null;
  let n = e.fallbackFamily ?? Eh,
    r = e.context ?? null;
  if (!Nh(r)) return null;
  let o = r,
    a = Fh(Lh(e.maxWidthEntries, fR)),
    i = Fh(Lh(e.maxMetricsEntries, pR)),
    l = e.fontAlias,
    s = (d) => {
      let u = d.fontFamily && Mh.test(d.fontFamily) ? d.fontFamily : null,
        p = u ? l?.(u) : void 0,
        f = p && Mh.test(p) ? p : null,
        m = u ? (f ? `"${f}", "${u}", ${n}` : `"${u}", ${n}`) : n,
        g = d.bold ? "bold" : "normal",
        y = d.italic ? "italic" : "normal",
        b = d.fontSizePt * (d.verticalAlign === "baseline" ? 1 : 0.75) * t;
      return `${y} ${g} ${b}px ${m}`;
    },
    c = (d, u, p) =>
      (d / t) * (p.horizontalScalePercent / 100) +
      u.length * p.characterSpacingPt;
  return {
    measure(d, u) {
      if (d.length === 0) return 0;
      let p = s(u),
        f = `${p}\0${d}`,
        m = a.get(f);
      if (m !== void 0) return c(m, d, u);
      o.font = p;
      let g = o.measureText(d).width;
      return (a.set(f, g), c(g, d, u));
    },
    lineMetrics(d) {
      let u = d.fontSizePt * (d.verticalAlign === "baseline" ? 1 : 0.75),
        p = s(d),
        f = i.get(p);
      if (f) return f;
      let m = u * 1.15,
        g = u * 0.8;
      o.font = p;
      let y = o.measureText("Hxg"),
        b = y.fontBoundingBoxAscent,
        x = y.fontBoundingBoxDescent;
      if (
        typeof b == "number" &&
        Number.isFinite(b) &&
        b > 0 &&
        ((g = b / t), typeof x == "number" && Number.isFinite(x) && x >= 0)
      ) {
        let k = (b + x) / t;
        k > 0 && (m = k);
      }
      m > 0 || (m = u * 1.15);
      let T = { height: m, baseline: g };
      return (i.set(p, T), T);
    },
  };
}
function mR(e = 1, t = {}) {
  let n = Ah({ ...t, scale: t.scale ?? e });
  return n
    ? {
        measurer: n,
        producer: t.fontAlias ? "canvas-measurer+embedded" : "canvas-measurer",
      }
    : { measurer: El(), producer: "fixed-measurer" };
}
function gR(e) {
  return e.box;
}
function Dh(e, t) {
  if (e.kind === "paragraph") {
    t.add(e.paragraphId);
    return;
  }
  for (let n of e.rows) for (let r of n.cells) for (let o of r.blocks) Dh(o, t);
}
function hR(e) {
  let t = new Map(),
    n = (o, a, i) => {
      if (!(o.kind === "textValue" || i > ge$1 * 4)) {
        for (let l of o.children)
          if (l.kind !== "textValue") {
            if (l.kind === "paragraph") {
              for (let s of r) t.get(s)?.push(l.id);
              n(l, l.id, i + 1);
              continue;
            }
            if (l.kind === "contentControl") {
              (t.set(l.id, []), r.push(l.id));
              let s = qe(l);
              (s && n(s, a, i + 1), r.pop());
              let c = t.get(l.id);
              c && c.length === 0 && a !== null && c.push(a);
              continue;
            }
            n(l, a, i + 1);
          }
      }
    },
    r = [];
  return (n(e, null, 0), t);
}
function yR(e, t) {
  let n = Math.min(e.x, t.x),
    r = Math.min(e.y, t.y);
  return {
    x: n,
    y: r,
    width: Math.max(e.x + e.width, t.x + t.width) - n,
    height: Math.max(e.y + e.height, t.y + t.height) - r,
  };
}
function bR(e, t) {
  let n = ue$1(e.root);
  if (n.length === 0) return xR;
  let r = new Map();
  t.pages.forEach((i, l) => {
    ((c) => {
      for (let d of c) {
        let u = new Set();
        Dh(d, u);
        for (let p of u) {
          let f = r.get(p) ?? [];
          (f.push({ pageIndex: l, box: gR(d) }), r.set(p, f));
        }
      }
    })(i.fragments);
  });
  let o = hR(e.root),
    a = [];
  for (let i of n) {
    let l = se(i.node),
      s = [...i.ancestors.map((p) => se(p).lock), l.lock],
      c = o.get(i.node.id) ?? [],
      d = new Map();
    for (let p of c)
      for (let f of r.get(p) ?? []) {
        let m = d.get(f.pageIndex);
        d.set(f.pageIndex, m ? yR(m, f.box) : f.box);
      }
    let u = [...d.entries()]
      .sort((p, f) => p[0] - f[0])
      .map(([p, f]) => ({ pageIndex: p, ...f }));
    a.push({
      controlId: i.node.id,
      type: l.type,
      level: te$1(i.node),
      depth: i.depth,
      lock: l.lock,
      effectiveLock: xe(s),
      showingPlaceholder: l.showingPlaceholder,
      temporary: l.temporary,
      ...(l.tag === void 0 ? {} : { tag: l.tag }),
      ...(l.alias === void 0 ? {} : { alias: l.alias }),
      ...(l.id === void 0 ? {} : { id: l.id }),
      ...(l.dataBinding === void 0 ? {} : { dataBinding: l.dataBinding }),
      paragraphIds: c,
      fragments: u,
    });
  }
  return a;
}
var xR = Object.freeze([]);
var _h = (e) => (e.verticalAlign === "baseline" ? 1 : 0.75);
function Hh(e) {
  let t = Math.round(e.fontSizePt * 2);
  return Math.max(1, t);
}
function SR(e) {
  let {
      shaper: t,
      resolveFont: n,
      fallback: r,
      shapingLibrary: o,
      unicodeDataVersion: a,
      fixedPointScale: i = 1e3,
      script: l = "Latn",
      language: s = "en",
    } = e,
    c = new Map(),
    d = new Map(),
    u = (f, m) => `${f.identity}|${Hh(m)}`,
    p = (f, m, g) =>
      t.shape({
        text: f,
        fontSizeHalfPoints: Hh(g),
        bidiLevel: 0,
        environment: nr({
          font: m,
          variationAxes: {},
          shapingLibrary: o,
          unicodeDataVersion: a,
          normalization: "none",
          script: l,
          language: s,
          direction: "ltr",
          features: {},
          fallbackOrder: [],
          fixedPointScale: i,
          roundingMode: "halfToEven",
        }),
      });
  return {
    measure(f, m) {
      if (f.length === 0) return 0;
      let g = n(m);
      if (!g) return r.measure(f, m);
      let y = `${u(g, m)}|${f}`,
        b = c.get(y);
      if (b === void 0) {
        let x = 0;
        try {
          for (let T of p(f, g, m).glyphs) x += T.advanceX;
        } catch {
          return r.measure(f, m);
        }
        ((b = x / i), c.set(y, b));
      }
      return (
        b * _h(m) * (m.horizontalScalePercent / 100) +
        f.length * m.characterSpacingPt
      );
    },
    lineMetrics(f) {
      let m = n(f);
      if (!m) return r.lineMetrics(f);
      let g = _h(f),
        y = u(m, f),
        b = d.get(y);
      if (b)
        return g === 1 ? b : { height: b.height * g, baseline: b.baseline * g };
      let x,
        T = true;
      try {
        let k = p(" ", m, f),
          M = k.metrics.ascent / i,
          E = k.metrics.descent / i,
          P = M + E;
        P > 0
          ? (x = { height: P, baseline: M })
          : ((x = r.lineMetrics(f)), (T = !1));
      } catch {
        ((x = r.lineMetrics(f)), (T = false));
      }
      return T
        ? (d.set(y, x),
          g === 1 ? x : { height: x.height * g, baseline: x.baseline * g })
        : x;
    },
  };
}
function wR(e) {
  let { layout: t, viewport: n } = e,
    r = new Set();
  if (!n) {
    for (let s of t.pages) r.add(s.index);
    return r;
  }
  let o = Math.max(0, Math.trunc(e.overscanPages ?? 1)),
    a = n.top + n.height,
    i = -1,
    l = -1;
  for (let s of t.pages) {
    let c = s.box.y;
    c + s.box.height >= n.top &&
      c <= a &&
      (i === -1 && (i = s.index), (l = s.index));
  }
  if (i === -1) {
    let s = PR(t, n.top);
    s !== null && ((i = s), (l = s));
  }
  if (i !== -1) {
    let s = Math.max(0, i - o),
      c = Math.min(t.pages.length - 1, l + o);
    for (let d = s; d <= c; d += 1) r.add(d);
  }
  for (let s of e.pinnedPages ?? []) s >= 0 && s < t.pages.length && r.add(s);
  return r;
}
function PR(e, t) {
  let n = null,
    r = Number.POSITIVE_INFINITY;
  for (let o of e.pages) {
    let a =
      t < o.box.y
        ? o.box.y - t
        : t > o.box.y + o.box.height
          ? t - (o.box.y + o.box.height)
          : 0;
    a < r && ((r = a), (n = o.index));
  }
  return n;
}
var zh = ["text-local", "paragraph-local", "flow-structural", "global"];
function jh(e, t) {
  return zh.indexOf(t) > zh.indexOf(e) ? t : e;
}
function RR(e) {
  return {
    impact: "text-local",
    paragraphIds: new Set(),
    created: new Set(),
    deleted: new Set(),
    dependencyKeys: new Set(),
    structural: false,
    revision: e,
  };
}
function IR(e) {
  let { run: t, currentRevision: n, publish: r, schedule: o } = e,
    a = null,
    i = null,
    l = null,
    s = 0,
    c = 0;
  function d(y) {
    let b = e.runCooperatively;
    if (!b) return t(y);
    let x = b(y);
    l = x;
    try {
      for (;;) {
        let T = x.step();
        if (T) return T;
        if (n() !== y.revision) return (x.cancel(), (c += 1), null);
        if (l !== x) return null;
      }
    } finally {
      l === x && (l = null);
    }
  }
  function u(y) {
    let b = f(n());
    ((b.impact = jh(b.impact, y.impact)),
      (b.structural = b.structural || y.structural));
    for (let x of y.paragraphIds) b.paragraphIds.add(x);
    for (let x of y.created) b.created.add(x);
    for (let x of y.deleted) b.deleted.add(x);
    for (let x of y.dependencyKeys) b.dependencyKeys.add(x);
  }
  let p = (y) => ({
    impact: y.impact,
    paragraphIds: y.paragraphIds,
    created: y.created,
    deleted: y.deleted,
    dependencyKeys: y.dependencyKeys,
    structural: y.structural,
    revision: y.revision,
  });
  function f(y) {
    return (a || (a = RR(y)), (a.revision = Math.max(a.revision, y)), a);
  }
  function m() {
    !o ||
      i ||
      (i = o(() => {
        ((i = null), g());
      }));
  }
  function g() {
    (i && (i(), (i = null)), l && (l.cancel(), (l = null), (c += 1)));
    let y = a;
    if (!y) return false;
    a = null;
    let b = p(y),
      x = d(b);
    return !x || x.revision !== n()
      ? ((s += 1), u(b), m(), false)
      : (r(x, b), true);
  }
  return {
    notify(y) {
      let b = f(y.toRevision);
      b.impact = jh(b.impact, y.impact);
      for (let x of y.dirty) b.paragraphIds.add(x);
      for (let x of y.created) (b.created.add(x), b.paragraphIds.add(x));
      for (let x of y.deleted) (b.deleted.add(x), b.paragraphIds.add(x));
      for (let x of y.dependencyKeys) b.dependencyKeys.add(x);
      for (let x of y.splitJoin)
        ((b.structural = true),
          "split" in x
            ? (b.paragraphIds.add(x.split.from),
              b.paragraphIds.add(x.split.tail))
            : (b.paragraphIds.add(x.join.kept),
              b.paragraphIds.add(x.join.removed)));
      ((y.impact === "flow-structural" || y.impact === "global") &&
        (b.structural = true),
        m());
    },
    invalidateAll(y, b) {
      let x = f(y);
      ((x.impact = "flow-structural"),
        (x.structural = true),
        b && x.dependencyKeys.add(b),
        m());
    },
    flush: g,
    pending: () => (a ? p(a) : null),
    cancel() {
      (i?.(), (i = null), l?.cancel(), (l = null), (a = null));
    },
    get staleDiscards() {
      return s;
    },
    get cancelledRuns() {
      return c;
    },
  };
}
function wr(e, t, n, r) {
  let o = r ? r.spans : e.spans;
  for (let i of r ? r.drawings : (e.drawings ?? [])) {
    if (t === i.start) return i.advanceStart;
    if (t === i.start + 1) return i.advanceEnd;
  }
  let a = r ? (r.spans[0]?.box.x ?? e.contentX) : e.contentX;
  for (let i of o) {
    if (t <= i.range.start) return i.box.x;
    if (t >= i.range.end) {
      a = i.box.x + i.box.width;
      continue;
    }
    return hl(i, t, n);
  }
  return a;
}
function Gh(e, t) {
  let n = _c(e, t);
  if (!n) return [];
  let r = [];
  for (let o of e.pages)
    for (let a of Je(o))
      for (let i of a.lines)
        for (let l of pt(i)) {
          let s = mo(e, l, n.from, n.to);
          if (!s) continue;
          let c = wr(i, s.start, void 0, l),
            d = wr(i, s.end, void 0, l);
          r.push({
            pageIndex: o.index,
            x: Math.min(c, d),
            y: i.box.y,
            width: Math.abs(d - c),
            height: i.box.height,
          });
        }
  return r;
}
function Wh(e, t, n) {
  let r = new Map();
  if (t.length === 0) return r;
  for (let o of e.pages)
    if (!(n && !n.has(o.index)))
      for (let a of Je(o))
        for (let i of a.lines)
          for (let l of pt(i))
            for (let s of t) {
              let c = mo(e, l, s.from, s.to);
              if (!c) continue;
              let d = wr(i, c.start, void 0, l),
                u = wr(i, c.end, void 0, l),
                p = r.get(s.key) ?? [];
              (p.push({
                pageIndex: o.index,
                x: Math.min(d, u),
                y: i.box.y,
                width: Math.abs(u - d),
                height: i.box.height,
              }),
                r.set(s.key, p));
            }
  return r;
}
function Hc(e) {
  let t = new Map();
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n].position,
      o = t.get(r.paragraphId);
    (o || ((o = new Map()), t.set(r.paragraphId, o)),
      o.has(r.offset) || o.set(r.offset, n));
  }
  return { stops: e, index: t };
}
var Al = class {
  #t = new WeakMap();
  #l = new WeakMap();
  get(t, n, r, o) {
    let a;
    if (!r)
      ((a = this.#t.get(t) ?? new Map()), this.#t.has(t) || this.#t.set(t, a));
    else {
      let s = this.#l.get(t);
      (s || ((s = new WeakMap()), this.#l.set(t, s)),
        (a = s.get(r) ?? new Map()),
        s.has(r) || s.set(r, a));
    }
    let i = a.get(n);
    if (i) return i;
    let l = o();
    return (a.set(n, l), l);
  }
};
function Xh(e) {
  let t = [],
    n = new Set();
  for (let r of e) n.has(r.lineId) || (n.add(r.lineId), t.push(r.lineId));
  return t;
}
function $h(e, t, n) {
  let r = null;
  for (let o of e)
    o.lineId === t && (!r || Math.abs(o.x - n) < Math.abs(r.x - n)) && (r = o);
  return r;
}
function La(e, t) {
  let n = null;
  for (let r of e)
    r.position.paragraphId === t.paragraphId &&
      (!n ||
        Math.abs(r.position.offset - t.offset) <
          Math.abs(n.position.offset - t.offset)) &&
      (n = r);
  return n;
}
function zc(e, t, n) {
  let r = null;
  for (let o of e) {
    if (o.position.paragraphId !== t.paragraphId) continue;
    let a = o.position.offset;
    n === 1
      ? a > t.offset && (!r || a < r.position.offset) && (r = o)
      : a < t.offset && (!r || a > r.position.offset) && (r = o);
  }
  return r;
}
function Vh(e, t, n) {
  let r = n.index.get(e.paragraphId)?.get(e.offset),
    o = r === void 0 ? La(n.stops, e) : n.stops[r];
  if (!o) return null;
  let a = o.lineId,
    i = n.stops.filter((l) => l.lineId === a);
  return (t === -1 ? i[0] : i[i.length - 1])?.position ?? null;
}
function Yh(e, t, n, r, o) {
  let a = o(e.paragraphId),
    i = a.index.get(e.paragraphId)?.get(e.offset);
  if (i === void 0) {
    let d = zc(a.stops, e, t);
    if (d) return { position: d.position, desiredX: null };
  } else {
    let d = i + t;
    if (d >= 0 && d < a.stops.length)
      return { position: a.stops[d].position, desiredX: null };
  }
  let l = n[r + t];
  if (!l) return { position: e, desiredX: null };
  let s = o(l).stops,
    c = t === -1 ? s[s.length - 1] : s[0];
  return c ? { position: c.position, desiredX: null } : null;
}
function Kh(e, t, n) {
  let r = e === -1 ? t[0] : t[t.length - 1];
  if (!r) return null;
  let o = n(r).stops;
  return (e === -1 ? o[0] : o[o.length - 1])?.position ?? null;
}
function Uh(e, t, n, r, o, a) {
  let i = a(e.paragraphId),
    l = i.index.get(e.paragraphId)?.get(e.offset),
    s = l === void 0 ? La(i.stops, e) : i.stops[l];
  if (!s) return null;
  let c = n ?? s.x,
    d = Xh(i.stops),
    u = d.indexOf(s.lineId),
    p = d[u + t];
  if (p) {
    let m = $h(i.stops, p, c);
    return m ? { position: m.position, desiredX: c } : null;
  }
  for (let m = o + t; m >= 0 && m < r.length; m += t) {
    let g = a(r[m]),
      y = Xh(g.stops),
      b = t === -1 ? y[y.length - 1] : y[0];
    if (!b) continue;
    let x = $h(g.stops, b, c);
    if (x) return { position: x.position, desiredX: c };
  }
  let f = t === -1 ? i.stops[0] : i.stops[i.stops.length - 1];
  return f ? { position: f.position, desiredX: c } : null;
}
var Zh = new WeakMap();
function Gt(e) {
  let t = Zh.get(e);
  if (t) return t;
  let n = new Map(),
    r = (a, i) => {
      for (let l of pt(a)) {
        let s = { line: a, pageIndex: i },
          c = n.get(l.paragraphId);
        c ? c.push(s) : n.set(l.paragraphId, [s]);
      }
    },
    o = (a, i) => {
      let l = (s) => {
        for (let c of s) {
          if (c.kind === "paragraph") {
            for (let d of c.lines) r(d, i);
            continue;
          }
          for (let d of c.rows)
            if (!d.isHeaderRepeat) for (let u of d.cells) l(u.blocks);
        }
      };
      l(a);
    };
  for (let a of e.pages) {
    for (let i of Je(a)) for (let l of i.lines) r(l, a.index);
    (a.header && o(a.header.fragments, a.index),
      a.footer && o(a.footer.fragments, a.index));
    for (let i of [a.footnotes, a.endnotes])
      if (i) for (let l of i.notes) o(l.fragments, a.index);
  }
  return (Zh.set(e, n), n);
}
var qh = new WeakMap();
function jc(e, t) {
  let n = qh.get(e);
  n || ((n = new Map()), qh.set(e, n));
  let r = n.get(t);
  if (r) return r;
  let o = [];
  for (let { line: i } of Gt(e).get(t) ?? [])
    if (i.range.paragraphId === t)
      for (let l of i.deletedRanges ?? [])
        o.push({ start: l.start, end: l.end });
  o.sort((i, l) => i.start - l.start);
  let a = [];
  for (let i of o) {
    let l = a[a.length - 1];
    l && i.start <= l.end ? (l.end = Math.max(l.end, i.end)) : a.push(i);
  }
  return (n.set(t, a), a);
}
function Jh(e, t) {
  for (let n of e) if (t > n.start && t < n.end) return true;
  return false;
}
function Qh(e, t) {
  for (let n of jc(e, t.paragraphId))
    if (t.offset > n.start && t.offset < n.end)
      return { paragraphId: t.paragraphId, offset: n.end };
  return t;
}
var vR = /[\p{L}\p{N}_'\u2019]/u;
function Fa(e, t, n) {
  let r = (a) => {
      let i = e[a];
      return i !== void 0 && vR.test(i);
    },
    o = Math.max(0, Math.min(t, e.length));
  if (n === -1) {
    for (; o > 0 && !r(o - 1);) o -= 1;
    for (; o > 0 && r(o - 1);) o -= 1;
    return o;
  }
  for (; o < e.length && !r(o);) o += 1;
  for (; o < e.length && r(o);) o += 1;
  return o;
}
function TR(e, t, n) {
  let r = Gt(e).get(t.range.paragraphId) ?? [],
    o = false;
  for (let a of r) {
    if (a.line === t) {
      o = true;
      continue;
    }
    if (o && a.line.range.start === n) return true;
  }
  return false;
}
function OR(e, t, n) {
  for (let { line: r } of Gt(e).get(t) ?? [])
    if (r.range.start === n && r.drawings?.some((o) => o.start === n)) return r;
  return null;
}
function kR(e, t, n) {
  for (let r of n ? n.spans : e.spans)
    if (
      !(t <= r.range.start || t >= r.range.end) &&
      (r.projected || r.text.length !== r.range.end - r.range.start)
    )
      return true;
  return false;
}
function ty(e) {
  let t = e.spans[e.spans.length - 1]?.text;
  return (
    t ===
      `
` || t === Xb$1
  );
}
function _l(e, t, n, r, o, a, i) {
  for (let l of pt(n))
    (i !== void 0 && l.paragraphId !== i) || CR(e, t, n, l, r, o, a);
}
function CR(e, t, n, r, o, a, i) {
  let l = pt(n).length > 1,
    s = jc(t, r.paragraphId),
    c = (d) => r.spans.some((u) => u.range.start <= d && d <= u.range.end);
  for (let d = r.start; d <= r.end; d += 1)
    if (!(d === r.end && d > r.start && !l && ty(n) && TR(t, n, d))) {
      if (d === r.start && d > a && e.length > 0) {
        let u = e[e.length - 1];
        if (u.position.paragraphId === r.paragraphId && u.position.offset === d)
          continue;
      }
      kR(n, d, r) ||
        (Jh(s, d) && !c(d)) ||
        e.push({
          position: { paragraphId: r.paragraphId, offset: d },
          x: wr(n, d, i, r),
          y: n.box.y,
          height: n.box.height,
          lineId: n.id,
          pageIndex: o,
        });
    }
}
function ny(e, t, n, r, o) {
  for (let a of t) {
    if (a.kind === "paragraph") {
      for (let i of a.lines) _l(r, e, i, n, a.range.start, o);
      continue;
    }
    for (let i of a.rows)
      if (!i.isHeaderRepeat) for (let l of i.cells) ny(e, l.blocks, n, r, o);
  }
}
var BR = new Al();
function ry(e, t) {
  let n = [];
  for (let r of e.pages)
    for (let o of Je(r))
      for (let a of o.lines) _l(n, e, a, r.index, o.range.start, t);
  return n;
}
function LR(e, t, n) {
  let o = (Gt(e).get(t.paragraphId) ?? []).find(({ line: i }) => {
    let l = vn(i, t.paragraphId);
    return l !== null && t.offset >= l.start && t.offset <= l.end;
  });
  if (!o || pt(o.line).length < 2) return null;
  let a = [];
  return (_l(a, e, o.line, o.pageIndex, 0, n), Hc(a));
}
function Dl(e, t, n) {
  return BR.get(e, t, n, () => {
    let r = [];
    for (let { line: o, pageIndex: a } of Gt(e).get(t) ?? [])
      _l(r, e, o, a, 0, n, t);
    return Hc(r);
  });
}
function FR(e, t, n, r) {
  if (!e.pages[t]) return [];
  let o = [];
  return (ny(e, n, t, o, r), o);
}
function MR(e) {
  return e ? (typeof e.measure == "function" ? { measurer: e } : e) : {};
}
function oy(e, t, n) {
  let r = MR(n),
    o = Gt(e).get(t.paragraphId) ?? [],
    a = r.preferredPageIndex,
    i =
      a === void 0
        ? o
        : [...o].sort((s, c) => {
            let d = s.pageIndex === a ? 0 : 1,
              u = c.pageIndex === a ? 0 : 1;
            return d - u;
          }),
    l = null;
  for (let { line: s, pageIndex: c } of i) {
    let d = vn(s, t.paragraphId);
    if (!d || t.offset < d.start || t.offset > d.end) continue;
    if (
      t.offset === d.end &&
      t.offset > d.start &&
      pt(s).length === 1 &&
      ty(s)
    ) {
      l ??= { line: s, pageIndex: c };
      continue;
    }
    if (
      t.offset === d.end &&
      t.offset > d.start &&
      OR(e, t.paragraphId, t.offset)
    )
      continue;
    let u = Ra(s, t.offset, r.measurer, d);
    return {
      position: t,
      x: u.x,
      y: u.y,
      height: u.height,
      lineId: s.id,
      pageIndex: c,
    };
  }
  if (l) {
    let s = Ra(l.line, t.offset, r.measurer, vn(l.line, t.paragraphId));
    return {
      position: t,
      x: s.x,
      y: s.y,
      height: s.height,
      lineId: l.line.id,
      pageIndex: l.pageIndex,
    };
  }
  return null;
}
function ER(e, t) {
  let n = t.pageIndex !== void 0 && e.pages[t.pageIndex] ? t.pageIndex : 0;
  return pl(e, n, t)?.caret ?? null;
}
function NR(e, t) {
  let n = t.pageIndex !== void 0 && e.pages[t.pageIndex] ? t.pageIndex : 0;
  return gl(e, n, t);
}
function AR(e) {
  return Os(e);
}
function _c(e, t) {
  if (t.anchor.paragraphId === t.head.paragraphId)
    return t.anchor.offset <= t.head.offset
      ? { from: t.anchor, to: t.head }
      : { from: t.head, to: t.anchor };
  let n = In(e),
    r = n.indexOf(t.anchor.paragraphId),
    o = n.indexOf(t.head.paragraphId);
  return r === -1 || o === -1
    ? null
    : r < o || (r === o && t.anchor.offset <= t.head.offset)
      ? { from: t.anchor, to: t.head }
      : { from: t.head, to: t.anchor };
}
function So(e, t) {
  let n = [],
    r = new Set();
  for (let { line: a } of Gt(e).get(t) ?? []) {
    let i = vn(a, t);
    if (i) {
      for (let l of i.spans) {
        if (l.range.end === l.range.start) continue;
        let s = `${l.range.start}:${l.range.end}`;
        if (r.has(s)) continue;
        r.add(s);
        let c = l.range.end - l.range.start,
          d = l.text.length === c ? l.text : l.text.slice(0, c).padEnd(c, " ");
        n.push({ start: l.range.start, text: d });
      }
      for (let l of i.drawings) {
        let s = l.start,
          c = s + 1,
          d = `${s}:${c}`;
        r.has(d) || (r.add(d), n.push({ start: s, text: "\uFFFC" }));
      }
    }
  }
  n.sort((a, i) => a.start - i.start);
  let o = "";
  for (let a of n)
    (a.start > o.length && (o += " ".repeat(a.start - o.length)),
      (o = o.slice(0, a.start) + a.text));
  return o;
}
function ey(e, t, n, r) {
  let o = In(e),
    a = po(e).get(t.paragraphId);
  return a === void 0 ? null : Yh(t, n, o, a, (i) => Dl(e, i, r));
}
function DR(e, t, n, r = null, o = {}) {
  if (!o.stops && (n === "left" || n === "right"))
    return ey(e, t, n === "left" ? -1 : 1, o.measurer);
  if (!o.stops && (n === "wordLeft" || n === "wordRight")) {
    let s = n === "wordLeft" ? -1 : 1,
      c = Fa(So(e, t.paragraphId), t.offset, s);
    return c === t.offset
      ? ey(e, t, s, o.measurer)
      : { position: { paragraphId: t.paragraphId, offset: c }, desiredX: null };
  }
  if (!o.stops && (n === "lineStart" || n === "lineEnd")) {
    let s = Vh(
      t,
      n === "lineStart" ? -1 : 1,
      LR(e, t, o.measurer) ?? Dl(e, t.paragraphId, o.measurer),
    );
    return s ? { position: s, desiredX: null } : null;
  }
  if (!o.stops && (n === "documentStart" || n === "documentEnd")) {
    let s = Kh(n === "documentStart" ? -1 : 1, In(e), (c) =>
      Dl(e, c, o.measurer),
    );
    return s ? { position: s, desiredX: null } : null;
  }
  if (!o.stops && (n === "up" || n === "down")) {
    let s = po(e).get(t.paragraphId);
    return s === void 0
      ? null
      : Uh(t, n === "up" ? -1 : 1, r, In(e), s, (c) => Dl(e, c, o.measurer));
  }
  let a = o.stops ? [...o.stops] : ry(e, o.measurer);
  if (a.length === 0) return null;
  let i = a.findIndex(
    (s) =>
      s.position.paragraphId === t.paragraphId &&
      s.position.offset === t.offset,
  );
  if (i === -1) {
    if (n === "left" || n === "right") {
      let c = zc(a, t, n === "left" ? -1 : 1) ?? La(a, t);
      return c ? { position: c.position, desiredX: null } : null;
    }
    let s = La(a, t);
    if (!s) return null;
    i = a.indexOf(s);
  }
  let l = a[i];
  switch (n) {
    case "left":
      return { position: a[Math.max(0, i - 1)].position, desiredX: null };
    case "right":
      return {
        position: a[Math.min(a.length - 1, i + 1)].position,
        desiredX: null,
      };
    case "lineStart":
      return {
        position: a.filter((c) => c.lineId === l.lineId)[0].position,
        desiredX: null,
      };
    case "lineEnd": {
      let s = a.filter((c) => c.lineId === l.lineId);
      return { position: s[s.length - 1].position, desiredX: null };
    }
    case "wordLeft":
    case "wordRight": {
      let s = So(e, t.paragraphId),
        c = n === "wordLeft" ? -1 : 1,
        d = Fa(s, t.offset, c);
      return d === t.offset
        ? {
            position:
              a[c === -1 ? Math.max(0, i - 1) : Math.min(a.length - 1, i + 1)]
                .position,
            desiredX: null,
          }
        : {
            position: { paragraphId: t.paragraphId, offset: d },
            desiredX: null,
          };
    }
    case "documentStart":
      return { position: a[0].position, desiredX: null };
    case "documentEnd":
      return { position: a[a.length - 1].position, desiredX: null };
    case "pageUp":
    case "pageDown": {
      let s = r ?? l.x,
        c = l.pageIndex + (n === "pageUp" ? -1 : 1),
        d = a.filter((f) => f.pageIndex === c);
      if (d.length === 0)
        return {
          position: (n === "pageUp" ? a[0] : a[a.length - 1]).position,
          desiredX: s,
        };
      let u = d[0],
        p = Number.POSITIVE_INFINITY;
      for (let f of d) {
        let m = Math.abs(f.y - l.y) * 1e3 + Math.abs(f.x - s);
        m < p && ((p = m), (u = f));
      }
      return { position: u.position, desiredX: s };
    }
    case "up":
    case "down": {
      let s = r ?? l.x,
        c = [],
        d = new Set();
      for (let g of a) d.has(g.lineId) || (d.add(g.lineId), c.push(g.lineId));
      let u = c.indexOf(l.lineId),
        p = n === "up" ? u - 1 : u + 1;
      if (p < 0 || p >= c.length)
        return {
          position: (n === "up" ? a[0] : a[a.length - 1]).position,
          desiredX: s,
        };
      let f = a.filter((g) => g.lineId === c[p]),
        m = f[0];
      for (let g of f) Math.abs(g.x - s) < Math.abs(m.x - s) && (m = g);
      return { position: m.position, desiredX: s };
    }
    default:
      return null;
  }
}
function _R(e, t) {
  return oy(e, t);
}
function HR(e, t) {
  let n = _c(e, t);
  if (!n) return [];
  if (n.from.paragraphId === n.to.paragraphId && n.from.offset === n.to.offset)
    return zR(e, n.from);
  let r = [];
  if (n.from.paragraphId === n.to.paragraphId) {
    for (let { line: c } of Gt(e).get(n.from.paragraphId) ?? []) {
      let d = vn(c, n.from.paragraphId);
      if (!d) continue;
      let u = mo(e, d, n.from, n.to);
      if (u)
        for (let p of d.spans)
          p.range.end > u.start && p.range.start < u.end && r.push(p);
    }
    return r;
  }
  let o = In(e),
    a = po(e),
    i = Gt(e),
    l = a.get(n.from.paragraphId) ?? -1,
    s = a.get(n.to.paragraphId) ?? -1;
  if (l === -1 || s === -1) return [];
  for (let c = l; c <= s; c += 1)
    for (let { line: d } of i.get(o[c]) ?? []) {
      let u = vn(d, o[c]);
      if (!u) continue;
      let p = mo(e, u, n.from, n.to);
      if (p)
        for (let f of u.spans)
          f.range.end > p.start && f.range.start < p.end && r.push(f);
    }
  return r;
}
function zR(e, t) {
  let n = null;
  for (let { line: r } of Gt(e).get(t.paragraphId) ?? [])
    for (let o of vn(r, t.paragraphId)?.spans ?? []) {
      if (o.range.start < t.offset && t.offset <= o.range.end) return [o];
      n === null && o.range.start === t.offset && (n = o);
    }
  return n ? [n] : [];
}
var ay = new WeakMap();
function Yn(e) {
  let t = ay.get(e);
  if (t) return t;
  let n = new Map(),
    r = new Map(),
    o = new Map(),
    a = (l, s) => {
      for (let c of l) {
        if (c.kind === "paragraph") continue;
        let d = c.tableId,
          u = o.get(d);
        u || ((u = new Map()), o.set(d, u), n.set(d, []), r.set(d, new Map()));
        for (let p of c.rows) {
          let f = u.get(p.id);
          f === void 0 &&
            ((f = u.size), u.set(p.id, f), r.get(d).set(f, p.cells));
          for (let m of p.cells)
            (n
              .get(d)
              .push({
                pageIndex: s,
                tableId: d,
                row: p,
                cell: m,
                rowIndex: f,
                isHeaderRepeat: p.isHeaderRepeat,
              }),
              a(m.blocks, s));
        }
      }
    };
  for (let l of e.pages) a(l.fragments, l.index);
  let i = new Map();
  for (let [l, s] of n) i.set(l, { placed: s, rows: r.get(l) ?? new Map() });
  return (ay.set(e, i), i);
}
function iy(e) {
  let t = 0;
  for (let n of e.rows.values()) for (let r of n) t = Math.max(t, Vn(r).to + 1);
  return t;
}
var Vn = (e) => ({
  from: e.gridColumn,
  to: e.gridColumn + Math.max(1, e.gridSpan) - 1,
});
function jR(e, t, n) {
  if (t.tableId !== n.tableId) return null;
  let r = Yn(e).get(t.tableId);
  if (!r) return null;
  let o = Math.min(t.rowIndex, n.rowIndex),
    a = Math.max(t.rowIndex, n.rowIndex),
    i = Math.min(Vn(t).from, Vn(n).from),
    l = Math.max(Vn(t).to, Vn(n).to),
    s = (f) => {
      let { from: m, to: g } = Vn(f);
      return g >= i && m <= l;
    },
    c = (f) => (r.rows.get(f) ?? []).some((m) => m.vMergeContinue && s(m)),
    d = r.rows.size + iy(r) + 2;
  for (let f = 0; !(f > d); f += 1) {
    let m = false;
    for (let [g, y] of r.rows)
      if (!(g < o || g > a))
        for (let b of y) {
          if (!s(b)) continue;
          let { from: x, to: T } = Vn(b);
          (x < i && ((i = x), (m = true)), T > l && ((l = T), (m = true)));
        }
    for (; o > 0 && c(o);) ((o -= 1), (m = true));
    for (; c(a + 1);) ((a += 1), (m = true));
    if (!m) break;
  }
  let u = [],
    p = new Set();
  for (let f of r.placed) {
    if (f.isHeaderRepeat || f.rowIndex < o || f.rowIndex > a) continue;
    let { from: m, to: g } = Vn(f.cell);
    g < i || m > l || p.has(f.cell.id) || (p.add(f.cell.id), u.push(f.cell.id));
  }
  return u.length === 0
    ? null
    : {
        kind: "cells",
        tableId: t.tableId,
        cellIds: u,
        rows: { from: o, to: a },
        columns: { from: i, to: l },
        text: GR(e, t.tableId, u),
      };
}
function Hl(e, t) {
  let n = new Set(t),
    r = [],
    o = new Set();
  for (let a of Yn(e).values())
    for (let i of a.placed)
      if (!(i.isHeaderRepeat || !n.has(i.cell.id)))
        for (let l of i.cell.blocks) Ma(l, r, o);
  return r;
}
function Ma(e, t, n) {
  if (e.kind === "paragraph") {
    for (let r of Wn(e)) n.has(r) || (n.add(r), t.push(r));
    return;
  }
  for (let r of e.rows)
    if (!r.isHeaderRepeat)
      for (let o of r.cells) for (let a of o.blocks) Ma(a, t, n);
}
function GR(e, t, n) {
  let r = Hl(e, n),
    o = r[0],
    a = r[r.length - 1];
  return !o || !a
    ? WR(e, t)
    : {
        anchor: { paragraphId: o, offset: 0 },
        head: { paragraphId: a, offset: So(e, a).length },
      };
}
function WR(e, t) {
  let n = Yn(e).get(t);
  for (let o of n?.placed ?? []) {
    if (o.isHeaderRepeat) continue;
    let a = [];
    for (let l of o.cell.blocks) Ma(l, a, new Set());
    let i = a[0];
    if (i) {
      let l = { paragraphId: i, offset: 0 };
      return { anchor: l, head: l };
    }
  }
  for (let o of e.pages)
    for (let a of Je(o)) {
      let i = { paragraphId: a.paragraphId, offset: 0 };
      return { anchor: i, head: i };
    }
  let r = { paragraphId: "", offset: 0 };
  return { anchor: r, head: r };
}
function XR(e, t) {
  let n = new Set(Hl(e, t)),
    r = [],
    o = new Set();
  for (let a of e.pages)
    for (let i of Je(a))
      if (n.has(i.paragraphId))
        for (let l of i.lines)
          for (let s of l.spans) {
            let c = `${s.range.paragraphId}:${s.range.start}:${s.range.end}`;
            o.has(c) || (o.add(c), r.push(s));
          }
  return r;
}
function $R(e, t) {
  let n = new Set(t),
    r = [];
  for (let o of Yn(e).values())
    for (let a of o.placed)
      n.has(a.cell.id) &&
        r.push({
          pageIndex: a.pageIndex,
          x: a.cell.box.x,
          y: a.cell.box.y,
          width: a.cell.box.width,
          height: a.cell.box.height,
        });
  return r;
}
function VR(e, t) {
  let n = Yn(e).get(t.tableId);
  if (!n) return "";
  let r = new Set(t.cellIds),
    o = new Map(),
    a = new Set();
  for (let i of n.placed) {
    if (i.isHeaderRepeat || !r.has(i.cell.id) || a.has(i.cell.id)) continue;
    a.add(i.cell.id);
    let l = Hl(e, [i.cell.id]).map((c) => So(e, c)).join(`
`),
      s = o.get(i.rowIndex);
    s
      ? s.set(i.cell.gridColumn, l)
      : o.set(i.rowIndex, new Map([[i.cell.gridColumn, l]]));
  }
  return [...o.keys()]
    .sort((i, l) => i - l)
    .map((i) => {
      let l = o.get(i),
        s = [];
      for (let c = t.columns.from; c <= t.columns.to; c += 1)
        s.push(l.get(c) ?? "");
      return s.join("	");
    }).join(`
`);
}
function Gc(e, t) {
  let n = null,
    r = -1;
  for (let [o, a] of Yn(e))
    for (let i of a.placed) {
      if (i.isHeaderRepeat) continue;
      let l = [];
      for (let c of i.cell.blocks) Ma(c, l, new Set());
      if (!l.includes(t)) continue;
      let s = o.length;
      s <= r ||
        ((r = s),
        (n = {
          tableId: o,
          rows: a.rows.size,
          columns: iy(a),
          rowIndex: i.rowIndex,
          columnIndex: i.cell.gridColumn,
        }));
    }
  return n;
}
function VB(e, t, n) {
  if (n) {
    let a = Gc(e, t);
    if (!a || a.tableId !== n.tableId) return null;
    let i = n.cellIds[0];
    if (!i) return null;
    let l = Yn(e).get(n.tableId);
    if (!l) return null;
    for (let s of l.placed)
      if (s.cell.id === i)
        return {
          tableId: n.tableId,
          rowId: s.row.id,
          cellId: i,
          cellIds: n.cellIds,
          gridColumnIndex: s.cell.gridColumn,
          isHeaderRepeat: s.isHeaderRepeat,
        };
    return null;
  }
  let r = Gc(e, t);
  if (!r) return null;
  let o = Yn(e).get(r.tableId);
  if (!o) return null;
  for (let a of o.placed) {
    if (a.isHeaderRepeat) continue;
    let i = [];
    for (let l of a.cell.blocks) Ma(l, i, new Set());
    if (i.includes(t))
      return {
        tableId: r.tableId,
        rowId: a.row.id,
        cellId: a.cell.id,
        cellIds: [a.cell.id],
        gridColumnIndex: a.cell.gridColumn,
        isHeaderRepeat: a.row.isHeaderRepeat,
      };
  }
  return null;
}
export {
  ti as $,
  Jt as $a,
  Jd as $b,
  Wg as $c,
  Ja as A,
  Yb as Aa,
  qp as Ab,
  xl as Ac,
  Qh as Ad,
  Pb as B,
  Kb as Ba,
  Bd as Bb,
  Ft as Bc,
  Fa as Bd,
  Rb as C,
  Ub as Ca,
  wn as Cb,
  gk as Cc,
  ry as Cd,
  Ib as D,
  zs as Da,
  Xi as Db,
  yc as Dc,
  FR as Dd,
  Is as E,
  Gr as Ea,
  $i as Eb,
  bc as Ec,
  oy as Ed,
  cf as F,
  Gs as Fa,
  fm as Fb,
  xc as Fc,
  ER as Fd,
  uf as G,
  Ws as Ga,
  Qi as Gb,
  iP as Gc,
  NR as Gd,
  ff as H,
  Xo as Ha,
  el as Hb,
  Pl as Hc,
  AR as Hd,
  pf as I,
  ex as Ia,
  tl as Ib,
  jt as Ic,
  So as Id,
  mf as J,
  Wr as Ja,
  Nd as Jb,
  Ag as Jc,
  DR as Jd,
  gf as K,
  Xs as Ka,
  hm as Kb,
  Rl as Kc,
  _R as Kd,
  kb as L,
  ar as La,
  Ad as Lb,
  Il as Lc,
  HR as Ld,
  Cb as M,
  ox as Ma,
  pr as Mb,
  fP as Mc,
  jR as Md,
  Dr as N,
  ax as Na,
  Ht as Nb,
  Dg as Nc,
  Hl as Nd,
  Bb as O,
  pn as Oa,
  ol as Ob,
  _g as Oc,
  XR as Od,
  Ts as P,
  Nn as Pa,
  ya as Pb,
  br as Pc,
  $R as Pd,
  Do as Q,
  Ef as Qa,
  Nm as Qb,
  mP as Qc,
  VR as Qd,
  Je as R,
  qs as Ra,
  Am as Rb,
  Ta as Rc,
  Gc as Rd,
  hf as S,
  Nf as Sa,
  ba as Sb,
  Hg as Sc,
  VB as Sd,
  yf as T,
  Js as Ta,
  uo as Tb,
  ho as Tc,
  iI as U,
  Af as Ua,
  Vd as Ub,
  Oa as Uc,
  Eb as V,
  mn as Va,
  zm as Vb,
  zg as Vc,
  Nb as W,
  Qs as Wa,
  gw as Wb,
  hP as Wc,
  Os as X,
  ed as Xa,
  fo as Xb,
  jg as Xc,
  ei as Y,
  qt as Ya,
  Yd as Yb,
  Tc as Yc,
  ks as Z,
  De as Za,
  Kd as Zb,
  vl as Zc,
  bf as _,
  Hn as _a,
  qd as _b,
  Gg as _c,
  Yt as a,
  _r as aa,
  Cx as ab,
  Zm as ac,
  ka as ad,
  nr as b,
  Ls as ba,
  rd as bb,
  qm as bc,
  Xg as bd,
  Ju as c,
  wf as ca,
  ft as cb,
  Jm as cc,
  Tl as cd,
  ms as d,
  Ho as da,
  et as db,
  Qd as dc,
  kc as dd,
  Ya as e,
  Pf as ea,
  Jr as eb,
  sl as ec,
  Zg as ed,
  by as f,
  Rf as fa,
  ta as fb,
  In as fc,
  Cc as fd,
  Mo as g,
  zr as ga,
  id as gb,
  pt as gc,
  xP as gd,
  xy as h,
  If as ha,
  Zf as hb,
  TO as hc,
  Lc as hd,
  Sy as i,
  Fs as ia,
  zx as ib,
  Wn as ic,
  kl as id,
  Ne as j,
  Ms as ja,
  jx as jb,
  OO as jc,
  ih as jd,
  Uy as k,
  Es as ka,
  yn as kb,
  ac as kc,
  lh as kd,
  ef as l,
  Ns as la,
  dr as lb,
  Pa as lc,
  dh as ld,
  cb as m,
  un as ma,
  sd as mb,
  vw as mc,
  Fl as md,
  Ka as n,
  zo as na,
  cr as nb,
  pl as nc,
  El as nd,
  fb as o,
  Pt as oa,
  eS as ob,
  EO as oc,
  eR as od,
  pb as p,
  Mn as pa,
  Xv as pb,
  Tw as pc,
  Eh as pd,
  mb as q,
  Xb as qa,
  bd as qb,
  gl as qc,
  lB as qd,
  xs as r,
  As as ra,
  Ni as rb,
  ug as rc,
  Nh as rd,
  ws as s,
  jr as sa,
  ji as sb,
  hl as sc,
  Ah as sd,
  At as t,
  Ds as ta,
  zp as tb,
  Ra as tc,
  mR as td,
  yb as u,
  ri as ua,
  lo as ub,
  Hw as uc,
  bR as ud,
  bb as v,
  jo as va,
  p0 as vb,
  DO as vc,
  SR as vd,
  xb as w,
  _s as wa,
  co as wb,
  _O as wc,
  wR as wd,
  qa as x,
  Hs as xa,
  Wp as xb,
  HO as xc,
  IR as xd,
  wb as y,
  Go as ya,
  Sn as yb,
  zO as yc,
  Gh as yd,
  Ps as z,
  Vb as za,
  fa as zb,
  jO as zc,
  Wh as zd,
};
