// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

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

  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
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
function initQwiz() {
  const checkBlock = document.querySelector('.form-qwiz');
  const inputChecks = document.querySelectorAll('.form-qwiz__input');
  const steps = document.querySelectorAll('.form-qwiz__step');
  const prevBtn = document.querySelector('.qwiz-section__prev-btn');
  const nextBtn = document.querySelector('.qwiz-section__next-btn');
  const panelNavigate = document.querySelector('.qwiz-section__bottom');
  const stepCurrentNumber = document.querySelector(
    '.qwiz-section__current-step'
  );
  const restartBtn = document.querySelector('.form-qwiz__restart-btn');
  let currentStep = 0;
  let isCheck = false;

  nextBtn.addEventListener('click', nextStep);
  prevBtn.addEventListener('click', prevStep);
  checkBlock.addEventListener('click', isClickCheck);

  // кнопка заказать занова
  restartBtn.addEventListener('click', function (e) {
    currentStep = 0;
    isCheck = false;
    stepCurrentNumber.innerHTML = 1;
    prevBtn.classList.add('_disabled');
    prevBtn.disabled = true;
    steps[0].classList.add('_current');
    steps[steps.length - 1].classList.remove('_current');
    panelNavigate.style.display = 'flex';
    stepCurrentNumber.parentNode.style.display = 'flex';
    stepCurrentNumber.parentNode.classList.remove('_ready');
    inputChecks.forEach((inpt) => (inpt.checked = false));
  });

  function isClickCheck(e) {
    let target = e.target;
    if (target.classList.contains('form-qwiz__input')) {
      isValidateFormService();

      if (!isCheck && currentStep === steps.length - 3) {
        nextBtn.classList.add('_disabled');
        nextBtn.disabled = true;
      }
      if (isCheck) {
        nextBtn.classList.remove('_disabled');
        nextBtn.disabled = false;
      }
    }
  }
  // ==============================================================================

  // шаг вперед
  function nextStep(e) {
    ++currentStep;

    if (isCheck && currentStep === steps.length - 2) {
      stepCurrentNumber.parentNode.classList.add('_ready');
    }

    if (!isCheck && currentStep === steps.length - 3) {
      nextBtn.classList.add('_disabled');
      nextBtn.disabled = true;
    }
    if (steps.length - 1 === currentStep) {
      stepCurrentNumber.parentNode.style.display = 'none';
    }

    if (steps.length - 2 === currentStep) {
      panelNavigate.style.display = 'none';
    }

    if (steps.length === currentStep) {
      steps[currentStep - 1].style.display = 'none';
      return;
    }

    stepCurrentNumber.innerHTML = currentStep + 1;

    prevBtn.classList.remove('_disabled');
    prevBtn.disabled = false;
    steps[currentStep - 1].classList.remove('_current');
    steps[currentStep].classList.add('_current');
  }
  // шаг назад
  function prevStep(e) {
    if (currentStep === steps.length - 2) {
      stepCurrentNumber.parentNode.classList.remove('_ready');
    }

    if (currentStep === steps.length - 3) {
      nextBtn.classList.remove('_disabled');
      prevBtn.disabled = true;
    }

    if (prevBtn.classList.contains('_disabled')) {
      return;
    }
    currentStep--;
    stepCurrentNumber.innerHTML = currentStep + 1;

    if (currentStep === 0) {
      prevBtn.classList.add('_disabled');
    }
    nextBtn.disabled = false;
    steps[currentStep + 1].classList.remove('_current');
    steps[currentStep].classList.add('_current');
  }

  // валидация чекбокса
  function isValidateFormService() {
    for (let i = 0; i < inputChecks.length; i++) {
      const element = inputChecks[i];
      if (element.checked) {
        isCheck = true;
        return;
      }
    }
    isCheck = false;
    return;
  }
  document
    .querySelector('#services_quiz_form')
    .addEventListener('submit', function (e) {
      e.preventDefault();
      var th = $('#services_quiz_form');
      $('.load__preloader').fadeIn('', function () {
        $.ajax({
          type: 'POST',
          url: '/index.php?route=common/footer/quiz_submit',
          data: th.serialize(),
          dataType: 'json',
        }).done(function (json) {
          if (json['success']) {
            $('.load__preloader').fadeOut('slow');
            nextStep();
          }
        });
      });
      return false;
    });
}
initQwiz();
