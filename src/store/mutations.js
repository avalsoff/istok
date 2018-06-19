export default {
  languages(state, languages) {
    state.languages = languages; 
  },
  questions(state, questions) {
    state.questions = questions;
  },
  disclaimer(state, disclaimer) {
    state.disclaimer = disclaimer;
  },
  todos(state, todos) {
    state.todos = todos;
  },
  pushHistory(state, item) {
    state.history.push(item);
  }
}