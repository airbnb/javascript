module.exports = {
  extends: [
    './legacy',
    './rules/es6',
  ].map(require.resolve),
  rules: {}
};
