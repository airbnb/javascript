module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
//I also changed this in branch 2
//I also changed this in branch1
//changed in first rep