
//Responsive Navbar
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

