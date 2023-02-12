/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/sort */ "./src/js/module/sort.js");
/* harmony import */ var _module_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/modal */ "./src/js/module/modal.js");
/* harmony import */ var _module_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/scroll */ "./src/js/module/scroll.js");
/* harmony import */ var _module_selected_fests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/selected-fests */ "./src/js/module/selected-fests.js");
/* harmony import */ var _module_modal_via_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modal-via-url */ "./src/js/module/modal-via-url.js");
/* harmony import */ var _module_form_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/form-modal */ "./src/js/module/form-modal.js");






var url = window.location.href;
function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  if (http.status != 404) return true;else return false;
}
UrlExists(url);
Object(_module_modal__WEBPACK_IMPORTED_MODULE_1__["modal"])();
Object(_module_sort__WEBPACK_IMPORTED_MODULE_0__["sort"])();
Object(_module_selected_fests__WEBPACK_IMPORTED_MODULE_3__["selectedFests"])();
Object(_module_scroll__WEBPACK_IMPORTED_MODULE_2__["scroll"])();
Object(_module_modal_via_url__WEBPACK_IMPORTED_MODULE_4__["openModalViaURL"])();
Object(_module_form_modal__WEBPACK_IMPORTED_MODULE_5__["formModal"])();

/***/ }),

/***/ "./src/js/module/events-database.js":
/*!******************************************!*\
  !*** ./src/js/module/events-database.js ***!
  \******************************************/
