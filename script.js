// Define a function to toggle the header transparency based on scroll position
function toggleHeaderTransparency() {
    var header = document.querySelector('header');
    var scrollThreshold = 50; // Adjust this value to control when the effect starts

    if (window.scrollY > scrollThreshold) {
        header.classList.add('transparent'); // Apply the gradient and frosted effect
    } else {
        header.classList.remove('transparent'); // Remove the gradient and frosted effect
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.transparent');
    
    // Define the dark gray color for detection
    const darkGray = 'rgb(50, 50, 50)'; // Adjust as needed

    // Create an observer to detect intersection with a certain color
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const entryColor = window.getComputedStyle(entry.target).backgroundColor;
                if (entryColor === darkGray) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    }, {
        root: null, // Use viewport as root
        threshold: 0.1 // Adjust as needed
    });
    
    // Observe the target element or background area
    const target = document.querySelector('.color-trigger'); // Replace with your target element
    observer.observe(target);
});