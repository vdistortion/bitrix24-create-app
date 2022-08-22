import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
    {
      path: '/placement',
      name: 'placement-page',
      component: () => import(/* webpackChunkName: 'placement-page' */ '../views/PlacementPage.vue'),
    },
    {
      path: '/example',
      name: 'example-page',
      component: () => import(/* webpackChunkName: 'example-page' */ '../views/ExamplePage.vue'),
    },
  ],
});
