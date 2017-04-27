/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#dom--dollar-prefix
// eslint: (no known rule enforcing this exists)
(function() {
    const $ = null;
    // bad
    const body = $(document.body);
}());

(function() {
    const $ = null;
    // good
    const $body = $(document.body);
}());
