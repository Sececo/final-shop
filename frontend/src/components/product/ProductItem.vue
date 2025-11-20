<template>
  <div class="card">
    <div class="img">
      <img :src="product.image || '/placeholder.png'" alt="" style="width:100%; height:100%; object-fit:cover" />
    </div>
    <div>
      <h3>{{ product.name }}</h3>
      <div class="kicker">{{ product.brand }}</div>
      <div class="price">{{ formatPrice(product.price) }}</div>
      <div style="display:flex; gap:8px; margin-top:12px;">
        <router-link :to="`/producto/${product.id}`" class="btn secondary">Ver</router-link>
        <button class="btn" @click="$emit('add', product)">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductItem',
  props: { product: { type: Object, required: true } },
  methods: {
    formatPrice(v:number){ return new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(v); }
  }
});
</script>

<style scoped>
.card { cursor:pointer; display:flex; flex-direction:column; gap:10px; }
.img { height:220px; background-size:cover; background-position:center; border-radius:10px; }
.meta { display:flex; justify-content:space-between; align-items:center; }
.title { font-weight:700; color:var(--text); }
.price { color:var(--muted); font-weight:700; }
</style>