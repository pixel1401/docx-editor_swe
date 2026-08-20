var r = null,
  n = null;
function o(e) {
  try {
    let t = new URL(e);
    return t.username !== "" ||
      t.password !== "" ||
      t.search !== "" ||
      t.hash !== ""
      ? `${t.protocol}//${t.host}${t.pathname}\u2026`
      : e;
  } catch {
    let t = e.search(/[?#]/);
    return t === -1 ? e : `${e.slice(0, t)}\u2026`;
  }
}
function i(e) {
  return e.replace(/[a-z][a-z0-9+.-]*:\/\/[^\s"')]+/gi, (t) => o(t));
}
function d(e) {
  if (e instanceof URL) return e.href;
  let t = globalThis.location?.href;
  try {
    return t ? new URL(e, t).href : e;
  } catch {
    return e;
  }
}
function l(e) {
  if (typeof e != "string" && !(e instanceof URL))
    throw new TypeError(
      `setHarfBuzzWasmUrl: expected a string or URL, received ${typeof e}`,
    );
  if (typeof e == "string" && e.trim() === "")
    throw new TypeError("setHarfBuzzWasmUrl: expected a non-empty URL");
  let t = d(e);
  if (n !== null && n !== t) {
    console.warn(
      `setHarfBuzzWasmUrl: the shaper already read its binary location from ${o(n)}, so this call has no effect in the current session. Move the call before the first editor is created and reload the page.`,
    );
    return;
  }
  (r !== null &&
    r !== t &&
    console.warn(
      `setHarfBuzzWasmUrl: replacing ${o(r)} with ${o(t)}. Two callers are configuring the shaper with different URLs; the later one wins.`,
    ),
    (r = t));
}
function c(e) {
  return ((n = r ?? e), n);
}
function f(e) {
  return e instanceof Error && /process\.getBuiltinModule/.test(e.message);
}
function u(e) {
  return `the text shaper cannot start on this Node version: the ESM build reaches Node builtins through \`process.getBuiltinModule\`, added in Node 20.16 and 22.3. Upgrade Node; \`setHarfBuzzWasmUrl\` does not apply here. (${i(e instanceof Error ? e.message : String(e))})`;
}
function h(e) {
  let t = i(e instanceof Error ? e.message : String(e));
  return `the HarfBuzz WASM binary could not be loaded from ${n === null ? "its bundled location" : o(n)}. If this bundler does not emit \`new URL(..., import.meta.url)\` assets (esbuild, Bun, and library builds that inline dynamic imports), serve \`@docx-editor.dev/core/harfbuzz.wasm\` yourself, point \`setHarfBuzzWasmUrl\` from '@docx-editor.dev/core/layout' at it before creating an editor, and reload the page. (${t})`;
}
function p(e, t) {
  let s = `expected HarfBuzz ${e}, loaded ${t}`;
  return r === null
    ? `${s}. The bundled binary does not match this build of the engine.`
    : `${s}. The copy served at ${o(r)} is from a different version of \`@docx-editor.dev/core\`. Re-copy \`@docx-editor.dev/core/harfbuzz.wasm\` from the installed package into your served assets, and reload the page.`;
}
export { l as a, c as b, f as c, u as d, h as e, p as f };
