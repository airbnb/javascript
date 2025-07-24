// eslint.config.js
const markdown = require('eslint-plugin-markdown');

module.exports = [
  {
    plugins: {
      markdown,
    },
  },
  {
    files: ['**/*.md'],
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
