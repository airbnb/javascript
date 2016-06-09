// https://github.com/thenerdery/javascript-standards#naming--camelCase
// eslint: camelcase
(function() {
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}
}());

(function() {
    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
}());

// https://github.com/thenerdery/javascript-standards#naming--PascalCase
// eslint: new-cap
(function() {
    // bad
    function user(options) {
        this.name = options.name;
    }

    const bad = new user({
        name: 'nope',
    });
}());

(function() {
    // good
    class User {
        constructor(options) {
            this.name = options.name;
        }
    }

    const good = new User({
        name: 'yup',
    });
}());

// https://github.com/thenerdery/javascript-standards#naming--leading-underscore
// eslint: ???
(function() {
    // bad
    function test() {
        this.__firstName__ = 'Panda';
        this.firstName_ = 'Panda';
    }
}());

(function() {
    // good
    function test() {
        this._firstName = 'Panda';
    }
}());

// https://github.com/thenerdery/javascript-standards#naming--self-this
// eslint: ???
(function() {
    // bad
    function foo() {
        const self = this;
        return function() {
            console.log(self);
        };
    }
}());

(function() {
    // bad
    function foo() {
        const that = this;
        return function() {
            console.log(that);
        };
    }
}());

(function() {
    // good
    function foo() {
        return () => {
            console.log(this);
        };
    }
}());
