<template>
  <button class="custom-btn" :type="type">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'button' }
})
</script>

<style scoped>
.custom-btn {
  background: var(--color-btn-bg);
  color: var(--color-btn-text);
  border: none;
  border-radius: 32px;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--color-shadow);
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  letter-spacing: 1px;
}
.custom-btn:hover {
  background: var(--color-btn-bg-hover);
  box-shadow: var(--color-shadow-hover);
  transform: translateY(-2px) scale(1.05);
}
</style>