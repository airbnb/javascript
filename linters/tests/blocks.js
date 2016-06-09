// https://github.com/thenerdery/javascript-standards#blocks--braces
// eslint: curly
(function() {
    // bad
    const test = true;

    if (test)
        return false;
}());

(function() {
    // good
    const test = true;

    if (test) {
        return false;
    }
}());

// https://github.com/thenerdery/javascript-standards#blocks--cuddled-elses
// eslint: brace-style
(function() {
    // bad
    const test = true;
    const thing1 = () => {};
    const thing2 = () => {};

    if (test) {
        thing1();
    }
    else {
        thing2();
    }
}());

(function() {
    // good
    const test = true;
    const thing1 = () => {};
    const thing2 = () => {};

    if (test) {
        thing1();
    } else {
        thing2();
    }
}());

// https://github.com/thenerdery/javascript-standards#blocks
// eslint: guard-for-in
(function() {
    // bad
    const obj = { a: 1, b: 2 };
    for (const i in obj) {
        console.log(obj[i]);
    }
}());

(function() {
    // good
    const obj = { a: 1, b: 2 };
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(obj[i]);
        }
    }
}());
