# ~~Airbnb~~ ascribe JavaScript Style Guide() {

## Introduction
At ascribe we write a lot of JavaScript and value quality code.
Since all of us liked [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript), we figured that we can just fork it and change it to our needs.

## Approach
As we want everyone in the team to be able to take part in the creation of this style guide, we decided to have it reviewed and transformed to our specific needs.
This is why we're going to remove all the contents of this document, to add them bit-by-bit again through a process of pull-requests and reviews.
Depending on how fast the review will be, every other day there will be a pull a new pull request for everyone to read and comment on.

As for adjusting the linters, we still need to figure out a way on how to change them efficiently. So if you have suggestions, come forward.


Other Style Guides
 - [ES5](es5/)
 - [React](react/)

## Table of Contents

  1. [Types](#types)
  1. [References](#references)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring) #TBD
  1. [Strings](#strings) #TBD
  1. [Functions](#functions) #TBD
  1. [Arrow Functions](#arrow-functions) #TBD
  1. [Constructors](#constructors) #TBD
  1. [Modules](#modules) #TBD
  1. [Iterators and Generators](#iterators-and-generators) #TBD
  1. [Properties](#properties) #TBD
  1. [Variables](#variables) #TBD
  1. [Hoisting](#hoisting) #TBD
  1. [Comparison Operators & Equality](#comparison-operators--equality) #TBD
  1. [Blocks](#blocks) #TBD
  1. [Comments](#comments) #TBD
  1. [Whitespace](#whitespace) #TBD
  1. [Commas](#commas) #TBD
  1. [Semicolons](#semicolons) #TBD
  1. [Type Casting & Coercion](#type-casting--coercion) #TBD
  1. [Naming Conventions](#naming-conventions) #TBD
  1. [Accessors](#accessors) #TBD
  1. [Events](#events) #TBD
  1. [jQuery](#jquery) #TBD
  1. [ECMAScript 5 Compatibility](#ecmascript-5-compatibility) #TBD #TBD
  1. [ECMAScript 6 Styles](#ecmascript-6-styles) #TBD
  1. [Testing](#testing) #TBD
  1. [Performance](#performance) #TBD
  1. [Resources](#resources) #TBD
  1. [In the Wild](#in-the-wild) #TBD
  1. [Translation](#translation) #TBD
  1. [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide) #TBD
  1. [Chat With Us About JavaScript](#chat-with-us-about-javascript) #TBD
  1. [Contributors](#contributors) #TBD
  1. [License](#license) #TBD

## Types

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

**[⬆ back to top](#table-of-contents)**

## References

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

**[⬆ back to top](#table-of-contents)**

## Objects

  - [3.1](#3.1) <a name='3.1'></a> Use the literal syntax for object creation.

    ```javascript
    // bad
    const item = new Object();

    // good
    const item = {};
    ```

  - [3.2](#3.2) <a name='3.2'></a> If your code will be executed in browsers in script context, don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61). It’s OK to use them in ES6 modules and server-side code.

    ```javascript
    // bad
    const superman = {
      default: { clark: 'kent' },
      private: true,
    };

    // good
    const superman = {
      defaults: { clark: 'kent' },
      hidden: true,
    };
    ```

  - [3.3](#3.3) <a name='3.3'></a> Use readable synonyms in place of reserved words.

    ```javascript
    // bad
    const superman = {
      class: 'alien',
    };

    // bad
    const superman = {
      klass: 'alien',
    };

    // good
    const superman = {
      type: 'alien',
    };
    ```

  <a name="es6-computed-properties"></a>
  - [3.4](#3.4) <a name='3.4'></a> Use computed property names when creating objects with dynamic property names.

  > Why? They allow you to define all the properties of an object in one place.

    ```javascript

    function getKey(k) {
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

  <a name="es6-object-shorthand"></a>
  - [3.5](#3.5) <a name='3.5'></a> Use object method shorthand.

    ```javascript
    // bad
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // good
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
    ```

  <a name="es6-object-concise"></a>
  - [3.6](#3.6) <a name='3.6'></a> Use property value shorthand.

  > Why? It is shorter to write and descriptive.

    ```javascript
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

  - [3.7](#3.7) <a name='3.7'></a> Group your shorthand properties at the beginning of your object declaration.

  > Why? It's easier to tell which properties are using the shorthand.

    ```javascript
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

**[⬆ back to top](#table-of-contents)**

## Arrays

  - [4.1](#4.1) <a name='4.1'></a> Use the literal syntax for array creation.

    ```javascript
    // bad
    const items = new Array();

    // good
    const items = [];
    ```

  - [4.2](#4.2) <a name='4.2'></a> Use Array#push instead of direct assignment to add items to an array.

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  <a name="es6-array-spreads"></a>
  - [4.3](#4.3) <a name='4.3'></a> Use array spreads `...` to copy arrays.

    ```javascript
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];
    ```
  - [4.4](#4.4) <a name='4.4'></a> To convert an array-like object to an array, use Array#from.

    ```javascript
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);
    ```

**[⬆ back to top](#table-of-contents)**

# }
