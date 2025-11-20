import { reactive } from 'vue';

const state = reactive({
  cart: [] as any[],
});

export function useStore() {
  return {
    state,
    addToCart(item: any) { state.cart.push(item); },
    removeFromCart(index:number){ state.cart.splice(index,1); }
  };
}

export default {
  install(app:any) { app.config.globalProperties.$store = useStore(); },
  state
};

export const useStoreInstance = () => useStore();