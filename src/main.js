import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import VueFullPage from 'vue-fullpage.js'
import VueAdaptiveNetwork from 'vue-adaptive-components/network';
import VueAdaptiveSaveData from 'vue-adaptive-components/save-data';
import VueAdaptiveMemory from 'vue-adaptive-components/hardware-concurrency';
import VueAdaptiveHardwareConcurrency from 'vue-adaptive-components/memory';

import App from './App.vue'
import router from './router'
import store from './store'
import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'
// import '@/firebase/firebase-messaging-sw'
// import '../public/firebase-messaging-sw'
// import '../firebase-messaging-sw'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './theme/animate.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFullPage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(`
🍱 This app was bootstrapped with bento-starter 🍱

👉 https://bento-starter.netlify.com/

`)
