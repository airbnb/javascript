module.exports = {
  extends: [
    './rules/react-hooks.js',
  ].map(require.resolve),
  rules: {}
};
