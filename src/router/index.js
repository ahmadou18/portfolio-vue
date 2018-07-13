import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name:'about',
      path:'/about',
      component:About
    },
    {
      name:'portfolio',
      path:'/portfolio',
      component:Portfolio
    },
    {
      name:'contact',
      path:'/contact',
      component:Contact
    }
  ]
})
