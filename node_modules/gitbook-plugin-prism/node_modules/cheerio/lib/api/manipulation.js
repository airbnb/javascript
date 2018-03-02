var parse = require('../parse'),
    $ = require('../static'),
    updateDOM = parse.update,
    evaluate = parse.evaluate,
    utils = require('../utils'),
    domEach = utils.domEach,
    cloneDom = utils.cloneDom,
    isHtml = utils.isHtml,
    slice = Array.prototype.slice,
    _ = {
      flatten: require('lodash.flatten'),
      bind: require('lodash.bind'),
      forEach: require('lodash.foreach')
    };

// Create an array of nodes, recursing into arrays and parsing strings if
// necessary
exports._makeDomArray = function makeDomArray(elem, clone) {
  if (elem == null) {
    return [];
  } else if (elem.cheerio) {
    return clone ? cloneDom(elem.get(), elem.options) : elem.get();
  } else if (Array.isArray(elem)) {
    return _.flatten(elem.map(function(el) {
      return this._makeDomArray(el, clone);
    }, this));
  } else if (typeof elem === 'string') {
    return evaluate(elem, this.options);
  } else {
    return clone ? cloneDom([elem]) : [elem];
  }
};

var _insert = function(concatenator) {
  return function() {
    var elems = slice.call(arguments),
        lastIdx = this.length - 1;

    return domEach(this, function(i, el) {
      var dom, domSrc;

      if (typeof elems[0] === 'function') {
        domSrc = elems[0].call(el, i, $.html(el.children));
      } else {
        domSrc = elems;
      }

      dom = this._makeDomArray(domSrc, i < lastIdx);
      concatenator(dom, el.children, el);
    });
  };
};

/*
 * Modify an array in-place, removing some number of elements and adding new
 * elements directly following them.
 *
 * @param {Array} array Target array to splice.
 * @param {Number} spliceIdx Index at which to begin changing the array.
 * @param {Number} spliceCount Number of elements to remove from the array.
 * @param {Array} newElems Elements to insert into the array.
 *
 * @api private
 */
var uniqueSplice = function(array, spliceIdx, spliceCount, newElems, parent) {
  var spliceArgs = [spliceIdx, spliceCount].concat(newElems),
      prev = array[spliceIdx - 1] || null,
      next = array[spliceIdx] || null;
  var idx, len, prevIdx, node, oldParent;

  // Before splicing in new elements, ensure they do not already appear in the
  // current array.
  for (idx = 0, len = newElems.length; idx < len; ++idx) {
    node = newElems[idx];
    oldParent = node.parent || node.root;
    prevIdx = oldParent && oldParent.children.indexOf(newElems[idx]);

    if (oldParent && prevIdx > -1) {
      oldParent.children.splice(prevIdx, 1);
      if (parent === oldParent && spliceIdx > prevIdx) {
        spliceArgs[0]--;
      }
    }

    node.root = null;
    node.parent = parent;

    if (node.prev) {
      node.prev.next = node.next || null;
    }

    if (node.next) {
      node.next.prev = node.prev || null;
    }

    node.prev = newElems[idx - 1] || prev;
    node.next = newElems[idx + 1] || next;
  }

  if (prev) {
    prev.next = newElems[0];
  }
  if (next) {
    next.prev = newElems[newElems.length - 1];
  }
  return array.splice.apply(array, spliceArgs);
};

exports.appendTo = function(target) {
  if (!target.cheerio) {
    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
  }

  target.append(this);

  return this;
};

exports.prependTo = function(target) {
  if (!target.cheerio) {
    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
  }

  target.prepend(this);

  return this;
};

exports.append = _insert(function(dom, children, parent) {
  uniqueSplice(children, children.length, 0, dom, parent);
});

exports.prepend = _insert(function(dom, children, parent) {
  uniqueSplice(children, 0, 0, dom, parent);
});

exports.wrap = function(wrapper) {
  var wrapperFn = typeof wrapper === 'function' && wrapper,
      lastIdx = this.length - 1;

  _.forEach(this, _.bind(function(el, i) {
    var parent = el.parent || el.root,
        siblings = parent.children,
        dom, index;

    if (!parent) {
      return;
    }

    if (wrapperFn) {
      wrapper = wrapperFn.call(el, i);
    }

    if (typeof wrapper === 'string' && !isHtml(wrapper)) {
      wrapper = this.parents().last().find(wrapper).clone();
    }

    dom = this._makeDomArray(wrapper, i < lastIdx).slice(0, 1);
    index = siblings.indexOf(el);

    updateDOM([el], dom[0]);
    // The previous operation removed the current element from the `siblings`
    // array, so the `dom` array can be inserted without removing any
    // additional elements.
    uniqueSplice(siblings, index, 0, dom, parent);
  }, this));

  return this;
};

exports.after = function() {
  var elems = slice.call(arguments),
      lastIdx = this.length - 1;

  domEach(this, function(i, el) {
    var parent = el.parent || el.root;
    if (!parent) {
      return;
    }

    var siblings = parent.children,
        index = siblings.indexOf(el),
        domSrc, dom;

    // If not found, move on
    if (index < 0) return;

    if (typeof elems[0] === 'function') {
      domSrc = elems[0].call(el, i, $.html(el.children));
    } else {
      domSrc = elems;
    }
    dom = this._makeDomArray(domSrc, i < lastIdx);

    // Add element after `this` element
    uniqueSplice(siblings, index + 1, 0, dom, parent);
  });

  return this;
};

