import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
// import actions from './actions';
// import mutations from './mutations';

Vue.use(Vuex);
// const state = {
//   userAuth: false,
//   userInfo: {},
// };

export default new Vuex.Store({
  modules: {
    app,
  },
});
