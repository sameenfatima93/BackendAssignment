// Create different types of values
let myArray = ["Apple", "Banana", "Mango"];
let myString = "Hello";
let myNumber = 100;

// Array.isArray()
console.log("Is myArray an array?", Array.isArray(myArray));
console.log("Is myString an array?", Array.isArray(myString));
console.log("Is myNumber an array?", Array.isArray(myNumber));

// Arrow function to display an array
let showArray = (array) => {
    console.log("My array is:", array);
};

// Call the arrow function
showArray(myArray);

// Another arrow function
let showValue = (value) => {
    console.log("Value is:", value);
};

// Call the arrow function
showValue("Hello JavaScript");