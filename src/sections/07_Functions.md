# Functions

## Use function declarations instead of function expressions.

> Why? Function declarations are named, so they're easier to identify in call stacks. Also, the whole body of a function declaration is hoisted, whereas only the reference of a function expression is hoisted. This rule makes it possible to always use [Arrow Functions](#arrow-functions) in place of function expressions.

```javascript
// bad
const foo = function () {
};

// good
function foo() {
}
```

## Function expressions:

```javascript
// immediately-invoked function expression (IIFE)
(() => {
  console.log('Welcome to the Internet. Please follow me.');
})();
```

## Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.

## **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

```javascript
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```

## Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```javascript
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
```

<a name="es6-rest"></a>
## Never use `arguments`, opt to use rest syntax `...` instead.

> Why? `...` is explicit about which arguments you want pulled. Plus rest arguments are a real Array and not Array-like like `arguments`.

```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

<a name="es6-default-parameters"></a>
## Use default parameter syntax rather than mutating function arguments.

```javascript
// bad
// really bad
function handleThings(opts) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// bad
// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

## Avoid side effects with default parameters

> Why? They are confusing to reason about.

```javascript
var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

## Never use the Function constructor to create a new function.

> Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

```javascript
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```
