document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuButton = document.querySelector('.menu-button');
    var menuList = mobileMenu.querySelector('.menu-list');

    function showMenu() {
        mobileMenu.classList.add('active');
        menuList.style.display = 'flex';
        menuList.style.flexDirection = 'column'; // Set flex-direction to column
    }

    function hideMenu() {
        mobileMenu.classList.remove('active');
        menuList.style.display = 'none';
    }

    function toggleMenu() {
        mobileMenu.classList.toggle('active');

        // Toggle the menu-list basen on the active class
        menuList.classList.toggle('show');
        if (mobileMenu.classList.contains('active')) {
            menuList.style.flexDirection = 'column'; // Set flex-direction to column when menu is active
        }
    }

    // Enable click functionality for mobile
    menuButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    // Enable hover functionality for desktop
    if (window.innerWidth > 768) {
        menuButton.addEventListener('mouseenter', showMenu);
        mobileMenu.addEventListener('mouseleave', hideMenu);
    }
});
