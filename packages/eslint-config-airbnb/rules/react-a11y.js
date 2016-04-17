module.exports = {
  'plugins': [
    'jsx-a11y',
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    // Prevent use of `accessKey`
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 2,

    // Require <img> to have a non-empty `alt` prop, or role="presentation"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-uses-alt.md
    'jsx-a11y/img-uses-alt': 2,

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/redundant-alt.md
    'jsx-a11y/redundant-alt': 2,

    // Require ARIA roles to be valid and non-abstract
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/valid-aria-role.md
    'jsx-a11y/valid-aria-role': 2,
  },
};
