import fs from 'fs';
import path from 'path';
import test from 'tape';

import index from '..';

const files = { ...{ index } }; // object spread is to test parsing

fs.readdirSync(path.join(__dirname, '../rules')).forEach((name) => {
  // eslint-disable-next-line import/no-dynamic-require
  files[name] = require(`../rules/${name}`); // eslint-disable-line global-require
});

Object.keys(files).forEach((
  name, // trailing function comma is to test parsing
) => {
  const config = files[name];

  test(`${name}: does not reference react`, (t) => {
    t.plan(2);

    // scan plugins for react and fail if it is found
    const hasReactPlugin = Object.prototype.hasOwnProperty.call(config, 'plugins')
      && config.plugins.indexOf('react') !== -1;
    t.notOk(hasReactPlugin, 'there is no react plugin');

    // scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules)
      .filter(ruleId => ruleId.indexOf('react/') === 0);
    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});
