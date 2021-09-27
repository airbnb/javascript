import { Variables } from 'eslint/rules/variables';

export const variables: Variables = {
  /** enforce or disallow variable initializations at definition
  * https://eslint.org/docs/rules/init-declarations */
  'init-declarations': 'off',

  /** disallow the catch clause parameter name being the same as a variable in the outer scope
  * https://eslint.org/docs/rules/no-catch-shadow */
  'no-catch-shadow': 'off',

  /** disallow deletion of variables
  * https://eslint.org/docs/rules/no-delete-var */
  'no-delete-var': 'error',

  /** disallow labels that share a name with a variable
  * https://eslint.org/docs/rules/no-label-var */
  'no-label-var': 'error',

  /** disallow specific globals
  * https://eslint.org/docs/rules/no-restricted-globals */
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],

  /** disallow declaration of variables already declared in the outer scope
  * https://eslint.org/docs/rules/no-shadow */
  'no-shadow': 'error',

  /** disallow shadowing of names such as arguments
  * https://eslint.org/docs/rules/no-shadow-restricted-names */
  'no-shadow-restricted-names': 'error',

  /** disallow use of undeclared variables unless mentioned in `/*global ` comments
  * https://eslint.org/docs/rules/no-undef */
  'no-undef': 'error',

  /** disallow use of undefined when initializing variables
  * https://eslint.org/docs/rules/no-undef-init */
  'no-undef-init': 'error',

  /** disallow use of undefined variable
  * https://eslint.org/docs/rules/no-undefined */
  'no-undefined': 'off',

  /** disallow declaration of variables that are not used in the code
  * https://eslint.org/docs/rules/no-unused-vars */
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],

  /** disallow use of variables before they are defined
  * https://eslint.org/docs/rules/no-use-before-define */
  'no-use-before-define': 'error',
};
