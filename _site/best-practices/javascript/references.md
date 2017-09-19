# References

- [2.1](#2.1) <a name='2.1'></a> Use `const` for all of your references; avoid using `var`.

> Why? This ensures that you can't reassign your references (mutation), which can lead to bugs and difficult to comprehend code.

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```


- [2.2](#2.2) <a name='2.2'></a> If you must mutate references, use `let` instead of `var`.

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


- [2.3](#2.3) <a name='2.3'></a> Note that both `let` and `const` are block-scoped.

```javascript
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```
