/**
 * Changes to support the flat config format:
 * - The `extends` key has been deprecated.
 * - The `parserOptions` key has been moved under the new `languageOptions` key.
 * - The `env` key has been deprecated and moved to `languageOptions.globals`.
 * - The `plugins` key is no longer a list but an object.
 */

const importPlugin = require('eslint-plugin-import/config/flat');
const envs = require('globals');
const {
  extends: airbnbRules,
  ...airbnbConfig
} = require('.');

const envMapping = {
  builtin: 'builtin',
  es5: 'es5',
  es6: 'es2015',
  es2016: 'es2015',
  es2017: 'es2017',
  es2018: 'es2017',
  es2019: 'es2017',
  es2020: 'es2020',
  es2021: 'es2021',
  es2022: 'es2021',
  es2023: 'es2021',
  es2024: 'es2021',
  browser: 'browser',
  worker: 'worker',
  node: 'node',
  nodeBuiltin: 'nodeBuiltin',
  commonjs: 'commonjs',
  amd: 'amd',
  mocha: 'mocha',
  jasmine: 'jasmine',
  jest: 'jest',
  qunit: 'qunit',
  phantomjs: 'phantomjs',
  couch: 'couch',
  rhino: 'rhino',
  nashorn: 'nashorn',
  wsh: 'wsh',
  jquery: 'jquery',
  yui: 'yui',
  shelljs: 'shelljs',
  prototypejs: 'prototypejs',
  meteor: 'meteor',
  mongo: 'mongo',
  applescript: 'applescript',
  serviceworker: 'serviceworker',
  atomtest: 'atomtest',
  embertest: 'embertest',
  protractor: 'protractor',
  'shared-node-browser': 'shared-node-browser',
  webextensions: 'webextensions',
  greasemonkey: 'greasemonkey',
  devtools: 'devtools',
};

function convertIntoEslintFlatConfig(config) {
  const {
    env, // convert to explicit `globals` list
    parserOptions, // move into `languageOptions`
    plugins, // remove the `plugins` key as it will be spread directly during export
    ...oldConfig
  } = config;
  return {
    ...oldConfig,
    languageOptions: {
      ...('env' in config && {
        globals: Object.fromEntries(
          Object.keys(env)
            .filter((key) => env[key] === true && key in envMapping && envMapping[key] in envs)
            .flatMap((key) => Object.entries(envs[envMapping[key]]))
        ),
        ...('parserOptions' in config && {
          parserOptions,
        }),
      }),
    },
  };
}

module.exports = [
  ...airbnbRules.map((rule) => convertIntoEslintFlatConfig(require(rule))),
  convertIntoEslintFlatConfig(airbnbConfig),
  ...importPlugin,
];
