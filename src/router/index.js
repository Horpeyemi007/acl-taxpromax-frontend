import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/routeNames';

// component route
import AuthLayout from '@/views/auth/AuthLayout.vue';
// views route
import Home from '@/views/home/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: ROUTE_NAMES.HOME,
    },
    { path: '/register', component: AuthLayout, name: ROUTE_NAMES.REGISTER },
    { path: '/login', component: AuthLayout, name: ROUTE_NAMES.LOGIN },
  ],
});

export default router;
