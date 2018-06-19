<template>
  <div class="disclamer">
    <span class="hashtag">#50вопросов_исток</span>
    <span class="bullets"></span>
    <p class="think">
      Подумай о своём желании/
идее/цели.
    </p>
    <p class="no-matter">
      Неважно где ты сейчас: только
мысль появилась в твоей голове
или ты уже на пол пути к финалу.
    </p>
    <p class="you-can">
      Ты можешь себе задать несколько
вопросов из этой колоды и сделать
шаг навстречу результату.
    </p>
    <p class="good-luck">Удачи!</p>
    <p class="coach-name">Катерина Костюкова
Профессиональный сертифициро-
ванный коуч (PCC)</p>
<div class="logo">
      <img class="logo-img" src="../assets/logo.png" alt="Тренинг центр - Исток">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String
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
  overflow: hidden;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  /* border: 1px solid #000; */
}

.card::after {
  content: "";
  top: 70%;
  position: absolute;
  width: 2000px;
  height: 1000px;
  background-color: #1F236D;
  transform: rotate(-10deg);
}

.question-wrapper {
  position: relative;
  height: 78vh;
}

.question {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  font-size: 54px;
  line-height: 88px;
  font-weight: bold;
  width: 100%;
  max-width: 800px;
  padding: 0 50px;
  text-align: center;
  color: #1F236D;
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
  .card::after {
    top: 60%;
  }

  .question {
    font-size: 30px;
    line-height: 43px;
  }

  .bullets {
    font-size: 45px;
    line-height: 50px;
  }

  .logo {
    width: 300px;
  }
}

@media only screen and (max-width: 410px) {
  .card::after {
    top: 55%;
  }
  .question {
    font-size: 25px;
    line-height: 35px;
  }
  .bullets {
    font-size: 35px;
    line-height: 20px;
  }
  .logo {
    width: 240px;
  }
}

</style>