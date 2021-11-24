import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/placement',
      component: () => import(/* webpackChunkName: 'placement' */ '../views/Placement.vue'),
    },
  ],
});
