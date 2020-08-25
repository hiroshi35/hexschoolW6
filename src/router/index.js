import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
      },
      {
        path: '/products/',
        name: 'Products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
      },
      {
        path: '/product/:id/',
        name: 'OneProduct',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OneProduct.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/BackProducts.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/admin/Order.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/Coupon.vue'),
      },
      {
        path: 'pic',
        component: () => import('../views/admin/Pic.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
