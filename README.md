# TSJS  
> TypeScript (and JavaScript) Standards for the Coveo Cloud Platform
  
Other Standards  

- [React/Redux](react_redux/)  
- [CSS & Sass](css_sass/)

<h2 id="intro">Introduction</h2>

The current repository aggregates all code standards that must be respected when writing and reviewing TypeScript code related to the Coveo Cloud Platform. This document should therefore be read and applied by anyone having to write TypeScript code for the Coveo Cloud Platform.  
  
The current repository is greatly inspired from [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript), but most code examples were rewritten in TypeScript.  

If you are somewhat new to JavaScript with ES6, we recommend you read the full [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript). Feel free to use additional resources, there are tons of it out there.

If you are somewhat new to TypeScript, we recommend you follow this [5 minutes tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), and read the official [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html) in full.
  
<h3 id="intro--why">Code standards, what for?</h3>

Adopting code standards means ranking the importance of code clarity and team conventions higher than personal style. In a more pragmatical perspective, we also believe that code standards have very positive and tangible effects on a team workflow:  
  1. __Team members get productive time back by avoiding subjective code style debates__. If the code doesn't respect team conventions, simply point the author to the commonly accepted code standard that must be respected. 
  1. __Code reviews' focus are redirected towards what is most critical:__ 
      1. _Code architecture_ (Is there a better/more intelligent way to handle the use case at hand?)
      1. _Code fidelity_ (Will the code crash in real life situations? Are all possible cases handled?)  
      1. _Code quality_ (Is the code well tested, meaningful, and DRY?) 
  1. __The code base gets easier to read and navigate for team members.__  
  1. __Written standards (as opposed to implicit, word-to-mouth standards) allow newcomers to get up to speed faster by knowing how to write proper code from day one.__  
  
In summary, code standards make developers happier. Embrace them.

