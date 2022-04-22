/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/js/component/catalog.js":
/*!**************************************!*\
  !*** ./_src/js/component/catalog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ \"./node_modules/.pnpm/nouislider@15.5.1/node_modules/nouislider/dist/nouislider.js\");\n/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst priceRange = () => {\n  const priceRange = document.getElementById('filter-price__range');\n  const inputMin = document.getElementById('fprice_from');\n  const inputMax = document.getElementById('fprice_to');\n  if (!priceRange || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок\n\n  const inputs = [inputMin, inputMax];\n  nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(priceRange, {\n    // инициализируем слайдер\n    connect: true,\n    // указываем что нужно показывать выбранный диапазон\n    start: [0, inputMax.value],\n    range: {\n      'min': 0,\n      'max': inputMax.value * 1\n    },\n    step: 100 // шаг изменения значений\n\n  });\n  priceRange.noUiSlider.on('update', function (values, handle) {\n    inputs[handle].value = parseInt(values[handle]);\n  });\n  inputMin.addEventListener('change', function () {\n    // при изменении меньшего значения в input - меняем положение соответствующего элемента управления\n    priceRange.noUiSlider.set([this.value, null]);\n  });\n  inputMax.addEventListener('change', function () {\n    // при изменении большего значения в input - меняем положение соответствующего элемента управления\n    priceRange.noUiSlider.set([null, this.value]);\n  });\n};\n\npriceRange();\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/component/catalog.js?");

/***/ }),

/***/ "./_src/js/component/content.js":
/*!**************************************!*\
  !*** ./_src/js/component/content.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixitup */ \"./node_modules/.pnpm/mixitup@3.3.1/node_modules/mixitup/dist/mixitup.js\");\n/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_0__);\n\nconst btnMore = document.querySelector('.button-article-more .btn');\n\nif (btnMore) {\n  btnMore.addEventListener('click', () => {\n    btnMore.closest('.article--limited').classList.remove('article--limited');\n  });\n}\n\nconst mix = document.querySelector('.js-mixitup');\n\nif (mix) {\n  const mixer = mixitup__WEBPACK_IMPORTED_MODULE_0___default()(mix);\n}\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/component/content.js?");

/***/ }),

/***/ "./_src/js/component/form.js":
/*!***********************************!*\
  !*** ./_src/js/component/form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ \"./node_modules/.pnpm/@fancyapps+ui@4.0.26/node_modules/@fancyapps/ui/dist/fancybox.esm.js\");\n/* harmony import */ var _vendor_pristine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/pristine */ \"./_src/js/vendor/pristine.js\");\n/* harmony import */ var _vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_pristine__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ \"./node_modules/.pnpm/imask@6.4.2/node_modules/imask/esm/index.js\");\n\n\n\n_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind('[data-fancybox=\"form\"]', {\n  groupAll: false,\n  groupAttr: false\n});\nconst inpTel = document.querySelectorAll('[type^=\"tel\"]');\ninpTel.forEach(el => {\n  el.addEventListener('focus', e => {\n    let phone = (0,imask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el, {\n      mask: '+{7}(000)000-00-00',\n      lazy: false\n    });\n  });\n});\n_vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default().addMessages('en', {\n  required: \"Обязательное поле\",\n  email: \"Неправильный адрес e-mail\"\n});\n_vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default().addValidator(\"tel\", function (val) {\n  const tel = new RegExp('[+]7[\\(0-9\\)]{5}[(0-9)]{3}.[(0-9)]{2}.[(0-9)]{2}').test(val);\n  return !val || tel;\n}, \"Неправильный формат телефона\", 5, false);\nconst ansverForm = '<div class=\"answer-form form-center \"><div class=\"btn btn--title btn-center\">Успешная заявка</div><div class=\"form__title\">Ваша заявка успешно отправлена!</div><p class=\"form__txt\">Мы свяжемся с вами в течение 15 минут и проконсультируем по всем интересующим вас вопросам</p></div>';\nconst forms = document.querySelectorAll(\".form\");\nforms.forEach(el => {\n  const pristine = new (_vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default())(el);\n  el.addEventListener('submit', function (e) {\n    e.preventDefault();\n    const valid = pristine.validate();\n\n    if (valid) {\n      _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.close();\n      e.target.reset();\n      _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.show([{\n        src: ansverForm,\n        type: \"html\"\n      }]); //   let formData = new FormData(e.target);\n      //   fetch('/', {\n      //   method: 'POST',\n      //   body: formData\n      // }).then(function(response) {\n      //   return response.text()\n      // }).then(function(text) {\n      //     //text is the server's response\n      // });\n    }\n  });\n});\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/component/form.js?");

