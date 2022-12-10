//rellax.js variables
var rellax1 = new Rellax('.title-banner');
var rellax2 = new Rellax('.content-parallax');

//getting search params for templatizing
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const membName = params.get("name");


//console.log(bts[membName]);
//console.log(document.getElementById("memberName"));

//Stage Name
document.getElementById("memberName").innerText = membName;

//Full Name
document.getElementById("memberFullName").innerText = bts[membName].fullName;

//Header Background Image

document.getElementById('title-banner').style.backgroundImage= `url( "${bts[membName].titleImage}")`;


//image1
document.getElementById("image1").src = bts[membName].image1;
document.getElementById("image2").alt = membName+ 'concept photo 1';

//text description 1 
document.getElementById("para1").innerText =  bts[membName].text1;

//image 2
document.getElementById("image2").src = bts[membName].image2;
document.getElementById("image2").alt = membName+ 'concept photo 2';

//text description 2
document.getElementById("para2").innerText =  bts[membName].text2;

//playlist URL
document.getElementById("playlist-link").src = bts[membName].playlistURL;

//member name of playlist title 
document.getElementById("playlist-membername").innerText = membName;

//nav bar color
document.getElementById("navigation-bar-color").style.backgroundColor = `${bts[membName].color}`;

//nav menu color
document.querySelector('.navList').style.backgroundColor = `${bts[membName].color + ",0.6)"}`;
 
//playlist title color
document.getElementById("playlist-title").style.color = `${bts[membName].color + ")"}`;


//background linear gradient color
let bgGradient = "linear-gradient(0deg," + `${bts[membName].color + ',0.6)'} `+ "0%, rgba(255,255,255,1) 66%)";
console.log(bgGradient);

document.getElementById("content-container").style.background = `${bgGradient}`;


//responsive nav bar
const navList = document.querySelector('.navList');
const navBtn = document.querySelector('.navBtn');
const navLinks = document.querySelectorAll('.navLi');
    
    
  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('navBtnToggle')
    navList.classList.toggle('navActive')
    navLinks.forEach((item, index) => {
    const delay = index / 10 + 0.05
    if (item.style.animation)
      item.style.animation = ''
    else
    item.style.animation = `SlideIn 0.5s forwards ${delay}s`
  })
})

