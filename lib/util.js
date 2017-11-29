'use strict';

const fs = require('fs');
const path = require('path');

let virtruLint = undefined;

/**
 * This function pulls the locally applied elsint config from the
 * package.json file. It looks for an element named 'virtruLint'
 * that takes the form:
 *
 * ```
 * "virtruLint": {
 *   "repoEnvironment": "ci|dev",
 *   "repoType": "frontend|backend"
 * }
 * ```
 * This maps to the environment variables used to control the configurations.
 * These configurations will take lower precendence than the environment
 * variables.
 *
 * @returns {*} - The configuration, if it exists, or an empty object
 */
module.exports.getEnv = function() {
  if (!virtruLint) {
    virtruLint = {};

    var packageJsonPath = path.resolve(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      let packageJson = require(packageJsonPath);
      virtruLint = packageJson.virtruLint || packageJson.virtru && packageJson.virtru.lint;
      virtruLint = virtruLint || {};
    }
  }

  return virtruLint;
};
