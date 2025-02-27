<template>
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
        <a
          href="/admin"
          class="nav-link"
        >Admin</a>
      </li>
      <li class="nav-item">
        <a
          href="/home"
          class="nav-link"
        >Home</a>
      </li>
    </div>

    <div class="ms-auto navbar-nav">
      <li class="nav-item">
        <a
          href="/register"
          class="nav-link"
        >Signup</a>
      </li>
      <li class="nav-item">
        <a
          href="/login"
          class="nav-link"
        >Login</a>
      </li>
    </div>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
