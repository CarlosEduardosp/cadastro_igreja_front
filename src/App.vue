<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
  <!--<header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    
  </header>-->
  <RouterLink to="/"></RouterLink>
  <RouterView />
  </div>
</template>

<style scoped>
@media (max-width: 720px) {
  .app{
    height: 100%;
    background: linear-gradient(#34629ee8, #000e27);
    background-position: center, center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
  }
}
</style>