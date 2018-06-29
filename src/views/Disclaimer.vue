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
      <router-link class="disclaimer__go-to-cards" tag="a" to="/card">Далее</router-link>
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
  computed: mapState({
    disclaimer: state => state.disclaimer
  }),
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
  font-size: 14px;
  font-family: "Geometria", Arial, Helvetica, sans-serif;
  color: #fff;
  background-color: #EA7D00;
  padding: 30px 35px;
  background-repeat: no-repeat;
  background-image: url('../assets/istok-white.png');
  background-position: 50% 94%;
}

.disclaimer {
  &__hashtag {
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
  }

  &__text-wrapper {
    margin-top: 20px;
  }

  &__text {
    font-family: "Geometria Light", Arial, Helvetica, sans-serif;
    line-height: 21px;
    text-indent: -4px;
  }

  &__go-to-cards {
    position: relative;
    display: inline-block;
    margin-top: 5px;
    color: #fff;
    text-decoration: none;
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
    
    &::after {
      position: absolute;
      top: -2px;
      right: -32px;
      content: "";
      width: 24px;
      height: 24px;
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