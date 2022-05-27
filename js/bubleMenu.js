const menu = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menuContainer');
const menuIcon = document.querySelector('.bubble-menu-icon');
const bubleMenu = document.querySelector('.bubleMenu');



function toggleMenu(e) {
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    e.preventDefault();
    console.log(e);
    
    if (menuIcon.classList == 'fa bubble-menu-icon fa-times') {
        bubleMenu.classList.add('w-100')
        bubleMenu.classList.add('h-100')
    }else{
        bubleMenu.classList.remove('w-100')
        bubleMenu.classList.remove('h-100')
    }
}


menu.addEventListener('click', toggleMenu, false);