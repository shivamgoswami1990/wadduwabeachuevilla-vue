import '@mdi/font/css/materialdesignicons.css';
import 'vue-video-section/dist/vue-video-section.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#FADE03',
                secondary: '#CFD8DC',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                background: '#FFC107',

            },
        },
    },
    icons: {
        iconfont: 'mdi'
    }
});
