module.exports = {
  'extends': [
    'eslint-config-airbnb/rules/best-practices',
    'eslint-config-airbnb/rules/errors',
    'eslint-config-airbnb/rules/legacy',
    'eslint-config-airbnb/rules/node',
    'eslint-config-airbnb/rules/strict',
    'eslint-config-airbnb/rules/style',
    'eslint-config-airbnb/rules/variables'
  ],
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jquery': true,
    'jasmine': true
  },
  'ecmaFeatures': {},
  'globals': {
    'angular': true,
      '_': true
  },
  'rules': {}
};
