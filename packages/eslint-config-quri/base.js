module.exports = {
  "extends": [
    "eslint-config-quri/rules/es6",
    "eslint-config-quri/rules/babel",
    "eslint-config-quri/rules/require-path-exists"
  ].map(require.resolve),
  "rules": {}
};
