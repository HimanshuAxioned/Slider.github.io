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
  a.addEventListener('click', function () {
    let active = document.querySelector('.active');
    let activeSlide = slide.indexOf(active)
    let nextSlide;
    let previousSlide;

    // next slide
    if (activeSlide == slide.length - 1) {
      nextSlide = slide[0];
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

    slider.style.overflowX = 'hidden';

    if (a == leftArrow) {
      leftSide();
    }
    else if (a == rightArrow) {
      rightSide();
    }

    function leftSide() {
      active.style.transition = '0.2s';
      active.style.transform = 'translateX(0)';
      active.classList.remove('active');
      nextSlide.classList.add('active');
      previousSlide.style.transform = 'translateX(-150%)';
      nextSlide.style.transform = 'translateX(150%)';
      nextSlide.style.transition = 'none';
    }

    function rightSide() {
      active.style.transition = '0.2s';
      active.style.transform = 'translateX(0)';
      active.classList.remove('active');
      previousSlide.classList.add('active');
      nextSlide.style.transform = 'translateX(150%)';
      previousSlide.style.transform = 'translateX(-150%)';
      previousSlide.style.transition = 'none';
      
    }
  })
})

