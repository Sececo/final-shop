<template>
  <div id="app" class="app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
export default {
  name: 'App',
  components: { DefaultLayout }
};
</script>

<style>
/* App-level reset already en globals.css */
</style>