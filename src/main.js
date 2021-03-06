// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Loading } from 'element-ui';
import App from './App';
import router from './router';
import store from './store';
import './permission';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
