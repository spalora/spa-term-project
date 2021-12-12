import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

/*  Here goes all the componenets along with name and path. Also for landing page : Home, using theme_1 , rest of pages are theme_2 . Both  of these themes are defined in App.vue styles section.
.theme_1 {
  background: linear-gradient(90deg, #1d1c12 10%, #fdcd3b 90%);
  min-height: 30rem;
}

.theme_2 {
  background: #1d1c12;
  min-height: 30rem;
}
 */
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
    component: () => import( '../views/About.vue'),
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
    // this generates a separate chunk  for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Contact.vue'),
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
    // this generates a separate chunk  for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Skills.vue'),
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
    // this generates a separate chunk  for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Experience.vue'),
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
