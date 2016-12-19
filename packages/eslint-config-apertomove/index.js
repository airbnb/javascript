module.exports = {
    extends: "airbnb",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    rules: {
        "indent": [
            "error",
            4, {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1
            }
        ], // we prefer 4 spaces
        "react/jsx-indent": [
            "warn", 4
        ],
        "react/jsx-indent-props": [
            "warn", 4
        ],
        "comma-dangle": [
            "error", "never"
        ], // we prefer no trailing commas in objects
        "no-unused-vars": [
            "warn", {
                vars: "local",
                args: "after-used"
            }
        ], // we only warn about unused vars
        "max-len": "off", // don't limit line length
        "class-methods-use-this": "off", // we don't enforce all class methods to use "this", since this makes for an inconsistent API (especially for React components)
        "no-use-before-define": "off", // while this makes sense, it also errors when used in functions that are not called yet
        "no-restricted-syntax": [ // we allow 'for...in'-loops
            "error",
            "DebuggerStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "arrow-parens": [
            "error",
            "as-needed", {
                "requireForBlockBody": false // we don't require parentheses for single function params when block body is used
            }
        ],
        "react/forbid-prop-types": [
            "warn", { // we only warn on discouraged prop types
                "forbid": ["any", "array", "object"]
            }
        ],
        "react/no-danger": "off" // sometimes you just can't avoid 'dangerouslySetInnerHTML', for ex. when you receive HTML strings over an API
    }
};
