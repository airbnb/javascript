module.exports = {
    extends: [
      './packages/eslint-config-airbnb-base/index',
    ].map(require.resolve),
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      strict: 'error',
      indent: ["error", "tab", { "SwitchCase": 1 }],
      'no-tabs': 'off',
      "comma-dangle": 0,
      "prefer-destructuring": 0,
      "class-methods-use-this": 0,
      "no-unused-vars": "off",
      "eqeqeq": "off",
      "no-console": "off",
      "no-plusplus": "off",
      "no-param-reassign": "off",
      "no-continue": "off",
      'max-len': ['warn', 120, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
    },
  };

//module.exports = require('./packages/eslint-config-airbnb-base/index');