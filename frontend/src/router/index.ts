import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/product/:id', name: 'product-detail', component: ProductDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;