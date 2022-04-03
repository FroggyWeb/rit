import Swiper from 'swiper';
import tooltip from '../vendor/vanilla-js-tooltip';
import { Fancybox, Panzoom } from "@fancyapps/ui";

const prodMain = new Swiper('.product-slider-main', {
  createElements: true,
  slidesPerView: 1,
});

const prodThumb = new Swiper('.product-slider-thumb', {
  createElements: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1400: {
      direction: 'vertical',
    }
  },
});

prodThumb.on('click', function (swiper) {
  prodMain.slideTo(swiper.clickedIndex)
})

const tips = new Tooltip({
  theme: "light",
  distance: 20
});

Fancybox.bind('[data-fancybox="gallery"]', {



})
