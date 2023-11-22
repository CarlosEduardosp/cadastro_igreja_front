<template>
    <div class="corpo">
    <div>
        <Header></Header>
    </div>
    <div>
    <ul>
        <li v-for="item in dados_api" :key="item.id">
            <div class="card">
                nome: {{ item.nome }} 
            </div>
        </li>
    </ul>
    </div>    
    </div>
</template>

<script>
import Header from '../components/header.vue'
import { ConectarApi } from '../APIconection/api_connection';

export default {
    name: 'Pessoas',

    components: {
        Header
    },
    data() {
        return {
            dados_api: []
        }
    },
    methods: {

       async iniciar() {

            // Realiza a primeira requisição
            const data = await ConectarApi();
            console.log(data);

            if(data.status_code == 200){
                this.dados_api = data.body
            }
             
        },
    },
    mounted() {
        this.iniciar();
    }
}

</script>

<style scoped>

.corpo {
    background: linear-gradient(#34629ee8, #000e27);
    background-position: center, center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
  }
</style>