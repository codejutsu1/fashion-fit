import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        "breakpoints" : {
            640 : {
                perPage: 2,
                width: '100%',        
            },
            480: {
                perPage: 1
            }
        }
    } ).mount();
});