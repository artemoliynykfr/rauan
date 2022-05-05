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
  interval: 5000,
  wrap: true,
  pause: true,
  touch: true,
})
new Swiper('.swiper-container', {
   direction: 'horizontal',
   loop: !0,
   speed: 1500,
   slidesPerView: 2,
   spaceBetween: 30,
   cssMode: true,
   breakpoints: {
      992:{
         slidesPerView: 2,
         cssMode: true,
      },
      0:{
         slidesPerView: 1,
         cssMode: false,
      },
   },
   navigation: {
		nextEl: '.carousel-control-next',
		prevEl: '.carousel-control-prev',
	},
   keyboard: {
      enabled: !0,
      onlyInViewport: !1
   },
});