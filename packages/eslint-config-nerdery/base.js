module.exports = {
  extends: [
    'eslint-config-nerdery/legacy',
    'eslint-config-nerdery/rules/es6',
  ].map(require.resolve),
  rules: {}
};
