<template>
  <header class="header">
    <div class="header__title">
      <slot />
    </div>
    <div class="header__user">
      <!-- Aquí puedes poner el nombre del usuario y un icono -->
      <span>Usuario</span>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  position: fixed;
  left: 220px;
  top: 0;
  right: 0;
  height: 64px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
}
.header__title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #111;
}
.header__user {
  font-size: 1rem;
  color: #111;
}
</style>