<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!--<header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    
  </header>-->
  <RouterLink to="/"></RouterLink>
  <RouterView />
</template>

<style scoped>
*{
  background: linear-gradient(#34629ee8, #000e27);
  background-position: center, center;
  background-size:cover;
  background-position-y: 0px;
  background-repeat: no-repeat;
}
</style>
