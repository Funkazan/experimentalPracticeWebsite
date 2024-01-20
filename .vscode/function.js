// JavaScript to toggle the visibility of the menu list based on screen width
var mobileMenu = document.querySelector('.mobile-menu');
var menuButton = document.querySelector('.menu-button');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

// Enable click functionality for mobile, hover for desktop
if (window.innerWidth <= 768) {
    menuButton.addEventListener('click', toggleMenu);
} else {
    menuButton.addEventListener('mouseover', toggleMenu);
    menuButton.addEventListener('mouseout', toggleMenu);
}
