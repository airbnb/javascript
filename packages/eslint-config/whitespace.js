const assign = require('object.assign');
const entries = require('object.entries');
const CLIEngine = require('eslint').CLIEngine;

const baseConfig = require('.');

function onlyErrorOnRules(rulesToError, config) {
  const errorsOnly = assign({}, config);
  const cli = new CLIEngine({ baseConfig: config, useEslintrc: false });
  const baseRules = cli.getConfigForFile('./').rules;

  entries(baseRules).forEach((rule) => {
    const ruleName = rule[0];
    const ruleConfig = rule[1];

    if (rulesToError.indexOf(ruleName) === -1) {
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

module.exports = onlyErrorOnRules([
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
  // eslint-plugin-react rules
  'react/jsx-child-element-spacing',
  'react/jsx-closing-bracket-location',
  'react/jsx-closing-tag-location',
  'react/jsx-curly-spacing',
  'react/jsx-equals-spacing',
  'react/jsx-first-prop-newline',
  'react/jsx-indent',
  'react/jsx-indent-props',
  'react/jsx-max-props-per-line',
  'react/jsx-one-expression-per-line',
  'react/jsx-space-before-closing',
  'react/jsx-tag-spacing',
  'react/jsx-wrap-multilines',
], baseConfig);
