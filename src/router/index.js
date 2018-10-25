import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import ResetPassword from '@/components/resetPassword/resetPassword'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: ResetPassword
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
