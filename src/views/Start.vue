<template>
  <div class="start">
    <div class="start-wrapper">
      <h1 class="greet">Добро <br> пожаловать!</h1>
      <p class="choose">Выберите язык:</p>
      <ul class="languages">
        <li 
          class="language"
          v-bind:key="language.id"
          v-for="language in languages">
          <!-- <button class="language-btn">
            {{ language.name }}
          </button> -->
          <a class="language-btn"
            v-on:click="() => saveLanguageAndGo(language.id)">
            {{ language.name || 'Loading...'}}
          </a>
        </li>
      </ul>
    </div>
    <div class="logo">
      <img class="logo-img" src="../assets/logo.png" alt="Тренинг центр - Исток">
    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex';

export default {
  name: 'Start',
  // data: function () {
  //   return {
  //     languages: []
  //   }
  // },
  store,
  // mounted: function () {
  //   setTimeout(() => {
  //     this.languages = this.$store.state.languages;
  //   }, 500)
  // },
  computed: mapState({
    languages: state => state.languages
  }),
  methods: {
    saveLanguageAndGo: function (langId) {
      localStorage.setItem('Lan-gua-ge', langId);
      this.$router.push('login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greet {
  margin-top: 5%;
  text-align: center;
  font-size: 50px;
  color: #1F236D;
}

.languages {
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  padding: 0;
  list-style-type: none;
  text-align: center;
}

.language {
  display: block;
}

.language-btn {
  cursor: pointer;
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 20px;
  margin-top: 8px;
  color: #fff;
  border: none;
  font-size: 25px;
  font-weight: bold;
  background-color: #1F236D;
}

.choose {
  text-align: center;
  font-size: 28px;
  color: #1F236D;
}

.start {
  position: relative;
  overflow: hidden;
  height: 100vh;
  /* vh */
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  /* border: 1px solid #000; */
}

.start::after {
  content: "";
  top: 55%;
  position: absolute;
  width: 2000px;
  height: 1000px;
  background-color: #1F236D;
  transform: rotate(-10deg) translateX(-40%);
}

.logo {
  overflow: hidden;
  z-index: 99;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
}

.logo-img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 768px) {
  .start::after {
    top: 65%;
  }

  .logo {
    top: 84%;
    width: 350px;
  }
}

@media only screen and (max-width: 460px) {
  .greet {
    margin-top: 10%;
    font-size: 35px;
  }

  .choose {
    font-size: 20px;
  }

  .language-btn {
    padding: 10px;
    margin-top: 4px;
  }

  .start::after {
    top: 55%;
  }

  .logo {
    top: 85%;
    width: 220px;
  }
}
</style>
