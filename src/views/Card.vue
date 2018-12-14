<template>
	<v-touch
		@swipeleft="nextCard"
		@swiperight="prevCard"
		:swipe-options="{direction: 'horizontal'}">
		<div class="wrapper">
			<app-header :heading="card.heading"></app-header>
			<main class="cards">
				<transition name="fade" mode="out-in">
					<section
						class="cards__card"
						v-if="!showAddMoreView">
						<small class="cards__count">
							{{ card.question }} {{ state.currentHistoryIndex + 1 }} {{ card.of }} {{ state.maxQuestions
							}}
						</small>
						<!-- <h2 class="cards__caption">{{ card.card }}</h2> -->
						<h2 class="cards__caption"></h2>
						<transition v-bind:name="slideDirection" mode="out-in">
							<div
								class="cards__data"
								v-bind:key="state.currentHistoryIndex">
								<p class="cards__question"> {{ currentQuestion }}</p>
								<div class="cards__answer answer">
									<label
										class="answer__view"
										v-bind:class="{
											'answer__view--editing' : editingAnswer,
											'answer__view--answered' : isAnswered
										}"
										@click="editAnswer"
										@tap="editAnswer"
									>
										{{ currentAnswer }}
									</label>
									<input
										class="answer__edit"
										type="text"
										ref="input"
										v-show="editingAnswer"
										@blur="doneEditAnswer"
										@keyup.enter="doneEditAnswer"
										v-model.lazy="currentAnswer"
									>
								</div>
							</div>
						</transition>
					</section>
					<div
						class="cards__add-more"
						v-if="showAddMoreView">
						<small class="cards__count">{{ card.now }} {{ state.maxQuestions }}</small>
						<h2 class="cards__caption">{{ card.oops }}</h2>
						<p class="cards__message">{{ card.over }}</p>
						<button
							class="cards__add-btn"
							@click="increaseMaxQuestions"
						>
							{{ card.add }}
						</button>
						<img class="cards__wave-img" src="../assets/wave-blue.png" alt="Волна">
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
	
	export default {
		name: 'Card',
		components: {
			'app-header': Header
		},
		data() {
			return {
				answer: "",
				state: {
					history: [],
					answers: [],
					currentHistoryIndex: 0,
					maxQuestions: 5
				},
				currentQuestion: 'Loading...',
				currentAnswer: 'Loading...',
				showAnswer: false,
				editingAnswer: false,
				showAddMoreView: false,
				isAnswered: false,
				slideDirection: 'slide-left',
				showMenu: false,
				isInitialized: false
			}
		},
		watch: {
			state: {
				handler(state) {
					if (this.isInitialized) {
						this.updateSettings();
					}
				},
				deep: true
			}
		},
		computed: mapState([
			'questions',
			'card',
			'settingsData'
		]),
		methods: {
			setInit() {
				this.state = this.settingsData;
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
				this.isInitialized = true;
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
				return (this.state.answers[this.state.currentHistoryIndex] || this.card.answer);
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
				this.state.history.push(index);
			},
			getHistory() {
				return this.state.history;
			},
			toTodos() {
				this.$router.push('todo');
			},
			increaseMaxQuestions() {
				if (this.state.maxQuestions == Math.floor(this.questions.length / 5) * 5) {
					return;
				}
				this.state.maxQuestions += 5;
				this.showAddMoreView = false;
				this.nextCard();
			},
			setIsAnswered() {
				if (this.currentAnswer == this.card.answer) {
					this.isAnswered = false;
				} else {
					this.isAnswered = true;
				}
			},
			async updateSettings() {
				const settingsUrl = 'https://istok.hiddenpool.tech/update-settings';
				let currentSettingsData = {settings: this.state};
				const requestConfig = {
					params: {
						authKey: localStorage.getItem('Istok-Auth-Key')
					}
				};
				this.$http.post(settingsUrl, currentSettingsData, requestConfig);
			}
		},
		created() {
			this.setInit();
		},
		destroyed() {
			this.$store.dispatch('getSettingsData');
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
		background-size: 30%;
		font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
		font-size: get-vw(14px);
		
		@media only screen and (max-height: get-vw(450px)) {
			background-image: none;
		}
	}
	
	.cards {
		&__count {
			display: block;
			font-size: get-vw(12px);
			opacity: .3;
			margin-top: get-vw(32px);
			margin-left: get-vw(49px);
		}
		
		&__caption {
			font-size: get-vw(28px);
			margin-top: 0;
			margin-left: get-vw(49px);
		}
		
		&__data {
			background-color: #fff;
			margin: 0 auto;
			width: get-vw(270px);
			box-shadow: get-vw(0px) get-vw(10px) get-vw(20px) rgba(0, 0, 0, 0.06);
			border-radius: get-vw(15px);
			padding: get-vw(60px) get-vw(25px) get-vw(25px);
			background-image: url("../assets/wave-blue.png");
			background-position: 60% get-vw(-40px);
			background-size: 110%;
			background-repeat: no-repeat;
		}
		
		&__question {
			font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
			font-size: get-vw(14px);
			margin-bottom: 0;
		}
		
		&__message {
			width: get-vw(210px);
			margin-left: get-vw(49px);
			margin-top: get-vw(40px);
			font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
		}
		
		&__add-btn {
			appearance: none;
			display: block;
			background: #4e1284;
			border: none;
			padding: get-vw(6px) get-vw(13px) get-vw(6px);
			font-size: get-vw(12px);
			margin-left: get-vw(49px);
			margin-top: get-vw(10px);
			color: white;
			border-radius: get-vw(100px);
			font-family: "Geometria Extrabold", Arial, Helvetica, sans-serif;
		}
		
		&__wave-img {
			margin-top: get-vw(15px);
			transform: rotateX(180deg);
			width: 100%;
		}
	}
	
	.answer {
		position: relative;
		display: block;
		&__view {
			display: inline-block;
			vertical-align: top;
			background: #00bec1;
			border-radius: get-vw(15px);
			color: #fff;
			font-size: get-vw(12px);
			padding: get-vw(6px) get-vw(13px) get-vw(7px);
			margin-top: get-vw(24px);
			max-width: get-vw(220px);
			overflow: hidden;
			word-wrap: break-word;
			font-family: "Geometria Heavy", Arial, Helvetica, sans-serif;
			
			&--answered {
				border-radius: get-vw(10px);
				background-color: rgba(#E5E5EE, .3);
				color: darken(#00bec1, 5%);
				font-family: Arial, Helvetica, sans-serif;
			}
			
			&--editing {
				height: get-vw(28px);
			}
		}
		
		&__edit {
			position: absolute;
			top: get-vw(24px);
			left: 0;
			width: 100%;
			padding: get-vw(6px) get-vw(13px) get-vw(7px);
			font-size: get-vw(12px);
		}
	}
</style>