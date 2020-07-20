module.exports = {
  extends: [
    'eslint-plugin-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
