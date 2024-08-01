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
    const solidColorSection = document.querySelector('.solid-color-section');
    const solidColorSectionHeight = solidColorSection ? solidColorSection.offsetHeight : 0;

    if (window.scrollY > solidColorSectionHeight) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
</script>