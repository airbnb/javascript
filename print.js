const _ = require('lodash');
const bestPractices = require('./packages/eslint-config-airbnb-base/rules/best-practices');
const errors = require('./packages/eslint-config-airbnb-base/rules/errors');
const node = require('./packages/eslint-config-airbnb-base/rules/node');
const style = require('./packages/eslint-config-airbnb-base/rules/style');
const variables = require('./packages/eslint-config-airbnb-base/rules/variables');
const es6 = require('./packages/eslint-config-airbnb-base/rules/es6');
const imports = require('./packages/eslint-config-airbnb-base/rules/imports');
const strict = require('./packages/eslint-config-airbnb-base/rules/strict');
const react = require('./packages/eslint-config-airbnb/rules/react');
const reactA11y = require('./packages/eslint-config-airbnb/rules/react-a11y');

const customizer = (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const rules = _.mergeWith(
  imports,
  bestPractices,
  errors,
  node,
  style,
  variables,
  es6,
  strict,
  react,
  reactA11y,
  customizer
);

console.log(JSON.stringify(rules, null, 2));
