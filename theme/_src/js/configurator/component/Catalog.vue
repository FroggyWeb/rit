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
      </div>
      <div class="conf-app-intro__cart">
        <div class="info-cart"></div>
        <div class="info-cart"></div>
      </div>
    </div>
    <Cart />
  </main>
</template>
