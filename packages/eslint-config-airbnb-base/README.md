# eslint-config-airbnb-base <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![npm version](https://badge.fury.io/js/eslint-config-airbnb-base.svg)][package-url]

[![github actions][actions-image]][actions-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-airbnb-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-airbnb-base@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-airbnb-base
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-airbnb-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-airbnb-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-airbnb-base
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "airbnb-base"` to your .eslintrc.

### eslint-config-airbnb-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-airbnb-base@latest" peerDependencies
  ```

  Linux/OSX users can run
  ```sh
  (
    export PKG=eslint-config-airbnb-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "airbnb-base/legacy"` to your .eslintrc

See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's JavaScript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

### eslint-config-airbnb-base/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

[package-url]: https://npmjs.org/package/eslint-config-airbnb-base
[npm-version-svg]: https://versionbadg.es/airbnb/javascript.svg
[license-image]: https://img.shields.io/npm/l/eslint-config-airbnb-base.svg
[license-url]: LICENSE.md
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-airbnb-base.svg
[downloads-url]: https://npm-stat.com/charts.html?package=eslint-config-airbnb-base
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/airbnb/javascript
[actions-url]: https://github.com/airbnb/javascript/actions
