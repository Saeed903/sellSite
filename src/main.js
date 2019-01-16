import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false
import 'vuetify/dist/vuetify.min.css'
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
