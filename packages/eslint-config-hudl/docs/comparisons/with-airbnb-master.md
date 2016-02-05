# ESLint Config Diff (vs Airbnb v5.0.0)

Comparison of changes between ESLint configs. This is the computed result of the source config, including the effects of any extended configs. Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.
 Rules have been normalized to the array format for consistent diff formatting. Non-rule settings are also currently displayed within an array (for rendering simplicity).

Base (starting point): [../../index.js](../../index.js)

Comparison (additions, removals, edits): [https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v5.0.0/packages/eslint-config-airbnb/index.js](https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v5.0.0/packages/eslint-config-airbnb/index.js)

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
_None_


### Rules


#### Added rules
- 
    [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations.html)
  - [<ins>2</ins>]

#### Removed rules
_None_

#### Edited rules
- 
    [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;never&quot;</ins>]
- 
    [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;as-needed&quot;</ins>]
- 
    [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>{&quot;before&quot;:true,&quot;after&quot;:true}</ins>]
- 
    [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>&quot;never&quot;</ins>]
- 
    [indent](http://eslint.org/docs/rules/indent.html)
  - [2, 2]
  - [2, 2, <ins>{&quot;SwitchCase&quot;:1,&quot;VariableDeclarator&quot;:1}</ins>]
- 
    [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes.html)
  - [2]
  - [2, <ins>&quot;prefer-double&quot;</ins>]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [2, <del>120</del>, <del>4</del>]
  - [2, <ins>100</ins>, <ins>2</ins>, <ins>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}</ins>]
- 
    [new-cap](http://eslint.org/docs/rules/new-cap.html)
  - [2, <del>{&quot;newIsCap&quot;:true,&quot;capIsNew&quot;:false}</del>]
  - [2, <ins>{&quot;newIsCap&quot;:true}</ins>]
- 
    [no-const-assign](http://eslint.org/docs/rules/no-const-assign.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-control-regex](http://eslint.org/docs/rules/no-control-regex.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-delete-var](http://eslint.org/docs/rules/no-delete-var.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-empty-label](http://eslint.org/docs/rules/no-empty-label.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-eq-null](http://eslint.org/docs/rules/no-eq-null.html)
  - [<del>2</del>]
  - [<ins>0</ins>]
- 
    [no-iterator](http://eslint.org/docs/rules/no-iterator.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-labels](http://eslint.org/docs/rules/no-labels.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines.html)
  - [2, <del>{&quot;max&quot;:2}</del>]
  - [2, <ins>{&quot;max&quot;:2,&quot;maxEOF&quot;:1}</ins>]
- 
    [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign.html)
  - [2]
  - [2, <ins>{&quot;props&quot;:true}</ins>]
- 
    [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-undef](http://eslint.org/docs/rules/no-undef.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>{&quot;defaultAssignment&quot;:false}</ins>]
- 
    [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing.html)
  - [<del>0</del>, &quot;always&quot;]
  - [<ins>2</ins>, &quot;always&quot;]
- 
    [object-shorthand](http://eslint.org/docs/rules/object-shorthand.html)
  - [<del>0</del>, &quot;always&quot;]
  - [<ins>2</ins>, &quot;always&quot;]
- 
    [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [prefer-template](http://eslint.org/docs/rules/prefer-template.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [2, <del>&quot;consistent&quot;</del>]
  - [2, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</ins>]
-     react/jsx-boolean-value
  - [2]
  - [2, <ins>&quot;never&quot;</ins>]
-     react/jsx-closing-bracket-location
  - [<del>0</del>, &quot;line-aligned&quot;]
  - [<ins>2</ins>, &quot;line-aligned&quot;]
-     react/jsx-indent-props
  - [<del>0</del>, 2]
  - [<ins>2</ins>, 2]
-     react/jsx-no-bind
  - [<del>0</del>]
  - [<ins>2</ins>]
-     react/jsx-uses-react
  - [2]
  - [2, <ins>{&quot;pragma&quot;:&quot;React&quot;}</ins>]
-     react/no-deprecated
  - [<del>0</del>, {&quot;react&quot;:&quot;0.14.0&quot;}]
  - [<ins>1</ins>, {&quot;react&quot;:&quot;0.14.0&quot;}]
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
-     react/prop-types
  - [2]
  - [2, <ins>{&quot;ignore&quot;:[],&quot;customValidators&quot;:[]}</ins>]
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
  - [2, <ins>{&quot;anonymous&quot;:&quot;always&quot;,&quot;named&quot;:&quot;never&quot;}</ins>]
- 
    [space-before-keywords](http://eslint.org/docs/rules/space-before-keywords.html)
  - [<del>0</del>, &quot;always&quot;]
  - [<ins>2</ins>, &quot;always&quot;]
- 
    [space-in-parens](http://eslint.org/docs/rules/space-in-parens.html)
  - [<del>0</del>, &quot;never&quot;]
  - [<ins>2</ins>, &quot;never&quot;]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [2]
  - [2, <ins>&quot;always&quot;</ins>, <ins>{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]}</ins>]
- 
    [valid-typeof](http://eslint.org/docs/rules/valid-typeof.html)
  - [<del>0</del>]
  - [<ins>2</ins>]
- 
    [wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)
  - [2, <del>&quot;any&quot;</del>]
  - [2, <ins>&quot;outside&quot;</ins>]
