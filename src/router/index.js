import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/homepage.vue'
import BSITView from '../views/BSITView.vue'
import BSCSView from '../views/BSCSView.vue'
import BSDMIAView from '../views/BSDMIAView.vue'
import BLISView from '../views/BLISView.vue'
import NewsEventsView from '../components/NewsEventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/program/bsit', name: 'bsit', component: BSITView },
    { path: '/program/bscs', name: 'bscs', component: BSCSView },
    { path: '/program/bsdmia', name: 'bsdmia', component: BSDMIAView },
    { path: '/program/blis', name: 'blis', component: BLISView },
    { path: '/news-events-announcements', name: 'news-events', component: NewsEventsView }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  }
})

export default router