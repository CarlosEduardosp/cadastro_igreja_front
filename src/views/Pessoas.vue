<script>
import Header from '../components/header.vue'
import { ConectarApi } from '../APIconection/api_connection';
import { obterImagemDaAPI } from '../APIconection/getimagemid'

export default {
    name: 'Pessoas',

    components: {
        Header
    },
    data() {
        return {
            dados_api: [],
            acesso: false,
            viewpessoa: false,
            login: '',
            senha: '',
            login_pessoas: 'icnvararuama',
            login_senha: '13709852',
            item_pessoa: '',
            imagem: ''
        }
    },
    methods: {

        async iniciar() {

            // Realiza a primeira requisição
            const data = await ConectarApi();


            if (data.status_code == 200) {
                this.dados_api = data.body
            }

        },
        abrirpessoa(item) {
            this.item_pessoa = item
        },

        efetuarLogin() {
            this.acesso = !this.acesso
            this.login = ''
            this.senha = ''
            this.viewpessoa = false
        },
        obterImagem(id) {

            // Use a função e manipule a URL da imagem como quiser
            obterImagemDaAPI(id)
                .then(url => {
                    this.imagem = url;
                    // Faça o que precisar com a URL da imagem, como exibir em uma tag <img>
                })
                .catch(error => {
                    console.error('Erro ao obter imagem:', error);
                });

        },

    },
    mounted() {
        this.iniciar();
    }
}

</script>

<template>
    <div class="corpo">
        <div>
            <Header></Header>
        </div>
        <div class="section">




            <form @submit.prevent="efetuarLogin" v-show="acesso == false">


                <div>
                    <h2 class="titulo">Efetue o Login:</h2>
                </div>



                <div class="dadospessoais">
                    <div class="dados">
                        <label for="login">Login</label>
                        <input class="input" v-model="login" type="text" placeholder="Login" id="login" required>

                        <label for="nome">Senha</label>
                        <input class="input" v-model="senha" type="password" placeholder="senha" id="senha" required>
                    </div>
                </div>

                <button class="entrar" type="submit">Entrar</button>

            </form>




            <ul v-show="acesso == true && viewpessoa == false">
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

                </div>


                <li v-for="item in dados_api" :key="item.id"
                    @click="abrirpessoa(item), viewpessoa = true, obterImagem(item.id)">

                    <div class="card">
                        <div class="id">{{ item.id }}</div>
                        <div class="nome">{{ item.nome }}</div>
                        <div class="idade">{{ item.idade }} </div>
                        <div class="telefone">{{ item.telefone }}</div>

                    </div>
                </li>

            </ul>

            <div class="pessoa" v-show="viewpessoa == true">
                
                <div class="image">
                    <p class="carregando" v-show="imagem == ''">Carregando Imagem...</p>
                    <img class="foto" :src="imagem" alt="">
                </div>
                
                <div class="subtitulo">
                    Dados Pessoais
                </div>

                <div class="text">
                    Nome: {{ item_pessoa.nome }}
                </div>
                <div class="text">
                    Data de Nascimento: {{ item_pessoa.data_nascimento }}
                </div>
                <div class="text">
                    Idade: {{ item_pessoa.idade }} sexo: {{ item_pessoa.sexo }}
                </div>
                <div class="text">
                    Email: {{ item_pessoa.email }}
                </div>
                <div class="text">
                    Telefone: {{ item_pessoa.telefone }}
                </div>
                <div class="status">
                    <div v-show="item_pessoa.status == true">Membro - Ativo</div>
                    <div v-show="item_pessoa.status == false">Membro - Inativo</div>
                </div>
                
                
                <div class="subtitulo">
                    Endereço
                </div>

                <div class="text">
                    Estado: {{ item_pessoa.estado }}
                    Cidade: {{ item_pessoa.cidade }}
                </div>
                <div class="text">
                    Bairro: {{ item_pessoa.bairro }} Logradouro: {{ item_pessoa.Logradouro }}
                </div>
                <div class="text">
                    Numero: {{ item_pessoa.numero }}
                </div>
                <div class="text">
                    Complemento: {{ item_pessoa.complemento }}
                </div>
                

                
                    
            </div>

            <button class="sair" @click="efetuarLogin" v-show="acesso == true && viewpessoa == false">Sair</button>
            <button class="sair" @click="acesso = true, viewpessoa = false, imagem = ''"
                v-show="viewpessoa == true">Voltar</button>

            <footer class="rodape">
                <h1>Rodapé</h1>
            </footer>
        </div>

    </div>
</template>
<style scoped>
@media (max-width: 720px) {

    .corpo {
        height: 100vh;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: (#00000085);
        box-shadow: 0px 0px 10px 0px;
        border-radius: 10px;
        width: 70%;
        margin-bottom: 5%;
        margin-top: 5%;
        height: 30rem;
    }

    .dadospessoais {
        width: 80%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dados {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-size: 1.2rem;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input {
        width: 100%;
        height: 2rem;
        text-align: center;
        margin: 2px 0px 10px 0px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 20px;
    }

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .entrar {
        padding: 15px;
        width: 65%;
        font-size: 15px;
        letter-spacing: 2px;
        border-radius: 10px;
        border: none;
        background-color: #0055a5;
        color: #ffffff;
        transition: 0.5s;
        font-weight: bold;
        margin-top: 5%;
        margin-bottom: 10%;
    }

    .sair {
        padding: 15px;
        width: 80%;
        font-size: 15px;
        letter-spacing: 2px;
        border-radius: 10px;
        border: none;
        background-color: #0055a5;
        color: #ffffff;
        transition: 0.5s;
        font-weight: bold;
        margin-top: 5%;
        margin-bottom: 10%;
    }

    ul {
        width: 80%;
        background-color: #f3f3f3;
        border-radius: 10px;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px;

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
        padding: 10px 0px;
        align-items: center;
        justify-content: baseline;
    }

    .id {
        width: 5%;
        margin-left: 5px;
    }

    .nome {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: baseline;
    }

    .idade {
        width: 8%;
        margin-right: 2%;
        margin-left: 2%;

    }

    .telefone {
        width: 35%;
    }

    .subs {
        display: flex;
        padding: 10px 0px;
        font-size: 1rem;
    }

    .subregistro {
        width: 10%;
        margin-left: 4px;
    }

    .subnome {
        width: 42%;
    }

    .subidade {
        width: 18%;
    }

    .subtelefone {
        width: 20%;
    }

    .rodape {}

    .pessoa{
        width: 80%;
        height: 900px;
        background-color: #b8fddb;
        padding: 10px; 
        border-radius: 10px;   
        box-shadow: 0px 0px 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;    
    }

    
    .text{
        font-size: 1.4rem;
        padding: 5px;
    }

    .status{
        font-size: 1.4rem;
        padding: 5px;
    }

    .subtitulo{
        font-size: 1.8rem;
        padding: 25px;
        letter-spacing: 2px;
    }

    .image{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
    }    
    .foto{
        width: 200px;
        border-radius: 20px;
    }
    .carregando{
        background-color: #000000;
        color: #f3f3f3;
        font-size: 1.5rem ;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
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
}
</style> 