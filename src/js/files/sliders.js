function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}

function initSliders() {
  bildSliders();
  if (document.querySelector('.we-doing__slider')) {
    new Swiper('.we-doing__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 25,
      autoHeight: false,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      // Arrows
      navigation: {
        nextEl: '.slider-navigation .slider-navigation-next',
        prevEl: '.slider-navigation .slider-navigation-prev',
      },

      breakpoints: {
        319.98: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          centeredSlides: true,
        },
        429.98: { slidesPerView: 1.1 },

        767.98: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        1023.98: { slidesPerView: 3, spaceBetween: 20 },
        1439.98: {
          spaceBetween: 24,
        },
      },

      on: {},
    });
  }
  if (document.querySelector('.slider-septic__slider')) {
    new Swiper('.slider-septic__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,

      autoplay: true,

      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        430: {
          slidesPerView: 1.4,
          autoplay: {
            delay: 3000,
          },
        },
        768: {
          autoplay: false,
        },
        992: {
          slidesPerView: 1,

          autoplay: false,
        },
      },
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();
}

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 768) {
    initSliders();
  }
});
