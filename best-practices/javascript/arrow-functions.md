---
---

# Arrow Functions

- [8.1](#8.1) <a name='8.1'></a> When you must use function expressions (as when passing an anonymous function), use arrow function notation.

> Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

> Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.

```javascript
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});
```


- [8.2](#8.2) <a name='8.2'></a> If the function body fits on one line and there is only a single argument, feel free to omit the braces and parentheses, and use the implicit return. Otherwise, add the parentheses, braces, and use a `return` statement.

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

> Why not? If you plan on returning an object.

```javascript
// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].reduce((total, n) => {
  return total + n;
}, 0);
```
