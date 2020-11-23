import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import doctor from '../components/doctor.vue'
import sign from '../components/sign.vue'
import get from '../components/get.vue'
import doc from '../components/doc.vue'
import staff from '../components/staff.vue'
import import_card from '../components/import_card.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doctor',
    name: 'doctor',
  
    component:doctor
  },
  {
    path: '/sign',
    name: 'sign',
  
    component:sign
  },

  {
    path: '/get',
    name: 'get',
  
    component:get
  },
  {
    path: '/doc',
    name: 'doc',
  
    component:doc
  },
  {
    path: '/staff',
    name: 'staff',
  
    component:staff
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: import_card
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
