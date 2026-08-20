import { b } from "./chunk-WU7PUTVA.js";
async function Pr(s = {}) {
  var _,
    t = s,
    r = typeof window == "object",
    a = typeof WorkerGlobalScope < "u",
    o =
      typeof process == "object" &&
      process.versions?.node &&
      process.type != "renderer";
  if (o) {
    let { createRequire: e } = await import("./node-module-shim-TTKTT66I.js");
    var i = e(import.meta.url);
  }
  var l = (e, h) => {
      throw h;
    },
    b$1 = import.meta.url,
    d = "";
  function T(e) {
    return t.locateFile ? t.locateFile(e, d) : d + e;
  }
  var m, R;
  if (o) {
    var L = i("fs");
    (b$1.startsWith("file:") &&
      (d = i("path").dirname(i("url").fileURLToPath(b$1)) + "/"),
      (R = (e) => {
        e = X(e) ? new URL(e) : e;
        var h = L.readFileSync(e);
        return h;
      }),
      (m = async (e, h = true) => {
        e = X(e) ? new URL(e) : e;
        var y = L.readFileSync(e, h ? void 0 : "utf8");
        return y;
      }),
      process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"),
      process.argv.slice(2),
      (l = (e, h) => {
        throw ((process.exitCode = e), h);
      }));
  } else if (r || a) {
    try {
      d = new URL(".", b$1).href;
    } catch {}
    (a &&
      (R = (e) => {
        var h = new XMLHttpRequest();
        return (
          h.open("GET", e, false),
          (h.responseType = "arraybuffer"),
          h.send(null),
          new Uint8Array(h.response)
        );
      }),
      (m = async (e) => {
        if (X(e))
          return new Promise((y, A) => {
            var P = new XMLHttpRequest();
            (P.open("GET", e, true),
              (P.responseType = "arraybuffer"),
              (P.onload = () => {
                if (P.status == 200 || (P.status == 0 && P.response)) {
                  y(P.response);
                  return;
                }
                A(P.status);
              }),
              (P.onerror = A),
              P.send(null));
          });
        var h = await fetch(e, { credentials: "same-origin" });
        if (h.ok) return h.arrayBuffer();
        throw new Error(h.status + " : " + h.url);
      }));
  }
  console.log.bind(console);
  var C = console.error.bind(console),
    B,
    Y = false,
    Z,
    X = (e) => e.startsWith("file://"),
    ct,
    it,
    j,
    ut,
    ft = false;
  function ht() {
    var e = j.buffer;
    ((t.HEAP8 = new Int8Array(e)),
      (t.HEAPU8 = ut = new Uint8Array(e)),
      (t.HEAPU16 = new Uint16Array(e)),
      (t.HEAP32 = new Int32Array(e)),
      (t.HEAPU32 = new Uint32Array(e)),
      (t.HEAPF32 = new Float32Array(e)),
      new BigInt64Array(e),
      new BigUint64Array(e));
  }
  function Kt() {
    if (t.preRun)
      for (
        typeof t.preRun == "function" && (t.preRun = [t.preRun]);
        t.preRun.length;
      )
        c_(t.preRun.shift());
    pt(dt);
  }
  function Jt() {
    ((ft = true), F.__wasm_call_ctors());
  }
  function Qt() {
    if (t.postRun)
      for (
        typeof t.postRun == "function" && (t.postRun = [t.postRun]);
        t.postRun.length;
      )
        o_(t.postRun.shift());
    pt(gt);
  }
  var O = 0,
    M = null;
  function qt(e) {
    (O++, t.monitorRunDependencies?.(O));
  }
  function xt(e) {
    if ((O--, t.monitorRunDependencies?.(O), O == 0 && M)) {
      var h = M;
      ((M = null), h());
    }
  }
  function lt(e) {
    (t.onAbort?.(e),
      (e = "Aborted(" + e + ")"),
      C(e),
      (Y = true),
      (e += ". Build with -sASSERTIONS for more info."));
    var h = new WebAssembly.RuntimeError(e);
    throw (it?.(h), h);
  }
  var q;
  function t_() {
    return t.locateFile
      ? T("harfbuzz.wasm")
      : b(new URL("harfbuzz.wasm", import.meta.url).href);
  }
  function __(e) {
    if (e == q && B) return new Uint8Array(B);
    if (R) return R(e);
    throw "both async and sync fetching of the wasm failed";
  }
  async function e_(e) {
    if (!B)
      try {
        var h = await m(e);
        return new Uint8Array(h);
      } catch {}
    return __(e);
  }
  async function n_(e, h) {
    try {
      var y = await e_(e),
        A = await WebAssembly.instantiate(y, h);
      return A;
    } catch (P) {
      (C(`failed to asynchronously prepare wasm: ${P}`), lt(P));
    }
  }
  async function r_(e, h, y) {
    if (!e && !X(h) && !o)
      try {
        var A = fetch(h, { credentials: "same-origin" }),
          P = await WebAssembly.instantiateStreaming(A, y);
        return P;
      } catch (H) {
        (C(`wasm streaming compile failed: ${H}`),
          C("falling back to ArrayBuffer instantiation"));
      }
    return n_(h, y);
  }
  function s_() {
    return { env: kt, wasi_snapshot_preview1: kt };
  }
  async function a_() {
    function e(H, nt) {
      return (
        (F = H.exports),
        (t.wasmExports = F),
        (j = F.memory),
        ht(),
        (W = F.__indirect_function_table),
        pr(F),
        xt(),
        F
      );
    }
    qt();
    function h(H) {
      return e(H.instance);
    }
    var y = s_();
    if (t.instantiateWasm)
      return new Promise((H, nt) => {
        t.instantiateWasm(y, (dr, yr) => {
          H(e(dr));
        });
      });
    q ??= t_();
    var A = await r_(B, q, y),
      P = h(A);
    return P;
  }
  class bt {
    name = "ExitStatus";
    constructor(h) {
      ((this.message = `Program terminated with exit(${h})`),
        (this.status = h));
    }
  }
  var pt = (e) => {
      for (; e.length > 0;) e.shift()(t);
    },
    gt = [],
    o_ = (e) => gt.push(e),
    dt = [],
    c_ = (e) => dt.push(e),
    x = true,
    i_ = (e) => Rt(e),
    u_ = () => Ft(),
    f_ = () => lt(""),
    yt = 0,
    h_ = () => {
      ((x = false), (yt = 0));
    },
    V = {},
    Pt = (e) => {
      if (e instanceof bt || e == "unwind") return Z;
      l(1, e);
    },
    At = () => x || yt > 0,
    vt = (e) => {
      ((Z = e), At() || (t.onExit?.(e), (Y = true)), l(e, new bt(e)));
    },
    l_ = (e, h) => {
      ((Z = e), vt(e));
    },
    b_ = l_,
    p_ = () => {
      if (!At())
        try {
          b_(Z);
        } catch (e) {
          Pt(e);
        }
    },
    g_ = (e) => {
      if (!Y)
        try {
          (e(), p_());
        } catch (h) {
          Pt(h);
        }
    },
    d_ = () => performance.now(),
    y_ = (e, h) => {
      if ((V[e] && (clearTimeout(V[e].id), delete V[e]), !h)) return 0;
      var y = setTimeout(() => {
        (delete V[e], g_(() => Ht(e, d_())));
      }, h);
      return ((V[e] = { id: y, timeout_ms: h }), 0);
    },
    P_ = () => 2147483648,
    A_ = (e, h) => Math.ceil(e / h) * h,
    v_ = (e) => {
      var h = j.buffer.byteLength,
        y = ((e - h + 65535) / 65536) | 0;
      try {
        return (j.grow(y), ht(), 1);
      } catch {}
    },
    T_ = (e) => {
      var h = ut.length;
      e >>>= 0;
      var y = P_();
      if (e > y) return false;
      for (var A = 1; A <= 4; A *= 2) {
        var P = h * (1 + 0.2 / A);
        P = Math.min(P, e + 100663296);
        var H = Math.min(y, A_(Math.max(e, P), 65536)),
          nt = v_(H);
        if (nt) return true;
      }
      return false;
    },
    Tt = (e) => {
      let h = e.length;
      return [(h % 128) | 128, h >> 7, ...e];
    },
    m_ = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 },
    mt = (e) =>
      Tt(
        Array.from(e, (h) => {
          var y = m_[h];
          return y;
        }),
      ),
    E_ = (e, h) => {
      var y = Uint8Array.of(
          0,
          97,
          115,
          109,
          1,
          0,
          0,
          0,
          1,
          ...Tt([1, 96, ...mt(h.slice(1)), ...mt(h[0] === "v" ? "" : h[0])]),
          2,
          7,
          1,
          1,
          101,
          1,
          102,
          0,
          0,
          7,
          5,
          1,
          1,
          102,
          0,
          0,
        ),
        A = new WebAssembly.Module(y),
        P = new WebAssembly.Instance(A, { e: { f: e } }),
        H = P.exports.f;
      return H;
    },
    W,
    Et = (e) => W.get(e),
    H_ = (e, h) => {
      if (D)
        for (var y = e; y < e + h; y++) {
          var A = Et(y);
          A && D.set(A, y);
        }
    },
    D,
    R_ = (e) => (D || ((D = new WeakMap()), H_(0, W.length)), D.get(e) || 0),
    tt = [],
    S_ = () => (tt.length ? tt.pop() : W.grow(1)),
    _t = (e, h) => W.set(e, h),
    F_ = (e, h) => {
      var y = R_(e);
      if (y) return y;
      var A = S_();
      try {
        _t(A, e);
      } catch (H) {
        if (!(H instanceof TypeError)) throw H;
        var P = E_(e, h);
        _t(A, P);
      }
      return (D.set(e, A), A);
    },
    k_ = (e) => {
      (D.delete(Et(e)), _t(e, null), tt.push(e));
    },
    U_ = (e) => St(e);
  (t.noExitRuntime && (x = t.noExitRuntime),
    t.print && t.print,
    t.printErr && (C = t.printErr),
    t.wasmBinary && (B = t.wasmBinary),
    t.arguments && t.arguments,
    t.thisProgram && t.thisProgram,
    (t.wasmExports = F),
    (t.stackSave = u_),
    (t.stackRestore = i_),
    (t.stackAlloc = U_),
    (t.addFunction = F_),
    (t.removeFunction = k_));
  var Ht, Rt, St, Ft;
  function pr(e) {
    ((t._hb_blob_create = e.hb_blob_create),
      (t._hb_blob_destroy = e.hb_blob_destroy),
      (t._hb_blob_get_length = e.hb_blob_get_length),
      (t._hb_blob_get_data = e.hb_blob_get_data),
      (t._hb_buffer_serialize = e.hb_buffer_serialize),
      (t._hb_buffer_create = e.hb_buffer_create),
      (t._hb_buffer_reset = e.hb_buffer_reset),
      (t._hb_buffer_reference = e.hb_buffer_reference),
      (t._hb_buffer_destroy = e.hb_buffer_destroy),
      (t._hb_buffer_get_content_type = e.hb_buffer_get_content_type),
      (t._hb_buffer_set_direction = e.hb_buffer_set_direction),
      (t._hb_buffer_set_script = e.hb_buffer_set_script),
      (t._hb_buffer_set_language = e.hb_buffer_set_language),
      (t._hb_buffer_set_flags = e.hb_buffer_set_flags),
      (t._hb_buffer_set_cluster_level = e.hb_buffer_set_cluster_level),
      (t._hb_buffer_clear_contents = e.hb_buffer_clear_contents),
      (t._hb_buffer_add = e.hb_buffer_add),
      (t._hb_buffer_get_length = e.hb_buffer_get_length),
      (t._hb_buffer_get_glyph_infos = e.hb_buffer_get_glyph_infos),
      (t._hb_buffer_get_glyph_positions = e.hb_buffer_get_glyph_positions),
      (t._hb_glyph_info_get_glyph_flags = e.hb_glyph_info_get_glyph_flags),
      (t._hb_buffer_guess_segment_properties =
        e.hb_buffer_guess_segment_properties),
      (t._hb_buffer_add_utf8 = e.hb_buffer_add_utf8),
      (t._hb_buffer_add_utf16 = e.hb_buffer_add_utf16),
      (t._hb_buffer_add_codepoints = e.hb_buffer_add_codepoints),
      (t._hb_buffer_set_message_func = e.hb_buffer_set_message_func),
      (t._hb_language_from_string = e.hb_language_from_string),
      (t._hb_language_to_string = e.hb_language_to_string),
      (t._hb_script_from_string = e.hb_script_from_string),
      (t._hb_version = e.hb_version),
      (t._hb_version_string = e.hb_version_string),
      (t._hb_feature_from_string = e.hb_feature_from_string),
      (t._hb_feature_to_string = e.hb_feature_to_string),
      (t._hb_variation_from_string = e.hb_variation_from_string),
      (t._hb_variation_to_string = e.hb_variation_to_string),
      (t._malloc = e.malloc),
      (t._free = e.free),
      (t._hb_draw_funcs_set_move_to_func = e.hb_draw_funcs_set_move_to_func),
      (t._hb_draw_funcs_set_line_to_func = e.hb_draw_funcs_set_line_to_func),
      (t._hb_draw_funcs_set_quadratic_to_func =
        e.hb_draw_funcs_set_quadratic_to_func),
      (t._hb_draw_funcs_set_cubic_to_func = e.hb_draw_funcs_set_cubic_to_func),
      (t._hb_draw_funcs_set_close_path_func =
        e.hb_draw_funcs_set_close_path_func),
      (t._hb_draw_funcs_create = e.hb_draw_funcs_create),
      (t._hb_draw_funcs_destroy = e.hb_draw_funcs_destroy),
      (t._hb_face_create = e.hb_face_create),
      (t._hb_face_reference = e.hb_face_reference),
      (t._hb_face_destroy = e.hb_face_destroy),
      (t._hb_face_reference_table = e.hb_face_reference_table),
      (t._hb_face_get_upem = e.hb_face_get_upem),
      (t._hb_face_collect_unicodes = e.hb_face_collect_unicodes),
      (t._hb_font_funcs_create = e.hb_font_funcs_create),
      (t._hb_font_funcs_destroy = e.hb_font_funcs_destroy),
      (t._hb_font_funcs_set_font_h_extents_func =
        e.hb_font_funcs_set_font_h_extents_func),
      (t._hb_font_funcs_set_font_v_extents_func =
        e.hb_font_funcs_set_font_v_extents_func),
      (t._hb_font_funcs_set_nominal_glyph_func =
        e.hb_font_funcs_set_nominal_glyph_func),
      (t._hb_font_funcs_set_nominal_glyphs_func =
        e.hb_font_funcs_set_nominal_glyphs_func),
      (t._hb_font_funcs_set_variation_glyph_func =
        e.hb_font_funcs_set_variation_glyph_func),
      (t._hb_font_funcs_set_glyph_h_advance_func =
        e.hb_font_funcs_set_glyph_h_advance_func),
      (t._hb_font_funcs_set_glyph_v_advance_func =
        e.hb_font_funcs_set_glyph_v_advance_func),
      (t._hb_font_funcs_set_glyph_h_advances_func =
        e.hb_font_funcs_set_glyph_h_advances_func),
      (t._hb_font_funcs_set_glyph_v_advances_func =
        e.hb_font_funcs_set_glyph_v_advances_func),
      (t._hb_font_funcs_set_glyph_h_origin_func =
        e.hb_font_funcs_set_glyph_h_origin_func),
      (t._hb_font_funcs_set_glyph_v_origin_func =
        e.hb_font_funcs_set_glyph_v_origin_func),
      (t._hb_font_funcs_set_glyph_h_kerning_func =
        e.hb_font_funcs_set_glyph_h_kerning_func),
      (t._hb_font_funcs_set_glyph_extents_func =
        e.hb_font_funcs_set_glyph_extents_func),
      (t._hb_font_funcs_set_glyph_name_func =
        e.hb_font_funcs_set_glyph_name_func),
      (t._hb_font_funcs_set_glyph_from_name_func =
        e.hb_font_funcs_set_glyph_from_name_func),
      (t._hb_font_get_h_extents = e.hb_font_get_h_extents),
      (t._hb_font_get_v_extents = e.hb_font_get_v_extents),
      (t._hb_font_get_glyph = e.hb_font_get_glyph),
      (t._hb_font_get_nominal_glyph = e.hb_font_get_nominal_glyph),
      (t._hb_font_get_variation_glyph = e.hb_font_get_variation_glyph),
      (t._hb_font_get_glyph_h_advance = e.hb_font_get_glyph_h_advance),
      (t._hb_font_get_glyph_v_advance = e.hb_font_get_glyph_v_advance),
      (t._hb_font_get_glyph_h_origin = e.hb_font_get_glyph_h_origin),
      (t._hb_font_get_glyph_v_origin = e.hb_font_get_glyph_v_origin),
      (t._hb_font_get_glyph_extents = e.hb_font_get_glyph_extents),
      (t._hb_font_get_glyph_from_name = e.hb_font_get_glyph_from_name),
      (t._hb_font_draw_glyph_or_fail = e.hb_font_draw_glyph_or_fail),
      (t._hb_font_paint_glyph_or_fail = e.hb_font_paint_glyph_or_fail),
      (t._hb_font_draw_glyph = e.hb_font_draw_glyph),
      (t._hb_font_paint_glyph = e.hb_font_paint_glyph),
      (t._hb_font_glyph_to_string = e.hb_font_glyph_to_string),
      (t._hb_font_create = e.hb_font_create),
      (t._hb_font_set_variations = e.hb_font_set_variations),
      (t._hb_font_create_sub_font = e.hb_font_create_sub_font),
      (t._hb_font_reference = e.hb_font_reference),
      (t._hb_font_destroy = e.hb_font_destroy),
      (t._hb_font_get_face = e.hb_font_get_face),
      (t._hb_font_set_funcs = e.hb_font_set_funcs),
      (t._hb_font_set_scale = e.hb_font_set_scale),
      (t._hb_ot_color_has_palettes = e.hb_ot_color_has_palettes),
      (t._hb_ot_color_palette_get_count = e.hb_ot_color_palette_get_count),
      (t._hb_ot_color_palette_get_name_id = e.hb_ot_color_palette_get_name_id),
      (t._hb_ot_color_palette_color_get_name_id =
        e.hb_ot_color_palette_color_get_name_id),
      (t._hb_ot_color_palette_get_flags = e.hb_ot_color_palette_get_flags),
      (t._hb_ot_color_palette_get_colors = e.hb_ot_color_palette_get_colors),
      (t._hb_ot_color_has_layers = e.hb_ot_color_has_layers),
      (t._hb_ot_color_has_paint = e.hb_ot_color_has_paint),
      (t._hb_ot_color_glyph_has_paint = e.hb_ot_color_glyph_has_paint),
      (t._hb_ot_color_glyph_get_layers = e.hb_ot_color_glyph_get_layers),
      (t._hb_ot_color_has_png = e.hb_ot_color_has_png),
      (t._hb_ot_color_glyph_reference_png = e.hb_ot_color_glyph_reference_png),
      (t._hb_ot_layout_get_glyph_class = e.hb_ot_layout_get_glyph_class),
      (t._hb_ot_layout_get_ligature_carets =
        e.hb_ot_layout_get_ligature_carets),
      (t._hb_ot_layout_table_get_script_tags =
        e.hb_ot_layout_table_get_script_tags),
      (t._hb_ot_layout_table_get_feature_tags =
        e.hb_ot_layout_table_get_feature_tags),
      (t._hb_ot_layout_script_get_language_tags =
        e.hb_ot_layout_script_get_language_tags),
      (t._hb_ot_layout_language_get_feature_tags =
        e.hb_ot_layout_language_get_feature_tags),
      (t._hb_ot_layout_feature_get_lookups =
        e.hb_ot_layout_feature_get_lookups),
      (t._hb_ot_layout_feature_get_name_ids =
        e.hb_ot_layout_feature_get_name_ids),
      (t._hb_ot_metrics_get_position_with_fallback =
        e.hb_ot_metrics_get_position_with_fallback),
      (t._hb_ot_layout_lookup_get_optical_bound =
        e.hb_ot_layout_lookup_get_optical_bound),
      (t._hb_ot_metrics_get_position = e.hb_ot_metrics_get_position),
      (t._hb_ot_metrics_get_variation = e.hb_ot_metrics_get_variation),
      (t._hb_ot_metrics_get_x_variation = e.hb_ot_metrics_get_x_variation),
      (t._hb_ot_metrics_get_y_variation = e.hb_ot_metrics_get_y_variation),
      (t._hb_ot_name_list_names = e.hb_ot_name_list_names),
      (t._hb_ot_name_get_utf16 = e.hb_ot_name_get_utf16),
      (t._hb_set_create = e.hb_set_create),
      (t._hb_set_destroy = e.hb_set_destroy),
      (t._hb_ot_tag_to_script = e.hb_ot_tag_to_script),
      (t._hb_ot_tag_to_language = e.hb_ot_tag_to_language),
      (t._hb_ot_var_get_axis_infos = e.hb_ot_var_get_axis_infos),
      (t._hb_paint_funcs_set_push_transform_func =
        e.hb_paint_funcs_set_push_transform_func),
      (t._hb_paint_funcs_set_pop_transform_func =
        e.hb_paint_funcs_set_pop_transform_func),
      (t._hb_paint_funcs_set_color_glyph_func =
        e.hb_paint_funcs_set_color_glyph_func),
      (t._hb_paint_funcs_set_push_clip_glyph_func =
        e.hb_paint_funcs_set_push_clip_glyph_func),
      (t._hb_paint_funcs_set_push_clip_rectangle_func =
        e.hb_paint_funcs_set_push_clip_rectangle_func),
      (t._hb_paint_funcs_set_pop_clip_func =
        e.hb_paint_funcs_set_pop_clip_func),
      (t._hb_paint_funcs_set_color_func = e.hb_paint_funcs_set_color_func),
      (t._hb_paint_funcs_set_image_func = e.hb_paint_funcs_set_image_func),
      (t._hb_paint_funcs_set_linear_gradient_func =
        e.hb_paint_funcs_set_linear_gradient_func),
      (t._hb_paint_funcs_set_radial_gradient_func =
        e.hb_paint_funcs_set_radial_gradient_func),
      (t._hb_paint_funcs_set_sweep_gradient_func =
        e.hb_paint_funcs_set_sweep_gradient_func),
      (t._hb_paint_funcs_set_push_group_func =
        e.hb_paint_funcs_set_push_group_func),
      (t._hb_paint_funcs_set_pop_group_func =
        e.hb_paint_funcs_set_pop_group_func),
      (t._hb_paint_funcs_set_custom_palette_color_func =
        e.hb_paint_funcs_set_custom_palette_color_func),
      (t._hb_paint_funcs_create = e.hb_paint_funcs_create),
      (t._hb_paint_funcs_destroy = e.hb_paint_funcs_destroy),
      (t._hb_color_line_get_color_stops = e.hb_color_line_get_color_stops),
      (t._hb_color_line_get_extend = e.hb_color_line_get_extend),
      (t._hb_set_get_population = e.hb_set_get_population),
      (t._hb_set_next_many = e.hb_set_next_many),
      (t._hb_shape = e.hb_shape),
      (Ht = e._emscripten_timeout),
      (Rt = e._emscripten_stack_restore),
      (St = e._emscripten_stack_alloc),
      (Ft = e.emscripten_stack_get_current));
  }
  var kt = {
      _abort_js: f_,
      _emscripten_runtime_keepalive_clear: h_,
      _setitimer_js: y_,
      emscripten_resize_heap: T_,
      proc_exit: vt,
    },
    F = await a_();
  function et() {
    if (O > 0) {
      M = et;
      return;
    }
    if ((Kt(), O > 0)) {
      M = et;
      return;
    }
    function e() {
      ((t.calledRun = true),
        !Y && (Jt(), ct?.(t), t.onRuntimeInitialized?.(), Qt()));
    }
    t.setStatus
      ? (t.setStatus("Running..."),
        setTimeout(() => {
          (setTimeout(() => t.setStatus(""), 1), e());
        }, 1))
      : e();
  }
  function gr() {
    if (t.preInit)
      for (
        typeof t.preInit == "function" && (t.preInit = [t.preInit]);
        t.preInit.length > 0;
      )
        t.preInit.shift()();
  }
  return (
    gr(),
    et(),
    ft
      ? (_ = t)
      : (_ = new Promise((e, h) => {
          ((ct = e), (it = h));
        })),
    _
  );
}
var It = Pr;
var n,
  c,
  Ct,
  Ar = new TextDecoder("utf8"),
  vr = new TextEncoder(),
  at = new FinalizationRegistry((s) => {
    s();
  });
