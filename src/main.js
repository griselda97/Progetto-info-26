import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'
import {config} from './components/firebaseConfig'
import {store} from './store'
import router from './router'




let app;
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
    if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
      
    }).$mount("#app");
  }

});

