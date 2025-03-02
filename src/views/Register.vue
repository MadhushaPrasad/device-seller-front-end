<template>
  <div>Register</div>
</template>

<script>
import User from '@/models/user'
export default {
  name: 'RegisterView',
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessages: '',
    }
  },

  methods: {},
}
</script>

<style scoped></style>
