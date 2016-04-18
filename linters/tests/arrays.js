///////////////////////////////////////////////////////////////////////
// https://github.com/thenerdery/javascript-standards#arrays--literals
///////////////////////////////////////////////////////////////////////

(function() {
    // bad
    const items = new Array();
})();

(function() {
    // good
    const items = [];
})();

///////////////////////////////////////////////////////////////////////
// https://github.com/thenerdery/javascript-standards#arrays--push
///////////////////////////////////////////////////////////////////////

(function() {
    // bad
    const someStack = [];
    someStack[someStack.length] = 'abracadabra';
})();

(function() {
    // good
    const someStack = [];
    someStack.push('abracadabra');
})();

///////////////////////////////////////////////////////////////////////
// https://github.com/thenerdery/javascript-standards#arrays--spreads
///////////////////////////////////////////////////////////////////////

(function() {
    // bad
    const items = [1, 2, 3];
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
        itemsCopy[i] = items[i];
    }
})();

(function() {
    // good
    const items = [1, 2, 3];
    const itemsCopy = items.slice()
})();

(function() {
    // good
    const items = [1, 2, 3];
    const itemsCopy = [...items];
})();

///////////////////////////////////////////////////////////////////////
// https://github.com/thenerdery/javascript-standards#arrays--from
///////////////////////////////////////////////////////////////////////

(function() {
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);
})();

///////////////////////////////////////////////////////////////////////
// https://github.com/thenerdery/javascript-standards#arrays--callback-return
///////////////////////////////////////////////////////////////////////

(function() {
    // bad
    [1, 2, 3].map(x => {
        const y = x + 1;
    });
})();

(function() {
    // good
    [1, 2, 3].map(x => {
        const y = x + 1;
        return x * y;
    });
})();

(function() {
    // good
    [1, 2, 3].map(x => x + 1);
})();
