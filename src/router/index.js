import Vue from 'vue'
import VueRouter from 'vue-router'
import Water from '../views/Water.vue'
import Scroll from '../views/Scroll.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Water',
    component: Water
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: Scroll
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
