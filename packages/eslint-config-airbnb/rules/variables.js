module.exports = {
  'rules': {
    // enforce or disallow variable initializations at definition
    'init-declarations': 0,
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 0,
    // disallow deletion of variables
    'no-delete-var': 2,
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 0,
    // disallow labels that share a name with a variable
    'no-label-var': 0,
    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 2,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // disallow use of undefined when initializing variables
    'no-undef-init': 0,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,
    // disallow use of undefined variable
    'no-undefined': 0,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, { 'vars': 'local', 'args': 'after-used' }],
    // disallow use of variables before they are defined
    'no-use-before-define': 2
  }
};
