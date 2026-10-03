// Starting product list
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

// Display number of products
console.log("Number of products:", products.length);

// Display first and last product
console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));

// Add a product at the end
products.push("Printer");
console.log("After push:", products);

// Add another product at the beginning
products.unshift("Webcam");
console.log("After unshift:", products);

// Remove the last product
let removedLast = products.pop();
console.log("Removed last product:", removedLast);
console.log("After pop:", products);

// Remove the first product
let removedFirst = products.shift();
console.log("Removed first product:", removedFirst);
console.log("After shift:", products);

// Create second product array
let secondProducts = ["Speaker", "USB"];

console.log("Second product array:", secondProducts);

// Combine arrays using concat()
let allProducts = products.concat(secondProducts);
console.log("Combined products:", allProducts);

// Use slice()
let smallList = allProducts.slice(1, 4);
console.log("Smaller product list:", smallList);

// Use splice() to remove a product
allProducts.splice(2, 1);
console.log("After splice:", allProducts);

// Use join()
console.log("Final product list:", allProducts.join(" - "));

// Arrow function
let showProducts = (products) => {
    console.log("Final array:", products);
};

showProducts(allProducts);

// Array.isArray()
console.log("Is final product list an array?", Array.isArray(allProducts));