<template>
  <header class="site-header">
    <div class="container header-row">
      <div class="brand">
        <div class="logo">FS</div>
        <div>
          <div>Final Shop</div>
          <small class="kicker">Colección minimal</small>
        </div>
      </div>
      <slot name="nav" />
    </div>
  </header>
</template>

<script lang="ts">
export default { name: 'SiteHeader' };
</script>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  color: var(--text);
}
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.brand {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo {
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 24px;
  margin-right: 8px;
}
.kicker {
  font-size: 12px;
  color: rgba(255,255,255,0.7);
}
</style>