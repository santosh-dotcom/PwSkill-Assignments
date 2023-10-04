// Mouseover

// The mouseover event is fired at an element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.

const boxElement = document.getElementById("box");

// add a mouseover event listener to the element
boxElement.addEventListener("mouseover", function (){
    alert("you entered in restricted area (Mouse over event is working properly)");
});