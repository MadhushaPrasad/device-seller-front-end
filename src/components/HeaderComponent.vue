<template>
  <div>
    <header class="bg-gray-700">
      <nav
        class="flex justify-between items-center mx-auto p-6 lg:px-8 max-w-7xl"
        aria-label="Global"
      >
        <div class="flex items-center gap-x-12">
          <a href="#" class="flex items-center space-x-2">
            <img src="./../assets/logo.svg" width="40" alt="Vue logo" />
            <span class="font-semibold text-lg">Vue</span>
          </a>
          <div class="hidden lg:flex lg:gap-x-12">
            <div class="flex space-x-4 ml-6">
              <RouterLink to="/admin" class="hover:text-gray-300">Admin</RouterLink>
              <RouterLink to="/home" class="hover:text-gray-300">Home</RouterLink>
            </div>
          </div>
        </div>
        <div class="lg:hidden flex">
          <button
            type="button"
            class="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex">
          <RouterLink to="/register" class="mr-4 hover:text-gray-300">Signup</RouterLink>
          <RouterLink to="/login" class="hover:text-gray-300">Login</RouterLink>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="z-10 fixed inset-0"></div>
        <div
          class="right-0 z-10 fixed inset-y-0 bg-gray-700 px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto"
        >
          <div class="flex justify-between items-center">
            <a href="#" class="flex items-center space-x-2 -m-1.5 p-1.5">
              <img src="./../assets/logo.svg" width="40" alt="Vue logo" />
              <span class="font-semibold text-lg">Vue</span>
            </a>

            <button type="button" class="-m-2.5 p-2.5 rounded-md text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flow-root mt-6">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <RouterLink
                  to="/admin"
                  class="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-gray-500 hover:text-gray-300 text-base/7"
                  >Admin</RouterLink
                >
                <RouterLink
                  to="/home"
                  class="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-gray-500 hover:text-gray-300 text-base/7"
                  >Home</RouterLink
                >
              </div>
              <div class="flex flex-col space-y-2 py-6">
                <RouterLink to="/register" class="mr-4 hover:text-gray-300">Signup</RouterLink>
                <RouterLink to="/login" class="hover:text-gray-300">Login</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
</style>
