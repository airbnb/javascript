module.exports = {
  extends: [
    './rules/react-hooks.js',
  ].map(require.resolve),
  rules: {}
};
//I also changed this in branch1