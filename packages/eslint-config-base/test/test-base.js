import fs from 'fs';
import path from 'path';
import test from 'tape';

import index from '..';

const files = { ...{ index } }; // object spread is to test parsing

fs.readdirSync(path.join(__dirname, '../rules')).forEach(name => {
  // eslint-disable-next-line import/no-dynamic-require
  files[name] = require(`../rules/${name}`); // eslint-disable-line global-require
});

Object.keys(files).forEach(name => {
  const config = files[name];

  test(`${name}: does not reference react`, t => {
    t.plan(2);

    // scan plugins for react and fail if it is found
    const hasReactPlugin = Object.prototype.hasOwnProperty.call(config, 'plugins')
      && - 1 !== config.plugins.indexOf('react');
    t.notOk(hasReactPlugin, 'there is no react plugin');

    // scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules)
      .filter(ruleId => 0 === ruleId.indexOf('react/'));
    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});
