import Vue from 'vue'
import App from './App'
import router from './router'
import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import LayoutHeader from '@/components/layouts/Header'
import HeaderProfile from '@/components/sections/Header-profile'
import ProfileSection from '@/components/sections/Profile-section'
import Calendar from '@/components/sections/Calendar'
import Ratings from '@/components/sections/RatingsReviews'
import SubjectsOffered from '@/components/sections/SubjectsOffered'
import Statistics from '@/components/sections/Statistics'
/** Breadcrumbs **/

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'



if(window.location.pathname.includes("template/pharmacyadmin")) {
  require('./assets/PharmacyAdminStyle.css');
} else if(window.location.pathname.includes("template/admin")) {
  require('./assets/AdminStyle.css');
}else if(!window.location.pathname.includes("template/admin") && !window.location.pathname.includes("template/pharmacyadmin")) {
  require('./assets/style.css');
}
 

import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import Slick from 'vue-slick'
import '../node_modules/slick-carousel/slick/slick.css'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
Vue.config.productionTip = false

/*Global Components */
Vue.component('layout-header', LayoutHeader);
Vue.component('header-profile', HeaderProfile);
Vue.component('profile-section', ProfileSection);
Vue.component('calendar', Calendar);
Vue.component('ratings-reviews', Ratings);
Vue.component('subjects-offered', SubjectsOffered);
Vue.component('statistics', Statistics);
new Vue({
  el: '#app',
  router,
  components: { App,BarChart,
    LineChart, },
  template: '<App/>'
})
