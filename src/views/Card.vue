<template>
  <v-touch 
    @swipeleft="setNextQuestion"
    @swiperight="setPrevQuestion"
    :swipe-options="{direction: 'horizontal'}">
    <div class="card">
      <a @click="toTodos" class="to-todos"></a>
      <a @click="reload" class="reload"></a>
      <div class="question-wrapper">
        <p v-if="!showAddMoreView" class="question"> 
          <span class="bullets">
            &bull; &bull; &bull;
          </span>
            {{ currentQuestion }} 
          <!-- <button @click="showAnswer = !showAnswer" class="toggle-answer">
            {{ (!showAnswer ? 'Показать ответ' : 'Скрыть ответ') }}
          </button> -->
          <!-- <span v-show="showAnswer" class="edit-wrapper"> -->
          <span class="edit-wrapper">
            <label 
              @click="editAnswer" 
              @tap="editAnswer" 
              v-bind:class="{ 'label-edit' : isAnswered, 'not-answered' : !isAnswered }">
              {{ currentAnswer }}
            </label>
            <input
              class="edit" 
              type="text"
              ref="input" 
              v-show="editingAnswer" 
              @blur="doneEditAnswer"
              @keyup.enter="doneEditAnswer"
              v-model="currentAnswer">
          </span>
        </p>
        <div v-else  class="question-wrapper">
          <p class="question">Вопросы закончились. Добавить еще 5 вопросов?
            <button @click="increaseMaxQuestions" class="toggle-answer">
              Добавить
            </button>
          </p>
        </div>
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
import { mapState } from 'vuex';

Vue.use(VueTouch);

