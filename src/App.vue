<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="w-full h-full">
    <HeaderComponent />
    <div class="mx-auto p-4 max-w-7xl">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
