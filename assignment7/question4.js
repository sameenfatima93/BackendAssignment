let employee = {
    employeeId: 101,
    firstName: "Ahmed",
    lastName: "Khan",
    department: "IT",
    designation: "Frontend Developer",
    salary: 80000
};


// Dot notation
console.log("First Name:", employee.firstName);
console.log("Department:", employee.department);


// Bracket notation
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);


// Add a new property
employee.email = "ahmed@example.com";


// Change an existing property
employee.salary = 90000;


// Remove a property
delete employee.lastName;


// Display final employee object
console.log("Final Employee Object:", employee);