/*! exports provided: eventsDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsDatabase", function() { return eventsDatabase; });
const eventsDatabase = () => {
  const eventsStorage = {
    '#atlas': {
      name: 'Atlas Weekend',
      date: '17-06-2023',
      place: 'Київ',
      text: `Atlas (до 2022 року – Atlas Weekend) — один з
            найбільших музичних фестивалів України. Проходить щорічно у Києві в першій половині
            липня в Національному експоцентрі України (ВДНГ). Заснований у 2015 році концертною
            агенцією PMK Event Agency, яка є власником київського нічного клубу Atlas, від якого
            фестиваль і отримав назву. Раніше називався Atlas Weekend, 1 лютого 2022 року
            організатори повідомили про зміну назви на фестиваль Atlas.`,
      img: 'assets/img/modal/atlas.png',
      link: 'https://atlasfestival.com/',
      url: '#atlas'
    },
    '#bandershtat': {
      name: 'Bandershtat',
      date: '26-02-2023',
      place: 'Тернопіль',
      text: `«Бандерштат» — всеукраїнський «фестиваль українського духу»,
            що проводиться щоліта на Волині, у місті Луцьку та околицях. Він є артвізитівкою цього краю.
            Вперше проведений 2007 року й відтоді став щорічним.`,
      img: 'assets/img/modal/bandershtat.png',
      link: 'http://bandershtat.org.ua/',
      url: '#bandershtat'
    },
    '#woodstock': {
      name: 'Woodstock',
      date: '12-09-2023',
      place: 'Рівне',
      text: `«Вудсток» — один із наймасштабніших і найвизначніших
            в історії рок-фестивалів, символ вільного і мирного співжиття, а також взаємної допомоги 
            величезної кількості споріднених ідеєю людей. У 1995 році для волонтерів польської акції
            «Великий Оркестр Святкової Допомоги» (фундація «WOŚP») було організовано перший польський
            фестиваль під назвою «Зупинка Woodstock» («Przystanek Woodstock»).`,
      img: 'assets/img/modal/woodstock.jpg',
      link: 'https://www.facebook.com/woodstock.in.ua/',
      url: '#woodstock'
    },
    '#bulhakovfest': {
      name: 'BulhakovFest',
      date: '12-09-2023',
      place: 'Київ',
      text: `«БулгаковFest» — щорічний фестиваль київської міської культури,
            ініціатором та спонсором якого є Фонд «Культурні Новації» відомого мецената та букініста Влада Трубіцина.
            Метою заходу є збереження та популяризація історичних місць та славетних київських імен, підтримка міської
            культури, запровадження живих та інтерактивних форм вшанування відомих історичних особистостей міста Києва.`,
      img: 'assets/img/modal/bulgakovfest.jpg',
      link: 'https://www.facebook.com/Bulgakovfestkyiv/',
      url: '#bulhakovfest'
    },
    '#artjazz': {
      name: 'Art Jazz',
      date: '24-06-2023',
      place: 'Тернопіль',
      text: `Міжнародний джазовий фестиваль «ART JAZZ» по праву вважається одним з наймасштабніших культурних заходів Волині.
            Почавши свою історію у 2007 році, цей мистецький захід став її своєрідною візитною карткою. Фестиваль об’єднує не лише
            різні жанри мистецтва в темі джазової музики, але й міста. Луцьк і Рівне на деякий час стають центром культурного життя
            та після літа починають фестивальний рух в України.`,
      img: 'assets/img/modal/art-jazz.jpg',
      link: 'http://artjazz.info/',
      url: '#artjazz'
    },
    '#docudays': {
      name: 'Docudays UA',
      date: '01-07-02-2023',
      place: 'Київ',
      text: `Найбільший в Україні Міжнародний фестиваль документального кіно про права людини, який відбувається щороку впродовж
            останнього тижня березня у Києві. Після завершення фестивальної програми з жовтня місяця і до кінця року в регіонах
            України традиційно відбуваються покази найкращих фільмів у рамках Мандрівного фестивалю.`,
      img: 'assets/img/modal/docudays.jpg',
      link: 'https://docudays.ua/',
      url: '#docudays'
    },
    '#serednyovichnyiHotyn': {
      name: 'Середньовічний Хотин',
      date: '10-14-05-2023',
      place: 'Хотин',
      text: `Протягом чотирьох днів Хотинська фортеця перевтілюється в середньовічне місто. В основному на спеціально
            підготовленій території просто неба проходять лицарські поєдинки. Тут дійсно є безліч речей, на які хочеться дивитися
            постійно. Найбільше гостей вражає джостінг. Він являє собою прийом під час поєдинку, при якому два вершники наносять
            по щитах один одного удари списами, зближуючись при цьому в галопі.`,
      img: 'assets/img/modal/serednyovichnyi_hotyn.jpg',
      link: 'https://www.facebook.com/hotinfest/',
      url: '#serednyovichnyiHotyn'
    },
    '#kyivArtWeek': {
      name: 'Kyiv Art Week',
      date: '20-26-05-2023',
      place: 'Київ',
      text: `Головна мета події – розвиток художньої інфраструктури у Східній Європі. Презентації різних галерей,
            що представляють митців на фестивалі, дуже цікаві та інтерактивні. У фестивалі беруть участь відомі київські галереї,
            такі як: Voloshyn Gallery, The Naked Room, Nebo Art Gallery, M17, Abramovich Art, Karas Gallery та багато інших.`,
      img: 'assets/img/modal/kyivArtWeek.jpg',
      link: 'https://kyivartweek.com/',
      url: '#kyivArtWeek'
    },
    '#cheeseAndWine': {
      name: 'Cheese & Wine',
      date: '21-23-10-2023',
      place: 'Львів',
      text: `Здавалося б, що поєднує львів’ян із сиром та вином? Однак сьогодні мало хто знає, що чотири століття тому
            клімат у Львові був настільки теплим, що виноградники на південних схилах Високого Замку, Личакова, а потім — на
            пагорбах Кайзервальду, аж до Винників, давали львів'янам щорічно більше сотні бочок вина. Крім цього, львів'яни
            насолоджувалися вишуканим італійським, критським, іспанським та угорським вином, так як Львів був великим торговим центром.`,
      img: 'assets/img/modal/cheese_and_wine.jpg',
      link: 'https://www.facebook.com/CheeseWineFestLviv/',
      url: '#cheeseAndWine'
    }
  };
  return eventsStorage;
};

/***/ }),

/***/ "./src/js/module/form-modal.js":
/*!*************************************!*\
  !*** ./src/js/module/form-modal.js ***!
  \*************************************/
