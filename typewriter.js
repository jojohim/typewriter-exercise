"use strict";

window.addEventListener("DOMContentLoaded", init);

//DEFINING VARIABLES

let textBox = document.querySelector(".typewritten");
let writtenText;
let showText;
let i = 1;

//INIT
function init() {
    console.log("INIT IS CALLED");

    //GET TEXT
    writtenText = textBox.textContent;

    //HIDE TEXT
    textBox.innerHTML = "";

    //CALL LOOP
    displayText();
}

//LOOP, display one by one

function displayText() {
    console.log("DISPLAYTEXT IS CALLED");
    showText = writtenText.substring(0, i);
    textBox.textContent = showText;

    //SET TIMEOUT
    if (i < writtenText.length) {
        i++;
        setTimeout(displayText, 200);
    }

}
