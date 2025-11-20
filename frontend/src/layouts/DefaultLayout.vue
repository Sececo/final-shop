<template>
  <div>
    <Header>
      <template #nav>
        <NavBar @open-cart="showCart = true" />
      </template>
    </Header>

    <main class="main container">
      <slot />
    </main>

    <Footer />

    <UiModal v-if="showCart" @close="showCart = false">
      <template #title>Carrito</template>
      <template #body>
        <div v-if="cart.length === 0" class="kicker">Tu carrito está vacío</div>
        <div v-else style="display:flex; flex-direction:column; gap:12px;">
          <div v-for="item in cart" :key="item.id" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-weight:700">{{ item.name }}</div>
              <div class="kicker">x{{ item.qty }}</div>
            </div>
            <div>{{ formatPrice(item.price * item.qty) }}</div>
          </div>
          <div style="border-top:1px solid rgba(0,0,0,0.06); padding-top:12px; display:flex; justify-content:space-between;">
            <div class="kicker">Total</div>
            <div style="font-weight:800">{{ formatPrice(total()) }}</div>
          </div>
        </div>
      </template>
      <template #footer>
        <button class="btn" @click="checkout">Pagar</button>
        <button class="btn secondary" @click="clear">Vaciar</button>
      </template>
    </UiModal>
  </div>
</template>

<script lang="ts">
import Header from '../components/layout/Header.vue';
import NavBar from '../components/layout/NavBar.vue';
import Footer from '../components/layout/Footer.vue';
import UiModal from '../components/ui/Modal.vue';
import { useCart } from '../composables/useCart';

export default {
  components: { Header, NavBar, Footer, UiModal },
  data() { return { showCart: false }; },
  setup() {
    const { cart, total, clear } = useCart();
    const formatPrice = (v:number) => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(v);
    const checkout = () => { alert('Proceso de pago simulado'); };
    return { cart, total, formatPrice, checkout, clear };
  }
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--text);
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 20px;
  flex: 1;
}
</style>