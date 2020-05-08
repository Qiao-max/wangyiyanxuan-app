import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tools from './tools'
import center from './tools/center'

Vue.use(tools);
Vue.prototype.$center = center;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

