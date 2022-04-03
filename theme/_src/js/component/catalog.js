import noUiSlider from 'nouislider';

const priceRange = () => {
  const priceRange = document.getElementById('filter-price__range');
  const inputMin = document.getElementById('fprice_from');
  const inputMax = document.getElementById('fprice_to');
  if (!priceRange || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax];
  noUiSlider.create(priceRange, { // инициализируем слайдер
    connect: true, // указываем что нужно показывать выбранный диапазон
    start: [0, inputMax.value],
      range: {
        'min': 0,
        'max': inputMax.value*1
    },
      step: 100, // шаг изменения значений
    }
  )
  priceRange.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    priceRange.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    priceRange.noUiSlider.set([null, this.value]);
  });
}

priceRange();


