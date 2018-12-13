import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Feeding from '@/components/Feeding'
import Medicine from '@/components/Medicine'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feeding',
      name: 'Feeding',
      component: Feeding
    },
    {
      path: '/medicine',
      name: 'Medicine',
      component: Medicine
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})