/*! exports provided: formModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formModal", function() { return formModal; });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/module/function.js");

const formModal = () => {
  const modal = document.querySelector('.form-modal');
  const background = document.querySelector('.dark-bg');
  const trigger = document.querySelector('.proposition-link');
  const closeButton = document.querySelector('.form-close');
  const form = document.querySelector('.form');
  const formButtons = document.querySelector('.form-buttons');
  const inputs = document.querySelectorAll('.form-input');
  let link = 'https://jsonplaceholder.typicode.com/posts';
  formOpener(trigger, modal, background);
  formCloser(background, closeButton, modal, inputs);
  formLetterLimiter();
  checkNumKey();
  for (let input of inputs) {
    inputsFocusing(input);
    inputsBlur(input);
  }
  onSubmit(inputs, form, formButtons, link);
};
function formOpener(trigger, modal, background) {
  trigger.addEventListener('click', e => {
    const beforeWidth = document.documentElement.clientWidth;
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["opener"])(modal, background);
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["withoutScrollbar"])(beforeWidth);
  });
}
function formCloser(background, closeButton, modal, inputs) {
  background.addEventListener('click', e => {
    if (e.target.classList.contains('dark-bg')) {
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["shutter"])(modal, background);
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["withScrollbar"])();
      for (let input of inputs) {
        removeInputsClass(input);
      }
    }
  });
  closeButton.addEventListener('click', e => {
    e.preventDefault();
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["shutter"])(modal, background);
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["withScrollbar"])();
    for (let input of inputs) {
      removeInputsClass(input);
    }
  });
}
function formLetterLimiter() {
  const letterForms = document.querySelectorAll('.form-text');
  for (let form of letterForms) {
    form.addEventListener('input', e => {
      if (form.value.length >= 30) {
        return false;
      }
    });
  }
}
function checkNumKey() {
  const numForm = document.querySelector('.form-date');
  numForm.addEventListener('keydown', e => {
    if (e.keyCode == '8' || e.key == '-' || e.key == '.' || e.key == ',' || e.key == '/' || e.key == ' ' || e.key >= '0' && e.key <= '9') {
      return;
    }
    ;
    e.preventDefault();
  });
}
function inputsFocusing(input) {
  input.addEventListener('focus', e => {
    if (input.classList.contains('success')) {
      input.classList.remove('success');
    } else if (input.classList.contains('error')) {
      input.classList.remove('error');
    }
  });
}
function removeInputsClass(input) {
  if (input.classList.contains('error')) {
    input.classList.remove('error');
  }
}
function inputsBlur(input) {
  input.addEventListener('blur', e => {
    input.classList.remove('active');
    if (input.value == false) {
      return;
    } else {
      input.classList.add('success');
    }
  });
}
function onSubmit(inputs, form, formButtons, link) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let emptyNum = 0;
    for (let input of inputs) {
      if (input.value == false) {
        input.classList.add('error');
        emptyNum++;
      }
    }
    if (emptyNum !== 0) {
      formButtons.insertAdjacentHTML('beforeend', '<p class="sending-info" style="color:#b50404">Заповніть всі поля, будь ласка</p>');
      setTimeout(() => {
        document.querySelector('.sending-info').remove();
      }, 5000);
      return;
    }
    const {
      currentTarget
    } = e;
    let action = link;
    sendForm(currentTarget, action, form).then(response => onSucces(response, currentTarget, form)).catch(reject => onError(reject, form));
  });
}
function sendForm(currentForm, action, form) {
  if (document.querySelector('.sending-info')) {
    document.querySelector('.sending-info').remove();
  }
  document.querySelector('.sending-loader').style.display = 'block';
  return fetch(action, setOptions(currentForm, form));
}
;
function setOptions(currentForm) {
  return {
    method: 'post',
    body: collectData(currentForm)
  };
}
;
function collectData(currentForm) {
  const data = new FormData(currentForm);
  return data;
}
;
function onSucces(response, form) {
  if (response.ok == false) {
    throw 'Error';
  } else {
    console.log(response.json());
    showMassage(form);
  }
}
function showMassage(form) {
  setTimeout(() => {
    document.querySelector('.sending-loader').style.display = 'none';
    document.querySelector('.form-buttons').insertAdjacentHTML('beforeend', '<p class="sending-info" style="color:#008037">Дякуємо за вашу пропозицію :)</p>');
  }, 1000);
  setTimeout(() => {
    if (document.querySelector('.sending-info')) {
      document.querySelector('.sending-info').remove();
    }
  }, 10000);
}
function onError(reject, form) {
  console.log(reject.json());
  setTimeout(() => {
    document.querySelector('.sending-loader').style.display = 'none';
    document.querySelector('.form-buttons').insertAdjacentHTML('beforeend', '<p class="sending-info" style="color:#b50404">Не вдалося відправити, спробуйте ще раз</p>');
  }, 1000);
  setTimeout(() => {
    if (document.querySelector('.sending-info')) {
      document.querySelector('.sending-info').remove();
    }
  }, 10000);
}

/***/ }),

/***/ "./src/js/module/function.js":
/*!***********************************!*\
  !*** ./src/js/module/function.js ***!
  \***********************************/
