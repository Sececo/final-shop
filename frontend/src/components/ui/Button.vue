<template>
  <button :class="['btn', variant]" @click="$emit('click')"><slot /></button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({ variant: { type: String, default: 'primary' }});
</script>

<style scoped>
.btn {
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 700;
}
.btn.primary { background: var(--accent); color: #000; }
.btn.ghost { background: transparent; color: var(--text); border: 1px solid rgba(255,255,255,0.06); }
</style>