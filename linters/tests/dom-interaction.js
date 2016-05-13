// https://github.com/thenerdery/javascript-standards#dom--dollar-prefix
// eslint: ???
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
