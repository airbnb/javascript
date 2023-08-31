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
} = require('eslint-config-airbnb-base');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

const mappedEnvs = {
  es6: 'es2015',
};
const handledPlugins = {
  import: importPlugin,
};

function convertIntoEslintFlatConfig(config) {
  const newConfig = { ...config, languageOptions: {} };

  // Handle the `env` key
  if ('env' in newConfig) {
    newConfig.languageOptions.globals = Object.keys(newConfig.env)
      .filter((key) => newConfig.env[key] === true)
      .reduce((acc, key) => {
        if (key in globals) {
          return { ...acc, ...globals[key] };
        }
        if (key in mappedEnvs && mappedEnvs[key] in globals) {
          return { ...acc, ...globals[mappedEnvs[key]] };
        }
        return acc;
      }, {});
    delete newConfig.env;
  }

  // Handle the `parserOptions` key
  if ('parserOptions' in newConfig) {
    newConfig.languageOptions.parserOptions = newConfig.parserOptions;
    delete newConfig.parserOptions;
  }

  // Handle the `plugins` key
  if ('plugins' in newConfig) {
    newConfig.plugins = newConfig.plugins.reduce((acc, plugin) => {
      if (plugin in handledPlugins) {
        return { ...acc, [plugin]: handledPlugins[plugin] };
      }
      return acc;
    }, {});
  }

  return newConfig;
}

module.exports = [
  ...airbnbRules.map((rule) => convertIntoEslintFlatConfig(require(rule))),
  convertIntoEslintFlatConfig(airbnbConfig)
];
