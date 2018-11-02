import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueCookies from 'vue-cookies'
import VueResource from 'vue-resource'

Vue.use(VueCookies)
Vue.use(VueResource)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
