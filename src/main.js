import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from 'primevue/button'
import Card from 'primevue/card'

const app = createApp(App)

app.use(router)

app.use(PrimeVue)
app.component('Button', Button)
app.component('Card', Card)

app.mount('#app')
