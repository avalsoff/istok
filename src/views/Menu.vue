<template>
  <div class="wrapper">
    <app-header :heading="menu[4]" back="true"></app-header>
    <main class="menu">
      <ul class="menu__items">
        <router-link tag="li" to="/card" class="menu__item menu__item--cards">
          <a class="menu__link">{{ menu[0] }}</a>
        </router-link>
        <router-link tag="li" to="/about" class="menu__item menu__item--company">
          <a class="menu__link">{{ menu[1] }}</a>
        </router-link>
        <router-link tag="li" to="/todo" class="menu__item menu__item--todos">
          <a class="menu__link">{{ menu[2] }}</a>
        </router-link>
        <!--<router-link tag="li" to="/orderdeck" class="menu__item menu__item&#45;&#45;deck">-->
          <!--<a class="menu__link">{{ menu[5] }}</a>-->
        <!--</router-link>-->
        <router-link tag="li" to="/settings" class="menu__item menu__item--settings">
          <a class="menu__link">{{ menu[3] }}</a>
        </router-link>     
      </ul>
    </main>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/mixins";

.wrapper {
  background-color: #1C236E;
  background-image: url('../assets/wave-blue.png'),
                    url('../assets/istok-white.png');
  background-repeat: no-repeat;
  background-position: 0 12%,
                       50% 96%;
  background-size: contain,
                   30%;
}

.menu {
  color: #fff;

  &__items {
    @include list-reboot();
    margin-left: get-vw(88px);
    margin-top: get-vw(144px);
  }

  &__item {
    position: relative;
    margin-bottom: get-vw(30px);

    &::before {
      position: absolute;
      top: get-vw(2px);
      left: get-vw(-29px);
      content: "";
      width: get-vw(14px);
      height: get-vw(14px);
      background-size: contain;
      background-repeat: no-repeat;
    }

    &--cards::before {
      background-image: url('../assets/cards.svg');
    }

    &--company::before {
      background-image: url('../assets/portfolio.svg');
    }

    &--todos::before {
      background-image: url('../assets/tasks.svg');
    }

    &--settings::before {
      background-image: url('../assets/settings.svg');
    }

    &--deck::before {
      background-image: url('../assets/deck.svg');
    }
  }

  &__link {
    font-size: get-vw(14px);
    font-family: 'Geometria Medium';
    color: #fff;
    text-decoration: none;
  }
}
</style>

<script>
import Header from '../components/Header';
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'menu'
  ]),
  components: {
    'app-header': Header
  }
}
</script>