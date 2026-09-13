// Homework Task 1: Gradebook Script
const students = [
    { name: "Muhammad Tayyab", score: 94 },
    { name: "Ayesha Khan", score: 88 },
    { name: "Bilal Ahmed", score: 76 },
    { name: "Zainab Fatima", score: 91 },
    { name: "Hamza Tariq", score: 48 },
    { name: "Sara Noor", score: 83 },
    { name: "Usman Ali", score: 62 },
    { name: "Dua Malik", score: 42 }
];

const total = students.reduce((sum, s) => sum + s.score, 0);
const avg = total / students.length;
const highest = students.reduce((max, s) => (s.score > max.score ? s : max));
const lowest = students.reduce((min, s) => (s.score < min.score ? s : min));
const passRate = (students.filter((s) => s.score >= 50).length / students.length) * 100;
const sorted = [...students].sort((a, b) => b.score - a.score);

console.log("Class Average:", avg);
console.log("Highest Scorer:", highest.name, `(${highest.score})`);
console.log("Lowest Scorer:", lowest.name, `(${lowest.score})`);
console.log("Pass Rate:", `${passRate}%`);
console.log("Sorted:", sorted.map((s) => `${s.name}: ${s.score}`));
