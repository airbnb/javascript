# Airbnb CSS-in-JavaScript Style Guide

_A mostly reasonable approach to CSS-in-JavaScript_

## Table of Contents

1. [Naming](#naming)
1. [Ordering](#ordering)
1. [Nesting](#nesting)
1. [Inline](#inline)
1. [Themes](#themes)
1. [Specificity](#specificity)
1. [Responsiveness](#responsiveness)
1. [Common Pitfalls](#common-pitfalls)

## Naming

- Use camelCase for object keys (i.e. "selectors").

  > Why? We access these keys as properties on the `styles` object in the component, so it is most convenient to use camelCase.

  ```js
  // bad
  {
    'bermuda-triangle': {
      display: 'none',
    },
  }

  // good
  {
    bermudaTriangle: {
      display: 'none',
    },
  }
  ```

- Use an underscore for modifiers to other styles.

  > Why? Similar to [BEM](https://getbem.com/introduction/), this naming convention makes it clear that the styles are intended to modify the element preceded by the underscore. Underscores do not need to be quoted, so they are preferred over other characters, such as dashes.

  ```js
  // bad
  {
    bruceBanner: {
      color: 'pink',
      transition: 'color 10s',
    },

    bruceBannerTheHulk: {
      color: 'green',
    },
  }

  // good
  {
    bruceBanner: {
      color: 'pink',
      transition: 'color 10s',
    },

    bruceBanner_theHulk: {
      color: 'green',
    },
  }
  ```

- Use `selectorName_fallback` for sets of fallback styles.

  > Why? Similar to modifiers, keeping the naming consistent helps reveal the relationship of these styles to the styles that override them in more adequate browsers.

  ```js
  // bad
  {
    muscles: {
      display: 'flex',
    },

    muscles_sadBears: {
      width: '100%',
    },
  }

  // good
  {
    muscles: {
      display: 'flex',
    },

    muscles_fallback: {
      width: '100%',
    },
  }
  ```

- Use a separate selector for sets of fallback styles.

  > Why? Keeping fallback styles contained in a separate object clarifies their purpose, which improves readability.

  ```js
  // bad
  {
    muscles: {
      display: 'flex',
    },

    left: {
      flexGrow: 1,
      display: 'inline-block',
    },

    right: {
      display: 'inline-block',
    },
  }

  // good
  {
    muscles: {
      display: 'flex',
    },

    left: {
      flexGrow: 1,
    },

    left_fallback: {
      display: 'inline-block',
    },

    right_fallback: {
      display: 'inline-block',
    },
  }
  ```

- Use device-agnostic names (e.g. "small", "medium", and "large") to name media query breakpoints.

  > Why? Commonly used names like "phone", "tablet", and "desktop" do not match the characteristics of the devices in the real world. Using these names sets the wrong expectations.

  ```js
  // bad
  const breakpoints = {
    mobile: "@media (max-width: 639px)",
    tablet: "@media (max-width: 1047px)",
    desktop: "@media (min-width: 1048px)",
  };

  // good
  const breakpoints = {
    small: "@media (max-width: 639px)",
    medium: "@media (max-width: 1047px)",
    large: "@media (min-width: 1048px)",
  };
  ```

## Ordering

- Define styles after the component.

  > Why? We use a higher-order component to theme our styles, which is naturally used after the component definition. Passing the styles object directly to this function reduces indirection.

  ```jsx
  // bad
  const styles = {
    container: {
      display: 'inline-block',
    },
  };

  function MyComponent({ styles }) {
    return (
      <div {...css(styles.container)}>
        Never doubt that a small group of thoughtful, committed citizens can
        change the world. Indeed, it’s the only thing that ever has.
      </div>
    );
  }

  export default withStyles(() => styles)(MyComponent);

  // good
  function MyComponent({ styles }) {
    return (
      <div {...css(styles.container)}>
        Never doubt that a small group of thoughtful, committed citizens can
        change the world. Indeed, it’s the only thing that ever has.
      </div>
    );
  }

  export default withStyles(() => ({
    container: {
      display: 'inline-block',
    },
  }))(MyComponent);
  ```

## Nesting

- Leave a blank line between adjacent blocks at the same indentation level.

  > Why? The whitespace improves readability and reduces the likelihood of merge conflicts.

  ```js
  // bad
  {
    bigBang: {
      display: 'inline-block',
      '::before': {
        content: "''",
      },
    },
    universe: {
      border: 'none',
    },
  }

  // good
  {
    bigBang: {
      display: 'inline-block',

      '::before': {
        content: "''",
      },
    },

    universe: {
      border: 'none',
    },
  }
  ```

## Inline

- Use inline styles for styles that have a high cardinality (e.g. uses the value of a prop) and not for styles that have a low cardinality.

  > Why? Generating themed stylesheets can be expensive, so they are best for discrete sets of styles.

  ```jsx
  // bad
  export default function MyComponent({ spacing }) {
    return (
      <div style={{ display: 'table', margin: spacing }} />
    );
  }

  // good
  function MyComponent({ styles, spacing }) {
    return (
      <div {...css(styles.periodic, { margin: spacing })} />
    );
  }
  export default withStyles(() => ({
    periodic: {
      display: 'table',
    },
  }))(MyComponent);
  ```

## Themes

- Use an abstraction layer such as [react-with-styles](https://github.com/airbnb/react-with-styles) that enables theming. _react-with-styles gives us things like `withStyles()`, `ThemedStyleSheet`, and `css()` which are used in some of the examples in this document._

> Why? It is useful to have a set of shared variables for styling your components. Using an abstraction layer makes this more convenient. Additionally, this can help prevent your components from being tightly coupled to any particular underlying implementation, which gives you more freedom.

- Define colors only in themes.

  ```js
  // bad
  export default withStyles(() => ({
    chuckNorris: {
      color: '#bada55',
    },
  }))(MyComponent);

  // good
  export default withStyles(({ color }) => ({
    chuckNorris: {
      color: color.badass,
    },
  }))(MyComponent);
  ```

- Define fonts only in themes.

  ```js
  // bad
  export default withStyles(() => ({
    towerOfPisa: {
      fontStyle: 'italic',
    },
  }))(MyComponent);

  // good
  export default withStyles(({ font }) => ({
    towerOfPisa: {
      fontStyle: font.italic,
    },
  }))(MyComponent);
  ```

- Define fonts as sets of related styles.

  ```js
  // bad
  export default withStyles(() => ({
    towerOfPisa: {
      fontFamily: 'Italiana, "Times New Roman", serif',
      fontSize: '2em',
      fontStyle: 'italic',
      lineHeight: 1.5,
    },
  }))(MyComponent);

  // good
  export default withStyles(({ font }) => ({
    towerOfPisa: {
      ...font.italian,
    },
  }))(MyComponent);
  ```

- Define base grid units in theme (either as a value or a function that takes a multiplier).

  ```js
  // bad
  export default withStyles(() => ({
    rip: {
      bottom: '-6912px', // 6 feet
    },
  }))(MyComponent);

  // good
  export default withStyles(({ units }) => ({
    rip: {
      bottom: units(864), // 6 feet, assuming our unit is 8px
    },
  }))(MyComponent);

  // good
  export default withStyles(({ unit }) => ({
    rip: {
      bottom: 864 * unit, // 6 feet, assuming our unit is 8px
    },
  }))(MyComponent);
  ```

- Define media queries only in themes.

  ```js
  // bad
  export default withStyles(() => ({
    container: {
      width: '100%',

      '@media (max-width: 1047px)': {
        width: '50%',
      },
    },
  }))(MyComponent);

  // good
  export default withStyles(({ breakpoint }) => ({
    container: {
      width: '100%',

      [breakpoint.medium]: {
        width: '50%',
      },
    },
  }))(MyComponent);
  ```

- Define tricky fallback properties in themes.

  > Why? Many CSS-in-JavaScript implementations merge style objects together which makes specifying fallbacks for the same property (e.g. `display`) a little tricky. To keep the approach unified, put these fallbacks in the theme.

  ```js
  // bad
  export default withStyles(() => ({
    .muscles {
      display: 'flex',
    },

    .muscles_fallback {
      'display ': 'table',
    },
  }))(MyComponent);

  // good
  export default withStyles(({ fallbacks }) => ({
    .muscles {
      display: 'flex',
    },

    .muscles_fallback {
      [fallbacks.display]: 'table',
    },
  }))(MyComponent);

  // good
  export default withStyles(({ fallback }) => ({
    .muscles {
      display: 'flex',
    },

    .muscles_fallback {
      [fallback('display')]: 'table',
    },
  }))(MyComponent);
  ```

- Create as few custom themes as possible. Many applications may only have one theme.

- Namespace custom theme settings under a nested object with a unique and descriptive key.

  ```js
  // bad
  ThemedStyleSheet.registerTheme("mySection", {
    mySectionPrimaryColor: "green",
  });

  // good
  ThemedStyleSheet.registerTheme("mySection", {
    mySection: {
      primaryColor: "green",
    },
  });
  ```

CSS puns adapted from [Saijo George](https://saijogeorge.com/css-puns/).

## Specificity

- Handle CSS specificity carefully to avoid conflicts.

> Why? Specificity can cause styles to be overridden unintentionally. In CSS-in-JavaScript, the order in which style objects are applied matters, and higher specificity selectors can lead to unexpected results.

```js
// bad
const styles = {
  button: {
    color: "red",
  },
  ".specialButton": {
    color: "blue",
  },
};

// good
const styles = {
  button: {
    color: "red",
  },
  specialButton: {
    color: "blue",
  },
};
```

- Avoid using !important.

> Why? It’s generally better to manage specificity through more precise selectors rather than forcing the style with !important. Using !important reduces maintainability by making it harder to override the styles later on.

```js
// bad
const styles = {
  button: {
    color: "blue !important",
  },
};

// good
const styles = {
  button: {
    color: "blue",
  },
};
```

---

## Responsiveness

- Use media queries effectively by keeping them consistent across components.

> Why? Inconsistent usage of media queries can lead to a disjointed user experience. Keeping media queries defined in a centralized location (like a theme) helps maintain uniformity.

```js
// bad
const styles = {
  container: {
    width: "100%",
    "@media (max-width: 600px)": {
      width: "50%",
    },
  },
};

// good
const styles = (theme) => ({
  container: {
    width: "100%",
    [theme.breakpoints.small]: {
      width: "50%",
    },
  },
});
```

- Build responsive components using percentage-based widths and dynamic units.

> Why? Responsive designs should scale smoothly across devices. Using flexible units like percentages or viewport-based units ensures components can adapt to various screen sizes.

```js
// bad
const styles = {
  container: {
    width: "600px",
  },
};

// good
const styles = {
  container: {
    width: "100%",
    maxWidth: "90vw",
  },
};
```

---

## Common Pitfalls

- Overlapping styles: Be careful with conflicting styles in different parts of the component tree.

> Why? Overlapping styles can result in conflicts that are hard to track down, especially in large applications.

```js
// bad
const styles = {
  button: {
    color: "red",
  },
  container: {
    button: {
      color: "blue",
    },
  },
};

// good
const styles = {
  button: {
    color: "red",
  },
  specialButton: {
    color: "blue",
  },
};
```

- Style objects with conditional logic: Avoid placing too much logic into style objects.

> Why? While it's possible to use JavaScript conditions to modify styles dynamically, overusing them can lead to cluttered, hard-to-read code.

```js
// bad
const styles = (isActive) => ({
  button: {
    color: isActive ? "green" : "red",
  },
});

// good
const styles = {
  buttonActive: {
    color: "green",
  },
  buttonInactive: {
    color: "red",
  },
};
```

- Forgetting to centralize breakpoints: Always define breakpoints and styles centrally.

> Why? Managing breakpoints centrally helps in maintaining consistent responsiveness across your app and avoids duplicate logic.

```js
Copy code
// bad
const styles = {
  button: {
    width: '100%',
    '@media (max-width: 500px)': {
      width: '50%',
    },
  },
};

// good
const styles = (theme) => ({
  button: {
    width: '100%',
    [theme.breakpoints.small]: {
      width: '50%',
    },
  },
});

```
