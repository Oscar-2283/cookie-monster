const menuPhone = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menuContainer');
const menuIcon = document.querySelector('.bubble-menu-icon');
const bubleMenu = document.querySelector('.bubleMenu');
const menuLock = document.querySelector('.overlay-menu-ul')
console.log(menuLock)


function toggleMenu(e) {


    menuLock.addEventListener('mouseleave',function(){
        if ($(document).height() > $(window).height()) {
            $("html").addClass("noscroll");
          }else{
            $("html").addClass("fixWindow"); 
          }
    })
    menuLock.addEventListener('click',function(){
        if ($(document).height() > $(window).height()) {
            $("html").removeClass("noscroll");
        }else{
           $("html").removeClass("fixWindow");
       }
    })

    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    e.preventDefault();
    console.log(e);
    
    if (menuIcon.classList == 'fa bubble-menu-icon fa-times') {
        bubleMenu.classList.add('w-100')
        bubleMenu.classList.add('h-100')
        if ($(document).height() > $(window).height()) {
            $("html").addClass("noscroll");
          }else{
            $("html").addClass("fixWindow"); 
          }
    }else{
        bubleMenu.classList.remove('w-100')
        bubleMenu.classList.remove('h-100')
        if ($(document).height() > $(window).height()) {
            $("html").removeClass("noscroll");
        }else{
           $("html").removeClass("fixWindow");
       }
    }
}






menuPhone.addEventListener('click', toggleMenu, false);