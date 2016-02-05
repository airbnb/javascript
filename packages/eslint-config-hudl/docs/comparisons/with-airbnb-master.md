# ESLint Config Diff (vs Airbnb v5.0.0)

Comparison of changes between ESLint configs. This is the computed result of the source config, including the effects of any extended configs. Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.
 Rules have been normalized to the array format for consistent diff formatting. Non-rule settings are also currently displayed within an array (for rendering simplicity).

Base (starting point): [../../../index.js](../../../index.js)

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
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [2, <del>120</del>, 2, {&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}]
  - [2, <ins>100</ins>, 2, {&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false}]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>{&quot;defaultAssignment&quot;:false}</ins>]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<del>0</del>]
  - [<ins>2</ins>, <ins>{&quot;defaultAssignment&quot;:false}</ins>]
- 
    [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren.html)
  - [2, <del>{&quot;anonymous&quot;:&quot;never&quot;,&quot;named&quot;:&quot;never&quot;}</del>]
  - [2, <ins>{&quot;anonymous&quot;:&quot;always&quot;,&quot;named&quot;:&quot;never&quot;}</ins>]
