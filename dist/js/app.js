/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  var __webpack_exports__ = {}; // CONCATENATED MODULE: ./src/js/files/functions.js

  // Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
  let _slideUp = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains("_slide")) {
      target.classList.add("_slide");
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.hidden = !showmore ? true : false;
        !showmore ? target.style.removeProperty("height") : null;
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        !showmore ? target.style.removeProperty("overflow") : null;
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
      }, duration);
    }
  };
  let _slideDown = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains("_slide")) {
      target.classList.add("_slide");
      target.hidden = target.hidden ? false : null;
      showmore ? target.style.removeProperty("height") : null;
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
      }, duration);
    }
  };
  let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  };

  // Модуль работы со спойлерами =======================================================================================================================================================================================================================
  /*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
  function spollers() {
    const spollersArray = document.querySelectorAll("[data-spollers]");
    if (spollersArray.length > 0) {
      // Получение обычных слойлеров
      const spollersRegular = Array.from(spollersArray).filter(
        function (item, index, self) {
          return !item.dataset.spollers.split(",")[0];
        },
      );
      // Инициализация обычных слойлеров
      if (spollersRegular.length) {
        initSpollers(spollersRegular);
      }
      // Получение слойлеров с медиа запросами
      let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
      if (mdQueriesArray && mdQueriesArray.length) {
        mdQueriesArray.forEach((mdQueriesItem) => {
          // Событие
          mdQueriesItem.matchMedia.addEventListener("change", function () {
            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
          });
          initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
      }

      // Инициализация
      function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach((spollersBlock) => {
          spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
          if (matchMedia.matches || !matchMedia) {
            spollersBlock.classList.add("_spoller-init");
            initSpollerBody(spollersBlock);
            spollersBlock.addEventListener("click", setSpollerAction);
          } else {
            spollersBlock.classList.remove("_spoller-init");
            initSpollerBody(spollersBlock, false);
            spollersBlock.removeEventListener("click", setSpollerAction);
          }
        });
      }
      // Работа с контентом
      function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
        if (spollerTitles.length > 0) {
          spollerTitles.forEach((spollerTitle) => {
            if (hideSpollerBody) {
              spollerTitle.removeAttribute("tabindex");
              if (!spollerTitle.classList.contains("_spoller-active")) {
                spollerTitle.nextElementSibling.hidden = true;
              }
            } else {
              spollerTitle.setAttribute("tabindex", "-1");
              spollerTitle.nextElementSibling.hidden = false;
            }
          });
        }
      }
      function setSpollerAction(e) {
        const el = e.target;
        if (el.closest("[data-spoller]")) {
          const spollerTitle = el.closest("[data-spoller]");
          const spollersBlock = spollerTitle.closest("[data-spollers]");
          const oneSpoller = spollersBlock.hasAttribute("data-one-spoller")
            ? true
            : false;
          if (!spollersBlock.querySelectorAll("._slide").length) {
            if (
              oneSpoller &&
              !spollerTitle.classList.contains("_spoller-active")
            ) {
              hideSpollersBody(spollersBlock);
            }
            spollerTitle.classList.toggle("_spoller-active");
            _slideToggle(spollerTitle.nextElementSibling, 500);
          }
          e.preventDefault();
        }
      }
      function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector(
          "[data-spoller]._spoller-active",
        );
        if (spollerActiveTitle) {
          spollerActiveTitle.classList.remove("_spoller-active");
          _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
      }
    }
  } // CONCATENATED MODULE: ./src/js/files/sliders.js

  //================================================================================================================================================================================================================================================================================================================

  function bildSliders() {
    //BildSlider
    let sliders = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)',
    );
    if (sliders) {
      sliders.forEach((slider) => {
        slider.parentElement.classList.add("swiper");
        slider.classList.add("swiper-wrapper");
        for (const slide of slider.children) {
          slide.classList.add("swiper-slide");
        }
      });
    }
  }

  function initSliders() {
    bildSliders();
    if (document.querySelector(".we-doing__slider")) {
      new Swiper(".we-doing__slider", {
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
          nextEl: ".slider-navigation .slider-navigation-next",
          prevEl: ".slider-navigation .slider-navigation-prev",
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
    if (document.querySelector(".slider-septic__slider")) {
      new Swiper(".slider-septic__slider", {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
          nextEl: ".about__more .more__item_next",
          prevEl: ".about__more .more__item_prev",
        },
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

    let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
    if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar =
          sliderScrollItem.querySelector(".swiper-scrollbar");
        const sliderScroll = new Swiper(sliderScrollItem, {
          observer: true,
          observeParents: true,
          direction: "vertical",
          slidesPerView: "auto",
          freeMode: {
            enabled: true,
          },
          scrollbar: {
            el: sliderScrollBar,
            draggable: true,
            snapOnRelease: false,
          },
          mousewheel: {
            releaseOnEdges: true,
          },
        });
        sliderScroll.scrollbar.updateSize();
      }
    }
  }

  window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
  }); // CONCATENATED MODULE: ./src/js/files/script.js

  // Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
  // import { isMobile } from "./functions.js";
  // import { formsModules } from "./forms/forms.js";

  /* инициализация карты */
  function initMap() {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [55.73, 37.6],
        zoom: 8,
      },
      {
        searchControlProvider: "yandex#search",
      },
    );
    myMap.controls.remove("geolocationControl"); // удаляем геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
    myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

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
        hintContent: "Многоугольник",
      },
      {
        fillColor: "#009CD9",
        strokeWidth: 1,
        strokeColor: "#0067A0",
        strokeOpacity: 1,
        fillOpacity: 0.2,
      },
    );

    myMap.geoObjects.add(myPolygon);
  }
  ymaps.ready(initMap); // CONCATENATED MODULE: ./src/js/app.js

  // Подключение основного файла стилей

  // Основные модули ========================================================================================================================================================================================================================================================

  spollers();

  // Прочее ========================================================================================================================================================================================================================================================
  /* Подключаем файлы со своим кодом */

  //============================================================================================================================================================================================================================================

  /******/
})();
