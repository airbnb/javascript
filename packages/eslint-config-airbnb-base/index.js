module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    strict: 2,
  }
};
