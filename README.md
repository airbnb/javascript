# SPS Commerce TypeScript Style Guide() {

**TODO:** Write description

**TODO:** What about these other guides?

Other Style Guides
  - [React](react/)
  - [CSS-in-JS](css-in-javascript/)
  - [CSS & Sass](https://github.com/airbnb/css)

## Table of Contents

  1. [Types](#types)
  1. [References](#references)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Classes & Constructors](#classes--constructors)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Blocks](#blocks)
  1. [Control Statements](#control-statements)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Type Casting & Coercion](#type-casting--coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Events](#events)
  1. [Standard Library](#standard-library)
  1. [Language Proposals](#language-proposals)
  1. [Testing](#testing)
  1. [Resources](#resources)

## Types

<a name="types--primitives"></a>
[**1.1**](#types--primitives) ‣ Primitives: When you access a primitive type you work directly on its value.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`



```typescript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

Symbols and BigInts cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

---

<a name="types--complex"></a>
[**1.2**](#types--complex) ‣  Complex: When you access a complex type you work on a reference to its value.

  - `object`
  - `array`
  - `function`

  ```typescript
  const foo = [1, 2];
  const bar = foo;

  bar[0] = 9;

  console.log(foo[0], bar[0]); // => 9, 9
  ```

**[⬆ back to top](#table-of-contents)**


## References

<a name="references--prefer-const"></a>
[**2.1**](#references--prefer-const) ‣ Use `const` for all of your references; avoid using `var`.

<img src="eslint.svg" height="18" align="center"/> [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

> Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

```typescript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

---

<a name="references--disallow-var"></a>
[**2.2**](#references--disallow-var) ‣ If you must reassign references, use `let` instead of `var`.

<img src="eslint.svg" height="18" align="center"/> [`no-var`](https://eslint.org/docs/rules/no-var.html)

> Why? `let` is block-scoped rather than function-scoped like `var`.

```typescript
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

---

<a name="references--block-scope"></a>
[**2.3**](#references--block-scope) ‣ Note that both `let` and `const` are block-scoped, whereas `var` is function-scoped.

```typescript
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
  var c = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // Prints 1
```

In the above code, you can see that referencing `a` and `b` will produce a ReferenceError, while `c` contains the number. This is because `a` and `b` are block scoped, while `c` is scoped to the containing function.

**[⬆ back to top](#table-of-contents)**

## Objects

<a name="objects--no-new"></a>
[**3.1**](#objects--no-new) ‣ Use the literal syntax for object creation.

<img src="eslint.svg" height="18" align="center"/> [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

```typescript
// bad
const item = new Object();

// good
const item = {};
```

---

<a name="es6-computed-properties"></a>
[**3.2**](#es6-computed-properties) ‣ Use computed property names when creating objects with dynamic property names.

> Why? They allow you to define all the properties of an object in one place.

```typescript
function getKey(k: string) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

---

<a name="es6-object-shorthand"></a>
[**3.3**](#es6-object-shorthand) ‣ Use object method shorthand.

<img src="eslint.svg" height="18" align="center"/> [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

```typescript
// bad
const atom = {
  value: 1,

  addValue: function (value: number) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value: number) {
    return atom.value + value;
  },
};
```

---

<a name="es6-object-concise"></a>
[**3.4**](#es6-object-concise) ‣ Use property value shorthand.

<img src="eslint.svg" height="18" align="center"/> [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

> Why? It is shorter and descriptive.

```typescript
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

---

**TODO:** Further discussion required

<a name="objects--grouped-shorthand"></a>
[**3.5**](#objects--grouped-shorthand) ‣ Group your shorthand properties at the beginning of your object declaration.

> Why? It’s easier to tell which properties are using the shorthand.

```typescript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

---

<a name="objects--quoted-props"></a>
[**3.6**](#objects--quoted-props) ‣ Only quote properties that are invalid identifiers.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

> Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

```typescript
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```

---

<a name="objects--rest-spread"></a>
[**3.7**](#objects--rest-spread) ‣ Prefer the object spread syntax over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

<img src="eslint.svg" height="18" align="center"/> [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)

```typescript
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

**[⬆ back to top](#table-of-contents)**

## Arrays

<a name="arrays--literals"></a>
[**4.1**](#arrays--literals) ‣ Use the literal syntax for array creation, except in the case of initializing a sparse array with a specific size.

<img src="eslint.svg" height="18" align="center"/> [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

```typescript
// bad
const items = new Array();

// good
const items = [];

// good
const items = new Array(8);
```

---

<a name="arrays--push"></a>
[**4.2**](#arrays--push) ‣ Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

```typescript
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

---

<a name="es6-array-spreads"></a>
[**4.3**](#es6-array-spreads) ‣ Use array spreads `...` to copy arrays.

```typescript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

---

<a name="arrays--from-iterable"></a>
[**4.4**](#arrays--from-iterable) ‣ To convert an iterable object to an array, use spreads `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```typescript
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

---

<a name="arrays--from-array-like"></a>
[**4.5**](#arrays--from-array-like) ‣ Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.

```typescript
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

---

<a name="arrays--mapping"></a>
[**4.6**](#arrays--mapping) ‣ Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array.

```typescript
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

---

**TODO:** Further discussion required

<a name="arrays--callback-return"></a>
[**4.7**](#arrays--callback-return) ‣ Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following [**8.2**](#arrows--implicit-return).

<img src="eslint.svg" height="18" align="center"/> [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

```typescript
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
```

---

<a name="arrays--bracket-newline"></a>
[**4.8**](#arrays--bracket-newline) ‣ Use line breaks after open and before close array brackets if an array has multiple lines.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

```typescript
// bad
const arr = [
  [0, 1],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const stringInArray = [
  'foofoofoofoofoofoofoofoo',
  'foofoofoofoofoofoofoofoo',
  'foofoofoofoofoofoofoofoo',
];
```

**[⬆ back to top](#table-of-contents)**

## Destructuring

<a name="destructuring--object"></a>
[**5.1**](#destructuring--object) ‣ Use object destructuring when accessing and using multiple properties of an object.

<img src="eslint.svg" height="18" align="center"/> [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

> Why? Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

```typescript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

---

<a name="destructuring--array"></a>
[**5.2**](#destructuring--array) ‣ Use array destructuring.

<img src="eslint.svg" height="18" align="center"/> [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

```typescript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

---

<a name="destructuring--object-over-array"></a>
[**5.3**](#destructuring--object-over-array) ‣ Use object destructuring for multiple return values, not array destructuring.

> Why? You can add new properties over time or change the order of things without breaking call sites.

```typescript
// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);
```

**[⬆ back to top](#table-of-contents)**

## Strings

**TODO:** Further discussion required - Prettier does double quotes by default, but can be configured for single quotes.

<a name="strings--quotes"></a>
[**6.1**](#strings--quotes) ‣ Use single quotes `''` for strings.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`quotes`](https://eslint.org/docs/rules/quotes.html)

```typescript
// bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```

---

<a name="strings--line-length"></a>
[**6.2**](#strings--line-length) ‣ Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

> Why? Broken strings are painful to work with and make code less searchable.

```typescript
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

---

<a name="es6-template-literals"></a>
[**6.3**](#es6-template-literals) ‣ When programmatically building up strings, use template strings instead of concatenation.

<img src="eslint.svg" height="18" align="center"/> [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html), [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```typescript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

---

<a name="strings--eval"></a>
[**6.4**](#strings--eval) ‣ Never use `eval()` on a string, it opens too many vulnerabilities.

<img src="eslint.svg" height="18" align="center"/> [`no-eval`](https://eslint.org/docs/rules/no-eval)

---

<a name="strings--escaping"></a>
[**6.5**](#strings--escaping) ‣ Do not unnecessarily escape characters in strings.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

> Why? Backslashes harm readability, thus they should only be present when necessary.

```typescript
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```

**[⬆ back to top](#table-of-contents)**

## Functions

<a name="functions--in-blocks"></a>
[**7.1**](#functions--in-blocks) ‣ Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.

<img src="eslint.svg" height="18" align="center"/> [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)

---

<a name="functions--note-on-blocks"></a>
[**7.2**](#functions--note-on-blocks) ‣ **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.

```typescript
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

---

<a name="es6-rest"></a>
[**7.3**](#es6-rest) ‣ Never use `arguments`, opt to use rest syntax `...` instead.

<img src="eslint.svg" height="18" align="center"/> [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

> Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

```typescript
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

---

<a name="es6-default-parameters"></a>
[**7.4**](#es6-default-parameters) ‣ Use default parameter syntax rather than mutating function arguments.

```typescript
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

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

---

<a name="functions--default-side-effects"></a>
[**7.5**](#functions--default-side-effects) ‣ Avoid side effects with default parameters.

> Why? They are confusing to reason about.


```typescript
let b = 1;

// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

---

<a name="functions--defaults-last"></a>
[**7.6**](#functions--defaults-last) ‣ Always put default parameters last.

<img src="eslint.svg" height="18" align="center"/> [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

```typescript
// bad
function handleThings(opts: IHandleThingsOpts = {}, name: string) {
  // ...
}

// good
function handleThings(name: string, opts: IHandleThingsOpts = {}) {
  // ...
}
```

---

<a name="functions--constructor"></a>
[**7.7**](#functions--constructor) ‣ Never use the Function constructor to create a new function.

<img src="eslint.svg" height="18" align="center"/> [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

> Why? Creating a function in this way evaluates a string similarly to `eval()`, which opens vulnerabilities.

```typescript
// bad
const add = new Function('a', 'b', 'return a + b');

// still bad
const subtract = Function('a', 'b', 'return a - b');
```

---

<a name="functions--signature-spacing"></a>
[**7.8**](#functions--signature-spacing) ‣ Spacing in a function signature.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren), [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

> Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

```typescript
// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x = function () {};
const y = function a() {};
```

---

<a name="functions--mutate-params"></a>
[**7.10**](#functions--mutate-params) ‣ Never mutate parameters.

<img src="eslint.svg" height="18" align="center"/> [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```typescript
// bad
function f1(obj: ObjType) {
  obj.key = 1;
  // ...
}

// good
function f2(obj: ObjType) {
  const objCopy = {
    ...obj,
    key: 1,
  };
  // ...
}
```

---

<a name="functions--reassign-params"></a>
[**7.11**](#functions--reassign-params) ‣ Never reassign parameters.

<img src="eslint.svg" height="18" align="center"/> [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

```typescript
// bad
function f1(a: number) {
  a = 1;
  // ...
}

function f2(a: number) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a: number) {
  const b = a || 1;
  // ...
}

function f4(a: number = 1) {
  // ...
}
```

---

<a name="functions--spread-vs-apply"></a>
[**7.12**](#functions--spread-vs-apply) ‣ Prefer the use of the spread syntax `...` to call variadic functions.

<img src="eslint.svg" height="18" align="center"/> [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

> Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose `new` with `apply`.

```typescript
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);
```

---

<a name="functions--signature-invocation-indentation"></a>
[**7.13**](#functions--signature-invocation-indentation) ‣ Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

```typescript
// bad
function foo(bar: string,
              baz: number,
              quux: boolean) {
  // ...
}

// good
function foo(
  bar: string,
  baz: number,
  quux: boolean,
) {
  // ...
}

// bad
console.log(foo,
  bar,
  baz);

// good
console.log(
  foo,
  bar,
  baz,
);
```

**[⬆ back to top](#table-of-contents)**

## Arrow Functions

<a name="arrows--use-them"></a>
[**8.1**](#arrows--use-them) ‣ When you must use an anonymous function (as when passing an inline callback), use arrow function notation.

<img src="eslint.svg" height="18" align="center"/> [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html)

> Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

> Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

```typescript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

---

<a name="arrows--implicit-return"></a>
[**8.2**](#arrows--implicit-return) ‣ If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement.

<img src="eslint.svg" height="18" align="center"/> [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html)

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

```typescript
// bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foo(callback: () => boolean) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});
```

---

<a name="arrows--paren-wrap"></a>
[**8.3**](#arrows--paren-wrap) ‣ In case the expression spans over multiple lines, wrap it in parentheses for better readability.

> Why? It shows clearly where the function starts and ends.

```typescript
// bad
['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
);

// good
['get', 'post', 'put'].map((httpMethod) => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
));
```

---

<a name="arrows--one-arg-parens"></a>
[**8.4**](#arrows--one-arg-parens) ‣ Always include parentheses around arguments for clarity and consistency.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html)

> Why? Minimizes diff churn when adding or removing arguments.

```typescript
// bad
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(number => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// good
[1, 2, 3].map((number) => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// bad
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

---

<a name="arrows--confusing"></a>
[**8.5**](#arrows--confusing) ‣ Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`).

<img src="eslint.svg" height="18" align="center"/> [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

```typescript
// bad
const itemHeight = (item: ItemType) => item.height <= 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item: ItemType) => item.height >= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = (item: ItemType) => (item.height <= 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item: ItemType) => {
  const { height, largeSize, smallSize } = item;
  return height <= 256 ? largeSize : smallSize;
};
```

---

<a name="whitespace--implicit-arrow-linebreak"></a>
[**8.6**](#whitespace--implicit-arrow-linebreak) ‣ Enforce the location of arrow function bodies with implicit returns.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)

```typescript
// bad
(foo) =>
  bar;

(foo) =>
  (bar);

// good
(foo) => bar;
(foo) => (bar);
(foo) => (
    bar
)
```

**[⬆ back to top](#table-of-contents)**

## Classes & Constructors

<a name="constructors--use-class"></a>
[**9.1**](#constructors--use-class) ‣ Always use `class`. Avoid manipulating `prototype` directly.

> Why? `class` syntax is more concise and easier to reason about.

```typescript
// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// good
class Queue<T> {
  queue: T[];

  constructor(contents: T[] = []) {
    this.queue = [...contents];
  }

  pop(): T {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
```

---

<a name="constructors--extends"></a>
[**9.2**](#constructors--extends) ‣ Use `extends` for inheritance.

> Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

```typescript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue<T> extends Queue<T> {
  peek(): T {
    return this.queue[0];
  }
}
```

---

<a name="constructors--chaining"></a>
[**9.3**](#constructors--chaining) ‣ Methods can return `this` to help with method chaining.

```typescript
// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jumping = false;
  height: number;

  jump(): this {
    this.jumping = true;
    return this;
  }

  setHeight(height: number): this {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

---

<a name="constructors--tostring"></a>
[**9.4**](#constructors--tostring) ‣ It’s okay to write a custom `toString()` method, just make sure it works successfully and causes no side effects.

```typescript
class Jedi {
  name: string;

  constructor(options: IJediOptions = {}) {
    this.name = options.name || 'no name';
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return `Jedi - ${this.getName()}`;
  }
}
```

---

<a name="constructors--no-useless"></a>
[**9.5**](#constructors--no-useless) ‣ Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary.

<img src="eslint.svg" height="18" align="center"/> [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```typescript
// bad
class Jedi {
  name: string;

  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

---

<a name="classes--no-duplicate-members"></a>
[**9.6**](#classes--no-duplicate-members) ‣ Avoid duplicate class members.

<img src="eslint.svg" height="18" align="center"/> [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

> Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.

```typescript
// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// good
class Foo {
  bar() { return 1; }
}

// good
class Foo {
  bar() { return 2; }
}
```

---

<a name="classes--methods-use-this"></a>
[**9.7**](#classes--methods-use-this) ‣ Class methods should use `this` or be made into a static method unless an external library or framework requires using specific non-static methods. Being an instance method should indicate that it behaves differently based on properties of the receiver.

<img src="eslint.svg" height="18" align="center"/> [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

```typescript
// bad
class Foo {
  bar() {
    console.log('bar');
  }
}

// good - this is used
class Foo {
  bar() {
    console.log(this.bar);
  }
}

// good - constructor is exempt
class Foo {
  constructor() {
    // ...
  }
}

// good - static methods aren't expected to use this
class Foo {
  static bar() {
    console.log('bar');
  }
}
```

**[⬆ back to top](#table-of-contents)**

## Modules

<a name="modules--use-them"></a>
[**10.1**](#modules--use-them) ‣ Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

> Why? Modules are the future, let’s start using the future now.

```typescript
// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

---

<a name="modules--no-duplicate-imports"></a>
[**10.2**](#modules--no-duplicate-imports) ‣ Only import from a path in one place.

<img src="eslint.svg" height="18" align="center"/> [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)

> Why? Having multiple lines that import from the same path can make code harder to maintain.

```typescript
// bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';

// good
import foo, {
  named1,
  named2,
} from 'foo';
```

---

<a name="modules--no-mutable-exports"></a>
[**10.3**](#modules--no-mutable-exports) ‣ Do not export mutable bindings.

<img src="eslint.svg" height="18" align="center"/> [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

> Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

```typescript
// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };
```

---

<a name="modules--imports-first"></a>
[**10.4**](#modules--imports-first) ‣ Put all `import`s above non-import statements.

<img src="eslint.svg" height="18" align="center"/> [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

> Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

```typescript
// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo.init();
```

---

<a name="modules--multiline-imports-over-newlines"></a>
[**10.5**](#modules--multiline-imports-over-newlines) ‣ Multiline imports should be indented just like multiline array and object literals.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)

> Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.

```typescript
// bad
import { longNameA, longNameB, longNameC,
  longNameD, longNameE, longNameF } from 'path';

// good
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';
```

---

<a name="modules--no-webpack-loader-syntax"></a>
[**10.6**](#modules--no-webpack-loader-syntax) ‣ Disallow Webpack loader syntax in module import statements.

<img src="eslint.svg" height="18" align="center"/> [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

> Why? Since using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in `webpack.config.js`.

```typescript
// bad
import fooSass from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSass from 'foo.scss';
import barCss from 'bar.css';
```

---

<a name="modules--import-extensions"></a>
[**10.7**](#modules--import-extensions) ‣ Do not include JavaScript filename extensions

<img src="eslint.svg" height="18" align="center"/> [`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

  > Why? Including extensions inhibits refactoring, and inappropriately hardcodes implementation details of the module you're importing in every consumer.

  ```typescript
  // bad
  import foo from './foo.js';
  import bar from './bar.jsx';
  import baz from './baz/index.jsx';

  // good
  import foo from './foo';
  import bar from './bar';
  import baz from './baz';
  ```

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators

<a name="iterators--prefer-functional"></a>
[**11.1**](#iterators--prefer-functional) ‣ Prefer JavaScript’s higher-order functions instead of `for`/`for-of` loops, particularly when iterating to build up a value.

> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

> Sometimes you genuinely will need to mutate or do something side-effecty in a loop, and in that case `for-of` or a traditional `for` loop are acceptable. But avoid this whenerever possible.

> Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

```typescript
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// bad
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// good
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// bad
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// good
const increasedByOne = numbers.map((num) => num + 1);
```

---

<a name="iterators--no-for-in"></a>
[**11.2**](#iterators--no-for-in) ‣ Do not use `for-in`.

<img src="eslint.svg" height="18" align="center"/> [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

> Why? `for-in` has confusing and unexpected behavior. For this reason, `for-of` was added to the language and should be used instead.

```typescript
const obj = { a: 'foo', b: 'bar' };

// bad
for (const key in obj) {
  console.log(key, obj[key]);
}

// avoids the inherited properties issue, but still bad
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

// good
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

// best, if you're working on both the keys and values
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

---

<a name="generators--spacing"></a>
[**11.3**](#generators--spacing) ‣ A generator's function signature should be spaced with `function*` as a single unit surrounded by spaces.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)

> Why? `function` and `*` are part of the same conceptual keyword - `*` is not a modifier for `function`, `function*` is a unique construct, different from `function`.

```typescript
// bad
function * foo() {
  // ...
}

// bad
const bar = function * () {
  // ...
};

// bad
const baz = function *() {
  // ...
};

// bad
const quux = function*() {
  // ...
};

// bad
function*foo() {
  // ...
}

// bad
function *foo() {
  // ...
}

// very bad
function
*
foo() {
  // ...
}

// very bad
const wat = function
*
() {
  // ...
};

// good
function* foo() {
  // ...
}

// good
const foo = function* () {
  // ...
};
```

**[⬆ back to top](#table-of-contents)**

## Properties

<a name="properties--dot"></a>
[**12.1**](#properties--dot) ‣ Use dot notation when accessing properties.

<img src="eslint.svg" height="18" align="center"/> [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html)

```typescript
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;
```


**[⬆ back to top](#table-of-contents)**

## Variables

<a name="variables--const"></a>
[**13.1**](#variables--const) ‣ Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

<img src="eslint.svg" height="18" align="center"/> [`no-undef`](https://eslint.org/docs/rules/no-undef), [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```typescript
// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();
```

---

<a name="variables--one-const"></a>
[**13.2**](#variables--one-const) ‣ Use one `const` or `let` declaration per variable or assignment.

<img src="eslint.svg" height="18" align="center"/> [`one-var`](https://eslint.org/docs/rules/one-var.html)

> Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

```typescript
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

---

<a name="variables--const-let-group"></a>
[**13.3**](#variables--const-let-group) ‣ Group all your `const`s and then group all your `let`s.

> Why? This is helpful when later on you might need to assign a variable depending on one of the previously assigned variables.

```typescript
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i: number;
const items = getItems();
let dragonball: Dragonball;
const goSportsTeam = true;
let len: number;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball: Dragonball;
let i: number;
let length: number;
```

---

<a name="variables--define-where-used"></a>
[**13.4**](#variables--define-where-used) ‣ Assign variables where you need them, but place them in a reasonable place.

> Why? `let` and `const` are block scoped and not function scoped.

```typescript
// bad - unnecessary function call
function checkName(hasName) {
  const name = getName();

  if (hasName === 'test') {
    return false;
  }

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}

// good
function checkName(hasName) {
  if (hasName === 'test') {
    return false;
  }

  const name = getName();

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}
```

<a name="variables--no-chain-assignment"></a>
[**13.5**](#variables--no-chain-assignment) ‣ Don’t chain variable assignments.

<img src="eslint.svg" height="18" align="center"/> [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

> Why? Chaining variable assignments creates implicit global variables.

```typescript
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

---

<a name="variables--unary-increment-decrement"></a>
[**13.6**](#variables--unary-increment-decrement) ‣ Avoid using unary increments and decrements (`++`, `--`).

<img src="eslint.svg" height="18" align="center"/> [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

> Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

```typescript
// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good

const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;
```

---

<a name="variables--linebreak"></a>
[**13.7**](#variables--linebreak) ‣ Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html)

> Why? Linebreaks surrounding `=` can obfuscate the value of an assignment.

```typescript
// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';
```

---

<a name="variables--no-unused-vars"></a>
[**13.8**](#variables--no-unused-vars) ‣ Disallow unused variables.

<img src="eslint.svg" height="18" align="center"/> [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

> Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

```typescript
// bad
const some_unused_var = 42;

// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;

// Unused function arguments.
function getX(x: number, y: number): number {
    return x;
}

// good
function getXPlusY(x: number, y: number): number {
  return x + y;
}

const x = 1;
const y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
const { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.
```

**[⬆ back to top](#table-of-contents)**


## Comparison Operators & Equality

<a name="comparison--eqeqeq"></a>
[**14.1**](#comparison--eqeqeq) ‣ Use `===` and `!==` over `==` and `!=`.

<img src="eslint.svg" height="18" align="center"/> [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

---

<a name="comparison--if"></a>
[**14.2**](#comparison--if) ‣ Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

- **Objects** evaluate to **true**
- **Undefined** evaluates to **false**
- **Null** evaluates to **false**
- **Booleans** evaluate to **the value of the boolean**
- **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
- **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```typescript
if ([0] && []) {
  // true
  // an array (even an empty one) is an object, objects will evaluate to true
}
```

---

<a name="comparison--shortcuts"></a>
[**14.3**](#comparison--shortcuts) ‣ Use shortcuts for booleans, but explicit comparisons for strings and numbers.

```typescript
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```

---

<a name="comparison--moreinfo"></a>
[**14.4**](#comparison--moreinfo) ‣ For more information, see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

---

<a name="comparison--switch-blocks"></a>
[**14.5**](#comparison--switch-blocks) ‣ In switch statements, use braces to create blocks for all `case` and `default` clauses, or none of them. Be consistent.

```typescript
// bad
switch (foo) {
  case 1:
    // ...
    break;
  case 2: {
    // ...
    break;
  }
  case 3:
    // ...
    break;
  default: {
    // ...
  }
}

// good
switch (foo) {
  case 1:
    // ...
    break;
  case 2:
    // ...
    break;
  case 3:
    // ...
    break;
  default:
    // ...
}

// good
switch (foo) {
  case 1: {
    // ...
    break;
  }
  case 2: {
    // ...
    break;
  }
  case 3: {
    // ...
    break;
  }
  default: {
    // ...
  }
}
```

---

<a name="comparison--nested-ternaries"></a>
[**14.6**](#comparison--nested-ternaries) ‣ Ternaries should not be nested and generally be single line expressions.

<img src="eslint.svg" height="18" align="center"/> [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

```typescript
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

---

<a name="comparison--unneeded-ternary"></a>
[**14.7**](#comparison--unneeded-ternary) ‣ Avoid unneeded ternary statements.

<img src="eslint.svg" height="18" align="center"/> [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

```typescript
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

---

<a name="comparison--no-mixed-operators"></a>
[**14.8**](#comparison--no-mixed-operators) ‣ When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators: `+`, `-`, and `**` since their precedence is broadly understood. We recommend enclosing `/` and `*` in parentheses because their precedence can be ambiguous when they are mixed.

<img src="eslint.svg" height="18" align="center"/> [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

> Why? This improves readability and clarifies the developer’s intention.

```typescript
// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad
// one may be confused into thinking (a || b) && c
if (a || b && c) {
  return d;
}

// bad
const bar = a + b / c * d;

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const bar = a ** b - (5 % d);

// good
if (a || (b && c)) {
  return d;
}

// good
const bar = a + (b / c) * d;
```

**[⬆ back to top](#table-of-contents)**

## Blocks

<a name="blocks--cuddled-elses"></a>
[**15.1**](#blocks--cuddled-elses) ‣ If you’re using multiline blocks with `if` and `else`, put `else` on the same line as your `if` block’s closing brace.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`brace-style`](https://eslint.org/docs/rules/brace-style.html)

```typescript
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

---

**TODO:** Further discussion required

<a name="blocks--no-else-return"></a>
[**15.2**](#blocks--no-else-return) ‣ If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks.

<img src="eslint.svg" height="18" align="center"/> [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

```typescript
// bad
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// bad
function cats() {
  if (x) {
    return x;
  } else if (y) {
    return y;
  }
}

// bad
function dogs() {
  if (x) {
    return x;
  } else {
    if (y) {
      return y;
    }
  }
}

// good
function foo() {
  if (x) {
    return x;
  }

  return y;
}

// good
function cats() {
  if (x) {
    return x;
  }

  if (y) {
    return y;
  }
}

// good
function dogs(x) {
  if (x) {
    if (z) {
      return y;
    }
  } else {
    return z;
  }
}
```

**[⬆ back to top](#table-of-contents)**

## Control Statements

<a name="control-statements"></a>
[**16.1**](#control-statements) ‣ In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

> Why? This improves readability by making it easier to visually follow complex logic.

```typescript
// bad
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// bad
if ((foo === 123 || bar === 'abc') &&
  doesItLookGoodWhenItBecomesThatLong() &&
  isThisReallyHappening()) {
  thing1();
}

// good
if (
  (foo === 123 || bar === 'abc') &&
  doesItLookGoodWhenItBecomesThatLong() &&
  isThisReallyHappening()
) {
  thing1();
}

// good
if (
  (foo === 123 ||
    bar === 'abc' ||
    someOtherReallyLongFunctionName()) &&
  doesItLookGoodWhenItBecomesThatLong() &&
  isThisReallyHappening()
) {
  thing1();
}

// good
if (foo === 123 && bar === 'abc') {
  thing1();
}
```

---

<a name="control-statements--value-selection"></a>
[**16.2**](#control-statements--value-selection) ‣ Don't use selection operators in place of control statements.

```typescript
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
  startRunning();
}
```

**[⬆ back to top](#table-of-contents)**

## Comments

<a name="comments--multiline"></a>
[**17.1**](#comments--multiline) ‣ Use `/** ... */` for multiline comments.

```typescript
// bad
// make() returns a new element
// based on the passed in tag name
function make(tag: string): Element {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag: string): Element {

  // ...

  return element;
}
```

---

<a name="comments--singleline"></a>
[**17.2**](#comments--singleline) ‣ Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

```typescript
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```

---

<a name="comments--spaces"></a>
[**17.3**](#comments--spaces) ‣ Start all comments with a space to make it easier to read.

<img src="eslint.svg" height="18" align="center"/> [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

```typescript
// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
  *based on the passed-in tag name
  */
function make(tag: string): Element {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag: string): Element {

  // ...

  return element;
}
```

---

<a name="comments--actionitems"></a>
[**17.4**](#comments--actionitems) ‣ Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you’re pointing out a problem that needs to be revisited, or if you’re suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.

```typescript
class Calculator extends Abacus {
  constructor() {
    super();

    // FIXME: shouldn’t use a global here
    total = 0;
  }
}
```

```typescript
class Calculator extends Abacus {
  constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
```

**[⬆ back to top](#table-of-contents)**

## Whitespace

<a name="whitespace--spaces"></a>
[**18.1**](#whitespace--spaces) ‣ Use soft tabs (space character) set to 2 spaces.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`indent`](https://eslint.org/docs/rules/indent.html)

```typescript
// bad
function foo() {
∙∙∙∙let name;
}

// bad
function bar() {
∙let name;
}

// good
function baz() {
∙∙let name;
}
```

---

<a name="whitespace--before-blocks"></a>
[**18.2**](#whitespace--before-blocks) ‣ Place 1 space before the leading brace.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html)

```typescript
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

---

<a name="whitespace--around-keywords"></a>
[**18.3**](#whitespace--around-keywords) ‣ Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html)

```typescript
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```

---

<a name="whitespace--infix-ops"></a>
[**18.4**](#whitespace--infix-ops) ‣ Set off operators with spaces.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html)

```typescript
// bad
const x=y+5;

// good
const x = y + 5;
```

---

<a name="whitespace--newline-at-end"></a>
[**18.5**](#whitespace--newline-at-end) ‣ End files with a single newline character.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`eol-last`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

```typescript
// bad
import { es6 } from './AirbnbStyleGuide';
  // ...
export default es6;
```

```typescript
// bad
import { es6 } from './AirbnbStyleGuide';
  // ...
export default es6;↵
↵
```

```typescript
// good
import { es6 } from './AirbnbStyleGuide';
  // ...
export default es6;↵
```

---

<a name="whitespace--chains"></a>
[**18.6**](#whitespace--chains) ‣ Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call), [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

```typescript
// bad
const foo = bar.qwer('.baz').tyui(data).op().asdf('beep').ghjkl('baz', true)
    .zxc('substance', (ecto + plasm) * 2).asdf('green').
    zxc('try', `contain(${ecto + plasm}, ${ecto + plasm})`)
    .call(tron.baz);

// good
const foo = bar
  .qwer('.baz')
  .tyui(data)
  .op()
  .asdf('beep')
  .ghjkl('baz', true)
  .zxc('substance', (ecto + plasm) * 2)
  .asdf('green')
  .zxc('try', `contain(${ecto + plasm}, ${ecto + plasm})`)
  .call(tron.baz);
```

---

<a name="whitespace--after-blocks"></a>
[**18.7**](#whitespace--after-blocks) ‣ Leave a blank line after blocks and before the next statement.

```typescript
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// bad
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// good
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```

---

<a name="whitespace--padded-blocks"></a>
[**18.8**](#whitespace--padded-blocks) ‣ Do not pad your blocks with blank lines.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html)

```typescript
// bad
function bar() {

  console.log(foo);

}

// bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// bad
class Foo {
  bar: Bar;

  constructor(bar: Bar) {
    this.bar = bar;
  }
}

// good
function bar() {
  console.log(foo);
}

// good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```

---

<a name="whitespace--no-multiple-blanks"></a>
[**18.9**](#whitespace--no-multiple-blanks) ‣ Do not use multiple blank lines to pad your code.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)

```typescript
// bad
class Person {
  fullName: string;
  email: string;
  birthday: Date;
  age: number;

  constructor(fullName: string, email: string, birthday: Date) {
    this.fullName = fullName;


    this.email = email;


    this.setAge(birthday);
  }


  setAge(birthday: Date) {
    const today = new Date();


    const age = this.getAge(today, birthday);


    this.age = age;
  }


  getAge(today: Date, birthday: Date): number {
    // ..
  }
}

// good
class Person {
  fullName: string;
  email: string;
  birthday: Date;
  age: number;

  constructor(fullName: string, email: string, birthday: Date) {
    this.fullName = fullName;
    this.email = email;
    this.setAge(birthday);
  }

  setAge(birthday: Date) {
    const today = new Date();
    const age = getAge(today, birthday);
    this.age = age;
  }

  getAge(today: Date, birthday: Date): number {
    // ..
  }
}
```

---

<a name="whitespace--in-parens"></a>
[**18.10**](#whitespace--in-parens) ‣ Do not add spaces inside parentheses.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html)

```typescript
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```

---

<a name="whitespace--in-brackets"></a>
[**18.11**](#whitespace--in-brackets) ‣ Do not add spaces inside brackets.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html)

```typescript
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
```

---

<a name="whitespace--in-braces"></a>
[**18.12**](#whitespace--in-braces) ‣ Add spaces inside curly braces.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html)

```typescript
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
```

---

<a name="whitespace--max-len"></a>
[**18.13**](#whitespace--max-len) ‣ Avoid having lines of code that are longer than 100 characters (including whitespace). Note: per [above](#strings--line-length), long strings are exempt from this rule, and should not be broken up.

Prettier does not enforce this specifically, but will wrap lines at _roughly_ 80 characters, meaning that after it has done its formatting your code will - except in extremely rare circumstances - fit within the 100 character limit. Please refer to [Prettier's documentation on the print width option](https://prettier.io/docs/en/options.html#print-width) for more information.

<img src="eslint.svg" height="18" align="center"/> [`max-len`](https://eslint.org/docs/rules/max-len.html)

> Why? This ensures readability and maintainability.

```typescript
// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// good
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;
```

---

<a name="whitespace--comma-spacing"></a>
[**18.14**](#whitespace--comma-spacing) ‣ Avoid spaces before commas and require a space after commas.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

```typescript
// bad
const arr = [1 , 2];

// good
const arr = [1, 2];
```

---

<a name="whitespace--computed-property-spacing"></a>
[**18.15**](#whitespace--computed-property-spacing) ‣ Enforce spacing inside of computed property brackets.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)

```typescript
// bad
obj[foo ]
obj[ 'foo']
const x = {[ b ]: a}
obj[foo[ bar ]]

// good
obj[foo]
obj['foo']
const x = { [b]: a }
obj[foo[bar]]
```

---

<a name="whitespace--func-call-spacing"></a>
[**18.16**](#whitespace--func-call-spacing) ‣ Avoid spaces between functions and their invocations.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)

```typescript
// bad
func ();

func
();

// good
func();
```

---

<a name="whitespace--key-spacing"></a>
[**18.17**](#whitespace--key-spacing) ‣ Enforce spacing between keys and values in object literal properties.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`key-spacing`](https://eslint.org/docs/rules/key-spacing)

```typescript
// bad
const obj = { foo : 42 };
const obj2 = { foo:42 };

// good
const obj = { foo: 42 };
```

---

<a name="whitespace--no-trailing-spaces"></a>
[**18.18**](#whitespace--no-trailing-spaces) ‣ Avoid trailing spaces at the end of lines.

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)

```typescript
// bad
const foo = 'bar';∙

// good
const foo = 'bar';
```


**[⬆ back to top](#table-of-contents)**

## Commas

<a name="commas--leading-trailing"></a>
[**19.1**](#commas--leading-trailing) ‣ Leading commas: **Nope.**

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`comma-style`](https://eslint.org/docs/rules/comma-style.html)

```typescript
// bad
const story = [
    once
  , upon
  , aTime
];

// good
const story = [
  once,
  upon,
  aTime,
];

// bad
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , birthYear: 1815
  , superPower: 'computers'
};

// good
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
```

---

<a name="commas--dangling"></a>
[**19.2**](#commas--dangling) ‣ Additional trailing comma: **Yup.**

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html)

> Why? This leads to cleaner git diffs.

```diff
// bad - git diff without trailing comma
const hero = {
      firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
      firstName: 'Florence',
      lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```

```typescript
// bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};

const heroes = [
  'Batman',
  'Superman'
];

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};

const heroes = [
  'Batman',
  'Superman',
];

// bad
function createHero(
  firstName: string,
  lastName: string,
  inventorOf: Invention
) {
  // does nothing
}

// good
function createHero(
  firstName: string,
  lastName: string,
  inventorOf: Invention,
) {
  // does nothing
}

// good (note that a comma must not appear after a "rest" element)
function createHero(
  firstName: string,
  lastName: string,
  inventorOf: Invention,
  ...heroArgs
) {
  // does nothing
}

// bad
createHero(
  firstName,
  lastName,
  inventorOf
);

// good
createHero(
  firstName,
  lastName,
  inventorOf,
);

// good (note that a comma must not appear after a "rest" element)
createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
);
```

**[⬆ back to top](#table-of-contents)**

## Semicolons

<a name="semicolons--required"></a>
[**20.1**](#semicolons--required) ‣ **Yup.**

<img src="prettier.svg" height="18" align="center"/> **Enforced by Prettier**

<img src="eslint.svg" height="18" align="center"/> [`semi`](https://eslint.org/docs/rules/semi.html)

> Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

```typescript
// bad - raises exception
const luke = {}
const leia = {}
[luke, leia].forEach((jedi) => jedi.father = 'vader')

// bad - raises exception
const reaction = "No! That’s impossible!"
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}())

// bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
function foo() {
  return
    'search your feelings, you know it to be foo'
}

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// good
const reaction = "No! That’s impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}());

// good
function foo() {
  return 'search your feelings, you know it to be foo';
}
```

[Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

**[⬆ back to top](#table-of-contents)**

## Type Casting & Coercion

<a name="coercion--explicit"></a>
[**21.1**](#coercion--explicit) ‣ Perform type coercion at the beginning of the statement.

---

<a name="coercion--strings"></a>
[**21.2**](#coercion--strings) ‣ Strings:

<img src="eslint.svg" height="18" align="center"/> [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```typescript
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);
```

---

<a name="coercion--numbers"></a>
[**21.3**](#coercion--numbers) ‣ Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings.

<img src="eslint.svg" height="18" align="center"/> [`radix`](https://eslint.org/docs/rules/radix), [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

> Why? The `parseInt` function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading whitespace in string is ignored. If radix is `undefined` or `0`, it is assumed to be `10` except when the number begins with the character pairs `0x` or `0X`, in which case a radix of 16 is assumed. This differs from ECMAScript 3, which merely discouraged (but allowed) octal interpretation. Many implementations have not adopted this behavior as of 2013. And, because older browsers must be supported, always specify a radix.

```typescript
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);
```

---

<a name="coercion--comment-deviations"></a>
[**21.4**](#coercion--comment-deviations) ‣ If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you’re doing.

```typescript
// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
const val = inputValue >> 0;
```

---

<a name="coercion--bitwise"></a>
[**21.5**](#coercion--bitwise) ‣ **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

```typescript
2147483647 >> 0; // => 2147483647
2147483648 >> 0; // => -2147483648
2147483649 >> 0; // => -2147483647
```

---

<a name="coercion--booleans"></a>
[**21.6**](#coercion--booleans) ‣ Booleans:

<img src="eslint.svg" height="18" align="center"/> [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```typescript
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
```

**[⬆ back to top](#table-of-contents)**

## Naming Conventions

<a name="naming--descriptive"></a>
[**22.1**](#naming--descriptive) ‣ Avoid single letter names. Be descriptive with your naming.

<img src="eslint.svg" height="18" align="center"/> [`id-length`](https://eslint.org/docs/rules/id-length)

```typescript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

---

<a name="naming--camelCase"></a>
[**22.2**](#naming--camelCase) ‣ Use camelCase when naming objects, functions, and instances.

<img src="eslint.svg" height="18" align="center"/> [`camelcase`](https://eslint.org/docs/rules/camelcase.html)

```typescript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

---

<a name="naming--PascalCase"></a>
[**22.3**](#naming--PascalCase) ‣ Use PascalCase only when naming constructors or classes.

<img src="eslint.svg" height="18" align="center"/> [`new-cap`](https://eslint.org/docs/rules/new-cap.html)

```typescript
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

---

<a name="naming--leading-underscore"></a>
[**22.4**](#naming--leading-underscore) ‣ Do not use trailing or leading underscores.

<img src="eslint.svg" height="18" align="center"/> [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle.html)

> Why? JavaScript is only now, in ES2022, adding the concept of privacy in terms of properties or methods. Although a leading underscore has long been a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.

```typescript
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';

// good, in environments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstNames = new WeakMap();
firstNames.set(this, 'Panda');
```

---

<a name="naming--self-this"></a>
[**22.5**](#naming--self-this) ‣ Don’t save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

```typescript
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```

---

<a name="naming--filename-matches-export"></a>
[**22.6**](#naming--filename-matches-export) ‣ A base filename should exactly match the name of its default export.

```typescript
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```

---

<a name="naming--PascalCase-singleton"></a>
[**22.7**](#naming--PascalCase-singleton) ‣ Use PascalCase when you export a constructor / class / singleton / function library / bare object.

```typescript
const AirbnbStyleGuide = {
  es6: {
  },
};

export default AirbnbStyleGuide;
```

---

<a name="naming--Acronyms-and-Initialisms"></a>
[**22.8**](#naming--Acronyms-and-Initialisms) ‣ Acronyms and initialisms should always be all uppercased, or all lowercased.

> Why? Names are for readability, not to appease a computer algorithm.

```typescript
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];

// also good
const httpRequests = [
  // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];
```

---

<a name="naming--uppercase"></a>
[**22.9**](#naming--uppercase) ‣ You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change.

> Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.
- What about all `const` variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
- What about exported objects? - Uppercase at the top level of export (e.g. `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.

```typescript
// bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// ---

// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// ---

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value'
};

// good
export const MAPPING = {
  key: 'value'
};
```

**[⬆ back to top](#table-of-contents)**

## Accessors

<a name="accessors--not-required"></a>
[**23.1**](#accessors--not-required) ‣ Accessor functions for properties are not required.

---

<a name="accessors--no-getters-setters"></a>
[**23.2**](#accessors--no-getters-setters) ‣ Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use `getVal()` and `setVal('hello')`.

```typescript
// bad
class Dragon {
  get age(): number {
    // ...
  }

  set age(value: number) {
    // ...
  }
}

// good
class Dragon {
  getAge(): number {
    // ...
  }

  setAge(value: number) {
    // ...
  }
}
```

---

<a name="accessors--boolean-prefix"></a>
[**23.3**](#accessors--boolean-prefix) ‣ If the property/method is a `boolean`, use `isVal()` or `hasVal()`.

```typescript
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```

---

<a name="accessors--consistent"></a>
[**23.4**](#accessors--consistent) ‣ It’s okay in rare cases to create `get()` and `set()` functions, but be consistent.

```typescript
class Jedi {
  constructor(options: IJediOptions = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key: string, val: any) {
    this[key] = val;
  }

  get<T>(key: string): T {
    return this[key];
  }
}
```

**[⬆ back to top](#table-of-contents)**

## Events

<a name="events--hash"></a>
[**24.1**](#events--hash) ‣ When attaching data payloads to events, pass an object literal instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

```typescript
// bad
const event = new CustomEvent('listingUpdated', { detail: listing.id });

someElement.addEventListener('listingUpdated', (event: CustomEvent<string>) => {
  // do something with event.detail
});

someElement.dispatchEvent(event);
```

prefer:

```typescript
// good
interface ListingUpdatedEventDetail {
  listingId: string;
}
const event = new CustomEvent<ListingUpdatedEventDetail>(
  'listingUpdated',
  {
    detail: {
      listingId: listing.id,
    },
  },
);

someElement.addEventListener(
  'listingUpdated',
  (event: CustomEvent<ListingUpdatedEventDetail>) => {
    // do something with event.detail.listingId
  },
);

someElement.dispatchEvent(event);
```

**[⬆ back to top](#table-of-contents)**

## Standard Library

The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
contains utilities that are functionally broken but remain for legacy reasons.

<a name="standard-library--isnan"></a>
[**25.1**](#standard-library--isnan) ‣ Use `Number.isNaN` instead of global `isNaN`.


<img src="eslint.svg" height="18" align="center"/> [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

> Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN.
> If this behavior is desired, make it explicit.

```typescript
// bad
isNaN('1.2'); // false
isNaN('1.2.3'); // true

// good
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true
```

---

<a name="standard-library--isfinite"></a>
[**25.2**](#standard-library--isfinite) ‣ Use `Number.isFinite` instead of global `isFinite`.

<img src="eslint.svg" height="18" align="center"/> [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

> Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number.
> If this behavior is desired, make it explicit.

```typescript
// bad
isFinite('2e3'); // true

// good
Number.isFinite('2e3'); // false
Number.isFinite(parseInt('2e3', 10)); // true
```

**[⬆ back to top](#table-of-contents)**

## Language Proposals

<a name="tc39-proposals"></a>
[**26.1**](#tc39-proposals) ‣ Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

> Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ back to top](#table-of-contents)**

## Testing

<a name="testing--yup"></a>
[**27.1**](#testing--yup) ‣ **Yup.**

```typescript
function foo() {
  return true;
}
```

---

<a name="testing--for-real"></a>
[**27.2**](#testing--for-real) ‣ **No, but seriously**:
- Refer to the [Web UI Frameworks & Tools guardrail](https://atlassian.spscommerce.com/wiki/pages/viewpage.action?spaceKey=Guardrails&title=Web+UI+Frameworks+and+Tools) for guidance on what testing tools we use and what kinds of testing you should be doing.
- Strive to write many small pure functions, and minimize where mutations occur.
- Be cautious about stubs and mocks - they can make your tests more brittle.
- 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it. Don't write crappy tests just to bump the number.
- Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ back to top](#table-of-contents)**

## Resources

**TODO:** Create list of resources we recommend - blog posts, books, YouTube videos, etc

**[⬆ back to top](#table-of-contents)**

# };
