// Homework Task 2: Predict Before You Run
const tests = [
    { expr: "0 == false", run: () => 0 == false, pred: "true", why: "Loose equality coerces false to 0." },
    { expr: "0 === false", run: () => 0 === false, pred: "false", why: "Strict equality checks type without coercion." },
    { expr: "[] == false", run: () => [] == false, pred: "true", why: "[] converts to empty string, then to 0." },
    { expr: "[] == ![]", run: () => [] == ![], pred: "true", why: "![] is false, then [] == false is true." },
    { expr: "null == undefined", run: () => null == undefined, pred: "true", why: "Loosely equal by specification." },
    { expr: "null === undefined", run: () => null === undefined, pred: "false", why: "Different types." },
    { expr: "typeof NaN", run: () => typeof NaN, pred: "number", why: "NaN is numeric type." },
    { expr: "0 || 42 vs 0 ?? 42", run: () => `${0 || 42} vs ${0 ?? 42}`, pred: "42 vs 0", why: "|| sees 0 as falsy; ?? only checks null/undefined." },
    { expr: "[10, 2, 5, 1].sort()", run: () => [10, 2, 5, 1].sort().join(", "), pred: "1, 10, 2, 5", why: "Default sort treats numbers as strings." }
];

tests.forEach((t) => {
    console.log(`${t.expr} -> Prediction: ${t.pred} | Output: ${t.run()} (${t.why})`);
});
