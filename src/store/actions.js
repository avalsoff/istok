import axios from 'axios';

export default {
  async getQuestions({ commit }, lang) {
    const url = `http://localhost:3000/questions`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;

    const response = await axios.get(url);

    let questions = response.data;

    commit('questions', questions);
  },

  async getDisclaimer({ commit }, lang) {
    const url = `http://localhost:3000/disclaimer`;
    // const url = `http://www.blabla.com/api.php?language=${lang}`;

    const response = await axios.get(url);

    let disclaimer = response.data;

    commit('disclaimer', disclaimer);
  },

  async getLanguages({ commit }) {
    const url = `http://localhost:3000/languages`;
    // const url = `http://www.blabla.com/api.php`;

    const response = await axios.get(url);

    let languages = response.data;

    commit('languages', languages);
  }
}