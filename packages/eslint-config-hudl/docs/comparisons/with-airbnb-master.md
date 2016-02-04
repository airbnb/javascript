# ESLint Config Diff

Comparison of changes between ours and airbnb's. Rules have been normalized to the array format for consistent diff formatting.

Base (ours): -----
Comparison (theirs): -----

Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.

## Known differences
These are intentional differences between our style guide and Airbnb's. This list is generated from explicit data defined within [the diff task](../../tasks/diff.js).

### Env
_TODO_

### Plugins
_TODO_

### Rules


#### Added rules
- 
    [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing.html)
  - [<ins>2</ins>, <ins>&quot;never&quot;</ins>]

#### Removed rules
_None_

#### Edited rules
- 
    [indent](http://eslint.org/docs/rules/indent.html)
  - [2, 2]
  - [2, 2, <ins>{&quot;SwitchCase&quot;:1,&quot;VariableDeclarator&quot;:1}</ins>]


## Unknown/unmerged differences
These are differences that haven't been previously acknowledged. They may be changes we aren't aware of or simply
upstream changes that haven't been merged yet. Any differences listed here that we _are_ aware of
should be added to the list in [the diff task](../../tasks/diff.js) to remove them from here.

### Env
_TODO_

### Plugins
_TODO_

### Rules


#### Added rules
- 
    [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs.html)
  - [<ins>0</ins>]
- 
    [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style.html)
  - [<ins>2</ins>, <ins>&quot;as-needed&quot;</ins>]
- 
    [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)
  - [<ins>0</ins>]
- 
    [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing.html)
  - [<ins>2</ins>, <ins>{&quot;before&quot;:true,&quot;after&quot;:true}</ins>]
- 
    [callback-return](http://eslint.org/docs/rules/callback-return.html)
  - [<ins>0</ins>]
- 
    [complexity](http://eslint.org/docs/rules/complexity.html)
  - [<ins>0</ins>, <ins>11</ins>]
- 
    [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing.html)
  - [<ins>2</ins>, <ins>&quot;never&quot;</ins>]
- 
    [consistent-this](http://eslint.org/docs/rules/consistent-this.html)
  - [<ins>0</ins>]
- 
    [constructor-super](http://eslint.org/docs/rules/constructor-super.html)
  - [<ins>0</ins>]
- 
    [dot-location](http://eslint.org/docs/rules/dot-location.html)
  - [<ins>0</ins>]
- 
    [func-style](http://eslint.org/docs/rules/func-style.html)
  - [<ins>0</ins>]
- 
    [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing.html)
  - [<ins>0</ins>]
- 
    [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err.html)
  - [<ins>0</ins>]
- 
    [id-length](http://eslint.org/docs/rules/id-length.html)
  - [<ins>0</ins>]
- 
    [id-match](http://eslint.org/docs/rules/id-match.html)
  - [<ins>0</ins>]
- 
    [init-declarations](http://eslint.org/docs/rules/init-declarations.html)
  - [<ins>0</ins>]
- 
    [linebreak-style](http://eslint.org/docs/rules/linebreak-style.html)
  - [<ins>0</ins>]
- 
    [lines-around-comment](http://eslint.org/docs/rules/lines-around-comment.html)
  - [<ins>0</ins>]
- 
    [max-depth](http://eslint.org/docs/rules/max-depth.html)
  - [<ins>0</ins>, <ins>4</ins>]
- 
    [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks.html)
  - [<ins>0</ins>]
- 
    [max-params](http://eslint.org/docs/rules/max-params.html)
  - [<ins>0</ins>, <ins>3</ins>]
- 
    [max-statements](http://eslint.org/docs/rules/max-statements.html)
  - [<ins>0</ins>, <ins>10</ins>]
- 
    [new-parens](http://eslint.org/docs/rules/new-parens.html)
  - [<ins>0</ins>]
- 
    [newline-after-var](http://eslint.org/docs/rules/newline-after-var.html)
  - [<ins>0</ins>]
- 
    [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor.html)
  - [<ins>0</ins>]
- 
    [no-bitwise](http://eslint.org/docs/rules/no-bitwise.html)
  - [<ins>0</ins>]
- 
    [no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow.html)
  - [<ins>0</ins>]
- 
    [no-class-assign](http://eslint.org/docs/rules/no-class-assign.html)
  - [<ins>0</ins>]
- 
    [no-const-assign](http://eslint.org/docs/rules/no-const-assign.html)
  - [<ins>2</ins>]
- 
    [no-continue](http://eslint.org/docs/rules/no-continue.html)
  - [<ins>0</ins>]
- 
    [no-control-regex](http://eslint.org/docs/rules/no-control-regex.html)
  - [<ins>2</ins>]
- 
    [no-delete-var](http://eslint.org/docs/rules/no-delete-var.html)
  - [<ins>2</ins>]
- 
    [no-div-regex](http://eslint.org/docs/rules/no-div-regex.html)
  - [<ins>0</ins>]
- 
    [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args.html)
  - [<ins>2</ins>]
- 
    [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class.html)
  - [<ins>2</ins>]
- 
    [no-empty-label](http://eslint.org/docs/rules/no-empty-label.html)
  - [<ins>2</ins>]
- 
    [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion.html)
  - [<ins>0</ins>]
- 
    [no-inline-comments](http://eslint.org/docs/rules/no-inline-comments.html)
  - [<ins>0</ins>]
- 
    [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this.html)
  - [<ins>0</ins>]
- 
    [no-iterator](http://eslint.org/docs/rules/no-iterator.html)
  - [<ins>2</ins>]
- 
    [no-label-var](http://eslint.org/docs/rules/no-label-var.html)
  - [<ins>0</ins>]
- 
    [no-labels](http://eslint.org/docs/rules/no-labels.html)
  - [<ins>2</ins>]
- 
    [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if.html)
  - [<ins>0</ins>]
- 
    [no-mixed-requires](http://eslint.org/docs/rules/no-mixed-requires.html)
  - [<ins>0</ins>, <ins>false</ins>]
- 
    [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs.html)
  - [<ins>2</ins>]
- 
    [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces.html)
  - [<ins>2</ins>]
- 
    [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs.html)
  - [<ins>2</ins>]
- 
    [no-new-require](http://eslint.org/docs/rules/no-new-require.html)
  - [<ins>0</ins>]
- 
    [no-path-concat](http://eslint.org/docs/rules/no-path-concat.html)
  - [<ins>0</ins>]
- 
    [no-plusplus](http://eslint.org/docs/rules/no-plusplus.html)
  - [<ins>0</ins>]
- 
    [no-process-env](http://eslint.org/docs/rules/no-process-env.html)
  - [<ins>0</ins>]
- 
    [no-process-exit](http://eslint.org/docs/rules/no-process-exit.html)
  - [<ins>0</ins>]
- 
    [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces.html)
  - [<ins>2</ins>]
- 
    [no-restricted-modules](http://eslint.org/docs/rules/no-restricted-modules.html)
  - [<ins>0</ins>]
- 
    [no-sync](http://eslint.org/docs/rules/no-sync.html)
  - [<ins>0</ins>]
- 
    [no-ternary](http://eslint.org/docs/rules/no-ternary.html)
  - [<ins>0</ins>]
- 
    [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super.html)
  - [<ins>0</ins>]
- 
    [no-undef](http://eslint.org/docs/rules/no-undef.html)
  - [<ins>2</ins>]
- 
    [no-undef-init](http://eslint.org/docs/rules/no-undef-init.html)
  - [<ins>0</ins>]
- 
    [no-undefined](http://eslint.org/docs/rules/no-undefined.html)
  - [<ins>0</ins>]
- 
    [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline.html)
  - [<ins>0</ins>]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<ins>0</ins>]
- 
    [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions.html)
  - [<ins>2</ins>]
- 
    [no-useless-call](http://eslint.org/docs/rules/no-useless-call.html)
  - [<ins>0</ins>]
- 
    [no-void](http://eslint.org/docs/rules/no-void.html)
  - [<ins>0</ins>]
- 
    [no-warning-comments](http://eslint.org/docs/rules/no-warning-comments.html)
  - [<ins>0</ins>, <ins>{&quot;terms&quot;:[&quot;todo&quot;,&quot;fixme&quot;,&quot;xxx&quot;],&quot;location&quot;:&quot;start&quot;}</ins>]
- 
    [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing.html)
  - [<ins>2</ins>, <ins>&quot;always&quot;</ins>]
- 
    [object-shorthand](http://eslint.org/docs/rules/object-shorthand.html)
  - [<ins>2</ins>, <ins>&quot;always&quot;</ins>]
- 
    [operator-assignment](http://eslint.org/docs/rules/operator-assignment.html)
  - [<ins>0</ins>]
- 
    [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak.html)
  - [<ins>0</ins>]
- 
    [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html)
  - [<ins>2</ins>]
- 
    [prefer-reflect](http://eslint.org/docs/rules/prefer-reflect.html)
  - [<ins>0</ins>]
- 
    [prefer-spread](http://eslint.org/docs/rules/prefer-spread.html)
  - [<ins>0</ins>]
- 
    [prefer-template](http://eslint.org/docs/rules/prefer-template.html)
  - [<ins>2</ins>]
- 
    [require-yield](http://eslint.org/docs/rules/require-yield.html)
  - [<ins>0</ins>]
- 
    [sort-vars](http://eslint.org/docs/rules/sort-vars.html)
  - [<ins>0</ins>]
- 
    [space-before-keywords](http://eslint.org/docs/rules/space-before-keywords.html)
  - [<ins>2</ins>, <ins>&quot;always&quot;</ins>]
- 
    [space-in-parens](http://eslint.org/docs/rules/space-in-parens.html)
  - [<ins>2</ins>, <ins>&quot;never&quot;</ins>]
- 
    [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops.html)
  - [<ins>0</ins>]
- 
    [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc.html)
  - [<ins>0</ins>]
- 
    [valid-typeof](http://eslint.org/docs/rules/valid-typeof.html)
  - [<ins>2</ins>]
- 
    [wrap-regex](http://eslint.org/docs/rules/wrap-regex.html)
  - [<ins>0</ins>]

#### Removed rules
_None_

#### Edited rules
- 
    [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes.html)
  - [2]
  - [2, <ins>&quot;prefer-double&quot;</ins>]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [2, 120, <del>4</del>]
  - [2, 120, <ins>2</ins>, <ins>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}</ins>]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [2, 120, <del>4</del>]
  - [2, 120, <ins>2</ins>, <ins>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}</ins>]
- 
    [new-cap](http://eslint.org/docs/rules/new-cap.html)
  - [2, <del>{&quot;newIsCap&quot;:true,&quot;capIsNew&quot;:false}</del>]
  - [2, <ins>{&quot;newIsCap&quot;:true}</ins>]
- 
    [no-eq-null](http://eslint.org/docs/rules/no-eq-null.html)
  - [<del>2</del>]
  - [<ins>0</ins>]
- 
    [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines.html)
  - [2, <del>{&quot;max&quot;:2}</del>]
  - [2, <ins>{&quot;max&quot;:2,&quot;maxEOF&quot;:1}</ins>]
- 
    [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign.html)
  - [2]
  - [2, <ins>{&quot;props&quot;:true}</ins>]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [2, <del>&quot;consistent&quot;</del>]
  - [2, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</ins>]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [2, <del>&quot;consistent&quot;</del>]
  - [2, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</ins>]
-     react/display-name
  - [0]
  - [0, <ins>{&quot;acceptTranspilerName&quot;:false}</ins>]
-     react/forbid-prop-types
  - [0]
  - [0, <ins>{&quot;forbid&quot;:[&quot;any&quot;,&quot;array&quot;,&quot;object&quot;]}</ins>]
-     react/jsx-boolean-value
  - [2]
  - [2, <ins>&quot;never&quot;</ins>]
-     react/jsx-closing-bracket-location
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;line-aligned&quot;</ins>]
-     react/jsx-closing-bracket-location
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;line-aligned&quot;</ins>]
-     react/jsx-curly-spacing
  - [0]
  - [0, <ins>&quot;never&quot;</ins>, <ins>{&quot;allowMultiline&quot;:true}</ins>]
-     react/jsx-curly-spacing
  - [0]
  - [0, <ins>&quot;never&quot;</ins>, <ins>{&quot;allowMultiline&quot;:true}</ins>]
-     react/jsx-handler-names
  - [0]
  - [0, <ins>{&quot;eventHandlerPrefix&quot;:&quot;handle&quot;,&quot;eventHandlerPropPrefix&quot;:&quot;on&quot;}</ins>]
-     react/jsx-indent-props
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>2</ins>]
-     react/jsx-indent-props
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>2</ins>]
-     react/jsx-max-props-per-line
  - [0]
  - [0, <ins>{&quot;maximum&quot;:1}</ins>]
-     react/jsx-no-bind
  - [<del>0</del>]
  - [<ins>2</ins>]
-     react/jsx-no-duplicate-props
  - [0]
  - [0, <ins>{&quot;ignoreCase&quot;:false}</ins>]
-     react/jsx-sort-prop-types
  - [0]
  - [0, <ins>{&quot;ignoreCase&quot;:false,&quot;callbacksLast&quot;:false}</ins>]
-     react/jsx-sort-props
  - [0]
  - [0, <ins>{&quot;ignoreCase&quot;:false,&quot;callbacksLast&quot;:false}</ins>]
-     react/jsx-uses-react
  - [2]
  - [2, <ins>{&quot;pragma&quot;:&quot;React&quot;}</ins>]
-     react/no-deprecated
  - [<del>0</del>]
  - [<ins>1</ins>, <ins>{&quot;react&quot;:&quot;0.14.0&quot;}</ins>]
-     react/no-deprecated
  - [<del>0</del>]
  - [<ins>1</ins>, <ins>{&quot;react&quot;:&quot;0.14.0&quot;}</ins>]
-     react/no-did-update-set-state
  - [2]
  - [2, <ins>&quot;allow-in-func&quot;</ins>]
-     react/no-is-mounted
  - [<del>0</del>]
  - [<ins>2</ins>]
-     react/no-multi-comp
  - [2]
  - [2, <ins>{&quot;ignoreStateless&quot;:true}</ins>]
-     react/prefer-es6-class
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;always&quot;</ins>]
-     react/prefer-es6-class
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;always&quot;</ins>]
-     react/prop-types
  - [2]
  - [2, <ins>{&quot;ignore&quot;:[],&quot;customValidators&quot;:[]}</ins>]
-     react/require-extension
  - [0]
  - [0, <ins>{&quot;extensions&quot;:[&quot;.jsx&quot;]}</ins>]
-     react/sort-comp
  - [2]
  - [2, <ins>{&quot;order&quot;:[&quot;lifecycle&quot;,&quot;/^on.+$/&quot;,&quot;/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/&quot;,&quot;everything-else&quot;,&quot;/^render.+$/&quot;,&quot;render&quot;]}</ins>]
-     react/wrap-multilines
  - [2]
  - [2, <ins>{&quot;declaration&quot;:true,&quot;assignment&quot;:true,&quot;return&quot;:true}</ins>]
- 
    [space-after-keywords](http://eslint.org/docs/rules/space-after-keywords.html)
  - [2]
  - [2, <ins>&quot;always&quot;</ins>]
- 
    [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren.html)
  - [2, <del>&quot;never&quot;</del>]
  - [2, <ins>{&quot;anonymous&quot;:&quot;never&quot;,&quot;named&quot;:&quot;never&quot;}</ins>]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [2]
  - [2, <ins>&quot;always&quot;</ins>, <ins>{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]}</ins>]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [2]
  - [2, <ins>&quot;always&quot;</ins>, <ins>{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]}</ins>]
- 
    [wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)
  - [2, <del>&quot;any&quot;</del>]
  - [2, <ins>&quot;outside&quot;</ins>]
