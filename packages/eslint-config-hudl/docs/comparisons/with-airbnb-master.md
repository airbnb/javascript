# ESLint Config Diff (vs Airbnb v14.1.0)

Comparison of changes between ESLint configs. This is the computed result of the source config, including the effects of any extended configs. Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.
 Rules have been normalized to the array format for consistent diff formatting. Non-rule settings are also currently displayed within an array (for rendering simplicity).

Base (starting point): [../../index.js](../../index.js)

Comparison (additions, removals, edits): [https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v14.1.0/packages/eslint-config-airbnb/index.js](https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v14.1.0/packages/eslint-config-airbnb/index.js)

## Known differences
These are intentional differences between configs. This list is generated from explicit data defined within [diffs-to-run.js](../../tasks/docs/diffs/diffs-to-run.js).

### Settings (non-rules)
_None_


### Rules


#### Added rules
_None_

#### Removed rules
_None_

#### Edited rules
_None_


## Unknown/unmerged differences
These are differences that haven't been previously acknowledged. They may be changes we aren't aware of or simply
upstream changes that haven't been merged yet. Any differences listed here that we _are_ aware of
should be added to the list in [the diff task](../../tasks/docs/diffs/diffs-to-run.js) to remove them from here.

### Settings (non-rules)

-     env.browser
  - [<del>true</del>]
-     env.amd
  - [<del>false</del>]
-     env.mocha
  - [<del>false</del>]
-     env.jasmine
  - [<del>false</del>]
-     env.es6
  - [false]
  - [true]
-     parserOptions.ecmaFeatures.arrowFunctions
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.blockBindings
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.classes
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.defaultParams
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.destructuring
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.forOf
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.modules
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.objectLiteralComputedProperties
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.objectLiteralShorthandMethods
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.objectLiteralShorthandProperties
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.restParams
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.spread
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.superInFunctions
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.templateStrings
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.experimentalObjectRestSpread
  - [<ins>true</ins>]
-     parserOptions.ecmaVersion
  - [6]
  - [2017]
-     ecmaFeatures.jsx
  - [<ins>true</ins>]
-     parser
  - [<del>&quot;C:\\hudl\\javascript\\packages\\eslint-config-hudl\\node_modules\\babel-eslint\\index.js&quot;</del>]
-     plugins.0
  - [&quot;react&quot;]
  - [&quot;import&quot;]
-     plugins
  - [[&quot;react&quot;]]
  - [[&quot;import&quot;,&quot;react&quot;,&quot;jsx-a11y&quot;]]
-     plugins
  - [[&quot;react&quot;]]
  - [[&quot;import&quot;,&quot;react&quot;,&quot;jsx-a11y&quot;]]
-     settings
  - [<ins>{&quot;import/resolver&quot;:{&quot;node&quot;:{&quot;extensions&quot;:[&quot;.js&quot;,&quot;.jsx&quot;,&quot;.json&quot;]}},&quot;import/extensions&quot;:[&quot;.js&quot;,&quot;.jsx&quot;],&quot;import/core-modules&quot;:[],&quot;import/ignore&quot;:[&quot;node_modules&quot;,&quot;\\.(coffee|scss|css|less|hbs|svg|json)$&quot;],&quot;react&quot;:{&quot;pragma&quot;:&quot;React&quot;,&quot;version&quot;:&quot;0.14&quot;}}</ins>]

### Rules


#### Added rules
- 
    [array-callback-return](http://eslint.org/docs/rules/array-callback-return.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [block-spacing](http://eslint.org/docs/rules/block-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [capitalized-comments](http://eslint.org/docs/rules/capitalized-comments.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;never&quot;</ins>, <ins>{&quot;line&quot;:{&quot;ignorePattern&quot;:&quot;.*&quot;,&quot;ignoreInlineComments&quot;:true,&quot;ignoreConsecutiveComments&quot;:true},&quot;block&quot;:{&quot;ignorePattern&quot;:&quot;.*&quot;,&quot;ignoreInlineComments&quot;:true,&quot;ignoreConsecutiveComments&quot;:true}}</ins>]
- 
    [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;exceptMethods&quot;:[&quot;render&quot;,&quot;getInitialState&quot;,&quot;getDefaultProps&quot;,&quot;getChildContext&quot;,&quot;componentWillMount&quot;,&quot;componentDidMount&quot;,&quot;componentWillReceiveProps&quot;,&quot;shouldComponentUpdate&quot;,&quot;componentWillUpdate&quot;,&quot;componentDidUpdate&quot;,&quot;componentWillUnmount&quot;]}</ins>]
