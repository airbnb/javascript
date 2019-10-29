module.exports = {
  plugins: ['filenames'],

  rules: {
    // match filename against the default export, accepting kebab-cased names
    // https://github.com/selaux/eslint-plugin-filenames#matching-exported-values-match-exported
    'filenames/match-exported': ['error', [null, 'kebab']],
  },
};
