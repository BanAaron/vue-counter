import './assets/main.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-cyan/theme.css'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import {createApp} from 'vue'
import App from './App.vue'


createApp(App)
  .use(PrimeVue)
  .component('Button', Button)
  .component('InputNumber', InputNumber)
  .mount('#app')
