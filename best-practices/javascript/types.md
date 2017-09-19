---
---

# Types

- [1.1](#1.1) <a name='1.1'></a> **Primitives**: When you access a primitive type you work directly on its value.


+ `string`
+ `number`
+ `boolean`
+ `null`
+ `undefined`

```javascript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

- [1.2](#1.2) <a name='1.2'></a> **Complex**: When you access a complex type you work on a reference to its value.


+ `object`
+ `array`
+ `function`

```javascript
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```
