<template>
  <div class="corpo">


    <form action="">

      <Header></Header>

      <div>
        <h2 class="titulo">Formulário para cadastro</h2>
      </div>



      <div class="dadospessoais">

        <div class="sub">
          <p class="subtitulo">Dados Pessoais:</p>
        </div>

        <label for="nome">Nome</label>
        <input class="input" type="text" id="nome">

        <label for="telefone">Telefone</label>
        <input class="input" type="text" id="telefone">

        <label for="Email">Email</label>
        <input class="input" type="email" id="Email">

        <label for="data_nascimento">Data de Nascimento</label>
        <input class="input" type="date" id="data_nascimento">

        <div class="sexo">

          <label for="">Sexo: </label>
          <label>
            <input class="input-sexo" type="radio" name="sexo" value="masculino"> Masculino
          </label>
          <label>
            <input class="input-sexo" type="radio" name="sexo" value="feminino"> Feminino
          </label>

        </div>
      </div>


      <div class="end">

        <div class="sub">
          <p class="subtitulo">Endereço:</p>
        </div>

        <label>Estado</label>
        <input class="input" type="text" id="estado">

        <label>Cidade</label>
        <input class="input" type="text" id="cidade">

        <label>Bairro</label>
        <input class="input" type="text" id="bairro">

        <label>Logradouro</label>
        <input class="input" type="text" id="logradouro">

        <label>Numero</label>
        <input class="input" type="text" id="numero">

        <label>Complemento</label>
        <input class="input" type="text" id="complemento">

      </div>

      <button type="submit">CADASTRAR</button>

    </form>
  </div>
</template>
  
<script>
import Header from '../components/header.vue';
import { ConectarApi } from '../APIconection/api_connection';
import { fazerRequisicaoPOST } from '../APIconection/api_connection';

export default {
  name: 'Cadastro',

  components: {
    Header,
  },
  data() {
    return {
      dados_api: []
    }
  },
  methods: {
    async iniciar() {
      try {
        // Realiza a primeira requisição
        const data = await ConectarApi();
        var dados = data;  // dados.body = conteudo, dados.status_code = valor             
        console.log(dados);

        // Realiza a segunda requisição apenas se a primeira for bem-sucedida
        const dadosParaEnviar = {
          'nome': '30',
          'data_nascimento': "01012000",
          'telefone': "123456789",
          'email': "35@vidu.com",
          'sexo': "m",
          'estado': "Estado",
          'cidade': "Cidade",
          'bairro': "Bairro",
          'logradouro': "Rua Exemplo",
          'numero': "123",
          'status': true,
          'imagem': "caminho/para/imagem.jpg"
        };

        const dadosJson = JSON.stringify(dadosParaEnviar);

        const respostaPost = await fazerRequisicaoPOST(dadosParaEnviar);
        console.log(respostaPost);
      } catch (error) {
        // Trata os erros para ambas as requisições aqui
        console.error('Erro:', error);
      }
    },
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .dadospessoais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
    margin-bottom: 30px;
  }

  .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 300px;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
  }

  .sub {
    width: 280px;
    background-color: rgb(198, 240, 247);
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin: 10px;
  }

  .subtitulo {
    font-size: 20px;
    color: #000000;
  }

  .input {
    width: 250px;
    height: 30px;
    text-align: center;
    margin: 2px 0px 10px 0px;
    border-radius: 5px;
    border: none;
    background-color: #e4e4e4;
    outline: none;
  }

  button {
    padding: 10px;
    width: 300px;
    height: 50px;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 10px;
    border: none;
    background-color: #0055a5;
    color: #ffffff;
    transition: 0.5s;
    font-weight: bold;
  }

  button:hover {
    font-size: 20px;
    background-color: #0055a5;
    color: #ffffff;
  }
}

@media (min-width: 721px) {
  .hr1 {
    margin-top: 10px;
    height: 1px;
    border: none;
    background-color: #0055a5;
  }

  .hr2 {
    margin-bottom: 10px;
    height: 1px;
    border: none;
    background-color: #0055a5;
  }

  .titulo {
    padding: 10px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inicio {
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .dadospessoais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
    margin-bottom: 30px;
  }

  .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 300px;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
  }

  .sub {
    width: 280px;
    background-color: rgb(198, 240, 247);
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin: 10px;
  }

  .subtitulo {
    font-size: 20px;
    color: #000000;
  }

  .input {
    width: 250px;
    height: 30px;
    text-align: center;
    margin: 2px 0px 10px 0px;
    border-radius: 5px;
    border: none;
    background-color: #e4e4e4;
    outline: none;
  }

  button {
    padding: 10px;
    width: 300px;
    height: 50px;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 10px;
    border: none;
    background-color: #0055a5;
    color: #ffffff;
    transition: 0.5s;
    font-weight: bold;
  }

  button:hover {
    font-size: 20px;
    background-color: #0055a5;
    color: #ffffff;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    padding: 10px;
  }

  ul li {
    list-style-type: none;
    font-size: 15px;
  }

  ul li a {
    text-decoration: none;
  }

}
</style>