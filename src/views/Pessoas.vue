<template>
    <div class="corpo">
        <div>
            <Header></Header>
        </div>
        <div>
            <ul>
                <div class="titulo">
                    <p>Pessoas Cadastradas</p>
                </div>

                <div class="subs">
                    <div class="subregistro">
                        Registro
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
                        <div class="Id">{{ item.id }}</div>
                        <div class="nome">{{ item.nome }}</div>
                        <div class="data" >{{ calcularIdade('14051986') }}</div>
                        <div class="telefone">{{ item.telefone }}</div>
                        <div class="email">{{ item.email }}</div>
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
        background: linear-gradient(#34629ee8, #000e27);
        background-position: center, center;
        background-size: cover;
        background-position-y: 0px;
        background-repeat: no-repeat;
    }

    li {
        display: flex;
        justify-content: center;
    }

    .card {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: baseline;
        background-color: #f3f3f3;
        gap: 30px;
    }

    .subs {
        display: flex;
        justify-content: center;
        gap: 14%;
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

    li {
        display: flex;
        justify-content: center;
    }

    .card {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: baseline;
        background-color: #f3f3f3;
        gap: 30px;
    }

    .subs {
        display: flex;
        justify-content: center;
        gap: 14%;
    }
}
</style>