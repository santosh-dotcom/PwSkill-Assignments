//Doubleclick Event

// The Doubleclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked, that is, when it's rapidly clicked twice on a single element within a very short span of time.

const boxElement = document.getElementById('box');

// adding a dbclick event listener to the element

boxElement.addEventListener("dblclick", function(){
    alert("Doubleclick event is working properly 👍")
})