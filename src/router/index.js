import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import Article from '../views/Article.vue';

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
        { name: 'Panier', link: 'cart' },
      ],
    },
  },
  {
    path: '/article/:id',
    name: Article,
    component: Article,
    meta: {
      breadcrumbs: [
        { name: 'Salles de bains et sanitaires', link: 'category/salles-de-bains-et-sanitaires' },
        { name: 'Baignoires', link: 'category/baignoires'}
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
