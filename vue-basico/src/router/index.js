import { createRouter, createWebHistory } from 'vue-router'
import Sfc from '../views/SfcView.vue'
import Diretivas from '../views/DiretivasView.vue'
import Reatividade from '../views/ReatividadeView.vue'
import Store from '../views/StoreView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'sfc', component: Sfc },
    { path: '/diretivas', name: 'diretivas', component: Diretivas },
    { path: '/reatividade', name: 'reatividade', component: Reatividade },
    { path: '/store', name: 'store', component: Store },
  ],
})
