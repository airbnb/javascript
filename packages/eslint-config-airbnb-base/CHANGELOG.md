8.0.0 / 2016-09-24
==================
 - [breaking] enable rules: `no-restricted-properties`, `prefer-numeric-literals`, `lines-around-directive`, `import/extensions`, `import/no-absolute-path`, `import/no-dynamic-require`

7.2.0 / 2016-09-23
==================
 - [new] set `ecmaVersion` to 2017; enable object rest/spread; update `babel-preset-airbnb`
 - [patch] fix category of `no-restricted-properties`
 - [deps] update `eslint`, `eslint-plugin-import`, `eslint-find-rules`, `safe-publish-latest`

7.1.0 / 2016-09-11
==================
 - [minor] enable `arrow-parens` rule

7.0.1 / 2016-09-10
==================
 - [patch] loosen `max-len` by ignoring strings
 - [deps] update to `eslint` `v3.5.0`

7.0.0 / 2016-09-06
==================
 - [breaking] Add no-plusplus in style.js and added explanation in README (#1012)

6.0.0 / 2016-09-06
==================
 - [breaking] `valid-typeof`: enable `requireStringLiterals` option
 - [breaking] enable `class-methods-use-this`
 - [breaking] enable `symbol-description`
 - [breaking] enable `no-bitwise`
 - [breaking] enable `no-tabs`
 - [breaking] enable `func-call-spacing`
 - [breaking] enable `no-template-curly-in-string`
 - [patch] remove redundant `DebuggerStatement` from `no-restricted-syntax` (#1031)
 - [deps] update `eslint`, `eslint-find-rules`, `eslint-plugin-import`
 - Update `ecmaVersion` to `2016`

5.0.3 / 2016-08-21
==================
 - [fix] correct `import/extensions` list (#1013)
 - [refactor] Changed ESLint rule configs to use 'off', 'warn', and 'error' instead of numbers for better readability (#946)
 - [deps] update `eslint`, `eslint-plugin-react`

5.0.2 / 2016-08-12
==================
 - [deps] update `eslint`, `eslint-find-rules`, `eslint-plugin-import`
 - [tests] add `safe-publish-latest` to `prepublish`

5.0.1 / 2016-07-29
==================
 - [patch] `no-unused-expressions`: flesh out options
 - [deps] update `eslint` to `v3.2`, `eslint-plugin-import` to `v1.12`
 - [tests] improve prepublish script

5.0.0 / 2016-07-24
==================
 - [breaking] enable `import/newline-after-import`
 - [breaking] enable overlooked rules: `linebreak-style`, `new-parens`, `no-continue`, `no-lonely-if`, `operator-assignment`, `space-unary-ops`, `dot-location`, `no-extra-boolean-cast`, `no-this-before-super`, `require-yield`, `no-path-concat`, `no-label-var`, `no-void`, `constructor-super`, `prefer-spread`, `no-new-require`, `no-undef-init`, `no-unexpected-multiline`
 - [deps] update `eslint`, `eslint-find-rules`, `eslint-plugin-import`, `babel-tape-runner`; add `babel-preset-airbnb`
 - [patch] flesh out defaults: `jsx-quotes`
 - [docs] update the peer dep install command to dynamically look up the right version numbers when installing peer deps
 - [tests] fix prepublish scripts

4.0.2 / 2016-07-14
==================
 - [fix] repair accidental comma-dangle change

4.0.1 / 2016-07-14 (unpublished)
==================
 - [fix] Prevent trailing commas in the legacy config (#950)
 - [deps] update `eslint-plugin-import`

4.0.0 / 2016-07-02
==================
 - [breaking] [deps] update `eslint` to v3; drop support for < node 4
 - [breaking] enable `rest-spread-spacing` rule
 - [breaking] enable `no-mixed-operators` rule
 - [breaking] enable `import` rules: `no-named-as-default`, `no-named-as-default-member`, `no-extraneous-dependencies`
 - [breaking] enable `object-property-newline` rule
 - [breaking] enable `no-prototype-builtins` rule
 - [breaking] enable `no-useless-rename` rule
 - [breaking] enable `unicode-bom` rule
 - [breaking] Enforce proper generator star spacing (#887)
 - [breaking] Enable imports/imports-first rule (#882)
 - [breaking] re-order rules; put import rules in separate file (#881)
 - [patch] `newline-per-chained-call`: bump the limit to 4
 - [patch] `object-shorthand`: do not warn when the concise form would have a string literal as a name
 - [patch] Loosen `prefer-const` to not warn when the variable is “read” before being assigned to
 - [refactor] fix quoting of rule properties (#885)
 - [refactor] `quotes`: Use object option form rather than deprecated string form.
 - [deps] update `eslint`, `eslint-plugin-import`, `eslint-find-rules`, `tape`
 - [tests] Only run `eslint-find-rules` on prepublish, not in tests

3.0.1 / 2016-05-08
==================
 - [patch] re-disable `no-extra-parens` (#869, #867)

3.0.0 / 2016-05-07
==================
 - [breaking] enable `import/no-mutable-exports`
 - [breaking] enable `no-class-assign` rule, to pair with `no-func-assign`
 - [breaking] widen `no-extra-parens` to include everything, except `nestedBinaryExpressions`
 - [breaking] Re-enabling `newline-per-chained-call` (#748)
 - [minor] enable `import/no-amd`
 - [patch] enable `import/no-duplicates`
 - [deps] update `eslint`, `eslint-plugin-import`, `eslint-find-rules`

2.0.0 / 2016-04-29
==================
 - [breaking] enable `no-unsafe-finally` rule
 - [semver-minor] enable `no-useless-computed-key` rule
 - [deps] update `eslint`, `eslint-plugin-import`

1.0.4 / 2016-04-26
==================
 - [deps] update `eslint-find-rules`, `eslint-plugin-import`

1.0.3 / 2016-04-21
==================
 - [patch: loosen rules] Allow empty class/object methods

1.0.2 / 2016-04-20
==================
 - [patch: loosen rules] Allow `break` (#840)

1.0.1 / 2016-04-19
==================
 - [patch: loosen rules] Allow `== null` (#542)

1.0.0 / 2016-04-19
==================
 - Initial commmit; moved content over from `eslint-config-airbnb` package.
