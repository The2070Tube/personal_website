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