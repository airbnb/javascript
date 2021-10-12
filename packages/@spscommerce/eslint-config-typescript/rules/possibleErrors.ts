// eslint-disable-next-line import/no-unresolved
import type { PossibleErrors } from "eslint/rules/possible-errors";

// ✅ = recommended, 🔧 = fixable
export const possibleErrors: PossibleErrors = {
  /**
   * enforce “for” loop update clause moving the counter in the right direction ✅
   * https://eslint.org/docs/rules/for-direction
   */
  "for-direction": "error",

  /**
   * enforce `return` statements in getters ✅
   * https://eslint.org/docs/rules/getter-return
   * Off because getters and setters are forbidden
   */
  "getter-return": "off",

  /**
   * disallow using an async function as a Promise executor ✅
   * https://eslint.org/docs/rules/no-async-promise-executor
   */
  "no-async-promise-executor": "error",

  /**
   * disallow await inside of loops
   * https://eslint.org/docs/rules/no-await-in-loop
   */
  "no-await-in-loop": "error",

  /**
   * disallow comparisons to negative zero ✅
   * https://eslint.org/docs/rules/no-compare-neg-zero
   */
  "no-compare-neg-zero": "error",

  /**
   * disallow assignment in conditional expressions ✅
   * https://eslint.org/docs/rules/no-cond-assign
   * 'always' bans all such assignments rather than just "ambiguous" ones
   */
  "no-cond-assign": ["error", "always"],

  /**
   * disallow use of console
   * https://eslint.org/docs/rules/no-console
   */
  "no-console": "warn",

  /**
   * disallow use of constant expressions in conditions ✅
   * https://eslint.org/docs/rules/no-constant-condition
   */
  "no-constant-condition": "warn",

  /**
   * disallow control characters in regular expressions ✅
   * https://eslint.org/docs/rules/no-control-regex
   */
  "no-control-regex": "error",

  /**
   * disallow use of debugger ✅
   * https://eslint.org/docs/rules/no-debugger
   */
  "no-debugger": "error",

  /**
   * disallow duplicate arguments in functions ✅
   * https://eslint.org/docs/rules/no-dupe-args
   */
  "no-dupe-args": "error",

  /**
   * Disallow duplicate conditions in if-else-if chains ✅
   * https://eslint.org/docs/rules/no-dupe-else-if
   */
  "no-dupe-else-if": "error",

  /**
   * disallow duplicate keys when creating object literals ✅
   * https://eslint.org/docs/rules/no-dupe-keys
   */
  "no-dupe-keys": "error",

  /**
   * disallow a duplicate case label ✅
   * https://eslint.org/docs/rules/no-duplicate-case
   */
  "no-duplicate-case": "error",

  /**
   * disallow empty statements ✅
   * https://eslint.org/docs/rules/no-empty
   */
  "no-empty": "error",

  /**
   * disallow the use of empty character classes in regular expressions ✅
   * https://eslint.org/docs/rules/no-empty-character-class
   */
  "no-empty-character-class": "error",

  /**
   * disallow assigning to the exception in a catch block ✅
   * https://eslint.org/docs/rules/no-ex-assign
   */
  "no-ex-assign": "error",

  /**
   * disallow double-negation boolean casts in a boolean context ✅ 🔧
   * https://eslint.org/docs/rules/no-extra-boolean-cast
   */
  "no-extra-boolean-cast": "error",

  /**
   * disallow unnecessary parentheses 🔧
   * https://eslint.org/docs/rules/no-extra-parens
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
   */
  "no-extra-parens": "off",
  "@typescript-eslint/no-extra-parens": "off",

  /**
   * disallow unnecessary semicolons ✅ 🔧
   * https://eslint.org/docs/rules/no-extra-semi
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
   */
  "no-extra-semi": "off",
  "@typescript-eslint/no-extra-semi": "error",

  /**
   * disallow overwriting functions written as function declarations ✅
   * https://eslint.org/docs/rules/no-func-assign
   */
  "no-func-assign": "error",

  /**
   * disallow assigning to imported bindings ✅
   * https://eslint.org/docs/rules/no-import-assign
   */
  "no-import-assign": "error",

  /**
   * disallow function or variable declarations in nested blocks ✅
   * https://eslint.org/docs/rules/no-inner-declarations
   */
  "no-inner-declarations": "error",

  /**
   * disallow invalid regular expression strings in the RegExp constructor ✅
   * https://eslint.org/docs/rules/no-invalid-regexp
   */
  "no-invalid-regexp": "error",

  /**
   * disallow irregular whitespace outside of strings and comments ✅
   * https://eslint.org/docs/rules/no-irregular-whitespace
   */
  "no-irregular-whitespace": "error",

  /**
   * disallow literal numbers that lose precision ✅
   * https://eslint.org/docs/rules/no-loss-of-precision
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
   */
  "no-loss-of-precision": "off",
  "@typescript-eslint/no-loss-of-precision": "error",

  /**
   * disallow characters which are made with multiple code points in character class syntax ✅
   * https://eslint.org/docs/rules/no-misleading-character-class
   */
  "no-misleading-character-class": "error",

  /**
   * disallow the use of object properties of the global object (Math and JSON) as functions ✅
   * https://eslint.org/docs/rules/no-obj-calls
   */
  "no-obj-calls": "error",

  /**
   * disallow returning values from Promise executor functions
   * https://eslint.org/docs/rules/no-promise-executor-return
   */
  "no-promise-executor-return": "error",

  /**
   * disallow use of Object.prototypes builtins directly ✅
   * https://eslint.org/docs/rules/no-prototype-builtins
   */
  "no-prototype-builtins": "off",

  /**
   * disallow multiple spaces in a regular expression literal ✅ 🔧
   * https://eslint.org/docs/rules/no-regex-spaces
   */
  "no-regex-spaces": "error",

  /**
   * disallow returning values from setters ✅
   * https://eslint.org/docs/rules/no-setter-return
   * Off because getters and setters are forbidden
   */
  "no-setter-return": "off",

  /**
   * disallow sparse arrays ✅
   * https://eslint.org/docs/rules/no-sparse-arrays
   * only forbids sparse array literals, not `new Array(n)`
   */
  "no-sparse-arrays": "error",

  /**
   * disallow template literal placeholder syntax in regular strings
   * https://eslint.org/docs/rules/no-template-curly-in-string
   */
  "no-template-curly-in-string": "error",

  /**
   * avoid code that looks like two expressions but is actually one ✅
   * https://eslint.org/docs/rules/no-unexpected-multiline
   */
  "no-unexpected-multiline": "error",

  /**
   * disallow unreachable statements after a return, throw, continue, or break statement ✅
   * https://eslint.org/docs/rules/no-unreachable
   */
  "no-unreachable": "error",

  /**
   * disallow loops with a body that allows only one iteration
   * https://eslint.org/docs/rules/no-unreachable-loop
   */
  "no-unreachable-loop": "error",

  /**
   * disallow return/throw/break/continue inside finally blocks ✅
   * https://eslint.org/docs/rules/no-unsafe-finally
   */
  "no-unsafe-finally": "error",

  /**
   * disallow negating the left operand of relational operators ✅
   * https://eslint.org/docs/rules/no-unsafe-negation
   */
  "no-unsafe-negation": "error",

  /**
   * disallow use of optional chaining in contexts where the undefined value is not allowed ✅
   * https://eslint.org/docs/rules/no-unsafe-optional-chaining
   */
  "no-unsafe-optional-chaining": "error",

  /**
   * Disallow useless backreferences in regular expressions ✅
   * https://eslint.org/docs/rules/no-useless-backreference
   */
  "no-useless-backreference": "off",

  /**
   * Disallow assignments that can lead to race conditions due to usage of await or yield
   * https://eslint.org/docs/rules/require-atomic-updates
   */
  "require-atomic-updates": "error",

  /**
   * disallow comparisons with the value NaN ✅
   * https://eslint.org/docs/rules/use-isnan
   */
  "use-isnan": "error",

  /**
   * ensure that the results of typeof are compared against a valid string ✅
   * https://eslint.org/docs/rules/valid-typeof
   */
  "valid-typeof": ["error", { requireStringLiterals: true }],
};
