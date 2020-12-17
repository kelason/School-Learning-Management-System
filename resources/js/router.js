import Vue from 'vue';
import Router from 'vue-router';
// Main App Pages
import Home from './components/pages/Home';
// Admin pages
import Dashboard from './admin/pages/Dashboard';
import Login from './admin/Login';
import Register from './admin/Register';
// Register Pages
import Instructor from './admin/pages/register/Instructor';
import Student from './admin/pages/register/Student';
import Parent from './admin/pages/register/Parent';

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
    },
    {
        path: '/user/:id', 
        component: Register,
        children: [
            {
                path: 'instructor',
                component: Instructor
            },
            {
                path: 'student',
                component: Student
            },
            {
                path: 'parent',
                component: Parent
            }
        ]
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