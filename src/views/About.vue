<template>
  <div class="wrapper">
    <app-header heading="О компании"></app-header>
    <main class="about">
      <small class="about__caption">Тренинги для бизнеса</small>
      <h2 class="about__heading">Наша история</h2>
      <p class="about__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquam optio quibusdam sapiente fuga, officiis quidem quam saepe debitis.</p>
      <img class="about__logo" src="../assets/istok-blue.png" alt='Бизнес-тренинги "Исток"'>
      <div  class="about__map">
        <!-- Map -->
      </div>
      <a class="about__tel" href="tel:+7421224-31-13">8 (4212) 24-31-13</a>
      <a  class="about__email" href="mailto:info@tc-i.ru">info@tc-i.ru</a>
      <p class="about__text" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquam optio quibusdam sapiente fuga, officiis quidem quam saepe debitis.</p>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  font-family: "Geometria", Arial, Helvetica, sans-serif;
  text-align: center;
}

.about {
  &__caption {
    display: block;
    margin-top: 30px;
    font-size: 12px;
    color: #000000;
    opacity: 0.3;
  }

  &__heading {
    font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  &__text {
    font-size: 14px;
    padding: 0 35px;
    margin-bottom: 0;
  }

  &__logo {
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
  }

  &__map {
    width: 320px;
    height: 180px;
    background-color: #ccc;
  }

  &__tel,
  &__email {
    margin-top: 25px;
    text-decoration: none;
    display: block;
    color: #1C236E;
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
    line-height: normal;
    font-size: 14px;
  }

  &__email {
    margin-top: 15px;
  }
}
</style>

<script>
import Header from '../components/Header';

export default {
  components: {
    'app-header': Header
  }
}
</script>