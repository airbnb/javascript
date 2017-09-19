---
---

## Methods

- Use underscore prefix for internal methods of a react component.

```javascript
// bad
React.createClass({
  onClickSubmit() {
    // do stuff
  }

  // other stuff
});

// good
React.createClass({
  _onClickSubmit() {
    // do stuff
  }

  // other stuff
});
```
