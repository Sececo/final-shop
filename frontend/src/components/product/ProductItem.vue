<template>
  <div class="product-card">
    <div class="product-card__img">
      <img :src="product.image || '/placeholder.png'" alt="" />
    </div>
    <div class="product-card__info">
      <h3>{{ product.name }}</h3>
      <div class="product-card__price">{{ formatPrice(product.price) }}</div>
      <div class="product-card__actions">
        <button class="btn btn-primary" @click="$emit('add', product)">Agregar al carrito</button>
        <router-link :to="`/producto/${product.id}`" class="btn btn-secondary">Ver más</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({ product: { type: Object, required: true } });
const emit = defineEmits(['add']);
function formatPrice(v) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(v);
}
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  width: 100%;
  max-width: 320px;
}
.product-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  transform: scale(1.03);
}
.product-card__img {
  width: 100%;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  background: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.product-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.product-card:hover .product-card__img img {
  transform: scale(1.06);
}
.product-card__info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: #181818;
  text-align: center;
}
.product-card__price {
  font-weight: 700;
  color: #181818;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.05rem;
}
.product-card__actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.btn {
  border-radius: 8px;
  padding: 0.45rem 1.1rem;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.2s;
  border: none;
}
.btn-primary {
  background: #181818;
  color: #fff;
}
.btn-primary:hover {
  background: #222;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}
.btn-secondary {
  background: #fff;
  color: #181818;
  border: 1px solid #181818;
}
.btn-secondary:hover {
  background: #ececec;
  color: #181818;
}
</style>