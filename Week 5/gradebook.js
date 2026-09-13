// Week 05: JavaScript Fundamentals - gradebook.js
// Student: Muhammad Tayyab (023-24-0118)
// Homework Task 1: Gradebook Script using strictly Array Methods (reduce, filter, map, sort)

const gradebook = [
    { name: "Muhammad Tayyab", score: 94 },
    { name: "Ayesha Khan", score: 88 },
    { name: "Bilal Ahmed", score: 76 },
    { name: "Zainab Fatima", score: 91 },
    { name: "Hamza Tariq", score: 48 },
    { name: "Sara Noor", score: 83 },
    { name: "Usman Ali", score: 62 },
    { name: "Dua Malik", score: 42 }
];

console.log("==================================================");
console.log("HOMEWORK TASK 1: STUDENT GRADEBOOK ANALYSIS");
console.log("==================================================");
console.log("Total Enrolled Students:", gradebook.length);

// 1. Class Average (calculated using reduce)
const totalScore = gradebook.reduce((sum, student) => sum + student.score, 0);
const classAverage = Number((totalScore / gradebook.length).toFixed(2));

// 2. Highest Scorer (calculated using reduce)
const highestScorer = gradebook.reduce((prev, current) =>
    current.score > prev.score ? current : prev
);

// 3. Lowest Scorer (calculated using reduce)
const lowestScorer = gradebook.reduce((prev, current) =>
    current.score < prev.score ? current : prev
);

// 4. Pass Rate (%) (assuming passing threshold >= 50, using filter)
const passingStudents = gradebook.filter((student) => student.score >= 50);
const passRate = Number(((passingStudents.length / gradebook.length) * 100).toFixed(2));

// 5. Names sorted high -> low by score (using non-mutating copy [...gradebook].sort().map())
const namesSortedHighToLow = [...gradebook]
    .sort((a, b) => b.score - a.score)
    .map((student) => `${student.name} (${student.score})`);

// Print Formatted Report
console.log("\n---------------- Gradebook Summary ----------------");
console.log(`Class Average:        ${classAverage}`);
console.log(`Highest Scorer:       ${highestScorer.name} with ${highestScorer.score} marks`);
console.log(`Lowest Scorer:        ${lowestScorer.name} with ${lowestScorer.score} marks`);
console.log(`Passing Count:        ${passingStudents.length} / ${gradebook.length}`);
console.log(`Pass Rate:            ${passRate}%`);
console.log("---------------------------------------------------");
console.log("\nStudent Ranking (High to Low):");
namesSortedHighToLow.forEach((entry, rank) => {
    console.log(`  ${rank + 1}. ${entry}`);
});

module.exports = {
    gradebook,
    classAverage,
    highestScorer,
    lowestScorer,
    passRate,
    namesSortedHighToLow
};
