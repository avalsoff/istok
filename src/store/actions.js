import Vue from 'vue';

export default {
	async getQuestions({commit}, lang) {
		let questions = require(`../res/${lang}.js`).default.questions;
		commit('questions', questions);
	},
	
	async getDisclaimer({commit}, lang) {
		let disclaimer = require(`../res/${lang}.js`).default.disclaimer;
		commit('disclaimer', disclaimer);
	},
	
	async getAbout({commit}, lang) {
		let about = require(`../res/${lang}.js`).default.about;
		commit('about', about);
	},
	
	async getCard({commit}, lang) {
		let card = require(`../res/${lang}.js`).default.card;
		commit('card', card);
	},
	
	async getLogin({commit}, lang) {
		let login = require(`../res/${lang}.js`).default.login;
		commit('login', login);
	},
	
	async getMenu({commit}, lang) {
		let menu = require(`../res/${lang}.js`).default.menu;
		commit('menu', menu);
	},
	
	async getSettings({commit}, lang) {
		let settings = require(`../res/${lang}.js`).default.settings;
		commit('settings', settings);
	},
	
	async getTodoText({commit}, lang) {
		let todoText = require(`../res/${lang}.js`).default.todoText;
		commit('todoText', todoText);
	},
	
	async getOrderDeck({commit}, lang) {
		let orderDeck = require(`../res/${lang}.js`).default.orderDeck;
		commit('orderDeck', orderDeck);
	},
	
	async getSettingsData({commit}) {
		const response = await Vue.http.get('https://istok.hiddenpool.tech/get-user', {
			params: {
				authKey: localStorage.getItem('Istok-Auth-Key')
			}
		});
		let settingsData = response.data.body.settings;
		settingsData.currentHistoryIndex = settingsData.currentHistoryIndex ?
			Number(settingsData.currentHistoryIndex) : 0;
		settingsData.maxQuestions = settingsData.maxQuestions ?
			Number(settingsData.maxQuestions) : 5;
		settingsData.history = settingsData.history ?
			settingsData.history.map(item => Number(item)) : [];
		settingsData.todos = settingsData.todos ?
			settingsData.todos.map(todo => {
				let boolCompleted = (todo.completed == 'true');
				let idNumber = Number(todo.id);
				let titleString = String(todo.title);
				return {
					completed: boolCompleted,
					id: idNumber,
					title: titleString
				};
			}) : [];
		let trashWords = ['undefined', 'Ответить', 'Answer', 'null'];
		settingsData.answers = settingsData.answers ?
			settingsData.answers.map(answer => trashWords.includes(answer) ? '' : answer) : [];
		commit('settingsData', settingsData);
	}
}