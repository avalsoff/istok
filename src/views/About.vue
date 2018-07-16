<template>
  <div class="wrapper">
    <app-header :heading="about[3]"></app-header>
    <main class="about">
      <small class="about__caption">{{ about[0] }}</small>
      <h2 class="about__heading">{{ about[1] }}</h2>
      <p class="about__text">{{ about[2] }}</p>
      <div class="about__services services">
        <h2 class="services__heading">
          Услуги компании:
        </h2>
        <ul class="services__list">
          <li class="services__item">
            <a href="#" class="services__link">Тренинг</a>
          </li>
          <li class="services__item">
            <a href="#" class="services__link">Коучинг</a>
          </li>
          <li class="services__item">
            <a href="#" class="services__link">Фасилитация</a>
          </li>
        </ul>
      </div>
      <img class="about__logo" src="../assets/istok-blue.png" alt='Бизнес-тренинги "Исток"'>
      <div  class="about__map">
        <yandex-map 
          :coords="[48.475367, 135.086793]"
          :scroll-zoom="false"
          zoom="14"
          style="width: 100%; height: 100%;"
        ><ymap-marker
            markerId="1"
            marker-type="placemark"
            :coords="[48.475367, 135.086793]"
          ></ymap-marker>
        </yandex-map>
      </div>
      <a class="about__link" href="http://www.tc-i.ru">www.tc-i.ru</a>
      <br>
      <a class="about__email" href="mailto:info@tc-i.ru">info@tc-i.ru</a>
      <br>
      <a class="about__tel" href="tel:+7421224-31-13">8 (4212) 24-31-13</a>
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
    width: 35%;
  }

  &__map {
    width: get-vw(320px);
    height: get-vw(180px);
  }

  &__link,
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
      background-image: url("../assets/chain.svg");  
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

  &__tel {
    margin-top: get-vw(15px);

    &::before {
      background-image: url("../assets/telephone.svg");      
    }
  }
}

.services {
  &__heading {
    font-size: 18px;
    font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
  }

  &__list {
    @include list-reboot;
  }

  &__item {
  }

  &__link {
    position: relative;
    text-decoration: none;
    color: #1C236E;
    font-size: 14px;
    &::before {
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      background-color: #EA7D00;
      top: 6px;
      left: -12px;
      border-radius: 50%;
    }

  }
}

</style>

<script>
import Header from '../components/Header';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'about'
  ]),
  components: {
    'app-header': Header,
    yandexMap,
    ymapMarker
  }
}
</script>