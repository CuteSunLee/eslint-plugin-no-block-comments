"use strict";

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "禁止块级注释",
            category: "Stylistic Issues",
            recommended: true
        },
        fixable: "code",
        schema: [] // no options
    },

    create(context) {
        // 获取源代码
        const sourceCode = context.getSourceCode();

        return {
            Program(node) {
                // 获取源代码中所有的注释
                const comments = sourceCode.getAllComments();

                const blockComments = comments.filter(
                    ({ type }) => type === "Block"
                );

                blockComments.length &&
                    context.report({
                        node: node,
                        message: "No block comments"
                    });
            }
        };
    }
};
