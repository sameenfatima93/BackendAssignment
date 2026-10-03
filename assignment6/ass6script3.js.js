// Create two arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let vegetables = ["Potato", "Tomato", "Carrot", "Onion"];

// Combine two arrays using concat()
let combined = fruits.concat(vegetables);
console.log("Combined array:", combined);

// Create a new array using slice()
let selectedFruits = fruits.slice(1, 3);
console.log("Selected fruits:", selectedFruits);

// Remove one element using splice()
fruits.splice(1, 1);
console.log("After removing with splice:", fruits);

// Add one element at a specific position using splice()
fruits.splice(1, 0, "Banana");
console.log("After adding with splice:", fruits);

// Delete one element using delete
delete fruits[2];

console.log("After delete:", fruits);
console.log("Array length after delete:", fruits.length);
console.log("Deleted position:", fruits[2]);