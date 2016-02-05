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
_None_

#### Edited rules
_None_
