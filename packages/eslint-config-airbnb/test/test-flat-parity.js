import test from 'tape';

import bestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import errors from 'eslint-config-airbnb-base/rules/errors';
import es6 from 'eslint-config-airbnb-base/rules/es6';
import imports from 'eslint-config-airbnb-base/rules/imports';
import node from 'eslint-config-airbnb-base/rules/node';
import strict from 'eslint-config-airbnb-base/rules/strict';
import style from 'eslint-config-airbnb-base/rules/style';
import variables from 'eslint-config-airbnb-base/rules/variables';

import flatConfig from '../flat';
import react from '../rules/react';
import reactA11y from '../rules/react-a11y';

test('flat config structure', (t) => {
  t.ok(Array.isArray(flatConfig), 'flat config is an array');
  t.equal(flatConfig.length, 2, 'flat config has two elements (base + react)');

  t.notOk(flatConfig[0].files, 'base config has no files scope');
  t.deepEqual(flatConfig[1].files, ['**/*.{js,jsx,mjs,cjs}'], 'react config is scoped to JS files');

  t.end();
});

test('flat config base rules match rule files', (t) => {
  const baseRules = flatConfig[0].rules;

  const expectedBaseRules = {
    ...bestPractices.rules,
    ...errors.rules,
    ...node.rules,
    ...style.rules,
    ...variables.rules,
    ...es6.rules,
    ...imports.rules,
    ...strict.rules,
  };

  const baseKeys = Object.keys(baseRules).sort();
  const expectedKeys = Object.keys(expectedBaseRules).sort();

  t.deepEqual(baseKeys, expectedKeys, 'base config has the same rule keys as combined base rule files');

  expectedKeys.forEach((key) => {
    t.deepEqual(baseRules[key], expectedBaseRules[key], `base rule "${key}" has matching config`);
  });

  t.end();
});

test('flat config react rules match rule files', (t) => {
  const reactRules = flatConfig[1].rules;

  const expectedReactRules = {
    ...react.rules,
    ...reactA11y.rules,
  };

  const reactKeys = Object.keys(reactRules).sort();
  const expectedKeys = Object.keys(expectedReactRules).sort();

  t.deepEqual(reactKeys, expectedKeys, 'react config has the same rule keys as combined react rule files');

  expectedKeys.forEach((key) => {
    t.deepEqual(reactRules[key], expectedReactRules[key], `react rule "${key}" has matching config`);
  });

  t.end();
});

test('flat config has required plugins and settings', (t) => {
  const baseConfig = flatConfig[0];
  const reactConfig = flatConfig[1];

  t.ok(baseConfig.plugins.import, 'import plugin is present in base config');
  t.ok(baseConfig.settings, 'settings are present in base config');
  t.ok(baseConfig.languageOptions, 'languageOptions are present in base config');

  t.ok(reactConfig.plugins.react, 'react plugin is present in react config');
  t.ok(reactConfig.plugins['jsx-a11y'], 'jsx-a11y plugin is present in react config');
  t.ok(reactConfig.settings, 'settings are present in react config');

  t.end();
});
