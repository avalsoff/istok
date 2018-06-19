<template>
  <div id="app">
    <!-- <Card msg="Какие ресурсы являются
обязательными
для достижения цели?
Как наличие/отсутствие
этих ресурсов отразиться
в твоем плане?"/> -->
    <Start msg="О каких препятствиях
тебе стоит подумать?"/>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Start from './components/Start.vue'

export default {
  name: 'app',
  components: {
    Card,
    Start
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
#app {
  font-family: 'Geometria Bold', Helvetica, Arial, sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
