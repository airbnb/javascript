import type { Linter } from "eslint";

import { base } from "./rules/base";
// Included for completeness, but all these rules are off because class components are forbidden
import { classComponents } from "./rules/classComponents";
import { props } from "./rules/props";
import { preferFunctionComponent } from "./rules/preferFunctionComponent";
import { hooks } from "./rules/hooks";
import { a11y } from "./rules/a11y";

const config: Linter.Config = {
  plugins: [
    "react",
    "react-prefer-function-component",
    "react-hooks",
    "jsx-a11y",
  ],
  rules: {
    ...base,
    ...classComponents,
    ...props,
    ...preferFunctionComponent,
    ...hooks,
    ...a11y,
  },
};

export = config;