function $(s, _) {
  let t = s.ptr;
  at.register(s, () => _(t));
}
function Tr(s) {
  ((n = s),
    (c = n.wasmExports),
    (Ct = n.addFunction((_) => {
      c.free(_);
    }, "vi")));
}
function p(s) {
  return (
    ((s.charCodeAt(0) & 255) << 24) |
    ((s.charCodeAt(1) & 255) << 16) |
    ((s.charCodeAt(2) & 255) << 8) |
    ((s.charCodeAt(3) & 255) << 0)
  );
}
function S(s) {
  return [
    String.fromCharCode((s >> 24) & 255),
    String.fromCharCode((s >> 16) & 255),
    String.fromCharCode((s >> 8) & 255),
    String.fromCharCode((s >> 0) & 255),
  ].join("");
}
function I(s, _) {
  let t;
  return (
    _ == null ? (t = n.HEAPU8.indexOf(0, s)) : (t = s + _),
    Ar.decode(n.HEAPU8.subarray(s, t))
  );
}
function mr(s, _) {
  let t = s / 2 + _;
  return String.fromCharCode(...n.HEAPU16.subarray(s / 2, t));
}
function z(s) {
  let _ = c.malloc(s.length + 1);
  for (let t = 0; t < s.length; ++t) {
    let r = s.charCodeAt(t);
    if (r > 127) throw new Error("Expected ASCII text");
    n.HEAPU8[_ + t] = r;
  }
  return (
    (n.HEAPU8[_ + s.length] = 0),
    {
      ptr: _,
      length: s.length,
      free: function () {
        c.free(_);
      },
    }
  );
}
function Er(s) {
  let _ = c.malloc(s.length);
  return (
    vr.encodeInto(s, n.HEAPU8.subarray(_, _ + s.length)),
    {
      ptr: _,
      length: s.length,
      free: function () {
        c.free(_);
      },
    }
  );
}
function Hr(s) {
  let _ = c.malloc(s.length * 2),
    t = n.HEAPU16.subarray(_ / 2, _ / 2 + s.length);
  for (let r = 0; r < t.length; ++r) t[r] = s.charCodeAt(r);
  return {
    ptr: _,
    length: t.length,
    free: function () {
      c.free(_);
    },
  };
}
function Ot(s) {
  return I(c.hb_language_to_string(s));
}
function Rr(s) {
  let _ = z(s),
    t = c.hb_language_from_string(_.ptr, -1);
  return (_.free(), t);
}
function Sr(s) {
  let _ = c.hb_set_get_population(s),
    t = c.malloc(_ << 2),
    r = t >> 2;
  return (c.hb_set_next_many(s, -1, t, _), n.HEAPU32.subarray(r, r + _));
}
var Q = [void 0],
  Dt = [];
