// https://github.com/thenerdery/javascript-standards#iterators--nope
// eslint: ???
(function() {
    // bad
    const numbers = [1, 2, 3, 4, 5];

    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }

    sum === 15;
}());

(function() {
    // good
    const numbers = [1, 2, 3, 4, 5];

    let sum = 0;
    numbers.forEach(num => sum += num);
    sum === 15;
}());

(function() {
    // best (use the functional force)
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;
}());
