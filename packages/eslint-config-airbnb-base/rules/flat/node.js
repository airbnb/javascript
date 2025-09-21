const globals = require('globals');
const base = require('../node');

module.exports = [{
  name: 'eslint-config-airbnb-base/node',
  languageOptions: {
    globals: globals.node
  },
  rules: base.rules
}];
