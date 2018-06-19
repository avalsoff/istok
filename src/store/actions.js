import axios from 'axios';

export default {
  async getQuestions({ commit }) {
    const url = `http://www.mocky.io/v2/5b28f6862f00008900f55f77`;
    // const url = `http://www.blabla.com/api.php?language=${this.state.language}`;

    const response = await axios.get(url);

    let questions = response.data;

    commit('questions', questions);
  },

  async getDisclaimer({ commit }) {
    const url = `http://www.mocky.io/v2/5b28f6862f00008900f55f77`;
    // const url = `http://www.blabla.com/api.php?language=${this.state.language}`;

    const response = await axios.get(url);

    let disclaimer = response.data;

    commit('disclaimer', disclaimer);
  },

  async getLanguages({ commit }) {
    const url = `http://www.mocky.io/v2/5b28f6862f00008900f55f77`;
    // const url = `http://www.blabla.com/api.php?language=${this.state.language}`;

    const response = await axios.get(url);

    let languages = response.data;

    commit('languages', languages);
  }
}