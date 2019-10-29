module.exports = {
  extends: require.resolve('eslint-config-airbnb-base/typescript'),

  rules: {
    // allow .tsx files to have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // using a type system makes it safe enough to spread props
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ]
};
