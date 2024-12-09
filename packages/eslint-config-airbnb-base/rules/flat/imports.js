const importPlugin = require('eslint-plugin-import');
const globals = require('globals');
const imports = require('../imports');

module.exports = {
  languageOptions: {
    globals: {
      ...globals.es2015,
    },
    parserOptions: imports.parserOptions,
  },
  plugins: {
    import: importPlugin
  },
  settings: imports.settings,
  rules: imports.rules,
};
