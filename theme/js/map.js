/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/js/map.js":
/*!************************!*\
  !*** ./_src/js/map.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ \"./node_modules/.pnpm/@fancyapps+ui@4.0.26/node_modules/@fancyapps/ui/dist/fancybox.esm.js\");\n\nconst APIYandex = 'b0a390a5-1d8f-43b3-aa72-4e632db36295';\n\nconst loadScript = (url, callback) => {\n  const script = document.createElement('script');\n  script.addEventListener('load', () => {\n    callback();\n  });\n  script.src = url;\n  document.body.append(script);\n};\n\nloadScript(`https://api-maps.yandex.ru/2.1/?apikey=${APIYandex}&lang=ru_RU`, () => {\n  const contact = document.getElementById('map');\n\n  if (contact) {\n    ymaps.ready(init);\n  }\n\n  function init() {\n    const contactMap = new ymaps.Map(\"map\", {\n      center: [59.92154775321649, 30.32832846308001],\n      zoom: 15,\n      controls: ['fullscreenControl', 'zoomControl']\n    });\n    const contactOffice = new ymaps.Placemark([59.92154775321649, 30.32832846308001], {\n      hintContent: 'Офис',\n      balloonContentHeader: \"Балун метки\",\n      balloonContentBody: \"Содержимое <em>балуна</em> метки\",\n      balloonContentFooter: \"Подвал\"\n    }, {\n      iconLayout: 'default#image',\n      iconImageHref: '../img/map_marker.svg',\n      iconImageSize: [40, 40],\n      iconImageOffset: [-20, -20]\n    });\n    contactMap.behaviors.disable('scrollZoom');\n    contactMap.geoObjects.add(contactOffice);\n  }\n}); // Показ места на карте\n\nconst linkMap = document.querySelectorAll('.service-card__map-link');\n\nif (linkMap.length > 0) {\n  document.addEventListener('click', e => {\n    if (!e.target.classList.contains('service-card__map-link')) return;\n    e.preventDefault();\n    let coord = e.target.dataset.map.split(',');\n    const addrMapWrap = document.createElement(\"div\");\n    addrMapWrap.setAttribute('id', 'addr-map');\n    addrMapWrap.style.cssText += 'width:100%;height:600px;';\n    console.log(document.body);\n    document.body.append(addrMapWrap); //Данные карточки\n\n    const card = e.target.closest('.service-card'),\n          cardName = card.querySelector('.service-card__title').textContent,\n          cardAddr = card.querySelector('.js-addr').textContent,\n          cardTel = card.querySelector('.js-tel').textContent,\n          cardTime = card.querySelector('.js-time').textContent;\n    console.log(cardName);\n    ymaps.ready(addr);\n\n    function addr() {\n      const addrMap = new ymaps.Map(\"addr-map\", {\n        center: coord,\n        zoom: 15,\n        controls: ['fullscreenControl', 'zoomControl']\n      });\n      const contactOffice = new ymaps.Placemark(coord, {\n        balloonContentHeader: cardName,\n        balloonContentBody: `<b>Телефон:</b> ${cardTel} <br> <b>Время работы:</b> ${cardTime} <br> <b>Адрес:</b> ${cardAddr}`\n      }, {\n        iconLayout: 'default#image',\n        iconImageHref: '../img/map_marker.svg',\n        iconImageSize: [40, 40],\n        iconImageOffset: [-20, -20]\n      });\n      addrMap.behaviors.disable('scrollZoom');\n      addrMap.geoObjects.add(contactOffice);\n    }\n\n    const fmap = new _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox([{\n      src: addrMapWrap,\n      type: \"html\"\n    }]);\n  });\n}\n\n//# sourceURL=webpack://gulp4wp5/./_src/js/map.js?");

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
/******/ 			"map": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./_src/js/map.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;