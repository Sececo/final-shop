<template>
  <aside class="sidebar">
    <div class="sidebar__logo">Final Shop</div>
    <nav>
      <router-link to="/dashboard" class="sidebar__item">Dashboard</router-link>
      <router-link to="/clientes" class="sidebar__item">Clientes</router-link>
      <router-link to="/productos" class="sidebar__item">Productos</router-link>
      <router-link to="/ventas" class="sidebar__item">Ventas</router-link>
      <router-link to="/pedidos" class="sidebar__item">Pedidos</router-link>
      <router-link to="/pagos" class="sidebar__item">Pagos</router-link>
      <router-link to="/reportes" class="sidebar__item">Reportes</router-link>
      <router-link to="/usuarios" class="sidebar__item">Usuarios</router-link>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  background: #fff;
  box-shadow: 0 0 24px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  z-index: 200;
}
.sidebar__logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #111;
  text-align: center;
  letter-spacing: 1px;
}
.sidebar__item {
  display: block;
  padding: 0.7rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  color: #111;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}
.sidebar__item.router-link-active,
.sidebar__item:hover {
  background: #111;
  color: #fff;
}
</style>