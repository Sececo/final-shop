<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add="$emit('add', $event)"
    />
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
defineProps({ products: Array })
defineEmits(['add'])
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  justify-items: center;
}
@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>