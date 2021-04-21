import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 这是ts的修改
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 这是t2修改
