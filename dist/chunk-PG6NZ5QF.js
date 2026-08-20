import {
  f,
  i as i$1,
  j as j$3,
  e as e$1,
  a as a$3,
  b as b$2,
  d as d$1,
  c as c$1,
  g as g$2,
} from "./chunk-CKSDYIPT.js";
import {
  j,
  k as k$1,
  h,
  g,
  m,
  uc as uc$1,
  td,
  ob,
  md as md$1,
  Cc as Cc$1,
  cb,
  xd as xd$1,
  od,
  Ed,
  Gd as Gd$1,
  Hd as Hd$1,
  Ec as Ec$1,
  Pd as Pd$1,
  Qd as Qd$1,
  hc as hc$1,
  Bd as Bd$1,
  Id as Id$1,
  Nd as Nd$1,
  Ad as Ad$1,
  W,
  Wb,
  Ia,
  vb,
  vc as vc$1,
  Nc as Nc$1,
  Cb,
  Mc as Mc$1,
  fc as fc$1,
  yd as yd$1,
  zd as zd$1,
  R,
  Xa as Xa$2,
  Jd as Jd$2,
  Rd,
  rb,
  Sd as Sd$1,
  Pc as Pc$1,
  oc as oc$1,
  lc as lc$1,
  zc as zc$2,
  wc as wc$1,
  xc as xc$1,
  yc as yc$1,
  gc as gc$1,
  jc as jc$1,
  Lc as Lc$1,
  wd as wd$1,
  Dd as Dd$1,
  vd as vd$1,
  S,
  ic as ic$1,
  qc as qc$1,
  Od as Od$1,
  Ld as Ld$1,
  V as V$1,
  nc as nc$1,
  Ob,
  qd as qd$2,
  Gc as Gc$1,
  Md as Md$1,
  Xb,
  $b,
} from "./chunk-S5I6ENWU.js";
import { g as g$1 } from "./chunk-PQM6DMNN.js";
import { j as j$2, d as d$2, i as i$2 } from "./chunk-D7KKZO52.js";
import {
  b as b$1,
  h as h$1,
  m as m$1,
  c as c$2,
  d as d$3,
  k as k$2,
  j as j$4,
  l as l$1,
} from "./chunk-UVIUNAQ6.js";
import { H, Q, N } from "./chunk-ADPYKZES.js";
import {
  d,
  a as a$1,
  b,
  c,
  k,
  e,
  j as j$1,
  i,
  Xa as Xa$1,
  Ac as Ac$1,
  If as If$1,
  Ic as Ic$1,
  Fa,
  Ud as Ud$1,
  Vd as Vd$1,
  fd as fd$1,
  cb as cb$1,
  Ya as Ya$1,
  Za,
  $a as $a$1,
  V,
  yf as yf$1,
  Af as Af$1,
  vf as vf$1,
  zf as zf$1,
  gg as gg$1,
  fg as fg$1,
  hg as hg$1,
  Zd as Zd$1,
  Gd as Gd$2,
  Hd as Hd$2,
  Id as Id$2,
  Jd as Jd$1,
  Kd as Kd$1,
  Ed as Ed$1,
  Fd as Fd$1,
  Ua,
  ed,
  zc as zc$1,
  Ad as Ad$2,
  Gf,
  tf as tf$1,
  uf as uf$1,
  ig as ig$1,
  Sb,
  cg as cg$1,
  Lb,
  zd as zd$2,
  qd as qd$1,
  od as od$1,
  vg as vg$1,
  Td as Td$1,
  Ga as Ga$1,
  eg as eg$1,
  dg as dg$1,
  bg as bg$1,
  jg as jg$1,
  l,
  s,
  Rd as Rd$1,
  kd as kd$1,
  rf as rf$1,
  sf as sf$1,
  me,
  ma,
  O,
} from "./chunk-HLS3DWRK.js";
import { a } from "./chunk-GOEBQ26R.js";
import { a as a$2 } from "./chunk-GQQOL4PV.js";
import { zipSync, strToU8 } from "fflate";
import { createT, en as en$1, locales, deepMerge } from "@docx-editor.dev/i18n";
var gp = Object.freeze({ kern: 1, liga: 1 });
function Po(e) {
  return Object.freeze({ family: e.family, weight: e.weight, style: e.style });
}
var ad = false;
function id(e) {
  if (ad) return;
  ad = true;
  let t = e.diagnostic ? `: ${e.diagnostic}` : ".";
  console.error(`[@docx-editor.dev/core] text shaping is disabled${t}
Text is being measured with fallback metrics, so line and page breaks will not match Word.`);
}
function Fn(e) {
  if (e instanceof a) return e;
  if (e instanceof d)
    return new a(e.code, e.message, {
      request: Po(e.request),
      diagnostic: e.diagnostic,
    });
  if (e instanceof j) {
    let t =
      e.code === "wasmUnavailable" || e.code === "shapingLibraryMismatch"
        ? "wasmUnavailable"
        : "initializationFailed";
    return new a(t, e.message, {
      diagnostic: e.diagnostic ?? e.message,
      cause: e,
    });
  }
  return new a(
    "initializationFailed",
    e instanceof Error ? e.message : "Font initialization failed",
    { diagnostic: e instanceof Error ? e.message : String(e) },
  );
}
async function Co(e, t) {
  try {
    if (
      !Number.isSafeInteger(e.maxFontBytes) ||
      e.maxFontBytes <= 0 ||
      e.maxFontBytes > a$1
    )
      throw new a(
        "overLimit",
        `Font byte ceiling must not exceed the engine hard maximum of ${a$1}`,
      );
    if (
      !Number.isSafeInteger(e.sources.length) ||
      e.sources.length === 0 ||
      e.sources.length > b
    )
      throw new a("overLimit", `Font source count must be between 1 and ${b}`);
    let n = 0;
    for (let a$2 of e.sources) {
      if (
        !Number.isSafeInteger(a$2.bytes.byteLength) ||
        a$2.bytes.byteLength > e.maxFontBytes ||
        a$2.bytes.byteLength > a$1
      )
        throw new a(
          "overLimit",
          `Font source ${a$2.id} exceeds the per-font byte ceiling`,
        );
      if (a$2.bytes.byteLength > c - n)
        throw new a(
          "overLimit",
          `Font sources exceed the aggregate byte ceiling of ${c}`,
        );
      n += a$2.bytes.byteLength;
    }
    let r = {
        epoch: e.epoch,
        maxFontBytes: e.maxFontBytes,
        sources: e.sources.map((a) => ({
          request: Po(a.request),
          id: a.id,
          bytes: a.bytes,
          hash: a.hash,
          faceIndex: a.faceIndex,
          availability: a.availability,
        })),
        substitutions: e.substitutions?.map((a) => ({
          from: Po(a.from),
          to: Po(a.to),
        })),
        defaultFont: Object.freeze({
          family: e.defaultFont.family,
          sizeHalfPoints: e.defaultFont.sizeHalfPoints,
        }),
        language: e.language,
      },
      o = k({
        epoch: r.epoch,
        maxFontBytes: r.maxFontBytes,
        resources: r.sources,
        substitutions: r.substitutions,
        validateFont: k$1,
        instrumentation: {
          onOwnedByteCopy: t?.onFontByteCopy,
          onHash: t?.onFontHash,
          onAdmission: t?.onFontAdmission,
        },
      });
    return (
      await h(),
      Object.freeze({
        fonts: o,
        shaper: m(),
        defaultFont: Object.freeze({
          family: r.defaultFont.family,
          sizeHalfPoints: r.defaultFont.sizeHalfPoints,
        }),
        environment: Object.freeze({
          variationAxes: Object.freeze({}),
          shapingLibrary: g,
          unicodeDataVersion: "16.0.0",
          normalization: "none",
          language: r.language ?? "en",
          features: gp,
          fixedPointScale: 20,
          roundingMode: "halfAwayFromZero",
        }),
        ligatureCaretPolicy: "cluster-edges-only",
        operation: Object.freeze({
          resourceEpoch: o.epoch,
          configEpoch: r.epoch,
          extensionFingerprint: `fonts:${r.sources.map((a) => `${a.hash}#${a.faceIndex}`).join(",")}`,
          shapingHash: `hb:${g.version}:kern+liga`,
          producerVersion: 1,
        }),
      })
    );
  } catch (n) {
    throw Fn(n);
  }
}
function On(e) {
  e.shaper.dispose?.();
}
var Wa = 64,
  Ro = Object.freeze({ family: "Calibri", sizeHalfPoints: 22 });
function Eo(e$1, ...t) {
  let n = [e$1, ...t],
    r = [],
    o = new Set();
  for (let l of n)
    for (let d of l.sources ?? []) {
      let u = e(d.request);
      o.has(u) || (o.add(u), r.push(d));
    }
  let a = [],
    i = new Set();
  for (let l of n)
    for (let d of l.substitutions ?? []) {
      let u = e(d.from);
      o.has(u) || i.has(u) || (i.add(u), a.push(d));
    }
  return Object.freeze({
    epoch: e$1.epoch ?? 0,
    maxFontBytes: e$1.maxFontBytes ?? a$1,
    sources: Object.freeze(r),
    ...(a.length > 0 ? { substitutions: Object.freeze(a) } : {}),
    defaultFont: e$1.defaultFont ?? Ro,
    ...(e$1.language !== void 0 ? { language: e$1.language } : {}),
  });
}
var sd = "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
  yp = "http://schemas.openxmlformats.org/package/2006/content-types",
  ld = "http://schemas.openxmlformats.org/package/2006/relationships",
  vp =
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  bp =
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  xp = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="${yp}"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`,
  Ip = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="${ld}"><Relationship Id="rId1" Type="${vp}" Target="word/document.xml"/></Relationships>`,
  Sp = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="${ld}"><Relationship Id="rId1" Type="${bp}" Target="styles.xml"/></Relationships>`,
  kp = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="${sd}"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="160" w:line="259" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style></w:styles>`,
  Tp = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="${sd}"><w:body><w:p/><w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>`;
function Ga() {
  return zipSync({
    "[Content_Types].xml": strToU8(xp),
    "_rels/.rels": strToU8(Ip),
    "word/_rels/document.xml.rels": strToU8(Sp),
    "word/document.xml": strToU8(Tp),
    "word/styles.xml": strToU8(kp),
  });
}
function dd(e) {
  return e.family.trim().length === 0
    ? "font family must not be empty"
    : !Number.isInteger(e.weight) || e.weight < 1 || e.weight > 1e3
      ? "font weight must be an integer from 1 through 1000"
      : e.style !== "normal" && e.style !== "italic"
        ? "font style must be normal or italic"
        : null;
}
function wp(e) {
  try {
    return typeof caches > "u"
      ? Promise.resolve(null)
      : caches.open(e).catch(() => null);
  } catch {
    return Promise.resolve(null);
  }
}
async function Pp(e, t) {
  if (!e) return null;
  try {
    let n = await e.match(t);
    return n ? new Uint8Array(await n.arrayBuffer()) : null;
  } catch {
    return null;
  }
}
async function Cp(e, t, n) {
  if (e)
    try {
      await e.put(
        t,
        new Response(n.slice(), {
          headers: { "Content-Length": String(n.byteLength) },
        }),
      );
    } catch {}
}
async function Rp(e, t) {
  if (e)
    try {
      await e.delete(t);
    } catch {}
}
async function Ep(e) {
  let t = e.fetcher ?? fetch,
    n = e.maxFontBytes ?? a$1,
    r = await wp(e.cacheName ?? "docx-editor-fonts");
  async function o(d) {
    let u = Object.freeze({
        family: d.family,
        weight: d.weight,
        style: d.style,
      }),
      h = dd(u);
    if (h)
      return {
        failure: {
          url: d.url,
          request: u,
          reason: "invalidRequest",
          diagnostic: h,
        },
      };
    let w = (k, g) => {
        if (k.byteLength === 0)
          return { url: d.url, request: u, reason: "emptyResponse" };
        if (k.byteLength > n)
          return { url: d.url, request: u, reason: "overLimit" };
        let O = j$1(k, d.faceIndex ?? 0);
        if (!O.valid)
          return {
            url: d.url,
            request: u,
            reason: "malformed",
            diagnostic: O.diagnostic,
          };
        let M = i(k);
        return d.hash !== void 0 && d.hash !== M
          ? {
              url: d.url,
              request: u,
              reason: "hashMismatch",
              expectedHash: d.hash,
              actualHash: M,
              ...(g ? { diagnostic: "cached bytes failed revalidation" } : {}),
            }
          : {
              request: u,
              id: `url:${d.url}`,
              bytes: k,
              hash: M,
              faceIndex: d.faceIndex ?? 0,
            };
      },
      x = await Pp(r, d.url);
    if (x) {
      let k = w(x, true);
      if (!("reason" in k)) return { source: k };
      await Rp(r, d.url);
    }
    let I;
    try {
      I = await t(d.url);
    } catch (k) {
      return {
        failure: {
          url: d.url,
          request: u,
          reason: "networkError",
          diagnostic: k instanceof Error ? k.message : String(k),
        },
      };
    }
    if (!I.ok)
      return {
        failure: {
          url: d.url,
          request: u,
          reason: "httpError",
          status: I.status,
        },
      };
    let D;
    try {
      D = new Uint8Array(await I.arrayBuffer());
    } catch (k) {
      return {
        failure: {
          url: d.url,
          request: u,
          reason: "networkError",
          diagnostic: k instanceof Error ? k.message : String(k),
        },
      };
    }
    let L = w(D, false);
    return "reason" in L
      ? { failure: L }
      : (await Cp(r, d.url, D), { source: L });
  }
  let a = await Promise.all(e.sources.map((d) => o(d))),
    i$1 = [],
    l = [];
  for (let d of a) "source" in d ? i$1.push(d.source) : l.push(d.failure);
  return { sources: i$1, failures: l };
}
function Fp(e, t, n = {}) {
  let r = Object.freeze({ family: t.family, weight: t.weight, style: t.style }),
    o = n.id ?? `bytes:${r.family}#${r.weight}#${r.style}`,
    a = dd(r);
  if (a)
    return {
      failure: { url: o, request: r, reason: "invalidRequest", diagnostic: a },
    };
  if (e.byteLength === 0)
    return { failure: { url: o, request: r, reason: "emptyResponse" } };
  if (e.byteLength > (n.maxFontBytes ?? a$1))
    return { failure: { url: o, request: r, reason: "overLimit" } };
  let i$1 = t.faceIndex ?? 0,
    l = j$1(e, i$1);
  return l.valid
    ? { source: { request: r, id: o, bytes: e, hash: i(e), faceIndex: i$1 } }
    : {
        failure: {
          url: o,
          request: r,
          reason: "malformed",
          diagnostic: l.diagnostic,
        },
      };
}
var Op = 96,
  cd = 37.79527559055118;
function Mp(e, t) {
  if (!Number.isFinite(e) || e <= 0) return [];
  let n = [];
  if (t === "inch") {
    let i = Math.floor(e / 12);
    for (let l = 0; l <= i; l += 1) {
      let d = l * 12;
      if (l % 8 === 0) {
        let u = l / 8;
        n.push({
          position: d,
          height: 10,
          ...(u > 0 ? { label: String(u) } : {}),
        });
      } else
        l % 4 === 0
          ? n.push({ position: d, height: 6 })
          : l % 2 === 0
            ? n.push({ position: d, height: 4 })
            : n.push({ position: d, height: 2 });
    }
    return n;
  }
  let r = cd / 10,
    o = Math.floor(e / r);
  for (let a = 0; a <= o; a += 1) {
    let i = a * r;
    if (a % 10 === 0) {
      let l = a / 10;
      n.push({
        position: i,
        height: 10,
        ...(l > 0 ? { label: String(l) } : {}),
      });
    } else
      a % 5 === 0
        ? n.push({ position: i, height: 6 })
        : n.push({ position: i, height: 3 });
  }
  return n;
}
function Ap(e) {
  let t = [...e].sort((n, r) => n.index - r.index)[0];
  return t ? t.box : null;
}
var Lp = 1440,
  Hp = 567,
  Dp = 180,
  Np = 56.7,
  Fo = (e, t, n) => (n < t || e < t ? t : e > n ? n : e);
function _p(e, t, n) {
  switch (e) {
    case "firstLine":
      return n.leftMargin + t.left + t.firstLine;
    case "hanging":
    case "left":
      return n.leftMargin + t.left;
    case "right":
      return n.pageWidth - n.rightMargin - t.right;
  }
}
function ud(e, t, n) {
  if (n) return Math.round(e);
  let r = t === "cm" ? 56.7 : 180;
  return Math.round(Math.round(e / r) * r);
}
function Zp(e, t, n, r, o = {}) {
  let a = ud(t, o.unit ?? "inch", o.precise ?? false),
    i = r.pageWidth - r.rightMargin - n.right,
    l = r.leftMargin + n.left + Math.max(0, n.firstLine);
  switch (e) {
    case "firstLine": {
      let d = Fo(a, 0, i);
      return { ...n, firstLine: d - r.leftMargin - n.left };
    }
    case "left": {
      let d = -r.leftMargin - Math.min(0, n.firstLine),
        u = i - r.leftMargin - Math.max(0, n.firstLine);
      return { ...n, left: Fo(a - r.leftMargin, d, u) };
    }
    case "hanging": {
      let d = Fo(a - r.leftMargin, -r.leftMargin, i - r.leftMargin);
      return { ...n, left: d, firstLine: n.firstLine + (n.left - d) };
    }
    case "right": {
      let d = Fo(a, l, r.pageWidth);
      return { ...n, right: r.pageWidth - r.rightMargin - d };
    }
  }
}
function Ft(e) {
  if (typeof e != "object" || e === null) return false;
  let t = e;
  return (
    typeof t.paraId == "string" &&
    t.paraId.length > 0 &&
    (t.search === void 0 ||
      (typeof t.search == "string" && t.search.length > 0)) &&
    (t.occurrence === void 0 ||
      (typeof t.occurrence == "number" &&
        Number.isInteger(t.occurrence) &&
        t.occurrence >= 1))
  );
}
function Mn(e) {
  if (typeof e != "object" || e === null) return false;
  let t = e;
  return Ft(t.from) && Ft(t.to);
}
function fd(e, t, n) {
  let r = [],
    o = e.indexOf(t);
  for (; o >= 0 && r.length < n;) (r.push(o), (o = e.indexOf(t, o + 1)));
  return r;
}
function Cr(e, t, n) {
  if (typeof n.paraId != "string" || n.paraId.length === 0)
    return {
      ok: false,
      code: "invalidArgs",
      reason: "paraId must be a non-empty string",
    };
  let r = t.nodeByParaId.get(n.paraId.toUpperCase());
  if (r === void 0)
    return {
      ok: false,
      code: "notFound",
      reason: `no paragraph with paraId '${n.paraId}'`,
    };
  let o = Gf(e, r) ?? "";
  if (n.search === void 0)
    return { ok: true, span: { nodeId: r, start: 0, end: o.length } };
  if (n.search.length === 0)
    return {
      ok: false,
      code: "invalidArgs",
      reason: "search must be a non-empty phrase",
    };
  if (n.occurrence !== void 0) {
    if (!Number.isInteger(n.occurrence) || n.occurrence < 1)
      return {
        ok: false,
        code: "invalidArgs",
        reason: "occurrence must be a positive integer (1-based)",
      };
    let i = fd(o, n.search, n.occurrence),
      l = i[n.occurrence - 1];
    return l === void 0
      ? {
          ok: false,
          code: "notFound",
          reason: `'${n.search}' matches ${i.length} time(s) in paragraph '${n.paraId}'; occurrence ${n.occurrence} does not exist`,
        }
      : { ok: true, span: { nodeId: r, start: l, end: l + n.search.length } };
  }
  let a = fd(o, n.search, 2);
  return a.length === 0
    ? {
        ok: false,
        code: "notFound",
        reason: `'${n.search}' does not occur in paragraph '${n.paraId}'`,
      }
    : a.length > 1
      ? {
          ok: false,
          code: "ambiguous",
          reason: `'${n.search}' matches more than once in paragraph '${n.paraId}'; pass occurrence to disambiguate`,
        }
      : {
          ok: true,
          span: { nodeId: r, start: a[0], end: a[0] + n.search.length },
        };
}
function pd(e, t, n) {
  if ("anchor" in n) {
    let l = Cr(e, t, n.anchor);
    if (!l.ok)
      return { ok: false, code: l.code, reason: l.reason, target: n.anchor };
    let d = { paragraphId: l.span.nodeId, offset: l.span.start };
    return { ok: true, selection: { anchor: d, head: d } };
  }
  let { from: r, to: o } = n.range;
  if (!Ft(r) || !Ft(o))
    return {
      ok: false,
      code: "unsupported",
      reason:
        "DocLocation endpoints are not supported; address paragraphs by paraId",
      target: n.range,
    };
  let a = Cr(e, t, r);
  if (!a.ok) return { ok: false, code: a.code, reason: a.reason, target: r };
  let i = Cr(e, t, o);
  return i.ok
    ? {
        ok: true,
        selection: {
          anchor: { paragraphId: a.span.nodeId, offset: a.span.start },
          head: { paragraphId: i.span.nodeId, offset: i.span.end },
        },
      }
    : { ok: false, code: i.code, reason: i.reason, target: o };
}
var Rr = /^[0-9A-Fa-f]{6}$/,
  md = {
    dk1: "dk1",
    lt1: "lt1",
    dk2: "dk2",
    lt2: "lt2",
    accent1: "accent1",
    accent2: "accent2",
    accent3: "accent3",
    accent4: "accent4",
    accent5: "accent5",
    accent6: "accent6",
    hlink: "hlink",
    folhlink: "folHlink",
    dark1: "dk1",
    light1: "lt1",
    dark2: "dk2",
    light2: "lt2",
    hyperlink: "hlink",
    followedhyperlink: "folHlink",
    background1: "lt1",
    text1: "dk1",
    background2: "lt2",
    text2: "dk2",
    tx1: "dk1",
    tx2: "dk2",
    bg1: "lt1",
    bg2: "lt2",
  },
  Bp = {
    dk1: "000000",
    lt1: "FFFFFF",
    dk2: "44546A",
    lt2: "E7E6E6",
    accent1: "4472C4",
    accent2: "ED7D31",
    accent3: "A5A5A5",
    accent4: "FFC000",
    accent5: "5B9BD5",
    accent6: "70AD47",
    hlink: "0563C1",
    folHlink: "954F72",
  };
function $a(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 && e <= 1;
}
function Oo(e) {
  return Math.max(0, Math.min(1, e));
}
function gd(e) {
  let t = e.replace(/^#/, "").padStart(6, "0").slice(0, 6);
  return {
    r: parseInt(t.slice(0, 2), 16) || 0,
    g: parseInt(t.slice(2, 4), 16) || 0,
    b: parseInt(t.slice(4, 6), 16) || 0,
  };
}
function hd(e, t, n) {
  let r = (o) =>
    Math.max(0, Math.min(255, Math.round(o)))
      .toString(16)
      .padStart(2, "0");
  return `${r(e)}${r(t)}${r(n)}`.toUpperCase();
}
function yd(e, t) {
  if (t >= 1) return e.toUpperCase();
  if (t <= 0) return "FFFFFF";
  let r = Math.max(0, Math.min(255, Math.round((1 - Oo(t)) * 255))) / 255,
    o = gd(e);
  return hd(
    r * 255 + (1 - r) * o.r,
    r * 255 + (1 - r) * o.g,
    r * 255 + (1 - r) * o.b,
  );
}
function vd(e, t) {
  if (t >= 1) return e.toUpperCase();
  if (t <= 0) return "000000";
  let r = Math.max(0, Math.min(255, Math.round(Oo(t) * 255))) / 255,
    o = gd(e);
  return hd(r * o.r, r * o.g, r * o.b);
}
function Xa(e) {
  return md[e] ?? md[e.toLowerCase()] ?? null;
}
function qp(e, t) {
  let n = Xa(e);
  if (!n) return null;
  let r = t.find((a) => a.slot === n)?.hex;
  if (r && Rr.test(r)) return r.toUpperCase();
  let o = Bp[n];
  return o && Rr.test(o) ? o.toUpperCase() : null;
}
function Mo(e, t) {
  let n = qp(e.slot, t);
  if (!n)
    return {
      ok: false,
      reason: "the theme colour could not be resolved for this document",
    };
  if (e.tint !== void 0 && !$a(e.tint))
    return { ok: false, reason: "theme tint is out of range" };
  if (e.shade !== void 0 && !$a(e.shade))
    return { ok: false, reason: "theme shade is out of range" };
  let r = n;
  return (
    e.tint !== void 0
      ? (r = yd(r, Oo(e.tint)))
      : e.shade !== void 0 && (r = vd(r, Oo(e.shade))),
    { ok: true, hex: r }
  );
}
var zp = "000000";
function Ya(e, t) {
  if (e.kind === "hex") {
    let o = e.value.toUpperCase();
    return Rr.test(o)
      ? { ok: true, color: { kind: "hex", value: o } }
      : { ok: false, reason: "border colour requires a six-digit hex value" };
  }
  if (e.kind === "auto")
    return { ok: true, color: { kind: "auto", resolvedHex: zp } };
  let n = Mo(e, t);
  return n.ok
    ? {
        ok: true,
        color: {
          kind: "theme",
          slot: Xa(e.slot) ?? e.slot,
          resolvedHex: n.hex,
          ...(e.tint !== void 0 ? { tint: e.tint } : {}),
          ...(e.shade !== void 0 ? { shade: e.shade } : {}),
        },
      }
    : n;
}
function Qa(e, t) {
  if (e.kind === "auto")
    return {
      ok: false,
      reason: "automatic fill cannot be written without a resolved colour",
    };
  if (e.kind === "hex") {
    let o = e.value.toUpperCase();
    return Rr.test(o)
      ? { ok: true, color: { kind: "hex", value: o } }
      : { ok: false, reason: "fill colour requires a six-digit hex value" };
  }
  let n = Mo(e, t);
  return n.ok
    ? {
        ok: true,
        color: {
          kind: "theme",
          slot: Xa(e.slot) ?? e.slot,
          resolvedHex: n.hex,
          ...(e.tint !== void 0 ? { tint: e.tint } : {}),
          ...(e.shade !== void 0 ? { shade: e.shade } : {}),
        },
      }
    : n;
}
function Kp(e, t, n = "000000") {
  if (!e || e.kind === "auto") return `#${n}`;
  if (e.kind === "hex") {
    let o = e.value.replace(/^#/, "").toUpperCase();
    return Rr.test(o) ? `#${o}` : `#${n}`;
  }
  let r = Mo(e, t);
  return `#${r.ok ? r.hex : n}`;
}
var Wp = new Set([
  "insertRow",
  "deleteRow",
  "insertColumn",
  "deleteColumn",
  "deleteTable",
  "setCellFill",
  "setTableCellVerticalAlignment",
  "setTableBorders",
  "commitTableColumnDividerResize",
  "commitTableRightEdgeResize",
  "mergeCells",
  "splitCell",
  "toggleHeaderRow",
  "selectTableRegion",
  "setTableProperties",
]);
function An(e) {
  return Wp.has(e.type);
}
function ne(e, t) {
  return { ok: false, code: e, reason: t };
}
function Ja(e, t) {
  switch (e) {
    case "unknown-table":
    case "unknown-row":
    case "unknown-grid-column":
      return ne("invalidArgs", "the table target is no longer valid");
    case "table-has-merge":
      return ne("unsupported", "this table has merged cells");
    case "vertical-merge-crossing":
      return ne(
        "unsupported",
        "the row cannot be inserted across a vertical merge",
      );
    case "block-required":
      return ne(
        "unsupported",
        "the table must keep at least one row or column",
      );
    case "resource-limit":
      return ne(
        "unsupported",
        "the table has reached the supported size limit",
      );
    case "invalidArgs":
    case "invalid-property-value":
    case "unsupported-property":
      return ne("invalidArgs", "the table command arguments are invalid");
    default:
      return ne("unsupported", `the table operation was refused (${e})`);
  }
}
function Ue(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ot(e, t) {
  return !Ue(e) || Object.keys(e).length !== t.length
    ? false
    : t.every((r) => Object.prototype.hasOwnProperty.call(e, r));
}
function Sd(e) {
  if (!Ue(e)) return false;
  let t = e.kind;
  if (t === "hex")
    return ot(e, ["kind", "value"]) && typeof e.value == "string";
  if (t === "auto") return ot(e, ["kind"]);
  if (t === "theme") {
    if (typeof e.slot != "string") return false;
    let n = ["kind", "slot"];
    if (e.tint !== void 0) {
      if (typeof e.tint != "number" || !Number.isFinite(e.tint)) return false;
      n.push("tint");
    }
    if (e.shade !== void 0) {
      if (typeof e.shade != "number" || !Number.isFinite(e.shade)) return false;
      n.push("shade");
    }
    return ot(e, n);
  }
  return false;
}
function kd(e) {
  return (
    Ue(e) &&
    ot(e, ["sourceRevision", "tableId", "rowId", "isHeaderRepeat"]) &&
    typeof e.sourceRevision == "number" &&
    Number.isInteger(e.sourceRevision) &&
    typeof e.tableId == "string" &&
    e.tableId.length > 0 &&
    typeof e.rowId == "string" &&
    e.rowId.length > 0 &&
    typeof e.isHeaderRepeat == "boolean"
  );
}
function Td(e) {
  return (
    Ue(e) &&
    ot(e, ["sourceRevision", "tableId", "gridColumnId", "isHeaderRepeat"]) &&
    typeof e.sourceRevision == "number" &&
    Number.isInteger(e.sourceRevision) &&
    typeof e.tableId == "string" &&
    e.tableId.length > 0 &&
    typeof e.gridColumnId == "string" &&
    e.gridColumnId.length > 0 &&
    typeof e.isHeaderRepeat == "boolean"
  );
}
function Gp(e) {
  return (
    Ue(e) &&
    ot(e, [
      "sourceRevision",
      "tableId",
      "leftGridColumnId",
      "rightGridColumnId",
      "isHeaderRepeat",
    ]) &&
    typeof e.sourceRevision == "number" &&
    Number.isInteger(e.sourceRevision) &&
    typeof e.tableId == "string" &&
    typeof e.leftGridColumnId == "string" &&
    typeof e.rightGridColumnId == "string" &&
    typeof e.isHeaderRepeat == "boolean"
  );
}
function $p(e) {
  return (
    Ue(e) &&
    ot(e, ["sourceRevision", "tableId", "gridColumnId", "isHeaderRepeat"]) &&
    typeof e.sourceRevision == "number" &&
    Number.isInteger(e.sourceRevision) &&
    typeof e.tableId == "string" &&
    typeof e.gridColumnId == "string" &&
    typeof e.isHeaderRepeat == "boolean"
  );
}
function Xp(e) {
  return !Ue(e) || !ot(e, ["style", "size", "color"])
    ? false
    : typeof e.style == "string" &&
        typeof e.size == "number" &&
        Number.isInteger(e.size) &&
        Sd(e.color);
}
function bd(e) {
  return !("target" in e) || e.target === void 0 || kd(e.target);
}
function xd(e) {
  return !("target" in e) || e.target === void 0 || Td(e.target);
}
function Yp(e) {
  switch (e.type) {
    case "insertRow":
      return !Ue(e) || e.type !== "insertRow"
        ? ne("invalidArgs", "insertRow command shape is invalid")
        : e.where !== "above" && e.where !== "below"
          ? ne("invalidArgs", "insertRow where must be above or below")
          : bd(e)
            ? null
            : ne("invalidArgs", "insertRow target shape is invalid");
    case "deleteRow":
      return !Ue(e) || e.type !== "deleteRow"
        ? ne("invalidArgs", "deleteRow command shape is invalid")
        : bd(e)
          ? null
          : ne("invalidArgs", "deleteRow target shape is invalid");
    case "insertColumn":
      return !Ue(e) || e.type !== "insertColumn"
        ? ne("invalidArgs", "insertColumn command shape is invalid")
        : e.where !== "left" && e.where !== "right"
          ? ne("invalidArgs", "insertColumn where must be left or right")
          : xd(e)
            ? null
            : ne("invalidArgs", "insertColumn target shape is invalid");
    case "deleteColumn":
      return !Ue(e) || e.type !== "deleteColumn"
        ? ne("invalidArgs", "deleteColumn command shape is invalid")
        : xd(e)
          ? null
          : ne("invalidArgs", "deleteColumn target shape is invalid");
    case "deleteTable":
      return !Ue(e) || !ot(e, ["type"])
        ? ne("invalidArgs", "deleteTable command shape is invalid")
        : null;
    case "setCellFill":
      return !Ue(e) || !ot(e, ["type", "color"])
        ? ne("invalidArgs", "setCellFill command shape is invalid")
        : e.color !== null && !Sd(e.color)
          ? ne("invalidArgs", "setCellFill color shape is invalid")
          : null;
    case "setTableCellVerticalAlignment":
      return !Ue(e) ||
        !ot(e, ["type", "alignment"]) ||
        !["top", "center", "bottom"].includes(e.alignment)
        ? ne("invalidArgs", "cell vertical alignment command shape is invalid")
        : null;
    case "setTableBorders":
      return !Ue(e) || e.type !== "setTableBorders"
        ? ne("invalidArgs", "setTableBorders command shape is invalid")
        : e.scope === "none"
          ? typeof e.target != "string"
            ? ne("invalidArgs", "border none scope requires a target edge")
            : null
          : !("spec" in e) || !Xp(e.spec)
            ? ne(
                "invalidArgs",
                "concrete border scopes require a complete spec",
              )
            : null;
    case "commitTableColumnDividerResize":
      return !Ue(e) ||
        !ot(e, ["type", "target", "leftWidthTwips", "rightWidthTwips"]) ||
        !Gp(e.target) ||
        typeof e.leftWidthTwips != "number" ||
        typeof e.rightWidthTwips != "number"
        ? ne("invalidArgs", "column divider resize command shape is invalid")
        : null;
    case "commitTableRightEdgeResize":
      return !Ue(e) ||
        !ot(e, ["type", "target", "columnWidthTwips", "tableWidthTwips"]) ||
        !$p(e.target) ||
        typeof e.columnWidthTwips != "number" ||
        typeof e.tableWidthTwips != "number"
        ? ne("invalidArgs", "right-edge resize command shape is invalid")
        : null;
    default:
      return null;
  }
}
function Qp(e) {
  return !("target" in e) || e.target === void 0
    ? null
    : kd(e.target)
      ? e.target
      : null;
}
function Jp(e) {
  return !("target" in e) || e.target === void 0
    ? null
    : Td(e.target)
      ? e.target
      : null;
}
function Id(e, t, n) {
  let r = tf$1(e.root, t);
  return !r.ok || !r.topology.grid
    ? null
    : (r.topology.gridColumns[n]?.id ?? null);
}
function em(e) {
  let t = Sd$1(e.layout, e.selection.head.paragraphId, e.cellSelection);
  return t
    ? {
        tableId: t.tableId,
        rowId: t.rowId,
        cellId: t.cellId,
        cellIds: [...t.cellIds],
        gridColumnIndex: t.gridColumnIndex,
        isHeaderRepeat: t.isHeaderRepeat,
      }
    : null;
}
function tm(e) {
  let t = rf$1(e, "tcPr"),
    n = t && rf$1(t, "gridSpan"),
    r = n && sf$1(n, "val");
  if (!r || !/^\d{1,7}$/.test(r)) return 1;
  let o = Number(r);
  return Number.isInteger(o) && o > 1 ? Math.min(o, 1024) : 1;
}
function nm(e, t, n) {
  let r = e.gridColumns.findIndex((o) => o.id === n);
  if (r === -1) return null;
  for (let { row: o, cells: a } of e.rows) {
    let i = 0;
    for (let l of a) {
      let d = tm(l);
      if (r >= i && r < i + d)
        return {
          tableId: t,
          rowId: o.id,
          cellId: l.id,
          cellIds: [l.id],
          gridColumnIndex: r,
          isHeaderRepeat: false,
        };
      i += d;
    }
  }
  return null;
}
function rm(e, t) {
  if (t.sourceRevision !== e.storeRevision || t.isHeaderRepeat) return null;
  let n = tf$1(e.part.root, t.tableId);
  if (!n.ok) return null;
  let r = n.topology.rows.findIndex((i) => i.row.id === t.rowId);
  if (r === -1) return null;
  let a = n.topology.rows[r].cells[0];
  return a
    ? {
        tableId: t.tableId,
        rowId: t.rowId,
        cellId: a.id,
        cellIds: [a.id],
        gridColumnIndex: 0,
        isHeaderRepeat: false,
      }
    : null;
}
function om(e, t) {
  if (t.sourceRevision !== e.storeRevision || t.isHeaderRepeat) return null;
  let n = tf$1(e.part.root, t.tableId);
  return n.ok ? nm(n.topology, t.tableId, t.gridColumnId) : null;
}
function am(e, t) {
  for (let n of t) {
    let r = If$1(e, n);
    if (r) return Ja(r);
  }
  return null;
}
function pt(e, t, n) {
  let r = am(e, t);
  return r || { ok: true, ops: t, selection: n };
}
function im(e, t) {
  if (!uf$1.includes(e.style))
    return { ok: false, reason: "border style is not allowlisted" };
  if (!Number.isInteger(e.size) || e.size < 1)
    return { ok: false, reason: "border size is out of range" };
  if (e.size > 96) return { ok: false, reason: "border size is out of range" };
  let n = Ya(e.color, t);
  return n.ok
    ? { ok: true, spec: { style: e.style, size: e.size, color: n.color } }
    : { ok: false, reason: n.reason };
}
function Er(e, t, n) {
  return n !== e.storeRevision
    ? ne("invalidArgs", "the table target is stale")
    : tf$1(e.part.root, t).ok
      ? null
      : ne("invalidArgs", "the table target is no longer valid");
}
function sm(e) {
  return e?.isHeaderRepeat
    ? ne("unsupported", "repeated header rows cannot be edited")
    : null;
}
function lm(e, t, n, r) {
  let o = Er(e, t.tableId, t.sourceRevision);
  if (o) return o;
  if (t.isHeaderRepeat)
    return ne("unsupported", "repeated header rows cannot be edited");
  if (!Number.isInteger(n) || !Number.isInteger(r))
    return ne("invalidArgs", "column widths must be whole twips");
  if (n < 300 || r < 300)
    return ne("invalidArgs", "column widths are below the minimum");
  let a = tf$1(e.part.root, t.tableId);
  if (!a.ok) {
    let w = a.reason === "duplicate-node-id" ? "unknown-table" : a.reason;
    return Ja(w);
  }
  if (a.topology.hasMerge)
    return ne("unsupported", "this table has merged cells");
  let i = a.topology.gridColumns.find((w) => w.id === t.leftGridColumnId),
    l = a.topology.gridColumns.find((w) => w.id === t.rightGridColumnId);
  if (!i || !l) return ne("invalidArgs", "the table target is no longer valid");
  let d = a.topology.gridColumns.indexOf(i);
  if (a.topology.gridColumns.indexOf(l) !== d + 1)
    return ne("invalidArgs", "the column divider target is not adjacent");
  let h = {
    op: "setTableColumnWidths",
    tableId: t.tableId,
    leftGridColumnId: t.leftGridColumnId,
    rightGridColumnId: t.rightGridColumnId,
    leftWidthTwips: n,
    rightWidthTwips: r,
  };
  return pt(e.part, [h], { kind: "preserveSelection" });
}
function dm(e, t, n, r) {
  let o = Er(e, t.tableId, t.sourceRevision);
  if (o) return o;
  if (t.isHeaderRepeat)
    return ne("unsupported", "repeated header rows cannot be edited");
  if (!Number.isInteger(n) || !Number.isInteger(r))
    return ne("invalidArgs", "column widths must be whole twips");
  if (n < 300) return ne("invalidArgs", "column widths are below the minimum");
  let a = tf$1(e.part.root, t.tableId);
  if (!a.ok) {
    let d = a.reason === "duplicate-node-id" ? "unknown-table" : a.reason;
    return Ja(d);
  }
  if (a.topology.hasMerge)
    return ne("unsupported", "this table has merged cells");
  let i = a.topology.gridColumns[a.topology.gridColumns.length - 1];
  if (!i || i.id !== t.gridColumnId)
    return ne("invalidArgs", "the resize target is not the table right edge");
  let l = {
    op: "setTableRightEdgeWidth",
    tableId: t.tableId,
    gridColumnId: t.gridColumnId,
    columnWidthTwips: n,
    tableWidthTwips: r,
  };
  return pt(e.part, [l], { kind: "preserveSelection" });
}
function wd(e, t, n) {
  if (e.viewing || !e.editable)
    return ne("locked", "the document is open for viewing");
  let r = Er(e, t.tableId, t.sourceRevision);
  if (r) return r;
  if (t.isHeaderRepeat)
    return ne("unsupported", "repeated header rows cannot be edited");
  if (!Number.isInteger(n) || n < 20 || n > 31680)
    return ne("invalidArgs", "row height is outside the supported range");
  let o = {
    op: "setTableRowHeight",
    tableId: t.tableId,
    rowId: t.rowId,
    heightTwips: n,
  };
  return pt(e.part, [o], { kind: "preserveSelection" });
}
function jt(e) {
  let { command: t, part: n, viewing: r, editable: o } = e;
  if (r || !o) return ne("locked", "the document is open for viewing");
  switch (t.type) {
    case "mergeCells":
      return ne("unsupported", "cell merge is not supported yet");
    case "splitCell":
      return ne("unsupported", "cell split is not supported yet");
    case "toggleHeaderRow":
    case "selectTableRegion":
    case "setTableProperties":
      return ne(
        "unsupported",
        `command '${t.type}' is not supported by the tree editor`,
      );
  }
  let a = Yp(t);
  if (a) return a;
  let i = Qp(t),
    l = Jp(t),
    d = sm(i ?? l);
  if (d) return d;
  if (i) {
    let h = Er(e, i.tableId, i.sourceRevision);
    if (h) return h;
  }
  if (l) {
    let h = Er(e, l.tableId, l.sourceRevision);
    if (h) return h;
  }
  let u = i !== null ? rm(e, i) : l !== null ? om(e, l) : em(e);
  if (
    t.type !== "commitTableColumnDividerResize" &&
    t.type !== "commitTableRightEdgeResize" &&
    !u
  )
    return i || l
      ? ne("invalidArgs", "the table target is no longer valid")
      : ne("unsupported", "the selection is not inside a table");
  if (u?.isHeaderRepeat)
    return ne("unsupported", "repeated header rows cannot be edited");
  switch (t.type) {
    case "insertRow": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h = {
        op: "insertTableRow",
        tableId: u.tableId,
        rowId: u.rowId,
        where: t.where,
      };
      return pt(n, [h], { kind: "adoptCommittedCaret" });
    }
    case "deleteRow": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h = {
        op: "deleteTableRow",
        tableId: u.tableId,
        rowId: u.rowId,
        referenceCellId: u.cellId,
      };
      return pt(n, [h], { kind: "adoptCommittedCaret" });
    }
    case "insertColumn": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h = l?.tableId ?? u.tableId,
        w = l?.gridColumnId ?? Id(n, h, u.gridColumnIndex),
        x = w
          ? {
              op: "insertTableColumn",
              tableId: h,
              where: t.where,
              gridColumnId: w,
            }
          : {
              op: "insertTableColumn",
              tableId: h,
              where: t.where,
              referenceCellId: u.cellId,
            };
      return pt(n, [x], { kind: "adoptCommittedCaret" });
    }
    case "deleteColumn": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h = l?.tableId ?? u.tableId,
        w = l?.gridColumnId ?? Id(n, h, u.gridColumnIndex);
      return w
        ? pt(n, [{ op: "deleteTableColumn", tableId: h, gridColumnId: w }], {
            kind: "adoptCommittedCaret",
          })
        : ne("invalidArgs", "the table has no grid column to delete");
    }
    case "deleteTable": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h = { op: "deleteBlock", blockId: u.tableId };
      return pt(n, [h], { kind: "adoptCommittedCaret" });
    }
    case "setCellFill": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h;
      if (t.color === null) h = null;
      else {
        let x = Qa(t.color, e.themeColors);
        if (!x.ok) return ne("invalidArgs", x.reason);
        h = x.color;
      }
      let w = {
        op: "setTableCellFill",
        tableId: u.tableId,
        cellIds: u.cellIds,
        color: h,
      };
      return pt(n, [w], { kind: "preserveSelection" });
    }
    case "setTableCellVerticalAlignment": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      let h = {
        op: "setTableCellVerticalAlignment",
        tableId: u.tableId,
        cellIds: u.cellIds,
        alignment: t.alignment,
      };
      return pt(n, [h], { kind: "preserveSelection" });
    }
    case "setTableBorders": {
      if (!u) return ne("unsupported", "the selection is not inside a table");
      if (t.scope === "none") {
        let x = {
          op: "setTableCellBorders",
          tableId: u.tableId,
          cellIds: u.cellIds,
          scope: "none",
          target: t.target,
        };
        return pt(n, [x], { kind: "preserveSelection" });
      }
      let h = im(t.spec, e.themeColors);
      if (!h.ok) return ne("invalidArgs", h.reason);
      let w = {
        op: "setTableCellBorders",
        tableId: u.tableId,
        cellIds: u.cellIds,
        scope: t.scope,
        spec: h.spec,
      };
      return pt(n, [w], { kind: "preserveSelection" });
    }
    case "commitTableColumnDividerResize":
      return lm(e, t.target, t.leftWidthTwips, t.rightWidthTwips);
    case "commitTableRightEdgeResize":
      return dm(e, t.target, t.columnWidthTwips, t.tableWidthTwips);
    default:
      return ne("unsupported", `command '${t.type}' is not a table command`);
  }
}
function Pd(e) {
  if (!An(e))
    return {
      supported: false,
      reason: `command '${e.type}' is not a table command`,
    };
  switch (e.type) {
    case "mergeCells":
      return { supported: false, reason: "cell merge is not supported yet" };
    case "splitCell":
      return { supported: false, reason: "cell split is not supported yet" };
    case "toggleHeaderRow":
    case "selectTableRegion":
    case "setTableProperties":
      return {
        supported: false,
        reason: `command '${e.type}' is not supported by the tree editor`,
      };
    default:
      return { supported: true };
  }
}
function Ao(e) {
  if (e === null || typeof e != "object" || Object.isFrozen(e)) return e;
  if (Array.isArray(e)) {
    for (let n of e) Ao(n);
    return Object.freeze(e);
  }
  let t = e;
  for (let n of Object.keys(t)) Ao(t[n]);
  return Object.freeze(e);
}
var ei = new Map([
    ["bold", { localName: "b" }],
    ["italic", { localName: "i" }],
    ["underline", { localName: "u", attributes: { val: "single" } }],
    ["strike", { localName: "strike" }],
    [
      "superscript",
      { localName: "vertAlign", attributes: { val: "superscript" } },
    ],
    ["subscript", { localName: "vertAlign", attributes: { val: "subscript" } }],
  ]),
  cm = new Set([
    "none",
    "black",
    "blue",
    "cyan",
    "darkBlue",
    "darkCyan",
    "darkGray",
    "darkGreen",
    "darkMagenta",
    "darkRed",
    "darkYellow",
    "green",
    "lightGray",
    "magenta",
    "red",
    "yellow",
    "white",
  ]),
  um = /^[\p{L}\p{N}\p{M} \-.+_]{1,64}$/u,
  fm = /^[0-9A-Fa-f]{6}$/;
function ti(e) {
  let { mark: t, value: n } = e;
  switch (t) {
    case "fontFamily":
      return typeof n != "string" || !um.test(n)
        ? {
            ok: false,
            code: "invalidArgs",
            reason:
              "fontFamily requires a family name of 1-64 letters, digits, or [ -.+_]",
          }
        : { ok: true, localName: "rFonts", attributes: { ascii: n, hAnsi: n } };
    case "fontSize":
      return typeof n != "number" || !Number.isInteger(n) || n < 2 || n > 3276
        ? {
            ok: false,
            code: "invalidArgs",
            reason:
              "fontSize requires an integer half-point value between 2 and 3276",
          }
        : { ok: true, localName: "sz", attributes: { val: String(n) } };
    case "color":
      return typeof n != "string" || (n !== "auto" && !fm.test(n))
        ? {
            ok: false,
            code: "invalidArgs",
            reason:
              "color requires a six-digit hex value like FF0000, or 'auto'",
          }
        : { ok: true, localName: "color", attributes: { val: n } };
    case "highlight":
      return typeof n != "string" || !cm.has(n)
        ? {
            ok: false,
            code: "invalidArgs",
            reason:
              "highlight requires an ST_HighlightColor name (yellow, cyan, ...)",
          }
        : { ok: true, localName: "highlight", attributes: { val: n } };
    default:
      return {
        ok: false,
        code: "unsupported",
        reason: `mark '${t}' is not supported by setMarkAttr`,
      };
  }
}
function Fd(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    typeof e.paragraphId == "string" &&
    typeof e.offset == "number"
  );
}
function ni(e) {
  return typeof e == "object" && e !== null && Fd(e.anchor) && Fd(e.head);
}
function Ln(e, t) {
  let n = new Error(t);
  return ((n.code = e), n);
}
function ri(e, t) {
  return e === t
    ? true
    : !e || !t
      ? false
      : e.anchor.paragraphId === t.anchor.paragraphId &&
        e.anchor.offset === t.anchor.offset &&
        e.head.paragraphId === t.head.paragraphId &&
        e.head.offset === t.head.offset;
}
function oi(e) {
  return e === "blank"
    ? Ga()
    : e instanceof Uint8Array
      ? e
      : e instanceof ArrayBuffer
        ? new Uint8Array(e)
        : null;
}
function ai(e) {
  return typeof e == "string"
    ? `'${e}' is not a document; pass DOCX bytes, or 'blank' for an empty one`
    : "a DocumentHandle cannot be re-loaded; pass DOCX bytes";
}
function Fr(e) {
  switch (e.type) {
    case "insertFieldSdt": {
      let t =
        typeof e.fieldId == "number" && Number.isFinite(e.fieldId)
          ? String(e.fieldId)
          : e.fieldId;
      return typeof t != "string" ||
        t.length === 0 ||
        t.length > 53 ||
        /[\u0000-\u001f\u007f-\u009f]/.test(t)
        ? {
            supported: false,
            code: "invalidArgs",
            reason: "insertFieldSdt requires a fieldId of 1-53 characters",
          }
        : typeof e.text != "string" ||
            e.text.trim().length === 0 ||
            e.text.length > 4096 ||
            /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/.test(e.text)
          ? {
              supported: false,
              code: "invalidArgs",
              reason:
                "insertFieldSdt requires 1-4096 valid XML text characters",
            }
          : { supported: true, mutating: true };
    }
    case "toggleMark":
      return ei.has(e.mark)
        ? { supported: true, mutating: true }
        : { supported: false, reason: `mark '${e.mark}' is not supported` };
    case "setMarkAttr": {
      let t = ti(e);
      return t.ok
        ? { supported: true, mutating: true }
        : { supported: false, reason: t.reason, code: t.code };
    }
    case "setAlignment":
      return { supported: true, mutating: true };
    case "clearFormatting":
      return { supported: true, mutating: true };
    case "setLineSpacing": {
      if (!["multiple", "exact", "atLeast"].includes(e.rule))
        return {
          supported: false,
          code: "invalidArgs",
          reason:
            "setLineSpacing requires a rule of 'multiple', 'exact' or 'atLeast'",
        };
      let n = e.rule === "multiple" ? e.value * 240 : e.value * 20;
      return !Number.isFinite(e.value) || e.value <= 0 || Math.round(n) > 31680
        ? {
            supported: false,
            code: "invalidArgs",
            reason:
              "setLineSpacing requires a positive value no taller than 1584pt",
          }
        : { supported: true, mutating: true };
    }
    case "setParagraphSpacing": {
      for (let t of ["beforePt", "afterPt"]) {
        let n = e[t];
        if (n != null && (!Number.isFinite(n) || n < 0 || n > 1584))
          return {
            supported: false,
            code: "invalidArgs",
            reason: `setParagraphSpacing requires ${t} between 0 and 1584 points`,
          };
      }
      return { supported: true, mutating: true };
    }
    case "setParagraphStyle":
      return e.target !== void 0
        ? {
            supported: false,
            reason:
              "DocTarget addressing is not supported; the style applies at the selection",
          }
        : typeof e.styleId != "string" ||
            e.styleId.length === 0 ||
            e.styleId.length > 128 ||
            /[\u0000-\u001f\u007f-\u009f]/.test(e.styleId)
          ? {
              supported: false,
              code: "invalidArgs",
              reason:
                "setParagraphStyle requires a styleId of 1-128 printable characters",
            }
          : { supported: true, mutating: true };
    case "insertHyperlink":
      return e.target !== void 0
        ? {
            supported: false,
            reason:
              "DocTarget addressing is not supported; a link applies at the selection",
          }
        : typeof e.href != "string" || e.href.length === 0
          ? {
              supported: false,
              code: "invalidArgs",
              reason: "insertHyperlink requires an href",
            }
          : { supported: true, mutating: true };
    case "removeHyperlink":
      return e.target === void 0
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason:
              "DocTarget addressing is not supported; unlink acts at the selection",
          };
    case "setIndent": {
      let t = [e.left, e.right, e.firstLine];
      if (t.every((n) => n === void 0))
        return {
          supported: false,
          reason: "setIndent requires at least one indent field",
        };
      for (let n of t)
        if (n != null) {
          if (!Number.isInteger(n))
            return {
              supported: false,
              reason: "indent values must be whole twips",
            };
          if (Math.abs(n) > rb)
            return {
              supported: false,
              reason: `indent values must be within \xB1${rb} twips`,
            };
        }
      return { supported: true, mutating: true };
    }
    case "toggleList":
      return e.kind === "bullet" || e.kind === "ordered"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: `list kind '${e.kind}' is not supported`,
          };
    case "adjustIndent":
      return e.direction === "increase" || e.direction === "decrease"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: `indent direction '${e.direction}' is not supported`,
          };
    case "insertBreak":
      return e.kind === "line" || e.kind === "page" || e.kind === "section"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: `break kind '${e.kind}' is not supported`,
          };
    case "insertText":
      return e.target === void 0
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason:
              "DocTarget addressing is not supported; text inserts at the selection",
          };
    case "deleteText":
      return e.target === void 0
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason:
              "DocTarget addressing is not supported; deletion removes the selection",
          };
    case "setPageSetup": {
      let t = [e.pageWidth, e.pageHeight],
        n = [e.marginTop, e.marginRight, e.marginBottom, e.marginLeft];
      if (
        t.every((r) => r === void 0) &&
        n.every((r) => r === void 0) &&
        e.orientation === void 0
      )
        return {
          supported: false,
          reason: "setPageSetup requires at least one field",
        };
      for (let r of t)
        if (r !== void 0 && (!Number.isInteger(r) || r < 1 || r > 63360))
          return {
            supported: false,
            code: "invalidArgs",
            reason: "page dimensions must be integer twips between 1 and 63360",
          };
      for (let r of n)
        if (r !== void 0 && (!Number.isInteger(r) || r < 0 || r > 31680))
          return {
            supported: false,
            code: "invalidArgs",
            reason: "margins must be integer twips between 0 and 31680",
          };
      return e.orientation !== void 0 &&
        e.orientation !== "portrait" &&
        e.orientation !== "landscape"
        ? {
            supported: false,
            code: "invalidArgs",
            reason: "orientation must be 'portrait' or 'landscape'",
          }
        : e.scope !== void 0 && e.scope !== "document" && e.scope !== "section"
          ? {
              supported: false,
              code: "invalidArgs",
              reason: "scope must be 'document' or 'section'",
            }
          : { supported: true, mutating: true };
    }
    case "undo":
    case "redo":
      return { supported: true, mutating: true };
    case "insertTable":
      return Number.isInteger(e.rows) &&
        Number.isInteger(e.cols) &&
        e.rows >= 1 &&
        e.cols >= 1 &&
        e.rows <= 32767 &&
        e.cols <= 63 &&
        e.rows * e.cols <= 2e4
        ? { supported: true, mutating: true }
        : {
            supported: false,
            code: "invalidArgs",
            reason: `insertTable needs whole rows and cols of at least 1, at most ${32767}\xD7${63}, and at most ${2e4} cells`,
          };
    case "insertToc":
      return { supported: true, mutating: true };
    case "refreshToc":
      return e.mode !== void 0 &&
        e.mode !== "entire" &&
        e.mode !== "pageNumbers"
        ? {
            supported: false,
            code: "invalidArgs",
            reason: "refreshToc mode must be 'entire' or 'pageNumbers'",
          }
        : e.tocId !== void 0 &&
            (typeof e.tocId != "string" || e.tocId.length === 0)
          ? {
              supported: false,
              code: "invalidArgs",
              reason: "refreshToc tocId must be a non-empty string",
            }
          : { supported: true, mutating: true };
    case "editHeaderFooter":
      return e.position !== "header" && e.position !== "footer"
        ? {
            supported: false,
            reason: "editHeaderFooter requires position 'header' or 'footer'",
          }
        : e.variant !== void 0 &&
            e.variant !== "default" &&
            e.variant !== "first" &&
            e.variant !== "even"
          ? {
              supported: false,
              reason:
                "editHeaderFooter variant must be 'default', 'first', or 'even'",
            }
          : { supported: true, mutating: true };
    case "exitHeaderFooter":
      return { supported: true, mutating: false };
    case "removeHeaderFooter":
    case "linkHeaderFooterToPrevious":
    case "unlinkHeaderFooterFromPrevious":
      return "variant" in e &&
        e.variant !== void 0 &&
        e.variant !== "default" &&
        e.variant !== "first" &&
        e.variant !== "even"
        ? {
            supported: false,
            reason: "furniture variant must be 'default', 'first', or 'even'",
          }
        : { supported: true, mutating: true };
    case "setHeaderFooterOptions":
      return e.titlePage === void 0 &&
        e.evenAndOddHeaders === void 0 &&
        e.headerDistanceTwips === void 0 &&
        e.footerDistanceTwips === void 0
        ? {
            supported: false,
            reason: "setHeaderFooterOptions requires at least one option",
          }
        : { supported: true, mutating: true };
    case "insertPageField":
      return e.field === "PAGE" ||
        e.field === "NUMPAGES" ||
        e.field === "SECTIONPAGES" ||
        e.field === "PAGE_X_OF_Y"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason:
              "insertPageField field must be 'PAGE', 'NUMPAGES', 'SECTIONPAGES', or 'PAGE_X_OF_Y'",
          };
    case "insertNote":
      return e.noteKind === "footnote" || e.noteKind === "endnote"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: "insertNote noteKind must be 'footnote' or 'endnote'",
          };
    case "deleteNote":
      return e.noteKind === "footnote" || e.noteKind === "endnote"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: "deleteNote noteKind must be 'footnote' or 'endnote'",
          };
    case "convertNote":
      return e.fromKind === "footnote" || e.fromKind === "endnote"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: "convertNote fromKind must be 'footnote' or 'endnote'",
          };
    case "convertAllNotes":
      return e.fromKind === "footnote" || e.fromKind === "endnote"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            reason: "convertAllNotes fromKind must be 'footnote' or 'endnote'",
          };
    case "setNoteProperties":
      return e.endnote?.position === "pageBottom"
        ? { supported: false, reason: "endnote-pageBottom" }
        : e.footnote !== void 0 || e.endnote !== void 0
          ? { supported: true, mutating: true }
          : {
              supported: false,
              reason:
                "setNoteProperties requires footnote and/or endnote fields",
            };
    case "selectAll":
    case "copy":
      return { supported: true, mutating: false };
    case "cut":
      return { supported: true, mutating: true };
    case "paste":
      return typeof e.text != "string"
        ? {
            supported: false,
            code: "invalidArgs",
            reason: "paste requires text",
          }
        : e.text === ""
          ? {
              supported: false,
              code: "invalidArgs",
              reason: "there is nothing to paste",
            }
          : { supported: true, mutating: true };
    case "insertRow":
    case "deleteRow":
    case "insertColumn":
    case "deleteColumn":
    case "deleteTable":
    case "setCellFill":
    case "setTableCellVerticalAlignment":
    case "setTableBorders":
    case "commitTableColumnDividerResize":
    case "commitTableRightEdgeResize":
    case "mergeCells":
    case "splitCell":
    case "toggleHeaderRow":
    case "selectTableRegion":
    case "setTableProperties": {
      let t = Pd(e);
      return t.supported
        ? { supported: true, mutating: true }
        : { supported: false, reason: t.reason ?? "unsupported table command" };
    }
    case "setSelection":
      return ("range" in e && (ni(e.range) || Mn(e.range))) ||
        ("anchor" in e && Ft(e.anchor))
        ? { supported: true, mutating: false }
        : {
            supported: false,
            reason:
              "setSelection accepts { anchor: { paraId } }, a { range } whose from/to are paraId anchors, or a { range } carrying a semantic { anchor: { paragraphId, offset }, head } selection",
          };
    case "insertImage":
      return e.data instanceof Uint8Array &&
        (e.mime === "image/png" ||
          e.mime === "image/jpeg" ||
          e.mime === "image/gif") &&
        Number.isFinite(e.widthPoints) &&
        Number.isFinite(e.heightPoints) &&
        e.widthPoints > 0 &&
        e.heightPoints > 0
        ? { supported: true, mutating: true }
        : {
            supported: false,
            code: "invalidArgs",
            reason:
              "insertImage requires png/jpeg/gif bytes and finite dimensions",
          };
    case "replaceImage":
      return e.data instanceof Uint8Array
        ? { supported: true, mutating: true }
        : {
            supported: false,
            code: "invalidArgs",
            reason: "replaceImage requires image bytes",
          };
    case "deleteImage":
      return { supported: true, mutating: true };
    case "setImageWrapType":
      return [
        "inline",
        "square",
        "squareLeft",
        "squareRight",
        "tight",
        "through",
        "topAndBottom",
        "behind",
        "inFront",
      ].includes(e.target)
        ? { supported: true, mutating: true }
        : {
            supported: false,
            code: "invalidArgs",
            reason: "unsupported wrap target",
          };
    case "transformImage":
      return e.action === "rotateCW" ||
        e.action === "rotateCCW" ||
        e.action === "flipH" ||
        e.action === "flipV"
        ? { supported: true, mutating: true }
        : {
            supported: false,
            code: "invalidArgs",
            reason: "unsupported transform action",
          };
    case "setImagePosition":
      return { supported: true, mutating: true };
    case "setImageProperties":
      return { supported: true, mutating: true };
    default:
      return {
        supported: false,
        reason: `command '${e.type}' is not supported by the tree editor`,
      };
  }
}
function Md(e, t) {
  if (e === t) return true;
  if (
    !e ||
    !t ||
    e.bold !== t.bold ||
    e.italic !== t.italic ||
    e.underline !== t.underline ||
    e.strike !== t.strike ||
    e.superscript !== t.superscript ||
    e.subscript !== t.subscript ||
    e.highlight !== t.highlight ||
    e.fontFamily !== t.fontFamily ||
    e.fontSizePt !== t.fontSizePt ||
    e.alignment !== t.alignment ||
    e.styleId !== t.styleId ||
    e.spaceBeforePt !== t.spaceBeforePt ||
    e.spaceAfterPt !== t.spaceAfterPt ||
    e.lineSpacing?.rule !== t.lineSpacing?.rule ||
    e.lineSpacing?.value !== t.lineSpacing?.value ||
    e.indent?.left !== t.indent?.left ||
    e.indent?.right !== t.indent?.right ||
    e.indent?.firstLine !== t.indent?.firstLine ||
    e.indent?.mixed.left !== t.indent?.mixed.left ||
    e.indent?.mixed.right !== t.indent?.mixed.right ||
    e.indent?.mixed.firstLine !== t.indent?.mixed.firstLine
  )
    return false;
  if (e.color === t.color) return true;
  if (!e.color || !t.color) return false;
  let n = e.color,
    r = t.color,
    o = new Set([...Object.keys(n), ...Object.keys(r)]);
  for (let a of o) if (n[a] !== r[a]) return false;
  return true;
}
function Ad(e, t) {
  return e.current === t.current && e.total === t.total;
}
function Ld(e, t) {
  return e === t
    ? true
    : !e || !t
      ? false
      : e.pageWidthTwips === t.pageWidthTwips &&
        e.pageHeightTwips === t.pageHeightTwips &&
        e.orientation === t.orientation &&
        e.marginsTwips.top === t.marginsTwips.top &&
        e.marginsTwips.right === t.marginsTwips.right &&
        e.marginsTwips.bottom === t.marginsTwips.bottom &&
        e.marginsTwips.left === t.marginsTwips.left &&
        e.gutterTwips === t.gutterTwips;
}
function Od(e, t) {
  if (e === t) return true;
  if (!e || !t) return false;
  let n = e,
    r = t;
  return (
    n.paraId === r.paraId &&
    n.search === r.search &&
    n.occurrence === r.occurrence
  );
}
function Hd(e, t) {
  return e === t
    ? true
    : !e || !t || !Mn(e) || !Mn(t)
      ? false
      : Od(e.from, t.from) && Od(e.to, t.to);
}
function Dd() {
  let e = null;
  return (t) => (
    t === null ? (e = null) : e?.id !== t && (e = Object.freeze({ id: t })),
    e
  );
}
function Nd(e, t) {
  return (
    e.scope === t.scope &&
    e.isLoading === t.isLoading &&
    e.isOpening === t.isOpening &&
    e.parseError === t.parseError &&
    e.editable === t.editable &&
    e.zoom === t.zoom &&
    e.selection === t.selection &&
    e.selectionCollapsed === t.selectionCollapsed &&
    e.formatting === t.formatting &&
    e.table === t.table &&
    e.tocContext === t.tocContext &&
    e.image === t.image &&
    e.fontSubstitutions === t.fontSubstitutions &&
    e.page === t.page &&
    e.canUndo === t.canUndo &&
    e.canRedo === t.canRedo &&
    e.pageSetup === t.pageSetup &&
    e.zoomMode === t.zoomMode &&
    e.reviewPaneOpen === t.reviewPaneOpen &&
    e.editingMode === t.editingMode &&
    e.lastRejection === t.lastRejection
  );
}
function pm(e) {
  return [e.left, e.top, e.right, e.bottom];
}
function ii(e) {
  return Object.freeze({
    left: e.left * 100,
    top: e.top * 100,
    right: e.right * 100,
    bottom: e.bottom * 100,
  });
}
function mm(e) {
  return Object.freeze({
    left: e.left / 100,
    top: e.top / 100,
    right: e.right / 100,
    bottom: e.bottom / 100,
  });
}
function Or(e) {
  return Math.round(e * 1e3);
}
function Mr(e) {
  return e / 1e3;
}
function si(e) {
  return Object.freeze({
    left: Or(e.left),
    top: Or(e.top),
    right: Or(e.right),
    bottom: Or(e.bottom),
  });
}
function gm(e) {
  return Object.freeze({
    left: Mr(e.left),
    top: Mr(e.top),
    right: Mr(e.right),
    bottom: Mr(e.bottom),
  });
}
function li(e) {
  return pm(e).some((n) => !Number.isFinite(n) || n < 0 || n > 100)
    ? false
    : e.left + e.right < 100 && e.top + e.bottom < 100;
}
var hm = new Set(["insertImage", "replaceImage"]),
  ym = new Set([
    "insertImage",
    "replaceImage",
    "deleteImage",
    "setImageWrapType",
    "transformImage",
    "setImagePosition",
    "setImageProperties",
  ]);
function vm(e, t, n) {
  if (!e) return null;
  for (let r of e.drawings ?? [])
    if (r.paragraphId === t && (r.start === n || r.start + 1 === n)) return r;
  return null;
}
function bm(e, t, n) {
  let r = e.layout();
  for (let o of r.pages) {
    for (let a of o.anchoredDrawings ?? [])
      if (a.anchorParagraphId === t && (a.start === n || a.start + 1 === n))
        return a;
    for (let a of [o.header, o.footer])
      if (a) {
        for (let i of a.anchoredDrawings ?? [])
          if (i.anchorParagraphId === t && (i.start === n || i.start + 1 === n))
            return i;
      }
  }
  return null;
}
function _d(e) {
  if (!e) return null;
  let { anchor: t, head: n } = e.state().selection;
  if (t.paragraphId !== n.paragraphId || t.offset !== n.offset) return null;
  let r = W(e.layout(), t.paragraphId, t.offset),
    o = vm(r, t.paragraphId, t.offset);
  return o || bm(e, t.paragraphId, t.offset);
}
function Zd(e, t) {
  let n = e.storyScope(),
    r = e.session.partFor(n) ?? e.session.part(),
    o = Fa(r, t.drawingNodeId);
  return !o || o.kind !== "drawing"
    ? null
    : cb$1(o, {
        ownerPartName: t.ownerPartName,
        supportedMcRequires: Za,
        limits: Ya$1,
        resolveRelationship: $a$1(e.session.currentPackage(), t.ownerPartName),
      });
}
function Bd(e) {
  if (e.kind !== "anchored" || !e.position) return null;
  let t = e.position;
  return e.anchor?.simplePos
    ? Object.freeze({
        mode: "simple",
        horizontalEmu: t.simplePosition.xEmu,
        verticalEmu: t.simplePosition.yEmu,
      })
    : Object.freeze({
        mode: "frame",
        ...(t.horizontal.offsetEmu !== null
          ? { horizontalEmu: t.horizontal.offsetEmu }
          : {}),
        ...(t.vertical.offsetEmu !== null
          ? { verticalEmu: t.vertical.offsetEmu }
          : {}),
        relativeToH: t.horizontal.relativeFrom,
        relativeToV: t.vertical.relativeFrom,
      });
}
function xm(e) {
  let t = e.resource;
  return t.kind !== "ready"
    ? null
    : Object.freeze({
        pixelWidth: t.pixelWidth,
        pixelHeight: t.pixelHeight,
        dpiX: t.dpiX,
        dpiY: t.dpiY,
      });
}
function qd(e) {
  let t = e.locks;
  return Object.freeze({
    canResize: !t.resize && !e.hidden,
    canMove: !t.move && !e.hidden,
    canChangeWrap: !t.move && e.kind === "anchored" && !e.hidden,
    canCrop: !t.resize && !t.changeAspect && !e.hidden,
  });
}
function Im(e) {
  return e.kind === "inlineDrawing" ? "inline" : e.wrap;
}
function Ot(e) {
  let t = _d(e);
  if (!t || t.placeholderGraphicKind !== null) return null;
  let n = e ? Zd(e, t) : null;
  if (!n || n.hidden || n.locks.select) return null;
  let r = t.transform;
  return Object.freeze({
    id: t.drawingNodeId,
    kind: n.kind,
    widthEmu: n.extentEmu.cx,
    heightEmu: n.extentEmu.cy,
    crop: ii(t.crop),
    rotationDegrees: r.rotationDegrees,
    wrap: Im(t),
    position: Bd(n),
    name: n.name,
    title: n.title,
    description: n.description,
    hyperlink: n.hyperlinkHref,
    locks: n.locks,
    hidden: n.hidden,
    resourceStatus: t.resource.kind,
    intrinsic: xm(t),
    ...qd(n),
  });
}
function zd(e, t) {
  return e === t
    ? true
    : !e || !t
      ? false
      : e.id === t.id &&
        e.kind === t.kind &&
        e.widthEmu === t.widthEmu &&
        e.heightEmu === t.heightEmu &&
        e.crop.left === t.crop.left &&
        e.crop.top === t.crop.top &&
        e.crop.right === t.crop.right &&
        e.crop.bottom === t.crop.bottom &&
        e.rotationDegrees === t.rotationDegrees &&
        e.wrap === t.wrap &&
        e.name === t.name &&
        e.title === t.title &&
        e.description === t.description &&
        e.hyperlink === t.hyperlink &&
        e.hidden === t.hidden &&
        e.resourceStatus === t.resourceStatus &&
        e.canResize === t.canResize &&
        e.canMove === t.canMove &&
        e.canChangeWrap === t.canChangeWrap &&
        e.canCrop === t.canCrop &&
        e.locks.select === t.locks.select &&
        e.locks.move === t.locks.move &&
        e.locks.resize === t.locks.resize &&
        e.locks.changeAspect === t.locks.changeAspect &&
        (e.position?.mode ?? "frame") === (t.position?.mode ?? "frame") &&
        (e.position?.horizontalEmu ?? null) ===
          (t.position?.horizontalEmu ?? null) &&
        (e.position?.verticalEmu ?? null) ===
          (t.position?.verticalEmu ?? null) &&
        (e.position?.relativeToH ?? null) ===
          (t.position?.relativeToH ?? null) &&
        (e.position?.relativeToV ?? null) ===
          (t.position?.relativeToV ?? null) &&
        (e.intrinsic?.pixelWidth ?? null) ===
          (t.intrinsic?.pixelWidth ?? null) &&
        (e.intrinsic?.pixelHeight ?? null) ===
          (t.intrinsic?.pixelHeight ?? null) &&
        (e.intrinsic?.dpiX ?? null) === (t.intrinsic?.dpiX ?? null) &&
        (e.intrinsic?.dpiY ?? null) === (t.intrinsic?.dpiY ?? null);
}
function di(e) {
  if ("drawingNodeId" in e && typeof e.drawingNodeId == "string")
    return e.drawingNodeId;
}
function Kd(e) {
  if (
    "expectedPackageRevision" in e &&
    typeof e.expectedPackageRevision == "number"
  )
    return e.expectedPackageRevision;
}
function ci(e) {
  return (
    di(e) !== void 0 ||
    Kd(e) !== void 0 ||
    (e.type === "setImageProperties" && e.selectionParagraphId !== void 0)
  );
}
function ui(e, t, n) {
  let r = e.surface;
  if (!r)
    return { ok: false, code: "notFound", reason: "no document is loaded" };
  let o = Kd(t);
  if (o !== void 0 && r.session.packageRevision() !== o)
    return { ok: false, code: "notFound", reason: "stale package revision" };
  let a = di(t),
    i = Ot(r);
  if (a !== void 0 && (!i || i.id !== a))
    return { ok: false, code: "notFound", reason: "stale drawing selection" };
  if (
    t.type === "setImageProperties" &&
    t.selectionParagraphId !== void 0 &&
    t.selectionOffset !== void 0
  ) {
    let { anchor: l, head: d } = r.state().selection;
    if (
      l.paragraphId !== t.selectionParagraphId ||
      l.offset !== t.selectionOffset ||
      d.paragraphId !== t.selectionParagraphId ||
      d.offset !== t.selectionOffset
    )
      return { ok: false, code: "notFound", reason: "stale drawing selection" };
  }
  return Dn(e, n, {
    requireDrawing: a !== void 0 || n.drawingNodeId !== null,
    drawingNodeId: a ?? n.drawingNodeId ?? void 0,
  });
}
function Jt(e, t) {
  let n = Ot(e),
    r = di(t);
  return r
    ? !n || n.id !== r
      ? { ok: false, code: "notFound", reason: "stale drawing selection" }
      : { id: r }
    : n
      ? { id: n.id }
      : { ok: false, code: "notFound", reason: "no drawing is selected" };
}
function Sm(e) {
  return e.rejected
    ? {
        ok: false,
        code: "invalidArgs",
        reason:
          e.reason === "drawing-locked"
            ? "the drawing is locked"
            : e.reason === "unknown-drawing"
              ? "stale drawing selection"
              : typeof e.reason == "string"
                ? e.reason
                : "the image change was refused",
      }
    : null;
}
function Lo(e, t) {
  return Sm(e.applyDrawingOps(t));
}
function km(e) {
  if (!e.intrinsic) return null;
  let t = Math.round((e.intrinsic.pixelWidth * 914400) / e.intrinsic.dpiX),
    n = Math.round((e.intrinsic.pixelHeight * 914400) / e.intrinsic.dpiY);
  return !Number.isFinite(t) || !Number.isFinite(n) || t <= 0 || n <= 0
    ? null
    : { cx: t, cy: n };
}
function Tm(e) {
  return e.borderWidthEmu !== void 0 || e.borderColor !== void 0;
}
function wm(e) {
  return (
    e.horizontalEmu !== void 0 ||
    e.verticalEmu !== void 0 ||
    e.relativeToH !== void 0 ||
    e.relativeToV !== void 0
  );
}
function Pm(e) {
  return (
    e.widthEmu !== void 0 ||
    e.heightEmu !== void 0 ||
    e.alt !== void 0 ||
    e.title !== void 0 ||
    e.description !== void 0 ||
    e.hyperlink !== void 0 ||
    e.crop !== void 0 ||
    e.wrap !== void 0 ||
    e.resetToNaturalSize === true ||
    yf$1(e)
  );
}
function jd(e, t) {
  return t?.position?.mode === "simple"
    ? Object.freeze({
        mode: "simple",
        ...(e.horizontalEmu !== void 0
          ? { horizontalEmu: e.horizontalEmu }
          : {}),
        ...(e.verticalEmu !== void 0 ? { verticalEmu: e.verticalEmu } : {}),
      })
    : Object.freeze({
        mode: "frame",
        ...(e.horizontalEmu !== void 0
          ? { horizontalEmu: e.horizontalEmu }
          : {}),
        ...(e.verticalEmu !== void 0 ? { verticalEmu: e.verticalEmu } : {}),
        ...(e.relativeToH !== void 0 ? { relativeToH: e.relativeToH } : {}),
        ...(e.relativeToV !== void 0 ? { relativeToV: e.relativeToV } : {}),
      });
}
function Ar(e) {
  return ym.has(e.type);
}
function Cm(e) {
  return hm.has(e.type);
}
function Ud(e) {
  return {
    ok: false,
    code: "unsupported",
    reason: `${e.type} is asynchronous; use executeImageCommand`,
  };
}
function Vd(e) {
  if (!e)
    return { ok: false, code: "notFound", reason: "no document is loaded" };
  let t = e.editingMode();
  return t === "view"
    ? { ok: false, code: "locked", reason: "the document is open for viewing" }
    : t === "suggest"
      ? {
          ok: false,
          code: "invalidArgs",
          reason: "image property edits are not supported in suggesting mode",
        }
      : null;
}
function Lr(e) {
  let t = e.surface;
  if (!t) return null;
  let { anchor: n } = t.state().selection,
    r = Ot(t);
  return Object.freeze({
    mountGeneration: e.mountGeneration,
    packageRevision: t.session.packageRevision(),
    drawingNodeId: r?.id ?? null,
    selectionParagraphId: n.paragraphId,
    selectionOffset: n.offset,
  });
}
function Dn(e, t, n) {
  let r = e.surface;
  if (!r)
    return { ok: false, code: "notFound", reason: "no document is loaded" };
  if (e.mountGeneration !== t.mountGeneration)
    return {
      ok: false,
      code: "notFound",
      reason: "the editor is no longer attached",
    };
  let { anchor: o, head: a } = r.state().selection;
  if (
    o.paragraphId !== t.selectionParagraphId ||
    o.offset !== t.selectionOffset
  )
    return { ok: false, code: "notFound", reason: "stale drawing selection" };
  if (o.paragraphId !== a.paragraphId || o.offset !== a.offset)
    return { ok: false, code: "notFound", reason: "stale drawing selection" };
  if (n?.requireDrawing) {
    let i = Ot(r),
      l = n.drawingNodeId ?? t.drawingNodeId;
    if (!i || !l || i.id !== l)
      return { ok: false, code: "notFound", reason: "stale drawing selection" };
  }
  return null;
}
function Hr(e, t) {
  if (!Ar(e)) return null;
  if (!t)
    return { ok: false, code: "notFound", reason: "no document is loaded" };
  if (e.type === "insertImage")
    return !(e.data instanceof Uint8Array) || e.data.byteLength === 0
      ? {
          ok: false,
          code: "invalidArgs",
          reason: "insertImage requires image bytes",
        }
      : !Number.isFinite(e.widthPoints) || !Number.isFinite(e.heightPoints)
        ? {
            ok: false,
            code: "invalidArgs",
            reason: "insertImage requires finite dimensions",
          }
        : e.widthPoints <= 0 || e.heightPoints <= 0
          ? {
              ok: false,
              code: "invalidArgs",
              reason: "insertImage dimensions must be positive",
            }
          : null;
  if (e.type === "replaceImage") {
    if (!(e.data instanceof Uint8Array) || e.data.byteLength === 0)
      return {
        ok: false,
        code: "invalidArgs",
        reason: "replaceImage requires image bytes",
      };
    let o = Jt(t, e);
    return "ok" in o ? o : null;
  }
  let n = Jt(t, e);
  if ("ok" in n) return n;
  let r = Ot(t);
  if (!r)
    return { ok: false, code: "notFound", reason: "no drawing is selected" };
  if (t.editingMode() === "suggest")
    return e.type === "deleteImage"
      ? {
          ok: false,
          code: "invalidArgs",
          reason: "trackedDrawingDeletionUnsupported",
        }
      : {
          ok: false,
          code: "invalidArgs",
          reason: "image property edits are not supported in suggesting mode",
        };
  switch (e.type) {
    case "deleteImage":
      return r.locks.select
        ? {
            ok: false,
            code: "locked",
            reason: "the drawing cannot be selected",
          }
        : null;
    case "setImageWrapType":
      return r.canChangeWrap
        ? null
        : {
            ok: false,
            code: "locked",
            reason: "wrap cannot be changed on this drawing",
          };
    case "transformImage":
      return r.locks.changeAspect || r.locks.resize
        ? { ok: false, code: "locked", reason: "the drawing is locked" }
        : null;
    case "setImagePosition":
      if (!r.canMove || r.kind !== "anchored")
        return {
          ok: false,
          code: "locked",
          reason: "position cannot be changed on this drawing",
        };
      if (!wm(e))
        return {
          ok: false,
          code: "invalidArgs",
          reason: "setImagePosition requires at least one field",
        };
      let o = r.position?.mode ?? "frame";
      return Af$1(e, o)
        ? vf$1(jd(e, r))
          ? null
          : {
              ok: false,
              code: "invalidArgs",
              reason: "setImagePosition carries invalid position values",
            }
        : {
            ok: false,
            code: "invalidArgs",
            reason: "setImagePosition carries invalid position values",
          };
    case "setImageProperties": {
      if (Tm(e))
        return {
          ok: false,
          code: "unsupported",
          reason: "image border properties are not supported yet",
        };
      if (!Pm(e))
        return {
          ok: false,
          code: "invalidArgs",
          reason: "setImageProperties requires at least one field",
        };
      if (e.resetToNaturalSize && !r.intrinsic)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "natural size is unavailable for this image",
        };
      if (
        e.widthEmu !== void 0 &&
        (!Number.isFinite(e.widthEmu) || e.widthEmu <= 0)
      )
        return {
          ok: false,
          code: "invalidArgs",
          reason: "widthEmu must be a positive finite number",
        };
      if (
        e.heightEmu !== void 0 &&
        (!Number.isFinite(e.heightEmu) || e.heightEmu <= 0)
      )
        return {
          ok: false,
          code: "invalidArgs",
          reason: "heightEmu must be a positive finite number",
        };
      if (e.widthEmu !== void 0 && !r.canResize)
        return { ok: false, code: "locked", reason: "the drawing is locked" };
      if (e.heightEmu !== void 0 && !r.canResize)
        return { ok: false, code: "locked", reason: "the drawing is locked" };
      if (e.crop !== void 0 && !li(e.crop))
        return {
          ok: false,
          code: "invalidArgs",
          reason: "crop values are out of range",
        };
      if (e.crop !== void 0 && !r.canCrop)
        return {
          ok: false,
          code: "locked",
          reason: "crop cannot be changed on this drawing",
        };
      if (e.hyperlink !== void 0 && e.hyperlink !== null && !V(e.hyperlink).ok)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "unsafe hyperlink URL",
        };
      if (e.wrap !== void 0 && !r.canChangeWrap)
        return {
          ok: false,
          code: "locked",
          reason: "wrap cannot be changed on this drawing",
        };
      if (yf$1(e)) {
        if (!r.canMove || r.kind !== "anchored")
          return {
            ok: false,
            code: "locked",
            reason: "position cannot be changed on this drawing",
          };
        let a = r.position?.mode ?? "frame";
        if (!Af$1(e, a))
          return {
            ok: false,
            code: "invalidArgs",
            reason: "setImageProperties carries invalid position values",
          };
        if (!vf$1(zf$1(e, r)))
          return {
            ok: false,
            code: "invalidArgs",
            reason: "setImageProperties carries invalid position values",
          };
      }
      return null;
    }
    default:
      return null;
  }
}
function fi(e, t) {
  let n = Vd(t);
  if (n) return n;
  let r = Hr(e, t);
  return r || { ok: true };
}
function Wd(e, t) {
  let n = Hr(e, t);
  return n || Ud(e);
}
function Gd(e, t, n) {
  if (Cm(t)) return Ud(t);
  let r = n && ci(t) ? Lr(n) : null;
  if (r && n) {
    let o = ui(n, t, r);
    if (o) return o;
  }
  switch (t.type) {
    case "deleteImage": {
      let o = Jt(e, t);
      if ("ok" in o) return o;
      let a = e.deleteImage(o.id);
      return a.ok
        ? null
        : {
            ok: false,
            code: "invalidArgs",
            reason: a.detail ?? a.reason ?? "deleteImage was refused",
          };
    }
    case "setImageWrapType": {
      let o = Jt(e, t);
      return "ok" in o
        ? o
        : Lo(e, [
            { op: "setDrawingWrap", drawingNodeId: o.id, wrap: t.target },
          ]);
    }
    case "transformImage": {
      let o = Jt(e, t);
      return "ok" in o
        ? o
        : Lo(e, [
            { op: "transformDrawing", drawingNodeId: o.id, action: t.action },
          ]);
    }
    case "setImagePosition": {
      let o = Jt(e, t);
      if ("ok" in o) return o;
      let a = Ot(e),
        i = jd(t, a);
      return Lo(e, [
        { op: "positionDrawing", drawingNodeId: o.id, position: i },
      ]);
    }
    case "setImageProperties": {
      let o = Jt(e, t);
      if ("ok" in o) return o;
      let a = Ot(e);
      if (!a)
        return {
          ok: false,
          code: "notFound",
          reason: "no drawing is selected",
        };
      let i = [];
      if (t.resetToNaturalSize) {
        let u = km(a);
        if (!u)
          return {
            ok: false,
            code: "invalidArgs",
            reason: "natural size is unavailable for this image",
          };
        i.push({ op: "resizeDrawing", drawingNodeId: o.id, extentEmu: u });
      } else
        (t.widthEmu !== void 0 || t.heightEmu !== void 0) &&
          i.push({
            op: "resizeDrawing",
            drawingNodeId: o.id,
            extentEmu: {
              cx: t.widthEmu ?? a.widthEmu,
              cy: t.heightEmu ?? a.heightEmu,
            },
          });
      t.crop !== void 0 &&
        i.push({ op: "cropDrawing", drawingNodeId: o.id, crop: si(t.crop) });
      let l = t.title ?? t.alt,
        d = t.description ?? t.alt;
      if (
        ((l !== void 0 || d !== void 0) &&
          i.push({
            op: "setDrawingMetadata",
            drawingNodeId: o.id,
            title: l ?? a.title,
            description: d ?? a.description,
          }),
        t.wrap !== void 0 &&
          i.push({ op: "setDrawingWrap", drawingNodeId: o.id, wrap: t.wrap }),
        yf$1(t))
      ) {
        let u = zf$1(t, a);
        i.push({ op: "positionDrawing", drawingNodeId: o.id, position: u });
      }
      if (t.hyperlink !== void 0) {
        let u = e.applyImageProperties({
          drawingNodeId: o.id,
          ops: i,
          hyperlink: t.hyperlink,
        });
        return u.ok
          ? null
          : {
              ok: false,
              code: "invalidArgs",
              reason: u.detail ?? u.reason ?? "setImageProperties was refused",
            };
      }
      return i.length === 0
        ? {
            ok: false,
            code: "invalidArgs",
            reason: "setImageProperties requires at least one field",
          }
        : Lo(e, i);
    }
    default:
      return null;
  }
}
async function pi(e, t) {
  let n = e.surface;
  if (!n)
    return { ok: false, code: "notFound", reason: "no document is loaded" };
  let r = Vd(n);
  if (r) return r;
  let o = Hr(t, n);
  if (o) return o;
  let a = Lr(e);
  if (!a)
    return { ok: false, code: "notFound", reason: "no document is loaded" };
  if (t.type === "insertImage") {
    let { anchor: w } = n.state().selection,
      x = t.expectedPackageRevision ?? a.packageRevision;
    if (
      t.expectedPackageRevision !== void 0 &&
      n.session.packageRevision() !== t.expectedPackageRevision
    )
      return { ok: false, code: "notFound", reason: "stale package revision" };
    let I = await n.insertImage({
        paragraphId: w.paragraphId,
        offset: w.offset,
        bytes: t.data,
        mime: t.mime,
        widthPoints: t.widthPoints,
        heightPoints: t.heightPoints,
        expectedPackageRevision: x,
        commitGuard: () => Dn(e, a) === null,
        ...(t.title !== void 0 ? { title: t.title } : {}),
        ...(t.description !== void 0 ? { description: t.description } : {}),
        ...(t.hyperlink !== void 0 ? { hyperlink: t.hyperlink } : {}),
      }),
      D = Dn(e, a);
    return (
      D ||
      (I.ok
        ? { ok: true, changed: I.change !== null }
        : {
            ok: false,
            code: "invalidArgs",
            reason:
              I.detail === "stale-package-epoch"
                ? "stale package revision"
                : (I.detail ?? I.reason ?? "insertImage was refused"),
          })
    );
  }
  let i = Jt(n, t);
  if ("ok" in i) return i;
  let l = t.expectedPackageRevision ?? a.packageRevision;
  if (
    t.expectedPackageRevision !== void 0 &&
    n.session.packageRevision() !== t.expectedPackageRevision
  )
    return { ok: false, code: "notFound", reason: "stale package revision" };
  let d = t.mime ?? "image/png",
    u = await n.replaceImage(i.id, t.data, d, {
      expectedPackageRevision: l,
      commitGuard: () =>
        Dn(e, a, { requireDrawing: true, drawingNodeId: i.id }) === null,
    }),
    h = Dn(e, a, { requireDrawing: true, drawingNodeId: i.id });
  return (
    h ||
    (u.ok
      ? { ok: true, changed: u.change !== null }
      : {
          ok: false,
          code: "invalidArgs",
          reason:
            u.detail === "stale-package-epoch"
              ? "stale package revision"
              : (u.detail ?? u.reason ?? "replaceImage was refused"),
        })
  );
}
var Rm = 1,
  Em = 10,
  Dr = 12700;
function Fm(e, t) {
  if (!t || t.hidden || t.locks.select)
    return Object.freeze({
      canResize: false,
      canMove: false,
      aspectLocked: true,
    });
  let n = qd(t);
  return Object.freeze({
    canResize: n.canResize,
    canMove: n.canMove,
    aspectLocked: t.locks.changeAspect,
  });
}
function Om(e) {
  if (!e) return null;
  let { anchor: t, head: n } = e.state().selection;
  if (t.paragraphId !== n.paragraphId || t.offset !== n.offset) return null;
  let r = _d(e);
  if (!r || r.accessibility.hidden) return null;
  let o = e.publishedLayout(),
    a = uc$1(o, r.drawingNodeId);
  if (!a) return null;
  let i = Zd(e, r);
  if (!i || i.locks.select) return null;
  let l = Fm(r, i),
    d =
      r.kind === "anchoredDrawing"
        ? Object.freeze({
            x: r.horizontalFrameOrigin,
            y: r.verticalFrameOrigin,
          })
        : null;
  return Object.freeze({
    id: r.drawingNodeId,
    pageIndex: a.pageIndex,
    x: a.x,
    y: a.y,
    width: a.width,
    height: a.height,
    kind: r.kind === "inlineDrawing" ? "inline" : "anchored",
    widthEmu: i.extentEmu.cx,
    heightEmu: i.extentEmu.cy,
    position: Bd(i),
    anchorFrameOrigin: d,
    transform: r.transform,
    ...l,
  });
}
function Ge(e) {
  return Math.round(e * Dr);
}
function Hn(e) {
  return e / Dr;
}
function Mm(e, t, n, r, o, a) {
  let i = Hn(e),
    l = Hn(t),
    d = i / l,
    u = n.includes("e") ? r : n.includes("w") ? -r : 0,
    h = n.includes("s") ? o : n.includes("n") ? -o : 0;
  if (((i = Math.max(1, i + u)), (l = Math.max(1, l + h)), a))
    if (n.length === 2) {
      let x = Math.max(i / Hn(e), l / Hn(t));
      ((i = Math.max(1, Hn(e) * x)), (l = Math.max(1, i / d)));
    } else
      n === "e" || n === "w"
        ? (l = Math.max(1, i / d))
        : (i = Math.max(1, l * d));
  return Object.freeze({ cx: Ge(i), cy: Ge(l) });
}
function mi(e, t, n) {
  return e.mode === "simple"
    ? Object.freeze({
        mode: "simple",
        horizontalEmu: (e.horizontalEmu ?? 0) + Ge(t),
        verticalEmu: (e.verticalEmu ?? 0) + Ge(n),
      })
    : Object.freeze({
        mode: "frame",
        ...(e.horizontalEmu !== void 0
          ? { horizontalEmu: e.horizontalEmu + Ge(t) }
          : {}),
        ...(e.verticalEmu !== void 0
          ? { verticalEmu: e.verticalEmu + Ge(n) }
          : {}),
        ...(e.relativeToH !== void 0 ? { relativeToH: e.relativeToH } : {}),
        ...(e.relativeToV !== void 0 ? { relativeToV: e.relativeToV } : {}),
      });
}
function Am(e, t) {
  let n = e.surface;
  return n
    ? n.publishedLayout().revision !== t.layoutRevision
      ? { ok: false, code: "notFound", reason: "stale layout revision" }
      : n.session.packageRevision() !== t.packageRevision
        ? { ok: false, code: "notFound", reason: "stale package revision" }
        : Dn(e, t.preconditions, {
            requireDrawing: true,
            drawingNodeId: t.drawingNodeId,
          })
    : { ok: false, code: "notFound", reason: "no document is loaded" };
}
function $d(e) {
  if (!e) return null;
  let t = e.formatting();
  return {
    bold: t.bold,
    italic: t.italic,
    underline: t.underline,
    strike: t.strikethrough,
    superscript: t.superscript,
    subscript: t.subscript,
    ...(t.color ? { color: { kind: "hex", value: t.color } } : {}),
    ...(t.highlight ? { highlight: t.highlight } : {}),
    ...(t.fontFamily ? { fontFamily: t.fontFamily } : {}),
    ...(t.fontSizeHalfPoints !== null
      ? { fontSizePt: t.fontSizeHalfPoints / 2 }
      : {}),
    ...(t.alignment ? { alignment: t.alignment } : {}),
    ...(t.styleId ? { styleId: t.styleId } : {}),
    ...(t.lineSpacing ? { lineSpacing: t.lineSpacing } : {}),
    ...(t.spaceBeforePt !== null ? { spaceBeforePt: t.spaceBeforePt } : {}),
    ...(t.spaceAfterPt !== null ? { spaceAfterPt: t.spaceAfterPt } : {}),
    ...(t.indent !== null ? { indent: t.indent } : {}),
  };
}
function gi(e) {
  if (!e) return null;
  let t = e.sectionPropertiesAt(e.state().selection.head.paragraphId);
  return {
    pageWidthTwips: t.pageSize.widthTwips,
    pageHeightTwips: t.pageSize.heightTwips,
    orientation: t.landscape ? "landscape" : "portrait",
    marginsTwips: {
      top: t.margins.topTwips,
      right: t.margins.rightTwips,
      bottom: t.margins.bottomTwips,
      left: t.margins.leftTwips,
    },
    gutterTwips: t.margins.gutterTwips,
  };
}
function hi(e) {
  if (!e) return null;
  let { anchor: t, head: n } = e.state().selection,
    r = e.session.paragraphAnchors(),
    o = r.paraIdByNode.get(t.paragraphId),
    a = r.paraIdByNode.get(n.paragraphId);
  if (o === void 0 || a === void 0) return null;
  let i = r.ordinalByNode.get(t.paragraphId) ?? 0,
    l = r.ordinalByNode.get(n.paragraphId) ?? 0;
  return l < i || (l === i && n.offset < t.offset)
    ? { from: { paraId: a }, to: { paraId: o } }
    : { from: { paraId: o }, to: { paraId: a } };
}
function Xd(e) {
  if (!e) return null;
  let t = e.hyperlinks.linkAtCaret();
  if (!t) return null;
  let n = e.session.paragraphAnchors().paraIdByNode.get(t.paragraphId);
  return n === void 0
    ? null
    : {
        href: t.href ?? "",
        range: { from: { paraId: n }, to: { paraId: n } },
        ...(t.tooltip !== void 0 ? { tooltip: t.tooltip } : {}),
      };
}
function Yd(e, t) {
  if (!e) return [];
  if (t !== void 0 && t.part !== "body") return [];
  let n = e.session.part(),
    r = e.session.paragraphAnchors();
  return d$2(n).map((o) => {
    let a = r.paraIdByNode.get(o.id),
      i = o.kind === "textValue" ? void 0 : i$2(o);
    return {
      ...(a !== void 0 ? { paraId: a } : {}),
      text: Gf(n, o.id) ?? "",
      ...(i !== void 0 ? { styleId: i } : {}),
    };
  });
}
function yi(e) {
  return e ? e.state().pageCount : 0;
}
function vi(e, t = "caret") {
  return e ? e.currentPage(t) : 1;
}
function Lm(e, t) {
  if (!An(e))
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason: "not a table command",
      },
    };
  let n = Ho(e, t);
  return n.can.ok
    ? { ok: true, tablePlan: n.plan }
    : {
        ok: false,
        refusal: { ok: false, code: n.can.code, reason: n.can.reason },
      };
}
function Hm(e, t) {
  return {
    command: e,
    part: t.session.part(),
    layout: t.layout(),
    storeRevision: t.session.revision(),
    selection: t.state().selection,
    cellSelection: t.state().cellSelection,
    themeColors: t.session.documentThemeColors(),
    editable: t.session.editable,
    viewing: t.editingMode() === "view",
  };
}
function Ho(e, t) {
  let n = jt(Hm(e, t));
  return n.ok
    ? { can: { ok: true }, plan: n }
    : { can: { ok: false, code: n.code, reason: n.reason }, plan: n };
}
function Nr(e, t, n, r) {
  if (r?.scope) {
    if (r.scope.kind === "all")
      return {
        ok: false,
        refusal: {
          ok: false,
          code: "unsupported",
          reason: "the all scope is read-only",
        },
      };
    if (r.scope.kind === "note" || r.scope.kind === "frame")
      return {
        ok: false,
        refusal: {
          ok: false,
          code: "unsupported",
          reason: `scope kind '${r.scope.kind}' is not supported`,
        },
      };
    if (r.scope.kind === "headerFooter") {
      let i = t?.activeScope?.() ?? { kind: "body" };
      if (i.kind !== "headerFooter" || i.rId !== r.scope.rId)
        return {
          ok: false,
          refusal: {
            ok: false,
            code: "unsupported",
            reason:
              "open that header or footer before dispatching against its scope",
          },
        };
    }
  }
  let o = Fr(e);
  if (!o.supported)
    return {
      ok: false,
      refusal: { ok: false, code: o.code ?? "unsupported", reason: o.reason },
    };
  if (!t)
    return {
      ok: false,
      refusal: { ok: false, code: "notFound", reason: "no document is loaded" },
    };
  if (o.mutating && (n === "view" || !t.session.editable))
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "locked",
        reason: "the document is read-only",
      },
    };
  if (e.type === "adjustIndent" && !t.canAdjustIndent(e.direction))
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason:
          e.direction === "decrease"
            ? "the selection is already at the outermost level"
            : "the selection cannot indent any further",
      },
    };
  if (e.type === "copy" || e.type === "cut" || e.type === "deleteText") {
    let { anchor: i, head: l } = t.state().selection;
    if (i.paragraphId === l.paragraphId && i.offset === l.offset)
      return {
        ok: false,
        refusal: {
          ok: false,
          code: "unsupported",
          reason: "nothing is selected",
        },
      };
  }
  if (
    e.type === "setParagraphStyle" &&
    !t.session.documentStyles().some((i) => i.type === "paragraph")
  )
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason: "this document defines no paragraph styles",
      },
    };
  if (e.type === "undo" && !t.session.canUndo())
    return {
      ok: false,
      refusal: { ok: false, code: "unsupported", reason: "nothing to undo" },
    };
  if (e.type === "redo" && !t.session.canRedo())
    return {
      ok: false,
      refusal: { ok: false, code: "unsupported", reason: "nothing to redo" },
    };
  if (e.type === "insertTable" && !t.canInsertTable(e.rows, e.cols))
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason:
          "a table can only be inserted at a caret in editable body, cell, or note text",
      },
    };
  if (e.type === "insertToc" && !t.canInsertToc())
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason:
          "a table of contents can only be inserted in the editable document body",
      },
    };
  if (e.type === "refreshToc" && !t.canRefreshToc(e.tocId))
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "notFound",
        reason: "there is no refreshable table of contents at the selection",
      },
    };
  if (
    e.type === "insertPageField" &&
    (t.activeScope?.() ?? { kind: "body" }).kind !== "headerFooter"
  )
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason: "insertPageField requires an open header or footer scope",
      },
    };
  if (
    e.type === "insertNote" &&
    (t.activeScope?.() ?? { kind: "body" }).kind !== "body"
  )
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "unsupported",
        reason: "insertNote requires body scope",
      },
    };
  if (e.type === "linkHeaderFooterToPrevious") {
    let i = t.headerFooterState?.();
    if ((e.sectionIndex ?? i?.sectionIndex ?? 0) === 0)
      return {
        ok: false,
        refusal: {
          ok: false,
          code: "invalidArgs",
          reason:
            "the first section cannot link to a previous header or footer",
        },
      };
  }
  if (An(e)) {
    let i = Lm(e, t);
    return i.ok ? { ok: true, tablePlan: i.tablePlan } : i;
  }
  let a = Hr(e, t);
  return a && !a.ok ? { ok: false, refusal: a } : { ok: true };
}
function Qd(e) {
  if (!e) return null;
  let t = e.state(),
    n = t.cellSelection,
    r = Rd(e.layout(), t.selection.head.paragraphId);
  return r
    ? {
        blockId: r.tableId,
        rowCount: r.rows,
        columnCount: r.columns,
        cell: {
          row: n ? n.rows.from : r.rowIndex,
          column: n ? n.columns.from : r.columnIndex,
        },
      }
    : null;
}
function bi(e) {
  if (!e) return null;
  let t = e.state(),
    n = t.cellSelection,
    r = Rd(e.layout(), t.selection.head.paragraphId);
  return r
    ? {
        rows: r.rows,
        columns: r.columns,
        rowIndex: n ? n.rows.from : r.rowIndex,
        columnIndex: n ? n.columns.from : r.columnIndex,
      }
    : null;
}
function Jd(e) {
  return e
    ? {
        ...(e.bold !== void 0 ? { bold: e.bold } : {}),
        ...(e.italic !== void 0 ? { italic: e.italic } : {}),
        ...(e.underline !== void 0 ? { underline: e.underline } : {}),
        ...(e.fontFamily ? { fontFamily: e.fontFamily } : {}),
        ...(e.fontSizePt !== void 0
          ? { fontSizeHalfPoints: Math.round(e.fontSizePt * 2) }
          : {}),
        ...(e.styleId ? { styleId: e.styleId } : {}),
        ...(e.alignment ? { alignment: e.alignment } : {}),
      }
    : null;
}
var ie = {
  undo: [
    "M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z",
  ],
  redo: [
    "M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z",
  ],
  print: [
    "M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z",
  ],
  file_download: [
    "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",
  ],
  file_upload: [
    "M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",
  ],
  format_bold: [
    "M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z",
  ],
  format_italic: [
    "M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z",
  ],
  format_underlined: [
    "M200-120v-80h560v80H200Zm123-223q-56-63-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63q-101 0-157-63Z",
  ],
  strikethrough_s: [
    "M486-160q-76 0-135-45t-85-123l88-38q14 48 48.5 79t85.5 31q42 0 76-20t34-64q0-18-7-33t-19-27h112q5 14 7.5 28.5T694-340q0 86-61.5 133T486-160ZM80-480v-80h800v80H80Zm402-326q66 0 115.5 32.5T674-674l-88 39q-9-29-33.5-52T484-710q-41 0-68 18.5T386-640h-96q2-69 54.5-117.5T482-806Z",
  ],
  superscript: [
    "M760-600v-80q0-17 11.5-28.5T800-720h80v-40H760v-40h120q17 0 28.5 11.5T920-760v40q0 17-11.5 28.5T880-680h-80v40h120v40H760ZM235-160l185-291-172-269h106l124 200h4l123-200h107L539-451l186 291H618L482-377h-4L342-160H235Z",
  ],
  subscript: [
    "M760-160v-80q0-17 11.5-28.5T800-280h80v-40H760v-40h120q17 0 28.5 11.5T920-320v40q0 17-11.5 28.5T880-240h-80v40h120v40H760Zm-525-80 185-291-172-269h106l124 200h4l123-200h107L539-531l186 291H618L482-457h-4L342-240H235Z",
  ],
  link: [
    "M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z",
  ],
  format_clear: [
    "m528-546-93-93-121-121h486v120H568l-40 94ZM792-56 460-388l-80 188H249l119-280L56-792l56-56 736 736-56 56Z",
  ],
  format_align_left: [
    "M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z",
  ],
  format_align_center: [
    "M120-120v-80h720v80H120Zm160-160v-80h400v80H280ZM120-440v-80h720v80H120Zm160-160v-80h400v80H280ZM120-760v-80h720v80H120Z",
  ],
  format_align_right: [
    "M120-760v-80h720v80H120Zm240 160v-80h480v80H360ZM120-440v-80h720v80H120Zm240 160v-80h480v80H360ZM120-120v-80h720v80H120Z",
  ],
  format_align_justify: [
    "M120-120v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z",
  ],
  format_line_spacing: [
    "M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z",
  ],
  format_list_bulleted: [
    "M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm-56.5-263.5Q120-687 120-720t23.5-56.5Q167-800 200-800t56.5 23.5Q280-753 280-720t-23.5 56.5Q233-640 200-640t-56.5-23.5Z",
  ],
  format_list_numbered: [
    "M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z",
  ],
  format_indent_increase: [
    "M120-120v-80h720v80H120Zm320-160v-80h400v80H440Zm0-160v-80h400v80H440Zm0-160v-80h400v80H440ZM120-760v-80h720v80H120Zm0 440v-320l160 160-160 160Z",
  ],
  format_indent_decrease: [
    "M120-120v-80h720v80H120Zm320-160v-80h400v80H440Zm0-160v-80h400v80H440Zm0-160v-80h400v80H440ZM120-760v-80h720v80H120Zm160 440L120-480l160-160v320Z",
  ],
  format_color_text: [
    "M80 0v-160h800V0H80Zm140-280 210-560h100l210 560h-96l-50-144H368l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z",
  ],
  ink_highlighter: [
    "M544-400 440-504 240-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-26 26H60l126-126-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L629-373 413-589Z",
  ],
  format_color_reset: [
    "M800-436q0 36-8 69t-22 63l-62-60q6-17 9-34.5t3-37.5q0-47-17.5-89T650-600L480-768l-88 86-56-56 144-142 226 222q44 42 69 99.5T800-436Zm-8 380L668-180q-41 29-88 44.5T480-120q-133 0-226.5-92.5T160-436q0-51 16-98t48-90L56-792l56-56 736 736-56 56ZM480-200q36 0 68.5-10t61.5-28L280-566q-21 32-30.5 64t-9.5 66q0 98 70 167t170 69Zm-37-204Zm110-116Z",
  ],
  arrow_drop_down: ["M480-360 280-560h400L480-360Z"],
  table: [
    "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm240-240H200v160h240v-160Zm80 0v160h240v-160H520Zm-80-80v-160H200v160h240Zm80 0h240v-160H520v160ZM200-680h560v-80H200v80Z",
  ],
  table_chart: [
    "M760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120ZM200-640h560v-120H200v120Zm100 80H200v360h100v-360Zm360 0v360h100v-360H660Zm-80 0H380v360h200v-360Z",
  ],
  grid_on: [
    "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z",
  ],
  table_rows: [
    "M760-200v-120H200v120h560Zm0-200v-160H200v160h560Zm0-240v-120H200v120h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",
  ],
  view_column: [
    "M121-280v-400q0-33 23.5-56.5T201-760h559q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H201q-33 0-56.5-23.5T121-280Zm79 0h133v-400H200v400Zm213 0h133v-400H413v400Zm213 0h133v-400H626v400Z",
  ],
  border_all: [
    "M120-120v-720h720v720H120Zm640-80v-240H520v240h240Zm0-560H520v240h240v-240Zm-560 0v240h240v-240H200Zm0 560h240v-240H200v240Z",
  ],
  select_all: [
    "M120-120v-720h720v720H120Zm640-80v-240H520v240h240Zm0-560H520v240h240v-240Zm-560 0v240h240v-240H200Zm0 560h240v-240H200v240Z",
  ],
  border_outer: [
    "M200-200h560v-560H200v560Zm-80 80v-720h720v720H120Zm160-320v-80h80v80h-80Zm160 160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 160v-80h80v80h-80Z",
  ],
  border_inner: [
    "M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm320 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm-160 0v-80h80v80h-80ZM440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z",
  ],
  border_clear: [
    "M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z",
  ],
  add: ["M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"],
  remove: ["M200-440v-80h560v80H200Z"],
  delete: [
    "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z",
  ],
  delete_sweep: [
    "M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440-200H200q-33 0-56.5-23.5T120-280v-360Zm80 0v360h240v-360H200Zm0 0v360-360Z",
  ],
  call_merge: [
    "m296-160-56-56 200-200v-269L337-582l-57-57 200-200 201 201-57 57-104-104v301L296-160Zm368 1L536-286l57-57 127 128-56 56Z",
  ],
  call_split: [
    "M440-160v-304L240-664v104h-80v-240h240v80H296l224 224v336h-80Zm154-376-58-58 128-126H560v-80h240v240h-80v-104L594-536Z",
  ],
  drag_indicator: [
    "M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z",
  ],
  image: [
    "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z",
  ],
  format_image_left: [
    "M120-280v-400h400v400H120Zm80-80h240v-240H200v240Zm-80-400v-80h720v80H120Zm480 160v-80h240v80H600Zm0 160v-80h240v80H600Zm0 160v-80h240v80H600ZM120-120v-80h720v80H120Z",
  ],
  format_image_right: [
    "M440-280v-400h400v400H440Zm80-80h240v-240H520v240ZM120-120v-80h720v80H120Zm0-160v-80h240v80H120Zm0-160v-80h240v80H120Zm0-160v-80h240v80H120Zm0-160v-80h720v80H120Z",
  ],
  horizontal_rule: ["M160-440v-80h640v80H160Z"],
  flip_to_back: [
    "M200-120q-33 0-56.5-23.5T120-200v-480h80v480h480v80H200Zm160-240v80q-33 0-56.5-23.5T280-360h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T360-840v80Zm80 480v-80h80v80h-80Zm0-480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 480v-80h80v80h-80Zm160-480v-80q33 0 56.5 23.5T840-760h-80Zm0 400h80q0 33-23.5 56.5T760-280v-80Zm0-80v-80h80v80h-80Zm0-160v-80h80v80h-80Z",
  ],
  flip_to_front: [
    "M360-280q-33 0-56.5-23.5T280-360v-400q0-33 23.5-56.5T360-840h400q33 0 56.5 23.5T840-760v400q0 33-23.5 56.5T760-280H360Zm0-80h400v-400H360v400ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z",
  ],
  open_with: [
    "M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z",
  ],
  tune: [
    "M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z",
  ],
  rotate_right: [
    "M522-80v-82q34-5 66.5-18t61.5-34l56 58q-42 32-88 51.5T522-80Zm-80 0Q304-98 213-199.5T122-438q0-75 28.5-140.5t77-114q48.5-48.5 114-77T482-798h6l-62-62 56-58 160 160-160 160-56-56 64-64h-8q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-162v82Zm322-134-58-56q21-29 34-61.5t18-66.5h82q-5 50-24.5 96T764-214Zm76-264h-82q-5-34-18-66.5T706-606l58-56q32 39 51 86t25 98Z",
  ],
  rotate_left: [
    "M440-80q-50-5-96-24.5T256-156l56-58q29 21 61.5 34t66.5 18v82Zm80 0v-82q104-15 172-93.5T760-438q0-117-81.5-198.5T480-718h-8l64 64-56 56-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-438q0 137-91 238.5T520-80ZM198-214q-32-42-51.5-88T122-398h82q5 34 18 66.5t34 61.5l-58 56Zm-76-264q6-51 25-98t51-86l58 56q-21 29-34 61.5T204-478h-82Z",
  ],
  swap_horiz: [
    "M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z",
  ],
  swap_vert: [
    "M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z",
  ],
  shapes: [
    "M600-360ZM320-242q10 1 19.5 1.5t20.5.5q11 0 20.5-.5T400-242v82h400v-400h-82q1-10 1.5-19.5t.5-20.5q0-11-.5-20.5T718-640h82q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400q-33 0-56.5-23.5T320-160v-82Zm40-78q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm0-80q83 0 141.5-58.5T560-600q0-83-58.5-141.5T360-800q-83 0-141.5 58.5T160-600q0 83 58.5 141.5T360-400Zm0-200Z",
  ],
  format_paint: [
    "M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h480v440q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v160h-80v-160h-40v80h-80v-80H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0 0v-80 80Z",
  ],
  expand_more: ["M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"],
  expand_less: ["m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"],
  border_top: [
    "M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h720v80H120Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z",
  ],
  border_bottom: [
    "M120-120v-80h720v80H120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z",
  ],
  border_left: [
    "M120-120v-720h80v720h-80Zm160 0v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z",
  ],
  border_right: [
    "M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-720h80v720h-80Z",
  ],
  border_horizontal: [
    "M120-120v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h720v60H120Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-330v-60h60v60h-60Zm0-165v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-330v-60h60v60h-60Zm0-165v-60h60v60h-60Z",
  ],
  border_vertical: [
    "M120-120v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-330v-60h60v60h-60Zm0-330v-60h60v60h-60Zm165 660v-720h60v720h-60Zm165 0v-60h60v60h-60Zm0-330v-60h60v60h-60Zm0-330v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Z",
  ],
  padding: [
    "M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
  ],
  text_rotation_none: [
    "M160-200v-80h528l-42-42 56-56 138 138-138 138-56-56 42-42H160Zm116-200 164-440h80l164 440h-76l-38-112H392l-40 112h-76Zm138-176h132l-64-182h-4l-64 182Z",
  ],
  wrap_text: [
    "M588-132 440-280l148-148 56 58-50 50h96q29 0 49.5-20.5T760-390q0-29-20.5-49.5T690-460H160v-80h530q63 0 106.5 43.5T840-390q0 63-43.5 106.5T690-240h-96l50 50-56 58ZM160-240v-80h200v80H160Zm0-440v-80h640v80H160Z",
  ],
  height: [
    "M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z",
  ],
  fit_width: [
    "M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z",
  ],
  settings: [
    "m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z",
  ],
  border_color: [
    "M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z",
  ],
  format_color_fill: [
    "m247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z",
  ],
  vertical_align_top: [
    "M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z",
  ],
  vertical_align_center: [
    "M440-80v-168l-64 64-56-56 160-160 160 160-56 56-64-64v168h-80ZM160-440v-80h640v80H160Zm320-120L320-720l56-56 64 64v-168h80v168l64-64 56 56-160 160Z",
  ],
  vertical_align_bottom: [
    "M160-120v-80h640v80H160Zm320-160L280-480l56-56 104 104v-408h80v408l104-104 56 56-200 200Z",
  ],
  line_weight: [
    "M120-160v-40h720v40H120Zm0-120v-80h720v80H120Zm0-160v-120h720v120H120Zm0-200v-160h720v160H120Z",
  ],
  keyboard_arrow_up: ["M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"],
  keyboard_arrow_down: [
    "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z",
  ],
  keyboard_arrow_left: [
    "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z",
  ],
  keyboard_arrow_right: [
    "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z",
  ],
  more_vert: [
    "M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",
  ],
  page_break: [
    "M120-440v-80h160v80H120Zm200 0v-80h160v80H320Zm200 0v-80h160v80H520Zm200 0v-80h120v80H720ZM240-120q-33 0-56.5-23.5T160-200v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-120H240Zm-80-520v-120q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v120h-80v-120H240v120h-80Z",
  ],
  branding_watermark: [
    "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm320-60q66 0 113-37t47-93q0-29-13-58t-34-55q-21-26-50-49t-50-31q-21 8-50 31t-50 49q-21 26-34 55t-13 58q0 56 47 93t140 37Z",
  ],
  arrow_back: [
    "M313-440l224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
  ],
  search: [
    "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
  ],
  toc: ["M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"],
  done_all: [
    "M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 57 57-425 424Zm0-226-57-56 198-198 57 56-198 198Z",
  ],
  check_circle: [
    "m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z",
  ],
  chat_bubble_outline: [
    "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
  ],
  chat_bubble_check: [
    "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
  ],
  check: ["M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"],
  close: [
    "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
  ],
  add_comment: [
    "M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
  ],
  comment: [
    "M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
  ],
  edit_note: [
    "M160-400h280v-80H160v80Zm0-160h440v-80H160v80Zm0-160h440v-80H160v80Zm360 360v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z",
  ],
  rate_review: [
    "M240-400h122l200-200q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L240-522v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
  ],
  visibility: [
    "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z",
  ],
  format_textdirection_l_to_r: [
    "M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm0-280v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80ZM680-80l-56-56 64-64H120v-80h568l-64-64 56-56 160 160L680-80Z",
  ],
  format_textdirection_r_to_l: [
    "M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm-88 160 64 64-56 56-160-160 160-160 56 56-64 64h568v80H272Zm88-440v-160q-33 0-56.5 23.5T280-720q0 33 23.5 56.5T360-640Zm0-80Z",
  ],
  "agent-sparkle": [
    "m760-600-50-110-110-50 110-50 50-110 50 110 110 50-110 50-50 110Zm0 560-50-110-110-50 110-50 50-110 50 110 110 50-110 50-50 110ZM360-160 260-380 40-480l220-100 100-220 100 220 220 100-220 100-100 220Zm0-194 40-86 86-40-86-40-40-86-40 86-86 40 86 40 40 86Zm0-126Z",
  ],
};
var Nn = {
    activeTarget: "all",
    spec: { style: "single", size: 8, color: { kind: "hex", value: "000000" } },
  },
  tc = [
    "table.borderTarget",
    "table.borderColor",
    "table.borderStyle",
    "table.borderWidth",
    "table.cellFill",
  ];
function xi(e) {
  return createT(en$1)(e);
}
function Do(e) {
  return tc.includes(e);
}
function _m(e) {
  return e != null;
}
var nc = [
    { value: "all", icon: "border_all", labelKey: "table.borders.all" },
    {
      value: "outside",
      icon: "border_outer",
      labelKey: "table.borders.outside",
    },
    { value: "inside", icon: "border_inner", labelKey: "table.borders.inside" },
    { value: "top", icon: "border_top", labelKey: "table.borders.top" },
    {
      value: "bottom",
      icon: "border_bottom",
      labelKey: "table.borders.bottom",
    },
    { value: "left", icon: "border_left", labelKey: "table.borders.left" },
    { value: "right", icon: "border_right", labelKey: "table.borders.right" },
    { value: "none", icon: "border_clear", labelKey: "table.borders.none" },
  ],
  rc = [
    {
      value: "single",
      labelKey: "table.borderStyles.single",
      previewClass: "docx-table-line--single",
    },
    {
      value: "dashed",
      labelKey: "table.borderStyles.dashed",
      previewClass: "docx-table-line--dashed",
    },
    {
      value: "dotted",
      labelKey: "table.borderStyles.dotted",
      previewClass: "docx-table-line--dotted",
    },
    {
      value: "double",
      labelKey: "table.borderStyles.double",
      previewClass: "docx-table-line--double",
    },
    {
      value: "triple",
      labelKey: "table.borderStyles.triple",
      previewClass: "docx-table-line--triple",
    },
    {
      value: "thick",
      labelKey: "table.borderStyles.thick",
      previewClass: "docx-table-line--thick",
    },
  ],
  Zm = [
    { size: 4, labelKey: "table.borderWidths.halfPt", previewThickness: 0.5 },
    { size: 8, labelKey: "table.borderWidths.onePt", previewThickness: 1 },
    {
      size: 12,
      labelKey: "table.borderWidths.oneHalfPt",
      previewThickness: 1.5,
    },
    { size: 16, labelKey: "table.borderWidths.twoPt", previewThickness: 2 },
    { size: 24, labelKey: "table.borderWidths.threePt", previewThickness: 3 },
  ];
function Bm(e) {
  return (
    e === "all" ||
    e === "outside" ||
    e === "inside" ||
    e === "top" ||
    e === "bottom" ||
    e === "left" ||
    e === "right"
  );
}
function qm(e) {
  return e === "none" || Bm(e);
}
function ec(e) {
  if (!e || typeof e != "object") return false;
  let t = e.kind;
  return t === "hex" || t === "theme" || t === "auto";
}
function zm(e) {
  return rc.some((t) => t.value === e);
}
function mn(e, t, n) {
  switch (t) {
    case "table.borderTarget":
      return qm(n)
        ? n === "none"
          ? {
              command: {
                type: "setTableBorders",
                scope: "none",
                target: e.activeTarget,
              },
              nextDraft: e,
            }
          : {
              command: { type: "setTableBorders", scope: n, spec: e.spec },
              nextDraft: { activeTarget: n, spec: e.spec },
            }
        : null;
    case "table.borderColor": {
      if (!ec(n)) return null;
      let r = { ...e.spec, color: n };
      return {
        command: { type: "setTableBorders", scope: e.activeTarget, spec: r },
        nextDraft: { activeTarget: e.activeTarget, spec: r },
      };
    }
    case "table.borderStyle": {
      if (!zm(n)) return null;
      let r = { ...e.spec, style: n };
      return {
        command: { type: "setTableBorders", scope: e.activeTarget, spec: r },
        nextDraft: { activeTarget: e.activeTarget, spec: r },
      };
    }
    case "table.borderWidth": {
      if (typeof n != "number" || !Number.isInteger(n)) return null;
      let r = { ...e.spec, size: n };
      return {
        command: { type: "setTableBorders", scope: e.activeTarget, spec: r },
        nextDraft: { activeTarget: e.activeTarget, spec: r },
      };
    }
    case "table.cellFill":
      return n !== null && !ec(n)
        ? null
        : { command: { type: "setCellFill", color: n }, nextDraft: e };
    default:
      return null;
  }
}
function Ii(e, t = Nn) {
  switch (e) {
    case "table.borderTarget":
      return { type: "setTableBorders", scope: t.activeTarget, spec: t.spec };
    case "table.borderColor":
      return mn(t, e, { kind: "hex", value: "000000" })?.command ?? null;
    case "table.borderStyle":
      return mn(t, e, "single")?.command ?? null;
    case "table.borderWidth":
      return mn(t, e, 8)?.command ?? null;
    case "table.cellFill":
      return { type: "setCellFill", color: { kind: "hex", value: "FFFF00" } };
    default:
      return null;
  }
}
function Km(e) {
  return nc.find((n) => n.value === e)?.labelKey ?? "table.borders.all";
}
function jm(e) {
  return ie[e];
}
function _n(e) {
  return e.surface ?? null;
}
var Um = {
  "review.comments": { type: "toggleReviewPane" },
  "history.undo": { type: "undo" },
  "history.redo": { type: "redo" },
  "text.bold": { type: "toggleMark", mark: "bold" },
  "text.italic": { type: "toggleMark", mark: "italic" },
  "text.underline": { type: "toggleMark", mark: "underline" },
  "text.strike": { type: "toggleMark", mark: "strike" },
  "script.super": { type: "toggleMark", mark: "superscript" },
  "script.sub": { type: "toggleMark", mark: "subscript" },
  "format.clear": { type: "clearFormatting" },
  "alignment.left": { type: "setAlignment", align: "left" },
  "alignment.center": { type: "setAlignment", align: "center" },
  "alignment.right": { type: "setAlignment", align: "right" },
  "alignment.justify": { type: "setAlignment", align: "justify" },
  "list.bullet": { type: "toggleList", kind: "bullet" },
  "list.numbered": { type: "toggleList", kind: "ordered" },
  "list.indent": { type: "adjustIndent", direction: "increase" },
  "list.outdent": { type: "adjustIndent", direction: "decrease" },
  "insert.footnote": { type: "insertNote", noteKind: "footnote" },
  "insert.endnote": { type: "insertNote", noteKind: "endnote" },
  "insert.pageNumber": { type: "insertPageField", field: "PAGE" },
  "insert.totalPages": { type: "insertPageField", field: "NUMPAGES" },
  "insert.sectionPages": { type: "insertPageField", field: "SECTIONPAGES" },
  "insert.pageXofY": { type: "insertPageField", field: "PAGE_X_OF_Y" },
  "insert.pageBreak": { type: "insertBreak", kind: "page" },
  "insert.sectionBreakNextPage": { type: "insertBreak", kind: "section" },
  "insert.toc": { type: "insertToc" },
  "contentControl.remove": { type: "removeContentControl" },
};
function Vm(e) {
  return ac[e] ?? null;
}
var oc = Uint8Array.from(
    atob(
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    ),
    (e) => e.charCodeAt(0),
  ),
  ac = {
    "text.link": { type: "insertHyperlink", href: "https://example.com" },
    "image.insert": {
      type: "insertImage",
      data: oc,
      mime: "image/png",
      widthPoints: 72,
      heightPoints: 72,
    },
    "image.properties": { type: "setImageProperties", description: "probe" },
    "table.insert": { type: "insertTable", rows: 1, cols: 1 },
    "file.pageSetup": { type: "setPageSetup", orientation: "portrait" },
  };
function No(e) {
  return Um[e] ?? null;
}
var Wm = {
    "font.family": { mark: "fontFamily", attr: "family" },
    "font.size": { mark: "fontSize", attr: "val" },
    "text.color": { mark: "color", attr: "val" },
    "text.highlight": { mark: "highlight", attr: "val" },
  },
  Gm = {
    "font.family": "Arial",
    "font.size": 22,
    "text.color": "000000",
    "text.highlight": "yellow",
    "styles.style": "Normal",
    "list.lineSpacing": 1,
    "image.wrap": "square",
    "image.altText": "probe alt text",
  };
function ic(e, t, n) {
  return mn(n, e, t)?.command ?? null;
}
function _o(e, t) {
  if (e === "review.editingMode") return { type: "setEditingMode", mode: t };
  if (e === "styles.style") return { type: "setParagraphStyle", styleId: t };
  if (e === "list.lineSpacing")
    return { type: "setLineSpacing", rule: "multiple", value: t };
  if (Do(e)) return ic(e, t, Nn);
  if (e === "image.wrap")
    return typeof t != "string" || !Xa$1.includes(t)
      ? null
      : { type: "setImageWrapType", target: t };
  if (e === "image.altText")
    return typeof t != "string"
      ? null
      : { type: "setImageProperties", description: t };
  let n = Wm[e];
  return n
    ? { type: "setMarkAttr", mark: n.mark, attr: n.attr, value: t }
    : null;
}
function sc(e, t, n = Nn) {
  if (!e)
    return {
      id: t,
      enabled: false,
      disabledReason: "editor is not ready",
      active: false,
    };
  let r = Ii(t, n);
  if (!r)
    return {
      id: t,
      enabled: false,
      disabledReason: "not wired to an editor command",
      active: false,
    };
  let o = e.can(r);
  return o.ok
    ? { id: t, enabled: true, disabledReason: null, active: false }
    : { id: t, enabled: false, disabledReason: o.reason, active: false };
}
function lc(e, t) {
  if (!e)
    return {
      id: t,
      enabled: false,
      disabledReason: "editor is not ready",
      active: false,
    };
  if (Do(t)) return sc(e, t);
  if (t === "review.editingMode") {
    let a = e.getEditingMode?.() ?? "editing",
      i = e.can(_o(t, a === "editing" ? "suggesting" : "editing"));
    return {
      id: t,
      enabled: i.ok,
      disabledReason: i.ok ? null : i.reason,
      active: false,
      value: a,
    };
  }
  if (t === "contentControl.showAll" || t === "contentControl.formFill") {
    let a = _n(e),
      i = a?.state().contentControls,
      l =
        t === "contentControl.showAll"
          ? (i?.showAll ?? false)
          : (i?.formFill ?? false);
    return {
      id: t,
      enabled: a !== null,
      disabledReason: a ? null : "editor is not ready",
      active: l,
    };
  }
  if (t === "contentControl.inspector") {
    let a = _n(e);
    return a
      ? a.state().contentControls.activeControlId
        ? { id: t, enabled: true, disabledReason: null, active: false }
        : {
            id: t,
            enabled: false,
            disabledReason: "no content control at the selection",
            active: false,
          }
      : {
          id: t,
          enabled: false,
          disabledReason: "editor is not ready",
          active: false,
        };
  }
  let n = No(t);
  if (!n) {
    let a = Gm[t];
    if (a !== void 0) {
      let l = _o(t, a);
      if (!l)
        return {
          id: t,
          enabled: false,
          disabledReason: "not wired to an editor command",
          active: false,
        };
      let d = e.can(l),
        u = e.getSelectedImage?.() ?? null,
        h =
          t === "image.wrap"
            ? u?.wrap
            : t === "image.altText"
              ? u?.description
              : void 0;
      return d.ok
        ? {
            id: t,
            enabled: true,
            disabledReason: null,
            active: false,
            ...(h !== void 0 ? { value: h } : {}),
          }
        : {
            id: t,
            enabled: false,
            disabledReason: d.reason,
            active: false,
            ...(h !== void 0 ? { value: h } : {}),
          };
    }
    let i = ac[t];
    if (i) {
      if (t === "image.insert" && i.type === "insertImage") {
        let d =
          e.canExecuteImageCommand?.({
            type: "insertImage",
            data: oc,
            mime: "image/png",
            widthPoints: 72,
            heightPoints: 72,
          }) ?? e.can(i);
        return d.ok
          ? { id: t, enabled: true, disabledReason: null, active: false }
          : { id: t, enabled: false, disabledReason: d.reason, active: false };
      }
      if (t === "image.properties" && i.type === "setImageProperties") {
        let d = e.can(i);
        return d.ok
          ? { id: t, enabled: true, disabledReason: null, active: false }
          : { id: t, enabled: false, disabledReason: d.reason, active: false };
      }
      if (t === "table.insert" && i.type === "insertTable") {
        let d = e.can(i);
        return d.ok
          ? { id: t, enabled: true, disabledReason: null, active: false }
          : { id: t, enabled: false, disabledReason: d.reason, active: false };
      }
      let l = e.can(i);
      if (!l.ok)
        return {
          id: t,
          enabled: false,
          disabledReason: l.reason,
          active: false,
        };
    }
    return t === "file.save"
      ? {
          id: t,
          enabled: false,
          disabledReason: "save is not a command; run it with runSave(editor)",
          active: false,
        }
      : t === "file.open"
        ? {
            id: t,
            enabled: false,
            disabledReason:
              "open is not a command; run it with editor.load(bytes)",
            active: false,
          }
        : {
            id: t,
            enabled: false,
            disabledReason: "not wired to an editor command",
            active: false,
          };
  }
  let r = e.can(n),
    o = e.isActive?.(n) ?? false;
  return r.ok
    ? { id: t, enabled: true, disabledReason: null, active: o }
    : { id: t, enabled: false, disabledReason: r.reason, active: o };
}
function $m(e, t) {
  return t.map((n) => lc(e, n));
}
function Xm(e, t, n, r) {
  if (!e)
    return {
      result: { ok: false, code: "unsupported", reason: "editor is not ready" },
      nextDraft: null,
    };
  let o = mn(r, t, n);
  if (!o)
    return {
      result: {
        ok: false,
        code: "unsupported",
        reason: "invalid table chrome value",
      },
      nextDraft: null,
    };
  let a = e.can(o.command);
  if (!a.ok)
    return {
      result: { ok: false, code: a.code, reason: a.reason },
      nextDraft: null,
    };
  let i = e.exec(o.command);
  return i.ok
    ? { result: i, nextDraft: o.nextDraft }
    : { result: i, nextDraft: null };
}
function Ym(e, t, n) {
  if (!e)
    return { ok: false, code: "unsupported", reason: "editor is not ready" };
  if (t === "contentControl.showAll") {
    let a = _n(e);
    return a
      ? (a.contentControls.setShowAll(!a.contentControls.showAll()),
        { ok: true, changed: false })
      : { ok: false, code: "unsupported", reason: "editor is not ready" };
  }
  if (t === "contentControl.formFill") {
    let a = _n(e);
    return a
      ? (a.contentControls.setFormFill(!a.contentControls.formFill()),
        { ok: true, changed: false })
      : { ok: false, code: "unsupported", reason: "editor is not ready" };
  }
  if (t === "contentControl.inspector") {
    let a = _n(e);
    return a
      ? a.state().contentControls.activeControlId
        ? { ok: true, changed: false }
        : {
            ok: false,
            code: "notFound",
            reason: "no content control at the selection",
          }
      : { ok: false, code: "unsupported", reason: "editor is not ready" };
  }
  if (t === "contentControl.remove") {
    let a = _n(e);
    if (!a)
      return { ok: false, code: "unsupported", reason: "editor is not ready" };
    let i = a.state().contentControls.activeControlId;
    if (!i)
      return {
        ok: false,
        code: "notFound",
        reason: "no content control at the selection",
      };
    let l = a.contentControls.disabledReason(i, "remove");
    return l
      ? { ok: false, code: l === "bound" ? "bound" : "locked", reason: l }
      : a.contentControls.remove(i)
        ? { ok: true, changed: true }
        : {
            ok: false,
            code: a.state().lastRejection ?? "unsupported",
            reason:
              a.state().lastRejection ?? "removeContentControl was refused",
          };
  }
  let r = n === void 0 ? No(t) : (_o(t, n) ?? No(t));
  if (!r)
    return n !== void 0
      ? {
          ok: false,
          code: "unsupported",
          reason: "invalid value for toolbar command",
        }
      : t === "file.save"
        ? {
            ok: false,
            code: "unsupported",
            reason: "save is not a command; run it with runSave(editor)",
          }
        : t === "file.open"
          ? {
              ok: false,
              code: "unsupported",
              reason: "open is not a command; run it with editor.load(bytes)",
            }
          : {
              ok: false,
              code: "unsupported",
              reason: "not wired to an editor command",
            };
  let o = e.can(r);
  return o.ok ? e.exec(r) : { ok: false, code: o.code, reason: o.reason };
}
function Qm(e) {
  return e ? e.save() : Promise.reject(new Error("editor is not ready"));
}
function Jm(e, t) {
  if (!e) return { enabled: false, disabledReason: "editor is not ready" };
  let n = Ho(t, e);
  return n.can.ok
    ? { enabled: true, disabledReason: null }
    : { enabled: false, disabledReason: n.can.reason };
}
function eg(e, t) {
  if (!e)
    return { ok: false, code: "unsupported", reason: "editor is not ready" };
  let n = e.can(t);
  return n.ok ? e.exec(t) : { ok: false, code: n.code, reason: n.reason };
}
var Si = [
    {
      id: "history",
      labelKey: "formattingBar.groups.history",
      controls: [
        {
          id: "undo",
          labelKey: "formattingBar.undoShortcut",
          paths: ie.undo,
          state: { kind: "command" },
        },
        {
          id: "redo",
          labelKey: "formattingBar.redoShortcut",
          paths: ie.redo,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "zoom",
      labelKey: "formattingBar.groups.zoom",
      controls: [
        {
          id: "level",
          shape: "stepper",
          valueText: "100%",
          labelKey: "formattingBar.groups.zoom",
          paths: null,
          valueKey: "zoom.zoomLevel",
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "styles",
      labelKey: "formattingBar.groups.styles",
      controls: [
        {
          id: "style",
          shape: "dropdown",
          labelKey: "styles.selectAriaLabel",
          paths: null,
          valueKey: "styles.normalText",
          state: { kind: "value" },
        },
      ],
    },
    {
      id: "font",
      labelKey: "formattingBar.groups.font",
      controls: [
        {
          id: "family",
          shape: "dropdown",
          labelKey: "font.selectAriaLabel",
          paths: null,
          valueKey: "font.sansSerif",
          state: { kind: "value" },
        },
        {
          id: "size",
          shape: "stepper",
          valueText: "11",
          labelKey: "fontSize.listLabel",
          paths: null,
          valueKey: "fontSize.label",
          state: { kind: "value" },
        },
      ],
    },
    {
      id: "text",
      labelKey: "formattingBar.groups.textFormatting",
      controls: [
        {
          id: "bold",
          labelKey: "formattingBar.boldShortcut",
          paths: ie.format_bold,
          state: { kind: "command" },
        },
        {
          id: "italic",
          labelKey: "formattingBar.italicShortcut",
          paths: ie.format_italic,
          state: { kind: "command" },
        },
        {
          id: "underline",
          labelKey: "formattingBar.underlineShortcut",
          paths: ie.format_underlined,
          state: { kind: "command" },
        },
        {
          id: "strike",
          labelKey: "formattingBar.strikethrough",
          paths: ie.strikethrough_s,
          state: { kind: "command" },
        },
        {
          id: "color",
          shape: "colorSplit",
          swatch: "#ff0000",
          labelKey: "formattingBar.fontColor",
          paths: ie.format_color_text,
          state: { kind: "value" },
        },
        {
          id: "highlight",
          shape: "colorSplit",
          swatch: "#ffff00",
          labelKey: "formattingBar.highlightColor",
          paths: ie.ink_highlighter,
          state: { kind: "value" },
        },
        {
          id: "link",
          labelKey: "formattingBar.insertLinkShortcut",
          paths: ie.link,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "script",
      labelKey: "formattingBar.groups.script",
      controls: [
        {
          id: "super",
          labelKey: "formattingBar.superscript",
          paths: ie.superscript,
          state: { kind: "command" },
        },
        {
          id: "sub",
          labelKey: "formattingBar.subscript",
          paths: ie.subscript,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "alignment",
      labelKey: "formattingBar.groups.alignment",
      controls: [
        {
          id: "left",
          labelKey: "alignment.alignLeft",
          paths: ie.format_align_left,
          state: { kind: "command" },
        },
        {
          id: "center",
          labelKey: "alignment.center",
          paths: ie.format_align_center,
          state: { kind: "command" },
        },
        {
          id: "right",
          labelKey: "alignment.alignRight",
          paths: ie.format_align_right,
          state: { kind: "command" },
        },
        {
          id: "justify",
          labelKey: "alignment.justify",
          paths: ie.format_align_justify,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "list",
      labelKey: "formattingBar.groups.listFormatting",
      controls: [
        {
          id: "bullet",
          labelKey: "lists.bulletList",
          paths: ie.format_list_bulleted,
          state: { kind: "command" },
        },
        {
          id: "numbered",
          labelKey: "lists.numberedList",
          paths: ie.format_list_numbered,
          state: { kind: "command" },
        },
        {
          id: "outdent",
          labelKey: "lists.decreaseIndent",
          paths: ie.format_indent_decrease,
          state: { kind: "command" },
        },
        {
          id: "indent",
          labelKey: "lists.increaseIndent",
          paths: ie.format_indent_increase,
          state: { kind: "command" },
        },
        {
          id: "lineSpacing",
          shape: "dropdown",
          labelKey: "lineSpacing.label",
          paths: ie.format_line_spacing,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "format",
      labelKey: "formattingBar.clearFormatting",
      controls: [
        {
          id: "clear",
          labelKey: "formattingBar.clearFormatting",
          paths: ie.format_clear,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "review",
      labelKey: "formattingBar.commentsAndChanges",
      controls: [
        {
          id: "comments",
          shape: "icon",
          labelKey: "formattingBar.commentsAndChanges",
          paths: ie.comment,
          state: { kind: "command" },
        },
        {
          id: "editingMode",
          shape: "dropdown",
          labelKey: "editingMode.label",
          valueKey: "editingMode.editing",
          paths: ie.edit_note,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "contentControl",
      labelKey: "contentControl.group",
      contextual: true,
      controls: [
        {
          id: "showAll",
          labelKey: "contentControl.showAll",
          paths: ie.visibility,
          state: { kind: "command" },
        },
        {
          id: "formFill",
          labelKey: "contentControl.formFill",
          paths: ie.edit_note,
          state: { kind: "command" },
        },
        {
          id: "inspector",
          labelKey: "contentControl.inspector",
          paths: ie.tune,
          state: { kind: "command" },
        },
        {
          id: "remove",
          labelKey: "contentControl.remove",
          paths: ie.delete,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "image",
      labelKey: "formattingBar.groups.image",
      contextual: true,
      controls: [
        {
          id: "insert",
          labelKey: "toolbar.image",
          paths: ie.image,
          state: { kind: "command" },
        },
        {
          id: "properties",
          labelKey: "formattingBar.imagePropertiesShortcut",
          paths: ie.tune,
          state: { kind: "command" },
        },
        {
          id: "wrap",
          shape: "dropdown",
          labelKey: "formattingBar.imageWrap",
          paths: ie.wrap_text,
          valueKey: "imageWrap.inline",
          state: { kind: "value" },
        },
        {
          id: "altText",
          shape: "dropdown",
          labelKey: "formattingBar.altText",
          paths: null,
          valueKey: "imageProperties.altText",
          state: { kind: "value" },
        },
      ],
    },
    {
      id: "table",
      labelKey: "formattingBar.groups.table",
      contextual: true,
      controls: [
        {
          id: "insert",
          labelKey: "toolbar.table",
          paths: ie.table,
          state: { kind: "command" },
        },
        {
          id: "borderTarget",
          shape: "dropdown",
          labelKey: "table.borders.tooltip",
          paths: ie.border_all,
          state: { kind: "value" },
        },
        {
          id: "borderColor",
          shape: "colorSplit",
          swatch: "#000000",
          labelKey: "table.borderColor",
          paths: ie.border_color,
          state: { kind: "value" },
        },
        {
          id: "borderStyle",
          shape: "dropdown",
          labelKey: "table.borders.styleAriaLabel",
          paths: ie.border_horizontal,
          state: { kind: "value" },
        },
        {
          id: "borderWidth",
          shape: "dropdown",
          labelKey: "table.borderWidth",
          paths: ie.line_weight,
          state: { kind: "value" },
        },
        {
          id: "cellFill",
          shape: "colorSplit",
          swatch: "#ffffff",
          labelKey: "table.cellFillColor",
          paths: ie.format_color_fill,
          state: { kind: "value" },
        },
      ],
    },
    {
      id: "file",
      labelKey: "toolbar.file",
      contextual: true,
      controls: [
        {
          id: "open",
          labelKey: "toolbar.open",
          paths: ie.file_upload,
          state: { kind: "load" },
        },
        {
          id: "save",
          labelKey: "toolbar.saveShortcut",
          paths: ie.file_download,
          state: { kind: "save" },
        },
        {
          id: "pageSetup",
          labelKey: "toolbar.pageSetup",
          paths: ie.settings,
          state: { kind: "command" },
        },
      ],
    },
    {
      id: "insert",
      labelKey: "toolbar.insert",
      contextual: true,
      controls: [
        {
          id: "footnote",
          labelKey: "toolbar.insertFootnote",
          paths: ie.superscript,
          state: { kind: "command" },
        },
        {
          id: "endnote",
          labelKey: "toolbar.insertEndnote",
          paths: ie.edit_note,
          state: { kind: "command" },
        },
        {
          id: "pageNumber",
          labelKey: "headerFooter.insertPageNumber",
          paths: ie.format_list_numbered,
          state: { kind: "command" },
        },
        {
          id: "totalPages",
          labelKey: "headerFooter.insertTotalPages",
          paths: ie.format_list_numbered,
          state: { kind: "command" },
        },
        {
          id: "sectionPages",
          labelKey: "headerFooter.insertSectionPages",
          paths: ie.format_list_numbered,
          state: { kind: "command" },
        },
        {
          id: "pageXofY",
          labelKey: "headerFooter.insertPageXofY",
          paths: ie.format_list_numbered,
          state: { kind: "command" },
        },
        {
          id: "pageBreak",
          labelKey: "toolbar.pageBreak",
          paths: ie.page_break,
          state: { kind: "command" },
        },
        {
          id: "sectionBreakNextPage",
          labelKey: "toolbar.sectionBreakNextPage",
          paths: ie.horizontal_rule,
          state: { kind: "command" },
        },
        {
          id: "sectionBreakContinuous",
          labelKey: "toolbar.sectionBreakContinuous",
          paths: ie.border_horizontal,
          state: { kind: "command" },
        },
        {
          id: "toc",
          labelKey: "toolbar.tableOfContents",
          paths: ie.toc,
          state: { kind: "command" },
        },
      ],
    },
  ],
  dc = Si;
function tg(e, t) {
  return `${e.id}.${t.id}`;
}
function cc() {
  return dc.filter((e) => !e.contextual);
}
function ng(e) {
  let t = cc();
  if (!e) return t;
  let n = dc.find((r) => r.id === "image");
  return n ? [...t, n] : t;
}
var uc = [
  {
    id: "file",
    labelKey: "toolbar.file",
    entries: [
      { kind: "item", slot: "file.open", shortcutKey: "toolbar.openShortcut" },
      {
        kind: "item",
        slot: "file.save",
        labelKey: "toolbar.save",
        shortcutKey: "toolbar.saveShortcut",
      },
      { kind: "separator" },
      { kind: "item", slot: "file.pageSetup" },
    ],
  },
  {
    id: "format",
    labelKey: "toolbar.format",
    entries: [
      { kind: "item", slot: "text.bold", labelKey: "formattingBar.bold" },
      { kind: "item", slot: "text.italic", labelKey: "formattingBar.italic" },
      {
        kind: "item",
        slot: "text.underline",
        labelKey: "formattingBar.underline",
      },
      { kind: "item", slot: "text.strike" },
      { kind: "separator" },
      { kind: "item", slot: "alignment.left" },
      { kind: "item", slot: "alignment.center" },
      { kind: "item", slot: "alignment.right" },
      { kind: "item", slot: "alignment.justify" },
      { kind: "separator" },
      { kind: "item", slot: "format.clear" },
    ],
  },
  {
    id: "insert",
    labelKey: "toolbar.insert",
    entries: [
      { kind: "item", slot: "table.insert", picker: "tableGrid" },
      { kind: "separator" },
      { kind: "item", slot: "insert.footnote" },
      { kind: "item", slot: "insert.endnote" },
      { kind: "separator" },
      {
        kind: "submenu",
        labelKey: "toolbar.break",
        paths: ie.page_break,
        items: [
          { kind: "item", slot: "insert.pageBreak" },
          { kind: "item", slot: "insert.sectionBreakNextPage" },
          { kind: "item", slot: "insert.sectionBreakContinuous" },
        ],
      },
      { kind: "item", slot: "insert.toc" },
    ],
  },
  { id: "help", labelKey: "toolbar.help", entries: [] },
];
function rg() {
  let e = [],
    t = (n) => {
      for (let r of n)
        r.kind === "item" ? e.push(r.slot) : r.kind === "submenu" && t(r.items);
    };
  for (let n of uc) t(n.entries);
  return e;
}
function og() {
  return Si.reduce((e, t) => e + t.controls.length, 0);
}
var ag = "formattingBar.unavailableInPreview";
var ki = "docx-field-atom--active",
  ig = "docx-field-atom";
function Ti(e, t) {
  for (let r of e.querySelectorAll(`.${ki}`)) r.classList.remove(ki);
  if (!t) return;
  let n = e.querySelectorAll(`.${ig}`);
  for (let r of n) {
    if (r.dataset.paragraphId !== t.paragraphId) continue;
    let o = Number(r.dataset.start),
      a = Number(r.dataset.end);
    !Number.isFinite(o) ||
      !Number.isFinite(a) ||
      t.offset < o ||
      t.offset > a ||
      r.classList.add(ki);
  }
}
function Zn(e) {
  try {
    return e.createElement("canvas").getContext("2d");
  } catch {
    return null;
  }
}
function Ee(e) {
  return { anchor: e, head: e };
}
function Zo(e) {
  if (e.anchor.paragraphId !== e.head.paragraphId) return null;
  let t = Math.min(e.anchor.offset, e.head.offset),
    n = Math.max(e.anchor.offset, e.head.offset);
  return { paragraphId: e.head.paragraphId, start: t, end: n };
}
function wi(e, t, n) {
  let { anchor: r, head: o } = t;
  if (r.paragraphId === o.paragraphId)
    return r.offset <= o.offset ? { from: r, to: o } : { from: o, to: r };
  let a = n ?? fc$1(e);
  return a.indexOf(r.paragraphId) <= a.indexOf(o.paragraphId)
    ? { from: r, to: o }
    : { from: o, to: r };
}
function Bo(e, t, n) {
  let r = t[0],
    o = (a) => {
      let i = t.includes(a.paragraphId) ? a.paragraphId : (r ?? a.paragraphId),
        l = Id$1(e, i).length;
      return { paragraphId: i, offset: Math.max(0, Math.min(a.offset, l)) };
    };
  return { anchor: o(n.anchor), head: o(n.head) };
}
function mc(e, t, n, r) {
  if (t.paragraphId === n.paragraphId)
    return Id$1(e, t.paragraphId).slice(t.offset, n.offset);
  let o = r ?? fc$1(e),
    a = o.indexOf(t.paragraphId),
    i = o.indexOf(n.paragraphId);
  if (a === -1 || i === -1) return "";
  let l = o.slice(a, i + 1),
    d = Id$1(e, t.paragraphId).slice(t.offset);
  for (let u = 1; u < l.length; u += 1) {
    let h = l[u],
      w = Id$1(e, h),
      x = hc$1(e, h).includes(l[u - 1])
        ? ""
        : `
`;
    d += x + (u === l.length - 1 ? w.slice(0, n.offset) : w);
  }
  return d;
}
function gc(e) {
  let t = [],
    n = (r) => {
      if (r.kind !== "textValue") {
        r.kind === "paragraph" && t.push(r.id);
        for (let o of r.children) n(o);
      }
    };
  return (n(e), t);
}
function hc(e) {
  return e.kind;
}
function sg(e) {
  return e.kind !== "textValue" && hc(e) === "contentControl";
}
function fc(e) {
  return e.kind !== "textValue" && hc(e) === "contentControlContent";
}
function lg(e, t) {
  let n = new Map(),
    r = (o) => {
      if (o.kind !== "textValue") {
        if (o.kind === "table") {
          let a = gc(o);
          if (a.length > 0 && a.every((i) => t.has(i))) {
            n.set(o.id, a);
            return;
          }
        }
        for (let a of o.children) r(a);
      }
    };
  return (r(e.root), n);
}
function dg(e, t, n) {
  let r = new Set(),
    o = (a, i) => {
      if (a.kind !== "textValue") {
        if (a.kind === "table" && n.has(a.id)) {
          for (let l of a.children) o(l, true);
          return;
        }
        if (sg(a)) {
          let l = gc(a);
          !i && l.length > 0 && l.every((d) => t.has(d)) && r.add(a.id);
          for (let d of a.children) o(d, i);
          return;
        }
        for (let l of a.children) o(l, i);
      }
    };
  return (o(e.root, false), r);
}
function pc(e, t, n, r) {
  let o = {
      textOps: [{ op: "deleteText", paragraphId: t, start: n, end: r }],
      controlOps: [],
    },
    a = Fa(e, t);
  if (!a || a.kind !== "paragraph") return o;
  let i = Td$1(a),
    l = new Map(i.map((x) => [x.controlId, x])),
    d = new Set(
      i.filter((x) => n <= x.start && x.end <= r).map((x) => x.controlId),
    ),
    u = i
      .filter((x) => {
        if (!d.has(x.controlId)) return false;
        let I = x.parentControlId;
        for (; I;) {
          if (d.has(I)) return false;
          I = l.get(I)?.parentControlId ?? null;
        }
        return true;
      })
      .sort((x, I) => x.start - I.start || I.end - x.end);
  if (u.length === 0) return o;
  let h = [],
    w = n;
  for (let x of u)
    (w < x.start &&
      h.push({ op: "deleteText", paragraphId: t, start: w, end: x.start }),
      (w = Math.max(w, x.end)));
  return (
    w < r && h.push({ op: "deleteText", paragraphId: t, start: w, end: r }),
    {
      textOps: h.reverse(),
      controlOps: u.map((x) => ({
        op: "removeContentControl",
        controlId: x.controlId,
        keepContent: false,
      })),
    }
  );
}
function yc(e, t, n, r, o) {
  let a = (T) => Id$1(e, T);
  if (n.paragraphId === r.paragraphId) {
    if (n.offset === r.offset) return { ops: [], collapseTo: n };
    let T = pc(t, n.paragraphId, n.offset, r.offset);
    return { ops: [...T.textOps, ...T.controlOps], collapseTo: n };
  }
  let i = o ?? fc$1(e),
    l = i.indexOf(n.paragraphId),
    d = i.indexOf(r.paragraphId);
  if (l === -1 || d === -1) return { ops: [], collapseTo: n };
  let u = new Set();
  for (let T = l; T <= d; T += 1) {
    let N = i[T];
    (T === l ? n.offset === 0 : T !== d || r.offset === a(N).length) &&
      u.add(N);
  }
  let h = lg(t, u),
    w = new Map();
  for (let [T, N] of h) for (let _ of N) w.set(_, T);
  let x = dg(t, u, h),
    I = l;
  if (w.has(n.paragraphId)) {
    I = -1;
    for (let T = l + 1; T <= d; T += 1)
      if (!w.has(i[T])) {
        I = T;
        break;
      }
    if (I === -1) {
      let T = w.get(n.paragraphId);
      for (let N of h.get(T) ?? []) w.delete(N);
      (h.delete(T), (I = l));
    }
  }
  let D = i[I],
    L = I === l ? n : { paragraphId: D, offset: 0 },
    k = [],
    g = [];
  for (let T = l; T <= d; T += 1) {
    let N = i[T];
    if (w.has(N)) continue;
    let _ = a(N).length,
      Q = T === l ? n.offset : 0,
      P = T === d ? r.offset : _;
    if (Q < P) {
      let V = pc(t, N, Q, P);
      (k.push(...V.textOps), g.push(...V.controlOps));
    }
  }
  for (let T of h.keys()) k.push({ op: "deleteBlock", blockId: T });
  for (let T of x) k.push({ op: "removeContentControl", controlId: T });
  k.push(...g);
  let O = (T) => {
      let N = Ga$1(t, T);
      for (; N && fc(N);) {
        let _ = Ga$1(t, N.id);
        if (!_ || !x.has(_.id)) break;
        N = Ga$1(t, _.id);
      }
      return N;
    },
    M = (T) => {
      let N = [],
        _ = (Q) => {
          for (let P of Q)
            if (P.kind !== "textValue" && !h.has(P.id)) {
              if (x.has(P.id)) {
                let V = P.children.find(fc);
                V && V.kind !== "textValue" && _(V.children);
                continue;
              }
              if (P.kind === "paragraph") {
                N.push(P.id);
                continue;
              }
              N.push(`\0barrier:${P.id}`);
            }
        };
      return (_(T.children), N);
    },
    K = (T, N) => {
      let _ = O(T);
      if (!_ || O(N) !== _) return false;
      let Q = M(_),
        P = Q.indexOf(T),
        V = Q.indexOf(N);
      return P !== -1 && V === P + 1;
    },
    C = D,
    b = D;
  for (let T = I + 1; T <= d; T += 1) {
    let N = i[T];
    w.has(N) ||
      (K(b, N)
        ? k.push({ op: "joinParagraphs", firstId: C, secondId: N })
        : (C = N),
      (b = N));
  }
  return { ops: k, collapseTo: L };
}
var cg = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\xA0" };
function ug(e) {
  return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g, (t, n) => {
    if (n.startsWith("#")) {
      let r = n.startsWith("#x")
        ? Number.parseInt(n.slice(2), 16)
        : Number.parseInt(n.slice(1), 10);
      return !Number.isFinite(r) ||
        r < 0 ||
        r > 1114111 ||
        (r >= 55296 && r <= 57343)
        ? t
        : String.fromCodePoint(r);
    }
    return cg[n.toLowerCase()] ?? t;
  });
}
var fg = new Set(["script", "style"]),
  pg = new Set([
    "p",
    "div",
    "li",
    "tr",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "section",
    "article",
    "pre",
    "table",
  ]),
  mg = new Set(["td", "th"]),
  vc = (e) =>
    e !== void 0 && ((e >= "a" && e <= "z") || (e >= "A" && e <= "Z")),
  gg = (e) => vc(e) || (e !== void 0 && e >= "0" && e <= "9"),
  bc = (e) =>
    e === " " ||
    e === "	" ||
    e ===
      `
` ||
    e === "\r" ||
    e === "\f";
function hg(e, t) {
  let n = t + 1,
    r = e[n] === "/";
  if ((r && (n += 1), !vc(e[n]))) return null;
  let o = n;
  for (; n < e.length && gg(e[n]);) n += 1;
  let a = e.slice(o, n).toLowerCase(),
    i = "",
    l = false;
  for (; n < e.length;) {
    let d = e[n];
    if (i !== "") d === i && (i = "");
    else if (d === "=") l = true;
    else if (l && (d === '"' || d === "'")) ((i = d), (l = false));
    else {
      if (d === ">") return { name: a, closing: r, end: n + 1 };
      bc(d) || (l = false);
    }
    n += 1;
  }
  return { name: a, closing: r, end: e.length };
}
function yg(e) {
  let t = e.length;
  for (; t > 0 && e.charCodeAt(t - 1) === 9;) t -= 1;
  return t === e.length ? e : e.slice(0, t);
}
function vg(e, t, n) {
  for (let r = n; r < e.length;) {
    let o = e.indexOf("</", r);
    if (o === -1) return e.length;
    let a = o + 2;
    if (e.slice(a, a + t.length).toLowerCase() === t) {
      for (a += t.length; a < e.length && bc(e[a]);) a += 1;
      if (e[a] === ">") return a + 1;
    }
    r = o + 2;
  }
  return e.length;
}
function bg(e) {
  let t = e.length > 2e6 ? e.slice(0, 2e6) : e,
    n = "",
    r = 0;
  for (; r < t.length;) {
    let o = t.indexOf("<", r);
    if (o === -1) {
      n += t.slice(r);
      break;
    }
    if (((n += t.slice(r, o)), t.startsWith("<!--", o))) {
      if (t[o + 4] === ">") {
        r = o + 5;
        continue;
      }
      if (t[o + 4] === "-" && t[o + 5] === ">") {
        r = o + 6;
        continue;
      }
      let i = t.indexOf("-->", o + 4);
      r = i === -1 ? t.length : i + 3;
      continue;
    }
    if (t[o + 1] === "!" || t[o + 1] === "?") {
      let i = t.indexOf(">", o + 1);
      r = i === -1 ? t.length : i + 1;
      continue;
    }
    let a = hg(t, o);
    if (a === null) {
      ((n += "<"), (r = o + 1));
      continue;
    }
    ((r = a.end),
      !a.closing && fg.has(a.name)
        ? (r = vg(t, a.name, a.end))
        : !a.closing && a.name === "br"
          ? (n += `
`)
          : a.closing && mg.has(a.name)
            ? (n += "	")
            : a.closing &&
              pg.has(a.name) &&
              (n += `
`));
  }
  return ug(n)
    .replace(
      /\r\n?/g,
      `
`,
    )
    .split(
      `
`,
    )
    .map(yg)
    .join(
      `
`,
    )
    .replace(
      /\n{3,}/g,
      `

`,
    )
    .trim();
}
function xc(e) {
  let t = "";
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (r === 12) {
      t += `
`;
      continue;
    }
    if (r === 13) {
      ((t += `
`),
        e.charCodeAt(n + 1) === 10 && (n += 1));
      continue;
    }
    if (r === 9 || r === 10) {
      t += e[n];
      continue;
    }
    if (!(r < 32 || r === 65534 || r === 65535)) {
      if (r >= 55296 && r <= 56319) {
        let o = e.charCodeAt(n + 1);
        o >= 56320 && o <= 57343 && ((t += e[n] + e[n + 1]), (n += 1));
        continue;
      }
      (r >= 56320 && r <= 57343) || (t += e[n]);
    }
  }
  return t;
}
function Pi(e) {
  if (!e) return "";
  let t = e.getData("text/plain");
  if (t.length > 0) return t;
  let n = e.getData("text/html");
  return n.length > 0 ? bg(n) : "";
}
var xg = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
    Home: "lineStart",
    End: "lineEnd",
  },
  Ic = { l: "left", e: "center", r: "right", j: "both" },
  Sc = { 1: "240", 5: "360", 2: "480" },
  kc = {
    b: { localName: "b" },
    i: { localName: "i" },
    u: { localName: "u", attributes: { val: "single" } },
  };
function wc(e, t = {}) {
  return (n) => {
    if (n.defaultPrevented) return;
    if (n.key === "Escape" && e.activeScope().kind === "headerFooter") {
      (e.exitHeaderFooter(), n.preventDefault());
      return;
    }
    if (n.key === "Escape" && e.activeScope().kind === "note") {
      (e.exitNote(), n.preventDefault());
      return;
    }
    if ((n.ctrlKey || n.metaKey) && n.altKey && !n.shiftKey) {
      let a = n.key.toLowerCase();
      if (a === "f") {
        (n.preventDefault(), e.insertNote("footnote"));
        return;
      }
      if (a === "d") {
        (n.preventDefault(), e.insertNote("endnote"));
        return;
      }
    }
    let r = n.metaKey || n.ctrlKey,
      o = xg[n.key];
    if (o) {
      let a = o;
      (n.key === "Home" || n.key === "End"
        ? r && (a = n.key === "Home" ? "documentStart" : "documentEnd")
        : (n.key === "ArrowLeft" || n.key === "ArrowRight") &&
            (n.altKey || n.ctrlKey)
          ? (a = n.key === "ArrowLeft" ? "wordLeft" : "wordRight")
          : n.metaKey && (n.key === "ArrowLeft" || n.key === "ArrowRight")
            ? (a = n.key === "ArrowLeft" ? "lineStart" : "lineEnd")
            : r &&
              (n.key === "ArrowUp" || n.key === "ArrowDown") &&
              (a = n.key === "ArrowUp" ? "documentStart" : "documentEnd"),
        e.navigate(a, n.shiftKey),
        n.preventDefault());
      return;
    }
    if (n.key === "PageUp" || n.key === "PageDown") {
      (e.navigate(
        r
          ? n.key === "PageUp"
            ? "documentStart"
            : "documentEnd"
          : n.key === "PageUp"
            ? "pageUp"
            : "pageDown",
        n.shiftKey,
      ),
        n.preventDefault());
      return;
    }
    if (n.key === "Backspace") {
      (r || n.altKey ? e.deleteWordBackward() : e.deleteBackward(),
        n.preventDefault());
      return;
    }
    if (n.key === "Delete") {
      (r || n.altKey ? e.deleteWordForward() : e.deleteForward(),
        n.preventDefault());
      return;
    }
    if (n.key === "Tab") {
      if (
        e.contentControls.formFill() &&
        e.contentControls.navigate(n.shiftKey ? "previous" : "next")
      ) {
        n.preventDefault();
        return;
      }
      (e.isListParagraph()
        ? e.adjustIndent(n.shiftKey ? "decrease" : "increase")
        : n.shiftKey
          ? e.adjustIndent("decrease")
          : e.insertTab(),
        n.preventDefault());
      return;
    }
    if (n.key === "Enter") {
      (r
        ? e.insertPageBreak()
        : n.shiftKey
          ? e.insertLineBreak()
          : e.exitListOnEmptyItem() || e.splitParagraph(),
        n.preventDefault());
      return;
    }
    if (r && n.key.toLowerCase() === "a") {
      (e.selectAll(), n.preventDefault());
      return;
    }
    if (
      r &&
      !n.shiftKey &&
      n.key.toLowerCase() === "k" &&
      t.onRequestHyperlink
    ) {
      (t.onRequestHyperlink(), n.preventDefault());
      return;
    }
    if (r && !n.shiftKey && kc[n.key.toLowerCase()]) {
      let a = kc[n.key.toLowerCase()];
      (e.toggleRunProperty(a.localName, a.attributes), n.preventDefault());
      return;
    }
    if (r && (n.key === "=" || n.key === "+" || n.code === "Equal")) {
      (e.toggleRunProperty("vertAlign", {
        val: n.shiftKey ? "superscript" : "subscript",
      }),
        n.preventDefault());
      return;
    }
    if (r && n.shiftKey && n.key.toLowerCase() === "m") {
      (e.adjustIndent("decrease"), n.preventDefault());
      return;
    }
    if (r && !n.shiftKey && n.key.toLowerCase() === "m") {
      (e.adjustIndent("increase"), n.preventDefault());
      return;
    }
    if (r && !n.shiftKey && Ic[n.key.toLowerCase()]) {
      if (n.metaKey && n.key.toLowerCase() === "r") return;
      (e.setParagraphProperty("jc", { val: Ic[n.key.toLowerCase()] }),
        n.preventDefault());
      return;
    }
    if (r && !n.shiftKey && Sc[n.key]) {
      (e.setParagraphProperty("spacing", { line: Sc[n.key], lineRule: "auto" }),
        n.preventDefault());
      return;
    }
    if (r && n.key.toLowerCase() === "y") {
      (e.redo(), n.preventDefault());
      return;
    }
    (n.metaKey || n.ctrlKey) &&
      n.key.toLowerCase() === "z" &&
      (n.shiftKey ? e.redo() : e.undo(), n.preventDefault());
  };
}
function Pc(e, t) {
  return {
    onCopy: (a) => {
      let i = e.selectedText();
      i && (a.clipboardData?.setData("text/plain", i), a.preventDefault());
    },
    onCut: (a) => {
      let i = e.selectedText();
      i &&
        (a.clipboardData?.setData("text/plain", i),
        e.deleteSelection(),
        a.preventDefault());
    },
    onPaste: (a) => {
      let i = Pi(a.clipboardData);
      (a.preventDefault(), i && t(i));
    },
  };
}
function Tc(e) {
  let t = Pi(e.dataTransfer);
  return t.length > 0 ? t : null;
}
function Cc(e, t) {
  return (n) => {
    if ((n.preventDefault(), !t.isComposing())) {
      if (n.inputType === "insertText" && n.data != null) {
        e.enqueueType(n.data);
        return;
      }
      if (n.inputType !== "insertFromPaste") {
        if (n.inputType === "insertReplacementText") {
          let r = n.data ?? Tc(n);
          r && e.type(r);
          return;
        }
        if (n.inputType === "deleteContentBackward") {
          e.deleteBackward();
          return;
        }
        if (n.inputType === "deleteWordBackward") {
          e.deleteWordBackward();
          return;
        }
        if (n.inputType === "deleteContentForward") {
          e.deleteForward();
          return;
        }
        if (n.inputType === "deleteWordForward") {
          e.deleteWordForward();
          return;
        }
        if (n.inputType === "insertLineBreak") {
          e.insertLineBreak();
          return;
        }
        if (
          n.inputType === "insertFromDrop" ||
          n.inputType === "insertFromPasteAsQuotation"
        ) {
          let r = Tc(n);
          r && t.insertPlainText(r);
          return;
        }
        n.inputType === "insertParagraph" && e.splitParagraph();
      }
    }
  };
}
function Rc(e, t, n) {
  let r = e.querySelectorAll("[data-paragraph-id][data-start]"),
    o = [],
    a = new Set();
  for (let i of r) {
    let l = i;
    if (l.dataset.paragraphId !== t) continue;
    let d = Number(l.dataset.start);
    if (Number.isInteger(d)) {
      if (l.dataset.docxField !== void 0) {
        if (a.has(d)) continue;
        a.add(d);
        let u = l.dataset.end,
          h =
            u !== void 0 && /^\d{1,9}$/.test(u) && Number(u) >= d
              ? Number(u)
              : d;
        o.push({ start: d, text: n.slice(d, h) });
        continue;
      }
      o.push({ start: d, text: l.textContent ?? "" });
    }
  }
  return o.length === 0
    ? null
    : (o.sort((i, l) => i.start - l.start), o.map((i) => i.text).join(""));
}
function Ec(e, t, n) {
  if (n === t) return null;
  let r = 0;
  for (; r < n.length && r < t.length && n[r] === t[r];) r += 1;
  let o = 0;
  for (
    ;
    o < n.length - r &&
    o < t.length - r &&
    n[n.length - 1 - o] === t[t.length - 1 - o];
  )
    o += 1;
  let a = n.slice(r, n.length - o),
    i = [];
  return (
    t.length - o > r &&
      i.push({ op: "deleteText", paragraphId: e, start: r, end: t.length - o }),
    a.length > 0 &&
      i.push({ op: "insertText", paragraphId: e, offset: r, text: a }),
    i.length === 0 ? null : { ops: i, caret: r + a.length }
  );
}
function Ci(e) {
  let {
      session: t,
      measurer: n,
      producer: r,
      cache: o,
      styleCascade: a,
      defaultTabStopPt: i,
      displayMode: l,
      inlineDrawingLayoutForPart: d,
      drawingLayoutTokenForPart: u,
      drawingTokenForParagraphForPart: h,
    } = e,
    w = new WeakMap(),
    x = null,
    I = -1;
  function D(K) {
    let C = t.packageRevision();
    return (
      (!x || I !== C) && ((x = kg(t.currentPackage())), (I = C)),
      x.get(K)
    );
  }
  function L(K, C, b) {
    let T = u?.(K.name) ?? "",
      N = b?.height ?? 0,
      _ = b?.margin.top ?? 0,
      Q = b?.margin.bottom ?? 0,
      P = b?.margin.left ?? 0,
      V = b?.margin.right ?? 0,
      J = w.get(K);
    if (
      J &&
      J.width === C &&
      J.pageHeight === N &&
      J.marginTop === _ &&
      J.marginBottom === Q &&
      J.marginLeft === P &&
      J.marginRight === V &&
      J.producer === r &&
      J.drawingLayoutToken === T
    )
      return J.story;
    let ee = d?.(K.name),
      Re = Gc$1(
        K,
        C,
        n,
        r,
        o,
        a,
        void 0,
        void 0,
        i,
        l,
        ee,
        h ? (ke) => h(K.name, ke) : void 0,
        void 0,
        b
          ? {
              pageNumber: 1,
              pageWidth: b.width,
              pageHeight: b.height,
              marginLeft: b.margin.left,
              marginRight: b.margin.right,
              marginTop: b.margin.top,
              marginBottom: b.margin.bottom,
            }
          : void 0,
        t.documentProperties(),
      ),
      le = D(K.name),
      Be = le ? Fc(Re, le) : Re;
    return (
      w.set(K, {
        width: C,
        pageHeight: N,
        marginTop: _,
        marginBottom: Q,
        marginLeft: P,
        marginRight: V,
        producer: r,
        drawingLayoutToken: T,
        story: Be,
      }),
      Be
    );
  }
  function k(K, C, b) {
    let T = new Map();
    for (let [N, _] of K) T.set(N, L(_, C, b));
    return T;
  }
  function g(K, C) {
    if (!K || (K.headers.size === 0 && K.footers.size === 0)) return;
    let b = C.width - C.margin.left - C.margin.right;
    return {
      titlePage: K.titlePage,
      evenAndOddHeaders: K.evenAndOddHeaders,
      headers: k(K.headers, b, C),
      footers: k(K.footers, b, C),
    };
  }
  function O() {
    let K = Nc$1(t.part(), l),
      C = t.headerFooterPartsBySection();
    return K.map((b, T) => g(C[T], Pc$1(b.properties)));
  }
  function M() {
    let K = O();
    return K[K.length - 1];
  }
  return { furniture: M, sectionFurniture: O };
}
var Ig =
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header",
  Sg =
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer";
function kg(e) {
  let t = new Map(),
    n = e.relationships.get(e.mainDocumentPart) ?? [];
  for (let r of n) {
    if (r.type !== Ig && r.type !== Sg) continue;
    let o = O(r);
    if (o.mode !== "Internal" || !o.target.ok) continue;
    let a = o.target.partName;
    t.has(a) || t.set(a, r.id);
  }
  return t;
}
function Fc(e, t) {
  return e.rId === t
    ? e
    : { ...e, rId: t, withPageContext: (n) => Fc(e.withPageContext(n), t) };
}
function Oc(e) {
  let t, n;
  return {
    styleCascade: vb(e.stylesRoot(), e.documentThemeFonts()),
    defaultTabStopPt: Ia(e.settingsRoot()),
    numberingIndex() {
      let r = e.numberingRoot();
      return ((n === void 0 || r !== t) && ((t = r), (n = Wb(r))), n);
    },
  };
}
function at(e) {
  return e.closest(".docx-editor__scroll-container");
}
function Mc(e, t, n) {
  let r = e.getBoundingClientRect(),
    o = t.getBoundingClientRect();
  return {
    top:
      (t.scrollTop !== 0 && r.top === 0 && o.top === 0
        ? t.scrollTop - e.offsetTop
        : o.top + t.clientTop - r.top) / n,
    height: t.clientHeight / n,
  };
}
function Ac(e, t, n) {
  let r = at(e);
  if (!r || r.clientHeight <= 0 || t.pages.length === 0 || n <= 0) return null;
  let o = Mc(e, r, n),
    a = o.top + o.height / 2;
  for (let i of t.pages) if (a < i.box.y + i.box.height) return i.index + 1;
  return t.pages.length;
}
function Lc(e, t, n, r) {
  let o = at(e);
  if (!o || o.clientHeight === 0) return;
  let a = Mc(e, o, r),
    i = [];
  for (let l of [n.anchor, n.head]) {
    let d = Ed(t, l);
    d && i.push(d.pageIndex);
  }
  return wd$1({ layout: t, viewport: a, overscanPages: 1, pinnedPages: i });
}
function Ri(e, t) {
  if (e === t) return true;
  if (!e || !t || e.size !== t.size) return false;
  for (let n of e) if (!t.has(n)) return false;
  return true;
}
function qo(e, t) {
  let n = e.pages,
    r = n[n.length - 1],
    o = r ? r.box.y + r.box.height : 0,
    a = t ? n.filter((u) => t.has(u.index)) : n,
    i = 0;
  for (let u of a) {
    let h = u.box.x + u.box.width;
    h > i && (i = h);
  }
  let l = new Set(a.map((u) => u.box.width)),
    d = new Map();
  if (a.length > 0 && l.size > 1)
    for (let u of n) d.set(u.index, (i - u.box.width) / 2 - u.box.x);
  return { width: i, height: o, pageOffsetX: d };
}
function Hc(e, t) {
  if (
    e.width !== t.width ||
    e.height !== t.height ||
    e.pageOffsetX.size !== t.pageOffsetX.size
  )
    return false;
  for (let [n, r] of e.pageOffsetX)
    if (t.pageOffsetX.get(n) !== r) return false;
  return true;
}
function Dc(e) {
  let t = e.session.currentPackage(),
    n = Zd$1(t, "footnote"),
    r = Zd$1(t, "endnote");
  if (!n && !r) return;
  let o = Gd$2(t),
    a = Hd$2(o),
    i = Id$2(o),
    l = Jd$1(void 0, a),
    d = Kd$1(void 0, i),
    u = e.session.part(),
    h = Nc$1(u),
    w = Tg(u, h),
    x = h.map((g, O) => Jd$1(Ed$1(w[O]), a)),
    I = h.map((g, O) => Kd$1(Fd$1(w[O]), i)),
    D = e.inlineDrawingLayoutForPart,
    L = e.drawingTokenForParagraphForPart,
    k = D
      ? (g) => {
          let O = D(g);
          if (O)
            return {
              inlineDrawingLayout: O,
              ...(L ? { drawingTokenForParagraph: (M) => L(g, M) } : {}),
            };
        }
      : void 0;
  return {
    footnotesPart: n,
    endnotesPart: r,
    footnotePropsBySection: x.length > 0 ? x : [l],
    endnotePropsBySection: I.length > 0 ? I : [d],
    documentFootnoteProps: l,
    documentEndnoteProps: d,
    measurer: e.measurer,
    producer: e.producer,
    cache: e.cache,
    styleCascade: e.styleCascade,
    defaultTabStopPt: e.defaultTabStopPt,
    ...(k ? { drawingsForPart: k } : {}),
  };
}
function Tg(e, t) {
  let n = Cb(e),
    r = [];
  for (let o = 0; o < n.length; o += 1) {
    let a = n[o];
    if (a.kind !== "paragraph") continue;
    let i = Lc$1(a);
    i && r.push(i);
  }
  for (; r.length < t.length;) r.push(void 0);
  return r;
}
function _c(e) {
  if (typeof e.defaultView?.createImageBitmap != "function") return null;
  let t = e.defaultView;
  return Object.freeze({
    async decode(n, r, o) {
      let a = new Blob([new Uint8Array(n)], { type: r }),
        i = await t.createImageBitmap(a);
      try {
        let l = i.width,
          d = i.height;
        if (l <= 0 || d <= 0) throw new Error("image dimensions invalid");
        if (l * d > o.maxPixels)
          throw new Error("image dimensions exceed limits");
        return Object.freeze({
          pixelWidth: l,
          pixelHeight: d,
          dpiX: 96,
          dpiY: 96,
        });
      } finally {
        i.close();
      }
    },
    convertPreserved(n, r, o) {
      return r === "image/tiff" ? Cg(e, n, o) : wg(n, r);
    },
  });
}
async function wg(e, t, n) {
  let { convertEmfToDataUrl: r, convertWmfToDataUrl: o } =
      await import("emf-converter"),
    a = new Uint8Array(e),
    i = a.buffer.slice(a.byteOffset, a.byteOffset + a.byteLength),
    l = { maxWidth: 4096, maxHeight: 4096 },
    d = t === "image/x-emf" ? await r(i, l) : await o(i, l);
  if (!d) return null;
  let u = "data:image/png;base64,";
  if (!d.startsWith(u)) return null;
  let h = atob(d.slice(u.length)),
    w = new Uint8Array(h.length);
  for (let x = 0; x < h.length; x += 1) w[x] = h.charCodeAt(x);
  return Object.freeze({ bytes: w, mime: "image/png" });
}
function Nc(e, t) {
  let n = e[t];
  if (!Array.isArray(n) || n.length === 0) return null;
  let r = Number(n[0]);
  return Number.isSafeInteger(r) && r > 0 ? r : null;
}
async function Pg(e, t) {
  let n = await import("utif2"),
    r = n.default ?? n,
    o = e.slice().buffer,
    a = r.decode(o)[0];
  if (!a) return null;
  let i = Nc(a, "t256"),
    l = Nc(a, "t257");
  if (
    i === null ||
    l === null ||
    i > t.maxDimension ||
    l > t.maxDimension ||
    i > t.maxPixels / l
  )
    return null;
  let d = i * l;
  if (
    d * 4 > t.maxDecodedBytes ||
    (r.decodeImage(o, a), a.width !== i || a.height !== l)
  )
    return null;
  let u = r.toRGBA8(a);
  return u.length !== d * 4
    ? null
    : Object.freeze({ rgba: u, pixelWidth: i, pixelHeight: l });
}
async function Cg(e, t, n) {
  let r = await Pg(t, n);
  if (r === null) return null;
  let o = await Rg(e, r.rgba, r.pixelWidth, r.pixelHeight);
  return o === null ? null : Object.freeze({ bytes: o, mime: "image/png" });
}
async function Rg(e, t, n, r) {
  let o = e.createElement("canvas");
  if (((o.width = n), (o.height = r), o.width !== n || o.height !== r))
    return null;
  let a = o.getContext("2d");
  if (!a) return null;
  let i = a.createImageData(n, r);
  (i.data.set(t), a.putImageData(i, 0, 0));
  let l = await new Promise((d) => {
    o.toBlob((u) => d(u), "image/png");
  });
  return l ? new Uint8Array(await l.arrayBuffer()) : null;
}
function Zc() {
  return Object.freeze({
    async decode() {
      throw new Error("Image decode unavailable in headless environment");
    },
  });
}
function Bc(e) {
  return typeof URL.createObjectURL != "function" ||
    typeof URL.revokeObjectURL != "function"
    ? null
    : Object.freeze({
        create(t, n) {
          let r = e.mintValidatedBytes(t, t.contentId);
          if (!r)
            throw new Error(
              `PaintImageUrlSource: validated bytes unavailable for ${t.resourceKey}`,
            );
          let o = new Uint8Array(r);
          return URL.createObjectURL(new Blob([o], { type: n }));
        },
        revoke(t) {
          URL.revokeObjectURL(t);
        },
      });
}
var Eg = "docx-editor-one-surface__caret",
  Ei = "docx-editor-one-surface__caret--steady",
  Fg = 530;
function qc(e, t, n) {
  let r = e.ownerDocument,
    o = r.createElement("div");
  ((o.className = Eg),
    (o.dataset.docxCaret = ""),
    (o.dataset.docxMarker = ""),
    o.setAttribute("contenteditable", "false"),
    o.setAttribute("aria-hidden", "true"),
    (o.dataset.noColorInvert = ""),
    (o.style.position = "absolute"),
    (o.style.pointerEvents = "none"),
    (o.style.userSelect = "none"),
    o.style.setProperty("-webkit-user-select", "none"));
  let a = false,
    i = null,
    l = null,
    d = null;
  function u() {
    let O = r.activeElement;
    return O === e || (!!O && e.contains(O));
  }
  function h(O) {
    return (
      O.anchor.paragraphId === O.head.paragraphId &&
      O.anchor.offset === O.head.offset
    );
  }
  function w() {
    ((l = null),
      i !== null && (clearTimeout(i), (i = null)),
      o.classList.remove(Ei),
      o.remove(),
      e.style.removeProperty("caret-color"),
      d?.style.removeProperty("caret-color"),
      (d = null));
  }
  function x() {
    (o.classList.add(Ei),
      i !== null && clearTimeout(i),
      (i = setTimeout(() => {
        ((i = null), o.classList.remove(Ei));
      }, Fg)));
  }
  function I() {
    if (a || !u() || n().suppress) {
      w();
      return;
    }
    let {
        layout: O,
        selection: M,
        scopedHost: K,
        scopedHostKind: C,
        preferredPageIndex: b,
        measurer: T,
      } = n(),
      N = t();
    if (!h(M)) {
      w();
      return;
    }
    let _ = Ed(O, M.head, {
      ...(T ? { measurer: T } : {}),
      ...(b !== void 0 ? { preferredPageIndex: b } : {}),
    });
    if (!_ || !Number.isInteger(_.pageIndex)) {
      w();
      return;
    }
    let Q =
      K ??
      e.querySelector(
        `[data-page-index="${_.pageIndex}"] > .docx-page-content`,
      );
    if (!Q) {
      w();
      return;
    }
    ((o.style.left = `${_.x * N}px`),
      (o.style.top = `${_.y * N}px`),
      (o.style.height = `${_.height * N}px`),
      o.parentNode !== Q && Q.append(o),
      (e.style.caretColor = "transparent"),
      d && d !== K && d.style.removeProperty("caret-color"),
      (d = K ?? null),
      d?.style.setProperty("caret-color", "transparent"));
    let P = Q === K ? (C ?? "scoped") : "body",
      V = `${_.pageIndex}:${P}:${_.x}:${_.y}:${_.height}`;
    V !== l && ((l = V), x());
  }
  let D = () => {
      ((a = true), I());
    },
    L = () => {
      ((a = false), I());
    },
    k = () => I(),
    g = (O) => {
      let M = O.relatedTarget;
      (M && e.contains(M)) || w();
    };
  return (
    e.addEventListener("compositionstart", D),
    e.addEventListener("compositionend", L),
    e.addEventListener("focusin", k),
    e.addEventListener("focusout", g),
    {
      update: I,
      destroy() {
        (e.removeEventListener("compositionstart", D),
          e.removeEventListener("compositionend", L),
          e.removeEventListener("focusin", k),
          e.removeEventListener("focusout", g),
          w());
      },
    }
  );
}
function zc(e, t) {
  for (let n of e)
    if (n.kind === "table") {
      t(n);
      for (let r of n.rows) for (let o of r.cells) zc(o.blocks, t);
    }
}
function Og(e, t) {
  for (let n of e.pages)
    zc(n.fragments, (r) => {
      for (let o = 0; o < r.rows.length; o += 1)
        t({ table: r, row: r.rows[o], rowIndex: o });
    });
}
function Fi(e, t, n, r) {
  let o = null;
  return (
    Og(e, (a) => {
      a.table.tableId === t &&
        a.row.id === n &&
        a.row.isHeaderRepeat === r &&
        (o = a);
    }),
    o
  );
}
function Oi(e, t) {
  return {
    sourceRevision: e,
    tableId: t.table.tableId,
    rowId: t.row.id,
    isHeaderRepeat: t.row.isHeaderRepeat,
  };
}
function Kc(e, t, n) {
  let r = n.gridColumnId;
  return r
    ? {
        sourceRevision: e,
        tableId: t.table.tableId,
        gridColumnId: r,
        isHeaderRepeat: t.row.isHeaderRepeat,
      }
    : null;
}
function jc(e, t, n, r) {
  return {
    sourceRevision: e,
    tableId: t.table.tableId,
    leftGridColumnId: n,
    rightGridColumnId: r,
    isHeaderRepeat: t.row.isHeaderRepeat,
  };
}
function Uc(e, t, n) {
  return {
    sourceRevision: e,
    tableId: t.table.tableId,
    gridColumnId: n,
    isHeaderRepeat: t.row.isHeaderRepeat,
  };
}
var Mg = 120,
  Vc = 20;
function zo(e) {
  let t = sf$1(e, "w"),
    n = t ? Number.parseInt(t, 10) : Number.NaN;
  return Number.isFinite(n) ? n : 0;
}
function Ag(e, t, n) {
  let r = e.pagesLayer.getBoundingClientRect(),
    o = e.scale();
  return { x: (t - r.left) / o, y: (n - r.top) / o };
}
function Mi(e) {
  let t = e.editingMode === "view";
  return { editable: !t, viewing: t };
}
function Ko(e, t, n) {
  let r = (o) => {
    for (let a of o)
      if (a.kind === "table") {
        if (a.tableId === t) return a;
        for (let i of a.rows)
          for (let l of i.cells) {
            let d = r(l.blocks);
            if (d) return d;
          }
      }
    return null;
  };
  return r(e.pages[n]?.fragments ?? []);
}
function Ai(e, t) {
  return t.kind === "insertColumn"
    ? Fi(e, t.tableId, t.rowId, t.isHeaderRepeat)
    : "rowId" in t
      ? Fi(e, t.tableId, t.rowId, t.isHeaderRepeat)
      : null;
}
function Wc(e) {
  let t = e.furnitureLayer;
  ((t.className = "docx-table-furniture"),
    t.setAttribute("contenteditable", "false"),
    (t.style.position = "absolute"),
    (t.style.left = "0"),
    (t.style.top = "0"),
    (t.style.pointerEvents = "none"));
  let n = null,
    r = null,
    o = null,
    a = null,
    i = null,
    l = null,
    d = false,
    u = 0,
    h = 0,
    w = null,
    x = null,
    I = null;
  function D(y) {
    return (
      y instanceof HTMLButtonElement &&
      (y.classList.contains("docx-table-insert-row") ||
        y.classList.contains("docx-table-insert-column"))
    );
  }
  function L() {
    let y = document.activeElement;
    return y !== null && D(y) && y.closest(".docx-table-furniture") === t
      ? y
      : null;
  }
  function k(y) {
    for (let S of [...t.children]) D(S) && S !== y && S.remove();
  }
  function g() {
    ((x = null), (I = null));
  }
  function O() {
    n !== null && (clearTimeout(n), (n = null));
  }
  function M() {
    for (let S of [...t.children]) D(S) || S.remove();
    let y = L();
    if (!y) {
      (k(null), g());
      return;
    }
    ((x = y), k(y));
  }
  function K(y) {
    let S = x ?? L(),
      Z = S !== null && document.activeElement === S;
    (g(),
      t.replaceChildren(),
      y && Z && e.pagesLayer.focus({ preventScroll: true }));
  }
  function C() {
    for (let y of [...t.children]) D(y) || y.remove();
  }
  function b(y, S, Z) {
    let q = e.read().layout.pages[y];
    if (!q) return { left: 0, top: 0 };
    let te = e.scale(),
      ae = e.pageOffsetX(y);
    return {
      left: (q.contentBox.x + S + ae) * te,
      top: (q.contentBox.y + Z) * te,
    };
  }
  function T(y, S) {
    let Z = e.read(),
      A = Ko(Z.layout, S.tableId, S.pageIndex);
    if (!A) return;
    let q = document.createElement("div");
    ((q.className = "docx-table-resize-preview"),
      (q.style.position = "absolute"),
      (q.style.pointerEvents = "none"));
    let te = S.kind !== "rowDivider",
      ae = b(
        S.pageIndex,
        te ? A.box.x + y : A.box.x,
        te ? A.box.y : A.box.y + y,
      );
    ((q.style.left = `${ae.left}px`),
      (q.style.top = `${ae.top}px`),
      (q.style.width = te ? "2px" : `${A.box.width * e.scale()}px`),
      (q.style.height = te ? `${A.box.height * e.scale()}px` : "2px"),
      t.append(q));
  }
  function N() {
    let y = document.createElement("button");
    return (
      (y.type = "button"),
      (y.textContent = "+"),
      (y.style.position = "absolute"),
      (y.style.pointerEvents = "auto"),
      y
    );
  }
  function _(y) {
    J(y);
    let S = I;
    if (!S) return;
    let Z = e.read();
    S.kind === "insertRow" ? Re(S, Z) : S.kind === "insertColumn" && le(S, Z);
  }
  function Q() {
    queueMicrotask(() => {
      !x ||
        document.activeElement === x ||
        d ||
        r?.kind === "insertRow" ||
        r?.kind === "insertColumn" ||
        (x.remove(), g());
    });
  }
  function P() {
    if (x && t.contains(x)) return x;
    let y = L();
    if (y) return ((x = y), y);
    let S = N();
    return (
      S.addEventListener("pointerenter", () => {
        ((d = true), O());
      }),
      S.addEventListener("pointerleave", () => {
        d = false;
      }),
      S.addEventListener("pointerdown", J),
      S.addEventListener("mousedown", J),
      S.addEventListener("click", _),
      S.addEventListener("blur", Q),
      (x = S),
      S
    );
  }
  function V(y, S) {
    let Z = Ko(S.layout, y.tableId, y.pageIndex);
    if (!Z) return;
    let A = P();
    if (
      (k(A), (I = y), (A.dataset.tableId = y.tableId), y.kind === "insertRow")
    ) {
      let q = Z.rows.find((de) => de.id === y.rowId);
      if (!q) return;
      ((A.dataset.rowId = y.rowId),
        delete A.dataset.gridColumnId,
        (A.className = "docx-table-insert-row"),
        A.setAttribute("aria-label", e.label("table.insertRowBelow")));
      let te = q.box.y + q.box.height / 2,
        ae = b(y.pageIndex, Z.box.x - 14, te);
      ((A.style.left = `${ae.left}px`), (A.style.top = `${ae.top - 8}px`));
    } else {
      let q = Z.rows[0]?.cells.find((Fe) => Fe.gridColumnId === y.gridColumnId);
      if (!q) return;
      ((A.dataset.gridColumnId = y.gridColumnId), delete A.dataset.rowId);
      let te = Z.columnEdges[q.gridColumn] ?? 0,
        ae = Z.columnEdges[q.gridColumn + 1] ?? Z.box.width;
      ((A.className = "docx-table-insert-column"),
        A.setAttribute("aria-label", e.label("table.insertColumnRight")));
      let de = b(y.pageIndex, Z.box.x + (te + ae) / 2 - 8, Z.box.y - 14);
      ((A.style.left = `${de.left}px`), (A.style.top = `${de.top}px`));
    }
    t.contains(A) || t.append(A);
  }
  function J(y) {
    (y.preventDefault(), y.stopPropagation());
  }
  function ee(y, S) {
    if ((C(), k(x ?? L()), !(l || S.editingMode === "view"))) {
      if (
        (y.kind === "columnDivider" || y.kind === "rightEdge") &&
        !y.isHeaderRepeat
      ) {
        let Z = Ko(S.layout, y.tableId, y.pageIndex);
        if (!Z) return;
        let A = document.createElement("div");
        ((A.className =
          y.kind === "rightEdge"
            ? "docx-table-edge-handle-right layout-table-edge-handle-right"
            : "docx-table-divider-handle layout-table-resize-handle"),
          (A.style.position = "absolute"),
          (A.style.pointerEvents = "auto"),
          (A.style.cursor = "col-resize"),
          (A.dataset.active = "true"));
        let q = b(y.pageIndex, Z.box.x + y.edgeX, Z.box.y);
        ((A.style.left = `${q.left - 3}px`),
          (A.style.top = `${q.top}px`),
          (A.style.width = "6px"),
          (A.style.height = `${Z.box.height * e.scale()}px`),
          A.addEventListener("pointerdown", Be),
          t.append(A));
      }
      if (y.kind === "rowDivider" && !y.isHeaderRepeat) {
        let Z = Ko(S.layout, y.tableId, y.pageIndex);
        if (!Z) return;
        let A = document.createElement("div");
        ((A.className =
          "docx-table-row-divider-handle layout-table-row-resize-handle"),
          (A.style.position = "absolute"),
          (A.style.pointerEvents = "auto"),
          (A.style.cursor = "row-resize"),
          (A.dataset.active = "true"));
        let q = b(y.pageIndex, Z.box.x, Z.box.y + y.edgeY);
        ((A.style.left = `${q.left}px`),
          (A.style.top = `${q.top - 3}px`),
          (A.style.width = `${Z.box.width * e.scale()}px`),
          (A.style.height = "6px"),
          A.addEventListener("pointerdown", Be),
          t.append(A));
      }
      (y.kind === "insertRow" && !y.isHeaderRepeat && V(y, S),
        y.kind === "insertColumn" && !y.isHeaderRepeat && V(y, S));
    }
  }
  function Re(y, S) {
    let Z = Ai(S.layout, y);
    if (!Z) return;
    let A = Mi(S),
      q = jt({
        command: {
          type: "insertRow",
          where: "below",
          target: Oi(y.sourceRevision, Z),
        },
        part: e.session().part(),
        layout: S.layout,
        storeRevision: S.storeRevision,
        selection: S.selection,
        cellSelection: S.cellSelection,
        themeColors: S.themeColors,
        ...A,
      });
    e.applyTableCommandPlan(q);
  }
  function le(y, S) {
    let Z = Ai(S.layout, y);
    if (!Z) return;
    let A = Z.row.cells.find((de) => de.gridColumnId === y.gridColumnId);
    if (!A) return;
    let q = Kc(y.sourceRevision, Z, A);
    if (!q) return;
    let te = Mi(S),
      ae = jt({
        command: { type: "insertColumn", where: "right", target: q },
        part: e.session().part(),
        layout: S.layout,
        storeRevision: S.storeRevision,
        selection: S.selection,
        cellSelection: S.cellSelection,
        themeColors: S.themeColors,
        ...te,
      });
    e.applyTableCommandPlan(ae);
  }
  function Be(y) {
    if (y.button !== 0) return;
    let S = e.read();
    if (
      S.editingMode === "view" ||
      !r ||
      (r.kind !== "columnDivider" &&
        r.kind !== "rightEdge" &&
        r.kind !== "rowDivider")
    )
      return;
    (y.preventDefault(), y.stopPropagation());
    let Z = r,
      A = Ai(S.layout, Z);
    if (!A) return;
    let q = tf$1(e.session().part().root, Z.tableId);
    if (!q.ok || (Z.kind !== "rowDivider" && q.topology.hasMerge)) return;
    let te = 0,
      ae = 0,
      de = 0,
      Fe = q.topology.gridColumns.reduce((Le, ze) => Le + zo(ze), 0),
      He;
    if (Z.kind === "columnDivider") {
      let Le = q.topology.gridColumns.find(
          (be) => be.id === Z.leftGridColumnId,
        ),
        ze = q.topology.gridColumns.find((be) => be.id === Z.rightGridColumnId);
      if (!Le || !ze) return;
      ((te = zo(Le)),
        (ae = zo(ze)),
        (He = jc(
          Z.sourceRevision,
          A,
          Z.leftGridColumnId,
          Z.rightGridColumnId,
        )));
    } else if (Z.kind === "rightEdge") {
      let Le = q.topology.gridColumns.find((ze) => ze.id === Z.gridColumnId);
      if (!Le) return;
      ((te = zo(Le)), (ae = 0), (He = Uc(Z.sourceRevision, A, Z.gridColumnId)));
    } else
      ((de = Math.max(20, Math.round(A.row.box.height * Vc))),
        (He = Oi(Z.sourceRevision, A)));
    let Ye = y.currentTarget;
    (Ye.setPointerCapture(y.pointerId),
      (u = y.clientX),
      (h = y.clientY),
      (l = {
        pointerId: y.pointerId,
        startClientX: y.clientX,
        startClientY: y.clientY,
        startEdgePt: Z.kind === "rowDivider" ? Z.edgeY : Z.edgeX,
        leftTwips: te,
        rightTwips: ae,
        tableWidthTwips: Fe,
        rowHeightTwips: de,
        target: Z,
        ref: A,
        resizeTarget: He,
        captureElement: Ye,
        rightEdge: Z.kind === "rightEdge",
        vertical: Z.kind === "rowDivider",
        cancelled: false,
      }));
    for (let Le of [...t.children]) Le !== Ye && Le.remove();
    T(Z.kind === "rowDivider" ? Z.edgeY : Z.edgeX, Z);
  }
  function ke() {
    if (l) {
      try {
        l.captureElement.hasPointerCapture(l.pointerId) &&
          l.captureElement.releasePointerCapture(l.pointerId);
      } catch {}
      ((l.cancelled = true), (l = null), M(), (r = null));
    }
  }
  function Te() {
    if (!l || l.cancelled) {
      ((l = null), M());
      return;
    }
    let y = l;
    l = null;
    try {
      y.captureElement.hasPointerCapture(y.pointerId) &&
        y.captureElement.releasePointerCapture(y.pointerId);
    } catch {}
    if (y.vertical ? h === y.startClientY : u === y.startClientX) {
      M();
      return;
    }
    let S = e.read(),
      Z = Mi(S),
      A = (y.vertical ? h - y.startClientY : u - y.startClientX) / e.scale(),
      q = Math.round(A * Vc),
      te;
    if (y.target.kind === "rowDivider")
      te = wd(
        {
          part: e.session().part(),
          layout: S.layout,
          storeRevision: S.storeRevision,
          selection: S.selection,
          cellSelection: S.cellSelection,
          themeColors: S.themeColors,
          ...Z,
        },
        y.resizeTarget,
        Math.max(20, y.rowHeightTwips + q),
      );
    else if (y.rightEdge && y.target.kind === "rightEdge") {
      let ae = Math.max(300, y.leftTwips + q),
        de = Math.max(ae, y.tableWidthTwips + q);
      te = jt({
        command: {
          type: "commitTableRightEdgeResize",
          target: y.resizeTarget,
          columnWidthTwips: ae,
          tableWidthTwips: de,
        },
        part: e.session().part(),
        layout: S.layout,
        storeRevision: S.storeRevision,
        selection: S.selection,
        cellSelection: S.cellSelection,
        themeColors: S.themeColors,
        ...Z,
      });
    } else if (y.target.kind === "columnDivider") {
      let ae = y.leftTwips + q,
        de = y.rightTwips - q;
      ((ae = Math.max(300, ae)), (de = Math.max(300, de)));
      let Fe = y.leftTwips + y.rightTwips;
      (ae + de !== Fe &&
        (ae > Fe - 300 ? ((ae = Fe - 300), (de = 300)) : (de = Fe - ae)),
        (te = jt({
          command: {
            type: "commitTableColumnDividerResize",
            target: y.resizeTarget,
            leftWidthTwips: ae,
            rightWidthTwips: de,
          },
          part: e.session().part(),
          layout: S.layout,
          storeRevision: S.storeRevision,
          selection: S.selection,
          cellSelection: S.cellSelection,
          themeColors: S.themeColors,
          ...Z,
        })));
    } else {
      M();
      return;
    }
    (e.applyTableCommandPlan(te), M());
  }
  function it(y) {
    if (!o || !w) return null;
    let S = e.pageOffsetX(w.pageIndex);
    return zc$2(o, w.x, w.y, y.layout, S, w.pageIndex);
  }
  function Me(y) {
    if (!r || l || y.editingMode === "view") return;
    O();
    let S = it(y);
    if (!S || S.kind === "tableBody") {
      ((r = null), M());
      return;
    }
    if (xc$1(S) !== xc$1(r)) {
      ((r = null), M());
      return;
    }
    ((r = S), ee(S, y));
  }
  function qe() {
    let y = x ?? L(),
      S = y !== null && document.activeElement === y;
    (g(),
      y && t.contains(y) && y.remove(),
      S && e.pagesLayer.focus({ preventScroll: true }));
  }
  function ht(y) {
    if (l || y.editingMode === "view") return;
    let S = x ?? L();
    if (!S || !t.contains(S)) {
      I && g();
      return;
    }
    if (((x = S), !I || (I.kind !== "insertRow" && I.kind !== "insertColumn")))
      return;
    if (!o) {
      qe();
      return;
    }
    let Z = xc$1(I),
      A = yc$1(o, I);
    if (!A || xc$1(A) !== Z) {
      qe();
      return;
    }
    ((I = A), V(A, y));
  }
  function $e(y) {
    let S = e.read();
    if (l && y.pointerId === l.pointerId) {
      ((u = y.clientX), (h = y.clientY));
      let ae =
        (l.vertical ? y.clientY - l.startClientY : y.clientX - l.startClientX) /
        e.scale();
      for (let de of [...t.children]) de !== l.captureElement && de.remove();
      T(l.startEdgePt + ae, l.target);
      return;
    }
    if (S.editingMode === "view") {
      K(false);
      return;
    }
    let Z = Ag(e, y.clientX, y.clientY),
      A = lc$1(S.layout, Z.y);
    A >= 0 && (w = { x: Z.x, y: Z.y, pageIndex: A });
    let q = A >= 0 ? e.pageOffsetX(A) : 0,
      te = o ? zc$2(o, Z.x, Z.y, S.layout, q, A >= 0 ? A : void 0) : null;
    if (!te || te.kind === "tableBody") {
      if (d) return;
      !n &&
        r &&
        (n = setTimeout(() => {
          ((n = null), (r = null), M());
        }, Mg));
      return;
    }
    (n && (clearTimeout(n), (n = null)),
      !(r && wc$1(te) === wc$1(r)) && ((r = te), ee(te, S)));
  }
  function pe(y) {
    if (!(!l || y.pointerId !== l.pointerId)) {
      if (e.read().editingMode === "view") {
        ke();
        return;
      }
      Te();
    }
  }
  function E(y) {
    !l || y.pointerId !== l.pointerId || ke();
  }
  function $(y) {
    y.key !== "Escape" || !l || ke();
  }
  return (
    e.pagesLayer.addEventListener("pointermove", $e),
    document.addEventListener("pointermove", $e),
    document.addEventListener("pointerup", pe),
    document.addEventListener("pointercancel", E),
    e.pagesLayer.addEventListener("keydown", $),
    {
      update() {
        let y = e.read(),
          S = a,
          Z = i;
        ((o = vc$1(y.layout)),
          (a = y.layout.revision),
          (i = y.storeRevision),
          y.editingMode === "view"
            ? (ke(), (r = null), O(), K(true))
            : S !== null &&
              (S !== y.layout.revision || Z !== y.storeRevision) &&
              (r !== null && Me(y), ht(y)),
          (t.style.width = e.pagesLayer.style.width),
          (t.style.height = e.pagesLayer.style.height));
      },
      refreshLabels() {
        let y = e.read();
        if (y.editingMode === "view") return;
        let S = x ?? L();
        if (
          S &&
          t.contains(S) &&
          I &&
          (I.kind === "insertRow" || I.kind === "insertColumn")
        ) {
          V(I, y);
          return;
        }
        r && (r.kind === "insertRow" || r.kind === "insertColumn") && V(r, y);
      },
      destroy() {
        (O(),
          ke(),
          g(),
          M(),
          e.pagesLayer.removeEventListener("pointermove", $e),
          document.removeEventListener("pointermove", $e),
          document.removeEventListener("pointerup", pe),
          document.removeEventListener("pointercancel", E),
          e.pagesLayer.removeEventListener("keydown", $),
          t.remove());
      },
    }
  );
}
var Gc = new WeakMap();
function jo(e, t) {
  let n = Gc.get(e);
  if (!n) {
    n = new Map();
    for (let r of e.pages)
      for (let o of R(r)) {
        n.has(o.paragraphId) || n.set(o.paragraphId, o.props);
        for (let a of o.lines)
          for (let i of gc$1(a))
            n.has(i.paragraphId) || n.set(i.paragraphId, o.props);
      }
    Gc.set(e, n);
  }
  return n.get(t) ?? [];
}
var $c = new WeakMap();
function Lg(e, t) {
  let n = $c.get(e);
  if (!n) {
    let r = new Map(),
      o = (a, i) => {
        for (let l of a) {
          if (l.kind === "paragraph") {
            r.has(l.paragraphId) ||
              r.set(l.paragraphId, { indent: l.indent, inTable: i });
            continue;
          }
          for (let d of l.rows) for (let u of d.cells) o(u.blocks, true);
        }
      };
    for (let a of e.pages) o(a.fragments, false);
    ((n = r), $c.set(e, r));
  }
  return n.get(t) ?? null;
}
function Uo(e, t, n, r, o) {
  let a = Fa(e, t);
  if (!a || a.kind !== "paragraph") return [];
  let i = [],
    l = ig$1(a),
    d = jg$1(a);
  return (
    Sb(a.children, 0, (u) => {
      if (u.kind !== "run") return;
      let h = l.get(u.id);
      if (!h || h.end <= h.start) return;
      let w = Math.max(h.start, n),
        x = Math.min(h.end, r);
      w >= x ||
        i.push({
          start: w,
          end: x,
          properties: hg$1(eg$1(dg$1(u, "runProperties", "rPr"), bg$1), o),
          ...(d.has(u.id) ? { targetRunIds: [u.id] } : {}),
        });
    }),
    i
  );
}
function Xc(e, t, n, r) {
  let o = Fa(e, t);
  if (!o || o.kind !== "paragraph") return false;
  let a = ig$1(o),
    i = false,
    l = (d) => {
      if (i || d.kind !== "run") return;
      let u = a.get(d.id);
      !u ||
        u.end <= u.start ||
        Math.max(u.start, n) >= Math.min(u.end, r) ||
        (eg$1(dg$1(d, "runProperties", "rPr"), bg$1).length > 0 && (i = true));
    };
  return (Sb(o.children, 0, l), i);
}
function Yc(e, t, n) {
  let r = Fa(e, t);
  if (!r || r.kind !== "paragraph") return [];
  let o = ig$1(r),
    a = null,
    i = null,
    l = (u) => {
      if (u.kind !== "run") return;
      let h = o.get(u.id);
      !h ||
        h.end <= h.start ||
        (h.start < n && n <= h.end && (a = u),
        i === null && h.start <= n && n < h.end && (i = u));
    };
  Sb(r.children, 0, l);
  let d = a ?? i;
  return d ? eg$1(dg$1(d, "runProperties", "rPr"), bg$1) : gg$1(e, t);
}
function Bn(e, t, n) {
  let r = e?.find((a) => a.localName === t);
  if (!r) return null;
  let o = r.attributes?.val;
  return t === "vertAlign"
    ? o === n
    : (t === "u" || (o !== "0" && o !== "false" && o !== "off")) &&
        o !== "none";
}
function Qc(e, t) {
  if (!t || t.length === 0) return e;
  let n = e;
  for (let r of t) {
    let o = r.attributes?.val;
    switch (r.localName) {
      case "b":
        n = { ...n, bold: Bn(t, "b") === true };
        break;
      case "i":
        n = { ...n, italic: Bn(t, "i") === true };
        break;
      case "u":
        n = { ...n, underline: Bn(t, "u") === true };
        break;
      case "strike":
        n = { ...n, strikethrough: Bn(t, "strike") === true };
        break;
      case "vertAlign":
        n = {
          ...n,
          superscript: o === "superscript",
          subscript: o === "subscript",
        };
        break;
      case "rFonts":
        n = { ...n, fontFamily: r.attributes?.ascii ?? n.fontFamily };
        break;
      case "sz": {
        let a = Number(o);
        Number.isFinite(a) && (n = { ...n, fontSizeHalfPoints: a });
        break;
      }
      case "color":
        n = { ...n, color: o === "auto" ? null : (o ?? n.color) };
        break;
      case "highlight":
        n = { ...n, highlight: o === "none" ? null : (o ?? n.highlight) };
        break;
    }
  }
  return n;
}
function Jc(e, t, n) {
  return n && n.length > 0 ? Od$1(e, n) : Ld$1(e, t);
}
function Li(e, t, n, r, o) {
  let a = Jc(e, t, r);
  if (a.length === 0) return false;
  let i = (l) => {
    switch (n) {
      case "b":
        return l.style.bold;
      case "i":
        return l.style.italic;
      case "u":
        return l.style.underline !== null;
      case "strike":
        return l.style.strike;
      case "vertAlign":
        return l.style.verticalAlign === o;
      default:
        return false;
    }
  };
  return a.every(i);
}
function eu(e, t, n, r, o) {
  let a = Jc(e, t, r),
    i = a.map((b) => b.style),
    l = (b) => {
      if (i.length === 0) return null;
      let T = b(i[0]);
      return i.every((N) => b(N) === T) ? T : null;
    },
    d = (b) => (b.length > 0 && b.every((T) => T === b[0]) ? b[0] : null),
    u = (b, T) => b.props.some((N) => N.localName === T),
    h = (b) =>
      b.style.fontFamily ??
      n?.(b.range.paragraphId, b.props).fontFamily ??
      null,
    w = (b) =>
      u(b, "sz")
        ? Math.round(b.style.fontSizePt * 2)
        : (n?.(b.range.paragraphId, b.props).fontSizeHalfPoints ??
          Math.round(b.style.fontSizePt * 2)),
    x = a.length === 0 ? n?.(t.head.paragraphId, []) : void 0,
    I = Hg(e, t),
    D = (b) => d(I.map((T) => b(jo(e, T)))),
    L = D((b) => {
      let T = b.find((N) => N.localName === "jc")?.attributes?.val;
      return T === "center" || T === "right" || T === "both"
        ? T
        : T === "end"
          ? "right"
          : "left";
    }),
    k =
      D(
        (b) =>
          b.find((T) => T.localName === "pStyle")?.attributes?.val ??
          o ??
          void 0,
      ) ?? null,
    g = (b) => b.find((T) => T.localName === "spacing")?.attributes,
    O = D((b) => {
      let T = g(b),
        N = Number(T?.line);
      if (!Number.isFinite(N)) return "";
      let _ = T?.lineRule ?? "auto";
      return _ === "auto"
        ? `multiple:${Math.round((N / 240) * 100) / 100}`
        : `${_ === "exact" ? "exact" : "atLeast"}:${Math.round((N / 20) * 100) / 100}`;
    }),
    M = (() => {
      if (!O) return null;
      let [b, T] = O.split(":");
      return { rule: b, value: Number(T) };
    })(),
    K = (b) =>
      D((T) => {
        let N = Number(g(T)?.[b]);
        return Number.isFinite(N) ? Math.round((N / 20) * 100) / 100 : null;
      }),
    C = (() => {
      let b = I.map((ee) => Lg(e, ee)),
        T = b[0];
      if (!T || b.some((ee) => ee === null || ee.inTable)) return null;
      let N = (ee) => Math.round(ee * 20),
        _ = (ee) => N(ee.hanging > 0 ? -ee.hanging : ee.firstLine),
        Q = b,
        P = N(T.indent.left),
        V = N(T.indent.right),
        J = _(T.indent);
      return {
        left: P,
        right: V,
        firstLine: J,
        mixed: {
          left: Q.some((ee) => N(ee.indent.left) !== P),
          right: Q.some((ee) => N(ee.indent.right) !== V),
          firstLine: Q.some((ee) => _(ee.indent) !== J),
        },
      };
    })();
  return {
    bold: i.length > 0 && i.every((b) => b.bold),
    italic: i.length > 0 && i.every((b) => b.italic),
    underline: i.length > 0 && i.every((b) => b.underline !== null),
    strikethrough: i.length > 0 && i.every((b) => b.strike),
    superscript:
      i.length > 0 && i.every((b) => b.verticalAlign === "superscript"),
    subscript: i.length > 0 && i.every((b) => b.verticalAlign === "subscript"),
    fontFamily: a.length > 0 ? d(a.map(h)) : (x?.fontFamily ?? null),
    fontSizeHalfPoints:
      a.length > 0 ? d(a.map(w)) : (x?.fontSizeHalfPoints ?? null),
    color: l((b) => b.color),
    highlight: l((b) => b.highlight),
    alignment: L,
    styleId: k,
    lineSpacing: M,
    spaceBeforePt: K("before"),
    spaceAfterPt: K("after"),
    indent: C,
  };
}
function Hg(e, t) {
  if (t.anchor.paragraphId === t.head.paragraphId) return [t.head.paragraphId];
  let n = fc$1(e),
    r = n.indexOf(t.anchor.paragraphId),
    o = n.indexOf(t.head.paragraphId);
  return r === -1 || o === -1
    ? [t.head.paragraphId]
    : n.slice(Math.min(r, o), Math.max(r, o) + 1);
}
function tu(e, t, n, r) {
  return t.paragraphId !== n.paragraphId
    ? []
    : t.offset !== 0 || n.offset !== e.length
      ? []
      : e.length === 0
        ? []
        : [
            {
              op: "setParagraphMarkProperties",
              paragraphId: t.paragraphId,
              properties: r,
            },
          ];
}
function nu(e) {
  let {
      session: t,
      commit: n,
      orderedRange: r,
      selectionMark: o,
      textOf: a,
    } = e,
    i = () => t.partFor(e.storyScope()) ?? t.part(),
    l = (I, D, L) => t.applyTreeOps(I, D, L, e.storyScope()),
    d = {
      get value() {
        return e.layout();
      },
    },
    u = {
      get value() {
        return e.selection();
      },
    },
    h = (I, D, L) => {
      let k = i();
      if (I.paragraphId === D.paragraphId) {
        let C = Uo(k, I.paragraphId, I.offset, D.offset, L);
        if (C.length === 0) return;
        let b = hg$1(gg$1(k, I.paragraphId), L);
        n(() =>
          l(
            [
              ...C.map((T) => ({
                op: "setRunProperties",
                paragraphId: I.paragraphId,
                start: T.start,
                end: T.end,
                properties: T.properties,
                ...(T.targetRunIds ? { targetRunIds: T.targetRunIds } : {}),
              })),
              ...tu(a(I.paragraphId), I, D, b),
            ],
            o(),
          ),
        );
        return;
      }
      let g = e.paragraphOrder(),
        O = g.indexOf(I.paragraphId),
        M = g.indexOf(D.paragraphId);
      if (O === -1 || M === -1) return;
      let K = [];
      for (let C = O; C <= M; C += 1) {
        let b = g[C],
          T = a(b),
          N = C === O ? I.offset : 0,
          _ = C === M ? D.offset : T.length,
          Q = N < _ ? Uo(k, b, N, _, L) : [];
        for (let V of Q)
          K.push({
            op: "setRunProperties",
            paragraphId: b,
            start: V.start,
            end: V.end,
            properties: V.properties,
            ...(V.targetRunIds ? { targetRunIds: V.targetRunIds } : {}),
          });
        (C < M || (N === 0 && _ === T.length && T.length > 0)) &&
          K.push({
            op: "setParagraphMarkProperties",
            paragraphId: b,
            properties: hg$1(gg$1(k, b), L),
          });
      }
      K.length !== 0 && n(() => l(K, o()));
    },
    w = (I, D) => {
      let L = i(),
        k = [];
      for (let g of Nd$1(d.value, I)) {
        let O = a(g);
        for (let M of Uo(L, g, 0, O.length, D))
          k.push({
            op: "setRunProperties",
            paragraphId: g,
            start: M.start,
            end: M.end,
            properties: M.properties,
            ...(M.targetRunIds ? { targetRunIds: M.targetRunIds } : {}),
          });
        k.push({
          op: "setParagraphMarkProperties",
          paragraphId: g,
          properties: hg$1(gg$1(L, g), D),
        });
      }
      return k.length === 0
        ? false
        : (n(() => l(k, o()), void 0, { keepCellSelection: true }), true);
    },
    x = (I) => {
      cg$1(I.localName) &&
        e.setPendingFormats(hg$1(e.pendingFormats() ?? [], I));
    };
  return {
    setRunProperty(I, D) {
      let L = { localName: I, ...(D ? { attributes: D } : {}) },
        k = e.selectedCells?.();
      if (k && k.length > 0) {
        w(k, L);
        return;
      }
      let { from: g, to: O } = r();
      if (g.paragraphId === O.paragraphId && g.offset === O.offset) {
        x(L);
        return;
      }
      h(g, O, L);
    },
    setParagraphProperty(I, D, L) {
      let { from: k, to: g } = r(),
        O = e.paragraphOrder(),
        M = O.indexOf(k.paragraphId),
        K = O.indexOf(g.paragraphId);
      if (M === -1 || K === -1) return;
      let C = i(),
        b = O.slice(M, K + 1).map((T) => {
          let N = fg$1(C, T),
            _ = L?.mergeAttributes
              ? {
                  ...(N.find((P) => P.localName === I)?.attributes ?? {}),
                  ...D,
                }
              : (D ?? {}),
            Q = Object.fromEntries(
              Object.entries(_).filter(([, P]) => P != null),
            );
          return {
            op: "setParagraphProperties",
            paragraphId: T,
            properties: hg$1(N, {
              localName: I,
              ...(Object.keys(Q).length > 0 ? { attributes: Q } : {}),
            }),
          };
        });
      b.length !== 0 && n(() => l(b, o()));
    },
    formatting: () =>
      Qc(
        eu(
          d.value,
          u.value,
          (I, D) => {
            let L = t.effectiveRunDefaults(I, D);
            if (L.fontFamily !== null) return L;
            let k = e.defaultFontFamily?.() ?? null;
            return k === null ? L : { ...L, fontFamily: k };
          },
          e.selectedCells?.(),
          e.defaultParagraphStyleId?.() ?? null,
        ),
        e.pendingFormats(),
      ),
    toggleRunProperty(I, D) {
      let L = e.selectedCells?.(),
        k = D?.val,
        g = Bn(e.pendingFormats(), I, k) ?? Li(d.value, u.value, I, L, k),
        O = g
          ? { localName: I, attributes: { val: Dg[I] ?? "0" } }
          : { localName: I, ...(D ? { attributes: D } : {}) };
      if (L && L.length > 0) {
        w(L, O);
        return;
      }
      let { from: M, to: K } = r();
      if (M.paragraphId === K.paragraphId && M.offset === K.offset) {
        let C = e.pendingFormats() ?? [],
          b = Li(d.value, u.value, I, void 0, k);
        if (!g === b) {
          let T = C.filter((N) => N.localName !== I);
          e.setPendingFormats(T.length > 0 ? T : null);
        } else x(O);
        return;
      }
      h(M, K, O);
    },
    clearFormatting() {
      e.setPendingFormats(null);
      let I = d.value,
        D = e.paragraphOrder(),
        L = e.selectedCells?.(),
        k = L && L.length > 0 ? [...Nd$1(I, L)] : Ng(D, r());
      if (k.length === 0) return;
      let { from: g, to: O } = r(),
        M = L !== void 0 && L.length > 0,
        K = i(),
        C = [];
      for (let b of k) {
        let T = a(b),
          N = M || b !== g.paragraphId ? 0 : g.offset,
          _ = M || b !== O.paragraphId ? T.length : O.offset;
        (N < _ &&
          Xc(K, b, N, _) &&
          C.push({
            op: "setRunProperties",
            paragraphId: b,
            start: N,
            end: _,
            properties: [],
          }),
          gg$1(K, b).length > 0 &&
            C.push({
              op: "setParagraphMarkProperties",
              paragraphId: b,
              properties: [],
            }),
          fg$1(K, b).length > 0 &&
            C.push({
              op: "setParagraphProperties",
              paragraphId: b,
              properties: [],
            }));
      }
      C.length !== 0 && n(() => l(C, o()), void 0, { keepCellSelection: M });
    },
  };
}
var Dg = { u: "none", vertAlign: "baseline" };
function Ng(e, t) {
  let n = e.indexOf(t.from.paragraphId),
    r = e.indexOf(t.to.paragraphId);
  return n === -1 || r === -1 ? [] : e.slice(n, r + 1);
}
var _g = Object.freeze({ kind: "body" });
function Vo(e, t) {
  if (e) return { kind: "headerFooter", rId: e.scope.rId };
  if (t) {
    let n = fd$1(t.id);
    if (n) return { kind: "notesPart", noteKind: n.noteKind };
  }
  return { kind: "body" };
}
function ou(e, t) {
  return e ? e.scope : t || _g;
}
function Zg(e, t, n) {
  if (n) {
    let o = [];
    for (let a of [e.footnotes, e.endnotes])
      if (a)
        for (let i of a.notes) i.scopeId === n && o.push(...ru(i.fragments));
    return o;
  }
  if (!t) return R(e);
  let r = qn(e, t);
  return r ? ru(r.fragments) : [];
}
function qn(e, t) {
  let n = t.kind === "header" ? e.header : e.footer;
  if (
    n &&
    ((n.rId && n.rId === t.scope.rId) || (!n.rId && n.partName === t.partName))
  )
    return n;
}
function au(e, t) {
  for (let n of e.pages)
    for (let r of ["header", "footer"]) {
      let o = n[r];
      if (o?.rId === t) return { pageIndex: n.index, kind: r, story: o };
    }
  return null;
}
function Hi(e, t) {
  return !!(
    (e.rId && e.rId === t.scope.rId) ||
    (!e.rId && e.partName === t.partName && e.kind === t.kind)
  );
}
function Di(e, t, n) {
  let r = lc$1(e, t.y),
    o = e.pages[r];
  if (!o) return false;
  let a = t.x - n(r),
    i = t.y,
    l = o.contentBox;
  return a >= l.x && a < l.x + l.width && i >= l.y && i < l.y + l.height;
}
function Ni(e, t, n, r, o = {}) {
  return oc$1(e, t, n.fragments, r, o);
}
function Bg(e, t, n) {
  let r = e.pages[t.pageIndex] ?? e.pages[0];
  if (!r) return null;
  let o = qn(r, t);
  return o ? Dd$1(e, t.pageIndex, o.fragments, n) : null;
}
function qg(e, t, n) {
  let r = [];
  for (let o of e.pages)
    for (let a of [o.footnotes, o.endnotes]) {
      let i = a?.notes.find((l) => l.scopeId === t);
      i && r.push(...Dd$1(e, o.index, i.fragments, n));
    }
  return r.length > 0 ? r : null;
}
function iu(e, t) {
  return (
    e.querySelector(`[data-page-index="${t}"] > [data-docx-hf-active]`) ??
    e.querySelector("[data-docx-hf-active]")
  );
}
function su(e, t, n) {
  let r = e.querySelectorAll("[data-docx-note-scope]"),
    o = null;
  for (let a of r) {
    if (a.dataset.docxNoteScope !== t || !a.matches("[data-docx-note]"))
      continue;
    o ??= a;
    let i = Number(a.closest("[data-page-index]")?.dataset.pageIndex);
    if (n !== null && i === n) return a;
  }
  return o;
}
function lu(e, t, n) {
  if (
    ((a) => {
      let i = e.pages[a];
      return !!i && !!qn(i, t);
    })(t.pageIndex) &&
    (n === void 0 || n.has(t.pageIndex))
  )
    return t.pageIndex;
  let o = null;
  for (let a of e.pages)
    if (
      qn(a, t) &&
      (o === null && (o = a.index), n === void 0 || n.has(a.index))
    )
      return a.index;
  return o ?? t.pageIndex;
}
function du(e) {
  return e
    ? {
        rId: e.scope.rId,
        pageIndex: e.pageIndex,
        kind: e.kind,
        partName: e.partName,
        variant: e.variant,
      }
    : null;
}
function cu(e, t, n) {
  (e.classList.toggle("docx-paginated-surface--hf-editing", n),
    t.classList.toggle("docx-pages--hf-editing", n));
}
function _i(e, t, n, r, o, a, i) {
  let l = o ? Bg(e, o, i) : a ? qg(e, a, i) : null,
    d = Jd$2(e, t, n, r, {
      ...(i ? { measurer: i } : {}),
      ...(l ? { stops: l } : {}),
    });
  if (!d) return null;
  if (!l) return d;
  let u = l.find(
    (h) =>
      h.position.paragraphId === d.position.paragraphId &&
      h.position.offset === d.position.offset,
  );
  return u ? { ...d, pageIndex: u.pageIndex } : d;
}
function Zi(e, t, n) {
  for (let r of e.pages) {
    let o = n(r.index);
    for (let a of [r.footnotes, r.endnotes])
      if (a)
        for (let i of a.notes) {
          let l = i.box,
            d = l.x + o,
            u = l.y;
          if (t.x >= d && t.x < d + l.width && t.y >= u && t.y < u + l.height)
            return {
              pageIndex: r.index,
              scopeId: i.scopeId,
              noteKind: i.noteKind,
              noteId: i.noteId,
              local: { x: t.x - d, y: t.y - u },
              fragments: i.fragments,
            };
        }
  }
  return null;
}
function uu(e, t) {
  let n = e[t],
    r = e.contentBox,
    o = e.box;
  if (t === "header") {
    let u = o.y,
      h = r.y,
      w = n ? Math.max(h, n.box.y + n.box.height) : h,
      x = n ? Math.min(u, n.box.y) : u;
    return w <= x ? null : { x: r.x, y: x, width: r.width, height: w - x };
  }
  let a = r.y + r.height,
    i = o.y + o.height,
    l = n ? Math.min(a, n.box.y) : a,
    d = n ? Math.max(i, n.box.y + n.box.height) : i;
  return d <= l ? null : { x: r.x, y: l, width: r.width, height: d - l };
}
function Bi(e, t, n) {
  for (let r of e.pages) {
    let o = n(r.index);
    for (let a of ["header", "footer"]) {
      if (r[a]) continue;
      let i = uu(r, a);
      if (!i) continue;
      let l = i.x + o;
      if (t.x >= l && t.x < l + i.width && t.y >= i.y && t.y < i.y + i.height)
        return { pageIndex: r.index, kind: a };
    }
  }
  return null;
}
function qi(e, t, n) {
  for (let r of e.pages) {
    let o = n(r.index);
    for (let a of ["header", "footer"]) {
      let i = r[a];
      if (!i) continue;
      let l = i.box,
        d = uu(r, a) ?? l,
        u = d.x + o,
        h = d.y;
      if (t.x >= u && t.x < u + d.width && t.y >= h && t.y < h + d.height)
        return {
          pageIndex: r.index,
          kind: a,
          story: i,
          local: { x: t.x - (l.x + o), y: t.y - l.y },
        };
    }
  }
  return null;
}
function zn(e, t, n) {
  if (!t && !n) return fc$1(e);
  let r = new Set(),
    o = [];
  for (let a of e.pages)
    for (let i of Zg(a, t, n)) {
      for (let l of i.lines)
        for (let d of gc$1(l))
          r.has(d.paragraphId) || (r.add(d.paragraphId), o.push(d.paragraphId));
      i.lines.length === 0 &&
        !r.has(i.paragraphId) &&
        (r.add(i.paragraphId), o.push(i.paragraphId));
    }
  return o;
}
function Wo(e, t, n, r) {
  let o = zn(e, n, r);
  if (o.length === 0) return t;
  let a = new Set(o),
    i = (l) => (a.has(l.paragraphId) ? l : { paragraphId: o[0], offset: 0 });
  return { anchor: i(t.anchor), head: i(t.head) };
}
function ru(e) {
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
var zg = 500,
  fu = 4,
  Kn = 40,
  Go = 12;
function Kg(e, t) {
  let n = Math.max(e.x, t.x),
    r = Math.max(e.y, t.y),
    o = Math.min(e.x + e.width, t.x + t.width),
    a = Math.min(e.y + e.height, t.y + t.height);
  return o <= n || a <= r ? 0 : (o - n) * (a - r);
}
function pu(e, t) {
  return Kg(e, t) > 0
    ? true
    : e.width === 0
      ? t.x <= e.x &&
        e.x <= t.x + t.width &&
        !(e.y + e.height < t.y || t.y + t.height < e.y)
      : false;
}
function gt(e, t, n) {
  let r = fc$1(e),
    o = r.indexOf(t.paragraphId),
    a = r.indexOf(n.paragraphId);
  return o !== a ? o - a : t.offset - n.offset;
}
function hu(e, t, n) {
  if (!(t > Ob))
    for (let r of e) {
      if (r.kind === "paragraph") {
        n(r);
        continue;
      }
      if (!(t >= Ob)) {
        for (let o of r.rows)
          if (!o.isHeaderRepeat) for (let a of o.cells) hu(a.blocks, t + 1, n);
      }
    }
}
function zi(e, t) {
  if (!t.placeholder || t.fragments.length === 0) return null;
  let n = null,
    r = null,
    o = (i, l) => {
      ((!n || gt(e, i, n) < 0) && (n = i), (!r || gt(e, l, r) > 0) && (r = l));
    },
    a = t.level !== "inline";
  for (let i of t.fragments) {
    let l = e.pages[i.pageIndex];
    l &&
      hu(l.fragments, 0, (d) => {
        if (pu(i.box, d.box)) {
          if (a) {
            let u = Id$1(e, d.paragraphId).length;
            o(
              { paragraphId: d.paragraphId, offset: 0 },
              { paragraphId: d.paragraphId, offset: u },
            );
            return;
          }
          for (let u of d.lines)
            for (let h of u.spans)
              pu(i.box, h.box) &&
                o(
                  { paragraphId: h.range.paragraphId, offset: h.range.start },
                  { paragraphId: h.range.paragraphId, offset: h.range.end },
                );
        }
      });
  }
  return !n || !r ? null : { from: n, to: r };
}
function jg(e, t) {
  return (e.contentControls ?? []).find((n) => n.id === t) ?? null;
}
function mu(e, t) {
  let n = t.contentControlId;
  if (!n) {
    let o = { x: t.caret.x, y: t.caret.y + t.caret.height / 2 },
      a = qc$1(e, t.pageIndex, o);
    return a?.placeholder ? a : null;
  }
  let r = jg(e, n);
  return r?.placeholder ? r : null;
}
function gu(e, t) {
  let n = e.contentControls ?? [];
  if (n.length === 0) return t;
  let r = gt(e, t.anchor, t.head) <= 0 ? t.anchor : t.head,
    o = gt(e, t.anchor, t.head) <= 0 ? t.head : t.anchor,
    a = true;
  for (; a;) {
    a = false;
    for (let l of n) {
      if (!l.placeholder) continue;
      let d = zi(e, l);
      !d ||
        !(gt(e, r, o) === 0
          ? gt(e, r, d.from) >= 0 && gt(e, r, d.to) < 0
          : gt(e, r, d.to) < 0 && gt(e, o, d.from) > 0) ||
        (gt(e, d.from, r) < 0 && ((r = d.from), (a = true)),
        gt(e, d.to, o) > 0 && ((o = d.to), (a = true)));
    }
  }
  return gt(e, t.anchor, t.head) <= 0
    ? { anchor: r, head: o }
    : { anchor: o, head: r };
}
function yu(e, t = {}) {
  if (t.mode === "native") return { dragging: () => false, destroy: () => {} };
  let { pagesLayer: n, container: r } = e,
    o = n.ownerDocument,
    a = o.defaultView,
    i = null,
    l = null,
    d = 0,
    u = 0,
    h = 0,
    w = 0,
    x = null;
  function I(E, $) {
    if (!l) {
      let S = n.getBoundingClientRect();
      l = { left: S.left, top: S.top };
    }
    let y = e.scale() || 1;
    return { x: (E - l.left) / y, y: ($ - l.top) / y };
  }
  function D(E) {
    return {
      scope: { kind: "headerFooter", rId: E.rId },
      pageIndex: E.pageIndex,
      kind: E.kind,
      partName: E.partName,
      variant: E.variant,
    };
  }
  function L(E, $) {
    let y = e.layout(),
      S = I(E, $),
      Z = lc$1(y, S.y),
      A = y.pages[Z];
    if (!A) return null;
    let q = e.measurer();
    return nc$1(
      y,
      Z,
      { x: S.x - A.contentBox.x - e.pageOffsetX(Z), y: S.y - A.contentBox.y },
      q ? { measurer: q } : {},
    );
  }
  function k(E, $) {
    let y = e.activeNote?.() ?? null;
    if (y) {
      let te = e.layout(),
        ae = Zi(te, I(E, $), e.pageOffsetX);
      if (!ae || ae.scopeId !== y.scopeId) return null;
      let de = e.measurer();
      return oc$1(te, ae.pageIndex, ae.fragments, ae.local, {
        ...(de ? { measurer: de } : {}),
      });
    }
    let S = e.activeHeaderFooter?.() ?? null;
    if (!S) return L(E, $);
    let Z = e.layout(),
      A = I(E, $),
      q = qi(Z, A, e.pageOffsetX);
    if (q && Hi(q.story, D(S))) {
      let te = e.measurer();
      return Ni(Z, q.pageIndex, q.story, q.local, te ? { measurer: te } : {});
    }
    return null;
  }
  function g(E, $) {
    let { story: y, pageIndex: S, kind: Z } = E;
    return {
      rId: y.rId,
      pageIndex: S,
      kind: Z,
      partName: y.partName,
      variant: y.variant,
      ...($ ? { position: $ } : {}),
    };
  }
  function O(E) {
    let $ = e.measurer();
    return (
      Ni(e.layout(), E.pageIndex, E.story, E.local, $ ? { measurer: $ } : {})
        ?.position ?? void 0
    );
  }
  let M = new WeakMap();
  function K(E, $) {
    let y = e.activeNote?.();
    if (y) {
      let q = zn(E, null, y.scopeId).indexOf($);
      return q === -1 ? -1 : q;
    }
    let S = e.activeHeaderFooter?.();
    if (S) {
      let q = zn(E, D(S)).indexOf($);
      return q === -1 ? -1 : q;
    }
    let Z = M.get(E);
    return (
      Z || ((Z = new Map(fc$1(E).map((A, q) => [A, q]))), M.set(E, Z)),
      Z.get($) ?? -1
    );
  }
  function C(E, $, y) {
    let S = K(E, $.paragraphId),
      Z = K(E, y.paragraphId);
    return S !== Z ? S < Z : $.offset < y.offset;
  }
  let b = /[\p{L}\p{N}_'’]/u,
    T = (E) => E !== void 0 && b.test(E);
  function N(E, $, y) {
    if (y === "character") return { from: $, to: $ };
    let S = Id$1(E, $.paragraphId),
      Z = $.paragraphId;
    if (y === "paragraph")
      return {
        from: { paragraphId: Z, offset: 0 },
        to: { paragraphId: Z, offset: S.length },
      };
    let A = Math.max(0, Math.min($.offset, S.length)),
      q = -1;
    if ((T(S[A]) ? (q = A) : A > 0 && T(S[A - 1]) && (q = A - 1), q === -1)) {
      let te = A,
        ae = A;
      for (; te > 0 && /\s/.test(S[te - 1] ?? "");) te -= 1;
      for (; ae < S.length && /\s/.test(S[ae] ?? "");) ae += 1;
      return (
        te === ae && ae < S.length && (ae += 1),
        {
          from: { paragraphId: Z, offset: te },
          to: { paragraphId: Z, offset: ae },
        }
      );
    }
    return {
      from: { paragraphId: Z, offset: Bd$1(S, q + 1, -1) },
      to: { paragraphId: Z, offset: Bd$1(S, q, 1) },
    };
  }
  function _(E, $, y, S, Z) {
    let A = Z ? mu(E, Z) : null,
      q = A ? (zi(E, A) ?? N(E, y, S)) : N(E, y, S),
      te = C(E, q.from, $.from)
        ? { anchor: $.to, head: q.from }
        : { anchor: $.from, head: q.to };
    return gu(E, te);
  }
  let Q = r.closest(".docx-editor__scroll-container");
  function P() {
    return r.closest(".docx-editor__scroll-container");
  }
  function V(E, $, y) {
    if (y < E + Kn) {
      let S = Math.max(0, E + Kn - y);
      return -Math.min(Go, (S / Kn) * Go);
    }
    if (y > $ - Kn) {
      let S = Math.max(0, y - ($ - Kn));
      return Math.min(Go, (S / Kn) * Go);
    }
    return 0;
  }
  function J() {
    x !== null && (a?.cancelAnimationFrame(x), (x = null));
  }
  function ee() {
    x = null;
    let E = i,
      $ = P();
    if (!E || !$ || !a) return;
    let y = $.getBoundingClientRect(),
      S = V(y.top, y.bottom, E.clientY);
    S !== 0 &&
      (($.scrollTop += S),
      (l = null),
      le(E.clientX, E.clientY),
      (x = a.requestAnimationFrame(ee)));
  }
  function Re() {
    if (x !== null || !a || !i) return;
    let E = P();
    if (!E) return;
    let $ = E.getBoundingClientRect();
    V($.top, $.bottom, i.clientY) !== 0 && (x = a.requestAnimationFrame(ee));
  }
  function le(E, $) {
    let y = i;
    if (!y) return;
    let S = k(E, $);
    S &&
      (e.isReadOnlyParagraph?.(S.position.paragraphId) ||
        Be(y, S) ||
        e.setSelection(
          _(e.layout(), y.anchorRange, S.position, y.granularity, S),
        ));
  }
  function Be(E, $) {
    let y = E.anchorCell;
    if (!y) return false;
    if (!$.cell || $.cell.tableId !== y.tableId) return E.cellDragging;
    if (!E.cellDragging && $.cell.cellId === y.cellId) return false;
    let S = Md$1(e.layout(), y, $.cell);
    return S
      ? ((E.cellDragging = true), e.setCellSelection(S), true)
      : E.cellDragging;
  }
  function ke(E) {
    let $ = Date.now(),
      y = $ - u;
    return (
      (d =
        Math.abs(E.clientX - h) <= fu &&
        Math.abs(E.clientY - w) <= fu &&
        y >= 0 &&
        y <= zg
          ? d + 1
          : 1),
      (u = $),
      (h = E.clientX),
      (w = E.clientY),
      d
    );
  }
  let Te = ["character", "word", "paragraph"],
    it = (E) => {
      if (E.button !== 0) return;
      let $ = E.target?.closest?.("[data-docx-cc-widget]");
      if ($) {
        if (
          (E.preventDefault(),
          E.stopPropagation(),
          $.hasAttribute("disabled") || $.dataset.disabledReason)
        )
          return;
        let ce = $.dataset.docxCcId,
          ve = $.dataset.docxCcWidget;
        ce && ve && e.onContentControlWidget?.(ce, ve);
        return;
      }
      if (E.pointerType === "touch") return;
      (i && $e(), (l = null));
      let y = e.layout(),
        S = I(E.clientX, E.clientY),
        Z = e.activeHeaderFooter?.() ?? null,
        A = e.activeNote?.() ?? null,
        q = qi(y, S, e.pageOffsetX),
        te = Zi(y, S, e.pageOffsetX),
        ae = E.target?.closest("[data-docx-hf]"),
        de = !!(ae || q),
        Fe = E.target,
        He = Fe?.closest("[data-docx-note-ref]"),
        Ye = Fe?.closest("[data-docx-note-mark-back]"),
        Le = null,
        ze = () => (Le ??= ke(E));
      if (He?.dataset.docxNoteScope) {
        (E.preventDefault(),
          e.focus(),
          e.enterNote?.(He.dataset.docxNoteScope));
        return;
      }
      if (Ye) {
        (E.preventDefault(), e.focus(), e.exitNote?.(true));
        return;
      }
      if (te && !de) {
        let ce = e.measurer?.(),
          ve = oc$1(y, te.pageIndex, te.fragments, te.local, {
            ...(ce ? { measurer: ce } : {}),
          });
        if (!A || A.scopeId !== te.scopeId) {
          (E.preventDefault(),
            e.focus(),
            e.enterNote?.(
              te.scopeId,
              ve
                ? {
                    paragraphId: ve.position.paragraphId,
                    offset: ve.position.offset,
                  }
                : void 0,
              te.pageIndex,
            ));
          return;
        }
        if (A.pageIndex !== te.pageIndex) {
          (E.preventDefault(),
            e.focus(),
            e.enterNote?.(
              te.scopeId,
              ve
                ? {
                    paragraphId: ve.position.paragraphId,
                    offset: ve.position.offset,
                  }
                : void 0,
              te.pageIndex,
            ));
          return;
        }
      } else if (A) {
        if (!Di(y, S, e.pageOffsetX)) return;
        (e.exitNote?.(false), e.focus());
      }
      if (Z)
        if (q && Hi(q.story, D(Z)))
          q.pageIndex !== Z.pageIndex && e.enterHeaderFooter?.(g(q, O(q)));
        else if (q && q.story.rId) {
          (E.preventDefault(), e.focus(), e.enterHeaderFooter?.(g(q, O(q))));
          return;
        } else if (Di(y, S, e.pageOffsetX)) {
          (E.preventDefault(), e.exitHeaderFooter?.(true), e.focus());
          return;
        } else {
          let ce = ze() >= 2 ? Bi(y, S, e.pageOffsetX) : null;
          ce &&
            (E.preventDefault(),
            e.focus(),
            e.enterEmptyHeaderFooter?.(ce.kind, ce.pageIndex));
          return;
        }
      else if (de && ze() >= 2) {
        if (q?.story.rId)
          (E.preventDefault(), e.focus(), e.enterHeaderFooter?.(g(q, O(q))));
        else if (ae instanceof HTMLElement) {
          let ce = ae.dataset.docxRId,
            ve = ae.dataset.docxHf,
            Tt = ae
              .closest("[data-page-index]")
              ?.getAttribute("data-page-index"),
            Qe = Tt != null ? Number(Tt) : NaN;
          if ((ve === "header" || ve === "footer") && Number.isInteger(Qe))
            if (ce) {
              let At = y.pages[Qe]?.[ve];
              (E.preventDefault(),
                e.focus(),
                e.enterHeaderFooter?.({
                  rId: ce,
                  pageIndex: Qe,
                  kind: ve,
                  partName: At?.partName ?? "",
                  variant: At?.variant ?? "default",
                }));
            } else
              y.pages[Qe]?.[ve] ||
                (E.preventDefault(),
                e.focus(),
                e.enterEmptyHeaderFooter?.(ve, Qe));
        }
        return;
      } else if (ze() >= 2) {
        let ce = Bi(y, S, e.pageOffsetX);
        if (ce) {
          (E.preventDefault(),
            e.focus(),
            e.enterEmptyHeaderFooter?.(ce.kind, ce.pageIndex));
          return;
        }
      }
      let be = k(E.clientX, E.clientY);
      if (!be) return;
      if (e.isReadOnlyParagraph?.(be.position.paragraphId)) {
        E.preventDefault();
        return;
      }
      (E.preventDefault(), e.focus());
      try {
        n.setPointerCapture(E.pointerId);
      } catch {}
      (o.addEventListener("pointermove", qe),
        o.addEventListener("pointerup", ht),
        o.addEventListener("pointercancel", ht));
      let Wn = ze(),
        Mt = E.shiftKey ? "character" : Te[(Wn - 1) % Te.length],
        Ut = mu(y, be);
      if (Ut && !E.shiftKey) {
        if (e.selectContentControl?.(Ut.id)) {
          let ve = e.selection(),
            Tt =
              C(y, ve.anchor, ve.head) ||
              (ve.anchor.paragraphId === ve.head.paragraphId &&
                ve.anchor.offset === ve.head.offset)
                ? { from: ve.anchor, to: ve.head }
                : { from: ve.head, to: ve.anchor };
          i = {
            pointerId: E.pointerId,
            granularity: "character",
            anchorRange: Tt,
            anchorCell: be.cell,
            cellDragging: false,
            clientX: E.clientX,
            clientY: E.clientY,
          };
          return;
        }
        let ce = zi(y, Ut);
        if (ce) {
          ((i = {
            pointerId: E.pointerId,
            granularity: "character",
            anchorRange: ce,
            anchorCell: be.cell,
            cellDragging: false,
            clientX: E.clientX,
            clientY: E.clientY,
          }),
            Me(() => e.setSelection({ anchor: ce.from, head: ce.to })));
          return;
        }
      }
      if (E.shiftKey) {
        let ce = e.selection();
        ((i = {
          pointerId: E.pointerId,
          granularity: Mt,
          anchorRange: { from: ce.anchor, to: ce.anchor },
          anchorCell: be.cell,
          cellDragging: false,
          clientX: E.clientX,
          clientY: E.clientY,
        }),
          Me(() =>
            e.setSelection(
              _(y, { from: ce.anchor, to: ce.anchor }, be.position, Mt, be),
            ),
          ));
      } else {
        let ce = N(y, be.position, Mt);
        ((i = {
          pointerId: E.pointerId,
          granularity: Mt,
          anchorRange: ce,
          anchorCell: be.cell,
          cellDragging: false,
          clientX: E.clientX,
          clientY: E.clientY,
        }),
          Me(() => e.setSelection(gu(y, { anchor: ce.from, head: ce.to }))));
      }
    };
  function Me(E) {
    try {
      E();
    } catch ($) {
      throw ($e(), $);
    }
  }
  let qe = (E) => {
      let $ = i;
      !$ ||
        E.pointerId !== $.pointerId ||
        (E.preventDefault(),
        ($.clientX = E.clientX),
        ($.clientY = E.clientY),
        le(E.clientX, E.clientY),
        Re());
    },
    ht = (E) => {
      let $ = i;
      if (!$ || E.pointerId !== $.pointerId) return;
      $e();
      try {
        n.releasePointerCapture($.pointerId);
      } catch {}
      let y = e.cellSelection();
      y ? e.setCellSelection(y) : e.setSelection(e.selection());
    };
  function $e() {
    if (i)
      try {
        n.releasePointerCapture(i.pointerId);
      } catch {}
    ((i = null),
      (l = null),
      J(),
      o.removeEventListener("pointermove", qe),
      o.removeEventListener("pointerup", ht),
      o.removeEventListener("pointercancel", ht));
  }
  let pe = () => {
    l = null;
  };
  return (
    n.addEventListener("pointerdown", it),
    Q?.addEventListener("scroll", pe, { passive: true }),
    a?.addEventListener("scroll", pe, { capture: true, passive: true }),
    a?.addEventListener("resize", pe, { passive: true }),
    {
      dragging: () => i !== null,
      destroy() {
        ($e(),
          n.removeEventListener("pointerdown", it),
          Q?.removeEventListener("scroll", pe),
          a?.removeEventListener("scroll", pe, { capture: true }),
          a?.removeEventListener("resize", pe));
      },
    }
  );
}
function Ug(e, t) {
  let n = Math.max(0, e.end - e.start);
  return e.start + Math.max(0, Math.min(t, n));
}
var Iu = /^[^\s]{1,512}$/,
  Vg = /["\\\u0000-\u001f\u007f]/;
function $o(e) {
  let t = e.dataset?.paragraphId,
    n = e.dataset?.start;
  if (
    !t ||
    n === void 0 ||
    !/^\d{1,9}$/.test(n) ||
    !Iu.test(t) ||
    t === "__proto__"
  )
    return null;
  let r = Number(n),
    o = e.dataset?.end,
    a =
      o !== void 0 && /^\d{1,9}$/.test(o) && Number(o) >= r
        ? Number(o)
        : r + (e.textContent?.length ?? 0);
  return { paragraphId: t, start: r, end: a };
}
function Su(e, t, n) {
  return Vg.test(t)
    ? e.querySelectorAll(`[data-paragraph-id]${n}`)
    : e.querySelectorAll(`[data-paragraph-id="${t}"]${n}`);
}
function ku(e) {
  let t = e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
  for (; t && t.nodeType === Node.ELEMENT_NODE;) {
    let n = $o(t);
    if (n) return { element: t, identity: n };
    t = t.parentNode;
  }
  return null;
}
function Tu(e) {
  return e.querySelector("[data-docx-hf-active]");
}
function Wg(e) {
  let t = Tu(e);
  return t ? [t, e] : [e];
}
function vu(e, t) {
  let n = ku(e);
  if (n) return n;
  if (e.nodeType !== Node.ELEMENT_NODE) return null;
  let r = e.querySelectorAll("[data-paragraph-id][data-start]"),
    o = t ? [...r].reverse() : [...r];
  for (let a of o) {
    let i = $o(a);
    if (i) return { element: a, identity: i };
  }
  return null;
}
function Gg(e, t) {
  let n = [...e.childNodes];
  if (n.length === 0) return null;
  for (let r = Math.max(0, t); r < n.length; r += 1) {
    let o = vu(n[r], false);
    if (o)
      return { paragraphId: o.identity.paragraphId, offset: o.identity.start };
  }
  for (let r = Math.min(t, n.length) - 1; r >= 0; r -= 1) {
    let o = vu(n[r], true);
    if (o)
      return { paragraphId: o.identity.paragraphId, offset: o.identity.end };
  }
  return null;
}
function bu(e, t, n) {
  if (!n.contains(e)) return null;
  let r = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
  if (r?.closest("[data-docx-field]")) return null;
  let o = r?.closest("[data-docx-hf]");
  if (
    (o && !o.hasAttribute("data-docx-hf-active")) ||
    (Tu(n) && r?.closest(".docx-page-content"))
  )
    return null;
  let a = r?.closest("[data-docx-marker]");
  if (a) return a.parentElement ? Pu(a.parentElement) : null;
  if (r?.closest("[data-docx-tab-leader]")) return null;
  if (e.nodeType === Node.ELEMENT_NODE) {
    let l = e,
      d = $o(l);
    if (d)
      return { paragraphId: d.paragraphId, offset: t > 0 ? d.end : d.start };
    let u = Gg(l, t);
    return u || Qg(l);
  }
  let i = ku(e);
  return i
    ? { paragraphId: i.identity.paragraphId, offset: Ug(i.identity, t) }
    : null;
}
function _r(e, t) {
  if (!t || t.rangeCount === 0) return null;
  let { anchorNode: n, anchorOffset: r, focusNode: o, focusOffset: a } = t;
  if (!n || !o) return null;
  let i = bu(n, r, e),
    l = bu(o, a, e);
  if (!i || !l) {
    let d = i ?? l;
    return d ? { anchor: d, head: d } : null;
  }
  return { anchor: i, head: l };
}
function wu(e, t) {
  if (!t || t.rangeCount === 0) return false;
  let { anchorNode: n, focusNode: r } = t;
  return (!!n && e.contains(n)) || (!!r && e.contains(r));
}
function xu(e, t) {
  for (let n of Wg(e)) {
    let r = $g(n, t);
    if (r) return r;
  }
  return null;
}
function $g(e, t) {
  let n = Su(e, t.paragraphId, "[data-start]"),
    r = null;
  for (let a of n) {
    let i = $o(a);
    if (!i || i.paragraphId !== t.paragraphId) continue;
    let l = Xg(a),
      d = a.textContent?.length ?? 0,
      u = i.end;
    if (l && t.offset >= i.start && t.offset <= u) {
      let h = { node: l, offset: Math.min(t.offset - i.start, d) };
      if (t.offset < u) return h;
      r = h;
    }
  }
  if (r) return r;
  let o = Yg(e, t.paragraphId);
  return o ? { node: o, offset: 0 } : null;
}
function Xg(e) {
  let t = e.firstChild;
  for (; t && t.nodeType === Node.ELEMENT_NODE;) t = t.firstChild;
  return t && t.nodeType === Node.TEXT_NODE ? t : null;
}
function Yg(e, t) {
  let n = null;
  for (let r of Su(e, t, ""))
    if (r.dataset?.paragraphId === t && r.dataset?.start === void 0) {
      if (r.dataset?.lineId !== void 0) return r;
      n ??= r;
    }
  return n;
}
function Pu(e) {
  let t = e.closest("[data-paragraph-id]");
  if (!t || t.dataset.start !== void 0) return null;
  let n = t.dataset.paragraphId;
  return !n || !Iu.test(n) || n === "__proto__"
    ? null
    : { paragraphId: n, offset: 0 };
}
function Qg(e) {
  let t = Pu(e);
  return !t ||
    e
      .closest("[data-paragraph-id]")
      .querySelector("[data-paragraph-id][data-start]")
    ? null
    : t;
}
function Cu(e, t, n) {
  if (!n) return false;
  let r = xu(e, t.anchor),
    o = xu(e, t.head);
  if (!r || !o) return false;
  let a = _r(e, n);
  if (a && jn(a, t)) return true;
  try {
    return (n.setBaseAndExtent(r.node, r.offset, o.node, o.offset), !0);
  } catch {
    return false;
  }
}
function jn(e, t) {
  return (
    e.anchor.paragraphId === t.anchor.paragraphId &&
    e.anchor.offset === t.anchor.offset &&
    e.head.paragraphId === t.head.paragraphId &&
    e.head.offset === t.head.offset
  );
}
function Ru(e) {
  let { document: t, pagesLayer: n, session: r } = e,
    o = false,
    a = null,
    i = false,
    l = false,
    d = false,
    u = null;
  function h() {
    let k = _r(n, t.getSelection());
    return !k || jn(k, e.selection()) ? false : (e.adoptSelection(k), true);
  }
  function w() {
    let k = t.activeElement;
    if (k && n.contains(k)) return true;
    let g = t.getSelection();
    if (!g || g.rangeCount === 0) return true;
    let O = g.anchorNode;
    return !O || !O.isConnected ? true : n.contains(O);
  }
  let x = () => {
    let k = t.getSelection(),
      g = _r(n, k);
    if (!g) {
      if (!wu(n, k)) return;
      i = false;
      let O = Ee(e.selection().head);
      if (jn(O, e.selection())) return;
      e.setSelection(O);
      return;
    }
    ((i = false), !jn(g, e.selection()) && e.setSelection(g));
  };
  function I(k) {
    let g = e.textOf(k),
      O = Rc(n, k, g);
    if (O === null) return;
    let M = Ec(k, g, O);
    if (!M) return;
    let K = M.ops.find((T) => T.op === "insertText"),
      C = K ? (e.pendingFormatOps?.(k, K.offset, K.text.length) ?? []) : [],
      b = e.storyScope();
    (e.commit(() => {
      let T = r.applyTreeOps([...M.ops, ...C], e.selectionMark(), void 0, b);
      return C.length === 0 || !T.rejected
        ? T
        : r.applyTreeOps(M.ops, e.selectionMark(), void 0, b);
    }),
      e.setSelection(Ee({ paragraphId: k, offset: M.caret })));
  }
  function D() {
    if (!l || !a || i) return false;
    let k = _r(n, t.getSelection());
    return k !== null && jn(k, a);
  }
  function L(k) {
    (k instanceof PointerEvent && k.button !== 0) || (i = true);
  }
  return (
    n.addEventListener("pointerdown", L, true),
    n.addEventListener("selectstart", L, true),
    {
      adoptBeforePaint() {
        let k = e.holdsCellSelection?.() === true || e.isGesturing?.() === true,
          g = l || k ? false : h();
        return ((l = false), g);
      },
      noteModelMoved() {
        l = true;
      },
      noteSelectionSettled() {
        l = false;
      },
      mirrorToDom(k = false) {
        if ((e.updateCaret(), !k && !w())) return;
        o = true;
        let g = e.now(),
          O = e.domSelection?.() ?? e.selection();
        ((a = O),
          (i = false),
          Cu(n, O, t.getSelection()),
          e.recordSelectionMs(e.now() - g),
          queueMicrotask(() => {
            o = false;
          }));
      },
      adoptBeforeInput() {
        o || d || e.isGesturing?.() || e.holdsCellSelection?.() || D() || x();
      },
      isComposing: () => d,
      onSelectionChange: () => {
        o || d || e.isGesturing?.() || e.holdsCellSelection?.() || D() || x();
      },
      onCompositionStart: () => {
        ((d = true),
          (u = e.selection().head.paragraphId),
          r.beginComposition(e.storyScope()));
      },
      onCompositionEnd: () => {
        d = false;
        let k = u ?? e.selection().head.paragraphId;
        ((u = null), I(k), r.endComposition(), e.flushLayout(), e.render());
      },
      destroy() {
        (n.removeEventListener("pointerdown", L, true),
          n.removeEventListener("selectstart", L, true),
          (i = false));
      },
    }
  );
}
function Jg(e, t) {
  let n = { ...(e ?? {}) };
  return (
    e?.start !== void 0 && (n.start = t),
    (e?.start === void 0 || e.left !== void 0) && (n.left = t),
    n
  );
}
function Eu(e, t, n, r) {
  let o = { ...e };
  if (r === null) return (delete o[t], delete o[n], o);
  let a = String(r),
    i = e[n] !== void 0;
  return (i && (o[n] = a), (!i || e[t] !== void 0) && (o[t] = a), o);
}
function eh(e, t) {
  let n = { ...e };
  return t === null
    ? (delete n.firstLine, delete n.hanging, n)
    : (t >= 0
        ? ((n.firstLine = String(t)), (n.hanging = "0"))
        : ((n.hanging = String(-t)), (n.firstLine = "0")),
      n);
}
function Fu(e) {
  let {
      session: t,
      commit: n,
      orderedStart: r,
      orderedRange: o,
      selectionMark: a,
      collapsedAt: i,
    } = e,
    l = e.deleteSelectionPlan,
    d = () => t.partFor(e.storyScope()) ?? t.part(),
    u = (C, b, T) => t.applyTreeOps(C, b, T, e.storyScope()),
    h = () => e.paragraphOrder(),
    w = {
      get value() {
        return e.layout();
      },
    },
    x = 720,
    I = 8;
  function D(C) {
    return L(C)?.level ?? null;
  }
  function L(C) {
    return jc$1(w.value, C)?.marker ?? null;
  }
  function k(C) {
    let b = L(C);
    return b ? (b.numFmt === "bullet" ? "bullet" : "ordered") : null;
  }
  function g(C, b) {
    let T = h(),
      N = T.indexOf(C[0] ?? ""),
      _ = T.indexOf(C[C.length - 1] ?? "");
    if (N === -1 || _ === -1) return null;
    for (let Q of [N - 1, _ + 1]) {
      let P = T[Q];
      if (!P) continue;
      let V = L(P);
      if (V && (V.numFmt === "bullet" ? "bullet" : "ordered") === b)
        return V.numId;
    }
    return null;
  }
  function O(C, b) {
    return b < 0 || b > I ? false : e.numberingLevelExists(C.numId, b);
  }
  function M(C, b) {
    return b < 0 || b > I
      ? false
      : e.numberingLevelExists(C.numId, b)
        ? true
        : t.ensureNumberingLevel(
            C.numId,
            b,
            C.numFmt === "bullet" ? "bullet" : "ordered",
          ) && e.numberingLevelExists(C.numId, b);
  }
  function K(C) {
    let b = C.find((N) => N.localName === "ind"),
      T = b?.attributes?.left ?? b?.attributes?.start;
    return !T || !/^-?\d{1,7}$/.test(T) ? 0 : Number(T);
  }
  return {
    insertTab() {
      let C = l(),
        b = C.collapseTo;
      n(
        () =>
          u(
            [
              ...C.ops,
              { op: "insertTab", paragraphId: b.paragraphId, offset: b.offset },
            ],
            a(),
          ),
        () => i({ ...b, offset: b.offset + 1 }),
      );
    },
    insertLineBreak() {
      let C = l(),
        b = C.collapseTo;
      n(
        () =>
          u(
            [
              ...C.ops,
              {
                op: "insertHardBreak",
                paragraphId: b.paragraphId,
                offset: b.offset,
              },
            ],
            a(),
          ),
        () => i({ ...b, offset: b.offset + 1 }),
      );
    },
    insertPageBreak() {
      let C = l(),
        b = C.collapseTo;
      n(
        () =>
          u(
            [
              ...C.ops,
              {
                op: "insertPageBreak",
                paragraphId: b.paragraphId,
                offset: b.offset,
              },
            ],
            a(),
          ),
        () => i({ ...b, offset: b.offset + 1 }),
      );
    },
    exitListOnEmptyItem() {
      let { from: C, to: b } = o();
      if (C.paragraphId !== b.paragraphId || C.offset !== b.offset)
        return false;
      let T = L(C.paragraphId);
      if (!T || e.paragraphTextOf(C.paragraphId).length > 0) return false;
      let Q =
          T.level > 0 && O(T, T.level - 1)
            ? {
                op: "setListLevel",
                paragraphId: C.paragraphId,
                level: T.level - 1,
              }
            : {
                op: "setListNumbering",
                paragraphId: C.paragraphId,
                numId: null,
              },
        P = false;
      return (
        n(() => {
          let V = u([Q], a());
          return ((P = V.committed), V);
        }),
        P
      );
    },
    isListParagraph() {
      let { paragraphId: C } = r();
      return D(C) !== null;
    },
    isListActive(C) {
      let { from: b, to: T } = o(),
        N = h(),
        _ = N.indexOf(b.paragraphId),
        Q = N.indexOf(T.paragraphId);
      if (_ === -1 || Q === -1) return false;
      let P = C === "bullet" ? "bullet" : "ordered",
        V = N.slice(_, Q + 1);
      return V.length > 0 && V.every((J) => k(J) === P);
    },
    toggleList(C) {
      let { from: b, to: T } = o(),
        N = h(),
        _ = N.indexOf(b.paragraphId),
        Q = N.indexOf(T.paragraphId);
      if (_ === -1 || Q === -1) return false;
      let P = N.slice(_, Q + 1);
      if (P.length === 0) return false;
      let V = P.every((le) => k(le) === C),
        J = V ? null : (g(P, C) ?? t.ensureListDefinition(C));
      if (!V && J === null) return false;
      let ee = P.map((le) => ({
          op: "setListNumbering",
          paragraphId: le,
          numId: J,
        })),
        Re = false;
      return (
        n(() => {
          let le = u(ee, a());
          return ((Re = le.committed), le);
        }),
        Re
      );
    },
    canAdjustIndent(C) {
      let { from: b, to: T } = o(),
        N = h(),
        _ = N.indexOf(b.paragraphId),
        Q = N.indexOf(T.paragraphId);
      if (_ === -1 || Q === -1) return false;
      let P = C === "increase" ? 1 : -1;
      return N.slice(_, Q + 1).some((V) => {
        let J = L(V);
        if (J) {
          let Re = J.level + P;
          return Re >= 0 && Re <= I;
        }
        let ee = K(jo(w.value, V));
        return Math.max(0, ee + P * x) !== ee;
      });
    },
    adjustIndent(C) {
      let { from: b, to: T } = o(),
        N = h(),
        _ = N.indexOf(b.paragraphId),
        Q = N.indexOf(T.paragraphId);
      if (_ === -1 || Q === -1) return false;
      let P = C === "increase" ? 1 : -1,
        V = [];
      for (let ee of N.slice(_, Q + 1)) {
        let Re = jo(w.value, ee),
          le = L(ee),
          Be = le?.level ?? null;
        if (le && Be !== null) {
          let qe = Be + P;
          if (qe < 0 || qe > I || !M(le, qe)) continue;
          V.push({ op: "setListLevel", paragraphId: ee, level: qe });
          continue;
        }
        let ke = K(Re),
          Te = Math.max(0, ke + P * x);
        if (Te === ke) continue;
        let it = fg$1(d(), ee),
          Me = it.find((qe) => qe.localName === "ind");
        V.push({
          op: "setParagraphProperties",
          paragraphId: ee,
          properties: hg$1(it, {
            localName: "ind",
            attributes: Jg(Me?.attributes, String(Te)),
          }),
        });
      }
      if (V.length === 0) return false;
      let J = false;
      return (
        n(() => {
          let ee = u(V, a());
          return ((J = ee.committed), ee);
        }),
        J
      );
    },
    setIndent(C) {
      if (C.left === void 0 && C.right === void 0 && C.firstLine === void 0)
        return false;
      let { from: b, to: T } = o(),
        N = fc$1(w.value),
        _ = N.indexOf(b.paragraphId),
        Q = N.indexOf(T.paragraphId);
      if (_ === -1 || Q === -1) return false;
      let P = [];
      for (let J of N.slice(_, Q + 1)) {
        let ee = fg$1(t.part(), J),
          le = {
            ...(ee.find((Be) => Be.localName === "ind")?.attributes ?? {}),
          };
        (C.left !== void 0 && (le = Eu(le, "left", "start", C.left)),
          C.right !== void 0 && (le = Eu(le, "right", "end", C.right)),
          C.firstLine !== void 0 && (le = eh(le, C.firstLine)),
          P.push({
            op: "setParagraphProperties",
            paragraphId: J,
            properties: hg$1(ee, {
              localName: "ind",
              ...(Object.keys(le).length > 0 ? { attributes: le } : {}),
            }),
          }));
      }
      if (P.length === 0) return false;
      let V = false;
      return (
        n(() => {
          let J = t.applyTreeOps(P, a());
          return ((V = J.committed), J);
        }),
        V
      );
    },
    sectionProperties: () => Mc$1(t.part()),
    sectionPropertiesAt(C) {
      let b = Nc$1(t.part());
      if (b.length === 1) return b[0].properties;
      let T = Cb(t.part()),
        N = (P, V) => {
          if (P.id === V) return true;
          for (let J of P.children)
            if (J.kind !== "textValue" && N(J, V)) return true;
          return false;
        },
        _ = T.findIndex((P) => P.id === C || N(P, C)),
        Q = b[b.length - 1];
      if (_ !== -1)
        for (let P of b)
          if (P.blockStart <= _) Q = P;
          else break;
      return Q.properties;
    },
    setSectionProperties(C) {
      let b = false;
      return (
        n(() => {
          let T = t.applyTreeOps(
            [{ op: "setSectionProperties", ...C }],
            a(),
            void 0,
            { kind: "body" },
          );
          return ((b = T.committed), T);
        }),
        b
      );
    },
    insertSectionBreak() {
      if (e.storyScope().kind !== "body") return false;
      let C = l(),
        b = C.collapseTo,
        T = new Set(t.paragraphIds()),
        N = false;
      return (
        n(
          () => {
            let _ = t.applyTreeOps(
              [
                ...C.ops,
                {
                  op: "splitParagraph",
                  paragraphId: b.paragraphId,
                  offset: b.offset,
                },
                { op: "setSectionMark", paragraphId: b.paragraphId },
              ],
              a(),
              void 0,
              { kind: "body" },
            );
            return ((N = _.committed), _);
          },
          () => {
            let _ = t.paragraphIds().find((Q) => !T.has(Q));
            return _ ? i({ paragraphId: _, offset: 0 }) : null;
          },
        ),
        N
      );
    },
  };
}
var th = 4096;
function nh(e) {
  let t = e.tooltip !== null ? { tooltip: l(e.tooltip) } : {};
  if (e.target !== null) {
    let n = V(e.target);
    if (n.ok && n.href.length > 0 && s(n.href).ok) {
      let o =
        e.anchor !== null && !n.href.includes("#") ? V(l(e.anchor)) : null;
      return {
        kind: "external",
        href: o && o.ok && o.href.length > 0 ? `${n.href}#${o.href}` : n.href,
        authored: e.target,
        ...(e.anchor !== null ? { anchor: l(e.anchor) } : {}),
        ...t,
      };
    }
    if (e.anchor === null) return null;
  }
  if (e.anchor !== null) {
    let n = l(e.anchor),
      r = V(n);
    return {
      kind: "internal",
      href: r.ok && r.href.length > 0 ? `#${r.href}` : null,
      authored: e.anchor,
      anchor: n,
      ...t,
    };
  }
  return null;
}
function Ou() {
  let e = new Map(),
    t = new Map(),
    n = 0;
  return {
    project(r) {
      let o = nh(r);
      if (!o) return null;
      let a = `${r.target ?? ""}\0${r.anchor ?? ""}\0${r.tooltip ?? ""}`,
        i = e.get(a);
      if (i === void 0) {
        if (e.size >= th) return null;
        ((n += 1),
          (i = `field-hyperlink:${n}`),
          e.set(a, i),
          t.set(
            i,
            Object.freeze({
              id: i,
              paragraphId: "",
              start: 0,
              end: 0,
              text: "",
              kind: o.kind,
              href: o.href,
              authored: o.authored,
              ...(o.anchor !== void 0 ? { anchor: o.anchor } : {}),
              ...(o.tooltip !== void 0 ? { tooltip: o.tooltip } : {}),
            }),
          ));
      }
      return {
        id: i,
        kind: o.kind,
        href: o.href,
        ...(o.anchor !== void 0 ? { anchor: o.anchor } : {}),
        ...(o.tooltip !== void 0 ? { tooltip: o.tooltip } : {}),
      };
    },
    linkById(r) {
      return t.get(r) ?? null;
    },
  };
}
var Au = 32;
function ji(e) {
  return e.kind !== "textValue" && e.kind === "contentControl";
}
function Ui(e) {
  return e.kind !== "textValue" && e.kind === "contentControlContent";
}
function gn(e) {
  return e.kind === "textValue" ? [] : e.children;
}
function Ki(e, t = 0) {
  return e.kind === "run"
    ? [e]
    : e.kind === "hyperlink"
      ? e.children.flatMap((n) => Ki(n, t))
      : ji(e)
        ? t >= Au
          ? []
          : gn(e)
              .filter((n) => Ui(n))
              .flatMap((n) => gn(n).flatMap((r) => Ki(r, t + 1)))
        : [];
}
function Xo(e) {
  if (e.kind === "textValue") return e.value.length;
  if (e.kind === "tab" || e.kind === "hardBreak") return 1;
  if (e.kind === "runProperties" || e.kind === "generic") return 0;
  if (ji(e)) {
    let n = 0;
    for (let r of gn(e)) if (Ui(r)) for (let o of gn(r)) n += Xo(o);
    return n;
  }
  let t = 0;
  for (let n of gn(e)) t += Xo(n);
  return t;
}
function Lu(e, t, n) {
  for (let r of e) {
    if (r.kind === "hyperlink") {
      n(r);
      continue;
    }
    if (ji(r)) {
      if (t >= Au) continue;
      for (let o of gn(r)) Ui(o) && Lu(gn(o), t + 1, n);
      continue;
    }
    n(r);
  }
}
function rh(e, t, n, r) {
  let o = oh(e, t);
  if (!o || o.kind !== "paragraph") return [];
  let a = r(t),
    i = [],
    l = 0;
  return (
    Lu(o.children, 0, (d) => {
      if (d.kind === "run") {
        l += Xo(d);
        return;
      }
      if (d.kind !== "hyperlink") return;
      let u = l;
      for (let w of Ki(d)) l += Xo(w);
      let h = Ua(d, n);
      i.push({
        id: d.id,
        paragraphId: t,
        start: u,
        end: l,
        text: a.slice(u, l),
        kind: h.kind,
        href: h.href,
        authored: h.authored,
        ...(h.anchor !== void 0 ? { anchor: h.anchor } : {}),
        ...(h.tooltip !== void 0 ? { tooltip: h.tooltip } : {}),
      });
    }),
    i
  );
}
function oh(e, t) {
  let n = (r) => {
    if (r.kind === "textValue") return r.id === t ? r : null;
    if (r.id === t) return r;
    for (let o of r.children) {
      let a = n(o);
      if (a) return a;
    }
    return null;
  };
  return n(e.root);
}
function ah(e, t) {
  for (let n of e)
    if (
      n.paragraphId === t.paragraphId &&
      t.offset >= n.start &&
      t.offset <= n.end
    )
      return n;
  return null;
}
function ih(e, t) {
  for (let n of V$1(e, t.paragraphId))
    for (let r of n.lines)
      for (let o of r.spans)
        if (
          !(!o.fieldAtom || !o.link) &&
          t.offset >= o.range.start &&
          t.offset <= o.range.end
        )
          return o.link.id;
  return null;
}
function Hu(e) {
  let t = () => e.storyScope(),
    n = () => e.session.partFor(t()),
    r = (u) => e.session.relationshipTarget(u, t()),
    o = (u, h, w) => e.session.applyTreeOps(u, h, w, t()),
    a = (u) => {
      let h = n();
      return h ? rh(h, u, r, e.textOf) : [];
    },
    i = () => ah(a(e.selection().head.paragraphId), e.selection().head),
    l = () => {
      let u = e.selection().head,
        h = ih(e.layout(), u);
      return h === null ? null : e.fieldLinkById(h);
    },
    d = (u) => {
      let h = e.selection().head.paragraphId,
        w = a(h).find((x) => x.id === u);
      if (w) return w;
      for (let x of e.session.paragraphIdsIn(t())) {
        let I = a(x).find((D) => D.id === u);
        if (I) return I;
      }
      return null;
    };
  return {
    linksInCaretParagraph: () => a(e.selection().head.paragraphId),
    linkAtCaret: i,
    fieldLinkAtCaret: l,
    linkById: d,
    applyHyperlink(u) {
      let h = u.url !== void 0 && u.url.length > 0,
        w = u.anchor !== void 0 && u.anchor.length > 0;
      if (h === w) return false;
      let x = t();
      if (!n() || e.refusesWrite()) return false;
      let I;
      if (h) {
        let _ = e.session.ensureHyperlinkRelationship(u.url, x);
        if (!_) return false;
        I = _;
      }
      let D = {
          ...(I !== void 0 ? { relationshipId: I } : {}),
          ...(w ? { anchor: u.anchor } : {}),
          ...(u.tooltip !== void 0 ? { tooltip: u.tooltip } : {}),
        },
        L = i(),
        k = e.orderedRange(),
        g =
          k.from.paragraphId === k.to.paragraphId &&
          k.from.offset === k.to.offset;
      if (L && (g || lh(L, k))) {
        let _ = [{ op: "setHyperlinkTarget", linkId: L.id, ...D }];
        if (u.text !== void 0 && u.text !== L.text) {
          let P = Mu(L.paragraphId, L.start, L.end, u.text);
          if (!P) return false;
          _.push(...P);
        }
        let Q = false;
        return (
          e.commit(
            () => {
              let P = o(_, e.selectionMark());
              return ((Q = P.committed), P);
            },
            () => null,
          ),
          Q
        );
      }
      let O = k.from.paragraphId;
      if (k.to.paragraphId !== O) return false;
      let M = [],
        K = k.from.offset,
        C = k.to.offset;
      if (g) {
        let _ = u.text ?? u.url ?? u.anchor ?? "";
        if (_.length === 0) return false;
        (M.push({ op: "insertText", paragraphId: O, offset: K, text: _ }),
          (C = K + _.length));
      } else if (u.text !== void 0 && u.text !== e.textOf(O).slice(K, C)) {
        let _ = Mu(O, K, C, u.text);
        if (!_) return false;
        (M.push(..._), (C = K + u.text.length));
      }
      if (C <= K) return false;
      let b = sh(e.session);
      M.push({
        op: "insertHyperlink",
        paragraphId: O,
        start: K,
        end: C,
        ...D,
        ...(b ? { styleId: b } : {}),
      });
      let T = false,
        N = { paragraphId: O, offset: C };
      return (
        e.commit(
          () => {
            let _ = o(M, e.selectionMark(), {
              paragraphId: O,
              start: C,
              end: C,
            });
            return ((T = _.committed), _);
          },
          () => ({ anchor: N, head: N }),
        ),
        T
      );
    },
    removeHyperlink(u) {
      if (!n()) return false;
      let h = u ? d(u) : i();
      if (!h) return false;
      let w = false,
        x = { paragraphId: h.paragraphId, offset: h.end };
      return (
        e.commit(
          () => {
            let I = o(
              [{ op: "removeHyperlink", linkId: h.id }],
              e.selectionMark(),
            );
            return ((w = I.committed), I);
          },
          () => ({ anchor: x, head: x }),
        ),
        w
      );
    },
  };
}
function sh(e) {
  for (let t of e.documentStyles())
    if (t.type === "character" && t.styleId.toLowerCase() === "hyperlink")
      return t.styleId;
  return null;
}
function lh(e, t) {
  return (
    t.from.paragraphId === e.paragraphId &&
    t.to.paragraphId === e.paragraphId &&
    t.from.offset >= e.start &&
    t.to.offset <= e.end
  );
}
function Mu(e, t, n, r) {
  if (r.length === 0) return null;
  let o = [
    { op: "insertText", paragraphId: e, offset: t, text: r, bias: "right" },
  ];
  return (
    n > t &&
      o.push({
        op: "deleteText",
        paragraphId: e,
        start: t + r.length,
        end: n + r.length,
      }),
    o
  );
}
var dh = 24;
function Du(e) {
  let { pagesLayer: t } = e,
    n = t.ownerDocument.defaultView;
  function r() {
    return e.container.closest(".docx-editor__scroll-container");
  }
  let o = (x) => {
      if (!x || x.length === 0 || x.startsWith("#")) return false;
      let I = V(x);
      return !I.ok || !I.href || !n
        ? false
        : (n.open(I.href, "_blank", "noopener,noreferrer"), true);
    },
    a = (x) => {
      let I = e.layout(),
        D = Ed(I, x);
      if (!D) return false;
      let L = I.pages[D.pageIndex];
      if (!L) return false;
      let k = L.box.y + (L.contentBox.y - L.box.y) + D.y,
        g = r();
      return (
        g &&
          ((g.scrollTop = Math.max(0, k * e.scale() - dh)), e.onScrolled?.()),
        e.setSelection(x),
        true
      );
    },
    i = (x) => {
      let I = e.bookmarks().get(x);
      return I ? a(I) : false;
    },
    l = null;
  function d(x) {
    if (!x || x.closest("[data-docx-hf]")) return null;
    let I = x.closest("a.docx-hyperlink");
    if (I) {
      let L = I.dataset.docxLink;
      return L ? { linkId: L, drawing: false } : null;
    }
    let D = x.closest("[data-docx-drawing-link]");
    if (D) {
      let L = D.dataset.docxDrawingLink;
      return L ? { linkId: L, drawing: true } : null;
    }
    return null;
  }
  let u = (x) => {
      l = null;
      let I = x.target,
        D = d(I);
      if (!D) return;
      let k = I.closest(
        "[data-docx-drawing-link], a.docx-hyperlink",
      ).getBoundingClientRect();
      l = {
        linkId: D.linkId,
        drawing: D.drawing,
        rect: { left: k.left, top: k.top, bottom: k.bottom, right: k.right },
      };
    },
    h = (x) => {
      let I = x.target,
        D = d(I);
      if (!D) {
        let g = l;
        if (((l = null), !g)) return;
        (x.preventDefault(), w(g.linkId, g.rect, x, g.drawing));
        return;
      }
      ((l = null), x.preventDefault());
      let k = I.closest(
        "[data-docx-drawing-link], a.docx-hyperlink",
      ).getBoundingClientRect();
      w(
        D.linkId,
        { left: k.left, top: k.top, bottom: k.bottom, right: k.right },
        x,
        D.drawing,
      );
    };
  function w(x, I, D, L) {
    let k = L ? (e.drawingLinkById?.(x) ?? null) : e.linkById(x);
    if (!k) return;
    if (D.metaKey || D.ctrlKey) {
      k.kind === "external" ? o(k.href) : k.anchor && i(k.anchor);
      return;
    }
    if (e.isCollapsedSelection()) {
      if (k.kind === "internal") {
        k.anchor && i(k.anchor);
        return;
      }
      e.onPopover?.({ link: k, rect: I });
    }
  }
  return (
    t.addEventListener("pointerdown", u, true),
    t.addEventListener("click", h),
    {
      goToPosition: a,
      goToBookmark: i,
      openExternal: o,
      destroy() {
        (t.removeEventListener("pointerdown", u, true),
          t.removeEventListener("click", h));
      },
    }
  );
}
function ch(e) {
  let t = e.hyperlinkHref;
  if (!t) return null;
  let n = e.kind === "anchoredDrawing" ? e.anchorParagraphId : e.paragraphId,
    r = e.kind === "inlineDrawing" ? e.start : 0,
    o = t.startsWith("#") ? "internal" : "external";
  return Object.freeze({
    id: e.drawingNodeId,
    paragraphId: n,
    start: r,
    end: r + 1,
    text: "",
    kind: o,
    href: t,
    authored: t,
    ...(o === "internal" ? { anchor: t.slice(1) } : {}),
  });
}
function Vi(e, t) {
  return e.drawingNodeId !== t ? null : ch(e);
}
function Nu(e, t) {
  if (!e) return null;
  for (let n of e.anchoredDrawings ?? []) {
    let r = Vi(n, t);
    if (r) return r;
  }
  return null;
}
function uh(e, t) {
  for (let r of e.anchoredDrawings ?? []) {
    let o = Vi(r, t);
    if (o) return o;
  }
  for (let r of e.fragments) {
    if (r.kind === "table") {
      for (let a of r.rows)
        for (let i of a.cells)
          for (let l of i.blocks) {
            let d = Zu(l, t);
            if (d) return d;
          }
      continue;
    }
    let o = _u(r, t);
    if (o) return o;
  }
  let n = Nu(e.header, t);
  return n || Nu(e.footer, t);
}
function _u(e, t) {
  for (let n of e.lines)
    for (let r of n.drawings ?? []) {
      let o = Vi(r, t);
      if (o) return o;
    }
  return null;
}
function Zu(e, t) {
  if (e.kind === "table") {
    for (let n of e.rows)
      for (let r of n.cells)
        for (let o of r.blocks) {
          let a = Zu(o, t);
          if (a) return a;
        }
    return null;
  }
  return _u(e, t);
}
function Bu(e, t) {
  for (let n of e.pages) {
    let r = uh(n, t);
    if (r) return r;
  }
  return null;
}
function qu(e) {
  return {
    applyHeaderFooterLifecycle(t) {
      let n = null;
      return (
        e.commit(() => {
          let r = e.applyOps([t]);
          return (r.rejected && (n = String(r.reason ?? "rejected")), r);
        }),
        n ? { ok: false, reason: n } : { ok: true }
      );
    },
    insertPageField(t) {
      if (!e.isHeaderFooterOpen()) return false;
      let n = e.orderedStart();
      return (
        e.commit(
          () =>
            e.applyOps(
              [
                ...e.deleteSelectionOps(),
                {
                  op: "insertPageField",
                  paragraphId: n.paragraphId,
                  offset: n.offset,
                  field: t,
                },
              ],
              e.selectionMark(),
            ),
          () =>
            e.collapsedAt({
              paragraphId: n.paragraphId,
              offset: n.offset + (t === "PAGE_X_OF_Y" ? 6 : 1),
            }),
        ),
        e.lastRejection() === null
      );
    },
  };
}
var Zr = "the document is open for viewing",
  Yo = "image property edits are not supported in suggesting mode",
  fh = "trackedDrawingDeletionUnsupported";
function zu(e) {
  function t() {
    return { committed: false, rejected: true, opCount: 0, reason: Zr };
  }
  function n() {
    return { committed: false, rejected: true, opCount: 0, reason: Yo };
  }
  return {
    applyDrawingOps(r) {
      if (e.editingMode() === "view") return t();
      if (e.editingMode() === "suggest") return n();
      let o = e.selectionMark();
      return e.applyOps(r, o, o);
    },
    applyImageProperties(r) {
      if (e.editingMode() === "view")
        return { ok: false, reason: "invalidArgs", detail: Zr };
      if (e.editingMode() === "suggest")
        return { ok: false, reason: "invalidArgs", detail: Yo };
      let o = { ok: false, reason: "invalidArgs" };
      return (
        e.commit(
          () => (
            (o = e.session.applyImageProperties(e.storyScope(), r)),
            {
              committed: o.ok,
              rejected: !o.ok,
              opCount: o.ok ? 1 : 0,
              ...(o.ok ? {} : { reason: o.detail ?? o.reason }),
            }
          ),
        ),
        o
      );
    },
    deleteImage(r) {
      if (e.editingMode() === "view")
        return { ok: false, reason: "invalidArgs", detail: Zr };
      if (e.editingMode() === "suggest")
        return { ok: false, reason: "invalidArgs", detail: fh };
      let o = { ok: false, reason: "invalidArgs" };
      return (
        e.commit(
          () => (
            (o = e.session.deleteImage(e.storyScope(), r)),
            {
              committed: o.ok,
              rejected: !o.ok,
              opCount: o.ok ? 1 : 0,
              ...(o.ok ? {} : { reason: o.detail ?? o.reason }),
            }
          ),
        ),
        o
      );
    },
    insertImage(r) {
      return e.editingMode() === "view"
        ? Promise.resolve({ ok: false, reason: "invalidArgs", detail: Zr })
        : e.editingMode() === "suggest"
          ? Promise.resolve({ ok: false, reason: "invalidArgs", detail: Yo })
          : e.session.insertImage(e.storyScope(), {
              ...r,
              decodePort: e.decodePort(),
            });
    },
    replaceImage(r, o, a, i) {
      return e.editingMode() === "view"
        ? Promise.resolve({ ok: false, reason: "invalidArgs", detail: Zr })
        : e.editingMode() === "suggest"
          ? Promise.resolve({ ok: false, reason: "invalidArgs", detail: Yo })
          : e.session.replaceImage(e.storyScope(), r, o, a, e.decodePort(), i);
    },
  };
}
function Ku(e) {
  let t = null,
    n = null,
    r = "",
    o = () => {
      if (!t) return;
      let l = lu(e.layout(), t, e.materializedPages?.());
      l !== t.pageIndex && (t = { ...t, pageIndex: l });
    },
    a = (l) => {
      if (
        !l.rId ||
        e.session.partFor({ kind: "headerFooter", rId: l.rId }) === null
      )
        return false;
      let d = e.layout(),
        u = au(d, l.rId),
        h = t,
        w = h?.scope.rId === l.rId,
        x = u ? null : ph(e.session, l.rId);
      if (!u && !x) return false;
      let I = l.pageIndex ?? (w && h ? h.pageIndex : (u?.pageIndex ?? 0)),
        D = l.kind ?? (w && h ? h.kind : (u?.kind ?? x.kind)),
        L = l.variant ?? (w && h ? h.variant : (u?.story.variant ?? x.variant)),
        k = w && h ? h.partName : (u?.story.partName ?? x.partName),
        g = d.pages[I] ?? d.pages[u?.pageIndex ?? 0],
        O = (g
          ? qn(g, {
              scope: { kind: "headerFooter", rId: l.rId },
              kind: D,
              partName: k,
            })
          : null) ??
          u?.story ?? { scope: { rId: l.rId }, variant: L, partName: k },
        M = e.selection(),
        K = h
          ? h.savedBodySelection
          : { anchor: { ...M.anchor }, head: { ...M.head } },
        C =
          l.sectionIndex ??
          (w && h?.sectionIndex !== void 0 ? h.sectionIndex : x?.sectionIndex);
      t = {
        scope: { kind: "headerFooter", rId: l.rId },
        pageIndex: I,
        ...(C !== void 0 ? { sectionIndex: C } : {}),
        kind: D,
        variant: O.variant,
        partName: O.partName,
        savedBodySelection: K,
      };
      let T = e.session.paragraphIdsIn(Vo(t))[0];
      if (!T) return ((t = null), false);
      let N = l.position
        ? Wo(d, { anchor: l.position, head: l.position }, t)
        : w
          ? Wo(d, M, t)
          : {
              anchor: { paragraphId: T, offset: 0 },
              head: { paragraphId: T, offset: 0 },
            };
      return (
        e.setScopeSelection(N),
        e.noteModelMoved(),
        e.render(),
        e.mirrorToDom(),
        e.notify(),
        true
      );
    },
    i = () => {
      if (!t) return;
      let l = t.savedBodySelection;
      ((t = null),
        e.setScopeSelection(Wo(e.layout(), l, null)),
        e.noteModelMoved(),
        e.render(),
        e.mirrorToDom(),
        e.notify());
    };
  return {
    getActive: () => t,
    activeScope: () => ou(t),
    setActiveScope(l) {
      return l.kind === "body"
        ? (i(), true)
        : l.kind === "headerFooter"
          ? a({ rId: l.rId })
          : false;
    },
    enterHeaderFooter: a,
    exitHeaderFooter: i,
    reconcileOccurrence: o,
    headerFooterState() {
      if (!t) return null;
      let l = e.session.headerFooterResolutionBySection(),
        d = t.sectionIndex ?? 0,
        u,
        h,
        w,
        x = (g) => {
          let O = l[g];
          if (!O) return false;
          let K = (t.kind === "header" ? O.headers : O.footers).get(t.variant);
          return !K || K.rId !== t.scope.rId
            ? false
            : ((d = g),
              (u = K.inherited),
              (h = O.titlePage),
              (w = O.evenAndOddHeaders),
              true);
        };
      if (!(t.sectionIndex !== void 0 && x(t.sectionIndex))) {
        let g;
        l.forEach((O, M) => {
          let C = (t.kind === "header" ? O.headers : O.footers).get(t.variant);
          !C ||
            C.rId !== t.scope.rId ||
            !(
              g === void 0 ||
              (g && !C.inherited) ||
              (g === C.inherited && M < d)
            ) ||
            ((d = M),
            (u = C.inherited),
            (h = O.titlePage),
            (w = O.evenAndOddHeaders),
            (g = C.inherited));
        });
      }
      let I = Nc$1(e.session.part()),
        D = I[d]?.properties ?? I.at(-1)?.properties,
        L = D?.margins.headerTwips,
        k = D?.margins.footerTwips;
      return {
        editing: t.kind,
        sectionIndex: d,
        variant: t.variant,
        rId: t.scope.rId,
        partName: t.partName,
        ...(u !== void 0 ? { inherited: u } : {}),
        ...(h !== void 0 ? { titlePage: h } : {}),
        ...(w !== void 0 ? { evenAndOddHeaders: w } : {}),
        ...(L !== void 0 ? { headerDistanceTwips: L } : {}),
        ...(k !== void 0 ? { footerDistanceTwips: k } : {}),
      };
    },
    headerFooterStateStable(l) {
      if (!t) return ((n = null), (r = ""), null);
      let d = this.headerFooterState();
      if (!d) return null;
      let u = [
        l,
        d.editing,
        d.sectionIndex,
        d.variant ?? "",
        d.rId ?? "",
        d.partName ?? "",
        String(d.inherited),
        String(d.titlePage),
        String(d.evenAndOddHeaders),
        String(d.headerDistanceTwips ?? ""),
        String(d.footerDistanceTwips ?? ""),
      ].join("|");
      return ((n && r === u) || ((n = Object.freeze({ ...d })), (r = u)), n);
    },
  };
}
function ph(e, t) {
  let n = e.headerFooterResolutionBySection();
  for (let r = 0; r < n.length; r += 1) {
    let o = n[r];
    for (let a of ["header", "footer"]) {
      let i = a === "header" ? o.headers : o.footers;
      for (let [l, d] of i)
        if (d.rId === t)
          return { sectionIndex: r, kind: a, variant: l, partName: d.partName };
    }
  }
  return null;
}
function Uu(e) {
  let t = null,
    n = null,
    r = null,
    o = (i) => (
      e.setLastRejection(null),
      e.commit(() => {
        let l = e.applyOps([i], e.selectionMark());
        return (
          l.rejected && e.setLastRejection(String(l.reason ?? "rejected")),
          l
        );
      }),
      e.lastRejection() === null
    ),
    a = (i, l, d) => {
      let u = fd$1(i);
      if (!u) return (e.setLastRejection("invalid note scope id"), false);
      let h = e.session.currentPackage(),
        w = Zd$1(h, u.noteKind),
        x = w ? Ad$2(w.root, u.noteId) : null;
      if (!w || !x) return (e.setLastRejection("note not found"), false);
      if (e.activeScope().kind === "body") {
        let I = e.selection();
        r = {
          anchor: {
            paragraphId: I.anchor.paragraphId,
            offset: I.anchor.offset,
          },
          head: { paragraphId: I.head.paragraphId, offset: I.head.offset },
        };
      }
      if (
        ((t = { kind: "note", id: ed(u.noteKind, u.noteId) }),
        (n = Number.isInteger(d) ? d : null),
        l)
      )
        e.setSelection({ anchor: l, head: l });
      else {
        let I = mh(x),
          D = new Set(
            e.session.paragraphIdsIn({
              kind: "notesPart",
              noteKind: u.noteKind,
            }),
          ),
          L = I.find((k) => D.has(k.id));
        if (L) {
          let k = gh(L);
          e.setSelection({
            anchor: { paragraphId: L.id, offset: k },
            head: { paragraphId: L.id, offset: k },
          });
        }
      }
      return (
        e.noteModelMoved(),
        e.render(),
        (n ??= e.revealNote(t.id)),
        e.notify(),
        true
      );
    };
  return {
    insertNote(i) {
      if (e.activeScope().kind !== "body")
        return (e.setLastRejection("insertNote requires body scope"), false);
      let l = e.orderedStart(),
        d = ju(e.session.currentPackage(), i);
      if (
        !o({
          op: "insertNote",
          noteKind: i,
          paragraphId: l.paragraphId,
          offset: l.offset,
        })
      )
        return false;
      let w = [...ju(e.session.currentPackage(), i)].find((x) => !d.has(x));
      return w === void 0 ? true : a(ed(i, w));
    },
    deleteNote(i, l) {
      return o({ op: "deleteNote", noteKind: i, noteId: l });
    },
    convertNote(i, l) {
      return o({ op: "convertNote", fromKind: i, noteId: l });
    },
    convertAllNotes(i) {
      return o({ op: "convertAllNotes", fromKind: i });
    },
    setNoteProperties(i) {
      return o({
        op: "setNoteProperties",
        scope: i.scope,
        sectionIndex: i.sectionIndex,
        footnote: i.footnote,
        endnote: i.endnote,
      });
    },
    enterNote: a,
    exitNote(i = true) {
      if (!t) return;
      let l = r;
      ((t = null),
        (n = null),
        (r = null),
        e.setActiveScopeBodyOrHf({ kind: "body" }),
        i && l && e.setSelection(l),
        e.noteModelMoved(),
        e.render(),
        e.notify());
    },
    activeNoteScope() {
      return t;
    },
    activeNotePageIndex() {
      return n;
    },
    setActiveNotePageIndex(i) {
      !t || !Number.isInteger(i) || (n !== i && (n = i));
    },
  };
}
function mh(e) {
  let t = [],
    n = (r, o) => {
      if (!(o > 32)) {
        if (r.kind === "paragraph") {
          t.push(r);
          return;
        }
        if ("children" in r) for (let a of r.children) n(a, o + 1);
      }
    };
  return (n(e, 0), t);
}
function gh(e) {
  let t = Rd$1(e)[0];
  return t && kd$1(t.node) ? t.end : 0;
}
function ju(e, t) {
  let n = Zd$1(e, t),
    r = new Set();
  if (!n) return r;
  for (let o of zd$2(n.root)) {
    if (!qd$1(o)) continue;
    let a = od$1(o);
    a !== null && r.add(a);
  }
  return r;
}
var hh = 500;
function yh(e, t) {
  let n = e.part(),
    r = Nc$1(n),
    o = Cb(n),
    a = new Map();
  for (let i = 0; i < r.length; i += 1) {
    let l = r[i];
    for (let d = l.blockStart; d < l.blockEndExclusive; d += 1) {
      let u = o[d];
      if (!u) continue;
      if (u.kind === "paragraph") {
        a.set(u.id, i);
        continue;
      }
      let h = (w, x) => {
        if (!(x > 32)) {
          if (w.kind === "paragraph" && typeof w.id == "string") {
            a.set(w.id, i);
            return;
          }
          for (let I of w.children ?? []) h(I, x + 1);
        }
      };
      h(u, 0);
    }
  }
  return a.get(t) ?? 0;
}
function vh(e, t) {
  let n = e.part(),
    r = Cb(n),
    o = [];
  for (let a = 0; a < r.length; a += 1) {
    let i = r[a];
    if (i.kind !== "paragraph") continue;
    let l = Lc$1(i);
    l && o.push(l);
  }
  for (; o.length < t.length;) o.push(void 0);
  return o;
}
function Vu(e) {
  if (!e) return null;
  let t = e.session,
    n = e.state().selection.head.paragraphId,
    r = yh(t, n),
    o = t.currentPackage(),
    a = Gd$2(o),
    i = Hd$2(a),
    l = Id$2(a),
    d = Nc$1(t.part()),
    u = vh(t, d),
    h = Ed$1(u[r]),
    w = Fd$1(u[r]),
    x = Jd$1(h, i),
    I = Kd$1(w, l);
  return {
    sectionIndex: r,
    footnote: {
      resolved: x,
      ...(i ? { documentAuthored: i } : {}),
      ...(h ? { sectionAuthored: h } : {}),
    },
    endnote: {
      resolved: I,
      ...(l ? { documentAuthored: l } : {}),
      ...(w ? { sectionAuthored: w } : {}),
    },
  };
}
function Wu(e, t) {
  let n = fd$1(t);
  if (!n) return null;
  let r = Zd$1(e.currentPackage(), n.noteKind);
  if (!r) return null;
  let o = r,
    a = Ad$2(o.root, n.noteId);
  if (!a) return null;
  let i = [],
    l = hh,
    d = (h, w) => {
      if (!(w > 32 || l <= 0)) {
        if (h.kind === "paragraph" && typeof h.id == "string") {
          let x = (Gf(o, h.id) ?? "").replace(/\uFFFC/g, "").trim();
          if (x) {
            let I = x.slice(0, l);
            (i.push(I), (l -= I.length));
          }
          return;
        }
        if (h.kind !== "textValue") for (let x of h.children) d(x, w + 1);
      }
    };
  d(a, 0);
  let u = i.filter(Boolean).join(" ").trim();
  return u.length > 0 ? u : null;
}
function Gu(e, t) {
  let n = e.setScale;
  return typeof n != "function" ? false : n.call(e, t);
}
function Wi(e, t, n = {}) {
  let r = n,
    o = j$2(t, n.reviewModel ? { reviewModel: n.reviewModel } : {});
  if (!o.ok)
    return {
      ok: false,
      reason: o.reason,
      ...(o.detail ? { detail: o.detail } : {}),
    };
  let a = o.session,
    i = n.scale ?? 96 / 72,
    l = { resolve: n.tableInteractionLabel ?? ((s) => xi(s)) },
    d = "the document is open for viewing",
    u = "the table of contents is generated and read-only",
    h = "\0range\0",
    w = () => `${new Date().toISOString().slice(0, 19)}Z`,
    x = n.measurer
      ? null
      : td(i, {
          context: Zn(e.ownerDocument),
          ...(n.fontAlias ? { fontAlias: n.fontAlias } : {}),
        }),
    I = n.measurer ?? x.measurer,
    D = ob(),
    L = md$1();
  function k() {
    return n.measurer
      ? (n.producer ?? "host-measurer")
      : `${n.producer ?? x?.producer ?? "fixed-measurer"}@scale:${i}`;
  }
  let g = k(),
    O = e.ownerDocument,
    M = O.createElement("div");
  ((M.className = "docx-pages"),
    (M.style.position = "relative"),
    (M.contentEditable = "true"),
    (M.spellcheck = false),
    M.setAttribute("role", "textbox"),
    M.setAttribute("aria-multiline", "true"),
    (M.style.outline = "none"));
  let K = O.createElement("div");
  ((K.className = "docx-selection-overlay"),
    (K.contentEditable = "false"),
    K.setAttribute("aria-hidden", "true"),
    (K.style.position = "absolute"),
    (K.style.left = "0"),
    (K.style.top = "0"),
    (K.style.pointerEvents = "none"));
  let C = O.createElement("div");
  ((C.className = "docx-comment-overlay"),
    (C.contentEditable = "false"),
    C.setAttribute("aria-hidden", "true"),
    (C.style.position = "absolute"),
    (C.style.left = "0"),
    (C.style.top = "0"),
    (C.style.pointerEvents = "none"));
  let b = O.createElement("div");
  ((b.className = "docx-table-furniture"),
    (b.contentEditable = "false"),
    (b.style.position = "absolute"),
    (b.style.left = "0"),
    (b.style.top = "0"),
    (b.style.pointerEvents = "none"),
    (e.style.position = "relative"),
    e.replaceChildren(M, b, C, K));
  let T = qc(
      M,
      () => i,
      () => {
        let s = pe?.getActive() ?? null,
          c = E?.activeNoteScope() ?? null,
          f = E?.activeNotePageIndex() ?? null,
          m = s ? iu(M, s.pageIndex) : c ? su(M, c.id, f) : null;
        return {
          layout: G,
          selection: P,
          measurer: I,
          ...(s
            ? { preferredPageIndex: s.pageIndex }
            : f !== null
              ? { preferredPageIndex: f }
              : {}),
          scopedHost: m,
          ...(s
            ? { scopedHostKind: "headerFooter" }
            : c
              ? { scopedHostKind: "note" }
              : {}),
        };
      },
    ),
    N = new Set(
      Ac$1(a.part()).flatMap((s) => [
        s.beginParagraphId,
        ...s.resultParagraphIds,
        s.endParagraphId,
      ]),
    ),
    _ = a.paragraphIds(),
    Q$1 = _.find((s) => !N.has(s)) ?? _[0] ?? "",
    P = {
      anchor: { paragraphId: Q$1, offset: 0 },
      head: { paragraphId: Q$1, offset: 0 },
    },
    V = null,
    J = null,
    ee = false,
    Re = false,
    le = null;
  function Be(s, c) {
    if (s.paragraphId === c.paragraphId) return s.offset - c.offset;
    let f = A();
    return f.indexOf(s.paragraphId) - f.indexOf(c.paragraphId);
  }
  function ke(s) {
    if (!le) return;
    let { from: c, to: f } = wi(G, le),
      m = s.head;
    (Be(m, c) >= 0 && Be(m, f) <= 0) || (le = null);
  }
  let Te = null;
  function it() {
    return Me()?.properties ?? null;
  }
  function Me() {
    if (!Te) return null;
    let s = Te.position,
      c = (f) => f.paragraphId === s.paragraphId && f.offset === s.offset;
    return c(P.anchor) && c(P.head) ? Te : null;
  }
  function qe(s) {
    if (!Te) return;
    let c = Te.position;
    (s.anchor.paragraphId === c.paragraphId &&
      s.anchor.offset === c.offset &&
      s.head.paragraphId === c.paragraphId &&
      s.head.offset === c.offset) ||
      (Te = null);
  }
  function ht(s, c, f, m) {
    let v = Ae([...s], f, m);
    return s.length === c.length || !v.rejected ? v : Ae([...c], f, m);
  }
  function $e(s, c, f) {
    let m = Me();
    if (!m || f === 0) return [];
    let v = Te.position;
    return v.paragraphId !== s || v.offset !== c
      ? []
      : [
          {
            op: "setRunProperties",
            paragraphId: s,
            start: c,
            end: c + f,
            properties: m.properties.reduce((F, H) => hg$1(F, H), [...m.base]),
          },
        ];
  }
  let pe = null,
    E = null,
    $ = null,
    y = "",
    S = () => Vo(pe?.getActive() ?? null, E?.activeNoteScope() ?? null),
    Z = () => E?.activeNoteScope()?.id ?? null,
    A = () => zn(G, pe?.getActive() ?? null, Z()),
    q = () => globalThis.performance?.now() ?? Date.now(),
    te = 0,
    ae = 0,
    de = 0,
    { styleCascade: Fe, numberingIndex: He, defaultTabStopPt: Ye } = Oc(a),
    Le = null,
    ze = n.imageDecodePort ?? _c(O) ?? Zc(),
    be = Cc$1({ session: a, decodePort: ze, onResourcesChanged: () => Le?.() }),
    Wn = n.drawingStrings ?? f,
    Mt = () =>
      P.anchor.paragraphId !== P.head.paragraphId ||
      P.anchor.offset !== P.head.offset
        ? null
        : { paragraphId: P.head.paragraphId, offset: P.head.offset },
    Ut = -1,
    ce = true,
    ve = () => {
      let s = a.packageRevision();
      return (
        Ut !== s && ((Ut = s), (ce = !Q(a.settingsRoot()).doNotShadeFormData)),
        ce
      );
    },
    Tt = Bc({ mintValidatedBytes: (s, c) => be.mintValidatedBytes(s, c) }),
    Qe = Ci({
      session: a,
      measurer: I,
      producer: g,
      cache: D,
      styleCascade: Fe,
      defaultTabStopPt: Ye,
      displayMode: n.revisionDisplayMode ?? cb,
      inlineDrawingLayoutForPart: (s) => be.contextForPart(s),
      drawingLayoutTokenForPart: (s) => be.cacheTokenForPart(s),
      drawingTokenForParagraphForPart: (s, c) =>
        be.drawingTokenForParagraph(c, s),
    }),
    Gn = (s) => {
      let c = Ua(s, (f) => a.relationshipTarget(f));
      return s.kind === "textValue"
        ? null
        : {
            id: s.id,
            kind: c.kind,
            href: c.href,
            ...(c.anchor !== void 0 ? { anchor: c.anchor } : {}),
            ...(c.tooltip !== void 0 ? { tooltip: c.tooltip } : {}),
          };
    },
    At = Ou(),
    yn = {
      ...a,
      applyTreeOps: (s, c, f) => Ae(s, c, f),
      applyPmDoc: (s) =>
        Ke === "view"
          ? { committed: false, rejected: true, opCount: 0, reason: d }
          : fa()
            ? { committed: false, rejected: true, opCount: 0, reason: u }
            : a.applyPmDoc(s),
    },
    G = Yn(),
    Ve = n.revisionStyles,
    Lt = null,
    Kr = nu({
      session: yn,
      storyScope: S,
      paragraphOrder: A,
      layout: () => G,
      selection: () => P,
      commit: (s, c, f) => Pe(s, c, f),
      orderedRange: () => on(),
      selectionMark: () => Ce(),
      textOf: (s) => vt(s),
      selectedCells: () => V?.cellIds,
      defaultParagraphStyleId: () => Fe?.defaultParagraphStyleId ?? null,
      defaultFontFamily: () => n.defaultFontFamily ?? null,
      pendingFormats: () => it(),
      setPendingFormats: (s) => {
        if (s === null || s.length === 0) {
          if (!Te) return;
          Te = null;
        } else {
          let { anchor: c, head: f } = P;
          if (c.paragraphId !== f.paragraphId || c.offset !== f.offset) return;
          let m =
            Me()?.base ??
            Yc(a.partFor(S()) ?? a.part(), f.paragraphId, f.offset);
          Te = { position: f, properties: s, base: m };
        }
        n.onChange?.(Ze());
      },
    }),
    $n = Fu({
      session: yn,
      storyScope: S,
      paragraphOrder: A,
      layout: () => G,
      commit: (s, c) => Pe(s, c, { rearmPending: Me() ?? void 0 }),
      orderedStart: () => to(),
      orderedRange: () => on(),
      selectionMark: () => Ce(),
      collapsedAt: (s) => Ee(s),
      deleteSelectionPlan: () => an(),
      paragraphTextOf: (s) => vt(s),
      numberingLevelExists: (s, c) => Xb($b(He(), Fe), s, c) !== null,
    }),
    jr = Hu({
      session: yn,
      layout: () => G,
      fieldLinkById: (s) => At.linkById(s),
      refusesWrite: () => Qr(true) !== null,
      storyScope: S,
      selection: () => P,
      orderedRange: () => on(),
      selectionMark: () => Ce(),
      textOf: (s) => vt(s),
      commit: (s, c) => Pe(s, c),
    }),
    Vt = Du({
      pagesLayer: M,
      container: e,
      scale: () => i,
      layout: () => G,
      bookmarks: () => a.bookmarks(),
      linkById: (s) => At.linkById(s) ?? jr.linkById(s),
      drawingLinkById: (s) => Bu(G, s),
      setSelection: (s) => dt(Ee(s)),
      isCollapsedSelection: () =>
        P.anchor.paragraphId === P.head.paragraphId &&
        P.anchor.offset === P.head.offset,
      onScrolled: () => Yr(),
      ...(n.onHyperlinkPopover ? { onPopover: n.onHyperlinkPopover } : {}),
    });
  (M.addEventListener("contextmenu", Nt),
    M.addEventListener("click", is),
    M.addEventListener("pointermove", xn),
    M.addEventListener("pointerleave", p));
  let wt = null;
  function Xn(s) {
    be.sync(a);
    let c = Dc({
      session: a,
      measurer: I,
      producer: g,
      cache: D,
      styleCascade: Fe,
      defaultTabStopPt: Ye,
      inlineDrawingLayoutForPart: (f) => be.contextForPart(f),
      drawingTokenForParagraphForPart: (f, m) =>
        be.drawingTokenForParagraph(m, f),
    });
    return od(a.part(), s, {
      measurer: I,
      cache: D,
      session: L,
      producer: g,
      styleCascade: Fe,
      defaultTabStopPt: Ye,
      numberingIndex: He(),
      sectionFurniture: Qe.sectionFurniture(),
      furniture: Qe.furniture(),
      projectLink: Gn,
      projectFieldLink: (f) => At.project(f),
      documentProperties: a.documentProperties(),
      inlineDrawingLayout: be.bodyContext,
      drawingTokenForParagraph: (f) =>
        be.drawingTokenForParagraph(f, a.part().name),
      ...(c ? { notes: c } : {}),
      ...(n.revisionDisplayMode ? { displayMode: n.revisionDisplayMode } : {}),
    });
  }
  function Yn() {
    let s = q(),
      c = Xn(a.packageRevision());
    return ((te = q() - s), c);
  }
  let st = null;
  function Ur() {
    return (
      e.ownerDocument.defaultView?.navigator?.scheduling?.isInputPending?.({
        includeContinuous: true,
      }) ?? false
    );
  }
  function yt() {
    if (!Ur()) {
      (st !== null && clearTimeout(st), (st = null), lt());
      return;
    }
    st === null &&
      (st = setTimeout(() => {
        ((st = null), lt());
      }, 0));
  }
  let Pt = "",
    Wt = null,
    vn = false;
  function ge() {
    if (vn || (Wt !== null && (clearTimeout(Wt), (Wt = null)), Pt.length === 0))
      return;
    let s = Pt;
    ((Pt = ""), (vn = true));
    try {
      Oe.type(s);
    } catch (c) {
      throw ((Pt = s + Pt), c);
    } finally {
      vn = false;
    }
  }
  function ia(s) {
    ((Pt += s),
      Wt === null &&
        (Wt = setTimeout(() => {
          ((Wt = null), ge());
        }, 0)));
  }
  let nt = xd$1({
      run: (s) => {
        let c = q(),
          f = Xn(s.revision);
        return ((te = q() - c), f);
      },
      currentRevision: () => a.packageRevision(),
      publish: (s) => {
        (Lt !== null && (Lt = { ...Lt, layout: null, items: null }),
          (G = s),
          yt());
      },
    }),
    Qn = false;
  Le = () => {
    (nt.invalidateAll(a.packageRevision(), "drawing-resources"),
      !Qn &&
        ((Qn = true),
        setTimeout(() => {
          ((Qn = false), je());
        }, 0)));
  };
  let Vr = a.subscribe((s) => {
    ((Te = null), nt.notify(s));
  });
  function bn() {
    let s = Lc(e, G, P, i),
      c = pe?.getActive()?.pageIndex;
    return c === void 0 || s === void 0 || s.has(c) ? s : new Set([...s, c]);
  }
  function je() {
    return nt.pending() ? nt.flush() : false;
  }
  let Gt = null;
  function sa(s) {
    return s.contentControlId ?? `toc:${s.id}`;
  }
  function Jn(s) {
    return Ac$1(a.part()).find(
      (c) =>
        c.beginParagraphId === s ||
        c.endParagraphId === s ||
        c.resultParagraphIds.includes(s),
    );
  }
  function Wr() {
    for (let s of M.querySelectorAll(
      ".docx-content-control-chrome[data-docx-toc]",
    )) {
      if (s.getAttribute("data-docx-content-control") === Gt) {
        ((s.dataset.hover = ""), (s.dataset.boundaryVisible = ""));
        continue;
      }
      (delete s.dataset.hover, ee || delete s.dataset.boundaryVisible);
    }
  }
  function Gr(s) {
    Gt !== s && ((Gt = s), Wr());
  }
  function xn(s) {
    let f = s.target?.closest("[data-paragraph-id]")?.dataset.paragraphId,
      m = f ? Jn(f) : null;
    Gr(m ? sa(m) : null);
  }
  function Ht(s) {
    let c = s.target,
      f = c?.isConnected ? c.closest("[data-paragraph-id]") : void 0;
    if (f) return f.dataset.paragraphId;
    let m = M.ownerDocument;
    return typeof m.elementFromPoint != "function"
      ? void 0
      : m.elementFromPoint(s.clientX, s.clientY)?.closest("[data-paragraph-id]")
          ?.dataset.paragraphId;
  }
  function p() {
    Gr(null);
  }
  function R$1() {
    let s = Y(),
      c = Ec$1(a.part()),
      m = Ac$1(a.part())
        .map((U) => {
          let se = B(U);
          return se ? { ...se, empty: c.has(U.beginParagraphId) } : null;
        })
        .filter((U) => U !== null),
      v = new Set(m.map((U) => U.boundary.id)),
      F = new Set(m.filter((U) => U.empty).map((U) => U.boundary.id)),
      H = s && !v.has(s.id) ? new Set([s.id]) : void 0,
      j = Gt ? new Set([Gt]) : void 0,
      z = new Set(
        Hd$1(G)
          .filter((U) => U.controlType === "checkbox" && nn(U.id))
          .map((U) => U.id),
      ),
      oe = m.filter((U) => U.additional && !U.empty).map((U) => U.boundary);
    if (!(!ee && !H && !j && z.size === 0 && oe.length === 0 && v.size === 0))
      return {
        ...(ee ? { showAll: true } : {}),
        ...(H ? { activeIds: H } : {}),
        ...(j ? { hoverIds: j } : {}),
        ...(z.size > 0 ? { checkedIds: z } : {}),
        ...(oe.length > 0 ? { additionalBoundaries: oe } : {}),
        ...(v.size > 0 ? { tocControlIds: v } : {}),
        ...(F.size > 0 ? { suppressedIds: F } : {}),
      };
  }
  function B(s) {
    let c = s.contentControlId
      ? Hd$1(G).find((v) => v.id === s.contentControlId)
      : void 0;
    if (c) return { tocId: s.id, boundary: c, additional: false };
    let f = new Set([
        s.beginParagraphId,
        ...s.resultParagraphIds,
        s.endParagraphId,
      ]),
      m = G.pages.flatMap((v) => {
        let F = R(v)
          .filter((U) => f.has(U.paragraphId))
          .map((U) => U.box);
        if (F.length === 0) return [];
        let H = Math.min(...F.map((U) => U.x)),
          j = Math.min(...F.map((U) => U.y)),
          z = Math.max(...F.map((U) => U.x + U.width)),
          oe = Math.max(...F.map((U) => U.y + U.height));
        return [
          {
            pageIndex: v.index,
            box: { x: H, y: j, width: z - H, height: oe - j },
          },
        ];
      });
    return m.length === 0
      ? null
      : {
          tocId: s.id,
          additional: true,
          boundary: {
            id: `toc:${s.id}`,
            controlType: "richText",
            lock: "unlocked",
            effectiveLock: "unlocked",
            placeholder: false,
            bound: false,
            nestingDepth: 0,
            level: "block",
            fragments: m,
          },
        };
  }
  function Y() {
    let s = Ed(G, P.head, I);
    return s
      ? Gd$1(G, { x: s.x, y: s.y + s.height / 2, pageIndex: s.pageIndex })
      : null;
  }
  function W(s) {
    return s.bound
      ? "bound"
      : s.effectiveLock === "contentLocked" ||
          s.effectiveLock === "sdtContentLocked"
        ? "locked"
        : null;
  }
  function re(s) {
    return s.effectiveLock === "sdtLocked" ||
      s.effectiveLock === "sdtContentLocked"
      ? "locked"
      : null;
  }
  function xe(s) {
    return Lb(s);
  }
  function he(s) {
    let c = Fa(a.part(), s);
    return !c || !xe(c) ? null : c;
  }
  function X(s) {
    let c = he(s);
    if (!c) return null;
    for (let f of c.children)
      if (
        f.kind !== "textValue" &&
        (f.kind === "contentControlProperties" || f.localName === "sdtPr")
      )
        for (let m of f.children) {
          if (m.kind === "textValue" || m.localName !== "tabIndex") continue;
          let v = m.attributes.find((H) => H.localName === "val")?.value;
          if (v === void 0) return null;
          let F = Number(v);
          return Number.isFinite(F) ? F : null;
        }
    return null;
  }
  function Ie() {
    return [...Hd$1(G)]
      .filter((c) => W(c) === null)
      .sort((c, f) => {
        let m = X(c.id),
          v = X(f.id);
        return m !== null && v !== null && m !== v
          ? m - v
          : m !== null && v === null
            ? -1
            : m === null && v !== null
              ? 1
              : 0;
      });
  }
  function ue(s) {
    if (s.kind === "textValue") return s.value.length;
    if (s.kind === "tab" || s.kind === "hardBreak") return 1;
    if (s.kind === "runProperties" || s.kind === "generic") return 0;
    if (s.kind === "contentControl") {
      let m = 0;
      for (let v of s.children)
        if (
          v.kind !== "textValue" &&
          (v.kind === "contentControlContent" || v.localName === "sdtContent")
        )
          for (let F of v.children) m += ue(F);
      return m;
    }
    let f = 0;
    for (let m of s.children) f += ue(m);
    return f;
  }
  function De(s) {
    for (let c of s.children)
      if (
        c.kind !== "textValue" &&
        (c.kind === "contentControlContent" || c.localName === "sdtContent")
      )
        return c.children;
    return [];
  }
  function tn(s) {
    let c = he(s);
    if (!c) return false;
    let f = De(c),
      m = [],
      v = (oe) => {
        for (let U of oe) {
          if (U.kind === "paragraph") {
            m.push({ id: U.id, length: ue(U) });
            continue;
          }
          if (U.kind === "textValue") continue;
          if (U.kind === "contentControl") {
            v(De(U));
            continue;
          }
          v(U.children);
        }
      };
    if ((v(f), m.length > 0)) {
      let oe = m[0],
        U = m[m.length - 1];
      return (
        dt({
          anchor: { paragraphId: oe.id, offset: 0 },
          head: { paragraphId: U.id, offset: U.length },
        }),
        true
      );
    }
    let F = null,
      H = 0,
      j = 0,
      z = (oe, U, se) => {
        let fe = U;
        for (let Se of oe) {
          if (Se.id === s) return ((F = se), (H = fe), (j = fe + ue(Se)), true);
          if (Se.kind === "textValue") {
            fe += Se.value.length;
            continue;
          }
          if (Se.kind === "contentControl") {
            let sn = ue(Se);
            if (z(De(Se), fe, se)) return true;
            fe += sn;
            continue;
          }
          if (Se.kind === "run" || Se.kind === "hyperlink") {
            if (z(Se.children, fe, se)) return true;
            fe += ue(Se);
            continue;
          }
          if (Se.kind === "paragraph") {
            if (z(Se.children, 0, Se.id)) return true;
            continue;
          }
          if (Se.kind === "tab" || Se.kind === "hardBreak") {
            fe += 1;
            continue;
          }
          if (z(Se.children, fe, se)) return true;
          fe += ue(Se);
        }
        return false;
      };
    return (
      z(a.part().root.children, 0, ""),
      F
        ? (dt({
            anchor: { paragraphId: F, offset: H },
            head: { paragraphId: F, offset: j },
          }),
          true)
        : false
    );
  }
  function In(s) {
    let c = he(s);
    if (!c) return [];
    for (let f of c.children)
      if (
        f.kind !== "textValue" &&
        !(f.kind !== "contentControlProperties" && f.localName !== "sdtPr")
      )
        for (let m of f.children) {
          if (
            m.kind === "textValue" ||
            (m.localName !== "dropDownList" && m.localName !== "comboBox")
          )
            continue;
          let v = [];
          for (let F of m.children) {
            if (F.kind === "textValue" || F.localName !== "listItem") continue;
            let H =
                F.attributes.find((z) => z.localName === "value")?.value ?? "",
              j =
                F.attributes.find((z) => z.localName === "displayText")
                  ?.value ?? H;
            v.push({ displayText: j, value: H });
          }
          return v;
        }
    return [];
  }
  function nn(s) {
    let c = he(s);
    if (!c) return false;
    for (let f of c.children)
      if (
        f.kind !== "textValue" &&
        !(f.kind !== "contentControlProperties" && f.localName !== "sdtPr")
      ) {
        for (let m of f.children)
          if (m.kind === "contentControlCheckbox")
            for (let v of m.children) {
              if (v.kind !== "contentControlChecked") continue;
              let F = v.attributes.find((H) => H.localName === "val")?.value;
              return !(F === "0" || F === "false" || F === "off");
            }
      }
    return false;
  }
  function Sn(s) {
    let c = he(s);
    if (c) {
      for (let f of c.children)
        if (f.kind === "contentControlProperties") {
          for (let m of f.children)
            if (m.kind === "contentControlDate")
              return m.attributes.find((v) => v.localName === "fullDate")
                ?.value;
        }
    }
  }
  function me(s, c) {
    for (let f of M.querySelectorAll("[data-docx-content-control]"))
      f.getAttribute("data-docx-content-control") === s &&
        (c ? (f.dataset.open = "") : delete f.dataset.open);
  }
  function we(s) {
    let c = s.dataset.docxCcId;
    (s.remove(), c && me(c, false));
  }
  function Dt() {
    let s = M.querySelector(".docx-content-control-menu");
    s && we(s);
  }
  function Nt(s) {
    let c = Ht(s),
      f = c ? Jn(c) : void 0;
    $r(f && ga(f.id) ? f.id : null);
  }
  let _t = null;
  function $r(s) {
    _t !== s && ((_t = s), n.onChange?.(Ze()));
  }
  function is(s) {
    if (
      s.button !== 0 ||
      s.target?.closest("a.docx-hyperlink") ||
      P.anchor.paragraphId !== P.head.paragraphId ||
      P.anchor.offset !== P.head.offset
    )
      return;
    let c = Ht(s);
    if (!c) return;
    let f = Ac$1(a.part()).find((F) => F.resultParagraphIds.includes(c));
    if (!f) return;
    let v = H(a.part(), f, a.documentOutline(), pa(f))[
      f.resultParagraphIds.indexOf(c)
    ];
    v && (s.preventDefault(), Vt.goToPosition({ paragraphId: v, offset: 0 }));
  }
  function jf(s, c) {
    let f = Zt.disabledReason(s, "edit");
    if (f) {
      ((J = f), n.onChange?.(Ze()));
      return;
    }
    if (c === "checkbox") {
      Zt.setValue(s, nn(s) ? "false" : "true");
      return;
    }
    if (c === "dropdown" || c === "comboBox") {
      let m = In(s);
      if (m.length === 0 && c === "dropdown") return;
      Dt();
      let v = O.createElement("div");
      ((v.className = "docx-content-control-menu"),
        (v.dataset.docxMarker = ""),
        (v.dataset.docxCcId = s),
        v.setAttribute("contenteditable", "false"),
        v.setAttribute("role", "listbox"),
        (v.style.position = "absolute"),
        (v.style.zIndex = "20"),
        (v.style.pointerEvents = "auto"),
        v.addEventListener("pointerdown", (z) => z.stopPropagation()));
      let H = Hd$1(G).find((z) => z.id === s)?.fragments[0];
      if (H) {
        let z = G.pages[H.pageIndex],
          oe = Ne?.pageOffsetX.get(H.pageIndex) ?? 0;
        if (z) {
          let U = z.contentBox.x - z.box.x,
            se = z.contentBox.y - z.box.y;
          ((v.style.left = `${(z.box.x + oe + U + H.box.x + H.box.width) * i}px`),
            (v.style.top = `${(z.box.y + se + H.box.y + H.box.height) * i}px`),
            (v.style.transform = "translateX(-100%)"));
        }
      }
      for (let z of m) {
        let oe = O.createElement("button");
        ((oe.type = "button"),
          (oe.className = "docx-content-control-menu-item"),
          (oe.dataset.docxMarker = ""),
          oe.setAttribute("contenteditable", "false"),
          oe.setAttribute("role", "option"),
          (oe.textContent = z.displayText),
          oe.addEventListener("mousedown", (U) => {
            (U.preventDefault(),
              U.stopPropagation(),
              we(v),
              Zt.setValue(s, z.value));
          }),
          v.append(oe));
      }
      if (c === "comboBox") {
        let z = O.createElement("input");
        ((z.type = "text"),
          (z.className = "docx-content-control-menu-input"),
          (z.dataset.docxMarker = ""),
          z.setAttribute("contenteditable", "false"),
          z.addEventListener("mousedown", (oe) => oe.stopPropagation()),
          z.addEventListener("keydown", (oe) => {
            oe.key === "Enter" &&
              (oe.preventDefault(), we(v), Zt.setValue(s, z.value));
          }),
          v.append(z));
      }
      (M.append(v), me(s, true));
      let j = (z) => {
        v.contains(z.target) ||
          (we(v), O.removeEventListener("mousedown", j, true));
      };
      O.addEventListener("mousedown", j, true);
      return;
    }
    if (c === "date") {
      Dt();
      let m = O.createElement("div");
      ((m.className = "docx-content-control-menu"),
        (m.dataset.docxMarker = ""),
        (m.dataset.docxCcId = s),
        m.setAttribute("contenteditable", "false"),
        (m.style.position = "absolute"),
        (m.style.zIndex = "20"),
        (m.style.pointerEvents = "auto"),
        m.addEventListener("pointerdown", (ye) => ye.stopPropagation()));
      let v = Hd$1(G).find((ye) => ye.id === s),
        F = v?.fragments[0];
      if (F) {
        let ye = G.pages[F.pageIndex],
          ln = Ne?.pageOffsetX.get(F.pageIndex) ?? 0;
        if (ye) {
          let dr = ye.contentBox.x - ye.box.x,
            cr = ye.contentBox.y - ye.box.y;
          ((m.style.left = `${(ye.box.x + ln + dr + F.box.x + F.box.width) * i}px`),
            (m.style.top = `${(ye.box.y + cr + F.box.y + F.box.height) * i}px`),
            (m.style.transform = "translateX(-100%)"));
        }
      }
      m.classList.add("docx-content-control-calendar");
      let H = Sn(s),
        j = H ? new Date(H) : new Date(),
        z = Number.isNaN(j.getTime()) ? null : j,
        oe = z ?? new Date(),
        U = oe.getFullYear(),
        se = oe.getMonth(),
        fe = new Intl.DateTimeFormat(void 0, {
          month: "long",
          year: "numeric",
        }),
        Se = new Intl.DateTimeFormat(void 0, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        Bt = new Intl.DateTimeFormat(void 0, { weekday: "narrow" }),
        sn = (ye) =>
          `${ye.getFullYear().toString().padStart(4, "0")}-${(ye.getMonth() + 1).toString().padStart(2, "0")}-${ye.getDate().toString().padStart(2, "0")}`,
        lr = (ye, ln) =>
          ye.getFullYear() === ln.getFullYear() &&
          ye.getMonth() === ln.getMonth() &&
          ye.getDate() === ln.getDate(),
        Hs = null,
        Sa = () => {
          let ye = O.createElement("input");
          ((ye.type = "date"),
            (ye.className = "docx-content-control-calendar-input"),
            (ye.value = z ? sn(z) : ""));
          let ln = ye.value;
          v?.alias && ye.setAttribute("aria-label", v.alias);
          let dr = () => {
            if (!ye.value || ye.value === ln) return false;
            let We = ye.value;
            return (we(m), Zt.setValue(s, We), true);
          };
          ((Hs = dr),
            ye.addEventListener("keydown", (We) => {
              We.key === "Enter" && (We.preventDefault(), dr() || we(m));
            }),
            ye.addEventListener("blur", () => {
              queueMicrotask(() => {
                !m.isConnected || m.contains(O.activeElement) || dr() || we(m);
              });
            }));
          let cr = O.createElement("div");
          cr.className = "docx-content-control-calendar-header";
          let dn = O.createElement("button");
          ((dn.type = "button"),
            (dn.className = "docx-content-control-calendar-nav"),
            (dn.textContent = "\u2039"));
          let cp = new Date(U, se - 1, 1);
          dn.setAttribute("aria-label", fe.format(cp));
          let ka = O.createElement("div");
          ((ka.className = "docx-content-control-calendar-title"),
            (ka.textContent = fe.format(new Date(U, se, 1))));
          let cn = O.createElement("button");
          ((cn.type = "button"),
            (cn.className = "docx-content-control-calendar-nav"),
            (cn.textContent = "\u203A"));
          let up = new Date(U, se + 1, 1);
          (cn.setAttribute("aria-label", fe.format(up)),
            dn.addEventListener("mousedown", (We) => We.stopPropagation()),
            cn.addEventListener("mousedown", (We) => We.stopPropagation()),
            dn.addEventListener("click", () => {
              ((se -= 1), se < 0 && ((se = 11), (U -= 1)), Sa());
            }),
            cn.addEventListener("click", () => {
              ((se += 1), se > 11 && ((se = 0), (U += 1)), Sa());
            }),
            cr.append(dn, ka, cn));
          let Ta = O.createElement("div");
          Ta.className = "docx-content-control-calendar-weekdays";
          for (let We = 0; We < 7; We += 1) {
            let qt = O.createElement("span");
            ((qt.textContent = Bt.format(new Date(2024, 0, 1 + We))),
              Ta.append(qt));
          }
          let no = O.createElement("div");
          ((no.className = "docx-content-control-calendar-grid"),
            no.setAttribute("role", "grid"));
          let fp = (new Date(U, se, 1).getDay() + 6) % 7,
            pp = new Date();
          for (let We = 0; We < 42; We += 1) {
            let qt = new Date(U, se, We - fp + 1),
              ct = O.createElement("button");
            ((ct.type = "button"),
              (ct.className = "docx-content-control-calendar-day"),
              (ct.textContent = String(qt.getDate())),
              ct.setAttribute("role", "gridcell"),
              ct.setAttribute("aria-label", Se.format(qt)),
              qt.getMonth() !== se && (ct.dataset.otherMonth = ""),
              z &&
                lr(qt, z) &&
                ((ct.dataset.selected = ""),
                ct.setAttribute("aria-selected", "true")),
              lr(qt, pp) && (ct.dataset.today = ""),
              ct.addEventListener("mousedown", (mp) => mp.stopPropagation()),
              ct.addEventListener("click", () => {
                (we(m), Zt.setValue(s, sn(qt)));
              }),
              no.append(ct));
          }
          m.replaceChildren(ye, cr, Ta, no);
        };
      (Sa(), M.append(m), me(s, true));
      let Ds = (ye) => {
        m.contains(ye.target) ||
          (Hs?.() || we(m), O.removeEventListener("mousedown", Ds, true));
      };
      (O.addEventListener("mousedown", Ds, true),
        m
          .querySelector(
            "[data-selected], [data-today], .docx-content-control-calendar-day",
          )
          ?.focus({ preventScroll: true }));
    }
  }
  let Zt = {
    setShowAll(s) {
      ee !== s && ((ee = s), lt());
    },
    setFormFill(s) {
      Re !== s && ((Re = s), n.onChange?.(Ze()));
    },
    showAll: () => ee,
    formFill: () => Re,
    atCaret: () => Y(),
    navigate(s) {
      let c = Ie();
      if (c.length === 0) return false;
      let f = Y(),
        m = f ? c.findIndex((F) => F.id === f.id) : -1;
      s === "next"
        ? (m = m < 0 ? 0 : (m + 1) % c.length)
        : (m = m < 0 ? c.length - 1 : (m - 1 + c.length) % c.length);
      let v = c[m];
      return tn(v.id);
    },
    setValue(s, c) {
      let f = Zt.disabledReason(s, "edit");
      if (f) return ((J = f), n.onChange?.(Ze()), false);
      let m = false;
      return (
        Pe(() => {
          let v = a.applyTreeOps(
            [{ op: "setContentControlValue", controlId: s, value: c }],
            Ce(),
          );
          return ((m = v.committed), v);
        }),
        m
      );
    },
    remove(s) {
      let c = s ?? Y()?.id;
      if (!c) return ((J = "notFound"), n.onChange?.(Ze()), false);
      let f = Zt.disabledReason(c, "remove");
      if (f) return ((J = f), n.onChange?.(Ze()), false);
      let m = false;
      return (
        Pe(() => {
          let v = a.applyTreeOps(
            [{ op: "removeContentControl", controlId: c }],
            Ce(),
          );
          return ((m = v.committed), v);
        }),
        m
      );
    },
    disabledReason(s, c) {
      let f = Hd$1(G).find((v) => v.id === s);
      if (f) return c === "remove" ? re(f) : W(f);
      let m = he(s);
      if (!m) return "notFound";
      for (let v of m.children)
        if (
          v.kind !== "textValue" &&
          !(v.kind !== "contentControlProperties" && v.localName !== "sdtPr")
        ) {
          if (
            v.children.some(
              (F) => F.kind !== "textValue" && F.localName === "dataBinding",
            ) &&
            c === "edit"
          )
            return "bound";
          for (let F of v.children) {
            if (F.kind === "textValue" || F.localName !== "lock") continue;
            let H = F.attributes.find((j) => j.localName === "val")?.value;
            if (c === "remove") {
              if (H === "sdtLocked" || H === "sdtContentLocked")
                return "locked";
            } else if (H === "contentLocked" || H === "sdtContentLocked")
              return "locked";
          }
        }
      return null;
    },
  };
  function Ze() {
    return {
      revision: a.packageRevision(),
      pageCount: G.pages.length,
      selection: P,
      cellSelection: V,
      canUndo: a.canUndo(),
      canRedo: a.canRedo(),
      lastRejection: J,
      pendingFormat: it(),
      contentControls: {
        showAll: ee,
        formFill: Re,
        activeControlId: Y()?.id ?? null,
      },
      contextTocId: _t,
      perf: {
        layoutMs: te,
        paintMs: ae,
        selectionMs: de,
        placed: L.stats.placed,
        total: L.stats.total,
        reusedPages: L.stats.reusedPages,
        fullPasses: L.stats.fullPasses,
        staleDiscards: nt.staleDiscards,
        cancelledRuns: nt.cancelledRuns,
      },
    };
  }
  let Ct,
    Ne,
    la = null,
    Xr = false,
    er = null,
    da = null;
  function Uf(s) {
    for (let c of G.pages) {
      let f = M.children.item(c.index);
      if (f?.dataset.pageIndex !== String(c.index)) continue;
      let m = s.pageOffsetX.get(c.index) ?? 0;
      f.style.left = `${(c.box.x + m) * i}px`;
    }
  }
  function lt(s = true) {
    let c = _e.adoptBeforePaint(),
      f = q();
    ((Ct = bn()), pe?.reconcileOccurrence());
    let m = pe?.getActive() ?? null,
      v = R$1(),
      F = Ec$1(a.part());
    (i$1(M, G, {
      scale: i,
      readOnlyParagraphIds: eo(),
      ...(F.size > 0 ? { emptyTocPlaceholderIds: F } : {}),
      ...(n.fontAlias ? { fontAlias: n.fontAlias } : {}),
      ...(n.defaultFontFamily
        ? { defaultFontFamily: n.defaultFontFamily }
        : {}),
      materialize: Ct,
      ariaHidden: false,
      drawingStrings: Wn,
      ...(n.fieldShading ? { fieldShading: n.fieldShading } : {}),
      ...(Ve !== void 0 ? { revisionStyles: Ve } : {}),
      shadeFormFields: ve(),
      ...(Tt ? { imageUrlPort: Tt } : {}),
      ...(m
        ? {
            activeHeaderFooterRId: m.scope.rId,
            activeHeaderFooterPageIndex: m.pageIndex,
          }
        : {}),
      ...(v ? { contentControlChrome: v } : {}),
    }),
      Ti(M, Mt()),
      cu(e, M, m != null),
      e.classList.toggle("docx-paginated-surface--viewing", Ke === "view"),
      (Ne = qo(G, Ct)),
      Uf(Ne),
      (M.style.width = `${Ne.width * i}px`),
      (M.style.height = `${Ne.height * i}px`),
      (e.style.width = `${Ne.width * i}px`),
      (e.style.height = `${Ne.height * i}px`),
      (K.style.width = `${Ne.width * i}px`),
      (K.style.height = `${Ne.height * i}px`),
      (C.style.width = K.style.width),
      (C.style.height = K.style.height),
      (b.style.width = K.style.width),
      (b.style.height = K.style.height),
      wn.update(),
      (ae = q() - f),
      ar(),
      Tn(true),
      Ls(),
      _e.mirrorToDom(),
      ss(Xr),
      (Xr = false),
      (s || c) && n.onChange?.(Ze()));
  }
  function Yr() {
    ge();
    let s = bn(),
      c = qo(G, s);
    (Ne && Ri(s, Ct) && Hc(c, Ne)) || lt(false);
  }
  function ss(s = false) {
    if (
      pe?.getActive() ||
      E?.activeNoteScope() ||
      P.anchor.paragraphId !== P.head.paragraphId ||
      P.anchor.offset !== P.head.offset
    )
      return;
    let c = O.activeElement;
    if (c !== M && (!c || !M.contains(c))) return;
    let f = Ed(G, P.head, { measurer: I });
    if (!f) return;
    let m = la !== null && la !== f.pageIndex;
    if (((la = f.pageIndex), !s && !m)) return;
    let v = G.pages[f.pageIndex],
      F = at(e);
    if (!v || !F || F.clientHeight <= 0) return;
    let H = 24,
      j = v.contentBox.y - v.box.y,
      z = (v.box.y + j + f.y) * i + e.offsetTop,
      oe = z + f.height * i,
      U = F.scrollTop,
      se = U + F.clientHeight,
      fe = U;
    if (z < U + H) fe = z - H;
    else if (oe > se - H) fe = oe + H - F.clientHeight;
    else return;
    let Se = Math.max(0, F.scrollHeight - F.clientHeight),
      Bt = Math.max(0, Math.min(fe, Se));
    Math.abs(Bt - F.scrollTop) < 0.5 || ((F.scrollTop = Bt), ba());
  }
  let Ke = n.editingMode ?? "edit",
    Vf = Object.freeze({ kind: "body" });
  function Ae(s, c, f, m = S(), v = true) {
    ge();
    let F = Qr(s.some(Wf), s, v);
    if (F !== null)
      return { committed: false, rejected: true, opCount: 0, reason: F };
    let H = $f(s),
      j = a.applyTreeOps(H, c, f, m);
    return (
      j.committed && Ke === "suggest" && H.some(Gf) && r.onTrackedChange?.(),
      j
    );
  }
  function Qr(s, c = [], f = true) {
    return Ke === "view"
      ? d
      : s && ((f && fa()) || c.some((m) => np(m)))
        ? u
        : Ke === "suggest" && !n.author?.trim() && s
          ? "suggesting needs an author before it can propose a change"
          : null;
  }
  function Wf(s) {
    return (
      s.op !== "acceptRevision" &&
      s.op !== "rejectRevision" &&
      s.op !== "acceptAllRevisions" &&
      s.op !== "rejectAllRevisions"
    );
  }
  function Gf(s) {
    switch (s.op) {
      case "insertText":
      case "deleteText":
      case "insertTableRow":
      case "deleteTableRow":
        return s.revision !== void 0;
      case "setParagraphMarkRevision":
      case "proposeParagraphMerge":
        return true;
      default:
        return false;
    }
  }
  function $f(s) {
    let c = n.author?.trim();
    if (Ke !== "suggest" || !c) return [...s];
    let f = { author: c, date: w() };
    return s.flatMap((m) =>
      m.op === "insertText" ||
      m.op === "deleteText" ||
      m.op === "insertTableRow" ||
      m.op === "deleteTableRow"
        ? [{ ...m, revision: f }]
        : m.op === "splitParagraph"
          ? [
              m,
              {
                op: "setParagraphMarkRevision",
                paragraphId: m.paragraphId,
                kind: "ins",
                revision: f,
              },
            ]
          : m.op === "joinParagraphs"
            ? [
                {
                  op: "proposeParagraphMerge",
                  paragraphId: m.secondId,
                  revision: f,
                },
              ]
            : [m],
    );
  }
  function Pe(s, c, f = {}) {
    (ge(),
      f?.keepCellSelection || (V = null),
      (Te = null),
      _e.noteModelMoved());
    let m = s();
    if (typeof m != "boolean" && m.rejected) J = String(m.reason ?? "rejected");
    else {
      J = null;
      let v = c?.();
      v && (or(), (P = v), (wt = null), (Xr = true));
      let F = f?.rearmPending;
      if (F && F.properties.length > 0) {
        let { anchor: H, head: j } = P;
        H.paragraphId === j.paragraphId &&
          H.offset === j.offset &&
          (Te = { properties: F.properties, base: F.base, position: j });
      }
    }
    je() || lt();
  }
  function Xf() {
    if (!Ct) return true;
    for (let s of [P.anchor, P.head]) {
      let c = Ed(G, s);
      if (c && !Ct.has(c.pageIndex)) return false;
    }
    return true;
  }
  function dt(s, c = false) {
    (Pt.length > 0 &&
      (s.anchor.paragraphId !== P.anchor.paragraphId ||
        s.anchor.offset !== P.anchor.offset ||
        s.head.paragraphId !== P.head.paragraphId ||
        s.head.offset !== P.head.offset) &&
      ge(),
      qe(s),
      ke(s));
    let f = Y()?.id ?? null,
      m = ir(P.head.paragraphId);
    (or(),
      (P = s),
      (V = null),
      c || (wt = null),
      Xf() || (_e.noteModelMoved(), lt(false)),
      _e.noteSelectionSettled(),
      _e.mirrorToDom(true),
      ss(true),
      ar(),
      kn.clear(),
      Tn());
    let v = Y()?.id ?? null,
      F = ir(P.head.paragraphId);
    ((f !== v || m !== F) && lt(false), n.onChange?.(Ze()));
  }
  let _e = Ru({
    session: a,
    storyScope: S,
    document: O,
    pagesLayer: M,
    selection: () => P,
    setSelection: (s) => dt(s),
    adoptSelection: (s) => {
      (qe(s), ke(s), or(), (P = s), (wt = null), (Xr = true));
    },
    commit: (s) => Pe(s),
    render: () => lt(),
    flushLayout: () => je(),
    updateCaret: () => {
      (T.update(), Ti(M, Mt()));
    },
    textOf: (s) => vt(s),
    pendingFormatOps: (s, c, f) => $e(s, c, f),
    selectionMark: () => Ce(),
    now: q,
    recordSelectionMs: (s) => {
      de = s;
    },
    isGesturing: () => ha?.dragging() ?? false,
    domSelection: () => (V ? Ee(V.text.anchor) : P),
    holdsCellSelection: () => V !== null,
  });
  ((pe = Ku({
    session: a,
    layout: () => G,
    selection: () => P,
    setScopeSelection: (s) => {
      (ge(), or(), (P = s), (V = null), (wt = null));
    },
    noteModelMoved: () => _e.noteModelMoved(),
    render: () => lt(),
    mirrorToDom: () => _e.mirrorToDom(),
    notify: () => n.onChange?.(Ze()),
    materializedPages: () => Ct,
  })),
    (E = Uu({
      session: a,
      applyOps: Ae,
      commit: Pe,
      selection: () => P,
      selectionMark: () => Ce(),
      orderedStart: () => to(),
      activeScope: () => {
        let s = E?.activeNoteScope();
        return s || (pe?.activeScope() ?? { kind: "body" });
      },
      setActiveScopeBodyOrHf: (s) => pe.setActiveScope(s),
      setSelection: (s) => dt(s),
      noteModelMoved: () => _e.noteModelMoved(),
      render: () => lt(),
      revealNote: (s) => {
        for (let c of G.pages) {
          let f = [
            ...(c.footnotes?.notes ?? []),
            ...(c.endnotes?.notes ?? []),
          ].find((m) => m.scopeId === s);
          if (f)
            return (
              sr(f.box.y, f.box.height, { block: "nearest", offsetPx: 48 }),
              c.index
            );
        }
        return null;
      },
      notify: () => n.onChange?.(Ze()),
      lastRejection: () => J,
      setLastRejection: (s) => {
        J = s;
      },
    })));
  function ls(s) {
    (s && ge(),
      (V = s),
      s && (qe(s.text), or(), (P = s.text)),
      (wt = null),
      _e.noteSelectionSettled(),
      _e.mirrorToDom(),
      ar(),
      kn.clear(),
      Tn(),
      n.onChange?.(Ze()));
  }
  let rn = null;
  function Yf() {
    let c = Ed(G, P.head)?.pageIndex ?? 0,
      f = new Set();
    for (let m = c - 1; m <= c + 1; m += 1)
      m >= 0 && m < G.pages.length && f.add(m);
    return f;
  }
  let ds = new WeakMap();
  function Qf(s) {
    let c = ds.get(s);
    if (c) return c;
    let f = new Map();
    for (let m of s.pages)
      for (let v of R(m)) f.has(v.paragraphId) || f.set(v.paragraphId, m.index);
    return (ds.set(s, f), f);
  }
  function Jf() {
    let s = a.revision(),
      c = Ct ?? Yf();
    if (rn?.layout === G && rn.revision === s && Ri(rn.pages, c))
      return rn.rects;
    let f = Qf(G),
      m = (j, z) => {
        if (!c) return true;
        let oe = f.get(j),
          U = f.get(z);
        if (oe === void 0 || U === void 0) return true;
        for (let se = Math.min(oe, U); se <= Math.max(oe, U); se += 1)
          if (c.has(se)) return true;
        return false;
      },
      v = [];
    for (let j of a.reviewItems()) {
      if (j.kind === "comment") {
        if (
          j.range === null ||
          j.resolved ||
          !m(j.range.start.paragraphId, j.range.end.paragraphId)
        )
          continue;
        v.push({
          key: b$1(j),
          from: {
            paragraphId: j.range.start.paragraphId,
            offset: j.range.start.offset,
          },
          to: {
            paragraphId: j.range.end.paragraphId,
            offset: j.range.end.offset,
          },
        });
        continue;
      }
      let z = b$1(j),
        oe = j.kind === "revision" ? j.ranges : j.range ? [j.range] : [];
      for (let [U, se] of oe.entries())
        m(se.start.paragraphId, se.end.paragraphId) &&
          v.push({
            key: oe.length === 1 ? z : `${z}${h}${U}`,
            from: {
              paragraphId: se.start.paragraphId,
              offset: se.start.offset,
            },
            to: { paragraphId: se.end.paragraphId, offset: se.end.offset },
          });
    }
    let F = zd$1(G, v, c),
      H = [];
    for (let [j, z] of F) for (let oe of z) H.push({ ...oe, key: j });
    return ((rn = { layout: G, revision: s, pages: c, rects: H }), H);
  }
  let tr = null;
  function ep() {
    let s = a.packageRevision(),
      c = a.part().root;
    if (tr && tr.packageRevision === s && tr.bodyRoot === c) return tr.index;
    let f = new Map(),
      m = (F) => {
        let H = f.size;
        for (let [j, z] of F) f.has(j) || f.set(j, H + z);
      };
    m(vg$1(a.part()));
    let v = new Set([a.part()]);
    for (let F of a.headerFooterPartsBySection())
      for (let H of [F.headers, F.footers])
        for (let j of H.values()) v.has(j) || (v.add(j), m(vg$1(j)));
    for (let F of ["footnote", "endnote"]) {
      let H = a.partFor({ kind: "notesPart", noteKind: F });
      !H || v.has(H) || (v.add(H), m(vg$1(H)));
    }
    return ((tr = { packageRevision: s, bodyRoot: c, index: f }), f);
  }
  let kn = new Set(),
    nr = null,
    rr = null,
    ca = false;
  function or() {
    ca || (rr = null);
  }
  function cs() {
    let s = rr;
    if (!s || !P) return null;
    let c = (m, v) => m.paragraphId === v.paragraphId && m.offset === v.offset;
    if (!c(P.anchor, s.anchor) || !c(P.head, s.head)) return null;
    let f = a.reviewItems().find((m) => b$1(m) === s.key);
    return !f ||
      (f.kind === "comment" && f.resolved) ||
      (f.kind === "revision" && nr !== null && nr.has(f.revisionKind))
      ? null
      : f;
  }
  function ua() {
    let s = cs();
    if (s) return us(s);
    let c = P?.head;
    if (!c) return null;
    let m = h$1(a.reviewItems(), c, ep()).filter(
      (v) =>
        !(v.kind === "comment" && v.resolved) &&
        !kn.has(b$1(v)) &&
        !(v.kind === "revision" && nr !== null && nr.has(v.revisionKind)),
    )[0];
    return m ? us(m) : null;
  }
  function us(s) {
    if (s.kind !== "comment") return s;
    let c = j$4(a.reviewItems(), s);
    return kn.has(b$1(c)) ? null : c;
  }
  function fs(s) {
    return s.kind === "comment"
      ? s.comment.author
      : s.kind === "revision"
        ? s.author
        : "";
  }
  function ps() {
    let s = a.reviewItems(),
      c = Lt;
    if (c !== null && c.layout === G && c.items === s && c.styles === Ve)
      return c;
    let f = d$1(
        c$1(G),
        (function* () {
          for (let z of s) yield fs(z);
        })(),
      ),
      m = c?.value,
      v =
        m !== void 0 &&
        m.size === f.size &&
        [...f].every(([j, z]) => m.get(j) === z),
      F = v ? m : f,
      H =
        c !== null && v && c.styles === Ve
          ? c.resolved
          : new Map(b$2(F, Ve).map((j) => [j.author, j]));
    return (
      (Lt = { layout: G, items: s, styles: Ve, value: F, resolved: H }),
      Lt
    );
  }
  function tp(s, c, f) {
    let m = s.split(h),
      v = m[0],
      F = c !== null && v === b$1(c);
    if (s.startsWith("comment-"))
      return F
        ? "docx-comment-band docx-comment-band--active"
        : "docx-comment-band";
    if (s.startsWith("custom-"))
      return F ? "docx-comment-band docx-comment-band--active" : null;
    let H = f.get(v);
    if (!H || H.kind !== "revision") return null;
    let j = m.length > 1 ? Number(m[1]) : 0;
    return `docx-revision-band docx-revision-band--${((U) => (U === "delete" || U === "moveFrom" ? "delete" : U === "insert" || U === "moveTo" ? "insert" : U === "replace" && H.replacedRangeCount !== void 0 ? (j < H.replacedRangeCount ? "delete" : "insert") : "other"))(H.revisionKind)}${F ? " docx-revision-band--active" : ""}`;
  }
  let ms = null,
    gs,
    hs = null;
  function Tn(s = false) {
    let c = ua(),
      f = c ? b$1(c) : null,
      m = ps();
    if (!s && ms === G && gs === f && hs === m.resolved) return;
    let v = new Map();
    for (let H of a.reviewItems()) v.set(b$1(H), H);
    let F = [];
    for (let H of Jf()) {
      let j = tp(H.key, c, v);
      if (!j) continue;
      let z = v.get(H.key.split(h)[0]),
        oe = z ? fs(z) : "",
        U = oe === "" ? void 0 : m.resolved.get(oe);
      F.push({ ...H, className: j, ...(U ? { reviewAuthor: U } : {}) });
    }
    (j$3(C, G, F, { scale: i, ...(Ne ? { pageOffsetX: Ne.pageOffsetX } : {}) }),
      (ms = G),
      (gs = f),
      (hs = m.resolved));
  }
  function ar() {
    j$3(K, G, V ? Pd$1(G, V.cellIds) : le ? yd$1(G, le) : [], {
      scale: i,
      pageOffsetX: Ne?.pageOffsetX,
      ...(V ? {} : { className: "docx-retained-selection-rect" }),
    });
  }
  function Jr(s) {
    let c = Ac$1(a.part());
    if (s) return c.find((v) => v.id === s) ?? null;
    let f = _t ? c.find((v) => v.id === _t) : void 0;
    if (f) return f;
    let m = P.head.paragraphId;
    return (
      c.find(
        (v) =>
          v.beginParagraphId === m ||
          v.endParagraphId === m ||
          v.resultParagraphIds.includes(m),
      ) ?? (c.length === 1 ? c[0] : null)
    );
  }
  function ir(s) {
    return (
      Ac$1(a.part()).find(
        (f) =>
          f.beginParagraphId === s ||
          f.endParagraphId === s ||
          f.resultParagraphIds.includes(s),
      )?.id ?? null
    );
  }
  function fa() {
    return ir(P.anchor.paragraphId) !== null || ir(P.head.paragraphId) !== null;
  }
  function np(s) {
    let c = eo(),
      f = (m, v = "") =>
        typeof m == "string"
          ? /(?:Id|Ids)$/.test(v) && c.has(m)
          : Array.isArray(m)
            ? m.some((F) => f(F, v))
            : !m || typeof m != "object"
              ? false
              : Object.entries(m).some(([F, H]) => f(H, F));
    return f(s);
  }
  function eo() {
    return new Set(
      Ac$1(a.part()).flatMap((s) => [
        s.beginParagraphId,
        ...s.resultParagraphIds,
        s.endParagraphId,
      ]),
    );
  }
  function pa(s) {
    return new Set([
      s.beginParagraphId,
      s.endParagraphId,
      ...s.resultParagraphIds,
    ]);
  }
  function rp(s) {
    let c = 0;
    for (let f of G.pages)
      for (let m of R(f)) s.has(m.paragraphId) && (c += m.lines.length);
    return c;
  }
  function ma(s, c) {
    let f = new Set(c),
      m = new Map();
    for (let v of s.pages)
      for (let F of R(v)) {
        if (!f.has(F.paragraphId) || m.has(F.paragraphId)) continue;
        let H = v.pageFieldSource;
        m.set(F.paragraphId, Xa$2(H?.pageNumber ?? v.index + 1, H?.format));
      }
    return m;
  }
  function ga(s) {
    if (Ke === "view" || !a.editable) return false;
    let c = Jr(s);
    return c
      ? If$1(a.part(), {
          op: "rewriteTocPageNumbers",
          tocId: c.id,
          updates: [],
        }) === null
      : false;
  }
  function ys(s, c) {
    if (!Number.isInteger(s) || !Number.isInteger(c) || s < 1 || c < 1)
      return null;
    let f = $n.sectionPropertiesAt(P.head.paragraphId),
      m =
        f.pageSize.widthTwips -
        f.margins.leftTwips -
        f.margins.rightTwips -
        f.margins.gutterTwips,
      v = Math.max(300, Math.floor(m / c));
    return {
      op: "insertTable",
      beforeParagraphId: P.head.paragraphId,
      rows: s,
      cols: c,
      columnWidthTwips: v,
    };
  }
  function vs(s, c) {
    if (Ke === "view" || !a.editable) return false;
    let f = ys(s, c);
    return f !== null && If$1(a.part(), f) === null;
  }
  function op(s, c) {
    if (!vs(s, c)) return false;
    let f = ys(s, c);
    if (!f) return false;
    let m = null,
      v = a.subscribe((H) => {
        H.caret && (m = H.caret);
      }),
      F = false;
    try {
      Pe(
        () => {
          let H = Ae([f], Ce());
          return (
            H.committed ||
              (J = H.reason ?? "the table could not be inserted here"),
            (F = H.committed),
            H
          );
        },
        () => {
          let H = m;
          return H ? Ee({ paragraphId: H.paragraphId, offset: H.start }) : null;
        },
      );
    } finally {
      v();
    }
    return F;
  }
  let bs = 'TOC \\o "1-3" \\h';
  function xs() {
    let s = zc$1(bs);
    if (!s) return null;
    let c = a.documentOutline(),
      f = Ic$1(
        a.part(),
        c,
        s,
        ma(
          Oe.layout(),
          c.map((m) => m.blockId),
        ),
        eo(),
      );
    return {
      op: "insertToc",
      beforeParagraphId: P.head.paragraphId,
      instruction: bs,
      alias: n.tocLabels?.title ?? "TOC",
      entries: f.entries,
      bookmarksToCreate: f.bookmarksToCreate,
    };
  }
  function Is() {
    if (Ke === "view" || !a.editable || fa()) return false;
    let s = xs();
    return s !== null && If$1(a.part(), s) === null;
  }
  function ap() {
    if (!Is()) return false;
    let s = xs();
    if (!s) return false;
    let c = new Set(Ac$1(a.part()).map((v) => v.id)),
      f = a.applyTreeOps([s]);
    if (!f.committed)
      return (
        (J = f.reason ?? "the table of contents could not be inserted"),
        false
      );
    let m = Ac$1(a.part()).find((v) => !c.has(v.id));
    return m ? Ss(m.id, "pageNumbers") : true;
  }
  function Ss(s, c = "entire") {
    let f = Jr(s);
    if (!f || !ga(f.id)) return false;
    let m = Oe.layout(),
      v = a.documentOutline(),
      F = v.map((j) => j.blockId);
    if (c === "entire") {
      let j = Ic$1(a.part(), v, f.instruction, ma(m, F), pa(f)),
        z = a.applyTreeOps([
          {
            op: "replaceTocResult",
            tocId: f.id,
            entries: j.entries,
            bookmarksToCreate: j.bookmarksToCreate,
          },
        ]);
      if (!z.committed)
        return (
          (J = z.reason ?? "the table of contents could not be refreshed"),
          false
        );
      if (((m = Oe.layout()), (f = Jr(f.id)), !f)) return true;
    }
    let H$1 = "";
    for (let j = 0; j < 3; j += 1) {
      let z = ma(m, F),
        oe = H(a.part(), f, v, pa(f)),
        U = f.resultParagraphIds.flatMap((Se, Bt) => {
          let sn = oe[Bt],
            lr = sn ? z.get(sn) : void 0;
          return lr === void 0 ? [] : [{ paragraphId: Se, pageNumberText: lr }];
        });
      if (U.length === 0) break;
      let se = U.map((Se) => `${Se.paragraphId}\0${Se.pageNumberText}`).join(
        "",
      );
      if (se === H$1) break;
      H$1 = se;
      let fe = a.applyTreeOps([
        { op: "rewriteTocPageNumbers", tocId: f.id, updates: U },
      ]);
      if (!fe.committed) {
        if (fe.rejected)
          return (
            (J =
              fe.reason ?? "the table of contents page numbers were refused"),
            false
          );
        break;
      }
      ((m = Oe.layout()), (f = Jr(f.id) ?? f));
    }
    return true;
  }
  let Oe = {
    session: a,
    storyScope: S,
    imageDecodePort: () => ze,
    layout: () => (ge(), je(), G),
    state: Ze,
    currentPage: (s = "caret") => {
      if ((ge(), je(), s === "viewport")) {
        let f = Ac(e, G, i);
        if (f !== null) return f;
      }
      let c = Ed(G, P.head);
      return c ? c.pageIndex + 1 : 1;
    },
    setScale(s) {
      if (!(s > 0) || !Number.isFinite(s)) return false;
      if (s === i) return true;
      let c = {
        scale: i,
        defaults: x,
        measurer: I,
        producer: g,
        furnitureSource: Qe,
      };
      try {
        let f = at(e),
          m = f
            ? {
                x: (f.scrollLeft - e.offsetLeft + f.clientWidth / 2) / i,
                y: (f.scrollTop - e.offsetTop + f.clientHeight / 2) / i,
              }
            : null;
        if (
          ((i = s),
          n.measurer ||
            ((x = td(i, {
              context: Zn(e.ownerDocument),
              ...(n.fontAlias ? { fontAlias: n.fontAlias } : {}),
            })),
            (I = x.measurer)),
          (g = k()),
          (Qe = Ci({
            session: a,
            measurer: I,
            producer: g,
            cache: D,
            styleCascade: Fe,
            defaultTabStopPt: Ye,
            displayMode: n.revisionDisplayMode ?? cb,
          })),
          (Ct = void 0),
          (Ne = void 0),
          (rn = null),
          nt.invalidateAll(a.packageRevision(), "zoom"),
          nt.flush(),
          f && m)
        ) {
          let v = Math.max(0, m.x * i + e.offsetLeft - f.clientWidth / 2),
            F = Math.max(0, m.y * i + e.offsetTop - f.clientHeight / 2),
            H = Number.isFinite(f.scrollWidth)
              ? Math.max(0, f.scrollWidth - f.clientWidth)
              : null,
            j = Number.isFinite(f.scrollHeight)
              ? Math.max(0, f.scrollHeight - f.clientHeight)
              : null;
          ((f.scrollLeft = H === null ? v : Math.min(v, H)),
            (f.scrollTop = j === null ? F : Math.min(F, j)),
            Yr());
        }
        return !0;
      } catch {
        (({
          scale: i,
          defaults: x,
          measurer: I,
          producer: g,
          furnitureSource: Qe,
        } = c),
          (Ct = void 0),
          (Ne = void 0),
          (rn = null));
        try {
          (nt.invalidateAll(a.packageRevision(), "zoom-rollback"), nt.flush());
        } catch {}
        return false;
      }
    },
    enqueueType: ia,
    flushPendingInput: ge,
    type(s) {
      let c = an(),
        f = c.collapseTo,
        m = $e(f.paragraphId, f.offset, s.length),
        v = Ke === "suggest" ? on() : null,
        F = v && v.to.paragraphId === f.paragraphId ? v.to.offset : f.offset,
        H = [
          ...c.ops,
          { op: "insertText", paragraphId: f.paragraphId, offset: F, text: s },
        ],
        j = {
          paragraphId: f.paragraphId,
          start: F + s.length,
          end: F + s.length,
        };
      Pe(
        () => ht([...H, ...m], H, Ce(), j),
        () => Ee({ paragraphId: f.paragraphId, offset: F + s.length }),
      );
    },
    insertPlainText: (s) => ya(s),
    deleteBackward() {
      let s = an();
      if (s.ops.length > 0) {
        Pe(
          () => Ae(s.ops, Ce()),
          () => Ee(s.collapseTo),
        );
        return;
      }
      let c = Me() ?? void 0,
        f = P.head;
      if (f.offset === 0) {
        for (let z of hc$1(G, f.paragraphId)) {
          let oe = vt(z);
          if (oe.length !== 0) {
            Pe(
              () =>
                Ae(
                  [
                    {
                      op: "deleteText",
                      paragraphId: z,
                      start: oe.length - 1,
                      end: oe.length,
                    },
                  ],
                  Ce(),
                ),
              () => Ee({ paragraphId: z, offset: oe.length - 1 }),
              { rearmPending: c },
            );
            return;
          }
        }
        let v = A(),
          F = v.indexOf(f.paragraphId),
          H = v[F - 1];
        if (!H) return;
        let j = vt(H).length;
        Pe(
          () =>
            Ae(
              [{ op: "joinParagraphs", firstId: H, secondId: f.paragraphId }],
              Ce(),
            ),
          () => Ee({ paragraphId: H, offset: j }),
          { rearmPending: c },
        );
        return;
      }
      let m = Ts(f, "before");
      if (m) {
        Pe(
          () =>
            Ae(
              [
                {
                  op: "removeContentControl",
                  controlId: m.controlId,
                  keepContent: false,
                },
              ],
              Ce(),
            ),
          () => Ee({ paragraphId: f.paragraphId, offset: m.start }),
          { rearmPending: c },
        );
        return;
      }
      Pe(
        () =>
          Ae(
            [
              {
                op: "deleteText",
                paragraphId: f.paragraphId,
                start: f.offset - 1,
                end: f.offset,
              },
            ],
            Ce(),
          ),
        () => Ee({ ...f, offset: f.offset - 1 }),
        { rearmPending: c },
      );
    },
    splitParagraph() {
      let s = an(),
        c = s.collapseTo,
        f = new Set(a.paragraphIdsIn(S())),
        m = Me() ?? void 0;
      Pe(
        () =>
          Ae(
            [
              ...s.ops,
              {
                op: "splitParagraph",
                paragraphId: c.paragraphId,
                offset: c.offset,
              },
            ],
            Ce(),
          ),
        () => {
          let v = a.paragraphIdsIn(S()).find((F) => !f.has(F));
          return v ? Ee({ paragraphId: v, offset: 0 }) : null;
        },
        { rearmPending: m },
      );
    },
    navigate(s, c = false) {
      ge();
      let f = _i(G, P.head, s, wt, pe?.getActive() ?? null, Z(), I);
      if (!f) return;
      let m = eo();
      if (m.has(f.position.paragraphId)) {
        if (c) return;
        let F = new Set(["left", "wordLeft", "lineStart", "up", "pageUp"]).has(
            s,
          )
            ? "up"
            : "down",
          H = rp(m) + 4;
        for (let j = 0; j < H; j += 1) {
          let z = _i(
            G,
            f.position,
            F,
            f.desiredX,
            pe?.getActive() ?? null,
            Z(),
            I,
          );
          if (
            !z ||
            (z.position.paragraphId === f.position.paragraphId &&
              z.position.offset === f.position.offset)
          )
            return;
          if (((f = z), !m.has(f.position.paragraphId))) break;
        }
        if (m.has(f.position.paragraphId)) return;
      }
      ((wt = f.desiredX),
        E?.activeNoteScope() &&
          f.pageIndex !== void 0 &&
          Number.isInteger(f.pageIndex) &&
          E.setActiveNotePageIndex(f.pageIndex),
        dt({ anchor: c ? P.anchor : f.position, head: f.position }, true));
    },
    deleteWordBackward() {
      if (Oe.deleteSelection()) return;
      let s = P.head,
        c = Bd$1(vt(s.paragraphId), s.offset, -1);
      if (c === s.offset) {
        Oe.deleteBackward();
        return;
      }
      Pe(
        () =>
          Ae(
            [
              {
                op: "deleteText",
                paragraphId: s.paragraphId,
                start: c,
                end: s.offset,
              },
            ],
            Ce(),
          ),
        () => Ee({ ...s, offset: c }),
        { rearmPending: Me() ?? void 0 },
      );
    },
    deleteWordForward() {
      if (Oe.deleteSelection()) return;
      let s = P.head,
        c = Bd$1(vt(s.paragraphId), s.offset, 1);
      if (c === s.offset) {
        Oe.deleteForward();
        return;
      }
      Pe(
        () =>
          Ae(
            [
              {
                op: "deleteText",
                paragraphId: s.paragraphId,
                start: s.offset,
                end: c,
              },
            ],
            Ce(),
          ),
        void 0,
        { rearmPending: Me() ?? void 0 },
      );
    },
    deleteForward() {
      if (Oe.deleteSelection()) return;
      let s = Me() ?? void 0,
        c = P.head,
        f = vt(c.paragraphId);
      if (c.offset < f.length) {
        let F = Ts(c, "after");
        if (F) {
          Pe(
            () =>
              Ae(
                [
                  {
                    op: "removeContentControl",
                    controlId: F.controlId,
                    keepContent: false,
                  },
                ],
                Ce(),
              ),
            () => Ee(c),
            { rearmPending: s },
          );
          return;
        }
        Pe(
          () =>
            Ae(
              [
                {
                  op: "deleteText",
                  paragraphId: c.paragraphId,
                  start: c.offset,
                  end: c.offset + 1,
                },
              ],
              Ce(),
            ),
          void 0,
          { rearmPending: s },
        );
        return;
      }
      let m = A(),
        v = m[m.indexOf(c.paragraphId) + 1];
      if (v) {
        if (hc$1(G, v).includes(c.paragraphId)) {
          if (vt(v).length === 0) return;
          Pe(
            () =>
              Ae(
                [{ op: "deleteText", paragraphId: v, start: 0, end: 1 }],
                Ce(),
              ),
            () => Ee(c),
            { rearmPending: s },
          );
          return;
        }
        Pe(
          () =>
            Ae(
              [{ op: "joinParagraphs", firstId: c.paragraphId, secondId: v }],
              Ce(),
            ),
          () => Ee(c),
          { rearmPending: s },
        );
      }
    },
    ...$n,
    ...Kr,
    setSelection: (s) => dt(s),
    revealPage(s, c) {
      let f = G.pages.find((m) => m.index === s);
      return f ? sr(f.box.y, f.box.height, c) : false;
    },
    revealParagraph(s, c) {
      je();
      let f = Ed(G, { paragraphId: s, offset: 0 });
      if (!f) return false;
      let m = G.pages.find((v) => v.index === f.pageIndex);
      return m ? sr(m.contentBox.y + f.y, f.height, c) : false;
    },
    revealPosition(s, c) {
      je();
      let f = Ed(G, s);
      if (!f) return false;
      let m = G.pages.find((v) => v.index === f.pageIndex);
      return m
        ? sr(m.contentBox.y + f.y, f.height, { block: "nearest", ...c })
        : false;
    },
    setEditable(s) {
      ((M.contentEditable = s ? "true" : "false"),
        M.setAttribute("aria-readonly", s ? "false" : "true"));
    },
    selectAll() {
      let s = A(),
        c = s[0],
        f = s[s.length - 1];
      !c ||
        !f ||
        dt({
          anchor: { paragraphId: c, offset: 0 },
          head: { paragraphId: f, offset: vt(f).length },
        });
    },
    hyperlinks: jr,
    contentControls: Zt,
    canInsertTable: vs,
    insertTable: op,
    canInsertToc: Is,
    insertToc: ap,
    canRefreshToc: ga,
    refreshToc: Ss,
    isInsideToc: (s) =>
      Ac$1(a.part()).some(
        (c) =>
          c.beginParagraphId === s ||
          c.endParagraphId === s ||
          c.resultParagraphIds.includes(s),
      ),
    retainSelection: () => {
      ((le = P), ar());
    },
    releaseSelection: () => {
      le && ((le = null), ar());
    },
    retainedSelection: () => le,
    publishedLayout: () => G,
    overlayCoordinates: () =>
      Object.freeze({
        paintScale: i,
        pageOffsetX: Ne?.pageOffsetX ?? new Map(),
      }),
    commitReviewOps: (s) =>
      Pe(
        () => {
          if (Ke === "view")
            return { committed: false, rejected: true, opCount: 0, reason: d };
          let c = s();
          return {
            committed: c.committed,
            rejected: !c.committed,
            opCount: 0,
            ...(typeof c.reason == "string" ? { reason: c.reason } : {}),
          };
        },
        () => {
          (je(), _e.noteModelMoved());
          let c = A();
          return c.length === 0 ? null : Bo(G, c, P);
        },
      ),
    applyAutomationOps: (s, c) => {
      let f = { committed: false, rejected: false, opCount: 0 },
        m = c ?? Vf;
      return (
        Pe(
          () => {
            let v = Qr(false);
            if (v !== null)
              return (f = {
                committed: false,
                rejected: true,
                opCount: 0,
                reason: v,
              });
            let F = null,
              H = s((j) => {
                let z = Qr(true, [], false);
                return z === null
                  ? a.ensureHyperlinkRelationship(j, m)
                  : ((F = z), null);
              });
            return H === null
              ? (f = {
                  committed: false,
                  rejected: true,
                  opCount: 0,
                  reason:
                    F ?? "this engine will not author that hyperlink target",
                })
              : (f = Ae(H, void 0, void 0, m, false));
          },
          () => {
            (je(), _e.noteModelMoved());
            let v = A();
            return v.length === 0 ? null : Bo(G, v, P);
          },
        ),
        f
      );
    },
    editingMode: () => Ke,
    setEditingMode: (s) => {
      (ge(), (Ke = s), (J = null), n.onChange?.(Ze()));
    },
    revisionAuthors: () => ps().value,
    setRevisionStyles: (s) => {
      s !== Ve && ((Ve = s), ge(), lt(false));
    },
    setReviewActivationExclusions(s) {
      ((nr = s === null ? null : new Set(s)), Tn(), n.onChange?.(Ze()));
    },
    activeReviewKey: () => {
      let s = ua();
      return s ? b$1(s) : null;
    },
    activateReview: (s, c) => {
      if (
        (kn.clear(),
        (rr = c
          ? { key: s, anchor: c.anchor, head: c.head }
          : { key: s, anchor: P.anchor, head: P.head }),
        c)
      ) {
        ca = true;
        try {
          dt(c);
        } finally {
          ca = false;
        }
        return;
      }
      (Tn(), n.onChange?.(Ze()));
    },
    activatedReviewKey: () => (cs() === null ? null : (rr?.key ?? null)),
    dismissActiveReview: () => {
      let s = ua();
      s && (kn.add(b$1(s)), (rr = null), Tn(), n.onChange?.(Ze()));
    },
    navigation: Vt,
    bookmarks: () => a.bookmarks(),
    selectedText() {
      if (V) return Qd$1(G, V);
      let { from: s, to: c } = on();
      return mc(G, s, c, A());
    },
    deleteSelection() {
      let s = an();
      return s.ops.length === 0
        ? false
        : (Pe(
            () => Ae(s.ops, Ce()),
            () => Ee(s.collapseTo),
          ),
          true);
    },
    setCellSelection: ls,
    layoutSession: () => L,
    undo: () => {
      if (Ke === "view") {
        ((J = d), n.onChange?.(Ze()));
        return;
      }
      (ge(), ks(a.undo()));
    },
    redo: () => {
      if (Ke === "view") {
        ((J = d), n.onChange?.(Ze()));
        return;
      }
      (ge(), ks(a.redo()));
    },
    activeScope: () => {
      let s = E?.activeNoteScope();
      return s || pe.activeScope();
    },
    setActiveScope: (s) => (
      ge(),
      s.kind === "note"
        ? E.enterNote(s.id)
        : s.kind !== "body" && s.kind !== "headerFooter"
          ? false
          : (E?.exitNote(), pe.setActiveScope(s))
    ),
    insertNote: (s) => (ge(), E.insertNote(s)),
    deleteNote: (s, c) => E.deleteNote(s, c),
    convertNote: (s, c) => E.convertNote(s, c),
    convertAllNotes: (s) => E.convertAllNotes(s),
    setNoteProperties: (s) => E.setNoteProperties(s),
    enterNote: (s, c) => (ge(), E.enterNote(s, c)),
    exitNote: () => (ge(), E.exitNote()),
    notePropertiesState: () => {
      let s = Oe.state().selection.head.paragraphId,
        c = `${a.packageRevision()}:${s}`;
      if (c === y) return $;
      let f = Vu(Oe);
      return (($ = f), (y = c), f);
    },
    notePreviewText: (s) => Wu(a, s),
    applyTableCommandPlan(s) {
      if (!s.ok) return { ok: false, code: s.code, reason: s.reason };
      let c = null,
        f = a.subscribe((m) => {
          m.caret && (c = m.caret);
        });
      try {
        let m = Ce(),
          v = s.selection.kind === "adoptCommittedCaret";
        Pe(
          () => Ae(s.ops, m),
          v
            ? () => {
                let F = c;
                return F
                  ? Ee({ paragraphId: F.paragraphId, offset: F.start })
                  : null;
              }
            : void 0,
          s.selection.kind === "preserveSelection"
            ? { keepCellSelection: !0 }
            : void 0,
        );
      } finally {
        f();
      }
      return J
        ? { ok: false, code: "invalidArgs", reason: J }
        : { ok: true, changed: true };
    },
    enterHeaderFooter: (s) => {
      ge();
      let c = pe.enterHeaderFooter(s);
      if (!c) return c;
      let f = pe.getActive(),
        m = f ? G.pages[f.pageIndex] : void 0;
      if (f && m) {
        let v = f.kind === "header" ? m.header : m.footer,
          F =
            v?.box.y ??
            (f.kind === "header" ? m.box.y : m.box.y + m.box.height - 1),
          H = v?.box.height ?? 1;
        sr(F, H, { block: "nearest" });
      }
      return c;
    },
    exitHeaderFooter: () => (ge(), pe.exitHeaderFooter()),
    headerFooterState: () => pe.headerFooterStateStable(a.packageRevision()),
    ...qu({
      applyOps: Ae,
      commit: Pe,
      deleteSelectionOps: ip,
      orderedStart: to,
      selectionMark: Ce,
      collapsedAt: Ee,
      isHeaderFooterOpen: () => pe?.getActive() !== null,
      lastRejection: () => J,
    }),
    ...zu({
      session: a,
      applyOps: Ae,
      commit: Pe,
      storyScope: S,
      selectionMark: Ce,
      editingMode: () => Ke,
      author: () => n.author,
      trackedDate: w,
      decodePort: () => ze,
    }),
    focus: () => M.focus({ preventScroll: true }),
    setTableInteractionLabel(s) {
      l.resolve = s;
    },
    refreshTableInteractionLabels() {
      wn.refreshLabels();
    },
    destroy() {
      (ge(),
        O.removeEventListener("selectionchange", ws),
        M.removeEventListener("keydown", Rs),
        M.removeEventListener("beforeinput", Ms),
        M.removeEventListener("copy", Es),
        M.removeEventListener("cut", Fs),
        M.removeEventListener("paste", Os),
        M.removeEventListener("compositionstart", Cs),
        M.removeEventListener("compositionend", Ps),
        O.removeEventListener("scroll", As, { capture: true }),
        e.ownerDocument.defaultView?.removeEventListener("resize", xa),
        er?.disconnect(),
        (da = null),
        ha?.destroy(),
        wn.destroy(),
        Vt.destroy(),
        _e.destroy(),
        M.removeEventListener("contextmenu", Nt),
        M.removeEventListener("click", is),
        M.removeEventListener("pointermove", xn),
        M.removeEventListener("pointerleave", p),
        nt.cancel(),
        st !== null && clearTimeout(st),
        (st = null),
        be.dispose(),
        e$1(M),
        T.destroy(),
        Vr(),
        e.replaceChildren());
    },
  };
  function ks(s) {
    if (((Te = null), _e.noteModelMoved(), je(), !s)) {
      dt(Bo(G, A(), P));
      return;
    }
    dt({
      anchor: { paragraphId: s.paragraphId, offset: s.start },
      head: { paragraphId: s.paragraphId, offset: s.end },
    });
  }
  function sr(s, c, f) {
    let m = at(e);
    if (!m || m.clientHeight === 0) return false;
    let v = s * i + e.offsetTop,
      F = c * i,
      H = f?.offsetPx ?? 24,
      j = f?.block ?? "start",
      z = m.clientHeight;
    if (j === "nearest" || j === "centerIfNeeded") {
      let se = v < m.scrollTop,
        fe = v + F > m.scrollTop + z;
      if (!se && !fe) return true;
    }
    let oe =
        j === "center" || j === "centerIfNeeded"
          ? v - Math.max(0, (z - F) / 2)
          : j === "nearest" && v > m.scrollTop
            ? v + F + H - z
            : v - H,
      U = Math.max(0, m.scrollHeight - z);
    return (
      m.scrollTo({
        top: Math.max(0, Math.min(oe, U)),
        behavior: f?.behavior ?? "auto",
      }),
      Yr(),
      true
    );
  }
  function Ce() {
    return Zo(P);
  }
  function on() {
    return (ge(), wi(G, P, A()));
  }
  function to() {
    return on().from;
  }
  function vt(s) {
    return Id$1(G, s);
  }
  function Ts(s, c) {
    let f = a.partFor(S()) ?? a.part(),
      m = Fa(f, s.paragraphId);
    return !m || m.kind !== "paragraph"
      ? null
      : c === "before"
        ? Ud$1(m, s.offset)
        : Vd$1(m, s.offset);
  }
  function an() {
    if ((ge(), V)) {
      let f = [];
      for (let m of Nd$1(G, V.cellIds)) {
        let v = Id$1(G, m).length;
        v > 0 && f.push({ op: "deleteText", paragraphId: m, start: 0, end: v });
      }
      return { ops: f, collapseTo: to() };
    }
    if (
      P.anchor.paragraphId === P.head.paragraphId &&
      P.anchor.offset === P.head.offset
    )
      return { ops: [], collapseTo: Ad$1(G, P.head) };
    let { from: s, to: c } = on();
    return yc(G, a.partFor(S()) ?? a.part(), s, c, A());
  }
  function ip() {
    return an().ops;
  }
  let { onSelectionChange: ws, onCompositionEnd: Ps } = _e,
    Cs = (...s) => {
      (ge(), _e.onCompositionStart(...s));
    },
    ha = null,
    sp = wc(
      Oe,
      n.onRequestHyperlink ? { onRequestHyperlink: n.onRequestHyperlink } : {},
    ),
    Rs = (s) => {
      (s.defaultPrevented || _e.adoptBeforeInput(), sp(s));
    },
    { onCopy: Es, onCut: Fs, onPaste: Os } = Pc(Oe, ya),
    lp = Cc(Oe, { isComposing: () => _e.isComposing(), insertPlainText: ya }),
    Ms = (s) => {
      (_e.adoptBeforeInput(), lp(s));
    };
  function ya(s) {
    let c = xc(s).split(`
`),
      f = an(),
      m = f.collapseTo,
      v = c.join(""),
      F = [...f.ops],
      H = $e(m.paragraphId, m.offset, v.length);
    v.length > 0 &&
      (F.push({
        op: "insertText",
        paragraphId: m.paragraphId,
        offset: m.offset,
        text: v,
      }),
      F.push(...H));
    let j = [],
      z = 0;
    for (let fe = 0; fe < c.length - 1; fe += 1)
      ((z += c[fe].length), j.push(m.offset + z));
    if (
      (j.length > 0 &&
        F.push({
          op: "splitParagraphMany",
          paragraphId: m.paragraphId,
          offsets: j,
        }),
      F.length === 0)
    )
      return;
    let oe = new Set(a.paragraphIdsIn(S())),
      U = c[c.length - 1],
      se = F.filter((fe) => !H.includes(fe));
    Pe(
      () => ht(F, se, Ce()),
      () => {
        if (j.length === 0)
          return Ee({
            paragraphId: m.paragraphId,
            offset: m.offset + U.length,
          });
        let fe = a.paragraphIdsIn(S()).filter((Bt) => !oe.has(Bt)),
          Se = fe[fe.length - 1];
        return Se ? Ee({ paragraphId: Se, offset: U.length }) : null;
      },
    );
  }
  (O.addEventListener("selectionchange", ws),
    M.addEventListener("keydown", Rs),
    M.addEventListener("beforeinput", Ms),
    M.addEventListener("copy", Es),
    M.addEventListener("cut", Fs),
    M.addEventListener("paste", Os),
    M.addEventListener("compositionstart", Cs),
    M.addEventListener("compositionend", Ps));
  let va = false;
  function ba() {
    if (va) return;
    va = true;
    let s = e.ownerDocument.defaultView?.requestAnimationFrame,
      c = () => {
        ((va = false), Yr());
      };
    s ? s(c) : queueMicrotask(c);
  }
  let As = (s) => {
    let c = at(e);
    !c || s.target !== c || ba();
  };
  O.addEventListener("scroll", As, { capture: true, passive: true });
  let xa = () => {
      ba();
    },
    Ia = e.ownerDocument.defaultView;
  (Ia?.addEventListener("resize", xa, { passive: true }),
    (er =
      typeof Ia?.ResizeObserver == "function"
        ? new Ia.ResizeObserver(xa)
        : null));
  function Ls() {
    if (!er) return;
    let s = at(e);
    s !== da && (er.disconnect(), (da = s), s && er.observe(s));
  }
  (Ls(),
    (ha = yu(
      {
        pagesLayer: M,
        container: e,
        scale: () => i,
        pageOffsetX: (s) => Ne?.pageOffsetX.get(s) ?? 0,
        layout: () => G,
        measurer: () => I,
        selection: () => P,
        setSelection: (s) => dt(s),
        cellSelection: () => V,
        setCellSelection: (s) => ls(s),
        focus: () => M.focus({ preventScroll: true }),
        activeHeaderFooter: () => du(pe?.getActive() ?? null),
        activeNote: () => {
          let s = E?.activeNoteScope();
          return s
            ? { scopeId: s.id, pageIndex: E?.activeNotePageIndex() ?? null }
            : null;
        },
        enterHeaderFooter: (s) => {
          (ge(),
            pe?.enterHeaderFooter({
              rId: s.rId,
              pageIndex: s.pageIndex,
              kind: s.kind,
              ...(s.position ? { position: s.position } : {}),
            }));
        },
        enterNote: (s, c, f) => {
          (ge(), E?.enterNote(s, c, f));
        },
        exitNote: (s) => {
          (ge(), E?.exitNote(s));
        },
        exitHeaderFooter: () => (ge(), pe?.exitHeaderFooter()),
        enterEmptyHeaderFooter: (s, c) => {
          if (Ke === "view") return;
          ge();
          let f = L.multi?.spans,
            m = 0,
            v = 0;
          if (f && f.length > 0)
            for (let se = 0; se < f.length; se += 1) {
              let fe = f[se];
              if (
                ((m = se),
                (v = fe.startIndex),
                c < fe.startIndex + fe.pageCount)
              )
                break;
            }
          let F = a.headerFooterResolutionBySection(),
            H = F[Math.min(m, Math.max(0, F.length - 1))],
            j = G.pages[c]?.pageFieldSource?.pageNumber ?? c + 1,
            z =
              H?.evenAndOddHeaders && j % 2 === 0
                ? "even"
                : H?.titlePage && c === v
                  ? "first"
                  : "default",
            oe = (se) => {
              let fe = se[Math.min(m, Math.max(0, se.length - 1))];
              return s === "header" ? fe?.headers : fe?.footers;
            },
            U = oe(F)?.get(z)?.rId;
          if (!U) {
            if (
              !Oe.applyHeaderFooterLifecycle?.({
                op: "createHeaderFooter",
                sectionIndex: m,
                kind: s,
                variant: z,
                ...(z === "first" ? { titlePage: true } : {}),
                ...(z === "even" ? { evenAndOddHeaders: true } : {}),
              })?.ok
            )
              return;
            U = oe(a.headerFooterResolutionBySection())?.get(z)?.rId;
          }
          U &&
            pe?.enterHeaderFooter({
              rId: U,
              pageIndex: c,
              sectionIndex: m,
              kind: s,
              variant: z,
            });
        },
        onContentControlWidget: (s, c) => jf(s, c),
        isReadOnlyParagraph: (s) => ir(s) !== null,
      },
      n.pointer ? { mode: n.pointer } : {},
    )));
  let wn = Wc({
    pagesLayer: M,
    furnitureLayer: b,
    scale: () => i,
    pageOffsetX: (s) => Ne?.pageOffsetX.get(s) ?? 0,
    read: () => ({
      layout: G,
      storeRevision: a.packageRevision(),
      selection: P,
      cellSelection: V,
      editingMode: Ke,
      themeColors: a.documentThemeColors(),
    }),
    session: () => a,
    applyTableCommandPlan: (s) => Oe.applyTableCommandPlan(s),
    label: (s) => l.resolve(s),
  });
  lt();
  let dp = Oe.setEditingMode.bind(Oe);
  return (
    (Oe.setEditingMode = (s) => {
      (dp(s), wn.update());
    }),
    (Oe.setTableInteractionLabel = (s) => {
      ((l.resolve = s), wn.refreshLabels());
    }),
    (Oe.refreshTableInteractionLabels = () => {
      wn.refreshLabels();
    }),
    { ok: true, surface: Oe }
  );
}
function Xu() {
  let e = new WeakMap();
  return (t) => {
    let n = e.get(t);
    if (n) return n;
    let r = l$1(t, (o) => R(o));
    for (let o of t.pages) {
      for (let a of [o.header, o.footer])
        a && $u(r, a.fragments, o.index, a.box.y);
      for (let a of [o.footnotes, o.endnotes])
        if (a) for (let i of a.notes) $u(r, i.fragments, o.index, i.box.y);
    }
    return (e.set(t, r), r);
  };
}
function $u(e, t, n, r) {
  for (let o of S(t))
    for (let a of ic$1(o))
      e.has(a) ||
        e.set(a, {
          pageIndex: n,
          contentY: r,
          fragmentY: o.box.y,
          ...(o.lines ? { lines: o.lines } : {}),
        });
}
function Gi(e) {
  if (e === "") return;
  let t = globalThis.navigator?.clipboard;
  if (t?.writeText)
    try {
      t.writeText(e).catch(() => {});
    } catch {}
}
function bh(e) {
  return e.evenPage ? "even" : e.firstPage ? "first" : "default";
}
function Yu(e) {
  return e.variant !== void 0
    ? e.variant === "default" || e.variant === "first" || e.variant === "even"
      ? e.variant
      : { ok: false, reason: "variant must be 'default', 'first', or 'even'" }
    : bh(e);
}
function $i(e, t) {
  let n = e.headerFooterState(),
    r = t.position ?? n?.editing ?? null;
  if (r !== "header" && r !== "footer")
    return {
      ok: false,
      refusal: {
        ok: false,
        code: "invalidArgs",
        reason:
          "header/footer position is required when no furniture scope is open",
      },
    };
  let a =
    t.variant !== void 0 || t.firstPage !== void 0 || t.evenPage !== void 0
      ? Yu(t)
      : (n?.variant ?? "default");
  if (typeof a == "object" && a.ok === false)
    return {
      ok: false,
      refusal: { ok: false, code: "invalidArgs", reason: a.reason },
    };
  let i = a,
    l = t.sectionIndex ?? n?.sectionIndex ?? 0;
  return !Number.isInteger(l) || l < 0
    ? {
        ok: false,
        refusal: {
          ok: false,
          code: "invalidArgs",
          reason: "sectionIndex must be a non-negative integer",
        },
      }
    : { ok: true, sectionIndex: l, kind: r, variant: i };
}
function xh(e) {
  let t = e ?? "rejected";
  return t === "first-section" || t.includes("first-section")
    ? {
        ok: false,
        code: "invalidArgs",
        reason: "the first section cannot link to a previous header or footer",
      }
    : {
        ok: false,
        code: "invalidArgs",
        reason: `header/footer lifecycle refused: ${t}`,
      };
}
function Br(e, t) {
  if (typeof e.applyHeaderFooterLifecycle != "function")
    return {
      ok: false,
      code: "unsupported",
      reason: "header/footer lifecycle is not available",
    };
  let n = e.applyHeaderFooterLifecycle(t);
  return n.ok ? { ok: true, changed: true } : xh(n.reason);
}
function Qo(e, t, n, r) {
  let a = e.session.headerFooterResolutionBySection()[t];
  if (!a) return null;
  let l = (n === "header" ? a.headers : a.footers).get(r);
  return l
    ? {
        rId: l.rId,
        partName: l.partName,
        inherited: l.inherited,
        titlePage: a.titlePage,
        evenAndOddHeaders: a.evenAndOddHeaders,
      }
    : null;
}
function Qu(e, t) {
  if (typeof e.enterHeaderFooter != "function")
    return {
      ok: false,
      code: "unsupported",
      reason: "header/footer editing is not available",
    };
  let n = t.sectionIndex ?? 0;
  if (!Number.isInteger(n) || n < 0)
    return {
      ok: false,
      code: "invalidArgs",
      reason: "sectionIndex must be a non-negative integer",
    };
  let r = t.position,
    o = Yu(t);
  if (typeof o == "object" && o.ok === false)
    return { ok: false, code: "invalidArgs", reason: o.reason };
  let a = o,
    l = Qo(e, n, r, a)?.rId,
    d = false;
  if (!l) {
    let h = Br(e, {
      op: "createHeaderFooter",
      sectionIndex: n,
      kind: r,
      variant: a,
      ...(a === "first" ? { titlePage: true } : {}),
      ...(a === "even" ? { evenAndOddHeaders: true } : {}),
    });
    if (!h.ok) return h;
    ((d = true), (l = Qo(e, n, r, a)?.rId));
  }
  return l
    ? e.enterHeaderFooter({ rId: l, kind: r, sectionIndex: n, variant: a })
      ? { ok: true, changed: d }
      : {
          ok: false,
          code: "invalidArgs",
          reason: "the header/footer relationship could not be opened",
        }
    : {
        ok: false,
        code: "notFound",
        reason: `no ${r} story is available to edit`,
      };
}
function Ju(e, t) {
  let n = $i(e, t);
  if (!n.ok) return n.refusal;
  let r = e.headerFooterState(),
    o = r?.rId,
    a = Br(e, {
      op: "deleteHeaderFooter",
      sectionIndex: n.sectionIndex,
      kind: n.kind,
      variant: n.variant,
    });
  return (
    a.ok &&
      o &&
      r?.editing === n.kind &&
      r.sectionIndex === n.sectionIndex &&
      r.variant === n.variant &&
      e.exitHeaderFooter(),
    a
  );
}
function ef(e, t) {
  let n = $i(e, t);
  if (!n.ok) return n.refusal;
  if (n.sectionIndex === 0)
    return {
      ok: false,
      code: "invalidArgs",
      reason: "the first section cannot link to a previous header or footer",
    };
  let r = e.headerFooterState(),
    o =
      r?.editing === n.kind &&
      r.sectionIndex === n.sectionIndex &&
      r.variant === n.variant,
    a = Br(e, {
      op: "linkToPrevious",
      sectionIndex: n.sectionIndex,
      kind: n.kind,
      variant: n.variant,
    });
  if (!a.ok) return a;
  if (o) {
    let i = Qo(e, n.sectionIndex, n.kind, n.variant);
    i
      ? e.enterHeaderFooter({
          rId: i.rId,
          kind: n.kind,
          sectionIndex: n.sectionIndex,
        })
      : e.exitHeaderFooter();
  }
  return a;
}
function tf(e, t) {
  let n = $i(e, t);
  if (!n.ok) return n.refusal;
  let r = e.headerFooterState(),
    o =
      !!r &&
      r.editing === n.kind &&
      r.sectionIndex === n.sectionIndex &&
      r.variant === n.variant,
    a = r?.rId,
    i = Br(e, {
      op: "unlinkFromPrevious",
      sectionIndex: n.sectionIndex,
      kind: n.kind,
      variant: n.variant,
    });
  if (!i.ok) return i;
  let l = Qo(e, n.sectionIndex, n.kind, n.variant);
  return (
    o &&
      l &&
      l.rId !== a &&
      e.enterHeaderFooter({
        rId: l.rId,
        kind: n.kind,
        sectionIndex: n.sectionIndex,
      }),
    i
  );
}
function nf(e, t) {
  let n = e.headerFooterState(),
    r = t.sectionIndex ?? n?.sectionIndex;
  return Br(e, {
    op: "setSectionFurnitureOptions",
    ...(r !== void 0 ? { sectionIndex: r } : {}),
    ...(t.titlePage !== void 0 ? { titlePage: t.titlePage } : {}),
    ...(t.evenAndOddHeaders !== void 0
      ? { evenAndOddHeaders: t.evenAndOddHeaders }
      : {}),
    ...(t.headerDistanceTwips !== void 0
      ? { headerDistanceTwips: t.headerDistanceTwips }
      : {}),
    ...(t.footerDistanceTwips !== void 0
      ? { footerDistanceTwips: t.footerDistanceTwips }
      : {}),
  });
}
function rf(e, t) {
  return e.activeScope().kind !== "headerFooter"
    ? {
        ok: false,
        code: "unsupported",
        reason: "insertPageField requires an open header or footer scope",
      }
    : typeof e.insertPageField != "function"
      ? {
          ok: false,
          code: "unsupported",
          reason: "page field insertion is not available",
        }
      : e.insertPageField(t.field)
        ? { ok: true, changed: true }
        : {
            ok: false,
            code: "invalidArgs",
            reason:
              e.state().lastRejection ?? "page field insertion was refused",
          };
}
function of(e, t) {
  let n = e.activeScope();
  return n.kind === "headerFooter"
    ? {
        ok: false,
        code: "invalidArgs",
        reason: "cannot insert a note reference inside a header or footer",
      }
    : n.kind === "note"
      ? {
          ok: false,
          code: "invalidArgs",
          reason: "cannot insert a note reference inside another note",
        }
      : typeof e.insertNote != "function"
        ? {
            ok: false,
            code: "unsupported",
            reason: "insertNote is not available",
          }
        : e.insertNote(t.noteKind)
          ? null
          : {
              ok: false,
              code: "invalidArgs",
              reason: e.state().lastRejection ?? "insertNote was refused",
            };
}
function af(e, t) {
  return typeof e.deleteNote != "function"
    ? { ok: false, code: "unsupported", reason: "deleteNote is not available" }
    : e.deleteNote(t.noteKind, t.noteId)
      ? null
      : {
          ok: false,
          code: "invalidArgs",
          reason: e.state().lastRejection ?? "deleteNote was refused",
        };
}
function sf(e, t) {
  return typeof e.convertNote != "function"
    ? { ok: false, code: "unsupported", reason: "convertNote is not available" }
    : e.convertNote(t.fromKind, t.noteId)
      ? null
      : {
          ok: false,
          code: "invalidArgs",
          reason: e.state().lastRejection ?? "convertNote was refused",
        };
}
function lf(e, t) {
  return typeof e.convertAllNotes != "function"
    ? {
        ok: false,
        code: "unsupported",
        reason: "convertAllNotes is not available",
      }
    : e.convertAllNotes(t.fromKind)
      ? null
      : {
          ok: false,
          code: "invalidArgs",
          reason: e.state().lastRejection ?? "convertAllNotes was refused",
        };
}
function df(e, t) {
  if (typeof e.setNoteProperties != "function")
    return {
      ok: false,
      code: "unsupported",
      reason: "setNoteProperties is not available",
    };
  let n = t.scope ?? "document";
  return e.setNoteProperties({
    scope: n,
    sectionIndex: t.sectionIndex,
    footnote: t.footnote,
    endnote: t.endnote,
  })
    ? null
    : {
        ok: false,
        code: "invalidArgs",
        reason: e.state().lastRejection ?? "setNoteProperties was refused",
      };
}
function cf(e, t, n) {
  switch (t.type) {
    case "insertFieldSdt": {
      let { anchor: r, head: o } = e.state().selection;
      if (r.paragraphId !== o.paragraphId)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "insertFieldSdt cannot replace a selection across paragraphs",
        };
      let a = Math.min(r.offset, o.offset),
        i = Math.max(r.offset, o.offset),
        l = e.session.insertCustomNode(
          {
            paragraphId: r.paragraphId,
            offset: a,
            ...(i > a ? { replaceUntil: i } : {}),
            tag: `docx-field:${String(t.fieldId)}`,
            text: t.text,
            alias: t.text,
            lock: "contentLocked",
          },
          { kind: "body" },
        );
      if (!l.ok)
        return {
          ok: false,
          code: l.reason === "locked" ? "locked" : "invalidArgs",
          reason: `insertFieldSdt was refused: ${l.reason}`,
        };
      let d = a + t.text.length;
      e.setSelection({
        anchor: { paragraphId: r.paragraphId, offset: d },
        head: { paragraphId: r.paragraphId, offset: d },
      });
      break;
    }
    case "toggleMark": {
      let r = ei.get(t.mark);
      e.toggleRunProperty(r.localName, r.attributes);
      break;
    }
    case "setMarkAttr": {
      let r = ti(t);
      if (!r.ok) return { ok: false, code: r.code, reason: r.reason };
      e.setRunProperty(r.localName, r.attributes);
      break;
    }
    case "clearFormatting":
      e.clearFormatting();
      break;
    case "setLineSpacing":
      e.setParagraphProperty(
        "spacing",
        t.rule === "multiple"
          ? { line: String(Math.round(t.value * 240)), lineRule: "auto" }
          : {
              line: String(Math.round(t.value * 20)),
              lineRule: t.rule === "exact" ? "exact" : "atLeast",
            },
        { mergeAttributes: true },
      );
      break;
    case "setParagraphSpacing":
      e.setParagraphProperty(
        "spacing",
        {
          ...(t.beforePt !== void 0
            ? {
                before:
                  t.beforePt === null
                    ? null
                    : String(Math.round(t.beforePt * 20)),
              }
            : {}),
          ...(t.afterPt !== void 0
            ? {
                after:
                  t.afterPt === null
                    ? null
                    : String(Math.round(t.afterPt * 20)),
              }
            : {}),
        },
        { mergeAttributes: true },
      );
      break;
    case "setAlignment":
      e.setParagraphProperty("jc", {
        val: t.align === "justify" ? "both" : t.align,
      });
      break;
    case "setParagraphStyle": {
      if (
        !e.session
          .documentStyles()
          .some((o) => o.type === "paragraph" && o.styleId === t.styleId)
      )
        return {
          ok: false,
          code: "invalidArgs",
          reason: `style '${t.styleId}' is not a paragraph style of this document`,
        };
      e.setParagraphProperty("pStyle", { val: t.styleId });
      break;
    }
    case "setIndent": {
      e.setIndent({
        ...(t.left !== void 0 ? { left: t.left } : {}),
        ...(t.right !== void 0 ? { right: t.right } : {}),
        ...(t.firstLine !== void 0 ? { firstLine: t.firstLine } : {}),
      });
      break;
    }
    case "setPageSetup": {
      let r =
          t.scope === "section" ? e.state().selection.head.paragraphId : void 0,
        o = t.pageWidth,
        a = t.pageHeight;
      if (t.orientation !== void 0 && (o !== void 0 || a !== void 0)) {
        let l = r ? e.sectionPropertiesAt(r) : e.sectionProperties(),
          d = o ?? l.pageSize.widthTwips,
          u = a ?? l.pageSize.heightTwips;
        ((o = t.orientation === "landscape" ? Math.max(d, u) : Math.min(d, u)),
          (a =
            t.orientation === "landscape" ? Math.min(d, u) : Math.max(d, u)));
      }
      if (
        !e.setSectionProperties({
          ...(o !== void 0 ? { pageWidthTwips: o } : {}),
          ...(a !== void 0 ? { pageHeightTwips: a } : {}),
          ...(t.orientation !== void 0 ? { orientation: t.orientation } : {}),
          ...(t.marginTop !== void 0 ? { marginTopTwips: t.marginTop } : {}),
          ...(t.marginRight !== void 0
            ? { marginRightTwips: t.marginRight }
            : {}),
          ...(t.marginBottom !== void 0
            ? { marginBottomTwips: t.marginBottom }
            : {}),
          ...(t.marginLeft !== void 0 ? { marginLeftTwips: t.marginLeft } : {}),
          ...(r !== void 0 ? { anchorParagraphId: r } : {}),
        })
      )
        return {
          ok: false,
          code: "invalidArgs",
          reason:
            e.state().lastRejection ?? "the page setup change was refused",
        };
      break;
    }
    case "toggleList":
      if (!e.toggleList(t.kind))
        return {
          ok: false,
          code: "invalidArgs",
          reason: e.state().lastRejection ?? "the list change was refused",
        };
      break;
    case "adjustIndent":
      if (!e.adjustIndent(t.direction))
        return {
          ok: false,
          code: "invalidArgs",
          reason:
            e.state().lastRejection ??
            "the selection is already at that indent level",
        };
      break;
    case "insertBreak":
      if (t.kind === "section") {
        if (!e.insertSectionBreak())
          return {
            ok: false,
            code: "invalidArgs",
            reason: e.state().lastRejection ?? "the section break was refused",
          };
        break;
      }
      if (t.kind === "page") {
        e.insertPageBreak();
        break;
      }
      e.insertLineBreak();
      break;
    case "insertHyperlink": {
      let r = t.href.startsWith("#");
      if (
        !e.hyperlinks.applyHyperlink({
          ...(r ? { anchor: t.href.slice(1) } : { url: t.href }),
          ...(t.text !== void 0 ? { text: t.text } : {}),
        })
      )
        return {
          ok: false,
          code: "invalidArgs",
          reason:
            e.state().lastRejection ??
            "the link was refused: the target is not an allowed scheme, or there is no text to link",
        };
      break;
    }
    case "removeHyperlink":
      if (!e.hyperlinks.removeHyperlink())
        return {
          ok: false,
          code: "notFound",
          reason: "there is no hyperlink at the selection",
        };
      break;
    case "insertText":
      e.type(t.text);
      break;
    case "deleteText":
      e.deleteSelection();
      break;
    case "undo":
      e.undo();
      break;
    case "redo":
      e.redo();
      break;
    case "insertTable":
      if (!e.insertTable(t.rows, t.cols))
        return {
          ok: false,
          code: "unsupported",
          reason:
            e.state().lastRejection ?? "the table could not be inserted here",
        };
      break;
    case "insertToc":
      if (!e.insertToc())
        return {
          ok: false,
          code: "unsupported",
          reason:
            e.state().lastRejection ??
            "the table of contents could not be inserted",
        };
      break;
    case "refreshToc":
      if (!e.refreshToc(t.tocId, t.mode))
        return {
          ok: false,
          code: "unsupported",
          reason:
            e.state().lastRejection ??
            "the table of contents could not be refreshed",
        };
      break;
    case "editHeaderFooter":
      return Qu(e, t);
    case "exitHeaderFooter":
      return (
        typeof e.exitHeaderFooter == "function" && e.exitHeaderFooter(),
        { ok: true, changed: false }
      );
    case "removeHeaderFooter":
      return Ju(e, t);
    case "linkHeaderFooterToPrevious":
      return ef(e, t);
    case "unlinkHeaderFooterFromPrevious":
      return tf(e, t);
    case "setHeaderFooterOptions":
      return nf(e, t);
    case "insertPageField":
      return rf(e, t);
    case "insertNote":
      return of(e, t);
    case "deleteNote":
      return af(e, t);
    case "convertNote":
      return sf(e, t);
    case "convertAllNotes":
      return lf(e, t);
    case "setNoteProperties":
      return df(e, t);
    case "insertRow":
    case "deleteRow":
    case "insertColumn":
    case "deleteColumn":
    case "deleteTable":
    case "setCellFill":
    case "setTableCellVerticalAlignment":
    case "setTableBorders":
    case "commitTableColumnDividerResize":
    case "commitTableRightEdgeResize":
    case "mergeCells":
    case "splitCell":
    case "toggleHeaderRow":
    case "selectTableRegion":
    case "setTableProperties": {
      if (!An(t))
        return {
          ok: false,
          code: "unsupported",
          reason: "unsupported command",
        };
      let r =
        n?.admittedTablePlan ??
        jt({
          command: t,
          part: e.session.part(),
          layout: e.layout(),
          storeRevision: e.session.revision(),
          selection: e.state().selection,
          cellSelection: e.state().cellSelection,
          themeColors: e.session.documentThemeColors(),
          editable: e.session.editable,
          viewing: e.editingMode() === "view",
        });
      return e.applyTableCommandPlan(r);
    }
    case "selectAll":
      return (e.selectAll(), { ok: true, changed: false });
    case "copy":
      return (Gi(e.selectedText()), { ok: true, changed: false });
    case "cut":
      (Gi(e.selectedText()), e.deleteSelection());
      break;
    case "paste":
      e.insertPlainText(t.text);
      break;
    case "setSelection": {
      if ("range" in t && ni(t.range))
        return (
          e.setSelection(t.range),
          e.revealPosition(t.range.head, { block: "centerIfNeeded" }),
          { ok: true, changed: false }
        );
      let r =
        "anchor" in t && Ft(t.anchor)
          ? { anchor: t.anchor }
          : "range" in t && Mn(t.range)
            ? { range: t.range }
            : null;
      if (r === null)
        return {
          ok: false,
          code: "unsupported",
          reason: "unsupported selection form",
        };
      let o = pd(e.session.part(), e.session.paragraphAnchors(), r);
      return o.ok
        ? (e.setSelection(o.selection),
          e.revealPosition(o.selection.head, { block: "centerIfNeeded" }),
          { ok: true, changed: false })
        : o;
    }
    default:
      return Ar(t)
        ? Gd(e, t, n?.editor)
        : { ok: false, code: "unsupported", reason: "unsupported command" };
  }
  return null;
}
function Ih(e, t) {
  let n = e.byteLength;
  if (n < 22) return false;
  let r = new DataView(e.buffer, e.byteOffset, n),
    o = Math.max(0, n - (64 * 1024 + 22)),
    a = -1;
  for (let u = n - 22; u >= o; u -= 1)
    if (r.getUint32(u, true) === 101010256) {
      a = u;
      break;
    }
  if (a < 0) return false;
  let i = r.getUint16(a + 10, true),
    l = r.getUint32(a + 16, true),
    d = 0;
  for (let u = 0; u < i; u += 1) {
    if (l + 46 > n || r.getUint32(l, true) !== 33639248) return false;
    if (((d += r.getUint32(l + 24, true)), d >= t)) return true;
    l +=
      46 +
      r.getUint16(l + 28, true) +
      r.getUint16(l + 30, true) +
      r.getUint16(l + 32, true);
  }
  return false;
}
function uf(e) {
  let t = null,
    n = () => {
      if (!t) return null;
      let { bytes: r } = t;
      return (t.cancel(), (t = null), r);
    };
  return {
    shouldYield: (r) =>
      typeof requestAnimationFrame == "function" &&
      typeof cancelAnimationFrame == "function" &&
      (r.byteLength >= 524288 || Ih(r, 524288)),
    schedule(r) {
      let o = null,
        a = null,
        i = () => {
          ((t = null), e.mount(r));
        },
        l = requestAnimationFrame(() => {
          (a !== null && clearTimeout(a), (a = null), (o = setTimeout(i, 0)));
        });
      ((a = setTimeout(() => {
        (cancelAnimationFrame(l), i());
      }, 250)),
        (t = {
          bytes: r,
          cancel: () => {
            (cancelAnimationFrame(l),
              o !== null && clearTimeout(o),
              a !== null && clearTimeout(a));
          },
        }),
        e.scheduled());
    },
    cancel: n,
    flush() {
      let r = n();
      r && e.mount(r);
    },
    isScheduled: () => t !== null,
  };
}
function ff(e) {
  return (t) => {
    for (let n of e.customNodeDiagnostics)
      try {
        n(t);
      } catch {}
  };
}
function pf(e, t) {
  t.customNodePayloadNamespaces.length !== 0 &&
    e.session.sweepCustomNodePayloads(t.customNodePayloadNamespaces);
}
function mf(e) {
  return e.kind === "comment";
}
function Sh(e) {
  let t = new Map();
  for (let n of e) {
    let r = n.item;
    if (!mf(r)) continue;
    let o = t.get(r.id);
    if (o === void 0) {
      t.set(r.id, r);
      continue;
    }
    if (o.comment !== r.comment) return "ambiguous";
  }
  return t;
}
function kh(e, t) {
  let n = e.filter((a) => a.key === t);
  if (n.length === 0)
    return {
      ok: false,
      code: "notFound",
      reason: "no review item with that key",
    };
  let r = n.map((a) => a.item).filter(mf);
  if (r.length === 0)
    return {
      ok: false,
      code: "kindMismatch",
      reason: "the review item is not a comment",
    };
  let o = r[0];
  for (let a of r)
    if (a.comment !== o.comment)
      return {
        ok: false,
        code: "ambiguous",
        reason: "duplicate comment records share that key",
      };
  return o;
}
function gf(e, t, n) {
  if (!e.reviewEnabled)
    return { ok: false, code: "unsupported", reason: e.proReviewReason };
  if (e.editingMode === "viewing")
    return {
      ok: false,
      code: "locked",
      reason: "the document is open for viewing",
    };
  let r = e.placements(),
    o = kh(r, t);
  if (!("kind" in o)) return o;
  if (!e.surface)
    return {
      ok: false,
      code: "notFound",
      reason: "no review item with that key",
    };
  let a = Sh(r);
  if (a === "ambiguous")
    return {
      ok: false,
      code: "ambiguous",
      reason: "duplicate comment records share an id",
    };
  let i = o,
    l = new Set();
  for (; i.parentId !== void 0 && !l.has(i.id);) {
    l.add(i.id);
    let h = a.get(i.parentId);
    if (!h) break;
    i = h;
  }
  let d = false,
    u = false;
  return (
    e.surface.commitReviewOps(() => {
      let h = e.surface.session.packageRevision();
      return (
        (d = e.surface.session.setCommentResolved(i.id, n)),
        (u = d && e.surface.session.packageRevision() !== h),
        { committed: u }
      );
    }),
    d
      ? (u && e.bump(), { ok: true, changed: u })
      : {
          ok: false,
          code: "notFound",
          reason: "the comment could not be resolved",
        }
  );
}
var Th = "http://schemas.microsoft.com/office/word/2010/wordml",
  wh = "http://schemas.microsoft.com/office/word/2012/wordml",
  Ph = 32;
function en(e) {
  return Lb(e);
}
function Ch(e) {
  return e.kind === "textValue" ? [] : e.children;
}
function Jo(e) {
  if (e.kind === "textValue") return e.value.length;
  if (e.kind === "tab" || e.kind === "hardBreak") return 1;
  if (e.kind === "runProperties" || e.kind === "generic") return 0;
  if (en(e)) {
    let n = 0;
    for (let r of me(e)) n += Jo(r);
    return n;
  }
  let t = 0;
  for (let n of Ch(e)) t += Jo(n);
  return t;
}
function Xi(e) {
  for (let t of e.children)
    if (
      t.kind !== "textValue" &&
      (t.kind === "contentControlProperties" || t.localName === "sdtPr")
    )
      return t;
}
function Rh(e) {
  if (e.kind !== "textValue") {
    for (let t of e.attributes)
      if (t.localName === "val" && t.namespaceUri === ma) return t.value;
  }
}
function Yi(e, t) {
  if (e) {
    for (let n of e.children)
      if (n.kind !== "textValue" && n.localName === t) return Rh(n);
  }
}
function Eh(e) {
  if (!e) return "richText";
  for (let t of e.children) {
    if (t.kind === "textValue") continue;
    let n = Fh(t);
    if (n !== void 0) return n;
  }
  return "richText";
}
function Fh(e) {
  if (e.kind === "textValue") return;
  let t = e.kind,
    n = e.localName,
    r = e.namespaceUri;
  if (t === "contentControlDropDownList" || n === "dropDownList")
    return "dropdown";
  if (t === "contentControlComboBox" || n === "comboBox") return "comboBox";
  if (t === "contentControlDate" || n === "date") return "date";
  if (n === "picture") return "picture";
  if (t === "contentControlText" || n === "text") return "plainText";
  if (n === "richText") return "richText";
  if (n === "checkbox" && (r === Th || t === "contentControlCheckbox"))
    return "checkbox";
  if (n === "repeatingSection" && r === wh) return "repeatingSection";
}
function Qi(e) {
  let t = Yi(e, "lock");
  return t === "contentLocked" || t === "sdtContentLocked";
}
function Oh(e, t) {
  if (Qi(Xi(t))) return true;
  let n = Ga$1(e, t.id);
  for (; n;) {
    if (en(n) && Qi(Xi(n))) return true;
    n = Ga$1(e, n.id);
  }
  return false;
}
function es(e, t) {
  let n = Xi(e),
    r = Yi(n, "tag"),
    o = Yi(n, "alias"),
    a = t ? Oh(t, e) : Qi(n);
  return {
    id: e.id,
    controlType: Eh(n),
    ...(r !== void 0 ? { tag: r } : {}),
    ...(o !== void 0 ? { alias: o } : {}),
    ...(a ? { locked: true } : {}),
  };
}
function Ji(e, t) {
  return t
    ? !(
        (t.tag !== void 0 && e.tag !== t.tag) ||
        (t.alias !== void 0 && e.alias !== t.alias) ||
        (t.controlType !== void 0 && e.controlType !== t.controlType)
      )
    : true;
}
function Mh(e) {
  let t = [],
    n = (r, o, a, i) => {
      let l = o;
      for (let d of r)
        if (d.kind !== "paragraphProperties") {
          if (d.kind === "run") {
            l += Jo(d);
            continue;
          }
          if (d.kind === "hyperlink") {
            l = n(d.children, l, a, i);
            continue;
          }
          if (en(d) && i < Ph) {
            let u = l,
              h = a + 1;
            ((l = n(me(d), l, h, i + 1)),
              t.push({ control: d, start: u, end: l, depth: h }));
            continue;
          }
          l += Jo(d);
        }
      return l;
    };
  return (n(e.children, 0, -1, 0), t);
}
function ts(e, t, n) {
  return Mh(e)
    .filter((r) => t >= r.start && t < r.end)
    .sort((r, o) => o.depth - r.depth)
    .map((r) => es(r.control, n));
}
function Ah(e) {
  let t = [],
    n = (r) => {
      if (r.kind !== "textValue") {
        en(r) && t.push(es(r, e));
        for (let o of r.children) n(o);
      }
    };
  return (n(e.root), t);
}
function ns(e, t) {
  let n = [],
    r = Ga$1(e, t);
  for (; r;) (en(r) && n.push(es(r, e)), (r = Ga$1(e, r.id)));
  return n.reverse();
}
function hf(e, t) {
  return e ? Ah(e.session.part()).filter((n) => Ji(n, t)) : [];
}
function rs(e, t) {
  if (!e) return null;
  let n = e.session.part(),
    { paragraphId: r, offset: o } = e.state().selection.head,
    a = Fa(n, r);
  if (a && a.kind === "paragraph") {
    for (let l of ts(a, o, n)) if (Ji(l, t)) return l;
  }
  let i = ns(n, r);
  for (let l = i.length - 1; l >= 0; l -= 1) {
    let d = i[l];
    if (Ji(d, t)) return d;
  }
  return null;
}
function os(e) {
  return (
    e.type === "setContentControlValue" || e.type === "removeContentControl"
  );
}
function Lh(e) {
  return typeof e == "object" && e !== null && "container" in e && "path" in e;
}
function Hh(e) {
  return typeof e == "object" && e !== null && "from" in e && "to" in e;
}
function Dh(e) {
  let t = (n) => {
    if (n.kind === "textValue") return null;
    if (n.kind === "body") return n;
    for (let r of n.children) {
      let o = t(r);
      if (o) return o;
    }
    return null;
  };
  return t(e.root);
}
function ea(e) {
  let t = [];
  for (let n of e)
    n.kind !== "textValue" &&
      (n.kind === "paragraph" || n.kind === "table" || en(n)) &&
      t.push(n);
  return t;
}
function Nh(e) {
  let t = [];
  for (let n of e.children)
    if (n.kind === "tableRow")
      for (let r of n.children)
        r.kind === "tableCell" && t.push(...ea(r.children));
  return t;
}
function _h(e) {
  return e.kind === "table"
    ? Nh(e)
    : en(e)
      ? ea(me(e))
      : e.kind === "body"
        ? ea(e.children)
        : [];
}
function Zh(e, t, n) {
  if (en(t)) return { ok: true, controlId: t.id };
  if (t.kind === "paragraph") {
    let r = n ?? 0;
    for (let i of ts(t, r, e)) return { ok: true, controlId: i.id };
    let a = ns(e, t.id).at(-1);
    if (a) return { ok: true, controlId: a.id };
  }
  return {
    ok: false,
    code: "notFound",
    reason: "no content control at the addressed block",
  };
}
function Bh(e, t) {
  if (t.container.part !== "body")
    return {
      ok: false,
      code: "unsupported",
      reason: "only the body container is supported",
      target: t,
    };
  let n = Dh(e);
  if (!n)
    return {
      ok: false,
      code: "notFound",
      reason: "the document body was not found",
      target: t,
    };
  if (t.path.length === 0)
    return {
      ok: false,
      code: "notFound",
      reason: "DocLocation path is empty",
      target: t,
    };
  let r = ea(n.children),
    o = null;
  for (let i = 0; i < t.path.length; i += 1) {
    if (((o = r[t.path[i]] ?? null), !o))
      return {
        ok: false,
        code: "notFound",
        reason: `block index ${t.path[i]} is out of range`,
        target: t,
      };
    i < t.path.length - 1 && (r = _h(o));
  }
  if (!o)
    return {
      ok: false,
      code: "notFound",
      reason: "the addressed block was not found",
      target: t,
    };
  let a = Zh(e, o, t.offset);
  return a.ok ? a : { ...a, target: t };
}
function qh(e, t, n) {
  let r = Cr(e, t, n);
  if (!r.ok) return { ok: false, code: r.code, reason: r.reason, target: n };
  let o = Fa(e, r.span.nodeId);
  if (!o || o.kind !== "paragraph")
    return {
      ok: false,
      code: "notFound",
      reason: `paragraph '${n.paraId}' was not found`,
      target: n,
    };
  let a = r.span.start;
  for (let d of ts(o, a, e)) return { ok: true, controlId: d.id };
  let l = ns(e, o.id).at(-1);
  return l
    ? { ok: true, controlId: l.id }
    : {
        ok: false,
        code: "notFound",
        reason: `no content control encloses paragraph '${n.paraId}'`,
        target: n,
      };
}
function yf(e, t) {
  if (t === void 0) {
    let r = rs(e);
    return r
      ? { ok: true, controlId: r.id }
      : {
          ok: false,
          code: "notFound",
          reason: "no content control at the current selection",
        };
  }
  if (Hh(t))
    return {
      ok: false,
      code: "unsupported",
      reason: "DocRange targeting is not supported for content controls",
      target: t,
    };
  let n = e.session.part();
  return Lh(t)
    ? Bh(n, t)
    : Ft(t)
      ? qh(n, e.session.paragraphAnchors(), t)
      : {
          ok: false,
          code: "invalidArgs",
          reason: "unrecognized target shape",
          target: t,
        };
}
function vf(e) {
  switch (e) {
    case "locked":
    case "bound":
    case "typeMismatch":
    case "invalidArgs":
    case "unsupported":
      return e;
    case "unknown-control":
      return "notFound";
    default:
      return "unsupported";
  }
}
function bf(e) {
  switch (e) {
    case "locked":
      return "the content control is locked";
    case "bound":
      return "the content control is bound to external data";
    case "typeMismatch":
      return "the value does not match the control type";
    case "invalidArgs":
      return "the value is not valid for this control";
    case "unsupported":
      return "this control type is not supported";
    case "unknown-control":
      return "the content control was not found";
    default:
      return `the edit was refused (${e})`;
  }
}
function zh(e, t) {
  return {
    ok: false,
    code: vf(e),
    reason: bf(e),
    ...(t !== void 0 ? { target: t } : {}),
  };
}
function Kh(e, t, n, r) {
  return r?.scope && r.scope.kind !== "body"
    ? {
        ok: false,
        refusal: {
          ok: false,
          code: "unsupported",
          reason: "only the body scope is supported",
        },
      }
    : t
      ? n === "view" || !t.session.editable
        ? {
            ok: false,
            refusal: {
              ok: false,
              code: "locked",
              reason: "the document is read-only",
            },
          }
        : e.type === "setContentControlValue" && typeof e.value != "string"
          ? {
              ok: false,
              refusal: {
                ok: false,
                code: "invalidArgs",
                reason: "setContentControlValue requires a string value",
              },
            }
          : { ok: true }
      : {
          ok: false,
          refusal: {
            ok: false,
            code: "notFound",
            reason: "no document is loaded",
          },
        };
}
function as(e, t, n, r) {
  let o = Kh(e, t, n, r);
  if (!o.ok) return o.refusal;
  let a = yf(t, e.target);
  if (!a.ok) return { ok: false, code: a.code, reason: a.reason };
  let i =
      e.type === "setContentControlValue"
        ? {
            op: "setContentControlValue",
            controlId: a.controlId,
            value: e.value,
          }
        : { op: "removeContentControl", controlId: a.controlId },
    l = If$1(t.session.part(), i);
  return l ? { ok: false, code: vf(l), reason: bf(l) } : { ok: true };
}
function xf(e, t) {
  let n = yf(e, t.target);
  if (!n.ok) {
    let l = n.target ?? t.target;
    return {
      ok: false,
      code: n.code,
      reason: n.reason,
      ...(l !== void 0 ? { target: l } : {}),
    };
  }
  e.flushPendingInput();
  let r = e.session.revision(),
    o = Zo(e.state().selection),
    a =
      t.type === "setContentControlValue"
        ? {
            op: "setContentControlValue",
            controlId: n.controlId,
            value: t.value,
          }
        : { op: "removeContentControl", controlId: n.controlId },
    i = e.session.applyTreeOps([a], o, o);
  return i.rejected
    ? zh(i.reason ?? "unsupported", t.target)
    : (e.layout(), { ok: true, changed: e.session.revision() !== r });
}
var If = /^[\p{L}\p{N}\p{M} \-.+_]{1,64}$/u;
function ta(e) {
  let t = e?.defaultFont?.family;
  return t !== void 0 && If.test(t) ? t : Ro.family;
}
function Sf(e, t) {
  let n = new Map(),
    r = (l) => {
      if (l === void 0 || !If.test(l)) return;
      let d = l.toLowerCase();
      n.has(d) || n.set(d, l);
    };
  r(ta(e));
  let o = e?.substitutions ?? [],
    a = new Set(o.map((l) => l.to.family.toLowerCase()));
  for (let l of o) r(l.from.family);
  for (let l of e?.sources ?? [])
    a.has(l.request.family.toLowerCase()) || r(l.request.family);
  for (let l of t) r(l);
  let i = [...n.values()];
  return (i.sort((l, d) => (l < d ? -1 : l > d ? 1 : 0)), i);
}
var jh = {
  regular: { weight: 400, style: "normal" },
  bold: { weight: 700, style: "normal" },
  italic: { weight: 400, style: "italic" },
  boldItalic: { weight: 700, style: "italic" },
};
function kf(e$1, t) {
  let n = [],
    r = [],
    o = t.aggregateBudget,
    a = new Set();
  for (let i$1 of e$1) {
    let l = jh[i$1.style],
      d = Object.freeze({
        family: i$1.family,
        weight: l.weight,
        style: l.style,
      });
    if (i$1.family.trim().length === 0) {
      r.push({ request: d, partName: i$1.partName, reason: "malformed" });
      continue;
    }
    let u = e(d);
    if (!(t.shadowedRequests?.has(u) || a.has(u))) {
      if (
        (a.add(u),
        i$1.bytes.byteLength > t.maxFontBytes || i$1.bytes.byteLength > o)
      ) {
        r.push({ request: d, partName: i$1.partName, reason: "overLimit" });
        continue;
      }
      ((o -= i$1.bytes.byteLength),
        n.push({
          request: d,
          id: `embedded:${i$1.partName}#${i$1.style}`,
          bytes: i$1.bytes,
          hash: i(i$1.bytes),
          faceIndex: 0,
        }));
    }
  }
  return { sources: n, dropped: r };
}
var Uh = "The quick brown fox 0123 \u2014 {}#@",
  Vh = ["monospace", "serif"],
  Wh = /^[\p{L}\p{N}\p{M} \-.+_]{1,64}$/u;
function Tf(e) {
  if (!e) return () => true;
  let t = new Map(),
    n = (r) => ((e.font = r), e.measureText(Uh).width);
  return (r) => {
    let o = t.get(r);
    if (o !== void 0) return o;
    if (!Wh.test(r)) return (t.set(r, true), true);
    let a = false;
    for (let i of Vh) {
      let l = n(`32px ${i}`);
      if (n(`32px "${r}", ${i}`) !== l) {
        a = true;
        break;
      }
    }
    return (t.set(r, a), a);
  };
}
function wf(e, t, n) {
  let r = [];
  for (let o of e) {
    if (t(o) || n(o)) continue;
    let a = qd$2.get(o.toLowerCase());
    (a !== void 0 && n(a)) || r.push(o);
  }
  return r;
}
var Pf = Object.freeze({ installed: 0, alias: () => {}, dispose() {} });
function Gh(e) {
  let t = 0;
  for (let n of e)
    for (let r = 0; r < n.length; r += 1) t = (t * 31 + n.charCodeAt(r)) >>> 0;
  return `docx-embedded-${t.toString(36)}`;
}
function $h() {
  let t = (typeof document < "u" ? document : void 0)?.fonts;
  return !t || typeof FontFace > "u"
    ? {}
    : {
        fontSet: t,
        createFontFace: (n, r, o) => new FontFace(n, r.slice().buffer, o),
      };
}
async function Cf(e, t = $h(), n = []) {
  let { fontSet: r, createFontFace: o } = t;
  if (!r || !o || e.length === 0) return Pf;
  let a = new Map();
  for (let u of e) {
    let h = u.request.family,
      w = a.get(h);
    w ? w.push(u) : a.set(h, [u]);
  }
  let i = new Map(),
    l = [];
  if (
    (await Promise.all(
      [...a].map(async ([u, h]) => {
        let w = Gh(h.map((I) => I.hash)),
          x = false;
        (await Promise.all(
          h.map(async (I) => {
            try {
              let D = o(w, I.bytes, {
                weight: String(I.request.weight),
                style: I.request.style,
              });
              (await D.load(), r.add(D), l.push(D), (x = !0));
            } catch {}
          }),
        ),
          x && i.set(u, w));
      }),
    ),
    l.length === 0)
  )
    return Pf;
  for (let u of n) {
    if (i.has(u.from.family)) continue;
    let h = i.get(u.to.family);
    h !== void 0 && i.set(u.from.family, h);
  }
  let d = false;
  return {
    installed: l.length,
    alias: (u) => (d ? void 0 : i.get(u)),
    dispose() {
      if (!d) {
        d = true;
        for (let u of l)
          try {
            r.delete(u);
          } catch {}
      }
    },
  };
}
var qr = 0.1,
  zr = 5;
var Un = { type: "fit", fit: "pageWidth", minZoom: 0.5, maxZoom: 1 },
  Xh = { type: "fit", fit: "pageWidth" },
  na = { type: "fixed" };
function ra(e) {
  return e === "auto"
    ? Un
    : !e || typeof e != "object"
      ? null
      : e.type === "fixed"
        ? na
        : e.type === "fit" && e.fit === "pageWidth"
          ? oa(e, Un)
            ? Un
            : e
          : null;
}
function oa(e, t) {
  return e === t
    ? true
    : e.type !== t.type
      ? false
      : e.type !== "fit" || t.type !== "fit"
        ? true
        : e.fit === t.fit &&
          Object.is(e.minZoom, t.minZoom) &&
          Object.is(e.maxZoom, t.maxZoom);
}
function Vn(e) {
  return e.type === "fit";
}
function Ef({
  availableWidthPx: e,
  pageWidthPx: t,
  gutterPx: n = 24,
  minZoom: r = 0.1,
  maxZoom: o = 5,
}) {
  if (!Number.isFinite(e) || e <= 0 || !Number.isFinite(t) || t <= 0)
    return null;
  let a = Number.isFinite(n) && n > 0 ? n : 0,
    i = Math.max(e - 2 * a, e * 0.5),
    l = Number.isFinite(r) ? Rf(r) : 0.1,
    d = Number.isFinite(o) ? Rf(o) : 5,
    u = Math.floor((i / t) * 100) / 100;
  return Math.min(Math.max(u, l), Math.max(d, l));
}
function Rf(e) {
  return Math.min(Math.max(e, 0.1), 5);
}
function Yh(e) {
  let t = at(e);
  if (!t) return null;
  let n = t.clientWidth;
  if (!Number.isFinite(n) || n <= 0) return null;
  let r = t.ownerDocument.defaultView?.getComputedStyle(t);
  if (!r) return n;
  let o = Number.parseFloat(r.paddingLeft) || 0,
    a = Number.parseFloat(r.paddingRight) || 0;
  return Math.max(n - o - a, 0);
}
function Ff(e) {
  let t = null,
    n = null,
    r = null,
    o = null;
  function a() {
    if (r === null) return;
    (n?.ownerDocument.defaultView?.cancelAnimationFrame(r), (r = null));
  }
  function i() {
    let d = e.mode();
    if (!Vn(d)) return;
    let u = e.container();
    if (!u) return;
    let h = Yh(u);
    if (h === null) return;
    let w = e.pageWidthPx();
    if (w === null) return;
    o = e.pageWidthTwips();
    let x = Ef({
      availableWidthPx: h,
      pageWidthPx: w,
      ...(d.minZoom !== void 0 ? { minZoom: d.minZoom } : {}),
      ...(d.maxZoom !== void 0 ? { maxZoom: d.maxZoom } : {}),
    });
    x === null || x === e.zoom() || e.applyZoom(x);
  }
  function l() {
    let d = n?.ownerDocument.defaultView;
    if (!d?.requestAnimationFrame) {
      i();
      return;
    }
    r === null &&
      (r = d.requestAnimationFrame(() => {
        ((r = null), i());
      }));
  }
  return {
    refitIfPageResized() {
      let d = e.pageWidthTwips();
      d === null || d === o || i();
    },
    attach() {
      this.detach();
      let d = e.container();
      if (!d) return;
      let u = at(d);
      u &&
        ((n = u),
        typeof ResizeObserver < "u" &&
          ((t = new ResizeObserver(l)), t.observe(u)),
        i());
    },
    refit: i,
    detach() {
      (a(), t?.disconnect(), (t = null), (n = null), (o = null));
    },
  };
}
function Mf(e, t) {
  let n =
      e.zoom !== void 0 &&
      Number.isFinite(e.zoom) &&
      e.zoom >= 0.1 &&
      e.zoom <= 5
        ? e.zoom
        : null,
    r = n ?? 1,
    o = ra(e.zoomMode ?? (n !== null ? na : "auto")) ?? Un;
  function a(d, u) {
    if (d === r) return (u?.(), true);
    let h = t.surface();
    return h && !Gu(h, d * (96 / 72))
      ? false
      : ((r = d), u?.(), t.bump(), t.emitSelectionChange(), true);
  }
  function i() {
    ((o = na), l.detach());
  }
  let l = Ff({
    container: t.container,
    mode: () => o,
    pageWidthPx: () => {
      let d = t.surface()?.layout().pages[0]?.box;
      return d ? d.width * (96 / 72) : null;
    },
    pageWidthTwips: () =>
      t.surface()?.sectionProperties().pageSize.widthTwips ?? null,
    zoom: () => r,
    applyZoom: (d) => {
      a(d);
    },
  });
  return {
    zoom: () => r,
    mode: () => o,
    scale: () => r * (96 / 72),
    attach: () => {
      Vn(o) && l.attach();
    },
    detach: () => l.detach(),
    refit: () => l.refit(),
    refitIfPageResized: () => l.refitIfPageResized(),
    setZoom(d) {
      if (!Number.isFinite(d) || d < 0.1 || d > 5)
        return {
          ok: false,
          code: "invalidArgs",
          reason: `zoom must be between ${0.1} and ${5}, got ${d}`,
        };
      let u = Vn(o);
      return d === r
        ? u
          ? (i(),
            t.bump(),
            t.emitSelectionChange(),
            { ok: true, changed: true })
          : { ok: true, changed: false }
        : a(d, u ? i : void 0)
          ? { ok: true, changed: true }
          : {
              ok: false,
              code: "unsupported",
              reason: `the mounted surface could not apply zoom ${d}`,
            };
    },
    setZoomMode(d) {
      let u = ra(d);
      return u
        ? oa(u, o)
          ? { ok: true, changed: false }
          : ((o = u),
            Vn(u) ? l.attach() : l.detach(),
            t.bump(),
            t.emitSelectionChange(),
            { ok: true, changed: true })
        : {
            ok: false,
            code: "invalidArgs",
            reason: `unknown zoom mode ${JSON.stringify(d)}`,
          };
    },
  };
}
function Of(e) {
  let t = 1.3333333333333333;
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function Af(e, t) {
  return {
    getZoom: () => e.zoom(),
    setZoom: (n) => e.setZoom(n),
    getZoomMode: () => e.mode(),
    setZoomMode: (n) => e.setZoomMode(n),
    getRenderScale: () => e.scale(),
    getPageGeometry: () => {
      let n = t();
      return n
        ? n
            .layout()
            .pages.map((r) => ({
              index: r.index,
              box: Of(r.box),
              contentBox: Of(r.contentBox),
            }))
        : [];
    },
  };
}
var kt =
    "comments and tracked changes require the pro review module (@docx-editor.dev/pro)",
  aa = { mode: null, rejection: null };
function Lf(e, t) {
  return e === void 0 || e === "view"
    ? aa
    : e === "edit"
      ? { mode: "editing", rejection: null }
      : t.reviewEnabled
        ? t.hasAuthor
          ? { mode: "suggesting", rejection: null }
          : {
              mode: null,
              rejection:
                "suggesting mode was requested, but no author is configured",
            }
        : { mode: null, rejection: kt };
}
function Hf(e) {
  return e.viewOnly ||
    e.currentMode !== "editing" ||
    e.readerChoseMode ||
    (!(e.trackRevisions && !e.hostChoseMode) &&
      !e.restrictedToTrackedChanges) ||
    !e.reviewEnabled
    ? aa
    : e.hasAuthor
      ? { mode: "suggesting", rejection: null }
      : {
          mode: null,
          rejection:
            "this document asks for tracked changes, but no author is configured",
        };
}
var Df = new Map();
function Nf(e) {
  let t = e,
    n = null,
    r = null;
  return {
    current: () => t,
    set: (o) => {
      t = o;
    },
    authorsFor: (o) => {
      if (n && n.slots === o && n.colors === t) return n.value;
      let a = b$2(o, t);
      return ((n = { slots: o, colors: t, value: a }), a);
    },
    styleFor: (o) => (
      (!r || r.colors !== t) && (r = { colors: t, value: a$3(t) }),
      r.value.get(o)
    ),
  };
}
var t0 = Object.freeze({ kind: "body" }),
  Zf = Object.freeze([]);
function n0(e$1) {
  let t = e$1.locale && e$1.locale in locales ? e$1.locale : "en",
    r = {
      title: createT(
        deepMerge(en$1, t === "en" ? void 0 : locales[t]),
        t,
      )("toolbar.tableOfContents"),
    },
    o = e$1.container ?? null,
    a$3 = a$2(e$1.modules),
    i = ff(a$3),
    l = a$3.review !== null,
    d$1 = null,
    u = uf({
      mount: (p) => Le(p),
      scheduled: () => {
        (A(), de());
      },
    }),
    h = e$1.mode === "view" ? "viewing" : "editing",
    w = null,
    x = Nf(e$1.revisionStyles),
    I = false,
    D = null,
    L = e$1.mode ?? "edit",
    k = Lf(e$1.mode, { reviewEnabled: l, hasAuthor: !!e$1.author });
  (k.mode !== null && (h = k.mode), k.rejection !== null && (D = k.rejection));
  let g$1 = null,
    O = null,
    M = null,
    K = null,
    C = null,
    b = null,
    T = [],
    N$1 = () => T[T.length - 1] ?? {},
    _ = false,
    Q,
    P,
    V = null;
  function J() {
    (V?.dispose(), (V = null));
  }
  let ee = 0,
    Re,
    le = () => (typeof e$1.fonts == "function" ? Re : e$1.fonts),
    Be = -1,
    ke = false,
    Te = null,
    it = (p) => (Te || (Te = Tf(o ? Zn(o.ownerDocument) : null)), Te(p)),
    Me = null,
    qe = () => {
      let p = le();
      return (
        (Me === null || Me.configuration !== p) &&
          (Me = {
            configuration: p,
            families: new Set(
              [
                ...(p?.sources ?? []).map((R) => R.request.family),
                ...(p?.substitutions ?? []).map((R) => R.from.family),
              ]
                .filter((R) => typeof R == "string" && R.trim().length > 0)
                .map((R) => R.toLowerCase()),
            ),
          }),
        Me.families
      );
    },
    ht = (p) => qe().has(p.toLowerCase()) || V?.alias(p) !== void 0,
    $e = () =>
      !g$1 || ke || !g$1.session.rendersText()
        ? Zf
        : wf(g$1.session.documentFonts(), ht, it),
    pe = 0,
    E = null,
    $ = null,
    y = -1,
    S$1 = 0,
    Z = -1;
  function A() {
    pe += 1;
  }
  let q = { change: new Set(), selectionChange: new Set(), error: new Set() };
  function te(p) {
    for (let R of [...q.error]) R(p);
  }
  function ae(p) {
    for (let R of [...q.change]) R(p);
  }
  function de() {
    if (q.selectionChange.size === 0) return;
    let p = ce();
    for (let R of [...q.selectionChange]) R(p);
  }
  function Fe() {
    (M?.(),
      (M = null),
      g$1?.destroy(),
      (g$1 = null),
      (K = null),
      (C = null),
      (b = null),
      (S$1 += 1));
  }
  let He = Mf(e$1, {
      container: () => o,
      surface: () => g$1,
      bump: A,
      emitSelectionChange: de,
    }),
    Ye = () => He.scale();
  function Le(p) {
    if (!o) {
      ((d$1 = p), (O = null), A());
      return;
    }
    Fe();
    let R = Wi(o, p, {
      scale: Ye(),
      defaultFontFamily: ta(le()),
      ...(e$1.translate ? { drawingStrings: g$2(e$1.translate) } : {}),
      ...(e$1.author ? { author: e$1.author } : {}),
      ...(x.current() !== void 0 ? { revisionStyles: x.current() } : {}),
      editingMode:
        h === "suggesting" ? "suggest" : h === "viewing" ? "view" : "edit",
      ...(l ? {} : { revisionDisplayMode: "proposed" }),
      ...(a$3.review
        ? {
            reviewModel: {
              ...a$3.review,
              collectReviewItems: (B) =>
                a$3.review.collectReviewItems(
                  a$3.customNodes.length > 0
                    ? {
                        ...B,
                        customNodes: a$3.customNodes,
                        ...(a$3.customNodeDiagnostics.length > 0
                          ? { reportCustomNodeDiagnostic: i }
                          : {}),
                      }
                    : B,
                ),
            },
          }
        : {}),
      ...(Q ? { measurer: Q, ...(P ? { producer: P } : {}) } : {}),
      ...(V ? { fontAlias: V.alias } : {}),
      ...(e$1.tableInteractionLabel
        ? { tableInteractionLabel: e$1.tableInteractionLabel }
        : {}),
      ...(e$1.imageDecodePort ? { imageDecodePort: e$1.imageDecodePort } : {}),
      onHyperlinkPopover: (B) => N$1().onPopover?.(B),
      onRequestHyperlink: () => N$1().onRequest?.(),
      onTrackedChange: () => {
        yt || ((yt = true), A(), de());
      },
      tocLabels: r,
      onChange: (B) => {
        if (!g$1) return;
        A();
        let Y = B.pendingFormat !== C;
        C = B.pendingFormat;
        let W = g$1.headerFooterState?.(),
          re = W?.editing && W.rId ? `${W.editing}:${W.rId}` : null,
          xe = re !== b;
        ((b = re),
          !(ri(B.selection, K) && !Y && !xe) && ((K = B.selection), de()));
      },
    });
    if (!R.ok) {
      ((O = R.detail ? `${R.reason}: ${R.detail}` : R.reason),
        A(),
        te(Ln(R.reason, `failed to open document: ${O}`)));
      return;
    }
    ((O = null),
      (g$1 = R.surface),
      sa(),
      pf(g$1, a$3),
      (S$1 += 1),
      g$1.setEditable(h !== "viewing"),
      w !== null && g$1.setReviewActivationExclusions(w),
      (K = g$1.state().selection),
      (M = g$1.session.subscribe((B) => {
        let Y = {
          revision: B.toRevision,
          created: B.created,
          deleted: B.deleted,
          dirty: B.dirty,
        };
        (He.refitIfPageResized(), A(), ae(Y));
      })),
      He.attach(),
      A(),
      ae({ revision: g$1.session.revision() }),
      de(),
      Be !== ee && ((Be = ee), Wn(ee, g$1)));
  }
  function ze(p) {
    if (
      (u.cancel(),
      (ee += 1),
      (Q = void 0),
      (P = void 0),
      (Re = void 0),
      J(),
      (ke = false),
      o)
    ) {
      let R = at(o);
      R && ((R.scrollTop = 0), (R.scrollLeft = 0));
    }
    o && u.shouldYield(p) ? u.schedule(p) : Le(p);
  }
  function be(p) {
    (p.code === "wasmUnavailable" ||
      (p.cause instanceof j && p.cause.code === "unsupportedRuntime")) &&
      !e$1.onFontError &&
      q.error.size === 0 &&
      id(p);
    try {
      e$1.onFontError?.(p);
    } catch {}
    te(p);
  }
  async function Wn(p, R) {
    let B = e$1.fonts,
      Y = R.session.embeddedFonts();
    if (!(!B && Y.length === 0)) {
      ((ke = true), A());
      try {
        let W =
          typeof B == "function"
            ? await B({
                families: R.session.documentFonts().slice(0, Wa),
                defaultFamily: ta(le()),
              })
            : B;
        if (_ || p !== ee) {
          p === ee && (ke = !1);
          return;
        }
        if (((Re = W), !W && Y.length === 0)) {
          ((ke = !1), A());
          return;
        }
        let re = (W && "maxFontBytes" in W ? W.maxFontBytes : void 0) ?? a$1,
          xe = (W?.sources ?? []).reduce(
            (me, we) => me + we.bytes.byteLength,
            0,
          ),
          he = new Set(
            (W?.sources ?? [])
              .filter((me) => me.request.family.trim().length > 0)
              .map((me) => e(me.request)),
          ),
          X = kf(Y, {
            maxFontBytes: re,
            aggregateBudget: Math.max(0, c - xe),
            shadowedRequests: he,
          });
        for (let me of X.dropped)
          be(
            new a(
              me.reason,
              me.reason === "overLimit"
                ? `embedded font ${me.request.family} (${me.partName}) exceeds the font byte budget`
                : `embedded font part ${me.partName} declares an invalid family name`,
              { request: me.request },
            ),
          );
        let Ie = Eo({ epoch: p, ...W }, X);
        if (Ie.sources.length === 0) {
          ((ke = !1),
            A(),
            W &&
              be(
                new a(
                  "missing",
                  "the supplied font configuration contains no usable sources; the fixed measurer stays in effect",
                ),
              ));
          return;
        }
        let ue = await Co(Ie);
        if (_ || p !== ee) {
          (On(ue), p === ee && (ke = !1));
          return;
        }
        let De = new Set();
        for (let me of X.sources) {
          let we = ue.fonts.resolve(me.request);
          we instanceof d && (be(Fn(we)), De.add(me.id));
        }
        if (De.size > 0 && De.size < X.sources.length) {
          let me = X.sources.filter((Dt) => !De.has(Dt.id)),
            we = ue;
          if (
            ((ue = await Co(Eo({ epoch: p, ...W }, { sources: me }))),
            On(we),
            _ || p !== ee)
          ) {
            (On(ue), p === ee && (ke = !1));
            return;
          }
        } else if (De.size === X.sources.length && !W) {
          ((ke = !1), A());
          return;
        }
        let tn = [...(W?.sources ?? []), ...X.sources]
            .filter((me) => !De.has(me.id))
            .map((me) => {
              let we = ue.fonts.resolve(me.request);
              return we instanceof d || we.id !== me.id
                ? null
                : {
                    request: me.request,
                    id: we.id,
                    bytes: we.bytes,
                    hash: we.hash,
                    faceIndex: we.faceIndex,
                  };
            })
            .filter((me) => me !== null),
          In = await Cf(tn, void 0, Ie.substitutions ?? []);
        if (_ || p !== ee) {
          (In.dispose(), On(ue), p === ee && (ke = !1));
          return;
        }
        (J(), (V = In));
        let nn = td(Ye(), {
            context: o ? Zn(o.ownerDocument) : null,
            ...(V ? { fontAlias: V.alias } : {}),
          }),
          Sn = new Map();
        if (
          ((Q = vd$1({
            shaper: ue.shaper,
            resolveFont: (me) => {
              let we = me.fontFamily ?? Ie.defaultFont.family;
              if (we.trim().length === 0) return null;
              let Dt = {
                  family: we,
                  weight: me.bold ? 700 : 400,
                  style: me.italic ? "italic" : "normal",
                },
                Nt = e(Dt);
              if (Sn.has(Nt)) return Sn.get(Nt) ?? null;
              let _t;
              try {
                _t = ue.fonts.resolve(Dt);
              } catch {
                return (Sn.set(Nt, null), null);
              }
              let $r = _t instanceof d ? null : _t;
              return (Sn.set(Nt, $r), $r);
            },
            fallback: nn.measurer,
            shapingLibrary: g,
            unicodeDataVersion: "16.0.0",
            ...(Ie.language ? { language: Ie.language } : {}),
          })),
          (P = `shaped:${ue.operation.extensionFingerprint}+fallback:${nn.producer}@scale:${Ye()}`),
          (ke = !1),
          g$1)
        ) {
          g$1.flushPendingInput();
          let me = g$1.session.save(),
            we = g$1.state().selection,
            Dt =
              typeof document < "u" &&
              document.activeElement !== null &&
              o !== null &&
              o.contains(document.activeElement);
          try {
            Le(me);
          } catch (Nt) {
            ((Q = void 0),
              (P = void 0),
              g$1 || ((d$1 = me), Le(me)),
              be(Fn(Nt)));
          }
          (Dt && g$1?.focus(), g$1?.setSelection(we));
        } else A();
      } catch (W) {
        if (_ || p !== ee) return;
        ((ke = false), A(), be(Fn(W)));
      }
    }
  }
  let Mt = Dd();
  function Ut() {
    let p = g$1?.state() ?? null;
    return {
      scope: g$1?.activeScope?.() ?? t0,
      isLoading: O === null && g$1 === null && d$1 === null && !u.isScheduled(),
      isOpening: u.isScheduled(),
      parseError: O,
      editable:
        g$1 !== null && g$1.session.editable && L !== "view" && h !== "viewing",
      zoom: He.zoom(),
      zoomMode: He.mode(),
      selection: hi(g$1),
      selectionCollapsed:
        p === null ||
        (p.selection.anchor.paragraphId === p.selection.head.paragraphId &&
          p.selection.anchor.offset === p.selection.head.offset),
      formatting: $d(g$1),
      table: bi(g$1),
      tocContext: Mt(p?.contextTocId ?? null),
      image: Ot(g$1),
      page: { current: vi(g$1), total: yi(g$1) },
      canUndo: p?.canUndo ?? false,
      canRedo: p?.canRedo ?? false,
      pageSetup: gi(g$1),
      reviewPaneOpen: yt,
      hasReviewContent: g$1?.session.hasReviewContent() ?? false,
      editingMode: h,
      lastRejection: p?.lastRejection ?? D,
      fontSubstitutions: $e(),
    };
  }
  function ce() {
    if (E && Z === pe) return E;
    let p = E,
      R = g$1?.state().selection ?? null,
      B = ri(R, $);
    $ = R;
    let Y = g$1?.session.packageRevision() ?? -1,
      W = Y === y;
    y = Y;
    let re = Ut(),
      xe = re;
    if (p) {
      let he = Md(re.formatting, p.formatting) ? p.formatting : re.formatting,
        X = Ad(re.page, p.page) ? p.page : re.page,
        Ie = Ld(re.pageSetup ?? null, p.pageSetup ?? null)
          ? p.pageSetup
          : re.pageSetup,
        ue = Hd(re.selection, p.selection) ? p.selection : re.selection,
        De = zd(re.image, p.image) ? p.image : re.image,
        tn =
          p.fontSubstitutions !== void 0 &&
          re.fontSubstitutions !== void 0 &&
          p.fontSubstitutions.length === re.fontSubstitutions.length &&
          re.fontSubstitutions.every((In, nn) => p.fontSubstitutions[nn] === In)
            ? p.fontSubstitutions
            : re.fontSubstitutions;
      ((xe = {
        ...re,
        formatting: he,
        page: X,
        pageSetup: Ie,
        selection: ue,
        image: De,
        fontSubstitutions: tn,
      }),
        Nd(xe, p) && B && W && (xe = p));
    }
    return ((E = Ao(xe)), (Z = pe), E);
  }
  if (e$1.document) {
    let p = oi(e$1.document);
    p ? ze(p) : ((O = ai(e$1.document)), te(Ln("unsupported", O)));
  }
  let ve = 0,
    Tt = null,
    Qe = "",
    Gn = null,
    At = true,
    yn = null;
  function G() {
    let p = `${g$1?.session.packageRevision() ?? -1}:${g$1?.session.revision() ?? -1}`,
      R = bn(),
      B = Vr()?.anchorY ?? null;
    return (
      (g$1 !== Tt || p !== Qe || R !== Gn || yt !== At || B !== yn) &&
        ((Tt = g$1), (Qe = p), (Gn = R), (At = yt), (yn = B), (ve += 1)),
      ve
    );
  }
  function Ve(p) {
    return p.kind === "revision" ? (p.ranges[0] ?? null) : p.range;
  }
  function Lt(p) {
    return Ve(p) === null
      ? false
      : !(p.kind === "revision" && w !== null && w.includes(p.revisionKind));
  }
  let Kr = Xu(),
    $n = new WeakMap();
  function jr(p) {
    let R = $n.get(p);
    if (R) return R;
    let B = new Map();
    for (let Y of p.pages)
      for (let W of [Y.footnotes, Y.endnotes])
        if (W)
          for (let re of W.notes)
            for (let xe of S(re.fragments))
              for (let he of ic$1(xe)) B.has(he) || B.set(he, re.scopeId);
    return ($n.set(p, B), B);
  }
  function Vt(p) {
    let R = Ve(p)?.partName;
    if (!R || !g$1 || R === g$1.session.part().name) return null;
    for (let B of g$1.session.headerFooterResolutionBySection())
      for (let Y of ["header", "footer"]) {
        let W = Y === "header" ? B.headers : B.footers;
        for (let re of W.values())
          if (re.partName === R) return { kind: Y, rId: re.rId };
      }
    return null;
  }
  function wt(p) {
    let R = Ve(p),
      B = g$1?.publishedLayout();
    return !R || !B ? null : (jr(B).get(R.start.paragraphId) ?? null);
  }
  function Xn(p) {
    let R = Ve(p)?.partName;
    if (!R || !g$1) return null;
    for (let B of ["footnote", "endnote"])
      if (Zd$1(g$1.session.currentPackage(), B)?.name === R)
        return { kind: "notesPart", noteKind: B };
    return null;
  }
  function Yn(p) {
    let R = Vt(p);
    return R !== null
      ? { kind: "headerFooter", rId: R.rId }
      : (Xn(p) ?? { kind: "body" });
  }
  function st(p) {
    !g$1 ||
      g$1.activeScope().kind === "body" ||
      (g$1.session.paragraphIds().includes(p) &&
        (g$1.exitNote?.(), g$1.exitHeaderFooter?.()));
  }
  let Ur = () => `${new Date().toISOString().slice(0, 19)}Z`,
    yt = true,
    Pt = new WeakMap();
  function Wt(p) {
    let R = Pt.get(p);
    if (R) return R;
    let B = new Map();
    for (let [Y, W] of fc$1(p).entries()) B.set(W, Y);
    return (Pt.set(p, B), B);
  }
  function vn() {
    g$1?.flushPendingInput();
    let p = g$1?.retainedSelection() ?? g$1?.state().selection ?? null;
    if (!p) return null;
    let { anchor: R, head: B } = p;
    if (R.paragraphId === B.paragraphId && R.offset === B.offset) return null;
    let Y = g$1?.publishedLayout();
    if (!Y) return null;
    let W = Wt(Y),
      re = W.get(R.paragraphId) ?? -1,
      xe = W.get(B.paragraphId) ?? -1;
    if (re === -1 || xe === -1) {
      let X = nt();
      ((re = X.get(R.paragraphId) ?? -1), (xe = X.get(B.paragraphId) ?? -1));
    }
    return re === -1 || xe === -1
      ? null
      : re < xe || (re === xe && R.offset <= B.offset)
        ? { from: R, to: B }
        : { from: B, to: R };
  }
  function ge() {
    let p = g$1?.activeScope();
    if (p?.kind === "headerFooter") return { kind: "headerFooter", rId: p.rId };
    if (p?.kind === "note") {
      let R = fd$1(p.id);
      if (R) return { kind: "notesPart", noteKind: R.noteKind };
    }
    return { kind: "body" };
  }
  function ia(p) {
    if (!g$1) return { kind: "body" };
    let R = p.slice(0, p.indexOf("#"));
    if (R.length === 0 || R === g$1.session.part().name)
      return { kind: "body" };
    for (let B of g$1.session.headerFooterResolutionBySection())
      for (let Y of [B.headers, B.footers])
        for (let W of Y.values())
          if (W.partName === R) return { kind: "headerFooter", rId: W.rId };
    for (let B of ["footnote", "endnote"])
      if (Zd$1(g$1.session.currentPackage(), B)?.name === R)
        return { kind: "notesPart", noteKind: B };
    return ge();
  }
  function nt() {
    if (!g$1) return new Map();
    let p = ge();
    if (p.kind === "body") return new Map();
    let R = new Map();
    for (let [B, Y] of g$1.session.paragraphIdsIn(p).entries()) R.set(Y, B);
    return R;
  }
  function Qn(p) {
    if (p.kind === "revision") {
      let B = p.ranges;
      if (B.length === 0) return null;
      let W =
        p.revisionKind === "replace" ||
        p.revisionKind === "insert" ||
        p.revisionKind === "delete"
          ? B[B.length - 1]
          : B[0];
      return { start: B[0].start, end: W.end };
    }
    let R = Ve(p);
    return R ? { start: R.start, end: R.end } : null;
  }
  function Vr() {
    if (g$1 && g$1.activatedReviewKey() !== null) return null;
    let p = vn(),
      R = g$1?.publishedLayout();
    if (!p || !R) return null;
    let B = Kr(R).get(p.from.paragraphId);
    return B
      ? {
          pageIndex: B.pageIndex,
          anchorY: B.contentY + k$2(B, p.from.paragraphId, p.from.offset),
        }
      : null;
  }
  function bn() {
    return g$1?.activeReviewKey() ?? null;
  }
  function je(p) {
    if (!l) return [];
    let R = g$1?.session.reviewItems() ?? [],
      B = p?.excludeRevisionKinds;
    if (B && B.length > 0) {
      let X = new Set(B);
      R = R.filter((ue) => ue.kind !== "revision" || !X.has(ue.revisionKind));
      let Ie = new Set(
        R.filter((ue) => ue.kind === "revision").map((ue) => ue.id),
      );
      R = R.map((ue) => {
        if (
          ue.kind !== "comment" ||
          ue.parentRevisionId === void 0 ||
          Ie.has(ue.parentRevisionId)
        )
          return ue;
        let { parentRevisionId: De, ...tn } = ue;
        return tn;
      });
    }
    let Y = p?.placement !== false,
      W = null;
    if (Y && R.length > 0) {
      let X = g$1?.publishedLayout() ?? null;
      X && (W = Kr(X));
    }
    let re = bn(),
      xe = (X) => {
        let Ie = Vt(X);
        return Ie === null ? 1 : Ie.kind === "header" ? 0 : 2;
      },
      he = R.map((X, Ie) => ({
        item: X,
        position: Ie,
        pageIndex: W ? (m$1(X, W)?.pageIndex ?? null) : null,
        group: xe(X),
      }));
    return (
      he.sort((X, Ie) => {
        let ue = X.pageIndex ?? Number.MAX_SAFE_INTEGER,
          De = Ie.pageIndex ?? Number.MAX_SAFE_INTEGER;
        return ue !== De
          ? ue - De
          : X.group !== Ie.group
            ? X.group - Ie.group
            : X.position - Ie.position;
      }),
      he.map(({ item: X }) => {
        let Ie = b$1(X),
          ue = W ? m$1(X, W) : null,
          De = {
            key: Ie,
            id: X.id,
            ...(Wr(X) !== void 0 ? { date: Wr(X) } : {}),
            activatable: Lt(X),
            anchorY: ue?.y ?? null,
            pageIndex: ue?.pageIndex ?? null,
            isActive: Ie === re,
          };
        return X.kind === "comment"
          ? {
              ...De,
              kind: "comment",
              author: X.comment.author,
              initials: d$3(X.comment),
              text: c$2(X.comment),
              resolved: X.resolved,
              ...(X.parentId !== void 0 ? { parentId: X.parentId } : {}),
              ...(X.parentRevisionId !== void 0
                ? { parentRevisionId: X.parentRevisionId }
                : {}),
              replyIds: X.replyIds,
              readOnly: false,
              item: X,
            }
          : X.kind === "revision"
            ? {
                ...De,
                kind: "revision",
                revisionKind: X.revisionKind,
                author: X.author,
                initials: Gr(X.author),
                text: X.text,
                ...(X.replacedText ? { replacedText: X.replacedText } : {}),
                replyIds: X.replyIds,
                readOnly: X.readOnly,
                item: X,
              }
            : {
                ...De,
                kind: "custom",
                author: "",
                initials: "",
                text: X.detail ?? X.text,
                replyIds: [],
                readOnly: true,
                item: X,
              };
      })
    );
  }
  function Gt() {
    return g$1?.session.trackingSettings() ?? N;
  }
  function sa() {
    let p = Gt(),
      R = Hf({
        viewOnly: L === "view",
        reviewEnabled: l,
        hasAuthor: !!e$1.author,
        hostChoseMode: e$1.mode !== void 0,
        readerChoseMode: I,
        currentMode: h,
        trackRevisions: p.trackRevisions,
        restrictedToTrackedChanges: p.restrictedToTrackedChanges,
      });
    (R.rejection !== null && (D = R.rejection),
      R.mode === "suggesting" &&
        ((h = "suggesting"), g$1?.setEditingMode("suggest")));
  }
  function Jn(p) {
    return p !== "editing" || !Gt().restrictedToTrackedChanges
      ? null
      : {
          ok: false,
          code: "locked",
          reason: "this document permits editing only as tracked changes",
        };
  }
  function Wr(p) {
    return p.kind === "comment"
      ? p.comment.date
      : p.kind === "revision"
        ? p.date
        : void 0;
  }
  function Gr(p) {
    let R = p.trim().split(/\s+/).filter(Boolean);
    return R.length === 0
      ? "?"
      : R.slice(0, 2)
          .map((B) => B[0].toUpperCase())
          .join("");
  }
  function xn(p, R) {
    if (!l) return { ok: false, code: "unsupported", reason: kt };
    let Y = je().find((re) => re.key === p)?.item;
    if (!Y || Y.kind !== "revision")
      return {
        ok: false,
        code: "notFound",
        reason: "no revision with that key",
      };
    if (Y.readOnly)
      return {
        ok: false,
        code: "unsupported",
        reason: "this revision kind has no structural accept/reject yet",
      };
    let W;
    return (
      g$1?.commitReviewOps(
        () => (
          (W = g$1.session.applyTreeOps(
            Y.addresses.map((re) =>
              R === "accept"
                ? { op: "acceptRevision", revision: re }
                : { op: "rejectRevision", revision: re },
            ),
            void 0,
            void 0,
            Yn(Y),
          )),
          W
        ),
      ),
      W?.committed
        ? { ok: true, changed: true }
        : {
            ok: false,
            code: "unsupported",
            reason:
              typeof W?.reason == "string"
                ? W.reason
                : "the revision was refused",
          }
    );
  }
  let Ht = {
    get mountGeneration() {
      return S$1;
    },
    get surface() {
      return g$1;
    },
    setHyperlinkChrome(p) {
      return (
        T.push(p),
        () => {
          let R = T.lastIndexOf(p);
          R >= 0 && T.splice(R, 1);
        }
      );
    },
    stateVersion: () => pe,
    fontMeasurement: () => ({
      measurer: Q ? "shaped" : "fixed",
      resolving: ke,
      ...(Q && P ? { producer: P } : {}),
    }),
    attach(p) {
      if (_) {
        te(
          Ln(
            "destroyed",
            "this editor was destroyed; create a new instance to remount",
          ),
        );
        return;
      }
      if (g$1 && o === p) return;
      g$1 && (g$1.flushPendingInput(), (d$1 = g$1.session.save()), Fe());
      let R = u.cancel();
      (R && (d$1 = R), He.detach(), (o = p), (Te = null));
      let B = d$1;
      ((d$1 = null), B && u.shouldYield(B) ? u.schedule(B) : B ? Le(B) : A());
    },
    detach() {
      if (_) return;
      He.detach();
      let p = u.cancel();
      (g$1 && (g$1.flushPendingInput(), (d$1 = g$1.session.save()), Fe()),
        p && (d$1 = p),
        (o = null),
        (Te = null),
        A());
    },
    load(p) {
      let R = oi(p);
      if (!R) {
        te(Ln("unsupported", ai(p)));
        return;
      }
      ze(R);
    },
    save() {
      if ((u.flush(), !g$1))
        return Promise.reject(Ln("notFound", "no document is loaded"));
      g$1.flushPendingInput();
      let R = g$1.session.save().slice();
      return Promise.resolve(R.buffer);
    },
    getDocumentHandle() {
      return Object.freeze({ revision: g$1?.session.revision() ?? 0 });
    },
    exec(p, R) {
      if (
        (u.flush(),
        _ && (p.type === "toggleReviewPane" || p.type === "setEditingMode"))
      )
        return {
          ok: false,
          code: "notFound",
          reason: "the editor was destroyed",
        };
      if (p.type === "setEditingMode") {
        if (L === "view" && p.mode !== "viewing")
          return {
            ok: false,
            code: "locked",
            reason: "this document was opened for viewing",
          };
        if (p.mode === "suggesting" && !l)
          return { ok: false, code: "unsupported", reason: kt };
        let he = Jn(p.mode);
        return (
          he ||
          ((I = true),
          (D = null),
          (h = p.mode),
          g$1?.setEditingMode(
            p.mode === "suggesting"
              ? "suggest"
              : p.mode === "viewing"
                ? "view"
                : "edit",
          ),
          g$1?.setEditable(p.mode !== "viewing"),
          A(),
          de(),
          { ok: true, changed: false })
        );
      }
      if (p.type === "toggleReviewPane")
        return l
          ? ((yt = !yt), A(), de(), { ok: true, changed: false })
          : { ok: false, code: "unsupported", reason: kt };
      if (os(p)) {
        let he = as(p, g$1, L, R);
        return he.ok ? xf(g$1, p) : he;
      }
      let B = Fr(p);
      if (h === "viewing" && B.supported && B.mutating)
        return {
          ok: false,
          code: "locked",
          reason: "the document is open for viewing",
        };
      let Y = Nr(p, g$1, L, R);
      if (!Y.ok) return Y.refusal;
      let W = g$1,
        re = W.session.packageRevision(),
        xe = cf(W, p, {
          ...(Y.tablePlan ? { admittedTablePlan: Y.tablePlan } : {}),
          editor: Ht,
        });
      return xe || { ok: true, changed: W.session.packageRevision() !== re };
    },
    can(p, R) {
      if (p.type === "insertImage" || p.type === "replaceImage") {
        if (_)
          return {
            ok: false,
            code: "notFound",
            reason: "the editor was destroyed",
          };
        if (R?.scope) {
          let W = Nr(p, g$1, L, R);
          if (!W.ok) return W.refusal;
        }
        return Wd(p, g$1);
      }
      if (p.type === "toggleReviewPane" || p.type === "setEditingMode") {
        if (_)
          return {
            ok: false,
            code: "notFound",
            reason: "the editor was destroyed",
          };
        if (p.type === "toggleReviewPane" && !l)
          return { ok: false, code: "unsupported", reason: kt };
        if (p.type === "setEditingMode" && L === "view" && p.mode !== "viewing")
          return {
            ok: false,
            code: "locked",
            reason: "this document was opened for viewing",
          };
        if (p.type === "setEditingMode") {
          if (p.mode === "suggesting" && !l)
            return { ok: false, code: "unsupported", reason: kt };
          let W = Jn(p.mode);
          if (W) return W;
        }
        return { ok: true };
      }
      if (os(p)) return as(p, g$1, L, R);
      let B = Fr(p);
      if (h === "viewing" && B.supported && B.mutating)
        return {
          ok: false,
          code: "locked",
          reason: "the document is open for viewing",
        };
      let Y = Nr(p, g$1, L, R);
      if (!Y.ok) return Y.refusal;
      if (Ar(p) && ci(p)) {
        let W = Lr(Ht);
        if (W) {
          let re = ui(Ht, p, W);
          if (re) return re;
        }
      }
      return { ok: true };
    },
    isActive(p) {
      if (p.type === "toggleReviewPane") return yt;
      if (p.type === "setEditingMode") return h === p.mode;
      let R = g$1 ? ce().formatting : null;
      if (!R) return false;
      switch (p.type) {
        case "toggleMark":
          switch (p.mark) {
            case "bold":
              return R.bold === true;
            case "italic":
              return R.italic === true;
            case "underline":
              return R.underline === true;
            case "strike":
              return R.strike === true;
            case "superscript":
              return R.superscript === true;
            case "subscript":
              return R.subscript === true;
            default:
              return false;
          }
        case "setAlignment":
          return R.alignment === (p.align === "justify" ? "both" : p.align);
        case "toggleList":
          return g$1?.isListActive(p.kind) ?? false;
        default:
          return false;
      }
    },
    getDocumentStyles: () => g$1?.session.documentStyles() ?? [],
    getDocumentFonts: () => g$1?.session.documentFonts() ?? [],
    getAvailableFonts: () => Sf(le(), g$1?.session.documentFonts() ?? []),
    getDocumentThemeColors: () => g$1?.session.documentThemeColors() ?? [],
    getOutline: () => g$1?.session.documentOutline() ?? [],
    getComments: () => [],
    getSelectionFormatting: () => Jd(g$1 ? ce().formatting : null),
    findMatches: (p, R) =>
      g$1?.session.findText(p, {
        ...(R?.matchCase !== void 0 ? { matchCase: R.matchCase } : {}),
        ...(R?.wholeWord !== void 0 ? { wholeWord: R.wholeWord } : {}),
      }).matches ?? [],
    selectMatch(p) {
      return (
        u.flush(),
        g$1
          ? typeof p?.blockId != "string" ||
            p.blockId.length === 0 ||
            !Number.isInteger(p.start) ||
            p.start < 0 ||
            !Number.isInteger(p.length) ||
            p.length < 0
            ? {
                ok: false,
                code: "invalidArgs",
                reason: "match must carry a blockId and offsets",
              }
            : (st(p.blockId),
              g$1.setSelection({
                anchor: { paragraphId: p.blockId, offset: p.start },
                head: { paragraphId: p.blockId, offset: p.start + p.length },
              }),
              g$1.revealParagraph(p.blockId),
              { ok: true, changed: false })
          : { ok: false, code: "notFound", reason: "no document is loaded" }
      );
    },
    getSelectedImage: () => ce().image,
    getSelectedTable: () => Qd(g$1),
    getTableCellSelection: () => {
      let p = g$1?.state().cellSelection;
      return p
        ? {
            tableId: p.tableId,
            rows: p.rows,
            columns: p.columns,
            cellIds: p.cellIds,
          }
        : null;
    },
    setTableInteractionLabel(p) {
      g$1?.setTableInteractionLabel(p);
    },
    canExecuteImageCommand(p, R) {
      if (_)
        return {
          ok: false,
          code: "notFound",
          reason: "the editor was destroyed",
        };
      if (R?.scope) {
        let B = Nr(p, g$1, L, R);
        if (!B.ok) return B.refusal;
      }
      return fi(p, g$1);
    },
    executeImageCommand(p) {
      return _
        ? Promise.resolve({
            ok: false,
            code: "notFound",
            reason: "the editor was destroyed",
          })
        : pi(Ht, p);
    },
    getPageSetup: () => gi(g$1),
    getWatermark: () => null,
    getTrackedChanges: () =>
      (g$1?.session.reviewItems() ?? [])
        .filter((p) => p.kind === "revision")
        .map((p) => {
          let R = Vt(p);
          return {
            id: p.id,
            kind: p.kind === "revision" ? p.revisionKind : "revision",
            ...(p.kind === "revision" && p.author ? { author: p.author } : {}),
            story: R !== null ? R.kind : (Xn(p)?.noteKind ?? "body"),
          };
        }),
    getReviewItems: (p) => je(p),
    getCustomNodeDefinitions: () => a$3.customNodes,
    reportCustomNodeDiagnostic: i,
    addComment(p, R) {
      if (!l) return { ok: false, code: "unsupported", reason: kt };
      let B = vn();
      if (!B || !g$1)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "a comment needs a selected range",
        };
      let Y = (R ?? e$1.author ?? "").trim();
      if (Y.length === 0 || p.trim().length === 0)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "a comment needs both an author and text",
        };
      let W = null;
      return (
        g$1.commitReviewOps(
          () => (
            (W = g$1.session.replyToComment(
              null,
              {
                paragraphId: B.from.paragraphId,
                start: B.from.offset,
                end: B.to.offset,
                ...(B.to.paragraphId === B.from.paragraphId
                  ? {}
                  : { endParagraphId: B.to.paragraphId }),
              },
              p,
              Y,
              Ur(),
              ia(B.from.paragraphId),
            )),
            { committed: W !== null }
          ),
        ),
        W === null
          ? {
              ok: false,
              code: "unsupported",
              reason: "the comment could not be committed",
            }
          : (g$1.releaseSelection(), { ok: true, changed: true })
      );
    },
    getSelectionPlacement: () => Vr(),
    isReviewPaneOpen: () => yt,
    getEditingMode: () => h,
    getReviewAuthors: () => x.authorsFor(g$1?.revisionAuthors() ?? Df),
    getReviewAuthorStyle: (p) => x.styleFor(p),
    setRevisionStyles(p) {
      (x.set(p), g$1?.setRevisionStyles(p), A(), de());
    },
    setEditingMode: (p) => Ht.exec({ type: "setEditingMode", mode: p }),
    getReviewRevision: () => G(),
    setActiveReviewItem(p, R) {
      if (p === null)
        return (
          g$1?.dismissActiveReview(),
          A(),
          de(),
          { ok: true, changed: false }
        );
      if (!g$1)
        return { ok: false, code: "notFound", reason: "no document is open" };
      g$1.flushPendingInput();
      let Y = je().find((he) => he.key === p)?.item;
      if (!Y)
        return {
          ok: false,
          code: "notFound",
          reason: "no review item with that key",
        };
      let W = Ve(Y);
      if (!W)
        return {
          ok: false,
          code: "unsupported",
          reason: "this review item has no resolvable range",
        };
      if (!Lt(Y))
        return {
          ok: false,
          code: "unsupported",
          reason: `review items of kind '${Y.revisionKind}' are excluded from activation`,
        };
      let re = Y ? Vt(Y) : null,
        xe = re === null && Y ? wt(Y) : null;
      if (re !== null) {
        if (
          !g$1.enterHeaderFooter?.({
            rId: re.rId,
            kind: re.kind,
            position: {
              paragraphId: W.start.paragraphId,
              offset: W.start.offset,
            },
          })
        )
          return {
            ok: false,
            code: "unsupported",
            reason:
              "the header or footer this change lives in could not be opened",
          };
      } else if (xe !== null) {
        if (
          !g$1.enterNote?.(xe, {
            paragraphId: W.start.paragraphId,
            offset: W.start.offset,
          })
        )
          return {
            ok: false,
            code: "unsupported",
            reason: "the note this change lives in could not be opened",
          };
      } else {
        (g$1.exitNote?.(), g$1.exitHeaderFooter?.());
        let he = Qn(Y) ?? W,
          X = { paragraphId: he.start.paragraphId, offset: he.start.offset };
        g$1.activateReview(p, { anchor: X, head: X });
        let Ie = R?.reveal ?? "centerIfNeeded";
        Ie !== false && g$1.revealPosition?.(he.start, { block: Ie });
      }
      return (
        (re !== null || xe !== null) && g$1.activateReview(p),
        A(),
        de(),
        { ok: true, changed: false }
      );
    },
    setReviewActivationExclusions(p) {
      ((w = p === null ? null : [...p]), g$1?.setReviewActivationExclusions(w));
    },
    acceptReviewItem: (p) => xn(p, "accept"),
    rejectReviewItem: (p) => xn(p, "reject"),
    setCommentResolved(p, R) {
      return gf(
        {
          reviewEnabled: l,
          editingMode: h,
          placements: je,
          surface: g$1,
          proReviewReason: kt,
          bump: A,
        },
        p,
        R,
      );
    },
    deleteReviewItem(p) {
      if (!l) return { ok: false, code: "unsupported", reason: kt };
      let B = je().find((W) => W.key === p)?.item;
      if (!B || !g$1)
        return {
          ok: false,
          code: "notFound",
          reason: "no review item with that key",
        };
      if (B.kind === "revision") return xn(p, "reject");
      if (B.kind !== "comment")
        return {
          ok: false,
          code: "unsupported",
          reason: "a custom node card cannot be deleted",
        };
      bn() === p && g$1.dismissActiveReview();
      let Y = false;
      return (
        g$1.commitReviewOps(() => {
          let W = wt(B),
            re = W === null ? null : fd$1(W);
          return (
            (Y = g$1.session.deleteComment(B.id, Yn(B), re?.noteId)),
            { committed: Y }
          );
        }),
        Y
          ? (A(), { ok: true, changed: true })
          : {
              ok: false,
              code: "unsupported",
              reason: "the comment could not be deleted",
            }
      );
    },
    replyToReviewItem(p, R, B) {
      if (!l) return { ok: false, code: "unsupported", reason: kt };
      g$1?.flushPendingInput();
      let W = je().find((Ie) => Ie.key === p)?.item;
      if (!W || !g$1)
        return {
          ok: false,
          code: "notFound",
          reason: "no review item with that key",
        };
      let re = Ve(W);
      if (!re)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "the item has no anchorable range",
        };
      let xe = (B ?? e$1.author ?? "").trim();
      if (xe.length === 0 || R.trim().length === 0)
        return {
          ok: false,
          code: "invalidArgs",
          reason: "a reply needs both an author and text",
        };
      if (W.kind === "custom")
        return {
          ok: false,
          code: "unsupported",
          reason: "a custom node card takes no replies",
        };
      let he = W.kind === "comment" ? W.id : null,
        X = null;
      return (
        g$1.commitReviewOps(
          () => (
            (X = g$1.session.replyToComment(
              he,
              {
                paragraphId: re.start.paragraphId,
                start: re.start.offset,
                end: re.end.offset,
              },
              R,
              xe,
              Ur(),
              Yn(W),
            )),
            { committed: X !== null }
          ),
        ),
        X === null
          ? {
              ok: false,
              code: "unsupported",
              reason: "the reply could not be committed",
            }
          : { ok: true, changed: true }
      );
    },
    getHeaderFooterState: () => g$1?.headerFooterState() ?? null,
    getNotePropertiesState: () => g$1?.notePropertiesState?.() ?? null,
    getNotePreviewText: (p) => g$1?.notePreviewText?.(p) ?? null,
    setActiveScope(p) {
      g$1?.setActiveScope(p) && A();
    },
    getActiveScope: () => g$1?.activeScope() ?? { kind: "body" },
    query(p) {
      switch (p.type) {
        case "selectedText":
          return g$1?.selectedText() ?? "";
        case "selectionFormatting":
          return g$1 ? ce().formatting : null;
        case "selection":
          return hi(g$1);
        case "paragraphs":
          return Yd(g$1, p.container);
        case "isInsideToc":
          return g$1
            ? g$1.isInsideToc(g$1.state().selection.head.paragraphId)
            : false;
        case "hyperlinkAt":
          return Xd(g$1);
        case "contentControls":
          return hf(g$1, p.filter);
        case "trackedChanges":
        case "revisions":
        case "findText":
        case "comments":
          return [];
        case "styles":
          return {
            paragraph: new Map(),
            character: new Map(),
            table: new Map(),
          };
        case "variables":
          return {};
        case "contentControlAt":
          return rs(g$1, p.filter);
        case "tableContext":
          return bi(g$1);
        default:
          return null;
      }
    },
    snapshot: () => ce(),
    getTotalPages: () => yi(g$1),
    getCurrentPage: (p) => vi(g$1, p),
    scrollToPage: (p) =>
      !Number.isInteger(p) || p < 1
        ? false
        : (u.flush(), g$1?.revealPage(p - 1) ?? false),
    scrollToBlock: (p) =>
      typeof p != "string" || p.length === 0
        ? false
        : (u.flush(), st(p), g$1?.revealParagraph(p) ?? false),
    ...Af(He, () => g$1),
    relayout(p) {
      (p?.sync, g$1?.layout());
    },
    focus(p) {
      return (
        u.flush(),
        g$1
          ? p && p.kind === "all"
            ? {
                ok: false,
                code: "invalidTarget",
                reason: "the all scope cannot take focus",
              }
            : p && !g$1.setActiveScope(p)
              ? {
                  ok: false,
                  code: "invalidTarget",
                  reason: "that scope cannot be opened",
                }
              : (g$1.focus(), { ok: true, value: void 0 })
          : {
              ok: false,
              code: "invalidTarget",
              reason: "no document is loaded",
            }
      );
    },
    destroy() {
      ((_ = true),
        u.cancel(),
        He.detach(),
        J(),
        Fe(),
        (o = null),
        (d$1 = null),
        (S$1 += 1),
        A());
      for (let p of Object.values(q)) p.clear();
    },
    on(p, R) {
      return (
        q[p].add(R),
        () => {
          q[p].delete(R);
        }
      );
    },
  };
  return Ht;
}
var Bf = Object.freeze({
  document: true,
  save: true,
  events: true,
  selection: true,
  scrolling: true,
  layout: true,
});
function r0(e) {
  return g$1({ port: o0(e), capabilities: Bf });
}
function o0(e) {
  let t = 0,
    n = 0,
    r = null,
    o = false,
    a = false,
    i = () => {
      if (a) return null;
      let l = e.surface?.session ?? null;
      return (
        l !== r && (o && (t += n + 1), (o = true), (r = l), (n = 0)),
        l && (n = l.packageRevision()),
        l
      );
    };
  return {
    revision() {
      return (i(), t + n);
    },
    currentPackage: () => i()?.currentPackage() ?? null,
    apply(l, d) {
      i();
      let u = e.surface;
      if (!u) return { ok: false, reason: "no-document" };
      let h = u.applyAutomationOps(l, d);
      return h.rejected
        ? { ok: false, reason: String(h.reason ?? "refused") }
        : { ok: true, changed: h.committed };
    },
    applyLifecycle(l) {
      i();
      let d = e.surface;
      if (!d) return { ok: false, reason: "no-document" };
      let u = d.applyAutomationOps(() => [l]);
      return u.rejected
        ? { ok: false, reason: String(u.reason ?? "refused") }
        : { ok: true, changed: u.committed };
    },
    applyCommentWrites(l, d) {
      let u = e.surface,
        h = i();
      if (!u || !h) return { ok: false, reason: "no-document" };
      if (l.length === 0) return { ok: true, changed: false };
      if (d.kind !== "body") return { ok: false, reason: "unsupported-story" };
      let w = e.can({ type: "toggleReviewPane" });
      if (!w.ok)
        return { ok: false, reason: w.reason ?? "review-module-required" };
      let x = { ok: false, reason: "refused" };
      return (
        u.commitReviewOps(() => {
          if (l.every((L) => L.kind === "delete")) {
            let L = l.find((g) => g.kind === "delete"),
              k = h.deleteComments(
                l.map((g) => {
                  if (g.kind !== "delete")
                    throw new Error("unreachable mixed comment write");
                  return {
                    commentId: g.commentId,
                    ...(g.parentCommentId === void 0
                      ? {}
                      : { parentCommentId: g.parentCommentId }),
                  };
                }),
                d,
                L?.kind === "delete" ? L.noteId : void 0,
              );
            return (
              (x = k
                ? { ok: true, changed: true }
                : { ok: false, reason: "unknown-comment" }),
              { committed: k }
            );
          }
          if (l.length !== 1)
            return (
              (x = { ok: false, reason: "mixed-comment-writes" }),
              { committed: false }
            );
          let I = l[0];
          if (I.kind === "resolve") {
            let L = h.setCommentResolved(I.commentId, I.resolved);
            return (
              (x = L
                ? { ok: true, changed: true }
                : { ok: false, reason: "unknown-comment" }),
              { committed: L }
            );
          }
          if (I.kind !== "create" && I.kind !== "reply")
            return (
              (x = { ok: false, reason: "unsupported-comment-write" }),
              { committed: false }
            );
          let D = h.replyToComment(
            I.kind === "reply" ? I.parentCommentId : null,
            I.anchor,
            I.text,
            I.author,
            I.date,
          );
          return (
            (x =
              D === null
                ? { ok: false, reason: "refused" }
                : { ok: true, changed: true, commentId: D }),
            { committed: D !== null }
          );
        }),
        x
      );
    },
    applyCustomNodeWrite(l, d) {
      let u = e.surface,
        h = i();
      if (!u || !h) return { ok: false, reason: "no-document" };
      if (d.kind !== "body") return { ok: false, reason: "unsupported-story" };
      let w = { ok: false, reason: "refused" };
      return (
        u.commitReviewOps(() => {
          let x = h.insertCustomNode(l);
          return (
            (w = x.ok
              ? { ok: true, changed: x.change !== null }
              : {
                  ok: false,
                  reason: x.detail ? `${x.reason}: ${x.detail}` : x.reason,
                }),
            { committed: x.ok }
          );
        }),
        w
      );
    },
    save: () => i()?.save() ?? null,
    select(l, d) {
      if (!e.surface) return;
      let h = d === "end" ? l.end : l.start,
        w = d === "start" ? l.start : l.end;
      e.exec({
        type: "setSelection",
        range: {
          anchor: { paragraphId: h.paragraphId, offset: h.offset },
          head: { paragraphId: w.paragraphId, offset: w.offset },
        },
      });
    },
    subscribe: (l) => e.on("change", () => l()),
    dispose() {
      ((a = true), (r = null));
    },
  };
}
function a0(e) {
  return e * (96 / 72);
}
function i0(e, t) {
  return e * t;
}
function s0(e, t) {
  return e / t;
}
function l0(e, t, n) {
  let r = e.pages[t.pageIndex];
  if (!r) return { left: 0, top: 0, width: 0, height: 0 };
  let o = n.pageOffsetX.get(r.index) ?? 0,
    a = n.paintScale;
  return Object.freeze({
    left: (r.contentBox.x + t.x + o) * a,
    top: (r.contentBox.y + t.y) * a,
    width: t.width * a,
    height: t.height * a,
  });
}
function zf(e, t, n) {
  return t ? true : e.length === 1 ? false : !n;
}
var qf = ["e", "se", "s", "sw", "w", "nw", "n", "ne"];
function d0(e, t) {
  let n = qf.indexOf(e);
  (t.flipHorizontal && (n = (4 - n + 8) % 8),
    t.flipVertical && (n = (8 - n) % 8));
  let r = Math.round(t.rotationDegrees / 45) % 8;
  return qf[(n - r + 8) % 8];
}
function c0(e, t, n) {
  let r = e,
    o = t,
    a = (-n.rotationDegrees * Math.PI) / 180,
    i = Math.cos(a),
    l = Math.sin(a),
    d = r * i - o * l,
    u = r * l + o * i;
  return (
    (r = d),
    (o = u),
    n.flipHorizontal && (r = -r),
    n.flipVertical && (o = -o),
    Object.freeze({ x: r, y: o })
  );
}
function hn(e) {
  return e / Dr;
}
function Kf(e) {
  let t = c0(e.deltaXPt, e.deltaYPt, e.transform),
    n = hn(e.startWidthEmu),
    r = hn(e.startHeightEmu),
    o = n / r,
    a = d0(e.handle, e.transform),
    i = a.includes("e") ? t.x : a.includes("w") ? -t.x : 0,
    l = a.includes("s") ? t.y : a.includes("n") ? -t.y : 0;
  if (((n = Math.max(1, n + i)), (r = Math.max(1, r + l)), e.preserveAspect))
    if (a.length === 2) {
      let M = Math.max(n / hn(e.startWidthEmu), r / hn(e.startHeightEmu));
      ((n = Math.max(1, hn(e.startWidthEmu) * M)), (r = Math.max(1, n / o)));
    } else
      a === "e" || a === "w"
        ? (r = Math.max(1, n / o))
        : (n = Math.max(1, r * o));
  let d = hn(e.startWidthEmu),
    u = hn(e.startHeightEmu),
    h = n / d,
    w = r / u,
    x = Math.max(1, e.startBounds.width * h),
    I = Math.max(1, e.startBounds.height * w),
    D = e.startBounds.x,
    L = e.startBounds.y,
    k = e.handle;
  (k.includes("w") && (D = e.startBounds.x + e.startBounds.width - x),
    k.includes("n") && (L = e.startBounds.y + e.startBounds.height - I));
  let g = null;
  if (
    e.kind === "anchored" &&
    e.startPosition &&
    (k.includes("w") || k.includes("n"))
  )
    if (e.startPosition.mode === "simple") {
      let O = k.includes("w") ? Ge(D - e.startBounds.x) : 0,
        M = k.includes("n") ? Ge(L - e.startBounds.y) : 0;
      g = Object.freeze({
        mode: "simple",
        horizontalEmu: (e.startPosition.horizontalEmu ?? 0) + O,
        verticalEmu: (e.startPosition.verticalEmu ?? 0) + M,
      });
    } else if (e.anchorFrameOrigin)
      g = Object.freeze({
        mode: "frame",
        ...(e.startPosition.relativeToH !== void 0
          ? { relativeToH: e.startPosition.relativeToH }
          : {}),
        ...(e.startPosition.relativeToV !== void 0
          ? { relativeToV: e.startPosition.relativeToV }
          : {}),
        ...(k.includes("w")
          ? { horizontalEmu: Ge(D - e.anchorFrameOrigin.x) }
          : e.startPosition.horizontalEmu !== void 0
            ? { horizontalEmu: e.startPosition.horizontalEmu }
            : {}),
        ...(k.includes("n")
          ? { verticalEmu: Ge(L - e.anchorFrameOrigin.y) }
          : e.startPosition.verticalEmu !== void 0
            ? { verticalEmu: e.startPosition.verticalEmu }
            : {}),
      });
    else {
      let O = k.includes("w") ? Ge(D - e.startBounds.x) : 0,
        M = k.includes("n") ? Ge(L - e.startBounds.y) : 0;
      g = Object.freeze({
        mode: "frame",
        ...(e.startPosition.horizontalEmu !== void 0
          ? { horizontalEmu: e.startPosition.horizontalEmu + O }
          : {}),
        ...(e.startPosition.verticalEmu !== void 0
          ? { verticalEmu: e.startPosition.verticalEmu + M }
          : {}),
        ...(e.startPosition.relativeToH !== void 0
          ? { relativeToH: e.startPosition.relativeToH }
          : {}),
        ...(e.startPosition.relativeToV !== void 0
          ? { relativeToV: e.startPosition.relativeToV }
          : {}),
      });
    }
  return Object.freeze({
    widthEmu: Ge(n),
    heightEmu: Ge(r),
    previewBounds: Object.freeze({ x: D, y: L, width: x, height: I }),
    position: g,
  });
}
function u0(e, t) {
  return Object.freeze({
    scrollBy(n) {
      if (!Number.isFinite(n) || n === 0) return 0;
      let r = e.scrollTop;
      return ((e.scrollTop += n * t), (e.scrollTop - r) / t);
    },
  });
}
function f0(e) {
  if (e.session.mode === "move") {
    let t = e.session.startBounds.x + e.deltaXPt,
      n = e.session.startBounds.y + e.deltaYPt + e.accumulatedScrollPt,
      r =
        e.session.startPosition &&
        mi(
          e.session.startPosition,
          e.deltaXPt,
          e.deltaYPt + e.accumulatedScrollPt,
        );
    return Object.freeze({
      widthEmu: e.session.startWidthEmu,
      heightEmu: e.session.startHeightEmu,
      previewBounds: Object.freeze({
        x: t,
        y: n,
        width: e.session.startBounds.width,
        height: e.session.startBounds.height,
      }),
      position: r ?? null,
    });
  }
  return e.session.handle
    ? Kf({
        handle: e.session.handle,
        startWidthEmu: e.session.startWidthEmu,
        startHeightEmu: e.session.startHeightEmu,
        startBounds: e.session.startBounds,
        startPosition: e.session.startPosition,
        anchorFrameOrigin: e.anchorFrameOrigin,
        deltaXPt: e.deltaXPt,
        deltaYPt: e.deltaYPt,
        transform: e.session.transform,
        preserveAspect: zf(e.session.handle, e.aspectLocked, e.shiftKey),
        kind: e.session.kind,
      })
    : Object.freeze({
        widthEmu: e.session.startWidthEmu,
        heightEmu: e.session.startHeightEmu,
        previewBounds: e.session.startBounds,
        position: null,
      });
}
export {
  nc as $,
  Kp as A,
  qo as Aa,
  ii as B,
  Wi as Ba,
  mm as C,
  qr as Ca,
  Or as D,
  zr as Da,
  Mr as E,
  Un as Ea,
  si as F,
  Xh as Fa,
  gm as G,
  ra as Ga,
  li as H,
  oa as Ha,
  Ot as I,
  n0 as Ia,
  Lr as J,
  Bf as Ja,
  fi as K,
  r0 as Ka,
  pi as L,
  a0 as La,
  Rm as M,
  i0 as Ma,
  Em as N,
  s0 as Na,
  Dr as O,
  l0 as Oa,
  Om as P,
  zf as Pa,
  Ge as Q,
  Kf as Qa,
  Hn as R,
  u0 as Ra,
  Mm as S,
  f0 as Sa,
  mi as T,
  Am as U,
  Ho as V,
  Nn as W,
  tc as X,
  xi as Y,
  Do as Z,
  _m as _,
  Fn as a,
  rc as aa,
  Co as b,
  Zm as ba,
  On as c,
  mn as ca,
  Wa as d,
  Ii as da,
  Ro as e,
  Km as ea,
  Eo as f,
  jm as fa,
  Ga as g,
  Vm as ga,
  Ep as h,
  No as ha,
  Fp as i,
  ic as ia,
  Op as j,
  _o as ja,
  cd as k,
  sc as ka,
  Mp as l,
  lc as la,
  Ap as m,
  $m as ma,
  Lp as n,
  Xm as na,
  Hp as o,
  Ym as oa,
  Dp as p,
  Qm as pa,
  Np as q,
  Jm as qa,
  _p as r,
  eg as ra,
  ud as s,
  Si as sa,
  Zp as t,
  tg as ta,
  $a as u,
  cc as ua,
  yd as v,
  ng as va,
  vd as w,
  uc as wa,
  Mo as x,
  rg as xa,
  Ya as y,
  og as ya,
  Qa as z,
  ag as za,
};
