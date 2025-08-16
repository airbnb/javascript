module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  plugins: ['@stylistic/react'],
  rules: {}
};
