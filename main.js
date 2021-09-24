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

function previousNext() {
  let active = document.querySelector('.active');
  let activeSlide = slide.indexOf(active);
  let nextSlide;
  let previousSlide;

  //next slide
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

  return [nextSlide, previousSlide]

}

function slidePosition() {
  let active = document.querySelector('.active');
  let activeSlide = slide.indexOf(active);
  let prevNext = previousNext();
  let next = prevNext[0];
  let previous = prevNext[1]

  slide.forEach(function (s, i) {
    if (i == activeSlide) {
      s.style.transform = 'translateX(0)';
    } else if (s == previous) {
      s.style.transform = 'translateX(-150%)';
    } else if (s == next) {
      s.style.transform = 'translateX(150%)';
    } else {
      s.style.transform = 'translateX(150%)';
    }
  })
}

slidePosition();

arrow.forEach(function (a) {
  a.addEventListener('click', function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (a == leftArrow) {
      leftSide();
    }
    else if (a == rightArrow) {
      rightSide();
    }
  })
})

function leftSide() {

  let active = document.querySelector('.active');
  let prevNext = previousNext();
  let next = prevNext[0];

  next.style.zIndex= '3';
  active.classList.remove('active');
  active.style.transition = '1s'
  active.style.transform = 'translateX(-150%)';
  next.style.transform = 'translateX(0)';
  next.classList.add('active')
  next.style.transition = '1s'
  slidePosition();
}

function rightSide() {
  let active = document.querySelector('.active');
  let prevNext = previousNext();
  let previous = prevNext[1];

  active.classList.remove('active');
  active.style.transition = '1s'
  active.style.transform = 'translateX(150%)';
  previous.style.transform = 'translateX(0)';
  previous.classList.add('active')
  previous.style.transition = '1s'
  slidePosition();
}

// arrow.forEach(function (a) {
//   a.addEventListener('click', function () {
//     let active = document.querySelector('.active');
//     let activeSlide = slide.indexOf(active);
//     let nextSlide;
//     let previousSlide;
//     // next slide
//     if (activeSlide == slide.length - 1) {
//       nextSlide = slide[0]

//     } else {
//       nextSlide = slide[activeSlide + 1]
//     }

//     // previous slide
//     if (activeSlide == 0) {
//       previousSlide = slide[slide.length - 1];

//     } else {
//       previousSlide = slide[activeSlide - 1];
//     }
    


//     const leftArrow = document.querySelector('.left-arrow');
//     const rightArrow = document.querySelector('.right-arrow');

//     // slider.style.overflowX = 'hidden';

//     let oppositeSilde = Math.abs(activeSlide - 2);
//     slide[oppositeSilde].classList.add('hide')

//     let hide = document.querySelector('.hide');
//     hide.style.visibility = 'hidden';

//     let lastSlide = slide[slide.length - 1]

   

//     if (a == leftArrow) {
//       lastSlide.style.visibility = 'hidden';
//       leftSide();
//       hide.classList.remove('hide');
//     }
//     else if (a == rightArrow) {
//       lastSlide.style.visibility = 'hidden';
//       rightSide();
//       hide.classList.remove('hide');
//     }

//     function leftSide() {

//       nextSlide.classList.add('active');
//       active.style.transform = 'translateX(0)';
//       previousSlide.style.transform = 'translateX(-150%)';
//       nextSlide.style.transform = 'translateX(150%)';
//       active.style.transition = '1s';
//       active.style.visibility = 'visible';
//       active.classList.remove('active');

//     }

//     function rightSide() {
//       active.style.transform = 'translateX(150%)';
//       active.style.transition = '1s';
//       previousSlide.classList.add('active');
//       active.classList.remove('active');
//       active.style.transform = 'translateX(0)';
//       active.style.visibility = 'visible';
//       nextSlide.style.transform = 'translateX(150%)';
//       previousSlide.style.transform = 'translateX(-150%)';
//     }

//   })
// })

