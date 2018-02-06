# eslint-config-mindojo

This package provides Mindojo's base JS .eslintrc (without React plugins) as an extensible shared config.

## Installation

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

Install peer dependencies by running (for npm 5+ users):
```sh
npx install-peerdeps --dev eslint-config-airbnb-base
```

If you're npm <= 5 user, follow these instructions:


1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-airbnb-base@latest" peerDependencies
  ```

  Linux/OSX users can run
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

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-airbnb-base
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "mindojo"` to your .eslintrc.
