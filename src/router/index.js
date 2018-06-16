import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/containers/Main';
import List from '@/components/List';
import Manage from '@/containers/Manage';
import Bank from '@/containers/manage/Bank';
import Login from '@/containers/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/list',
      component: List,
    }, {
      path: '/manage',
      component: Manage,
      // redirect: '/manage/bank',
      children: [{
        path: '',
        component: Bank,
      }, {
        path: 'bank',
        component: Bank,
      }],
    },
    { path: '/404', component: List },
    { path: '*', redirect: '/404' },
  ],
});
