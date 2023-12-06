<template>
  <div class="section">
    <Header></Header>
    <div class="main">
      conteudo sobre
    </div>
      <footer>
        <rodape></rodape>
      </footer>
    
  </div>
  
</template>

<script>
import Header from '../components/header.vue'
import rodape from '../components/rodape.vue';

export default {
  name: 'Sobre',

  components: {
    Header,
    rodape
  }

}
</script>

<style scoped>
@media (max-width: 720px) {
  .section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }
}


@media (min-width: 721px) {

  .section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fcfcfc;
    background: linear-gradient(#34629ee8, #000e27);
    background-position: center, center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
  }

}
</style>