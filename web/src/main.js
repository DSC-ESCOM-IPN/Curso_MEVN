
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import router from './router'
import createI18n from './i18n'
import VueCookies from 'vue3-cookies'

export const app = createApp(App)
    .use(ElementPlus)
    .use(createI18n)
    .use(store)
    .use(router)
    .use(VueCookies, {
        expireTimes: "30d",
        path: "/",
        domain: "",
        secure: true,
        sameSite: "None"
    }).mount('#app')
