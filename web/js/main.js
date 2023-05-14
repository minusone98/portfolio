const slider = document.querySelector('.slider');
let scrollAmount = 0;
const scrollStep = 1;

function slideRight() {
  scrollAmount += slider.offsetWidth;
  slider.scroll({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

function slideLeft() {
  scrollAmount -= slider.offsetWidth / 2;
  slider.scroll({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

document.querySelector('.prev-button').addEventListener('click', slideLeft);
document.querySelector('.next-button').addEventListener('click', slideRight);

setInterval(slideRight, 5000);
