// https://github.com/thenerdery/javascript-standards#comparison--eqeqeq
// eslint: eqeqeq
(function() {
    // bad
    const dragonball = 'z';

    if (dragonball == 'z') {
        // ...
    }
}());

(function() {
    // good
    const dragonball = 'z';

    if (dragonball === 'z') {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#comparison--eqeq-null
// eslint: no-undefined
(function() {
    // bad
    const dragonball = 'z';

    if (dragonball === null || dragonball === undefined) {
        // ...
    }
}());

(function() {
    // good
    const dragonball = 'z';

    if (dragonball == null) {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#comparison--no-shortcuts
(function() {
    // bad
    const name = null;

    if (name) {
        // ...
    }
}());

(function() {
    // good
    const name = null;

    if (name != null) {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#comparison--shortcuts-boolean
(function() {
    // good
    const isValid = true;

    if (isValid) {
        // ...
    }
}());

// https://github.com/thenerdery/javascript-standards#comparison--switch-blocks
// eslint: no-case-declarations
(function() {
    // bad
    const number = 1;

    switch (number) {
        case 1:
            const x = 1;
            break;
        case 2:
            const y = 2;
            break;
        default:
            const z = 3;
    }
}());

(function() {
    // good
    const number = 1;

    switch (number) {
        case 1: {
            const x = 1;
            break;
        }
        case 2: {
            const y = 2;
            break;
        }
        default: {
            const z = 3;
        }
    }
}());

// https://github.com/thenerdery/javascript-standards#comparison--nested-ternaries
// eslint: no-nested-ternary
(function() {
    // bad
    const maybe1 = null;
    const maybe2 = null;
    const value1 = null;
    const value2 = null;

    const foo = maybe1 > maybe2
        ? 'bar'
        : value1 > value2 ? 'baz' : null;
}());

(function() {
    // good
    const maybe1 = null;
    const maybe2 = null;
    const value1 = null;
    const value2 = null;

    const maybeNull = value1 > value2 ? 'baz' : null;

    const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
}());
