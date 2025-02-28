<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full h-full">
    <nav class="flex items-center bg-gray-700 px-4 py-3 w-full text-white">
      <a href="#" class="flex items-center space-x-2">
        <img src="./assets/logo.svg" width="40" alt="Vue logo" />
        <span class="font-semibold text-lg">Vue</span>
      </a>

      <div class="flex space-x-4 ml-6">
        <RouterLink to="/admin" class="hover:text-gray-300">Admin</RouterLink>
        <RouterLink to="/home" class="hover:text-gray-300">Home</RouterLink>
      </div>

      <div class="flex space-x-4 ml-auto">
        <RouterLink to="/register" class="hover:text-gray-300">Signup</RouterLink>
        <RouterLink to="/login" class="hover:text-gray-300">Login</RouterLink>
      </div>
    </nav>

    <div class="p-4 container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