<h2 id="table-of-contents">Table of Contents</h2>

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
  1. [Hoisting](#hoisting)
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
  1. [jQuery](#jquery)
  1. [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
  1. [Testing](#testing)
  1. [Reviewing](#reviewing)
  1. [Being Reviewed](#being-reviewed)
  1. [TypeScript](#typescript)
  1. [Libraries and Frameworks](#libraries-and-frameworks)
  1. [Notes on Legacy Code](#notes-on-legacy-code)
  1. [Remaining Sections](#remaining-sections)

## Types

Since this part appeared to have a more educational purpose, you can refer to the original [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript#types) for more information.  
  

**[⬆ back to top](#table-of-contents)**

## References

  <a name="references--prefer-const"></a><a name="1.1"></a>
  - [1.1](#references--prefer-const) Use `const` for all of your references; avoid using `var`. 

    > Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

    ```typescript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  <a name="references--disallow-var"></a><a name="1.2"></a>
  - [1.2](#references--disallow-var) If you must reassign references, use `let` instead of `var`. 

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

  <a name="references--block-scope"></a><a name="1.3"></a>
  - [1.3](#references--block-scope) Note that both `let` and `const` are block-scoped.

    ```typescript
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

  <a name="objects--no-new"></a><a name="2.1"></a>
  - [2.1](#objects--no-new) Use the literal syntax for object creation. 

    ```typescript
    // bad
    const item: Interface = new Object();

    // good
    const item: Interface = { value: 1 };
    ```
  <a name="es6-object-shorthand"></a><a name="2.2"></a>
  - [2.2](#es6-object-arrow-method) Methods defined on objects should use arrow functions. 

    ```typescript
    // bad
    const atom: Interface = {
      value: 1,
      addValue: function (value: number): number {
        return atom.value + value;
      },
    };

    // good
    const atom: Interface = {
      value: 1,
      addValue: (value: number): number => value + 1,
    };
    ```

  <a name="es6-object-concise"></a><a name="2.3"></a>
  - [2.3](#es6-object-concise) Use property value shorthand. 

    > Why? It is shorter to write and descriptive.

    ```typescript
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj: Interface = {
      lukeSkywalker: lukeSkywalker,
    };

    // good
    const obj: Interface = {
      lukeSkywalker,
    };
    ```

  <a name="objects--grouped-shorthand"></a><a name="2.4"></a>
  - [2.4](#objects--grouped-shorthand) Group your shorthand properties at the beginning of your object declaration.

    > Why? It's easier to tell which properties are using the shorthand.

    ```typescript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj: Interface = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // good
    const obj: Interface = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

  <a name="objects--quoted-props"></a><a name="2.5"></a>
  - [2.5](#objects--quoted-props) Only quote properties that are invalid identifiers. 

    > Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

    ```typescript
    // bad
    const bad: Interface = {
      'foo': 3,
      'bar': 4,
      'data-blah': 5,
    };

    // good
    const good: Interface = {
      foo: 3,
      bar: 4,
      'data-blah': 5,
    };
    ```
  <a name="objects--shallow-copy"></a><a name="2.6"></a>
  - [2.6](#objects--shallow-copy) Use Underscore's [`extend`](http://underscorejs.org/#extend) and [`omit`](http://underscorejs.org/#omit) functions to shallow-copy objects, and make sure not to mutate the original object... 

    ```typescript
    // very bad
    const original: Interface = { a: 1, b: 2 };
    const copy: Interface = _.extend(original, { c: 3 }); // this mutates `original` ಠ_ಠ
    delete copy.a; // so does this

    // good
    const original: Interface = { a: 1, b: 2 };
    const copy: Interface = _.extend({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original: Interface = { a: 1, b: 2 };
    const copy: Interface = _.omit(original, 'a'); // copy => { b: 2 }, _.omit does not mutate `original`
    ```

**[⬆ back to top](#table-of-contents)**

## Arrays

  <a name="arrays--literals"></a><a name="3.1"></a>
  - [3.1](#arrays--literals) Use the literal syntax for array creation. 

    ```typescript
    // bad
    const items: Interface[] = new Array();

    // good
    const items: Interface[] = [];
    ```
  <a name="arrays--callback-return"></a><a name="3.2"></a>
  - [3.2](#arrays--callback-return) Use return statements in array method callbacks. It's ok to omit the return if the function body consists of a single statement. We also encourage the use of the ternary operator in simple if/else cases. 

    ```typescript
    // bad
    [1, 2, 3].map((x: number): number => {
      return x + 1;
    });

    // good
    [1, 2, 3].map((x: number): number => x + 1);

    // good
    [1, 2, 3].map((x: number): number => {
      const y = x + 1;
      return x * y;
    });

    // good
    inbox.filter((msg: string): boolean => {
      if (msg.subject === 'Mockingbird') {
        return msg.author === 'Harper Lee';
      } else if (msg.subject === 'AnotherSubject') {
        return msg.author === 'The Author';  
      }

      return false;
    });


    /* Simple if/else cases */

    // bad
    inbox.filter((msg: string): boolean => {
      if (msg.subject === 'Mockingbird') {
        return msg.author === 'Harper Lee';
      } else {
        return false;
      }
    });

    // best 
    inbox.filter((msg: string): boolean => msg.subject === 'Mockingbird'
        ? msg.author === 'Harper Lee'
        : false
    );
    ```

**[⬆ back to top](#table-of-contents)**

<a name="arrays--bracket-newline"></a><a name="3.3"></a>
  - [3.3](#arrays--bracket-newline) Use line breaks after open and before close array brackets if an array has multiple lines

  ```typescript
  // bad
  const arr: number[][] = [
    [0, 1], [2, 3], [4, 5],
  ];

  const objectInArray: Interface[] = [{
    id: 1,
  }, {
    id: 2,
  }];

  const numberInArray: number[] = [
    1, 2,
  ];

  // good
  const arr: number[][] = [[0, 1], [2, 3], [4, 5]];

  const objectInArray: Interface[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const numberInArray: number[] = [
    1,
    2,
  ];
  ```

**[⬆ back to top](#table-of-contents)**

## Destructuring


  <a name="destructuring--object"></a><a name="4.1"></a>
  - [4.1](#destructuring--object) Use object destructuring when accessing and using multiple properties of an object. 

    > Why? Destructuring saves you from creating temporary references for those properties.

    ```typescript
    // bad
    const getFullName = (user: User): string => {
      const firstName = user.personalInformation.firstName;
      const lastName = user.personalInformation.lastName;

      return `${firstName} ${lastName}`;
    }

    // good
    const getFullName = (user: User): string => {
      const { firstName, lastName } = user.personalInformation;
      return `${firstName} ${lastName}`;
    }
    ```

  <a name="destructuring--array"></a><a name="4.2"></a>
  - [4.2](#destructuring--array) Use array destructuring.
    ```typescript
    const arr: number[] = [1, 2, 3, 4];

    // bad
    const first: number = arr[0];
    const second: number = arr[1];

    // good
    const [first, second] = arr;
    ```

  <a name="destructuring--object-over-array"></a><a name="4.3"></a>
  - [4.3](#destructuring--object-over-array) Use object destructuring for multiple return values, not array destructuring.
    > Why? You can add new properties over time or change the order of things without breaking call sites.

    ```typescript
    // bad
    const processInput = (input: Input): ProcessedInput => {
      // then a miracle occurs
      return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // good
    const processInput = (input: Input): ProcessedInput => {
      // then a miracle occurs
      return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const { left, top } = processInput(input);

**[⬆ back to top](#table-of-contents)**

## Strings

  <a name="strings--quotes"></a><a name="5.1"></a>
  - [5.1](#strings--quotes) Use single quotes `''` for strings. 

    ```typescript
    // bad
    const name: string = "Capt. Janeway";

    // bad - template literals should contain interpolation or newlines
    const name: string = `Capt. Janeway`;

    // good
    const name: string = 'Capt. Janeway';
    ```

  <a name="strings--line-length"></a><a name="5.2"></a>
  - [5.2](#strings--line-length) Strings that cause the line to go over 140 characters should not be written across multiple lines using string concatenation.

    > Why? Broken strings are painful to work with and make code less searchable.

    ```typescript
    // bad
    const errorMessage: string = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // bad
    const errorMessage: string = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';

    // good
    const errorMessage: string = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
    ```

  <a name="es6-template-literals"></a><a name="5.3"></a>
  - [5.3](#es6-template-literals) When programmatically building up strings, use template strings instead of concatenation. 

    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```typescript
    // bad
    const sayHi = (name: string): string => 'How are you, ' + name + '?';

    // bad
    const sayHi = (name: string): string => ['How are you, ', name, '?'].join();

    // bad
    const sayHi = (name: string): string => `How are you, ${ name }?`;

    // good
    const sayHi = (name: string): string => `How are you, ${name}?`;
    ```

  <a name="strings--escaping"></a><a name="5.4"></a>
  - [5.4](#strings--escaping) Do not unnecessarily escape characters in strings. 

    > Why? Backslashes harm readability, thus they should only be present when necessary.

    ```typescript
    // bad
    const foo: string = '\'this\' \i\s \"quoted\"';

    // good
    const foo: string = `'this' is "quoted"`;
    const foo: string = `my name is '${name}'`;
    ```

  <a name="strings--localization"></a><a name="5.5"></a>
  - [5.5](#strings--localization) Never hardcode a string that will appear in the UI in the code base. Localize the string in a dedicated json file. 

    > Why? Coveo develops international products, strings appearing in the UI can be translated in multiple languages, thus we localize them.

**[⬆ back to top](#table-of-contents)**

## Functions

  <a name="functions--declarations"></a><a name="6.1"></a>
  - [6.1](#functions--declarations) Use named function expressions instead of function declarations. Prefer arrow functions if you do not absolutely need `function` to retrieve the proper `this` context. Most importantly, define functions as a method inside a class whenever possible.  
    > Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! 

    ```typescript
    // bad
    const foo = function (bar: Interface): ReturnedInterface {
      // ...
    };

    // bad
    const foo = function bar(bar: Interface): ReturnedInterface {
      // ...
    };

    // good
    const foo = (bar: Interface): ReturnedInterface => {
      // ...
    };

    // best (declare functions as methods inside classes)
    class MyClass {
      foo(bar: Interface): ReturnedInterface {
        // ...
      }
    }
    ```  

  <a name="functions--arguments-shadow"></a><a name="6.2"></a>
  - [6.2](#functions--arguments-shadow) Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

    ```typescript
    // bad
    const foo = (name: string, options: Options, arguments: Arguments): ReturnedInterface => {
      // ...
    };

    // good
    const foo = (name: string, options: Options, args: Arguments): ReturnedInterface => {
      // ...
    };
    ```

  <a name="es6-default-parameters"></a><a name="6.3"></a>
  - [6.3](#es6-default-parameters) Use default parameter syntax rather than mutating function arguments.

    ```typescript
    // really bad
    const handleThings = (options?: Options): ReturnedInterface {
      // No! We shouldn't mutate function arguments.
      // Double bad: if opts is falsy it'll be set to an object which may
      // be what you want but it can introduce subtle bugs.
      options = options || {};
      // ...
    };

    // still bad
    const handleThings = (options?: Options): ReturnedInterface => {
      if (options === void 0) {
        options = {};
      }
      // ...
    };

    // good
    const handleThings = (options: Options = {}): ReturnedInterface => {
      // ...
    };
    ```
  <a name="functions--reassign-params"></a><a name="6.4"></a>
  - [6.4](#functions--reassign-params) Never reassign parameters. 

    > Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

    ```typescript
    // bad
    const f1 = (a: number) => {
      a = 1;
      // ...
    };

    const f2 = (a?: number) => {
      if (!a) { a = 1; }
      // ...
    };

    // good
    const f3 = (a?: number) => {
      const b: number = a || 1;
      // ...
    };

    const f4 = (a: number = 1) => {
      // ...
    };
    ```

  <a name="functions--spread-vs-apply"></a><a name="6.5"></a>
  - [6.5](#functions--spread-vs-apply) Prefer the use of the spread operator `...` to call variadic functions. 

    > Why? It's cleaner, you don't need to supply a context, and you can not easily compose `new` with `apply`.

    ```typescript
    // bad
    const x: number[] = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // good
    const x: number[] = [1, 2, 3, 4, 5];
    console.log(...x);

    // bad
    new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

    // good
    new Date(...[2016, 8, 5]);
    ```

  <a name="functions--signature-invocation-indentation"></a><a name="6.6"></a>
  - [6.6](#functions--signature-invocation-indentation) Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.

    ```typescript
    // bad
    const foo = (bar: string,
                 baz: number,
                 quux: number) => {
      // ...
    }

    // good
    const foo = (
      bar: string,
      baz: number,
      quux: number,
    ) => {
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

  <a name="arrows--use-them"></a><a name="7.1"></a>
  - [7.1](#arrows--use-them) When you must use function expressions (as when passing an anonymous function), use arrow function notation. 
    > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax. Only use `function` if really needed.

    > Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.

    ```typescript
    // bad 
    [1, 2, 3].map(function (x: number): number {
      const y: number = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map((x: number): number => {
      const y: number = x + 1;
      return x * y;
    });
    ```

  <a name="arrows--implicit-return"></a><a name="7.2"></a>
  - [7.2](#arrows--implicit-return) If the function body consists of a single expression, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. 

    > Why? Syntactic sugar. It reads well when multiple functions are chained together.

    ```typescript
    // bad
    [1, 2, 3].map((x: number): string => {
      const nextValue: number = x + 1;
      `A string containing the ${nextValue}.`;
    });

    // good
    [1, 2, 3].map((x: number): string => `A string containing the ${x}.`);

    // good
    [1, 2, 3].map((x: number): string => {
      const nextValue: number = x + 1;
      return `A string containing the ${nextValue}.`;
    });

    // good
    [1, 2, 3].map((x: number, index: number): {[key: number]: number} => ({
      [index]: x,
    }));
    ```

  <a name="arrows--paren-wrap"></a><a name="7.3"></a>
  - [7.3](#arrows--paren-wrap) In case the expression spans over multiple lines, wrap it in parentheses for better readability.

    > Why? It shows clearly where the function starts and ends.

    ```typescript
    // bad
    ['get', 'post', 'put'].map((httpMethod: string): ReturnedInterface => Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    );

    // good
    ['get', 'post', 'put'].map((httpMethod: string): boolean => (
      Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    ));
    ```

  <a name="arrows--one-arg-parens"></a><a name="7.4"></a>
  - [7.4](#arrows--one-arg-parens) Always include parentheses around arguments for clarity and consistency.
    > Why? Less visual clutter. Scopes the parameter with its type.

    ```typescript
    // bad (not even possible in TypeScript with typed parameters)
    [1, 2, 3].map(x: number => (
      `A long string with the ${x}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // good
    [1, 2, 3].map((x: number): string => (
      `A long string with the ${x}. It’s so long that we don’t want it to take up space on the .map line!`
    ));
    ```

  <a name="arrows--confusing"></a><a name="7.5"></a>
  - [7.5](#arrows--confusing) Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`). 

    ```typescript
    // bad
    const itemHeight = (item: Item): string => item.height > 256 ? item.largeSize : item.smallSize;

    // good
    const itemHeight = (item: Item): string => (item.height > 256 ? item.largeSize : item.smallSize);

    // good
    const itemHeight = (item: Item): string => {
      const { height, largeSize, smallSize } = item;
      return height > 256 ? largeSize : smallSize;
    };
    ```

**[⬆ back to top](#table-of-contents)**

## Classes & Constructors

  <a name="constructors--use-class"></a><a name="8.1"></a>
  - [8.1](#constructors--use-class) Always use `class`. Avoid manipulating `prototype` directly.

    > Why? `class` syntax is more concise and easier to reason about.

    ```typescript
    // bad
    function Queue(contents: any[] = []) {
      this.queue = [...contents];
    }
    Queue.prototype.pop = function () {
      const value: any = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    };

    // good
    class Queue {
      constructor(contents: any[] = []) {
        this.queue = [...contents];
      }
      pop() {
        const value: any = this.queue[0];
        this.queue.splice(0, 1);
        return value;
      }
    }
    ```

  <a name="constructors--extends"></a><a name="8.2"></a>
  - [8.2](#constructors--extends) Use `extends` for inheritance.

    > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

    ```typescript
    // bad
    const inherits = require('inherits');
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = () => this.queue[0];

    // good
    class PeekableQueue extends Queue {
      peek() {
        return this.queue[0];
      }
    }
    ```

  <a name="constructors--chaining"></a><a name="8.3"></a>
  - [8.3](#constructors--chaining) Methods can return `this` to help with method chaining.

    ```typescript
    // bad
    Jedi.prototype.jump = function (): boolean {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function (height: number) {
      this.height = height;
    };

    const luke: Jedi = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined

    // good
    class Jedi {
      private jumping: boolean;
      private height: number;

      jump(): Jedi {
        this.jumping = true;
        return this;
      }

      setHeight(height: number): Jedi {
        this.height = height;
        return this;
      }
    }

    const luke: Jedi = new Jedi();

    luke
      .jump()
      .setHeight(20);
    ```

  <a name="constructors--tostring"></a><a name="8.4"></a>
  - [8.4](#constructors--tostring) It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

    ```typescript
    class Jedi {
      private name: string;

      constructor(options: Options = {}) {
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

  <a name="constructors--no-useless"></a><a name="8.5"></a>
  - [8.5](#constructors--no-useless) Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. 

    ```typescript
    // bad
    class Jedi {
      constructor() {}

      // ...
    }

    // bad
    class Rey extends Jedi {
      constructor(options: Options) {
        super(options);
      }

      // ...
    }

    // good
    class Rey extends Jedi {
      private name: string;

      constructor(options: Options) {
        super(options: Options);
        this.name = 'Rey';
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Modules

  <a name="modules--use-them"></a><a name="9.1"></a>
  - [9.1](#modules--use-them) Always use modules (`import`/`export`) over a non-standard module system.

    > Why? Modules are the future, let's start using the future now.

    ```typescript
    // bad
    const AirbnbStyleGuide = require('./AirbnbStyleGuide');
    module.exports = AirbnbStyleGuide.es6;

    // best
    import { es6 } from './AirbnbStyleGuide';
    export es6;
    ```

  <a name="modules--no-wildcard"></a><a name="9.2"></a>
  - [9.2](#modules--no-wildcard) Do not use wildcard (unless you're forced to) or default imports/exports.

    > Why? This makes sure you have a single default export.

    ```typescript
    // bad
    import * as AirbnbStyleGuide from './AirbnbStyleGuide';

    // bad
    export default AirbnbStyleGuide; // inside one file

    import AirbnbStyleGuide from './AirbnbStyleGuide'; inside another file

    // good 
    export AirbnbStyleGuide; // inside one file

    import { AirbnbStyleGuide } from './AirbnbStyleGuide'; // inside another file
    ```

  <a name="modules--no-export-from-import"></a><a name="9.3"></a>
  - [9.3](#modules--no-export-from-import) And do not export directly from an import.

    > Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

    ```typescript
    // bad
    // filename es6.ts
    export { es6 } from './AirbnbStyleGuide';

    // good
    // filename es6.ts
    import { es6 } from './AirbnbStyleGuide';
    export es6;
    ```

  <a name="modules--no-duplicate-imports"></a>
  - [9.4](#modules--no-duplicate-imports) Only import from a path in one place, and each import should be on its own line.
 
    > Why? Having multiple lines that import from the same path can make code harder to maintain.

    ```typescript
    // bad
    import { named1 } from 'foo';
    // … some other imports … //
    import { named2 } from 'foo';

    // bad
    import { named1, named2 } from 'foo';

    // 
    import foo, {
      named1,
      named2,
    } from 'foo';
    ```

  <a name="modules--no-mutable-exports"></a>
  - [9.5](#modules--no-mutable-exports) Do not export mutable bindings.
 
    > Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

    ```typescript
    // bad
    export let foo: number = 3;

    // good
    export const foo: number = 3;
    ```
  <a name="modules--imports-first"></a>
  - [9.6](#modules--imports-first) Put all `import`s above non-import statements.
 
    > Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

    ```typescript
    // bad
    import { foo } from 'foo';
    foo.init();

    import { bar } from 'bar';

    // good
    import { foo } from 'foo';
    import { bar } from 'bar';

    foo.init();
    ```

  <a name="modules--multiline-imports-over-newlines"></a>
  - [9.7](#modules--multiline-imports-over-newlines) Multiline imports should be indented just like multiline array and object literals.

    > Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.

    ```typescript
    // bad
    import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

    // good
    import {
      longNameA,
      longNameB,
      longNameC,
      longNameD,
      longNameE,
    } from 'path';
    ```

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators

  <a name="iterators--nope"></a><a name="10.1"></a>
  - [10.1](#iterators--nope) Don't use iterators. Prefer JavaScript's higher-order functions instead of loops like `for-in` or `for-of`. 

    > Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

    > Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

    ```typescript
    const numbers: number[] = [1, 2, 3, 4, 5];

    // bad
    let sum: number = 0;
    for (let num: number of numbers) {
      sum += num;
    }
    sum === 15;

    // best (use the functional force)
    const sum: number = numbers.reduce((total: number, num: number): number => total + num, 0);
    sum === 15;

    // bad
    const increasedByOne: number[] = [];
    for (let i: number = 0; i < numbers.length; i++) {
      increasedByOne.push(numbers[i] + 1);
    }

    // best (keeping it functional)
    const increasedByOne: number[] = numbers.map((num: number): number => num + 1);
    ```

  <a name="generators--nope"></a><a name="10.2"></a>
  - [10.2](#generators--nope) Don't use generators for now.

    > Why? They don't transpile well to ES5.

**[⬆ back to top](#table-of-contents)**

## Properties

  <a name="properties--dot"></a><a name="11.1"></a>
  - [11.1](#properties--dot) Use dot notation when accessing properties. 

    ```typescript
    const luke: Interface = {
      jedi: true,
      age: 28,
    };

    // bad
    const isJedi: boolean = luke['jedi'];

    // good
    const isJedi: boolean = luke.jedi;
    ```

  <a name="properties--bracket"></a><a name="11.2"></a>
  - [11.2](#properties--bracket) Use bracket notation `[]` when accessing properties with a variable.

    ```typescript
    const luke: Interface = {
      jedi: true,
      age: 28,
    };

    const getProp = (prop: string) => luke[prop];

    const isJedi: boolean = getProp('jedi');
    ```

**[⬆ back to top](#table-of-contents)**

## Variables

  <a name="variables--const"></a><a name="12.1"></a>
  - [12.1](#variables--const) Always use `const` or `let` (not `var`) to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. 

    ```typescript
    // bad
    superPower: SuperPower = new SuperPower();

    // good
    const superPower: SuperPower = new SuperPower();
    ```

  <a name="variables--one-const"></a><a name="12.2"></a>
  - [12.2](#variables--one-const) Use one `const` or `let` declaration per variable. 

    > Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

    ```typescript
    // bad
    const items: Item[] = getItems(),
        goSportsTeam: boolean = true,
        dragonball: string = 'z';

    // bad
    // (compare to above, and try to spot the mistake)
    const items: Item[] = getItems(),
        goSportsTeam: boolean = true;
        dragonball: string = 'z';

    // good
    const items: Item[] = getItems();
    const goSportsTeam: boolean = true;
    const dragonball: string = 'z';
    ```

  <a name="variables--const-let-group"></a><a name="12.3"></a>
  - [12.3](#variables--const-let-group) Group all your `const`s and then group all your `let`s.

    > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

    ```typescript
    // bad
    const items: Item[] = getItems();
    let dragonball: string;
    const goSportsTeam: boolean = true;
    let len: number;

    // good
    const goSportsTeam = true;
    const items: Item[] = getItems();
    let dragonball: string;
    let len: number;
    ```

  <a name="variables--define-where-used"></a><a name="12.4"></a>
  - [12.4](#variables--define-where-used) Assign variables where you need them, but place them in a reasonable place.

    > Why? `let` and `const` are block scoped and not function scoped.

    ```typescript
    // bad - unnecessary function call
    const checkName = (hasName: string): string|boolean => {
      const name: string = getName();

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
    const checkName = (hasName: string): string|boolean => {
      if (hasName === 'test') {
        return false;
      }

      const name: string = getName();

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }
    ```
  <a name="variables--unary-increment-decrement"></a><a name="12.5"></a>
  - [12.5](#variables--unary-increment-decrement) Avoid using unary increments and decrements (++, --). 

    > Why? Disallowing unary increment and decrement statements prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

    ```typescript
    // bad

    const array: number[] = [1, 2, 3];
    let num: number = 1;
    num++;
    --num;

    let sum: number = 0;
    let truthyCount: number = 0;
    for (let i: number = 0; i < array.length; i++) {
      let value: number = array[i];
      sum += value;
      if (value) {
        truthyCount++;
      }
    }

    // good

    const array: number[] = [1, 2, 3];
    let num: number = 1;
    num += 1;
    num -= 1;

    const sum: number = array.reduce((a: number, b: number): number => a + b, 0);
    const truthyCount: number = array.filter(Boolean).length;
    ```

**[⬆ back to top](#table-of-contents)**

## Hoisting

  Since this part appears to be more educational than anything else, you can refer to the original [Airbnb Style Guide](https://github.com/airbnb/javascript) for more information about hoisting. In short, use [`const`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const) and [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and always avoid using `var`. 

**[⬆ back to top](#table-of-contents)**

## Comparison Operators & Equality

  <a name="comparison--eqeqeq"></a><a name="13.1"></a>
  - [13.1](#comparison--eqeqeq) Use `===` and `!==` over `==` and `!=`. 

  <a name="comparison--if"></a><a name="13.2"></a>
  - [13.2](#comparison--if) Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

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

  <a name="comparison--shortcuts"></a><a name="13.3"></a>
  - [13.3](#comparison--shortcuts) Use shortcuts for conditionals as often as possible.

    ```typescript
    // bad
    if (isValid === true) {
      // ...
    }

    // good
    if (isValid) {
      // ...
    }

    // bad (unless you are testing for empty string only and not all falsy values)
    if (name !== '') {
      // ...
    }

    // good
    if (name) {
      // ...
    }

    // bad
    if (collection.length > 0) {
      // ...
    }

    // good
    if (collection.length) {
      // ...
    }
    ```

  <a name="comparison--moreinfo"></a><a name="13.4"></a>
  - [13.4](#comparison--moreinfo) For more information see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

  <a name="comparison--switch-blocks"></a><a name="13.5"></a>
  - [13.5](#comparison--switch-blocks) Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).

    > Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

    ```typescript
    // bad
    switch (foo) {
      case 1:
        let x: number = 1;
        break;
      case 2:
        const y: number = 2;
        break;
      case 3:
        const f = () => {
          // ...
        };
        break;
      default:
        class C {}
    }

    // good
    switch (foo) {
      case 1: {
        let x: number = 1;
        break;
      }
      case 2: {
        const y: number = 2;
        break;
      }
      case 3: {
        const f = () => {
          // ...
        }
        break;
      }
      case 4:
        bar();
        break;
      default: {
        class C {}
      }
    }
    ```

  <a name="comparison--nested-ternaries"></a><a name="13.6"></a>
  - [13.6](#comparison--nested-ternaries) Ternaries should not be nested and generally be single line expressions.

    ```typescript
    // bad
    const foo: string|null = maybe1 > maybe2
      ? "bar"
      : value1 > value2 ? "baz" : null;

    // good
    const maybeNull: string|null = value1 > value2 ? 'baz' : null;

    const foo: string|null = maybe1 > maybe2
      ? 'bar'
      : maybeNull;
    ```

  <a name="comparison--unneeded-ternary"></a><a name="13.7"></a>
  - [13.7](#comparison--unneeded-ternary) Avoid unneeded ternary statements.

    ```typescript
    // bad
    const foo: Interface = a ? a : b;
    const bar: boolean = c ? true : false;
    const baz: boolean = c ? false : true;

    // good
    const foo: Interface = a || b;
    const bar: boolean = !!c;
    const baz: boolean = !c;
    ```

**[⬆ back to top](#table-of-contents)**

## Blocks

  <a name="blocks--braces"></a><a name="14.1"></a>
  - [14.1](#blocks--braces) Always use braces for if/else blocks or functions with multiple statemets, and place statements on their own lines.

    ```typescript
    // bad
    if (test)
      return false;

    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // bad
    const foo = (): boolean => { const isTrue: boolean = true; return isTrue; };

    // good
    const bar = (): boolean => {
      const isTrue: boolean = true;
      return isTrue;
    };

    // good
    const foo = (bar: boolean): boolean => bar;
    ```

  <a name="blocks--cuddled-elses"></a><a name="14.2"></a>
  - [14.2](#blocks--cuddled-elses) If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block's closing brace. 

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

**[⬆ back to top](#table-of-contents)**

## Control Statements

  <a name="control-statements"></a>
  - [15.1](#control-statements) In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should be placed at the beginning of the line.

    ```typescript
    // bad
    if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
      thing1();
    }

    // bad
    if ((foo === 123 || bar === "abc") &&
        doesItLookGoodWhenItBecomesThatLong() &&
        isThisReallyHappening()) {
        thing1();
    }

    // good
    if ((foo === 123 || bar === "abc")
        && doesItLookGoodWhenItBecomesThatLong()
        && isThisReallyHappening()) {
        thing1();
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Comments

  <a name="comments--multiline"></a><a name="16.1"></a>
  - [16.1](#comments--multiline) Use `/** ... */` for multi-line comments.

    ```typescript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    const make = (tag: string): Element => {

      // ...

      return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    const make = (tag: string): Element {

      // ...

      return element;
    }
    ```

  <a name="comments--singleline"></a><a name="16.2"></a>
  - [16.2](#comments--singleline) Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.

    ```typescript
    // bad
    const active: boolean = true;  // is current tab

    // good
    // is current tab
    const active: boolean = true;

    // bad
    const getType = (): string => {
      console.log('fetching type...');
      // set the default type to 'no type'
      const type: string = this.type || 'no type';

      return type;
    };

    // good
    const getType = (): string => {
      console.log('fetching type...');

      // set the default type to 'no type'
      const type: string = this.type || 'no type';

      return type;
    };

    // also good
    const getType = (): string => {
      // set the default type to 'no type'
      const type: string = this.type || 'no type';

      return type;
    };
    ```

  <a name="comments--spaces"></a><a name="16.3"></a>
  - [16.3](#comments--spaces) Start all comments with a space to make it easier to read. 

    ```typescript
    // bad
    //is current tab
    const active: boolean = true;

    // good
    // is current tab
    const active: boolean = true;

    // bad
    /**
     *make() returns a new element
     *based on the passed-in tag name
     */
    const make = (tag: string): Element {

      // ...

      return element;
    };

    // good
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    const make = (tag: string): Element {

      // ...

      return element;
    };
    ```

  <a name="comments--actionitems"></a><a name="16.4"></a>
  - [16.4](#comments--actionitems) Prefixing your comments with `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be solved. Whenever possible, these comments should be supplemented with more context, like a linked story that can be specified by, for example, a JIRA issue number.

    ```typescript
    class Calculator extends Abacus {
      private total: number;

      constructor() {
        super();

        // TODO: total should be configurable by an options param - JIRA issue: UI-4312
        this.total = 0;
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Whitespace

  <a name="whitespace--around-keywords"></a><a name="17.1"></a>
  - [17.1](#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. 

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
    fight () {
      console.log ('Swooosh!');
    }

    // good
    fight() {
      console.log('Swooosh!');
    }
    ```

  <a name="whitespace--infix-ops"></a><a name="17.2"></a>
  - [17.2](#whitespace--infix-ops) Set off operators with spaces. 

    ```typescript
    // bad
    const x: number=y+5;

    // good
    const x: number = y + 5;
    ```

  <a name="whitespace--newline-at-end"></a><a name="17.3"></a>
  - [17.3](#whitespace--newline-at-end) End files with a single newline character. 

    ```typescript
    // bad
    import { es6 } from './AirbnbStyleGuide';
      // ...
    export es6;
    ```

    ```typescript
    // bad
    import { es6 } from './AirbnbStyleGuide';
      // ...
    export es6;↵
    ↵
    ```

    ```typescript
    // good
    import { es6 } from './AirbnbStyleGuide';
      // ...
    export es6;↵
    ```

  <a name="whitespace--chains"></a><a name="17.4"></a>
  - [17.4](#whitespace--chains) Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which
    emphasizes that the line is a method call, not a new statement. 

    ```typescript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // bad
    $('#items').
      find('.selected').
      focus().
      click();

    // good
    $('#items')
      .find('.selected')
      .focus()
      .click();

    // good
    const leds: string = stage.selectAll('.led').data(data);
    ```

  <a name="whitespace--after-blocks"></a><a name="17.5"></a>
  - [17.5](#whitespace--after-blocks) Leave a blank line after blocks and before the next statement. 

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
    const obj: Interface = {
      foo: () => {},
      bar: () => {},
    };
    return obj;

    // good
    const obj: Interface = {
      foo: () => {},
      bar: () => {},
    };

    return obj;
    ```

  <a name="whitespace--padded-blocks"></a><a name="17.6"></a>
  - [17.6](#whitespace--padded-blocks) Do not pad your blocks with blank lines. 

    ```typescript
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

  <a name="whitespace--in-parens"></a><a name="17.7"></a>
  - [17.7](#whitespace--in-parens) Do not add spaces inside parentheses. 

    ```typescript
    // bad
    bar( foo: Foo ): Foo {
      return foo;
    }

    // good
    bar(foo: Foo): Foo {
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

  <a name="whitespace--in-brackets"></a><a name="17.8"></a>
  - [17.8](#whitespace--in-brackets) Do not add spaces inside brackets. 

    ```typescript
    // bad
    const foo: number[] = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);

    // good
    const foo: number[] = [1, 2, 3];
    console.log(foo[0]);
    ```

  <a name="whitespace--in-braces"></a><a name="17.9"></a>
  - [17.9](#whitespace--in-braces) Add spaces inside curly braces. 

    ```typescript
    // bad
    const foo: Interface = { clark: 'kent' };

    // good
    const foo: Interface = {clark: 'kent'};

    ```

  <a name="whitespace--max-len"></a><a name="17.10"></a>
  - [17.10](#whitespace--max-len) Avoid having lines of code that are longer than 140 characters (including whitespace). If a line is to be broken, it should be broken at a meaningful position. If it barely exceeds 140 characters, you can leave it as is. Note: per [above](#strings--line-length), long strings are exempt from this rule, and should not be broken up. 

    > Why? This ensures readability and maintainability.

    ```typescript
    // bad
    const foo: Interface = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

    // good
    const foo: Interface = jsonData
      && jsonData.foo
      && jsonData.foo.bar
      && jsonData.foo.bar.baz
      && jsonData.foo.bar.baz.quux
      && jsonData.foo.bar.baz.quux.xyzzy;

    // bad
    $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

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

<a name="commas--leading-trailing"></a><a name="18.1"></a>
  - [18.1](#commas--leading-trailing) Do not use leading commas, **use trailing commas**. 

    ```typescript
    // bad
    const story: Word[] = [
        once
      , upon
      , aTime
    ];

    // good
    const story: Word[] = [
      once,
      upon,
      aTime,
    ];

    // bad
    const hero: Hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // good
    const hero: Hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

  <a name="commas--dangling"></a><a name="18.2"></a>
  - [18.2](#commas--dangling) Use the additional trailing comma. 

    > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

    ```diff
    // bad - git diff without trailing comma
    const hero: Hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing']
    };

    // good - git diff with trailing comma
    const hero: Hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing'],
    };
    ```

    ```typescript
    // bad
    const hero: Hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    const heroes: string[] = [
      'Batman',
      'Superman'
    ];

    // good
    const hero: Hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    const heroes: string[] = [
      'Batman',
      'Superman',
    ];

    // bad
    createHero(
      firstName: string,
      lastName: string,
      inventorOf: string[]
    ) {
      // does nothing
    }

    // good
    createHero(
      firstName: string,
      lastName: string,
      inventorOf: string[],
    ) {
      // does nothing
    }

    // bad
    createHero(
      firstName: string,
      lastName: string,
      inventorOf: string[]
    );

    // good
    createHero(
      firstName: string,
      lastName: string,
      inventorOf: string[],
    );

    // good (note that a comma must not appear after a "rest" element)
    createHero(
      firstName: string,
      lastName: string,
      inventorOf: string[],
      ...heroArgs
    );
    ```

**[⬆ back to top](#table-of-contents)**

## Semicolons

  <a name="semicolons--required"></a><a name="19.1"></a>
  - [19.1](#semicolons--required) **Use semicolons to end your code statements.** 

    ```typescript
    // bad
    ((): string {
      const name: string = 'Skywalker'
      return name
    })()

    // good
    ((): string {
      const name: string = 'Skywalker';
      return name;
    }());
    ```
**[⬆ back to top](#table-of-contents)**

## Type Casting & Coercion

  <a name="coercion--explicit"></a><a name="20.1"></a>
  - [20.1](#coercion--explicit) Perform type coercion at the beginning of the statement.

  <a name="coercion--strings"></a><a name="20.2"></a>
  - [20.2](#coercion--strings)  Strings:

    ```typescript
    // => this.reviewScore = 9;

    // bad
    const totalScore: string = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

    // bad
    const totalScore: string = this.reviewScore.toString(); // isn't guaranteed to return a string

    // good
    const totalScore: string = String(this.reviewScore);
    ```

  <a name="coercion--numbers"></a><a name="20.3"></a>
  - [20.3](#coercion--numbers) Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. 

    ```typescript
    const inputValue: string = '4';

    // bad
    const val: number = new Number(inputValue);

    // bad
    const val: number = +inputValue;

    // bad
    const val: number = inputValue >> 0;

    // bad
    const val: number = parseInt(inputValue);

    // good
    const val: number = Number(inputValue);

    // good
    const val: number = parseInt(inputValue, 10);
    ```

  <a name="coercion--comment-deviations"></a><a name="20.4"></a>
  - [20.4](#coercion--comment-deviations) If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.

    ```typescript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val: number = inputValue >> 0;
    ```

  <a name="coercion--bitwise"></a><a name="20.5"></a>
  - [20.5](#coercion--bitwise) **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

    ```typescript
    2147483647 >> 0; // => 2147483647
    2147483648 >> 0; // => -2147483648
    2147483649 >> 0; // => -2147483647
    ```

  <a name="coercion--booleans"></a><a name="20.6"></a>
  - [20.6](#coercion--booleans) Booleans:

    ```typescript
    const age: number = 0;

    // bad
    const hasAge: boolean = new Boolean(age);
    const hasAge: boolean = Boolean(age);

    // best
    const hasAge: boolean = !!age;
    ```

**[⬆ back to top](#table-of-contents)**

## Naming Conventions

  <a name="naming--descriptive"></a><a name="21.1"></a>
  - [21.1](#naming--descriptive) Be descriptive with your naming. 

    ```typescript
    // bad
    const q = () => {
      // ...
    };

    // good
    const query = () => {
      // ...
    };
    ```

  <a name="naming--camelCase"></a><a name="21.2"></a>
  - [21.2](#naming--camelCase) Use camelCase when naming objects, functions, and instances. 

    ```typescript
    // bad
    const OBJEcttsssss: Interface = {};
    const this_is_my_object: Interface = {};
    const c = () => {};

    // good
    const thisIsMyObject: Interface = {};
    const thisIsMyFunction = () => {};
    ```

  <a name="naming--PascalCase"></a><a name="21.3"></a>
  - [21.3](#naming--PascalCase) Use PascalCase only when naming constructors or classes. 

    ```typescript
    // bad
    class user {
      private name: string;

      constructor(options: Options) {
        this.name = options.name;
      }
    }

    const bad: user = new user({
      name: 'nope',
    });

    // good
    class User {
      private name: string;

      constructor(options: Options) {
        this.name = options.name;
      }
    }

    const good: User = new User({
      name: 'yup',
    });
    ```

  <a name="naming--leading-underscore"></a><a name="21.4"></a>
  - [21.4](#naming--leading-underscore) Do not use trailing or leading underscores. 

**[⬆ back to top](#table-of-contents)**

## Accessors

  <a name="accessors--not-required"></a><a name="22.1"></a>
  - [22.1](#accessors--not-required) Accessor functions for properties are not required.

  <a name="accessors--no-getters-setters"></a><a name="22.2"></a>
  - [22.2](#accessors--no-getters-setters) Do use TypeScript getters/setters.

    ```typescript
    // good
    class Dragon {
      get age(): number {
        // ...
      }

      set age(value: number): number {
        // ...
      }
    }
    ```
**[⬆ back to top](#table-of-contents)**

## Events

  <a name="events--hash"></a><a name="23.1"></a>
  - [23.1](#events--hash) When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```typescript
    // bad
    $(this).trigger('listingUpdated', listing.id);

    // ...

    $(this).on('listingUpdated', (e: JQueryEvent, listingId: string) => {
      // do something with listingId
    });
    ```

    prefer:

    ```typescript
    // good
    $(this).trigger('listingUpdated', { listingId: listing.id });

    // ...

    $(this).on('listingUpdated', (e: JQueryEvent, data: { listingId: string; }) => {
      // do something with data.listingId
    });
    ```
  **[⬆ back to top](#table-of-contents)**

## jQuery

  <a name="jquery--dollar-prefix"></a><a name="24.1"></a>
  - [24.1](#jquery--dollar-prefix) Prefix jQuery object variables with a `$` if they are outside `ui` elements bind to a Marionette View. 

    ```typescript
    // bad
    const sidebar: JQueryElement = $('.sidebar');

    // good
    const $sidebar: JQueryElement = $('.sidebar');

    // good
    const $sidebarBtn: JQueryElement = $('.sidebar-btn');
    ```

  <a name="jquery--cache"></a><a name="24.2"></a>
  - [24.2](#jquery--cache) Cache jQuery lookups whenever possible.

    ```typescript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...

      $('.sidebar').css({
        'background-color': 'pink',
      });
    }

    // good
    function setSidebar() {
      const $sidebar: JQueryElement = $('.sidebar');
      $sidebar.hide();

      // ...

      $sidebar.css({
        'background-color': 'pink',
      });
    }
    ```

  <a name="jquery--queries"></a><a name="24.3"></a>
  - [24.3](#jquery--queries) For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)

  <a name="jquery--find"></a><a name="24.4"></a>
  - [24.4](#jquery--find) Use `find` with scoped jQuery object queries.

    ```typescript
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    $sidebar.find('ul').hide();
    ```
**[⬆ back to top](#table-of-contents)**

<a name="ecmascript-6-styles"></a>
## ECMAScript 6+ (ES 2015+) Styles

  <a name="tc39-proposals"></a>
  - [25.1](#tc39-proposals) Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

    > Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ back to top](#table-of-contents)**

## Testing

  <a name="test-jasmine"></a>
  - [26.1](#test-jasmine) We use [Jasmine](https://jasmine.github.io/) at Coveo, and combine it with [Enzyme](http://airbnb.io/enzyme/) when testing React components. 

  <a name="test-everything"></a>
  - [26.2](#test-everything) You should be writing tests for all new code you write. 100% test coverage is a good goal to strive for, even if it's not always practical to reach it.

    > Why? Testing aggressively gives you solid proofs that your system/application will work the way you want. Plus, if new code breaks your application, it will be much easier to find out why it happened if the code base is well tested.


  <a name="regression-test"></a>
  - [26.3](#regression-test) Whenever you fix a bug, _write a regression test_. In other words, add additional unit tests proving that the bug is really fixed and unlikely to break again in the future.
  
    > Why? A bug fixed without a regression test is almost certainly going to break again in the future.

  <a name="test-mocks"></a>
  - [26.4](#test-mocks) Use mocks to mock objects, and create them in their own files.
    > Why? Having your mocks outside your test files makes your tests more readable. 
  
  <a name="test-spies"></a>
  - [26.5](#test-spies) Name your spies with the name of the entity you want to spy on (be it a method or property) following with the _Spy_ suffix. For example, if you want to spy on a method called `renderChildren`, you should name your spy `renderChildrenSpy`.
    > Why? Naming your spies makes your tests easier to understand and shorter to write overall. Adding the Spy suffix makes the person who reads your code aware that it is a "spied upon" entity.

  <a name="test-matchers"></a>
  - [26.6](#test-matchers) Prefer built-in jasmine matchers (`toBeDefined`, `toEqual`, `toBe`, `toContain`, etc) before custom matchers, except for `toBeTruthy` and `toBeFalsy`. 
    > Why? Jasmine's matchers are robust and give clear information in the logs if your test breaks, which make things easier to debug. 

**[⬆ back to top](#table-of-contents)**

## Reviewing  

  <a name="review-daily"></a>
  - [27.1](#review-daily) Review code of your peers **daily** as long as there are pull requests to review. No, this won't affect your productivity negatively, it will speed it up. 
    > Why? Receiving or giving code reviews at least daily speeds up the feedback rate for each team member and consequently speeds up the rate at which your team merges its pull requests without losing in quality. Reviewing and merging pull requests at a standard and predictible pace gives momentum to the team. Adopting this habit can also free your brain from thinking about tasks that have remained pending in a "review" state for multiple days without having received any feedback. 

  <a name="review-fully"></a>
  - [27.2](#review-fully) Consider a complete code review as having read (and hopefully understood) each line of code contained in the pull request being reviewed, including its unit tests. If there is a demo (in the form of a live demo, video or image), make sure you thoroughly tested it or seen it. If the pull request to review is long and you think it will take more than an hour to do, be disciplined, and do it anyway.
    > Why? Half a review is no review. Be thorough and genuinely critical in your review, but always remain respectful.

  <a name="review-pragmatically"></a>
  - [27.3](#review-pragmatically) Avoid looking for small or unimportant issues. As a rule of thumb, seek "good enough" code, and not perfection (it's subjective anyway). If the code fits the standards described in this document, don't go overboard to prove a point. You can offer suggestions, but don't insist on them being implemented to approve features of your peers. 
    > Why? Nit picking and perfectionism kills development speed. 

## Being Reviewed 

  <a name="reviewed-be-steady"></a>
  - [28.1](#reviewed-be-steady) Avoid letting your pull requests pending "in review" for too long. As a rule of thumb, focus on applying reviews and closing your on going pull requests before starting other features. 
    > Why? It keeps discussions around pull requests more lively and on point. It's easy to lose some context about a pull request when you did not touch it for a couple of days.

  <a name="reviewed-explain-things"></a>
  - [28.2](#reviewed-unconscious-lazyness) Provide written explanations on what complex parts of your code do. Provide written explanations on changes you've made after receiving reviews. And, all explanations should preferably appear in the pull request itself.

    > Why? Explanations help everybody understand better your pull request and its advancements. Having them all in the pull request allow everyone to see the explanations (as opposed to direct messages between two team members on Slack).

  <a name="reviewed-unconscious-lazyness"></a>
  - [28.3](#reviewed-unconscious-lazyness) Combat lazyness. It might sound obvious when you are fresh into a new feature. However, after a couple of days (or weeks) into one, things can get psychologically more complex. Always stay self-aware of whether you are arguing against doing something because you are tired of a feature, or really because it is not worthwile to do at this point.    
    > Why? Regardless of the state you're in, quality should always be the first priority.

  <a name="reviewed-pragmatically"></a>
  - [28.4](#reviewed-pragmatically) Avoid debating over small or unimportant issues. If, in your view, you received nit picking comments on your pull request and someone insists on you making changes, apply them quickly and move on.     

    > Why? Sometimes things are just subjective and arguing thus becomes a time-consuming dead end. The sooner the reviewer or the reviewee recognizes the situation, the better. 

## TypeScript 
#### Interface

  <a name="interface-naming"></a>
  - [29.1](#interface-naming) Use `PascalCase` when naming your interfaces, and `camelCase` for their members.

  <a name="interface-no-i"></a>
  - [29.2](#interface-no-i) Do not prefix your interfaces with `I`.  
    > Why? Unconventional. Important interfaces (like `Window`, `Document`) are usually not defined with the `I` prefix.

#### Type

  <a name="type-naming"></a>
  - [29.3](#types-naming) Use `PascalCase` when naming your types, and `camelCase` for their members.

#### Enum

  <a name="enum-naming"></a>
  - [29.4](#enum-naming) Use `PascalCase` when naming your enums, and `camelCase` for their members.

#### Function 
  <a name="function-return"></a>
  - [29.5](#function-return) Avoid specifying the returned type if the function can return anything (`any`) or nothing.

### Namespace
  <a name="namespace-avoid"></a>
  - [29.7](#namespace-avoid) Do not use namespaces. Use [modules](https://www.typescriptlang.org/docs/handbook/modules.html).  

## Libraries and Frameworks 

The following list is an overview of the main frameworks and libraries we use when developping for the Coveo Cloud Platform. You can dig deeper by clicking on the links of each library or framework listed:  
  
- [Backbone.js](http://backbonejs.org/)
- [Marionette.js](https://marionettejs.com/)
- [EJS](http://www.embeddedjs.com/)
- [React](https://facebook.github.io/react/) 
- [Redux](http://redux.js.org/docs/introduction/)
- [Underscore.js](http://underscorejs.org/)
- [jQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [URI.js](https://medialize.github.io/URI.js/)
- [Polyglot.js](http://airbnb.io/polyglot.js/)  
- [Webpack](https://webpack.js.org/)  
- [Gulp](https://gulpjs.com/)  
- [npm](https://docs.npmjs.com/)  

**A few rules of thumb:**
  
- Use "native" features of Backbone/Marionette and React/Redux whenever you can. Only defaults to using jQuery if and only if your problem cannot be solved with the main frameworks and architecture we use.  
- Always use EJS for HTML templating if you are working with Backbone/Marionette.  
- Use Underscore.js as much as it pleases you. 
- If you are working on new components or complex features, favor React/Redux over Backbone/Marionette as your framework of choice.

## Notes on Legacy Code 

As for any project that has lived for a long period of time, you may find some places in the code base where the code does not respect some standards described above. In this case, do refactor the code if it is related to your current task, or if you think it could represent a potential security or bug threat. Otherwise, you can leave the code as it is.
  

## Remaining Sections
You can refer to the original [Airbnb Style Guide](https://github.com/airbnb/javascript) for the remaining sections if you want, although they are really not a required read by our team.  
  
