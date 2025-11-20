<template>
  <div class="modal" @click.self="$emit('close')" style="position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:80;">
    <div style="width:100%; max-width:720px; background:var(--white); color:var(--text); border-radius:12px; padding:18px; box-shadow:var(--shadow);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="font-weight:800;"> <slot name="title"></slot> </div>
        <button class="btn secondary" @click="$emit('close')">Cerrar</button>
      </div>
      <div style="margin-bottom:12px;"><slot name="body"></slot></div>
      <div style="display:flex; justify-content:flex-end; gap:8px;"><slot name="footer"></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'UiModal' };
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>