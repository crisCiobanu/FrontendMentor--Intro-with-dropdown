const closeMenuButton = document.querySelector(".close-menu-icon");
const menuButton = document.querySelector(".menu-icon");
const navBar = document.querySelector("nav");
const darkLayer = document.querySelector(".dark-layer");

closeMenuButton.addEventListener("click", () => {
    navBar.setAttribute("data-visible", "false");
    darkLayer.setAttribute("data-visible", "false")
});

menuButton.addEventListener("click", () => {
    navBar.setAttribute("data-visible", "true");
    darkLayer.setAttribute("data-visible", "true")
})
