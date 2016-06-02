// https://github.com/thenerdery/javascript-standards#blocks--braces
// eslint: curly
(function() {
    const test = true;

    // bad
    if (test)
        return false;
}());

(function() {
    const test = true;

    // good
    if (test) {
        return false;
    }
}());

// https://github.com/thenerdery/javascript-standards#blocks--cuddled-elses
// eslint: brace-style
(function() {
    const test = true;
    const thing1 = () => {};
    const thing2 = () => {};

    // bad
    if (test) {
        thing1();
    }
    else {
        thing2();
    }
}());

(function() {
    const test = true;
    const thing1 = () => {};
    const thing2 = () => {};

    // good
    if (test) {
        thing1();
    } else {
        thing2();
    }
}());

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
