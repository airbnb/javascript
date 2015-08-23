// this file implements constructors for mdastnode
// https://github.com/wooorm/mdast/blob/master/doc/mdastnode.7.md
import textOfNode from 'mdast-util-to-string';

export class Node {
  constructor(type) {
    this.type = type;
  }
}

export class Parent extends Node {
  constructor(type, children = []) {
    super(type);

    // allow lazy input of single children
    if (!Array.isArray(children)) {
      this.children = [children];
    } else {
      this.children = children;
    }
  }
}

export class Text extends Node {
  constructor(value) {
    super('text');
    this.value = value;
  }
}

export class HTML extends Node {
  constructor(html) {
    super('html');
    this.value = html;
  }
}

export class Heading extends Parent {
  constructor(depth, children = []) {
    super('heading', children);
    this.depth = parseInt(depth, 10);
  }
}

export class Paragraph extends Parent {
  constructor(children = []) {
    super('paragraph', children);
  }
}

export class Link extends Parent {
  constructor(href, children = [], title = null) {
    super('link', children);
    this.href = href;
    this.title = title;
  }
}

export class List extends Parent {
  constructor(children = [], ordered = false, start = null) {
    super('list', children);
    this.ordered = ordered;
    this.start = start;
    this.updateLoose();
  }

  updateLoose() {
    const children = this.children;
    // only true when we have children and all the children have loose = false
    const strict = children.length > 0 &&
      children.filter(c => c.loose === false).length === children.length;
    this.loose = !strict;
  }
}

export class ListItem extends Parent {
  constructor(children = [], loose = true) {
    super('listItem', children);
    this.loose = loose;
  }
}

export class GroupedHeadingChildren extends Parent {
  constructor(heading, children = []) {
    super('ext.GroupedHeadingChildren-' + heading.depth, children);
    this.heading = heading;
    this.value = textOfNode(this.heading);
  }
}
