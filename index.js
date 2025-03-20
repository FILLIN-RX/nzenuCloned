/*
const bootstrap = require('bootstrap');

// Description: This section is used to handle the collapse button in the index.html file.

let isClicked= false;

let collapseElement = new bootstrap.Collapse(document.getElementById('collapseContent'), {toggle: false});
 
document.getElementById("collapseButton").addEventListener("click", function() {
    if (isClicked) {
        collapseElement.hide();
        console.log("Second click: Action 2 executed!");
        this.innerText = "Click Me"; // Reset button text
    } else {
        collapseElement.show();
        console.log("First click: Action 1 executed!");
        this.innerText = "Clicked!"; // Change button text
    }
    isClicked = !isClicked; // Toggle state
});
*/
// Ensure the DOM is fully loaded before attaching event listeners
let isClicked = false;
let collapseButton = document.querySelector(".divlink");
let collapseElement = document.getElementById("collapseContent");

if (collapseButton && collapseElement) {
    collapseButton.addEventListener("click", function() {
        if (isClicked) {
            collapseElement.style.display = "none"; // Hide element
            console.log("Second click: Action 2 executed!");
        } else {
            collapseElement.style.display = "block"; // Show element
            console.log("First click: Action 1 executed!");
        }
        isClicked = !isClicked; // Toggle state
    });
} else {
    console.error("Collapse button or collapse content not found!");
}
