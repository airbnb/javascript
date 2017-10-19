var decomment = require('decomment');
var fs = require('fs');

var eslintrcFile = fs.readFileSync(__dirname + '/.eslintrc', "utf8");
var decommentedEslintrcFile = decomment(eslintrcFile);
var eslintrc = JSON.parse(decommentedEslintrcFile);

module.exports = {
    rules: eslintrc.rules
};