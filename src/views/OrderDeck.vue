<template>
  <div class="wrapper">
    <app-header :heading="orderDeck.heading" back="true"></app-header>
    <main class="order-deck">
      <div class="order-deck__image">
      </div>
      <form v-if="!success" class="order-deck__form" action="">
        <input 
          class="order-deck__input" 
          type="text" 
          name="Name" 
          id="name" 
          :placeholder="orderDeck.name"
        >
        <input 
          class="order-deck__input" 
          type="tel" 
          name="Tel" 
          id="tel" 
          :placeholder="orderDeck.phone"
        >
        <button 
          @click="success=true" 
          class="order-deck__submit" 
          type="button"
        >
          {{ orderDeck.order }}
        </button>
      </form>
      <div v-if="success" class="order-deck__succes">
        <p class="order-deck__succes-text">
          {{ orderDeck.successText }}
        </p>
        <button @click="success=false" class="order-deck__back" type="button">
          {{ orderDeck.backButton }}
        </button>
      </div>
      <div class="order-deck__wave-img">
      </div>
    </main>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/mixins";

.wrapper {
  font-family: 'Geometria', Arial, Helvetica, sans-serif;
  font-size: get-vw(14px);
}

.order-deck {
  &__image {
    width: get-vw(185px);
    height: get-vw(185px);
    background-color: #fff;
    border-radius: 50%;
    margin: 0 auto;
    background-image: url('../assets/cards-mock.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 0; 
    border: get-vw(5px) solid #ea7d00;
    box-shadow: get-vw(0px) get-vw(20px) get-vw(30px) rgba(0, 0, 0, 0.15);
    margin-top: get-vw(22px);
  }

  &__form {
    margin-top: get-vw(40px);
  }

  &__input {
    display: block;
    margin: 0 auto;
    margin-bottom: get-vw(20px);
    text-align: center;
    border-radius: get-vw(7px);
    padding: get-vw(10px) get-vw(10px) get-vw(10px);
    border: none;
    background: rgba(#1C236E, .1);
    color: rgba(#000, .3);
    font-size: get-vw(14px);
    margin: get-vw(20px) auto 0;
    width: get-vw(200px);
    border: get-vw(1px) solid transparent;    
    font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
    

    &:focus {
      outline: none;
      border: get-vw(1px) solid  #1C236E;
      background-color: #fff;
      color: #000;
    }

    &:focus::placeholder {
      color: #000;
    }

    &::placeholder {
      color: rgba($color: #000, $alpha: .3);
      font-size: get-vw(14px);
    }
  }

  &__submit {
    display: block;
    margin: 0 auto;
    margin-top: get-vw(20px);
    border-radius: get-vw(20px);
    color: #fff;
    border: none;
    background-color: #1E226D;
    font-size: get-vw(12px);
    padding: get-vw(11px) get-vw(12px);
    width: get-vw(120px);
    font-family: 'Geometria Bold', Arial, Helvetica, sans-serif;
  }

  &__wave-img {
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url('../assets/wave-blue.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 get-vw(-30px);
    width: 100%;
    height: get-vw(100px);
    transform: rotateX(-180deg);
  }

  &__succes {
    text-align: center;
    padding: get-vw(35px);
  }

  &__back {
    position: relative;
    appearance: none;
    margin-top: get-vw(20px);
    border: none;
    background: 0;
    font-size: get-vw(14px);
    color: #1C236E;
    font-family: 'Geometria Bold', Arial, Helvetica, sans-serif;

    &::before {
      position: absolute;
      top: get-vw(-2px);
      left: get-vw(-28px);
      content: "";
      width: get-vw(24px);
      height: get-vw(24px);
      background-color: #1C236E;
      border-radius: 50%;
      background-image: url("../assets/deck-arrow-left.svg");
      background-repeat: no-repeat;
      background-size: 35%;
      background-position: 45% 50%;
    }
  }
}
</style>

<script>
import Header from '../components/Header';
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'orderDeck'
  ]),
  data() {
    return {
      success: false
    }
  },
  components: {
    'app-header': Header
  }
}
</script>