var DomUtils    = require("domutils"),
    isTag       = DomUtils.isTag,
    getParent   = DomUtils.getParent,
    getChildren = DomUtils.getChildren,
    getSiblings = DomUtils.getSiblings,
    getName     = DomUtils.getName;

/*
	all available rules
*/
module.exports = {
	__proto__: null,

	attribute: require("./attributes.js").compile,
	pseudo: require("./pseudos.js").compile,

	//tags
	tag: function(next, data){
		var name = data.name;
		return function tag(elem){
			return getName(elem) === name && next(elem);
		};
	},

	//traversal
	descendant: function(next, rule, options, context, acceptSelf){
		return function descendant(elem){

			if (acceptSelf && next(elem)) return true;

			var found = false;

			while(!found && (elem = getParent(elem))){
				found = next(elem);
			}

			return found;
		};
	},
	parent: function(next, data, options){
		if(options && options.strict) throw SyntaxError("Parent selector isn't part of CSS3");

		return function parent(elem){
			return getChildren(elem).some(test);
		};

		function test(elem){
			return isTag(elem) && next(elem);
		}
	},
	child: function(next){
		return function child(elem){
			var parent = getParent(elem);
			return !!parent && next(parent);
		};
	},
	sibling: function(next){
		return function sibling(elem){
			var siblings = getSiblings(elem);

			for(var i = 0; i < siblings.length; i++){
				if(isTag(siblings[i])){
					if(siblings[i] === elem) break;
					if(next(siblings[i])) return true;
				}
			}

			return false;
		};
	},
	adjacent: function(next){
		return function adjacent(elem){
			var siblings = getSiblings(elem),
			    lastElement;

			for(var i = 0; i < siblings.length; i++){
				if(isTag(siblings[i])){
					if(siblings[i] === elem) break;
					lastElement = siblings[i];
				}
			}

			return !!lastElement && next(lastElement);
		};
	},
	universal: function(next){
		return next;
	}
};