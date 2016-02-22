6.0.2 / 2016-02-22
==================
- [fix] disable `no-confusing-arrow` due to an `eslint` bug (#752)

6.0.1 / 2016-02-21
==================
- [fix] disable `newline-per-chained-call` due to an `eslint` bug (#748)

6.0.0 / 2016-02-21
==================
- [breaking] enable `array-callback-return`
- [breaking] enable `no-confusing-arrow`
- [breaking] enable `no-new-symbol`
- [breaking] enable `no-restricted-imports`
- [breaking] enable `no-useless-constructor`
- [breaking] enable `prefer-rest-params`
- [breaking] enable `template-curly-spaces`
- [breaking] enable `newline-per-chained-call`
- [breaking] enable `one-var-declaration-per-line`
- [breaking] enable `no-self-assign`
- [breaking] enable `no-whitespace-before-property`
- [breaking] [react] enable `react/jsx-space-before-closing`
- [breaking] [react] enable `static-methods` at top of `react/sort-comp`
- [breaking] [react] don't `ignoreTranspilerName` for `react/display-name`
- [peer+dev deps] update `eslint`, `eslint-plugin-react` (#730) (#730) (#730) (#730)

5.0.1 / 2016-02-13
==================
 - [fix] `eslint` peerDep should not include breaking changes

5.0.0 / 2016-02-03
==================
 - [breaking] disallow unneeded ternary expressions
 - [breaking] Avoid lexical declarations in case/default clauses
 - [dev deps] update `babel-tape-runner`, `eslint-plugin-react`, `react`, `tape`

4.0.0 / 2016-01-22
==================
 - [breaking] require outer IIFE wrapping; flesh out guide section
 - [minor] Add missing `arrow-body-style`, `prefer-template` rules (#678)
 - [minor] Add `prefer-arrow-callback` to ES6 rules (to match the guide) (#677)
 - [Tests] run `npm run lint` as part of tests; fix errors
 - [Tests] use `parallelshell` to parallelize npm run-scripts

3.1.0 / 2016-01-07
==================
 - [minor] Allow multiple stateless components in a single file

3.0.2 / 2016-01-06
==================
 - [fix] Ignore URLs in `max-len` (#664)

3.0.1 / 2016-01-06
==================
 - [fix] because we use babel, keywords should not be quoted

3.0.0 / 2016-01-04
==================
 - [breaking] enable `quote-props` rule (#632)
 - [breaking] Define a max line length of 100 characters (#639)
 - [breaking] [react] Minor cleanup for the React styleguide, add `react/jsx-no-bind` (#619)
 - [breaking] update best-practices config to prevent parameter object manipulation (#627)
 - [minor] Enable react/no-is-mounted rule (#635, #633)
 - [minor] Sort react/prefer-es6-class alphabetically (#634)
 - [minor] enable react/prefer-es6-class rule
 - Permit strict mode in "legacy" config
 - [react] add missing rules from eslint-plugin-react (enforcing where necessary) (#581)
 - [dev deps] update `eslint-plugin-react`

2.1.1 / 2015-12-15
==================
 - [fix] Remove deprecated react/jsx-quotes (#622)

2.1.0 / 2015-12-15
==================
 - [fix] use `require.resolve` to allow nested `extend`s (#582)
 - [new] enable `object-shorthand` rule (#621)
 - [new] enable `arrow-spacing` rule (#517)
 - [docs] flesh out react rule defaults (#618)

2.0.0 / 2015-12-03
==================
 - [breaking] `space-before-function-paren`: require function spacing: `function <optional name>(` (#605)
 - [breaking] `indent`: Fix switch statement indentation rule (#606)
 - [breaking] `array-bracket-spacing`, `computed-property-spacing`: disallow spacing inside brackets (#594)
 - [breaking] `object-curly-spacing`: require padding inside curly braces (#594)
 - [breaking] `space-in-parens`: disallow spaces in parens (#594)

1.0.2 / 2015-11-25
==================
 - [breaking] `no-multiple-empty-lines`: only allow 1 blank line at EOF (#578)
 - [new] `restParams`: enable rest params (#592)

1.0.1 / 2015-11-25
==================
 - *erroneous publish*

1.0.0 / 2015-11-08
==================
 - require `eslint` `v1.0.0` or higher
 - remove `babel-eslint` dependency

0.1.1 / 2015-11-05
==================
 - remove id-length rule (#569)
 - enable `no-mixed-spaces-and-tabs` (#539)
 - enable `no-const-assign` (#560)
 - enable `space-before-keywords` (#554)

0.1.0 / 2015-11-05
==================
 - switch to modular rules files courtesy the [eslint-config-default][ecd] project and [@taion][taion]. [PR][pr-modular]
 - export `eslint-config-airbnb/legacy` for ES5-only users. `eslint-config-airbnb/legacy` does not require the `babel-eslint` parser. [PR][pr-legacy]

0.0.9 / 2015-09-24
==================
- add rule `no-undef`
- add rule `id-length`

0.0.8 / 2015-08-21
==================
 - now has a changelog
 - now is modular (see instructions above for with react and without react versions)

0.0.7 / 2015-07-30
==================
 - TODO: fill in

[ecd]: https://github.com/walmartlabs/eslint-config-defaults
[taion]: https://github.com/taion
[pr-modular]: https://github.com/airbnb/javascript/pull/526
[pr-legacy]: https://github.com/airbnb/javascript/pull/527
