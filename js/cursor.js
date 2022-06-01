const cursorX = document.querySelector('.cursor')
document.addEventListener("mousemove",e=>{
    cursorX.style.top = e.pageY + 'px';
    cursorX.style.left = e.pageX + 'px';
})

let image = document.querySelectorAll('.list')
image.forEach(item=>{
    item.addEventListener('mouseenter',function(){
        cursorX.style.transform = 'scale(1.5)'
        cursorX.classList.add('bg')
        cursorX.style.backgroundImage="url(./img/cursor/add-circle.svg)"
    })
})
image.forEach(item=>{
    item.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg')

        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })
})

let scrolldown =document.querySelector('.swiper-news-border-lineL')

scrolldown.addEventListener('mouseenter',function(){
    cursorX.style.transform = 'scale(1.2) translate(-50%, -50%)'
    cursorX.classList.add('bg-scroll')
    cursorX.style.backgroundImage="url(./img/cursor/scroll1.svg)"
})
scrolldown.addEventListener('mouseleave',function(){
    cursorX.classList.remove('bg-scroll')
    cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
    cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
})

let meidaIcons =document.querySelectorAll('.navbar_icon')
meidaIcons.forEach(item=>{
    item.addEventListener('mouseenter',function(){
        cursorX.style.transform = 'scale(0.8) translate(-50%, -50%)'
        cursorX.classList.add('bg')
        cursorX.style.backgroundImage="url(./img/cursor/add-circle.svg)"
    })
})
meidaIcons.forEach(item=>{
    item.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg')
        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })
})


let lock =document.querySelectorAll('.navbar ul')
lock.forEach(item=>{
    item.addEventListener('mouseenter',function(){
        cursorX.style.transform = 'scale(0.8) translate(-50%, -50%)'
        cursorX.classList.add('bg-scroll')
        cursorX.style.backgroundImage="url(./img/cursor/scrolllight1.svg)"
    })
})
lock.forEach(item=>{
    item.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg-scroll')
        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })
})




// navbardown

let navbardownMeidaIcons =document.querySelectorAll('.media a')
navbardownMeidaIcons.forEach(item=>{
    item.addEventListener('mouseenter',function(){
        cursorX.style.transform = 'scale(0.8) translate(-50%, -50%)'
        cursorX.classList.add('bg')
        cursorX.style.backgroundImage="url(./img/cursor/add-circle.svg)"
    })
})
navbardownMeidaIcons.forEach(item=>{
    item.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg')
        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })
})


let lockNavdown =document.querySelector('.links')

    lockNavdown.addEventListener('mouseenter',function(){
        cursorX.style.transform = 'scale(0.8) translate(-50%, -50%)'
        cursorX.classList.add('bg-scroll')
        cursorX.style.backgroundImage="url(./img/cursor/scrolllight1.svg)"
    })


    lockNavdown.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg-scroll')
        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })

// hamburger overlay-menu

let hamMeidaIcons =document.querySelectorAll('.overlay-menu ul .media-icon a')
hamMeidaIcons.forEach(item=>{
    item.addEventListener('mouseenter',function(){
        cursorX.style.transform = 'scale(0.8) translate(-50%, -50%)'
        cursorX.classList.add('bg')
        cursorX.style.backgroundImage="url(./img/cursor/add-circle.svg)"
    })
})
hamMeidaIcons.forEach(item=>{
    item.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg')
        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })
})


let hamlock =document.querySelectorAll('.overlay-menu ul li')
    hamlock.forEach(item =>{

        item.addEventListener('mouseenter',function(){
            cursorX.style.transform = 'scale(0.8) translate(-50%, -50%)'
            cursorX.classList.add('bg-scroll')
            cursorX.style.backgroundImage="url(./img/cursor/scrolllight1.svg)"
        })
    })

    hamlock.forEach(item=>{

        item.addEventListener('mouseleave',function(){
            cursorX.classList.remove('bg-scroll')
            cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
            cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
        })
    })