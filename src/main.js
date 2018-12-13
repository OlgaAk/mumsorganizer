import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import { store } from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyA_j-FonahXaEu85n6LZAOUwOmpYyjwSuo",
      authDomain: "mumsorganizer.firebaseapp.com",
      databaseURL: "https://mumsorganizer.firebaseio.com",
      projectId: "mumsorganizer",
      storageBucket: "mumsorganizer.appspot.com",
      messagingSenderId: "9047693151"
    })
  }
}).$mount('#app')
