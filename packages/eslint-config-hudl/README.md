# eslint-config-hudl

This package provides Hudl's .eslintrc as an extensible shared config.

**Note:** This is forked from Airbnb's `eslint-config-airbnb` package. To see how Hudl's config compares to
the Airbnb config, take a look at the [comparison docs](docs/comparisons/).

## Usage

We export three ESLint configurations for your usage.

### eslint-config-hudl

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-hudl eslint-plugin-react eslint --registry=http://npm.thorhudl.com`
2. add `"extends": "hudl"` to your .eslintrc

### eslint-config-hudl/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-hudl eslint --registry=http://npm.thorhudl.com`
2. add `"extends": "hudl/base"` to your .eslintrc

### eslint-config-hudl/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-hudl eslint --registry=http://npm.thorhudl.com`
2. add `"extends": "hudl/legacy"` to your .eslintrc

See [Hudl's Javascript styleguide](https://github.com/hudl/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
