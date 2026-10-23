module.exports = {
  plugins: [
    'react-hooks',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforce Rules of Hooks
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
    'react-hooks/exhaustive-deps': 'error',

    // Validates higher order functions defining nested components or hooks
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/component-hook-factories
    'react-hooks/component-hook-factories': 'error',

    // Validates the compiler configuration options
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/config
    'react-hooks/config': 'error',

    // Validates usage of Error Boundaries instead of try/catch for child errors
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
    'react-hooks/error-boundaries': 'error',

    // Validates configuration of gating mode
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/gating
    'react-hooks/gating': 'error',

    // Validates against assignment/mutation of globals during render
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
    'react-hooks/globals': 'error',

    // Validates against mutating props, state, and other immutable values
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
    'react-hooks/immutability': 'error',

    // Validates against usage of libraries which are incompatible with memoization
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
    'react-hooks/incompatible-library': 'warn',

    // Validates that existing manual memoization is preserved by the compiler
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
    'react-hooks/preserve-manual-memoization': 'error',

    // Validates that existing manual memoization is preserved by the compiler
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
    'react-hooks/purity': 'error',

    // Validates correct usage of refs, not reading/writing during render
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
    'react-hooks/refs': 'error',

    // Validates against calling setState synchronously in an effect
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
    'react-hooks/set-state-in-effect': 'error',

    // Validates against setting state during render
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
    'react-hooks/set-state-in-render': 'error',

    // Validates that components are static, not recreated every render
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
    'react-hooks/static-components': 'error',

    // Validates against syntax that React Compiler does not support
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
    'react-hooks/unsupported-syntax': 'warn',

    // Validates usage of the `useMemo` hook without a return value
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
    'react-hooks/use-memo': 'error',
  },
};
