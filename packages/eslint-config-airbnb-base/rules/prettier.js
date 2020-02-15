module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
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
};
