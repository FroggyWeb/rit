import { Fancybox } from "@fancyapps/ui";
import Pristine from '../vendor/pristine';
import IMask from 'imask';

Fancybox.bind('[data-fancybox="form"]', {
  groupAll: false,
  groupAttr: false,
});

const inpTel = document.querySelectorAll('[type^="tel"]')
inpTel.forEach((el) => {
  el.addEventListener('focus', (e) => {
    let phone = IMask(el, {
      mask: '+{7}(000)000-00-00',
      lazy: false,
    })
  })
})

Pristine.addMessages('en', {
    required: "Обязательное поле",
    email: "Неправильный адрес e-mail",
})

Pristine.addValidator("tel", function(val) {
  const tel = new RegExp('[+]7[\(0-9\)]{5}[(0-9)]{3}.[(0-9)]{2}.[(0-9)]{2}').test(val);
  return !val || tel;
}, "Неправильный формат телефона", 5, false);

const ansverForm = '<div class="answer-form form-center "><div class="btn btn--title btn-center">Успешная заявка</div><div class="form__title">Ваша заявка успешно отправлена!</div><p class="form__txt">Мы свяжемся с вами в течение 15 минут и проконсультируем по всем интересующим вас вопросам</p></div>'

const forms = document.querySelectorAll(".form")
forms.forEach((el) => {
  const pristine = new Pristine(el);

  el.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate();
    if (valid) {
      Fancybox.close()
      e.target.reset()
      Fancybox.show([{
        src: ansverForm,
        type: "html"
      }])
    //   let formData = new FormData(e.target);
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
})
