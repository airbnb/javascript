// Rules for our Node code. The first number is the warning level as reported by
// eslint, the rest are settings for the error.

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    "rules": {
        // 4 space indent
        "indent": [
            ERROR,
            4
        ],
        // enforce single quoted strings
        "quotes": [
            ERROR,
            "single"
        ],
        // unix style line endings
        "linebreak-style": [
            ERROR,
            "unix"
        ],
        // Always require semi colons (this may change)
        "semi": [
            ERROR,
            "always"
        ],
        // 80 char line limit. The 4 means tabs == 4 chars
        "max-len": [ERROR, 80, 4],
        // Variables must be used but params don't need to be
        "no-unused-vars": [ERROR, {"vars": "all", "args": "none"}],
        // Disable comma dangle rule. With or without dangling commas is allowed
        "comma-dangle": [OFF],
        // Turn off indentation rules for now. Mostly because it's all over the
        // place in our code.
        "indent": [OFF],
        // Turn off rule to disable console statements.
        "no-console": [OFF]
    },
    // Make these includes available so eslint doesn't complain about it
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    // Inherit from eslint's recommended settings
    "extends": "eslint:recommended"
};
