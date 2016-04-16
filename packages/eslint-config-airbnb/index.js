module.exports = {
  extends: [
    './base',
    './rules/strict',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
