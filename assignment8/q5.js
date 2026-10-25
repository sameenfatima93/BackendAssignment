// Question 5 - Student Result Object

console.log("=== Question 5: Student Result Object ===");

// 1. Create first student object
const student1 = {
    name: "Muhammad Ali",
    class: "10th Grade",
    chemistry: 85,
    mathematics: 95,
    urdu: 78,
    english: 82,
    
    // Method using 'this' keyword to calculate performance
    calculateResult: function() {
        const totalMarks = this.chemistry + this.mathematics + this.urdu + this.english;
        const percentage = (totalMarks / 400) * 100;
        return {
            totalMarks: totalMarks,
            percentage: percentage.toFixed(2)
        };
    }
};

// Accessing properties via dot notation and bracket notation
console.log("Student 1 Name (Dot Notation):", student1.name);
console.log("Student 1 Class (Bracket Notation):", student1["class"]);

// Calling method and displaying results
const result1 = student1.calculateResult();
console.log(`${student1.name} achieved ${result1.percentage}% with a total score of ${result1.totalMarks}/400.`);

// 2. Create second student object to demonstrate reusability
const student2 = {
    name: "Fatima Noor",
    class: "10th Grade",
    chemistry: 90,
    mathematics: 88,
    urdu: 84,
    english: 91,
    
    calculateResult: function() {
        const totalMarks = this.chemistry + this.mathematics + this.urdu + this.english;
        const percentage = (totalMarks / 400) * 100;
        return {
            totalMarks: totalMarks,
            percentage: percentage.toFixed(2)
        };
    }
};

const result2 = student2.calculateResult();
console.log(`${student2.name} achieved ${result2.percentage}% with a total score of ${result2.totalMarks}/400.`);

// 3. Remove one property from one student object using delete operator
delete student2.urdu;
console.log("
Student 2 object after deleting 'urdu' property:", student2);