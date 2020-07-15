AOS.init();

let lastScrollTop = 0;
window.addEventListener("scroll", function(){
   let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      // downscroll code
      document.querySelector(".btn1-style").style.top = "2%";
      document.querySelector(".btn1-style").style.left = "17%";

      document.querySelector(".btn2-style").style.top = "75%";
      document.querySelector(".btn2-style").style.left = "-14%";

      document.querySelector(".btn3-style").style.top = "15%";
      document.querySelector(".btn3-style").style.left = "27.5%";

      document.querySelector(".btn4-style").style.top = "90%";
      document.querySelector(".btn4-style").style.left = "-2%";
   } else {
      // upscroll code
      document.querySelector(".btn1-style").style.top = "17%";
      document.querySelector(".btn1-style").style.left = "7%";

      document.querySelector(".btn2-style").style.top = "40%";
      document.querySelector(".btn2-style").style.left = "3%";

      document.querySelector(".btn3-style").style.top = "30%";
      document.querySelector(".btn3-style").style.left = "17.5%";

      document.querySelector(".btn4-style").style.top = "60%";
      document.querySelector(".btn4-style").style.left = "13%";
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide div');

let counter = 1;
const size = document.body.clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

const autoSlide = () => {
  setInterval(nextSlide, 3000);
}

const nextSlide = () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

const prevSlide = () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

};

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].classList[1] === 'last-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].classList[1] === 'first-clone') {
    console.log(1);
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

// autoSlide();