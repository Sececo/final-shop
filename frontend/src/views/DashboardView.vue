<template>
  <div class="dashboard">
    <Header>Dashboard</Header>
    <div class="dashboard__cards">
      <Card title="Ventas del día" icon="chart-bar" value="12,500" />
      <Card title="Productos con poco stock" icon="exclamation" value="5" />
      <Card title="Pedidos pendientes" icon="clock" value="3" />
      <Card title="Últimas ventas" icon="receipt" value="8" />
    </div>
    <div class="dashboard__quick">
      <!-- Accesos rápidos a módulos -->
      <router-link to="/ventas" class="quick__btn">Registrar Venta</router-link>
      <router-link to="/clientes" class="quick__btn">Nuevo Cliente</router-link>
      <router-link to="/productos" class="quick__btn">Nuevo Producto</router-link>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/layout/Header.vue'
import Card from '../components/ui/Card.vue'
</script>

<style scoped>
.dashboard {
  margin-left: 220px;
  padding: 80px 2rem 2rem 2rem;
}
.dashboard__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}
.dashboard__quick {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.quick__btn {
  background: #111;
  color: #fff;
  border-radius: 12px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, transform 0.2s;
}
.quick__btn:hover {
  background: #222;
  transform: scale(1.04);
}
@media (max-width: 1200px) {
  .dashboard__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .dashboard__cards {
    grid-template-columns: 1fr;
  }
}
</style>