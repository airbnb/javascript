module.exports = {
    extends: "airbnb/base",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    rules: {
        "indent": [2, 4], // we prefer 4 spaces
        "comma-dangle": [2, "never"], // we prefer no trailing commas
        "no-labels": [2, {"allowLoop": false, "allowSwitch": false}],
        "keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],
        "max-len": 0, // don't limit line length
        "no-use-before-define": 0, // while this makes sense, it also errors when used in functions that are not called yet
        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}], // we only warn about unused vars
        "no-empty-label": 0, // deprecated rules specified in airbnb preset
        "space-before-keywords": 0,
        "space-after-keywords": 0,
        "space-return-throw-case": 0,
        "arrow-body-style": [2, "always"] // always surround the execution block in arrow functions with curly braces
    }
};
