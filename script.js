window.onscroll = function() {toggleHeaderTransparency()};

function toggleHeaderTransparency() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 50) { // Adjust this threshold as needed
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
}