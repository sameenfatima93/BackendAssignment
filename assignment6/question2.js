// Create an array of students
let students = ["Ali", "Ahmed", "Sara", "Ayesha", "Hamza"];

console.log("Original array:", students);

// 1. Add a student at the end
students.push("Fatima");
console.log("After push:", students);

// 2. Remove the last student
let removedLast = students.pop();
console.log("Removed student:", removedLast);
console.log("After pop:", students);

// 3. Add a student at the beginning
students.unshift("Zain");
console.log("After unshift:", students);

// 4. Remove the first student
let removedFirst = students.shift();
console.log("Removed student:", removedFirst);
console.log("After shift:", students);

// 5. Display final number of students
console.log("Final number of students:", students.length);