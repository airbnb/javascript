// Pull basic config settings from package.json
// Could also check an env variable for override or programmatic creation

const path = require('path');

const configKey = 'tasksConfig';

const packageJson = require(path.resolve('package.json'));

const config = packageJson[configKey];

if (!config) {
  throw new Error('Gulp task configuration not found. Looking for `' + configKey + '` property in package.json.');
}

module.exports = config;
