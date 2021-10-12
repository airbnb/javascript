import type { Linter } from "eslint";

export const helpfulWarnings: Linter.RulesRecord = {
  /**
   * Report any invalid exports, i.e. re-export of the same name
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
   */
  "import/export": "warn",

  /**
   * Report use of exported name as identifier of default export
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
   */
  "import/no-named-as-default": "warn",

  /**
   * Report use of exported name as property of default export
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
   */
  "import/no-named-as-default-member": "warn",

  /**
   * Report imported names marked with `@deprecated` documentation tag
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
   */
  "import/no-deprecated": "warn",

  /**
   * Forbid the use of extraneous packages
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
   */
  "import/no-extraneous-dependencies": "warn",

  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
   */
  "import/no-mutable-exports": "error",

  /**
   * Report modules without exports, or exports without matching import in another module
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
   */
  "import/no-unused-modules": "warn",
};
