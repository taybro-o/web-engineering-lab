// Week 05: JavaScript Fundamentals - arrays.js
// Student: Muhammad Tayyab (023-24-0118)
// Covers: Class Activity D (Students Pipeline using non-mutating array methods)

console.log("==================================================");
console.log("CLASS ACTIVITY D: Students Pipeline");
console.log("==================================================");

// Sample students array
const students = [
    { name: "Ali", score: 82 },
    { name: "Sara", score: 95 },
    { name: "Ahmed", score: 68 },
    { name: "Zainab", score: 77 },
    { name: "Bilal", score: 91 },
    { name: "Hamza", score: 45 }
];

console.log("Original Students Array (Frozen Reference Check):");
console.log(students);

// 1. Calculate class average using reduce, then filter + map for students above average
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
const classAverage = totalScore / students.length;

console.log(`\nClass Total Score: ${totalScore}`);
console.log(`Class Average Score: ${classAverage.toFixed(2)}`);

const aboveAverageStudentNames = students
    .filter((student) => student.score > classAverage)
    .map((student) => student.name);

console.log("\n1. Names of students above the class average (filter + map):");
console.log(aboveAverageStudentNames);

// 2. students.some(s => s.score > 90) and students.every(s => s.score > 40)
const hasExceptionalStudent = students.some((s) => s.score > 90);
const allStudentsPassedBasicThreshold = students.every((s) => s.score > 40);

console.log("\n2. Array Predicate Checks (.some & .every):");
console.log(`Any student with score > 90? (students.some):  ${hasExceptionalStudent}`);
console.log(`All students with score > 40? (students.every): ${allStudentsPassedBasicThreshold}`);

// 3. Sort a copy high -> low by score without mutating the original array
// Using shallow copy via spread operator [...students]
const sortedByScoreDesc = [...students].sort((a, b) => b.score - a.score);

console.log("\n3. Sorted Copy (High to Low by Score):");
console.log(sortedByScoreDesc);

console.log("\nVerification: Checking if original students array was mutated:");
console.log("Original array remains in initial order:");
console.log(students.map((s) => `${s.name}: ${s.score}`).join(", "));

module.exports = {
    students,
    classAverage,
    aboveAverageStudentNames,
    sortedByScoreDesc
};
