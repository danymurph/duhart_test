// JavaScript to toggle the popout menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const popoutMenu = document.getElementById("popout-menu");

    menuToggle.addEventListener("click", function () {
        popoutMenu.classList.toggle("open");
    });
});
