### Settings (non-rules)
{{#unless otherItems}}
_None_
{{/unless}}

{{#each otherItems}}
{{> ruleItem this}}
{{/each}}

### Rules

{{#each ruleGroups}}

#### {{groupName}}
{{#unless rules}}
_None_
{{/unless}}
{{#each rules}}
{{> ruleItem this}}
{{/each}}
{{/each}}
