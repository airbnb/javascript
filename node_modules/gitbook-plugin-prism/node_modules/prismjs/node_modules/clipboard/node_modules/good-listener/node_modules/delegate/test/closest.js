var closest = require('../src/closest');

describe('closest', function() {
    before(function() {
        var html = '<div id="a">' +
                        '<div id="b">' +
                            '<div id="c"></div>' +
                        '</div>' +
                    '</div>';

        document.body.innerHTML += html;

        global.a = document.querySelector('#a');
        global.b = document.querySelector('#b');
        global.c = document.querySelector('#c');
    });

    after(function() {
        document.body.innerHTML = '';
    });

    it('should return the closest parent based on the selector', function() {
        assert.ok(closest(global.c, '#b'), global.b);
        assert.ok(closest(global.c, '#a'), global.a);
        assert.ok(closest(global.b, '#a'), global.a);
    });

    it('should return itself if the same selector is passed', function() {
        assert.ok(closest(document.body, 'body'), document.body);
    });

    it('should not throw on elements without matches()', function() {
        var fakeElement = {
            nodeType: -1, // anything but DOCUMENT_NODE_TYPE
            parentNode: null,
            matches: undefined // undefined to emulate Elements without this function
        };

        try {
            closest(fakeElement, '#a')
        } catch (err) {
            assert.fail();
        }
    });
});
