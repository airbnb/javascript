const globals = require('globals');
const node = require('../node');

module.exports = {
  languageOptions: {
    globals: {
      ...globals.es2015,
    }
  },
  rules: node.rules,
};
