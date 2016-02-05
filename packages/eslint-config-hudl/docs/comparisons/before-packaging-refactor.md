# ESLint Config Diff (vs hudl/javascript before packaging refactor)

Comparison of changes between ESLint configs. This is the computed result of the source config, including the effects of any extended configs. Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.
 Rules have been normalized to the array format for consistent diff formatting. Non-rule settings are also currently displayed within an array (for rendering simplicity).

Base (starting point): [../../index.js](../../index.js)

Comparison (additions, removals, edits): [https://github.com/hudl/javascript/blob/53f28eea91be00b7b167deb865ff7468de743b85/linters/.eslintrc](https://github.com/hudl/javascript/blob/53f28eea91be00b7b167deb865ff7468de743b85/linters/.eslintrc)

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

-     parser
  - [<ins>&quot;babel-eslint&quot;</ins>]
-     env.amd
  - [<del>false</del>]
-     env.mocha
  - [<del>false</del>]
-     env.jasmine
  - [<del>false</del>]
-     env.es6
  - [<del>false</del>]
-     ecmaFeatures.restParams
  - [<del>true</del>]

### Rules


#### Added rules
_None_

#### Removed rules
- 
    [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs.html)
  - [<del>0</del>]
- 
    [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing.html)
  - [<del>2</del>, <del>&quot;never&quot;</del>]
- 
    [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style.html)
  - [<del>2</del>, <del>&quot;as-needed&quot;</del>]
- 
    [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)
  - [<del>0</del>]
- 
    [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing.html)
  - [<del>2</del>, <del>{&quot;before&quot;:true,&quot;after&quot;:true}</del>]
- 
    [callback-return](http://eslint.org/docs/rules/callback-return.html)
  - [<del>0</del>]
- 
    [complexity](http://eslint.org/docs/rules/complexity.html)
  - [<del>0</del>, <del>11</del>]
- 
    [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing.html)
  - [<del>2</del>, <del>&quot;never&quot;</del>]
- 
    [consistent-this](http://eslint.org/docs/rules/consistent-this.html)
  - [<del>0</del>]
- 
    [constructor-super](http://eslint.org/docs/rules/constructor-super.html)
  - [<del>0</del>]
- 
    [dot-location](http://eslint.org/docs/rules/dot-location.html)
  - [<del>0</del>]
- 
    [func-style](http://eslint.org/docs/rules/func-style.html)
  - [<del>0</del>]
- 
    [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing.html)
  - [<del>0</del>]
- 
    [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err.html)
  - [<del>0</del>]
- 
    [id-length](http://eslint.org/docs/rules/id-length.html)
  - [<del>0</del>]
- 
    [id-match](http://eslint.org/docs/rules/id-match.html)
  - [<del>0</del>]
- 
    [init-declarations](http://eslint.org/docs/rules/init-declarations.html)
  - [<del>0</del>]
- 
    [linebreak-style](http://eslint.org/docs/rules/linebreak-style.html)
  - [<del>0</del>]
- 
    [lines-around-comment](http://eslint.org/docs/rules/lines-around-comment.html)
  - [<del>0</del>]
- 
    [max-depth](http://eslint.org/docs/rules/max-depth.html)
  - [<del>0</del>, <del>4</del>]
- 
    [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks.html)
  - [<del>0</del>]
- 
    [max-params](http://eslint.org/docs/rules/max-params.html)
  - [<del>0</del>, <del>3</del>]
- 
    [max-statements](http://eslint.org/docs/rules/max-statements.html)
  - [<del>0</del>, <del>10</del>]
- 
    [new-parens](http://eslint.org/docs/rules/new-parens.html)
  - [<del>0</del>]
- 
    [newline-after-var](http://eslint.org/docs/rules/newline-after-var.html)
  - [<del>0</del>]
- 
    [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor.html)
  - [<del>0</del>]
- 
    [no-bitwise](http://eslint.org/docs/rules/no-bitwise.html)
  - [<del>0</del>]
- 
    [no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow.html)
  - [<del>0</del>]
- 
    [no-class-assign](http://eslint.org/docs/rules/no-class-assign.html)
  - [<del>0</del>]
- 
    [no-const-assign](http://eslint.org/docs/rules/no-const-assign.html)
  - [<del>2</del>]
- 
    [no-continue](http://eslint.org/docs/rules/no-continue.html)
  - [<del>0</del>]
- 
    [no-control-regex](http://eslint.org/docs/rules/no-control-regex.html)
  - [<del>2</del>]
- 
    [no-delete-var](http://eslint.org/docs/rules/no-delete-var.html)
  - [<del>2</del>]
- 
    [no-div-regex](http://eslint.org/docs/rules/no-div-regex.html)
  - [<del>0</del>]
- 
    [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args.html)
  - [<del>2</del>]
- 
    [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class.html)
  - [<del>2</del>]
- 
    [no-empty-label](http://eslint.org/docs/rules/no-empty-label.html)
  - [<del>2</del>]
- 
    [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion.html)
  - [<del>0</del>]
- 
    [no-inline-comments](http://eslint.org/docs/rules/no-inline-comments.html)
  - [<del>0</del>]
- 
    [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this.html)
  - [<del>0</del>]
- 
    [no-iterator](http://eslint.org/docs/rules/no-iterator.html)
  - [<del>2</del>]
- 
    [no-label-var](http://eslint.org/docs/rules/no-label-var.html)
  - [<del>0</del>]
- 
    [no-labels](http://eslint.org/docs/rules/no-labels.html)
  - [<del>2</del>]
- 
    [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if.html)
  - [<del>0</del>]
- 
    [no-mixed-requires](http://eslint.org/docs/rules/no-mixed-requires.html)
  - [<del>0</del>, <del>false</del>]
- 
    [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs.html)
  - [<del>2</del>]
- 
    [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces.html)
  - [<del>2</del>]
- 
    [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs.html)
  - [<del>2</del>]
- 
    [no-new-require](http://eslint.org/docs/rules/no-new-require.html)
  - [<del>0</del>]
- 
    [no-path-concat](http://eslint.org/docs/rules/no-path-concat.html)
  - [<del>0</del>]
- 
    [no-plusplus](http://eslint.org/docs/rules/no-plusplus.html)
  - [<del>0</del>]
- 
    [no-process-env](http://eslint.org/docs/rules/no-process-env.html)
  - [<del>0</del>]
- 
    [no-process-exit](http://eslint.org/docs/rules/no-process-exit.html)
  - [<del>0</del>]
- 
    [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces.html)
  - [<del>2</del>]
- 
    [no-restricted-modules](http://eslint.org/docs/rules/no-restricted-modules.html)
  - [<del>0</del>]
- 
    [no-sync](http://eslint.org/docs/rules/no-sync.html)
  - [<del>0</del>]
- 
    [no-ternary](http://eslint.org/docs/rules/no-ternary.html)
  - [<del>0</del>]
- 
    [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super.html)
  - [<del>0</del>]
- 
    [no-undef](http://eslint.org/docs/rules/no-undef.html)
  - [<del>2</del>]
- 
    [no-undef-init](http://eslint.org/docs/rules/no-undef-init.html)
  - [<del>0</del>]
- 
    [no-undefined](http://eslint.org/docs/rules/no-undefined.html)
  - [<del>0</del>]
- 
    [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline.html)
  - [<del>0</del>]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<del>0</del>]
- 
    [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions.html)
  - [<del>2</del>]
- 
    [no-useless-call](http://eslint.org/docs/rules/no-useless-call.html)
  - [<del>0</del>]
- 
    [no-void](http://eslint.org/docs/rules/no-void.html)
  - [<del>0</del>]
- 
    [no-warning-comments](http://eslint.org/docs/rules/no-warning-comments.html)
  - [<del>0</del>, <del>{&quot;terms&quot;:[&quot;todo&quot;,&quot;fixme&quot;,&quot;xxx&quot;],&quot;location&quot;:&quot;start&quot;}</del>]
- 
    [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing.html)
  - [<del>2</del>, <del>&quot;always&quot;</del>]
- 
    [object-shorthand](http://eslint.org/docs/rules/object-shorthand.html)
  - [<del>2</del>, <del>&quot;always&quot;</del>]
- 
    [operator-assignment](http://eslint.org/docs/rules/operator-assignment.html)
  - [<del>0</del>]
- 
    [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak.html)
  - [<del>0</del>]
- 
    [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html)
  - [<del>2</del>]
- 
    [prefer-reflect](http://eslint.org/docs/rules/prefer-reflect.html)
  - [<del>0</del>]
- 
    [prefer-spread](http://eslint.org/docs/rules/prefer-spread.html)
  - [<del>0</del>]
- 
    [prefer-template](http://eslint.org/docs/rules/prefer-template.html)
  - [<del>2</del>]
- 
    [require-yield](http://eslint.org/docs/rules/require-yield.html)
  - [<del>0</del>]
- 
    [sort-vars](http://eslint.org/docs/rules/sort-vars.html)
  - [<del>0</del>]
- 
    [space-before-keywords](http://eslint.org/docs/rules/space-before-keywords.html)
  - [<del>2</del>, <del>&quot;always&quot;</del>]
- 
    [space-in-parens](http://eslint.org/docs/rules/space-in-parens.html)
  - [<del>2</del>, <del>&quot;never&quot;</del>]
- 
    [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops.html)
  - [<del>0</del>]
- 
    [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc.html)
  - [<del>0</del>]
- 
    [valid-typeof](http://eslint.org/docs/rules/valid-typeof.html)
  - [<del>2</del>]
- 
    [wrap-regex](http://eslint.org/docs/rules/wrap-regex.html)
  - [<del>0</del>]

#### Edited rules
- 
    [indent](http://eslint.org/docs/rules/indent.html)
  - [2, 2, <del>{&quot;SwitchCase&quot;:1,&quot;VariableDeclarator&quot;:1}</del>]
  - [2, 2]
- 
    [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes.html)
  - [2, <del>&quot;prefer-double&quot;</del>]
  - [2]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [2, 120, <del>2</del>, <del>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}</del>]
  - [2, 120, <ins>4</ins>]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [2, 120, <del>2</del>, <del>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}</del>]
  - [2, 120, <ins>4</ins>]
- 
    [new-cap](http://eslint.org/docs/rules/new-cap.html)
  - [2, <del>{&quot;newIsCap&quot;:true}</del>]
  - [2, <ins>{&quot;newIsCap&quot;:true,&quot;capIsNew&quot;:false}</ins>]
- 
    [no-eq-null](http://eslint.org/docs/rules/no-eq-null.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines.html)
  - [2, <del>{&quot;max&quot;:2,&quot;maxEOF&quot;:1}</del>]
  - [2, <ins>{&quot;max&quot;:2}</ins>]
- 
    [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign.html)
  - [2, <del>{&quot;props&quot;:true}</del>]
  - [2]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [2, <del>&quot;as-needed&quot;</del>, <del>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</del>]
  - [2, <ins>&quot;consistent&quot;</ins>]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [2, <del>&quot;as-needed&quot;</del>, <del>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</del>]
  - [2, <ins>&quot;consistent&quot;</ins>]
-     react/display-name
  - [0, <del>{&quot;acceptTranspilerName&quot;:false}</del>]
  - [0]
-     react/forbid-prop-types
  - [0, <del>{&quot;forbid&quot;:[&quot;any&quot;,&quot;array&quot;,&quot;object&quot;]}</del>]
  - [0]
-     react/jsx-boolean-value
  - [2, <del>&quot;never&quot;</del>]
  - [2]
-     react/jsx-closing-bracket-location
  - [<del>2</del>, <del>&quot;line-aligned&quot;</del>]
  - [<ins>0</ins>]
-     react/jsx-closing-bracket-location
  - [<del>2</del>, <del>&quot;line-aligned&quot;</del>]
  - [<ins>0</ins>]
-     react/jsx-curly-spacing
  - [0, <del>&quot;never&quot;</del>, <del>{&quot;allowMultiline&quot;:true}</del>]
  - [0]
-     react/jsx-curly-spacing
  - [0, <del>&quot;never&quot;</del>, <del>{&quot;allowMultiline&quot;:true}</del>]
  - [0]
-     react/jsx-handler-names
  - [0, <del>{&quot;eventHandlerPrefix&quot;:&quot;handle&quot;,&quot;eventHandlerPropPrefix&quot;:&quot;on&quot;}</del>]
  - [0]
-     react/jsx-indent-props
  - [<del>2</del>, <del>2</del>]
  - [<ins>0</ins>]
-     react/jsx-indent-props
  - [<del>2</del>, <del>2</del>]
  - [<ins>0</ins>]
-     react/jsx-max-props-per-line
  - [0, <del>{&quot;maximum&quot;:1}</del>]
  - [0]
-     react/jsx-no-bind
  - [<del>2</del>]
  - [<ins>0</ins>]
-     react/jsx-no-duplicate-props
  - [0, <del>{&quot;ignoreCase&quot;:false}</del>]
  - [0]
-     react/jsx-sort-prop-types
  - [0, <del>{&quot;ignoreCase&quot;:false,&quot;callbacksLast&quot;:false}</del>]
  - [0]
-     react/jsx-sort-props
  - [0, <del>{&quot;ignoreCase&quot;:false,&quot;callbacksLast&quot;:false}</del>]
  - [0]
-     react/jsx-uses-react
  - [2, <del>{&quot;pragma&quot;:&quot;React&quot;}</del>]
  - [2]
-     react/no-deprecated
  - [<del>1</del>, <del>{&quot;react&quot;:&quot;0.14.0&quot;}</del>]
  - [<ins>0</ins>]
-     react/no-deprecated
  - [<del>1</del>, <del>{&quot;react&quot;:&quot;0.14.0&quot;}</del>]
  - [<ins>0</ins>]
-     react/no-did-update-set-state
  - [2, <del>&quot;allow-in-func&quot;</del>]
  - [2]
-     react/no-is-mounted
  - [<del>2</del>]
  - [<ins>0</ins>]
-     react/no-multi-comp
  - [2, <del>{&quot;ignoreStateless&quot;:true}</del>]
  - [2]
-     react/prefer-es6-class
  - [<del>2</del>, <del>&quot;always&quot;</del>]
  - [<ins>0</ins>]
-     react/prefer-es6-class
  - [<del>2</del>, <del>&quot;always&quot;</del>]
  - [<ins>0</ins>]
-     react/prop-types
  - [2, <del>{&quot;ignore&quot;:[],&quot;customValidators&quot;:[]}</del>]
  - [2]
-     react/require-extension
  - [0, <del>{&quot;extensions&quot;:[&quot;.jsx&quot;]}</del>]
  - [0]
-     react/sort-comp
  - [2, <del>{&quot;order&quot;:[&quot;lifecycle&quot;,&quot;/^on.+$/&quot;,&quot;/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/&quot;,&quot;everything-else&quot;,&quot;/^render.+$/&quot;,&quot;render&quot;]}</del>]
  - [2]
-     react/wrap-multilines
  - [2, <del>{&quot;declaration&quot;:true,&quot;assignment&quot;:true,&quot;return&quot;:true}</del>]
  - [2]
- 
    [space-after-keywords](http://eslint.org/docs/rules/space-after-keywords.html)
  - [2, <del>&quot;always&quot;</del>]
  - [2]
- 
    [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren.html)
  - [2, <del>{&quot;anonymous&quot;:&quot;never&quot;,&quot;named&quot;:&quot;never&quot;}</del>]
  - [2, <ins>&quot;never&quot;</ins>]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [2, <del>&quot;always&quot;</del>, <del>{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]}</del>]
  - [2]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [2, <del>&quot;always&quot;</del>, <del>{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]}</del>]
  - [2]
- 
    [wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)
  - [2, <del>&quot;outside&quot;</del>]
  - [2, <ins>&quot;any&quot;</ins>]
