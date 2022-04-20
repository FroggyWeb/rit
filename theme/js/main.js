/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
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

/***/ 139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_0__);

const btnMore = document.querySelector('.button-article-more .btn');

if (btnMore) {
  btnMore.addEventListener('click', () => {
    btnMore.closest('.article--limited').classList.remove('article--limited');
  });
}

const mix = document.querySelector('.js-mixitup');

if (mix) {
  const mixer = mixitup__WEBPACK_IMPORTED_MODULE_0___default()(mix);
}

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _vendor_pristine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var _vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_pristine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);



_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind('[data-fancybox="form"]', {
  groupAll: false,
  groupAttr: false
});
const inpTel = document.querySelectorAll('[type^="tel"]');
inpTel.forEach(el => {
  el.addEventListener('focus', e => {
    let phone = (0,imask__WEBPACK_IMPORTED_MODULE_2__["default"])(el, {
      mask: '+{7}(000)000-00-00',
      lazy: false
    });
  });
});
_vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default().addMessages('en', {
  required: "Обязательное поле",
  email: "Неправильный адрес e-mail"
});
_vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default().addValidator("tel", function (val) {
  const tel = new RegExp('[+]7[\(0-9\)]{5}[(0-9)]{3}.[(0-9)]{2}.[(0-9)]{2}').test(val);
  return !val || tel;
}, "Неправильный формат телефона", 5, false);
const ansverForm = '<div class="answer-form form-center "><div class="btn btn--title btn-center">Успешная заявка</div><div class="form__title">Ваша заявка успешно отправлена!</div><p class="form__txt">Мы свяжемся с вами в течение 15 минут и проконсультируем по всем интересующим вас вопросам</p></div>';
const forms = document.querySelectorAll(".form");
forms.forEach(el => {
  const pristine = new (_vendor_pristine__WEBPACK_IMPORTED_MODULE_1___default())(el);
  el.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate();

    if (valid) {
      _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.close();
      e.target.reset();
      _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.show([{
        src: ansverForm,
        type: "html"
      }]); //   let formData = new FormData(e.target);
      //   fetch('/', {
      //   method: 'POST',
      //   body: formData
      // }).then(function(response) {
      //   return response.text()
      // }).then(function(text) {
      //     //text is the server's response
      // });
    }
  });
});

/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);



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
  const logo = document.querySelector('.header__logo');
  const phone = document.querySelector('.header__contacts--tel').cloneNode(true);
  const phone2 = phone.cloneNode(true);
  const addr = document.querySelector('.header__contacts--addr').cloneNode(true);
  const btnHelp = document.querySelector('.footer-about__right .btn').cloneNode(true);
  const Nav = new (hc_offcanvas_nav__WEBPACK_IMPORTED_MODULE_0___default())('#main-nav', {
    disableAt: 1024,
    customToggle: '.burger',
    pushContent: '.page',
    navTitle: false,
    levelTitles: true,
    levelTitleAsBack: true,
    levelOpen: "overlap",
    labelBack: "Назад",
    navTitle: logo,
    width: 300
  }); // insert addition element

  const navHeader = document.querySelector('#hc-nav-1 .nav-title');
  const navBody = document.querySelector('#hc-nav-1 .nav-content');
  const navfooter = document.createElement("div");
  const formCall = document.getElementById('form-call-modal');
  navHeader.appendChild(phone);
  navfooter.classList.add('mob-nav-footer');
  navfooter.appendChild(addr);
  navfooter.appendChild(phone2);
  navfooter.appendChild(btnHelp);
  navBody.appendChild(navfooter);
  btnHelp.addEventListener('click', e => {
    e.preventDefault();
    Nav.close(); // console.log(formCall)

    const fancybox = new _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox([{
      src: formCall,
      type: "html"
    }]);
  }); //  const faqList =  new BadgerAccordion('.js-badger-accordion');
});

/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);


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
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.bind('[data-fancybox="gallery"]', {});

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
/* harmony import */ var _component_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);
/* harmony import */ var _component_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(110);
/* harmony import */ var _component_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111);
/* harmony import */ var _component_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(139);








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

