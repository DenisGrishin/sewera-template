// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

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
    if (document.querySelector('#we-doing')) {
      new Swiper('#we-doing', {
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
          nextEl: '.we-doing__nav .we-doing__next',
          prevEl: '.we-doing__nav .we-doing__prev',
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
    if (document.querySelector('#work-examples')) {
      new Swiper('#work-examples', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 25,
        autoHeight: false,
        speed: 800,
        loop: true,
        autoplay: {
          delay: 4000,
        },
        // Arrows
        navigation: {
          nextEl: '.work-examples__nav .work-examples__next',
          prevEl: '.work-examples__nav .work-examples__prev',
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
          429.98: { slidesPerView: 1.2 },
          529.98: { slidesPerView: 1.8 },

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

  initSliders();

  /* инициализация карты */
  function initMap() {
    var myMap = new ymaps.Map(
      'map',
      {
        center: [55.73, 37.6],
        zoom: 8,
      },
      {
        searchControlProvider: 'yandex#search',
      }
    );
    if (width < 767.98) {
      myMap.behaviors.disable('drag');
      myMap.behaviors.disable('multiTouch');
      myMap.controls.add('zoomControl'); // добавялем контрол зуммирования
    } else {
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    }
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(new ymaps.Placemark([55.73, 37.6], {}));
    let myPolygon = new ymaps.Polygon(
      [
        [
          [54.80831947994278, 38.18433433925412],
          [54.87945876925923, 38.52995859405644],
          [55.122011885673516, 38.67767483903884],
          [55.37773639221365, 38.95005546337981],
          [55.69101620830514, 39.06854923170738],
          [55.962220037403114, 39.09331426601756],
          [56.118493229997256, 38.83962697728742],
          [56.38328535103986, 38.538312268742686],
          [56.72694946754399, 38.84094055277811],
          [56.54218234666476, 37.45911829335503],
          [56.484269925944716, 36.55340126947627],
          [56.082994973012944, 35.26044765213379],
          [55.528582146509564, 35.79574540554199],
          [54.886906159423376, 36.2751232506904],
          [54.80831947994278, 38.18433433925412],
        ],
      ],
      {
        hintContent: 'Многоугольник',
      },
      {
        fillColor: '#009CD9',
        strokeWidth: 1,
        strokeColor: '#0067A0',
        strokeOpacity: 1,
        fillOpacity: 0.2,
      }
    );

    myMap.geoObjects.add(myPolygon);
  }
  ymaps.ready(initMap);
});
