<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="bg-dark navbar navbar-expand navbar-dark">
      <a href="#" class="ms-1 navbar-brand">
        <img src="./assets/logo.svg" width="40" alt="Vue logo" />

        Vue
      </a>

      <div class="me-auto navbar-nav">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link"> Admin </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home" class="nav-link"> Home </router-link>
        </li>
      </div>

      <div class="ms-auto navbar-nav">
        <li class="nav-item">
          <router-link to="/register" class="nav-link"> Signup </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link"> Login </router-link>
        </li>
      </div>
    </nav>
    <div class="p-4 container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
