import { test } from "vitest";
import rule from "./no-moment";
import { RuleTester } from "eslint";

test("no-moment", () => {
  const ruleTester = new RuleTester();
  ruleTester.run("no-moment", rule, {
    valid: [
      {
        code: 'var _ = require("lodash");',
      },
    ],
    invalid: [
      {
        code: "var m = moment();",
        errors: [
          {
            message: "Unexpected use of moment()",
            type: "CallExpression",
          },
        ],
      },
    ],
  });
});