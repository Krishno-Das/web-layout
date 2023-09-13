const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".nav-menu");

const burgermenu = document.querySelector(".burger-menu");

const xmark = document.querySelector(".xmark");

burger.addEventListener("click", () => {

    navmenu.classList.toggle("active");

    xmark.classList.toggle("active");

    burgermenu.classList.toggle("active");
})