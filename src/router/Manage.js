
import Router from 'vue-router';
import Bank from '@/containers/manage/Bank';

export default new Router({
  routes: [
    {
      path: '/bank',
      name: 'Bank',
      component: Bank,
    },
  ],
});
