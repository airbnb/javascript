'use strict';

var virtruLintConfig = require('./lib/util').getEnv();
module.exports = require('./lib/' + (virtruLintConfig.repoEnvironment || process.env.REPO_ENVIRONMENT || 'dev'));
