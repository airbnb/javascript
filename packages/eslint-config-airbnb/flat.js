module.exports = [
  ...([
    'eslint-config-airbnb-base/flat',
    './rules/flat/react',
    './rules/flat/react-a11y',
  // eslint-disable-next-line global-require, import/no-dynamic-require
  ].reduce((p, c) => p.concat(require(c)), []))
];
