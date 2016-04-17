module.exports = {
  'env': {
    'node': true
  },
  'plugins': [
    'import'
  ],
  'rules': {
    // enforce return after a callback
    'callback-return': 0,
    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 2,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 0,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [0, false],
    // disallow use of new operator with the require function
    'no-new-require': 0,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 0,
    // disallow process.exit()
    'no-process-exit': 0,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods (off by default)
    'no-sync': 0,
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [2, { 'commonjs': true }]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json']
      }
    }
  }
};
