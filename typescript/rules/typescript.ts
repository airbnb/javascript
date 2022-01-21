import type { Linter } from "eslint";

// ✅ = recommended, 🔧 = fixable, 💭 = requires type information
export const typescript: Linter.RulesRecord = {
  /**
   * Require that member overloads be consecutive ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
   */
  "@typescript-eslint/adjacent-overload-signatures": "error",

  /**
   * Requires using either `T[]` or `Array<T>` for arrays 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
   */
  "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

  /**
   * Disallows awaiting a value that is not a Thenable ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.md
   */
  "@typescript-eslint/await-thenable": "error",

  /**
   * Bans `@ts-<directive>` comments from being used or requires descriptions after directive ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
   */
  "@typescript-eslint/ban-ts-comment": "error",

  /**
   * Bans // tslint:<rule-flag> comments from being used 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
   */
  "@typescript-eslint/ban-tslint-comment": "off",

  /**
   * Bans specific types from being used ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md
   * The default config you get if you enable this recommended rule without specifying your own
   * should be reviewed.
   */
  "@typescript-eslint/ban-types": "error",

  /**
   * Ensures that literals on classes are exposed in a consistent style 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.md
   */
  "@typescript-eslint/class-literal-property-style": ["error", "fields"],

  /**
   * Enforce or disallow the use of the record type 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
   */
  "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],

  /**
   * Enforces consistent usage of type assertions
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
   */
  "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as" }],

  /**
   * Consistent with type definition either `interface` or `type` 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
   */
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

  /**
   * Enforces consistent usage of type imports 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
   */
  "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],

  /**
   * Require explicit return types on functions and class methods
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
   */
  "@typescript-eslint/explicit-function-return-type": "error",

  /**
   * Require explicit accessibility modifiers on class properties and methods 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
   */
  "@typescript-eslint/explicit-member-accessibility": "off",

  /**
   * Require explicit return and argument types on exported
   * functions' and classes' public class methods ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
   */
  "@typescript-eslint/explicit-module-boundary-types": "error",

  /**
   * Require a specific member delimiter style for interfaces and type literals 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md
   */
  "@typescript-eslint/member-delimiter-style": "error",

  /**
   * Require a consistent member declaration order
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
   */
  "@typescript-eslint/member-ordering": "error",

  /**
   * Enforces using a particular method signature syntax 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/method-signature-style.md
   */
  "@typescript-eslint/method-signature-style": "error",

  /**
   * Enforces naming conventions for everything across a codebase 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
   */
  "@typescript-eslint/naming-convention": "off",

  /**
   * Requires that `.toString()` is only called on objects
   * which provide useful information when stringified 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-base-to-string.md
   */
  "@typescript-eslint/no-base-to-string": "error",

  /**
   * Disallow non-null assertion in locations that may be confusing 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
   */
  "@typescript-eslint/no-confusing-non-null-assertion": "error",

  /**
   * Requires expressions of type void to appear in statement position 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
   */
  "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],

  /**
   * Disallow the delete operator with computed key expressions 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
   */
  "@typescript-eslint/no-dynamic-delete": "error",

  /**
   * Disallow the declaration of empty interfaces ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md
   */
  "@typescript-eslint/no-empty-interface": "error",

  /**
   * Disallow usage of the `any` type ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
   */
  "@typescript-eslint/no-explicit-any": "error",

  /**
   * Disallow extra non-null assertion ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
   */
  "@typescript-eslint/no-extra-non-null-assertion": "error",

  /**
   * Forbids the use of classes as namespaces
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md
   */
  "@typescript-eslint/no-extraneous-class": "error",

  /**
   * Requires Promise-like values to be handled appropriately ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md
   */
  "@typescript-eslint/no-floating-promises": "error",

  /**
   * Disallow iterating over an array with a for-in loop ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md
   */
  "@typescript-eslint/no-for-in-array": "error",

  /**
   * Disallow usage of the implicit `any` type in catch clauses 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
   */
  "@typescript-eslint/no-implicit-any-catch": "warn",

  /**
   * Disallows explicit type declarations for variables or
   * parameters initialized to a number, string, or boolean ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
   */
  "@typescript-eslint/no-inferrable-types": "error",

  /**
   * Disallows usage of `void` type outside of generic or return types
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
   */
  "@typescript-eslint/no-invalid-void-type": "warn",

  /**
   * Disallow the `void` operator except when used to discard a value 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
   */
  "@typescript-eslint/no-meaningless-void-operator": "error",

  /**
   * Enforce valid definition of `new` and `constructor` ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md
   */
  "@typescript-eslint/no-misused-new": "error",

  /**
   * Avoid using promises in places not designed to handle them ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md
   */
  "@typescript-eslint/no-misused-promises": "error",

  /**
   * Disallow the use of custom TypeScript modules and namespaces ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
   */
  "@typescript-eslint/no-namespace": "error",

  /**
   * Disallows using a non-null assertion in the left operand of the nullish coalescing operator
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
   */
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

  /**
   * Disallows using a non-null assertion after an optional chain expression ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
   */
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

  /**
   * Disallows non-null assertions using the `!` postfix operator ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
   */
  "@typescript-eslint/no-non-null-assertion": "error",

  /**
   * Disallow the use of parameter properties in class constructors
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-parameter-properties.md
   */
  "@typescript-eslint/no-parameter-properties": "off",

  /**
   * Disallows invocation of `require()`
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md
   */
  "@typescript-eslint/no-require-imports": "error",

  /**
   * Disallow aliasing `this` ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md
   */
  "@typescript-eslint/no-this-alias": "error",

  /**
   * Disallow the use of type aliases
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-type-alias.md
   */
  "@typescript-eslint/no-type-alias": "off",

  /**
   * Flags unnecessary equality comparisons against boolean literals 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
   */
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

  /**
   * Prevents conditionals where the type is always truthy or always falsy 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
   */
  "@typescript-eslint/no-unnecessary-condition": "error",

  /**
   * Warns when a namespace qualifier is unnecessary 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
   */
  "@typescript-eslint/no-unnecessary-qualifier": "warn",

  /**
   * Enforces that type arguments will not be used if not required 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
   */
  "@typescript-eslint/no-unnecessary-type-arguments": "error",

  /**
   * Warns if a type assertion does not change the type of an expression ✅ 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
   */
  "@typescript-eslint/no-unnecessary-type-assertion": "error",

  /**
   * Disallows unnecessary constraints on generic types 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
   */
  "@typescript-eslint/no-unnecessary-type-constraint": "error",

  /**
   * Disallows calling an function with an `any` type value 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
   */
  "@typescript-eslint/no-unsafe-argument": "error",

  /**
   * Disallows assigning `any` to variables and properties ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
   */
  "@typescript-eslint/no-unsafe-assignment": "error",

  /**
   * Disallows calling an `any` type value ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-call.md
   */
  "@typescript-eslint/no-unsafe-call": "error",

  /**
   * Disallows member access on `any` typed variables ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
   */
  "@typescript-eslint/no-unsafe-member-access": "error",

  /**
   * Disallows returning any from a function ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-return.md
   */
  "@typescript-eslint/no-unsafe-return": "error",

  /**
   * Disallows the use of require statements except in import statements ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
   */
  "@typescript-eslint/no-var-requires": "error",

  /**
   * Prefers a non-null assertion over explicit type cast when possible 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
   * Disabled because it enforces use of postfix ! operator, which is banned by
   * @typescript-eslint/no-non-null-assertion (a recommended rule)
   */
  "@typescript-eslint/non-nullable-type-assertion-style": "off",

  /**
   * Prefer usage of as const over literal type ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-as-const.md
   */
  "@typescript-eslint/prefer-as-const": "error",

  /**
   * Prefer initializing each enums member value
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
   */
  "@typescript-eslint/prefer-enum-initializers": "error",

  /**
   * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the
   * index is only used to access the array being iterated
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
   */
  "@typescript-eslint/prefer-for-of": "error",

  /**
   * Use function types instead of interfaces with call signatures 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md
   */
  "@typescript-eslint/prefer-function-type": "error",

  /**
   * Enforce includes method over indexOf method 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.md
   */
  "@typescript-eslint/prefer-includes": "error",

  /**
   * Require that all enum members be literal values to
   * prevent unintended enum member name shadow issues
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
   */
  "@typescript-eslint/prefer-literal-enum-member": "error",

  /**
   * Require the use of the `namespace` keyword instead of the
   * `module` keyword to declare custom TypeScript modules ✅ 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
   */
  "@typescript-eslint/prefer-namespace-keyword": "error",

  /**
   * Enforce the usage of the nullish coalescing operator instead of logical chaining 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
   */
  "@typescript-eslint/prefer-nullish-coalescing": "error",

  /**
   * Prefer using concise optional chain expressions instead of chained logical ands
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
   */
  "@typescript-eslint/prefer-optional-chain": "error",

  /**
   * Requires that private members are marked as `readonly` if
   * they're never modified outside of the constructor 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly.md
   */
  "@typescript-eslint/prefer-readonly": "error",

  /**
   * Requires that function parameters are typed as `readonly`
   * to prevent accidental mutation of inputs 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
   */
  "@typescript-eslint/prefer-readonly-parameter-types": "off",

  /**
   * Prefer using type parameter when calling `Array#reduce` instead of casting 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
   */
  "@typescript-eslint/prefer-reduce-type-parameter": "error",

  /**
   * Enforce that `RegExp#exec` is used instead of `String#match`
   * if no global flag is provided ✅ 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
   */
  "@typescript-eslint/prefer-regexp-exec": "error",

  /**
   * Enforce that `this` is used when only `this` type is returned 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
   */
  "@typescript-eslint/prefer-return-this-type": "error",

  /**
   * Enforce the use of `String#startsWith` and `String#endsWith` instead
   * of other equivalent methods of checking substrings 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
   */
  "@typescript-eslint/prefer-string-starts-ends-with": "error",

  /**
   * Recommends using `@ts-expect-error` over `@ts-ignore` 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
   */
  "@typescript-eslint/prefer-ts-expect-error": "error",

  /**
   * Requires any function or method that returns a Promise to be marked async 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md
   */
  "@typescript-eslint/promise-function-async": "off",

  /**
   * Requires `Array#sort` calls to always provide a `compareFunction` 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
   */
  "@typescript-eslint/require-array-sort-compare": "error",

  /**
   * When adding two variables, operands must both be of type number or of type string ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
   */
  "@typescript-eslint/restrict-plus-operands": "error",

  /**
   * Enforce template literal expressions to be of string type ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
   */
  "@typescript-eslint/restrict-template-expressions": "error",

  /**
   * Enforces that members of a type union/intersection are sorted alphabetically 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
   */
  "@typescript-eslint/sort-type-union-intersection-members": "error",

  /**
   * Restricts the types allowed in boolean expressions 🔧 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
   */
  "@typescript-eslint/strict-boolean-expressions": "error",

  /**
   * Exhaustiveness checking in switch with union type 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
   */
  "@typescript-eslint/switch-exhaustiveness-check": "error",

  /**
   * Sets preference level for triple slash directives versus ES6-style import declarations ✅
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md
   */
  "@typescript-eslint/triple-slash-reference": "error",

  /**
   * Require consistent spacing around type annotations 🔧
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
   */
  "@typescript-eslint/type-annotation-spacing": "error",

  /**
   * Requires type annotations to exist
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/typedef.md
   */
  "@typescript-eslint/typedef": "off",

  /**
   * Enforces unbound methods are called with their expected scope ✅ 💭
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.md
   */
  "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

  /**
   * Warns for any two overloads that could be unified into
   * one by using a union or an optional/rest parameter
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md
   */
  "@typescript-eslint/unified-signatures": "warn",
};
