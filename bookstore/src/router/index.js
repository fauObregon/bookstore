import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //url
      name: 'home',
      component: Home,
      meta: {Auth: false, title:'Inicio'}
    },
    {
      path: '/register', //url
      name: 'Register',
      component: Register,
      meta: {Auth: false, title:'Registro'}
    },
    {
      path: '/login', //url
      name: 'login',
      component: Register,
      meta: {Auth: false, title:'Login'}
    }
  ]
})
