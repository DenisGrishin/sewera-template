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

  document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width < 768) {
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
  });
  if (document.querySelector('.so-discount__slider')) {
    new Swiper('.so-discount__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
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
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
initSliders();
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();
}
