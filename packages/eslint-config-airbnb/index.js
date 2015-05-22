var resolve = require('resolve');
var stripComments = require('strip-json-comments');
var fs = require('fs');

// you could do this all at once if you wanted to look cool
var filename = resolve.sync('airbnb-style/linters/.eslintrc');
var data = fs.readFileSync(filename, {encoding: 'utf-8'});
var dataWithoutComments = stripComments(data);
var parsed = JSON.parse(dataWithoutComments);

module.exports = parsed;
