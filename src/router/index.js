import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaceOutlineViewer from '../views/FaceOutlineViewer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/faceoutline',
      name: 'faceoutline',
      component: FaceOutlineViewer
    }
  ]
})

export default router
