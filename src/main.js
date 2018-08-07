import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false;
Vue.config.errorHandler = function (err, vm, info) {
	vm.$http.post()
}

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');

