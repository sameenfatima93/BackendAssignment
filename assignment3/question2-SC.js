// Access heading and paragraph using getElementById()
let title = document.getElementById("title");
let message = document.getElementById("message");

// Access the button
let showBtn = document.getElementById("showBtn");

// When button is clicked
showBtn.addEventListener("click", function () {

    // Display heading text using alert()
    alert(title.innerText);

    // Display paragraph text in console
    console.log(message.innerText);

});

// Display a simple message using document.write()
document.write("This message is displayed using document.write().");