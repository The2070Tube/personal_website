/*
document.addEventListener("DOMContentLoaded", function() {
    // Get the button
    let mybutton = document.getElementById("scrollButton");

    // When the user scrolls down 900px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the bottom of the document
    function bottomFunction() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    // Attach the function to the button's click event
    mybutton.addEventListener('click', bottomFunction);
});

*/

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
    let boxes = document.getElementById("boaz"); // Container element
    let boxinside1 = document.getElementsByClassName("boxinside1");
    let boxinside2 = document.getElementsByClassName("boxinside2");
    let boxinside3 = document.getElementsByClassName("boxinside3");
    let boxintext1 = document.getElementsByClassName("box1text");
    let boxintext2 = document.getElementsByClassName("box2text");
    let boxintext3 = document.getElementsByClassName("box3text");
    let aple = document.getElementById("gaple");
    let apleSrc = "aple1.png";
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
        welcBlurb.style.backgroundColor = isOn ? "#F3FEFF" : "black";
        welcBlurb.style.color = isOn ? "black" : "white";

        // Loop through all buttonback elements and change their background color
        for (let i = 0; i < buttonBeck.length; i++) {
            buttonBeck[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }

        // Loop through all scrolla elements and change their background color
        for (let i = 0; i < scrola.length; i++) {
            scrola[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }

        arlo1.src = isOn ? arlo1src : "design.png";
        arlo2.src = isOn ? arlo2src : "arro-removebg-preview.png";
        arlo3.src = isOn ? arlo3src : "design2.png";

        Welcome.style.backgroundColor = isOn ? "#D3E2E4" : "#C0C0C0";

        // Change background color of the boxes container
        boxes.style.backgroundColor = isOn ? "#F3FEFF" : "black";

        for (let i = 0; i < boxinside1.length; i++) {
            boxinside1[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }

        for (let i = 0; i < boxinside2.length; i++) {
            boxinside2[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }

        for (let i = 0; i < boxinside3.length; i++) {
            boxinside3[i].style.backgroundColor = isOn ? "#F3FEFF" : "black";
        }

        for (let i = 0; i < boxintext1.length; i++) {
            boxintext1[i].style.color = isOn ? "black" : "#F3FEFF";
        }

        for (let i = 0; i < boxintext2.length; i++) {
            boxintext2[i].style.color = isOn ? "black" : "#F3FEFF";
        }

        for (let i = 0; i < boxintext3.length; i++) {
            boxintext3[i].style.color = isOn ? "black" : "#F3FEFF";
        }

        aple.src = isOn ? apleSrc : "Apple_logo_white.svg.png";
        
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

    colorButton.addEventListener("click", toggleButton);
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



