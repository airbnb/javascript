# @elegantthemes/eslint-config-base

[![npm version](https://badge.fury.io/js/@elegantthemes/eslint-config-base.svg)](http://badge.fury.io/js/@elegantthemes/eslint-config-base)

This package provides Elegant Themes' base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:
   ```sh
   npm info "@elegantthemes/eslint-config-base@latest" peerDependencies
   ```
   If using **npm 5+**, use this shortcut
   ```sh
   npx install-peerdeps --dev @elegantthemes/eslint-config-base
   ```
   If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
   Otherwise, run `npm info "@elegantthemes/eslint-config-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

2. Add `"extends": "@elegantthemes/base"` to your .eslintrc.

See [Elegant Themes' overarching ESLint config](https://npmjs.com/package/@elegantthemes/eslint-config), [Airbnb's JavaScript styleguide](https://github.com/elegantthemes/javascript), and the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

### @elegantthemes/base/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/elegantthemes/javascript/blob/master/packages/eslint-plugin-base/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
