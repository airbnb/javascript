### Env
_TODO_

### Plugins
_TODO_

### Rules

{{#each ruleGroups}}

#### {{groupName}}
{{#unless rules}}
_None_
{{/unless}}
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
      <ins>{{value}}</ins>
      {{~^~}}
        {{~#if removed~}}
        <del>{{value}}</del>
        {{~^~}}
          {{value}}
        {{~/if~}}
      {{~/if~}}
      {{#unless last}}, {{/unless}}
    {{~/each~}}
    ]
  {{/each}}
{{/each}}
{{/each}}
