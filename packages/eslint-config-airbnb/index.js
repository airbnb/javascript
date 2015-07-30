var path = require('path');
var stripComments = require('strip-json-comments');
var fs = require('fs');

// you could do this all at once if you wanted to look cool
var filename = path.join(__dirname, '.eslintrc');
var data = fs.readFileSync(filename, {encoding: 'utf-8'});
var dataWithoutComments = stripComments(data);
var parsed = JSON.parse(dataWithoutComments);

module.exports = parsed;
