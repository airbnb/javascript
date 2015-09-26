/**
 * this may be too ambitious.
 *
 * 1. Parse our styleguide for code examples.
 * 2. split out "good", "bad", and "best" examples using cursory parsing
 *
 * For each example:
 *  - fail a test for anything that isn't valid javascript. This indicates we
 *    need to improve the format of the README and the code of generateTestCases.
 *
 * For good:
 * For best:
 *  - fail if it doesn't lint.
 *
 * For bad:
 *  - fail if it lints successfully.
 *
 * Lots of things will fail to start with, but it gives us a view on how
 * true-to-spec our .eslintrc is.
 */
import { makeLint } from './helpers';
import { analyze, loadReadme } from './generateTestCases';
import test from 'tape';

const lint = makeLint();
const examples = analyze(loadReadme());

// run callback for each example
// callback gets parameters (t, example, lintResult)
function testEachExample(t, testName, address, examples, callback) {
  t.test(testName, t => {
    examples.forEach((example, idx) => {
      t.test(`${address}[${idx}]`, t => {
        // always make sure that the test is valid JS code.
        const lintResult = lint(example);
        const fatalErrors = lintResult.messages.filter(m => m.fatal);
        // deepEquals give us a nice print out of the errors themselves.
        t.deepEquals(fatalErrors, [], 'there are no fatal parsing/linting errors');

        // callback to run other tests
        callback(t, example, lintResult);
      });
    });
  });
}

test('GENERATED TESTS FROM README.MD', t => {

  testEachExample(t, 'good examples pass linting', 'examples.good', examples.good,
    (t, example, lintResult) => {
      const hasRules = lintResult.messages.filter(m => !!m.ruleId);
      t.deepEquals(hasRules, [], 'no messages with rules (perfect validation)');
      t.end();
    }
  );

  testEachExample(t, 'best examples pass linting', 'examples.best', examples.best,
    (t, example, lintResult) => {
      const hasRules = lintResult.messages.filter(m => !!m.ruleId);
      t.deepEquals(hasRules, [], 'no messages with rules (perfect validation)');
      t.end();
    }
  );

  testEachExample(t, 'bad examples fail linting', 'examples.bad', examples.bad,
    (t, example, lintResult) => {
      const hasRules = lintResult.messages.filter(m => !!m.ruleId);
      t.ok(lintResult.errorCount || lintResult.warningCount, 'has warnings or errors');
      t.equal(hasRules.length, lintResult.errorCount + lintResult.warningCount,
             'has exactly zero syntax errors while having other errors');
      t.end();
    }
  );
});
