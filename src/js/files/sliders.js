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
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  // Перечень слайдеров
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
          loop: true,
          autoplay: {
            delay: 3000,
          },
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
  if (document.querySelector('.so-discount__slider')) {
    new Swiper('.so-discount__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.so-discount__pagging',
        clickable: true,
      },

      breakpoints: {
        319.98: {
          slidesPerView: 1.1,
          spaceBetween: 30,
        },
        429.98: { slidesPerView: 1.28 },

        767.98: {
          slidesPerView: 2.25,
          spaceBetween: 30,
        },
        1023.98: { slidesPerView: 3 },
      },

      on: {},
    });
  }
  if (document.querySelector('.banner-gallery__slider')) {
    new Swiper('.banner-gallery__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      pagination: {
        el: '.banner-gallery__pagination',
        clickable: true,
      },

      breakpoints: {},

      on: {},
    });
  }
  if (document.querySelector('.banner-gallery__slider')) {
    new Swiper('.banner-gallery__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,
      pagination: {
        el: '.banner-gallery__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.banner-gallery__navigation .banner-gallery__btn_prev',
        prevEl: '.banner-gallery__navigation .banner-gallery__btn_next',
      },
      breakpoints: {},
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

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
});
