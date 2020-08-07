import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Foundation from "@springmatter/foundation";
import * as d3 from 'd3';

Vue.use(Foundation);
Vue.config.productionTip = false
window.d3 = d3

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

