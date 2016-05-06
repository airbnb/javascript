/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#properties--dot
(function() {
    const luke = {
        jedi: true,
        age: 28,
    };

    // bad
    const isJedi = luke['jedi'];
})();

(function() {
    const luke = {
        jedi: true,
        age: 28,
    };

    // good
    const isJedi = luke.jedi;
})();

// https://github.com/thenerdery/javascript-standards#properties--bracket
(function() {
    const luke = {
        jedi: true,
        age: 28,
    };

    const prop = 'jedi';
    const isJedi = luke[prop];
})();
