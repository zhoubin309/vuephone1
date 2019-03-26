import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
