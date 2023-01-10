import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // import the styles
import App from './App.vue'
//import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
  }
})

new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: true,
    }
  }),
  render: h => h(App)
}).$mount('#app')