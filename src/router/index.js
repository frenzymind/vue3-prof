import { createRouter, createWebHistory } from 'vue-router';
import Shop from '../views/Shop.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'auth',
      auth: false,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    meta: {
      layout: 'main',
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.auth;

  if (authRequired && store.getters['auth/isAuth']) {
    next();
  } else if (authRequired && !store.getters['auth/isAuth']) {
    next('/auth?message=notauth');
  } else {
    next();
  }
});

export default router;
