module.exports = {
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    // Prevent missing displayName in a React component definition
    'react/display-name': 0,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 0,
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 0,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Enforce quote style for JSX attributes
    'react/jsx-quotes': 0,
    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': 0,
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 0,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // Prevent multiple component definition per file
    'react/no-multi-comp': 2,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Restrict file extensions that may be required
    'react/require-extension': 0,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // Enforce component methods order
    'react/sort-comp': [2, {
      'order': [
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    // Prevent missing parentheses around multilines JSX
    'react/wrap-multilines': 2
  }
};
