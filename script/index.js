import fs from 'fs';
import mdast from 'mdast';
import path from 'path';
import inspect from 'unist-util-inspect';
import { Section, Rule } from './styleguide';
import headingRange from 'mdast-util-heading-range';
import { GroupedHeadingChildren } from './nodes';
import visit from 'unist-util-visit';

/**
 * this script does the following:
 * 1. read all markdown files in ../sections
 * 2. strip generateTestCases information and metadata
 * 3. re-format the markdown into the style used in the README
 *  - #  --> section title with backlink
 *  - ## --> list item with nice numbered link
 *  - ```javascript-no-test -> ```javascript
 *  - end-of-section: insert a link to the table of contents
 * 4. generate a new README.md from the ast using toMarkdown
 *
 * this script is synchronous for now.
 */

/**
 * strip out metadata comments or testcase-only text from the contents of a
 * javascript code block. For instance, we have special code blocks like this
 * that contain setup code needed in lint-testing but not desired for
 * pedagogical reasons.
 *
 * ```javascript
 * // test-only
 * import foo from 'bar';
 * const a = 1;
 * const b = 2;
 * // end-test-only
 *
 * // (rest of code example continues as normal)
 * ```
 * 
 * TODO reimplement with generateTestCases code for real
 *
 * @param {String} javascript
 * @return {String} javascript without metadata
 */
function stripTestCases(javascript) {
  return javascript;
}

function toJSON(obj) {
  return String(JSON.stringify(obj, null, '  '));
}

// return an array of { heading :: Heading, children :: Array<Node> }/
// of all headings of a given depth in the tree
function headingAndChildren(tree, depth, mutate = false) {
  let section = null;

  function test(asText, node) { 
    return node.depth === depth;
  }

  function visitor(heading, brokenLibraryChildrenDoNotUse, nextHeading, extra) {
    const childrenStart = extra.start + 1;
    const childrenEnd = extra.end === null ? extra.parent.children.length + 1 : extra.end;
    const children = extra.parent.children.slice(childrenStart, childrenEnd);
    const group = new GroupedHeadingChildren(heading, children);
    section = group;

    if (mutate) {
      return [group, nextHeading];
    } else {
      return null;
    }
  }

  const search = headingRange(test, visitor)();
  search(tree);
  return section;
}

function doesNodeExist(tree, predicate) {
  let exists = false;
  visit(tree, function(node, index, parent) {
    if (predicate(node, index, parent)) {
      exists = true;
      return false;
    }
  });

  return exists;
}

function groupHeadings(orig) {
  const tree = JSON.parse(toJSON(orig));
  const groupsByDepth = {};
  for (let depth=6; depth>=1; depth--) {
    const groups = [];
    let run = 0;
    while(doesNodeExist(tree, node => node.type === 'heading' && node.depth === depth)) {
      console.error(`\n\nDEPTH: ${depth} RUN ${run}`);
      console.error(inspect(tree));
      groups.push(headingAndChildren(tree, depth, true));
      run++;
    }
    groupsByDepth[depth] = groups;
  }

  return groupsByDepth;
}

// grab the "children" of all level-1 headings
//function extractSections(tree) {
//  const test = node => node.type === 'heading' && node.depth === 1;
//  const sections = [];
//  const makeSearch = headingRange(test, function capture(start, children, end) {
//    sections.push({title: start, children: children });
//
//    // have to do this so the whole thing is a no-op instead of a transform
//    const most = [start].concat(children);
//    if (end) most.push(end);
//    return most;
//  });
//  const search = makeSearch();
//
//  search(tree);
//  return sections;
//}

function main() {
  // const filename = path.join(__dirname, '../sections/06_Strings.md');
  const filename = path.join(__dirname, '../sections/05_Destructuring.md');
  const input = fs.readFileSync(filename, 'utf-8');
  const tree = mdast.parse(input);
  visit(tree, 'code', code => code.value = '(elided)');

  //const h1s = headingAndChildren(tree, 1);
  const wat = groupHeadings(tree);
  //console.error(toJSON(tree));
  //console.error(inspect(tree));
}

if (require.main === module) main();
