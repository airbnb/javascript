module.exports = [
  ...([
    './rules/flat/best-practices',
    './rules/flat/errors',
    './rules/flat/node',
    './rules/flat/style',
    './rules/flat/variables',
    './rules/flat/es6',
    './rules/flat/imports',
    './rules/flat/strict',
  ].reduce((p, c) => p.concat(require(c)), [])), // eslint-disable-line global-require, import/no-dynamic-require
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
      }
    },
    rules: {}
  }
];
