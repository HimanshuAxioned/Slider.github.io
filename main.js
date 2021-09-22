const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const slider = document.querySelector('.banner-content');
const slides = document.querySelectorAll('.slide');
const arrow = document.querySelectorAll('.banner-arrow');

// hamburger
hamburger.addEventListener('click', function () {
  navList.classList.toggle('responsive-nav');
  hamburger.classList.toggle('close');
})

const slide = [];
slides.forEach(function (s) {
  slide.push(s);
})
console.log(slide)

arrow.forEach(function (a) {
  let active = document.querySelector('.active');
  let activeSlide = slide.indexOf(active);
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


  let leftArrow = document.querySelector('.left-arrow');
  let rightArrow = document.querySelector('.right-arrow');

  a.addEventListener('click', function () {
    
    if (a == leftArrow) {
      active.style.transform = 'translateX(-150%)';
      active.classList.remove('active');
      nextSlide.classList.add('active');
      console.log(nextSlide)
    } else if (a == rightArrow){
      active.style.transform = 'translateX(150%)';
      active.classList.remove('active');
      previousSlide.classList.add('active');
      console.log(previousSlide)
    }

  })
})
