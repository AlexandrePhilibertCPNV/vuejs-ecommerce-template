import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ShoppingCart from '../views/ShoppingCart.vue';


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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
