# Vue.js: conceitos básicos

Projeto simples de estudo que demonstra os principais recursos do Vue 3 (Composition API com `<script setup>`), com uma aba para cada conceito.

## Conceitos demonstrados

| Aba | Conceito | Onde ver no código |
|-----|----------|--------------------|
| 1. SFC | Single File Component, props e emits | `src/components/CustomButton.vue`, `src/views/SfcView.vue` |
| 2. Diretivas | Interpolação `{{ }}`, `v-if`, `v-for`, `@click` | `src/views/DiretivasView.vue` |
| 3. Reatividade | `ref()` e `reactive()` | `src/views/ReatividadeView.vue` |
| 4. Ecossistema | Vue Router e Pinia | `src/router/index.js`, `src/stores/counter.js`, `src/views/StoreView.vue` |

## Tecnologias

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# entre na pasta do projeto
cd vue-basico

# instale as dependências
npm install

# inicie o servidor de desenvolvimento
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```
vue-basico/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js            # cria o app e registra Pinia e Router
    ├── App.vue            # menu de navegação e <RouterView>
    ├── style.css
    ├── components/
    │   └── CustomButton.vue
    ├── router/
    │   └── index.js
    ├── stores/
    │   └── counter.js
    └── views/
        ├── SfcView.vue
        ├── DiretivasView.vue
        ├── ReatividadeView.vue
        └── StoreView.vue
```