/***/ }),

/***/ "./_src/js/component/nav.js":
/*!**********************************!*\
  !*** ./_src/js/component/nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hc-offcanvas-nav */ \"./node_modules/.pnpm/hc-offcanvas-nav@6.1.5/node_modules/hc-offcanvas-nav/dist/hc-offcanvas-nav.js\");\n/* harmony import */ var hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ \"./node_modules/.pnpm/@fancyapps+ui@4.0.26/node_modules/@fancyapps/ui/dist/fancybox.esm.js\");\n\n\n\nfunction initAcc(elem, option, media) {\n  document.addEventListener('click', function (e) {\n    if (!e.target.closest(elem + ' .a-btn')) {\n      return;\n    }\n\n    ;\n    if (media && !window.matchMedia(`(max-width: ${media})`).matches) return;else {\n      e.preventDefault();\n      const panel = e.target.closest('.a-item');\n\n      if (!panel.classList.contains('active')) {\n        if (option == true) {\n          var elementList = document.querySelectorAll(elem + ' > .a-item');\n          Array.prototype.forEach.call(elementList, function (e) {\n            e.classList.remove('active');\n          });\n        }\n\n        panel.classList.add('active');\n      } else {\n        panel.classList.remove('active');\n      }\n    }\n  });\n}\n\ninitAcc('.faq-list', true);\ninitAcc('.footer-nav', true);\ndocument.addEventListener('DOMContentLoaded', function () {\n  const logo = document.querySelector('.header__logo');\n  const phone = document.querySelector('.header__contacts--tel').cloneNode(true);\n  const phone2 = phone.cloneNode(true);\n  const addr = document.querySelector('.header__contacts--addr').cloneNode(true);\n  const btnHelp = document.querySelector('.footer-about__right .btn').cloneNode(true);\n  const Nav = new (hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0___default())('#main-nav', {\n    disableAt: 1024,\n    customToggle: '.burger',\n    pushContent: '.page',\n    navTitle: false,\n    levelTitles: true,\n    levelTitleAsBack: true,\n    levelOpen: \"overlap\",\n    labelBack: \"Назад\",\n    navTitle: logo,\n    width: 300\n  }); // insert addition element\n\n  const navHeader = document.querySelector('#hc-nav-1 .nav-title');\n  const navBody = document.querySelector('#hc-nav-1 .nav-content');\n  const navfooter = document.createElement(\"div\");\n  const formCall = document.getElementById('form-call-modal');\n  navHeader.appendChild(phone);\n  navfooter.classList.add('mob-nav-footer');\n  navfooter.appendChild(addr);\n  navfooter.appendChild(phone2);\n  navfooter.appendChild(btnHelp);\n  navBody.appendChild(navfooter);\n  btnHelp.addEventListener('click', e => {\n    e.preventDefault();\n    Nav.close(); // console.log(formCall)\n\n    const fancybox = new _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox([{\n      src: formCall,\n      type: \"html\"\n    }]);\n  }); //  const faqList =  new BadgerAccordion('.js-badger-accordion');\n});\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/component/nav.js?");

/***/ }),

/***/ "./_src/js/component/product.js":
/*!**************************************!*\
  !*** ./_src/js/component/product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/.pnpm/swiper@8.0.7/node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ \"./node_modules/.pnpm/@fancyapps+ui@4.0.26/node_modules/@fancyapps/ui/dist/fancybox.esm.js\");\n\n\nconst prodMain = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.product-slider-main', {\n  createElements: true,\n  slidesPerView: 1\n});\nconst prodThumb = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.product-slider-thumb', {\n  createElements: true,\n  slidesPerView: 3,\n  spaceBetween: 20,\n  breakpoints: {\n    1400: {\n      direction: 'vertical'\n    }\n  }\n});\nprodThumb.on('click', function (swiper) {\n  prodMain.slideTo(swiper.clickedIndex);\n});\n_fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.bind('[data-fancybox=\"gallery\"]', {});\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/component/product.js?");

/***/ }),

