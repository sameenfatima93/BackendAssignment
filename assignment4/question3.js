// =====================================
// Question 3: Login Validation
// =====================================

// Correct username and password
let correctUsername = "admin";
let correctPassword = "12345";

// Entered username and password
let username = "admin";
let password = "12345";

// Check login details
if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}