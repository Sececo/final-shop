<template>
  <div v-if="product">
    <div style="display:flex; gap:24px; align-items:flex-start; flex-wrap:wrap;">
      <div style="flex:1; min-width:280px;">
        <div style="border-radius:12px; overflow:hidden; background:#f2f2f2; padding:12px;">
          <img :src="product.image || '/placeholder.png'" style="width:100%; object-fit:cover;" />
        </div>
      </div>
      <div style="width:420px; min-width:260px;">
        <div class="kicker">{{ product.brand }}</div>
        <h1>{{ product.name }}</h1>
        <div class="price" style="margin:12px 0">{{ formatPrice(product.price) }}</div>
        <p class="kicker">{{ product.description }}</p>
        <div style="margin-top:18px; display:flex; gap:10px;">
          <button class="btn" @click="add(product)">Agregar al carrito</button>
          <router-link to="/productos" class="btn secondary">Volver</router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="kicker">Cargando...</div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProductById } from '../services/api';
import { useCart } from '../composables/useCart';

export default {
  props: ['id'],
  setup(props:any){
    const product = ref<any>(null);
    const { add } = useCart();
    onMounted(async ()=>{
      try { product.value = await fetchProductById(props.id); } catch(e){ product.value = null; }
    });
    const formatPrice = (v:number) => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(v);
    return { product, add, formatPrice };
  }
};
</script>

<style scoped>
.kicker { color:var(--muted); font-size:14px; margin:0; }
.price { font-weight:900; font-size:20px; color:var(--muted); margin:8px 0; }
.btn { background:var(--accent); border:none; padding:10px 14px; border-radius:10px; font-weight:800; cursor:pointer; }
.btn.secondary { background:transparent; color:var(--accent); border:2px solid var(--accent); }
</style>