<script>
export default {
    name: 'logoHeader'
}
</script>

<template>
  <div class="inicio">
      <header>
        <h1 class="titulo">Igreja Cristã Nova Vida</h1>
        <h2>Araruama</h2>
      </header>
      
      <nav>
        
        <ul>
          <li>
            <RouterLink to="/">HOME</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">SOBRE NÓS</RouterLink>
          </li>
          <li>
            <a href="/contato">CONTATO</a>
          </li>
          <li>
            <a href="/cadastro">CADASTRO</a>
          </li>
        </ul>
        
      </nav>
    </div>
    
</template>


<style scoped>
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
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}

ul li {
  list-style-type: none;
  font-size: 15px;
}

ul li a {
  text-decoration: none;
  color: #f3f3f3;
}


</style>