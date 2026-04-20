const globals = require('globals');
const airbnbBase = require('./index');

module.exports = [
  {
    ...airbnbBase,
    languageOptions: {
      ...airbnbBase.languageOptions,
      globals: {
        ...globals.node,
      },
    },
  },
];
