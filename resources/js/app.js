require('./bootstrap')
window.Vue = require('vue')
import App from "./App.vue"

import router from './router.js'
import { store } from './store'
import common from './common'
import Vuetify from 'vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.mixin(common)

const app = new Vue({
    vuetify : new Vuetify(),
    router, // replace routes with router
    store,
    render: h => h(App), //indicate the App component inside render function
}).$mount("#app")