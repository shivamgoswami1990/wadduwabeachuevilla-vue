import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

// Init viewport height for in app use - video & hero image
Vue.prototype.visibleViewportHeight = () => {
  return vuetify.framework.breakpoint.height;
};

// Form validation rules
Vue.prototype.validateFormRules = (value, opType, limit, msg) => {
  if (value !== undefined && value !== null) {
    // Check the operation type e.g. gt, gte, lt, lte or e
    if (opType === 'gt') {
      return value.length > limit || msg;
    } if (opType === 'gte') {
      return value.length >= limit || msg;
    } if (opType === 'lt') {
      return value.length < limit || msg;
    } if (opType === 'lte') {
      return value.length <= limit || msg;
    } if (opType === 'e') {
      return value.length === limit || msg;
    }
  } else {
    return msg;
  }
};

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
