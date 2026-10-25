// Question 2 - Student Performance Analyzer

const originalMarks = [45, 78, 92, 61, 88, 54, 73, 95];

console.log("=== Question 2: Student Performance Analyzer ===");
console.log("Original Student Marks:", originalMarks);

// 1. Increase every mark by 5 for practice assessment using map()
const practiceMarks = originalMarks.map(mark => mark + 5);
console.log("Marks increased by 5 (Practice Assessment):", practiceMarks);

// 2. Marks 70 or above using filter()
const highScorers = originalMarks.filter(mark => mark >= 70);
console.log("Marks 70 or above:", highScorers);

// 3. First mark greater than 90 using find()
const firstTopMark = originalMarks.find(mark => mark > 90);
console.log("First mark greater than 90:", firstTopMark);

// 4. Calculate total of all original marks using reduce()
const totalMarks = originalMarks.reduce((sum, mark) => sum + mark, 0);
console.log("Total of original marks:", totalMarks);

// Confirming original marks array remains unchanged
console.log("Verification - Original Marks Array Unchanged:", originalMarks);