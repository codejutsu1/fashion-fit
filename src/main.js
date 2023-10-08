import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'
import Aos from 'aos'
import 'aos/dist/aos.css'


const app = createApp(App)

app.use(router)

app.use(VueSplide)

app.use(Aos.init()) 


app.mount('#app')