module.exports = {
  "extends": [
    "eslint-config-quri/base",
    "eslint-config-quri/rules/strict",
    "eslint-config-quri/rules/react",
  ].map(require.resolve),
  rules: {}
};
