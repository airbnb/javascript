module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/flowtype',
  ].map(require.resolve),
  rules: {}
};
