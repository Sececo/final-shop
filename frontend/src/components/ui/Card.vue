<template>
  <div class="card"><slot /></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  background: var(--surface);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.45);
  color: var(--text);
}
</style>