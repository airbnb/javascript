import { StylisticIssues } from 'eslint/rules/stylistic-issues';

export const stylisticIssues: StylisticIssues = {
  /** enforce line breaks after opening and before closing array brackets
  * https://eslint.org/docs/rules/array-bracket-newline */
  'array-bracket-newline': ['error', 'consistent'],

  /** enforce line breaks between array elements
  * https://eslint.org/docs/rules/array-element-newline */
  'array-element-newline': ['error', { multiline: true, minItems: 3 }],

  /** enforce spacing inside array brackets
  * https://eslint.org/docs/rules/array-bracket-spacing */
  'array-bracket-spacing': ['error', 'never'],

  /** enforce spacing inside single-line blocks
  * https://eslint.org/docs/rules/block-spacing */
  'block-spacing': ['error', 'always'],

  /** enforce one true brace style
  * https://eslint.org/docs/rules/brace-style */
  'brace-style': 'error',

  /** require camel case names
  * https://eslint.org/docs/rules/camelcase */
  camelcase: ['error', { properties: 'never' }],

  /** enforce or disallow capitalization of the first letter of a comment
  * https://eslint.org/docs/rules/capitalized-comments */
  'capitalized-comments': 'off',

  /** require trailing commas in multiline object literals
  * https://eslint.org/docs/rules/comma-dangle */
  'comma-dangle': ['error', 'always-multiline'],

  /** enforce spacing before/after comma
  * https://eslint.org/docs/rules/comma-spacing */
  'comma-spacing': 'error',

  /** enforce one true comma style
  * https://eslint.org/docs/rules/comma-style */
  'comma-style': 'error',

  /** disallow padding inside computed properties
  * https://eslint.org/docs/rules/computed-property-spacing */
  'computed-property-spacing': 'error',

  /** enforces consistent naming when capturing the current execution context
  * https://eslint.org/docs/rules/consistent-this
  * doing this at all is forbidden */
  'consistent-this': 'off',

  /** enforce newline at the end of file, with no multiple empty lines
  * https://eslint.org/docs/rules/eol-last */
  'eol-last': 'error',

  /** enforce spacing between functions and their invocations
  * https://eslint.org/docs/rules/func-call-spacing */
  'func-call-spacing': 'error',

  /** requires function names to match the name of the variable or property to which they are assigned
  * https://eslint.org/docs/rules/func-name-matching */
  'func-name-matching': 'off',

  /** require function expressions to have a name
  * https://eslint.org/docs/rules/func-names */
  'func-names': 'off',

  /** enforces use of function declarations or expressions
  * https://eslint.org/docs/rules/func-style */
  'func-style': ['off', 'expression'],

  /** enforce line breaks between arguments of a function call
  * https://eslint.org/docs/rules/function-call-argument-newline */
  'function-call-argument-newline': ['off', 'consistent'],

  /** enforce consistent line breaks inside function parentheses
  * https://eslint.org/docs/rules/function-paren-newline */
  'function-paren-newline': ['error', 'consistent'],

  /** Blacklist certain identifiers to prevent them being used
  * https://eslint.org/docs/rules/id-blacklist */
  'id-blacklist': 'off',

  /** disallow specified identifiers
  * https://eslint.org/docs/rules/id-denylist */
  'id-denylist': 'off',

  /** this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  * https://eslint.org/docs/rules/id-length */
  'id-length': 'off',

  /** require identifiers to match the provided regular expression
  * https://eslint.org/docs/rules/id-match */
  'id-match': 'off',

  /** Enforce the location of arrow function bodies with implicit returns
  * https://eslint.org/docs/rules/implicit-arrow-linebreak */
  'implicit-arrow-linebreak': 'error',

  /** this option sets a specific tab width for your code
  * https://eslint.org/docs/rules/indent */
  indent: ['error', 2],

  /** specify whether double or single quotes should be used in JSX attributes
  * https://eslint.org/docs/rules/jsx-quotes */
  'jsx-quotes': 'error',

  /** enforces spacing between keys and values in object literal properties
  * https://eslint.org/docs/rules/key-spacing */
  'key-spacing': 'error',

  /** require a space before & after certain keywords
  * https://eslint.org/docs/rules/keyword-spacing */
  'keyword-spacing': 'error',

  /** enforce position of line comments
  * https://eslint.org/docs/rules/line-comment-position */
  'line-comment-position': 'error',

  /** disallow mixed 'LF' and 'CRLF' as linebreaks
  * https://eslint.org/docs/rules/linebreak-style */
  'linebreak-style': 'error',

  /** enforces empty lines around comments
  * https://eslint.org/docs/rules/lines-around-comment */
  'lines-around-comment': 'off',

  /** require or disallow an empty line between class members
  * https://eslint.org/docs/rules/lines-between-class-members */
  'lines-between-class-members': 'error',

  /** specify the maximum depth that blocks can be nested
  * https://eslint.org/docs/rules/max-depth */
  'max-depth': 'warn',

  /** specify the maximum length of a line in your program
  * https://eslint.org/docs/rules/max-len */
  'max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  /** specify the max number of lines in a file
  * https://eslint.org/docs/rules/max-lines */
  'max-lines': 'off',

  /** enforce a maximum function length
  * https://eslint.org/docs/rules/max-lines-per-function */
  'max-lines-per-function': 'off',

  /** specify the maximum depth callbacks can be nested
  * https://eslint.org/docs/rules/max-nested-callbacks */
  'max-nested-callbacks': 'off',

  /** limits the number of parameters that can be used in the function declaration.
  * https://eslint.org/docs/rules/max-params */
  'max-params': 'off',

  /** specify the maximum number of statement allowed in a function
  * https://eslint.org/docs/rules/max-statements */
  'max-statements': 'off',

  /** restrict the number of statements per line
  * https://eslint.org/docs/rules/max-statements-per-line */
  'max-statements-per-line': 'off',

  /** enforce a particular style for multiline comments
  * https://eslint.org/docs/rules/multiline-comment-style */
  'multiline-comment-style': 'error',

  /** require multiline ternary
  * https://eslint.org/docs/rules/multiline-ternary */
  'multiline-ternary': 'off',

  /** require a capital letter for constructors
  * https://eslint.org/docs/rules/new-cap */
  'new-cap': 'error',

  /** disallow the omission of parentheses when invoking a constructor with no arguments
  * https://eslint.org/docs/rules/new-parens */
  'new-parens': 'error',

  /** enforces new line after each method call in the chain to make it more readable and easy to maintain
  * https://eslint.org/docs/rules/newline-per-chained-call */
  'newline-per-chained-call': 'error',

  /** disallow use of the Array constructor
  * https://eslint.org/docs/rules/no-array-constructor */
  'no-array-constructor': 'error',

  /** disallow use of bitwise operators
  * https://eslint.org/docs/rules/no-bitwise */
  'no-bitwise': 'warn',

  /** disallow use of the continue statement
  * https://eslint.org/docs/rules/no-continue */
  'no-continue': 'error',

  /** disallow comments inline after code
  * https://eslint.org/docs/rules/no-inline-comments */
  'no-inline-comments': 'error',

  /** disallow if as the only statement in an else block
  * https://eslint.org/docs/rules/no-lonely-if */
  'no-lonely-if': 'error',

  /** disallow un-paren'd mixes of different operators
  * https://eslint.org/docs/rules/no-mixed-operators */
  'no-mixed-operators': 'error',

  /** disallow mixed spaces and tabs for indentation
  * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs */
  'no-mixed-spaces-and-tabs': 'error',

  /** disallow use of chained assignment expressions
  * https://eslint.org/docs/rules/no-multi-assign */
  'no-multi-assign': 'error',

  /** disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  * https://eslint.org/docs/rules/no-multiple-empty-lines */
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  /** disallow negated conditions
  * https://eslint.org/docs/rules/no-negated-condition */
  'no-negated-condition': 'off',

  /** disallow nested ternary expressions
  * https://eslint.org/docs/rules/no-nested-ternary */
  'no-nested-ternary': 'error',

  /** disallow use of the Object constructor
  * https://eslint.org/docs/rules/no-new-object */
  'no-new-object': 'error',

  /** disallow use of unary operators, ++ and --
  * https://eslint.org/docs/rules/no-plusplus */
  'no-plusplus': 'error',

  /** disallow certain syntax forms
  * https://eslint.org/docs/rules/no-restricted-syntax */
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message: 'for-in loops are disallowed. (https://github.com/SPSCommerce/javascript#iterators--no-for-in)',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labeled statements are disallowed. (https://github.com/SPSCommerce/javascript#control-statements--value-selection)',
    },
  ],

  /** disallow tab characters entirely
  * https://eslint.org/docs/rules/no-tabs */
  'no-tabs': 'error',

  /** disallow the use of ternary operators
  * https://eslint.org/docs/rules/no-ternary */
  'no-ternary': 'off',

  /** disallow trailing whitespace at the end of lines
  * https://eslint.org/docs/rules/no-trailing-spaces */
  'no-trailing-spaces': 'error',

  /** disallow dangling underscores in identifiers
  * https://eslint.org/docs/rules/no-underscore-dangle */
  'no-underscore-dangle': ['error', { enforceInMethodNames: true }],

  /** prefer `a || b` over `a ? a : b`
  * https://eslint.org/docs/rules/no-unneeded-ternary */
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  /** disallow whitespace before properties
  * https://eslint.org/docs/rules/no-whitespace-before-property */
  'no-whitespace-before-property': 'error',

  /** enforce the location of single-line statements
  * https://eslint.org/docs/rules/nonblock-statement-body-position */
  'nonblock-statement-body-position': 'error',

  /** enforce line breaks between braces
  * https://eslint.org/docs/rules/object-curly-newline */
  'object-curly-newline': [
    'error',
    {
      minProperties: 4,
      multiline: true,
      consistent: true,
    },
  ],

  /** require padding inside curly braces
  * https://eslint.org/docs/rules/object-curly-spacing */
  'object-curly-spacing': ['error', 'always'],

  /** enforce "same line" or "multiple line" on object properties.
  * https://eslint.org/docs/rules/object-property-newline */
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

  /** allow just one variable declaration per function
  * https://eslint.org/docs/rules/one-var
  * nb: despite 'var' being in the name, does apply to let and const */
  'one-var': ['error', 'never'],

  /** require a newline around variable declaration
  * https://eslint.org/docs/rules/one-var-declaration-per-line */
  'one-var-declaration-per-line': ['error', 'always'],

  /** require assignment operator shorthand where possible or prohibit it entirely
  * https://eslint.org/docs/rules/operator-assignment */
  'operator-assignment': 'error',

  /** Requires operator at the beginning of the line in multiline statements
  * https://eslint.org/docs/rules/operator-linebreak */
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  /** disallow padding within blocks
  * https://eslint.org/docs/rules/padded-blocks */
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    },
    {
      allowSingleLineBlocks: true,
    },
  ],

  /** Require or disallow padding lines between statements
  * https://eslint.org/docs/rules/padding-line-between-statements */
  'padding-line-between-statements': 'off',

  /** Disallow the use of Math.pow in favor of the ** operator
  * https://eslint.org/docs/rules/prefer-exponentiation-operator */
  'prefer-exponentiation-operator': 'off',

  /** Prefer use of an object spread over Object.assign
  * https://eslint.org/docs/rules/prefer-object-spread */
  'prefer-object-spread': 'error',

  /** require quotes around object literal property names
  * https://eslint.org/docs/rules/quote-props */
  'quote-props': ['error', 'as-needed', { keywords: false, numbers: false }],

  /** specify whether double or single quotes should be used
  * https://eslint.org/docs/rules/quotes */
  quotes: ['error', 'double', { avoidEscape: true }],

  /** require or disallow use of semicolons instead of ASI
  * https://eslint.org/docs/rules/ */
  semi: 'error',

  /** enforce spacing before and after semicolons
  * https://eslint.org/docs/rules/semi-spacing */
  'semi-spacing': 'error',

  /** Enforce location of semicolons
  * https://eslint.org/docs/rules/semi-style */
  'semi-style': 'error',

  /** requires object keys to be sorted
  * https://eslint.org/docs/rules/sort-keys */
  'sort-keys': 'off',

  /** sort variables within the same declaration block
  * https://eslint.org/docs/rules/sort-vars */
  'sort-vars': 'off',

  /** require or disallow space before blocks
  * https://eslint.org/docs/rules/space-before-blocks */
  'space-before-blocks': 'error',

  /** require or disallow space before function opening parenthesis
  * https://eslint.org/docs/rules/space-before-function-paren */
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    },
  ],

  /** require or disallow spaces inside parentheses
  * https://eslint.org/docs/rules/space-in-parens */
  'space-in-parens': 'error',

  /** require spaces around operators
  * https://eslint.org/docs/rules/space-infix-ops */
  'space-infix-ops': 'error',

  /** Require or disallow spaces before/after unary operators
  * https://eslint.org/docs/rules/space-unary-ops */
  'space-unary-ops': 'error',

  /** require or disallow a space immediately following the // or /* in a comment
  * https://eslint.org/docs/rules/spaced-comment */
  'spaced-comment': 'error',

  /** Enforce spacing around colons of switch statements
  * https://eslint.org/docs/rules/switch-colon-spacing */
  'switch-colon-spacing': 'error',

  /** Require or disallow spacing between template tags and their literals
  * https://eslint.org/docs/rules/template-tag-spacing */
  'template-tag-spacing': 'error',

  /** require or disallow the Unicode Byte Order Mark
  * https://eslint.org/docs/rules/unicode-bom */
  'unicode-bom': 'error',

  /** require regex literals to be wrapped in parentheses
  * https://eslint.org/docs/rules/wrap-regex */
  'wrap-regex': 'off'
};
