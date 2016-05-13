// https://github.com/thenerdery/javascript-standards#objects--no-new
// eslint: no-new-object
(function() {
    // bad
    const item = new Object();
}());

(function() {
    // good
    const item = {};
}());

// https://github.com/thenerdery/javascript-standards#objects--reserved-words
// eslint: quote-props
(function() {
    // bad
    const superman = {
        class: 'alien',
    };
}());

(function() {
    // bad
    const superman = {
        klass: 'alien',
    };
}());

(function() {
    // good
    const superman = {
        type: 'alien',
    };
}());

// https://github.com/thenerdery/javascript-standards#objects--computed-properties
// eslint: ???
(function() {
    function getKey(k) {
        return `a key named ${k}`;
    }

    // bad
    const obj = {
        id: 5,
        name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;
}());

(function() {
    function getKey(k) {
        return `a key named ${k}`;
    }

    // good
    const obj = {
        id: 5,
        name: 'San Francisco',
        [getKey('enabled')]: true,
    };
}());

// https://github.com/thenerdery/javascript-standards#objects--shorthand
// eslint: object-shorthand
(function() {
    // bad
    const atom = {
        value: 1,

        addValue: function(value) {
            return atom.value + value;
        },
    };
}());

(function() {
    // good
    const atom = {
        value: 1,

        addValue(value) {
            return atom.value + value;
        },
    };
}());

// https://github.com/thenerdery/javascript-standards#objects--concise
// eslint: object-shorthand
(function() {
    // bad
    function makePoint(x, y) {
        return { x: x, y: y };
    }
}());

(function() {
    // good
    function makePoint(x, y) {
        return { x, y };
    }
}());

// https://github.com/thenerdery/javascript-standards#objects--grouped-shorthand
// eslint: ???
(function() {
    function makePoint(x, y) {
        return {
            x,
            y,
            color: 'blue',
            opacity: 0.5
        };
    }
}());


// https://github.com/thenerdery/javascript-standards#objects--quoted-props
// eslint: quote-props
(function() {
    // bad
    const bad = {
        'foo': 3,
        'bar': 4,
        'data-blah': 5,
    };
}());

(function() {
    // good
    const good = {
        foo: 3,
        bar: 4,
        'data-blah': 5,
    };
}());
