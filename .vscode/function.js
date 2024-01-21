// JavaScript to toggle the visibility of the menu list based on screen width
document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuButton = document.querySelector('.menu-button');
    var menuList = mobileMenu.querySelector('.menu-list');

    //console.log('mobileMenu:', mobileMenu);
    //console.log('menuButton:', menuButton);

    function toggleMenu() {
        mobileMenu.classList.toggle('active');

        // Toggle the menu-list based on the active class
        if (mobileMenu.classList.contains('active')) {
            menuList.style.display = 'flex';
        } else {
            // Add a class to handle the delay before hiding the menu
            menuList.classList.add('leave');
            setTimeout(() => {
                menuList.style.display = 'none';
                // Remove the class after the delay
                menuList.classList.remove('leave');
            }, 1000); //Adjust the delay time (in milliseconds) as needed
        }
    }

    //Hide menu list by default
    menuList.style.display = 'none';

    // Enable click functionality for mobile
    menuButton.addEventListener('click', toggleMenu);

    // Enable hover functionality for desktop
    if (window.innerWidth > 768) {
        menuButton.addEventListener('mouseenter', toggleMenu);
        menuButton.addEventListener('mouseleave', toggleMenu);
    }
});
