module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': 0,

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 0,

    // disallow deletion of variables
    'no-delete-var': 2,

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 2,

    // disallow specific globals
    'no-restricted-globals': 0,

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,

    // disallow use of undefined when initializing variables
    'no-undef-init': 2,

    // disallow use of undefined variable
    // TODO: enable?
    'no-undefined': 0,

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, { vars: 'local', args: 'after-used' }],

    // disallow use of variables before they are defined
    'no-use-before-define': 2
  }
};
