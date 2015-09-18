import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '../';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
});

function lint(text) {
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  return cli.executeOnText(text).results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';
export default class MyComponent extends React.Component {
${body}
}
`;
}

test('validate react prop order', tst => {
  tst.test('make sure our eslintrc has React linting dependencies', tst => {
    tst.plan(2);
    tst.equal(eslintrc.parser, 'babel-eslint', 'uses babel-eslint');
    tst.equal(eslintrc.plugins[0], 'react', 'uses eslint-plugin-react');
  });

  tst.test('passes a good component', tst => {
    tst.plan(3);
    const result = lint(wrapComponent(`
  componentWillMount() {  }
  componentDidMount() {  }
  setFoo() {  }
  getFoo() {  }
  setBar() {  }
  someMethod() {  }
  renderDogs() {  }
  render() { return <div />; }
`));

    tst.notOk(result.warningCount, 'no warnings');
    tst.notOk(result.errorCount, 'no errors');
    tst.deepEquals(result.messages, [], 'no messages in results');
  });

  tst.test('order: when random method is first', tst => {
    tst.plan(2);
    const result = lint(wrapComponent(`
  someMethod() {  }
  componentWillMount() {  }
  componentDidMount() {  }
  setFoo() {  }
  getFoo() {  }
  setBar() {  }
  renderDogs() {  }
  render() { return <div />; }
`));

    tst.ok(result.errorCount, 'fails');
    tst.equal(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
  });

  tst.test('order: when random method after lifecycle methods', tst => {
    tst.plan(2);
    const result = lint(wrapComponent(`
  componentWillMount() {  }
  componentDidMount() {  }
  someMethod() {  }
  setFoo() {  }
  getFoo() {  }
  setBar() {  }
  renderDogs() {  }
  render() { return <div />; }
`));

    tst.ok(result.errorCount, 'fails');
    tst.equal(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
  });
});
