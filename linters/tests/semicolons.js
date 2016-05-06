/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#semicolons--required
(function() {
    // bad
    const name = 'Skywalker'
    return name
})();

(function() {
    // good
    const name = 'Skywalker';
    return name;
})();
