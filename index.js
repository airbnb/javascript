module.exports = {
  extends: [
    './packages/eslint-config-mindojo/index.js',
  ].map(require.resolve),
  rules: {},
};
