<template>
  <div id="app">
    <!-- <Start/> -->
    <Card/>
    <!-- <Disclaimer/> -->
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Start from './components/Start.vue'
import Disclaimer from './components/Disclaimer.vue'
import store from './store'

export default {
  name: 'app',
  components: {
    Start,
    Disclaimer,
    Card,
  },
  mounted: function () {
    store.dispatch('getLanguages');
    store.dispatch('getQuestions');
    store.dispatch('getDisclaimer');
  }
}
</script>

<style>
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
