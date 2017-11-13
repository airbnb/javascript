/**
 * Manual tests for overriding ESLint rules.
 */

const obj = {
    a: 1,
    b: 2,
    myFn: function () {
        return true;
    },
};

const _obj_ = obj;

/**
 * This is a
 * multi-line comment
 * outside a function.
 */
function foo() {
    // This is a
    // multi-line comment
    // inside a function.
    return 42;
}

/* eslint-disable indent */
const ternary = _obj_.a > _obj_.b
              ? 'bar'
              : _obj_.myFn()
              ? 'baz'
              : null;
/* eslint-enable indent */

function bar(baz) {
    /* eslint-disable indent, space-in-parens */
    return ( baz()
           ? 'okay'
           : baz() === 'aardvark'
           ? 'never'
           : 'also never'
           );
    /* eslint-enable indent, space-in-parens */
}

const baz = function () {
    return 24;
};

module.exports = {
    obj,
    foo,
    bar,
    baz,
    ternary,
};
