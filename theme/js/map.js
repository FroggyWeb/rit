/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const APIYandex = 'b0a390a5-1d8f-43b3-aa72-4e632db36295';

const loadScript = (url, callback) => {
  const script = document.createElement('script');
  script.addEventListener('load', () => {
    callback();
  });
  script.src = url;
  document.body.append(script);
};

loadScript(`https://api-maps.yandex.ru/2.1/?apikey=${APIYandex}&lang=ru_RU`, () => {
  ymaps.ready(init);

  function init() {
    const contactMap = new ymaps.Map("map", {
      center: [59.92154775321649, 30.32832846308001],
      zoom: 15,
      controls: ['fullscreenControl', 'zoomControl']
    });
    const contactOffice = new ymaps.Placemark([59.92154775321649, 30.32832846308001], {
      hintContent: 'Офис',
      balloonContentHeader: "Балун метки",
      balloonContentBody: "Содержимое <em>балуна</em> метки",
      balloonContentFooter: "Подвал"
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map_marker.svg',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -20]
    });
    contactMap.behaviors.disable('scrollZoom');
    contactMap.geoObjects.add(contactOffice);
  }
});
/******/ })()
;