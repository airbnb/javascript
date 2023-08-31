/**
 * Changes to support the flat config format:
 * - The `extends` key has been deprecated.
 * - The `parserOptions` key has been moved under the new `languageOptions` key.
 * - The `env` key has been deprecated and moved to `languageOptions.globals`.
 * - The `plugins` key is no longer a list but an object.
 */

const {
  extends: airbnbRules,
  ...airbnbConfig
} = require('.');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

/**
 * In the `globals` module, only the 'es6' key differs from the accepted ESLint `env` keys.
 * The keys 'es2016', 'es2018', 'es2019', 'es2022', 'es2023' and 'es2024'
 * are not handled by the `globals` module.
 */
const envMapping = {
  es6: 'es2015',
};
const plugins = {
  import: importPlugin,
};

function convertIntoEslintFlatConfig(config) {
  const newConfig = { ...config, languageOptions: {} };

  // Handle the `env` key
  if ('env' in newConfig) {
    newConfig.languageOptions.globals = Object.fromEntries(
      Object.keys(newConfig.env)
        .filter(
          (key) => newConfig.env[key] === true &&
          (key in globals ||
            (key in envMapping && envMapping[key] in globals))
        )
        .flatMap((key) =>
          (key in globals
            ? Object.entries(globals[key])
            : Object.entries(globals[envMapping[key]]))
        )
    );
    delete newConfig.env;
  }

  // Handle the `parserOptions` key
  if ('parserOptions' in newConfig) {
    newConfig.languageOptions.parserOptions = newConfig.parserOptions;
    delete newConfig.parserOptions;
  }

  // Handle the `plugins` key
  if ('plugins' in newConfig) {
    newConfig.plugins = Object.fromEntries(
      newConfig.plugins
        .filter((plugin) => plugin in plugins)
        .map((plugin) => [plugin, plugins[plugin]])
    );
  }

  return newConfig;
}

module.exports = [
  ...airbnbRules.map((rule) => convertIntoEslintFlatConfig(require(rule))),
  convertIntoEslintFlatConfig(airbnbConfig)];
