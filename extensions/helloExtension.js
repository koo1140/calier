// hello-button.js - This file defines an extension that adds a "Hello" button to the sidebar

// Check if the extension is enabled
const isEnabled = true; // Change this to false to disable the button

if (isEnabled) {
    // Create the new button element
    const helloButton = document.createElement('button');
    helloButton.textContent = "Hello";
    helloButton.style.backgroundColor = "#4CAF50"; // Green color
    helloButton.style.color = "white";
    helloButton.style.border = "none";
    helloButton.style.padding = "10px";
    helloButton.style.borderRadius = "5px";
    helloButton.style.cursor = "pointer";

    // Add the button to the sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(helloButton);

    // Add an event listener to show a greeting when the button is clicked
    helloButton.addEventListener('click', () => {
        alert('Hello, welcome to Calier!');
    });
}
