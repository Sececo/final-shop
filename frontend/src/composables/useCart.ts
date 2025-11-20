// src/composables/useCart.ts

import { ref, watch } from 'vue';
import { useStore } from '../store';

const open = ref(false);

// Cargar carrito desde localStorage
const stored = localStorage.getItem('fs_cart');
const cart = ref<any[]>(stored ? JSON.parse(stored) : []);

// Guardar automáticamente en localStorage cuando cambie el carrito
watch(
  cart,
  (value) => {
    localStorage.setItem('fs_cart', JSON.stringify(value));
  },
  { deep: true }
);

// Export con NOMBRE (ya no default)
export function useCart() {
  const store = useStore();

  function add(item: any) {
    store.addToCart(item);
  }

  function openCart() {
    open.value = true;
  }

  const remove = (id: any) => {
    cart.value = cart.value.filter((c) => c.id !== id);
  };

  const clear = () => {
    cart.value = [];
  };

  const total = () =>
    cart.value.reduce((sum, c) => sum + c.price * c.qty, 0);

  return {
    cart,
    add,
    open,
    openCart,
    remove,
    clear,
    total,
  };
}
