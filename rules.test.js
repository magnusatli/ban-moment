import { describe, test } from "vitest";

import { rules } from "./rules";

import { RuleTester } from "eslint";

describe("rules", () => {

    test("no-moment", () => {
        const ruleTest = new RuleTester();
        ruleTest.run("no-moment", rules["no-moment"], {
            valid: [
                'var moment = "something that is not moment";',
                'var sndMoment = grequire("not-moment");'
            ],
            invalid: [
                {
                    code: "var moment = require('moment');",
                    errors: [
                        {
                            message: "Unexpected use of moment()",
                        },
                    ],
                },
            ],
        });
    });
});