/***/ "./_src/js/component/sliders.js":
/*!**************************************!*\
  !*** ./_src/js/component/sliders.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/.pnpm/swiper@8.0.7/node_modules/swiper/swiper.esm.js\");\n\nconst introSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".intro-slider\", {\n  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],\n  createElements: true,\n  loop: true,\n  navigation: true,\n  pagination: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (introSlider);\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/component/sliders.js?");

/***/ }),

/***/ "./_src/js/main.js":
/*!*************************!*\
  !*** ./_src/js/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_dynamicAdapt_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/dynamicAdapt_dev */ \"./_src/js/vendor/dynamicAdapt_dev.js\");\n/* harmony import */ var _vendor_dynamicAdapt_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_dynamicAdapt_dev__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/sliders */ \"./_src/js/component/sliders.js\");\n/* harmony import */ var _component_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/nav */ \"./_src/js/component/nav.js\");\n/* harmony import */ var _component_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/catalog */ \"./_src/js/component/catalog.js\");\n/* harmony import */ var _component_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/product */ \"./_src/js/component/product.js\");\n/* harmony import */ var _component_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/form */ \"./_src/js/component/form.js\");\n/* harmony import */ var _component_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/content */ \"./_src/js/component/content.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/main.js?");

/***/ }),

/***/ "./_src/js/vendor/dynamicAdapt_dev.js":
/*!********************************************!*\
  !*** ./_src/js/vendor/dynamicAdapt_dev.js ***!
  \********************************************/
/***/ (() => {

"use strict";
eval("// Dynamic Adapt v.1\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\n// e.x. data-da=\".item,992,2\"\n// Andrikanych Yevhen 2020\n// https://www.youtube.com/c/freelancerlifestyle\n\n\nfunction DynamicAdapt(type) {\n  this.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n  const _this = this; // массив объектов\n\n\n  this.оbjects = [];\n  this.daClassname = \"_dynamic_adapt_\"; // массив DOM-элементов\n\n  this.nodes = document.querySelectorAll(\"[data-da]\"); // наполнение оbjects объктами\n\n  for (let i = 0; i < this.nodes.length; i++) {\n    const node = this.nodes[i];\n    const data = node.dataset.da.trim();\n    const dataArray = data.split(\",\");\n    const оbject = {};\n    оbject.element = node;\n    оbject.parent = node.parentNode;\n    оbject.destination = document.querySelector(dataArray[0].trim());\n    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n    оbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n    оbject.index = this.indexInParent(оbject.parent, оbject.element);\n    this.оbjects.push(оbject);\n  }\n\n  this.arraySort(this.оbjects); // массив уникальных медиа-запросов\n\n  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n    return '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n  }, this);\n  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n    return Array.prototype.indexOf.call(self, item) === index;\n  }); // навешивание слушателя на медиа-запрос\n  // и вызов обработчика при первом запуске\n\n  for (let i = 0; i < this.mediaQueries.length; i++) {\n    const media = this.mediaQueries[i];\n    const mediaSplit = String.prototype.split.call(media, ',');\n    const matchMedia = window.matchMedia(mediaSplit[0]);\n    const mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом\n\n    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\n      return item.breakpoint === mediaBreakpoint;\n    });\n    matchMedia.addListener(function () {\n      _this.mediaHandler(matchMedia, оbjectsFilter);\n    });\n    this.mediaHandler(matchMedia, оbjectsFilter);\n  }\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n  if (matchMedia.matches) {\n    for (let i = 0; i < оbjects.length; i++) {\n      const оbject = оbjects[i];\n      оbject.index = this.indexInParent(оbject.parent, оbject.element);\n      this.moveTo(оbject.place, оbject.element, оbject.destination);\n    }\n  } else {\n    for (let i = 0; i < оbjects.length; i++) {\n      const оbject = оbjects[i];\n\n      if (оbject.element.classList.contains(this.daClassname)) {\n        this.moveBack(оbject.parent, оbject.element, оbject.index);\n      }\n    }\n  }\n}; // Функция перемещения\n\n\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n  element.classList.add(this.daClassname);\n\n  if (place === 'last' || place >= destination.children.length) {\n    destination.insertAdjacentElement('beforeend', element);\n    return;\n  }\n\n  if (place === 'first') {\n    destination.insertAdjacentElement('afterbegin', element);\n    return;\n  }\n\n  destination.children[place].insertAdjacentElement('beforebegin', element);\n}; // Функция возврата\n\n\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n  element.classList.remove(this.daClassname);\n\n  if (parent.children[index] !== undefined) {\n    parent.children[index].insertAdjacentElement('beforebegin', element);\n  } else {\n    parent.insertAdjacentElement('beforeend', element);\n  }\n}; // Функция получения индекса внутри родителя\n\n\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n  const array = Array.prototype.slice.call(parent.children);\n  return Array.prototype.indexOf.call(array, element);\n}; // Функция сортировки массива по breakpoint и place\n// по возрастанию для this.type = min\n// по убыванию для this.type = max\n\n\nDynamicAdapt.prototype.arraySort = function (arr) {\n  if (this.type === \"min\") {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return -1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return 1;\n        }\n\n        return a.place - b.place;\n      }\n\n      return a.breakpoint - b.breakpoint;\n    });\n  } else {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return 1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return -1;\n        }\n\n        return b.place - a.place;\n      }\n\n      return b.breakpoint - a.breakpoint;\n    });\n    return;\n  }\n};\n\nconst da = new DynamicAdapt(\"max\");\nda.init();\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/vendor/dynamicAdapt_dev.js?");

/***/ }),

