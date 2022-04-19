import Swiper from 'swiper';
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



Fancybox.bind('[data-fancybox="gallery"]', {
})
