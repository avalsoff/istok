<template>
  <div class="wrapper">
    <app-header heading="О компании"></app-header>
    <main class="about">
      <small>Тренинги для бизнеса</small>
      <h2>Наша история</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquam optio quibusdam sapiente fuga, officiis quidem quam saepe debitis.</p>
      <img src="../assets/istok-blue.png" alt='Бизнес-тренинги "Исток"'>
      <div class="map">
        <!-- Map -->
      </div>
      <a href="tel:+7421224-31-13">8 (4212) 24-31-13</a>
      <a href="mailto:info@tc-i.ru">info@tc-i.ru</a>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquam optio quibusdam sapiente fuga, officiis quidem quam saepe debitis.</p>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from '../components/Header';

export default {
  components: {
    'app-header': Header
  }
}
</script>