/***/ "./_src/js/vendor/pristine.js":
/*!************************************!*\
  !*** ./_src/js/vendor/pristine.js ***!
  \************************************/
/***/ (function(module) {

eval("(function (global, factory) {\n   true ? module.exports = factory() : 0;\n})(this, function () {\n  'use strict';\n\n  var lang = {\n    en: {\n      required: \"This field is required\",\n      email: \"This field requires a valid e-mail address\",\n      number: \"This field requires a number\",\n      integer: \"This field requires an integer value\",\n      url: \"This field requires a valid website URL\",\n      tel: \"This field requires a valid telephone number\",\n      maxlength: \"This fields length must be < ${1}\",\n      minlength: \"This fields length must be > ${1}\",\n      min: \"Minimum value for this field is ${1}\",\n      max: \"Maximum value for this field is ${1}\",\n      pattern: \"Please match the requested format\",\n      equals: \"The two fields do not match\"\n    }\n  };\n\n  function findAncestor(el, cls) {\n    while ((el = el.parentElement) && !el.classList.contains(cls)) {}\n\n    return el;\n  }\n\n  function tmpl(o) {\n    var _arguments = arguments;\n    return this.replace(/\\${([^{}]*)}/g, function (a, b) {\n      return _arguments[b];\n    });\n  }\n\n  function groupedElemCount(input) {\n    return input.pristine.self.form.querySelectorAll('input[name=\"' + input.getAttribute('name') + '\"]:checked').length;\n  }\n\n  function mergeConfig(obj1, obj2) {\n    for (var attr in obj2) {\n      if (!(attr in obj1)) {\n        obj1[attr] = obj2[attr];\n      }\n    }\n\n    return obj1;\n  }\n\n  var defaultConfig = {\n    classTo: 'form-group',\n    errorClass: 'has-danger',\n    successClass: 'has-success',\n    errorTextParent: 'form-group',\n    errorTextTag: 'div',\n    errorTextClass: 'text-help'\n  };\n  var PRISTINE_ERROR = 'pristine-error';\n  var SELECTOR = \"input:not([type^=hidden]):not([type^=submit]), select, textarea\";\n  var ALLOWED_ATTRIBUTES = [\"required\", \"min\", \"max\", 'minlength', 'maxlength', 'pattern'];\n  var EMAIL_REGEX = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  var MESSAGE_REGEX = /-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/; // matches, -message, -message-en, -message-en_US\n\n  var currentLocale = 'en';\n  var validators = {};\n\n  var _ = function _(name, validator) {\n    validator.name = name;\n    if (validator.priority === undefined) validator.priority = 1;\n    validators[name] = validator;\n  };\n\n  _('text', {\n    fn: function fn(val) {\n      return true;\n    },\n    priority: 0\n  });\n\n  _('required', {\n    fn: function fn(val) {\n      return this.type === 'radio' || this.type === 'checkbox' ? groupedElemCount(this) : val !== undefined && val !== '';\n    },\n    priority: 99,\n    halt: true\n  });\n\n  _('email', {\n    fn: function fn(val) {\n      return !val || EMAIL_REGEX.test(val);\n    }\n  });\n\n  _('number', {\n    fn: function fn(val) {\n      return !val || !isNaN(parseFloat(val));\n    },\n    priority: 2\n  });\n\n  _('integer', {\n    fn: function fn(val) {\n      return !val || /^\\d+$/.test(val);\n    }\n  });\n\n  _('minlength', {\n    fn: function fn(val, length) {\n      return !val || val.length >= parseInt(length);\n    }\n  });\n\n  _('maxlength', {\n    fn: function fn(val, length) {\n      return !val || val.length <= parseInt(length);\n    }\n  });\n\n  _('min', {\n    fn: function fn(val, limit) {\n      return !val || (this.type === 'checkbox' ? groupedElemCount(this) >= parseInt(limit) : parseFloat(val) >= parseFloat(limit));\n    }\n  });\n\n  _('max', {\n    fn: function fn(val, limit) {\n      return !val || (this.type === 'checkbox' ? groupedElemCount(this) <= parseInt(limit) : parseFloat(val) <= parseFloat(limit));\n    }\n  });\n\n  _('pattern', {\n    fn: function fn(val, pattern) {\n      var m = pattern.match(new RegExp('^/(.*?)/([gimy]*)$'));\n      return !val || new RegExp(m[1], m[2]).test(val);\n    }\n  });\n\n  _('equals', {\n    fn: function fn(val, otherFieldSelector) {\n      var other = document.querySelector(otherFieldSelector);\n      return other && (!val && !other.value || other.value === val);\n    }\n  });\n\n  function Pristine(form, config, live) {\n    var self = this;\n    init(form, config, live);\n\n    function init(form, config, live) {\n      form.setAttribute(\"novalidate\", \"true\");\n      self.form = form;\n      self.config = mergeConfig(config || {}, defaultConfig);\n      self.live = !(live === false);\n      self.fields = Array.from(form.querySelectorAll(SELECTOR)).map(function (input) {\n        var fns = [];\n        var params = {};\n        var messages = {};\n        [].forEach.call(input.attributes, function (attr) {\n          if (/^data-pristine-/.test(attr.name)) {\n            var name = attr.name.substr(14);\n            var messageMatch = name.match(MESSAGE_REGEX);\n\n            if (messageMatch !== null) {\n              var locale = messageMatch[1] === undefined ? 'en' : messageMatch[1];\n              if (!messages.hasOwnProperty(locale)) messages[locale] = {};\n              messages[locale][name.slice(0, name.length - messageMatch[0].length)] = attr.value;\n              return;\n            }\n\n            if (name === 'type') name = attr.value;\n\n            _addValidatorToField(fns, params, name, attr.value);\n          } else if (~ALLOWED_ATTRIBUTES.indexOf(attr.name)) {\n            _addValidatorToField(fns, params, attr.name, attr.value);\n          } else if (attr.name === 'type') {\n            _addValidatorToField(fns, params, attr.value);\n          }\n        });\n        fns.sort(function (a, b) {\n          return b.priority - a.priority;\n        });\n        self.live && input.addEventListener(!~['radio', 'checkbox'].indexOf(input.getAttribute('type')) ? 'input' : 'change', function (e) {\n          self.validate(e.target);\n        }.bind(self));\n        return input.pristine = {\n          input: input,\n          validators: fns,\n          params: params,\n          messages: messages,\n          self: self\n        };\n      }.bind(self));\n    }\n\n    function _addValidatorToField(fns, params, name, value) {\n      var validator = validators[name];\n\n      if (validator) {\n        fns.push(validator);\n\n        if (value) {\n          var valueParams = name === \"pattern\" ? [value] : value.split(',');\n          valueParams.unshift(null); // placeholder for input's value\n\n          params[name] = valueParams;\n        }\n      }\n    }\n    /***\r\n     * Checks whether the form/input elements are valid\r\n     * @param input => input element(s) or a jquery selector, null for full form validation\r\n     * @param silent => do not show error messages, just return true/false\r\n     * @returns {boolean} return true when valid false otherwise\r\n     */\n\n\n    self.validate = function (input, silent) {\n      silent = input && silent === true || input === true;\n      var fields = self.fields;\n\n      if (input !== true && input !== false) {\n        if (input instanceof HTMLElement) {\n          fields = [input.pristine];\n        } else if (input instanceof NodeList || input instanceof (window.$ || Array) || input instanceof Array) {\n          fields = Array.from(input).map(function (el) {\n            return el.pristine;\n          });\n        }\n      }\n\n      var valid = true;\n\n      for (var i = 0; fields[i]; i++) {\n        var field = fields[i];\n\n        if (_validateField(field)) {\n          !silent && _showSuccess(field);\n        } else {\n          valid = false;\n          !silent && _showError(field);\n        }\n      }\n\n      return valid;\n    };\n    /***\r\n     * Get errors of a specific field or the whole form\r\n     * @param input\r\n     * @returns {Array|*}\r\n     */\n\n\n    self.getErrors = function (input) {\n      if (!input) {\n        var erroneousFields = [];\n\n        for (var i = 0; i < self.fields.length; i++) {\n          var field = self.fields[i];\n\n          if (field.errors.length) {\n            erroneousFields.push({\n              input: field.input,\n              errors: field.errors\n            });\n          }\n        }\n\n        return erroneousFields;\n      }\n\n      if (input.tagName && input.tagName.toLowerCase() === \"select\") {\n        return input.pristine.errors;\n      }\n\n      return input.length ? input[0].pristine.errors : input.pristine.errors;\n    };\n    /***\r\n     * Validates a single field, all validator functions are called and error messages are generated\r\n     * when a validator fails\r\n     * @param field\r\n     * @returns {boolean}\r\n     * @private\r\n     */\n\n\n    function _validateField(field) {\n      var errors = [];\n      var valid = true;\n\n      for (var i = 0; field.validators[i]; i++) {\n        var validator = field.validators[i];\n        var params = field.params[validator.name] ? field.params[validator.name] : [];\n        params[0] = field.input.value;\n\n        if (!validator.fn.apply(field.input, params)) {\n          valid = false;\n\n          if (typeof validator.msg === \"function\") {\n            errors.push(validator.msg(field.input.value, params));\n          } else if (typeof validator.msg === \"string\") {\n            errors.push(tmpl.apply(validator.msg, params));\n          } else if (validator.msg === Object(validator.msg) && validator.msg[currentLocale]) {\n            // typeof generates unnecessary babel code\n            errors.push(tmpl.apply(validator.msg[currentLocale], params));\n          } else if (field.messages[currentLocale] && field.messages[currentLocale][validator.name]) {\n            errors.push(tmpl.apply(field.messages[currentLocale][validator.name], params));\n          } else if (lang[currentLocale] && lang[currentLocale][validator.name]) {\n            errors.push(tmpl.apply(lang[currentLocale][validator.name], params));\n          }\n\n          if (validator.halt === true) {\n            break;\n          }\n        }\n      }\n\n      field.errors = errors;\n      return valid;\n    }\n    /***\r\n     * Add a validator to a specific dom element in a form\r\n     * @param elem => The dom element where the validator is applied to\r\n     * @param fn => validator function\r\n     * @param msg => message to show when validation fails. Supports templating. ${0} for the input's value, ${1} and\r\n     * so on are for the attribute values\r\n     * @param priority => priority of the validator function, higher valued function gets called first.\r\n     * @param halt => whether validation should stop for this field after current validation function\r\n     */\n\n\n    self.addValidator = function (elem, fn, msg, priority, halt) {\n      if (elem instanceof HTMLElement) {\n        elem.pristine.validators.push({\n          fn: fn,\n          msg: msg,\n          priority: priority,\n          halt: halt\n        });\n        elem.pristine.validators.sort(function (a, b) {\n          return b.priority - a.priority;\n        });\n      } else {\n        console.warn(\"The parameter elem must be a dom element\");\n      }\n    };\n    /***\r\n     * An utility function that returns a 2-element array, first one is the element where error/success class is\r\n     * applied. 2nd one is the element where error message is displayed. 2nd element is created if doesn't exist and cached.\r\n     * @param field\r\n     * @returns {*}\r\n     * @private\r\n     */\n\n\n    function _getErrorElements(field) {\n      if (field.errorElements) {\n        return field.errorElements;\n      }\n\n      var errorClassElement = findAncestor(field.input, self.config.classTo);\n      var errorTextParent = null,\n          errorTextElement = null;\n\n      if (self.config.classTo === self.config.errorTextParent) {\n        errorTextParent = errorClassElement;\n      } else {\n        errorTextParent = errorClassElement.querySelector('.' + self.config.errorTextParent);\n      }\n\n      if (errorTextParent) {\n        errorTextElement = errorTextParent.querySelector('.' + PRISTINE_ERROR);\n\n        if (!errorTextElement) {\n          errorTextElement = document.createElement(self.config.errorTextTag);\n          errorTextElement.className = PRISTINE_ERROR + ' ' + self.config.errorTextClass;\n          errorTextParent.appendChild(errorTextElement);\n          errorTextElement.pristineDisplay = errorTextElement.style.display;\n        }\n      }\n\n      return field.errorElements = [errorClassElement, errorTextElement];\n    }\n\n    function _showError(field) {\n      var errorElements = _getErrorElements(field);\n\n      var errorClassElement = errorElements[0],\n          errorTextElement = errorElements[1];\n\n      if (errorClassElement) {\n        errorClassElement.classList.remove(self.config.successClass);\n        errorClassElement.classList.add(self.config.errorClass);\n      }\n\n      if (errorTextElement) {\n        errorTextElement.innerHTML = field.errors.join('<br/>');\n        errorTextElement.style.display = errorTextElement.pristineDisplay || '';\n      }\n    }\n    /***\r\n     * Adds error to a specific field\r\n     * @param input\r\n     * @param error\r\n     */\n\n\n    self.addError = function (input, error) {\n      input = input.length ? input[0] : input;\n      input.pristine.errors.push(error);\n\n      _showError(input.pristine);\n    };\n\n    function _removeError(field) {\n      var errorElements = _getErrorElements(field);\n\n      var errorClassElement = errorElements[0],\n          errorTextElement = errorElements[1];\n\n      if (errorClassElement) {\n        // IE > 9 doesn't support multiple class removal\n        errorClassElement.classList.remove(self.config.errorClass);\n        errorClassElement.classList.remove(self.config.successClass);\n      }\n\n      if (errorTextElement) {\n        errorTextElement.innerHTML = '';\n        errorTextElement.style.display = 'none';\n      }\n\n      return errorElements;\n    }\n\n    function _showSuccess(field) {\n      var errorClassElement = _removeError(field)[0];\n\n      errorClassElement && errorClassElement.classList.add(self.config.successClass);\n    }\n    /***\r\n     * Resets the errors\r\n     */\n\n\n    self.reset = function () {\n      for (var i = 0; self.fields[i]; i++) {\n        self.fields[i].errorElements = null;\n      }\n\n      Array.from(self.form.querySelectorAll('.' + PRISTINE_ERROR)).map(function (elem) {\n        elem.parentNode.removeChild(elem);\n      });\n      Array.from(self.form.querySelectorAll('.' + self.config.classTo)).map(function (elem) {\n        elem.classList.remove(self.config.successClass);\n        elem.classList.remove(self.config.errorClass);\n      });\n    };\n    /***\r\n     * Resets the errors and deletes all pristine fields\r\n     */\n\n\n    self.destroy = function () {\n      self.reset();\n      self.fields.forEach(function (field) {\n        delete field.input.pristine;\n      });\n      self.fields = [];\n    };\n\n    self.setGlobalConfig = function (config) {\n      defaultConfig = config;\n    };\n\n    return self;\n  }\n  /***\r\n   *\r\n   * @param name => Name of the global validator\r\n   * @param fn => validator function\r\n   * @param msg => message to show when validation fails. Supports templating. ${0} for the input's value, ${1} and\r\n   * so on are for the attribute values\r\n   * @param priority => priority of the validator function, higher valued function gets called first.\r\n   * @param halt => whether validation should stop for this field after current validation function\r\n   */\n\n\n  Pristine.addValidator = function (name, fn, msg, priority, halt) {\n    _(name, {\n      fn: fn,\n      msg: msg,\n      priority: priority,\n      halt: halt\n    });\n  };\n\n  Pristine.addMessages = function (locale, messages) {\n    var langObj = lang.hasOwnProperty(locale) ? lang[locale] : lang[locale] = {};\n    Object.keys(messages).forEach(function (key, index) {\n      langObj[key] = messages[key];\n    });\n  };\n\n  Pristine.setLocale = function (locale) {\n    currentLocale = locale;\n  };\n\n  return Pristine;\n});\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/vendor/pristine.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp4wp5"] = self["webpackChunkgulp4wp5"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./_src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;