import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../page/Home'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
