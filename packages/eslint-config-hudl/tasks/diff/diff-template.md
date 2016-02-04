# ESLint Config Diff

Comparison of changes between ours and airbnb's. Rules have been normalized to the array format for consistent diff formatting.

Base (ours): -----
Comparison (theirs): -----

## Intentional differences
These are differences described in [DIFF FILE](diff-file.json).

### Env
### Plugins
### Rules

## Unknown/unmerged differences
These are differences that haven't been previously acknowledged. They may be changes we aren't aware of or simply
upstream changes that haven't been merged yet.

### Env
### Plugins
### Rules


{{#each rules}}
- {{#if url}}
    [{{name}}]({{url}})
  {{^}}
    {{name}}
  {{/if}}
  {{#each valueArrays}}
  - [
    {{~#each this~}}
      {{~#if added~}}
      <span style="background-color:rgba(0,255,0,.2);">{{value}}</span>
      {{~^~}}
        {{~#if removed~}}
        <span style="background-color:rgba(255,0,0,.2);text-decoration:line-through">{{value}}</span>
        {{~^~}}
          {{value}}
        {{~/if~}}
      {{~/if~}}
      {{#unless last}}, {{/unless}}
    {{~/each~}}
    ]
  {{/each}}
{{/each}}
