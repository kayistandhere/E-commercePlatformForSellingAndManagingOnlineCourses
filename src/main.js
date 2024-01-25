import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuex from 'vuex'
import vueAxios from 'vue-axios'
import'./assets/Css/CssMain.css'

const app = createApp(App)
app.use(vueAxios , {$request : axios})
app.use(router)
app.use(vuex)
app.use(store)
app.mount('#app')
