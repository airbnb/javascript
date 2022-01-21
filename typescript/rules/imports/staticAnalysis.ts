import type { Linter } from "eslint";

export const staticAnalysis: Linter.RulesRecord = {
  /**
   * Ensure imports point to a file/module that can be resolved.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
   */
  "import/no-unresolved": "error",

  /**
   * Ensure named imports correspond to a named export in the remote file.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
   */
  "import/named": "error",

  /**
   * Ensure a default export is present, given a default import.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
   */
  "import/default": "error",

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
   */
  "import/namespace": "error",

  /**
   * Restrict which files can be imported in a given folder
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
   */
  "import/no-restricted-paths": "error",

  /**
   * Forbid import of modules using absolute paths
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
   */
  "import/no-absolute-path": "error",

  /**
   * Forbid `require()` calls with expressions
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
   */
  "import/no-dynamic-require": "error",

  /**
   * Prevent importing the submodules of other modules
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
   */
  "import/no-internal-modules": "off",

  /**
   * Forbid webpack loader syntax in imports
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
   */
  "import/no-webpack-loader-syntax": "error",

  /**
   * Forbid a module from importing itself
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
   */
  "import/no-self-import": "error",

  /**
   * Forbid a module from importing a module with a dependency path back to itself
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
   */
  "import/no-cycle": "error",

  /**
   * Prevent unnecessary path segments in import and require statements
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
   */
  "import/no-useless-path-segments": "error",

  /**
   * Forbid importing modules from parent directories
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
   */
  "import/no-relative-parent-imports": "off",

  /**
   * Prevent importing packages through relative paths
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
   */
  "import/no-relative-packages": "off",
};
