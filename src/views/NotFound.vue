<template>
  <div class="flex flex-col justify-center items-center min-h-screen text-center">
    <span class="font-bold text-6xl">404</span>
    <div class="mb-4 text-gray-600 text-lg">Unauthorized! Access to this resource is denied.</div>
    <RouterLink to="/" class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white">
      Go to Home
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped></style>
