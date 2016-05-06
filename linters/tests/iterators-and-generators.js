/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#iterators--nope
(function() {
    const numbers = [1, 2, 3, 4, 5];

    // bad
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }

    sum === 15;
})();

(function() {
    const numbers = [1, 2, 3, 4, 5];

    // good
    let sum = 0;
    numbers.forEach(num => sum += num);
    sum === 15;
})();

(function() {
    const numbers = [1, 2, 3, 4, 5];

    // best (use the functional force)
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;
})();
