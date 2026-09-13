// Week 05: JavaScript Fundamentals - predict.js
// Student: Muhammad Tayyab (023-24-0118)
// Homework Task 2: Predict Before You Run Script

console.log("================================================================================");
console.log("HOMEWORK TASK 2: PREDICT BEFORE YOU RUN - VERIFICATION RUN");
console.log("Student: Muhammad Tayyab (023-24-0118)");
console.log("================================================================================\n");

const tests = [
    {
        expr: "0 == false",
        run: () => 0 == false,
        prediction: "true",
        explanation: "Loose equality (==) coerces boolean false to number 0. 0 == 0 evaluates to true."
    },
    {
        expr: "0 === false",
        run: () => 0 === false,
        prediction: "false",
        explanation: "Strict equality (===) checks both value and type without coercion. Number vs Boolean."
    },
    {
        expr: "[] == false",
        run: () => [] == false,
        prediction: "true",
        explanation: "Empty array [] converts to primitive string '' via [].toString(). '' coerces to 0, matching false (0)."
    },
    {
        expr: "[] == ![]",
        run: () => [] == ![],
        prediction: "true",
        explanation: "![] evaluates first: arrays are truthy objects, so ![] is false. Then [] == false evaluates to true."
    },
    {
        expr: "null == undefined",
        run: () => null == undefined,
        prediction: "true",
        explanation: "ECMAScript specification explicitly defines null and undefined as equal under loose equality."
    },
    {
        expr: "null === undefined",
        run: () => null === undefined,
        prediction: "false",
        explanation: "Different data types: typeof null is 'object' (legacy bug), typeof undefined is 'undefined'."
    },
    {
        expr: "typeof NaN",
        run: () => typeof NaN,
        prediction: "'number'",
        explanation: "NaN stands for 'Not-a-Number', but it is a numeric data type representing an unrepresentable number."
    },
    {
        expr: "0 || 42 vs 0 ?? 42",
        run: () => ({ or: 0 || 42, nullish: 0 ?? 42 }),
        prediction: "{ or: 42, nullish: 0 }",
        explanation: "|| treats 0 as falsy and returns 42; ?? only falls back on null/undefined, so it preserves 0."
    },
    {
        expr: "[10, 2, 5, 1].sort()",
        run: () => [10, 2, 5, 1].sort(),
        prediction: "[1, 10, 2, 5]",
        explanation: "Default Array.prototype.sort converts elements to strings and compares UTF-16 code units ('10' comes before '2')."
    },
    {
        expr: "(() => { sum: 2 + 3 })()",
        run: () => (() => { sum: 2 + 3 })(),
        prediction: "undefined",
        explanation: "Curly braces without parentheses are treated as a function body block with a label 'sum:', returning undefined."
    },
    {
        expr: "Shallow Spread Mutation: nested.score",
        run: () => {
            const original = { user: "Tayyab", meta: { score: 90 } };
            const copy = { ...original };
            copy.meta.score = 100;
            return original.meta.score;
        },
        prediction: "100",
        explanation: "Spread operator creates a shallow copy. Nested objects are passed by reference and remain shared."
    }
];

tests.forEach((test, idx) => {
    const actual = JSON.stringify(test.run());
    console.log(`Test ${idx + 1}: ${test.expr}`);
    console.log(`  Predicted: ${test.prediction}`);
    console.log(`  Actual:    ${actual}`);
    console.log(`  Reason:    ${test.explanation}\n`);
});
