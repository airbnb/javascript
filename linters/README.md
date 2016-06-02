# ESLint Ruleset

## Installation

1. Copy the provided .eslintrc file to the root of your project.
1. Add the following lines to your project's package.json:

       "devDependencies": {
           "babel-eslint": "6.0.4",
           "eslint": "2.10.2",
        }

1. Run `npm install`

## IDE Configuration

Follow these steps to set up your editor to flag linting errors as you code.

### Sublime Text 3

Note that Sublime Text 2 not supported.

1. If you don't already have Package Control installed, follow the instructions at https://sublime.wbond.net/installation.
1. Install `SublimeLinter` and `SublimeLinter-contrib-eslint` using Package Control https://packagecontrol.io/docs/usage.
1. Restart Sublime.
1. Adjust the settings in Tools->SublimeLinter->Lint Mode and Lint Style to your liking.
1. For syntax highlighting, follow instructions here: https://github.com/babel/babel-sublime

### Atom

1. From the CLI, run `apm install linter && apm install linter-eslint`.
1. After installing those packages, restart Atom.
1. All .js files will now automatically be linted as you code.

### WebStorm

1. Navigate to `Languages and Frameworks > JavaScript > Code Quality Tools > ESLint`
1. Check `Enable` and the `.eslintrc` file will be used.
1. For more info: [https://www.jetbrains.com/help/webstorm/2016.1/eslint.html](https://www.jetbrains.com/help/webstorm/2016.1/eslint.html)

## Testing

A suite a test files for verifying the correctness of this eslint ruleset are located in the /tests directory. Run `grunt lint` to run eslint against all of the test files -- for any lines not conforming to the eslint ruleset, an eslint failure should returned.
