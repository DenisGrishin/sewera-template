import '../scss/style.scss';

// Основные модули ========================================================================================================================================================================================================================================================
import * as flsFunctions from './files/functions.js';

// flsFunctions.isWebp();

// flsFunctions.spollers();

// import './files/sliders.js';

import './files/script.js';
//============================================================================================================================================================================================================================================
/*
Ленивая (отложенная) загрузка картинок
Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем data-src
Документация плагина: https://github.com/verlok/vanilla-lazyload
Сниппет(HTML):
*/

import LazyLoad from 'vanilla-lazyload';

// Работает с объектами с класом ._lazy
const lazyMedia = new LazyLoad({
  elements_selector: '[data-src]',
  class_loaded: '_lazy-loaded',
  use_native: true,
});

// Обновить модуль
//lazyMedia.update();
