const container = document.querySelector(".container1");
const menu = document.querySelector(".menudown");
const items = document.querySelectorAll(".item");
const menulink = document.querySelectorAll(".menudown a");
let current = 0;
items.forEach((item, i) =>
  item.addEventListener("mouseenter", () => {
    if (i < current) {
      // ltr
      container.className = "container1 right instant";
      void container.offsetHeight; // force reflow
      container.className = `container1 left pos${i}`;
    } else if (i > current) {
      // rtl
      container.className = "container1 left instant";
      void container.offsetHeight; // force reflow
      container.className = `container1 right pos${i}`;
    }
    current = i;
  })
);

//////////////////////

let nav = document.querySelector("nav");
let banner = document.querySelector("#banner");

let last = 0;
var scrollTop = window.pageYOffset || document.body.scrollTop;
console.log("eefefef" + scrollTop);
function navbardown() {
  window.addEventListener("resize", function () {
    var currentWidth = window.innerWidth;
    var currentHeight = window.innerHeight;

    if (currentWidth > 1200) {
      scrolle();
    }
  });
}

function scrolle() {
  document.addEventListener("scroll", function () {
    let currentPos = window.scrollY;

    if (currentPos + 120 > banner.offsetHeight) {
      nav.classList.remove("d-none");
      nav.classList.add("d-flex");

      if (Math.abs(currentPos - last) < 100) {
        return;
      }
      console.log("dfdf" + currentPos);
      if (currentPos > last) {
        nav.style.top = "-200px";
      } else {
        nav.style.top = "0px";
      }
      last = currentPos;
    } else {
      nav.classList.add("d-none");
      nav.classList.remove("d-flex");
    }
  });
}

scrolle(); // init

navbardown();

////////////////////////////////////////

let mediaIcon = document.querySelectorAll(".media a");
console.log(mediaIcon);
let mediaBg = document.querySelector(".navbardown");
let mediaColor = document.querySelectorAll(".navbardown p");

mediaIcon.forEach((icon) => {
  icon.addEventListener("mouseenter", function (e) {
    console.log(e);
    let color = e.target.getAttribute("data-color");
    mediaBg.style.backgroundColor = color;
    mediaColor.forEach((x) => {
      x.style.color = "#ffffff";
    });
  });
});
mediaIcon.forEach((icon) => {
  icon.addEventListener("mouseleave", function (e) {
    mediaBg.style.backgroundColor = "#CEB289";
    mediaColor.forEach((item) => {
      item.style.color = "	#000000";
    });
  });
});

VanillaTilt.init(document.querySelector(".logo"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

/////////////////////////////////index

let marker = document.querySelector("#marker");
let item = document.querySelectorAll("ul li a");
console.log(item);

function Indicator(e) {
  marker.style.top = e.offsetTop + "px";
  marker.style.width = e.offsetWidth + 50 + "px";
  console.log(marker.style.width);
}

item.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    Indicator(e.target);
  });
  element.addEventListener("mouseleave", (e) => {
    marker.style.top = "0px";
  });
});
