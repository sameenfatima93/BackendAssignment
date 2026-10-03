// Starting product list
let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones"
];

// Display number of products
console.log("Number of products:", products.length);

// Display first product
console.log("First product:", products.at(0));

// Display last product
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

// Create a second product array
let secondProducts = ["Speaker", "USB"];

// Combine both arrays
let allProducts = products.concat(secondProducts);
console.log("Combined products:", allProducts);

// Create a smaller list using slice()
let smallList = allProducts.slice(1, 4);
console.log("Smaller product list:", smallList);

// Remove one product using splice()
allProducts.splice(2, 1);
console.log("After splice:", allProducts);

// Display final list as a string
console.log("Final product list:", allProducts.join(" - "));

// Create an arrow function to display the final array
let showProducts = (products) => {
    console.log("Final array:", products);
};

// Call the arrow function
showProducts(allProducts);

// Check whether final product list is an array
console.log("Is final product list an array?", Array.isArray(allProducts));