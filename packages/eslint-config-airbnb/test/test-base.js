import test from 'tape';
import base from '../base';

test('base: does not reference react', tst => {
  tst.plan(2);

  tst.notOk(base.plugins, 'plugins is unspecified');

  // scan rules for react/ and fail if any exist
  const reactRuleIds = Object.keys(base.rules)
    .filter(ruleId => ruleId.indexOf('react/') === 0);
  tst.deepEquals(reactRuleIds, [], 'there are no react/ rules');
});
