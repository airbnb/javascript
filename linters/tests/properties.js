/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#properties--dot
// eslint: dot-notation
(function() {
    const luke = {
        jedi: true,
        age: 28,
    };

    // bad
    const isJedi = luke['jedi'];
}());

(function() {
    const luke = {
        jedi: true,
        age: 28,
    };

    // good
    const isJedi = luke.jedi;
}());

// https://github.com/thenerdery/javascript-standards#properties--bracket
// eslint: (no known rule enforcing this exists)
(function() {
    const luke = {
        jedi: true,
        age: 28,
    };

    const prop = 'jedi';
    const isJedi = luke[prop];
}());
