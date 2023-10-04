import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';

// Un thème PrimeVue
import "primevue/resources/themes/lara-light-indigo/theme.css";
// Le CSS principal de PrimeVue
import "primevue/resources/primevue.min.css";

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component('Image', Image);
app.component('InputText', InputText);

app.mount('#app');
