module.exports = {
    meta: {
      messages: {
        noMoment: "Unexpected use of moment()",
      },
    },
    create(context) {
      return {
        CallExpression(node) {
          if (
            node.callee.type === "Identifier" &&
            node.callee.name === "moment"
          ) {
            context.report({
              node,
              messageId: "noMoment",
            });
          }
        },
      };
    },
  };