// https://github.com/thenerdery/javascript-standards#destructuring--object
// eslint: ???
(function() {
    // bad
    function getFullName(user) {
        const firstName = user.firstName;
        const lastName = user.lastName;

        return `${firstName} ${lastName}`;
    }
}());

(function() {
    // good
    function getFullName(user) {
        const { firstName, lastName } = user;
        return `${firstName} ${lastName}`;
    }
}());

(function() {
    // good
    function getFullName({ firstName, lastName }) {
        return `${firstName} ${lastName}`;
    }
}());

// https://github.com/thenerdery/javascript-standards#destructuring--array
// eslint: ???
(function() {
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];
}());

(function() {
    const arr = [1, 2, 3, 4];

    // good
    const [first, second] = arr;
}());

// https://github.com/thenerdery/javascript-standards#destructuring--object-over-array
// eslint: ???
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
}());

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
}());

// https://github.com/thenerdery/javascript-standards#destructuring
// eslint: no-empty-pattern
(function() {
    // bad
    const arr = [1, 2, 3, 4];
    const [] = arr;
}());

(function() {
    // bad
    const obj = { a: 1, b: 2 };
    const {} = obj;
}());
