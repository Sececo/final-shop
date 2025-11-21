<template>
  <div>
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div class="kicker">Tienda</div>
        <h1>Todos los productos</h1>
      </div>
      <div style="max-width:360px;">
        <input class="input" v-model="q" placeholder="Buscar producto..." />
      </div>
    </div>

    <div v-if="loading" style="margin-top:30px" class="kicker">Cargando...</div>
    <div v-else>
      <ProductList :products="filtered" @add="add" />
    </div>

    <section class="products-section">
      <h2>Productos destacados</h2>
      <ProductList :products="products" @add="addToCart" />
    </section>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue';
import ProductList from '../components/product/ProductList.vue';
import { fetchProducts } from '../services/api';
import { useCart } from '../composables/useCart';

export default {
  components: { ProductList },
  setup(){
    const products = ref<any[]>([]);
    const loading = ref(true);
    const q = ref('');
    const { add } = useCart();
    onMounted(async ()=>{
      try { products.value = await fetchProducts(); } catch(e){ products.value = []; }
      loading.value = false;
    });
    const filtered = computed(()=> products.value.filter(p => p.name.toLowerCase().includes(q.value.toLowerCase())));
    return { products, loading, q, filtered, add };
  }
};
</script>

<style scoped>
h2 { color:var(--text); margin-bottom:18px; }
.products-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.products-section h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #181818;
  margin-bottom: 2rem;
  text-align: left;
}
</style>