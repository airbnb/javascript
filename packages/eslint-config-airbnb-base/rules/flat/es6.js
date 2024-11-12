const es6 = require('../es6');
const globals = require('globals');

module.exports = {
  languageOptions: {
    globals: {
      ...globals.es2015,
    },
    parserOptions: es6.parserOptions,
  },
  rules: es6.rules,
};
