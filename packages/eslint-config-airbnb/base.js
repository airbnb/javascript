module.exports = {
  'extends': [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/legacy.js',
    './rules/node.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js'
  ],
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
