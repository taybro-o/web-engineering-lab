// Class Activity A
const course = "Web Eng";
try {
    course = "Other";
} catch (e) {
    console.log("Cannot reassign const:", e.message);
}

let count = 0;
count++;
count++;
console.log("Count:", count);

// 0 == false is true because loose equality converts false to 0
console.log(0 == false);
// 0 === false is false because types differ (number vs boolean)
console.log(0 === false);
// idk
console.log([] == false);

// Class Activity B
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
console.log("Word count:", countWords("the quick brown fox"));
