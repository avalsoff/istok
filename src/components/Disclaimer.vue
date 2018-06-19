<template>
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
      <em class="text">
        {{ getDisclamerPart(4) }}        
      </em>
    </div>
    <div class="logo">
      <img class="logo-img" src="../assets/logo-disclaimer.png" alt="Тренинг центр - Исток">
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Disclaimer',
  store,
  methods: {
    getDisclamerPart: function (i) {
      return this.$store.state.disclaimer[i];
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
  font-family: 'Geometria Light';
  overflow: hidden;
  height: 100vh;
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
  margin-top: 10%;
}

.text-wrapper {
  position: relative;
  padding: 0 120px;
  height: 78vh;
}

.text {
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  font-size: 32px;
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

  .bullets {
    font-size: 45px;
    line-height: 50px;
  }

  .logo {
    width: 300px;
  }
}

@media only screen and (max-width: 410px) {
  .bullets {
    font-size: 35px;
    line-height: 20px;
  }
  .logo {
    width: 240px;
  }
}

</style>