<template>
    <div class="section">
        <Header></Header>
        <div class="main">
        Contato
    </div>
    </div>
    
</template>

<script>
import Header from '../components/header.vue';

export default {
    name: 'Contato',
    components: {
        Header
    }
}
</script>

<style scoped>
@media (max-width: 720px) {
    .section {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        
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