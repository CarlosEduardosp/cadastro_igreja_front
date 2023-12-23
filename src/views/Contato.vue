<template>
    <div class="section">
        <Header></Header>

            <div class="main">

                <p class="contatos">CONTATOS</p>
                
                    <ul>
                        <p class="titulo">Secretaria</p>
                        <li>
                            <p class="sub">Email: </p>
                            <p class="atributo">Icnv.araruama@gmail.com</p>
                        </li>
                        <li>
                            <p class="sub">WhatsApp: </p>
                            <p class="atributo">(22)99716-6769</p>
                        </li>
                        <p class="titulo">Mídias Sociais</p>
                        <li>
                            <p class="sub">Instagram: </p>
                            <a href="https://www.instagram.com/icnv.araruama/" class="atributo">Acessar</a>
                        </li>
                        <li>
                            <p class="sub">Facebook: </p>
                            <a href="https://www.facebook.com/IcnvAraruamarj/?locale=pt_BR" class="atributo">Acessar</a>
                        </li>
                        <p class="titulo">Canal</p>
                        <li>
                            <p class="sub">YouTube: </p>
                            <a href="https://www.youtube.com/c/ICNVAraruama" class="atributo">Acessar</a>
                        </li>
                    </ul>
                       
            </div>

        <footer>
            <rodape class="rodape"></rodape>
        </footer>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import rodape from '../components/rodape.vue';

export default {
    name: 'Contato',
    components: {
        Header,
        rodape
    },
    data () {
        return {
            imagem: '',
        }
    },
    // No seu componente Vue
  methods: { 

    
       
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
    .main{
        background-color:  #0a428b81 ;
        width: 80%;
        height: 750px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        box-shadow: 0px 0px 8px 1px; 
        border-radius:10px;  
        margin-top: 20px; 
        gap: 30px;    
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;        
        color: #fcfcfc;
    }
    .contatos{
        
        font-size: 2rem;
        letter-spacing: 2px;
        color: #fcfcfc;
        text-shadow: #00ffea 0px 0px 15px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .sub{
        font-size: 1.5rem;
    }
    .atributo{
        font-size: 1.1rem;
    }
    .titulo{
        text-align: center;
        font-size: 1.2rem;
        color: #65fff2;
        padding-top: 40px;
        padding-bottom: 20px;
    }
    a{
        list-style-type: none;
        text-decoration: none;
        font-size: 1.2rem;
        color: #040280;
        background-color: #00ffea;
        border-radius: 8px;
        padding: 5px;
    }
    .rodape {
    width: 100%;
    height: auto;
    background-color: transparent;
    box-shadow: none;
    gap: 0px;   
    border-radius: 0px;   

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

    }

}
</style>"