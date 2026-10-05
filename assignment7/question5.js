let employee = {
    employeeId: 101,
    firstName: "Ahmed",
    lastName: "Khan",
    department: "IT",
    designation: "Frontend Developer",
    salary: 90000,

    // Method to return complete name
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    // Method to return ID and department
    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +
            ", Department: " + this.department;
    }
};


// Call first method
console.log(employee.getFullName());

// Call second method
console.log(employee.getEmployeeInfo());


// Second employee object
let employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Ali",
    department: "Marketing",
    designation: "Marketing Executive",
    salary: 75000,

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +
            ", Department: " + this.department;
    }
};


// Call methods for second employee
console.log(employee2.getFullName());
console.log(employee2.getEmployeeInfo());