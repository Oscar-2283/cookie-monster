const menu2 = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menu-container-phone');
const menuIcon = document.querySelector('.menu-container-phone i');

function toggleMenu(e) {
    menuItems.classList.toggle('open-phone');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    e.preventDefault();
    console.log(e);
}

menu2.addEventListener('click', toggleMenu, false);