import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import mixin from './mixins'

import "@/assets/css/base.css";
import "@fortawesome/fontawesome-free/css/all.css";
import './plugins/element/index.js'
import './registerServiceWorker'

Vue.mixin(mixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
