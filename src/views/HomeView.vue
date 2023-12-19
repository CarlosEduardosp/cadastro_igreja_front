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

    <div class="main">
      <h2>NOSSA PROGRAMAÇÃO</h2>

      <div class="card">
        <img src="../assets/imagens/local-de-culto-da-igreja-logotipo-icone-vetorial-simbolo-ilustracao-design_629573-50.avif" alt="" class="imagem">
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
    
    <footer>
      <rodape></rodape>
    </footer>
    <RouterView></RouterView>
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
  .main{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:40px;
    padding: 10px;
    box-shadow:  0px 0px 10px -1px;
    border-radius: 15px;
    margin-top: 20px;
    background-color: #0a428b81;

  }
  .card{
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    }
  .imagem{
    width: 100px;
    height: 100px;
    padding: 0px;
    object-fit:contain;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px;
  }

  li{
    padding: 5px 0px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 10px;
  }
  h2{
    color: #fffb00;
    letter-spacing: 0.3rem;
    padding: 15px;
    font-size: 1.5rem;
    text-shadow: #000000 0px 0px 15px;
  }
  .subtitulo{
    color: #f3f3f3;
    font-size: 250%;
    letter-spacing: 10px;
  }
  h4{
    color: #c2c2c2;
    text-shadow: #000000 0px 0px 5px;
  }
  .info{
    color:#9abbb9;
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

}
</style>