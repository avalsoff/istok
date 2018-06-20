<template>
  <div id="app">
    <div id="nav">
      <router-link to="/start">Home</router-link> |
      <router-link to="/disclaimer">Disclaimer</router-link> |
      <router-link to="/card">Card</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  position: absolute; 
}

html {
  box-sizing: border-box;
}

*, *::after, *::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'Geometria Bold';
  src: url('./assets/fonts/Geometria-Bold.otf'),
       url('./assets/fonts/Geometria-Bold.woff');
}
@font-face {
  font-family: 'Geometria Light';
  src: url('./assets/fonts/Geometria-Light.otf'),
       url('./assets/fonts/Geometria-Light.woff');
}
#app {
  font-family: 'Geometria Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import store from './store';

export default {
  mounted: function () {
    if (localStorage.getItem('LANGUAGE')) {
      store.dispatch('getDisclaimer');
      store.dispatch('getQuestions');
      this.$router.push('disclaimer');
    } else {
      store.dispatch('getLanguages');
      this.$router.push('start');
    }
  }
}
</script>