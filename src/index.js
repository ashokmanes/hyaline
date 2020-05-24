import './style.css';
import './styles/main.css';
import main from "./main/main.html";


document.body.innerHTML += main;


window.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerMenu = document.querySelector("#hamburger");
    const navUl = document.querySelector(".nav-ul");

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('show');
        hamburgerMenu.classList.toggle('icon-toggle');
    })
});
