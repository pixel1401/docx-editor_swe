function n() {
  let e = globalThis.process;
  if (typeof e?.getBuiltinModule == "function")
    return e.getBuiltinModule("module");
}
function u(e) {
  let i = n();
  if (!i)
    throw new Error(
      "createRequire is unavailable: this build reaches Node's `module` through process.getBuiltinModule, which needs Node 20.16+ or 22.3+.",
    );
  return i.createRequire(e);
}
export { u as createRequire };
