<script setup>
/* 
  Definição das propriedades (props) que este componente recebe do componente pai.
  Neste caso, ele espera receber uma propriedade chamada 'rotulo' do tipo String.
*/
defineProps({
  rotulo: String,
})

/* 
  Definição dos eventos customizados que este componente pode emitir de volta para o pai.
  Aqui registramos o evento 'clicado'.
*/
const emit = defineEmits(['clicado'])
</script>

<template>
  <button class="btn-custom" @click="emit('clicado')">
    {{ rotulo }}
  </button>
</template>

<style scoped>
.btn-custom {
  background-color: #42b883;
  color: white;
  padding: 8px 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}
</style>