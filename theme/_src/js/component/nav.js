import hcOffcanvasNav from 'hc-offcanvas-nav';
import { Fancybox } from "@fancyapps/ui";


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
  const phone = document.querySelector('.header__contacts--tel').cloneNode(true)
  const phone2 = phone.cloneNode(true)
  const addr = document.querySelector('.header__contacts--addr').cloneNode(true)
  const btnHelp = document.querySelector('.footer-about__right .btn').cloneNode(true)
  const Nav = new hcOffcanvasNav('#main-nav', {
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
  });

  // insert addition element
  const navHeader = document.querySelector('#hc-nav-1 .nav-title')
  const navBody = document.querySelector('#hc-nav-1 .nav-content')
  const navfooter = document.createElement("div")
  const formCall = document.getElementById('form-call-modal')

  navHeader.appendChild(phone)
  navfooter.classList.add('mob-nav-footer')
  navfooter.appendChild(addr)
  navfooter.appendChild(phone2)
  navfooter.appendChild(btnHelp)
  navBody.appendChild(navfooter)

  btnHelp.addEventListener('click', (e) => {
    e.preventDefault();
    Nav.close();
    // console.log(formCall)
    const fancybox = new Fancybox([
      {
        src: formCall,
        type: "html",
      },
    ]);
  })

  //  const faqList =  new BadgerAccordion('.js-badger-accordion');

});

