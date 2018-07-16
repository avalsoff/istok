<template>
<v-touch 
  @swipeleft="goToCard">
  <div class="wrapper">
    <div class="disclaimer">
      <span class="disclaimer__hashtag">{{ disclaimer[7] }}</span>
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
        <div class="disclaimer__photo">
          <img src="../assets/Ekaterina.jpg" alt="Екатерина Костюкова">
        </div>
        <b class="disclaimer__name">
          {{ disclaimer[4] }}        
        </b>
        <p class="disclaimer__name-sign">
          {{ disclaimer[5] }}        
        </p>
      </div>
      <router-link class="disclaimer__go-to-cards" tag="a" to="/card">{{ disclaimer[6] }}</router-link>
    </div>
    <div class="disclaimer__wave-img">
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
  background-image: url('../assets/wave-disclaimer.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 100%;
  background-blend-mode: luminosity;
}

.disclaimer {
  &__hashtag {
    display: block;
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
    text-align: center;
  }

  &__text-wrapper {
    margin-top: get-vw(20px);
    text-align: center;
  }

  &__text {
    font-family: "Geometria", Arial, Helvetica, sans-serif;
    line-height: get-vw(21px);
    text-indent: get-vw(-4px);
  }

  &__photo {
    margin: 0 auto;
    width: get-vw(115px);
    border-radius: 50%;
    border: get-vw(3px) solid #fff;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__name {
    display: block;
    margin-top: get-vw(10px);
    position: relative;
    left: get-vw(-4px);    
  }

  &__name-sign {
    margin-top: get-vw(3px);
    font-family: "Geometria Light", Arial, Helvetica, sans-serif;
  }

  &__go-to-cards {
    position: relative;
    left: get-vw(-20px);
    display: block;
    width: get-vw(50px);
    margin: 0 auto;
    margin-top: get-vw(25px);
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