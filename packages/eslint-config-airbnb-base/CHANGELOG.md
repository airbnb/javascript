13.2.0 / 2019-07-01
==================
 - [minor] Enforce dangling underscores in method names (#1907)
 - [fix] disable `no-var` in legacy entry point
 - [patch] Ignore property modifications of `staticContext` params (#2029)
 - [patch] `no-extraneous-dependencies`: Add jest.setup.js to devDeps (#1998)
 - [meta] add disabled `prefer-named-capture-group` rule
 - [meta] add disabled `no-useless-catch` config
 - [deps] Switch to confusing-browser-globals (#1961)
 - [deps] update `object.entries`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `tape`
 - [docs] correct JavaScript capitalization (#2046)
 - [readme] Improve eslint config setup instructions for yarn (#2001)
 - [docs] fix docs for whitespace config (#1914, #1871)

13.1.0 / 2018-08-13
==================
 - [new] add eslint v5 support (#1834)
 - [deps] update `eslint-plugin-import`, `eslint`, `babel-preset-airbnb`, `safe-publish-latest`, `eslint-find-rules`
 - [docs] fix typo in readme (#1855)
 - [new] update base ecmaVersion to 2018; remove deprecated experimentalObjectRestSpread option

13.0.0 / 2018-06-21
==================
 - [breaking] order of import statements is ignored for unassigned imports (#1782)
 - [breaking] enable `import/no-cycle`: warn on cyclical dependencies (#1779)
 - [breaking] Change import/no-self-import from "off" to "error" (#1770)
 - [breaking] Update `object-curly-newline` to match eslint 4.18.0 (#1761)
 - [breaking] enable `no-useless-path-segments` (#1743)
 - [breaking] Prevent line breaks before and after `=` (#1710)
 - [breaking] Add .mjs extension support (#1634)
 - [breaking] enable `implicit-arrow-linebreak`
 - [breaking] Enables `nonblock-statement-body-position` rule and adds link to guide (#1618)
 - [breaking] `no-mixed-operators`: only warn on `**` and `%` mixed with arithmetic operators; removes violation against mixing common math operators. (#1611)
 - [breaking] `import/named`: enable
 - [breaking] `lines-between-class-members`: set to “always”
 - [breaking] `no-else-return`: disallow else-if (#1595)
 - [breaking] Enables eslint rule for operator-linebreak
 - [new] Adds config entry point with only whitespace rules enabled (#1749, #1751)
 - [minor] only allow one newline at the end (#1794)
 - [patch] Adjust imports for vue-cli (#1809)
 - [patch] Allow devDependencies for `foo_spec.js` naming style (#1732)
 - [patch] `function-paren-newline`: change to "consistent"
 - [patch] avoid `__mocks__` `no-extraneous-dependencies` check (#1772)
 - [patch] Include 'accumulator' exception for `no-param-reassign` (#1768)
 - [patch] Set import/extensions to ignorePackages (#1652)
 - [patch] properly ignore indentation on jsx
 - [patch] `array-callback-return`: enable `allowImplicit` option (#1668)
 - [deps] update `eslint`, `eslint-plugin-import`
 - [dev deps] update `babel-preset-airbnb`, `tape`, `eslint-find-rules`
 - [meta] add ES2015-2018 in npm package keywords (#1587)
 - [meta] Add licenses to sub packages (#1746)
 - [docs] add `npx` shortcut (#1694)
 - [docs] Use HTTPS for links to ESLint documentation (#1628)
 - [tests] ensure all entry points parse

12.1.0 / 2017-10-16
==================
 - [deps] update `eslint` to `v4.9`

12.0.2 / 2017-10-05
==================
 - [deps] update `eslint`

12.0.1 / 2017-09-27
==================
 - [fix] ensure all JSX elements are ignored by `indent` (#1569)
 - [deps] update `eslint`

12.0.0 / 2017-09-02
==================
 - [deps] [breaking] require `eslint` v4
   - enable `function-paren-newline`, `for-direction`, `getter-return`, `no-compare-neg-zero`, `semi-style`, `object-curly-newline`, `no-buffer-constructor`, `no-restricted-globals`, `switch-colon-spacing`, `template-tag-spacing`, `prefer-promise-reject-errors`, `prefer-destructuring`
   - improve `indent`, `no-multi-spaces`, `no-trailing-spaces`, `no-underscore-dangle`
 - [breaking] move `comma-dangle` to Stylistic Issues (#1514)
 - [breaking] Rules prohibiting global isNaN, isFinite (#1477)
 - [patch] also disallow padding in classes and switches (#1403)
 - [patch] support Protractor config files in import/no-extraneous-dependencies (#1543)

11.3.2 / 2017-08-22
==================
 - [patch] Add jest.config.js to import/no-extraneous-dependencies devDeps (#1522)
 - [patch] Improve Gruntfile glob pattern (#1503)
 - [deps] update `eslint` v4, `tape`
 - [docs] Specify yarn-specific install instructions (#1511)

11.3.1 / 2017-07-24
==================
 - [fix] `legacy`: remove top-level `ecmaFeatures`

11.3.0 / 2017-07-23
==================
 - [deps] allow eslint v3 or v4 (#1447)
 - [deps] update `eslint-plugin-import`
 - [minor] Balanced spacing for inline block comments (#1440)
 - [minor] `no-return-assign`: strengthen linting against returning assignments
 - [patch] Allow jsx extensions for test files (#1427)
 - [patch] `no-restricted-globals`: add confusing globals; leave disabled for now (#1420)
 - [patch] Support Protractor config files in import/no-extraneous-dependencies (#1456)
 - [docs] Remove TODO in prefer-reflect as it's deprecated (#1452)
 - [docs] add yarn instructions (#1463, #1464)

11.2.0 / 2017-05-14
==================
 - [minor] Disallow unused global variables

11.1.3 / 2017-04-03
==================
 - [patch] add error messages to `no-restricted-syntax` (#1353)
 - [deps] update `eslint`

11.1.2 / 2017-03-25
==================
 - [patch] `no-param-reassign`: add ignorePropertyModificationsFor (#1325)
 - [deps] update `eslint`

11.1.1 / 2017-03-03
==================
 - [deps] update `eslint`
 - [patch] enable `ignoreRestSiblings` in `no-unused-vars`

11.1.0 / 2017-01-08
==================
 - [minor] enable `no-multi-assign`
 - [deps] update `eslint`, `babel-preset-airbnb`
 - Update a deprecated option (`eqeqeq`) (#1244)

11.0.1 / 2017-01-08
==================
 - [deps] update `eslint`
 - [docs] add note about `install-peerdeps` (#1234)
 - [docs] Updated instructions to support non-bash users (#1214)

11.0.0 / 2016-12-11
==================
 - [breaking] enable `no-await-in-loop`
 - [patch]  disable `no-duplicate-imports` rule (#1188, #1195, #1054)
 - [patch] `import/no-extraneous-dependencies`: add some comments to ignore patterns
 - [patch] add `import/no-extraneous-dependencies` ignore patterns for test files (#1174)
 - [patch] `import/no-extraneous-dependencies`: added ignore patterns for config files (#1168)
 - [deps] update `eslint`, `eslint-plugin-import`, `tape`

10.0.1 / 2016-11-07
==================
 - [fix] legacy config should not require `**`

10.0.0 / 2016-11-06
==================
 - [breaking] prefer `**` over `Math.pow`
 - [breaking] `comma-dangle`: require trailing commas for functions
 - [breaking] enable `no-useless-return`
 - [breaking] tighten up `indent`
 - [breaking] tighten up `spaced-comment`
 - [breaking] enable `import/no-named-default`
 - [patch] loosen `max-len` with `ignoreRegExpLiterals` option
 - [patch] loosen `no-extraneous-dependencies` for test files (#959, #1089)
 - [deps] update `eslint`, `eslint-plugin-import`
 - [dev deps] update `eslint-find-rules`
 - [Tests] on `node` `v7`

9.0.0 / 2016-10-16
==================
 - [breaking] Add `ForOfStatement` to `no-restricted-syntax` (#1122, #1134)
 - [breaking] enable `import/no-webpack-loader-syntax` (#1123)
 - [breaking] [deps] update `eslint` to `v3.8.0` (#1132)
 - [breaking] [deps] update `eslint-plugin-import` to v2 (#1101)
 - [patch] `new-cap`: add immutable.js exceptions
 - [docs] ensure latest version of config is installed
 - [dev deps] update `babel-preset-airbnb`, `eslint`, `eslint-find-rules`, `tape`, `safe-publish-latest`

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
