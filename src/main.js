import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'

Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
