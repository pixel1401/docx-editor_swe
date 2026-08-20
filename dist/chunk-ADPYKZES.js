import {
  u,
  v as v$1,
  H as H$1,
  x as x$1,
  C as C$1,
  B as B$1,
  A as A$1,
  Cc,
  Hc,
  Fa,
  Da,
  Ia,
  Ba,
  p,
  da,
  ue,
  se,
  Ga,
  Ka,
  qe,
  Ha,
  Ab,
  jf,
  df,
  $e as $e$1,
  Xe as Xe$1,
  Gb,
  Sa,
  ca,
  Oc,
  ma,
  r,
  va,
  xa,
  _b,
  mc,
  Lb,
  Nb,
  wa,
  la,
  qa,
  pa,
} from "./chunk-HLS3DWRK.js";
import { strFromU8, strToU8 } from "fflate";
var Ft = [
    "extension",
    "capability",
    "command",
    "query",
    "schema",
    "dependencyKey",
    "runtimePort",
    "result",
    "origin",
  ],
  Lt = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)+$/,
  Bt = /^@[a-z0-9.-]+\/[a-z0-9.-]+(?:#[a-z0-9]+(?:[/._-][a-z0-9]+)*)?$/;
function ot(e) {
  return Lt.test(e) || Bt.test(e);
}
function J(e, t) {
  if (!ot(e))
    throw new Error(
      `invalid ${t ?? "registry"} id ${JSON.stringify(e)}: must be reverse-domain (dev.docx-editor.core.x) or package-owned (@scope/pkg#kind/name)`,
    );
}
var Ut = /^(\d+)\.(\d+)\.(\d+)$/;
function S(e) {
  let t = Ut.exec(e);
  if (!t) throw new Error(`invalid semantic version: ${JSON.stringify(e)}`);
  return { major: Number(t[1]), minor: Number(t[2]), patch: Number(t[3]) };
}
function q(e, t) {
  return e.major !== t.major
    ? e.major < t.major
      ? -1
      : 1
    : e.minor !== t.minor
      ? e.minor < t.minor
        ? -1
        : 1
      : e.patch !== t.patch
        ? e.patch < t.patch
          ? -1
          : 1
        : 0;
}
function Q(e, t) {
  let n = S(e),
    r = t.trim();
  if (r === "*") return true;
  if (r.startsWith("^")) {
    let o = S(r.slice(1));
    return q(n, o) < 0
      ? false
      : o.major > 0
        ? n.major === o.major
        : o.minor > 0
          ? n.major === 0 && n.minor === o.minor
          : n.major === 0 && n.minor === 0;
  }
  if (r.includes(" ")) {
    let o = r.split(/\s+/);
    if (o.length !== 2)
      throw new Error(`unsupported version range: ${JSON.stringify(t)}`);
    let s = true;
    for (let a of o) {
      let i = a.startsWith(">=") ? ">=" : a.startsWith("<") ? "<" : null;
      if (!i)
        throw new Error(`unsupported version range: ${JSON.stringify(t)}`);
      let d = S(a.slice(i.length)),
        l = q(n, d);
      i === ">=" ? (s = s && l >= 0) : (s = s && l < 0);
    }
    return s;
  }
  return q(n, S(r)) === 0;
}
var h = class extends Error {
    constructor(n, r, o = []) {
      super(r);
      this.code = n;
      this.responsible = o;
      this.name = "RegistryError";
    }
    code;
    responsible;
  },
  $e = (e, t) => `${e}:${t}`;
function Ht(e, t = {}) {
  let n = new Map();
  for (let l of e) {
    if ((J(l.id, "extension"), it(l.version, l.id), n.has(l.id)))
      throw new h("duplicate-extension", `duplicate extension id ${l.id}`, [
        l.id,
      ]);
    n.set(l.id, l);
    for (let c of l.contributions)
      (J(c.id, c.kind),
        it(c.version, `${l.id} \u2192 ${c.id}`),
        c.replaces &&
          Xt(
            c.replaces.targetRange,
            `${l.id} \u2192 replaces ${c.replaces.targetId}`,
          ));
  }
  for (let l of e) {
    for (let c of l.dependencies ?? [])
      if (!n.has(c))
        throw new h(
          "missing-dependency",
          `${l.id} requires missing extension ${c}`,
          [l.id, c],
        );
    for (let c of l.conflicts ?? [])
      if (n.has(c)) {
        let p = [l.id, c].sort();
        throw new h("conflict", `extensions ${p[0]} and ${p[1]} conflict`, p);
      }
  }
  jt(n);
  let r = new Set(t.availablePorts ?? []);
  for (let l of e)
    for (let c of l.contributions) c.kind === "runtimePort" && r.add(c.id);
  for (let l of e)
    for (let c of l.requiredPorts ?? [])
      if (!r.has(c))
        throw new h("missing-port", `${l.id} requires unavailable port ${c}`, [
          l.id,
          c,
        ]);
  let o = new Map(),
    s = new Map(),
    a = new Map();
  for (let l of e)
    for (let c of l.contributions) {
      let p = $e(c.kind, c.id);
      if (c.replaces) {
        let u = $e(c.kind, c.replaces.targetId),
          m = a.get(u) ?? [];
        (m.push({ ext: l.id, c }), a.set(u, m));
        continue;
      }
      if (s.has(p)) {
        let u = [o.get(p), l.id].sort();
        throw new h(
          "id-collision",
          `${c.kind} id ${c.id} registered by both ${u[0]} and ${u[1]}`,
          u,
        );
      }
      (s.set(p, c), o.set(p, l.id));
    }
  let i = new Map(s);
  for (let [l, c] of a) {
    let p = s.get(l);
    if (!p) {
      let f = c[0];
      throw new h(
        "replacement-target-missing",
        `${f.ext} replaces missing target ${f.c.replaces.targetId}`,
        [f.ext, f.c.replaces.targetId],
      );
    }
    let u = p.replaceable ?? { kind: "none" };
    for (let { ext: f, c: y } of c) {
      if (!Q(p.version, y.replaces.targetRange))
        throw new h(
          "replacement-version-mismatch",
          `${f} replaces ${y.replaces.targetId}@${p.version} outside range ${y.replaces.targetRange}`,
          [f, y.replaces.targetId],
        );
      if (u.kind === "none")
        throw new h(
          "unauthorized-replacement",
          `${y.replaces.targetId} does not authorize replacement (attempted by ${f})`,
          [f, y.replaces.targetId],
        );
    }
    let m = Vt(p, c);
    i.set(l, m);
  }
  return { extensions: n, contributions: i, get: (l, c) => i.get($e(l, c)) };
}
function Vt(e, t) {
  let n = e.replaceable ?? { kind: "none" };
  if (t.length === 1) return t[0].c;
  if (n.kind === "priority") {
    let o = [...t].sort(
        (i, d) => (d.c.replaces.priority ?? 0) - (i.c.replaces.priority ?? 0),
      ),
      s = o[0].c.replaces.priority ?? 0,
      a = o.filter((i) => (i.c.replaces.priority ?? 0) === s);
    if (a.length > 1) {
      let i = a.map((d) => d.ext).sort();
      throw new h(
        "ambiguous-replacement",
        `multiple replacers of ${e.id} share top priority ${s}: ${i.join(", ")}`,
        i,
      );
    }
    return o[0].c;
  }
  let r = t.map((o) => o.ext).sort();
  throw new h(
    "ambiguous-replacement",
    `multiple replacers of ${e.id}: ${r.join(", ")}`,
    r,
  );
}
function jt(e) {
  let o = new Map(),
    s = [],
    a = (i) => {
      (o.set(i, 1), s.push(i));
      let d = [...(e.get(i)?.dependencies ?? [])].sort();
      for (let l of d) {
        let c = o.get(l) ?? 0;
        if (c === 1) {
          let p = s.indexOf(l),
            u = [...s.slice(p), l];
          throw new h(
            "dependency-cycle",
            `dependency cycle: ${u.join(" -> ")}`,
            u,
          );
        }
        c === 0 && a(l);
      }
      (s.pop(), o.set(i, 2));
    };
  for (let i of [...e.keys()].sort()) (o.get(i) ?? 0) === 0 && a(i);
}
function it(e, t) {
  try {
    S(e);
  } catch {
    throw new h(
      "invalid-version",
      `invalid version ${JSON.stringify(e)} in ${t}`,
      [t],
    );
  }
}
function Xt(e, t) {
  try {
    Q("0.0.0", e);
  } catch {
    throw new h(
      "invalid-version",
      `invalid version range ${JSON.stringify(e)} in ${t}`,
      [t],
    );
  }
}
var v = class extends Error {
    constructor(t) {
      (super(t), (this.name = "BudgetError"));
    }
  },
  B = class e {
    constructor(t, n) {
      this.label = t;
      this.capacity = n;
      this.used = new H$1(`${t}.budget`, n);
    }
    label;
    capacity;
    used;
    children = new Set();
    activeReservations = 0;
    cleanups = [];
    disposed = false;
    carveAmount = 0;
    parent;
    get inUse() {
      return this.used.current;
    }
    get available() {
      return this.used.remaining;
    }
    get isDisposed() {
      return this.disposed;
    }
    reserve(t) {
      (this.assertLive(), this.used.add(t), (this.activeReservations += 1));
      let n = false,
        r = this;
      return {
        amount: t,
        get released() {
          return n;
        },
        release() {
          n || ((n = true), r.used.release(t), (r.activeReservations -= 1));
        },
      };
    }
    child(t, n) {
      (this.assertLive(), this.used.add(n));
      let r = new e(t, n);
      return ((r.parent = this), (r.carveAmount = n), this.children.add(r), r);
    }
    onRelease(t) {
      (this.assertLive(), this.cleanups.push(t));
    }
    dispose() {
      if (this.disposed) return;
      if (this.children.size > 0)
        throw new v(
          `${this.label}: cannot release with ${this.children.size} child budget(s) outstanding`,
        );
      if (this.activeReservations > 0)
        throw new v(
          `${this.label}: cannot release with ${this.activeReservations} reservation(s) outstanding`,
        );
      let t = [];
      for (let n = this.cleanups.length - 1; n >= 0; n--)
        try {
          this.cleanups[n]();
        } catch (r) {
          t.push(r);
        }
      if (
        ((this.disposed = true),
        this.parent &&
          (this.parent.children.delete(this),
          this.parent.used.release(this.carveAmount),
          (this.parent = void 0)),
        t.length > 0)
      )
        throw new v(
          `${this.label}: ${t.length} cleanup error(s); first: ${String(t[0])}`,
        );
    }
    assertLive() {
      if (this.disposed) throw new v(`${this.label}: budget already released`);
    }
  };
var Z = class extends Error {
    constructor(n, r) {
      super(r ? `cancelled: ${r}` : "cancelled");
      this.derivedOnly = n;
      this.name = "CancellationError";
    }
    derivedOnly;
  },
  U = class {
    _cancelled = false;
    _phase = "pre-publication";
    _reason;
    cancel(t) {
      ((this._cancelled = true), t !== void 0 && (this._reason = t));
    }
    markPublished() {
      this._phase = "post-publication";
    }
    get isCancelled() {
      return this._cancelled;
    }
    get phase() {
      return this._phase;
    }
    get isPublished() {
      return this._phase === "post-publication";
    }
    get derivedOnly() {
      return this._cancelled && this._phase === "post-publication";
    }
    get token() {
      let t = this;
      return {
        get isCancelled() {
          return t._cancelled;
        },
        get phase() {
          return t._phase;
        },
        get derivedOnly() {
          return t.derivedOnly;
        },
        checkpoint() {
          if (t._cancelled) throw new Z(t.derivedOnly, t._reason);
        },
      };
    }
  };
var ee = class extends Error {
    constructor(n) {
      super(`runtime port not available: ${n}`);
      this.portId = n;
      this.name = "PortResolutionError";
    }
    portId;
  },
  De = class {
    ports = new Map();
    provide(t, n) {
      return (this.ports.set(t, n), this);
    }
    has(t) {
      return this.ports.has(t);
    }
    resolve(t) {
      if (!this.ports.has(t)) throw new ee(t);
      return this.ports.get(t);
    }
    missing(t) {
      return t.filter((n) => !this.ports.has(n));
    }
    availablePorts() {
      return [...this.ports.keys()];
    }
    clock() {
      return this.resolve(x$1.clock);
    }
    identity() {
      return this.resolve(x$1.identity);
    }
  },
  Me = class {
    constructor(t = 0, n = 1) {
      this.step = n;
      this.t = t;
    }
    step;
    t;
    now() {
      let t = this.t;
      return ((this.t += this.step), t);
    }
  },
  Fe = class {
    constructor(t = "id") {
      this.prefix = t;
    }
    prefix;
    n = 0;
    newId() {
      return ((this.n += 1), `${this.prefix}-${this.n}`);
    }
  };
function Kt(e) {
  let t = C$1(e.limits),
    n = Object.freeze({ ...(e.config ?? {}) }),
    r = e.capacity ?? t.maxDecompressedBytes,
    o = e.id ?? "op",
    s = {
      id: o,
      limits: t,
      config: n,
      ports: e.ports,
      budget: new B(`op:${o}`, r),
      cancellation: new U(),
    };
  return Object.freeze(s);
}
function Gt(e) {
  e.budget.dispose();
}
var Be = Object.freeze({
    maxRecursionDepth: { unit: "depth", phase: "xml-parse" },
    maxElementCount: { unit: "count", phase: "xml-parse" },
    maxPartCount: { unit: "count", phase: "package-read" },
    maxDecompressedBytes: { unit: "bytes", phase: "package-read" },
    maxCompressedBytes: { unit: "bytes", phase: "package-read" },
    maxCompressionRatio: { unit: "ratio", phase: "package-read" },
    maxChunkBytes: { unit: "bytes", phase: "package-read" },
    maxPaginationPasses: { unit: "passes", phase: "layout" },
    maxQueueDepth: { unit: "count", phase: "output" },
  }),
  at = Object.keys(Be);
function zt(e, t) {
  return new H$1(`${Be[t].phase}:${t}`, e[t]);
}
var Le = class {
  counter;
  current = 0;
  peak = 0;
  constructor(t) {
    this.counter = new H$1("memory", t);
  }
  allocate(t) {
    (this.counter.add(t),
      (this.current += t),
      this.current > this.peak && (this.peak = this.current));
  }
  free(t) {
    (this.counter.release(t), (this.current = Math.max(0, this.current - t)));
  }
  get currentBytes() {
    return this.current;
  }
  get peakBytes() {
    return this.peak;
  }
  reset() {
    (this.counter.release(this.current), (this.current = 0));
  }
};
function Wt() {
  for (let e of at) {
    let t = B$1[e],
      n = A$1[e];
    if (!Number.isFinite(t) || t <= 0)
      throw new Error(`default ${e} must be finite > 0`);
    if (!Number.isFinite(n) || n <= 0)
      throw new Error(`ceiling ${e} must be finite > 0`);
    if (t > n) throw new Error(`default ${e} exceeds ceiling`);
  }
}
function H(e, t = new Set()) {
  let n = new WeakSet(),
    r = (o) => {
      if (o === null) return "null";
      let s = typeof o;
      if (s === "boolean") return o ? "true" : "false";
      if (s === "number") {
        let a = o;
        if (!Number.isFinite(a))
          throw new Error(`non-finite number is not comparable: ${a}`);
        return Object.is(a, -0) ? "0" : String(a);
      }
      if (s === "string") return JSON.stringify(o);
      if (s === "bigint") return `${o.toString()}n`;
      if (Array.isArray(o)) return `[${o.map(r).join(",")}]`;
      if (s === "object") {
        let a = o;
        if (n.has(a)) throw new Error("cannot canonicalize a cyclic structure");
        n.add(a);
        let d = Object.keys(a)
          .filter((l) => !t.has(l))
          .sort()
          .map((l) => `${JSON.stringify(l)}:${r(a[l])}`)
          .join(",");
        return (n.delete(a), `{${d}}`);
      }
      throw new Error(`unsupported value type in comparator input: ${s}`);
    };
  return r(e);
}
function Ue(e, t) {
  let n = H(e, t),
    r = 0xcbf29ce484222325n,
    o = 0x100000001b3n,
    s = 0xffffffffffffffffn;
  for (let a = 0; a < n.length; a++)
    ((r ^= BigInt(n.charCodeAt(a))), (r = (r * o) & s));
  return r.toString(16).padStart(16, "0");
}
var R = "dev.docx-editor.core.comparator",
  He = {
    authoredState: {
      id: `${R}.authored-state`,
      mode: "canonical-exact",
      ephemera: ["revision", "provenance", "producedAt", "commitId"],
      note: "canonical normalized authored records; ephemera excluded",
    },
    anchor: {
      id: `${R}.anchor`,
      mode: "exact",
      ephemera: [],
      note: "internal anchor identity/affinity compares exactly",
    },
    yjsStateVector: {
      id: `${R}.yjs-state-vector`,
      mode: "sync-optimization-only",
      ephemera: [],
      note: "exchange optimization only; never proves update or delete-set coverage",
    },
    shapedRun: {
      id: `${R}.shaped-run`,
      mode: "exact",
      ephemera: [],
      note: "glyph ids, clusters, and fixed-point advances compare exactly",
    },
    paginationFingerprint: {
      id: `${R}.pagination-fingerprint`,
      mode: "exact",
      ephemera: [],
      note: "page/column boundaries, break causes, fixed-point geometry compare exactly",
    },
    semanticTree: {
      id: `${R}.semantic-tree`,
      mode: "exact",
      ephemera: [],
      note: "reading order, roles, headings, alt text compare exactly",
    },
    hitTest: {
      id: `${R}.hit-test`,
      mode: "exact",
      ephemera: [],
      note: "resolved hit target and cluster affinity compare exactly",
    },
    pdfSemantics: {
      id: `${R}.pdf-semantics`,
      mode: "canonical-exact",
      ephemera: [
        "objectNumber",
        "producer",
        "creationDate",
        "modDate",
        "subsetTag",
      ],
      note: "canonical semantic PDF objects; container ephemera excluded",
    },
    rasterCheckpoint: {
      id: `${R}.raster-checkpoint`,
      mode: "tolerance",
      ephemera: [],
      note: "documented unavoidable raster comparison; explicit tolerance only",
    },
    benchmarkEvidence: {
      id: `${R}.benchmark-evidence`,
      mode: "sync-optimization-only",
      ephemera: [],
      note: "diagnostic evidence, not an equivalence basis",
    },
  };
function Ve(e, t, n, r = {}) {
  let o = He[e];
  switch (o.mode) {
    case "sync-optimization-only":
      throw new Error(`${o.id} is not an equivalence basis (${o.note})`);
    case "tolerance": {
      if (r.epsilon === void 0)
        throw new Error(`${o.id} requires an explicit epsilon`);
      return { equal: st(t, n, r.epsilon) };
    }
    case "exact":
    case "canonical-exact": {
      let s = o.mode === "canonical-exact" ? new Set(o.ephemera) : new Set(),
        a = H(t, s),
        i = H(n, s);
      return a === i ? { equal: true } : { equal: false, left: a, right: i };
    }
  }
}
function je(e, t) {
  let n = He[e];
  if (n.mode === "tolerance" || n.mode === "sync-optimization-only")
    throw new Error(`${n.id} has no canonical fingerprint (${n.mode})`);
  let r = n.mode === "canonical-exact" ? new Set(n.ephemera) : void 0;
  return Ue(t, r);
}
function st(e, t, n) {
  return typeof e == "number" && typeof t == "number"
    ? Number.isFinite(e) && Number.isFinite(t) && Math.abs(e - t) <= n
    : Array.isArray(e) && Array.isArray(t)
      ? e.length === t.length && e.every((r, o) => st(r, t[o], n))
      : false;
}
var ct = new Set([...u, ...v$1]),
  lt = /^[0-9a-f]{16}$/,
  Yt = /^[0-9a-f]*$/;
function Xe(e) {
  let t = [],
    n = (o) => t.push(o);
  (e.formatVersion !== 1 && n(`unsupported formatVersion ${e.formatVersion}`),
    e.documentId || n("documentId is required"),
    e.source.kind === "docx" &&
      !/^[0-9a-f]{64}$/.test(e.source.sha256) &&
      n("docx source requires a 64-hex sha256"));
  let r = -1;
  e.steps.forEach((o, s) => {
    let a = `step[${s}]`;
    (ct.has(o.origin) || n(`${a}: unknown origin ${o.origin}`),
      (!Number.isInteger(o.baseRevision) || o.baseRevision < 0) &&
        n(`${a}: baseRevision must be a non-negative integer`),
      o.baseRevision < r && n(`${a}: baseRevision regressed below ${r}`));
    let i = o.expect;
    (i.outcome === "applied"
      ? (i.committedRevision === void 0
          ? n(`${a}: applied step needs committedRevision`)
          : i.committedRevision <= o.baseRevision
            ? n(
                `${a}: committedRevision ${i.committedRevision} must exceed baseRevision ${o.baseRevision}`,
              )
            : (r = i.committedRevision),
        i.modelChange && Jt(i.modelChange, a, n))
      : (i.committedRevision !== void 0 &&
          n(`${a}: ${i.outcome} step must not commit a revision`),
        i.authoredStateHash !== void 0 &&
          n(`${a}: ${i.outcome} step must not change authored state`)),
      i.authoredStateHash !== void 0 &&
        !lt.test(i.authoredStateHash) &&
        n(`${a}: authoredStateHash must be 16-hex`),
      i.outputHash !== void 0 &&
        !lt.test(i.outputHash) &&
        n(`${a}: outputHash must be 16-hex`));
  });
  for (let o of [...(e.snapshots ?? []), ...(e.updates ?? [])])
    (o.documentId !== e.documentId &&
      n(`envelope documentId ${o.documentId} != ${e.documentId}`),
      Yt.test(o.bytesHex) || n("envelope bytesHex must be hex"),
      o.bytesHex.length !== o.byteLength * 2 &&
        n(
          `envelope byteLength ${o.byteLength} disagrees with ${o.bytesHex.length / 2} decoded bytes`,
        ));
  return { valid: t.length === 0, errors: t };
}
function Jt(e, t, n) {
  (ct.has(e.origin) || n(`${t}: modelChange origin ${e.origin} unknown`),
    e.toRevision <= e.fromRevision &&
      n(`${t}: modelChange revision must advance`));
}
function qt(e, t) {
  let n = Xe(e);
  if (!n.valid) return { ok: false, mismatches: n.errors };
  let r = [];
  return (
    t.init(e),
    e.steps.forEach((o, s) => {
      let a = `step[${s}]`,
        i = t.applyStep(o),
        d = o.expect;
      if (i.outcome !== d.outcome) {
        r.push(`${a}: outcome ${i.outcome} != expected ${d.outcome}`);
        return;
      }
      if (
        d.outcome === "applied" &&
        (i.committedRevision !== d.committedRevision &&
          r.push(
            `${a}: revision ${i.committedRevision} != expected ${d.committedRevision}`,
          ),
        d.authoredStateHash !== void 0)
      )
        if (i.authoredState === void 0)
          r.push(`${a}: store returned no authored state to hash`);
        else {
          Ve("authoredState", i.authoredState, i.authoredState).equal ||
            r.push(`${a}: authored state is not self-consistent`);
          let c = dt(i.authoredState);
          c !== d.authoredStateHash &&
            r.push(
              `${a}: authoredStateHash ${c} != expected ${d.authoredStateHash}`,
            );
        }
    }),
    { ok: r.length === 0, mismatches: r }
  );
}
function dt(e) {
  return je("authoredState", e);
}
var Qt = new Map([
    ["embedRegular", "regular"],
    ["embedBold", "bold"],
    ["embedItalic", "italic"],
    ["embedBoldItalic", "boldItalic"],
  ]),
  Zt = 32;
function mt(e, t) {
  let n = t.replace(/[^0-9a-fA-F]/g, "");
  if (n.length !== 32) return null;
  let r = new Uint8Array(16);
  for (let a = 0; a < 16; a += 1) {
    let i = Number.parseInt(n.slice(a * 2, a * 2 + 2), 16);
    if (Number.isNaN(i)) return null;
    r[15 - a] = i;
  }
  let o = new Uint8Array(e),
    s = Math.min(Zt, o.length);
  for (let a = 0; a < s; a += 1) o[a] = o[a] ^ r[a % 16];
  return o;
}
var Ke = (e, t) => {
    if (!(e.kind === "textValue" || !("attributes" in e))) {
      for (let n of e.attributes ?? []) if (n.localName === t) return n.value;
    }
  },
  pt = (e) => (e.kind === "textValue" ? [] : (e.children ?? [])),
  ut = (e) =>
    e.kind === "textValue" || !("localName" in e) ? "" : e.localName;
function en(e, t, n) {
  for (let r$1 of e.relationships.get(t) ?? []) {
    if (r$1.id !== n) continue;
    if (r$1.targetMode === "External") return null;
    let o = r(t, r$1.rawTarget);
    return o.ok ? o.partName : null;
  }
  return null;
}
function tn(e, t, n = {}) {
  if (!t) return [];
  let r = n.maxFontBytes ?? 16 * 1024 * 1024,
    o = n.maxFonts ?? 64,
    s = [],
    a = new Map(),
    i = (d) => {
      if (!(s.length >= o)) {
        if (ut(d) === "font") {
          let l = Ke(d, "name");
          if (l && l.length <= 128)
            for (let c of pt(d)) {
              if (s.length >= o) return;
              let p = Qt.get(ut(c));
              if (!p) continue;
              let u = Ke(c, "id"),
                m = Ke(c, "fontKey");
              if (!u || !m) continue;
              let f = en(e, t.name, u);
              if (!f) continue;
              let y = e.partBytes.get(f);
              if (!y || y.length === 0 || y.length > r) continue;
              let g = a.get(f);
              if (g) {
                s.push({ family: l, style: p, bytes: g, partName: f });
                continue;
              }
              let O = mt(y, m);
              O &&
                (a.set(f, O),
                s.push({ family: l, style: p, bytes: O, partName: f }));
            }
        }
        for (let l of pt(d)) i(l);
      }
    };
  return (i(t.root), s);
}
function ft(e) {
  if (e.kind !== "textValue")
    for (let t of e.children) {
      if (t.kind === "textValue") continue;
      if (t.kind === "hyperlink") {
        let r = Sa(t);
        if (r !== void 0 && r.length > 0) return r;
      }
      let n = ft(t);
      if (n !== void 0) return n;
    }
}
function nn(e) {
  let t = "",
    n = false,
    r = (o) => {
      if (!(n || o.kind === "textValue")) {
        if (
          o.kind === "tab" ||
          o.localName === "ptab" ||
          o.localName === "tab"
        ) {
          n = true;
          return;
        }
        if (o.kind === "text" || o.localName === "t") {
          for (let s of o.children) s.kind === "textValue" && (t += s.value);
          return;
        }
        for (let s of o.children) r(s);
      }
    };
  return (r(e), Hc(t));
}
function rn(e, t, n, r) {
  let o = n.filter((d) => {
      if (r.has(d.blockId)) return false;
      let l = d.level + 1;
      return l >= t.instruction.outlineStart && l <= t.instruction.outlineEnd;
    }),
    s = new Set(o.map((d) => d.blockId)),
    a = Cc(e),
    i = new Map();
  for (let d of o) {
    let l = Hc(d.text),
      c = i.get(l);
    c ? c.push(d.blockId) : i.set(l, [d.blockId]);
  }
  return t.resultParagraphIds.map((d) => {
    let l = Fa(e, d);
    if (!l || l.kind === "textValue") return null;
    let c = ft(l),
      p = c === void 0 ? void 0 : a.get(c);
    if (p && s.has(p.paragraphId)) {
      let f = i.get(Hc(o.find((g) => g.blockId === p.paragraphId)?.text ?? "")),
        y = f?.indexOf(p.paragraphId) ?? -1;
      return (f && y >= 0 && f.splice(y, 1), p.paragraphId);
    }
    let u = nn(l);
    if (u.length === 0) return null;
    let m = i.get(u);
    return !m || m.length === 0 ? null : (m.shift() ?? null);
  });
}
function C(e) {
  return e.namespaceUri === ma
    ? e.localName
    : `{${e.namespaceUri}}${e.localName}`;
}
function I(e) {
  let t = [];
  for (let n of e.attributes)
    t.push(
      n.namespaceUri === "" || n.namespaceUri === ma
        ? `${n.localName}=${n.value}`
        : `{${n.namespaceUri}}${n.localName}=${n.value}`,
    );
  return (t.sort(), t);
}
function gt(e, t) {
  let n = I(e),
    r = n.length > 0 ? `${C(e)}(${n.join(",")})` : C(e);
  if (t >= ca) return r;
  let o = [];
  for (let s of e.children) {
    if (s.kind === "textValue") {
      s.value !== "" && o.push(`#${s.value}`);
      continue;
    }
    o.push(gt(s, t + 1));
  }
  return (o.sort(), o.length > 0 ? `${r}[${o.join(",")}]` : r);
}
function yt(e) {
  if (!e) return [];
  let t = [];
  for (let n of e.children) n.namespaceUri === ma && t.push(gt(n, 1));
  return (t.sort(), t);
}
function Ge(e) {
  if (e.kind === "textValue") return e.value;
  if (e.kind === "tab") return "	";
  if (e.kind === "hardBreak") return _b(e);
  if (e.kind === "drawing") return mc();
  if (
    e.kind === "runProperties" ||
    e.kind === "paragraphProperties" ||
    e.kind === "generic"
  )
    return "";
  if (e.kind === "hyperlink" || Lb(e)) {
    let n = "",
      r = e.kind === "hyperlink" ? e.children : (Nb(e) ?? []);
    for (let o of r) n += Ge(o);
    return n;
  }
  let t = "";
  for (let n of e.children) t += Ge(n);
  return t;
}
function x(e, t) {
  let n = new Map(e);
  for (let r of t.namespaceBindings) n.set(r.prefix, r.namespaceUri);
  return n;
}
function V(e, t) {
  try {
    return wa(e, t);
  } catch (n) {
    if (n instanceof qa && n.reason === "undeclared-prefix")
      return `generic-refusal:undeclared-prefix:{${e.namespaceUri}}${e.localName}`;
    throw n;
  }
}
function ze(e, t, n = va) {
  if (e.kind === "textValue") return;
  if (e.kind === "runProperties" || e.kind === "paragraphProperties") {
    let o = x(n, e),
      s = [];
    for (let a of e.children) a.namespaceUri !== ma && s.push(V(a, o));
    (s.sort(), t.push(...s));
    return;
  }
  if (e.kind === "generic") {
    t.push(V(e, n));
    return;
  }
  if (Lb(e)) {
    t.push(xa(e));
    return;
  }
  if (e.kind === "bookmarkStart" || e.kind === "bookmarkEnd") {
    t.push(wa(e, n));
    return;
  }
  if (e.kind === "drawing") {
    t.push(ht(e));
    return;
  }
  if (la(e.kind)) return;
  let r = x(n, e);
  for (let o of e.children) ze(o, t, r);
}
function on(e) {
  return `hyperlink(${e.attributes
    .map((n) => `${n.namespaceUri}|${n.localName}=${n.value}`)
    .sort()
    .join(",")})`;
}
function an(e) {
  for (let t of e.children)
    if (t.kind === "pictureBlipFill")
      for (let n of t.children) {
        if (n.kind !== "pictureBlip") continue;
        let r = n.attributes.find(
            (s) => s.localName === "embed" && s.namespaceUri === pa,
          )?.value,
          o = n.attributes.find(
            (s) => s.localName === "link" && s.namespaceUri === pa,
          )?.value;
        if (r !== void 0) return `embed=${r}`;
        if (o !== void 0) return `link=${o}`;
      }
}
function te(e, t, n) {
  if (e.kind === "textValue") return `#${e.value}`;
  if (t >= ca) return C(e);
  let r = x(n, e);
  if (e.kind === "generic") return V(e, r);
  let o = I(e),
    s = o.length > 0 ? `${C(e)}(${o.join(",")})` : C(e),
    a = [];
  for (let i of e.children) i.kind !== "textValue" && a.push(te(i, t + 1, r));
  return (a.sort(), a.length > 0 ? `${s}[${a.join(",")}]` : s);
}
function sn(e, t, n) {
  let r = x(n, e),
    o = [];
  for (let s of e.children)
    if (s.kind !== "textValue") {
      if (s.kind === "pictureBlipFill") {
        let a = s.children,
          i = a.find((l) => l.kind === "pictureBlip"),
          d = a
            .filter((l) => l.kind !== "pictureBlip")
            .map((l) => te(l, t + 1, r));
        if ((d.sort(), i && i.kind === "pictureBlip")) {
          let l = I(i),
            c = l.length > 0 ? `pictureBlip(${l.join(",")})` : "pictureBlip";
          o.push(d.length > 0 ? `${c}[${d.join(",")}]` : c);
        } else for (let l of a) o.push(te(l, t + 1, r));
        continue;
      }
      o.push(te(s, t + 1, r));
    }
  return (o.sort(), o);
}
function We(e, t, n) {
  if (e.kind === "textValue") return `#${e.value}`;
  if (t >= ca) return C(e);
  let r = x(n, e);
  if (e.kind === "drawingDocPr") {
    let i = I(e);
    return i.length > 0 ? `docPr(${i.join(",")})` : "docPr";
  }
  if (e.kind === "picture") {
    let i = an(e),
      d = sn(e, t + 1, r),
      l = i === void 0 ? "picture" : `picture(${i})`;
    return d.length > 0 ? `${l}[${d.join(",")}]` : l;
  }
  let o = I(e),
    s = o.length > 0 ? `${C(e)}(${o.join(",")})` : C(e),
    a = [];
  for (let i of e.children) {
    if (i.kind === "picture") {
      a.push(We(i, t + 1, r));
      continue;
    }
    if (i.kind === "generic") {
      a.push(V(i, r));
      continue;
    }
    i.kind !== "textValue" && a.push(We(i, t + 1, r));
  }
  return a.length > 0 ? `${s}[${a.join(",")}]` : s;
}
function ht(e) {
  let t = x(va, e),
    n = e.children.find(
      (i) => i.kind === "inlineDrawing" || i.kind === "anchoredDrawing",
    );
  if (!n || n.kind === "textValue") return `drawing(${I(e).join(",")})`;
  let r = x(t, n),
    o = I(n),
    s = o.length > 0 ? `${n.kind}(${o.join(",")})` : n.kind,
    a = [];
  for (let i of n.children) {
    if (i.kind === "generic") {
      a.push(V(i, r));
      continue;
    }
    i.kind !== "textValue" && a.push(We(i, 1, r));
  }
  return a.length > 0 ? `drawing[${s};${a.join(";")}]` : `drawing[${s}]`;
}
function ln(e, t, n) {
  let r = e.children.find((c) => c.kind === "paragraphProperties"),
    o = [],
    s = "",
    a = [],
    i = x(va, e),
    d = (c, p) => {
      if (c.kind === "run") {
        let u = x(p, c),
          m = c.children.find((f) => f.kind === "runProperties");
        (o.push(yt(m)), (s += Ge(c)));
        for (let f of c.children) ze(f, a, u);
        return;
      }
      if (c.kind === "drawing") {
        a.push(ht(c));
        return;
      }
      if (c.kind === "hyperlink") {
        a.push(on(c));
        let u = x(p, c);
        for (let m of c.children) d(m, u);
        return;
      }
      if (c.kind === "contentControl") {
        a.push(
          xa({
            ...c,
            children: c.children.filter(
              (m) => m.kind !== "contentControlContent",
            ),
          }),
        );
        let u = x(p, c);
        for (let m of c.children) {
          if (m.kind !== "contentControlContent") continue;
          let f = x(u, m);
          for (let y of m.children) d(y, f);
        }
        return;
      }
      ze(c, a, p);
    };
  for (let c of e.children) d(c, i);
  let l = Oc(e);
  return {
    ordinal: t,
    path: n,
    paraId: l === null ? null : l.toUpperCase(),
    text: s,
    paragraphProperties: yt(r),
    runProperties: o,
    genericStructure: a,
  };
}
function cn(e) {
  if (e.localName === "hdr" || e.localName === "ftr" || e.kind === "body")
    return e;
  for (let t of e.children)
    if (
      t.kind !== "textValue" &&
      (t.kind === "body" || t.localName === "hdr" || t.localName === "ftr")
    )
      return t;
  return e;
}
function xt(e, t, n, r, o, s) {
  if (s > ca) return;
  let a = 0;
  for (let i of e.children) {
    if (i.kind === "textValue") {
      i.value.trim() !== "" && o.push(`${t}/#text ${i.value}`);
      continue;
    }
    let d = t === "" ? String(a) : `${t}/${a}`;
    if (((a += 1), i.kind === "paragraph")) {
      (n.push(i), r.push(d), o.push(`${d} p`));
      continue;
    }
    let l = I(i);
    (o.push(l.length > 0 ? `${d} ${C(i)}(${l.join(",")})` : `${d} ${C(i)}`),
      xt(i, d, n, r, o, s + 1));
  }
}
function Nt(e) {
  let t = cn(e.root),
    n = [],
    r = [],
    o = [];
  xt(t, "", n, r, o, 0);
  let s = n.map((a, i) => ln(a, i, r[i]));
  return { partName: e.name, paragraphs: s, structure: o };
}
function dn(e) {
  let t = [];
  for (let n of e) {
    let r = Nt(n);
    r && t.push(r);
  }
  return { stories: t };
}
function pn(e, t) {
  let n = [],
    r = (s, a, i) => {
      n.push({
        path: s,
        before: JSON.stringify(a) ?? "undefined",
        after: JSON.stringify(i) ?? "undefined",
      });
    };
  e.stories.length !== t.stories.length &&
    r("stories.length", e.stories.length, t.stories.length);
  let o = Math.min(e.stories.length, t.stories.length);
  for (let s = 0; s < o; s += 1) {
    let a = e.stories[s],
      i = t.stories[s],
      d = (p) => `${a.partName}${p}`;
    a.paragraphs.length !== i.paragraphs.length &&
      r(d(".paragraphs.length"), a.paragraphs.length, i.paragraphs.length);
    let l = Math.min(a.paragraphs.length, i.paragraphs.length);
    for (let p = 0; p < l; p += 1) {
      let u = a.paragraphs[p],
        m = i.paragraphs[p];
      (u.text !== m.text && r(d(`.p[${p}].text`), u.text, m.text),
        u.path !== m.path && r(d(`.p[${p}].path`), u.path, m.path),
        u.paraId !== m.paraId && r(d(`.p[${p}].paraId`), u.paraId, m.paraId),
        JSON.stringify(u.paragraphProperties) !==
          JSON.stringify(m.paragraphProperties) &&
          r(
            d(`.p[${p}].paragraphProperties`),
            u.paragraphProperties,
            m.paragraphProperties,
          ),
        JSON.stringify(u.runProperties) !== JSON.stringify(m.runProperties) &&
          r(d(`.p[${p}].runProperties`), u.runProperties, m.runProperties),
        JSON.stringify(u.genericStructure) !==
          JSON.stringify(m.genericStructure) &&
          r(
            d(`.p[${p}].genericStructure`),
            u.genericStructure,
            m.genericStructure,
          ));
    }
    a.structure.length !== i.structure.length &&
      r(d(".structure.length"), a.structure.length, i.structure.length);
    let c = Math.min(a.structure.length, i.structure.length);
    for (let p = 0; p < c; p += 1)
      a.structure[p] !== i.structure[p] &&
        r(d(`.structure[${p}]`), a.structure[p], i.structure[p]);
  }
  return n;
}
var j = "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
  fn = "http://schemas.openxmlformats.org/package/2006/relationships",
  Ot =
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
  _ =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
  yn = "application/vnd.openxmlformats-package.relationships+xml",
  gn = "http://schemas.openxmlformats.org/package/2006/content-types",
  Rt = "/[Content_Types].xml",
  E = "/word/numbering.xml",
  Ct = [
    { text: "\uF0B7", font: "Symbol" },
    { text: "o", font: "Courier New" },
    { text: "\uF0A7", font: "Wingdings" },
  ],
  bt = ["decimal", "lowerLetter", "lowerRoman"],
  Ye = 9;
function St(e, t) {
  let n = 720 * (t + 1),
    r = '<w:start w:val="1"/>';
  if (e === "bullet") {
    let a = Ct[t % Ct.length];
    return `<w:lvl w:ilvl="${t}">${r}<w:numFmt w:val="bullet"/><w:lvlText w:val="${a.text}"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="${n}" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="${a.font}" w:hAnsi="${a.font}" w:hint="default"/></w:rPr></w:lvl>`;
  }
  let o = bt[t % bt.length],
    s = o === "lowerRoman";
  return `<w:lvl w:ilvl="${t}">${r}<w:numFmt w:val="${o}"/><w:lvlText w:val="%${t + 1}."/><w:lvlJc w:val="${s ? "right" : "left"}"/><w:pPr><w:ind w:left="${n}" w:hanging="${s ? 180 : 360}"/></w:pPr></w:lvl>`;
}
function hn(e, t) {
  let n = Array.from({ length: Ye }, (r, o) => St(e, o)).join("");
  return `<w:abstractNum w:abstractNumId="${t}"><w:multiLevelType w:val="${e === "bullet" ? "hybridMultilevel" : "multilevel"}"/>${n}</w:abstractNum>`;
}
function xn() {
  let e = Ba(`<w:numbering xmlns:w="${j}"></w:numbering>`, {
    name: E,
    contentType: _,
  });
  return e.ok ? e.part : null;
}
var b = (e, t) => {
    let n = [];
    for (let r of e.children)
      r.kind === "textValue" ||
        r.localName !== t ||
        (r.namespaceUri === j && n.push(r));
    return n;
  },
  N = (e, t) => e.attributes.find((n) => n.localName === t)?.value;
function vt(e, t) {
  let n = Ba(`<w:numbering xmlns:w="${j}">${e}</w:numbering>`, {
    name: E,
    contentType: _,
  });
  if (!n.ok) return null;
  let r = [];
  for (let o of n.part.root.children) o.kind !== "textValue" && r.push(o);
  if (r.length !== t.length) return null;
  for (let o = 0; o < t.length; o += 1) {
    let s = r[o],
      a = t[o];
    if (
      s.namespaceUri !== j ||
      s.localName !== a.localName ||
      (a.attribute && N(s, a.attribute.localName) !== a.attribute.value)
    )
      return null;
  }
  return r;
}
var Et = ["numPicBullet", "abstractNum", "num", "numIdMacAtCleanup"];
function Pt(e, t, n) {
  let r = t.indexOf(n);
  if (r === -1) return e.length;
  let o = 0;
  return (
    e.forEach((s, a) => {
      if (s.kind === "textValue") return;
      let i = t.indexOf(s.localName);
      i !== -1 && i <= r && (o = a + 1);
    }),
    o
  );
}
function It(e, t) {
  let n = 0;
  for (let r of e) {
    let o = N(r, t);
    !o || !/^\d{1,9}$/.test(o) || (n = Math.max(n, Number(o)));
  }
  return n + 1;
}
function Nn(e, t) {
  let n = e.parts.get(E),
    r = n ?? xn();
  if (!r) return null;
  let o = r.root,
    s = b(o, "abstractNum"),
    a = b(o, "num"),
    i = t === "bullet" ? "bullet" : "decimal";
  for (let O of a) {
    let $ = N(O, "numId"),
      qe = b(O, "abstractNumId")[0],
      Qe = qe ? N(qe, "val") : void 0;
    if (!$ || !Qe) continue;
    let Ze = s.find((X) => N(X, "abstractNumId") === Qe);
    if (!Ze) continue;
    let et = b(Ze, "lvl").find(
        (X) => N(X, "ilvl") === "0" || N(X, "ilvl") === void 0,
      ),
      tt = et ? b(et, "numFmt")[0] : void 0;
    if (tt && N(tt, "val") === i) return { pkg: e, numId: $ };
  }
  let d = It(s, "abstractNumId"),
    l = It(a, "numId"),
    c = vt(
      hn(t, d) +
        `<w:num w:numId="${l}"><w:abstractNumId w:val="${d}"/></w:num>`,
      [
        {
          localName: "abstractNum",
          attribute: { localName: "abstractNumId", value: String(d) },
        },
        {
          localName: "num",
          attribute: { localName: "numId", value: String(l) },
        },
      ],
    );
  if (!c) return null;
  let p = Da(r),
    [u, m] = c.map((O) => ne(O, p));
  if (!u || !m) return null;
  let f = Ia(r, o.id, Pt(o.children, Et, "abstractNum"), [u]);
  if (!f.ok) return null;
  let y = Ia(f.part, o.id, Pt(f.part.root.children, Et, "num"), [m]);
  if (!y.ok) return null;
  let g = Object.freeze({ ...e, parts: new Map([...e.parts, [E, y.part]]) });
  if (!n) {
    let O = bn(g);
    if (!O) return null;
    let $ = kn(O);
    if (!$) return null;
    g = $;
  }
  return { pkg: g, numId: String(l) };
}
var On = [
  "nsid",
  "multiLevelType",
  "tmpl",
  "name",
  "styleLink",
  "numStyleLink",
  "lvl",
];
function Tt(e) {
  let t = N(e, "ilvl");
  return t === void 0 || !/^\d{1,9}$/.test(t) ? null : Number(t);
}
function Rn(e, t) {
  let n = 0;
  return (
    e.forEach((r, o) => {
      if (r.kind !== "textValue") {
        if (r.localName === "lvl" && r.namespaceUri === j) {
          (Tt(r) ?? 0) < t && (n = o + 1);
          return;
        }
        On.includes(r.localName) && (n = o + 1);
      }
    }),
    n
  );
}
function Cn(e, t, n, r) {
  if (
    !Number.isInteger(n) ||
    n < 0 ||
    n >= Ye ||
    t.length === 0 ||
    t.length > 64
  )
    return null;
  let o = e.parts.get(E);
  if (!o) return null;
  let s = o.root,
    a = b(s, "num").find((f) => N(f, "numId") === t),
    i = a ? b(a, "abstractNumId")[0] : void 0,
    d = i ? N(i, "val") : void 0;
  if (!d) return null;
  let l = b(s, "abstractNum").find((f) => N(f, "abstractNumId") === d);
  if (!l || b(l, "numStyleLink").length > 0) return null;
  let c = b(l, "lvl");
  if (c.some((f) => Tt(f) === n)) return e;
  if (c.length >= Ye) return null;
  let p = vt(St(r, n), [
    { localName: "lvl", attribute: { localName: "ilvl", value: String(n) } },
  ]);
  if (!p) return null;
  let u = Da(o),
    m = Ia(o, l.id, Rn(l.children, n), [ne(p[0], u)]);
  return m.ok
    ? Object.freeze({ ...e, parts: new Map([...e.parts, [E, m.part]]) })
    : null;
}
function ne(e, t) {
  return e.kind === "textValue"
    ? { ...e, id: t() }
    : { ...e, id: t(), children: e.children.map((n) => ne(n, t)) };
}
function bn(e) {
  let t = e.mainDocumentPart,
    n = En(t),
    r = e.parts.get(n),
    o = Pn(e),
    s = Ba(
      `<Relationships xmlns="${fn}"><Relationship Id="${o}" Type="${Ot}" Target="numbering.xml"/></Relationships>`,
      { name: n, contentType: yn },
    );
  if (!s.ok) return null;
  let a = e.relationships.get(t) ?? [],
    i = {
      ownerPart: t,
      id: o,
      type: Ot,
      rawTarget: "numbering.xml",
      targetMode: "Internal",
      order: a.reduce((u, m) => Math.max(u, m.order), -1) + 1,
    },
    d = new Map([...e.relationships, [t, [...a, i]]]);
  if (!r)
    return Object.freeze({
      ...e,
      parts: new Map([...e.parts, [n, s.part]]),
      relationships: d,
    });
  let l = Da(r),
    c = s.part.root.children[0];
  if (!c) return null;
  let p = Ia(r, r.root.id, r.root.children.length, [ne(c, l)]);
  return p.ok
    ? Object.freeze({
        ...e,
        parts: new Map([...e.parts, [n, p.part]]),
        relationships: d,
      })
    : null;
}
function En(e) {
  let t = e.lastIndexOf("/");
  return `${e.slice(0, t)}/_rels/${e.slice(t + 1)}.rels`;
}
function Pn(e) {
  let t = 0;
  for (let n of e.relationships.values())
    for (let r of n) {
      let o = /^rId(\d{1,9})$/.exec(r.id);
      o && (t = Math.max(t, Number(o[1])));
    }
  for (let n of e.externalTargets) {
    let r = /^rId(\d{1,9})$/.exec(n.id);
    r && (t = Math.max(t, Number(r[1])));
  }
  return `rId${t + 1}`;
}
var In = `<Override PartName="${E}" ContentType="${_}"/>`;
function kn(e) {
  let t = e.contentTypes.overrides.get(p(E));
  if (t === _) return e;
  if (t !== void 0) return null;
  let n = e.partBytes.get(Rt);
  if (!n) return null;
  let r = strFromU8(n),
    o = kt(r);
  if (!o) return null;
  let s = r.lastIndexOf(`</${o.rootName}>`);
  if (s === -1) return null;
  let a = r.slice(0, s) + In + r.slice(s),
    i = kt(a);
  if (!i || i.rootName !== o.rootName) return null;
  let d = [...o.children, wt("Override", { PartName: E, ContentType: _ })];
  return i.children.length !== d.length || i.children.some((l, c) => l !== d[c])
    ? null
    : Object.freeze({
        ...e,
        partBytes: new Map([...e.partBytes, [Rt, strToU8(a)]]),
        contentTypes: Object.freeze({
          defaults: e.contentTypes.defaults,
          overrides: new Map([...e.contentTypes.overrides, [p(E), _]]),
        }),
      });
}
function kt(e) {
  let t = da(e);
  if (!t.ok) return null;
  let n = t.nodes.filter((i) => i.type === "element");
  if (n.length !== 1) return null;
  let r = n[0],
    o = r.name.indexOf(":"),
    s = o === -1 ? "" : r.name.slice(0, o);
  if (
    r.name.slice(o + 1) !== "Types" ||
    r.attributes[s ? `xmlns:${s}` : "xmlns"] !== gn
  )
    return null;
  let a = [];
  for (let i of r.children)
    i.type === "element" && a.push(wt(i.name, i.attributes));
  return { rootName: r.name, children: a };
}
function wt(e, t) {
  let n = Object.entries(t)
    .map(([r, o]) => `${r}=${o}`)
    .sort();
  return [e, ...n].join("");
}
function re(e) {
  return e != null && e.kind !== "textValue";
}
function Je(e, t) {
  for (let n of e.children)
    if (n.kind !== "textValue" && n.namespaceUri === ma && n.localName === t)
      return n;
  return null;
}
function oe(e, t) {
  for (let n of e.attributes)
    if (n.namespaceUri === ma && n.localName === t) return n.value;
}
function A(e, t) {
  let n = Je(e, t);
  if (!n) return false;
  let r = oe(n, "val");
  return r === void 0 ? true : r !== "0" && r !== "false" && r !== "off";
}
var _t = Object.freeze({
  trackRevisions: false,
  restrictedToTrackedChanges: false,
  doNotTrackMoves: false,
  doNotTrackFormatting: false,
});
function Sn(e) {
  if (!re(e)) return _t;
  let t = Je(e, "documentProtection"),
    n = t === null ? void 0 : oe(t, "enforcement"),
    r = n !== void 0 && n !== "0" && n !== "false" && n !== "off";
  return {
    trackRevisions: A(e, "trackRevisions"),
    restrictedToTrackedChanges:
      r && t !== null && oe(t, "edit") === "trackedChanges",
    doNotTrackMoves: A(e, "doNotTrackMoves"),
    doNotTrackFormatting: A(e, "doNotTrackFormatting"),
  };
}
var At = Object.freeze({ doNotShadeFormData: false });
function vn(e) {
  return re(e) ? { doNotShadeFormData: A(e, "doNotShadeFormData") } : At;
}
function Tn(e, t) {
  let n = e.parts.get(t.storyPartName);
  if (!n)
    return { ok: false, reason: `no story part named ${t.storyPartName}` };
  let r = [];
  for (let d of ue(n.root)) {
    let l = se(d.node).tag;
    if (l === void 0 || l.length === 0) continue;
    let c = t.decide(l);
    c !== "keep" && r.push({ nodeId: d.node.id, policy: c });
  }
  let o = n,
    s = 0,
    a = 0;
  for (let { nodeId: d, policy: l } of r) {
    let c = Ga(o, d);
    if (!c) continue;
    if (l === "remove") {
      let g = Ka(o, d, { deferValidation: true });
      if (!g.ok)
        return { ok: false, reason: `a node could not be removed: ${$t(g)}` };
      ((o = g.part), (a += 1));
      continue;
    }
    let p = c.children.find((g) => g.id === d);
    if (!p) continue;
    let u = qe(p),
      m = u ? u.children : [],
      f = c.children.flatMap((g) => (g.id === d ? m : [g])),
      y = Ha(o, c.id, f, { deferValidation: true });
    if (!y.ok)
      return { ok: false, reason: `a node could not be unwrapped: ${$t(y)}` };
    ((o = y.part), (s += 1));
  }
  let i = o === n ? e : Ab(e, o);
  if (!i.parts.has(t.storyPartName))
    return { ok: false, reason: "the story went missing during the export" };
  for (let d of t.namespaces)
    for (let l of _n(i, t.storyPartName, d)) {
      let c = jf(i, l.itemId),
        p = df(i, l.partName, c);
      if (p.pkg === i && p.removed.length === 0 && !wn(i, l.partName, c))
        return {
          ok: false,
          reason: `the payloads in ${d} could not be removed`,
        };
      if (((i = p.pkg), c.size > 0)) continue;
      let u = An(i, l);
      if (!u.ok)
        return {
          ok: false,
          reason: `the payload store for ${d} could not be removed`,
        };
      i = u.pkg;
    }
  return { ok: true, pkg: i, unwrapped: s, removed: a };
}
function wn(e, t, n) {
  return $e$1(e, t).every((r) => n.has(r.id));
}
function $t(e) {
  return e.issues.map((t) => t.code).join(", ") || "the edit was refused";
}
function _n(e, t, n) {
  return Xe$1(e, t).filter((r) => r.namespaceUri === n);
}
function An(e, t) {
  let n = Gb(e, t.partName);
  if (!n.ok) return { pkg: e, ok: false };
  let r = Gb(n.pkg, t.propsPartName);
  return r.ok ? { pkg: r.pkg, ok: true } : { pkg: e, ok: false };
}
var ie = "http://purl.org/dc/elements/1.1/",
  Dt =
    "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  Mt =
    "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
var sp = Object.freeze({});
function k(e, t, n) {
  if (e.kind !== "textValue")
    for (let r of e.children) {
      if (r.kind === "textValue" || r.namespaceUri !== t || r.localName !== n)
        continue;
      let o = r.children.find((a) => a.kind === "textValue");
      if (!o || o.kind !== "textValue") return;
      let s = o.value.trim();
      return s.length === 0 ? void 0 : s.length > 4096 ? s.slice(0, 4096) : s;
    }
}
function lp(e, t) {
  let n = {};
  if (e && e.kind !== "textValue") {
    let r = k(e, ie, "title");
    r !== void 0 && (n.title = r);
    let o = k(e, ie, "creator");
    o !== void 0 && (n.creator = o);
    let s = k(e, ie, "subject");
    s !== void 0 && (n.subject = s);
    let a = k(e, ie, "description");
    a !== void 0 && (n.description = a);
    let i = k(e, Dt, "keywords");
    i !== void 0 && (n.keywords = i);
    let d = k(e, Dt, "lastModifiedBy");
    d !== void 0 && (n.lastModifiedBy = d);
  }
  if (t && t.kind !== "textValue") {
    let r = k(t, Mt, "Company");
    r !== void 0 && (n.company = r);
    let o = k(t, Mt, "Manager");
    o !== void 0 && (n.manager = o);
  }
  return n;
}
export {
  Ve as A,
  je as B,
  Xe as C,
  qt as D,
  dt as E,
  mt as F,
  tn as G,
  rn as H,
  Nt as I,
  dn as J,
  pn as K,
  Nn as L,
  Cn as M,
  _t as N,
  Sn as O,
  At as P,
  vn as Q,
  sp as R,
  lp as S,
  Tn as T,
  Ft as a,
  ot as b,
  J as c,
  S as d,
  q as e,
  Q as f,
  h as g,
  Ht as h,
  v as i,
  B as j,
  Z as k,
  U as l,
  ee as m,
  De as n,
  Me as o,
  Fe as p,
  Kt as q,
  Gt as r,
  Be as s,
  at as t,
  zt as u,
  Le as v,
  Wt as w,
  H as x,
  Ue as y,
  He as z,
};
