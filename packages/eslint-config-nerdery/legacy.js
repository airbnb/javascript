module.exports = {
  extends: [
    'eslint-config-nerdery/rules/best-practices',
    'eslint-config-nerdery/rules/errors',
    'eslint-config-nerdery/rules/legacy',
    'eslint-config-nerdery/rules/node',
    'eslint-config-nerdery/rules/style',
    'eslint-config-nerdery/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