function v(s) {
  if (s === void 0) return 0;
  let _ = Dt.pop() ?? Q.length;
  return ((Q[_] = s), _);
}
function g(s) {
  return Q[s];
}
function N(s) {
  s !== 0 && ((Q[s] = void 0), Dt.push(s));
}
function ot(s) {
  return {
    red: (s >> 8) & 255,
    green: (s >> 16) & 255,
    blue: (s >> 24) & 255,
    alpha: s & 255,
  };
}
function st(s) {
  return ((s.red << 8) | (s.green << 16) | (s.blue << 24) | s.alpha) >>> 0;
}
var Gr = {
    DEFAULT: 0,
    USABLE_WITH_LIGHT_BACKGROUND: 1,
    USABLE_WITH_DARK_BACKGROUND: 2,
  },
  Br = { PAD: 0, REPEAT: 1, REFLECT: 2 },
  Mr = {
    CLEAR: 0,
    SRC: 1,
    DEST: 2,
    SRC_OVER: 3,
    DEST_OVER: 4,
    SRC_IN: 5,
    DEST_IN: 6,
    SRC_OUT: 7,
    DEST_OUT: 8,
    SRC_ATOP: 9,
    DEST_ATOP: 10,
    XOR: 11,
    PLUS: 12,
    SCREEN: 13,
    OVERLAY: 14,
    DARKEN: 15,
    LIGHTEN: 16,
    COLOR_DODGE: 17,
    COLOR_BURN: 18,
    HARD_LIGHT: 19,
    SOFT_LIGHT: 20,
    DIFFERENCE: 21,
    EXCLUSION: 22,
    MULTIPLY: 23,
    HSL_HUE: 24,
    HSL_SATURATION: 25,
    HSL_COLOR: 26,
    HSL_LUMINOSITY: 27,
  },
  Vr = { HIDDEN: 1 },
  Wr = {
    UNSAFE_TO_BREAK: 1,
    UNSAFE_TO_CONCAT: 2,
    SAFE_TO_INSERT_TATWEEL: 4,
    DEFINED: 7,
  },
  wr = class {
    constructor(s) {
      let _ = s instanceof Uint8Array ? s : new Uint8Array(s),
        t = c.malloc(_.byteLength);
      (n.HEAPU8.set(_, t),
        (this.ptr = c.hb_blob_create(t, _.byteLength, 2, t, Ct)),
        $(this, c.hb_blob_destroy));
    }
  },
  w = 65535,
  zr = { UNCLASSIFIED: 0, BASE_GLYPH: 1, LIGATURE: 2, MARK: 3, COMPONENT: 4 },
  Fr = class {
    constructor(s, _ = 0) {
      (typeof s == "number"
        ? (this.ptr = c.hb_face_reference(s))
        : (this.ptr = c.hb_face_create(s.ptr, _)),
        (this.upem = c.hb_face_get_upem(this.ptr)),
        $(this, c.hb_face_destroy));
    }
    referenceTable(s) {
      let _ = c.hb_face_reference_table(this.ptr, p(s)),
        t = c.hb_blob_get_length(_);
      if (!t) return;
      let r = c.hb_blob_get_data(_, 0);
      return n.HEAPU8.subarray(r, r + t);
    }
    getAxisInfos() {
      let s = n.stackSave(),
        _ = n.stackAlloc(2048),
        t = n.stackAlloc(4);
      ((n.HEAPU32[t / 4] = 64), c.hb_ot_var_get_axis_infos(this.ptr, 0, t, _));
      let r = {};
      return (
        Array.from({ length: n.HEAPU32[t / 4] }).forEach((a, o) => {
          let i = {
            axisIndex: n.HEAPU32[_ / 4 + o * 8],
            tag: S(n.HEAPU32[_ / 4 + o * 8 + 1]),
            nameId: n.HEAPU32[_ / 4 + o * 8 + 2],
            flags: n.HEAPU32[_ / 4 + o * 8 + 3],
            min: n.HEAPF32[_ / 4 + o * 8 + 4],
            default: n.HEAPF32[_ / 4 + o * 8 + 5],
            max: n.HEAPF32[_ / 4 + o * 8 + 6],
          };
          r[i.tag] = i;
        }),
        n.stackRestore(s),
        r
      );
    }
    collectUnicodes() {
      let s = c.hb_set_create();
      c.hb_face_collect_unicodes(this.ptr, s);
      let _ = Sr(s);
      return (c.hb_set_destroy(s), _);
    }
    getTableScriptTags(s) {
      let _ = n.stackSave(),
        t = p(s),
        r = 0,
        a = 128,
        o = n.stackAlloc(4),
        i = n.stackAlloc(512),
        u = [];
      for (; a == 128;) {
        ((n.HEAPU32[o / 4] = a),
          c.hb_ot_layout_table_get_script_tags(this.ptr, t, r, o, i),
          (a = n.HEAPU32[o / 4]));
        let f = n.HEAPU32.subarray(i / 4, i / 4 + a);
        (u.push(...Array.from(f).map(S)), (r += a));
      }
      return (n.stackRestore(_), u);
    }
    getTableFeatureTags(s) {
      let _ = n.stackSave(),
        t = p(s),
        r = 0,
        a = 128,
        o = n.stackAlloc(4),
        i = n.stackAlloc(512),
        u = [];
      for (; a == 128;) {
        ((n.HEAPU32[o / 4] = a),
          c.hb_ot_layout_table_get_feature_tags(this.ptr, t, r, o, i),
          (a = n.HEAPU32[o / 4]));
        let f = n.HEAPU32.subarray(i / 4, i / 4 + a);
        (u.push(...Array.from(f).map(S)), (r += a));
      }
      return (n.stackRestore(_), u);
    }
    getScriptLanguageTags(s, _) {
      let t = n.stackSave(),
        r = p(s),
        a = 0,
        o = 128,
        i = n.stackAlloc(4),
        u = n.stackAlloc(512),
        f = [];
      for (; o == 128;) {
        ((n.HEAPU32[i / 4] = o),
          c.hb_ot_layout_script_get_language_tags(this.ptr, r, _, a, i, u),
          (o = n.HEAPU32[i / 4]));
        let l = n.HEAPU32.subarray(u / 4, u / 4 + o);
        (f.push(...Array.from(l).map(S)), (a += o));
      }
      return (n.stackRestore(t), f);
    }
    getLanguageFeatureTags(s, _, t) {
      let r = n.stackSave(),
        a = p(s),
        o = 0,
        i = 128,
        u = n.stackAlloc(4),
        f = n.stackAlloc(512),
        l = [];
      for (; i == 128;) {
        ((n.HEAPU32[u / 4] = i),
          c.hb_ot_layout_language_get_feature_tags(this.ptr, a, _, t, o, u, f),
          (i = n.HEAPU32[u / 4]));
        let b = n.HEAPU32.subarray(f / 4, f / 4 + i);
        (l.push(...Array.from(b).map(S)), (o += i));
      }
      return (n.stackRestore(r), l);
    }
    getFeatureLookups(s, _) {
      let t = n.stackSave(),
        r = p(s),
        a = 0,
        o = 128,
        i = n.stackAlloc(4),
        u = n.stackAlloc(512),
        f = [];
      for (; o == 128;) {
        ((n.HEAPU32[i / 4] = o),
          c.hb_ot_layout_feature_get_lookups(this.ptr, r, _, a, i, u),
          (o = n.HEAPU32[i / 4]));
        let l = n.HEAPU32.subarray(u / 4, u / 4 + o);
        (f.push(...Array.from(l)), (a += o));
      }
      return (n.stackRestore(t), f);
    }
    getGlyphClass(s) {
      return c.hb_ot_layout_get_glyph_class(this.ptr, s);
    }
    listNames() {
      let s = n.stackSave(),
        _ = n.stackAlloc(4),
        t = c.hb_ot_name_list_names(this.ptr, _),
        r = n.HEAPU32[_ / 4],
        a = [];
      for (let o = 0; o < r; o++)
        a.push({
          nameId: n.HEAPU32[t / 4 + o * 3],
          language: Ot(n.HEAPU32[t / 4 + o * 3 + 2]),
        });
      return (n.stackRestore(s), a);
    }
    getName(s, _) {
      let t = n.stackSave(),
        r = Rr(_),
        a = c.hb_ot_name_get_utf16(this.ptr, s, r, 0, 0) + 1,
        o = n.stackAlloc(4),
        i = c.malloc(a * 2);
      ((n.HEAPU32[o / 4] = a), c.hb_ot_name_get_utf16(this.ptr, s, r, o, i));
      let u = mr(i, a - 1);
      return (c.free(i), n.stackRestore(t), u);
    }
    getFeatureNameIds(s, _) {
      let t = n.stackSave(),
        r = p(s),
        a = n.stackAlloc(4),
        o = n.stackAlloc(4),
        i = n.stackAlloc(4),
        u = n.stackAlloc(4),
        f = n.stackAlloc(4),
        l = c.hb_ot_layout_feature_get_name_ids(this.ptr, r, _, a, o, i, u, f),
        b;
      if (l) {
        let d = n.HEAPU32[a / 4],
          T = n.HEAPU32[o / 4],
          m = n.HEAPU32[i / 4],
          R = n.HEAPU32[u / 4],
          L = n.HEAPU32[f / 4];
        ((b = {
          paramUiLabelNameIds: Array.from({ length: R }, (G, C) => L + C),
        }),
          d != w && (b.uiLabelNameId = d),
          T != w && (b.uiTooltipTextNameId = T),
          m != w && (b.sampleTextNameId = m));
      }
      return (n.stackRestore(t), b);
    }
    hasColorPalettes() {
      return !!c.hb_ot_color_has_palettes(this.ptr);
    }
    getColorPalettes() {
      let s = c.hb_ot_color_palette_get_count(this.ptr),
        _ = [],
        t = n.stackSave(),
        r = n.stackAlloc(4),
        a = n.stackAlloc(512);
      for (let o = 0; o < s; o++) {
        let i = [],
          u = 0,
          f = 128;
        for (; f === 128;) {
          ((n.HEAPU32[r / 4] = f),
            c.hb_ot_color_palette_get_colors(this.ptr, o, u, r, a),
            (f = n.HEAPU32[r / 4]));
          for (let d = 0; d < f; d++) {
            let T = ot(n.HEAPU32[a / 4 + d]),
              m = c.hb_ot_color_palette_color_get_name_id(this.ptr, u + d);
            (m != w && (T.nameId = m), i.push(T));
          }
          u += f;
        }
        let l = {
            colors: i,
            flags: c.hb_ot_color_palette_get_flags(this.ptr, o),
          },
          b = c.hb_ot_color_palette_get_name_id(this.ptr, o);
        (b != w && (l.nameId = b), _.push(l));
      }
      return (n.stackRestore(t), _);
    }
    hasColorLayers() {
      return !!c.hb_ot_color_has_layers(this.ptr);
    }
    getGlyphColorLayers(s) {
      let _ = [],
        t = n.stackSave(),
        r = n.stackAlloc(4),
        a = n.stackAlloc(1024),
        o = 0,
        i = 128;
      for (; i === 128;) {
        ((n.HEAPU32[r / 4] = i),
          c.hb_ot_color_glyph_get_layers(this.ptr, s, o, r, a),
          (i = n.HEAPU32[r / 4]));
        for (let u = 0; u < i; u++) {
          let f = a / 4 + u * 2,
            l = { glyph: n.HEAPU32[f] },
            b = n.HEAPU32[f + 1];
          (b != 65535 && (l.colorIndex = b), _.push(l));
        }
        o += i;
      }
      return (n.stackRestore(t), _);
    }
    hasColorPaint() {
      return !!c.hb_ot_color_has_paint(this.ptr);
    }
    glyphHasColorPaint(s) {
      return !!c.hb_ot_color_glyph_has_paint(this.ptr, s);
    }
    hasColorPng() {
      return !!c.hb_ot_color_has_png(this.ptr);
    }
  },
  Lt = class {
    constructor() {
      ((this.funcPtrs = []),
        (this.userDataPtrs = []),
        (this.ptr = c.hb_draw_funcs_create()));
      let s = this.ptr,
        _ = this.funcPtrs,
        t = this.userDataPtrs;
      at.register(this, () => {
        c.hb_draw_funcs_destroy(s);
        for (let r of _) n.removeFunction(r);
        for (let r of t) N(r);
      });
    }
    setMoveToFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u, f, l) => {
        s(u, f, g(o), g(l));
      }, "viiiffi");
      (this.funcPtrs.push(r),
        c.hb_draw_funcs_set_move_to_func(this.ptr, r, t, 0));
    }
    setLineToFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u, f, l) => {
        s(u, f, g(o), g(l));
      }, "viiiffi");
      (this.funcPtrs.push(r),
        c.hb_draw_funcs_set_line_to_func(this.ptr, r, t, 0));
    }
    setQuadraticToFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u, f, l, b, d) => {
        s(u, f, l, b, g(o), g(d));
      }, "viiiffffi");
      (this.funcPtrs.push(r),
        c.hb_draw_funcs_set_quadratic_to_func(this.ptr, r, t, 0));
    }
    setCubicToFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u, f, l, b, d, T, m) => {
        s(u, f, l, b, d, T, g(o), g(m));
      }, "viiiffffffi");
      (this.funcPtrs.push(r),
        c.hb_draw_funcs_set_cubic_to_func(this.ptr, r, t, 0));
    }
    setClosePathFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u) => {
        s(g(o), g(u));
      }, "viiii");
      (this.funcPtrs.push(r),
        c.hb_draw_funcs_set_close_path_func(this.ptr, r, t, 0));
    }
  },
  $r = {
    HORIZONTAL_ASCENDER: p("hasc"),
    HORIZONTAL_DESCENDER: p("hdsc"),
    HORIZONTAL_LINE_GAP: p("hlgp"),
    HORIZONTAL_CLIPPING_ASCENT: p("hcla"),
    HORIZONTAL_CLIPPING_DESCENT: p("hcld"),
    VERTICAL_ASCENDER: p("vasc"),
    VERTICAL_DESCENDER: p("vdsc"),
    VERTICAL_LINE_GAP: p("vlgp"),
    HORIZONTAL_CARET_RISE: p("hcrs"),
    HORIZONTAL_CARET_RUN: p("hcrn"),
    HORIZONTAL_CARET_OFFSET: p("hcof"),
    VERTICAL_CARET_RISE: p("vcrs"),
    VERTICAL_CARET_RUN: p("vcrn"),
    VERTICAL_CARET_OFFSET: p("vcof"),
    X_HEIGHT: p("xhgt"),
    CAP_HEIGHT: p("cpht"),
    SUBSCRIPT_EM_X_SIZE: p("sbxs"),
    SUBSCRIPT_EM_Y_SIZE: p("sbys"),
    SUBSCRIPT_EM_X_OFFSET: p("sbxo"),
    SUBSCRIPT_EM_Y_OFFSET: p("sbyo"),
    SUPERSCRIPT_EM_X_SIZE: p("spxs"),
    SUPERSCRIPT_EM_Y_SIZE: p("spys"),
    SUPERSCRIPT_EM_X_OFFSET: p("spxo"),
    SUPERSCRIPT_EM_Y_OFFSET: p("spyo"),
    STRIKEOUT_SIZE: p("strs"),
    STRIKEOUT_OFFSET: p("stro"),
    UNDERLINE_SIZE: p("unds"),
    UNDERLINE_OFFSET: p("undo"),
  },
  k;
