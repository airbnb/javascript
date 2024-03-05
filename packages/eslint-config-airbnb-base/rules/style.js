module.exports = {
  // specify the tab width for the code
  tabWidth: 2,

  // specify the end-of-line character sequence
  // (can be 'lf', 'crlf', or 'cr')
  endOfLine: 'lf',

  // specify the maximum line length
  // (default: 80)
  printWidth: 100,

  // specify the trailing characters at the end of a line
  // (default: ['semi', 'comma'])
  trailingComma: 'es5',

  // specify the indentation style
  // (default: 'spaces')
  useTabs: false,

  // specify whether to use single or double quotes
  // (default: 'auto')
  singleQuote: true,

  // specify whether to print parentheses around multiline object literals
  // (default: false)
  bracketSpacing: true,

  // specify whether to enforce line breaks between array elements
  // (default: false)
  arrayBracketNewline: {
    multiline: true,
    minItems: 3,
  },

  // specify whether to enforce line breaks between object properties
  // (default: false)
  objectCurlyNewline: {
    ObjectExpression: {
      minProperties: 4,
      multiline: true,
      consistent: true,
    },
    ObjectPattern: {
      minProperties: 4,
      multiline: true,
      consistent: true,
    },
    ImportDeclaration: {
      minProperties: 4,
      multiline: true,
      consistent: true,
    },
    ExportDeclaration: {
      minProperties: 4,
      multiline: true,
      consistent: true,
    },
  },

  // specify whether to enforce line breaks before block statements
  // (default: false)
  linebreakStyle: 'unix',

  // specify whether to enforce consistent spacing between keys and values in object literals
  // (default: false)
  keySpacing: true,

  // specify whether to enforce consistent spacing after the `:` in object literals
  // (default: false)
  braceStyle: '1tbs',

  // specify whether to enforce consistent spacing inside parentheses
  // (default: false)
  parenSpacing: true,

  // specify whether to enforce consistent spacing inside braces
  // (default: false)
  bracketSpacing: true,

  // specify whether to enforce consistent spacing before and after unary operators
  // (default: false)
  unarySpacing: true,

  // specify whether to enforce consistent spacing before and after binary operators
  // (default: false)
  binaryOpsSpacing: true,

  // specify whether to enforce consistent spacing around infix operators
  // (default: false)
  operatorSpacing: true,

  // specify whether to enforce consistent spacing around the `+` and `-` operators
  // (default: false)
  plusMinusSpacing: true,

  // specify whether to enforce consistent spacing around the `*` and `/` operators
  // (default: false)
  multiplyDivideSpacing: true,

  // specify whether to enforce consistent spacing around the `<`, `<=`, `>`, and `>=` operators
  // (default: false)
  relationalSpacing: true,

  // specify whether to enforce consistent spacing around the `in` and `instanceof` operators
  // (default: false)
  logicalSpacing: true,

  // specify whether to enforce consistent spacing around the `&&` and `||` operators
  // (default: false)
  logicalOperatorSpacing: true,

  // specify whether to enforce consistent spacing around the `?:` operator
  // (default: false)
  ternarySpacing: true,

  // specify whether to enforce consistent spacing around the `=` operator
  // (default: false)
  equalitySpacing: true,

  // specify whether to enforce consistent spacing around the `!` and `~` operators
  // (default: false)
  negationSpacing: true,
