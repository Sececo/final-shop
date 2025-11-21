<template>
  <div class="modal-backdrop" v-if="visible">
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({ visible: Boolean })
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(34,34,34,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
  transition: background 0.2s;
}
.modal-content {
  background: var(--color-bg-card);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: var(--color-shadow-hover);
  animation: modalIn 0.25s;
}
@keyframes modalIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>