import { Linter } from 'eslint';

import { possibleErrors } from './rules/possibleErrors';
import { bestPractices } from './rules/bestPractices';
import { strictMode } from './rules/strictMode';
import { variables } from './rules/variables';
import { stylisticIssues } from './rules/stylisticIssues';
import { es6 } from './rules/es6';
import * as imports from './rules/imports';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    ...possibleErrors,
    ...bestPractices,
    ...strictMode,
    ...variables,
    ...stylisticIssues,
    ...es6,
    ...imports.staticAnalysis,
    ...imports.helpfulWarnings,
    ...imports.moduleSystems,
    ...imports.styleGuide,
  },
};

export = config;
