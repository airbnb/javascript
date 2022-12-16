import test from 'tape';
import { CLIEngine, ESLint } from 'eslint';
import eslintrc from '..';
import reactRules from '../rules/react';
import reactA11yRules from '../rules/react-a11y';

const rules = {
  // It is okay to import devDependencies in tests.
  'import/no-extraneous-dependencies': [2, { devDependencies: true }],
  // this doesn't matter for tests
  'lines-between-class-members': 0,
  // otherwise we need some junk in our fixture code
  'react/no-unused-class-component-methods': 0,
};
const cli = new (CLIEngine || ESLint)({
  useEslintrc: false,
  baseConfig: eslintrc,
  ...(CLIEngine ? { rules } : { overrideConfig: { rules } }),
});

async function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = CLIEngine ? cli.executeOnText(text) : await cli.lintText(text);
  return (CLIEngine ? linter.results : linter)[0];
}

function wrapComponent(body) {
  return `\
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0 */
${body}}
`;
}

test('validate react methods order', (t) => {
  t.test('make sure our eslintrc has React and JSX linting dependencies', (t) => {
    t.plan(2);
    t.deepEqual(reactRules.plugins, ['react']);
    t.deepEqual(reactA11yRules.plugins, ['jsx-a11y', 'react']);
  });

  t.test('passes a good component', async (t) => {
    const result = await lint(wrapComponent(`
  componentDidMount() {}
  handleSubmit() {}
  onButtonAClick() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  someMethod() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.notOk(result.warningCount, 'no warnings');
    t.deepEquals(result.messages, [], 'no messages in results');
    t.notOk(result.errorCount, 'no errors');
  });

  t.test('order: when random method is first', async (t) => {
    const result = await lint(wrapComponent(`
  someMethod() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });

  t.test('order: when random method after lifecycle methods', async (t) => {
    const result = await lint(wrapComponent(`
  componentDidMount() {}
  someMethod() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });

  t.test('order: when handler method with `handle` prefix after method with `on` prefix', async (t) => {
    const result = await lint(wrapComponent(`
  componentDidMount() {}
  onButtonAClick() {}
  handleSubmit() {}
  setFoo() {}
  getFoo() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });

  t.test('order: when lifecycle methods after event handler methods', async (t) => {
    const result = await lint(wrapComponent(`
  handleSubmit() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });

  t.test('order: when event handler methods after getters and setters', async (t) => {
    const result = await lint(wrapComponent(`
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  handleSubmit() {}
  render() { return <div />; }
`));

    t.ok(result.errorCount, 'fails');
    t.deepEqual(result.messages.map((msg) => msg.ruleId), ['react/sort-comp'], 'fails due to sort');
  });
});
