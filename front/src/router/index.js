import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/home/Login'
import VueLogin from '@/pages/home/VueLogin'
import VueHome from '@/pages/home/VueHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/vuelogin',
      name: 'VueLogin',
      component: VueLogin
    },
    {
      path: '/vuehome',
      name: 'VueHome',
      component: VueHome
    }
  ]
})