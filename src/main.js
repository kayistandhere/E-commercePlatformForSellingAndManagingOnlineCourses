import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuex from 'vuex'
import vueAxios from 'vue-axios'
import'./assets/Css/CssMain.css'
import vue3GoogleLogin from 'vue3-google-login'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const app = createApp(App)

// const firebaseConfig = {
//     apiKey: "AIzaSyCv3CnzvX91EzHPO5kvP3RVMTtLo2_gNos",
//     authDomain: "vedu-5ed2d.firebaseapp.com",
//     projectId: "vedu-5ed2d",
//     storageBucket: "vedu-5ed2d.appspot.com",
//     messagingSenderId: "570030967429",
//     appId: "1:570030967429:web:d7682253edca9a915df7ec",
//     measurementId: "G-P5T1VK96KY"
//   };
  
//   // Initialize Firebase
// app.initializeApp(firebaseConfig);

app.use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_CLIENT_ID_KEY,
    // clientId : "942845050866-3mhpjrmr2icagmdeu1f9011og01q11da.apps.googleusercontent.com"
  })
app.use(vueAxios , {$request : axios})
app.use(router)
app.use(vuex)
app.use(store)
app.mount('#app')
