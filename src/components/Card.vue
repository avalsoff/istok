<template>
  <v-touch 
    @swipeleft="setNextQuestion"
    @swiperight="setPrevQuestion">
    <div class="card">
      <div class="question-wrapper">
        <p class="question"> <span class="bullets"> &bull; &bull; &bull; </span> {{ currentQuestion }} </p>
      </div>
      <div class="logo">
        <img class="logo-img" src="../assets/logo.png" alt="Тренинг центр - Исток">
      </div>
    </div>
  </v-touch>
</template>

<script>
import Vue from 'vue';
import VueTouch from 'vue-touch';

Vue.use(VueTouch);

export default {
  name: 'Card',
  data: function () {
    return {
      currentQuestion: 'Loading...',
      currentHistoryIndex: 0,
    }
  },
  methods: {
    setInit: function () {
        let max = this.$store.state.questions.length - 1;
        let randomQuestionIndex = this.getRandomInt(0, max);
        this.pushToHistory(randomQuestionIndex);
        this.$data.currentQuestion = this.$store.state.questions[randomQuestionIndex];
    },
    setNextQuestion: function () {
      this.$data.currentQuestion = this.getNextQuestion();
    },
    setPrevQuestion: function () {
      this.$data.currentQuestion = this.getPrevQuestion();
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNextQuestion: function () {
      let history = this.getHistory();

      if (this.currentHistoryIndex == history.length - 1) {
        let max = this.$store.state.questions.length - 1;
        
        if (history.length === this.$store.state.questions.length) {
          let questionIndex = history[this.currentHistoryIndex];
          return this.$store.state.questions[questionIndex];
        }

        let randomQuestionIndex;
        do {
          randomQuestionIndex = this.getRandomInt(0, max);
        } while (history.includes(randomQuestionIndex));

        this.pushToHistory(randomQuestionIndex);
        this.currentHistoryIndex++;
        return this.$store.state.questions[randomQuestionIndex];
      } else {        
        this.currentHistoryIndex++;
        return this.$store.state.questions[history[this.currentHistoryIndex]];
      }
    },
    getPrevQuestion: function () {
      let history = this.getHistory();
      if (this.currentHistoryIndex !== 0) {
        this.currentHistoryIndex--;
      }
      let questionIndex = history[this.currentHistoryIndex];
      return this.$store.state.questions[questionIndex];
    },
    pushToHistory: function (index) {
      this.$store.commit('pushHistory', index);
    },
    getHistory: function () {
      return this.$store.state.history;
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.setInit();
      this.setNextQuestion();
      this.setNextQuestion();
      this.setNextQuestion();
      this.setNextQuestion();
      this.setPrevQuestion();
      this.setNextQuestion();
      this.setNextQuestion();
    }, 350);
    // setTimeout(() => {
    //   this.setNextQuestion();
    // }, 550);    
    // setTimeout(() => {
    //   this.setPrevQuestion();
    // }, 700);
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
  transform: rotate(-10deg) translateX(-20%);
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
