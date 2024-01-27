document.addEventListener('DOMContentLoaded', function () {
    // Get the button and reference element
    var scrollButton = document.getElementById('scrollButton');
    var referenceSection = document.getElementById('referenceSection');

    // Add click event listener to the button
    scrollButton.addEventListener('click', function () {
        // Scroll to the reference section
        referenceSection.scrollIntoView({ behavior: 'smooth' });
    });
});
