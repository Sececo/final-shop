<template>
  <footer class="footer">
    <div class="container">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
        <div>© 2025 Final Shop</div>
        <div class="kicker">Blanco y negro • Minimal</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default { name: 'SiteFooter' };
</script>

<style scoped>
.footer {
  display:flex;
  justify-content:space-between;
  padding:18px 24px;
  color:var(--muted);
  border-top:1px solid rgba(255,255,255,0.03);
}
.links a { margin-left:12px; color:var(--muted); text-decoration:none; }
</style>