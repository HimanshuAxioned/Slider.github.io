const hamburger = document.querySelector('.hamburger');
const navList = document.querySelectorAll('.nav-list');
const slider = document.querySelector('.banner-content');
const slides = document.querySelectorAll('.slide');
const arrow = document.querySelectorAll('.banner-arrow');

// hamburger
hamburger.addEventListener('click', function () {

  navList.forEach(function (n) {
    n.classList.toggle('responsive-nav');
  })
  hamburger.classList.toggle('close');
})

const slide = [];
slides.forEach(function (s) {
  slide.push(s);
})

arrow.forEach(function (a) {
  a.addEventListener('click', function (e) {
    let active = document.querySelector('.active');
    let activeSlide = slide.indexOf(active)
    let nextSlide;
    let previousSlide;





    // next slide
    if (activeSlide == slide.length - 1) {
      nextSlide = slide[0]

    } else {
      nextSlide = slide[activeSlide + 1]
    }

    // previous slide
    if (activeSlide == 0) {
      previousSlide = slide[slide.length - 1];

    } else {
      previousSlide = slide[activeSlide - 1];
    }


    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');


    let oppositeSilde = Math.abs(activeSlide - 2);
    slide[oppositeSilde].classList.add('hide')

    let hide = document.querySelector('.hide');
    hide.style.visibility = 'hidden';

    let lastSlide = slide[slide.length - 1]

    if (a == leftArrow) {
      lastSlide.style.visibility = 'hidden';
      leftSide();
      hide.classList.remove('hide');
    }
    else if (a == rightArrow) {
      lastSlide.style.visibility = 'hidden';
      rightSide();
      hide.classList.remove('hide');
    }

    


    function leftSide() {

      nextSlide.classList.add('active');
      active.style.transform = 'translateX(0)';
      previousSlide.style.transform = 'translateX(-150%)';
      nextSlide.style.transform = 'translateX(150%)';
      active.style.transition = '1s';
      active.style.visibility = 'visible';
      active.classList.remove('active');
     
    }

    function rightSide() {
      active.style.transition = '1s';
      previousSlide.classList.add('active');
      active.classList.remove('active');
      active.style.transform = 'translateX(0)';
      active.style.visibility = 'visible';
      nextSlide.style.transform = 'translateX(150%)';
      previousSlide.style.transform = 'translateX(-150%)';
    }

  })
})

