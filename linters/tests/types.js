/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#types--assign-consistent
// eslint: (no known rule enforcing this exists)
(function() {
    // bad
    let count = 1;
    count = 'Ben Kenobi';
}());

(function() {
    // good
    let count = 1;
    count = 2;
}());

// https://github.com/thenerdery/javascript-standards#types--return-consistent
// eslint: (no known rule enforcing this exists)
(function() {
    // bad
    function pressYourLuck(bigMoney) {
        if (bigMoney) {
            return 'No whammies!';
        }

        return false;
    };
}());

// https://github.com/thenerdery/javascript-standards#types--coercion-strings
// eslint: (no known rule enforcing this exists)
(function() {
    function test() {
        this.reviewScore = 9;

        // bad
        const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()
    }
}());

(function() {
    function test() {
        this.reviewScore = 9;

        // bad
        const totalScore = this.reviewScore.toString(); // isn't guaranteed to return a string
    }
}());

(function() {
    function test() {
        this.reviewScore = 9;

        // good
        const totalScore = String(this.reviewScore);
    }
}());

// https://github.com/thenerdery/javascript-standards#types--coercion-numbers
// eslint: no-implicit-coercion
// eslint: radix
(function() {
    const inputValue = '4';

    // bad
    const val = new Number(inputValue);
}());

(function() {
    const inputValue = '4';

    // bad
    const val = +inputValue;
}());

(function() {
    const inputValue = '4';

    // bad
    const val = inputValue >> 0;
}());

(function() {
    const inputValue = '4';

    // bad
    const val = parseInt(inputValue);
}());

(function() {
    const inputValue = '4';

    // good
    const val = Number(inputValue);
}());

(function() {
    const inputValue = '4';

    // good
    const val = parseInt(inputValue, 10);
}());


// https://github.com/thenerdery/javascript-standards#types--coercion-booleans
// eslint: no-implicit-coercion
(function() {
    const age = 0;

    // bad
    const hasAge = new Boolean(age);
}());

(function() {
    const age = 0;

    // bad
    const hasAge = !!age;
}());

(function() {
    const age = 0;

    // good
    const hasAge = Boolean(age);
}());

// https://github.com/thenerdery/javascript-standards#types--comment-deviations
// eslint: (no known rule enforcing this exists)
(function() {
    const inputValue = '4';

    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
}());

// https://github.com/thenerdery/javascript-standards#types--exceptions
// eslint: (no known rule enforcing this exists)
(function() {
    function divide(numerator, denominator) {
        if (denominator === 0) {
            // bad
            throw 'string exceptions are harder to handle';
        }
    }
}());

(function() {
    function divide(numerator, denominator) {
        if (denominator === 0) {
            // good
            throw new RangeError('cannot divide by 0');
        }
    }
}());

// eslint: no-new-wrappers
(function() {
    // bad
    const stringObject = new String('Hello world');
    const numberObject = new Number(33);
    const booleanObject = new Boolean(false);
}());

(function() {
    // good
    const stringObject = String('Hello world');
    const numberObject = Number(33);
    const booleanObject = Boolean(false);
}());