var STORAGE_KEY = 'q-history'
var stateStorage = {
  fetch: function () {
    var state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"history":[],"answers":[],"currentHistoryIndex":0,"maxQuestions":5}');
    return state;
  },
  save: function (state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

export default {
  name: 'Card',
  data: function () {
    return {
      answer: null,
      state: stateStorage.fetch(),
      currentQuestion: 'Loading...',
      currentAnswer: 'Кликните, чтобы ответить',
      showAnswer: false,
      editingAnswer: false,
      showAddMoreView: false,
      isAnswered: false
    }
  },  
  watch: {
    state: {
      handler: function (state) {
        console.log(state.maxQuestions, state.history, state.currentHistoryIndex, state.answers);
        stateStorage.save(state)
      },
      deep: true
    }
  },

  computed: mapState([
    'questions',
  ]),
  methods: {
    setInit: function () {      
      if (this.state.history.length == 0) {
        let max = this.questions.length - 1;
        let randomQuestionIndex = this.getRandomInt(0, max);
        this.pushToHistory(randomQuestionIndex);
        this.$data.currentQuestion = this.questions[randomQuestionIndex];
        this.setAnswer();
      } else {
        let questionIndex = this.state.history[this.state.currentHistoryIndex];
        this.$data.currentQuestion = this.questions[questionIndex];
        this.setAnswer();
      }
    },
    setNextQuestion: function () {
      this.$data.currentQuestion = this.getNextQuestion();
      this.setAnswer();
    },
    setPrevQuestion: function () {
      this.$data.currentQuestion = this.getPrevQuestion();
      this.setAnswer();
    },
    setAnswer: function () {
      this.$data.currentAnswer = this.getAnswer();
      this.setIsAnswered();
    },
    getAnswer: function () {
      return (this.state.answers[this.state.currentHistoryIndex] || 'Ответить');
      // return (this.state.answers[this.state.currentHistoryIndex] || 'К');
    },
    doneEditAnswer: function () {
      this.editingAnswer = false;
      this.state.answers[this.state.currentHistoryIndex] = this.currentAnswer;
      this.setIsAnswered();
    },
    editAnswer: function () {
      this.editingAnswer = true;
      this.$nextTick(() => {

        
        this.$refs.input.focus();
        this.$refs.input.value = '';
      });
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNextQuestion: function () {
      let history = this.getHistory();
        
      if (this.state.currentHistoryIndex == this.state.maxQuestions - 1) {
        this.showAddMoreView = true;
        let questionIndex = history[this.state.currentHistoryIndex];
        return this.questions[questionIndex];
      }

      if (this.state.currentHistoryIndex == history.length - 1) {

        let max = this.questions.length - 1;
        let randomQuestionIndex;
        do {
          randomQuestionIndex = this.getRandomInt(0, max);
        } while (history.includes(randomQuestionIndex));

        this.pushToHistory(randomQuestionIndex);
        this.state.currentHistoryIndex++;
        return this.questions[randomQuestionIndex];
      } else {        
        this.state.currentHistoryIndex++;
        return this.questions[history[this.state.currentHistoryIndex]];
      }
    },
    getPrevQuestion: function () {
      if (this.showAddMoreView) {
        this.showAddMoreView = false;
        let questionIndex = this.state.history[this.state.currentHistoryIndex];
        return this.questions[questionIndex];
      }

      let history = this.getHistory();
      if (this.state.currentHistoryIndex !== 0) {
        this.state.currentHistoryIndex--;
        let questionIndex = history[this.state.currentHistoryIndex];
        return this.questions[questionIndex];
      } else {
        this.$router.push("disclaimer");
      }
    },
    pushToHistory: function (index) {
      // this.$store.commit('pushHistory', index);
      this.state.history.push(index);
    },
    getHistory: function () {
      // return this.$store.state.history;
      return this.state.history;
    },
    toTodos: function () {
      this.$router.push('todo');
    },
    reload: function () {
      localStorage.clear();
      location.reload();
    },
    increaseMaxQuestions: function () {
      if (this.state.maxQuestions == Math.floor(this.questions.length / 5) * 5) {
        console.log("Cant't add more questions!");
        return;
      }
      this.state.maxQuestions += 5;
      this.showAddMoreView = false;
      this.setNextQuestion();
    },
    setIsAnswered: function () {
      if (this.currentAnswer == 'Ответить') {
        this.isAnswered = false;
      } else {
        this.isAnswered = true;
      }
    }
  },
  mounted: function () {
      this.setInit();
  }
  // beforeDestroy: function () {
  //   this.state.currentHistoryIndex = 0;
  //   this.$store.commit('clearHistory');
  // }
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
  /* vh */
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
  /* vh */
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

.to-todos {
  z-index: 99;
  position: absolute;
  top: 17px;
  right: 16px;
  display: block;
  width: 40px;
  height: 40px;
  background-image: url("../assets/list.svg");
  background-size: contain;
}

.reload {
  z-index: 99;
  position: absolute;
  top: 17px;
  left: 16px;
  display: block;
  width: 40px;
  height: 40px;
  background-image: url("../assets/rotate-option.svg");
  background-size: contain;

}

.not-answered {
  position: relative;
  transform: translateX(-50%);
  margin-top: 10px;
  font-size: 18px;
  border: none;
  background: none;
  background: #1F236D;
  color: white;
  padding: 10px 15px;
  margin: 20px 0;
  border-radius: 15px;
}

.toggle-answer {
  position: relative;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  font-size: 18px;
  border: none;
  background: none;
  background: #1F236D;
  color: white;
  padding: 10px 15px;
  margin: 20px 0;
  border-radius: 15px;
}

.edit-wrapper {
  margin-top: 10px;
  position: relative;
  display: block;
  width: 100%;
}

.edit {
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  /* border-top: 1px solid #000; */
  padding: 8px 10px 6px 10px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}

.label-edit {
  /* border: 1px solid #000; */
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  display: block;
  width: 100%;
  font-size: 20px;
  line-height: 35px;
  /* word-break: break-all; */
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
    font-size: 30px;
    line-height: 40px;
    padding: 0 25px;
  }
  .bullets {
    font-size: 35px;
    line-height: 35px;
  }
  .logo {
    width: 260px;
  }
}
</style>