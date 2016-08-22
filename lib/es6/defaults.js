'use strict';

let defaults = require('../defaults');
let es6Defaults = Object.assign({}, defaults, { extends: 'airbnb-base' });
Object.assign(es6Defaults.rules, {
  'prefer-arrow-callback': ['error', {
    allowNamedFunctions: true,
    allowUnboundThis: true,
  }],

  'prefer-const': ['error', {
    destructuring: 'all',
    ignoreReadBeforeAssign: true,
  }],
});

module.exports = es6Defaults;
