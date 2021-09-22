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

    console.log(activeSlide)

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


    let leftArrow = document.querySelector('.left-arrow');
    let rightArrow = document.querySelector('.right-arrow');
    

   
    if (a == leftArrow) {

      active.style.transition = '1s';
      active.classList.remove('active');
      nextSlide.classList.add('active');
      previousSlide.style.transform = 'translateX(-150%)';
      active.style.transform = 'translateX(0)';
      nextSlide.style.transform = 'translateX(150%)';
      nextSlide.style.transition = '0s';
      console.log(nextSlide)

    } else if (a == rightArrow) {
      active.style.transition = '1s';
      active.classList.remove('active');
      console.log(active);
      previousSlide.classList.add('active');
      nextSlide.style.transform = 'translateX(150%)';
      previousSlide.style.transform = 'translateX(-150%)';
      previousSlide.style.transition = '0s';
      active.style.transform = 'translateX(0)';
    }

  })
})
