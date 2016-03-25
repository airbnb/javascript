module.exports = {
  extends: [
    'eslint-config-nerdery/base',
    'eslint-config-nerdery/rules/strict',
    'eslint-config-nerdery/rules/react',
  ].map(require.resolve),
  rules: {}
};
