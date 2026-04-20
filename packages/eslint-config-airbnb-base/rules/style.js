module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.style/rules/default/array-bracket-newline
    // TODO: enable? semver-major
    '@stylistic/js/array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // enforce line breaks between array elements
    // https://eslint.style/rules/default/array-element-newline
    // TODO: enable? semver-major
    '@stylistic/js/array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],

    // enforce spacing inside single-line blocks
    // https://eslint.style/rules/default/block-spacing
    '@stylistic/js/block-spacing': ['error', 'always'],

    // enforce one true brace style
    '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camel case names
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // require trailing commas in multiline object literals
    '@stylistic/js/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // enforce spacing before and after comma
    '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    '@stylistic/js/comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // disallow padding inside computed properties
    '@stylistic/js/computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    '@stylistic/js/eol-last': ['error', 'always'],

    // https://eslint.style/rules/default/function-call-argument-newline
    '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],

    // enforce spacing between functions and their invocations
    // https://eslint.style/rules/default/func-call-spacing
    '@stylistic/js/func-call-spacing': ['error', 'never'],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    'func-style': ['off', 'expression'],

    // require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.style/rules/default/function-paren-newline
    '@stylistic/js/function-paren-newline': ['error', 'multiline-arguments'],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.style/rules/default/implicit-arrow-linebreak
    '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.style/rules/default/indent
    '@stylistic/js/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.style/rules/jsx/jsx-quotes
    '@stylistic/js/jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    '@stylistic/js/key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    '@stylistic/js/keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.style/rules/default/linebreak-style
    '@stylistic/js/linebreak-style': ['error', 'unix'],

    // require or disallow an empty line between class members
    // https://eslint.style/rules/default/lines-between-class-members
    '@stylistic/js/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // Require or disallow logical assignment logical operator shorthand
    // https://eslint.org/docs/latest/rules/logical-assignment-operators
    // TODO, semver-major: enable
    'logical-assignment-operators': ['off', 'always', {
      enforceForIfStatements: true,
    }],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // specify the maximum length of a line in your program
    // https://eslint.style/rules/default/max-len
    '@stylistic/js/max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': ['off', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // restrict the number of statements per line
    // https://eslint.style/rules/default/max-statements-per-line
    '@stylistic/js/max-statements-per-line': ['off', { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.style/rules/default/multiline-comment-style
    '@stylistic/js/multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // https://eslint.style/rules/default/multiline-ternary
    // TODO: enable?
    '@stylistic/js/multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.style/rules/default/new-parens
    '@stylistic/js/new-parens': 'error',

    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',

    // https://eslint.style/rules/default/newline-before-return
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.style/rules/default/newline-per-chained-call
    '@stylistic/js/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // https://eslint.style/rules/default/no-mixed-operators
    '@stylistic/js/no-mixed-operators': ['error', {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    // disallow mixed spaces and tabs for indentation
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.style/rules/default/no-multiple-empty-lines
    '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime in older browsers/engines, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow space between function identifier and application
    // deprecated in favor of func-call-spacing
    'no-spaced-func': 'off',

    // disallow tab characters entirely
    '@stylistic/js/no-tabs': 'error',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    '@stylistic/js/no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // https://eslint.style/rules/default/no-whitespace-before-property
    '@stylistic/js/no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    // https://eslint.style/rules/default/nonblock-statement-body-position
    '@stylistic/js/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // require padding inside curly braces
    '@stylistic/js/object-curly-spacing': ['error', 'always'],

    // enforce line breaks between braces
    // https://eslint.style/rules/default/object-curly-newline
    '@stylistic/js/object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.style/rules/default/object-property-newline
    '@stylistic/js/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // allow just one var statement per function
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // https://eslint.style/rules/default/one-var-declaration-per-line
    '@stylistic/js/one-var-declaration-per-line': ['error', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.style/rules/default/operator-linebreak
    '@stylistic/js/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // disallow padding within blocks
    '@stylistic/js/padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    // https://eslint.style/rules/default/padding-line-between-statements
    '@stylistic/js/padding-line-between-statements': 'off',

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // require quotes around object literal property names
    // https://eslint.style/rules/default/quote-props
    '@stylistic/js/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    '@stylistic/js/semi': ['error', 'always'],

    // enforce spacing before and after semicolons
    '@stylistic/js/semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.style/rules/default/semi-style
    '@stylistic/js/semi-style': ['error', 'last'],

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow space before blocks
    '@stylistic/js/space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // https://eslint.style/rules/default/space-before-function-paren
    '@stylistic/js/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // require or disallow spaces inside parentheses
    '@stylistic/js/space-in-parens': ['error', 'never'],

    // require spaces around operators
    '@stylistic/js/space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // https://eslint.style/rules/default/space-unary-ops
    '@stylistic/js/space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.style/rules/default/spaced-comment
    '@stylistic/js/spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+', '*'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],

    // Enforce spacing around colons of switch statements
    // https://eslint.style/rules/default/switch-colon-spacing
    '@stylistic/js/switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.style/rules/default/template-tag-spacing
    '@stylistic/js/template-tag-spacing': ['error', 'never'],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    '@stylistic/js/wrap-regex': 'off',
  },
};
