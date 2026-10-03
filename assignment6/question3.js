// Create two arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let vegetables = ["Potato", "Tomato", "Carrot", "Onion"];

// concat()
let combined = fruits.concat(vegetables);
console.log("Combined array:", combined);

// slice()
let selectedFruits = fruits.slice(1, 3);
console.log("Selected fruits:", selectedFruits);

// splice() - remove an element
fruits.splice(1, 1);
console.log("After removing with splice:", fruits);

// splice() - add an element
fruits.splice(1, 0, "Banana");
console.log("After adding with splice:", fruits);

// delete - delete one element
delete fruits[2];

console.log("After delete:", fruits);
console.log("Array length after delete:", fruits.length);
console.log("Deleted position:", fruits[2]);