/***/ 112:
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  var lang = {
    en: {
      required: "This field is required",
      email: "This field requires a valid e-mail address",
      number: "This field requires a number",
      integer: "This field requires an integer value",
      url: "This field requires a valid website URL",
      tel: "This field requires a valid telephone number",
      maxlength: "This fields length must be < ${1}",
      minlength: "This fields length must be > ${1}",
      min: "Minimum value for this field is ${1}",
      max: "Maximum value for this field is ${1}",
      pattern: "Please match the requested format",
      equals: "The two fields do not match"
    }
  };

  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) {}

    return el;
  }

  function tmpl(o) {
    var _arguments = arguments;
    return this.replace(/\${([^{}]*)}/g, function (a, b) {
      return _arguments[b];
    });
  }

  function groupedElemCount(input) {
    return input.pristine.self.form.querySelectorAll('input[name="' + input.getAttribute('name') + '"]:checked').length;
  }

  function mergeConfig(obj1, obj2) {
    for (var attr in obj2) {
      if (!(attr in obj1)) {
        obj1[attr] = obj2[attr];
      }
    }

    return obj1;
  }

  var defaultConfig = {
    classTo: 'form-group',
    errorClass: 'has-danger',
    successClass: 'has-success',
    errorTextParent: 'form-group',
    errorTextTag: 'div',
    errorTextClass: 'text-help'
  };
  var PRISTINE_ERROR = 'pristine-error';
  var SELECTOR = "input:not([type^=hidden]):not([type^=submit]), select, textarea";
  var ALLOWED_ATTRIBUTES = ["required", "min", "max", 'minlength', 'maxlength', 'pattern'];
  var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var MESSAGE_REGEX = /-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/; // matches, -message, -message-en, -message-en_US

  var currentLocale = 'en';
  var validators = {};

  var _ = function _(name, validator) {
    validator.name = name;
    if (validator.priority === undefined) validator.priority = 1;
    validators[name] = validator;
  };

  _('text', {
    fn: function fn(val) {
      return true;
    },
    priority: 0
  });

  _('required', {
    fn: function fn(val) {
      return this.type === 'radio' || this.type === 'checkbox' ? groupedElemCount(this) : val !== undefined && val !== '';
    },
    priority: 99,
    halt: true
  });

  _('email', {
    fn: function fn(val) {
      return !val || EMAIL_REGEX.test(val);
    }
  });

  _('number', {
    fn: function fn(val) {
      return !val || !isNaN(parseFloat(val));
    },
    priority: 2
  });

  _('integer', {
    fn: function fn(val) {
      return !val || /^\d+$/.test(val);
    }
  });

  _('minlength', {
    fn: function fn(val, length) {
      return !val || val.length >= parseInt(length);
    }
  });

  _('maxlength', {
    fn: function fn(val, length) {
      return !val || val.length <= parseInt(length);
    }
  });

  _('min', {
    fn: function fn(val, limit) {
      return !val || (this.type === 'checkbox' ? groupedElemCount(this) >= parseInt(limit) : parseFloat(val) >= parseFloat(limit));
    }
  });

  _('max', {
    fn: function fn(val, limit) {
      return !val || (this.type === 'checkbox' ? groupedElemCount(this) <= parseInt(limit) : parseFloat(val) <= parseFloat(limit));
    }
  });

  _('pattern', {
    fn: function fn(val, pattern) {
      var m = pattern.match(new RegExp('^/(.*?)/([gimy]*)$'));
      return !val || new RegExp(m[1], m[2]).test(val);
    }
  });

  _('equals', {
    fn: function fn(val, otherFieldSelector) {
      var other = document.querySelector(otherFieldSelector);
      return other && (!val && !other.value || other.value === val);
    }
  });

  function Pristine(form, config, live) {
    var self = this;
    init(form, config, live);

    function init(form, config, live) {
      form.setAttribute("novalidate", "true");
      self.form = form;
      self.config = mergeConfig(config || {}, defaultConfig);
      self.live = !(live === false);
      self.fields = Array.from(form.querySelectorAll(SELECTOR)).map(function (input) {
        var fns = [];
        var params = {};
        var messages = {};
        [].forEach.call(input.attributes, function (attr) {
          if (/^data-pristine-/.test(attr.name)) {
            var name = attr.name.substr(14);
            var messageMatch = name.match(MESSAGE_REGEX);

            if (messageMatch !== null) {
              var locale = messageMatch[1] === undefined ? 'en' : messageMatch[1];
              if (!messages.hasOwnProperty(locale)) messages[locale] = {};
              messages[locale][name.slice(0, name.length - messageMatch[0].length)] = attr.value;
              return;
            }

            if (name === 'type') name = attr.value;

            _addValidatorToField(fns, params, name, attr.value);
          } else if (~ALLOWED_ATTRIBUTES.indexOf(attr.name)) {
            _addValidatorToField(fns, params, attr.name, attr.value);
          } else if (attr.name === 'type') {
            _addValidatorToField(fns, params, attr.value);
          }
        });
        fns.sort(function (a, b) {
          return b.priority - a.priority;
        });
        self.live && input.addEventListener(!~['radio', 'checkbox'].indexOf(input.getAttribute('type')) ? 'input' : 'change', function (e) {
          self.validate(e.target);
        }.bind(self));
        return input.pristine = {
          input: input,
          validators: fns,
          params: params,
          messages: messages,
          self: self
        };
      }.bind(self));
    }

    function _addValidatorToField(fns, params, name, value) {
      var validator = validators[name];

      if (validator) {
        fns.push(validator);

        if (value) {
          var valueParams = name === "pattern" ? [value] : value.split(',');
          valueParams.unshift(null); // placeholder for input's value

          params[name] = valueParams;
        }
      }
    }
    /***
     * Checks whether the form/input elements are valid
     * @param input => input element(s) or a jquery selector, null for full form validation
     * @param silent => do not show error messages, just return true/false
     * @returns {boolean} return true when valid false otherwise
     */


    self.validate = function (input, silent) {
      silent = input && silent === true || input === true;
      var fields = self.fields;

      if (input !== true && input !== false) {
        if (input instanceof HTMLElement) {
          fields = [input.pristine];
        } else if (input instanceof NodeList || input instanceof (window.$ || Array) || input instanceof Array) {
          fields = Array.from(input).map(function (el) {
            return el.pristine;
          });
        }
      }

      var valid = true;

      for (var i = 0; fields[i]; i++) {
        var field = fields[i];

        if (_validateField(field)) {
          !silent && _showSuccess(field);
        } else {
          valid = false;
          !silent && _showError(field);
        }
      }

      return valid;
    };
    /***
     * Get errors of a specific field or the whole form
     * @param input
     * @returns {Array|*}
     */


    self.getErrors = function (input) {
      if (!input) {
        var erroneousFields = [];

        for (var i = 0; i < self.fields.length; i++) {
          var field = self.fields[i];

          if (field.errors.length) {
            erroneousFields.push({
              input: field.input,
              errors: field.errors
            });
          }
        }

        return erroneousFields;
      }

      if (input.tagName && input.tagName.toLowerCase() === "select") {
        return input.pristine.errors;
      }

      return input.length ? input[0].pristine.errors : input.pristine.errors;
    };
    /***
     * Validates a single field, all validator functions are called and error messages are generated
     * when a validator fails
     * @param field
     * @returns {boolean}
     * @private
     */


    function _validateField(field) {
      var errors = [];
      var valid = true;

      for (var i = 0; field.validators[i]; i++) {
        var validator = field.validators[i];
        var params = field.params[validator.name] ? field.params[validator.name] : [];
        params[0] = field.input.value;

        if (!validator.fn.apply(field.input, params)) {
          valid = false;

          if (typeof validator.msg === "function") {
            errors.push(validator.msg(field.input.value, params));
          } else if (typeof validator.msg === "string") {
            errors.push(tmpl.apply(validator.msg, params));
          } else if (validator.msg === Object(validator.msg) && validator.msg[currentLocale]) {
            // typeof generates unnecessary babel code
            errors.push(tmpl.apply(validator.msg[currentLocale], params));
          } else if (field.messages[currentLocale] && field.messages[currentLocale][validator.name]) {
            errors.push(tmpl.apply(field.messages[currentLocale][validator.name], params));
          } else if (lang[currentLocale] && lang[currentLocale][validator.name]) {
            errors.push(tmpl.apply(lang[currentLocale][validator.name], params));
          }

          if (validator.halt === true) {
            break;
          }
        }
      }

      field.errors = errors;
      return valid;
    }
    /***
     * Add a validator to a specific dom element in a form
     * @param elem => The dom element where the validator is applied to
     * @param fn => validator function
     * @param msg => message to show when validation fails. Supports templating. ${0} for the input's value, ${1} and
     * so on are for the attribute values
     * @param priority => priority of the validator function, higher valued function gets called first.
     * @param halt => whether validation should stop for this field after current validation function
     */


    self.addValidator = function (elem, fn, msg, priority, halt) {
      if (elem instanceof HTMLElement) {
        elem.pristine.validators.push({
          fn: fn,
          msg: msg,
          priority: priority,
          halt: halt
        });
        elem.pristine.validators.sort(function (a, b) {
          return b.priority - a.priority;
        });
      } else {
        console.warn("The parameter elem must be a dom element");
      }
    };
    /***
     * An utility function that returns a 2-element array, first one is the element where error/success class is
     * applied. 2nd one is the element where error message is displayed. 2nd element is created if doesn't exist and cached.
     * @param field
     * @returns {*}
     * @private
     */


    function _getErrorElements(field) {
      if (field.errorElements) {
        return field.errorElements;
      }

      var errorClassElement = findAncestor(field.input, self.config.classTo);
      var errorTextParent = null,
          errorTextElement = null;

      if (self.config.classTo === self.config.errorTextParent) {
        errorTextParent = errorClassElement;
      } else {
        errorTextParent = errorClassElement.querySelector('.' + self.config.errorTextParent);
      }

      if (errorTextParent) {
        errorTextElement = errorTextParent.querySelector('.' + PRISTINE_ERROR);

        if (!errorTextElement) {
          errorTextElement = document.createElement(self.config.errorTextTag);
          errorTextElement.className = PRISTINE_ERROR + ' ' + self.config.errorTextClass;
          errorTextParent.appendChild(errorTextElement);
          errorTextElement.pristineDisplay = errorTextElement.style.display;
        }
      }

      return field.errorElements = [errorClassElement, errorTextElement];
    }

    function _showError(field) {
      var errorElements = _getErrorElements(field);

      var errorClassElement = errorElements[0],
          errorTextElement = errorElements[1];

      if (errorClassElement) {
        errorClassElement.classList.remove(self.config.successClass);
        errorClassElement.classList.add(self.config.errorClass);
      }

      if (errorTextElement) {
        errorTextElement.innerHTML = field.errors.join('<br/>');
        errorTextElement.style.display = errorTextElement.pristineDisplay || '';
      }
    }
    /***
     * Adds error to a specific field
     * @param input
     * @param error
     */


    self.addError = function (input, error) {
      input = input.length ? input[0] : input;
      input.pristine.errors.push(error);

      _showError(input.pristine);
    };

    function _removeError(field) {
      var errorElements = _getErrorElements(field);

      var errorClassElement = errorElements[0],
          errorTextElement = errorElements[1];

      if (errorClassElement) {
        // IE > 9 doesn't support multiple class removal
        errorClassElement.classList.remove(self.config.errorClass);
        errorClassElement.classList.remove(self.config.successClass);
      }

      if (errorTextElement) {
        errorTextElement.innerHTML = '';
        errorTextElement.style.display = 'none';
      }

      return errorElements;
    }

    function _showSuccess(field) {
      var errorClassElement = _removeError(field)[0];

      errorClassElement && errorClassElement.classList.add(self.config.successClass);
    }
    /***
     * Resets the errors
     */


    self.reset = function () {
      for (var i = 0; self.fields[i]; i++) {
        self.fields[i].errorElements = null;
      }

      Array.from(self.form.querySelectorAll('.' + PRISTINE_ERROR)).map(function (elem) {
        elem.parentNode.removeChild(elem);
      });
      Array.from(self.form.querySelectorAll('.' + self.config.classTo)).map(function (elem) {
        elem.classList.remove(self.config.successClass);
        elem.classList.remove(self.config.errorClass);
      });
    };
    /***
     * Resets the errors and deletes all pristine fields
     */


    self.destroy = function () {
      self.reset();
      self.fields.forEach(function (field) {
        delete field.input.pristine;
      });
      self.fields = [];
    };

    self.setGlobalConfig = function (config) {
      defaultConfig = config;
    };

    return self;
  }
  /***
   *
   * @param name => Name of the global validator
   * @param fn => validator function
   * @param msg => message to show when validation fails. Supports templating. ${0} for the input's value, ${1} and
   * so on are for the attribute values
   * @param priority => priority of the validator function, higher valued function gets called first.
   * @param halt => whether validation should stop for this field after current validation function
   */


  Pristine.addValidator = function (name, fn, msg, priority, halt) {
    _(name, {
      fn: fn,
      msg: msg,
      priority: priority,
      halt: halt
    });
  };

  Pristine.addMessages = function (locale, messages) {
    var langObj = lang.hasOwnProperty(locale) ? lang[locale] : lang[locale] = {};
    Object.keys(messages).forEach(function (key, index) {
      langObj[key] = messages[key];
    });
  };

  Pristine.setLocale = function (locale) {
    currentLocale = locale;
  };

  return Pristine;
});

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2], () => (__webpack_require__(0)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;