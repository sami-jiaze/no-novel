import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from '@/router/index.js'
import './assets/css/bootstrap.css'
import './index.css'

import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
// Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
