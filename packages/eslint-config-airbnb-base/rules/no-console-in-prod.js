module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow console.log() in production environments',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object &&
          node.callee.object.name === 'console' &&
          node.callee.property &&
          node.callee.property.name === 'log'
        ) {
          const isProduction = process.env.NODE_ENV === 'production';

          context.report({
            node,
            message: isProduction
              ? '❌ console.log() is not allowed in production. Use a proper logger instead.'
              : '⚠️ Consider removing console.log() before pushing to production.',
          });
        }
      },
    };
  },
};
