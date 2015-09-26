import { CLIEngine } from 'eslint';
import eslintrc from '../';

export function makeLint(config = eslintrc) {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: eslintrc,
  });

  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  return function lint(text) {
    return cli.executeOnText(text).results[0];
  };
}
