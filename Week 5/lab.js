// Week 05: JavaScript Fundamentals - In-Class Lab Final (lab.js)
// Student: Muhammad Tayyab (023-24-0118)
// Course: Web Engineering (5th Semester) - Sukkur IBA University
//
// Checklist Completed:
// [x] getInitials, isPalindrome, countWords
// [x] Above-average student names via array methods (no for loops)
// [x] groupBy(products, "category") with reduce
// [x] calculateBill with validation + a passing test for each error case
// [x] const / let / === / ?? used correctly — no var, no loose == in logic
// [x] Runs with zero uncaught errors

console.log("================================================================================");
console.log("SUKKUR IBA UNIVERSITY - WEB ENGINEERING (CSE-311)");
console.log("LAB 05: JAVASCRIPT FUNDAMENTALS CONSOLIDATED SUBMISSION (lab.js)");
console.log("Student: Muhammad Tayyab | CMS ID: 023-24-0118");
console.log("================================================================================\n");

// -----------------------------------------------------------------------------
// PART 1: STRING & UTILITY FUNCTIONS
// -----------------------------------------------------------------------------
console.log("--- 1. String Utilities (getInitials, isPalindrome, countWords) ---");

// 1. getInitials: extracts uppercase first characters of each word
const getInitials = (fullName) => {
    return fullName
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join("");
};

// 2. isPalindrome: case-insensitive and space-insensitive palindrome test
const isPalindrome = (str) => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned.length > 0 && cleaned === reversed;
};

// 3. countWords: counts words in a sentence
const countWords = (sentence) => {
    const trimmed = sentence.trim();
    return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
};

console.log(`getInitials("Muhammad Tayyab"):       ${getInitials("Muhammad Tayyab")}`);
console.log(`getInitials("Ayesha Khan"):           ${getInitials("Ayesha Khan")}`);
console.log(`isPalindrome("Race car"):             ${isPalindrome("Race car")}`);
console.log(`isPalindrome("JavaScript"):           ${isPalindrome("JavaScript")}`);
console.log(`countWords("the quick brown fox"):    ${countWords("the quick brown fox")}`);
console.log(`countWords("   Web   Engineering   "): ${countWords("   Web   Engineering   ")}`);


// -----------------------------------------------------------------------------
// PART 2: ARRAY PIPELINE (NO FOR LOOPS)
// -----------------------------------------------------------------------------
console.log("\n--- 2. Students Pipeline (reduce, filter, map, some, every) ---");

const students = [
    { name: "Ali", score: 82 },
    { name: "Sara", score: 95 },
    { name: "Ahmed", score: 68 },
    { name: "Zainab", score: 77 },
    { name: "Bilal", score: 91 },
    { name: "Hamza", score: 45 }
];

// Average score using reduce
const classTotal = students.reduce((sum, s) => sum + s.score, 0);
const classAvg = classTotal / students.length;
console.log(`Class Average: ${classAvg.toFixed(2)}`);

// Above-average student names using filter and map
const aboveAverageNames = students
    .filter((s) => s.score > classAvg)
    .map((s) => s.name);
console.log("Students scoring above class average:", aboveAverageNames);

// Predicates using .some and .every
console.log(`Has any student scored > 90? (some):  ${students.some((s) => s.score > 90)}`);
console.log(`Has every student scored > 40? (every): ${students.every((s) => s.score > 40)}`);

// Immutable sorting copy using spread
const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log("Sorted Students (High to Low):", sortedStudents.map((s) => `${s.name} (${s.score})`));
console.log("Verified original list order preserved:", students[0].name === "Ali");


// -----------------------------------------------------------------------------
// PART 3: OBJECTS & GROUPBY VIA REDUCE
// -----------------------------------------------------------------------------
console.log("\n--- 3. Inventory Categorization (groupBy via reduce) ---");

const products = [
    { id: 1, title: "Mechanical Keyboard", price: 85, category: "peripherals", inStock: true },
    { id: 2, title: "USB-C Fast Cable", price: 15, category: "cables", inStock: true },
    { id: 3, title: "Wireless Gaming Mouse", price: 55, category: "peripherals", inStock: false },
    { id: 4, title: "HDMI 2.1 Cable", price: 25, category: "cables", inStock: true },
    { id: 5, title: "ANC Headphones", price: 120, category: "audio", inStock: true }
];

