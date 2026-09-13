// Week 05: JavaScript Fundamentals - objects.js
// Student: Muhammad Tayyab (023-24-0118)
// Covers: Class Activity E (Products, Object destructuring, spread, and groupBy via reduce)

console.log("==================================================");
console.log("CLASS ACTIVITY E: Products & GroupBy");
console.log("==================================================");

const products = [
    { id: 1, title: "Mechanical Keyboard", price: 85, category: "peripherals", inStock: true },
    { id: 2, title: "USB-C Fast Charging Cable", price: 15, category: "cables", inStock: true },
    { id: 3, title: "Wireless Gaming Mouse", price: 55, category: "peripherals", inStock: false },
    { id: 4, title: "HDMI 2.1 Ultra Cable", price: 25, category: "cables", inStock: true },
    { id: 5, title: "ANC Wireless Headphones", price: 120, category: "audio", inStock: true },
    { id: 6, title: "Studio Desktop Microphone", price: 70, category: "audio", inStock: false }
];

console.log("Products Catalog:");
console.log(products);

// 1. inStock titles via filter + map
const inStockTitles = products
    .filter((product) => product.inStock)
    .map((product) => product.title);

console.log("\n1. In-Stock Product Titles (filter + map):");
console.log(inStockTitles);

// 2. Total price via reduce
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(`\n2. Total Price of all inventory items (reduce): PKR ${totalPrice}`);

// 3. groupBy(products, "category") with reduce -> { peripherals: [...], cables: [...], audio: [...] }
const groupBy = (items, key) => {
    return items.reduce((grouped, item) => {
        const groupKey = item[key];
        // If category bucket doesn't exist yet, initialize it as an empty array
        if (!grouped[groupKey]) {
            grouped[groupKey] = [];
        }
        grouped[groupKey].push(item);
        return grouped;
    }, {});
};

const groupedByCategory = groupBy(products, "category");

console.log("\n3. Products Grouped by Category (groupBy with reduce):");
console.log(JSON.stringify(groupedByCategory, null, 2));

// Demonstration of object destructuring and spread
console.log("\n--- Object Destructuring & Spread Syntax Demo ---");
const [firstProduct, ...restProducts] = products;
const { title, price, category } = firstProduct;
console.log(`Destructured Item: "${title}" costs $${price} in [${category}]`);

// Non-mutating update using spread operator
const discountedFirstProduct = {
    ...firstProduct,
    price: 70,
    isDiscounted: true
};
console.log("Updated copy via spread (original untouched):");
console.log(discountedFirstProduct);
console.log(`Original price remained: $${firstProduct.price}`);

module.exports = {
    products,
    inStockTitles,
    totalPrice,
    groupBy,
    groupedByCategory
};
