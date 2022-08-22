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
      component: () => import(/* webpackChunkName: 'placement-page' */ '../views/Placement.vue'),
    },
    {
      path: '/example',
      component: () => import(/* webpackChunkName: 'example-page' */ '../views/Example.vue'),
    },
  ],
});
