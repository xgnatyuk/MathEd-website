(function() {
    var menuItems = document.getElementsByClassName("sidebar")[0];
    var menuButton = document.getElementsByClassName("menu")[0];
    menuButton.addEventListener('click', function() {
        menuItems.classList.toggle('responsive');
    });
}());