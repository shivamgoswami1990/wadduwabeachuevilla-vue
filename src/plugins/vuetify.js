import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueMeta from 'vue-meta';

Vue.use(Vuetify);
Vue.use(VueMeta);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#FADE03',
        secondary: '#141414',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
      },
    },
  },
  icons: {
    iconfont: 'mdi'
  }
});
