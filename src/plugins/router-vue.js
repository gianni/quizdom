import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('../pages/index') },
    { path: '/error', component: () => import('../pages/error') },
    { path: '*', component: () => import('../pages/error') }
]

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});
  
export default router;