import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const process = require('child_process');

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

//exec('cat ./assets/Manifest_Addon-resources.assets-290.txt'), (err, stdout, stderr) => {
/*
process.exec('ifconfig'), (err, stdout, stderr) => {
    console.log('err :' + err);
    console.log('stdout :' + stdout);
    console.log('stderr :' + stderr);
}
*/
console.log(process);

createApp(App).use(router).mount('#app')
