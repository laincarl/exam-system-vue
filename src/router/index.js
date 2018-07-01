import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/containers/Main';
import List from '@/components/List';
import Manage from '@/containers/Manage';
import ManageMain from '@/containers/manage/main/Main';
import Bank from '@/containers/manage/bank/Bank';
import User from '@/containers/manage/user/User';
import Paper from '@/containers/manage/paper/Paper';
import Exam from '@/containers/manage/exam/Exam';
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
        path: 'main',
        component: ManageMain,
      }, {
        path: 'bank',
        component: Bank,
      }, {
        path: 'user',
        component: User,
      }, {
        path: 'paper',
        component: Paper,
      }, {
        path: 'exam',
        component: Exam,
      }, {
        path: '',
        redirect: 'main',
      }],
    },
    { path: '/404', component: List },
    // { path: '*', redirect: '/404' },
  ],
});
