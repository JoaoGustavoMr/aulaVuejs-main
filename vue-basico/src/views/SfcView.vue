<script setup>
import { ref } from 'vue'
import CustomButton from '../components/CustomButton.vue'

// Estado reativo simples para contar quantas vezes o botão filho foi acionado
const cliques = ref(0)
</script>

<template>
  <section class="card">
    <h2>1. Arquitetura baseada em componentes (SFC)</h2>
    <p>HTML, CSS e JavaScript juntos em um único arquivo .vue.</p>
    
    <!-- 
      Uso do componente reutilizável CustomButton:
      - 'rotulo': É uma propriedade (prop) enviada do componente pai para o filho definir o texto.
      - '@clicado': É um evento personalizado emitido pelo filho que incrementa a variável 'cliques' no pai.
    -->
    <CustomButton rotulo="Clique aqui" @clicado="cliques++" />
    
    <!-- Exibição reativa do contador de cliques -->
    <p>O componente filho emitiu o evento {{ cliques }} vez(es).</p>
  </section>
</template>