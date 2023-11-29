<script >
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue';

export default {
  name: 'Home',

  components: {
    Header
  }

}
</script>

<template>
  <div class="section">

    
      <Header></Header>
      
    
    <footer>
      rodapé
    </footer>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
@media (max-width: 720px){
  .section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
}


@media (min-width: 721px){

  .section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
}

}
</style>