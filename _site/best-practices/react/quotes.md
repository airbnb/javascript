## Quotes
- Always use double quotes (`"`) for JSX attributes, but single quotes for all other JavaScript.

```javascript
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```
