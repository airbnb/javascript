 @postmates/eslint-config

[![npm version](https://badge.fury.io/js/%40postmates%2Feslint-config.svg)](https://badge.fury.io/js/%40postmates%2Feslint-config)

This package provides Postmates' .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### @postmates/eslint-config

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [@postmates/eslint-config-base](https://www.npmjs.com/@postmates/eslint-config-base).

If you use yarn, run `yarn add --dev @postmates/eslint-config eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`, and see below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@postmates/eslint-config@latest" peerDependencies
  ```

  Linux/OSX users can run

  ```sh
  (
    export PKG=@postmates/eslint-config;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev @postmates/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @postmates/eslint-config
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @postmates/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "@postmates"` to your .eslintrc

### eslint-config-airbnb/base

This entry point is deprecated. See [@postmates/eslint-config-base](https://npmjs.com/@postmates/eslint-config-base).

### eslint-config-airbnb/legacy

This entry point is deprecated. See [@postmates/eslint-config-base](https://npmjs.com/@postmates/eslint-config-base).

See [Postmates' Javascript styleguide](https://github.com/postmates/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
