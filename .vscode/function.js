// JavaScript to toggle the visibility of the menu list based on screen width
document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuButton = document.querySelector('.menu-button');

    console.log('mobileMenu:', mobileMenu);
    console.log('menuButton:', menuButton);

    function toggleMenu() {
        mobileMenu.classList.toggle('active');

        // Toggle the menu-list based on the active class
        var menuList = mobileMenu.querySelector('.menu-list');
        if (mobileMenu.classList.contains('active')) {
            menuList.style.display = 'flex';
        } else {
            menuList.style.display = 'none';
        }
    }

    // Enable click functionality for mobile
    menuButton.addEventListener('click', toggleMenu);

    // Enable hover functionality for desktop
    if (window.innerWidth > 768) {
        menuButton.addEventListener('mouseover', toggleMenu);
        menuButton.addEventListener('mouseout', toggleMenu);
    }
});
