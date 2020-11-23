require('./bootstrap')
window.Vue = require('vue')
import MainNavbar from "./components/MainNavbar.vue"
import router from './router.js'
import common from './common'
import Vuetify from 'vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.mixin(common)

Vue.component('mainnavbar', require('./components/MainNavbar.vue').default)
const app = new Vue({
    vuetify : new Vuetify(),
    router, // replace routes with router
    render: h => h(MainNavbar), //indicate the App component inside render function
}).$mount("#app")