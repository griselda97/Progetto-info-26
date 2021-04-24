import Vue from 'vue';
import VueRouter from 'vue-router'
import Cinema from './components/Cinema'
import Teatro from './components/Teatro'
import Concerti from './components/Concerti'
import Informazioni from './components/Informazioni'
import Carrello from './components/Carrello'
import CheckOut from './components/CheckOut'
import Carousel from './components/Carousel'
import Spettacolo from './components/Spettacolo'
import Login from './components/Login'
import Register from './components/Register'
import firebase from 'firebase'



Vue.use(VueRouter)
Vue.component('Carousel', Carousel)
const routers = [{
    name: 'Cinema',
    path: '/',
    component: Cinema
  },
  {
    name: 'Spettacolo',
    path: '/Spettacolo/:Pid',
    component: Spettacolo
  },
  {
    name: 'Teatro',
    path: '/Teatro',
    component: Teatro
  },
  {
    name: 'Concerti',
    path: '/Concerti',
    component: Concerti
  },
  {
    name: 'Carrello',
    path: '/Carrello/',
    component: Carrello,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'CheckOut',
    path: '/CheckOut',
    component: CheckOut,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    name: 'Informazioni',
    path: '/Informazioni',
    component: Informazioni,
  },
  {
    name: 'Register',
    path: '/Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  ]
  
  const router = new VueRouter({ mode: 'history', routes: routers })


  //controlli per la visualizzazione dei componenti che richiedono il login
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {//controlla se richiede l'autore
      if (!firebase.auth().currentUser) {//controlla che qualcuno non sia loggato
        next({//manda al login
          path: '/Login',
          query: {
            redirect: to.fullPath
          }
        });
      } else {//procede facendo la route
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (firebase.auth().currentUser) {//controlla che qualcuno sia loggato
        next({//manda alla home
          path: '/',
          query: {
            redirect: to.fullPath
          }
        });
      } else {//procede facendo la route
        next();
      }
    } else {
      next();
    }
  });
  
  
  export default router;