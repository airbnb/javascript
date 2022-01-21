import type { Linter } from "eslint";

export const hooks: Linter.RulesRecord = {
  /**
   * Enforce the "Rules of Hooks"
   * https://reactjs.org/docs/hooks-rules.html
   */
  "react-hooks/rules-of-hooks": "error",

  /**
   * Enforce that everything referenced in the body of a hook is present
   * in its dependencies array
   */
  "react-hooks/exhaustive-deps": "warn",
};
