const airbnb = require('./flat');

module.exports = [
  ...airbnb,
  { rules: { 'comma-dangle': 'off' } },
  {
    files: ['test/**'],
    rules: {
      'no-shadow': 'off',
      'id-length': ['error', { min: 2, properties: 'never', exceptions: ['t'] }],
    },
  },
];
