module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 0,

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 1,

    // treat var statements as if they were block scoped
    'block-scoped-var': 1,

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [0, 11],

    // require return statements to either always or never specify values
    'consistent-return': 1,

    // specify curly brace conventions for all control statements
    curly: [1, 'multi-line'],

    // require default case in switch statements
    'default-case': [1, { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    'dot-notation': [1, { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': [1, 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: [1, 'allow-null'],

    // make sure for-in loops have an if statement
    'guard-for-in': 1,

    // disallow the use of alert, confirm, and prompt
    'no-alert': 1,

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 1,

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 1,

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 0,

    // disallow else after a return in an if
    'no-else-return': 1,

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [1, {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 1,

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 0,

    // disallow use of eval()
    'no-eval': 1,

    // disallow adding to native types
    'no-extend-native': 1,

    // disallow unnecessary function binding
    'no-extra-bind': 1,

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 1,

    // disallow fallthrough of case statements
    'no-fallthrough': 1,

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 1,

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [0, {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 0,

    // disallow use of eval()-like methods
    'no-implied-eval': 1,

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,

    // disallow usage of __iterator__ property
    'no-iterator': 1,

    // disallow use of labels for anything other then loops and switches
    'no-labels': [1, { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 1,

    // disallow creation of functions within loops
    'no-loop-func': 1,

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [0, {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    'no-multi-spaces': 1,

    // disallow use of multiline strings
    'no-multi-str': 1,

    // disallow reassignments of native objects
    'no-native-reassign': 1,

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 1,

    // disallow use of new operator for Function object
    'no-new-func': 1,

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 1,

    // disallow use of (old style) octal literals
    'no-octal': 1,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 1,

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [1, { props: true }],

    // disallow usage of __proto__ property
    'no-proto': 1,

    // disallow declaring the same variable more then once
    'no-redeclare': 1,

    // disallow use of assignment in return statement
    'no-return-assign': 1,

    // disallow use of `javascript:` urls.
    'no-script-url': 1,

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 1,

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 1,

    // disallow use of comma operator
    'no-sequences': 1,

    // restrict what can be thrown as an exception
    'no-throw-literal': 1,

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 0,

    // disallow usage of expressions in statement position
    'no-unused-expressions': [1, {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 1,

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 0,

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 1,

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 1,

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 1,

    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    'no-with': 1,

    // require use of the second argument for parseInt()
    radix: 1,

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 1,

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [1, 'outside'],

    // require or disallow Yoda conditions
    yoda: 1
  }
};
