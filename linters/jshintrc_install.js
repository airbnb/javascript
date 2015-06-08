'use strict';


var fs = require('fs');

// copies the jshintrc file to the root of the parent module's dir
fs.writeFileSync('../../.jshintrc', fs.readFileSync('./linters/jshintrc'));
