'use strict';

var virtruLintConfig = require('./util').getEnv();
module.exports = require('./ci/' + (virtruLintConfig.repoType || process.env.REPO_TYPE || 'frontend'));
