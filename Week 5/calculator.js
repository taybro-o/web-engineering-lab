// Week 05: JavaScript Fundamentals - calculator.js
// Student: Muhammad Tayyab (023-24-0118)
// Covers: Class Activity F (Tip Calculator with validation and try/catch)
//         & Homework Task 4 (Tip Calculator edge cases and formatBill helper)

/**
 * Calculates bill totals including tip and per-person split.
 * 
 * @param {Object} options - Options object
 * @param {number} options.amount - Total bill before tip
 * @param {number} [options.tipPercent=15] - Tip percentage (default 15%)
 * @param {number} [options.people=1] - Number of people splitting the bill (default 1)
 * @returns {Object} Calculated bill summary
 */
const calculateBill = ({ amount, tipPercent = 15, people = 1 } = {}) => {
    // Homework Task 4 & Activity F Validation
    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
        throw new Error(`Invalid amount: must be a positive number greater than 0. Received: ${amount}`);
    }

    if (typeof tipPercent !== "number" || isNaN(tipPercent) || tipPercent < 0) {
        throw new Error(`Invalid tip percentage: must be a valid non-negative number. Received: ${tipPercent}`);
    }

    if (typeof people !== "number" || !Number.isInteger(people) || people < 1) {
        throw new Error(`Invalid people count: must be an integer of 1 or more. Received: ${people}`);
    }

    // Calculations
    const tipAmount = amount * (tipPercent / 100);
    const totalAmount = amount + tipAmount;
    const perPerson = totalAmount / people;

    // Return numerical values rounded to 2 decimal places using Number(...toFixed(2))
    return {
        amount: Number(amount.toFixed(2)),
        tipPercent: Number(tipPercent.toFixed(2)),
        tipAmount: Number(tipAmount.toFixed(2)),
        totalAmount: Number(totalAmount.toFixed(2)),
        people,
        perPerson: Number(perPerson.toFixed(2))
    };
};

/**
 * Homework Task 4: Formats bill calculation into a clean multi-line console receipt.
 * 
 * @param {Object} result - Output object from calculateBill
 * @returns {string} Formatted receipt string
 */
const formatBill = (result) => {
    return [
        "============================================",
        "            RESTAURANT BILL RECEIPT         ",
        "============================================",
        `  Subtotal:             PKR ${result.amount.toFixed(2).padStart(12)}`,
        `  Tip (${result.tipPercent}%):           PKR ${result.tipAmount.toFixed(2).padStart(12)}`,
        "--------------------------------------------",
        `  Total Payable:        PKR ${result.totalAmount.toFixed(2).padStart(12)}`,
        `  Number of Persons:    ${result.people.toString().padStart(16)}`,
        `  Each Person Pays:     PKR ${result.perPerson.toFixed(2).padStart(12)}`,
        "============================================"
    ].join("\n");
};

// -----------------------------------------------------------------------------
// Demonstration & Test Suite
// -----------------------------------------------------------------------------
console.log("==================================================");
console.log("CLASS ACTIVITY F & HOMEWORK TASK 4: Bill Calculator");
console.log("==================================================");

console.log("\n1. Happy-Path Call (Amount: 2400, Tip: 10%, People: 3):");
try {
    const happyPath = calculateBill({ amount: 2400, tipPercent: 10, people: 3 });
    console.log("Calculated Object:", happyPath);
    console.log("\nFormatted Receipt via formatBill():\n");
    console.log(formatBill(happyPath));
} catch (err) {
    console.error("Unexpected Error in happy path:", err.message);
}

console.log("\n2. Default Tip Test (Homework Task 4: Default 15%, 1 Person):");
try {
    const defaultTipBill = calculateBill({ amount: 1200 });
    console.log("Calculated Object with Default Tip:", defaultTipBill);
} catch (err) {
    console.error("Unexpected Error:", err.message);
}

console.log("\n3. Testing Error Cases Wrapped in try/catch (Fails loudly without crashing process):");

// Failure Case A: Bad Amount (negative)
try {
    console.log("\nTesting: Negative amount (-500)...");
    calculateBill({ amount: -500, tipPercent: 10, people: 2 });
} catch (err) {
    console.log(`[Caught Expected Error]: ${err.message}`);
}

// Failure Case B: People = 0
try {
    console.log("\nTesting: Zero people splitting...");
    calculateBill({ amount: 1500, tipPercent: 12, people: 0 });
} catch (err) {
    console.log(`[Caught Expected Error]: ${err.message}`);
}

// Failure Case C: Non-number tip percentage (Homework Task 4)
try {
    console.log("\nTesting: Non-number tipPercent ('twenty')...");
    calculateBill({ amount: 3000, tipPercent: "twenty", people: 4 });
} catch (err) {
    console.log(`[Caught Expected Error]: ${err.message}`);
}

module.exports = {
    calculateBill,
    formatBill
};
