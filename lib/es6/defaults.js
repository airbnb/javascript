'use strict';

module.exports = {
  extends: ['airbnb-base']
    .concat([
      '../overrides/best-practices',
      '../overrides/errors',
      '../overrides/node',
      '../overrides/style',
      '../overrides/variables',
      '../overrides/es6',
      '../overrides/imports',
    ].map(require.resolve))
};
