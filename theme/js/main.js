/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);


const priceRange = () => {
  const priceRange = document.getElementById('filter-price__range');
  const inputMin = document.getElementById('fprice_from');
  const inputMax = document.getElementById('fprice_to');
  if (!priceRange || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax];
  nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(priceRange, {
    // инициализируем слайдер
    connect: true,
    // указываем что нужно показывать выбранный диапазон
    start: [0, inputMax.value],
    range: {
      'min': 0,
      'max': inputMax.value * 1
    },
    step: 100 // шаг изменения значений

  });
  priceRange.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });
  inputMin.addEventListener('change', function () {
    // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    priceRange.noUiSlider.set([this.value, null]);
  });
  inputMax.addEventListener('change', function () {
    // при изменении большего значения в input - меняем положение соответствующего элемента управления
    priceRange.noUiSlider.set([null, this.value]);
  });
};

priceRange();

/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0__);


function initAcc(elem, option, media) {
  document.addEventListener('click', function (e) {
    if (!e.target.closest(elem + ' .a-btn')) {
      return;
    }

    ;
    if (media && !window.matchMedia(`(max-width: ${media})`).matches) return;else {
      e.preventDefault();
      const panel = e.target.closest('.a-item');

      if (!panel.classList.contains('active')) {
        if (option == true) {
          var elementList = document.querySelectorAll(elem + ' > .a-item');
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove('active');
          });
        }

        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    }
  });
}

initAcc('.faq-list', true);
initAcc('.footer-nav', true);
document.addEventListener('DOMContentLoaded', function () {
  var Nav = new (hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0___default())('#main-nav', {
    disableAt: 1024,
    customToggle: '.burger',
    navTitle: 'All Categories',
    levelTitles: true,
    levelTitleAsBack: true
  }); //  const faqList =  new BadgerAccordion('.js-badger-accordion');
});

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _vendor_vanilla_js_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _vendor_vanilla_js_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_vanilla_js_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);



const prodMain = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-slider-main', {
  createElements: true,
  slidesPerView: 1
});
const prodThumb = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-slider-thumb', {
  createElements: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1400: {
      direction: 'vertical'
    }
  }
});
prodThumb.on('click', function (swiper) {
  prodMain.slideTo(swiper.clickedIndex);
});
const tips = new Tooltip({
  theme: "light",
  distance: 20
});
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind('[data-fancybox="gallery"]', {});

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

const introSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".intro-slider", {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
  createElements: true,
  loop: true,
  navigation: true,
  pagination: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (introSlider);

/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_dynamicAdapt_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _vendor_dynamicAdapt_dev__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_dynamicAdapt_dev__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _component_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var _component_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(107);
/* harmony import */ var _component_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(109);






/***/ }),

/***/ 1:
/***/ (() => {

"use strict";
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this; // массив объектов


  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

  this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects); // массив уникальных медиа-запросов

  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  }); // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске

  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];

      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
}; // Функция перемещения


DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);

  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }

  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }

  destination.children[place].insertAdjacentElement('beforebegin', element);
}; // Функция возврата


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);

  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}; // Функция получения индекса внутри родителя


DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}; // Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max


DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();

/***/ }),

/***/ 110:
/***/ (() => {

/**
* @fileOverview
* @author Zoltan Toth
* @version 0.1
*/

/**
* @description
* Vanilla Javascript tooltip.
*
* @class
* @param {string} [options.theme=dark] - Selects one of the pre-defined tooltip styles - light or dark.
* @param {number} [options.dist=10] - Specifies the distance in pixels from trigger to tooltip.
* @param {number} [options.delay=0] - Specifies how long the tooltip remains visible after the mouse leaves the trigger.
*/
Tooltip = function (options) {
  var theme = options.theme || "dark",
      delay = options.delay || 0,
      dist = options.distance || 10;
  /* 
  * Attaching one mouseover and one mouseout listener to the document
  * instead of listeners for each trigger 
  */

  document.body.addEventListener("mouseover", function (e) {
    if (!e.target.hasAttribute('data-tooltip')) return;
    var tooltip = document.createElement("div");
    tooltip.className = "b-tooltip " + "b-tooltip-" + theme;
    tooltip.innerHTML = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    var pos = e.target.getAttribute('data-position') || "center top",
        posHorizontal = pos.split(" ")[0];
    posVertical = pos.split(" ")[1];
    positionAt(e.target, tooltip, posHorizontal, posVertical);
  });
  document.body.addEventListener("mouseout", function (e) {
    if (e.target.hasAttribute('data-tooltip')) {
      setTimeout(function () {
        document.body.removeChild(document.querySelector(".b-tooltip"));
      }, delay);
    }
  });
  /**
   * Positions the tooltip.
   * 
   * @param {object} parent - The trigger of the tooltip.
   * @param {object} tooltip - The tooltip itself.
   * @param {string} posHorizontal - Desired horizontal position of the tooltip relatively to the trigger (left/center/right)
   * @param {string} posVertical - Desired vertical position of the tooltip relatively to the trigger (top/center/bottom)
   * 
   */

  function positionAt(parent, tooltip, posHorizontal, posVertical) {
    var parentCoords = parent.getBoundingClientRect(),
        left,
        top;
    console.log(posVertical);

    switch (posHorizontal) {
      case "left":
        left = parseInt(parentCoords.left) - dist - tooltip.offsetWidth;

        if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
          left = dist;
        }

        break;

      case "right":
        left = parentCoords.right + dist;

        if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left = document.documentElement.clientWidth - tooltip.offsetWidth - dist;
        }

        break;

      default:
      case "center":
        left = parseInt(parentCoords.left) + (parent.offsetWidth - tooltip.offsetWidth) / 2;
    }

    switch (posVertical) {
      case "center":
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
        break;

      case "bottom":
        top = parseInt(parentCoords.bottom) + dist;
        break;

      default:
      case "top":
        top = parseInt(parentCoords.top) - tooltip.offsetHeight - dist;
    }

    left = left < 0 ? parseInt(parentCoords.left) : left;
    top = top < 0 ? parseInt(parentCoords.bottom) + dist : top;
    tooltip.style.left = left + "px";
    tooltip.style.top = top + pageYOffset + "px";
  }
};

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
/******/ 			0: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1], () => (__webpack_require__(0)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;