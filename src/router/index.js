import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      document.getElementById('app').className = '';
      document.getElementById('app').classList.toggle('theme_1');
      next();
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: (to, from, next) => {
      document.getElementById('app').className = '';
      document.getElementById('app').classList.toggle('theme_2');
      next();
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
    beforeEnter: (to, from, next) => {
      document.getElementById('app').className = '';
      document.getElementById('app').classList.toggle('theme_2');
      next();
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue'),
    beforeEnter: (to, from, next) => {
      document.getElementById('app').className = '';
      document.getElementById('app').classList.toggle('theme_2');
      next();
    }
  }
  ,
  {
    path: '/experience',
    name: 'Experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Experience.vue'),
    beforeEnter: (to, from, next) => {
      document.getElementById('app').className = '';
      document.getElementById('app').classList.toggle('theme_2');
      next();
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
