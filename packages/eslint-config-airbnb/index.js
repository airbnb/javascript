module.exports = {
  extends: [
    '@drivetribe/eslint-config-airbnb-base',
    '@drivetribe/eslint-config-airbnb-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
