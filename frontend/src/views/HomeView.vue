<template>
  <div>
    <div class="kicker">Colección destacada</div>
    <h1 style="margin-top:8px">Moda minimal — Blanco y negro</h1>
    <p class="kicker" style="margin-bottom:18px">Calidad y cortes atemporales</p>

    <div v-if="loading" class="kicker">Cargando...</div>
    <div v-else>
      <ProductList :products="products" @add="add" />
    </div>
  </div>
  <section class="hero">
    <div class="hero__content">
      <h1>Moda minimalista</h1>
      <p>Descubre prendas premium, diseño limpio y calidad superior.</p>
      <router-link to="/productos" class="hero__btn">Comprar ahora</router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import ProductList from '../components/product/ProductList.vue';
import { fetchProducts } from '../services/api';
import { useCart } from '../composables/useCart';

export default {
  components: { ProductList },
  setup() {
    const products = ref<any[]>([]);
    const loading = ref(true);
    const { add } = useCart();
    onMounted(async ()=>{
      try { products.value = await fetchProducts(); } catch(e) { products.value = []; }
      loading.value = false;
    });
    return { products, loading, add };
  }
};
</script>

<style scoped>
.hero {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(120deg, #f8fafc 60%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  margin: 0;
  padding: 0;
}
.hero__content {
  text-align: center;
  max-width: 600px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  padding: 3rem 2rem;
  margin: 0;
}
.hero__content h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #181818;
  margin-bottom: 1rem;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.hero__content p {
  font-size: 1.2rem;
  color: #181818;
  margin-bottom: 2rem;
}
.hero__btn {
  background: #181818;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  transition: background 0.2s, transform 0.2s;
  text-decoration: none;
  display: inline-block;
}
.hero__btn:hover {
  background: #222;
  transform: scale(1.05);
}
@media (max-width: 700px) {
  .hero__content {
    padding: 2rem 1rem;
  }
  .hero__content h1 {
    font-size: 2rem;
  }
}
</style>
.hero h1 { font-size:40px; margin-bottom:10px; }
.cta-btn { background:var(--accent); color:#000; padding:10px 16px; border-radius:10px; font-weight:800; text-decoration:none; }
.featured { margin-top:28px; }