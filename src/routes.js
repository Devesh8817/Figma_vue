import {createWebHistory, createRouter} from 'vue-router';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
const routes = [
    {
        name:Signup,
        path: '/',
        component: Signup
    },
    {
        name:Login,
        path: '/Login',
        component: Login
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router