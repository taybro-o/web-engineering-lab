// Class Activity D
const students = [
    { name: "Ali", score: 82 },
    { name: "Sara", score: 95 },
    { name: "Ahmed", score: 68 },
    { name: "Zainab", score: 77 },
    { name: "Bilal", score: 91 },
    { name: "Hamza", score: 45 }
];

// 1. Above average names
const total = students.reduce((sum, s) => sum + s.score, 0);
const avg = total / students.length;
const aboveAvg = students.filter((s) => s.score > avg).map((s) => s.name);

console.log("Class Average:", avg.toFixed(2));
console.log("Above average students:", aboveAvg);

// 2. some & every
console.log("Any score > 90:", students.some((s) => s.score > 90));
console.log("All scores > 40:", students.every((s) => s.score > 40));

// 3. Sort high to low without mutating original
const sorted = [...students].sort((a, b) => b.score - a.score);
console.log("Sorted:", sorted);
console.log("Original untouched:", students[0].name === "Ali");
