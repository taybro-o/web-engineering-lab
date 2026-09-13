// Week 05: JavaScript Fundamentals - basics.js
// Student: Muhammad Tayyab (023-24-0118)
// Covers: Class Activity A (const/let/===), Activity B (Three Functions), and Activity C (Grade + Nullish)

console.log("==================================================");
console.log("CLASS ACTIVITY A: const / let / === Drill");
console.log("==================================================");

// 1 & 2. const vs let reassignment test
const course = "Web Eng";
console.log(`Initial course: ${course}`);

try {
    // Attempting to reassign a const variable throws a TypeError
    course = "Other";
} catch (err) {
    console.log(`Attempted reassignment error: ${err.name} - ${err.message}`);
}

// 3. let counter increment
let count = 0;
count++;
count++;
console.log(`Counter after two increments: ${count}`);

// 4 & 5. Equality predictions vs reality with explanatory comments
console.log("\n--- Equality Drill (Loose vs Strict) ---");

// Prediction: true
// Explanation: Loose equality (==) coerces boolean false to number 0, so 0 == 0 evaluates to true.
console.log(`0 == false:  ${0 == false}`);

// Prediction: false
// Explanation: Strict equality (===) checks both value and type without coercion; number !== boolean.
console.log(`0 === false: ${0 === false}`);

// Prediction: true
// Explanation: [] converts to primitive string "" via [].toString(), and "" coerces to number 0, matching false (0).
console.log(`[] == false: ${[] == false}`);


console.log("\n==================================================");
console.log("CLASS ACTIVITY B: Three Functions");
console.log("==================================================");

// 1. getInitials("Ayesha Khan") -> "AK"
const getInitials = (fullName) => {
    return fullName
        .trim()
        .split(/\s+/)
        .map((part) => part[0].toUpperCase())
        .join("");
};

// 2. isPalindrome("Race car") -> true (case & space insensitive)
const isPalindrome = (str) => {
    const sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = sanitized.split("").reverse().join("");
    return sanitized.length > 0 && sanitized === reversed;
};

// 3. countWords("the quick brown fox") -> 4
const countWords = (sentence) => {
    const trimmed = sentence.trim();
    if (trimmed.length === 0) return 0;
    return trimmed.split(/\s+/).length;
};

// Testing Activity B functions
console.log(`getInitials("Ayesha Khan"):      ${getInitials("Ayesha Khan")}`);
console.log(`getInitials("Muhammad Tayyab"):  ${getInitials("Muhammad Tayyab")}`);
console.log(`isPalindrome("Race car"):        ${isPalindrome("Race car")}`);
console.log(`isPalindrome("Web Engineering"): ${isPalindrome("Web Engineering")}`);
console.log(`countWords("the quick brown fox"): ${countWords("the quick brown fox")}`);
console.log(`countWords("   Multiple   spaces   between words   "): ${countWords("   Multiple   spaces   between words   ")}`);


console.log("\n==================================================");
console.log("CLASS ACTIVITY C: Grade + Nullish Coalescing");
console.log("==================================================");

// 1. letterGrade(score) using if / else if
const letterGrade = (score) => {
    if (score < 0 || score > 100 || typeof score !== "number") {
        return "Invalid Score";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
};

// 2. displayCount(n) using ?? (nullish coalescing) instead of ||
const displayCount = (n) => {
    // nullish operator (??) only falls back on null or undefined, preserving valid 0
    return n ?? "No count provided";
};

// 3. Testing letterGrade
console.log("--- Letter Grades ---");
console.log(`Score 95: ${letterGrade(95)}`);
console.log(`Score 82: ${letterGrade(82)}`);
console.log(`Score 73: ${letterGrade(73)}`);
console.log(`Score 64: ${letterGrade(64)}`);
console.log(`Score 48: ${letterGrade(48)}`);

// Testing displayCount with 0, null, and 42
console.log("\n--- Nullish vs Logical OR Testing ---");
console.log(`displayCount(0):    ${displayCount(0)} (correctly preserved 0)`);
console.log(`displayCount(null): ${displayCount(null)} (fallback triggered)`);
console.log(`displayCount(42):   ${displayCount(42)} (valid positive number)`);

// Exporting helpers for reuse in lab.js if needed
module.exports = {
    getInitials,
    isPalindrome,
    countWords,
    letterGrade,
    displayCount
};
