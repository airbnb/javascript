module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/mindojo',
  ].map(require.resolve),
  rules: {},
};
