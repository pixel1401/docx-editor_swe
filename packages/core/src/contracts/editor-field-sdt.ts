/** Commands for CoreIT field content controls. @public */
export interface EditorFieldSdtCommands {
  /**
   * Insert one locked inline field content control at the current selection.
   *
   * The command always writes `w:sdt`. It sets `w:tag` to
   * `docx-field:<fieldId>`. It uses `text` as the alias and content. It sets
   * `w:lock` to `contentLocked`.
   */
  insertFieldSdt: { fieldId: string | number; text: string };
}
