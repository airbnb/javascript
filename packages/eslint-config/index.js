module.exports = {
  extends: [
    '@postmates/eslint-config-base',
    '@postmates/eslint-config-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
