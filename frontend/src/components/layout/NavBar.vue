<template>
  <nav class="navbar">
    <router-link to="/" class="kicker">Inicio</router-link>
    <router-link to="/productos" class="kicker">Productos</router-link>
    <a href="#" class="kicker">Contacto</a>
    <button class="btn" @click="$emit('open-cart')">
      Carrito <span v-if="count>0" style="margin-left:8px; font-weight:700;">({{ count }})</span>
    </button>
  </nav>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useCart } from '../../composables/useCart';
export default {
  name: 'NavBar',
  setup() {
    const { cart } = useCart();
    const count = computed(()=> cart.reduce((s:any,i:any)=> s + i.qty, 0));
    return { count };
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 18px;
  align-items: center;
}
.kicker {
  color: var(--muted);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 8px;
}
.kicker.router-link-active {
  color: var(--text);
  background: rgba(255,255,255,0.02);
}
.btn {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background-color: var(--primary-dark);
}
</style>