module.exports = {
  "env": {
    "es6": false
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": false,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "jsx": true
  },
  "rules": {
    // require parens in arrow function arguments
    "arrow-parens": 1,
    // require space before/after arrow function"s arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    "arrow-spacing": [2, { "before": true, "after": true }],
    // verify super() callings in constructors
    "constructor-super": 2,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 0,
    // disallow modifying variables of class declarations
    "no-class-assign": 0,
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // disallow duplicate name in class members
    // http://eslint.org/docs/2.0.0/rules/no-dupe-class-members.html
    "no-dupe-class-members": 2,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,
    // require let or const instead of var
    "no-var": 2,
    // require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    "object-shorthand": [2, "always"],
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": 2,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 1,
    // suggest using the spread operator instead of .apply()
    "prefer-spread": 0,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,
    // disallow generator functions that do not have yield
    "require-yield": 0
  }
};
