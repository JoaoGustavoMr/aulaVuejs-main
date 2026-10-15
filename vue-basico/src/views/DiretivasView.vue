<script setup>
import { ref } from 'vue'
import CustomButton from '../components/CustomButton.vue'

// Estado reativo booleano para controlar se a lista está visível ou oculta
const exibeLista = ref(true)

// Array reativo contendo os itens que serão renderizados na lista
const linguagens = ref(['JavaScript', 'TypeScript', 'Vue.js'])

// Função que inverte o valor booleano atual (true vira false, e vice-versa)
function alternarExibicao() {
  exibeLista.value = !exibeLista.value
}
</script>

<template>
  <section class="card">
    <h2>2. Renderização declarativa e diretivas</h2>    
    
    <!-- 
      Componente CustomButton dinâmico:
      - Utiliza data binding (:rotulo) para mudar o texto do botão com base no estado de 'exibeLista'.
      - Escuta o evento customizado (@clicado) para executar a função 'alternarExibicao'.
    -->
    <CustomButton 
      :rotulo="exibeLista ? 'Ocultar Lista' : 'Mostrar Lista'" 
      @clicado="alternarExibicao" 
    />

    <!-- 
      Diretiva v-if:
      Adiciona ou remove o elemento <ul> do DOM condicionalmente com base no valor de 'exibeLista'.
    -->
    <ul v-if="exibeLista">
      <!-- 
        Diretiva v-for:
        Percorre o array 'linguagens' e renderiza um elemento <li> para cada item.
        O atributo ':key' é obrigatório para ajudar o Vue a identificar os elementos unicamente.
      -->
      <li v-for="item in linguagens" :key="item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>