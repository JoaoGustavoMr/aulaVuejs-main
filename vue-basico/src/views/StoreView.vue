<script setup>
import { useCounterStore } from '../stores/counter'
import CustomButton from '../components/CustomButton.vue'

// Inicializa a store do Pinia para gerenciar o estado global da aplicação
const store = useCounterStore()
</script>

<template>
  <section class="card">
    <h2>4. Ecossistema: Vue Router + Pinia</h2>
    
    <p>Contador global: {{ store.count }}</p>
    <p>Dobro: {{ store.doubleCount }}</p>
    
    <!-- 
      Componente CustomButton configurado para chamar a ação (action) 
      'increment' diretamente da store do Pinia ao ser clicado.
    -->
    <CustomButton 
      rotulo="Incrementar na store" 
      @clicado="store.increment" 
    />
    
    <!-- Nota informativa explicando a persistência do estado global entre as rotas -->
    <p><small>Navegue entre as abas: o valor da store é mantido.</small></p>
  </section>
</template>