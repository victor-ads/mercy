document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
