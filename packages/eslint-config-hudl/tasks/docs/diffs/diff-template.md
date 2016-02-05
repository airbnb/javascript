# ESLint Config Diff ({{title}})

Comparison of changes between ESLint configs. This is the computed result of the source config, including the effects of any extended configs. Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.
 Rules have been normalized to the array format for consistent diff formatting. Non-rule settings are also currently displayed within an array (for rendering simplicity).

Base (starting point): [{{base}}]({{base}})

Comparison (additions, removals, edits): [{{comparison}}]({{comparison}})

## Known differences
These are intentional differences between configs. This list is generated from explicit data defined within [diffs-to-run.js](../../tasks/docs/diffs/diffs-to-run.js).

{{> diffSection diff.known}}


## Unknown/unmerged differences
These are differences that haven't been previously acknowledged. They may be changes we aren't aware of or simply
upstream changes that haven't been merged yet. Any differences listed here that we _are_ aware of
should be added to the list in [the diff task](../../tasks/docs/diffs/diffs-to-run.js) to remove them from here.

{{> diffSection diff.unknown}}
