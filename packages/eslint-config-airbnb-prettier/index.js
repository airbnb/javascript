module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/prettier',
  ].map(require.resolve),
  rules: {}
};
