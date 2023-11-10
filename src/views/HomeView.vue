<script >
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue';

export default {
  name: 'Home',

  components: {
    Header
  }

}
</script>

<template>
  <div class="section">

    
      <Header></Header>
      
    
    <footer>
      rodapé
    </footer>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
@media (max-width: 720px){
  .section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
}
}


@media (min-width: 721px){

  .section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
}
.hr1{  
  margin-top: 10px;
  height: 1px;
  border: none;
  background-color: #0055a5;
}

.hr2{
  margin-bottom: 10px;
  height: 1px;
  border: none;
  background-color: #0055a5;
}

.titulo{
  padding: 10px;
}
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inicio {
  display: flex;
  flex-direction: column;
}

form{
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 15px;
}

.dadospessoais{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: #fcfcfc;
  width: 300px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px;
  margin-bottom: 30px;
}
.end{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: #fcfcfc;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px;
}

.sub{
  width: 280px;
  background-color: rgb(198, 240, 247);
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  margin: 10px;
}

.subtitulo{
  font-size: 20px;
  color: #000000;
}
.input{
  width: 250px;
  height: 30px;
  text-align: center;
  margin: 2px 0px 10px 0px;
  border-radius: 5px;
  border: none;
  background-color: #e4e4e4;
  outline: none;
}

button{
  padding: 10px;
  width: 300px;
  height: 50px;
  font-size: 15px;
  letter-spacing: 2px;
  border-radius: 10px;
  border: none;
  background-color:  #0055a5;
  color: #ffffff;  
  transition: 0.5s;
  font-weight: bold;
}

button:hover{
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