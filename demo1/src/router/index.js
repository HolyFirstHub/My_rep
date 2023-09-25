import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        component: ()=>import('../views/Home.vue')
    },
    {
        path: '/first',
        component: ()=>import('../views/First.vue')
    },

    {
        path: '/second',
        component: ()=>import('../views/Second.vue')
    },

    {
        path: '/third',
        component: ()=>import('../views/Third.vue')
    },
    {
        path: '/forth',
        component: ()=>import('../views/Forth.vue')
    },






    {
        path: '/test',
        component: ()=>import('../views/test.vue')
    },


]

const router = new VueRouter({
    // 把常量routes放进来
    mode:'history',
    routes
})

// 导出router
export default router
