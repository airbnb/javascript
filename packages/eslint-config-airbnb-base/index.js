module.exports = {
  extends: [
    './legacy',
    './rules/es6',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    strict: 2,
  }
};
