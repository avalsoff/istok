<template>
<v-touch 
  @swipeleft="goToCard">
  <div class="wrapper">
    <div class="disclaimer">
      <span class="disclaimer__hashtag">#50вопросов_исток</span>
      <div class="disclaimer__text-wrapper">
        <p class="disclaimer__text">
          {{ disclaimer[0] }}
        </p>
        <p class="disclaimer__text">
          {{ disclaimer[1] }}
        </p>
        <p class="disclaimer__text">
          {{ disclaimer[2] }}
        </p>
        <p class="disclaimer__text">
          {{ disclaimer[3] }}        
        </p>
        <p class="disclaimer__text">
          {{ disclaimer[4] }}        
        </p>
      </div>
      <router-link class="disclaimer__go-to-cards" tag="a" to="/card">{{ disclaimer[5] }}</router-link>
    </div>
  </div>
</v-touch>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
  name: 'Disclaimer',
  store,
  computed: mapState([
    'disclaimer'
  ]),
  methods: {
    goToCard() {
      this.$router.push('card');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/mixins";

.wrapper {
  font-size: get-vw(14px);
  font-family: "Geometria", Arial, Helvetica, sans-serif;
  color: #fff;
  background-color: #EA7D00;
  padding: get-vw(30px) get-vw(35px);
  background-repeat: no-repeat;
  background-image: url('../assets/istok-white.png');
  background-position: 50% 94%;
  background-size: 60%;
}

.disclaimer {
  &__hashtag {
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
  }

  &__text-wrapper {
    margin-top: get-vw(20px);
  }

  &__text {
    font-family: "Geometria Light", Arial, Helvetica, sans-serif;
    line-height: get-vw(21px);
    text-indent: get-vw(-4px);
  }

  &__go-to-cards {
    position: relative;
    display: inline-block;
    margin-top: get-vw(5px);
    color: #fff;
    text-decoration: none;
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
    
    &::after {
      position: absolute;
      top: get-vw(-2px);
      right: get-vw(-32px);
      content: "";
      width: get-vw(24px);
      height: get-vw(24px);
      background-color: #fff;
      border-radius: 50%;
      background-image: url("../assets/arrow-right.svg");
      background-repeat: no-repeat;
      background-size: 40%;
      background-position: 50% 50%;
    }
  }
}

</style>