import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueAxios from 'vue-axios';
import { ins } from '@/util/axios';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false;
Vue.use(VueAxios, ins);
Vue.use(VueToast, { position: 'top-right' });
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
