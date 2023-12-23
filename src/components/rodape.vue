<template>
    <div class="main">

        <div class="texto">
            <p class="text">ICNV - Araruama </p>

        </div>

        <div class="icones">
            <a href="https://www.facebook.com/IcnvAraruamarj/?locale=pt_BR">
                <img class="icone"  src="../assets/icones/facebook.png" alt="">
            </a>
            <a href="https://www.instagram.com/icnv.araruama/">
                <img class="icone"  src="../assets/icones/instagram.png" alt="">
            </a>
            <a href="https://www.youtube.com/c/ICNVAraruama">
                <img class="icone"  src="../assets/icones/youtube.png" alt="">
            </a>
                <a href="#">
                    <img class="icone" src="../assets/icones/whatsapp_1384023.png" alt="">
                    </a>
                </div>

        <div class="local">
            <p class="text">Nossa localização</p>
            <a href="https://www.google.com/maps?q=-22.867613687284106, -42.319221973376685" target="blank">
                <img class="mapa" src="../assets/imagens/maps.google.com_logo-1536x864.png" alt="">
            </a>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Rodape'
}
</script>

<style scoped>
.main{
    margin-bottom: 20px;
}
.texto {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-top: 40px;
}

.local {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    margin-top: 20px;
}

.mapa {
    width: 200px;
    height: 60px;
    padding: 10px;
    object-fit:cover;
    border-radius: 10px;
    background-color: #fff;
}
.icone{
    width: 40px;
    padding: 6px;
    border-radius: 10px;
    background-color: #f3f3f5;
}

.text {
    font-size: 1.3rem;
    letter-spacing: 2px;
    color: #f3f3f5;
}
.icones{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>