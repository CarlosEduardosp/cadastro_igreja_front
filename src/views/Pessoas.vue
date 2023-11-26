<template>
    <div class="corpo">
        <div>
            <Header></Header>
        </div>
        <div class="section">
            <ul>
                <div class="titulo">
                    <p>Pessoas Cadastradas</p>
                </div>

                <div class="subs">
                    <div class="subregistro">
                        Id
                    </div>
                    <div class="subnome">
                        Nome
                    </div>
                    <div class="subidade">
                        Idade
                    </div>
                    <div class="subtelefone">
                        Telefone
                    </div>
                    <div class="subemail">
                        Email
                    </div>

                </div>


                <li v-for="item in dados_api" :key="item.id">

                    <div class="card">
                        <div class="id">{{ item.id }}</div>
                        <div class="nome">{{ item.nome }}</div>
                        <div class="idade">{{ calcularIdade('14051986') }}</div>
                        <div class="telefone">{{ item.telefone }}</div>
                        <div class="email">{{ item.email }}</div>
                    </div>
                </li>
            </ul>
            <footer class="rodape">
            <h1>Rodapé</h1>
        </footer>
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

            if (data.status_code == 200) {
                this.dados_api = data.body
            }

        },

        calcularIdade(dataNascimentoString) {
            // Verifica se a string de entrada tem o formato esperado
            if (!/^\d{8}$/.test(dataNascimentoString)) {
                throw new Error('Formato de data inválido. Use o formato DDMMYYYY.');
            }

            // Extrai os componentes da data da string
            const dia = parseInt(dataNascimentoString.substring(0, 2), 10);
            const mes = parseInt(dataNascimentoString.substring(2, 4), 10);
            const ano = parseInt(dataNascimentoString.substring(4), 10);

            // Obtém a data atual
            const hoje = new Date();

            // Obtém o mês atual (1 a 12, janeiro a dezembro)
            const mesAtual = hoje.getMonth() + 1;

            // Obtém o ano atual
            const anoAtual = hoje.getFullYear();

            // Calcula a idade
            let idade = anoAtual - ano;

            // Ajusta a idade se o aniversário ainda não ocorreu este ano
            if (mesAtual < mes || (mesAtual === mes && hoje.getDate() < dia)) {
                idade--;
            }

            return idade;
        }
    },
    mounted() {
        this.iniciar();
    }
}

</script>

<style scoped>
@media (max-width: 720px) {
    .corpo {
        height: 100vh;
        background: linear-gradient(#34629ee8, #000e27);
        background-position: center, center;
        background-size: cover;
        background-position-y: 0px;
        background-repeat: no-repeat;        
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    ul {
        width: 90%;
        background-color: #f3f3f3;
        border-radius: 10px;
    }

    li {
        display: flex;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        transition: 0.5s;
    }

    li:hover {
        background-color: rgb(2, 247, 165);
    }

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 3px 0px;
    }

    .id {
        width: 5%;
        display: flex;
        justify-content: center;
    }

    .nome {
        width: 28%;

    }

    .idade {
        width: 10%;

    }

    .telefone {
        width: 20%;

    }

    .email {}


    .subs {
        display: flex;
        padding: 10px 0px;
        font-size: 18px;
    }

    .subregistro {
        width: 5%;
        padding-left: 7px;
    }

    .subnome {
        width: 26%;
    }

    .subidade {
        width: 11%;
    }

    .subtelefone {
        width: 20%;
    }
    .rodape{

    }
}

@media (min-width: 721px) {
    .corpo {
        background: linear-gradient(#34629ee8, #000e27);
        background-position: center, center;
        background-size: cover;
        background-position-y: 0px;
        background-repeat: no-repeat;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    ul {
        width: 90%;
        background-color: #f3f3f3;
        border-radius: 10px;
    }

    li {
        display: flex;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        transition: 0.3s;
    }

    li:hover {
        background-color: aquamarine;
    }

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 5px;
    }

    .id {
        width: 5%;
    }

    .nome {
        width: 28%;

    }

    .idade {
        width: 10%;

    }

    .telefone {
        width: 20%;

    }

    .email {}


    .subs {
        display: flex;
        padding: 10px 0px;
        font-size: 18px;
    }

    .subregistro {
        width: 5%;
        padding-left: 3px;
    }

    .subnome {
        width: 26%;
    }

    .subidade {
        width: 11%;
    }

    .subtelefone {
        width: 20%;
    }
}</style>