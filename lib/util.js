'use strict';

const fs = require('fs');
const path = require('path');

var virtruLint = undefined;

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
    try {

      var packageJsonPath = path.resolve(process.cwd(), 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        let packageJson = require(packageJsonPath);
        if (packageJson && packageJson.virtruLint) {
          virtruLint = packageJson.virtruLint;
        }
      }

    } catch (err) {
      /* do nothing */
    }
  }

  return virtruLint;
};