import test from 'tape';

import flatConfig from '../flat';

import bestPractices from '../rules/best-practices';
import errors from '../rules/errors';
import es6 from '../rules/es6';
import imports from '../rules/imports';
import node from '../rules/node';
import strict from '../rules/strict';
import style from '../rules/style';
import variables from '../rules/variables';

test('flat config includes all rules from rule files', (t) => {
  // The flat config is an array with one config object
  t.ok(Array.isArray(flatConfig), 'flat config is an array');
  t.equal(flatConfig.length, 1, 'flat config has one element');

  const flatRules = flatConfig[0].rules;

  // Merge rules in the same order as flat.js
  const expectedRules = {
    ...bestPractices.rules,
    ...errors.rules,
    ...node.rules,
    ...style.rules,
    ...variables.rules,
    ...es6.rules,
    ...imports.rules,
    ...strict.rules,
  };

  const flatKeys = Object.keys(flatRules).sort();
  const expectedKeys = Object.keys(expectedRules).sort();

  t.deepEqual(flatKeys, expectedKeys, 'flat config has the same rule keys as combined rule files');

  expectedKeys.forEach((key) => {
    t.deepEqual(flatRules[key], expectedRules[key], `rule "${key}" has matching config`);
  });

  t.end();
});

test('flat config has required plugins and settings', (t) => {
  const config = flatConfig[0];

  t.ok(config.plugins.import, 'import plugin is present');
  t.ok(config.settings, 'settings are present');
  t.ok(config.languageOptions, 'languageOptions are present');
  t.equal(config.languageOptions.sourceType, 'module', 'sourceType is module');

  t.end();
});
