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

// const slide = [];
// slides.forEach(function (s) {
//   slide.push(s);
// })

// function previousNext() {
//   let active = document.querySelector('.active');
//   let activeSlide = slide.indexOf(active);
//   let nextSlide;
//   let previousSlide;

//   //next slide
//   if (activeSlide == slide.length - 1) {
//     nextSlide = slide[0]

//   } else {
//     nextSlide = slide[activeSlide + 1]
//   }

//   // previous slide
//   if (activeSlide == 0) {
//     previousSlide = slide[slide.length - 1];

//   } else {
//     previousSlide = slide[activeSlide - 1];
//   }

//   return [nextSlide, previousSlide]

// }

// function slidePosition() {
//   let active = document.querySelector('.active');
//   let activeSlide = slide.indexOf(active);
//   let prevNext = previousNext();
//   let next = prevNext[0];
//   let previous = prevNext[1]

//   slide.forEach(function (s, i) {
//     if (i == activeSlide) {
//       s.style.transform = 'translateX(0)';
//     } else if (s == previous) {
//       s.style.transform = 'translateX(-150%)';
//     } else if (s == next) {
//       s.style.transform = 'translateX(150%)';
//     } else {
//       s.style.transform = 'translateX(150%)';
//     }

    

//     s.addEventListener('transitionend', function(){
//       s.classList.remove('top')
//     })
//     if (s.classList.contains('top')){
//       s.style.transition = '1s';
//     } else {
//       s.style.transition = '0s';
//     }
//   })
// }

// slidePosition();

// arrow.forEach(function (a) {
//   a.addEventListener('click', function () {
//     const leftArrow = document.querySelector('.left-arrow');
//     const rightArrow = document.querySelector('.right-arrow');

//     if (a == leftArrow) {
//       leftSide();
//     }
//     else if (a == rightArrow) {
//       rightSide();
//     }
//   })
// })

// function leftSide() {

//   let active = document.querySelector('.active');
//   let prevNext = previousNext();
//   let next = prevNext[0];

//   active.classList.add('top');
//   next.classList.add('top');
//   active.classList.remove('active');
//   active.style.transition = '1s'
//   active.style.transform = 'translateX(-150%)';
//   next.style.transform = 'translateX(0)';
//   next.classList.add('active')
//   next.style.transition = '1s'
//   slidePosition();
// }

// function rightSide() {
//   let active = document.querySelector('.active');
//   let prevNext = previousNext();
//   let previous = prevNext[1];

//   active.classList.add('top');
//   previous.classList.add('top');
//   active.classList.remove('active');
//   active.style.transition = '1s'
//   active.style.transform = 'translateX(150%)';
//   previous.style.transform = 'translateX(0)';
//   previous.classList.add('active')
//   previous.style.transition = '1s'
//   slidePosition();
// }

const slide = [];
slides.forEach(function (s) {
  slide.push(s);
})

slide.forEach(function(s){
  s.style.display = 'flex';
})

let bannerSlide= $('.banner-item')

bannerSlide.slick({
  prevArrow: '.left-arrow',
  nextArrow: '.right-arrow'
});