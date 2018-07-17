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
  about(state, about) {
    state.about = about;
  },
  card(state, card) {
    state.card = card;
  },
  menu(state, menu) {
    state.menu = menu;
  },
  settings(state, settings) {
    state.settings = settings;
  },
  login(state, login) {
    state.login = login;
  },
  todoText(state, todoText) {
    state.todoText = todoText;
  },
  pushHistory(state, item) {
    state.history.push(item);
  },
  clearHistory(state) {
    state.history = [];
  },
  orderDeck(state, orderDeck) {
    state.orderDeck = orderDeck;
  }
}