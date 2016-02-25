module.exports = {
  extends: [
    'eslint-config-quri/rules/best-practices',
    'eslint-config-quri/rules/errors',
    'eslint-config-quri/rules/legacy',
    'eslint-config-quri/rules/node',
    'eslint-config-quri/rules/style',
    'eslint-config-quri/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  }
};
