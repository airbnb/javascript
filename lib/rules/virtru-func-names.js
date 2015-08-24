/**
 * @fileoverview - Rule to warn when a function expression does not have a name and only
 * when not part of an assignment.  This allows attaching a function to a prototype to
 * not report.
 * @author - Zack Nelson
 * @copyright - 2015 Brandon Mills. All rights reserved.
 * @copyright - 2014 Kyle T. Nunery. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

  /**
   * Determines whether the current FunctionExpression node is a get, set, or
   * shorthand method in an object literal or a class.
   * @returns {boolean} True if the node is a get, set, or shorthand method.
   */
  function isObjectOrClassMethod() {
    var parent = context.getAncestors().pop();

    return (parent.type === "MethodDefinition" || (
      parent.type === "Property" && (
        parent.method ||
        parent.kind === "get" ||
        parent.kind === "set"
      )
    ));
  }

  return {
    "FunctionExpression": function(node) {

      var name = node.id && node.id.name;

      if (!name && !isObjectOrClassMethod()) {

        // Test if part of an assignment statement
        if (node.parent.type !== 'AssignmentExpression') {
          context.report(node, "Missing function expression name.");
        }
      }
    }
  };
};

module.exports.schema = [];
