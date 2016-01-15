module.exports = {
  extends: [
    'eslint-config-airbnb/legacy',
    'eslint-config-airbnb/rules/es6',
  ].map(require.resolve),
  rules: {}
};
