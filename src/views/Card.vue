<template>
  <v-touch 
    @swipeleft="nextCard"
    @swiperight="prevCard"
    :swipe-options="{direction: 'horizontal'}">
    <div class="wrapper">
      <app-header heading="Карточки"></app-header>
      <main class="cards">
        <transition name="fade" mode="out-in">
          <section 
            class="cards__card"
            v-if="!showAddMoreView">
            <small class="cards__count">Вопрос {{ state.currentHistoryIndex + 1 }} из {{ state.maxQuestions }}</small>
            <h2 class="cards__caption">Карточка</h2>
            <transition v-bind:name="slideDirection" mode="out-in">
              <div 
                class="cards__data"
                v-bind:key="state.currentHistoryIndex">
                <p class="cards__question"> {{ currentQuestion }}</p>
                <div class="cards__answer answer">
                  <label
                    class="answer__view"
                    v-bind:class="{ 
                      'answer__view--editing' : editingAnswer, 'answer__view--answered' : isAnswered 
                    }"
                    @click="editAnswer" 
                    @tap="editAnswer">
                    {{ currentAnswer }}
                  </label>
                  <input
                    class="answer__edit" 
                    type="text"
                    ref="input"
                    v-show="editingAnswer"
                    @blur="doneEditAnswer"
                    @keyup.enter="doneEditAnswer"
                    v-model.lazy="currentAnswer">
                </div>
              </div>
            </transition>
          </section>
          <div 
            class="cards__add-more"
            v-if="showAddMoreView">
            <small class="cards__count">Сейчас карточек: {{ state.maxQuestions }}</small>
            <h2 class="cards__caption">Упс...</h2>
            <p class="cards__message">У вас закончились карточки, вы хотите добавить еще несколько вопросов?</p>
            <button 
            class="cards__add-btn"
            @click="increaseMaxQuestions">
              Добавить
            </button>
            <img class="cards__wave-img" src="../assets/wave-blue.svg" alt="Волна">
          </div>
        </transition>
      </main>
    </div>
  </v-touch>
</template>

<script>
import Vue from 'vue';
import VueTouch from 'vue-touch';
import { mapState } from 'vuex';
import Header from '../components/Header';

Vue.use(VueTouch);

var STORAGE_KEY = 'q-history'
var stateStorage = {
  fetch() {
    var state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"history":[],"answers":[],"currentHistoryIndex":0,"maxQuestions":5}');
    return state;
  },
  save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
}

export default {
  name: 'Card',
  components: {
    'app-header': Header
  },
  data() {
    return {
      answer: null,
      state: stateStorage.fetch(),
      currentQuestion: 'Loading...',
      currentAnswer: 'Кликните, чтобы ответить',
      showAnswer: false,
      editingAnswer: false,
      showAddMoreView: false,
      isAnswered: false,
      slideDirection: 'slide-left',
      showMenu: false,
    }
  },
  watch: {
    state: {
      handler(state) {
        // console.log(state.maxQuestions, state.history, state.currentHistoryIndex, state.answers);
        stateStorage.save(state)
      },
      deep: true
    }
  },
  computed: mapState([
    'questions',
  ]),
  methods: {
    setInit() {      
      if (this.state.history.length == 0) {
        let max = this.questions.length - 1;
        let randomQuestionIndex = this.getRandomInt(0, max);
        this.pushToHistory(randomQuestionIndex);
        this.currentQuestion = this.questions[randomQuestionIndex];
        this.setAnswer();
      } else {
        let questionIndex = this.state.history[this.state.currentHistoryIndex];
        this.currentQuestion = this.questions[questionIndex];
        this.setAnswer();
      }
    },
    nextCard() {
      this.slideDirection = 'slide-left';
      this.currentQuestion = this.getNextQuestion();
      this.setAnswer();
    },
    prevCard() {
      this.slideDirection = 'slide-right';
      this.currentQuestion = this.getPrevQuestion();
      this.setAnswer();
    },
    setAnswer() {
      this.currentAnswer = this.getAnswer();
      this.setIsAnswered();
    },
    getAnswer() {
      return (this.state.answers[this.state.currentHistoryIndex] || 'Ответить');
      // return (this.state.answers[this.state.currentHistoryIndex] || 'К');
    },
    doneEditAnswer() {
      this.editingAnswer = false;
      this.state.answers[this.state.currentHistoryIndex] = this.currentAnswer;
      this.setIsAnswered();
    },
    editAnswer() {
      this.editingAnswer = true;
      this.$nextTick(() => {

        
        this.$refs.input.focus();
        this.$refs.input.value = '';
      });
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNextQuestion() {
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
    getPrevQuestion() {
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
    pushToHistory(index) {
      // this.$store.commit('pushHistory', index);
      this.state.history.push(index);
    },
    getHistory() {
      // return this.$store.state.history;
      return this.state.history;
    },
    toTodos() {
      this.$router.push('todo');
    },
    reload() {
      localStorage.clear();
      location.reload();
    },
    increaseMaxQuestions() {
      if (this.state.maxQuestions == Math.floor(this.questions.length / 5) * 5) {
        // console.log("Cant't add more questions!");
        return;
      }
      this.state.maxQuestions += 5;
      this.showAddMoreView = false;
      this.nextCard();
    },
    setIsAnswered() {
      if (this.currentAnswer == 'Ответить') {
        this.isAnswered = false;
      } else {
        this.isAnswered = true;
      }
    }
  },
  created() {
    this.setInit();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/mixins";

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform .15s;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-to {  
  transform: translateX(-100%);
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .17s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.wrapper {
  padding-top: .1px;
  background-color: #FBFBFC;
  background-repeat: no-repeat;
  background-image: url('../assets/istok-blue.png');
  background-position: 50% 96%;
  background-size: auto;
  font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.cards {
  &__count {
    display: block;
    font-size: 12px;
    opacity: .3;
    margin-top: 32px;
    margin-left: 49px;
  }

  &__caption {
    font-size: 28px;
    margin-top: 0;
    margin-left: 49px;
  }

  &__data {
    background-color: #fff;
    margin: 0 auto;
    width: 270px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    padding: 60px 25px 25px;
    background-image: url("../assets/wave-blue.svg");
    background-position: 60% -30%;
    background-size: 110%;
    background-repeat: no-repeat;
  }

  &__question {
    font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-bottom: 0;
  }

  &__message {
    width: 210px;
    margin-left: 49px;
    margin-top: 40px;
    font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
  }

  &__add-btn {
    display: inline-block;
    vertical-align: top;
    background: #F17E00;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 12px;
    padding: 6px 13px 7px;
    margin-top: 10px;
    margin-left: 49px;
    max-width: 220px;
    overflow: hidden;
    font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
  }

  &__wave-img {
    margin-top: 15px;
    transform: rotateX(180deg);
  }
}

.answer {
  position: relative;
  display: block;
  &__view {
    display: inline-block;
    vertical-align: top;
    background: #1C236E;
    border-radius: 15px;
    color: #fff;
    font-size: 12px;
    padding: 6px 13px 7px;
    margin-top: 24px;
    max-width: 220px;
    overflow: hidden;

    &--answered {
      border-radius: 10px;
      background-color: #E5E5EE;
      color: #1C236E;
    }

    &--editing {
      height: 28px;
    }
  }

  &__edit {
    position: absolute;
    top: 22px;
    left: 0;
    width: 100%;
    padding: 6px 13px 7px;
  }
}

</style>