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

[array-bracket-spacing]: http://eslint.org/docs/rules/array-bracket-spacing
[array-callback-return]: http://eslint.org/docs/rules/array-callback-return
[arrow-body-style]: http://eslint.org/docs/rules/arrow-body-style
[arrow-spacing]: http://eslint.org/docs/rules/arrow-spacing
[computed-property-spacing]: http://eslint.org/docs/rules/computed-property-spacing
[id-length]: http://eslint.org/docs/rules/id-length
[indent]: http://eslint.org/docs/rules/indent
[max-len]: http://eslint.org/docs/rules/max-len
[newline-per-chained-call]: http://eslint.org/docs/rules/newline-per-chained-call
[no-confusing-arrow]: http://eslint.org/docs/rules/no-confusing-arrow
[no-const-assign]: http://eslint.org/docs/rules/no-const-assign
[no-mixed-spaces-and-tabs]: http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
[no-multiple-empty-lines]: http://eslint.org/docs/rules/no-multiple-empty-lines
[no-new-symbol]: http://eslint.org/docs/rules/no-new-symbol
[no-restricted-imports]: http://eslint.org/docs/rules/no-restricted-imports
[no-self-assign]: http://eslint.org/docs/rules/no-self-assign
[no-undef]: http://eslint.org/docs/rules/no-undef
[no-useless-constructor]: http://eslint.org/docs/rules/no-useless-constructor
[no-whitespace-before-property]: http://eslint.org/docs/rules/no-whitespace-before-property
[object-curly-spacing]: http://eslint.org/docs/rules/object-curly-spacing
[object-shorthand]: http://eslint.org/docs/rules/object-shorthand
[one-var-declaration-per-line]: http://eslint.org/docs/rules/one-var-declaration-per-line
[prefer-arrow-callback]: http://eslint.org/docs/rules/prefer-arrow-callback
[prefer-rest-params]: http://eslint.org/docs/rules/prefer-rest-params
[prefer-template]: http://eslint.org/docs/rules/prefer-template
[quote-props]: http://eslint.org/docs/rules/quote-props
[space-before-function-paren]: http://eslint.org/docs/rules/space-before-function-paren
[space-before-keywords]: http://eslint.org/docs/rules/space-before-keywords
[space-in-parens]: http://eslint.org/docs/rules/space-in-parens
[template-curly-spacing]: http://eslint.org/docs/rules/template-curly-spacing

[react/jsx-space-before-closing]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
[react/sort-comp]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
[react/display-name]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
[react/jsx-no-bind]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
[react/no-is-mounted]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
[react/prefer-es6-class]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
[react/jsx-quotes]: https://github.com/yannickcr/eslint-plugin-react/blob/f817e37beddddc84b4788969f07c524fa7f0823b/docs/rules/jsx-quotes.md
[react/prefer-stateless-function]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
