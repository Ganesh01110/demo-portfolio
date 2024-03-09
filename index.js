//cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

})

// for menu activation
// let navbar =document.querySelector('.navlist');

// document.querySelector('.main . navbar>i') .onclick = () =>{
//     navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//   navbar.classList.remove('active');
// }

// left spiral
const words = "i create from imagination"; // Add more words if needed
      

const ANIMATION_DURATION = 2000; // Define your animation duration in milliseconds

function createElements(offset) {
  const characters = words.split("");
  characters.forEach((char, i) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay = `-${
      i * (ANIMATION_DURATION / 16) - offset
    }ms`;

    if (offset >= 0) {
      document.getElementById("spiral").appendChild(div);
    } else {
      document.getElementById("spiral2").appendChild(div);
    }
  });
}

createElements(0);
createElements(-1 * (ANIMATION_DURATION / 1));



TweenMax.staggerFrom(".two>.righht>.box", 2.4, {
  // y: "-100%",
  opacity:0,
  ease: Expo.easeInOut,
  delay: 4,
});



//function for moving divs in project
var arr = [
  { String: "Clean code , Elegant designs" },
  { String: " Html , css , Java script , typescript , tailwind , bootstrap " },
  { String: " react , next.js , mongodb ,redux , vite " },
  { String: " java , spring , sql " },
  { String: " Authentic bitters seitan pug single-origin coffee whatever." },
  { String: "Letterpress chambray brunch." },
  { String: "Ugh PBR&B kale chips Echo Park." },
  { String: " Authentic bitters seitan pug single-origin coffee whatever." },
];

function print() {
  var clutter = " ";
  arr.forEach(function (val, index) {
    clutter += `<div class="ticker__item">${val.String}</div>`;
  });
  console.log(clutter);
  document.getElementById("onetick").innerHTML = clutter;
  document.getElementById("twotick").innerHTML = clutter;
}
print();

// function 

var arr1 = [{
  image:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heading:"project1",
  para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, minima?",
  link:"abc",
},{
  image:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heading:"project1",
  para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, minima?",
  link:"abc",
},{
  image:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heading:"project1",
  para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, minima?",
  link:"abc",
},{
  image:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heading:"project1",
  para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, minima?",
  link:"abc",
},
];

function print1() {
  var clutter1 = "";
  arr1.forEach(function (val1, index) {
    clutter1 += `  <div class="card">
    <div class="p-img"> <img src="${val1.image}"/></div>
    <h1> ${val1.heading}</h1>
    <p>${val1.para}</p>
    <button >visit<i class="ri-arrow-right-up-line"></i></button>
  </div>`;
  });
  console.log(clutter1);
  document.getElementById("projectbox").innerHTML = clutter1;
}
print1();
