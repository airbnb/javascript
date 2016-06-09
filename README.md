# Nerdery JavaScript Standards() {

> A sensible style guide for writing JavaScript. This is a living, breathing document that will continue to evolve as new language features are unveiled.

Following these conventions will:

* Improve readability
* Minimize common code smells
* Reduce errors and improve maintainability

This document is not intended to:

* Advocate specific frameworks or libraries
* Give advice on design patterns and project architecture
* Guide the reader in learning JavaScript

## Table of Contents

  1. [Types](#types)
  1. [Variables](#variables)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Classes](#classes)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)
  1. [Properties](#properties)
  1. [Comparison](#comparison)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Events](#events)
  1. [DOM Interaction](#dom-interaction)
  1. [Asynchronous Operations](#asynchronous-operations)
  1. [Deployment](#deployment)
  1. [License](#license)

## Types

  <a name="types--assign-consistent"></a><a name="1.1"></a>
  - [1.1](#types--assign-consistent) The value of a variables should remain the same type as it was originally assigned (a number, string, boolean, array, or object). Avoid reassigning variables to a different type.

    ```javascript
    // bad
    let count = 1;
    count = 'Ben Kenobi';

    // good
    let count = 1;
    count = 2;
    ```

  <a name="types--return-consistent"></a><a name="1.2"></a>
  - [1.2](#types--return-consistent) Values returned by functions should be of a consistent type. Avoid returning multiple different types.

    ```javascript
    // bad
    pressYourLuck(bigMoney) {
        if (bigMoney) {
            return 'No whammies!';
        }

        return false;
    };
    ```

  <a name="types--coercion-explicit"></a><a name="1.3"></a>
  - [1.3](#types--coercion-explicit) Perform type coercion at the beginning of the statement.

  <a name="types--coercion-strings"></a><a name="1.4"></a>
  - [1.4](#types--coercion-strings) Strings:

    ```javascript
    // this.reviewScore = 9;

    // bad
    const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

    // bad
    const totalScore = this.reviewScore.toString(); // isn't guaranteed to return a string

    // good
    const totalScore = String(this.reviewScore);
    ```

  <a name="types--coercion-numbers"></a><a name="1.5"></a>
  - [1.5](#types--coercion-numbers) Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. eslint: [`radix`](http://eslint.org/docs/rules/radix), [`no-implicit-coercion`](http://eslint.org/docs/rules/no-implicit-coercion)

    ```javascript
    const inputValue = '4';

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // good
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);
    ```

  <a name="types--coercion-booleans"></a><a name="1.6"></a>
  - [1.6](#types--coercion-booleans) Booleans:

    ```javascript
    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // bad
    const hasAge = !!age;

    // good
    const hasAge = Boolean(age);
    ```

  <a name="types--comment-deviations"></a><a name="1.7"></a>
  - [1.7](#types--comment-deviations) Avoid "trick" operators whose purpose is not immediately readable and obvious. If you must use a convoluted syntax for performance reasons, leave a comment explaining why and what you're doing.

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
    ```

  <a name="types--exceptions"></a><a name="1.8"></a>
  - [1.8](#types--exceptions) When an exception is to be thrown, prefer use of one of the built-in Error types or a class that inherits from Error.
  -
    > Why? This provide more semantic messaging and allow for the possibility of catching certain types of errors.

    ```javascript
    divide(numerator, denominator) {
        if (denominator === 0) {
            // bad
            throw 'string exceptions are harder to handle';

            // good
            throw new RangeError('cannot divide by 0');
        }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Variables

  <a name="variables--prefer-const"></a><a name="2.1"></a>
  - [2.1](#variables--prefer-const) Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

    > Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

    ```javascript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  <a name="variables--disallow-var"></a><a name="2.2"></a>
  - [2.2](#variables--disallow-var) If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](http://eslint.org/docs/rules/no-var)

    > Why? `let` is block-scoped rather than function-scoped like `var`.

    ```javascript
    // bad
    var count = 1;
    count += 1;

    // good, use the let.
    let count = 1;
    count += 1;
    ```

  <a name="variables--one-const"></a><a name="2.3"></a>
  - [2.3](#variables--one-const) Use one `const` declaration per variable. eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

    > Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs.

    ```javascript
    // bad
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
    ```

  <a name="variables--const-let-group"></a><a name="2.4"></a>
  - [2.4](#variables--const-let-group) Group all your `const`s and then group all your `let`s.

    > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

    ```javascript
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

  <a name="variables--define-where-used"></a><a name="2.5"></a>
  - [2.5](#variables--define-where-used) Assign variables near their first use.

    > Why? `let` and `const` are block scoped and not function scoped.

    ```javascript
    // bad - unnecessary function call
    checkName(hasName) {
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
    checkName(hasName) {
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

  <a name="variables--always-declare"></a><a name="2.7"></a>
  - [2.6](#variables--always-declare) Always declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

    ```javascript
    // bad
    superPower = new SuperPower();

    // good
    const superPower = new SuperPower();
    ```

**[⬆ back to top](#table-of-contents)**

## Objects

  <a name="objects--no-new"></a><a name="3.1"></a>
  - [3.1](#objects--no-new) Use the literal syntax for object creation. eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

    ```javascript
    // bad
    const item = new Object();

    // good
    const item = {};
    ```

  <a name="objects--reserved-words"></a><a name="3.2"></a>
  - [3.2](#objects--reserved-words) If your code will be executed in a browser context, don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. Use meaningful synonyms instead.

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

  <a name="objects--computed-properties"></a><a name="3.3"></a>
  - [3.3](#objects--computed-properties) Use computed property names when creating objects with dynamic property names.

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

  <a name="objects--shorthand"></a><a name="3.4"></a>
  - [3.4](#objects--shorthand) Use object method shorthand. eslint: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand)

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

  <a name="objects--concise"></a><a name="3.5"></a>
  - [3.5](#objects--concise) Use property value shorthand when object keys and values are redundantly named. eslint: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand)

    ```javascript
    // bad
    makePoint(x, y) {
        return { x: x, y: y };
    }

    // good
    makePoint(x, y) {
        return { x, y };
    }
    ```

  <a name="objects--grouped-shorthand"></a><a name="3.6"></a>
  - [3.6](#objects--grouped-shorthand) Group your shorthand properties at the beginning of your object declaration.

    > Why? It's easier to tell which properties are using the shorthand.

    ```javascript
    makePoint(x, y) {
        return {
            x,
            y,
            color: 'blue',
            opacity: 0.5
        };
    }
    ```

  <a name="objects--quoted-props"></a><a name="3.7"></a>
  - [3.7](#objects--quoted-props) Only quote properties that are invalid identifiers. eslint: [`quote-props`](http://eslint.org/docs/rules/quote-props)

    > Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

    ```javascript
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

**[⬆ back to top](#table-of-contents)**

## Arrays

  <a name="arrays--literals"></a><a name="4.1"></a>
  - [4.1](#arrays--literals) Use the literal syntax for array creation. eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

    ```javascript
    // bad
    const items = new Array();

    // good
    const items = [];
    ```

  <a name="arrays--push"></a><a name="4.2"></a>
  - [4.2](#arrays--push) Use Array#push instead of direct assignment to add items to an array.

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  <a name="arrays--spreads"></a><a name="4.3"></a>
  - [4.3](#arrays--spreads) Use array spreads `...` or the slice() method to make a shallow copy of arrays. Avoid extraneous for loops.

    ```javascript
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
        itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = items.slice()

    // good
    const itemsCopy = [...items];
    ```

  <a name="arrays--from"></a><a name="4.4"></a>
  - [4.4](#arrays--from) To convert an array-like object to an array, use Array#from.

    ```javascript
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);
    ```

  <a name="arrays--callback-return"></a><a name="4.5"></a>
  - [4.5](#arrays--callback-return) Use return statements in array method callbacks. It's ok to omit the return if the function body consists of a single statement. eslint: [`array-callback-return`](http://eslint.org/docs/rules/array-callback-return)

    ```javascript
    // bad
    [1, 2, 3].map(x => {
        const y = x + 1;
    });

    // good
    [1, 2, 3].map(x => {
        const y = x + 1;
        return x * y;
    });

    // good
    [1, 2, 3].map(x => x + 1);
    ```

**[⬆ back to top](#table-of-contents)**

## Destructuring

  <a name="destructuring--object"></a><a name="5.1"></a>
  - [5.1](#destructuring--object) Use object destructuring when accessing and using multiple properties of an object.

    > Why? Destructuring saves you from creating temporary references for those properties.

    ```javascript
    // bad
    getFullName(user) {
        const firstName = user.firstName;
        const lastName = user.lastName;

        return `${firstName} ${lastName}`;
    }

    // good
    getFullName(user) {
        const { firstName, lastName } = user;
        return `${firstName} ${lastName}`;
    }

    // good
    getFullName({ firstName, lastName }) {
        return `${firstName} ${lastName}`;
    }
    ```

  <a name="destructuring--array"></a><a name="5.2"></a>
  - [5.2](#destructuring--array) Use array destructuring.

    ```javascript
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first, second] = arr;
    ```

  <a name="destructuring--object-over-array"></a><a name="5.3"></a>
  - [5.3](#destructuring--object-over-array) Use object destructuring for multiple return values, not array destructuring.

    > Why? You can add new properties over time or change the order of things without breaking call sites.

    ```javascript
    // bad
    processInput(input) {
        // then a miracle occurs
        return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // good
    processInput(input) {
        // then a miracle occurs
        return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const { left, right } = processInput(input);
    ```

**[⬆ back to top](#table-of-contents)**

## Strings

  <a name="strings--quotes"></a><a name="6.1"></a>
  - [6.1](#strings--quotes) Use single quotes `''` for strings. eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

    ```javascript
    // bad
    const name = "Capt. Janeway";

    // good
    const name = 'Capt. Janeway';
    ```

  <a name="strings--line-length"></a><a name="6.2"></a>
  - [6.2](#strings--line-length) Strings that cause the line to go over 100 characters should be written across multiple lines using string concatenation. eslint: [`max-len`](http://eslint.org/docs/rules/max-len)

  <a name="strings--concat-perf"></a><a name="6.3"></a>
  - [6.3](#strings--concat-perf) Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

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

  <a name="strings--template-literals"></a><a name="6.4"></a>
  - [6.4](#strings--template-literals) When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](http://eslint.org/docs/rules/prefer-template) [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```javascript
    // bad
    sayHi(name) {
        return 'How are you, ' + name + '?';
    }

    // bad
    sayHi(name) {
        return ['How are you, ', name, '?'].join();
    }

    // bad
    sayHi(name) {
        return `How are you, ${ name }?`;
    }

    // good
    sayHi(name) {
        return `How are you, ${name}?`;
    }
    ```

  <a name="strings--eval"></a><a name="6.5"></a>
  - [6.5](#strings--eval) Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  <a name="strings--sanitize"></a><a name="6.6"></a>
  - [6.6](#strings--sanitize) Never inject untrusted strings into the DOM unless the has been sanitized. Untrusted strings include anything a user or external source can manipulate, such as query parameters, cookie values, or results from an AJAX call.

**[⬆ back to top](#table-of-contents)**

## Functions

  <a name="functions--mutate-parameters"></a><a name="7.1"></a>
  - [7.1](#functions--mutate-parameters) Never mutate parameters. eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign)

    > Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

    ```javascript
    // bad
    foo(obj) {
        if (obj.meaningOfLife == null) {
            obj.meaningOfLife = 42;
        }
    }

    // good
    foo(obj) {
        let meaningOfLife = obj.meaningOfLife;
        if (meaningOfLife == null) {
            meaningOfLife = 42;
        }
    }
    ```

  <a name="functions--reassign-parameters"></a><a name="7.2"></a>
  - [7.2](#functions--reassign-parameters) Never reassign parameters. eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign)

    > Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

    ```javascript
    // bad
    foo(a) {
        a = 1;
    }
    ```

  <a name="functions--default-parameters"></a><a name="7.3"></a>
  - [7.3](#functions--default-parameters) Use default parameter syntax rather than mutating function parameters.

    ```javascript
    // really bad
    signup(name) {
        // No! We shouldn't mutate function arguments.
        // Double bad: if opts is falsy it'll be set to an object which may
        // be what you want but it can introduce subtle bugs.
        name = name || 'Tony Stark';
    }

    // still bad
    signup (name) {
        if (name == null) {
            name = 'Tony Stark';
        }
    }

    // good
    signup(name = 'Tony Stark') {
        // ...
    }

    // good
    signup({ name = 'Tony Stark' }) {
        // ...
    }
    ```

  <a name="functions--default-side-effects"></a><a name="7.4"></a>
  - [7.4](#functions--default-side-effects) Avoid side effects with default parameters.

    > Why? They are confusing to reason about.

    ```javascript
    // bad
    count(a = b++) {
        // ...
    }
    ```

  <a name="functions--defaults-last"></a><a name="7.5"></a>
  - [7.5](#functions--defaults-last) Always put default parameters last.

    ```javascript
    // bad
    signup(name = 'Tony Stark', birthdate) {
        // ...
    }

    // good
    signup(birthdate, name = 'Tony Stark') {
        // ...
    }
    ```

  <a name="functions--too-many-parameters"></a><a name="7.6"></a>
  - [7.6](#functions--too-many-parameters) Do not create functions with more than 5 parameters. When you must have that many parameters, pass in an object instead. [`max-params`](http://eslint.org/docs/rules/max-params)

    ```javascript
    // bad
    signup(birthdate, address, city, state, zip, name) {
        // ...
    }

    // good
    signup({ birthdate, address, city, state, zip, name }) {
        // ...
    }

    // good
    // Pass an instance of a `UserInfo` object
    signup(userInfo) {
        // ..
    }
    ```

  <a name="functions--arguments-shadow"></a><a name="7.7"></a>
  - [7.7](#functions--arguments-shadow) Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

    ```javascript
    // bad
    nope(name, options, arguments) {
        // ...
    }

    // good
    yup(name, options, args) {
        // ...
    }
    ```

  <a name="functions--arguments-shadow"></a><a name="7.8"></a>
  - [7.8](#functions--arguments-shadow) Never use `arguments`, opt to use rest syntax `...` instead. [`prefer-rest-params`](http://eslint.org/docs/rules/prefer-rest-params)

    > Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

    ```javascript
    // bad
    concatenateAll() {
        const args = Array.prototype.slice.call(arguments);
        return args.join('');
    }

    // good
    concatenateAll(...args) {
        return args.join('');
    }
    ```

  <a name="functions--in-blocks"></a><a name="7.9"></a>
  - [7.9](#functions--in-blocks) Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

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

  <a name="functions--constructor"></a><a name="7.10"></a>
  - [7.10](#functions--constructor) Never use the Function constructor to create a new function. eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

    > Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

    ```javascript
    // bad
    const add = new Function('a', 'b', 'return a + b');
    ```

  <a name="functions--exit-early"></a><a name="7.11"></a>
  - [7.11](#functions--exit-early) Exit early using return statements at the beginning of the function. This avoids complex if-else blocks and unnecessary indentation.

    ```javascript
    add(num1, num2) {
        if (num1 == null || num2 == null) {
            return false;
        }

        // ...
    };
    ```

  <a name="functions--iife"></a><a name="7.12"></a>
  - [7.12](#functions--iife) Add parantheses around immediately invoked function expressions. eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

    > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

    ```javascript
    // immediately-invoked function expression (IIFE)
    (function () {
        console.log('Welcome to the Internet. Please follow me.');
    }());
    ```

**[⬆ back to top](#table-of-contents)**

## Arrow Functions

  <a name="arrows--use-them"></a><a name="8.1"></a>
  - [8.1](#arrows--use-them) When you must use function expressions (as when passing an anonymous function), use arrow function notation. eslint: [`prefer-arrow-callback`](http://eslint.org/docs/rules/prefer-arrow-callback), [`arrow-spacing`](http://eslint.org/docs/rules/arrow-spacing)

    > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

    > Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.

    ```javascript
    // bad
    [1, 2, 3].map(function (x) {
        const y = x + 1;
        return x * y;
    });

    // good
    [1, 2, 3].map(x => {
        const y = x + 1;
        return x * y;
    });
    ```

  <a name="arrows--one-arg-parens"></a><a name="8.2"></a>
  - [8.2](#arrows--one-arg-parens) If your function takes a single argument, omit the parentheses. Otherwise, always include parentheses around arguments. eslint: [`arrow-parens`](http://eslint.org/docs/rules/arrow-parens)

    > Why? Less visual clutter.

    ```js
    // bad
    [1, 2, 3].map((x) => x * x);

    // good
    [1, 2, 3].map(x => x * x);
    ```

**[⬆ back to top](#table-of-contents)**

## Classes

  <a name="classes--use-them"></a><a name="9.1"></a>
  - [9.1](#classes--use-them) Always use `class`. Avoid manipulating `prototype` directly.

    > Why? `class` syntax is more concise and easier to reason about.

    ```javascript
    // bad
    function Queue(contents = []) {
        this.queue = [...contents];
    }

    Queue.prototype.queue = [];

    Queue.prototype.pop = function () {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    };

    // good
    class Queue {
        queue = [];

        constructor(contents = []) {
            this.queue = [...contents];
        }

        pop() {
            const value = this.queue[0];
            this.queue.splice(0, 1);
            return value;
        }
    }
    ```

  <a name="classes--static"></a><a name="9.2"></a>
  - [9.2](#classes--static) Use `static` for declaring class-wide properties and methods.

    ```javascript
    // bad
    class Queue {
        constructor() {
            Queue.instanceCount++;
        }
    }

    Queue.instanceCount = 0;

    Queue.getInstanceCount = function() {
        return this.instanceCount;
    }

    // good
    class Queue {
        static instanceCount = 0;

        constructor() {
            Queue.instanceCount++;
        }

        static getInstanceCount() {
            return this.instanceCount;
        }
    }
    ```

  <a name="classes--extends"></a><a name="9.3"></a>
  - [9.3](#classes--extends) Use `extends` for inheritance.

    > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

    ```javascript
    // bad
    function PeekableQueue(contents) {
        Queue.apply(this, contents);
    }
    PeekableQueue.prototype = new Queue();
    PeekableQueue.prototype.constructor = PeekableQueue;

    PeekableQueue.prototype.peek = function () {
        return this.queue[0];
    }

    // good
    class PeekableQueue extends Queue {
        peek() {
            return this.queue[0];
        }
    }
    ```

  <a name="classes--tostring"></a><a name="9.4"></a>
  - [9.4](#classes--tostring) It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

    ```javascript
    class Jedi {
        constructor(options = {}) {
            this.name = options.name || 'no name';
        }

        getName() {
            return this.name;
        }

        toString() {
            return `Jedi - ${this.getName()}`;
        }
    }
    ```

  <a name="classes--no-useless"></a><a name="9.5"></a>
  - [9.5](#classes--no-useless) Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

    ```javascript
    // bad
    class Jedi {
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

**[⬆ back to top](#table-of-contents)**

## Modules

  <a name="modules--separate"></a><a name="10.1"></a>
  - [10.1](#modules--separate) Create a separate module for each logical set of functionality in your application. Avoid grouping multiple areas of concern or the whole application into a single file.


  <a name="modules--use-them"></a><a name="10.2"></a>
  - [10.2](#modules--use-them) Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

    > Why? Modules are the future, let's start using the future now.

    ```javascript
    // bad
    const NerderyStyleGuide = require('./NerderyStyleGuide');

    // good
    import NerderyStyleGuide from './NerderyStyleGuide';
    ```

  <a name="modules--no-wildcard"></a><a name="10.3"></a>
  - [10.3](#modules--no-wildcard) Do not use wildcard imports.

    > Why? This makes sure you have a single default export.

    ```javascript
    // bad
    import * as NerderyStyleGuide from './NerderyStyleGuide';

    // good
    import NerderyStyleGuide from './NerderyStyleGuide';
    ```

  <a name="modules--no-export-from-import"></a><a name="10.4"></a>
  - [10.4](#modules--no-export-from-import) And do not export directly from an import.

    > Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

    ```javascript
    // bad
    // filename es6.js
    export { es6 as default } from './NerderyStyleGuide';

    // good
    // filename es6.js
    import { es6 } from './NerderyStyleGuide';
    export default es6;
    ```

  <a name="modules--self-host"></a><a name="10.5"></a>
  - [10.5](#modules--self-host) Self-host third-party libraries whenever possible. Avoid loading third-party scripts from external domains and CDN's. Exceptions are libraries that do not provide self-hosted versions, such as Google Maps or Analytics.

    > Why? Doing so exposes users to additional attack vectors, privacy violations (IP address tracking) and additional downtime risks.

    ```javascript
    // bad
    import $ from 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';

    // good
    import $ from './vendor/jquery.min.js';
    ```

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators

  <a name="iterators--nope"></a><a name="11.1"></a>
  - [11.1](#iterators--nope) Avoid using iterators and `for-of` loops. Prefer JavaScript's higher-order functions like `map()` and `reduce()`.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    // bad
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    sum === 15;

    // good
    let sum = 0;
    numbers.forEach(num => sum += num);
    sum === 15;

    // best (use the functional force)
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;
    ```

  <a name="generators--nope"></a><a name="11.2"></a>
  - [11.2](#generators--nope) Don't use generators for now.

    > Why? They don't transpile well to ES5.

**[⬆ back to top](#table-of-contents)**

## Properties

  <a name="properties--dot"></a><a name="12.1"></a>
  - [12.1](#properties--dot) Use dot notation when accessing properties. eslint: [`dot-notation`](http://eslint.org/docs/rules/dot-notation)

    ```javascript
    const luke = {
        jedi: true,
        age: 28,
    };

    // bad
    const isJedi = luke['jedi'];

    // good
    const isJedi = luke.jedi;
    ```

  <a name="properties--bracket"></a><a name="12.2"></a>
  - [12.2](#properties--bracket) Use bracket notation `[]` when accessing properties with a variable.

    ```javascript
    const luke = {
        jedi: true,
        age: 28,
    };

    const prop = 'jedi';
    const isJedi = luke[prop];
    ```

**[⬆ back to top](#table-of-contents)**

## Comparison

  <a name="comparison--eqeqeq"></a><a name="13.1"></a>
  - [13.1](#comparison--eqeqeq) Use `===` and `!==` over `==` and `!=`. eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

    ```javascript
    // bad
    if (dragonball == 'z') {
        //...
    }

    // good
    if (dragonball === 'z') {
        //...
    }
    ```

  <a name="comparison--eqeq-null"></a><a name="13.2"></a>
  - [13.2](#comparison--eqeq-null) The one allowable exception is null checks. Use `==` and `!=` to compare against null.

    > Why? The `==` checks for both null and undefined in a single expression.

    ```javascript
    // bad
    if (dragonball === null || dragonball === undefined) {
        //...
    }

    // good
    if (dragonball == null) {
        //...
    }
    ```

  <a name="comparison--no-shortcuts"></a><a name="13.3"></a>
  - [13.3](#comparison--no-shortcuts) Avoid the "shortcut" syntax that omits the comparison operator in most cases.

    > Why? JavaScript will try to coerce the expression into a boolean value, which could lead to unintended results. Be more descriptive about what you want to compare.

    ```javascript
    // bad
    if (name) {
        // ...
    }

    // good
    if (name != null) {
        // ...
    }
    ```

  <a name="comparison--shortcuts-boolean"></a><a name="13.4"></a>
  - [13.4](#comparison--shortcuts-boolean) Do use the shortcut syntax if comparing a boolean true/false value.

    ```javascript
    // good
    let isValid = true;

    if (isValid) {
        // ...
    }
    ```

  <a name="comparison--switch-blocks"></a><a name="13.5"></a>
  - [13.5](#comparison--switch-blocks) Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`). eslint: [`no-case-declarations`](http://eslint.org/docs/rules/no-case-declarations).

    > Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

    ```javascript
    // bad
    switch (number) {
        case 1:
            const x = 1;
            break;
        case 2:
            const y = 2;
            break;
        default:
            const z = 3;
    }

    // good
    switch (number) {
        case 1: {
            const x = 1;
            break;
        }
        case 2: {
            const y = 2;
            break;
        }
        default: {
            const z = 3;
        }
    }
    ```

  <a name="comparison--nested-ternaries"></a><a name="13.6"></a>
  - [13.6](#comparison--nested-ternaries) Ternaries should not be nested and should generally be single line expressions. eslint: [`no-nested-ternary`](http://eslint.org/docs/rules/no-nested-ternary).

    ```javascript
    // bad
    const foo = maybe1 > maybe2
        ? 'bar'
        : value1 > value2 ? 'baz' : null;

    // good
    const maybeNull = value1 > value2 ? 'baz' : null;

    const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
    ```

**[⬆ back to top](#table-of-contents)**

## Blocks

  <a name="blocks--braces"></a><a name="14.1"></a>
  - [14.1](#blocks--braces) Use braces with all multi-line blocks. eslint: [`curly`](http://eslint.org/docs/rules/curly)

    ```javascript
    // bad
    if (test)
        return false;

    // good
    if (test) {
        return false;
    }
    ```

  <a name="blocks--cuddled-elses"></a><a name="14.2"></a>
  - [14.2](#blocks--cuddled-elses) If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block's closing brace. eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

    ```javascript
    // bad
    if (test) {
        thing1();
    }
    else {
        thing2();
    }

    // good
    if (test) {
        thing1();
    } else {
        thing2();
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Comments

  <a name="comments--multiline"></a><a name="15.1"></a>
  - [15.1](#comments--multiline) Use `/** ... */` for multi-line comments. Include a description, specify types and values for all parameters and return values. eslint: [`valid-jsdoc`](http://eslint.org/docs/rules/valid-jsdoc)

    ```javascript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @method make
    // @public
    // @param {String} tag
    // @return {Element} element
    make(tag) {
        // ...
        return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @method make
     * @public
     * @param {String} tag
     * @return {Element} element
     */
    make(tag) {
        // ...
        return element;
    }
    ```

  <a name="comments--singleline"></a><a name="15.2"></a>
  - [15.2](#comments--singleline) Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.

    ```javascript
    // bad
    const active = true;  // is current tab

    // good
    // is current tab
    const active = true;

    // bad
    getType() {
        console.log('fetching type...');
        // set the default type to 'no type'
        const type = this._type || 'no type';

        return type;
    }

    // good
    getType() {
        console.log('fetching type...');

        // set the default type to 'no type'
        const type = this._type || 'no type';

        return type;
    }

    // also good
    getType() {
        // set the default type to 'no type'
        const type = this._type || 'no type';

        return type;
    }
    ```

  <a name="comments--actionitems"></a><a name="15.3"></a>
  - [15.3](#comments--actionitems)  Prefix any comments that are meant to be revisited later with `FIXME` or `TODO`.

    > Why? helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable.

  <a name="comments--fixme"></a><a name="15.4"></a>
  - [15.4](#comments--fixme) Use `// FIXME:` to annotate problems.

    ```javascript
    class Calculator extends Abacus {
        constructor() {
            super();

            // FIXME: shouldn't use a global here
            total = 0;
        }
    }
    ```

  <a name="comments--todo"></a><a name="15.5"></a>
  - [15.5](#comments--todo) Use `// TODO:` to annotate refactoring recommendations.

    ```javascript
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

  <a name="whitespace--spaces"></a><a name="16.1"></a>
  - [16.1](#whitespace--spaces) Use soft tabs set to 4 spaces. eslint: [`indent`](http://eslint.org/docs/rules/indent)

    ```javascript
    // bad
    test() {
    ∙∙console.log('test');
    }

    // good
    test() {
    ∙∙∙∙console.log('test');
    }
    ```

  <a name="whitespace--before-blocks"></a><a name="16.2"></a>
  - [16.2](#whitespace--before-blocks) Place 1 space before the leading brace. eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

    ```javascript
    // bad
    test(){
        console.log('test');
    }

    // good
    test() {
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

  <a name="whitespace--around-keywords"></a><a name="16.3"></a>
  - [16.3](#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing), [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

    ```javascript
    // bad
    if(isJedi) {
        fight ();
    }

    // good
    if (isJedi) {
        fight();
    }

    // bad
    fight () {
        console.log ('Swooosh!');
    }

    // good
    fight() {
        console.log('Swooosh!');
    }
    ```

  <a name="whitespace--infix-ops"></a><a name="16.4"></a>
  - [16.4](#whitespace--infix-ops) Set off operators with spaces. eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

    ```javascript
    // bad
    const x=y+5;

    // good
    const x = y + 5;
    ```

  <a name="whitespace--newline-at-end"></a><a name="16.5"></a>
  - [16.5](#whitespace--newline-at-end) End files with a single newline character. eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

    ```javascript
    // bad
    export default class TacoTuesday {
      // ..
    }
    ```

    ```javascript
    // bad
    export default class TacoTuesday {
        // ..
    }↵
    ↵
    ```

    ```javascript
    // good
    export default class TacoTuesday {
        // ..
    }↵
    ```

  <a name="whitespace--chains"></a><a name="16.6"></a>
  - [16.6](#whitespace--chains) Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement. eslint: [`newline-per-chained-call`](http://eslint.org/docs/rules/newline-per-chained-call)

    ```javascript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // bad
    $('#items').
        find('.selected').
        highlight().
        end().
        find('.open').
        updateCount();

    // good
    $('#items')
        .find('.selected')
        .highlight()
        .end()
        .find('.open')
        .updateCount();

    // good
    const leds = stage.selectAll('.led').data(data);
    ```

  <a name="whitespace--after-blocks"></a><a name="16.7"></a>
  - [16.7](#whitespace--after-blocks) Leave a blank line after blocks and before the next statement.

    ```javascript
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
    ```

  <a name="whitespace--padded-blocks"></a><a name="16.8"></a>
  - [16.8](#whitespace--padded-blocks) Do not pad your blocks with blank lines. eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

    ```javascript
    // bad
    bar() {

        console.log(foo);

    }

    // also bad
    if (baz) {

        console.log(qux);
    } else {
        console.log(foo);

    }

    // good
    bar() {
        console.log(foo);
    }

    // good
    if (baz) {
        console.log(qux);
    } else {
        console.log(foo);
    }
    ```

  <a name="whitespace--in-parens"></a><a name="16.9"></a>
  - [16.9](#whitespace--in-parens) Do not add spaces inside parentheses. eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

    ```javascript
    // bad
    bar( foo ) {
        return foo;
    }

    // good
    bar(foo) {
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

  <a name="whitespace--in-brackets"></a><a name="16.10"></a>
  - [16.10](#whitespace--in-brackets) Do not add spaces inside brackets. eslint: [`array-bracket-spacing`](http://eslint.org/docs/rules/array-bracket-spacing)

    ```javascript
    // bad
    const foo = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);

    // good
    const foo = [1, 2, 3];
    console.log(foo[0]);
    ```

  <a name="whitespace--in-braces"></a><a name="16.11"></a>
  - [16.11](#whitespace--in-braces) Add spaces inside curly braces. eslint: [`object-curly-spacing`](http://eslint.org/docs/rules/object-curly-spacing)

    ```javascript
    // bad
    const foo = {clark: 'kent'};

    // good
    const foo = { clark: 'kent' };
    ```

  <a name="whitespace--max-len"></a><a name="16.12"></a>
  - [16.12](#whitespace--max-len) Avoid having lines of code that are longer than 100 characters (including whitespace). eslint: [`max-len`](http://eslint.org/docs/rules/max-len)

    > Why? This ensures readability and maintainability.

    ```javascript
    // bad
    $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

    // good
    const foo = 'Whatever national crop flips the window. The cartoon reverts within the screw. ' +
      'Whatever wizard constrains a helpful ally. The counterpart ascends!';

    // good
    $.ajax({
        method: 'POST',
        url: 'https://airbnb.com/',
        data: { name: 'John' },
    })
        .done(() => console.log('Congratulations!'))
        .fail(() => console.log('You have failed this city.'));
    ```

**[⬆ back to top](#table-of-contents)**

## Commas

  <a name="commas--leading-trailing"></a><a name="17.1"></a>
  - [17.1](#commas--leading-trailing) Leading commas: **Nope.** eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

    ```javascript
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

  <a name="commas--dangling"></a><a name="17.2"></a>
  - [17.2](#commas--dangling) Additional trailing comma: **Yup.** eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

    > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the [trailing comma problem](es5/README.md#commas) in legacy browsers.

    ```javascript
    // bad - git diff without trailing comma
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb graph', 'modern nursing']
    };

    // good - git diff with trailing comma
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing'],
    };

    // bad
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully'
    };

    // bad
    const heroes = [
        'Batman',
        'Superman'
    ];

    // good
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully',
    };

    // good
    const heroes = [
        'Batman',
        'Superman',
    ];
    ```

**[⬆ back to top](#table-of-contents)**

## Semicolons

  <a name="semicolons--required"></a><a name="18.1"></a>
  - [18.1](#semicolons--required) **Yup.** eslint: [`semi`](http://eslint.org/docs/rules/semi)

    ```javascript
    // bad
    const name = 'Skywalker'
    return name

    // good
    const name = 'Skywalker';
    return name;
    ```

**[⬆ back to top](#table-of-contents)**

## Naming Conventions

  <a name="naming--verbs-nouns"></a><a name="19.1"></a>
  - [19.1](#naming--verbs-nouns) Method names should be verbs, properties should be nouns.

    ```javascript
    // bad
    class Wizard {
        perform = 'Smoke Rings';

        impressiveMagicalStuff() {
            // ...
        }

        scared() {
            // ...
        }
    }  

    // good
    class Wizard {
        ability = 'Smoke Rings';

        useMagic() {
            // ...
        }

        runAway() {
            // ...
        }
    }   
    ```

  <a name="naming--boolean-prefix"></a><a name="19.2"></a>
  - [19.2](#naming--boolean-prefix) If the property/method is a `boolean`, prefix with `is`, `has`, `are`, `should`.

    ```javascript
    // bad
    if (visible)
        // ...
    }

    // good
    if (isVisible)
        // ...
    }

    // bad
    if (hero.superPower())
        // ...
    }

    // good
    if (hero.hasSuperPower())
        // ...
    }
    ```

  <a name="naming--descriptive"></a><a name="19.3"></a>
  - [19.3](#naming--descriptive) Be descriptive with your naming. Avoid single letter names unless it corresponds with the problem domain, such as `i` for indexes or `x/y/z` for coordinates.

    ```javascript
    // bad
    q() {
        // ...
    }

    // good
    query() {
        // ...
    }

    // bad
    return { a: 0, b: 0, c: 0 };

    // good
    return { x: 0, y: 0, z: 0 };
    ```

  <a name="naming--camelCase"></a><a name="19.4"></a>
  - [19.4](#naming--camelCase) Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

    ```javascript
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

  <a name="naming--PascalCase"></a><a name="19.5"></a>
  - [19.5](#naming--PascalCase) Use PascalCase when naming constructors or classes. eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

    ```javascript
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

  <a name="naming--leading-underscore"></a><a name="19.6"></a>
  - [19.6](#naming--leading-underscore) Use a leading underscore `_` when naming private or protected properties.

    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';

    // good
    this._firstName = 'Panda';
    ```

  <a name="naming--self-this"></a><a name="19.7"></a>
  - [19.7](#naming--self-this) Don't save references to `this`. Use arrow functions or Function#bind.

    ```javascript
    // bad
    foo() {
        const self = this;
        return function () {
            console.log(self);
        };
    }

    // bad
    foo() {
        const that = this;
        return function () {
            console.log(that);
        };
    }

    // good
    foo() {
        return () => {
            console.log(this);
        };
    }
    ```

  <a name="naming--filename-matches-export"></a><a name="19.8"></a>
  - [19.8](#naming--filename-matches-export) If your file exports a single class, your filename should be exactly the name of the class.

    ```javascript
    // file contents
    class CheckBox {
        // ...
    }
    export default CheckBox;

    // in some other file
    // bad
    import CheckBox from './checkBox';

    // bad
    import CheckBox from './check_box';

    // good
    import CheckBox from './CheckBox';
    ```

  <a name="naming--camelCase-default-export"></a><a name="19.9"></a>
  - [19.9](#naming--camelCase-default-export) Use camelCase when you export-default a function. Your filename should be identical to your function's name.

    ```javascript
    function makeStyleGuide() {
    }

    export default makeStyleGuide;
    ```

  <a name="naming--PascalCase-singleton"></a><a name="19.10"></a>
  - [19.10](#naming--PascalCase-singleton) Use PascalCase when you export a singleton / function library / bare object.

    ```javascript
    const NerderyStyleGuide = {
        es6: {
        }
    };

    export default NerderyStyleGuide;
    ```

  <a name="naming--constants"></a><a name="19.11"></a>
  - [19.11](#naming--constants) Constant values should be in all capitals and underscore-separated.

    ```javascript
    const MAXIMUM_POWER = 9000;
    ```

  <a name="naming--constants-grouping"></a><a name="19.12"></a>
  - [19.12](#naming--constants-grouping) Group related constants in an object. All properties should be named using the same convention for constants.

    ```javascript
    const SELECTORS = {
        ACTIVE: '.isActive',
        DISABLED: '.isDisabled',
        MODAL_CLOSE: '.js-modal-close',
     };
    ```

  <a name="naming--symbols"></a><a name="19.13"></a>
  - [19.13](#naming--symbols) If the values you set for constants are arbitrary and don't add meaning, use Symbol() instead.

    ```javascript
    // bad
    const NAVIGATION = {
        HOME: 'home',
        ABOUT: 'about',
        CONTACT: 'contact',
    }

    // good
    const NAVIGATION = {
        HOME: Symbol(),
        ABOUT: Symbol(),
        CONTACT: Symbol(),
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Accessors

  <a name="accessors--use-them"></a><a name="20.1"></a>
  - [20.1](#accessors--use-them) When getting and setting properties, use `get` and `set` accessor methods.

    ```javascript
    //bad
    class Dragon {
        _age = 0;

        getAge() {
            return this._age;
        }

        setAge(value) {
            this._age = value;
        }
    }

    const dragon = new Dragon();
    dragon.setAge(25);
    console.log(dragon.getAge()); // 25
    ```

    prefer:

    ```javascript

    //good
    class Dragon {
        _age = 0;

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }
    }

    const dragon = new Dragon();
    dragon.age = 25;
    console.log(dragon.age); // 25
    ```

  <a name="accessors--no-side-effects"></a><a name="20.2"></a>
  - [20.2](#accessors--no-side-effects) Getter methods should not exhibit side effects.

    ```javascript
    //bad
    get age() {
        if (this.isBirthday()) {
            this._age++;
        }

        return this._age;
    }

    //good
    get age() {
        return this._age;
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Events

  <a name="events--hash"></a><a name="21.1"></a>
  - [21.1](#events--hash) When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```javascript
    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', (e, listingId) => {
        // do something with listingId
    });
    ```

    prefer:

    ```javascript
    // good
    $(this).trigger('listingUpdated', { listingId: listing.id });

    ...

    $(this).on('listingUpdated', (e, data) => {
        // do something with data.listingId
    });
    ```

  **[⬆ back to top](#table-of-contents)**

## DOM Interaction

  <a name="dom--dollar-prefix"></a><a name="22.1"></a>
  - [22.1](#dom--dollar-prefix) Prefix jQuery object variables with a `$`.

    ```javascript
    // bad
    const body = $(document.body);

    // good
    const $body = $(document.body);
    ```

  <a name="dom--selector-prefix"></a><a name="22.2"></a>
  - [22.2](#dom--selector-prefix) DOM elements to be selected by JavaScript should be prefixed with js-. These selectors should not be related to any CSS styles and must exist solely for the accessing of those DOM elements.

    ```javascript
    // bad
    <a href="#" class="previousButton">Previous</a>

    const $previousButton = $('.previousButton');

    // good
    <a href="#" class="previousButton js-previousButton">Previous</a>

    const $previousButton = $('.js-previousButton');
    ```

  <a name="dom--selector-match"></a><a name="22.3"></a>
  - [22.3](#dom--selector-match) If the behavior of a DOM element is tied to a JavaScript class, the selector should be named the same as that JavaScript class.

    ```javascript
    // bad
    <div class="js-carousel"></div>

    new CarouselView($('.js-carousel'));

    // good
    <div class="js-CarouselView"></div>

    new CarouselView($('.js-CarouselView'));
    ```

  <a name="jquery--cache"></a><a name="22.4"></a>
  - [22.4](#jquery--cache) Cache jQuery lookups.

    ```javascript
    // bad
    $('.sidebar').hide();
    $('.sidebar').css({
        'background-color': 'pink'
    });

    // good
    const $sidebar = $('.sidebar');
    $sidebar.hide();
    $sidebar.css({
        'background-color': 'pink'
    });
    ```

**[⬆ back to top](#table-of-contents)**

## Asynchronous Operations

  <a name="asynchronous--promise-spec"></a><a name="23.1"></a>
  - [23.1](#asynchronous--promise-spec) When performing an asynchronous operation, wrap that operation with a Promise. Use a Promise implementation that conforms with the [Promises/A+](https://promisesaplus.com/) spec.

    ```javascript
    waitFor(milliseconds) {
        return new Promise((resolve, reject) => {
            window.setTimeout(
                () => { resolve(); }, milliseconds
            );
        });
    }

    waitFor(1000)
        .then(() => { console.log('Done waiting!'); });
    ```

  <a name="asynchronous--nested-promises"></a><a name="23.2"></a>
  - [23.2](#asynchronous--nested-promises) Avoid nesting promises several layers deep. Instead, compose a sequence of promises using a flat chain.

    ```javascript
    //bad
    waitFor(1000)
        .then(() => {
            waitFor(2000)
                .then(() => {
                    waitFor(3000)
                        .then(() => {
                            console.log('Done waiting!');
                        })
                })
        });

    //good
    waitFor(1000)
        .then(() => {
            return waitFor(2000);
        })
        .then(() => {
            return waitFor(3000);
        })
        .then(() => {
            console.log('Done waiting!');
        });
    ```

  <a name="asynchronous--catch"></a><a name="23.3"></a>
  - [23.3](#asynchronous--catch) Always add a catch() handler to promise chains.

    > Why?  In some browsers, if code inside of a promise executes and generates a runtime error, it will silently fail and never be reported to the console.

    ```javascript
    waitFor(1000)
        .then(() => { console.log('Done waiting!'); })
        .catch(exception => { console.error('Error in waitFor():', exception); });
    ```

**[⬆ back to top](#table-of-contents)**

## Deployment

  <a name="deployment--minify"></a><a name="24.1"></a>
  - [24.1](#deployment--minify) All JavaScript deployed to a production environment must be minified and combined. Test your minified/combined code early, as it may behave differently or exhibit unforeseen JavaScript errors.

## License

(The MIT License)

Copyright (c) 2014-2016 Airbnb

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**

# };
