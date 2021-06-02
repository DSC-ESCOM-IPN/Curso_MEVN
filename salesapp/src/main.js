import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import createI18n from './i18n'

const app = createApp(App)
app.use(ElementPlus)
app.use(createI18n)
app.mount('#app')
