<script >
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue';
import rodape from '../components/rodape.vue';

export default {
  name: 'Home',

  components: {
    Header,
    rodape
  }

}
</script>

<template>
  <div class="section">


    <Header></Header>    
      
    <div class="inicio">
      <p class="titulo_anuncio">Conheça Nossa Canção</p>
      <p class="sub_anuncio"> MINHA FORTALEZA</p>
      <a href="https://www.youtube.com/watch?app=desktop&v=3X1qF4Nek6w">
        <img class="anuncio" src="../assets/anuncios/maxresdefault.jpg" alt="">
        </a>
        <P class="obs">Disponível em Todas as Plataformas Digitais.</P>
      </div>

      <div class="inicio">
      <p class="titulo_anuncio">Especial de Natal</p>
      <p class="sub_anuncio">NATAL DE PAZ</p>
      <a href="https://www.youtube.com/watch?v=HMbno5I0nXU">
        <img class="anuncio" src="../assets/anuncios/411896263_18029654497753675_3391167480057358289_n.jpg" alt="">
        </a>
        <P class="obs">Dê um clique na imagem para ver o vídeo no YouTube.</P>
      </div>

    <div class="main">
      <h2>NOSSA PROGRAMAÇÃO</h2>

      <div class="card">
        <img
          src="../assets/imagens/igreja.jpg"
          alt="" class="imagem">
        <div class="texto">
          <p class="subtitulo">Cultos</p>
        </div>
      </div>

      <div class="conteudo">
        <ul>
          <li>
            <h4>Culto de Adoração</h4>
            <p class="info">Quarta Feira às 19:30h</p>
          </li>
          <li>
            <h4>Culto de Oração</h4>
            <p class="info">Sexta feira às 20h</p>
          </li>
          <li>
            <h4>Domingo</h4>
            <p class="info">Manhã às 10h, Noite às 19h</p>
          </li>
          <li>
            <h4>Ceia do Senhor</h4>
            <p class="info">1º Domingo do mês, às 10h e 19h</p>

          </li>
          <li>
            <h4>Culto da Familia</h4>
            <p class="info">2º Domingo do mês, às 10h e 19h</p>

          </li>
        </ul>
      </div>

      <div class="card">
        <div class="texto">
          <p class="subtitulo">Estudos</p>
        </div>
        <img src="../assets/imagens/biblia.png" alt="" class="imagem">
      </div>

      <div class="conteudo">
        <ul>
          <li>
            <h4>EBD</h4>
            <p class="info">Domingo às 8:30h</p>
          </li>
          <li>
            <h4>Discipulado para os Jovens</h4>
            <p class="info">Domingo às 9h</p>
          </li>
          <li>
            <h4>Discipulado para os Adolescentes</h4>
            <p class="info">Domingo às 9h</p>
          </li>
          <li>
            <h4>SETEB</h4>
            <p class="info">Início em 2024</p>
          </li>
        </ul>
      </div>

    </div>

    <RouterView></RouterView>
    <rodape class="rodape"></rodape>
  </div>  
</template>

<style scoped>
@media (max-width: 720px) {
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
    padding: 10px;
    box-shadow: 0px 0px 10px -1px;
    border-radius: 15px;
    margin-top: 20px;
    background-color: #0a428b81;
  }

  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .imagem {
    width: 100px;
    height: 100px;
    padding: 0px;
    object-fit: contain;
    border-radius: 10px;
    background-color: #fff;

  }

  li {
    padding: 5px 0px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  h2 {
    color: #fcfcfc;
    text-shadow: #00ffea 0px 0px 15px;
    letter-spacing: 0.3rem;
    padding: 15px;
    font-size: 1.5rem;

  }

  .subtitulo {
    color: #f3f3f3;
    font-size: 250%;
    letter-spacing: 10px;
  }

  h4 {
    color: #f0f0f0;
    text-shadow: #000000 0px 0px 5px;
  }

  .info {
    color: #cef8f5;
  }

  .rodape {
    width: 100%;
    height: auto;
    background-color: transparent;
    box-shadow: none;
    gap: 0px; 
    border-radius: 0px;   
  }
  .inicio{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
  }
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .anuncio{
    width: 80%;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 0px;
  }
  .titulo_anuncio{
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .sub_anuncio{
    color: #ffee00;
    font-size: 2rem;
    margin-bottom: 10px;
    letter-spacing: 3px;
    font-weight: bold;
    text-shadow: #000000 0px 0px 10px;

  }
  .obs{
    color: #ffffff;
    font-size: 1.1rem;
    margin-top: 5px;
  }

}


@media (min-width: 721px) {

  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
  }

}</style>