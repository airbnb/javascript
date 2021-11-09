#!/usr/bin/env node

const assign = require('object.assign');
const entries = require('object.entries');
const { ESLint } = require('eslint');

const baseConfig = require('.');

const severities = ['off', 'warn', 'error'];

function getSeverity(ruleConfig) {
  if (Array.isArray(ruleConfig)) {
    return getSeverity(ruleConfig[0]);
  }
  if (typeof ruleConfig === 'number') {
    return severities[ruleConfig];
  }
  return ruleConfig;
}

async function onlyErrorOnRules(rulesToError, config) {
  const errorsOnly = assign({}, config);
  const cli = new ESLint({
    useEslintrc: false,
    baseConfig: config
  });
  const baseRules = (await cli.calculateConfigForFile(require.resolve('./'))).rules;

  entries(baseRules).forEach((rule) => {
    const ruleName = rule[0];
    const ruleConfig = rule[1];
    const severity = getSeverity(ruleConfig);

    if (rulesToError.indexOf(ruleName) === -1 && severity === 'error') {
      if (Array.isArray(ruleConfig)) {
        errorsOnly.rules[ruleName] = ['warn'].concat(ruleConfig.slice(1));
      } else if (typeof ruleConfig === 'number') {
        errorsOnly.rules[ruleName] = 1;
      } else {
        errorsOnly.rules[ruleName] = 'warn';
      }
    }
  });

  return errorsOnly;
}

onlyErrorOnRules([
  'array-bracket-newline',
  'array-bracket-spacing',
  'array-element-newline',
  'arrow-spacing',
  'block-spacing',
  'comma-spacing',
  'computed-property-spacing',
  'dot-location',
  'eol-last',
  'func-call-spacing',
  'function-paren-newline',
  'generator-star-spacing',
  'implicit-arrow-linebreak',
  'indent',
  'key-spacing',
  'keyword-spacing',
  'line-comment-position',
  'linebreak-style',
  'multiline-ternary',
  'newline-per-chained-call',
  'no-irregular-whitespace',
  'no-mixed-spaces-and-tabs',
  'no-multi-spaces',
  'no-regex-spaces',
  'no-spaced-func',
  'no-trailing-spaces',
  'no-whitespace-before-property',
  'nonblock-statement-body-position',
  'object-curly-newline',
  'object-curly-spacing',
  'object-property-newline',
  'one-var-declaration-per-line',
  'operator-linebreak',
  'padded-blocks',
  'padding-line-between-statements',
  'rest-spread-spacing',
  'semi-spacing',
  'semi-style',
  'space-before-blocks',
  'space-before-function-paren',
  'space-in-parens',
  'space-infix-ops',
  'space-unary-ops',
  'spaced-comment',
  'switch-colon-spacing',
  'template-tag-spacing',
  'import/newline-after-import',
], baseConfig).then((config) => console.log(JSON.stringify(config)));
