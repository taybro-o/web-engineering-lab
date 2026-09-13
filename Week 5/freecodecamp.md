# Homework Task 3: freeCodeCamp Practice Verification

**Student:** Muhammad Tayyab  
**CMS ID:** 023-24-0118  
**Course:** Web Engineering (CSE-311)  
**Curriculum:** freeCodeCamp - JavaScript Algorithms and Data Structures  
**Section:** Basic JavaScript (113 Lessons Completed)

---

## 1. Overview of Topics Covered
The Basic JavaScript section of freeCodeCamp reinforces modern JavaScript fundamentals through interactive problem-solving:

1. **Comments & Variable Declarations:** Differences between `var`, `let`, and `const`, strict scoping rules, and variable mutation prevention.
2. **Data Types & Coercion:** Working with strings, numbers, booleans, arrays, objects, `null`, and `undefined`. Understanding loose (`==`) vs strict (`===`) equality.
3. **Strings & Immutability:** String indexing, escape sequences, concatenation vs template literals, and immutability of string primitives.
4. **Arrays & Manipulation:** Multi-dimensional arrays, indexed access, and methods (`push`, `pop`, `shift`, `unshift`).
5. **Functions & Scopes:** Declaring functions, parameters, return statements, global vs local scope, and precedence of local variables.
6. **Conditionals & Logic:** `if`, `else if`, `else`, logical AND (`&&`), logical OR (`||`), and switch statements with `break` and `default`.
7. **Object-Oriented Basics:** JavaScript objects as key-value dictionaries, dot notation vs bracket notation, dynamic property addition/deletion, and `hasOwnProperty` lookups.
8. **Complex Data Structures:** Manipulating complex JSON arrays, accessing nested objects and arrays (e.g., Record Collection project).
9. **Loops & Iteration:** `while`, `for`, counting backwards, iterating through arrays, nested loops, and `do...while` loops.
10. **Recursion:** Understanding base cases and recursive steps in counting down and range-of-numbers functions.
11. **Random Numbers & Type Casting:** Using `Math.random()`, `Math.floor()`, and `parseInt()` with optional radix parameter.
12. **Ternary Operators:** Single ternary conditional and multi-conditional chained ternary operators.

---

## 2. Key Takeaways & Practical Reflection
- **Always Default to `const`:** Unless a variable requires explicit reassignment, use `const` to avoid unintended mutations and bugs.
- **Strict Equality (`===`) is Mandatory:** Avoid abstract loose equality (`==`) in production code because automatic type coercion introduces subtle vulnerabilities and edge cases.
- **Pure and Non-Mutating Array Workflows:** Leveraging modern functional methods (`map`, `filter`, `reduce`) provides cleaner, more declarative code than manual loop counters.
- **Nullish Safety:** Utilizing `??` prevents valid values like `0`, `""`, and `false` from being overwritten by default fallbacks.
