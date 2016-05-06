/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#whitespace--spaces
(function() {
    // bad
    function test() {
      console.log('test');
    }
})();

(function() {
    // good
    function test() {
        console.log('test');
    }
})();

// https://github.com/thenerdery/javascript-standards#whitespace--before-blocks
(function() {
    // bad
    function test(){
        console.log('test');
    }
})();

(function() {
    // good
    function test() {
        console.log('test');
    }
})();

(function() {
    const dog = { set: () => {} };

    // bad
    dog.set('attr',{
        age: '1 year',
        breed: 'Bernese Mountain Dog',
    });
})();

(function() {
    const dog = { set: () => {} };

    // good
    dog.set('attr', {
        age: '1 year',
        breed: 'Bernese Mountain Dog',
    });
})();

// https://github.com/thenerdery/javascript-standards#whitespace--around-keywords
(function() {
    const isJedi = true;
    const fight = () => {};

    // bad
    if(isJedi) {
        fight ();
    }
})();

(function() {
    const isJedi = true;
    const fight = () => {};

    // good
    if (isJedi) {
        fight();
    }
})();

(function() {
    // bad
    function fight () {
        console.log ('Swooosh!');
    }
})();

(function() {
    // good
    function fight() {
        console.log('Swooosh!');
    }
})();

// https://github.com/thenerdery/javascript-standards#whitespace--infix-ops
(function() {
    const y = 0;

    // bad
    const x=y+5;
})();

(function() {
    const y = 0;

    // good
    const x = y + 5;
})();

// https://github.com/thenerdery/javascript-standards#whitespace--chains
(function() {
    const $ = null;
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();
})();

(function() {
    const $ = null;
    // bad
    $('#items').
        find('.selected').
        highlight().
        end().
        find('.open').
        updateCount();
})();

(function() {
    // good
    $('#items')
        .find('.selected')
        .highlight()
        .end()
        .find('.open')
        .updateCount();
})();

(function() {
    const stage = {
        selectAll: () => {
            return {
                data: () => {}
            };
        },
    };

    // good
    const data = data;
    const leds = stage.selectAll('.led').data(data);
})();

// https://github.com/thenerdery/javascript-standards#whitespace--after-blocks
(function() {
    const foo = true;
    const bar = true;
    const baz = true;

    // bad
    if (foo) {
        return bar;
    }
    return baz;
})();

(function() {
    const foo = true;
    const bar = true;
    const baz = true;

    // good
    if (foo) {
        return bar;
    }

    return baz;
})();

(function() {
    // bad
    const obj = {
        foo() {
        },
        bar() {
        },
    };
    return obj;
})();

(function() {
    // good
    const obj = {
        foo() {
        },

        bar() {
        },
    };

    return obj;
})();

// https://github.com/thenerdery/javascript-standards#whitespace--padded-blocks
(function() {
    // bad
    function bar() {

        console.log(foo);

    }
})();

(function() {
    const baz = true;
    const qux = true;
    const foo = true;

    // also bad
    if (baz) {

        console.log(qux);
    } else {
        console.log(foo);

    }
})();

(function() {
    // good
    function bar() {
        console.log(foo);
    }
})();

(function() {
    const baz = true;
    const qux = true;
    const foo = true;

    // good
    if (baz) {
        console.log(qux);
    } else {
        console.log(foo);
    }
})();

// https://github.com/thenerdery/javascript-standards#whitespace--in-parens
(function() {
    // bad
    function bar( foo ) {
        return foo;
    }
})();

(function() {
    // good
    function bar(foo) {
        return foo;
    }
})();

(function() {
    const foo = true;

    // bad
    if ( foo ) {
        console.log(foo);
    }
})();

(function() {
    const foo = true;

    // good
    if (foo) {
        console.log(foo);
    }
})();

// https://github.com/thenerdery/javascript-standards#whitespace--in-brackets
(function() {
    // bad
    const foo = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);
})();

(function() {
    // good
    const foo = [1, 2, 3];
    console.log(foo[0]);
})();

// https://github.com/thenerdery/javascript-standards#whitespace--in-braces
(function() {
    // bad
    const foo = {clark: 'kent'};
})();

(function() {
    // good
    const foo = { clark: 'kent' };
})();

// https://github.com/thenerdery/javascript-standards#whitespace--max-len
(function() {
    const $ = null;
    // bad
    $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));
})();

(function() {
    // good
    const foo = 'Whatever national crop flips the window. The cartoon reverts within the screw. ' +
      'Whatever wizard constrains a helpful ally. The counterpart ascends!';
})();

(function() {
    const $ = null;
    // good
    $.ajax({
        method: 'POST',
        url: 'https://airbnb.com/',
        data: { name: 'John' },
    })
        .done(() => console.log('Congratulations!'))
        .fail(() => console.log('You have failed this city.'));
})();

// https://github.com/thenerdery/javascript-standards#whitespace--newline-at-end
