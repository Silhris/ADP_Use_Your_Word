import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import Image from 'primevue/image';

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component('Image', Image);

app.mount('#app');
