<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0 md:h-screen">
        <div
          class="bg-white dark:bg-gray-800 shadow md:mt-0 xl:p-0 dark:border dark:border-gray-700 rounded-lg w-full sm:max-w-md"
        >
          <div
            v-if="errorMessages"
            v-show="!dismiss"
            class="top-1 right-1 z-10 absolute flex flex-row justify-between items-center bg-red-100 dark:bg-red-800 p-4 border-red-500 border-l-4 rounded-b-lg w-100 text-red-700 dark:text-red-300 transition-all duration-300 ease-in-out"
            role="alert"
          >
            <p>{{ errorMessages }}</p>
            <span i-zondicons-close-solid cursor-pointer @click="dismissAlert" />
          </div>
          <div class="space-y-4 md:space-y-6 p-6 sm:p-8">
            <h1
              class="font-bold text-gray-900 dark:text-white text-xl md:text-2xl leading-tight tracking-tight"
            >
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegister" validate>
              <div>
                <label
                  for="name"
                  class="block mb-2 font-medium text-gray-900 dark:text-white text-sm"
                  >Full Name</label
                >
                <input
                  type="text"
                  name="name"
                  v-model="formData.name"
                  id="name"
                  class="block bg-gray-50 dark:bg-gray-700 p-2.5 border border-gray-300 focus:border-primary-600 dark:border-gray-600 dark:focus:border-blue-500 rounded-lg focus:ring-primary-600 dark:focus:ring-blue-500 w-full text-gray-900 dark:text-white text-sm dark:placeholder-gray-400"
                  placeholder="Madhusha Prasad"
                  required=""
                />
              </div>
              <div>
                <label
                  for="userName"
                  class="block mb-2 font-medium text-gray-900 dark:text-white text-sm"
                  >User Name</label
                >
                <input
                  type="text"
                  name="userName"
                  v-model="formData.username"
                  id="userName"
                  class="block bg-gray-50 dark:bg-gray-700 p-2.5 border border-gray-300 focus:border-primary-600 dark:border-gray-600 dark:focus:border-blue-500 rounded-lg focus:ring-primary-600 dark:focus:ring-blue-500 w-full text-gray-900 dark:text-white text-sm dark:placeholder-gray-400"
                  placeholder="Madhusha99"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 font-medium text-gray-900 dark:text-white text-sm"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  v-model="formData.password"
                  id="password"
                  placeholder="••••••••"
                  class="block bg-gray-50 dark:bg-gray-700 p-2.5 border border-gray-300 focus:border-primary-600 dark:border-gray-600 dark:focus:border-blue-500 rounded-lg focus:ring-primary-600 dark:focus:ring-blue-500 w-full text-gray-900 dark:text-white text-sm dark:placeholder-gray-400"
                  required=""
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    v-model="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 w-4 h-4"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 dark:text-gray-300"
                    >I accept the
                    <a
                      class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      href="#"
                      >Terms and Conditions</a
                    ></label
                  >
                </div>
              </div>
              <button
                type="submit"
                class="bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 dark:bg-green-600 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 w-full font-medium text-white text-sm text-center"
              >
                Create an account
              </button>
              <p class="font-light text-gray-500 dark:text-gray-400 text-sm">
                Already have an account?
                <a
                  href="#"
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >Login here</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import User from '@/models/user'
import vuex from 'vuex'
import authenticationService from '@/services/authentication.service'
export default {
  name: 'RegisterView',
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessages: '',
      terms: false,
      dismiss: false,
    }
  },

  computed: {
    ...vuex.mapGetters(['currentUser']),
  },

  methods: {
    dismissAlert() {
      this.dismiss = true
    },
    handleRegister() {
      if (!this.formData.username || !this.formData.password || !this.formData.name) {
        this.errorMessages = 'Please fill in all fields'
        return
      }

      this.loading = true

      authenticationService
        .register(this.formData)
        .then(() => {
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error(error)
          if (error?.response?.status === 409) {
            this.dismiss = false
            this.errorMessages = 'Username not valid'
          } else {
            this.dismiss = false
            this.errorMessages = 'Unexpected error accured'
          }
        })
        .then(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style scoped></style>
