import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(VueSplide)


// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide('.splide1', {
//         breakpoints : {
//             640 : {
//                 perPage: 1,
//                 width: '100%',        
//             },
//         }
//     } ).mount();

//     new Splide('.splide2', {
//         mediaQuery: 'min',
//         breakpoints: {
//               640: {
//                   destroy: true,
//               },
//         }
//     } ).mount();
// });