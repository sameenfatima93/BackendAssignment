let marks = [78, 45, 92, 66, 88, 54, 91, 73];

// Create second array
let secondMarks = [81, 69, 95, 60];

// Combine both groups
let combinedMarks = marks.concat(secondMarks);

console.log("Combined marks:", combinedMarks);


// Create a smaller list from selected portion
let selectedMarks = combinedMarks.slice(2, 7);

console.log("Selected marks:", selectedMarks);


// Change one mark in the middle
combinedMarks.splice(5, 1, 70);

console.log("After changing a mark:", combinedMarks);


// Total number of marks
console.log("Total number of marks:", combinedMarks.length);


// Arrange from lowest to highest
let sortedMarks = [...combinedMarks];

sortedMarks.sort(function (a, b) {
    return a - b;
});

console.log("Lowest to highest:", sortedMarks);


// Reverse the resulting list
sortedMarks.reverse();

console.log("Reversed marks:", sortedMarks);


// Arrow function
let displayFinalResult = (marksArray) => {
    console.log("Final result:", marksArray);
};

displayFinalResult(sortedMarks);