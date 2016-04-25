# eslint-config-airbnb-base

[![npm version](https://badge.fury.io/js/eslint-config-airbnb-base.svg)](http://badge.fury.io/js/eslint-config-airbnb-base)

This package provides Airbnb's base JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-airbnb-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-airbnb-base eslint-plugin-import eslint`
2. add `"extends": "airbnb-base"` to your .eslintrc

### eslint-config-airbnb-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-airbnb-base eslint-plugin-import eslint`
2. add `"extends": "airbnb-base/legacy"` to your .eslintrc

See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
