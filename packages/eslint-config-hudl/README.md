# eslint-config-hudl

This package provides Hudl's .eslintrc as an extensible shared config.

**Note:** This is forked from Airbnb's `eslint-config-airbnb` package. To see how Hudl's config compares to
the Airbnb config, take a look at the [comparison docs](docs/comparisons/).

## Usage

We export three ESLint configurations for your usage.

See [Hudl's Javascript styleguide](https://github.com/hudl/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information on using ESLint config plugins.

### eslint-config-hudl

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-hudl eslint-plugin-react babel-eslint eslint --registry=http://npm.thorhudl.com`
2. Add `"extends": "hudl"` to [your .eslintrc][eslintrc]

**_NOTE: If you're implementing in a multiverse cluster using the_** `hudl-webpack` **_package you should run the simpler install command_** `npm install --save eslint-config-hudl --registry="http://npm.thorhudl.com` 

### eslint-config-hudl/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-hudl eslint --registry=http://npm.thorhudl.com`
2. Add `"extends": "hudl/base"` to [your .eslintrc][eslintrc]

### eslint-config-hudl/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-hudl eslint --registry=http://npm.thorhudl.com`
2. Add `"extends": "hudl/legacy"` to [your .eslintrc][eslintrc]

### Node projects

Code running on Node < 4.0 (and not transpiled from ES6 syntax) can be linted effectively using the following as a base
for the project's `.eslintrc` file:
```json
{
  "root": true,
  "extends": "hudl/legacy",
  "ecmaFeatures": {
    "//": "Recognize `const` keyword. Note that this also enables `let`, even though it's not available",
    "blockBindings": true
  }
}
```
See [an example](https://github.com/hudl/javascript/blob/1d53dfc711b824a9dba4a145a22f0fde64385261/packages/eslint-config-hudl/.eslintrc) of a similar configuration.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

[eslintrc]: ../../linters/.eslintrc
