import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import CareerView from './views/CareerView.vue'
import AboutView from './views/AboutView.vue'
import TrustNoGodProjectsView from './views/projects/TrustNoGodProjectsView.vue'
import OmNomPiratesProjectView from './views/projects/OmNomPiratesProjectView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/career', component: CareerView },
  { path: '/about', component: AboutView },
  { path: '/trustnogod', component: TrustNoGodProjectsView },
  { path: '/omnompirates', component: OmNomPiratesProjectView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

createApp(App).use(router).mount('#app')