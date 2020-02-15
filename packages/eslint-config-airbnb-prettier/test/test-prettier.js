import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '..';
import prettierRule from '../rules/prettier';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  rules: {
    // It is okay to import devDependencies in tests.
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    // this doesn't matter for tests
    'lines-between-class-members': 0,
  },
});

function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}


test('validate react prop order', (t) => {
  t.test('make sure our eslintrc has the prettier plugin and config as dependencies', (t) => {
    t.plan(2);
    t.deepEqual(prettierRule.plugins, ['prettier']);
    t.deepEqual(prettierRule.extends, ['prettier', 'prettier/react']);
  });

  t.test('passes a good component', (t) => {
    t.plan(3);
    const result = lint(`
    function HelloWorld({
      greeting = "hello",
      greeted = '"World"',
      silent = false,
      onMouseOver
    }) {
      if (!greeting) {
        return null;
      }
    
      // TODO: Don't use random in render
      let num = Math.floor(Math.random() * 1e7)
        .toString()
        .replace(/\.\d+/gi, "");
    
      return (
        <div
          className="HelloWorld"
          title={\`You are visitor number\`}
          onMouseOver={onMouseOver}
        >
          <strong>
            {greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}
          </strong>
          {greeting.endsWith(",") ? (
            " "
          ) : (
            <span style={{ color: "grey" }}>", "</span>
          )}
          <em>{greeted}</em>
          {silent ? "." : "!"}
        </div>
      );
    }
`);

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });
});
