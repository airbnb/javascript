'use strict';

module.exports = {
  extends: 'lint-trap/lib/defaults',

  'ecmaFeatures': {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'defaultParams': true,
    'destructuring': true,
    'forOf': true,
    'generators': false,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralDuplicateProperties': false,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'spread': true,
    'superInFunctions': true,
    'templateStrings': true,
    //'jsx': true
  }
};
