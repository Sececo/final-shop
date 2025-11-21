<template>
  <div class="card">
    <div class="card__icon">
      <!-- Puedes usar HeroIcons o FontAwesome aquí -->
      <slot name="icon"></slot>
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="card__value">{{ value }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  icon: String
})
</script>

<style scoped>
.card {
  background: var(--color-card-bg);
  border-radius: var(--radius-card);
  box-shadow: var(--color-shadow);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.card:hover {
  box-shadow: var(--color-shadow-hover);
  transform: scale(1.03);
}
.card__icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #111;
}
.card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 0.3rem;
  text-align: center;
}
.card__value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  text-align: center;
}
</style>