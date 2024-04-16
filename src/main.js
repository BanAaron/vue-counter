import './assets/main.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-cyan/theme.css'
import MultiSelect from "primevue/multiselect";
import { createApp } from 'vue'
import App from './App.vue'


createApp(App)
    .use(PrimeVue)
    .component('MultiSelect', MultiSelect)
    .mount('#app')
