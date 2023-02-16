
//allows the header to perform a function when an eventListener happens when the window Yaxis is scrolled
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// when the menu icon is clicked, the navbar active css will activate
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// when scroll event happens, small navbar popup will be removed

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const scrollApear = ScrollReveal({
    distance: '25px',
    duration: 2500,
    reset: true
});

scrollApear.reveal('.home-text', { delay: 110, origin: 'bottom' });
scrollApear.reveal('.about, .services, .projects, .contact', { delay: 100, origin: 'bottom' });
