document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class if element is in the viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-slide, .animate-fade');
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('animated');
                // Optional: Remove class after animation
                // element.classList.remove('animate-slide', 'animate-fade');
            }
        });
    }

    // Throttled scroll event handler
    let timeout;
    function throttledAnimateOnScroll() {
        if (!timeout) {
            timeout = setTimeout(function () {
                animateOnScroll();
                timeout = null;
            }, 100); // Adjust delay as needed
        }
    }

    // Run animation on scroll and on page load
    window.addEventListener('scroll', throttledAnimateOnScroll);
    animateOnScroll(); // Run once to check elements already in view on page load
});