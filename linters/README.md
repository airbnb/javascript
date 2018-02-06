# Nerdery ESLint Ruleset

ESLint rules enforcing Nerdery JavaScript standards
https://github.com/thenerdery/javascript-standards

## Using in your project

1. Copy the provided .eslintrc file to the root of your project.
1. Add the following lines to your project's package.json:

        "devDependencies": {
           "babel-eslint": "7.2.2",
           "eslint": "3.19.0",
        }

1. Install the package

        npm install

1. If eslint is installed globally, please uninstall it. The globally installed version  might conflict with the specific version needed by your project.

        npm uninstall -g eslint

## Linting in your IDE

Follow these steps to automatically flag linting errors in your IDE as you code.

### Sublime Text 3

Sublime Text 2 not supported.

1. If you don't have Package Control installed, install per https://sublime.wbond.net/installation.
1. Install `SublimeLinter` and `SublimeLinter-contrib-eslint` using Package Control https://packagecontrol.io/docs/usage.
1. Restart Sublime.
1. Adjust the settings in Tools->SublimeLinter->Lint Mode and Lint Style to your liking.
1. For syntax highlighting, follow instructions here: https://github.com/babel/babel-sublime

### Atom

1. From the CLI, run `apm install linter && apm install linter-eslint`.
1. After installing those packages, restart Atom.

### WebStorm

1. Navigate to `Preferences -> Languages and Frameworks > JavaScript > Code Quality Tools > ESLint`
1. Check `Enable`
1. Specify Node Interpreter as the path where you've installed node.js. If you've used the `n` version manager to install node, this will be located under /yourusername/.node/bin/node
1. Specify ESLint Package as the path where you've installed ESLint. This may already be pre-selected with the correct path; if not, navigate to /{your project folder}/node_modules/eslint
 
For more info: [https://www.jetbrains.com/help/webstorm/2016.1/eslint.html](https://www.jetbrains.com/help/webstorm/2016.1/eslint.html)

### Visual Studio Code
1. Install the Visual Studio Code ESLint plugin(https://code.visualstudio.com/docs/editor/extension-gallery)
1. If the plugin does not pickup a .eslintrc file automatically, add the path to your settings file. (https://github.com/Microsoft/vscode-eslint/tree/master/eslint)

## Testing

A suite a test files for validating the correctness of this eslint ruleset are located in the /tests directory.

Run `grunt lint` to run eslint against all of the test files. An eslint failure is expected for any code not conforming to the eslint ruleset.
Note that eslint does not enfore *every* standard; some code in the test suite is not enforceable via any known eslint rule.
