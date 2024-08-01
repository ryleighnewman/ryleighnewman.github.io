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
                // Remove class after animation if needed
                // element.classList.remove('animate-slide', 'animate-fade');
            }
        });
    }

    // Run animation on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once to check elements already in view on page load
});