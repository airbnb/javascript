/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#semicolons--required
// eslint: semi
(function() {
    // bad
    const name = 'Skywalker'
    return name
}());

(function() {
    // good
    const name = 'Skywalker';
    return name;
}());
