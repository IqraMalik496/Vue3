import Vue from 'vue'
import Router from 'vue-router'

/** For Home Pages **/


/** For Doctor **/


/** For Patient **/



/** For Pharmacy **/


/** For Admin**/


/** For Pharmacy Admin**/



import UserProfiles from '@/components/UserProfiles'
import ProfilePage from '@/components/ProfilePage'
import Login from '@/components/Login'



Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: 'template',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user-profiles',
      name: 'UserProfiles',
      component: UserProfiles
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage
    },
    {
      path: '/login',
      name: 'logins',
      component: Login
    },
    
  ],
  linkActiveClass: "active",
})
export default router
