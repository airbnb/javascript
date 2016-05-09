// https://github.com/thenerdery/javascript-standards#comments--multiline
(function() {
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @method make
    // @public
    // @param {String} tag
    // @return {Element} element
    function make(tag) {
        // ...
        return 'element';
    }
}());

(function() {
    // good
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @method make
     * @public
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {
        // ...
        return 'element';
    }
}());

// https://github.com/thenerdery/javascript-standards#comments--singleline
(function() {
    // bad
    const active = true;  // is current tab
}());

(function() {
    // good
    // is current tab
    const active = true;
}());

(function() {
    // bad
    function getType() {
        console.log('fetching type...');
        // set the default type to 'no type'
        const type = this._type || 'no type';

        return type;
    }
}());

(function() {
    // good
    function getType() {
        console.log('fetching type...');

        // set the default type to 'no type'
        const type = this._type || 'no type';

        return type;
    }
}());

(function() {
    // also good
    function getType() {
        // set the default type to 'no type'
        const type = this._type || 'no type';

        return type;
    }
}());
