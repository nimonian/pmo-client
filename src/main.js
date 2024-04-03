import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
import router from './router'
import draggable from 'vuedraggable'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.component('draggable', draggable)
app.component('Button', Button)
app.component('Card', Card)

app.mount('#app')
