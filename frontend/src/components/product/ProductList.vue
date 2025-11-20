<template>
  <div>
    <div class="products-grid">
      <ProductItem v-for="p in products" :key="p.id" :product="p" @add="onAdd" />
    </div>
  </div>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name:'ProductList',
  props: { products: { type: Array, default: ()=>[] } },
  components: { ProductItem },
  methods: {
    onAdd(product:any){ this.$emit('add', product); }
  }
});
</script>

<style scoped>
.product-list {
  padding: 20px;
  background-color: #ffffff;
  color: #000000;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}
</style>