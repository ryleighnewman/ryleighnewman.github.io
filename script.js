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

// Attach the scroll event to the toggleHeaderTransparency function
window.addEventListener('scroll', toggleHeaderTransparency);

document.addEventListener('scroll', function() {
    const header = document.querySelector('.transparent');
    const triggerHeight = window.innerHeight / 2; // Adjust this value as needed

    if (window.scrollY > triggerHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});