/*! exports provided: openModal, closeModal, shutter, opener, imgLoader, modalInfo, withoutScrollbar, withScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shutter", function() { return shutter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opener", function() { return opener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgLoader", function() { return imgLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalInfo", function() { return modalInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutScrollbar", function() { return withoutScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScrollbar", function() { return withScrollbar; });
/* harmony import */ var _events_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-database */ "./src/js/module/events-database.js");


function openModal(modal, background) {
  const image = document.querySelector('.underpage-img');
  opener(modal, background);
  image.addEventListener('load', e => {
    imgLoader();
  });
}
function imgLoader() {
  const loader = document.querySelector('.img-loader');
  loader.style.display = 'none';
}
function closeModal(modal, closeTrigger, background) {
  const loader = document.querySelector('.img-loader');
  background.addEventListener('click', e => {
    if (e.target.classList.contains('dark-bg')) {
      shutter(modal, background);
    }
    history.pushState('', '', '/FUA/');
    withScrollbar();
    loader.style.display = 'block';
  });
  closeTrigger.addEventListener('click', e => {
    e.preventDefault();
    shutter(modal, background);
    history.pushState('', '', '/FUA/');
    withScrollbar();
    loader.style.display = 'block';
  });
}
;
function opener(modal, background) {
  modal.classList.add('active');
  background.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function shutter(modal, background) {
  modal.classList.remove('active');
  background.classList.remove('active');
  document.body.style.overflow = '';
}
function modalInfo(modalInfoNum) {
  const modalText = document.querySelector('.underpage-text');
  const modalImg = document.querySelector('.underpage-img');
  const modalLink = document.querySelector('.underpage-link');
  modalText.innerHTML = Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].text;
  modalImg.src = Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].img;
  modalLink.href = Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].link;
  const url = new URL(location.href);
  url.searchParams.set('n', Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].url);
  url.searchParams.set('d', Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].date);
  history.pushState('', '', Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].url + '-' + Object(_events_database__WEBPACK_IMPORTED_MODULE_0__["eventsDatabase"])()[modalInfoNum].date);
}
function withoutScrollbar(beforeWidth) {
  const page = document.querySelector('.page');
  const afterWidth = document.documentElement.clientWidth;
  let widthDifference = afterWidth - beforeWidth;
  page.style.paddingRight = widthDifference + 'px';
}
function withScrollbar() {
  const page = document.querySelector('.page');
  page.style.paddingRight = '';
}
;

/***/ }),

/***/ "./src/js/module/modal-via-url.js":
/*!****************************************!*\
  !*** ./src/js/module/modal-via-url.js ***!
  \****************************************/
/*! exports provided: openModalViaURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModalViaURL", function() { return openModalViaURL; });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/module/function.js");

const openModalViaURL = () => {
  const modal = document.querySelector('.fest-modal');
  const background = document.querySelector('.dark-bg');
  const decodeURL = decodeURIComponent(location.hash).match(/#\w+/);
  if (decodeURL !== null) {
    openModal(modal, background, decodeURL);
  }
};
function openModal(modal, background, decodeURL) {
  const image = document.querySelector('.underpage-img');
  modal.classList.add('active');
  background.classList.add('active');
  document.body.style.overflow = 'hidden';
  Object(_function__WEBPACK_IMPORTED_MODULE_0__["modalInfo"])(decodeURL);
  image.addEventListener('load', e => {
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["imgLoader"])();
  });
}

/***/ }),

