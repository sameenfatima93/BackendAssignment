// Question 3 - Employee Data from an API

const employees = [
    { name: 'Ali', department: 'IT', salary: 80000 },
    { name: 'Sara', department: 'HR', salary: 70000 },
    { name: 'Ahmed', department: 'IT', salary: 95000 },
    { name: 'Ayesha', department: 'Finance', salary: 85000 }
];

console.log("=== Question 3: Employee Data from an API ===");
console.log("All Employee Records:", employees);

// 1. Filter employees belonging to IT department
const itEmployees = employees.filter(employee => employee.department === 'IT');
console.log("IT Department Employees:", itEmployees);

// 2. Find first employee with salary greater than 90000
const highSalaryEmployee = employees.find(employee => employee.salary > 90000);
console.log("First employee with salary > 90000:", highSalaryEmployee);

// 3. Create array containing only employee names using map()
const employeeNames = employees.map(employee => employee.name);
console.log("List of Employee Names:", employeeNames);

// 4. Calculate total salary using reduce()
const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log("Total Salary of all employees:", totalSalary);