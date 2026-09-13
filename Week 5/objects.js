// Class Activity E
const products = [
    { id: 1, title: "Mechanical Keyboard", price: 85, category: "peripherals", inStock: true },
    { id: 2, title: "USB-C Cable", price: 15, category: "cables", inStock: true },
    { id: 3, title: "Gaming Mouse", price: 55, category: "peripherals", inStock: false },
    { id: 4, title: "HDMI Cable", price: 25, category: "cables", inStock: true },
    { id: 5, title: "Headphones", price: 120, category: "audio", inStock: true }
];

// 1. inStock titles
const inStock = products.filter((p) => p.inStock).map((p) => p.title);
console.log("In stock:", inStock);

// 2. Total price
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total price:", total);

// 3. groupBy using reduce
const groupBy = (arr, key) =>
    arr.reduce((acc, item) => {
        const k = item[key];
        if (!acc[k]) acc[k] = [];
        acc[k].push(item);
        return acc;
    }, {});

console.log("Grouped by category:", groupBy(products, "category"));