function kr() {
  return (
    k ||
      ((k = new Lt()),
      k.setMoveToFunc((s, _, t) => {
        t.push(`M${s},${_}`);
      }),
      k.setLineToFunc((s, _, t) => {
        t.push(`L${s},${_}`);
      }),
      k.setCubicToFunc((s, _, t, r, a, o, i) => {
        i.push(`C${s},${_} ${t},${r} ${a},${o}`);
      }),
      k.setQuadraticToFunc((s, _, t, r, a) => {
        a.push(`Q${s},${_} ${t},${r}`);
      }),
      k.setClosePathFunc((s) => {
        s.push("Z");
      })),
    k
  );
}
var U;
function Ur() {
  return (
    U ||
      ((U = new Lt()),
      U.setMoveToFunc((s, _, t) => {
        t.push({ type: "M", values: [s, _] });
      }),
      U.setLineToFunc((s, _, t) => {
        t.push({ type: "L", values: [s, _] });
      }),
      U.setCubicToFunc((s, _, t, r, a, o, i) => {
        i.push({ type: "C", values: [s, _, t, r, a, o] });
      }),
      U.setQuadraticToFunc((s, _, t, r, a) => {
        a.push({ type: "Q", values: [s, _, t, r] });
      }),
      U.setClosePathFunc((s) => {
        s.push({ type: "Z", values: [] });
      })),
    U
  );
}
var E = class Nt {
    constructor(_) {
      (typeof _ == "number"
        ? (this.ptr = c.hb_font_reference(_))
        : ((this.ptr = c.hb_font_create(_.ptr)), (this._face = _)),
        $(this, c.hb_font_destroy));
    }
    get face() {
      return (
        this._face || (this._face = new Fr(c.hb_font_get_face(this.ptr))),
        this._face
      );
    }
    subFont() {
      return new Nt(c.hb_font_create_sub_font(this.ptr));
    }
    hExtents() {
      let _ = n.stackSave(),
        t = n.stackAlloc(48);
      c.hb_font_get_h_extents(this.ptr, t);
      let r = {
        ascender: n.HEAP32[t / 4],
        descender: n.HEAP32[t / 4 + 1],
        lineGap: n.HEAP32[t / 4 + 2],
      };
      return (n.stackRestore(_), r);
    }
    vExtents() {
      let _ = n.stackSave(),
        t = n.stackAlloc(48);
      c.hb_font_get_v_extents(this.ptr, t);
      let r = {
        ascender: n.HEAP32[t / 4],
        descender: n.HEAP32[t / 4 + 1],
        lineGap: n.HEAP32[t / 4 + 2],
      };
      return (n.stackRestore(_), r);
    }
    glyphName(_) {
      let t = n.stackSave(),
        r = 256,
        a = n.stackAlloc(r);
      c.hb_font_glyph_to_string(this.ptr, _, a, r);
      let o = I(a);
      return (n.stackRestore(t), o);
    }
    drawGlyph(_, t, r) {
      let a = v(r);
      try {
        c.hb_font_draw_glyph(this.ptr, _, t.ptr, a);
      } finally {
        N(a);
      }
    }
    drawGlyphOrFail(_, t, r) {
      let a = v(r);
      try {
        return !!c.hb_font_draw_glyph_or_fail(this.ptr, _, t.ptr, a);
      } finally {
        N(a);
      }
    }
    paintGlyph(_, t, r, a = 0, o = { red: 0, green: 0, blue: 0, alpha: 255 }) {
      let i = v(r);
      try {
        c.hb_font_paint_glyph(this.ptr, _, t.ptr, i, a, st(o));
      } finally {
        N(i);
      }
    }
    paintGlyphOrFail(
      _,
      t,
      r,
      a = 0,
      o = { red: 0, green: 0, blue: 0, alpha: 255 },
    ) {
      let i = v(r);
      try {
        return !!c.hb_font_paint_glyph_or_fail(this.ptr, _, t.ptr, i, a, st(o));
      } finally {
        N(i);
      }
    }
    getGlyphColorPng(_) {
      let t = c.hb_ot_color_glyph_reference_png(this.ptr, _),
        r = c.hb_blob_get_length(t),
        a;
      if (r) {
        let o = c.hb_blob_get_data(t, 0);
        a = n.HEAPU8.slice(o, o + r);
      }
      return (c.hb_blob_destroy(t), a);
    }
    glyphToPath(_) {
      let t = [];
      return (this.drawGlyph(_, kr(), t), t.join(""));
    }
    glyphHAdvance(_) {
      return c.hb_font_get_glyph_h_advance(this.ptr, _);
    }
    glyphVAdvance(_) {
      return c.hb_font_get_glyph_v_advance(this.ptr, _);
    }
    glyphHOrigin(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(4),
        a = n.stackAlloc(4),
        o;
      return (
        c.hb_font_get_glyph_h_origin(this.ptr, _, r, a) &&
          (o = [n.HEAP32[r / 4], n.HEAP32[a / 4]]),
        n.stackRestore(t),
        o
      );
    }
    glyphVOrigin(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(4),
        a = n.stackAlloc(4),
        o;
      return (
        c.hb_font_get_glyph_v_origin(this.ptr, _, r, a) &&
          (o = [n.HEAP32[r / 4], n.HEAP32[a / 4]]),
        n.stackRestore(t),
        o
      );
    }
    glyphExtents(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(16),
        a;
      return (
        c.hb_font_get_glyph_extents(this.ptr, _, r) &&
          (a = {
            xBearing: n.HEAP32[r / 4],
            yBearing: n.HEAP32[r / 4 + 1],
            width: n.HEAP32[r / 4 + 2],
            height: n.HEAP32[r / 4 + 3],
          }),
        n.stackRestore(t),
        a
      );
    }
    glyph(_, t = 0) {
      let r = n.stackSave(),
        a = n.stackAlloc(4),
        o;
      return (
        c.hb_font_get_glyph(this.ptr, _, t, a) && (o = n.HEAPU32[a / 4]),
        n.stackRestore(r),
        o
      );
    }
    nominalGlyph(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(4),
        a;
      return (
        c.hb_font_get_nominal_glyph(this.ptr, _, r) && (a = n.HEAPU32[r / 4]),
        n.stackRestore(t),
        a
      );
    }
    variationGlyph(_, t) {
      let r = n.stackSave(),
        a = n.stackAlloc(4),
        o;
      return (
        c.hb_font_get_variation_glyph(this.ptr, _, t, a) &&
          (o = n.HEAPU32[a / 4]),
        n.stackRestore(r),
        o
      );
    }
    glyphFromName(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(4),
        a = Er(_),
        o;
      return (
        c.hb_font_get_glyph_from_name(this.ptr, a.ptr, a.length, r) &&
          (o = n.HEAPU32[r / 4]),
        a.free(),
        n.stackRestore(t),
        o
      );
    }
    glyphToJson(_) {
      let t = [];
      return (this.drawGlyph(_, Ur(), t), t);
    }
    setScale(_, t) {
      c.hb_font_set_scale(this.ptr, _, t);
    }
    setVariations(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(8 * _.length);
      (_.forEach((a, o) => {
        a.writeTo(r + o * 8);
      }),
        c.hb_font_set_variations(this.ptr, r, _.length),
        n.stackRestore(t));
    }
    setFuncs(_) {
      c.hb_font_set_funcs(this.ptr, _.ptr);
    }
    getLookupOpticalBound(_, t, r) {
      return c.hb_ot_layout_lookup_get_optical_bound(this.ptr, _, t, r);
    }
    getLigatureCarets(_, t) {
      let r = n.stackSave(),
        a = 0,
        o = 128,
        i = n.stackAlloc(4),
        u = n.stackAlloc(512),
        f = [];
      for (; o == 128;) {
        ((n.HEAPU32[i / 4] = o),
          c.hb_ot_layout_get_ligature_carets(this.ptr, _, t, a, i, u),
          (o = n.HEAPU32[i / 4]));
        let l = n.HEAP32.subarray(u / 4, u / 4 + o);
        (f.push(...Array.from(l)), (a += o));
      }
      return (n.stackRestore(r), f);
    }
    getMetricPosition(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(4),
        a;
      return (
        c.hb_ot_metrics_get_position(this.ptr, _, r) && (a = n.HEAP32[r / 4]),
        n.stackRestore(t),
        a
      );
    }
    getMetricPositionWithFallback(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(4);
      c.hb_ot_metrics_get_position_with_fallback(this.ptr, _, r);
      let a = n.HEAP32[r / 4];
      return (n.stackRestore(t), a);
    }
    getMetricVariation(_) {
      return c.hb_ot_metrics_get_variation(this.ptr, _);
    }
    getMetricXVariation(_) {
      return c.hb_ot_metrics_get_x_variation(this.ptr, _);
    }
    getMetricYVariation(_) {
      return c.hb_ot_metrics_get_y_variation(this.ptr, _);
    }
  },
  Yr = class {
    constructor() {
      ((this.ptr = c.hb_font_funcs_create()), $(this, c.hb_font_funcs_destroy));
    }
    setGlyphExtentsFunc(s) {
      let _ = n.addFunction((t, r, a, o, i) => {
        let u = s(new E(t), a);
        return u
          ? ((n.HEAP32[o / 4] = u.xBearing),
            (n.HEAP32[o / 4 + 1] = u.yBearing),
            (n.HEAP32[o / 4 + 2] = u.width),
            (n.HEAP32[o / 4 + 3] = u.height),
            1)
          : 0;
      }, "ippipp");
      c.hb_font_funcs_set_glyph_extents_func(this.ptr, _, 0, 0);
    }
    setGlyphFromNameFunc(s) {
      let _ = n.addFunction((t, r, a, o, i, u) => {
        let f = s(new E(t), I(a, o));
        return f ? ((n.HEAPU32[i / 4] = f), 1) : 0;
      }, "ipppipp");
      c.hb_font_funcs_set_glyph_from_name_func(this.ptr, _, 0, 0);
    }
    setGlyphHAdvanceFunc(s) {
      let _ = n.addFunction((t, r, a, o) => s(new E(t), a), "ippip");
      c.hb_font_funcs_set_glyph_h_advance_func(this.ptr, _, 0, 0);
    }
    setGlyphVAdvanceFunc(s) {
      let _ = n.addFunction((t, r, a, o) => s(new E(t), a), "ippip");
      c.hb_font_funcs_set_glyph_v_advance_func(this.ptr, _, 0, 0);
    }
    setGlyphHOriginFunc(s) {
      let _ = n.addFunction((t, r, a, o, i, u) => {
        let f = s(new E(t), a);
        return f ? ((n.HEAP32[o / 4] = f[0]), (n.HEAP32[i / 4] = f[1]), 1) : 0;
      }, "ippippp");
      c.hb_font_funcs_set_glyph_h_origin_func(this.ptr, _, 0, 0);
    }
    setGlyphVOriginFunc(s) {
      let _ = n.addFunction((t, r, a, o, i, u) => {
        let f = s(new E(t), a);
        return f ? ((n.HEAP32[o / 4] = f[0]), (n.HEAP32[i / 4] = f[1]), 1) : 0;
      }, "ippippp");
      c.hb_font_funcs_set_glyph_v_origin_func(this.ptr, _, 0, 0);
    }
    setGlyphHKerningFunc(s) {
      let _ = n.addFunction((t, r, a, o, i) => s(new E(t), a, o), "ippiip");
      c.hb_font_funcs_set_glyph_h_kerning_func(this.ptr, _, 0, 0);
    }
    setGlyphNameFunc(s) {
      let _ = new TextEncoder(),
        t = n.addFunction((r, a, o, i, u, f) => {
          let l = s(new E(r), o);
          return l ? (_.encodeInto(l, n.HEAPU8.subarray(i, i + u)), 1) : 0;
        }, "ippipip");
      c.hb_font_funcs_set_glyph_name_func(this.ptr, t, 0, 0);
    }
    setNominalGlyphFunc(s) {
      let _ = n.addFunction((t, r, a, o, i) => {
        let u = s(new E(t), a);
        return u ? ((n.HEAPU32[o / 4] = u), 1) : 0;
      }, "ippipp");
      c.hb_font_funcs_set_nominal_glyph_func(this.ptr, _, 0, 0);
    }
    setVariationGlyphFunc(s) {
      let _ = n.addFunction((t, r, a, o, i, u) => {
        let f = s(new E(t), a, o);
        return f ? ((n.HEAPU32[i / 4] = f), 1) : 0;
      }, "ippiipp");
      c.hb_font_funcs_set_variation_glyph_func(this.ptr, _, 0, 0);
    }
    setFontHExtentsFunc(s) {
      let _ = n.addFunction((t, r, a, o) => {
        let i = s(new E(t));
        return i
          ? ((n.HEAP32[a / 4] = i.ascender),
            (n.HEAP32[a / 4 + 1] = i.descender),
            (n.HEAP32[a / 4 + 2] = i.lineGap),
            1)
          : 0;
      }, "ipppp");
      c.hb_font_funcs_set_font_h_extents_func(this.ptr, _, 0, 0);
    }
    setFontVExtentsFunc(s) {
      let _ = n.addFunction((t, r, a, o) => {
        let i = s(new E(t));
        return i
          ? ((n.HEAP32[a / 4] = i.ascender),
            (n.HEAP32[a / 4 + 1] = i.descender),
            (n.HEAP32[a / 4 + 2] = i.lineGap),
            1)
          : 0;
      }, "ipppp");
      c.hb_font_funcs_set_font_v_extents_func(this.ptr, _, 0, 0);
    }
  };
