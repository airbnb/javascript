import { Linter } from "eslint";

// ✅ = recommended, 🔧 = fixable
export const props: Linter.RulesRecord = {
    /** Enforces consistent naming for boolean props
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md */
    'react/boolean-prop-naming': 'off',

    /** Enforce all defaultProps are defined and not "required" in propTypes
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md */
    'react/default-props-match-prop-types': 'off',

    /** Forbid certain props on components
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md */
    'react/forbid-component-props': 'off',

    /** Forbid certain props on DOM Nodes
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md */
    'react/forbid-dom-props': 'off',

    /** Forbid using another component's propTypes
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md */
    'react/forbid-foreign-prop-types': 'off',

    /** Forbid certain propTypes
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md */
    'react/forbid-prop-types': 'off',

    /** Prevent usage of unknown DOM property ✅ 🔧
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md */
    'react/no-unknown-property': 'error',

    /** Prevent definitions of unused prop types
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md */
    'react/no-unused-prop-types': 'off',

    /** Prefer exact proptype definitions
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md */
    'react/prefer-exact-props': 'off',

    /** Require read-only props 🔧
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md */
    'react/prefer-read-only-props': 'off',

    /** Prevent missing props validation in a React component definition ✅
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md */
    'react/prop-types': 'error',

    /** Enforce a defaultProps definition for every prop that is not a required prop
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md */
    'react/require-default-props': 'off',

    /** Enforce propTypes declarations alphabetical sorting
    * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md */
    'react/sort-prop-types': 'off',
};
