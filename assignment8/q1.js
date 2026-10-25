// Question 1 - Online Store Sales Report

const orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

console.log("=== Question 1: Online Store Sales Report ===");
console.log("Original Order Amounts:", orderAmounts);

// 1. First order amount greater than 2000 using find() and an arrow function
const firstOver2000 = orderAmounts.find(amount => amount > 2000);
console.log("First order greater than 2000:", firstOver2000);

// 2. All orders greater than 1000 using filter() and an arrow function
const ordersOver1000 = orderAmounts.filter(amount => amount > 1000);
console.log("Orders greater than 1000:", ordersOver1000);

// 3. Combined total of all order amounts using reduce() and an arrow function
const totalSales = orderAmounts.reduce((total, amount) => total + amount, 0);
console.log("Combined Total Sales Amount:", totalSales);