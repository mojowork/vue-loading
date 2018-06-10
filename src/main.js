import Vue from 'vue'
import App from './App.vue'
import loading from './index'

Vue.use(loading)

new Vue({
  el: '#app',
  render: h => h(App)
})
