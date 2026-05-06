const base = require('./flat');

module.exports = [
  ...base,
  { rules: { 'comma-dangle': 'off', 'max-len': 'off' } },
  {
    files: ['test/**'],
    rules: {
      'no-shadow': 'off',
      'id-length': ['error', { min: 2, properties: 'never', exceptions: ['t'] }],
    },
  },
];
