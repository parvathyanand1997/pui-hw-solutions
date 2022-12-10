
//bodymovin.js player for each icon while hovering
let rmIcon = document.querySelector('.RM');

    let rmAnimation = bodymovin.loadAnimation({
            container: rmIcon,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "Assets/RM.json"
    });

   let directionMenu1 = 1;
   rmIcon.addEventListener('mouseenter', (e) => {
      rmAnimation.setDirection(directionMenu1);
      rmAnimation.play();
    });

    rmIcon.addEventListener('mouseleave', (e) => {
        rmAnimation.setDirection(-directionMenu1);
        rmAnimation.play();
      });


let jinIcon = document.querySelector('.Jin');

      let jinAnimation = bodymovin.loadAnimation({
              container: jinIcon,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: "Assets/Jin.json"
      });
  
     let directionMenu2 = 1;
     jinIcon.addEventListener('mouseenter', (e) => {
        jinAnimation.setDirection(directionMenu2);
        jinAnimation.play();
      });
  
      jinIcon.addEventListener('mouseleave', (e) => {
          jinAnimation.setDirection(-directionMenu2);
          jinAnimation.play();
        });
  
let sugaIcon = document.querySelector('.Suga');

    let sugaAnimation = bodymovin.loadAnimation({
        container: sugaIcon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "Assets/Suga.json"
    });
    
    let directionMenu3 = 1;
    sugaIcon.addEventListener('mouseenter', (e) => {
        sugaAnimation.setDirection(directionMenu3);
        sugaAnimation.play();
    });
    
    sugaIcon.addEventListener('mouseleave', (e) => {
        sugaAnimation.setDirection(-directionMenu3);
        sugaAnimation.play();
    });

let jhopeIcon = document.querySelector('.J-hope');
    let jhopeAnimation = bodymovin.loadAnimation({
        container: jhopeIcon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "Assets/Jhope.json"
    });
    
    let directionMenu4 = 1;
    jhopeIcon.addEventListener('mouseenter', (e) => {
        jhopeAnimation.setDirection(directionMenu4);
        jhopeAnimation.play();
    });
    
    jhopeIcon.addEventListener('mouseleave', (e) => {
        jhopeAnimation.setDirection(-directionMenu4);
        jhopeAnimation.play();
    });


let jiminIcon = document.querySelector('.Jimin');

    let jiminAnimation = bodymovin.loadAnimation({
        container: jiminIcon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "Assets/Jimin.json"
    });
    
    let directionMenu5 = 1;
    jiminIcon.addEventListener('mouseenter', (e) => {
        jiminAnimation.setDirection(directionMenu5);
        jiminAnimation.play();
    });
    
    jiminIcon.addEventListener('mouseleave', (e) => {
        jiminAnimation.setDirection(-directionMenu5);
        jiminAnimation.play();
    });


let vIcon = document.querySelector('.V');

    let vAnimation = bodymovin.loadAnimation({
        container: vIcon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "Assets/V.json"
    });
    
    let directionMenu6 = 1;
    vIcon.addEventListener('mouseenter', (e) => {
        vAnimation.setDirection(directionMenu6);
        vAnimation.play();
    });
    
    vIcon.addEventListener('mouseleave', (e) => {
        vAnimation.setDirection(-directionMenu6);
        vAnimation.play();
    });

let jkIcon = document.querySelector('.Jungkook');

    let jkAnimation = bodymovin.loadAnimation({
        container: jkIcon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "Assets/Jungkook.json"
    });
    
    let directionMenu7 = 1;
    jkIcon.addEventListener('mouseenter', (e) => {
        jkAnimation.setDirection(directionMenu7);
        jkAnimation.play();
    });
    
    jkIcon.addEventListener('mouseleave', (e) => {
        jkAnimation.setDirection(-directionMenu7);
        jkAnimation.play();
    });


    //rellax.js variables
    var rellax1 = new Rellax('.header');
    var rellax2 = new Rellax('.icon-container');
    var rellax3 = new Rellax('.bg');


    //responsive nav bar
    const navList = document.querySelector('.navList')
    const navBtn = document.querySelector('.navBtn')
    const navLinks = document.querySelectorAll('.navLi')
    
    
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