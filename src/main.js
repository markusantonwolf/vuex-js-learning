import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
