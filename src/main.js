import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'
import App from './App.vue'

import './plugins/bootstrap-vue'
import './plugins/scrollto-vue'
import './plugins/mq'
import router from './plugins/router-vue'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
