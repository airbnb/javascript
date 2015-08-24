
> airbnb-style@2.0.0 script /home/justjake/src/javascript
> babel-node ./script/index.js

## Types

-   [1.1](#1.1) <a name="1.1"></a> **Primitives**: When you access a primitive type you work directly on its value.

    -   `string`
    -   `number`
    -   `boolean`
    -   `null`
    -   `undefined`

    ```javascript-no-test
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

-   [1.2](#1.2) <a name="1.2"></a> **Complex**: When you access a complex type you work on a reference to its value.

    -   `object`
    -   `array`
    -   `function`

    ```javascript-no-test
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

[⬆ back to top](#table-of-contents)

## References

-   [2.1](#2.1) <a name="2.1"></a> Use `const` for all of your references; avoid using `var`.

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

-   [2.2](#2.2) <a name="2.2"></a> If you must mutate references, use `let` instead of `var`.

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

-   [2.3](#2.3) <a name="2.3"></a> Note that both `let` and `const` are block-scoped.

    ```javascript-no-test
    // const and let only exist in the blocks they are defined in.
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError
    console.log(b); // ReferenceError
    ```

[⬆ back to top](#table-of-contents)

## Objects

-   [3.1](#3.1) <a name="3.1"></a> Use the literal syntax for object creation.

    ```javascript
    // bad
    const item = new Object();

    // good
    const item = {};
    ```

-   [3.2](#3.2) <a name="3.2"></a> If your code will be executed in browsers in script context, don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61). It’s OK to use them in ES6 modules and server-side code.

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

-   [3.3](#3.3) <a name="3.3"></a> Use readable synonyms in place of reserved words.

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

-   [3.4](#3.4) <a name="3.4"></a> Use computed property names when creating objects with dynamic property names.

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

-   [3.5](#3.5) <a name="3.5"></a> Use object method shorthand.

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

-   [3.6](#3.6) <a name="3.6"></a> Use property value shorthand.

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

-   [3.7](#3.7) <a name="3.7"></a> Group your shorthand properties at the beginning of your object declaration.

    > Why? It's easier to tell which properties are using the shorthand.

    ```javascript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // prepare
    `all the code that comes after "prepare" but before // bad or // good
     will be removed by the pre-processor`;

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

[⬆ back to top](#table-of-contents)

## Arrays

-   [4.1](#4.1) <a name="4.1"></a> Use the literal syntax for array creation.

    ```javascript
    // bad
    const items = new Array();

    // good
    const items = [];
    ```

-   [4.2](#4.2) <a name="4.2"></a> Use Array#push instead of direct assignment to add items to an array.

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

    <a name="es6-array-spreads"></a>

-   [4.3](#4.3) <a name="4.3"></a> Use array spreads `...` to copy arrays.

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

-   [4.4](#4.4) <a name="4.4"></a> To convert an array-like object to an array, use Array#from.

    ```javascript-no-test
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);
    ```

[⬆ back to top](#table-of-contents)

## Destructuring

-   [5.1](#5.1) <a name="5.1"></a> Use object destructuring when accessing and using multiple properties of an object.

    > Why? Destructuring saves you from creating temporary references for those
    > properties.

    ```javascript
    // bad
    function getFullName(user) {
      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;
    }

    // good
    function getFullName(obj) {
      const { firstName, lastName } = obj;
      return `${firstName} ${lastName}`;
    }

    // best
    function getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    }
    ```

-   [5.2](#5.2) <a name="5.2"></a> Use array destructuring.

    ```javascript
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first, second] = arr;
    ```

-   [5.3](#5.3) <a name="5.3"></a> Use object destructuring for multiple return values, not array destructuring.

    > Why? You can add new properties over time or change the order of things
    > without breaking call sites.

    ```javascript
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
    const { left, right } = processInput(input);
    ```

[⬆ back to top](#table-of-contents)

## Strings

-   [6.1](#6.1) <a name="6.1"></a> Use single quotes `''` for strings.

        ```javascript
        // bad
        const name = "Capt. Janeway";

        // good
        const name = 'Capt. Janeway';
        ```

-   [6.2](#6.2) <a name="6.2"></a> Strings longer than 100 characters should be written across multiple lines using string concatenation.

-   [6.3](#6.3) <a name="6.3"></a> Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

    ```javascript
    // bad
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
    ```

      <a name="es6-template-literals"></a>

-   [6.4](#6.4) <a name="6.4"></a> When programmatically building up strings, use template strings instead of concatenation.

    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```javascript
    // bad
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }

    // bad
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }

    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    ```

-   [6.5](#6.5) <a name="6.5"></a> Never use eval() on a string, it opens too many vulnerabilities.

[⬆ back to top](#table-of-contents)

