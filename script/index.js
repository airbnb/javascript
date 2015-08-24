import fs from 'fs';
import mdast from 'mdast';
import path from 'path';
import inspect from 'unist-util-inspect';
import { Section, Rule, OutlineSection, Styleguide, toMarkdownAST, sectionOfTree } from './styleguide';
import { Root } from './nodes';
import headingRange from 'mdast-util-heading-range';
import visit from 'unist-util-visit';
import glob from 'glob';

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

  // we should be using arg #2 here, but the library is broken until my PR is merged here:
  // https://github.com/wooorm/mdast-util-heading-range/pull/1
  // fortunatley there's a workaround ;)
  function visitor(heading, brokenLibraryChildrenDoNotUse, nextHeading, extra) {
    const childrenStart = extra.start + 1;
    const childrenEnd = extra.end === null ? extra.parent.children.length + 1 : extra.end;
    const children = extra.parent.children.slice(childrenStart, childrenEnd);
    const group = new OutlineSection(heading, children);
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

function nodeExists(tree, predicate) {
  let exists = false;
  visit(tree, function(node, index, parent) {
    if (predicate(node, index, parent)) {
      exists = true;
      return false;
    }
  });

  return exists;
}

class StyleguideBuilder {
  constructor() {
    this.sectionBuilders = {};
    this.buildersInOrder = [];
  }

  loadSectionFile(filename) {
    const source = fs.readFileSync(filename, 'utf-8');
    const builder =  new SectionBuilder(source, filename);
    this.sectionBuilders[filename] = builder;
    this.buildersInOrder.push(builder);
  }

  loadSectionDirectory(dirname) {
    const sectionFilenames = glob.sync(path.join(dirname, '*.md'));
    sectionFilenames.forEach(fname => this.loadSectionFile(fname));
  }

  build() {
    const sections = this.buildersInOrder
      .map(builder => builder.build())
      .filter(Boolean);

    console.error(`have ${sections.length} sections`);

    return new Styleguide(sections);
  }
}

class SectionBuilder {
  constructor(source, filename) {
    this.filename = filename;
    this.source = source;
    this.raw = mdast.parse(this.source);
  }

  build() {
    console.error(`building ${this.filename} (length: ${this.source.length})`);
    const tree = clone(this.raw);
    groupHeadings(tree);

    let section;
    try {
      section = sectionOfTree(tree);
    } catch (err) {
      console.error(`ERROR: section ${this.filename} failed convert AST to Section`);
      return null;
    }

    // TODO: make these explicit constructor parameters?
    section.source = this.source;
    section.filename = this.filename;
    return section;
  }
}

// note: cloning will only work well on vanilla, unextended AST trees. we will
// need to get more complicated if we want to deep-copy enhanced trees since
// they're instances of classes instead of plain old javascript objects.
function clone(tree) {
  return JSON.parse(toJSON(tree));
}

/**
 * transform a markdown document into outline format with subheadings and text
 * the explicit children of parent headings.
 * @param {Node} original - the tree to transform
 * @param {Boolean?} mutate - default true. modify in place, or construct a new tree?
 */
function groupHeadings(original, mutate = true) {
  const tree = mutate ? original : JSON.parse(toJSON(original));
  const groupsByDepth = {};
  for (let depth=6; depth>=1; depth--) {
    const groups = [];
    let run = 0;
    while(nodeExists(tree, node => node.type === 'heading' && node.depth === depth)) {
      groups.push(headingAndChildren(tree, depth, true));
      run++;
    }
    groupsByDepth[depth] = groups;
  }

  return groupsByDepth;
}

function testBuildingSection() {
  // const filename = path.join(__dirname, '../sections/06_Strings.md');
  const filename = path.join(__dirname, '../sections/05_Destructuring.md');
  const input = fs.readFileSync(filename, 'utf-8');

  console.error('\n\n\nINPUT MARKDOWN TEXT:');
  console.error(input);

  const tree = mdast.parse(input);
  visit(tree, 'code', code => code.value = '(elided)');

  console.error('\n\n\nORIGINAL:');
  console.error(inspect(tree));

  const wat = groupHeadings(tree);

  console.error('\n\n\nGROUPED:');
  console.error(inspect(tree));

  const section = sectionOfTree(tree);
  const styleguide = new Styleguide(section);
  const styleRoot = root(styleguide);
  console.error('\n\n\nSTYLING:');
  console.error(inspect(styleRoot));

  console.error('\n\n\nBACK BABY:');
  console.error(inspect(toMarkdownAST(styleRoot)));

  console.error('\n\n\nAND VIOLA:');
  console.error(mdast.stringify(styleRoot));
}

function testBuildingStyleguide() {
  const dirname = path.join(__dirname, '../sections');
  const builder = new StyleguideBuilder();
  builder.loadSectionDirectory(dirname);
  const styleguide = builder.build();

  console.error('GUIDE', styleguide);

  const mkdwn = toMarkdownAST(root(styleguide));
  console.error(inspect(mkdwn));
  const text = mdast.stringify(mkdwn);

  console.log(text);
}

function root(tree) {
  if (Array.isArray(tree) || tree.type !== 'root') {
    return new Root(tree);
  }
  return tree;
}

if (require.main === module) testBuildingStyleguide();
