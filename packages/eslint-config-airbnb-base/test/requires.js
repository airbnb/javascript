/* eslint strict: 0, global-require: 0 */

'use strict';

const test = require('tape');

test('all entry points parse', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw');
  t.doesNotThrow(() => require('../legacy'), 'legacy does not throw');
  t.doesNotThrow(() => require('../whitespace'), 'whitespace does not throw');

  t.end();
});
