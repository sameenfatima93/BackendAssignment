let prices = [1200, 450, 3000, 750, 1500, 250];

// Lowest to highest
let lowToHigh = [...prices];

lowToHigh.sort(function (a, b) {
    return a - b;
});

console.log("Lowest to highest:", lowToHigh);


// Highest to lowest
let highToLow = [...prices];

highToLow.sort(function (a, b) {
    return b - a;
});

console.log("Highest to lowest:", highToLow);


// Original list
console.log("Original prices:", prices);


// Reversed version
let reversedPrices = [...prices];

reversedPrices.reverse();

console.log("Reversed prices:", reversedPrices);


// Random ordering
let randomPrices = [...prices];

randomPrices.sort(function () {
    return Math.random() - 0.5;
});

console.log("Random ordering:", randomPrices);