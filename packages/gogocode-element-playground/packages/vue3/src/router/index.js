const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
  },
  {
    path: '/icon',
    name: 'icon',
    component: () =>
      import(/* webpackChunkName: "icon" */ '@/components/icon/Comp-out.vue'),
  },
  {
    path: '/v-model-ele',
    name: 'v-model-ele',
    component: () =>
      import(/* webpackChunkName: "v-model-ele" */ '@/components/v-model-ele/Comp-out.vue'),
  },
];

export default routes;