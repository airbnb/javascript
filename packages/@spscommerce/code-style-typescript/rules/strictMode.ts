import { StrictMode } from 'eslint/rules/strict-mode';

export const strictMode: StrictMode = {
  /** disallow the 'use strict' directive
   * https://eslint.org/docs/rules/strict
   * this is handled for you and does not need to be present in your source files */
  strict: ['error', 'never'],
};
