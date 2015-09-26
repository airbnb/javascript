/**
 * this file loads code examples from markdown README.
 */
const marked = require('marked');
const path = require('path');
const fs = require('fs');

const GOOD = '// good\n';
const BAD = '// bad\n';
const BEST = '// best\n';

export const README_PATH = path.normalize(path.join(__dirname, '../../../README.md'));

const DELIM_MAP = {
  [GOOD]: 'good',
  [BAD]: 'bad',
  [BEST]: 'best',
};

const DELIMETERS = [
  GOOD,
  BAD,
  BEST,
];

function log(...things) {
  if (true) return;
  console.error(...things);
}

/**
 * given a block of JS code with // good and // bad delimiters,
 * split out the good and bad code, and return them.
 *
 * Returns an object of shape { good :: Array<String>, bad :: Array<string> }
 */
function extractExamples(text) {
  // TODO this won't lint, switch to es6 :)
  const delimiter = new RegExp(`(${DELIMETERS.join('|')})`);
  const result = DELIMETERS.reduce((memo, delim) => {
    memo[DELIM_MAP[delim]] = [];
    return memo;
  }, {});
  log(result);
  const parts = text.split(delimiter).filter(Boolean);
  let currentDelimeter = null;
  let first = true;

  parts.forEach(part => {
    log(`saw part "${part}"`);
    if (DELIMETERS.indexOf(part) >= 0) {
      // this is a delimeter
      currentDelimeter = part;
      first = false;
      log('  its a delimiter');
      return;
    }

    if (currentDelimeter) {
      result[DELIM_MAP[currentDelimeter]].push(part);
      log(`added to result[${currentDelimeter}]: `, result[currentDelimeter]);
      currentDelimeter = null;
      return;
    }

    if (first) {
      result.prepend = part;
      first = false;
      log('  was first');
    }

    log('  skipped.');
  });

  return result;
}

function buildExamples(extracted) {
  if (!(extracted.good.length || extracted.bad.length || extracted.best.length)) {
    // it was a code block without examples.
    return null;
  }

  const good = extracted.good.map(code => `${extracted.prepend || ''}\n${code}`);
  const bad = extracted.bad.map(code => `${extracted.prepend || ''}\n${code}`);
  const best = extracted.best.map(code => `${extracted.prepend || ''}\n${code}`);

  return { good, bad, best };
}

function group(arrayOfExamples) {
  const result = {
    good: [],
    bad: [],
    best: [],
  };

  return arrayOfExamples.filter(Boolean).reduce((result, examples) => {
    result.good = result.good.concat(examples.good);
    result.bad = result.bad.concat(examples.bad);
    result.best = result.best.concat(examples.best);
    return result;
  }, result);
}

/**
 * parse out the grouped code examples from some markdown text
 */
export function analyze(markdown) {
  const tokens = marked.lexer(markdown);
  const codes = tokens.filter(token => token.type === 'code' && token.lang === 'javascript')
    .map(token => token.text);
  const extracted = codes.map(extractExamples);
  const examples = extracted.map(buildExamples);
  const grouped = group(examples);
  log(grouped);
  return grouped;
}

export function loadReadme() {
  return fs.readFileSync(README_PATH, 'utf-8');
}

function main() {
  const readme = loadReadme();
  analyze(readme);
}

if (require.main === module) {
  main();
}
