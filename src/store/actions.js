// import axios from 'axios';

export default {
  // async getLanguages({ commit }) {
  //   // const url = `http://localhost:3000/languages`;
  //   const url = `http://www.blabla.com/api.php`;
  //   const response = await axios.get(url);
  //   let languages = response.data;
  //   commit('languages', languages);
  // },

  async getQuestions({ commit }, lang) {
    // const url = `http://localhost:3000/questions`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let questions = require(`../res/${lang}.js`).default.questions;
    commit('questions', questions);
  },

  async getDisclaimer({ commit }, lang) {
    // const url = `http://localhost:3000/disclaimer`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let disclaimer = require(`../res/${lang}.js`).default.disclaimer;
    commit('disclaimer', disclaimer);
  },

  async getAbout({ commit }, lang) {
    // const url = `http://localhost:3000/about`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let about = require(`../res/${lang}.js`).default.about;
    commit('about', about);
  },

  async getCard({ commit }, lang) {
    // const url = `http://localhost:3000/card`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let card = require(`../res/${lang}.js`).default.card;
    commit('card', card);
  },

  async getLogin({ commit }, lang) {
    // const url = `http://localhost:3000/login`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let login = require(`../res/${lang}.js`).default.login;
    commit('login', login);
  },

  async getMenu({ commit }, lang) {
    // const url = `http://localhost:3000/menu`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let menu = require(`../res/${lang}.js`).default.menu;
    commit('menu', menu);
  },

  async getSettings({ commit }, lang) {
    // const url = `http://localhost:3000/settings`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let settings = require(`../res/${lang}.js`).default.settings;
    commit('settings', settings);
  },

  async getTodoText({ commit }, lang) {
    // const url = `http://localhost:3000/todoText`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;
    // const response = await axios.get(url);
    let todoText = require(`../res/${lang}.js`).default.todoText;
    commit('todoText', todoText);
  },
}