// Create an array of students
let students = ["Ali", "Ahmed", "Sara", "Ayesha", "Hamza"];

console.log("Original students:", students);

// Add a student at the end
students.push("Fatima");
console.log("After push:", students);

// Remove the last student
let removedStudent = students.pop();
console.log("Removed student:", removedStudent);
console.log("After pop:", students);

// Add a student at the beginning
students.unshift("Zain");
console.log("After unshift:", students);

// Remove the first student
let firstStudent = students.shift();
console.log("Removed student:", firstStudent);
console.log("After shift:", students);

// Display final number of students
console.log("Final number of students:", students.length);