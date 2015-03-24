# uShip JavaScript Style Guide () {

*A mostly reasonable approach to JavaScript, based on AirBnb's [style guide](https://github.com/airbnb/javascript)*


## <a name='TOC'>Table of Contents</a>

  1. [Types](#types)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Conditional Expressions & Equality](#conditionals)
  1. [Blocks](#blocks)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Type Casting & Coercion](#type-coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Constructors](#constructors)
  1. [Events](#events)
  1. [Modules](#modules)
  1. [jQuery](#jquery)
  1. [ES5 Compatibility](#es5)
  1. [Testing](#testing)
  1. [Performance](#performance)
  1. [Resources](#resources)
  1. [In the Wild](#in-the-wild)
  1. [Translation](#translation)
  1. [The JavaScript Style Guide Guide](#guide-guide)
  1. [Contributors](#contributors)
  1. [License](#license)

## <a name='types'>Types</a>

  - **Primitives**: When you access a primitive type you work directly on its value

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    let foo = 1,
        bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```
  - **Complex**: When you access a complex type you work on a reference to its value

    + `object`
    + `array`
    + `function`

    ```javascript
    let foo = [1, 2],
        bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

    **[&#8593; Back to top](#TOC)**

## <a name='objects'>Objects</a>

  - Use the literal syntax for object creation.

    ```javascript
    // bad
    let item = new Object();

    // good
    let item = {};
    ```

  - (ES6) Use [enhanced object literal instantiation](https://github.com/lukehoban/es6features#enhanced-object-literals) to reduce boilerplate when assigning values to properties, methods, and dynamically computed property names:

    ```
    // bad
    let private = true,
        weakness = 'kryptonite';

    let superman = {
        private: private,
        fly: function () {
            console.log('Faster than a speeding bullet');
        }
    }

    superman[weakness] = true;

    // good
    let private = true,
        weakness = 'kryptonite';

    let superman = {
        private,
        fly () {
            console.log('Faster than a speeding bullet');
        },
        [weakness]: true
    }
    ```

  - Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61)

    ```javascript
    // bad
    let superman = {
        default: { clark: 'kent' },
        private: true
    };

    // good
    let superman = {
        defaults: { clark: 'kent' },
        hidden: true
    };
    ```

  - Use readable synonyms in place of reserved words.

    ```javascript
    // bad
    let superman = {
        class: 'alien'
    };

    // bad
    let superman = {
        klass: 'alien'
    };

    // good
    let superman = {
        type: 'alien'
    };
    ```
    **[&#8593; Back to top](#TOC)**

## <a name='arrays'>Arrays</a>

  - Use the literal syntax for array creation

    ```javascript
    // bad
    let items = new Array();

    // good
    let items = [];
    ```

  - If you don't know array length use Array#push.

    ```javascript
    let someStack = [];


    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  - (ES6) To copy an array, use the [spread operator](https://github.com/lukehoban/es6features#default--rest--spread):

    ```javascript
    let items = [1, 2, 3],
        itemsCopy;

    // bad
    for (let i = 0; i < items.length; i++) {
        itemsCopy[i] = items[i];
    }

    // good
    itemsCopy = [...items];
    ```

  - (ES5) In ES5 environments, use Array#slice to copy an array.

    ```javascript
    var items = [1, 2, 3],
        itemsCopy;

    // bad
    for (var i = 0; i < items.length; i++) {
        itemsCopy[i] = items[i];
    }

    // good
    itemsCopy = items.slice();
    ```

  - (ES6) To convert an array-like object to an array, use the [spread operator](https://github.com/lukehoban/es6features#default--rest--spread).

    ```javascript
    let nodeList = document.getElementsByTagName('a'),
        nodesArray = [...nodesList];
    ```

  - (ES5) To convert an array-like object to an array in ES5 environments, use Array#slice.

    ```javascript
    function trigger () {
        var args = Array.prototype.slice.call(arguments);
        ...
    }
    ```

  - (ES5) To convert an array-like object to an array in ES5 environments, use Array#slice.

    ```javascript
    function trigger () {
        var args = Array.prototype.slice.call(arguments);
        ...
    }
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='strings'>Strings</a>

  - Use single quotes `''` for strings

    ```javascript
    // bad
    const NAME = "Bob Parr";

    // good
    const NAME = 'Bob Parr';

    ```

  - (ES6) Use template strings for interpolating variables in strings

    ```javascript
    // bad
    let fullName = 'Bob ' + this.lastName;

    // good
    let fullname = `Bob ${this.lastName}`;
    ```

  - (ES6) Strings longer than 80 characters should be written across multiple lines using template strings:

    ```javascript
    // bad
    let errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    let errorMessage = 'This is a super long error that \
    was thrown because of Batman. \
    When you stop to think about \
    how Batman had anything to do \
    with this, you would get nowhere \
    fast.';


    // good
    let errorMessage = `This is a super long error that
      was thrown because of Batman.
      When you stop to think about
      how Batman had anything to do
      with this, you would get nowhere
      fast.`;
    ```

  - (ES5) Strings longer than 80 characters should be written across multiple lines using string concatenation in ES5 environments.
  - Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40)

    ```javascript
    // bad
    var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    var errorMessage = 'This is a super long error that \
    was thrown because of Batman. \
    When you stop to think about \
    how Batman had anything to do \
    with this, you would get nowhere \
    fast.';


    // good
    var errorMessage = 'This is a super long error that ' +
        'was thrown because of Batman. ' +
        'When you stop to think about ' +
        'how Batman had anything to do ' +
        'with this, you would get nowhere ' +
        'fast.';
    ```

  - When programatically building up a string, use Array#join instead of string concatenation. Mostly for IE: [jsPerf](http://jsperf.com/string-vs-array-concat/2).

    ```javascript
    let items,
        messages,
        length;

    messages = [{
        state: 'success',
        message: 'This one worked.'
    }, {
        state: 'success',
        message: 'This one worked as well.'
    }, {
        state: 'error',
        message: 'This one did not work.'
    }];

    length = messages.length;

    // bad
    function inbox (messages) {
        items = '<ul>';

        for (let i = 0; i < length; i++) {
            items += '<li>' + messages[i].message + '</li>';
        }

        return items + '</ul>';
    }

    // good
    function inbox (messages) {
        items = [];

        for (let i = 0; i < length; i++) {
            items[i] = messages[i].message;
        }

        return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
    }
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='functions'>Functions</a>

  - There are lots of ways to declare and use functions. Here's a list:

    ```javascript
    // anonymous function expression
    let anonymous = function () {
        return true;
    };

    // named function expression
    let named = function named () {
        return true;
    };

    // arrow function expression
    let dogFilter = animal => typeof animal === 'Dog';

    // immediately-invoked function expression (IIFE)
    (function () {
        console.log('Welcome to the Internet. Please follow me.');
    })();

    // function declaration
    function greetings (yourName) {
        console.log(`Glad you could join us, ${yourName}`);
    }
    ```

  - Um, that's a lot. Which to use? Here are some rules of thumb:

  - (ES6) For simple callbacks and functions passed as parameters, use [arrow function shorthand](https://github.com/lukehoban/es6features#arrows).
    Arrow functions are lexically scoped, which makes them great for things like event handlers:

    ```javascript
    // bad
    let self = this;
    $('#hit-me').on('click', function () { self.hitCount++; });

    // good
    $('#hit-me').on('click', e => this.hitCount++);
    ```

  - For multiline functions, use function declarations. Function declarations are [hoisted](#hoisting), so you can use the functions anywhere in the scope where they are declared.

    ```javascript
    // bad
    let mapMyLocation = function () {
        //do a lot of stuff
    }

    // good
    function mapMyLocation () {
        // do a lot of stuff
    }
    ```

  - Don't abuse function parameters by deeply nesting anonymous functions. Instead, declare the function in the top-level scope and pass it by name.

    ```javascript
    // bad
    let contents;
    fs.readFile('first.txt', function (err, data) {
        if (err) {
            fs.readFile('url.txt', function (err, data) {
                if (!err) {
                    http.get(data).then(function (resp) {
                        contents = resp.body;
                    });
                }
            });
        } else {
            contents = data;
        }
    });

    // good
    let contents;
    fs.readFile('first.txt', handleFileRead);

    function handleFileRead (err, data) {
        if (err) {
            fs.readFile('url.txt', handleFallbackRead);
        } else {
            contents = data;
        }
    }

    function handleFallbackRead (err, data) {
        if (err) return;
        http.get(data).then(resp => contents = resp.body);
    }
    ```

  - Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.
  - **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

    ```javascript
    // bad
    if (currentUser) {
        function test () {
            console.log('Nope.');
        }
    }

    // good
    let test;
    if (currentUser) {
        test = function test () {
            console.log('Yup.');
        };
    }
    ```

  - (ES6) Prefer the use of [rest params](https://github.com/lukehoban/es6features#default--rest--spread) instead of the `arguments` keyword.

    ```
    // bad
    function stuff () {
        console.log(arguments.length);
    }

    // good
    function betterStuff (...args) {
        console.log(args.length);
    }
    ```

  - Never name a parameter `arguments`, this will take precedence over the `arguments` object that is given to every function scope.

    ```javascript
    // bad
    function nope (name, options, arguments) {
        // ...stuff...
    }

    // good
    function yup (name, options, args) {
        // ...stuff...
    }
    ```

    **[&#8593; Back to top](#TOC)**



## <a name='properties'>Properties</a>

  - Use dot notation when accessing properties.

    ```javascript
    let luke = {
        jedi: true,
        age: 28
    };

    // bad
    let isJedi = luke['jedi'];

    // good
    let isJedi = luke.jedi;
    ```

  - Use subscript notation `[]` when accessing properties with a variable.

    ```javascript
    let luke = {
        jedi: true,
        age: 28
    };

    function getProp (prop) {
        return luke[prop];
    }

    let isJedi = getProp('jedi');
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='variables'>Variables</a>

  - Always use `var`, `let` or `const` to declare variables. Not doing so will result in strict mode errors.

    ```javascript
    // bad
    superPower = new SuperPower();

    // good
    let superPower = new SuperPower();
    ```

  - (ES6) Use only [`let` or `const`](https://github.com/lukehoban/es6features#let--const) instead of `var`. If you have a specific need for a function-scoped variable instead of a block-scoped one, write a comment explaining why.

    ```javascript
    // bad
    var howManyTimes = 5;
    for (var i = 0; i < howManyTimes; i++) {
        ...
    }

    // good
    const HOW_MANY_TIMES = 5;
    for (let i = 0; i < howManyTimes, i++) {
        ...
    }
    ```

  - Use one `let` or `var` declaration for multiple variables and declare each variable on a newline.

    ```javascript
    // bad
    let items = getItems();
    let goSportsTeam = true;
    let dragonball = 'z';

    // good
    let items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';
    ```

  - (ES6) Use one `const` declaration per line, to emphasize the immutability of the assignment.

    ```javascript
    // bad
    const SHAPE = 'circle',
        WEIGHT = 25;

    // good
    const SHAPE = 'circle';
    const WEIGHT = 25;
    ```

  - Declare unassigned variables last. This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables. One variable per line. Move multiline declarations -- like object literals -- to their own `let` or `var` expression.

    ```javascript
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i, items = getItems(),
        dragonball,
        goSportsTeam = true,
        len;

    // bad
    let items = getItems(),
        startingInventory = {
            potions: 10,
            weapons: 5,
            staffs: 1
        },
        dragonball;

    // good
    let items = getItems(),
        goSportsTeam = true,
        dragonball,
        length,
        i;

    // good
    let items = getItems(),
        dragonball;

    let startingInventory = {
        potions: 10,
        weapons: 5,
        staffs: 1
    };
    ```

  - Assign variables at the top of their scope. This helps avoid issues with variable declaration and assignment hoisting related issues.

    ```javascript
    // bad
    function () {
        test();
        console.log('doing stuff..');

        //..other stuff..

        let name = getName();

        if (name === 'test') {
            return false;
        }

        return name;
    }

    // good
    function () {
        let name = getName();

        test();
        console.log('doing stuff..');

        //..other stuff..

        if (name === 'test') {
            return false;
        }

        return name;
    }

    // bad
    function () {
        let name = getName();

        if (!arguments.length) {
            return false;
        }

        return true;
    }

    // good
    function () {
        if (!arguments.length) {
            return false;
        }

        let name = getName();

        return true;
    }
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='hoisting'>Hoisting</a>

  - Variable declarations get hoisted to the top of their scope, their assignment does not.

    ```javascript
    // we know this wouldn't work (assuming there
    // is no notDefined global variable)
    function example () {
        console.log(notDefined); // => throws a ReferenceError
    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example () {
        console.log(declaredButNotAssigned); // => undefined
        let declaredButNotAssigned = true;
    }

    // The interpreter is hoisting the variable
    // declaration to the top of the scope.
    // Which means our example could be rewritten as:
    function example () {
        let declaredButNotAssigned;
        console.log(declaredButNotAssigned); // => undefined
        declaredButNotAssigned = true;
    }
    ```

  - Anonymous function expressions hoist their variable name, but not the function assignment.

    ```javascript
    function example () {
        console.log(anonymous); // => undefined

        anonymous(); // => TypeError anonymous is not a function

        let anonymous = function() {
            console.log('anonymous function expression');
        };
    }
    ```

  - Named function expressions hoist the variable name, not the function name or the function body.

    ```javascript
    function example () {
        console.log(named); // => undefined

        named(); // => TypeError named is not a function

        superPower(); // => ReferenceError superPower is not defined

        let named = function superPower() {
            console.log('Flying');
        };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example () {
        console.log(named); // => undefined

        named(); // => TypeError named is not a function

        let named = function named() {
            console.log('named');
        }
    }
    ```

  - Function declarations hoist their name and the function body.

    ```javascript
    function example () {
        superPower(); // => Flying

        function superPower () {
            console.log('Flying');
        }
    }
    ```

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) by [Ben Cherry](http://www.adequatelygood.com/)

    **[&#8593; Back to top](#TOC)**



## <a name='conditionals'>Conditional Expressions & Equality</a>

  - Use `===` and `!==` over `==` and `!=`.
  - Conditional expressions are evaluated using coercion with the `ToBoolean` method and always follow these simple rules:

    + **Objects** evaluate to **true**
    + **Undefined** evaluates to **false**
    + **Null** evaluates to **false**
    + **Booleans** evaluate to **the value of the boolean**
    + **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
    + **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

    ```javascript
    if ([0]) {
        // true
        // An array is an object, objects evaluate to true
    }
    ```

  - Use shortcuts.

    ```javascript
    // bad
    if (name !== '') {
        // ...stuff...
    }

    // good
    if (name) {
        // ...stuff...
    }

    // bad
    if (collection.length > 0) {
        // ...stuff...
    }

    // good
    if (collection.length) {
        // ...stuff...
    }
    ```

  - For more information see [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll

    **[&#8593; Back to top](#TOC)**


## <a name='blocks'>Blocks</a>

  - Use braces with all multi-line blocks.

    ```javascript
    // bad
    if (test)
        return false;

    // good
    if (test) return false;

    // good
    if (test) {
        return false;
    }

    // bad
    function () { return false; }

    // good
    function () {
        return false;
    }
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='comments'>Comments</a>

  - Use `/** ... */` for multiline comments. Include a description, specify types and values for all parameters and return values.

    ```javascript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param <String> tag
    // @return <Element> element
    function make (tag) {

        // ...stuff...

        return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @param <String> tag
     * @return <Element> element
     */
    function make (tag) {

        // ...stuff...

        return element;
    }
    ```

  - Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.

    ```javascript
    // bad
    const ACTIVE = true;  // is current tab

    // good
    // is current tab
    const ACTIVE = true;

    // bad
    function getType () {
        console.log('fetching type...');
        // set the default type to 'no type'
        let type = this._type || 'no type';

        return type;
    }

    // good
    function getType () {
        console.log('fetching type...');

        // set the default type to 'no type'
        let type = this._type || 'no type';

        return type;
    }
    ```

  - Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME -- need to figure this out` or `TODO -- need to implement`.

  - Use `// FIXME:` to annotate problems

    ```javascript
    function Calculator () {

        // FIXME: shouldn't use a global here
        total = 0;

        return this;
    }
    ```

  - Use `// TODO:` to annotate solutions to problems

    ```javascript
    function Calculator () {

        // TODO: total should be configurable by an options param
        this.total = 0;

        return this;
    }
  ```

    **[&#8593; Back to top](#TOC)**


## <a name='whitespace'>Whitespace</a>

  - In general, keep lines short. Use newlines between blocks or chunks of related code.

    ```javascript
    // bad
    this.weightUnits = ko.computed(() =>
        (this.systemOfMeasurement() === 'Metric') ? uship.localization['MainKg'] : uship.localization['MainLbs']
    );
    function anotherFunction () {
        let foo = 1;
    }

    // good
    this.weightUnits = ko.computed(() =>
        (this.systemOfMeasurement() === 'Metric') ?
            uship.localization['MainKg'] :
            uship.localization['MainLbs']
    );

    function anotherFunction () {
        let foo = 1;
    }
    ```

  - Use soft tabs set to 4 spaces. Don't mix hard tabs and spaces.

    ```javascript
    // bad
    function() {
    ____var name;
    }

    // bad
    function() {
    ∙∙var name;
    }

    // bad
    function() {
    ∙var name;
    }

    // good
    function() {
    ∙∙∙∙var name;
    }
    ```

  - Place 1 space before the leading brace. For function declarations, place 1 space between the function keyword and the arguments list.

    ```javascript
    // bad
    function test(){
        console.log('test');
    }

    // bad
    function test() {
        console.log('test');
    }

    // good
    function test () {
        console.log('test');
    }

    // bad
    dog.set('attr',{
        age: '1 year',
        breed: 'Bernese Mountain Dog'
    });

    // good
    dog.set('attr', {
        age: '1 year',
        breed: 'Bernese Mountain Dog'
    });
    ```

  - Set off operators with spaces.

    ```javascript
    // bad
    let x=y+5;

    // good
    let x = y + 5;
    ```

  - Use a newline between key/value pairs in an object literal. Place 1 space between keys and values. You can choose to tab-align values as long as the result is more readable.

    ```javascript
    // bad
    var dog = { breed: 'Maltese', color: 'white', age: '3 years' };

    // bad
    let dog = { 
        breed:'Maltese',
        color:'white',
        age:'3 years' 
    };

    // good
    let dog = { 
        breed: 'Maltese',
        color: 'white',
        age: '3 years' 
    };

    // bad
    let dog = { 
        breed:                                             'Maltese',
        color:                                             'white',
        age:                                               '3 years',
        aReallyLongPropertyNameMakesAlignmentHardToRead: true
    };

    // acceptable
    let dog = { 
        breed:    'Maltese',
        color:    'white',
        age:      '3 years',
        adorable: 'obviously'
    };
    ```

  - Use indentation when making long method chains.

    ```javascript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // good
    $('#items')
        .find('.selected')
            .highlight()
            .end()
        .find('.open')
            .updateCount();

    // bad
    var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
        .attr('width',  (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);

    // good
    var leds = stage.selectAll('.led')
            .data(data)
        .enter().append('svg:svg')
            .class('led', true)
            .attr('width',  (radius + margin) * 2)
        .append('svg:g')
            .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
            .call(tron.led);
    ```

    **[&#8593; Back to top](#TOC)**

## <a name='commas'>Commas</a>

  - Leading commas: **Nope.**

    ```javascript
    // bad
    let once
      , upon
      , aTime;

    // good
    let once,
        upon,
        aTime;

    // bad
    let hero = {
          firstName: 'Bob'
        , lastName: 'Parr'
        , heroName: 'Mr. Incredible'
        , superPower: 'strength'
    };

    // good
    let hero = {
        firstName: 'Bob',
        lastName: 'Parr',
        heroName: 'Mr. Incredible',
        superPower: 'strength'
    };
    ```

  - Additional trailing comma: **Nope.** This can cause problems with IE6/7 and IE9 if it's in quirksmode. Also, in some implementations of ES3 would add length to an array if it had an additional trailing comma. This was clarified in ES5 ([source](http://es5.github.io/#D)):

  > Edition 5 clarifies the fact that a trailing comma at the end of an ArrayInitialiser does not add to the length of the array. This is not a semantic change from Edition 3 but some implementations may have previously misinterpreted this.

    ```javascript
    // bad
    let hero = {
        firstName: 'Kevin',
        lastName: 'Flynn',
    };

    // bad
    let heroes = [
        'Batman',
        'Superman',
    ];

    // good
    let hero = {
        firstName: 'Kevin',
        lastName: 'Flynn'
    };

    // good
    let heroes = [
        'Batman',
        'Superman'
    ];
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='semicolons'>Semicolons</a>

  - **Yup.** Javascript will automatically insert semicolons -- that it's they're optional in the strict sense. But leaving out semicolons can cause some pernicious bugs, particularly when multiple people are working on the same code, or when not everyone is an expert on the edge case rules for semicolon insertion. So for consistency's sake, always use them.

    ```javascript
    // bad
    (function () {
        let name = 'Skywalker'
        return name
    })()

    // good
    (function () {
        let name = 'Skywalker';
        return name;
    })();

    // good
    ;(function () {
        let name = 'Skywalker';
        return name;
    })();
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='type-coercion'>Type Casting & Coercion</a>

  - Perform type coercion at the beginning of the statement.
  - Strings:

    ```javascript
    //  => this.reviewScore = 9;

    // bad
    let totalScore = this.reviewScore + '';

    // good
    let totalScore = '' + this.reviewScore;

    // bad
    let totalScore = '' + this.reviewScore + ' total score';

    // good
    let totalScore = this.reviewScore + ' total score';
    ```

  - Use `parseInt` for Numbers and always with a radix for type casting.

    ```javascript
    let inputValue = '4';

    // bad
    let val = new Number(inputValue);

    // bad
    let val = +inputValue;

    // bad
    let val = inputValue >> 0;

    // bad
    let val = parseInt(inputValue);

    // good
    let val = parseInt(inputValue, 10);
    ```

  - If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](http://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.
  - **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](http://es5.github.io/#x4.3.19), but Bitshift operations always return a 32-bit integer ([source](http://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109)

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    let val = inputValue >> 0;
    ```

  - Booleans:

    ```javascript
    let age = 0;

    // bad
    let hasAge = new Boolean(age);

    // good
    let hasAge = Boolean(age);

    // good
    let hasAge = !!age;
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='naming-conventions'>Naming Conventions</a>

  - Avoid single letter names. Be descriptive with your naming.

    ```javascript
    // bad
    function q () {
        // ...stuff...
    }

    // good
    function query () {
        // ..stuff..
    }
    ```

  - Use camelCase when naming objects, functions, and instances

    ```javascript
    // bad
    let OBJEcttsssss = {};
    let this_is_my_object = {};
    function c () {};
    let u = new user({
        name: 'Bob Parr'
    });

    // good
    let thisIsMyObject = {};
    function thisIsMyFunction () {};
    let user = new User({
        name: 'Bob Parr'
    });
    ```

  - Use PascalCase when naming constructors or classes

    ```javascript
    // bad
    function user (options) {
        this.name = options.name;
    }

    var bad = new user({
        name: 'nope'
    });

    // good

    class User {

        constructor (options) {
            this.name = options.name;
        }

    }

    function User (options) {
        this.name = options.name;
    }

    var good = new User({
        name: 'yup'
    });
    ```

  - Use a leading underscore `_` when naming private properties

    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';

    // good
    this._firstName = 'Panda';
    ```

  - When saving a reference to `this` use `self`. Prefer arrow function expressions or `bind` to replace the need for saving a reference to `this`. Stick to a single paradigm -- don't mix `this` and `self` in the same context.

    ```javascript
    // bad
    function () {
        let that = this;
        return function () {
            console.log(that);
        };
    }

    function () {
        let self = this;
        this.trait = 'Inconsistency';
        return function () {
            console.log(self);
        };
    }

    // good
    function () {
        let self = this;
        return function () {
            console.log(self);
        };
    }

    // better
    function () {
        return function () {
            console.log(this);
        }.bind(this);
    }

    // best
    function () {
        return () => console.log(this);
    }
    ```

  - Name your functions. This is helpful for stack traces. (You don't have to worry about this if you use function declarations as recommended.)

    ```javascript
    // bad
    let log = function (msg) {
        console.log(msg);
    };

    // good
    let log = function log (msg) {
        console.log(msg);
    };
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='accessors'>Accessors</a>

  - Accessor functions for properties are not required
  - If you do make accessor functions use getVal() and setVal('hello')

    ```javascript
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
    ```

  - If the property is a boolean, make the property name a "statement of fact" using a prefix like "is", "has", or "should"

    ```javascript
    // bad
    if (!dragon.age()) {
        return false;
    }

    // good
    if (!dragon.hasAge()) {
        return false;
    }
    ```

  - It's okay to create get() and set() functions, but be consistent.

    ```javascript
    class Jedi {
        constructor (options) {
            options || (options = {});
            var lightsaber = options.lightsaber || 'blue';
            this.set('lightsaber', lightsaber);
        }

        set (key, val) {
            this[key] = val;
        }

        get (key) {
            return this[key];
        }
    }
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='constructors'>Classes and Constructors</a>

  - (ES6) Use the [class syntax](https://github.com/lukehoban/es6features#classes) instead of constructor functions and prototypes

    ```javascript
        // old
        function Jedi (options) {
            ForceUser.call(this);
            this.name = options.name;
        }

        Jedi.prototype = Object.create(ForceUser);

        Jedi.prototype.jump = function jump () {
            this.jumping = true;
        }

        // preferred
        class Jedi : ForceUser {
            constructor (options) {
                this.name = options.name;
            }

            jump () {
                this.jumping = true;
            }
        }
    ````

  - Methods can return `this` to help with method chaining.

    ```javascript
    // bad
    class Jedi {
        jump () {
          this.jumping = true;
          return true;
        }

        setHeight (height) {
          this.height = height;
        }
    }

    let luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20) // => undefined

    // good
    class Jedi {
        jump () {
          this.jumping = true;
          return this;
        }

        setHeight (height) {
          this.height = height;
          return this;
        }
    }

    let luke = new Jedi();

    luke.jump()
        .setHeight(20);
    ```


  - It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

    ```javascript
    class Jedi {

        constructor (options) {
            options || (options = {});
            this.name = options.name || 'no name';
        }

        getName () {
            return this.name;
        }

        toString () {
            return 'Jedi - ' + this.getName();
        }
    }
    ```


  - (ES5) Assign methods to the prototype object, instead of overwriting the prototype with a new object. Overwriting the prototype makes inheritance impossible: by resetting the prototype you'll overwrite the base!

    ```javascript
    function Jedi () {
        console.log('new jedi');
    }

    // bad
    Jedi.prototype = {
        fight: function fight () {
            console.log('fighting');
        },

        block: function block () {
            console.log('blocking');
        }
    };

    // good
    Jedi.prototype.fight = function fight () {
        console.log('fighting');
    };

    Jedi.prototype.block = function block () {
        console.log('blocking');
    };
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='events'>Events</a>

  - When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```js
    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', (e, listingId) => /* do something with listingId */);
    ```

    prefer:

    ```js
    // good
    $(this).trigger('listingUpdated', { listingId : listing.id });

    ...

    $(this).on('listingUpdated', (e, listingId) => /* do something with listingId */);
    ```

  **[&#8593; Back to top](#TOC)**


## <a name='modules'>Modules</a>

  - Wrap the function expression in parentheses.
  - The module should start with a `;`. This ensures that if a malformed module forgets to include a final semicolon there aren't errors in production when the scripts get concatenated. [Explanation](https://github.com/airbnb/javascript/issues/44#issuecomment-13063933)
  - The file name should match the name of the single export. Casing should follow the same rules as the export -- e.g. a module that exports a constructor should be PascalCase.
  - Add a method called noConflict() that sets the exported module to the previous version and returns this one.
  - Always declare `'use strict';` at the top of the module.

    ```javascript
    // fancyInput/fancyInput.js

    ;(function (global, $) {
        'use strict';

        let previousFancyInput = global.FancyInput;

        function FancyInput (options) {
            this.options = options || {};
        }

        FancyInput.noConflict = function noConflict () {
            global.FancyInput = previousFancyInput;
            return FancyInput;
        };

        global.FancyInput = FancyInput;
    })(window, window.jQuery);
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='jquery'>jQuery</a>

  - Don't prefix jQuery object variables with a `$`.

    ```javascript
    // bad
    let $sidebar = $('.sidebar');

    // good
    let sidebar = $('.sidebar');
    ```

  - Cache jQuery lookups.

    ```javascript
    // bad
    function setSidebar () {
        $('.sidebar').hide();

        // ...stuff...

        $('.sidebar').css({
            'background-color': 'pink'
        });
    }

    // good
    function setSidebar () {
        let sidebar = $('.sidebar');
        sidebar.hide();

        // ...stuff...

        sidebar.css({
            'background-color': 'pink'
        });
    }
    ```

  - For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
  - Use `find` with scoped jQuery object queries.

    ```javascript
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    sidebar.find('ul').hide();
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='es5'>ECMAScript 5 Compatibility</a>

  - Refer to [Kangax](https://twitter.com/kangax/)'s ES5 [compatibility table](http://kangax.github.com/es5-compat-table/)

  **[&#8593; Back to top](#TOC)**


## <a name='testing'>Testing</a>

  - **Yup.**

    ```javascript
    function () {
        return true;
    }
    ```

    **[&#8593; Back to top](#TOC)**


## <a name='performance'>Performance</a>

  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)
  - Loading...

  **[&#8593; Back to top](#TOC)**


## <a name='resources'>Resources</a>


**Read This**

  - [Annotated ECMAScript 5.1](http://es5.github.com/)

**Other Styleguides**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
  - [jQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js/)

**Other Styles**

  - [Naming this in nested functions](https://gist.github.com/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52)
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript)

**Further Reading**

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer

**Books**

  - [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](http://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](http://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](http://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](http://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](http://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](http://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/)
  - [Third Party JavaScript](http://manning.com/vinegar/) - Ben Vinegar and Anton Kovalyov

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](http://weblog.bocoup.com/)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](http://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://net.tutsplus.com/?s=javascript)

  **[&#8593; Back to top](#TOC)**

## <a name='guide-guide'>The JavaScript Style Guide Guide</a>

  - [Reference](https://github.com/airbnb/javascript/wiki/The-JavaScript-Style-Guide-Guide)

## <a name='authors'>Contributors</a>

  - [View Contributors](https://github.com/airbnb/javascript/graphs/contributors)


## <a name='license'>License</a>

(The MIT License)

Copyright (c) 2012 Airbnb

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

**[&#8593; Back to top](#TOC)**

# };

