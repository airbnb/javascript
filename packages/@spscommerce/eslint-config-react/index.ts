import { Linter } from 'eslint';

import { base } from "./rules/base";
// Included for completeness, but all these rules are off because class components are forbidden
import { classComponents } from './rules/classComponents';
import { props } from './rules/props';

const config: Linter.Config = {
  plugins: [
    'react',
    'react-prefer-function-component',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    ...base,
    ...classComponents,
    ...props,
  },
};

export = config;
