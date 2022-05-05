// webp
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
// burger
function burgerMenu() {
   const burger = document.querySelector('.navbar-toggler')
   const menu = document.querySelector('.nav')
   const body = document.querySelector('body')
   burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
         menu.classList.add('active')
         burger.classList.add('active')
         body.classList.add('locked')
      } else {
         menu.classList.remove('active')
         burger.classList.remove('active')
         body.classList.remove('locked')
      }
   })
   window.addEventListener('resize', () => {
      if (window.innerWidth > 767.98) {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
      }
   })
}
burgerMenu();
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
  pause: true,
  touch: true,
})