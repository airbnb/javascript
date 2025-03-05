const noConsoleInProd = require('./rules/no-console-in-prod');

module.exports = {
  rules: {
    'no-console-in-prod': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};
