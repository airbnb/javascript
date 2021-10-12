import type { Linter } from "eslint";

export const moduleSystems: Linter.RulesRecord = {
  /**
   * Report potentially ambiguous parse goal (`script` vs. `module`)
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
   */
  "import/unambiguous": "error",

  /**
   * Report CommonJS `require` calls and `module.exports` or `exports.*`.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
   */
  "import/no-commonjs": "error",

  /**
   * Report AMD `require` and `define` calls.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
   */
  "import/no-amd": "error",

  /**
   * No Node.js builtin modules.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
   */
  "import/no-nodejs-modules": "error",

  /**
   * Forbid imports with CommonJS exports
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
   */
  "import/no-import-module-exports": "error",
};
