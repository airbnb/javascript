# @elegantthemes/eslint-config

[![npm version](https://badge.fury.io/js/@elegantthemes/eslint-config.svg)](http://badge.fury.io/js/@elegantthemes/eslint-config)

This package provides Elegant Themes' .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### @elegantthemes

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [@elegantthemes/eslint-config-base](https://npmjs.com/package/@elegantthemes/eslint-config-base).

1. Install the correct versions of each package, which are listed by the command:

   ```sh
   npm info "@elegantthemes/eslint-config@latest" peerDependencies
   ```
   If using **npm 5+**, use this shortcut
   ```sh
   npx install-peerdeps --dev @elegantthemes/eslint-config
   ```
   If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
   Otherwise, run `npm info "@elegantthemes/eslint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.
2. Add `"extends": "@elegantthemes"` to your `.eslintrc`.

### @elegantthemes/eslint-config/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["@elegantthemes", "@elegantthemes/hooks"]` to your `.eslintrc`:

### @elegantthemes/eslint-config/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/airbnb/javascript/blob/master/packages/@elegantthemes/eslint-config/whitespace.js).

See [Elegant Themes' JavaScript Style Guide](https://github.com/elegantthemes/javascript) and the [ESlint Config Docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