exports.insertAfter = function(target) {
  var clones = [],
      self = this;
  if (typeof target === 'string') {
    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
  }
  target = this._makeDomArray(target);
  self.remove();
  domEach(target, function(i, el) {
    var clonedSelf = self._makeDomArray(self.clone());
    var parent = el.parent || el.root;
    if (!parent) {
      return;
    }

    var siblings = parent.children,
        index = siblings.indexOf(el);

    // If not found, move on
    if (index < 0) return;

    // Add cloned `this` element(s) after target element
    uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
    clones.push(clonedSelf);
  });
  return this.constructor.call(this.constructor, this._makeDomArray(clones));
};

exports.before = function() {
  var elems = slice.call(arguments),
      lastIdx = this.length - 1;

  domEach(this, function(i, el) {
    var parent = el.parent || el.root;
    if (!parent) {
      return;
    }

    var siblings = parent.children,
        index = siblings.indexOf(el),
        domSrc, dom;

    // If not found, move on
    if (index < 0) return;

    if (typeof elems[0] === 'function') {
      domSrc = elems[0].call(el, i, $.html(el.children));
    } else {
      domSrc = elems;
    }

    dom = this._makeDomArray(domSrc, i < lastIdx);

    // Add element before `el` element
    uniqueSplice(siblings, index, 0, dom, parent);
  });

  return this;
};

exports.insertBefore = function(target) {
  var clones = [],
      self = this;
  if (typeof target === 'string') {
    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
  }
  target = this._makeDomArray(target);
  self.remove();
  domEach(target, function(i, el) {
    var clonedSelf = self._makeDomArray(self.clone());
    var parent = el.parent || el.root;
    if (!parent) {
      return;
    }

    var siblings = parent.children,
        index = siblings.indexOf(el);

    // If not found, move on
    if (index < 0) return;

    // Add cloned `this` element(s) after target element
    uniqueSplice(siblings, index, 0, clonedSelf, parent);
    clones.push(clonedSelf);
  });
  return this.constructor.call(this.constructor, this._makeDomArray(clones));
};

/*
  remove([selector])
*/
exports.remove = function(selector) {
  var elems = this;

  // Filter if we have selector
  if (selector)
    elems = elems.filter(selector);

  domEach(elems, function(i, el) {
    var parent = el.parent || el.root;
    if (!parent) {
      return;
    }

    var siblings = parent.children,
        index = siblings.indexOf(el);

    if (index < 0) return;

    siblings.splice(index, 1);
    if (el.prev) {
      el.prev.next = el.next;
    }
    if (el.next) {
      el.next.prev = el.prev;
    }
    el.prev = el.next = el.parent = el.root = null;
  });

  return this;
};

exports.replaceWith = function(content) {
  var self = this;

  domEach(this, function(i, el) {
    var parent = el.parent || el.root;
    if (!parent) {
      return;
    }

    var siblings = parent.children,
        dom = self._makeDomArray(typeof content === 'function' ? content.call(el, i, el) : content),
        index;

    // In the case that `dom` contains nodes that already exist in other
    // structures, ensure those nodes are properly removed.
    updateDOM(dom, null);

    index = siblings.indexOf(el);

    // Completely remove old element
    uniqueSplice(siblings, index, 1, dom, parent);
    el.parent = el.prev = el.next = el.root = null;
  });

  return this;
};

exports.empty = function() {
  domEach(this, function(i, el) {
    _.forEach(el.children, function(el) {
      el.next = el.prev = el.parent = null;
    });

    el.children.length = 0;
  });
  return this;
};

/**
 * Set/Get the HTML
 */
exports.html = function(str) {
  if (str === undefined) {
    if (!this[0] || !this[0].children) return null;
    return $.html(this[0].children, this.options);
  }

  var opts = this.options;

  domEach(this, function(i, el) {
    _.forEach(el.children, function(el) {
      el.next = el.prev = el.parent = null;
    });

    var content = str.cheerio ? str.clone().get() : evaluate('' + str, opts);

    updateDOM(content, el);
  });

  return this;
};

exports.toString = function() {
  return $.html(this, this.options);
};

exports.text = function(str) {
  // If `str` is undefined, act as a "getter"
  if (str === undefined) {
    return $.text(this);
  } else if (typeof str === 'function') {
    // Function support
    return domEach(this, function(i, el) {
      var $el = [el];
      return exports.text.call($el, str.call(el, i, $.text($el)));
    });
  }

  // Append text node to each selected elements
  domEach(this, function(i, el) {
    _.forEach(el.children, function(el) {
      el.next = el.prev = el.parent = null;
    });

    var elem = {
      data: '' + str,
      type: 'text',
      parent: el,
      prev: null,
      next: null,
      children: []
    };

    updateDOM(elem, el);
  });

  return this;
};

exports.clone = function() {
  return this._make(cloneDom(this.get(), this.options));
};
