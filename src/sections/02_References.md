# References

## Use `const` for all of your references; avoid using `var`.

> Why? This ensures that you can't reassign your references (mutation), which
> can lead to bugs and difficult to comprehend code.

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

## If you must mutate references, use `let` instead of `var`.

> Why? `let` is block-scoped rather than function-scoped like `var`.

```javascript
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

## Note that both `let` and `const` are block-scoped.

```javascript-no-test
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```
