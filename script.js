window.onscroll = function() {toggleHeaderTransparency()};

function toggleHeaderTransparency() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 50) { // Adjust this threshold as needed
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
}

<script>
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Adjust this value to control when the effect starts

    if (window.scrollY > scrollThreshold) {
        header.classList.add('frosted');
    } else {
        header.classList.remove('frosted');
    }
});
</script>