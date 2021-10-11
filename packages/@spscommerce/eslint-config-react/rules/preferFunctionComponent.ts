import { Linter } from "eslint";

export const preferFunctionComponent: Linter.RulesRecord = {
    /** Require that all React components be functions, not classes.
     * The `allowComponentDidCatch` configuration permits one to write an Error Boundary,
     * as there is currently no other way to do this but with a class component.
     * https://github.com/tatethurston/eslint-plugin-react-prefer-function-component#readme */
    'react-prefer-function-component/react-prefer-function-component': [
        "error",
        { allowComponentDidCatch: false },
    ],
};
