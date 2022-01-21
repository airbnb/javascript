// eslint-disable-next-line import/no-unresolved
import { Linter } from "eslint";
import type { BestPractices } from "eslint/rules/best-practices";

// ✅ = recommended, 🔧 = fixable
export const bestPractices: BestPractices = {
  /**
   * enforces getter/setter pairs in objects
   * https://eslint.org/docs/rules/accessor-pairs
   * Off because getters and setters are forbidden
   */
  "accessor-pairs": "off",

  /**
   * enforces return statements in callbacks of array's methods
   * https://eslint.org/docs/rules/array-callback-return
   */
  "array-callback-return": ["error", { allowImplicit: true }],

  /**
   * treat var statements as if they were block scoped
   * https://eslint.org/docs/rules/block-scoped-var
   * Off because `var` is forbidden
   */
  "block-scoped-var": "off",

  /**
   * specify the maximum cyclomatic complexity allowed in a program
   * https://eslint.org/docs/rules/complexity
   */
  complexity: "off",

  /**
   * enforce that class methods use "this"
   * https://eslint.org/docs/rules/class-methods-use-this
   */
  "class-methods-use-this": "error",

  /**
   * require return statements to either always or never specify values
   * https://eslint.org/docs/rules/consistent-return
   */
  "consistent-return": "off",

  /**
   * specify curly brace conventions for all control statements 🔧
   * https://eslint.org/docs/rules/curly
   */
  curly: ["error", "multi-line"],

  /**
   * require default case in switch statements
   * https://eslint.org/docs/rules/default-case
   */
  "default-case": ["error", { commentPattern: "^no default$" }],

  /**
   * Enforce default clauses in switch statements to be last
   * https://eslint.org/docs/rules/default-case-last
   */
  "default-case-last": "error",

  /**
   * enforce default parameters to be last
   * https://eslint.org/docs/rules/default-param-last
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
   */
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",

  /**
   * enforces consistent newlines before or after dots
   * https://eslint.org/docs/rules/dot-location
   */
  "dot-location": ["error", "property"],

  /**
   * encourages use of dot notation whenever possible 🔧
   * https://eslint.org/docs/rules/dot-notation
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
   */
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

  /**
   * require the use of === and !== 🔧
   * https://eslint.org/docs/rules/eqeqeq
   */
  eqeqeq: "error",

  /**
   * Require grouped accessor pairs in object literals and classes
   * https://eslint.org/docs/rules/grouped-accessor-pairs
   * Off because getters and setters are forbidden
   */
  "grouped-accessor-pairs": "off",

  /**
   * make sure for-in loops have an if statement
   * https://eslint.org/docs/rules/guard-for-in
   * Off because for-in is forbidden
   */
  "guard-for-in": "off",

  /**
   * enforce a maximum number of classes per file
   * https://eslint.org/docs/rules/max-classes-per-file
   */
  "max-classes-per-file": ["error", 1],

  /**
   * disallow the use of alert, confirm, and prompt
   * https://eslint.org/docs/rules/no-alert
   */
  "no-alert": "error",

  /**
   * disallow use of arguments.caller or arguments.callee
   * https://eslint.org/docs/rules/no-caller
   */
  "no-caller": "error",

  /**
   * disallow lexical declarations in case/default clauses ✅
   * https://eslint.org/docs/rules/no-case-declarations
   */
  "no-case-declarations": "error",

  /**
   * Disallow returning value in constructor
   * https://eslint.org/docs/rules/no-constructor-return
   */
  "no-constructor-return": "error",

  /**
   * disallow division operators explicitly at beginning of regular expression 🔧
   * https://eslint.org/docs/rules/no-div-regex
   */
  "no-div-regex": "off",

  /**
   * disallow else after a return in an if 🔧
   * https://eslint.org/docs/rules/no-else-return
   */
  "no-else-return": "off",

  /**
   * disallow empty functions
   * https://eslint.org/docs/rules/no-empty-function
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
   */
  "no-empty-function": "off",
  "@typescript-eslint/no-empty-function": "off",

  /**
   * disallow empty destructuring patterns ✅
   * https://eslint.org/docs/rules/no-empty-pattern
   */
  "no-empty-pattern": "error",

  /**
   * disallow comparisons to null without a type-checking operator
   * https://eslint.org/docs/rules/no-eq-null
   * Off because it's superceded by eqeqeq
   */
  "no-eq-null": "off",

  /**
   * disallow use of eval()
   * https://eslint.org/docs/rules/no-eval
   */
  "no-eval": "error",

  /**
   * disallow adding to native types
   * https://eslint.org/docs/rules/no-extend-native
   */
  "no-extend-native": "error",

  /**
   * disallow unnecessary function binding 🔧
   * https://eslint.org/docs/rules/no-extra-bind
   */
  "no-extra-bind": "error",

  /**
   * disallow Unnecessary Labels 🔧
   * https://eslint.org/docs/rules/no-extra-label
   */
  "no-extra-label": "error",

  /**
   * disallow fallthrough of case statements ✅
   * https://eslint.org/docs/rules/no-fallthrough
   */
  "no-fallthrough": "error",

  /**
   * disallow the use of leading or trailing decimal points in numeric literals 🔧
   * https://eslint.org/docs/rules/no-floating-decimal
   */
  "no-floating-decimal": "error",

  /**
   * disallow reassignments of native objects or read-only globals ✅
   * https://eslint.org/docs/rules/no-global-assign
   */
  "no-global-assign": "error",

  /**
   * disallow implicit type conversions 🔧
   * https://eslint.org/docs/rules/no-implicit-coercion
   */
  "no-implicit-coercion": [
    "error",
    {
      boolean: false,
      number: true,
      string: true,
    },
  ],

  /**
   * disallow var and named functions in global scope
   * https://eslint.org/docs/rules/no-implicit-globals
   * disabled because it can't distinguish between a file with no imports and a browser script
   */
  "no-implicit-globals": "off",

  /**
   * disallow use of eval()-like methods
   * https://eslint.org/docs/rules/no-implied-eval
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
   */
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "error",

  /**
   * disallow this keywords outside of classes or class-like objects
   * https://eslint.org/docs/rules/no-invalid-this
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
   */
  "no-invalid-this": "off",
  "@typescript-eslint/no-invalid-this": "off",

  /**
   * disallow usage of __iterator__ property
   * https://eslint.org/docs/rules/no-iterator
   */
  "no-iterator": "error",

  /**
   * disallow use of labels for anything other than loops and switches
   * https://eslint.org/docs/rules/no-labels
   */
  "no-labels": "error",

  /**
   * disallow unnecessary nested blocks
   * https://eslint.org/docs/rules/no-lone-blocks
   */
  "no-lone-blocks": "error",

  /**
   * disallow creation of functions within loops
   * https://eslint.org/docs/rules/no-loop-func
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
   */
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",

  /**
   * disallow magic numbers
   * https://eslint.org/docs/rules/no-magic-numbers
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
   */
  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": [
    "error",
    {
      ignore: [
        -1,
        0,
        1,
        2,
      ],
      ignoreArrayIndexes: true,
    },
  ],

  /**
   * disallow use of multiple spaces 🔧
   * https://eslint.org/docs/rules/no-multi-spaces
   */
  "no-multi-spaces": "error",

  /**
   * disallow use of multiline strings
   * https://eslint.org/docs/rules/no-multi-str
   */
  "no-multi-str": "error",

  /**
   * disallow use of new operator when not part of the assignment or comparison
   * https://eslint.org/docs/rules/no-new
   */
  "no-new": "error",

  /**
   * disallow use of new operator for Function object
   * https://eslint.org/docs/rules/no-new-func
   */
  "no-new-func": "error",

  /**
   * disallows creating new instances of String, Number, and Boolean
   * https://eslint.org/docs/rules/no-new-wrappers
   */
  "no-new-wrappers": "error",

  /**
   * Disallow \8 and \9 escape sequences in string literals ✅
   * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
   */
  "no-nonoctal-decimal-escape": "error",

  /**
   * disallow use of (old style) octal literals ✅
   * https://eslint.org/docs/rules/no-octal
   */
  "no-octal": "error",

  /**
   * disallow use of octal escape sequences in string literals, such as
   * https://eslint.org/docs/rules/no-octal-escape
   */
  "no-octal-escape": "error",

  /**
   * disallow reassignment of function parameters, and
   * disallow parameter object manipulation except for specific exclusions
   * rule: https://eslint.org/docs/rules/no-param-reassign.html
   */
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", "accumulator",
      ],
    },
  ],

  /**
   * disallow usage of __proto__ property
   * https://eslint.org/docs/rules/no-proto
   */
  "no-proto": "error",

  /**
   * disallow declaring the same variable more than once ✅
   * https://eslint.org/docs/rules/no-redeclare
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
   */
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",

  /**
   * disallow certain object properties
   * https://eslint.org/docs/rules/no-restricted-properties
   */
  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    },
  ],

  /**
   * disallow use of assignment in return statement
   * https://eslint.org/docs/rules/no-return-assign
   */
  "no-return-assign": "error",

  /**
   * disallow redundant `return await`
   * https://eslint.org/docs/rules/no-return-await
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
   */
  "no-return-await": "off",
  "@typescript-eslint/return-await": "error",

  /**
   * disallow use of `javascript:` urls.
   * https://eslint.org/docs/rules/no-script-url
   */
  "no-script-url": "error",

  /**
   * disallow self assignment ✅
   * https://eslint.org/docs/rules/no-self-assign
   */
  "no-self-assign": "error",

  /**
   * disallow comparisons where both sides are exactly the same
   * https://eslint.org/docs/rules/no-self-compare
   */
  "no-self-compare": "error",

  /**
   * disallow use of comma operator
   * https://eslint.org/docs/rules/no-sequences
   */
  "no-sequences": "error",

  /**
   * restrict what can be thrown as an exception
   * https://eslint.org/docs/rules/no-throw-literal
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
   */
  "no-throw-literal": "off",
  "@typescript-eslint/no-throw-literal": "error",

  /**
   * disallow unmodified conditions of loops
   * https://eslint.org/docs/rules/no-unmodified-loop-condition
   */
  "no-unmodified-loop-condition": "off",

  /**
   * disallow usage of expressions in statement position
   * https://eslint.org/docs/rules/no-unused-expressions
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
   */
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": ["error", { allowTaggedTemplates: false }],

  /**
   * disallow unused labels ✅ 🔧
   * https://eslint.org/docs/rules/no-unused-labels
   */
  "no-unused-labels": "error",

  /**
   * disallow unnecessary .call() and .apply()
   * https://eslint.org/docs/rules/no-useless-call
   */
  "no-useless-call": "off",

  /**
   * Disallow unnecessary catch clauses ✅
   * https://eslint.org/docs/rules/no-useless-catch
   */
  "no-useless-catch": "error",

  /**
   * disallow useless string concatenation
   * https://eslint.org/docs/rules/no-useless-concat
   */
  "no-useless-concat": "error",

  /**
   * disallow unnecessary string escaping ✅
   * https://eslint.org/docs/rules/no-useless-escape
   */
  "no-useless-escape": "error",

  /**
   * disallow redundant return; keywords 🔧
   * https://eslint.org/docs/rules/no-useless-return
   */
  "no-useless-return": "error",

  /**
   * disallow use of void operator
   * https://eslint.org/docs/rules/no-void
   * Typing for this rule config seems to be incorrect
   */
  "no-void": ["error", { allowAsStatement: true }] as unknown as Linter.RuleEntry<[]>,

  /**
   * disallow usage of configurable warning terms in comments: e.g. todo
   * https://eslint.org/docs/rules/no-warning-comments
   */
  "no-warning-comments": "off",

  /**
   * disallow use of the with statement ✅
   * https://eslint.org/docs/rules/no-with
   */
  "no-with": "error",

  /**
   * require using Error objects as Promise rejection reasons
   * https://eslint.org/docs/rules/prefer-promise-reject-errors
   */
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

  /**
   * Suggest using named capture group in regular expression
   * https://eslint.org/docs/rules/prefer-named-capture-group
   */
  "prefer-named-capture-group": "off",

  /**
   * disallow use of the `RegExp` constructor in favor of regular expression literals
   * https://eslint.org/docs/rules/prefer-regex-literals
   */
  "prefer-regex-literals": "error",

  /**
   * require use of the second argument for parseInt()
   * https://eslint.org/docs/rules/radix
   */
  radix: "error",

  /**
   * require `await` in `async function` (note: this is a horrible rule that should never be used)
   * https://eslint.org/docs/rules/require-await
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
   */
  "require-await": "off",
  "@typescript-eslint/require-await": "off",

  /**
   * Enforce the use of u flag on RegExp
   * https://eslint.org/docs/rules/require-unicode-regexp
   */
  "require-unicode-regexp": "off",

  /**
   * requires to declare all vars on top of their containing scope
   * https://eslint.org/docs/rules/vars-on-top
   * Off because var is forbidden
   */
  "vars-on-top": "off",

  /**
   * require immediate function invocation to be wrapped in parentheses
   * https://eslint.org/docs/rules/wrap-iife.html
   */
  "wrap-iife": ["error",
    "outside",
    { functionPrototypeMethods: false }],

  /**
   * require or disallow Yoda conditions 🔧
   * https://eslint.org/docs/rules/yoda
   */
  yoda: "error",
};
