module.exports = {
  extends: [
    '../eslint-config-airbnb-base/rules/best-practices',
    '../eslint-config-airbnb-base/rules/errors',
    '../eslint-config-airbnb-base/rules/node',
    '../eslint-config-airbnb-base/rules/style',
    '../eslint-config-airbnb-base/rules/variables',
    '../eslint-config-airbnb-base/rules/es6',
    '../eslint-config-airbnb-base/rules/imports',
    '../eslint-config-airbnb-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
