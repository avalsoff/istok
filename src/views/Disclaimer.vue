<template>
<v-touch 
  @swipeleft="goToCard">
  <div class="card">
    <span class="hashtag">#50вопросов_исток</span>
    <span class="bullets">&bull; &bull; &bull; </span>
    <div class="text-wrapper">
      <p class="text">
        {{ getDisclamerPart(0) }}
      </p>
      <p class="text">
        {{ getDisclamerPart(1) }}
      </p>
      <p class="text">
        {{ getDisclamerPart(2) }}
      </p>
      <p class="text">
        {{ getDisclamerPart(3) }}        
      </p>
      <em class="text em">
        {{ getDisclamerPart(4) }}        
      </em>
    </div>
    <div class="logo">
      <img class="logo-img" src="../assets/logo-disclaimer.png" alt="Тренинг центр - Исток">
    </div>
  </div>
</v-touch>
</template>

<script>
import store from '../store'

export default {
  name: 'Disclaimer',
  store,
  methods: {
    getDisclamerPart: function (i) {
      return this.$store.state.disclaimer[i];
    },
    goToCard: function () {
      this.$router.push('card');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bullets {
  display: block;
  line-height: 70px;
  font-size: 75px;
  font-family: Arial;
  text-align: center;
}

.card {
  position: relative;
  font-family: 'Geometria Light', Arial, Helvetica, sans-serif;
  overflow: hidden;
  height: 100vh;
  /* vh */
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  background-color: #F6751C;
  color: #fff;
  /* border: 1px solid #000; */
}

.hashtag {
  display: block;
  text-align: center;
  font-size: 32px;
  line-height: 58px;
  padding: 0 50px;
  margin-top: 7%;
}

.text-wrapper {
  position: relative;
  padding: 0 100px;
  height: 78vh;
  /* vh */
}

.text {
  margin-top: 0;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  line-height: 48px;
  width: 100%;
  max-width: 800px;
  text-align: left;
  text-indent: 40px;
  /* border: 1px solid #000; */
}

.logo {
  overflow: hidden;
  z-index: 99;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
}

.logo-img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 700px) {
  .hashtag {
    font-size: 30px;
    line-height: 35px;
    padding: 0 50px;
    margin-bottom: 10px;
  }

  .text-wrapper {
    padding: 0 10px 0 30px;
  }

  .text {
    font-size: 25px;
    line-height: 26px;
    width: 100%;
    /* border: 1px solid #000; */
  }

  .bullets {
    font-size: 45px;
    line-height: 60px;
  }

  .logo {
    width: 300px;
  }

  .text.em {
    display: block;
    margin-top: 30px;
    text-indent: 0;
  }
}

@media only screen and (max-width: 400px) {
  .hashtag {
    font-size: 24px;
    line-height: 30px;
    padding: 0 50px;
    margin-bottom: 0;
  }

  .text-wrapper {
    padding: 0 15px 0 25px;
  }

  .text {
    font-size: 20px;
    line-height: 20px;
    width: 100%;
    /* border: 1px solid #000; */
  }

  .bullets {
    font-size: 35px;
    line-height: 40px;
  }
  .logo {
    width: 250px;
  }
}
</style>