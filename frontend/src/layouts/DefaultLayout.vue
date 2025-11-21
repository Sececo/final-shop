<template>
  <div class="layout">
    <NavBar />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/layout/NavBar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(120deg, #f8fafc 60%, #e5e7eb 100%);
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 80vh;
  margin: 0;
  padding: 0;
}
</style>