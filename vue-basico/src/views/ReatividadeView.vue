<script setup>
import { ref, reactive } from 'vue'
import CustomButton from '../components/CustomButton.vue'

// Estado reativo simples para dados primitivos (números, strings, booleanos)
const contador = ref(0)

// Estado reativo para dados complexos/estruturados (objetos)
const usuario = reactive({
  nome: 'Alice',
  idade: 25,
})

// Função para atualizar os estados reativos simultaneamente
function incrementar() {
  contador.value++ // Variáveis criadas com 'ref' exigem o uso de .value no script
  usuario.idade++  // Variáveis criadas com 'reactive' permitem alterar as propriedades diretamente
}
</script>

<template>
  <section class="card">
    <!-- Título do card sobre o sistema de reatividade do Vue -->
    <h2>3. Sistema de reatividade</h2>
    
    <!-- Exibição reativa do contador -->
    <p>Contador: {{ contador }}</p>
    
    <!-- Exibição reativa das propriedades do objeto usuário -->
    <p>Usuário: {{ usuario.nome }} ({{ usuario.idade }} anos)</p>
    
    <!-- Botão customizado que dispara a função 'incrementar' ao ser clicado -->
    <CustomButton :rotulo="'Incrementar idade e contador'" @clicado="incrementar" />
  </section>
</template>