// Create different types of values
let myArray = ["Apple", "Banana", "Mango"];
let myString = "Hello";
let myNumber = 100;

// Check whether each value is an array
console.log("Is myArray an array?", Array.isArray(myArray));
console.log("Is myString an array?", Array.isArray(myString));
console.log("Is myNumber an array?", Array.isArray(myNumber));

// Create an arrow function named showArray
let showArray = (array) => {
    console.log("My array:", array);
};

// Call the arrow function
showArray(myArray);

// Create another arrow function
let showValue = (value) => {
    console.log("Value:", value);
};

// Call the arrow function
showValue("Hello JavaScript");