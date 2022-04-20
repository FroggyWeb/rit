import hcOffcanvasNav from 'hc-offcanvas-nav';

function initAcc(elem, option, media){
  document.addEventListener('click', function (e) {
    if (!e.target.closest(elem + ' .a-btn')) {
      return
    };
    if (media && !window.matchMedia(`(max-width: ${media})`).matches)  return;
    else {
      e.preventDefault()
      const panel = e.target.closest('.a-item')
      if(!panel.classList.contains('active')){
        if (option == true) {
          var elementList = document.querySelectorAll(elem + ' > .a-item');
          Array.prototype.forEach.call(elementList, function (e) {
              e.classList.remove('active');
          });
        }
        panel.classList.add('active');
      }else{
          panel.classList.remove('active');
      }
    }
});
}

initAcc('.faq-list', true);
initAcc('.footer-nav', true);

document.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.header__logo')
  const Nav = new hcOffcanvasNav('#main-nav', {
    disableAt: 1024,
    customToggle: '.burger',
    navTitle: false,
    levelTitles: true,
    levelTitleAsBack: true,
    levelOpen: "overlap",
    labelBack: "Назад",
    navTitle: logo
  });

  //  const faqList =  new BadgerAccordion('.js-badger-accordion');

});

