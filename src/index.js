import './style.css';

window.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerMenu = document.querySelector("#hamburger");
    const navUl = document.querySelector(".nav-ul");

    const menuLink = document.querySelectorAll('.menu-link');

    menuLink.forEach((link) => {
        link.addEventListener('click', () => {
            navUl.classList.toggle('show');
            hamburgerMenu.classList.toggle('icon-toggle');
        })
    })
    const year = document.querySelector("#copyyear");
    year.innerHTML = new Date().getFullYear();
    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('show');
        hamburgerMenu.classList.toggle('icon-toggle');
    })
});
