// https://github.com/thenerdery/javascript-standards#functions--mutate-parameters
// eslint: no-param-reassign
(function() {
    // bad
    function foo(obj) {
        if (obj.meaningOfLife == null) {
            obj.meaningOfLife = 42;
        }
    }
}());

(function() {
    // good
    function foo(obj) {
        let meaningOfLife = obj.meaningOfLife;
        if (meaningOfLife == null) {
            meaningOfLife = 42;
        }
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--reassign-parameters
// eslint: no-param-reassign
(function() {
    // bad
    function foo(a) {
        a = 1;
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--default-parameters
// eslint: no-param-reassign
(function() {
    // really bad
    function signup(name) {
        // No! We shouldn't mutate function arguments.
        // Double bad: if opts is falsy it'll be set to an object which may
        // be what you want but it can introduce subtle bugs.
        name = name || 'Tony Stark';
    }
}());

(function() {
    // still bad
    function signup(name) {
        if (name == null) {
            name = 'Tony Stark';
        }
    }
}());

(function() {
    // good
    function signup(name = 'Tony Stark') {
        // ...
    }
}());

(function() {
    // good
    function signup({ name = 'Tony Stark' }) {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--default-side-effects
(function() {
    // bad
    let b = 0;

    function count(a = b++) {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--defaults-last
(function() {
    // bad
    function signup(name = 'Tony Stark', birthdate) {
        // ...
    }
}());

(function() {
    // good
    function signup(birthdate, name = 'Tony Stark') {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--too-many-parameters
// eslint: max-params
(function() {
    // bad
    function signup(birthdate, address, city, state, zip, name) {
        // ...
    }
}());

(function() {
    // good
    function signup({ birthdate, address, city, state, zip, name }) {
        // ...
    }
}());

(function() {
    // good
    // Pass an instance of a `UserInfo` object
    function signup(userInfo) {
        // ..
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--arguments-shadow
// eslint: prefer-rest-params
(function() {
    // bad
    function concatenateAll() {
        const args = Array.prototype.slice.call(arguments);
        return args.join('');
    }
}());

(function() {
    // good
    function concatenateAll(...args) {
        return args.join('');
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--in-blocks
// estlint: no-inner-declarations
(function() {
    const currentUser = null;

    // bad
    if (currentUser) {
        function test() {
            console.log('Nope.');
        }
    }
}());

(function() {
    const currentUser = null;

    // good
    let test;
    if (currentUser) {
        test = () => {
            console.log('Yup.');
        };
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--in-blocks
// estlint: no-loop-func
(function() {
    const currentUser = null;

    // bad
    for (let i = 0; i < 10; i++) {
        const test = function() {
            console.log('Nope.');
        };
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--constructor
// eslint: no-new-func
(function() {
    // bad
    const add = new Function('a', 'b', 'return a + b');
}());

// https://github.com/thenerdery/javascript-standards#functions--exit-early
(function() {
    function add(num1, num2) {
        if (num1 == null || num2 == null) {
            return false;
        }

        // ...
    };
}());

// https://github.com/thenerdery/javascript-standards#functions--iife
// eslint: wrap-iife
(function() {
    // bad
    const x = function() {
        return { y: 1 };
    }();
}());

(function() {
    // good
    (function() {
        console.log('Welcome to the Internet. Please follow me.');
    }());
}());
