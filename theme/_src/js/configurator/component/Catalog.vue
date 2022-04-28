<template>
  <div class="article-aside"></div>
  <main class="article-main">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <a href="#" class="breadcrumbs__link">Главная</a>
      </li>
      <li class="breadcrumbs__item">
        <span class="breadcrumbs__link">Калькулятор тарифов</span>
      </li>
    </ul>
    <h1 class="title-section">Ваши товары и услуги</h1>
    <div class="conf-app-intro">
      <div class="conf-app-intro__info">
        <div class="conf-app-intro-info__title">Что такое конфигуратор?</div>
        <p class="conf-app-intro-info__txt">Конфигуратор позволяет вам составить собственный тариф, выбрав только самые важные услуги и товары для комплекта</p>
        <div class="conf-app-intro__cart">
          <InfoCart/>
          <div class="info-cart"></div>
        </div>
      </div>
      <Cart />
    </div>
  </main>
</template>

<script>
  import Cart from "./Cart.vue"
  import InfoCart from "./InfoCart.vue"
  export default {
    data() {
    return {
      icoProdCart: '../../../../img/cart-prod.svg'
    };
  },
  components: {
    Cart,
    InfoCart
  },
  }
</script>
