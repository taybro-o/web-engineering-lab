// In-Class Lab: Finish the Fundamentals File (lab.js)

// 1. Helpers
const getInitials = (name) =>
    name.trim().split(/\s+/).map((w) => w[0].toUpperCase()).join("");

const isPalindrome = (str) => {
    const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return s.length > 0 && s === s.split("").reverse().join("");
};

const countWords = (str) =>
    str.trim() === "" ? 0 : str.trim().split(/\s+/).length;

console.log("Initials:", getInitials("Ayesha Khan"));
console.log("Palindrome:", isPalindrome("Race car"));
console.log("Words:", countWords("the quick brown fox"));

// 2. Above-average students (no loops)
const students = [
    { name: "Ali", score: 82 },
    { name: "Sara", score: 95 },
    { name: "Ahmed", score: 68 },
    { name: "Zainab", score: 77 },
    { name: "Bilal", score: 91 },
    { name: "Hamza", score: 45 }
];
const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
const aboveAvg = students.filter((s) => s.score > avg).map((s) => s.name);
console.log("Average:", avg.toFixed(2));
console.log("Above Average:", aboveAvg);

// 3. groupBy using reduce
const products = [
    { title: "Keyboard", category: "peripherals" },
    { title: "Mouse", category: "peripherals" },
    { title: "USB Cable", category: "cables" }
];
const groupBy = (arr, key) =>
    arr.reduce((acc, item) => {
        (acc[item[key]] = acc[item[key]] || []).push(item);
        return acc;
    }, {});
console.log("Grouped:", groupBy(products, "category"));

// 4. calculateBill with validation + passing test for each error case
function calculateBill({ amount, tipPercent = 15, people = 1 } = {}) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount");
    }
    if (typeof tipPercent !== "number" || tipPercent < 0) {
        throw new Error("Invalid tip percentage");
    }
    if (!Number.isInteger(people) || people < 1) {
        throw new Error("Invalid people count");
    }

    const tip = amount * (tipPercent / 100);
    const total = amount + tip;
    return {
        amount,
        tipPercent,
        total: Number(total.toFixed(2)),
        perPerson: Number((total / people).toFixed(2))
    };
}

console.log("Bill:", calculateBill({ amount: 2400, tipPercent: 10, people: 3 }));

try {
    calculateBill({ amount: -50, people: 2 });
} catch (e) {
    console.log("Caught:", e.message);
}

try {
    calculateBill({ amount: 1000, people: 0 });
} catch (e) {
    console.log("Caught:", e.message);
}

try {
    calculateBill({ amount: 1000, tipPercent: "ten", people: 2 });
} catch (e) {
    console.log("Caught:", e.message);
}