// In-stock titles and total price
const inStockProducts = products.filter((p) => p.inStock).map((p) => p.title);
const totalInventoryValue = products.reduce((acc, p) => acc + p.price, 0);
console.log("In-stock items:", inStockProducts);
console.log(`Total inventory price: PKR ${totalInventoryValue}`);

// groupBy function using reduce
const groupBy = (array, key) => {
    return array.reduce((acc, item) => {
        const val = item[key];
        if (!acc[val]) {
            acc[val] = [];
        }
        acc[val].push(item);
        return acc;
    }, {});
};

const groupedProducts = groupBy(products, "category");
console.log("Products grouped by category:");
Object.keys(groupedProducts).forEach((cat) => {
    console.log(`  Category [${cat}]: ${groupedProducts[cat].map((p) => p.title).join(", ")}`);
});


// -----------------------------------------------------------------------------
// PART 4: TIP CALCULATOR WITH INPUT VALIDATION & ERROR HANDLING
// -----------------------------------------------------------------------------
console.log("\n--- 4. Bill Calculator (calculateBill with try/catch) ---");

const calculateBill = ({ amount, tipPercent = 15, people = 1 } = {}) => {
    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
        throw new Error(`Amount must be a positive number. Provided: ${amount}`);
    }
    if (typeof tipPercent !== "number" || isNaN(tipPercent) || tipPercent < 0) {
        throw new Error(`Tip percentage must be a non-negative number. Provided: ${tipPercent}`);
    }
    if (typeof people !== "number" || !Number.isInteger(people) || people < 1) {
        throw new Error(`People count must be an integer of at least 1. Provided: ${people}`);
    }

    const tipAmount = amount * (tipPercent / 100);
    const totalAmount = amount + tipAmount;
    const perPerson = totalAmount / people;

    return {
        amount: Number(amount.toFixed(2)),
        tipPercent: Number(tipPercent.toFixed(2)),
        tipAmount: Number(tipAmount.toFixed(2)),
        totalAmount: Number(totalAmount.toFixed(2)),
        people,
        perPerson: Number(perPerson.toFixed(2))
    };
};

// Happy path execution
console.log("Executing Happy Path: calculateBill({ amount: 2400, tipPercent: 10, people: 3 })");
const successfulBill = calculateBill({ amount: 2400, tipPercent: 10, people: 3 });
console.log("Result Object:", successfulBill);

// Error case handling
console.log("\nHandling Error Test Cases with try/catch (Process remains safe):");

try {
    console.log("Testing negative amount (-100)...");
    calculateBill({ amount: -100, tipPercent: 10, people: 2 });
} catch (error) {
    console.log(`  Caught Error 1: ${error.message}`);
}

try {
    console.log("Testing zero people splitting (0)...");
    calculateBill({ amount: 1500, tipPercent: 15, people: 0 });
} catch (error) {
    console.log(`  Caught Error 2: ${error.message}`);
}

try {
    console.log("Testing non-number tip percentage ('ten')...");
    calculateBill({ amount: 2000, tipPercent: "ten", people: 2 });
} catch (error) {
    console.log(`  Caught Error 3: ${error.message}`);
}


// -----------------------------------------------------------------------------
// PART 5: NULLISH COALESCING (??) VS LOGICAL OR (||)
// -----------------------------------------------------------------------------
console.log("\n--- 5. Nullish Coalescing (??) Precision ---");
const displayCount = (val) => val ?? "Default Fallback";

console.log(`displayCount(0):         ${displayCount(0)} (valid zero preserved)`);
console.log(`displayCount(""):        "${displayCount("")}" (empty string preserved)`);
console.log(`displayCount(null):      ${displayCount(null)} (fallback triggered)`);
console.log(`displayCount(undefined): ${displayCount(undefined)} (fallback triggered)`);

console.log("\n================================================================================");
console.log("All checklist criteria satisfied. Zero uncaught errors encountered.");
console.log("================================================================================");