/***/ "./src/js/module/modal.js":
/*!********************************!*\
  !*** ./src/js/module/modal.js ***!
  \********************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/module/function.js");

const modal = () => {
  modalManage('.fest-modal', '.festivals', '.underpage-close', '.dark-bg');
  modalLikeManage('.favorite-modal', '.favorite', '.favorite-close', '.dark-bg');
};
function modalManage(modalClass, triggerClass, closerClass, backgroundClass) {
  const trigger = document.querySelector(triggerClass);
  const modal = document.querySelector(modalClass);
  const closer = document.querySelector(closerClass);
  const background = document.querySelector(backgroundClass);
  modalOpener(modal, trigger, background);
  Object(_function__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modal, closer, background);
}
function modalLikeManage(modalClass, triggerClass, closerClass, backgroundClass) {
  const trigger = document.querySelector(triggerClass);
  const modal = document.querySelector(modalClass);
  const closer = document.querySelector(closerClass);
  const background = document.querySelector(backgroundClass);
  openLikeModal(modal, trigger, background);
  Object(_function__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modal, closer, background);
}
;
function openLikeModal(modal, trigger, background) {
  let beforeWidth = document.documentElement.clientWidth;
  trigger.addEventListener('click', e => {
    modal.classList.add('active');
    background.classList.add('active');
    document.body.style.overflow = 'hidden';
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["withoutScrollbar"])(beforeWidth);
  });
}
function modalOpener(modal, openTrigger, background) {
  openTrigger.addEventListener('click', e => {
    let target = e.target;
    if (fillingInfo(target)) {
      return;
    } else if (!e.target.classList.contains('festivals')) {
      let beforeWidth = document.documentElement.clientWidth;
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["openModal"])(modal, background);
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["withoutScrollbar"])(beforeWidth);
    }
  });
}
function fillingInfo(target) {
  let fastName;
  if (target.tagName == 'LI') {
    fastName = target.classList[1];
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["modalInfo"])(fastName);
  } else if (target.classList.contains('festival-like')) {
    return true;
  } else if (target.parentNode.classList.contains('festival')) {
    fastName = target.parentNode.classList[1];
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["modalInfo"])(fastName);
  } else if (target.parentNode.parentNode.classList.contains('festival')) {
    fastName = target.parentNode.parentNode.classList[1];
    Object(_function__WEBPACK_IMPORTED_MODULE_0__["modalInfo"])(fastName);
  }
  return false;
}
;

/***/ }),

/***/ "./src/js/module/scroll.js":
/*!*********************************!*\
  !*** ./src/js/module/scroll.js ***!
  \*********************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
const scroll = () => {
  scrolling('.arrow', 'header');
};
function scrolling(trigger, target) {
  const scrollButton = document.querySelector(trigger);
  const scrollTarget = document.querySelector(target);
  scrollButton.addEventListener('click', e => {
    scrollTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

/***/ }),

/***/ "./src/js/module/selected-fests.js":
/*!*****************************************!*\
  !*** ./src/js/module/selected-fests.js ***!
  \*****************************************/
/*! exports provided: selectedFests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedFests", function() { return selectedFests; });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/module/function.js");
/* harmony import */ var _events_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-database */ "./src/js/module/events-database.js");


const selectedFests = () => {
  const festivals = document.querySelector('.festivals');
  const festivalLikes = document.querySelectorAll('.festival-like');
  const modalList = document.querySelector('.favorite-list');
  startSession(modalList, festivalLikes);
  likeChoise(modalList, festivals, festivalLikes);
  deleteLikes(modalList, festivalLikes);
};
function startSession(modalList, festivalLikes) {
  if (localStorage.length > 0) {
    modalStartAddItems(modalList, festivalLikes);
  }
  likeAudit(festivalLikes);
  auditListEmpty(modalList);
}
function likeChoise(modalList, festivals, festivalLikes) {
  festivals.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains('festival-like')) {
      if (target.classList.contains('like')) {
        target.classList.remove('like');
        target.classList.add('no-like');
        let festSequenceNum = target.classList[1];
        localStorage.removeItem(festSequenceNum);
        deleteNoLikesFest(festSequenceNum);
        auditListEmpty(modalList);
      } else if (target.classList.contains('no-like')) {
        target.classList.remove('no-like');
        target.classList.add('like');
        let festSequenceNum = target.classList[1];
        let festType = target.previousElementSibling.classList[1];
        localStorage.setItem(festSequenceNum, festType);
        addItems(modalList, festSequenceNum, festivalLikes);
      }
    }
  });
}
;
function addItems(modalList, festSequenceNum, festivalLikes) {
  const template = document.getElementById('tmplt');
  modalList.append(template.content.cloneNode(true));
  modalList.lastElementChild.classList.add(festSequenceNum);
  modalList.lastElementChild.querySelector('.item-name').innerHTML = Object(_events_database__WEBPACK_IMPORTED_MODULE_1__["eventsDatabase"])()[festSequenceNum].name;
  modalList.lastElementChild.querySelector('.item-type').classList.add(localStorage.getItem(festSequenceNum));
  auditListEmpty(modalList);
  deleteLikes(modalList, festivalLikes);
  modalOpener();
}
function modalStartAddItems(modalList, festivalLikes) {
  const template = document.getElementById('tmplt');
  for (let i = 0; i < localStorage.length; i++) {
    modalList.append(template.content.cloneNode(true));
    modalList.lastElementChild.classList.add(localStorage.key(i));
    modalList.lastElementChild.querySelector('.item-name').innerHTML = Object(_events_database__WEBPACK_IMPORTED_MODULE_1__["eventsDatabase"])()[localStorage.key(i)].name;
    modalList.lastElementChild.querySelector('.item-type').classList.add(localStorage.getItem(localStorage.key(i)));
  }
  deleteLikes(modalList, festivalLikes);
  modalOpener();
}
function deleteLikes(modalList, festivalLikes) {
  const deleteBtns = document.querySelectorAll('.item-delete');
  for (let button of deleteBtns) {
    button.addEventListener('click', e => {
      localStorage.removeItem(e.target.parentElement.classList[1]);
      e.target.parentElement.remove();
      likeAudit(festivalLikes);
      auditListEmpty(modalList);
    });
  }
}
function likeAudit(festivalLikes) {
  for (let fest of festivalLikes) {
    if (localStorage.getItem(fest.classList[1]) != null) {
      fest.classList.remove('no-like');
      fest.classList.add('like');
    } else {
      fest.classList.remove('like');
      fest.classList.add('no-like');
    }
  }
}
function auditListEmpty(modalList) {
  if (localStorage.length > 0 && document.querySelector('.list-empty') != null) {
    document.querySelector('.list-empty').remove();
  } else if (localStorage.length < 1 && document.querySelectorAll('.list-empty').length < 1) {
    modalList.append(document.getElementById('tmplt-empty').content.cloneNode(true));
  } else {
    return;
  }
}
function deleteNoLikesFest(festSequenceNum) {
  const allLikesFest = document.querySelectorAll('.item-fest');
  for (let fest of allLikesFest) {
    if (fest.classList.contains(festSequenceNum)) {
      fest.remove();
    }
  }
}
function modalOpener() {
  const infoItems = document.querySelectorAll('.item-info');
  const modal = document.querySelector('.fest-modal');
  const background = document.querySelector('.dark-bg');
  const closer = document.querySelector('.underpage-close');
  const favoriteModal = document.querySelector('.favorite-modal');
  let beforeWidth = document.documentElement.clientWidth;
  for (let item of infoItems) {
    item.addEventListener('click', e => {
      favoriteModal.classList.remove('active');
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["openModal"])(modal, background);
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["withoutScrollbar"])(beforeWidth);
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["modalInfo"])(item.parentElement.classList[1]);
      Object(_function__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modal, closer, background);
    });
  }
}

