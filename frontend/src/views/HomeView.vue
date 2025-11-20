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
.hero { text-align:center; padding:36px 0; color:var(--text); }
.hero h1 { font-size:40px; margin-bottom:10px; }
.cta-btn { background:var(--accent); color:#000; padding:10px 16px; border-radius:10px; font-weight:800; text-decoration:none; }
.featured { margin-top:28px; }
</style>