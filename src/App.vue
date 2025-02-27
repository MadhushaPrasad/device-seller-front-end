<template>
  <div>
    <nav class="bg-dark navbar navbar-expand navbar-dark">
      <a
        href="#"
        class="ms-1 navbar-brand"
      >
        <img
          src="./assets/logo.png"
          width="40"
          alt="Vue logo"
        >

        Vue
      </a>

      <div class="me-auto navbar-nav">
        <li class="nav-item">
          <router-link
            to="/admin"
            class="nav-link"
          >
            Admin
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/home"
            class="nav-link"
          >
            Home
          </router-link>
        </li>
      </div>

      <div class="ms-auto navbar-nav">
        <li class="nav-item">
          <router-link
            to="/register"
            class="nav-link"
          >
            Signup
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
          >
            Login
          </router-link>
        </li>
      </div>
    </nav>
    <div class="p-4 container">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
