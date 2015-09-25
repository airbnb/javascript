import fs from 'fs';
import path from 'path';
import test from 'tape';

const files = {
  base: require('../base')
};

fs.readdirSync(path.join(__dirname, '../rules')).forEach(name => {
  if (name === 'react.js') {
    return;
  }

  files[name] = require(`../rules/${name}`);
});

Object.keys(files).forEach(name => {
  const config = files[name];

  test(`${name}: does not reference react`, t => {
    t.plan(2);

    t.notOk(config.plugins, 'plugins is unspecified');

    // scan rules for react/ and fail if any exist
    const reactRuleIds = Object.keys(config.rules)
      .filter(ruleId => ruleId.indexOf('react/') === 0);
    t.deepEquals(reactRuleIds, [], 'there are no react/ rules');
  });
});
