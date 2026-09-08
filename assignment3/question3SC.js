// ===============================
// JavaScript Variables
// ===============================

// var can be declared and reassigned
var name = "Sameen";

// let can be declared and reassigned
let age = 32;

// const cannot be reassigned
const country = "Pakistan";

console.log("var name:", name);
console.log("let age:", age);
console.log("const country:", country);


// ===============================
// JavaScript Data Types
// ===============================

// 1. String
// String represents text or characters.
let studentName = "Sameen Fatima";

console.log("String:", studentName);
console.log("Type:", typeof studentName);


// 2. Number
// Number represents numeric values, including integers and decimals.
let marks = 95;

console.log("Number:", marks);
console.log("Type:", typeof marks);


// 3. Boolean
// Boolean represents true or false values.
let isStudent = true;

console.log("Boolean:", isStudent);
console.log("Type:", typeof isStudent);


// 4. Undefined
// Undefined means a variable has been declared but has no value.
let result;

console.log("Undefined:", result);
console.log("Type:", typeof result);


// 5. Null
// Null represents an intentional empty or unknown value.
let address = null;

console.log("Null:", address);
console.log("Type:", typeof address);


// 6. Object
// Object stores data in key-value pairs.
let student = {
    name: "Sameen",
    age: 32,
    course: "MERN Stack"
};

console.log("Object:", student);
console.log("Type:", typeof student);


// 7. Array
// Array stores multiple values in a single variable.
let subjects = ["HTML", "CSS", "JavaScript"];

console.log("Array:", subjects);
console.log("Type:", typeof subjects);


// 8. Symbol
// Symbol creates a unique value.
let uniqueId = Symbol("id");

console.log("Symbol:", uniqueId);
console.log("Type:", typeof uniqueId);


// 9. BigInt
// BigInt is used for very large integer numbers.
let largeNumber = 12345678901234567890n;

console.log("BigInt:", largeNumber);
console.log("Type:", typeof largeNumber);