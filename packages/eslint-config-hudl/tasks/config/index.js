// Pull basic config settings from package.json
// Could also check an env variable for override or programmatic creation

var path = require('path');

var configKey = 'tasksConfig';

var packageJson = require(path.resolve('package.json'));

var config = packageJson[configKey];

if (!config) {
  throw new Error('Gulp task configuration not found. Looking for `' + configKey + '` property in package.json.');
}

module.exports = config;
