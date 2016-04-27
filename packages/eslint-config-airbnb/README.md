# eslint-config-airbnb

[![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg)](http://badge.fury.io/js/eslint-config-airbnb)

This package provides Airbnb's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-airbnb

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "airbnb"` to your .eslintrc

### eslint-config-airbnb/base

This entry point is deprecated. See [eslint-config-airbnb-base](https://npmjs.com/eslint-config-airbnb-base).

### eslint-config-airbnb/legacy

This entry point is deprecated. See [eslint-config-airbnb-base](https://npmjs.com/eslint-config-airbnb-base).

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
