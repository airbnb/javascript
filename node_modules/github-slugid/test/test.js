var slug = require('../');
var should = require('should');

var MATCHES = {
    'hello': 'hello',
    'hello world': 'hello-world',
    '!weird + id/for headings': 'weird--idfor-heading',
    '您好': '您好',
    'I ♥ you': 'i--you',
    'a > b': 'a--b',
    'Schöner Titel läßt grüßen!? Bel été !': 'schöner-titel-läßt-grüßen-bel-été-'
}



describe('slug', function () {
    for (var value in MATCHES) {
        var expected = MATCHES[value];

        it('should handle '+ JSON.stringify(value), function() {
            slug(value).should.equal(expected);
        });

        it('should handle '+ JSON.stringify(expected), function() {
            slug(expected).should.equal(expected);
        });
    }
});

