<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" width="30" height="30" alt="">
      </a>
      <router-link to="/" class="navbar-brand">ContactApp</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Liste des contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Ajouter un contact</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>

export default {
  name: 'app'
}
</script>
