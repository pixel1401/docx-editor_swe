var t = class extends Error {
  name = "EditorFontError";
  code;
  request;
  diagnostic;
  constructor(r, o, e = {}) {
    (super(o, { cause: e.cause }),
      (this.code = r),
      (this.request = e.request),
      (this.diagnostic = e.diagnostic));
  }
};
export { t as a };
