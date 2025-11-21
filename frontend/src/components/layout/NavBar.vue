<template>
  <nav class="navbar">
    <div class="navbar__logo">Final Shop</div>
    <div class="navbar__actions">
      <router-link to="/productos" class="navbar__btn">Productos</router-link>
      <button class="navbar__btn" @click="onOpenCart">Carrito</button>
    </div>
  </nav>
</template>

<script setup>
defineProps(['onOpenCart'])
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ececec;
}
.navbar__logo {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #181818;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.navbar__actions {
  display: flex;
  gap: 1rem;
}
.navbar__btn {
  background: #fff;
  color: #181818;
  border: 1px solid #181818;
  border-radius: 8px;
  padding: 0.5rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}
.navbar__btn:hover {
  background: #181818;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
  transform: scale(1.04);
}
</style>