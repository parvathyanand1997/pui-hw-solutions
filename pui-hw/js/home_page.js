//Rellax.js variables
let rellax1 = new Rellax('.logo');
let rellax3 = new Rellax('.image');


//Nav Bar Animation

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
});



//Audio button pause and play

let pause = document.querySelector(".pause");
let audio = document.querySelector("#audio");
audio.volume = 0.1;
audio.pause();


function togglePlay() {
	if (audio.paused) {
		audio.play();
		document.getElementById("sound-icon").src = "Assets/mute.png";

	} else {
		audio.pause();
    document.getElementById("sound-icon").src = "Assets/sound.png";
		
	}
}