import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import Article from '../views/Article.vue';
import OrderTracking from '../views/OrderTracking.vue';
import Category from '../views/Category.vue';
import Orders from '../views/Orders.vue';
import Favorites from '../views/Favorites.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
  },
  {
    path: '/cart',
    name: ShoppingCart,
    component: ShoppingCart,
    meta: {
      breadcrumbs: [
        { name: 'Panier', link: '/cart' },
      ],
    },
  },
  {
    path: '/article/:id',
    name: Article,
    component: Article,
    meta: {
      breadcrumbs: [
        { name: 'Salles de bains et sanitaires', link: '/category/2' },
        { name: 'Baignoires', link: '/category/baignoires' },
      ],
    },
  },
  {
    path: '/orders/:id/tracking',
    name: OrderTracking,
    component: OrderTracking,
    meta: {
      breadcrumbs: [
        { name: 'Commandes', link: '/orders' },
        { name: 'Suivi' },
      ],
    },
  },
  {
    path: '/category/:id',
    name: Category,
    component: Category,
    meta: {
      breadcrumbs: [
        { name: 'Assortiment', link: '/categories' },
        { name: 'Salles de bain et sanitaires' },
      ],
    },
  },
  {
    path: '/orders',
    name: Orders,
    component: Orders,
    meta: {
      breadcrumbs: [
        { name: 'Mon compte', link: '/account' },
        { name: 'Commandes' }
      ]
    }
  },
  {
    path: '/favorites',
    name: Favorites,
    component: Favorites,
    meta: {
      breadcrumbs: [
        { name: 'Favoris' }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: NotFound,
    component: NotFound,
    meta: {
      breadcrumbs: []
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
