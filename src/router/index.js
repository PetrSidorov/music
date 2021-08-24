import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Manage from '@/views/Manage.vue';
// import Song from '@/views/Song.vue';
import store from '@/store';

const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Manage = () => import(/* webpackChunkName: "groupedChunk" */'@/views/Manage.vue');
const Song = () => import(/* webpackChunkName: "groupedChunk" */'@/views/Song.vue');

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'manage',
    meta: {
      requiresAuth: true,
    },
    // alias: '/manage-music',
    path: '/manage-music',
    component: Manage,
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
    beforeEnter: (next) => {
      console.log('Manage guard');
      next();
    },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});
export default router;
