const bootstrap = window.bootstrap = require('bootstrap');

// slider move carousel time control
const carouselWrapp = document.querySelector('#main-carousel')
let carousel = new bootstrap.Carousel(carouselWrapp, {
    interval: 2000,
    wrap: true,
    touch: true
})
const playBtn = document.querySelector('#playBtn');
let isPlaying = true;
carousel.cycle();


// slider button control

// pause 
function sliderPause() {
    if (isPlaying == false) {
        isPlaying = true;
        playBtn.classList.toggle("active");
        carousel.next();
        carousel.cycle();
    } else {
        isPlaying = false;
        playBtn.classList.toggle("active");
        carousel.pause();
    }
}
