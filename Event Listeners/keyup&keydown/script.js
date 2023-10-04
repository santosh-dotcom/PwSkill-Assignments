// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

let container = document.getElementById("container");
let display = document.getElementById("display");

// adding the keydown event listener to the document
document.addEventListener("keydown", function (e) {
    display.style.color = "red";
    display.innerText = e.key + "is keydown";
});

// adding the keyup event listener to the document
document.addEventListener("keyup", function (e) {
    display.style.color = "red";
    display.innerText = e.key + "is keyup";
});