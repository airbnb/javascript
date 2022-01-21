import type { Linter } from "eslint";

// Included for completeness, but all rules are disabled because class components are forbidden.

// ✅ = recommended, 🔧 = fixable
export const classComponents: Linter.RulesRecord = {
  /**
   * Reports when this.state is accessed within setState
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
   */
  "react/no-access-state-in-setstate": "off",

  /**
   * Lifecycle methods should be methods on the prototype, not class fields 🔧
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
   */
  "react/no-arrow-function-lifecycle": "off",

  /**
   * Prevent usage of setState in componentDidMount
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
   */
  "react/no-did-mount-set-state": "off",

  /**
   * Prevent usage of setState in componentDidUpdate
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
   */
  "react/no-did-update-set-state": "off",

  /**
   * Prevent direct mutation of this.state ✅
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
   */
  "react/no-direct-mutation-state": "off",

  /**
   * Prevent usage of isMounted ✅
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
   */
  "react/no-is-mounted": "off",

  /**
   * Flag shouldComponentUpdate when extending PureComponent
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
   */
  "react/no-redundant-should-component-update": "off",

  /**
   * Prevent usage of the return value of React.render ✅
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
   */
  "react/no-render-return-value": "off",

  /**
   * Prevent usage of setState
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
   */
  "react/no-set-state": "off",

  /**
   * Prevent string definitions for references and prevent referencing this.refs ✅
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
   */
  "react/no-string-refs": "off",

  /**
   * Prevent usage of unsafe lifecycle methods
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
   */
  "react/no-unsafe": "off",

  /**
   * Prevent declaring unused methods of component class
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
   */
  "react/no-unused-class-component-methods": "off",

  /**
   * Prevent definition of unused state fields
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
   */
  "react/no-unused-state": "off",

  /**
   * Prevent usage of setState in componentWillUpdate
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
   */
  "react/no-will-update-set-state": "off",

  /**
   * Enforce ES5 or ES6 class for React Components
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
   */
  "react/prefer-es6-class": "off",

  /**
   * Enforce React components to have a shouldComponentUpdate method
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
   */
  "react/require-optimization": "off",

  /**
   * Enforce ES5 or ES6 class for returning value in render function ✅
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
   */
  "react/require-render-return": "off",

  /**
   * Enforce component methods order
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
   */
  "react/sort-comp": "off",

  /**
   * State initialization in an ES6 class component should be in a constructor
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
   */
  "react/state-in-constructor": "off",

  /**
   * Defines where React component static properties should be positioned
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
   */
  "react/static-property-placement": "off",
};
