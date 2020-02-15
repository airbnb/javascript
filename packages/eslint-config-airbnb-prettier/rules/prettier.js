/* eslint-disable no-async-promise-executor, no-useless-catch, no-misleading-character-class */

module.exports = {
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier'],
  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // Prettier Rule + Prettier config overrides
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        proseWrap: 'preserve',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
