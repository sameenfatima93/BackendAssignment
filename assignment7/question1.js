let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// Check whether Ayesha is present
let isAyeshaPresent = students.includes('Ayesha');
console.log("Is Ayesha present?", isAyeshaPresent);

// Find the position of the first Sara
let firstSaraPosition = students.indexOf('Sara');
console.log("First Sara position:", firstSaraPosition);

// Find the position of the last Sara
let lastSaraPosition = students.lastIndexOf('Sara');
console.log("Last Sara position:", lastSaraPosition);

// Find the first student whose name starts with A
let firstAStudent = students.find(function (student) {
    return student.startsWith('A');
});

console.log("First student whose name starts with A:", firstAStudent);

// Find the position of the first student whose name starts with A
let firstAPosition = students.findIndex(function (student) {
    return student.startsWith('A');
});

console.log("Position of first A student:", firstAPosition);

// Find the last student whose name starts with A
let lastAStudent = students.findLast(function (student) {
    return student.startsWith('A');
});

console.log("Last student whose name starts with A:", lastAStudent);

// Find the position of the last student whose name starts with A
let lastAPosition = students.findLastIndex(function (student) {
    return student.startsWith('A');
});

console.log("Position of last A student:", lastAPosition);