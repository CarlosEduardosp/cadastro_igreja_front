<template>
  <div class="section">
    <Header></Header>
    <div class="main">

      <div class="sobre">

        <h2>ICNV Araruama</h2>

        <p class="texto">
          Em dezenove de novembro de 2011, nascia a Igreja Cristã Nova Vida em Araruama, como igreja filha da ICNV
          Mesquita-RJ, na liderança do pastor Jorge Garcia Duarte. Eu e minha esposa Ana Paula fomos enviados pelo Senhor,
          juntamente com nossa filha Emanuelly, de apenas oito meses de idade para uma cidade desconhecida por nós, porém
          já preparada por Deus para que uma árvore forte e frondosa fosse plantada aqui nesta terra, um lugar seguro para
          todos aqueles que buscam um lar espiritual, um lugar para edificar sua família.
          E como dizia nosso saudoso fundador, bispo Roberto McAlister:
                    
        </p>
        <p class="frase">“E que Deus o abençoe, rica e abundantemente!!”</p>
        <p class="assinatura">Pr Benaldo Medeiros.</p>
        
      </div>      
      <rodape></rodape>
    </div>
    
 
    
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
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .rodape{
    width: 80%;
    height: auto;   
  }
  .sobre {
    width: 80%;
    height: 750px;
    background-color: #0a428b81;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .texto{
    padding: 1.5rem;
    letter-spacing: 1px;
    text-align:justify;
    line-height: 1.3rem;
    color:#e0e0e0;
  }
  .frase{
    padding: 0rem 1.5rem;
    letter-spacing: 1px;
    text-align:center;
    line-height: 1.3rem;
    font-size: 1.3rem;
    color:#fff;
  }

  .assinatura{
    padding: 1.2rem 1.5rem;
    letter-spacing: 1px;
    text-align:left;
    line-height: 1.3rem;
    font-size: 1.2rem;
    color:#fff;
  }
  h2{
    text-align: center;
    letter-spacing: 1px;
    color: #ffffff;
    font-size: 1.6rem;
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

}</style>