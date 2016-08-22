'use strict';

var virtruLintConfig = require('./lib/util').getEnv();
module.exports = require('./lib/es6/' + (virtruLintConfig.repoEnvironment || process.env.REPO_ENVIRONMENT || 'ci'));
