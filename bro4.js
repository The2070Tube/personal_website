document.addEventListener("DOMContentLoaded", () => {
    let colorButton = document.getElementById("colorButton");
    let offButtonImage = document.getElementById("offButton");
    let onButtonImageSrc = "onbutton.png"; // Replace with the actual path to your on button image
    let nave = document.getElementsByClassName("navbar")[0]; // Access the first navbar element
    let bigBack = document.getElementsByClassName("big_background"); // Get all big_background elements
    let welcBlurb = document.getElementById("welcome-blurb");
    let buttonBeck = document.getElementsByClassName("buttonback");
    let scrola = document.getElementsByClassName("scrolla");
    let arlo1 = document.getElementById("arlo1");
    let arlo1src = "left1.png";
    let arlo2 = document.getElementById("arlo2");
    let arlo2src = "arrow1.png";
    let arlo3 = document.getElementById("arlo3");
    let arlo3src = "right1.png";
    let Welcome = document.getElementById("Welcome");
    let aspire = document.getElementsByClassName("glurb");

    // Load the button state from localStorage
    let isOn = localStorage.getItem('colorMode') === 'true';

    function applyColorMode() {
        offButtonImage.src = isOn ? onButtonImageSrc : "offButton.png"; // Update the image based on state
        nave.style.backgroundColor = isOn ? "white" : "#C0C0C0"; // Change background color based on state

        // Loop through all big_background elements and change their background color
        for (let i = 0; i < bigBack.length; i++) {
            bigBack[i].style.backgroundColor = isOn ? "#3399FF" : "black";
        }
        if (welcBlurb) {
            welcBlurb.style.backgroundColor = isOn ? "#F3FEFF" : "black";
            welcBlurb.style.color = isOn ? "black" : "white";
        }
        for (let i = 0; i < buttonBeck.length; i++) {
            buttonBeck[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }
        for (let i = 0; i < scrola.length; i++) {
            scrola[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }
        if (arlo1) arlo1.src = isOn ? arlo1src : "design.png";
        if (arlo2) arlo2.src = isOn ? arlo2src : "arro-removebg-preview.png";
        if (arlo3) arlo3.src = isOn ? arlo3src : "design2.png";
        if (Welcome) Welcome.style.backgroundColor = isOn ? "#D3E2E4" : "#C0C0C0";
        for (let i = 0; i < aspire.length; i++) {
            aspire[i].style.color = isOn ? "black" : "#66FFFF";
        }
    }

    function toggleButton() {
        isOn = !isOn; // Toggle the state
        localStorage.setItem('colorMode', isOn); // Save the state to localStorage
        applyColorMode(); // Apply the changes
    }

    // Apply the current color mode on page load
    applyColorMode();

    if (colorButton) colorButton.addEventListener("click", toggleButton);
});

function scrollToTarget() {
    // Get the target section element
    const targetSection = document.getElementById('targetSection');
    
    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Add a slight offset to scroll further down
    setTimeout(() => {
        window.scrollBy(0, 500); // Adjust 50 to whatever offset you need
    }, 500); // Adjust the timeout if needed
}