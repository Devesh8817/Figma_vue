import {createWebHistory, createRouter} from 'vue-router';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import OtpPage from './components/OtpPage.vue';
import Pass_change_page from './components/Pass_change_page.vue'
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
    },
    {
        name:ForgotPassword,
        path: '/ForgotPassword',
        component: ForgotPassword
    },
    {
        name:OtpPage,
        path: '/OtpPage',
        component: OtpPage
    },
    {
        name:Pass_change_page,
        path:'/Pass_change_page',
        component: Pass_change_page
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router