import hcOffcanvasNav from 'hc-offcanvas-nav';
import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {

  var Nav = new hcOffcanvasNav('#main-nav', {
    disableAt: 1024,
    customToggle: '.burger',
    navTitle: 'All Categories',
    levelTitles: true,
    levelTitleAsBack: true
  });

   const faqList = new Accordion('.faq-list');

});

