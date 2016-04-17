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

    // require that JSX labels use "htmlFor"
    // TODO: enable
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-uses-for.md
    'jsx-a11y/label-uses-for': 0,

    // require that mouseover/out come with focus/blur, for keyboard-only users
    // TODO: enable?
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-map-to-key-events.md
    'jsx-a11y/mouse-events-map-to-key-events': 0,

    // disallow href "#"
    // TODO: enable
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-hash-href.md
    'jsx-a11y/no-hash-href': 0,

    // require things with onClick to have an aria role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-uses-role.md
    'jsx-a11y/onclick-uses-role': 0,

    // require onBlur instead of onChange
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/use-onblur-not-onchange.md
    'jsx-a11y/use-onblur-not-onchange': 0,
  },
};