/***/ }),

/***/ "./src/js/module/sort.js":
/*!*******************************!*\
  !*** ./src/js/module/sort.js ***!
  \*******************************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
const sort = () => {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-button');
  const menuArrow = document.querySelector('.menu-img');
  const allFestivals = document.querySelectorAll('.festival');
  const sortForm = document.querySelector('.form-choise');
  const checkboxs = document.querySelectorAll('.checkbox');
  const checkboxTexts = document.querySelectorAll('.checkbox-text');
  menuManage(menu, menuArrow, sortForm, menuButton);
  choiseInput(sortForm, allFestivals, checkboxs);
  choiseText(checkboxTexts, allFestivals, checkboxs);
};
function choiseText(checkboxTexts, festivals, checkboxs) {
  for (let text of checkboxTexts) {
    text.addEventListener('click', e => {
      const checkbox = e.target.previousElementSibling;
      if (checkbox.checked === false) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      festsSorted(festivals, checkboxs);
      showNonFests(checkboxs);
    });
  }
}
function choiseInput(sortForm, festivals, checkboxs) {
  sortForm.addEventListener('change', e => {
    console.log(e);
    festsSorted(festivals, checkboxs);
    showNonFests(checkboxs);
  });
}
function festsSorted(festivals, checkboxs) {
  for (let input of checkboxs) {
    if (!input.checked) {
      for (let fest of festivals) {
        if (input.name == fest.classList[3]) {
          fest.classList.add('unselected');
        }
      }
    } else {
      for (let fest of festivals) {
        if (input.name == fest.classList[3]) {
          fest.classList.remove('unselected');
        }
      }
    }
  }
}
function menuManage(menu, menuArrow, form, button) {
  button.addEventListener('click', e => {
    menu.classList.toggle('active');
    menuArrow.classList.toggle('active');
    form.classList.toggle('active');
  });
}
function showNonFests(checkboxs) {
  const nonFests = document.querySelector('.none-fests');
  let checkedNum = 6;
  for (let input of checkboxs) {
    if (input.checked) {
      checkedNum++;
    } else if (!input.checked) {
      checkedNum--;
    }
  }
  if (checkedNum === 0) {
    nonFests.style.display = 'block';
  } else {
    nonFests.style.display = 'none';
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map