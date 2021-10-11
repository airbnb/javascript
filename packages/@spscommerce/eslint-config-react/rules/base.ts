import { Linter } from "eslint";

// ✅ = recommended, 🔧 = fixable
export const base: Linter.RulesRecord = {
    /** Forbid "button" element without an explicit "type" attribute
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md */
    'react/button-has-type': 'off',

    /** Enforce consistent usage of destructuring assignment of props, state, and context
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md */
    'react/destructuring-assignment': 'off',

    /** Prevent missing displayName in a React component definition ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md */
    'react/display-name': 'error',

    /** Forbid certain elements
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md */
    'react/forbid-elements': 'off',

    /** Standardize the way function components get defined 🔧
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md */
    'react/function-component-definition': 'off',

    /** Prevent adjacent inline elements not separated by whitespace
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md */
    'react/no-adjacent-inline-elements': 'off',

    /** Prevent usage of Array index in keys
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md */
    'react/no-array-index-key': 'off',

    /** Prevent passing of children as props ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md */
    'react/no-children-prop': 'error',

    /** Prevent usage of dangerous JSX props
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md */
    'react/no-danger': 'off',

    /** Report when a DOM element is using both children and dangerouslySetInnerHTML ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md */
    'react/no-danger-with-children': 'error',

    /** Prevent usage of deprecated methods ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md */
    'react/no-deprecated': 'error',

    /** Prevent usage of findDOMNode ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md */
    'react/no-find-dom-node': 'off',

    /** Prevent multiple component definition per file
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md */
    'react/no-multi-comp': 'off',

    /** Enforce that namespaces are not used in React elements
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md */
    'react/no-namespace': 'off',

    /** Report "this" being used in stateless components
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md */
    'react/no-this-in-sfc': 'off',

    /** Prevent common typos
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md */
    'react/no-typos': 'off',

    /** Detect unescaped HTML entities, which might represent malformed tags ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md */
    'react/no-unescaped-entities': 'error',

    /** Prevent creating unstable components inside components
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md */
    'react/no-unstable-nested-components': 'off',

    /** Enforce stateless components to be written as a pure function
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md */
    'react/prefer-stateless-function': 'off',

    /** Prevent missing React when using JSX ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md */
    'react/react-in-jsx-scope': 'off',

    /** Prevent extra closing tags for components without children 🔧
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md */
    'react/self-closing-comp': 'off',

    /** Enforce style prop value is an object
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md */
    'react/style-prop-object': 'off',

    /** Prevent passing of children to void DOM elements (e.g. `<br />`)
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md */
    'react/void-dom-elements-no-children': 'off',
};
