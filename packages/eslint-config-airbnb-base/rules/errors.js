module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    'no-console': 'warn',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow use of debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    // TODO: enable, semver-major
    'no-dupe-else-if': 'off',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // disallow empty statements
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // https://eslint.org/docs/rules/no-import-assign
    // TODO: enable, semver-minor, once eslint v6.4 is required (which is a major)
    'no-import-assign': 'off',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // TODO: enable, semver-minor, once eslint v7.1 is required (which is major)
    'no-loss-of-precision': 'off',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    // TODO: enable, semver-minor, once eslint v7.3 is required (which is major)
    'no-promise-executor-return': 'off',

    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    // TODO: enable, semver-major (altho the guide forbids getters/setters already)
    'no-setter-return': 'off',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    // TODO: enable, semver-minor, once eslint v7.3 is required (which is major)
    'no-unreachable-loop': ['off', {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }],

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    // TODO: enable, semver-minor, once eslint v7 is required (which is major)
    'no-useless-backreference': 'off',

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',

    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
};
