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
        cursorX.style.backgroundImage="url(../img/cursor/add-circle.svg)"
    })
})
image.forEach(item=>{
    item.addEventListener('mouseleave',function(){
        cursorX.classList.remove('bg')

        cursorX.style.backgroundImage="url(./img/cursor/abc.ico)"
        cursorX.style.transform = 'scale(0.6) translate(-50%, -50%)'
    })
})


