Lints all files in the /tests directory. If linting errors are returned where errors are expected, then it works :-)

# Command-line

Usage:

    npm install
    grunt

# Editors

## All Editors - Install ESLint globally

1. On the command line, enter `npm install -g eslint@2.8.0`
1. On the command line, enter `npm install -g babel-eslint@6.0.0`

## Sublime Text 3

Note that Sublime Text 2 not supported.

1. If you don't already have Package Control installed, follow the instructions at https://sublime.wbond.net/installation.
1. Install `SublimeLinter` and `SublimeLinter-contrib-eslint` using Package Control https://packagecontrol.io/docs/usage.
1. After installing those packages, restart Sublime.
1. Adjust the settings in Tools->SublimeLinter->Lint Mode and Lint Style to your liking.
1. All .js files will now automatically be linted as you code.

## Atom

1. From the CLI, run `apm install linter && apm install linter-eslint`.
1. After installing those packages, restart Atom.
1. All .js files will now automatically be linted as you code.