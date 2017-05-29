module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  // Rules: https://github.com/gajus/eslint-plugin-flowtype
  rules: {
    // Use `boolean` over `bool`
    'flowtype/boolean-style': 'error',

    // Require trailing commas
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],

    // No spacing around generics
    'flowtype/generic-spacing': ['error', 'never'],

    // No duplicate object properties
    'flowtype/no-dupe-keys': 'error',

    // No primitive built-in types
    'flowtype/no-primitive-constructor-types': 'error',

    // Dont allow `any` or `Function` type hints
    'flowtype/no-weak-types': ['error', {
      any: true,
      Object: false,
      Function: true,
    }],

    // Use commas instead of semicolons
    'flowtype/object-type-delimiter': ['error', 'comma'],

    // Require param type hints
    'flowtype/require-parameter-type': ['error', {
      excludeArrowFunctions: 'expressionsOnly',
    }],

    // Require return type hints
    'flowtype/require-return-type': ['error', {
      excludeArrowFunctions: 'expressionsOnly',
    }],

    // Require variable type hints
    'flowtype/require-variable-type': 'error',

    // Require @flow comment
    'flowtype/require-valid-file-annotation': ['error', 'always'],

    // Require semicolon
    'flowtype/semi': ['error', 'always'],

    // Sort object properties
    'flowtype/sort-keys': ['error', 'asc', {
      natural: true,
    }],

    // Require space after type colon
    'flowtype/space-after-type-colon': ['error', 'always', {
      allowLineBreak: false,
    }],

    // Require no space before
    'flowtype/space-before-type-colon': ['error', 'never'],

    // Require space around unions
    'flowtype/union-intersection-spacing': ['error', 'always'],

    // Dont enforce name formatting
    'flowtype/flowtype/type-id-match': 'off',

    // Resolve unused var issues
    'flowtype/define-flow-type': 'error',
    'flowtype/use-flow-type': 'error',
  },
};
