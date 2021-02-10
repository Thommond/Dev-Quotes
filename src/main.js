import Vue from 'vue'
import App from './App.vue'

// Simple render of application with vue

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
