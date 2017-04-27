// https://github.com/thenerdery/javascript-standards#variables--prefer-const
// eslint: prefer-const
// eslint: no-const-assign
(function() {
    // bad
    let a = 1;
    let b = 2;
}());

(function() {
    // good
    const a = 1;
    const b = 2;
}());

(function() {
    // bad
    const a = 1;
    a = 2;
}());

// https://github.com/thenerdery/javascript-standards#variables--disallow-var
// eslint: no-var
(function() {
    // bad
    var count = 1;
    count += 1;
}());

(function() {
    // good, use the let.
    let count = 1;
    count += 1;
}());

// https://github.com/thenerdery/javascript-standards#variables--one-const
// eslint: one-var
(function() {
    const getItems = () => {};

    // bad
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';
}());

(function() {
    const getItems = () => {};

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
}());

// https://github.com/thenerdery/javascript-standards#variables--const-let-group
// eslint: (no known rule enforcing this exists)
(function() {
    const getItems = () => {};

    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;
}());

(function() {
    const getItems = () => {};

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;
}());

(function() {
    const getItems = () => {};

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
}());

// https://github.com/thenerdery/javascript-standards#variables--define-where-used
// eslint: (no known rule enforcing this exists)
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
}());

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
}());

// https://github.com/thenerdery/javascript-standards#variables--always-declare
// eslint: no-undef
(function() {
    class SuperPower {};

    // bad
    superPower = new SuperPower();
}());

(function() {
    class SuperPower {};

    // good
    const superPower = new SuperPower();
}());

// eslint: no-use-before-define
(function() {
	// bad
	alert(foo);
	const foo = 1;
}());

// eslint: no-global-assign
(function() {
    window = {};
}());

// https://github.com/thenerdery/javascript-standards#variables--no-chain-assignment
// eslint: no-multi-assign
(function() {
    // bad
    (function example() {
        // JavaScript interprets this as
        // let a = ( b = ( c = 1 ) );
        // The let keyword only applies to variable a; variables b and c become
        // global variables.
        let a = b = c = 1;
    }());

    console.log(a); // undefined
    console.log(b); // 1
    console.log(c); // 1

    // good
    (function example() {
        let a = 1;
        let b = a;
        let c = a;
    }());

    console.log(a); // undefined
    console.log(b); // undefined
    console.log(c); // undefined
}());


// eslint: no-unused-vars
(function() {
	// bad
	const a = 1;

}());
