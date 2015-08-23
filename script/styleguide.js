// construct a styleguide, using javascript

import {
  Text,
  HTML,
  Heading,
  List,
  ListItem,
  Link,
} from './nodes';

export class Section {
  constructor(title, rules = [], otherChildren = []) {
    this.title = title;
    this.rules = rules;
    this.otherChildren = [];
  }

  toAST(sectionIndex) {
    const nodes = [];
    nodes.push(this.heading())

    const listItems = this.rules.map(r, idx => r.toAST(sectionIndx, idx));
    nodes.push(new List(listItems));

    nodes.push(this.backToTop());
    return nodes;
  }

  heading() {
    const title = new Text(this.title);
    return new Heading(2, title);
  }

  backToTop() {
    // TODO: add unicode up arrow
    return new Link('#table-of-contents', new Text('back to top'));
  }
}

export class Rule {
  constructor(summary, children = [], optionalReferences = []) {
    this.summary = summary;
    this.children = children;
    this.refs = optionalReferences;
  }

  toAST(sectionIndex, ruleIndex) {
    const renderedSummary = new Paragraph(this.anchor().concat(this.summary));
    return new ListItem([renderedSummary].concat(this.children));
  }

  id(sectionIdx, ruleIdx) {
    return `${sectionIdx}.${ruleIdx}`;
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

