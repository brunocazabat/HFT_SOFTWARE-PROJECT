import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import vueApexCharts from 'vue-apexcharts'
import apexCharts from 'apexcharts'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  vueApexCharts,
  apexCharts,
  render: h => h(App),
}).$mount('#app')
