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
    // bad
    function signup(name) {
        name = name || 'Tony Stark';
    }
}());

(function() {
    // bad
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
// eslint: ???
(function() {
    // bad
    let b = 0;

    function count(a = b++) {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#functions--defaults-last
// eslint: ???
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

// https://github.com/thenerdery/javascript-standards#functions--constructor
// eslint: no-new-func
(function() {
    // bad
    const add = new Function('a', 'b', 'return a + b');
}());

// https://github.com/thenerdery/javascript-standards#functions--exit-early
// eslint: ???
(function() {
    // good
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

// eslint: no-unreachable
(function() {
    // bad
    function foo() {
        return true;
        console.log('lint');
    }
}());

(function() {
    // good
    function foo() {
        console.log('lint');
        return true;
    }
}());
