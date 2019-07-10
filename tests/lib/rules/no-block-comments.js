const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/no-block-comments");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } }); // You do have to tell eslint what js you're using

ruleTester.run("no-block-comments", rule, {
    valid: ["var a = 1; console.log(a)"],
    invalid: [
        {
            code: "var a = 1; /* block comments */ console.log(a)",
            errors: [
                {
                    messageId: "blockComments",
                    line: 1,
                    nodeType: "Block"
                }
            ]
        }
    ]
});
