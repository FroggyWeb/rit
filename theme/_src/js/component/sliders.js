import Swiper, { Navigation, Pagination } from "swiper";

const introSlider = new Swiper(".intro-slider", {
  modules: [Navigation, Pagination],
  createElements: true,
  loop: true,
  navigation: true,
  pagination: true,
});

export default introSlider;
