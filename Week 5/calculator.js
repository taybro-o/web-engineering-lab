// Class Activity F & Homework Task 4
function calculateBill({ amount, tipPercent = 15, people = 1 } = {}) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a number greater than 0");
    }
    if (typeof tipPercent !== "number" || tipPercent < 0) {
        throw new Error("Tip percentage must be a valid non-negative number");
    }
    if (!Number.isInteger(people) || people < 1) {
        throw new Error("People must be an integer of 1 or more");
    }

    const tipAmount = amount * (tipPercent / 100);
    const totalAmount = amount + tipAmount;

    return {
        amount: Number(amount.toFixed(2)),
        tipPercent,
        tipAmount: Number(tipAmount.toFixed(2)),
        totalAmount: Number(totalAmount.toFixed(2)),
        people,
        perPerson: Number((totalAmount / people).toFixed(2))
    };
}

function formatBill(b) {
    return `Subtotal: PKR ${b.amount}\nTip (${b.tipPercent}%): PKR ${b.tipAmount}\nTotal: PKR ${b.totalAmount}\nPeople: ${b.people}\nPer person: PKR ${b.perPerson}`;
}

// Happy path
const bill = calculateBill({ amount: 2400, tipPercent: 10, people: 3 });
console.log(bill);
console.log(formatBill(bill));

// Error tests
try {
    calculateBill({ amount: -100, tipPercent: 10, people: 2 });
} catch (e) {
    console.log("Caught:", e.message);
}

try {
    calculateBill({ amount: 1500, tipPercent: 10, people: 0 });
} catch (e) {
    console.log("Caught:", e.message);
}

try {
    calculateBill({ amount: 1000, tipPercent: "ten", people: 2 });
} catch (e) {
    console.log("Caught:", e.message);
}
