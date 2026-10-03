const multiply = (a, b) => a * b;
const result = multiply(5, 10);

const add = (x, y) => x + y;
const sum = add(3, 7);

console.log(`The result of multiplication is: ${result}`);
console.log(`The result of addition is: ${sum}`)

const subtraction = (a,b) => a - b ;
const diffrence = subtraction(33-5);

const fruites = ["apple", "banana", "cherry", "date"];
console.log(fruites[1]);
fruites[1] = "blueberry"; 

fruites.push("elderberry");
console.log(fruites);

fruites.pop();
console.log(fruites);

fruites.shift();
console.log(fruites);

fruites.unshift("apricot");
console.log(fruites);


