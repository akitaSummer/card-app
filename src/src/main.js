// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from'vue-awesome-swiper'
import axios from 'axios'

import App from './App'
import router from './router'

import Card from './components/Card/Card'
import ListCard from './components/Card/ListCard/ListCard'

import './assets/iconfont/iconfont.css'
import '../static/css/reset.css'
import './assets/scss/initset.scss'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api/'
  // baseURL: 'http://localhost:4001/web/api'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
