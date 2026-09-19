// // Access heading and paragraph using getElementById()
// let title = document.getElementById("title");
// let message = document.getElementById("message");

// // Access the button
// let showBtn = document.getElementById("showBtn");

// // When button is clicked
// showBtn.addEventListener("click", function () {

//     // Display heading text using alert()
//     alert(title.innerText);

//     // Display paragraph text in console
//     console.log(message.innerText);

// });

// // Display a simple message using document.write()
// document.write("This message is displayed using document.write().");




// _____own code_____
// sab sy pehly title or message or buttion ko get krna hy 
let  myTital = document.getElementById("title");
let myMssage = document.getElementById("message");
let myButton = document.getElementById("showBtn");

// button ko click krny ky bad heading ky ander koch bhi show krwana DOM me pehly button ka function open kro phir usme tital id wala variable likh kr jo likhwana hy innerhtml me ikh do

myButton.addEventListener("click", function(){
    // myTital.innerHTML = "This is the new heading text!";
    alert("hello everyone");
});
