module.exports = {
  extends: [
    'eslint-config-postmates-base',
    'eslint-config-postmates-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