- 
    [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [func-name-matching](http://eslint.org/docs/rules/func-name-matching.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;always&quot;</ins>, <ins>{&quot;includeCommonJSModuleExports&quot;:false}</ins>]
- 
    [global-require](http://eslint.org/docs/rules/global-require.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [id-blacklist](http://eslint.org/docs/rules/id-blacklist.html)
  - [<ins>&quot;off&quot;</ins>]
-     import/default
  - [<ins>&quot;off&quot;</ins>]
-     import/export
  - [<ins>&quot;error&quot;</ins>]
-     import/extensions
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>, <ins>{&quot;js&quot;:&quot;never&quot;,&quot;jsx&quot;:&quot;never&quot;}</ins>]
-     import/first
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;absolute-first&quot;</ins>]
-     import/imports-first
  - [<ins>&quot;off&quot;</ins>]
-     import/max-dependencies
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:10}</ins>]
-     import/named
  - [<ins>&quot;off&quot;</ins>]
-     import/namespace
  - [<ins>&quot;off&quot;</ins>]
-     import/newline-after-import
  - [<ins>&quot;error&quot;</ins>]
-     import/no-absolute-path
  - [<ins>&quot;error&quot;</ins>]
-     import/no-amd
  - [<ins>&quot;error&quot;</ins>]
-     import/no-commonjs
  - [<ins>&quot;off&quot;</ins>]
-     import/no-deprecated
  - [<ins>&quot;off&quot;</ins>]
-     import/no-duplicates
  - [<ins>&quot;error&quot;</ins>]
-     import/no-dynamic-require
  - [<ins>&quot;error&quot;</ins>]
-     import/no-extraneous-dependencies
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;devDependencies&quot;:[&quot;test/**&quot;,&quot;tests/**&quot;,&quot;spec/**&quot;,&quot;**/__tests__/**&quot;,&quot;test.js&quot;,&quot;test-*.js&quot;,&quot;**/*.test.js&quot;,&quot;**/webpack.config.js&quot;,&quot;**/webpack.config.*.js&quot;,&quot;**/rollup.config.js&quot;,&quot;**/gulpfile.js&quot;,&quot;**/gulpfile.*.js&quot;,&quot;**/Gruntfile&quot;],&quot;optionalDependencies&quot;:false}</ins>]
-     import/no-internal-modules
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;allow&quot;:[]}</ins>]
-     import/no-mutable-exports
  - [<ins>&quot;error&quot;</ins>]
-     import/no-named-as-default
  - [<ins>&quot;error&quot;</ins>]
-     import/no-named-as-default-member
  - [<ins>&quot;error&quot;</ins>]
-     import/no-named-default
  - [<ins>&quot;error&quot;</ins>]
-     import/no-namespace
  - [<ins>&quot;off&quot;</ins>]
-     import/no-nodejs-modules
  - [<ins>&quot;off&quot;</ins>]
-     import/no-restricted-paths
  - [<ins>&quot;off&quot;</ins>]
-     import/no-unassigned-import
  - [<ins>&quot;off&quot;</ins>]
-     import/no-unresolved
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;commonjs&quot;:true,&quot;caseSensitive&quot;:true}</ins>]
-     import/no-webpack-loader-syntax
  - [<ins>&quot;error&quot;</ins>]
-     import/order
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;groups&quot;:[&quot;builtin&quot;,&quot;external&quot;,&quot;internal&quot;,&quot;parent&quot;,&quot;sibling&quot;,&quot;index&quot;],&quot;newlines-between&quot;:&quot;never&quot;}</ins>]
-     import/prefer-default-export
  - [<ins>&quot;error&quot;</ins>]
-     import/unambiguous
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/anchor-has-content
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[&quot;&quot;]}</ins>]
-     jsx-a11y/aria-props
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/aria-proptypes
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/aria-role
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/aria-unsupported-elements
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/click-events-have-key-events
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/heading-has-content
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[&quot;&quot;]}</ins>]
-     jsx-a11y/href-no-hash
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[&quot;a&quot;]}</ins>]
-     jsx-a11y/html-has-lang
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/img-has-alt
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/img-redundant-alt
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/label-has-for
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[&quot;label&quot;]}</ins>]
-     jsx-a11y/lang
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/mouse-events-have-key-events
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/no-access-key
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/no-onchange
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/no-static-element-interactions
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/onclick-has-focus
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/onclick-has-role
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/role-has-required-aria-props
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/role-supports-aria-props
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/scope
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/tabindex-no-positive
  - [<ins>&quot;error&quot;</ins>]
