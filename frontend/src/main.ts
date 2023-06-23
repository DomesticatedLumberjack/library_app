import CIcon from '@coreui/icons-vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.component('CIcon', CIcon)

app.use(pinia)
app.use(router)
app.mount('#app')