<script setup>
/* 
  Este arquivo serve como o layout principal da aplicação.
  Ele utiliza o Vue Router para gerenciar a navegação no lado do cliente,
  permitindo alternar entre páginas sem recarregar o navegador.
*/
</script>

<template>
  <main>
    <!-- Título principal da aplicação exibido em todas as rotas -->
    <h1>Vue.js: conceitos básicos</h1>

    <!-- 
      Menu de navegação utilizando o componente <RouterLink>.
      O atributo 'to' define a rota de destino para cada link.
    -->
    <nav class="menu">
      <RouterLink to="/">1. SFC (Single File Component)</RouterLink>
      <RouterLink to="/diretivas">2. Diretivas</RouterLink>
      <RouterLink to="/reatividade">3. Reatividade</RouterLink>
      <RouterLink to="/store">4. Pinia</RouterLink>
    </nav>

    <!-- 
      Ponto de montagem (<RouterView />):
      É aqui que o Vue Router injeta dinamicamente o componente 
      correspondente à rota ativa no momento.
    -->
    <RouterView />
  </main>
</template>

<style scoped>
/* Estilização do menu de navegação e dos links */
.menu { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
.menu a { color: var(--texto); text-decoration: none; padding: 6px 12px; border-radius: 4px; background: var(--card); }

/* Classe aplicada automaticamente pelo Vue Router ao link da página ativa */
.menu a.router-link-exact-active { background: var(--verde); color: #fff; }
</style>