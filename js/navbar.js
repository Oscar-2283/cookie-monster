const container = document.querySelector(".container");
const menu = document.querySelector(".menudown");
const items = document.querySelectorAll(".item");
const menulink = document.querySelectorAll(".menudown a");
let current = 0;
items.forEach((item, i) =>
  item.addEventListener("mouseenter", () => {
    if (i < current) {
      // ltr
      container.className = "container right instant";
      void container.offsetHeight; // force reflow
      container.className = `container left pos${i}`;
    } else if (i > current) {
      // rtl
      container.className = "container left instant";
      void container.offsetHeight; // force reflow
      container.className = `container right pos${i}`;
    }
    current = i;
  })
);








//////////////////////

let nav =document.querySelector('nav');
let banner = document.querySelector('#banner')

// window.onscroll = function(){


//   if(document.documentElement.scrollTop+120 > banner.offsetHeight){
//     nav.classList.remove('d-none')
//     nav.classList.add('d-flex')
//   }else{
//     nav.classList.add('d-none')
//     nav.classList.remove('d-flex')
//   }
// }

let last = 0

document.addEventListener("scroll",function(){
  let currentPos = window.scrollY;
  if (currentPos+120> banner.offsetHeight){
      nav.classList.remove('d-none')
      nav.classList.add('d-flex')
      if (Math.abs(currentPos - last) < 100) {
        return;
      }
      console.log('dfdf'+ currentPos )
      if(currentPos > last ){
          nav.style.top = "-200px";
      }else{
          nav.style.top = "0px";
      }
      last = currentPos 
  }else{
    nav.classList.add('d-none')
    nav.classList.remove('d-flex')
  }

})







////////////////////////////////////////






let mediaIcon = document.querySelectorAll('.meida a')
console.log(mediaIcon)
let mediaBg = document.querySelector('.navbardown')

mediaIcon.forEach(icon =>{
  icon.addEventListener('mouseenter',function(e){
    console.log(e)
    let color = e.target.getAttribute('data-color')
    mediaBg.style.backgroundColor = color
    items.forEach(item=>{
      item.style.color= '	#ffffff'
    })

  })
})
mediaIcon.forEach(icon =>{
  icon.addEventListener('mouseleave',function(e){
    mediaBg.style.backgroundColor = '#CEB289'
    items.forEach(item=>{
      item.style.color= '	#000000'
    })
  })
})




VanillaTilt.init(document.querySelector(".logo"), {
    max: 25,
    speed: 400,
    glare:true,
    'max-glare':1,
});




/////////////////////////////////index

let marker = document.querySelector('#marker')
let item = document.querySelectorAll('ul li a')
console.log(item)

function Indicator(e){
        marker.style.top=e.offsetTop + 'px';
        marker.style.width=e.offsetWidth+50 + 'px';
        console.log(marker.style.width)
}

item.forEach(element => {
    element.addEventListener('mouseenter',(e) =>{
        Indicator(e.target)
    })
    element.addEventListener('mouseleave',(e) =>{
        marker.style.top='0px';
    })
});