module.exports = {
  extends: ['./base', './rules/prettier'].map(require.resolve),
};
