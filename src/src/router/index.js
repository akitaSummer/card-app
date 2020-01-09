import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/Main/Main'
import Home from '../pages/Main/Home/Home'
import Article from '../pages/Main/Article/Article'
import Hero from '../pages/Hero/Hero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/articles/:id',
          name: 'Article',
          component: Article,
          props: true
        }
      ]
    },
    {
      path: '/heroes/:id',
      name: 'Hero',
      component: Hero,
      props: true
    }
  ]
})