- 
    [line-comment-position](http://eslint.org/docs/rules/line-comment-position.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;position&quot;:&quot;above&quot;,&quot;ignorePattern&quot;:&quot;&quot;,&quot;applyDefaultPatterns&quot;:true}</ins>]
- 
    [lines-around-directive](http://eslint.org/docs/rules/lines-around-directive.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:&quot;always&quot;,&quot;after&quot;:&quot;always&quot;}</ins>]
- 
    [max-lines](http://eslint.org/docs/rules/max-lines.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:300,&quot;skipBlankLines&quot;:true,&quot;skipComments&quot;:true}</ins>]
- 
    [max-statements-per-line](http://eslint.org/docs/rules/max-statements-per-line.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:1}</ins>]
- 
    [multiline-ternary](http://eslint.org/docs/rules/multiline-ternary.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [newline-before-return](http://eslint.org/docs/rules/newline-before-return.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreChainWithDepth&quot;:4}</ins>]
- 
    [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowParens&quot;:true}</ins>]
- 
    [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-empty-function](http://eslint.org/docs/rules/no-empty-function.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allow&quot;:[&quot;arrowFunctions&quot;,&quot;functions&quot;,&quot;methods&quot;]}</ins>]
- 
    [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extra-label](http://eslint.org/docs/rules/no-extra-label.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-global-assign](http://eslint.org/docs/rules/no-global-assign.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;exceptions&quot;:[]}</ins>]
- 
    [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-magic-numbers](http://eslint.org/docs/rules/no-magic-numbers.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignore&quot;:[],&quot;ignoreArrayIndexes&quot;:true,&quot;enforceConst&quot;:true,&quot;detectObjects&quot;:false}</ins>]
- 
    [no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;groups&quot;:[[&quot;+&quot;,&quot;-&quot;,&quot;*&quot;,&quot;/&quot;,&quot;%&quot;,&quot;**&quot;],[&quot;&amp;&quot;,&quot;|&quot;,&quot;^&quot;,&quot;~&quot;,&quot;&lt;&lt;&quot;,&quot;&gt;&gt;&quot;,&quot;&gt;&gt;&gt;&quot;],[&quot;&#x3D;&#x3D;&quot;,&quot;!&#x3D;&quot;,&quot;&#x3D;&#x3D;&#x3D;&quot;,&quot;!&#x3D;&#x3D;&quot;,&quot;&gt;&quot;,&quot;&gt;&#x3D;&quot;,&quot;&lt;&quot;,&quot;&lt;&#x3D;&quot;],[&quot;&amp;&amp;&quot;,&quot;||&quot;],[&quot;in&quot;,&quot;instanceof&quot;]],&quot;allowSamePrecedence&quot;:false}</ins>]
- 
    [no-multi-assign](http://eslint.org/docs/rules/no-multi-assign.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-negated-condition](http://eslint.org/docs/rules/no-negated-condition.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-restricted-globals](http://eslint.org/docs/rules/no-restricted-globals.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-restricted-imports](http://eslint.org/docs/rules/no-restricted-imports.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-restricted-properties](http://eslint.org/docs/rules/no-restricted-properties.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;object&quot;:&quot;arguments&quot;,&quot;property&quot;:&quot;callee&quot;,&quot;message&quot;:&quot;arguments.callee is deprecated&quot;}</ins>, <ins>{&quot;property&quot;:&quot;__defineGetter__&quot;,&quot;message&quot;:&quot;Please use Object.defineProperty instead.&quot;}</ins>, <ins>{&quot;property&quot;:&quot;__defineSetter__&quot;,&quot;message&quot;:&quot;Please use Object.defineProperty instead.&quot;}</ins>, <ins>{&quot;object&quot;:&quot;Math&quot;,&quot;property&quot;:&quot;pow&quot;,&quot;message&quot;:&quot;Use the exponentiation operator (**) instead.&quot;}</ins>]
- 
    [no-restricted-syntax](http://eslint.org/docs/rules/no-restricted-syntax.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;ForInStatement&quot;</ins>, <ins>&quot;ForOfStatement&quot;</ins>, <ins>&quot;LabeledStatement&quot;</ins>, <ins>&quot;WithStatement&quot;</ins>]
- 
    [no-return-await](http://eslint.org/docs/rules/no-return-await.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-self-assign](http://eslint.org/docs/rules/no-self-assign.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-tabs](http://eslint.org/docs/rules/no-tabs.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unused-labels](http://eslint.org/docs/rules/no-unused-labels.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-concat](http://eslint.org/docs/rules/no-useless-concat.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-rename](http://eslint.org/docs/rules/no-useless-rename.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreDestructuring&quot;:false,&quot;ignoreImport&quot;:false,&quot;ignoreExport&quot;:false}</ins>]
- 
    [no-useless-return](http://eslint.org/docs/rules/no-useless-return.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [object-curly-newline](http://eslint.org/docs/rules/object-curly-newline.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ObjectExpression&quot;:{&quot;minProperties&quot;:0,&quot;multiline&quot;:true},&quot;ObjectPattern&quot;:{&quot;minProperties&quot;:0,&quot;multiline&quot;:true}}</ins>]
- 
    [object-property-newline](http://eslint.org/docs/rules/object-property-newline.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowMultiplePropertiesPerLine&quot;:true}</ins>]
- 
    [one-var-declaration-per-line](http://eslint.org/docs/rules/one-var-declaration-per-line.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [prefer-destructuring](http://eslint.org/docs/rules/prefer-destructuring.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;array&quot;:true,&quot;object&quot;:true}</ins>, <ins>{&quot;enforceForRenamedProperties&quot;:false}</ins>]
- 
    [prefer-numeric-literals](http://eslint.org/docs/rules/prefer-numeric-literals.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;allowEmptyReject&quot;:true}</ins>]
- 
    [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params.html)
  - [<ins>&quot;error&quot;</ins>]
-     react/forbid-component-props
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;forbid&quot;:[]}</ins>]
-     react/jsx-equals-spacing
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
-     react/jsx-filename-extension
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;extensions&quot;:[&quot;.jsx&quot;]}</ins>]
-     react/jsx-first-prop-new-line
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;multiline&quot;</ins>]
-     react/jsx-indent
  - [<ins>&quot;error&quot;</ins>, <ins>2</ins>]
-     react/jsx-no-comment-textnodes
  - [<ins>&quot;error&quot;</ins>]
-     react/jsx-no-target-blank
  - [<ins>&quot;error&quot;</ins>]
-     react/jsx-space-before-closing
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
-     react/jsx-tag-spacing
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;closingSlash&quot;:&quot;never&quot;,&quot;beforeSelfClosing&quot;:&quot;always&quot;,&quot;afterOpening&quot;:&quot;never&quot;}</ins>]
-     react/no-array-index-key
  - [<ins>&quot;error&quot;</ins>]
-     react/no-children-prop
  - [<ins>&quot;error&quot;</ins>]
-     react/no-comment-textnodes
  - [<ins>&quot;off&quot;</ins>]
-     react/no-danger-with-children
  - [<ins>&quot;error&quot;</ins>]
-     react/no-find-dom-node
  - [<ins>&quot;error&quot;</ins>]
-     react/no-render-return-value
  - [<ins>&quot;error&quot;</ins>]
-     react/no-unescaped-entities
  - [<ins>&quot;error&quot;</ins>]
-     react/no-unused-prop-types
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;customValidators&quot;:[],&quot;skipShapeProps&quot;:true}</ins>]
-     react/prefer-stateless-function
  - [<ins>&quot;error&quot;</ins>]
-     react/require-default-props
  - [<ins>&quot;error&quot;</ins>]
-     react/require-optimization
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;allowDecorators&quot;:[]}</ins>]
-     react/require-render-return
  - [<ins>&quot;error&quot;</ins>]
-     react/sort-prop-types
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignoreCase&quot;:true,&quot;callbacksLast&quot;:false,&quot;requiredFirst&quot;:false}</ins>]
-     react/style-prop-object
  - [<ins>&quot;error&quot;</ins>]
-     react/wrap-multilines
  - [<ins>&quot;off&quot;</ins>]
- 
    [require-await](http://eslint.org/docs/rules/require-await.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [sort-imports](http://eslint.org/docs/rules/sort-imports.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignoreCase&quot;:false,&quot;ignoreMemberSort&quot;:false,&quot;memberSyntaxSortOrder&quot;:[&quot;none&quot;,&quot;all&quot;,&quot;multiple&quot;,&quot;single&quot;]}</ins>]
- 
    [sort-keys](http://eslint.org/docs/rules/sort-keys.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;asc&quot;</ins>, <ins>{&quot;caseSensitive&quot;:false,&quot;natural&quot;:true}</ins>]
- 
    [symbol-description](http://eslint.org/docs/rules/symbol-description.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [template-tag-spacing](http://eslint.org/docs/rules/template-tag-spacing.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [unicode-bom](http://eslint.org/docs/rules/unicode-bom.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;after&quot;</ins>]

#### Removed rules
_None_

#### Edited rules
- 
    [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;requireReturnForObjectLiteral&quot;:false}</ins>]
- 
    [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;requireForBlockBody&quot;:true}</ins>]
- 
    [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:true,&quot;after&quot;:true}</ins>]
- 
    [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [brace-style](http://eslint.org/docs/rules/brace-style.html)
  - [<del>2</del>, &quot;1tbs&quot;, {&quot;allowSingleLine&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, &quot;1tbs&quot;, {&quot;allowSingleLine&quot;:true}]
- 
    [callback-return](http://eslint.org/docs/rules/callback-return.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [camelcase](http://eslint.org/docs/rules/camelcase.html)
  - [<del>2</del>, {&quot;properties&quot;:&quot;never&quot;}]
  - [<ins>&quot;error&quot;</ins>, {&quot;properties&quot;:&quot;never&quot;}]
- 
    [comma-dangle](http://eslint.org/docs/rules/comma-dangle.html)
  - [<del>2</del>, <del>&quot;always-multiline&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;arrays&quot;:&quot;always-multiline&quot;,&quot;objects&quot;:&quot;always-multiline&quot;,&quot;imports&quot;:&quot;always-multiline&quot;,&quot;exports&quot;:&quot;always-multiline&quot;,&quot;functions&quot;:&quot;always-multiline&quot;}</ins>]
- 
    [comma-spacing](http://eslint.org/docs/rules/comma-spacing.html)
  - [<del>2</del>, {&quot;before&quot;:false,&quot;after&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;before&quot;:false,&quot;after&quot;:true}]
- 
    [comma-style](http://eslint.org/docs/rules/comma-style.html)
  - [<del>2</del>, &quot;last&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;last&quot;]
- 
    [complexity](http://eslint.org/docs/rules/complexity.html)
  - [<del>0</del>, 11]
  - [<ins>&quot;off&quot;</ins>, 11]
- 
    [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [consistent-return](http://eslint.org/docs/rules/consistent-return.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [consistent-this](http://eslint.org/docs/rules/consistent-this.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [constructor-super](http://eslint.org/docs/rules/constructor-super.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [curly](http://eslint.org/docs/rules/curly.html)
  - [<del>2</del>, &quot;multi-line&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;multi-line&quot;]
- 
    [default-case](http://eslint.org/docs/rules/default-case.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;commentPattern&quot;:&quot;^no default$&quot;}</ins>]
- 
    [dot-location](http://eslint.org/docs/rules/dot-location.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;property&quot;</ins>]
- 
    [dot-notation](http://eslint.org/docs/rules/dot-notation.html)
  - [<del>2</del>, {&quot;allowKeywords&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;allowKeywords&quot;:true}]
- 
    [eol-last](http://eslint.org/docs/rules/eol-last.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [eqeqeq](http://eslint.org/docs/rules/eqeqeq.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>, <ins>{&quot;null&quot;:&quot;ignore&quot;}</ins>]
- 
    [func-names](http://eslint.org/docs/rules/func-names.html)
  - [<del>1</del>]
  - [<ins>&quot;warn&quot;</ins>]
- 
    [func-style](http://eslint.org/docs/rules/func-style.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;expression&quot;</ins>]
- 
    [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:false,&quot;after&quot;:true}</ins>]
- 
    [guard-for-in](http://eslint.org/docs/rules/guard-for-in.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [id-length](http://eslint.org/docs/rules/id-length.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [id-match](http://eslint.org/docs/rules/id-match.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [indent](http://eslint.org/docs/rules/indent.html)
  - [<del>2</del>, 2]
  - [<ins>&quot;error&quot;</ins>, 2, <ins>{&quot;SwitchCase&quot;:1,&quot;VariableDeclarator&quot;:1,&quot;outerIIFEBody&quot;:1,&quot;FunctionDeclaration&quot;:{&quot;parameters&quot;:1,&quot;body&quot;:1},&quot;FunctionExpression&quot;:{&quot;parameters&quot;:1,&quot;body&quot;:1}}</ins>]
- 
    [init-declarations](http://eslint.org/docs/rules/init-declarations.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;prefer-double&quot;</ins>]
- 
    [key-spacing](http://eslint.org/docs/rules/key-spacing.html)
  - [<del>2</del>, {&quot;beforeColon&quot;:false,&quot;afterColon&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;beforeColon&quot;:false,&quot;afterColon&quot;:true}]
- 
    [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:true,&quot;after&quot;:true,&quot;overrides&quot;:{&quot;return&quot;:{&quot;after&quot;:true},&quot;throw&quot;:{&quot;after&quot;:true},&quot;case&quot;:{&quot;after&quot;:true}}}</ins>]
- 
    [linebreak-style](http://eslint.org/docs/rules/linebreak-style.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;unix&quot;</ins>]
- 
    [lines-around-comment](http://eslint.org/docs/rules/lines-around-comment.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [max-depth](http://eslint.org/docs/rules/max-depth.html)
  - [<del>0</del>, 4]
  - [<ins>&quot;off&quot;</ins>, 4]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [<del>2</del>, <del>120</del>, <del>4</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>100</ins>, <ins>2</ins>, <ins>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false,&quot;ignoreRegExpLiterals&quot;:true,&quot;ignoreStrings&quot;:true,&quot;ignoreTemplateLiterals&quot;:true}</ins>]
- 
    [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [max-params](http://eslint.org/docs/rules/max-params.html)
  - [<del>0</del>, 3]
  - [<ins>&quot;off&quot;</ins>, 3]
- 
    [max-statements](http://eslint.org/docs/rules/max-statements.html)
  - [<del>0</del>, 10]
  - [<ins>&quot;off&quot;</ins>, 10]
- 
    [new-cap](http://eslint.org/docs/rules/new-cap.html)
  - [<del>2</del>, <del>{&quot;newIsCap&quot;:true,&quot;capIsNew&quot;:false}</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;newIsCap&quot;:true,&quot;newIsCapExceptions&quot;:[],&quot;capIsNew&quot;:false,&quot;capIsNewExceptions&quot;:[&quot;Immutable.Map&quot;,&quot;Immutable.Set&quot;,&quot;Immutable.List&quot;]}</ins>]
- 
    [new-parens](http://eslint.org/docs/rules/new-parens.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [newline-after-var](http://eslint.org/docs/rules/newline-after-var.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-alert](http://eslint.org/docs/rules/no-alert.html)
  - [<del>1</del>]
  - [<ins>&quot;warn&quot;</ins>]
- 
    [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-bitwise](http://eslint.org/docs/rules/no-bitwise.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-caller](http://eslint.org/docs/rules/no-caller.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-class-assign](http://eslint.org/docs/rules/no-class-assign.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign.html)
  - [<del>2</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;]
- 
    [no-console](http://eslint.org/docs/rules/no-console.html)
  - [<del>1</del>]
  - [<ins>&quot;warn&quot;</ins>]
- 
    [no-const-assign](http://eslint.org/docs/rules/no-const-assign.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition.html)
  - [<del>1</del>]
  - [<ins>&quot;warn&quot;</ins>]
- 
    [no-continue](http://eslint.org/docs/rules/no-continue.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-control-regex](http://eslint.org/docs/rules/no-control-regex.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-debugger](http://eslint.org/docs/rules/no-debugger.html)
  - [<del>1</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-delete-var](http://eslint.org/docs/rules/no-delete-var.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-div-regex](http://eslint.org/docs/rules/no-div-regex.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-else-return](http://eslint.org/docs/rules/no-else-return.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-empty](http://eslint.org/docs/rules/no-empty.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-eq-null](http://eslint.org/docs/rules/no-eq-null.html)
  - [<del>2</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-eval](http://eslint.org/docs/rules/no-eval.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extend-native](http://eslint.org/docs/rules/no-extend-native.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens.html)
  - [<del>2</del>, <del>&quot;functions&quot;</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;all&quot;</ins>, <ins>{&quot;conditionalAssign&quot;:true,&quot;nestedBinaryExpressions&quot;:false,&quot;returnAssign&quot;:false}</ins>]
- 
    [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-func-assign](http://eslint.org/docs/rules/no-func-assign.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;boolean&quot;:false,&quot;number&quot;:true,&quot;string&quot;:true,&quot;allow&quot;:[]}</ins>]
- 
    [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-inline-comments](http://eslint.org/docs/rules/no-inline-comments.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-iterator](http://eslint.org/docs/rules/no-iterator.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-label-var](http://eslint.org/docs/rules/no-label-var.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-labels](http://eslint.org/docs/rules/no-labels.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowLoop&quot;:false,&quot;allowSwitch&quot;:false}</ins>]
- 
    [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-loop-func](http://eslint.org/docs/rules/no-loop-func.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-mixed-requires](http://eslint.org/docs/rules/no-mixed-requires.html)
  - [<del>0</del>, false]
  - [<ins>&quot;off&quot;</ins>, false]
- 
    [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-multi-str](http://eslint.org/docs/rules/no-multi-str.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines.html)
  - [<del>2</del>, <del>{&quot;max&quot;:2}</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;max&quot;:2,&quot;maxEOF&quot;:1}</ins>]
- 
    [no-native-reassign](http://eslint.org/docs/rules/no-native-reassign.html)
  - [<del>2</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-new](http://eslint.org/docs/rules/no-new.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-new-func](http://eslint.org/docs/rules/no-new-func.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-new-object](http://eslint.org/docs/rules/no-new-object.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-new-require](http://eslint.org/docs/rules/no-new-require.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-octal](http://eslint.org/docs/rules/no-octal.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;props&quot;:true}</ins>]
- 
    [no-path-concat](http://eslint.org/docs/rules/no-path-concat.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-plusplus](http://eslint.org/docs/rules/no-plusplus.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-process-env](http://eslint.org/docs/rules/no-process-env.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-process-exit](http://eslint.org/docs/rules/no-process-exit.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-proto](http://eslint.org/docs/rules/no-proto.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-redeclare](http://eslint.org/docs/rules/no-redeclare.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-restricted-modules](http://eslint.org/docs/rules/no-restricted-modules.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-return-assign](http://eslint.org/docs/rules/no-return-assign.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-script-url](http://eslint.org/docs/rules/no-script-url.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-self-compare](http://eslint.org/docs/rules/no-self-compare.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-sequences](http://eslint.org/docs/rules/no-sequences.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-shadow](http://eslint.org/docs/rules/no-shadow.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-spaced-func](http://eslint.org/docs/rules/no-spaced-func.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-sync](http://eslint.org/docs/rules/no-sync.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-ternary](http://eslint.org/docs/rules/no-ternary.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-undef](http://eslint.org/docs/rules/no-undef.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-undef-init](http://eslint.org/docs/rules/no-undef-init.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-undefined](http://eslint.org/docs/rules/no-undefined.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowAfterThis&quot;:false}</ins>]
- 
    [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;defaultAssignment&quot;:false}</ins>]
- 
    [no-unreachable](http://eslint.org/docs/rules/no-unreachable.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowShortCircuit&quot;:false,&quot;allowTernary&quot;:false}</ins>]
- 
    [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars.html)
  - [<del>2</del>, {&quot;vars&quot;:&quot;local&quot;,&quot;args&quot;:&quot;after-used&quot;}]
  - [<ins>&quot;error&quot;</ins>, {&quot;vars&quot;:&quot;local&quot;,&quot;args&quot;:&quot;after-used&quot;}]
- 
    [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-call](http://eslint.org/docs/rules/no-useless-call.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-var](http://eslint.org/docs/rules/no-var.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-void](http://eslint.org/docs/rules/no-void.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-warning-comments](http://eslint.org/docs/rules/no-warning-comments.html)
  - [<del>0</del>, {&quot;terms&quot;:[&quot;todo&quot;,&quot;fixme&quot;,&quot;xxx&quot;],&quot;location&quot;:&quot;start&quot;}]
  - [<ins>&quot;off&quot;</ins>, {&quot;terms&quot;:[&quot;todo&quot;,&quot;fixme&quot;,&quot;xxx&quot;],&quot;location&quot;:&quot;start&quot;}]
- 
    [no-with](http://eslint.org/docs/rules/no-with.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing.html)
  - [<del>0</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;]
- 
    [object-shorthand](http://eslint.org/docs/rules/object-shorthand.html)
  - [<del>0</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;, <ins>{&quot;ignoreConstructors&quot;:false,&quot;avoidQuotes&quot;:true}</ins>]
- 
    [one-var](http://eslint.org/docs/rules/one-var.html)
  - [<del>2</del>, &quot;never&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;]
- 
    [operator-assignment](http://eslint.org/docs/rules/operator-assignment.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [padded-blocks](http://eslint.org/docs/rules/padded-blocks.html)
  - [<del>2</del>, &quot;never&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;]
- 
    [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowNamedFunctions&quot;:false,&quot;allowUnboundThis&quot;:true}</ins>]
- 
    [prefer-const](http://eslint.org/docs/rules/prefer-const.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;destructuring&quot;:&quot;any&quot;,&quot;ignoreReadBeforeAssign&quot;:true}</ins>]
- 
    [prefer-reflect](http://eslint.org/docs/rules/prefer-reflect.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [prefer-spread](http://eslint.org/docs/rules/prefer-spread.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [prefer-template](http://eslint.org/docs/rules/prefer-template.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [<del>2</del>, <del>&quot;consistent&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</ins>]
- 
    [quotes](http://eslint.org/docs/rules/quotes.html)
  - [<del>2</del>, &quot;single&quot;, <del>&quot;avoid-escape&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, &quot;single&quot;, <ins>{&quot;avoidEscape&quot;:true}</ins>]
- 
    [radix](http://eslint.org/docs/rules/radix.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/display-name
  - [<del>0</del>, <del>{&quot;acceptTranspilerName&quot;:false}</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignoreTranspilerName&quot;:false}</ins>]
-     react/forbid-prop-types
  - [<del>0</del>, {&quot;forbid&quot;:[&quot;any&quot;,&quot;array&quot;,&quot;object&quot;]}]
  - [<ins>&quot;error&quot;</ins>, {&quot;forbid&quot;:[&quot;any&quot;,&quot;array&quot;,&quot;object&quot;]}]
-     react/jsx-boolean-value
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
-     react/jsx-closing-bracket-location
  - [<del>0</del>, &quot;line-aligned&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;line-aligned&quot;]
-     react/jsx-curly-spacing
  - [<del>0</del>, &quot;never&quot;, {&quot;allowMultiline&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;, {&quot;allowMultiline&quot;:true}]
-     react/jsx-handler-names
  - [<del>0</del>, {&quot;eventHandlerPrefix&quot;:&quot;handle&quot;,&quot;eventHandlerPropPrefix&quot;:&quot;on&quot;}]
  - [<ins>&quot;off&quot;</ins>, {&quot;eventHandlerPrefix&quot;:&quot;handle&quot;,&quot;eventHandlerPropPrefix&quot;:&quot;on&quot;}]
-     react/jsx-indent-props
  - [<del>0</del>, 2]
  - [<ins>&quot;error&quot;</ins>, 2]
-     react/jsx-key
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/jsx-max-props-per-line
  - [<del>0</del>, {&quot;maximum&quot;:1}]
  - [<ins>&quot;off&quot;</ins>, {&quot;maximum&quot;:1}]
-     react/jsx-no-bind
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreRefs&quot;:true,&quot;allowArrowFunctions&quot;:true,&quot;allowBind&quot;:false}</ins>]
-     react/jsx-no-duplicate-props
  - [<del>0</del>, <del>{&quot;ignoreCase&quot;:false}</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreCase&quot;:true}</ins>]
-     react/jsx-no-literals
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/jsx-no-undef
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/jsx-pascal-case
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowAllCaps&quot;:true,&quot;ignore&quot;:[]}</ins>]
-     react/jsx-sort-prop-types
  - [<del>0</del>, <del>{&quot;ignoreCase&quot;:false,&quot;callbacksLast&quot;:false}</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/jsx-sort-props
  - [<del>0</del>, <del>{&quot;ignoreCase&quot;:false,&quot;callbacksLast&quot;:false}</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignoreCase&quot;:true,&quot;callbacksLast&quot;:false,&quot;shorthandFirst&quot;:false,&quot;shorthandLast&quot;:false}</ins>]
-     react/jsx-uses-react
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/jsx-uses-vars
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/jsx-wrap-multilines
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;declaration&quot;:true,&quot;assignment&quot;:true,&quot;return&quot;:true}</ins>]
-     react/no-danger
  - [<del>0</del>]
  - [<ins>&quot;warn&quot;</ins>]
-     react/no-deprecated
  - [<del>0</del>, <del>{&quot;react&quot;:&quot;0.14.0&quot;}</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-did-mount-set-state
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-did-update-set-state
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-direct-mutation-state
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/no-is-mounted
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-multi-comp
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreStateless&quot;:true}</ins>]
-     react/no-set-state
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/no-string-refs
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-unknown-property
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/prefer-es6-class
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
-     react/prop-types
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignore&quot;:[],&quot;customValidators&quot;:[]}</ins>]
-     react/react-in-jsx-scope
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/require-extension
  - [<del>0</del>, <del>{&quot;extensions&quot;:[&quot;.jsx&quot;]}</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;extensions&quot;:[&quot;.jsx&quot;,&quot;.js&quot;]}</ins>]
-     react/self-closing-comp
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/sort-comp
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;order&quot;:[&quot;static-methods&quot;,&quot;lifecycle&quot;,&quot;/^on.+$/&quot;,&quot;/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/&quot;,&quot;everything-else&quot;,&quot;/^render.+$/&quot;,&quot;render&quot;]}</ins>]
- 
    [require-yield](http://eslint.org/docs/rules/require-yield.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [semi](http://eslint.org/docs/rules/semi.html)
  - [<del>2</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;]
- 
    [semi-spacing](http://eslint.org/docs/rules/semi-spacing.html)
  - [<del>2</del>, {&quot;before&quot;:false,&quot;after&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;before&quot;:false,&quot;after&quot;:true}]
- 
    [sort-vars](http://eslint.org/docs/rules/sort-vars.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren.html)
  - [<del>2</del>, <del>&quot;never&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;anonymous&quot;:&quot;always&quot;,&quot;named&quot;:&quot;never&quot;,&quot;asyncArrow&quot;:&quot;always&quot;}</ins>]
- 
    [space-in-parens](http://eslint.org/docs/rules/space-in-parens.html)
  - [<del>0</del>, &quot;never&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;]
- 
    [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;words&quot;:true,&quot;nonwords&quot;:false,&quot;overrides&quot;:{}}</ins>]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>, <ins>{&quot;line&quot;:{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]},&quot;block&quot;:{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;],&quot;balanced&quot;:false}}</ins>]
- 
    [strict](http://eslint.org/docs/rules/strict.html)
  - [<del>2</del>, &quot;never&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;]
- 
    [use-isnan](http://eslint.org/docs/rules/use-isnan.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [valid-typeof](http://eslint.org/docs/rules/valid-typeof.html)
  - [<del>0</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;requireStringLiterals&quot;:true}</ins>]
- 
    [vars-on-top](http://eslint.org/docs/rules/vars-on-top.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)
  - [<del>2</del>, <del>&quot;any&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;outside&quot;</ins>, <ins>{&quot;functionPrototypeMethods&quot;:false}</ins>]
- 
    [wrap-regex](http://eslint.org/docs/rules/wrap-regex.html)
  - [<del>0</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [yoda](http://eslint.org/docs/rules/yoda.html)
  - [<del>2</del>]
  - [<ins>&quot;error&quot;</ins>]
