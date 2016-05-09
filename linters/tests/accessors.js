// https://github.com/thenerdery/javascript-standards#accessors--use-them
(function() {
    // bad
    class Dragon {
        _age = 0;

        getAge() {
            return this._age;
        }

        setAge(value) {
            this._age = value;
        }
    }

    const dragon = new Dragon();
    dragon.setAge(25);
    console.log(dragon.getAge()); // 25
}());

(function() {
    // good
    class Dragon {
        _age = 0;

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }
    }

    const dragon = new Dragon();
    dragon.age = 25;
    console.log(dragon.age); // 25
}());

// https://github.com/thenerdery/javascript-standards#accessors--use-them
(function() {
    // good
    class Dragon {
        _age = 0;

        get age() {
            if (this.isBirthday()) {
                this._age++;
            }

            return this._age;
        }
    }
}());

(function() {
    // good
    class Dragon {
        _age = 0;

        get age() {
            return this._age;
        }
    }
}());
