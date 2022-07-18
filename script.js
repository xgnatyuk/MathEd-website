(function() {
    var menuItems = document.getElementsByClassName("sidebar__item")[0];
    var menuButton = document.getElementsByClassName("menu")[0];

    menuItems.classList.toggle('responsive');

    menuButton.addEventListener('click', function() {
        menuItems.classList.toggle('responsive');
    });
}());