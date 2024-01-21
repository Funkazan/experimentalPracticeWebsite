document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuButton = document.querySelector('.menu-button');
    var menuList = mobileMenu.querySelector('.menu-list');

    function showMenu() {
        mobileMenu.classList.add('active');
        menuList.style.opacity = '1';
        menuList.style.height = 'auto';
    }

    function hideMenu() {
        mobileMenu.classList.remove('active');
        menuList.style.opacity = '0';
        menuList.style.height = '0';
    }

    // Hide the menu initially
    hideMenu();

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        var isMenuActive = mobileMenu.classList.contains('active');
        menuList.style.opacity = isMenuActive ? '1' : '0';
        menuList.style.height = isMenuActive ? 'auto' : '0';
    }

    // Enable click functionality for mobile
    menuButton.addEventListener('click', function () {
        toggleMenu();
    });

    // Enable hover functionality for desktop
    if (window.innerWidth > 768) {
        menuButton.addEventListener('mouseenter', showMenu);
        mobileMenu.addEventListener('mouseleave', hideMenu);
    }
});
