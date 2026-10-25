// Question 4 - Store Inventory Using JavaScript Map

console.log("=== Question 4: Store Inventory Using JavaScript Map ===");

// 1. Create the inventory as a Map
const inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// 2. Add a new product to the inventory
inventory.set("mangoes", 150);
console.log("Added mangoes to inventory.");

// 3. Update quantity of an existing product
inventory.set("apples", 650);
console.log("Updated apples quantity to 650.");

// 4. Retrieve and display quantity of a specific product
console.log("Quantity of bananas:", inventory.get("bananas"));

// 5. Check whether a particular product exists
console.log("Does 'oranges' exist in inventory?", inventory.has("oranges"));
console.log("Does 'grapes' exist in inventory?", inventory.has("grapes"));

// 6. Remove one product from the inventory
inventory.delete("oranges");
console.log("Removed 'oranges' from inventory.");

// 7. Display current number of product entries
console.log("Current product entries count:", inventory.size);

// 8. Display all product names and all quantities
console.log("All Product Names:", Array.from(inventory.keys()));
console.log("All Product Quantities:", Array.from(inventory.values()));

// 9. Iterate and print each product and quantity in readable format
console.log("
--- Current Inventory List ---");
inventory.forEach((quantity, product) => {
    console.log(`Product: ${product} | Quantity: ${quantity}`);
});

// 10. Empty the inventory and display final size
inventory.clear();
console.log("
Inventory cleared. Final size:", inventory.size);