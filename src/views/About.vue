<template>
  <div class="wrapper">
    <app-header heading="О компании"></app-header>
    <main class="about">
      <small class="about__caption">Тренинги для бизнеса</small>
      <h2 class="about__heading">Наша история</h2>
      <p class="about__text">Тренинг-центр «Исток» находится в городе Хабаровск. 
Мы работаем на территории всего Дальнего Востока и за его пределами. 
Клиентами коучинга, менторинга могут стать жители любой точки мира, достаточно иметь доступ к Skype.</p>
      <img class="about__logo" src="../assets/istok-blue.png" alt='Бизнес-тренинги "Исток"'>
      <div  class="about__map">
        <yandex-map 
          :coords="[48.475367, 135.086793]"
          :scroll-zoom="false"
          :controls='["smallMapDefaultSet"]'
          zoom="14"
          style="width: 100%; height: 100%;"
        ><ymap-marker
            markerId="1"
            marker-type="placemark"
            :coords="[48.475367, 135.086793]"
          ></ymap-marker>
        </yandex-map>
      </div>
      <a class="about__tel" href="tel:+7421224-31-13">8 (4212) 24-31-13</a>
      <br>
      <a  class="about__email" href="mailto:info@tc-i.ru">info@tc-i.ru</a>
      <!-- <p class="about__text" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquam optio quibusdam sapiente fuga, officiis quidem quam saepe debitis.</p> -->
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixins";

.wrapper {
  font-family: "Geometria", Arial, Helvetica, sans-serif;
  text-align: center;
}

.about {
  &__caption {
    display: block;
    margin-top: get-vw(30px);
    font-size: get-vw(12px);
    color: #000000;
    opacity: 0.3;
  }

  &__heading {
    font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
    font-size: get-vw(28px);
    margin-top: 0;
    margin-bottom: get-vw(15px);
  }

  &__text {
    font-size: get-vw(14px);
    padding: 0 get-vw(35px);
    margin-bottom: 0;
    text-align: left;
  }

  &__logo {
    display: inline-block;
    vertical-align: top;
    margin-top: get-vw(25px);
    margin-bottom: get-vw(20px);
    width: 65%;
  }

  &__map {
    width: get-vw(320px);
    height: get-vw(180px);
  }

  &__tel,
  &__email {
    position: relative;
    margin-top: get-vw(25px);
    text-decoration: none;
    display: inline-block;
    color: #1C236E;
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
    line-height: normal;
    font-size: get-vw(14px);

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: -25px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-size: contain;          
      background-image: url("../assets/telephone.svg");  
    }
  }

  &__email {
    margin-top: get-vw(15px);

    &::before {
      background-image: url("../assets/mail.svg");
      top: 1px;
      left: -27px;         
    }
  }
}
</style>

<script>
import Header from '../components/Header';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  components: {
    'app-header': Header,
    yandexMap,
    ymapMarker
  }
}
</script>