import test from 'tape';
import index from '../';

test('inherits from config-airbnb', (t) => {
  const actual = index.extends.filter(e => e.indexOf('eslint-config-airbnb/index') >= 0).length;

  t.equal(actual, 1, 'extends eslint-config-airbnb');
  t.end();
});

test('inclues flowtype rules', (t) => {
  const actual = index.extends.filter(e => e.indexOf('rules/flowtype') >= 0).length;

  t.equal(actual, 1, 'extends flowtype');
  t.end();
});
