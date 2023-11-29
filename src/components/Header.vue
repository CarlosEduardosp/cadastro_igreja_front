<script>
export default {
    name: 'logoHeader'
}
</script>

<template>
  <div class="inicio">
      <header>
        <h1 class="titulo">Igreja Cristã Nova Vida</h1>
        <h2 class="subtitulo">Araruama</h2>
      </header>
      
      <nav>
        
        <ul>
          <li>
            <RouterLink to="/">HOME</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">HISTÓRIA</RouterLink>
          </li>
          <li>
            <a href="/contato">CONTATO</a>
          </li>
          <li>
            <a href="/cadastro">CADASTRO</a>
          </li>
          <li>
            <a href="/pessoas">ADM</a>
          </li>
        </ul>
        
      </nav>
    </div>
    
</template>


<style scoped>
.titulo{
  font-size: 1.5rem;
  padding: 10px;
}

.subtitulo{
  font-size: 1.3rem;
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
  gap: 4%;
  padding: 2%;
}

ul li {
  list-style-type: none;
  font-size: 0.8rem;
}

ul li a {
  text-decoration: none;
  color: #f3f3f3;
}


</style>