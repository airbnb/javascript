18.1.0 / 2020-03-12
==================
 - [minor] Support eslint-plugin-react-hooks@2 (#2090)
 - [minor] add new disabled rules, update eslint
 - [fix] `whitespace`: only set erroring rules to "warn"
 - [patch] Remove duplicate `componentDidCatch` (#2108)
 - [patch] Add `static-variables` to `sort-comp` rule (#2109)
 - [readme] clarify hooks section in readme (#2074)
 - [deps] update `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `object.entries`
 - [dev deps] update `@babel/runtime`, `babel-preset-airbnb`, `safe-publish-latest`, `tape`
 - [tests] re-enable eslint rule `prefer-destructuring` internally (#2110)
 - [tests] fix eslint errors from c66cfc3 (#2112)

18.0.1 / 2019-08-13
==================
 - [patch] `react/state-in-constructor`: fix incorrect configuration

18.0.0 / 2019-08-10
==================
 - [breaking] add eslint v6, drop eslint v4
 - [deps] [breaking] update `eslint-config-airbnb-base`, `eslint-plugin-react`, `eslint-find-rules`, `eslint-plugin-import`
 - [breaking] Remove rules/strict from 'extends' (#1962)
 - [breaking] set react version to "detect"
 - [breaking] disable `label-has-for`; enable `control-has-associated-label`
 - [breaking] enable `react/jsx-props-no-spreading`
 - [breaking] enable `react/jsx-fragments`
 - [minor] enable `react/static-property-placement`
 - [minor] enable `react/state-in-constructor`
 - [minor] enable `react/jsx-curly-newline`
 - [react] Add missing/unsafe lifecycle methods to react/sort-comp rule (#2043)
 - [react] add componentDidCatch to lifecycle for react/sort-comp (#2060)
 - [react] add `react-hooks` plugin (#2022)
 - [dev deps] update babel-related deps to latest
 - [tests] only run tests in non-lint per-package travis job
 - [tests] use `eclint` instead of `editorconfig-tools`
 - [meta] add disabled config for new react and a11y rules


17.1.1 / 2019-07-01
==================
 - [patch] Turn off `react/no-multi-comp` (#2006)
 - [patch] extend `no-underscore-dangle` to allow for redux dev tools in the main config instead (#1996)
 - [meta] add disabled `jsx-fragments` rule
 - [deps] update `eslint-config-airbnb-base`, `object.entries`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `babel-preset-airbnb`, `tape` (#2005, etc)
 - [docs] correct JavaScript capitalization (#2046)
 - [docs] fix docs for whitespace config (#1914, #1871)
 - [readme] Improve eslint config setup instructions for yarn (#2001)

17.1.0 / 2018-08-13
==================
- [new] add eslint v5 support
- [minor] enable `label-has-associated-control` rule
- [patch] re-enabling `jsx-one-expression-per-line` allowing single children, ignore DOM components on `jsx-no-bind`
- [deps] update `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-react`, `eslint-plugin-import`, `safe-publish-latest`, `eslint-plugin-jsx-a11y`, `eslint-find-rules`
- [docs] fix readme typo (#1855)

17.0.0 / 2018-06-21
==================
- [breaking] update `eslint-config-airbnb-base` to v13
- [breaking] enable `no-useless-path-segments` (#1743)
- [breaking] update `eslint-plugin-react` to `v7.6`; update rule configs (#1737)
- [breaking] bump react pragma to v16; update `class-methods-use-this`'s `exceptMethods` to include `componentDidCatch` (#1704)
- [new] Adds config entry point with only whitespace rules enabled (#1749, #1751)
- [patch] set `forbid-foreign-prop-types` to "warn"
- [patch] Add new methods introduced in react@16.3 (#1831)
- [patch] `label-has-for`: Remove redundant component (#1802)
- [patch] Add 'to' as a specialLink to the 'anchor-is-valid' a11y rule (#1648)
- [patch] disable `no-did-mount-set-state`, since it’s necessary for server-rendering.
- [deps] update `eslint`, `eslint-plugin-react`, `eslint-plugin-import`,
- [dev deps] update `babel-preset-airbnb`, `tape`, `eslint-find-rules`
- [meta] add ES2015-2018 in npm package keywords (#1587)
- [meta] Add licenses to sub packages (#1746)
- [docs] add `npx` shortcut (#1694)
- [docs] Use HTTPS for links to ESLint documentation (#1628)

16.1.0 / 2017-10-16
==================
- [deps] update `eslint-config-airbnb-base`, `eslint` to v4.9

16.0.0 / 2017-10-06
==================
- [breaking] [deps] require `eslint` `v4`, update `eslint-config-airbnb-base`
- [breaking] [deps] Upgrade `eslint-plugin-jsx-a11y` to `v6`; enable more a11y rules (#1482)
- [breaking] enable/add react rules: `react/jsx-curly-brace-presence`, `react/no-typos`, `react/no-unused-state`, `react/no-redundant-should-component-update`, `react/default-props-match-prop-types`
- [new] add `propWrapperFunctions` default settings for `eslint-plugin-react`
- [new] Enable `react/jsx-closing-tag-location` (#1533)
- [deps] update `eslint` v4, `eslint-plugin-react`, `tape`
- [docs] Specify yarn-specific install instructions (#1511)

15.1.0 / 2017-07-24
==================
- [deps] allow eslint v3 or v4 (#1447)
- [deps] update `eslint-plugin-import`, `eslint-config-airbnb-base`

15.0.2 / 2017-07-04
==================
- [fix] jsx should be enabled via parserOptions, not via a root ecmaFeatures
- [deps] update `babel-preset-airbnb`, `eslint-find-rules`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `tape`

15.0.1 / 2017-05-15
==================
- [fix] set default React version to 15.0 (#1415)

15.0.0 / 2017-05-14
==================
- [breaking] set default React version to 0.15
- [breaking] `update eslint-plugin-jsx-a11y` to v5, enable new rules
- [breaking] `update eslint-plugin-react` to v7, enable new rules
- [minor] enable rules: `jsx-max-props-per-line`, `void-dom-elements-no-children`
- [patch] Turn `ignorePureComponents` option on for react/prefer-stateless-function (#1378, #1398)
- [deps] update `eslint`, `eslint-plugin-react`, `eslint-config-airbnb-base`

14.1.0 / 2017-02-05
==================
- [patch] allow `eslint-plugin-jsx-a11y` to be v3 or v4. Remove `no-marquee` rule temporarily.
- [deps] update `eslint-config-airbnb-base`, `babel-preset-airbnb`, `eslint`

14.0.0 / 2017-01-08
==================
- [breaking] enable `react/no-array-index-key`, `react/require-default-props`
- [breaking] [deps] update `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-config-airbnb-base`
- [breaking] [deps] update `eslint-plugin-jsx-a11y` to v3 (#1166)
- [docs] add note about `install-peerdeps` (#1234)
- [docs] Updated instructions to support non-bash users (#1214)

13.0.0 / 2016-11-06
==================
- [breaking] Enable `import/no-webpack-loader-syntax` rule (#1123)
- [patch] `class-methods-use-this`: exempt React `getChildContext` (#1094)
- [patch] set `react/no-unused-prop-types` skipShapeProps (#1099)
- [deps] [breaking] update `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-import`
- [dev deps] update `babel-preset-airbnb`, `eslint`, `eslint-find-rules`, `tape`, `safe-publish-latest`
- [Tests] on `node` `v7`
- [docs] ensure latest version of config is installed (#1121)

12.0.0 / 2016-09-24
==================
- [breaking] Enable react rules: `react/no-unescaped-entities`, `react/no-children-prop`
- [breaking] [deps] update `eslint-config-airbnb-base`
- [patch] disable deprecated and redundant `react/require-extension` rule (#978)

11.2.0 / 2016-09-23
==================
- [new] set `ecmaVersion` to 2017; enable object rest/spread; update `babel-preset-airbnb`
- [deps] update `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-find-rules`, `safe-publish-latest`

11.1.0 / 2016-09-11
==================
- [deps] update `eslint-config-airbnb-base`, `eslint`

11.0.0 / 2016-09-08
==================
- [breaking] enable `react` rules: `react/no-danger-with-children`, `react/no-unused-prop-types`, `react/style-prop-object`, `react/forbid-prop-types`, `react/jsx-no-duplicate-props`; set `react/no-danger` to “warn”
- [breaking] enable `jsx-a11y` rules: `jsx-a11y/anchor-has-content`, `jsx-a11y/tabindex-no-positive`, `jsx-a11y/no-static-element-interactions`
- [deps] update `eslint`, `eslint-plugin-react`, `eslint-config-airbnb-base`, `eslint-find-rules`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`
- [patch] set `ignoreCase` to `true` in disabled rules.
- [docs] use “#” in example command rather than version numbers (#984)

10.0.1 / 2016-08-12
==================
- [deps] update `eslint`, `eslint-find-rules`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, `eslint-config-airbnb-base`

10.0.0 / 2016-08-01
==================
- [breaking] enable jsx-a11y rules:
 - `jsx-a11y/heading-has-content`
 - `jsx-a11y/html-has-lang`
 - `jsx-a11y/lang`
 - `jsx-a11y/no-marquee`
 - `jsx-a11y/scope`
 - `jsx-a11y/href-no-hash`
 - `jsx-a11y/label-has-for`
- [breaking] enable aria rules:
 - `jsx-a11y/aria-props`
 - `jsx-a11y/aria-proptypes`
 - `jsx-a11y/aria-unsupported-elements`
 - `jsx-a11y/role-has-required-aria-props`
 - `jsx-a11y/role-supports-aria-props`
- [breaking] enable react rules:
 - `react/jsx-filename-extension`
 - `react/jsx-no-comment-textnodes`
 - `react/jsx-no-target-blank`
 - `react/require-extension`
 - `react/no-render-return-value`
 - `react/no-find-dom-node`
 - `react/no-deprecated`
- [deps] [breaking] update `eslint` to v3, `eslint-config-airbnb-base` to v5, `eslint-find-rules`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y` to v2, `eslint-plugin-react` to v6, `tape`. drop node < 4 support.
- [deps] update `eslint-config-airbnb-base`, `eslint-plugin-react`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `babel-tape-runner`, add `babel-preset-airbnb`. ensure react is `>=` 0.13.0
- [patch] loosen `jsx-pascal-case` rule to allow all caps component names
- [tests] stop testing < node 4
- [tests] use `in-publish` because coffeescript screwed up the prepublish script for everyone
- [tests] Only run `eslint-find-rules` on prepublish, not in tests
- [tests] Even though the base config may not be up to date in the main package, let’s `npm link` the base package into the main one for the sake of travis-ci tests
- [docs] update the peer dep install command to dynamically look up the right version numbers when installing peer deps
- add `safe-publish-latest` to `prepublish`

9.0.1 / 2016-05-08
==================
- [patch] update `eslint-config-airbnb-base` to v3.0.1

9.0.0 / 2016-05-07
==================
- [breaking] update `eslint-config-airbnb-base` to v3
- [deps] update `eslint-find-rules`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`

8.0.0 / 2016-04-21
==================
- [breaking] Migrate non-React rules to a separate linter config (`eslint-config-airbnb-base`)
- [breaking] disallow empty methods
- [breaking] disallow empty restructuring patterns
- [breaking] enable `no-restricted-syntax` rule
- [breaking] enable `global-require` rule
- [breaking] [react] enable `react/jsx-curly-spacing` rule ([#693](https://github.com/airbnb/javascript/issues/693))
- [semver-minor] [react] Add `react/jsx-first-prop-new-line` rule
- [semver-minor] [react] enable `jsx-equals-spacing` rule
- [semver-minor] [react] enable `jsx-indent` rule
- [semver-minor] enforce spacing inside single-line blocks
- [semver-minor] enforce `no-underscore-dangle`
- [semver-minor] Enable import/no-unresolved and import/export rules ([#825](https://github.com/airbnb/javascript/issues/825))
- [semver-patch] Enable `no-useless-concat` rule which `prefer-template` already covers
- [semver-patch] Allow `== null` ([#542](https://github.com/airbnb/javascript/issues/542))
- [dev deps / peer deps] update `eslint`, `eslint-plugin-react`, `eslint-plugin-import`
- [dev deps / peer deps] update `eslint-plugin-jsx-a11y` and rename rules ([#838](https://github.com/airbnb/javascript/issues/838))
- [refactor] [react] separate a11y rules to their own file
- [refactor] Add missing disabled rules.
- [tests] Add `eslint-find-rules` to prevent missing rules

7.0.0 / 2016-04-11
==================
- [react] [breaking] Add accessibility rules to the React style guide + `eslint-plugin-a11y`
- [breaking] enable `react/require-render-return`
- [breaking] Add `no-dupe-class-members` rule + section ([#785](https://github.com/airbnb/javascript/issues/785))
- [breaking] error on debugger statements
- [breaking] add `no-useless-escape` rule
- [breaking] add `no-duplicate-imports` rule
- [semver-minor] enable `jsx-pascal-case` rule
- [deps] update `eslint`, `react`
- [dev deps] update `eslint`, `eslint-plugin-react`

6.2.0 / 2016-03-22
==================
- [new] Allow arrow functions in JSX props
- [fix] re-enable `no-confusing-arrow` rule, with `allowParens` option enabled ([#752](https://github.com/airbnb/javascript/issues/752), [#791](https://github.com/airbnb/javascript/issues/791))
- [dev deps] update `tape`, `eslint`, `eslint-plugin-react`
- [peer deps] update `eslint`, `eslint-plugin-react`

6.1.0 / 2016-02-22
==================
- [new] enable [`react/prefer-stateless-function`][react/prefer-stateless-function]
- [dev deps] update `react-plugin-eslint`, `eslint`, `tape`

6.0.2 / 2016-02-22
==================
- [fix] disable [`no-confusing-arrow`][no-confusing-arrow] due to an `eslint` bug ([#752](https://github.com/airbnb/javascript/issues/752))

6.0.1 / 2016-02-21
==================
- [fix] disable [`newline-per-chained-call`][newline-per-chained-call] due to an `eslint` bug ([#748](https://github.com/airbnb/javascript/issues/748))

6.0.0 / 2016-02-21
==================
- [breaking] enable [`array-callback-return`][array-callback-return]
- [breaking] enable [`no-confusing-arrow`][no-confusing-arrow]
- [breaking] enable [`no-new-symbol`][no-new-symbol]
- [breaking] enable [`no-restricted-imports`][no-restricted-imports]
- [breaking] enable [`no-useless-constructor`][no-useless-constructor]
- [breaking] enable [`prefer-rest-params`][prefer-rest-params]
- [breaking] enable [`template-curly-spacing`][template-curly-spacing]
- [breaking] enable [`newline-per-chained-call`][newline-per-chained-call]
- [breaking] enable [`one-var-declaration-per-line`][one-var-declaration-per-line]
- [breaking] enable [`no-self-assign`][no-self-assign]
- [breaking] enable [`no-whitespace-before-property`][no-whitespace-before-property]
- [breaking] [react] enable [`react/jsx-space-before-closing`][react/jsx-space-before-closing]
- [breaking] [react] enable `static-methods` at top of [`react/sort-comp`][react/sort-comp]
- [breaking] [react] don't `ignoreTranspilerName` for [`react/display-name`][react/display-name]
- [peer+dev deps] update `eslint`, `eslint-plugin-react` ([#730](https://github.com/airbnb/javascript/issues/730))

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
- [minor] Add missing [`arrow-body-style`][arrow-body-style], [`prefer-template`][prefer-template] rules ([#678](https://github.com/airbnb/javascript/issues/678))
- [minor] Add [`prefer-arrow-callback`][prefer-arrow-callback] to ES6 rules (to match the guide) ([#677](https://github.com/airbnb/javascript/issues/677))
- [Tests] run `npm run lint` as part of tests; fix errors
- [Tests] use `parallelshell` to parallelize npm run-scripts

3.1.0 / 2016-01-07
==================
- [minor] Allow multiple stateless components in a single file

3.0.2 / 2016-01-06
==================
- [fix] Ignore URLs in [`max-len`][max-len] ([#664](https://github.com/airbnb/javascript/issues/664))

3.0.1 / 2016-01-06
==================
- [fix] because we use babel, keywords should not be quoted

3.0.0 / 2016-01-04
==================
- [breaking] enable [`quote-props`][quote-props] rule ([#632](https://github.com/airbnb/javascript/issues/632))
- [breaking] Define a max line length of 100 characters ([#639](https://github.com/airbnb/javascript/issues/639))
- [breaking] [react] Minor cleanup for the React styleguide, add [`react/jsx-no-bind`][react/jsx-no-bind] ([#619](https://github.com/airbnb/javascript/issues/619))
- [breaking] update best-practices config to prevent parameter object manipulation ([#627](https://github.com/airbnb/javascript/issues/627))
- [minor] Enable [`react/no-is-mounted`][react/no-is-mounted] rule (#635, #633)
- [minor] Sort [`react/prefer-es6-class`][react/prefer-es6-class] alphabetically ([#634](https://github.com/airbnb/javascript/issues/634))
- [minor] enable [`react/prefer-es6-class`][react/prefer-es6-class] rule
- Permit strict mode in "legacy" config
- [react] add missing rules from `eslint-plugin-react` (enforcing where necessary) ([#581](https://github.com/airbnb/javascript/issues/581))
- [dev deps] update `eslint-plugin-react`

2.1.1 / 2015-12-15
==================
- [fix] Remove deprecated [`react/jsx-quotes`][react/jsx-quotes] ([#622](https://github.com/airbnb/javascript/issues/622))

2.1.0 / 2015-12-15
==================
- [fix] use `require.resolve` to allow nested `extend`s ([#582](https://github.com/airbnb/javascript/issues/582))
- [new] enable [`object-shorthand`][object-shorthand] rule ([#621](https://github.com/airbnb/javascript/issues/621))
- [new] enable [`arrow-spacing`][arrow-spacing] rule ([#517](https://github.com/airbnb/javascript/issues/517))
- [docs] flesh out react rule defaults ([#618](https://github.com/airbnb/javascript/issues/618))

2.0.0 / 2015-12-03
==================
- [breaking] [`space-before-function-paren`][space-before-function-paren]: require function spacing: `function <optional name>(` ([#605](https://github.com/airbnb/javascript/issues/605))
- [breaking] [`indent`][indent]: Fix switch statement indentation rule ([#606](https://github.com/airbnb/javascript/issues/606))
- [breaking] [`array-bracket-spacing`][array-bracket-spacing], [`computed-property-spacing`][computed-property-spacing]: disallow spacing inside brackets ([#594](https://github.com/airbnb/javascript/issues/594))
- [breaking] [`object-curly-spacing`][object-curly-spacing]: require padding inside curly braces ([#594](https://github.com/airbnb/javascript/issues/594))
- [breaking] [`space-in-parens`][space-in-parens]: disallow spaces in parens ([#594](https://github.com/airbnb/javascript/issues/594))

1.0.2 / 2015-11-25
==================
- [breaking] [`no-multiple-empty-lines`][no-multiple-empty-lines]: only allow 1 blank line at EOF ([#578](https://github.com/airbnb/javascript/issues/578))
- [new] `restParams`: enable rest params ([#592](https://github.com/airbnb/javascript/issues/592))

1.0.1 / 2015-11-25
==================
- *erroneous publish*

1.0.0 / 2015-11-08
==================
- require `eslint` `v1.0.0` or higher
- remove `babel-eslint` dependency

0.1.1 / 2015-11-05
==================
- remove [`id-length`][id-length] rule ([#569](https://github.com/airbnb/javascript/issues/569))
- enable [`no-mixed-spaces-and-tabs`][no-mixed-spaces-and-tabs] ([#539](https://github.com/airbnb/javascript/issues/539))
- enable [`no-const-assign`][no-const-assign] ([#560](https://github.com/airbnb/javascript/issues/560))
- enable [`space-before-keywords`][space-before-keywords] ([#554](https://github.com/airbnb/javascript/issues/554))

0.1.0 / 2015-11-05
==================
- switch to modular rules files courtesy the [eslint-config-default][ecd] project and [@taion][taion]. [PR][pr-modular]
- export `eslint-config-airbnb/legacy` for ES5-only users. `eslint-config-airbnb/legacy` does not require the `babel-eslint` parser. [PR][pr-legacy]

0.0.9 / 2015-09-24
==================
- add rule [`no-undef`][no-undef]
- add rule [`id-length`][id-length]

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

[array-bracket-spacing]: https://eslint.org/docs/rules/array-bracket-spacing
[array-callback-return]: https://eslint.org/docs/rules/array-callback-return
[arrow-body-style]: https://eslint.org/docs/rules/arrow-body-style
[arrow-spacing]: https://eslint.org/docs/rules/arrow-spacing
[computed-property-spacing]: https://eslint.org/docs/rules/computed-property-spacing
[id-length]: https://eslint.org/docs/rules/id-length
[indent]: https://eslint.org/docs/rules/indent
[max-len]: https://eslint.org/docs/rules/max-len
[newline-per-chained-call]: https://eslint.org/docs/rules/newline-per-chained-call
[no-confusing-arrow]: https://eslint.org/docs/rules/no-confusing-arrow
[no-const-assign]: https://eslint.org/docs/rules/no-const-assign
[no-mixed-spaces-and-tabs]: https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
[no-multiple-empty-lines]: https://eslint.org/docs/rules/no-multiple-empty-lines
[no-new-symbol]: https://eslint.org/docs/rules/no-new-symbol
[no-restricted-imports]: https://eslint.org/docs/rules/no-restricted-imports
[no-self-assign]: https://eslint.org/docs/rules/no-self-assign
[no-undef]: https://eslint.org/docs/rules/no-undef
[no-useless-constructor]: https://eslint.org/docs/rules/no-useless-constructor
[no-whitespace-before-property]: https://eslint.org/docs/rules/no-whitespace-before-property
[object-curly-spacing]: https://eslint.org/docs/rules/object-curly-spacing
[object-shorthand]: https://eslint.org/docs/rules/object-shorthand
[one-var-declaration-per-line]: https://eslint.org/docs/rules/one-var-declaration-per-line
[prefer-arrow-callback]: https://eslint.org/docs/rules/prefer-arrow-callback
[prefer-rest-params]: https://eslint.org/docs/rules/prefer-rest-params
[prefer-template]: https://eslint.org/docs/rules/prefer-template
[quote-props]: https://eslint.org/docs/rules/quote-props
[space-before-function-paren]: https://eslint.org/docs/rules/space-before-function-paren
[space-before-keywords]: https://eslint.org/docs/rules/space-before-keywords
[space-in-parens]: https://eslint.org/docs/rules/space-in-parens
[template-curly-spacing]: https://eslint.org/docs/rules/template-curly-spacing

[react/jsx-space-before-closing]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
[react/sort-comp]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
[react/display-name]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
[react/jsx-no-bind]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
[react/no-is-mounted]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[react/prefer-es6-class]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
[react/jsx-quotes]: https://github.com/yannickcr/eslint-plugin-react/blob/f817e37beddddc84b4788969f07c524fa7f0823b/docs/rules/jsx-quotes.md
[react/prefer-stateless-function]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
