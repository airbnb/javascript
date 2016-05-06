/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#destructuring--object
(function() {
    // bad
    function getFullName(user) {
        const firstName = user.firstName;
        const lastName = user.lastName;

        return `${firstName} ${lastName}`;
    }
})();

(function() {
    // good
    function getFullName(user) {
        const { firstName, lastName } = user;
        return `${firstName} ${lastName}`;
    }
})();

(function() {
    // good
    function getFullName({ firstName, lastName }) {
        return `${firstName} ${lastName}`;
    }
})();

// https://github.com/thenerdery/javascript-standards#destructuring--array
(function() {
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];
})();

(function() {
    const arr = [1, 2, 3, 4];

    // good
    const [first, second] = arr;
})();

// https://github.com/thenerdery/javascript-standards#destructuring--object-over-array
(function() {
    // bad
    function processInput(input) {
        const left = 1;
        const right = 2;
        const top = 3;
        const bottom = 4;

        // then a miracle occurs
        return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const input = null;
    const [left, __, top] = processInput(input);
})();

(function() {
    // good
    function processInput(input) {
        const left = 1;
        const right = 2;
        const top = 3;
        const bottom = 4;

        // then a miracle occurs
        return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const input = null;
    const { left, right } = processInput(input);
})();