function rt(s) {
  let _ = c.hb_color_line_get_extend(s),
    t = [],
    r = n.stackSave(),
    a = n.stackAlloc(4),
    o = n.stackAlloc(1536),
    i = 0,
    u = 128;
  for (; u === 128;) {
    ((n.HEAPU32[a / 4] = u),
      c.hb_color_line_get_color_stops(s, i, a, o),
      (u = n.HEAPU32[a / 4]));
    for (let f = 0; f < u; f++) {
      let l = (o + f * 12) / 4;
      t.push({
        offset: n.HEAPF32[l],
        isForeground: n.HEAPU32[l + 1] !== 0,
        color: ot(n.HEAPU32[l + 2]),
      });
    }
    i += u;
  }
  return (n.stackRestore(r), { extend: _, colorStops: t });
}
var Zr = class {
    constructor() {
      ((this.funcPtrs = []),
        (this.userDataPtrs = []),
        (this.ptr = c.hb_paint_funcs_create()));
      let s = this.ptr,
        _ = this.funcPtrs,
        t = this.userDataPtrs;
      at.register(this, () => {
        c.hb_paint_funcs_destroy(s);
        for (let r of _) n.removeFunction(r);
        for (let r of t) N(r);
      });
    }
    setPushTransformFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f, l, b, d, T) => s(i, u, f, l, b, d, g(o), g(T)),
        "viiffffffi",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_push_transform_func(this.ptr, r, t, 0));
    }
    setPopTransformFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i) => s(g(o), g(i)), "viii");
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_pop_transform_func(this.ptr, r, t, 0));
    }
    setColorGlyphFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f) => (s(i, new E(u), g(o), g(f)) ? 1 : 0),
        "iiiiii",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_color_glyph_func(this.ptr, r, t, 0));
    }
    setPushClipGlyphFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f) => s(i, new E(u), g(o), g(f)),
        "viiiii",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_push_clip_glyph_func(this.ptr, r, t, 0));
    }
    setPushClipRectangleFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f, l, b) => s(i, u, f, l, g(o), g(b)),
        "viiffffi",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_push_clip_rectangle_func(this.ptr, r, t, 0));
    }
    setPopClipFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i) => s(g(o), g(i)), "viii");
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_pop_clip_func(this.ptr, r, t, 0));
    }
    setColorFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f) => s(i !== 0, ot(u), g(o), g(f)),
        "viiiii",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_color_func(this.ptr, r, t, 0));
    }
    setImageFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u, f, l, b, d, T) => {
        let m = c.hb_blob_get_length(i),
          R = c.hb_blob_get_data(i, 0),
          L = n.HEAPU8.subarray(R, R + m),
          G;
        return (
          d &&
            (G = {
              xBearing: n.HEAP32[d / 4],
              yBearing: n.HEAP32[d / 4 + 1],
              width: n.HEAP32[d / 4 + 2],
              height: n.HEAP32[d / 4 + 3],
            }),
          s(L, u, f, S(l), G, g(o), g(T)) ? 1 : 0
        );
      }, "iiiiiiifii");
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_image_func(this.ptr, r, t, 0));
    }
    setLinearGradientFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f, l, b, d, T, m) =>
          s(rt(i), u, f, l, b, d, T, g(o), g(m)),
        "viiiffffffi",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_linear_gradient_func(this.ptr, r, t, 0));
    }
    setRadialGradientFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f, l, b, d, T, m) =>
          s(rt(i), u, f, l, b, d, T, g(o), g(m)),
        "viiiffffffi",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_radial_gradient_func(this.ptr, r, t, 0));
    }
    setSweepGradientFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction(
        (a, o, i, u, f, l, b, d) => s(rt(i), u, f, l, b, g(o), g(d)),
        "viiiffffi",
      );
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_sweep_gradient_func(this.ptr, r, t, 0));
    }
    setPushGroupFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i) => s(g(o), g(i)), "viii");
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_push_group_func(this.ptr, r, t, 0));
    }
    setPopGroupFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u) => s(i, g(o), g(u)), "viiii");
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_pop_group_func(this.ptr, r, t, 0));
    }
    setCustomPaletteColorFunc(s, _) {
      let t = v(_);
      this.userDataPtrs.push(t);
      let r = n.addFunction((a, o, i, u, f) => {
        let l = s(i, g(o), g(f));
        return l !== void 0 ? ((n.HEAPU32[u / 4] = st(l)), 1) : 0;
      }, "iiiiii");
      (this.funcPtrs.push(r),
        c.hb_paint_funcs_set_custom_palette_color_func(this.ptr, r, t, 0));
    }
  },
  Ir = { INVALID: 0, UNICODE: 1, GLYPHS: 2 },
  Cr = {
    DEFAULT: 0,
    NO_CLUSTERS: 1,
    NO_POSITIONS: 2,
    NO_GLYPH_NAMES: 4,
    GLYPH_EXTENTS: 8,
    GLYPH_FLAGS: 16,
    NO_ADVANCES: 32,
    DEFINED: 63,
  },
  Xr = {
    DEFAULT: 0,
    BOT: 1,
    EOT: 2,
    PRESERVE_DEFAULT_IGNORABLES: 4,
    REMOVE_DEFAULT_IGNORABLES: 8,
    DO_NOT_INSERT_DOTTED_CIRCLE: 16,
    VERIFY: 32,
    PRODUCE_UNSAFE_TO_CONCAT: 64,
    PRODUCE_SAFE_TO_INSERT_TATWEEL: 128,
    DEFINED: 255,
  },
  jr = { INVALID: 0, LTR: 4, RTL: 5, TTB: 6, BTT: 7 },
  Kr = {
    MONOTONE_GRAPHEMES: 0,
    MONOTONE_CHARACTERS: 1,
    CHARACTERS: 2,
    GRAPHEMES: 3,
    DEFAULT: 0,
  },
  Gt = { INVALID: 0, TEXT: p("TEXT"), JSON: p("JSON") },
  Jr = class Bt {
    constructor(_) {
      (_ != null
        ? (this.ptr = c.hb_buffer_reference(_))
        : (this.ptr = c.hb_buffer_create()),
        $(this, c.hb_buffer_destroy));
    }
    add(_, t) {
      c.hb_buffer_add(this.ptr, _, t);
    }
    addText(_, t = 0, r) {
      let a = Hr(_);
      (c.hb_buffer_add_utf16(this.ptr, a.ptr, a.length, t, r ?? a.length),
        a.free());
    }
    addCodePoints(_, t = 0, r) {
      let a = c.malloc(_.length * 4);
      (n.HEAPU32.subarray(a / 4, a / 4 + _.length).set(_),
        c.hb_buffer_add_codepoints(this.ptr, a, _.length, t, r ?? _.length),
        c.free(a));
    }
    guessSegmentProperties() {
      c.hb_buffer_guess_segment_properties(this.ptr);
    }
    setDirection(_) {
      c.hb_buffer_set_direction(this.ptr, _);
    }
    setFlags(_) {
      c.hb_buffer_set_flags(this.ptr, _);
    }
    setLanguage(_) {
      let t = z(_);
      (c.hb_buffer_set_language(this.ptr, c.hb_language_from_string(t.ptr, -1)),
        t.free());
    }
    setScript(_) {
      let t = z(_);
      (c.hb_buffer_set_script(this.ptr, c.hb_script_from_string(t.ptr, -1)),
        t.free());
    }
    setClusterLevel(_) {
      c.hb_buffer_set_cluster_level(this.ptr, _);
    }
    reset() {
      c.hb_buffer_reset(this.ptr);
    }
    clearContents() {
      c.hb_buffer_clear_contents(this.ptr);
    }
    setMessageFunc(_) {
      let t = (a, o, i, u) => {
          let f = I(i);
          return _(new Bt(a), new E(o), f) ? 1 : 0;
        },
        r = n.addFunction(t, "iiiii");
      c.hb_buffer_set_message_func(this.ptr, r, 0, 0);
    }
    getLength() {
      return c.hb_buffer_get_length(this.ptr);
    }
    getGlyphInfos() {
      let _ = c.hb_buffer_get_glyph_infos(this.ptr, 0),
        t = n.HEAPU32.subarray(_ / 4, _ / 4 + this.getLength() * 5),
        r = [];
      for (let a = 0; a < t.length; a += 5)
        r.push({
          codepoint: t[a],
          cluster: t[a + 2],
          flags: c.hb_glyph_info_get_glyph_flags(_ + a * 4),
        });
      return r;
    }
    getGlyphPositions() {
      let _ = c.hb_buffer_get_glyph_positions(this.ptr, 0) / 4;
      if (_ == 0) return [];
      let t = n.HEAP32.subarray(_, _ + this.getLength() * 5),
        r = [];
      for (let a = 0; a < t.length; a += 5)
        r.push({
          xAdvance: t[a],
          yAdvance: t[a + 1],
          xOffset: t[a + 2],
          yOffset: t[a + 3],
        });
      return r;
    }
    getGlyphInfosAndPositions() {
      let _ = c.hb_buffer_get_glyph_infos(this.ptr, 0),
        t = n.HEAPU32.subarray(_ / 4, _ / 4 + this.getLength() * 5),
        r = c.hb_buffer_get_glyph_positions(this.ptr, 0) / 4,
        a = r ? n.HEAP32.subarray(r, r + this.getLength() * 5) : void 0,
        o = [];
      for (let i = 0; i < t.length; i += 5) {
        let u = {
          codepoint: t[i],
          cluster: t[i + 2],
          flags: c.hb_glyph_info_get_glyph_flags(_ + i * 4),
        };
        for (let [f, l] of [
          ["mask", 1],
          ["var1", 3],
          ["var2", 4],
        ])
          Object.defineProperty(u, f, { value: t[i + l], enumerable: false });
        (a &&
          ((u.xAdvance = a[i]),
          (u.yAdvance = a[i + 1]),
          (u.xOffset = a[i + 2]),
          (u.yOffset = a[i + 3]),
          Object.defineProperty(u, "var", {
            value: a[i + 4],
            enumerable: false,
          })),
          o.push(u));
      }
      return o;
    }
    updateGlyphPositions(_) {
      let t = c.hb_buffer_get_glyph_positions(this.ptr, 0) / 4;
      if (t == 0) return;
      let r = Math.min(_.length, this.getLength()),
        a = n.HEAP32.subarray(t, t + r * 5);
      for (let o = 0; o < r; o++)
        ((a[o * 5] = _[o].xAdvance),
          (a[o * 5 + 1] = _[o].yAdvance),
          (a[o * 5 + 2] = _[o].xOffset),
          (a[o * 5 + 3] = _[o].yOffset));
    }
    serialize(_ = {}) {
      let {
          font: t,
          start: r = 0,
          end: a,
          format: o = Gt.TEXT,
          flags: i = 0,
        } = _,
        u = n.stackSave(),
        f = a ?? this.getLength(),
        l = 32 * 1024,
        b = c.malloc(l),
        d = n.stackAlloc(4),
        T = "";
      for (; r < f;) {
        r += c.hb_buffer_serialize(
          this.ptr,
          r,
          f,
          b,
          l,
          d,
          t ? t.ptr : 0,
          o,
          i,
        );
        let m = n.HEAPU32[d / 4];
        if (m == 0) break;
        T += I(b, m);
      }
      return (c.free(b), n.stackRestore(u), T);
    }
    getContentType() {
      return c.hb_buffer_get_content_type(this.ptr);
    }
  },
  Qr = class J {
    static {
      this.GLOBAL_START = 0;
    }
    static {
      this.GLOBAL_END = 4294967295;
    }
    constructor(_, t = 1, r = J.GLOBAL_START, a = J.GLOBAL_END) {
      ((this.tag = _), (this.value = t), (this.start = r), (this.end = a));
    }
    static fromString(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(16),
        a = z(_),
        o;
      return (
        c.hb_feature_from_string(a.ptr, -1, r) &&
          (o = new J(
            S(n.HEAPU32[r / 4]),
            n.HEAPU32[r / 4 + 1],
            n.HEAPU32[r / 4 + 2],
            n.HEAPU32[r / 4 + 3],
          )),
        a.free(),
        n.stackRestore(t),
        o
      );
    }
    toString() {
      let _ = n.stackSave(),
        t = n.stackAlloc(16);
      this.writeTo(t);
      let r = 128,
        a = n.stackAlloc(r);
      c.hb_feature_to_string(t, a, r);
      let o = I(a);
      return (n.stackRestore(_), o);
    }
    writeTo(_) {
      ((n.HEAPU32[_ / 4] = p(this.tag)),
        (n.HEAPU32[_ / 4 + 1] = this.value),
        (n.HEAPU32[_ / 4 + 2] = this.start),
        (n.HEAPU32[_ / 4 + 3] = this.end));
    }
  },
  qr = class Mt {
    constructor(_, t = 0) {
      ((this.tag = _), (this.value = t));
    }
    static fromString(_) {
      let t = n.stackSave(),
        r = n.stackAlloc(8),
        a = z(_),
        o;
      return (
        c.hb_variation_from_string(a.ptr, -1, r) &&
          (o = new Mt(S(n.HEAPU32[r / 4]), n.HEAPF32[r / 4 + 1])),
        a.free(),
        n.stackRestore(t),
        o
      );
    }
    toString() {
      let _ = n.stackSave(),
        t = n.stackAlloc(8);
      this.writeTo(t);
      let r = 128,
        a = n.stackAlloc(r);
      c.hb_variation_to_string(t, a, r);
      let o = I(a);
      return (n.stackRestore(_), o);
    }
    writeTo(_) {
      ((n.HEAPU32[_ / 4] = p(this.tag)), (n.HEAPF32[_ / 4 + 1] = this.value));
    }
  },
  K = { DONT_STOP: 0, GSUB: 1, GPOS: 2 };
