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
