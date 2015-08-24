// construct a styleguide, using javascript
import visit from 'unist-util-visit';
import assert from 'assert';
import textOf from 'mdast-util-to-string';
import inspect from 'unist-util-inspect';

import {
  Node,
  Parent,
  Text,
  HTML,
  Heading,
  List,
  ListItem,
  Link,
  Paragraph,
  Root,
} from './nodes';

function needsFlatten(array) {
  return array.filter(o => Array.isArray(o)).length > 0
}

function flatten(array) {

  if (!needsFlatten(array)) return array;

  return flatten(array.reduce((all, item) => all.concat(item), []));
}

export class OutlineSection extends Parent {
  constructor(heading, children = []) {
    super('ext.OutlineSection', children);
    this.heading = heading;
    this.depth = this.heading.depth;
  }

  toAST() {
    return [this.heading].concat(this.children);
  }
}

// pulls a code but doesn't show a value in the tree
export class HiddenCode extends Node {
  constructor(code) {
    super('ext.HiddenCode');
    this.code = clone(code);
    this.value = '(hidden in inspector)';
  }

  toAST() {
    return this.code;
  }
}

export class Styleguide extends Parent {
  constructor(sections = []) {
    super('ext.Styleguide', sections);
  }

  toAST() {
    return this.children.map((section, idx) => section.toAST(idx))
  }
}

export class Section extends Node {
  constructor(title, rules = [], preChildren = [], postChildren = []) {
    super('ext.Section');
    this.title = title;
    this.rules = rules;
    this.value = textOf(new Paragraph(this.title));

    // non-rule-items before and after the list
    this.preChildren = [];
    this.postChildren = [];
  }

  toAST(sectionIndex) {
    const nodes = [];
    nodes.push(this.heading())
    nodes.push(this.preChildren);

    const listItems = this.rules.map((r, idx) => r.toAST(sectionIndex, idx));
    nodes.push(new List(listItems));

    nodes.push(this.postChildren);
    nodes.push(this.backToTop());

    return nodes;
  }

  heading() {
    return new Heading(2, this.title);
  }

  backToTop() {
    // TODO: add unicode up arrow
    return new Link('#table-of-contents', new Text('⬆ back to top'));
  }
}

export class Rule extends Parent {
  constructor(summary, children = [], extraAnchors = []) {
    super('ext.Rule', children);
    this.summary = summary;
    this.anchors = extraAnchors;
  }

  toAST(sectionIndex, ruleIndex) {
    // TODO: include this.anchors for more anchors
    const renderedSummary = new Paragraph(this.anchor(sectionIndex, ruleIndex)
                                          .concat(this.summary));
    return new ListItem([renderedSummary].concat(this.children));
  }

  id(sectionIdx, ruleIdx) {
    return `${sectionIdx + 1}.${ruleIdx + 1}`;
  }

  anchor(sectionIdx, ruleIdx) {
    const id = this.id(sectionIdx, ruleIdx);
    const linkHere = new Link(`#${id}`, new Text(id));
    return [
      linkHere,
      new Text(' '),
      new HTML(`<a name="${id}">`),
      new HTML(`</a>`),
      new Text(' '),
    ];
  }
}

function ruleOfOutline(outline) {
  assert.equal(outline.type, 'ext.OutlineSection');
  assert.equal(outline.depth, 2);

  const summary = outline.heading.children;
  const children = outline.children;
  return new Rule(summary, children);
}

function sectionOfOutline(outline) {
  assert.ok(outline, 'outline is defined');
  assert.equal(outline.type, 'ext.OutlineSection');
  assert.equal(outline.depth, 1, 'the outline is top-level (from H1 tag)');

  const rules = outline.children.map(ruleOfOutline);
  return new Section(outline.heading.children, rules);
}

export function sectionOfTree(extendedTree) {
  const root = extendedTree.children[0];
  try {
    return sectionOfOutline(root);
  } catch (err) {
    console.error(inspect(root || {value: '`root` was falsy or undefined'}));
    throw err;
  }
}

/**
 * take a markdown AST with our extended classes (of type `ext.*`) and convert
 * it into a regular AST by visiting every node and calling node.toAST if it is
 * defined.
 */
export function toMarkdownAST(extendedTree) {
  function convertNode(node) {
    if (!node.toAST) return node;
    return node.toAST();
  }

  function anyNeedsConversion(nodes) {
    return nodes.reduce((any, cur) => !!cur.toAST || any, false)
  }

  function convertNodeArray(nodes) {
    const converted = nodes.map(convertNode);
    return flatten(converted);
  }

  function visitNode(node) {
    if (!node.children) return;
    while (anyNeedsConversion(node.children)) {
      node.children = convertNodeArray(node.children);
    }
    node.children.forEach(visitNode);
  }

  visitNode(extendedTree);
  return extendedTree;
}