function Or(s, _, t) {
  let r = t?.length ?? 0,
    a = n.stackSave(),
    o = 0;
  (r &&
    ((o = n.stackAlloc(16 * r)),
    t.forEach((i, u) => {
      i.writeTo(o + u * 16);
    })),
    c.hb_shape(s.ptr, _.ptr, o, r),
    n.stackRestore(a));
}
function xr(s, _, t, r, a) {
  let o = [],
    i = K.DONT_STOP,
    u = false;
  return (
    _.setMessageFunc((f, l, b) => {
      if (
        (b.startsWith("start table GSUB")
          ? (i = K.GSUB)
          : b.startsWith("start table GPOS") && (i = K.GPOS),
        i != a && (u = false),
        a != K.DONT_STOP &&
          i == a &&
          b.startsWith("end lookup " + r) &&
          (u = true),
        u)
      )
        return false;
      let d = f.serialize({
        font: l,
        format: Gt.JSON,
        flags: Cr.NO_GLYPH_NAMES,
      });
      return (
        o.push({
          m: b,
          t: JSON.parse(d),
          glyphs: f.getContentType() == Ir.GLYPHS,
        }),
        true
      );
    }),
    Or(s, _, t),
    o
  );
}
function ts() {
  let s = n.stackSave(),
    _ = n.stackAlloc(12);
  c.hb_version(_, _ + 4, _ + 8);
  let t = {
    major: n.HEAPU32[_ / 4],
    minor: n.HEAPU32[(_ + 4) / 4],
    micro: n.HEAPU32[(_ + 8) / 4],
  };
  return (n.stackRestore(s), t);
}
function _s() {
  return I(c.hb_version_string());
}
function es(s) {
  let _ = p(s);
  return S(c.hb_ot_tag_to_script(_));
}
function ns(s) {
  let _ = p(s);
  return Ot(c.hb_ot_tag_to_language(_));
}
Tr(await It());
export {
  Vr as AxisFlags,
  wr as Blob,
  Jr as Buffer,
  Ir as BufferContentType,
  Xr as BufferFlag,
  Cr as BufferSerializeFlag,
  Gt as BufferSerializeFormat,
  Kr as ClusterLevel,
  Gr as ColorPaletteFlags,
  jr as Direction,
  Lt as DrawFuncs,
  Fr as Face,
  Qr as Feature,
  E as Font,
  Yr as FontFuncs,
  zr as GlyphClass,
  Wr as GlyphFlag,
  $r as MetricsTag,
  Mr as PaintCompositeMode,
  Br as PaintExtend,
  Zr as PaintFuncs,
  K as TracePhase,
  qr as Variation,
  ns as otTagToLanguage,
  es as otTagToScript,
  Or as shape,
  xr as shapeWithTrace,
  ts as version,
  _s as versionString,
};
