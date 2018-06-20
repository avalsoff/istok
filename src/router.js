import Vue from 'vue'
import Router from 'vue-router'
import Disclaimer from './views/Disclaimer.vue'
import Card from './views/Card.vue'
import Start from './views/Start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    }

  ]
})
