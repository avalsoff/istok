import axios from 'axios';

export default {
  async getLanguages({ commit }) {
    // const url = `http://localhost:3000/languages`;
    const url = `http://www.blabla.com/api.php`;
    const response = await axios.get(url);
    let languages = response.data;
    commit('languages', languages);
  },

  async getQuestions({ commit }, lang) {
    // const url = `http://localhost:3000/questions`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let questions = response.data;
    commit('questions', questions);
  },

  async getDisclaimer({ commit }, lang) {
    // const url = `http://localhost:3000/disclaimer`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let disclaimer = response.data;
    commit('disclaimer', disclaimer);
  },

  async getAbout({ commit }, lang) {
    // const url = `http://localhost:3000/about`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let about = response.data;
    commit('about', about);
  },

  async getCard({ commit }, lang) {
    // const url = `http://localhost:3000/card`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let card = response.data;
    commit('card', card);
  },

  async getLogin({ commit }, lang) {
    // const url = `http://localhost:3000/login`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let login = response.data;
    commit('login', login);
  },

  async getMenu({ commit }, lang) {
    // const url = `http://localhost:3000/menu`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let menu = response.data;
    commit('menu', menu);
  },

  async getSettings({ commit }, lang) {
    // const url = `http://localhost:3000/settings`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let settings = response.data;
    commit('settings', settings);
  },

  async getTodoText({ commit }, lang) {
    // const url = `http://localhost:3000/todoText`;
    const url = `http://www.blabla.com/api.php?language=${lang}`;
    const response = await axios.get(url);
    let todoText = response.data;
    commit('todoText', todoText);
  },
}