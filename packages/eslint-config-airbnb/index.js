module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-airbnb/rules/strict',
    'eslint-config-airbnb/rules/react',
  ].map(require.resolve),
  rules: {}
};
