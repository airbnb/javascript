// https://github.com/thenerdery/javascript-standards#arrows--use-them
// eslint: prefer-arrow-callback
(function() {
    // bad
    [1, 2, 3].map(function(x) {
        const y = x + 1;
        return x * y;
    });
}());

(function() {
    // good
    [1, 2, 3].map(x => {
        const y = x + 1;
        return x * y;
    });
}());

// https://github.com/thenerdery/javascript-standards#arrows--one-arg-parens
// eslint: arrow-parens
(function() {
    // bad
    [1, 2, 3].map((x) => x * x);
}());

(function() {
    // good
    [1, 2, 3].map(x => x * x);
}());
