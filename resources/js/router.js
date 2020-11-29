import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/pages/Home';
import Dashboard from './admin/pages/Dashboard';
import Login from './admin/Login';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/admin', 
        name: 'Dashboard', 
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/login', 
        name: 'Login', 
        component: Login
    }
];

const router = new Router({
    mode: 'history', 
    base: process.env.BASE_URL, 
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth) {
//         const authUser = JSON.parse(window.localStorage.getItem('authUser'))
//         if (authUser && authUser.access_token) {
//             next()
//         } else {
//             next({ name: 'Home' })
//         }
//     }
//     next()
// })

export default router;