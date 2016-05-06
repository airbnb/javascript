/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#variables--prefer-const
(function() {
    // bad
    var a = 1;
    var b = 2;
})();

(function() {
    // good
    const a = 1;
    const b = 2;
})();

// https://github.com/thenerdery/javascript-standards#variables--disallow-var
(function() {
    // bad
    var count = 1;
    count += 1;
})();

(function() {
    // good, use the let.
    let count = 1;
    count += 1;
})();

// https://github.com/thenerdery/javascript-standards#variables--one-const
(function() {
    const getItems = () => {};

    // bad
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';
})();

(function() {
    const getItems = () => {};

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
})();

// https://github.com/thenerdery/javascript-standards#variables--const-let-group
(function() {
    const getItems = () => {};

    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;
})();

(function() {
    const getItems = () => {};

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;
})();

(function() {
    const getItems = () => {};

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
})();

// https://github.com/thenerdery/javascript-standards#variables--define-where-used
(function() {
    const getName = () => {};
    // bad - unnecessary function call
    function checkName(hasName) {
        const name = getName();

        if (hasName === 'test') {
            return false;
        }

        if (name === 'test') {
            this.setName('');
            return false;
        }

        return name;
    }
})();

(function() {
    const getName = () => {};
    // good
    function checkName(hasName) {
        if (hasName === 'test') {
            return false;
        }

        const name = getName();

        if (name === 'test') {
            this.setName('');
            return false;
        }

        return name;
    }
})();

// https://github.com/thenerdery/javascript-standards#variables--always-declare
(function() {
    class SuperPower {};

    // bad
    superPower = new SuperPower();
})();

(function() {
    class SuperPower {};

    // good
    const superPower = new SuperPower();
})();
