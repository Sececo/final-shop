<template>
  <div class="login">
    <form class="login__form" @submit.prevent="login">
      <h2>Iniciar sesión</h2>
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <button class="login__btn" type="submit">Entrar</button>
      <div v-if="error" class="login__error">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const error = ref('')

function login() {
  if (!email.value || !password.value) {
    error.value = 'Completa todos los campos'
    return
  }
  // Aquí va la lógica de login y redirección por rol
  error.value = ''
}
</script>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
}
.login__form {
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: var(--color-shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 320px;
}
.login__form h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1rem;
  text-align: center;
}
.login__form input {
  padding: 0.7rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  font-size: 1rem;
  color: #111;
  background: #f8f9fa;
  transition: border 0.2s;
}
.login__form input:focus {
  border-color: #111;
  outline: none;
}
.login__btn {
  background: #111;
  color: #fff;
  border-radius: 12px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;
}
.login__btn:hover {
  background: #222;
  transform: scale(1.04);
}
.login__error {
  color: #d32f2f;
  font-size: 0.95rem;
  text-align: center;
}
</style>