import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '../';
import reactRules from '../rules/react';
import reactA11yRules from '../rules/react-a11y';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,

  rules: {
    // It is okay to import devDependencies in tests.
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
  },
});

function lint(text) {
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0 */
${body}
}
`;
}

test('validate react prop order', (t) => {
  t.test('make sure our eslintrc has React and JSX linting dependencies', (t) => {
    t.plan(2);
    t.deepEqual(reactRules.plugins, ['react']);
    t.deepEqual(reactA11yRules.plugins, ['jsx-a11y', 'react']);
  });

  t.test('passes a good component', (t) => {
    t.plan(3);
    const result = lint(wrapComponent(`
  componentWillMount() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  someMethod() {}
  renderDogs() {}
  render() { return <div />; }`));

    t.notOk(result.warningCount, 'no warnings');
    t.notOk(result.errorCount, 'no errors');
    t.deepEquals(result.messages, [], 'no messages in results');
  });

  t.test('order: when random method is first', (t) => {
    t.plan(2);
    const result = lint(wrapComponent(`
  someMethod() {}
  componentWillMount() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.equal(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
  });

  t.test('order: when random method after lifecycle methods', (t) => {
    t.plan(2);
    const result = lint(wrapComponent(`
  componentWillMount() {}
  componentDidMount() {}
  someMethod() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.equal(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
  });
});
