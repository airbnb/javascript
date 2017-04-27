/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#strings--quotes
// eslint: quotes
(function() {
    // bad
    const name = "Capt. Janeway";
}());

(function() {
    // good
    const name = 'Capt. Janeway';
}());

// https://github.com/thenerdery/javascript-standards#strings--line-length
// eslint: max-len
// eslint: no-multi-str
(function() {
    // bad
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
}());

(function() {
    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';
}());

(function() {
    // good
    const errorMessage = 'This is a super long error that was thrown because ' +
        'of Batman. When you stop to think about how Batman had anything to do ' +
        'with this, you would get nowhere fast.';
}());

// https://github.com/thenerdery/javascript-standards#strings--template-literals
// eslint: prefer-template
// eslint: template-curly-spacing
(function() {
    // bad
    function sayHi(name) {
        return 'How are you, ' + name + '?';
    }
}());

(function() {
    // bad
    function sayHi(name) {
        return ['How are you, ', name, '?'].join();
    }
}());

(function() {
    // bad
    function sayHi(name) {
        return `How are you, ${ name }?`;
    }
}());

(function() {
    // good
    function sayHi(name) {
        return `How are you, ${name}?`;
    }
}());

// https://github.com/thenerdery/javascript-standards#strings--eval
// eslint: no-eval
(function() {
    eval('const youHaveBeenHacked = true;');
}());
