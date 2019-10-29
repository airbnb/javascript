module.exports = {
  plugins: ['filenames'],

  rules: {
    // allow any filename casing
    // https://github.com/selaux/eslint-plugin-filenames#consistent-filenames-via-regex-match-regex
    'filenames/match-regex': 'off',

    // match filename against the default export, accepting kebab-cased names
    // https://github.com/selaux/eslint-plugin-filenames#matching-exported-values-match-exported
    'filenames/match-exported': ['error', [null, 'kebab']],

    // allow using index files
    // https://github.com/selaux/eslint-plugin-filenames#dont-allow-indexjs-files-no-index
    'filenames/no-index': 'off'
  },
};
