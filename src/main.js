import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;


const axios = require("axios");
axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        Authorization: "api_key"
      }
    };
  },
  error => Promise.reject(error)
);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
