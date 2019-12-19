import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

// Init viewport height for in app use - video & hero image
Vue.prototype.visibleViewportHeight = () => {
  return vuetify.framework.breakpoint.height;
};

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
