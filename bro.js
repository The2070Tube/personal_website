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


