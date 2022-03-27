import hcOffcanvasNav from 'hc-offcanvas-nav';

document.addEventListener('DOMContentLoaded', function () {

  var Nav = new hcOffcanvasNav('#main-nav', {
    disableAt: 1024,
    customToggle: '.burger',
    navTitle: 'All Categories',
    levelTitles: true,
    levelTitleAsBack: true
  });

});
